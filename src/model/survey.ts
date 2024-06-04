export interface QuestionSurvey {
    id: string;
    question: string;
    response_type: 'text'|'note5';
}

export interface ResponseSurvey {
    id?: string;
    question: QuestionSurvey;
    response: string;
}
