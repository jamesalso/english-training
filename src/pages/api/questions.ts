'user server';
import type { NextApiRequest, NextApiResponse } from 'next';

import { questionCtr } from '@/lib/api/controllers';
import dbConnect from '@/lib/api/dbConnect';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        await dbConnect();

        switch (req.method) {
            case 'GET':
                const questionsFound = await questionCtr.getQuestions(req);

                res.status(questionsFound.success ? 200 : 400).json(
                    questionsFound,
                );

                break;
            case 'POST':
                const questionCreated = await questionCtr.createQuestion(
                    req,
                    req.body,
                );
                res.status(questionCreated.success ? 201 : 400).json(
                    questionCreated,
                );

                break;
            case 'PATCH':
                const questionUpdated = await questionCtr.updateQuestion(
                    req,
                    req.body,
                );
                res.status(questionUpdated.success ? 200 : 400).json(
                    questionUpdated,
                );

                break;
            case 'DELETE':
                const questionDeleted = await questionCtr.updateQuestion(
                    req,
                    req.body,
                );
                res.status(questionDeleted.success ? 200 : 400).json(
                    questionDeleted,
                );

                break;
            default:
                res.status(400).json({ success: false });
                break;
        }
    } catch (error: Error | any) {
        res.status(400).json({ success: false, message: error?.message });
    }
}
