import { Children } from '@/typescript';
import { Glass, Main, Sphere } from '.';

export const PublicLayout = ({ children }: Children) => (
    <Main>
        <Glass className="flex-col max-sm:w-full">
            <Sphere variant="primary" className="right-[-80px] top-[-80px]" />
            {children}
            <Sphere
                variant="secondary"
                className="bottom-[-60px] left-[-60px]"
            />
        </Glass>
    </Main>
);
