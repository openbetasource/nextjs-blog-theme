import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 h-full text-white fixed flex items-center justify-center">
      <nav className="flex flex-col space-y-4">
        <Link href="/gallery" className="hover:text-gray-300">
          Gallery
        </Link>
        <Link href="/products" className="hover:text-gray-300">
          Products
        </Link>
        <Link href="/information" className="hover:text-gray-300">
          Information
        </Link>
      </nav>
    </aside>
  );
} 