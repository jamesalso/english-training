import { I_GenericDocument } from 'odhq-types';

export interface I_QuestionDocument extends I_GenericDocument {
    question: string;
    answerChoices: string[];
    correctAnswers: string[];
    level: string;
    categories: string[];
}
