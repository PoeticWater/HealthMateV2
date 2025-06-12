import { useState } from 'react';
import Link from 'next/link';

export default function AskAIPage() {

    const [ques, setQues] = useState('');
    const [resp, setResp] = useState('');
    const [load, setLoad] = useState(false);

    async function handleAskAI(e) {
        e.preventDefault();
        setLoad(true);
        setResp('');

        const res = await fetch('/api/askai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: ques }),
        });

        const data = await res.json();
        setResp(data.answer);
        setLoad(false);
    }

    return (
        <div style={{ padding: 20, fontFamily: 'Arial' }}>
            <h1>Ask HealthMate AI</h1>

            <form onSubmit={handleAskAI}>
                <input
                    type="text"
                    placeholder="Ask your health-related question"
                    value={ques}
                    onChange={(e) => setQues(e.target.value)}
                    style={{ width: '300px', padding: '10px', marginBottom: '10px' }}
                />
                <button type="submit" style={{ padding: '10px 20px' }}>
                    Submit
                </button>
            </form>

            {load && <p>Loading...</p>}

            {resp && (
                <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
                    <h2>HealthMate AI says:</h2>
                    <p>{resp}</p>
                </div>
            )}

            <Link href="/">
                <button style={{ marginTop: '20px' }}>Back to Home</button>        
            </Link>
        </div>
    );
}