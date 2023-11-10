'use client';
import { useApi } from '@/lib/hooks';
import { APIResponsePaginate, I_QuestionDocument } from '@/typescript';
import { useEffect, useState } from 'react';

const QuestionManagement = () => {
    const { isLoading, callApi } =
        useApi<APIResponsePaginate<I_QuestionDocument>>();
    const [questions, setQuestions] = useState<I_QuestionDocument[]>([]);

    const getQuestions = async () => {
        const response = await callApi({
            method: 'GET',
            url: `/questions`,
        });

        if (response?.success) {
            setQuestions(response?.result?.docs ?? []);
        }
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
            {questions.map((question) => (
                <div key={question.id}>{question.question}</div>
            ))}
        </div>
    );
};

export default QuestionManagement;
