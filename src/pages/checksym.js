import CheckSymptoms from '@/components/CheckSymptoms';
import Link from 'next/link';

export default function CheckPage() {
    return (
        <div>
            <h1>Symptom Checker</h1>
            <CheckSymptoms />
            <br />
            <Link href="/">
                <button>Back to Home Page</button>
            </Link>
        </div>
    );
}