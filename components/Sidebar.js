import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 h-full text-black fixed flex items-center justify-center">
      <nav className="flex flex-col space-y-4">
        <Link href="/gallery" className="hover:text-gray-600">
          Gallery
        </Link>
        <Link href="/products" className="hover:text-gray-600">
          Products
        </Link>
        <Link href="/information" className="hover:text-gray-600">
          Information
        </Link>
      </nav>
    </aside>
  );
} 