function createTurkishElement(value, valueType) {
    // True question , false answer
    if (value != '') {
        return `
        <div class="opacity-60">
            <span class="font-medium">Turkish :</span>
            <p class="inline">${value}</p>
        </div>
`;
    } else return '';
}

function returnAnswer(question) {
    if (question.resultState == false) {
        return `
        <div>
            <span class="font-semibold text-green-400">Correct answer :</span>
            <p class="inline">
                ${question.answer}
            </p>
        </div>
    `;
    } else return '';
}

function returnInputValue(question) {
    if (question.resultState !== null) {
        if (question.resultState) {
            return `value="${question.answer}"`;
        } else if (question.userAnswer !== null) {
            return `value="${question.userAnswer}"`;
        } else return;
    } else return;
}

export default function questionDOM(questionsArray, contentElement, resultType = 'all') {
    contentElement.innerHTML = '';

    if (questionsArray && questionsArray.length > 0) {
        questionsArray.map((question, index) => {
            console.log(question);

            if (resultType == question.resultState) {
                let element = `
                    <!-- col -->
                    <div class="question-box ${question.resultState} rounded-md bg-slate-300" id="${question.objectId}">
                        <!-- card -->
                        <div class="flex h-full flex-col">
                            <!-- card header -->
                            <div
                                class="flex flex-row items-center justify-between rounded-t-md bg-zinc-700 p-2 text-stone-200"
                            >
                                <div>
                                    <p>Question No : ${index + 1} (${question.objectId})</p>
                                </div>
                                <div>
                                    <button class="mr-2 duration-200 hover:text-yellow-400 focus:text-yellow-400" onclick="visibleAnswer(${
                                        question.objectId
                                    })">
                                        <i class="fa-sharp fa-solid fa-bolt mr-2"></i>Cevabı Göster
                                    </button>
                                    <button class="hover:text-red-400 focus:text-red-400 duration-200" onclick="deleteQuestion(${
                                        question.objectId
                                    })"><i class="fa-solid fa-circle-xmark mr-2"></i>Sil</button>
                                </div>
                            </div>
                            <!-- card content -->
                            <div class="flex-auto p-2">
                                <div class="flex h-full flex-col justify-between gap-y-5">
                                    <div>
                                        <div>
                                            <span class="font-medium">Question :</span>
                                            <p class="inline">${question.question}</p>
                                        </div>
                                        ${createTurkishElement(question.questionTurkish)}
                                    </div>
                                    <div id="resultDiv${question.objectId}">
                                    ${createTurkishElement(question.answerTurkish)}
                                        <div class="flex flex-row content-center items-center gap-x-3">
                                            <span class="font-medium">Answer :</span>
                                            <input class="user-answer ${
                                                question.resultState
                                            } flex-auto px-1 text-slate-900" type="text" id="input${
                    question.objectId
                }" ${returnInputValue(question)} onkeypress="keyPressInput(event,${question.objectId})"/>
                                            <button
                                            class="reply-button ${
                                                question.resultState
                                            } rounded-md bg-slate-400 px-4 py-1 text-base text-slate-700 duration-150 hover:bg-slate-500 hover:text-slate-200"
                                                onclick="resultCheck(${question.objectId})"
                                            >
                                                Reply
                                            </button>
                                        </div>
                                        ${returnAnswer(question)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  `;
                contentElement.innerHTML += element;
            } else if (resultType === null) {
                if (question.resultState === null) {
                    let element = `
                    <!-- col -->
                    <div class="question-box ${question.resultState} rounded-md bg-slate-300" id="${question.objectId}">
                        <!-- card -->
                        <div class="flex h-full flex-col">
                            <!-- card header -->
                            <div
                                class="flex flex-row items-center justify-between rounded-t-md bg-zinc-700 p-2 text-stone-200"
                            >
                                <div>
                                    <p>Question No : ${index + 1} (${question.objectId})</p>
                                </div>
                                <div>
                                    <button class="mr-2 duration-200 hover:text-yellow-400 focus:text-yellow-400" onclick="visibleAnswer(${
                                        question.objectId
                                    })">
                                        <i class="fa-sharp fa-solid fa-bolt mr-2"></i>Cevabı Göster
                                    </button>
                                    <button class="hover:text-red-400 focus:text-red-400 duration-200" onclick="deleteQuestion(${
                                        question.objectId
                                    })"><i class="fa-solid fa-circle-xmark mr-2"></i>Sil</button>
                                </div>
                            </div>
                            <!-- card content -->
                            <div class="flex-auto p-2">
                                <div class="flex h-full flex-col justify-between gap-y-5">
                                    <div>
                                        <div>
                                            <span class="font-medium">Question :</span>
                                            <p class="inline">${question.question}</p>
                                        </div>
                                        ${createTurkishElement(question.questionTurkish)}
                                    </div>
                                    <div id="resultDiv${question.objectId}">
                                    ${createTurkishElement(question.answerTurkish)}
                                        <div class="flex flex-row content-center items-center gap-x-3">
                                            <span class="font-medium">Answer :</span>
                                            <input class="user-answer ${
                                                question.resultState
                                            } flex-auto px-1 text-slate-900" type="text" id="input${
                        question.objectId
                    }" ${returnInputValue(question)} onkeypress="keyPressInput(event,${question.objectId})"/>
                                            <button
                                            class="reply-button ${
                                                question.resultState
                                            } rounded-md bg-slate-400 px-4 py-1 text-base text-slate-700 duration-150 hover:bg-slate-500 hover:text-slate-200"
                                                onclick="resultCheck(${question.objectId})"
                                            >
                                                Reply
                                            </button>
                                        </div>
                                        ${returnAnswer(question)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  `;
                    contentElement.innerHTML += element;
                }
            } else if (resultType === 'all') {
                let element = `
                <!-- col -->
                <div class="question-box ${question.resultState} rounded-md bg-slate-300" id="${question.objectId}">
                    <!-- card -->
                    <div class="flex h-full flex-col">
                        <!-- card header -->
                        <div
                            class="flex flex-row items-center justify-between rounded-t-md bg-zinc-700 p-2 text-stone-200"
                        >
                            <div>
                                <p>Question No : ${index + 1} (${question.objectId})</p>
                            </div>
                            <div>
                                <button class="mr-2 duration-200 hover:text-yellow-400 focus:text-yellow-400" onclick="visibleAnswer(${
                                    question.objectId
                                })">
                                    <i class="fa-sharp fa-solid fa-bolt mr-2"></i>Cevabı Göster
                                </button>
                                <button class="hover:text-red-400 focus:text-red-400 duration-200" onclick="deleteQuestion(${
                                    question.objectId
                                })"><i class="fa-solid fa-circle-xmark mr-2"></i>Sil</button>
                            </div>
                        </div>
                        <!-- card content -->
                        <div class="flex-auto p-2">
                            <div class="flex h-full flex-col justify-between gap-y-5">
                                <div>
                                    <div>
                                        <span class="font-medium">Question :</span>
                                        <p class="inline">${question.question}</p>
                                    </div>
                                    ${createTurkishElement(question.questionTurkish)}
                                </div>
                                <div id="resultDiv${question.objectId}">
                                ${createTurkishElement(question.answerTurkish)}
                                    <div class="flex flex-row content-center items-center gap-x-3">
                                        <span class="font-medium">Answer :</span>
                                        <input class="user-answer ${
                                            question.resultState
                                        } flex-auto px-1 text-slate-900" type="text" id="input${
                    question.objectId
                }" ${returnInputValue(question)} onkeypress="keyPressInput(event,${question.objectId})"/>
                                        <button
                                        class="reply-button ${
                                            question.resultState
                                        } rounded-md bg-slate-400 px-4 py-1 text-base text-slate-700 duration-150 hover:bg-slate-500 hover:text-slate-200"
                                            onclick="resultCheck(${question.objectId})"
                                        >
                                            Reply
                                        </button>
                                    </div>
                                    ${returnAnswer(question)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              `;
                contentElement.innerHTML += element;
            }
        });
    } else console.log('önce soru oluştur');
}
