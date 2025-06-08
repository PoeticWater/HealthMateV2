import Link from 'next/link';

export default function Home() {
  return (
    <div>

      <h1>Welcome to HealthMate</h1>
      <p>Your AI symptom checker</p>
      <p>Please select any of the two options given below</p>

      <nav>
        <Link href="/about">About Us</Link>

        <Link href="/contact">Contact Us</Link>
      </nav>

    </div>
  );
}
