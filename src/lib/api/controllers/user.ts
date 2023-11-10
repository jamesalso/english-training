import type { NextApiRequest } from 'next';
import { C_ResponseStatus, E_SentryLevel } from 'odhq-types';

import { crudCtr } from '@/lib/api/controllers';
import { userModel } from '@/lib/api/models';
import { throwResponse } from '@/lib/utils';
import { I_UserDocument } from '@/typescript';

const userCtr = {
    getUser: async (req: NextApiRequest, args: I_UserDocument) => {
        return crudCtr.findOne(userModel, args);
    },
    getUsers: async (req: NextApiRequest, args = {}) => {
        const { query = {}, ...options }: any = args;

        return crudCtr.findPaging(userModel, query, options);
    },
    createUser: async (req: NextApiRequest, args: I_UserDocument) => {
        const { email, ...rest } = args;
        const userFound = await userCtr.getUser(req, {
            email,
        } as I_UserDocument);

        if (userFound.success) {
            throwResponse(req, {
                message: 'Người dùng đã tồn tại.',
                status: C_ResponseStatus.BAD_REQUEST,
                level: E_SentryLevel.WARNING,
                extra: {
                    path: 'userCtr.createUser',
                    args,
                },
            });
        }

        return crudCtr.create(userModel, {
            email,
            ...rest,
        });
    },
    updateUser: async (req: NextApiRequest, args: I_UserDocument) => {
        const { id, avatar, ...rest } = args;
        const userFound = await userCtr.getUser(req, { id } as I_UserDocument);

        if (!userFound.success) {
            throwResponse(req, {
                message: 'Người dùng không tồn tại.',
                status: C_ResponseStatus.NOT_FOUND,
                level: E_SentryLevel.WARNING,
                extra: {
                    path: 'userCtr.updateUser',
                    args,
                },
            });
        }

        // if (
        //     avatar &&
        //     userFound.result.avatar &&
        //     avatar !== userFound.result.avatar
        // ) {
        //     const deleteImage = await cloudinaryCtr.deleteSingle(
        //         req,
        //         userFound.result.avatar,
        //     );

        //     if (!deleteImage.success) {
        //         throwResponse(req, {
        //             message: deleteImage.message,
        //             extra: {
        //                 path: 'userCtr.updateUser',
        //                 args,
        //             },
        //         });
        //     }
        // }

        return crudCtr.update(
            userModel,
            { id },
            { ...(avatar && { avatar }), ...rest },
        );
    },
    deleteUser: async (req: NextApiRequest, args: I_UserDocument) => {
        const { id } = args;
        const userFound = await userCtr.getUser(req, { id } as I_UserDocument);

        if (!userFound.success) {
            throwResponse(req, {
                message: 'Người dùng không tồn tại.',
                status: C_ResponseStatus.NOT_FOUND,
                level: E_SentryLevel.WARNING,
                extra: {
                    path: 'userCtr.deleteUser',
                    args,
                },
            });
        }

        // if (userFound.result && userFound.result.avatar) {
        //     const deleteImage = await cloudinaryCtr.deleteSingle(
        //         req,
        //         userFound.result.avatar,
        //     );

        //     if (!deleteImage.success) {
        //         throwResponse(req, {
        //             message: deleteImage.message,
        //             extra: {
        //                 path: 'userCtr.deleteUser',
        //                 args,
        //             },
        //         });
        //     }
        // }

        return crudCtr.delete(userModel, { id });
    },
    softDeleteUser: async (req: NextApiRequest, args: I_UserDocument) => {
        const { id } = args;
        const userFound = await userCtr.getUser(req, { id } as I_UserDocument);

        if (!userFound.success) {
            throwResponse(req, {
                message: 'Người dùng không tồn tại.',
                status: C_ResponseStatus.NOT_FOUND,
                level: E_SentryLevel.WARNING,
                extra: {
                    path: 'userCtr.softDeleteUser',
                    args,
                },
            });
        }

        return crudCtr.softDelete(userModel, { id });
    },
    recoverUser: async (req: NextApiRequest, args: I_UserDocument) => {
        const { id } = args;
        const userFound = await userCtr.getUser(req, { id } as I_UserDocument);

        if (!userFound.success) {
            throwResponse(req, {
                message: 'Người dùng không tồn tại.',
                status: C_ResponseStatus.NOT_FOUND,
                level: E_SentryLevel.WARNING,
                extra: {
                    path: 'userCtr.recoverUser',
                    args,
                },
            });
        }

        return crudCtr.recover(userModel, { id });
    },
};

export { userCtr };
