import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-4 left-4 z-50">
      <Link
        href="/"
        className="w-12 h-12 bg-black dark:bg-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <span className="text-white dark:text-black text-xl">🎵</span>
      </Link>
    </nav>
  );
}
