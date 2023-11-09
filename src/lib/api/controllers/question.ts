import { crudCtr } from '@/lib/api/controllers';
import { questionModel } from '@/lib/api/models';
import { throwResponse } from '@/lib/utils';
import { C_ResponseStatus, E_SentryLevel } from 'odhq-types';

const questionCtr = {
    getQuestion: async (req: any, args: any) => {
        return crudCtr.findOne(questionModel, args);
    },
    getQuestions: async (req: any, args = {}) => {
        const { query = {}, ...options }: any = args;

        return crudCtr.findPaging(questionModel, query, options);
    },
    createQuestion: async (req: any, args: any) => {
        const { name, ...rest } = args;
        const questionFound = await questionCtr.getQuestion(req, { name });

        if (questionFound.success) {
            throwResponse(req, {
                message: 'Câu hỏi đã tồn tại.',
                status: C_ResponseStatus.BAD_REQUEST,
                level: E_SentryLevel.WARNING,
                extra: {
                    path: 'questionCtr.createQuestion',
                    args,
                },
            });
        }

        return crudCtr.create(questionModel, {
            name,
            ...rest,
        });
    },
    updateQuestion: async (req: any, args: any) => {
        const { id, image, ...rest } = args;
        const questionFound = await questionCtr.getQuestion(req, { id });

        if (!questionFound.success) {
            throwResponse(req, {
                message: 'Question không tồn tại.',
                status: C_ResponseStatus.NOT_FOUND,
                level: E_SentryLevel.WARNING,
                extra: {
                    path: 'questionCtr.updateQuestion',
                    args,
                },
            });
        }

        // if (
        //     image &&
        //     questionFound.result.image &&
        //     image !== questionFound.result.image
        // ) {
        //     const deleteImage = await cloudinaryCtr.deleteSingle(
        //         req,
        //         questionFound.result.image,
        //     );

        //     if (!deleteImage.success) {
        //         throwResponse(req, {
        //             message: deleteImage.message,
        //             extra: {
        //                 path: 'questionCtr.updateQuestion',
        //                 args,
        //             },
        //         });
        //     }
        // }

        return crudCtr.update(
            questionModel,
            { id },
            { ...(image && { image }), ...rest },
        );
    },
    deleteQuestion: async (req: any, args: any) => {
        const { id } = args;
        const questionFound = await questionCtr.getQuestion(req, { id });

        if (!questionFound.success) {
            throwResponse(req, {
                message: 'Question không tồn tại.',
                status: C_ResponseStatus.NOT_FOUND,
                level: E_SentryLevel.WARNING,
                extra: {
                    path: 'questionCtr.deleteQuestion',
                    args,
                },
            });
        }

        // if (questionFound.result && questionFound.result.image) {
        //     const deleteImage = await cloudinaryCtr.deleteSingle(
        //         req,
        //         questionFound.result.image,
        //     );

        //     if (!deleteImage.success) {
        //         throwResponse(req, {
        //             message: deleteImage.message,
        //             extra: {
        //                 path: 'questionCtr.deleteQuestion',
        //                 args,
        //             },
        //         });
        //     }
        // }

        return crudCtr.delete(questionModel, { id });
    },
    softDeleteQuestion: async (req: any, args: any) => {
        const { id } = args;
        const questionFound = await questionCtr.getQuestion(req, { id });

        if (!questionFound.success) {
            throwResponse(req, {
                message: 'Question không tồn tại.',
                status: C_ResponseStatus.NOT_FOUND,
                level: E_SentryLevel.WARNING,
                extra: {
                    path: 'questionCtr.softDeleteQuestion',
                    args,
                },
            });
        }

        return crudCtr.softDelete(questionModel, { id });
    },
    recoverQuestion: async (req: any, args: any) => {
        const { id } = args;
        const questionFound = await questionCtr.getQuestion(req, { id });

        if (!questionFound.success) {
            throwResponse(req, {
                message: 'Question không tồn tại.',
                status: C_ResponseStatus.NOT_FOUND,
                level: E_SentryLevel.WARNING,
                extra: {
                    path: 'questionCtr.recoverQuestion',
                    args,
                },
            });
        }

        return crudCtr.recover(questionModel, { id });
    },
};

export { questionCtr };
