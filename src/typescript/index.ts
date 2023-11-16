import { ReactNode } from 'react';

export * from './auth';
export * from './language';
export * from './loading';
export * from './question';
export * from './user';

export interface Children {
    children?: ReactNode;
}

export interface ClassName {
    className?: string;
}

export type T_Object = {
    [key: string]: Object;
};

export type T_Any =
    | {
          [key: string]: Object | string | number | boolean | null | undefined;
      }
    | Object
    | string
    | number
    | boolean
    | null
    | undefined;

export interface DocumentPaginate<T> {
    docs: [T];
    hasNextPage: Boolean;
    hasPrevPage: Boolean;
    limit: number;
    nextPage: number;
    offset: number;
    page: number;
    pagingCounter: number;
    prevPage: number;
    totalDocs: number;
    totalPages: number;
}

export interface APIResponsePaginate<T> {
    success: boolean;
    message?: String;
    result?: DocumentPaginate<T>;
}

export interface APIResponseSingle<T> {
    success: boolean;
    message?: String;
    result?: T;
}
