import { Questions } from '../data.js';
import QuestionClass from './questionObject.js';

export const questionObjects = [];

function ObjectsCreated(dataName = String, questionNumber = Number, justQuestion = Boolean) {
    for (let i = 0; i < questionNumber; i++) {
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

export default function QuestionsCreated(questionContentElement, dataName, questionNumber, questionType) {
    ObjectsCreated(dataName, questionNumber, questionType);
    questionContentElement.innerHTML = '';
    questionObjects.map(q => {
        let element = `
    <!-- col -->
                    <div class="rounded-md bg-slate-300">
                        <!-- card -->
                        <div class="flex h-full flex-col">
                            <!-- card header -->
                            <div
                                class="flex flex-row items-center justify-between rounded-t-md bg-zinc-700 p-2 text-stone-200"
                            >
                                <div>
                                    <p>Question No</p>
                                </div>
                                <div>
                                    <button class="mr-2">
                                        <i class="fa-sharp fa-solid fa-bolt mr-2"></i>Cevabı Göster
                                    </button>
                                    <button><i class="fa-solid fa-circle-xmark mr-2"></i>Sil</button>
                                </div>
                            </div>
                            <!-- card content -->
                            <div class="flex-auto p-2">
                                <div class="flex h-full flex-col justify-between gap-y-2">
                                    <div>
                                        <span>Question :</span>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, et.</p>
                                        <div class="">
                                            <p class="">Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span>Answer :</span>
                                        <input class="block w-full px-1" type="text" />
                                        <button
                                            class="mt-2 rounded-md bg-slate-400 px-4 py-1.5"
                                            onclick="clickFunc(event,5)"
                                        >
                                            Test
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    `;
        questionContentElement.innerHTML += element;
    });
    console.log(questionObjects);
}
