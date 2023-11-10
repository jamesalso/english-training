import { Schema } from 'mongoose';

import { generateModel, validate } from '@/lib/utils';
import { I_UserDocument } from '@/typescript';

export const userModel = generateModel({
    name: 'User',
    pagination: true,
    schema: new Schema<I_UserDocument>({
        email: {
            type: String,
            validate: [
                {
                    validator: validate.common.isEmptyValidator(),
                    message: 'Vui lòng nhập email',
                },
            ],
        },
        avatar: {
            type: String,
        },
        password: {
            type: String,
        },
        phone: {
            type: String,
        },
        fullName: {
            type: String,
        },
    }),
});
