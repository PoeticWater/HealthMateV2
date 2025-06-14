import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function UploadSymptoms() {
  const [symptom, setSymptom] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "symptoms"), { symptom });
      setMessage("Symptom saved to Firebase!");
    } catch (err) {
      setMessage("Error saving symptom.");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Symptom Input</h2>
      <input
        type="text"
        placeholder="Enter a symptom"
        value={symptom}
        onChange={(e) => setSymptom(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{message}</p>
    </div>
  );
}