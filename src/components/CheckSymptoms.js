import { useState, useEffect } from 'react';

export default function CheckSymptoms() {
    const [symptoms, setSymptoms] = useState('');

    useEffect(() => {
        if (symptoms) {
            console.log('Entered symptoms: ${symptoms}');
        }
    }, [symptoms]);

    return (
        <div>
            <h2>Please enter your symptoms</h2>
            <input 
              type="text"
              placeholder="E.g., Fever, Cough, etc."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              />
            <p>You entered: {symptoms}</p>
        </div>
    );
}