import Link from 'next/link';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export default function Header({ name }) {
  return (
    <header className="py-6">
      <h1 className="text-4xl text-center">
        <Link href="/" className={`${raleway.className} hover:underline`}>
          {name}
        </Link>
      </h1>
    </header>
  );
}
