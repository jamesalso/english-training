'user server';
import type { NextApiRequest, NextApiResponse } from 'next';

import { questionCtr } from '@/lib/api/controllers';
import dbConnect from '@/lib/api/dbConnect';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    await dbConnect();

    if (req.method === 'GET') {
        const questionsFound = await questionCtr.getQuestions(req);
        res.json(questionsFound);
    } else if (req.method === 'POST') {
        const questionCreated = await questionCtr.createQuestion(req, req.body);
        res.json(questionCreated);
    }
}
