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

export interface DocumentPaginate {
    docs: [JSON];
    totalDocs: number;
    offset: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: Boolean;
    hasNextPage: Boolean;
    prevPage: number;
    nextPage: number;
}

export interface APIResponse {
    success: boolean;
    message?: String;
    result?: DocumentPaginate;
}
