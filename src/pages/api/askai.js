export default async function handler(req, res) {

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Only POST requests allowed'})
    }

    const { question } = req.body;
    const apiKey = process.env.OPENAI_API_KEY;
    console.log('🔍 API key loaded:', apiKey);

    if (!apiKey) {
        return res.status(500).json({ error: 'API key is not set.' });
    }

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ${apiKey}',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a helpful health assistant.' },
                    { role: 'user', content: question },
                ],
            }),        
        });

        const data = await response.json();
        console.log('🔍 OpenAI response:', JSON.stringify(data, null, 2));

        let answer = 'No valid response received.';
        if (Array.isArray(data?.choices) && data.choices[0]?.message?.content) {
            answer = data.choices[0].message.content;
       }

    res.status(200).json({ answer });

    } catch (err) {
        console.error('Error from OpenAI:', err);
        res.status(500).json({ error: 'Failed to get response from OpenAI' });
    }
}