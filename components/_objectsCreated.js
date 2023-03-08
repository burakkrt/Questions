import { Questions } from '../data.js';
import QuestionClass from './_questionObject.js';

export const questionObjects = [];

export default function ObjectsCreated(dataName = String, questionNumbers = Number, justQuestion = Boolean) {
    for (let i = 0; i < questionNumbers; i++) {
        let questionRandom = Math.floor(Math.random() * Questions[dataName].length);
        Questions[dataName].map(question => {
            if (question.id === questionRandom) {
                questionObjects.push(
                    new QuestionClass(
                        question.id,
                        question.question,
                        question.answer,
                        question.questionTurkish,
                        question.answerTurkish,
                        justQuestion // just question or question and answer
                    )
                );
            }
        });
    }
}
