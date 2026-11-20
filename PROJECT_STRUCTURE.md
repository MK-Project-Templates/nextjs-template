# Next.js Enterprise Project Structure

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode enabled)
- **TailwindCSS** (utility-first styling)
- **React Query (TanStack Query)** (server state management)
- **Zustand** (client state management with persistence)
- **Axios** (HTTP client with interceptors)
- **Shadcn UI** (component library)
- **Supabase** (database & authentication)

## Folder Structure

```
project/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   └── example/
│   │       └── route.ts          # Example API endpoint
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
│
├── features/                     # Feature-based modules
│   └── example/
│       ├── api/
│       │   └── queries.ts        # React Query hooks
│       ├── components/
│       │   └── example-list.tsx  # Feature components
│       └── index.ts              # Feature exports
│
├── lib/                          # Core utilities
│   ├── api/
│   │   └── client.ts             # Axios instance with interceptors
│   ├── query/
│   │   └── provider.tsx          # React Query provider
│   ├── store/
│   │   └── index.ts              # Zustand store
│   ├── supabase/
│   │   └── client.ts             # Supabase client
│   └── utils.ts                  # Utility functions
│
├── components/
│   └── ui/                       # Shadcn UI components
│
└── hooks/                        # Custom React hooks
```

## Configuration Files

### React Query Provider (`lib/query/provider.tsx`)
- Wraps app with QueryClientProvider
- Configures default query options
- Enables caching and automatic refetching

### Axios Client (`lib/api/client.ts`)
- Pre-configured HTTP client
- Request/response interceptors
- Token management
- Error handling

### Zustand Store (`lib/store/index.ts`)
- Lightweight state management
- Persistence with localStorage
- DevTools integration
- Type-safe actions

### Supabase Client (`lib/supabase/client.ts`)
- Database connection
- Authentication ready
- Type-safe queries

## Features

### Feature-Based Architecture
Each feature has its own folder with:
- `api/` - React Query hooks and API calls
- `components/` - Feature-specific components
- `types/` - TypeScript interfaces
- `index.ts` - Public API exports

### Example Feature Structure
```typescript
features/example/
├── api/queries.ts         // useExampleItems, useCreateExampleItem
├── components/
│   └── example-list.tsx   // ExampleList component
└── index.ts               // Export all public APIs
```

## Key Configurations

### TypeScript
- Strict mode enabled
- Path aliases (`@/*` maps to project root)
- Incremental compilation

### React Query
- 60-second stale time
- Disabled window focus refetch
- Single retry on failure
- Automatic cache invalidation

### Zustand
- Persistent state with localStorage
- DevTools support
- Type-safe store definition

## Usage Examples

### API Calls with React Query
```typescript
import { useExampleItems } from '@/features/example';

const { data, isLoading } = useExampleItems();
```

### State Management with Zustand
```typescript
import { useAppStore } from '@/lib/store';

const { user, setUser } = useAppStore();
```

### API Client
```typescript
import apiClient from '@/lib/api/client';

const response = await apiClient.get('/endpoint');
```

## Environment Variables

Create `.env.local` with:
```
NEXT_PUBLIC_API_URL=/api
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Build & Deploy

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
npm run typecheck    # TypeScript check
```

## Scalability Features

1. **Feature-based organization** - Easy to add/remove features
2. **Type safety** - Full TypeScript support
3. **Code splitting** - Automatic by Next.js
4. **Caching strategy** - React Query handles it
5. **State persistence** - Zustand with localStorage
6. **API interceptors** - Centralized auth & error handling
7. **Component library** - Shadcn UI for consistency
8. **Database ready** - Supabase integration

## Best Practices

- Keep features isolated and self-contained
- Use React Query for server state
- Use Zustand for client state
- Leverage TypeScript for type safety
- Follow component composition patterns
- Implement proper error boundaries
- Use server components where possible
- Optimize with code splitting
