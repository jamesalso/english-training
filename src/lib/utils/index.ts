import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { T_Object } from '@/typescript';

export * from './log';
export * from './mongoose';
export * from './validate';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function omit(obj: T_Object, keys: string[]) {
    return keys.reduce((acc, key: string) => {
        const { [key]: omitted, ...rest } = acc;

        return rest;
    }, obj);
}
