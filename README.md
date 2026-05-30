<div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion Logo" width="80" height="80">
  <h3 align="center">Notion Clone MVP</h3>
  <p align="center">
    Una aplicación web de productividad y organización inspirada en Notion, construida con Clean Code y Arquitectura Hexagonal.
    <br />
    <br />
    <a href="https://notion-clone-7vse.vercel.app/" target="_blank"><strong>🚀 Ver Demo en Vivo</strong></a>
  </p>
</div>

---

## ✨ Características Principales

*   **Editor basado en Bloques:** Edición de texto fluida sin fricción (soporte para títulos, listas y texto plano) usando [BlockNote](https://www.blocknotejs.org/).
*   **Gestión de Páginas:** Navegación en árbol dinámico mediante una barra lateral estilo Notion.
*   **Optimización de Estado:** Sincronización ultrarrápida del estado de la UI y del editor usando **Zustand**.
*   **Arquitectura Hexagonal:** Separación estricta entre Dominio, Casos de Uso y Capa de Infraestructura.
*   **Patrones de Clean Code:** Archivos limitados a < 150 líneas, componentes puros, principios SOLID.

## 🛠️ Stack Tecnológico

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## 🏗️ Arquitectura

El proyecto sigue un patrón estricto de **Arquitectura Hexagonal**:

```text
src/
├── domain/                  # Entidades (User, Page, Block) y Contratos (Repositorios)
├── application/             # Casos de uso y Store global (Zustand)
└── infrastructure/          
    ├── adapters/            # Implementaciones de repositorios (ej. InMemory, Supabase)
    ├── services/            # Clientes externos (Supabase Client)
    └── ui/                  # Componentes puros de React (Tailwind, Editor) y Next.js App Router
```

## 🚀 Empezando (Desarrollo Local)

Sigue estos pasos para levantar el entorno de desarrollo en tu máquina local.

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Losty3442/NotionClone.git
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   Navega a [http://localhost:3000](http://localhost:3000) para ver el resultado.

*(Nota: Actualmente el MVP está configurado con un repositorio en memoria para funcionar inmediatamente sin requerir claves de bases de datos. Para conectar Supabase, simplemente intercambia el `InMemoryPageRepository` por el `SupabasePageRepository` en la UI).*

---
<div align="center">
  Hecho con ❤️ usando Next.js App Router
</div>
