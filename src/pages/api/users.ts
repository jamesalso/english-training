'user server';
import type { NextApiRequest, NextApiResponse } from 'next';

import { userCtr } from '@/lib/api/controllers';
import dbConnect from '@/lib/api/dbConnect';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        await dbConnect();

        switch (req.method) {
            case 'GET':
                const usersFound = await userCtr.getUsers(req);

                res.status(usersFound.success ? 200 : 400).json(usersFound);

                break;
            case 'POST':
                const userCreated = await userCtr.createUser(req, req.body);
                res.status(userCreated.success ? 201 : 400).json(userCreated);

                break;
            case 'PATCH':
                const userUpdated = await userCtr.updateUser(req, req.body);
                res.status(userUpdated.success ? 200 : 400).json(userUpdated);

                break;
            case 'DELETE':
                const userDeleted = await userCtr.updateUser(req, req.body);
                res.status(userDeleted.success ? 200 : 400).json(userDeleted);

                break;
            default:
                res.status(400).json({ success: false });
                break;
        }
    } catch (error: Error | any) {
        res.status(400).json({ success: false, message: error?.message });
    }
}
