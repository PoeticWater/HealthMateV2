import Link from 'next/link';

export default function Home() {
  return (
    <div>

      <h1>Welcome to HealthMate</h1>

      <nav>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>

    </div>
  );
}
