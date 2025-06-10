import HealthTips from '@/components/HealthTips';
import Link from 'next/link';

export default function TipsPage() {
    return (
        <div>
            <h1>Health Tips</h1>
            <HealthTips />
            <br />
            <Link href="/">
                <button>Back to Home Page</button>
            </Link>
        </div>
    );
}