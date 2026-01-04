export interface Question { subject: string; question: string; options: string[]; correct: number; isActive?: boolean; }
export type AppMode = 'play' | 'create';
export interface QuizState { currentQuestionIndex: number; score: number; isFinished: boolean; selectedAnswer: number | null; showCorrect: boolean; }
export interface SelectedQuizInfo { subject: string; partIndex: number; }