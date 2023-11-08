'use client';
import { useApi } from '@/lib/hooks';
import { useEffect } from 'react';

const DashBoardAdmin = () => {
    const { isLoading, callApi } = useApi();

    const getQuestions = async () => {
        const response = await callApi({
            method: 'GET',
            url: `/questions`,
        });
        debugger;
    };

    useEffect(() => {
        getQuestions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>Dashboard Admin</h1>
        </div>
    );
};

export default DashBoardAdmin;
