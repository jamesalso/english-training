'user server';
import type { NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';

import { authCtr } from '@/lib/api/controllers';
import dbConnect from '@/lib/api/dbConnect';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { I_NextApiRequestWithSession, I_Session } from '@/typescript';

export default async function handler(
    req: I_NextApiRequestWithSession,
    res: NextApiResponse,
) {
    try {
        await dbConnect();

        const session: I_Session | null = await getServerSession(
            req,
            res,
            authOptions,
        );
        req.session = session;

        const authChecked = await authCtr.checkAuth(req);

        res.status(authChecked.success ? 200 : 400).json(authChecked);
    } catch (error: Error | any) {
        res.status(400).json({ success: false, message: error?.message });
    }
}
