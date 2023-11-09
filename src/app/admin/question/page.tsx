'use client';
import { useApi } from '@/lib/hooks';
import { useEffect } from 'react';

const QuestionManagement = () => {
    const { isLoading, callApi } = useApi();

    const getQuestions = async () => {
        // const response = await callApi({
        //     method: 'GET',
        //     url: `/questions`,
        // });
        // const response = await callApi({
        //     method: 'POST',
        //     url: `/questions`,
        //     data: {
        //         question: 'love',
        //     },
        // });
    };

    useEffect(() => {
        getQuestions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>Question Management</h1>
        </div>
    );
};

export default QuestionManagement;
