import { I_GenericDocument } from 'odhq-types';

export interface I_QuestionDocument extends I_GenericDocument {
    answerChoices: string[];
    categories: string[];
    correctAnswers: string[];
    level: string;
    question: string;
}
