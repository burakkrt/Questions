/*
 * Copyright (c) 2023.
 * You can access the source files from my github account. >> https://github.com/burakkrt/Questions-VanillaJavascript
 * Write me for cooperation or questions about the project. >> krtburak@outlook.com
 */

export default class Question {
    constructor(
        id = Number,
        question = String,
        answer = String,
        questionTurkish = String,
        answerTurkish = String,
        justQuestion = Boolean,
        userAnswer = null,
        resultState = null
    ) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.questionTurkish = questionTurkish;
        this.answerTurkish = answerTurkish;
        this.justQuestion = justQuestion;
        this.userAnswer = userAnswer;
        this.resultState = resultState;
        this.objectId = Math.floor(Math.random() * 10000000);
    }
}
