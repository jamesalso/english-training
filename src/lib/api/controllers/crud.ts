const crudCtr: any = {
    history: {
        findOne: async (
            model: any,
            conditions = {},
            projection: any,
            options = {},
            populate: any,
        ) => {
            let docQuery;

            if (populate) {
                docQuery = model
                    .findOne(conditions, projection, options)
                    .populate(populate);
            } else {
                docQuery = model.findOne(conditions, projection, options);
            }

            const docFound = await docQuery.clone().exec();

            if (!docFound) {
                return {
                    success: false,
                    message: `Get ${crudCtr.getModelName(
                        model,
                    )} history failed!`,
                };
            }

            const patchsFound = await docFound.patches.find(
                { id: docFound.id },
                null,
                {
                    sort: { date: 'desc' },
                },
            );

            return {
                ...(!patchsFound
                    ? {
                          success: false,
                          message: `Get ${crudCtr.getModelName(
                              model,
                          )} history failed!`,
                      }
                    : { success: true, result: patchsFound }),
            };
        },
    },
    findAll: async (
        model: any,
        conditions = {},
        projection: any,
        options = {},
    ) => {
        const foundResults = await model
            .find(conditions, projection, options)
            .lean();

        return {
            ...(!foundResults
                ? {
                      success: false,
                      message: `Get ${crudCtr.getModelName(model)} failed!`,
                  }
                : { success: true, result: foundResults }),
        };
    },
    findPaging: async (model: any, conditions = {}, options = {}) => {
        const foundResults = await model.paginate(conditions, options);

        return {
            ...(!foundResults
                ? {
                      success: false,
                      message: `Get ${crudCtr.getModelName(model)} failed!`,
                  }
                : { success: true, result: foundResults }),
        };
    },
    findPagingAggregate: async (model: any, pipelines = [], options = {}) => {
        const foundResults = await model.aggregatePaginate(
            model.aggregate(pipelines),
            options,
        );

        return {
            ...(!foundResults
                ? {
                      success: false,
                      message: `Get ${crudCtr.getModelName(model)} failed!`,
                  }
                : { success: true, result: foundResults }),
        };
    },
    findOne: async (
        model: any,
        conditions = {},
        projection: any,
        options = {},
        populate: any,
    ) => {
        let docQuery;

        if (populate) {
            docQuery = model
                .findOne(conditions, projection, options)
                .populate(populate);
        } else {
            docQuery = model.findOne(conditions, projection, options);
        }

        const docFound = await docQuery.clone().exec();

        return {
            ...(!docFound
                ? {
                      success: false,
                      message: `Get ${crudCtr.getModelName(model)} failed!`,
                  }
                : {
                      success: true,
                      result: docFound.toObject({ virtuals: true }),
                  }),
        };
    },
    create: async (model: any, args: any, populate: any) => {
        let createdRecord;

        try {
            if (populate) {
                createdRecord = await model.create(args).populate(populate);
            } else {
                createdRecord = await model.create(args);
            }
        } catch (error: any) {
            if (error.name === 'ValidationError') {
                return {
                    success: false,
                    message: Object.values(error.errors)
                        .map((err: any) => err.message)
                        .join('\n'),
                };
            }
        }

        return {
            ...(!createdRecord
                ? {
                      success: false,
                      message: `Create ${crudCtr.getModelName(model)} failed!`,
                  }
                : { success: true, result: createdRecord }),
        };
    },
    createMany: async (
        model: any,
        conditions = {},
        update = {},
        options = {},
        populate: any,
    ) => {
        let createdRecords;

        if (populate) {
            createdRecords = await model
                .insertMany(conditions, update, options)
                .populate(populate);
        } else {
            createdRecords = await model.insertMany(
                conditions,
                update,
                options,
            );
        }

        return {
            ...(!createdRecords
                ? {
                      success: false,
                      message: `Create ${crudCtr.getModelName(model)} failed!`,
                  }
                : { success: true, result: createdRecords }),
        };
    },
    update: async (
        model: any,
        conditions = {},
        update = {},
        options = {},
        populate: any,
    ) => {
        let updatedRecord;

        try {
            if (populate) {
                updatedRecord = await model
                    .findOneAndUpdate(conditions, update, {
                        new: true,
                        ...options,
                    })
                    .populate(populate);
            } else {
                updatedRecord = await model.findOneAndUpdate(
                    conditions,
                    update,
                    { new: true, ...options },
                );
            }
        } catch (error: any) {
            if (error.name === 'ValidationError') {
                return {
                    success: false,
                    message: Object.values(error.errors)
                        .map((err: any) => err.message)
                        .join('\n'),
                };
            }
        }

        return {
            ...(!updatedRecord
                ? {
                      success: false,
                      message: `Update ${crudCtr.getModelName(model)} failed!`,
                  }
                : { success: true, result: updatedRecord }),
        };
    },
    updateMany: async (
        model: any,
        conditions = {},
        update = {},
        options = {},
        populate: any,
    ) => {
        let updatedRecord;

        if (populate) {
            updatedRecord = await model
                .updateMany(conditions, update, options)
                .populate(populate);
        } else {
            updatedRecord = await model.updateMany(conditions, update, options);
        }

        return {
            ...(!updatedRecord
                ? {
                      success: false,
                      message: `Update ${crudCtr.getModelName(model)} failed!`,
                  }
                : { success: true, result: updatedRecord }),
        };
    },
    delete: async (
        model: any,
        conditions = {},
        options = {},
        populate: any,
    ) => {
        let deletedRecord;

        if (populate) {
            deletedRecord = await model
                .findOneAndDelete(conditions, options)
                .populate(populate);
        } else {
            deletedRecord = await model.findOneAndDelete(conditions, options);
        }

        return {
            ...(!deletedRecord
                ? {
                      success: false,
                      message: `Delete ${crudCtr.getModelName(model)} failed!`,
                  }
                : { success: true, result: deletedRecord }),
        };
    },
    deleteMany: async (
        model: any,
        conditions = {},
        options = {},
        populate: any,
    ) => {
        let deletedRecord;

        if (populate) {
            deletedRecord = await model
                .deleteMany(conditions, options)
                .populate(populate);
        } else {
            deletedRecord = await model.deleteMany(conditions, options);
        }

        return {
            ...(!deletedRecord && !deletedRecord.ok
                ? {
                      success: false,
                      message: `Delete ${crudCtr.getModelName(model)} failed!`,
                  }
                : { success: true }),
        };
    },
    softDelete: (model: any, conditions = {}, options = {}, populate: any) => {
        return crudCtr.update(
            model,
            conditions,
            { isDel: true },
            options,
            populate,
        );
    },
    recover: (model: any, conditions = {}, options = {}, populate: any) => {
        return crudCtr.update(
            model,
            conditions,
            { isDel: false },
            options,
            populate,
        );
    },
    getModelName: (model: any) => {
        return model.collection.collectionName;
    },
    aggregate: async (model: any, pipeline: any) => {
        try {
            const result = await model.aggregate(pipeline);

            return { success: true, result };
        } catch (error: any) {
            return { success: false, message: error.message };
        }
    },
};

export { crudCtr };
