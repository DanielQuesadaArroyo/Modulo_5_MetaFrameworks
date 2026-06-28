import * as React from 'react';
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { AppHeader } from '../components/AppHeader';
import { AppFooter } from '../components/AppFooter';
import '../index.css';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { title: 'Casas rurales' },
    ],
    links: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/home-logo.png',
      },
    ],
  }),
  shellComponent: RootComponent,
});

function RootComponent({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <AppHeader />
        <main>{children}</main>
        <AppFooter />
        <TanStackRouterDevtools />
        <Scripts />
      </body>
    </html>
  );
}
