import Link from 'next/link';

export default function Home() {
  return (

    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>

      <h1>Welcome to HealthMate</h1>
      <p>Your AI symptom checker</p>

      <h2>Features:</h2>

        <Link href="/checksym">
          <button style={{ margin: '10px' }}>Check Symptoms</button>
        </Link>

        <Link href="/healtips">
          <button style={{ margin: '10px' }}>Health Tips</button>
        </Link>

        <Link href="/askai">
          <button style={{ margin: '10px' }}>Ask HealthMate AI (Ass-4)</button>
        </Link>

    </div>
  );
}
