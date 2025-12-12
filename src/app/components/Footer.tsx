import Link from 'next/link';

import { metadata } from '../metadata';

export default function Footer() {
  const { legal } = metadata;

  return (
    <footer className="bg-white/80 dark:bg-black/80 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-800/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-sm text-gray-600 dark:text-gray-400">{legal.copyright}</div>

          <div className="flex items-center space-x-4">
            <Link
              href="/privacy"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
