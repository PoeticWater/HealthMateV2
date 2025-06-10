import Link from 'next/link';

export default function Home() {
  return (

    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>

      <h1>Welcome to HealthMate</h1>
      <p>Your AI symptom checker</p>
      <p>Please select an option:</p>

        <Link href="/checksym">
          <button>Check Symptoms</button>
        </Link>

        <Link href="/healtips">
          <button>Health Tips</button>
        </Link>

    </div>
  );
}
