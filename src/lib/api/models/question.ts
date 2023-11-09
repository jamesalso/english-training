import { Schema } from 'mongoose';

import { generateModel, validate } from '@/lib/utils';
import { I_QuestionDocument } from '@/typescript';

export const questionModel = generateModel({
    name: 'Question',
    pagination: true,
    schema: new Schema<I_QuestionDocument>({
        question: {
            type: String,
            validate: [
                {
                    validator: validate.common.isEmptyValidator(),
                    message: 'Vui lòng nhập câu hỏi',
                },
            ],
        },
        answerChoices: {
            type: [String],
            validate: [
                {
                    validator: validate.common.isEmptyValidator(),
                    message: 'Vui lòng nhập ít nhất 1 đáp án',
                },
            ],
        },
        correctAnswers: {
            type: [String],
            validate: [
                {
                    validator: validate.common.isEmptyValidator(),
                    message: 'Vui lòng nhập ít nhất 1 đáp án đúng',
                },
            ],
        },
    }),
});
