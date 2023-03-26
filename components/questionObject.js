/*
 * Copyright (c) 2023.
 * You can access the source files from my github account. >> https://github.com/burakkrt/Questions-VanillaJavascript
 * Write me for cooperation or questions about the project. >> krtburak@outlook.com
 */

import { Questions } from '../data.js';
import Message from './message.js';
import QuestionClass from './questionClass.js';
import questionDOM from './questionDOM.js';

export default function ObjectsCreated(
    dataName = String,
    questionNumber = Number,
    justQuestion = Boolean,
    contentElement
) {
    const questionObjects = [];

    if (!JSON.parse(localStorage.getItem('questions'))) {
        localStorage.setItem('questions', JSON.stringify(''));
    } else {
        const stroageQuestions = JSON.parse(localStorage.getItem('questions'));
        if (stroageQuestions) {
            stroageQuestions.map(question => {
                questionObjects.push(question);
            });
        } else console.log('No question records found in browser memory.');
    }

    for (let i = 0; i < questionNumber; i++) {
        let questionRandom = Math.floor(Math.random() * Questions[dataName].length);
        for (let question of Questions[dataName]) {
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
                break;
            }
        }
    }

    // Update local stroage .
    localStorage.setItem('questions', JSON.stringify(questionObjects));
    //Function to process all questions in memory to dom
    questionDOM(JSON.parse(localStorage.getItem('questions')), contentElement);
    // Finish message
    Message(`${questionNumber} questions were successfully created in the ${dataName} category.`);
}
