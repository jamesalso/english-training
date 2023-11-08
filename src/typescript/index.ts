import { ReactNode } from 'react';

export * from './auth';
export * from './language';
export * from './loading';
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
