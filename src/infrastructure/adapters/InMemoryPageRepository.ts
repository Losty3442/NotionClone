import { IPageRepository } from '../../domain/repositories/IPageRepository';
import { Page } from '../../domain/entities/types';

export class InMemoryPageRepository implements IPageRepository {
  private pages: Page[] = [];

  async getPagesByUser(userId: string): Promise<Page[]> {
    return this.pages.filter(p => p.userId === userId && !p.isArchived);
  }

  async getPageById(pageId: string): Promise<Page | null> {
    return this.pages.find(p => p.id === pageId) || null;
  }

  async createPage(pageData: Omit<Page, 'id' | 'createdAt' | 'updatedAt'>): Promise<Page> {
    const newPage: Page = {
      ...pageData,
      id: Math.random().toString(36).substring(7),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.pages.push(newPage);
    return newPage;
  }

  async updatePage(pageId: string, updates: Partial<Omit<Page, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Page> {
    const index = this.pages.findIndex(p => p.id === pageId);
    if (index === -1) throw new Error('Not found');
    
    this.pages[index] = {
      ...this.pages[index],
      ...updates,
      updatedAt: new Date(),
    };
    return this.pages[index];
  }

  async deletePage(pageId: string): Promise<void> {
    const index = this.pages.findIndex(p => p.id === pageId);
    if (index > -1) {
      this.pages[index].isArchived = true;
    }
  }
}
