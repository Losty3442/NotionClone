import { User } from '../entities/types';

export interface IAuthRepository {
  /**
   * Obtiene el usuario actual autenticado
   */
  getCurrentUser(): Promise<User | null>;

  /**
   * Inicia sesión con GitHub o proveedor OAuth
   */
  signInWithOAuth(provider: string): Promise<void>;

  /**
   * Cierra la sesión actual
   */
  signOut(): Promise<void>;
}
