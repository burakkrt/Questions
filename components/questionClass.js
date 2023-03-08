export default class Question {
    constructor(
        id = Number,
        question = String,
        answer = String,
        questionTurkish = String,
        answerTurkish = String,
        justQuestion = Boolean
    ) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.questionTurkish = questionTurkish;
        this.answerTurkish = answerTurkish;
        this.justQuestion = justQuestion;
        this.objectId = Math.floor(Math.random() * 10000000);
    }
}
