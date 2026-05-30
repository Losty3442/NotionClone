# Planificación del MVP: App de Productividad (Estilo Notion)

## 1. Arquitectura de Directorios (Hexagonal)

La aplicación seguirá estrictamente una arquitectura hexagonal para separar la lógica de negocio de la interfaz de usuario y los servicios externos.

```text
src/
├── domain/                  # Entidades, tipos e interfaces del dominio puro
│   ├── entities/            # Modelos (ej. Page, Block, User)
│   └── repositories/        # Contratos (ej. IPageRepository, IAuthService)
│
├── application/             # Casos de uso y manejo de estado
│   ├── useCases/            # Lógica de negocio (ej. CreatePage, UpdateBlock)
│   └── store/               # Estado global (Zustand)
│
└── infrastructure/          # Adaptadores y presentación (Framework/Next.js)
    ├── adapters/            # Implementación de repositorios (ej. SupabasePageRepository)
    ├── services/            # Servicios de terceros (ej. SupabaseAuthService)
    └── ui/                  # Capa de presentación
        ├── app/             # Next.js App Router (Páginas y Layouts)
        ├── components/      # Componentes de React puros y reutilizables
        │   ├── common/      # Botones, Inputs, Modales
        │   ├── editor/      # Componentes del editor de texto
        │   └── layout/      # Sidebar, Topbar
        └── styles/          # Configuración global de estilos (Tailwind)
```

## 2. Stack Tecnológico

-   **Framework:** Next.js 14+ (App Router)
-   **Lenguaje:** TypeScript (Tipado estricto)
-   **Estilos:** Tailwind CSS (con utilidades como `clsx` y `tailwind-merge`) y componentes base de **shadcn/ui** para accesibilidad y rapidez.
-   **Estado Global:** Zustand (ligero, ideal para la sincronización rápida del editor y el árbol de páginas).
-   **Backend & Base de Datos:** Supabase (PostgreSQL, Autenticación y Row Level Security).
-   **Editor de Texto:** BlockNote o TipTap (Librerías especializadas en editores basados en bloques tipo Notion).
-   **Despliegue:** Vercel.

## 3. Funcionalidades del MVP

1.  **Autenticación y Usuarios:**
    -   Registro e inicio de sesión con correo/contraseña o GitHub (Supabase Auth).
    -   Sesiones protegidas.
2.  **Barra Lateral (Sidebar):**
    -   Árbol de páginas anidadas (Páginas padre e hijas).
    -   Navegación fluida.
    -   Crear y eliminar páginas directamente desde el árbol.
3.  **Editor de Documentos (Core):**
    -   Editor sin fricción basado en bloques.
    -   Soporte para texto plano, encabezados (H1, H2, H3) y listas.
    -   Autoguardado.
4.  **Sincronización:**
    -   Lectura y escritura en la base de datos de PostgreSQL (Supabase) a través de la capa de infraestructura.

---

> **Preguntas Abiertas para el Usuario:**
> 1. ¿Estás de acuerdo con el uso de **shadcn/ui** para los componentes base y acelerar el desarrollo, o prefieres que hagamos los estilos desde cero con Tailwind puro?
> 2. Para el editor, recomiendo **BlockNote** ya que está construido sobre TipTap y ofrece una experiencia out-of-the-box muy similar a Notion. ¿Te parece bien?

Espero tu confirmación para dar por aprobada la FASE 2 y pasar a la FASE 3 (Ejecución).
