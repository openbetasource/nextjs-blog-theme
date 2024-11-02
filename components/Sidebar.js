import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-gray-800 text-white fixed">
      <nav className="flex flex-col p-4">
        <Link href="/gallery" className="mb-4 hover:text-gray-400">
          Gallery
        </Link>
        <Link href="/products" className="mb-4 hover:text-gray-400">
          Products
        </Link>
        <Link href="/information" className="mb-4 hover:text-gray-400">
          Information
        </Link>
      </nav>
    </aside>
  );
} 