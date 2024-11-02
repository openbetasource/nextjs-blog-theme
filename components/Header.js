import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ['latin'] });

export default function Header({ name }) {
  return (
    <header className="py-6">
      <h1 className={`${orbitron.className} text-4xl text-center`}>
        {name}
      </h1>
    </header>
  );
}
