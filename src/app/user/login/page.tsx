/* eslint-disable @next/next/no-img-element */
'use client';
import { signOut } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { GoogleLoginButton } from 'react-social-login-buttons';

import { useAuth, useTranslations } from '@/lib/hooks';

const Login = () => {
    const router = useRouter();
    const pathname = usePathname();

    const { isLoading, user, loginSocial } = useAuth();
    const t = useTranslations('user');

    const _handleLoginGoogle = () => {
        loginSocial('google');
    };
    const _handleLogoutGoogle = () => {
        signOut();
    };

    useEffect(() => {
        if (pathname === '/user/login' && user) {
            router.push('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="relative flex justify-center items-center w-[100%] h-[100vh] overflow-x-hidden">
                <div className="pointer-events-none absolute w-[100%] h-[100vh] overflow-hidden flex content-center items-center z-[1] pl-[50%]">
                    <div className="absolute block inset-0 pointer-events-none w-[100%] h-[100%] top-0 left-0">
                        <div className="relative left-[20%] animate-[slideOutDown_5s_linear_infinite]">
                            <img
                                src={'/images/login/leaf_01.png'}
                                alt="leaf1"
                            ></img>
                        </div>
                        <div className="relativeleft-[20%] animate-slideOutDown">
                            <img
                                src={'/images/login/leaf_02.png'}
                                alt="leaf2"
                            ></img>
                        </div>
                        <div className="relative left-[70%] animate-[slideOutDown_6s_linear_infinite]">
                            <img
                                src={'/images/login/leaf_03.png'}
                                alt="leaf3"
                            ></img>
                        </div>
                        <div className="relative left-[70%] animate-[slideOutDown_7s_linear_infinite]">
                            <img
                                src={'/images/login/leaf_04.png'}
                                alt="leaf4"
                            ></img>
                        </div>
                        <div className="relative left-[10%] animate-[slideOutDown_8s_linear_infinite]">
                            <img
                                src={'/images/login/leaf_01.png'}
                                alt="leaf1"
                            ></img>
                        </div>
                        <div className="relative left-[45%] animate-[slideOutDown_9s_linear_infinite]">
                            <img
                                src={'/images/login/leaf_02.png'}
                                alt="leaf2"
                            ></img>
                        </div>
                        <div className="relative left-[90%] animate-[slideOutDown_2s_linear_infinite]">
                            <img
                                src={'/images/login/leaf_03.png'}
                                alt="leaf3"
                            ></img>
                        </div>
                        <div className="relative left-[75%] animate-[slideOutDown_4s_linear_infinite]">
                            <img
                                src={'/images/login/leaf_04.png'}
                                alt="leaf4"
                            ></img>
                        </div>
                    </div>
                </div>
                <img
                    src={'/images/login/bg.jpg'}
                    alt="bike"
                    className="absolute top-0 left-0 w-[100%] h-[100%] object-cover"
                ></img>
                <img
                    src={'/images/login/girl.png'}
                    alt="girl"
                    className="absolute animate-[wiggle_15s_infinite] pb-20 h-[60%]"
                ></img>
                <div
                    className="relative p-[60px] bg-bg-rgba backdrop-blur-[15px] border-solid border-white border-[1px] 
          border-b-[1px] border-b-solid border-b-border 
          border-r-solid border-r-[1px] border-r-border 
          rounded-[20px] w-[500px] flex flex-col gap-[30px] shadow-2xl shadow-black"
                >
                    <h2 className="relative w-[100%] text-center text-4xl font-semibold text-red-900 mb-[10px]">
                        {t('login.title')}
                    </h2>
                    <div className="">
                        <input
                            type="text"
                            placeholder={t('login.identify-placeholder')}
                            className="relative w-[100%] px-4 outline-none text-lg text-red-900 rounded-md bg-white border-none py-3 mb-5 placeholder:text-red-900"
                        ></input>
                        <input
                            type="password"
                            placeholder={t('login.password-placeholder')}
                            className="relative w-[100%] px-4 outline-none text-lg text-red-900 rounded-md bg-white border-none py-3  placeholder:text-red-900"
                        ></input>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value={t('login.login-button')}
                            className="relative w-[100%] px-[16px] outline-none rounded-md border-none py-3
              bg-red-900 text-white cursor-pointer text-lg font-semibold duration-250 hover:bg-red-600 transition-all"
                        ></input>
                    </div>
                    <div className="flex-nowrap content-between">
                        <a
                            href="#"
                            className="hover:brightness-150 transition-all text-lg text-red-900 font-medium decoration-none"
                        >
                            {t('login.forgot-password-button')}
                        </a>
                        <a
                            href="#"
                            className="hover:brightness-150 transition-all text-lg text-red-900 font-medium underline pl-28"
                        >
                            {t('login.register-button')}
                        </a>
                    </div>
                </div>
                <img
                    src={'/images/login/trees.png'}
                    alt="girl"
                    className="absolute top-0 left-0 w-[100%] h-[100%] object-cover z-100 pointer-events-none"
                ></img>
            </div>
            <GoogleLoginButton onClick={_handleLoginGoogle}>
                Login google
            </GoogleLoginButton>
            <button onClick={_handleLogoutGoogle}>Logout google</button>
        </>
    );
};

export default Login;
