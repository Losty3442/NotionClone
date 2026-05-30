import { IPageRepository } from '../../domain/repositories/IPageRepository';
import { Page } from '../../domain/entities/types';
import { supabase } from '../services/supabaseClient';

export class SupabasePageRepository implements IPageRepository {
  async getPagesByUser(userId: string): Promise<Page[]> {
    const { data, error } = await supabase
      .from('pages')
      .select('*')
      .eq('userId', userId)
      .eq('isArchived', false);

    if (error) throw new Error(error.message);
    return data as Page[];
  }

  async getPageById(pageId: string): Promise<Page | null> {
    const { data, error } = await supabase
      .from('pages')
      .select('*')
      .eq('id', pageId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null; // No results
      throw new Error(error.message);
    }
    return data as Page;
  }

  async createPage(pageData: Omit<Page, 'id' | 'createdAt' | 'updatedAt'>): Promise<Page> {
    const { data, error } = await supabase
      .from('pages')
      .insert([pageData])
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data as Page;
  }

  async updatePage(pageId: string, updates: Partial<Omit<Page, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Page> {
    const { data, error } = await supabase
      .from('pages')
      .update(updates)
      .eq('id', pageId)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data as Page;
  }

  async deletePage(pageId: string): Promise<void> {
    // Soft delete
    const { error } = await supabase
      .from('pages')
      .update({ isArchived: true })
      .eq('id', pageId);

    if (error) throw new Error(error.message);
  }
}
