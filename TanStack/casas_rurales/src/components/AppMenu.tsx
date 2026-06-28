import { Link } from '@tanstack/react-router';

export function AppMenu() {
  return (
    <>
      <nav className="flex items-center gap-6">
        <Link to="/" className="nav-link">
          Inicio
        </Link>
      </nav>
    </>
  );
}
