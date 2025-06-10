import { useState, useEffect, use} from 'react';

export default function HealithTips() {
    
    const tips = [
        "Stay hydrated by drinking plenty of water.",
        "Get 8 hours of sleep every night.",
        "Eat a balanced diet rich in fruits and vegetables.",        
        "Get regular exercise to maintain physical health.",
        "Practice good hygiene, such as washing hands frequently.",
        "Ensure you get enough sleep each night.",
        "Manage stress through relaxation techniques or hobbies.",
        "Consult a doctor if your symptoms persist or worsen."
    ];
    const [tip, setTips] = useState('');

    useEffect(() => {
        const random = Math.floor(Math.random() * tips.length);
        setTips(tips[random]);
    }, []);

    return (
        <div>
            <h2>Today's Health Tips</h2>
            <p>{tip}</p>
        </div>
    );
}