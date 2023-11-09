'use server';
import { Document, Schema, model } from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';
import mongoosePaginate from 'mongoose-paginate-v2';
import {
    I_GenerateModelOptions,
    I_GenerateSchemaOptions,
    I_GenericDocument,
} from 'odhq-types';
// eslint-disable-next-line import/named
import { v4 as uuidv4 } from 'uuid';

const genericSchema = new Schema<I_GenericDocument>(
    {
        id: {
            type: String,
            default: uuidv4,
            required: true,
            unique: true,
        },
        isDel: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

export const generateSchema = <T extends Document>({
    schema,
    virtuals,
}: I_GenerateSchemaOptions<T>) => {
    if (virtuals) {
        virtuals.forEach((virtual) => {
            if (virtual.get) {
                schema.virtual(virtual.name).get(virtual.get);
            } else {
                schema.virtual(virtual.name, virtual.options);
            }
        });
    }

    schema.add(genericSchema);

    return schema;
};

export const generateModel = <T extends Document>({
    name,
    schema,
    pagination,
    aggregate,
    virtuals,
    middlewares,
}: I_GenerateModelOptions<T>) => {
    const generatedSchema = generateSchema({ schema, virtuals });

    generatedSchema.add(genericSchema);

    if (pagination) {
        generatedSchema.plugin(mongoosePaginate);
    }

    if (aggregate) {
        generatedSchema.plugin(aggregatePaginate);
    }

    if (middlewares) {
        middlewares.forEach((middleware) => {
            generatedSchema.pre(middleware.method, middleware.fn);
        });
    }

    return model<T>(name, generatedSchema);
};
