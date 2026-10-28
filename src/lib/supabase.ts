import { createClient } from '@supabase/supabase-js';
import { StudioOptionItem } from '../data/imageStudioData';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://vqezqrqlxxdrldqldphc.supabase.co';
const supabaseKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_AfmAElDlvsnaCVqIJtTqXg_4kwctWii';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface SupabaseCustomItemRow {
  id: string;
  category: string;
  label: string;
  badge?: string;
  short_desc?: string;
  prompt_es: string;
  prompt_en: string;
  is_custom?: boolean;
  created_at?: string;
}

export type CustomCategoryKey =
  | 'photoTypes'
  | 'shots'
  | 'lenses'
  | 'lightings'
  | 'packagings'
  | 'surfaces'
  | 'ingredients'
  | 'accompaniments'
  | 'moods';

export interface CustomItemsMap {
  photoTypes: any[];
  shots: StudioOptionItem[];
  lenses: StudioOptionItem[];
  lightings: StudioOptionItem[];
  packagings: StudioOptionItem[];
  surfaces: StudioOptionItem[];
  ingredients: StudioOptionItem[];
  accompaniments: StudioOptionItem[];
  moods: StudioOptionItem[];
}

/**
 * Fetch all custom items from Supabase grouped by category.
 * If the table does not exist or fails, returns null.
 */
export async function fetchCustomItemsFromSupabase(): Promise<Partial<CustomItemsMap> | null> {
  try {
    const { data, error } = await supabase
      .from('studio_custom_items')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      console.warn('[Supabase] Warning fetching custom items:', error.message);
      return null;
    }

    if (!data) return null;

    const map: Partial<CustomItemsMap> = {
      photoTypes: [],
      shots: [],
      lenses: [],
      lightings: [],
      packagings: [],
      surfaces: [],
      ingredients: [],
      moods: [],
    };

    for (const row of data as SupabaseCustomItemRow[]) {
      const item: StudioOptionItem = {
        id: row.id,
        label: row.label,
        badge: row.badge || 'Propio',
        shortDesc: row.short_desc || '',
        promptEs: row.prompt_es,
        promptEn: row.prompt_en,
        isCustom: true,
      };

      const cat = row.category as CustomCategoryKey;
      if (map[cat]) {
        (map[cat] as StudioOptionItem[]).push(item);
      }
    }

    return map;
  } catch (err) {
    console.warn('[Supabase] Network or unexpected error:', err);
    return null;
  }
}

/**
 * Save a custom item to Supabase.
 */
export async function saveCustomItemToSupabase(
  category: CustomCategoryKey,
  item: StudioOptionItem
): Promise<boolean> {
  try {
    const row: SupabaseCustomItemRow = {
      id: item.id,
      category,
      label: item.label,
      badge: item.badge || 'Propio',
      short_desc: item.shortDesc || '',
      prompt_es: item.promptEs,
      prompt_en: item.promptEn,
      is_custom: true,
    };

    const { error } = await supabase.from('studio_custom_items').upsert(row);

    if (error) {
      console.warn('[Supabase] Error saving custom item:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.warn('[Supabase] Save error:', err);
    return false;
  }
}

/**
 * Delete a custom item from Supabase by ID.
 */
export async function deleteCustomItemFromSupabase(id: string): Promise<boolean> {
  try {
    const { error } = await supabase.from('studio_custom_items').delete().eq('id', id);
    if (error) {
      console.warn('[Supabase] Error deleting custom item:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.warn('[Supabase] Delete error:', err);
    return false;
  }
}

/**
 * Quick status check: determines if Supabase is reachable and if table exists.
 */
export async function checkSupabaseStatus(): Promise<'connected' | 'table_missing' | 'error'> {
  try {
    const { error } = await supabase.from('studio_custom_items').select('id').limit(1);
    if (!error) return 'connected';
    if (error.code === 'PGRST205' || error.message?.includes('schema cache')) {
      return 'table_missing';
    }
    return 'error';
  } catch {
    return 'error';
  }
}
