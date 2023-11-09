import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export * from './log';
export * from './mongoose';
export * from './validate';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
