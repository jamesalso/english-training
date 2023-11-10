import { userCtr } from '@/lib/api/controllers';
import { I_NextApiRequestWithSession, I_UserDocument } from '@/typescript';

const authCtr = {
    checkAuth: async (req: I_NextApiRequestWithSession) => {
        const { session } = req;

        if (!session) {
            return { success: false };
        }

        const userFound = await userCtr.getUser(req, {
            email: session.user.email,
        } as I_UserDocument);

        if (userFound.success) {
            return userFound;
        }

        const userCreated = await userCtr.createUser(req, {
            email: session.user.email,
            fullName: session.user.name,
            avatar: session.user.image,
        } as I_UserDocument);

        return userCreated;
    },
};

export { authCtr };
