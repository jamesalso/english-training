export default async function handler(req, res) {
    // Retrieve users from database or other data source
    const data = [
        {
            question: `He ☭☭☭ her, but she ☭☭☭ him`,
            answerChoices: ['loves', 'hates'],
            correctAnswers: ['loves'],
        },
    ];

    res.json(data);
}
