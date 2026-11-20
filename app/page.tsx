'use client';

import { ExampleList } from '@/features/example';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Layers, Zap, Database } from 'lucide-react';

export default function Home() {
  const { user, setUser } = useAppStore();

  const handleSetUser = () => {
    setUser({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Next.js Enterprise Stack
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Production-ready architecture with TypeScript, React Query, Zustand, and Shadcn UI
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-xl">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle>Feature-Based Architecture</CardTitle>
              <CardDescription>
                Organized by features for maximum scalability and maintainability
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-cyan-500 transition-all hover:shadow-xl">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <CardTitle>React Query</CardTitle>
              <CardDescription>
                Powerful data synchronization with caching and automatic refetching
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-teal-500 transition-all hover:shadow-xl">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <CardTitle>Zustand State</CardTitle>
              <CardDescription>
                Lightweight and intuitive state management with persistence
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="mb-12 border-2 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">State Management Demo</CardTitle>
            <CardDescription>
              Test Zustand store with persistent state
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {user ? (
              <div className="p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-200 dark:border-green-800">
                <p className="text-lg font-semibold text-green-900 dark:text-green-100">
                  Welcome, {user.name}!
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  {user.email}
                </p>
              </div>
            ) : (
              <Button
                onClick={handleSetUser}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg"
              >
                Load User from Store
              </Button>
            )}
          </CardContent>
        </Card>

        <Card className="border-2 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">React Query Demo</CardTitle>
            <CardDescription>
              Example items fetched with automatic caching and refetching
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ExampleList />
          </CardContent>
        </Card>

        <footer className="mt-16 text-center">
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg">
            <span className="text-lg">Well configured</span>
          </div>
          <p className="mt-4 text-muted-foreground">
            Ready for production • Scalable • Type-safe
          </p>
        </footer>
      </div>
    </div>
  );
}
