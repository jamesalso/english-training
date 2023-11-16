import { Children } from '@/typescript';
import dynamic from 'next/dynamic';

const NoSSRWrapper = ({ children }: Children) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSSRWrapper), {
    ssr: false,
});
