import { AppMenu } from './AppMenu';

export function AppHeader() {
  return (
    <>
      <header className="border-b border-neutral-800 bg-black/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 sm:px-8">
          <div className="flex items-center justify-left gap-16">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-white">
                Casas Rurales
              </h1>
            </div>
            <AppMenu />
          </div>
        </div>
      </header>
    </>
  );
}
