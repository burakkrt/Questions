export default function questionDOM(questionsArray, contentElement) {
    if (questionsArray) {
        if (questionsArray.length > 0) {
            // local stroage 'den gelen tüm sorular burada doma aktıralacak
            // aktarım sonrasında bilgilendirme mesajı gösterilecek.
            // DOM 'a aktarım işleminde hız sorunlarına dikkat edilecek.

            contentElement.innerHTML = '';

            questionsArray.map((question, index) => {
                let questionTurkishElement = '';
                let answerTurkishElement = '';
                console.log(question);

                if (question.questionTurkish != '') {
                    questionTurkishElement = `
                        <div class="opacity-60">
                            <span class="font-medium">Turkish :</span>
                            <p class="inline">${question.questionTurkish}</p>
                        </div>
                    `;
                }

                if (question.answerTurkish != '') {
                    answerTurkishElement = `
                    <div class="opacity-60 mb-0.5">
                        <span class="font-medium">Turkish :</span>
                        <p class="inline">${question.answerTurkish}</p>
                    </div>
                    `;
                }

                let element = `
                <!-- col -->
                <div class="question-box rounded-md bg-slate-300" id="${question.objectId}">
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
                                <button class="mr-2">
                                    <i class="fa-sharp fa-solid fa-bolt mr-2"></i>Cevabı Göster
                                </button>
                                <button><i class="fa-solid fa-circle-xmark mr-2"></i>Sil</button>
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
                                    ${questionTurkishElement}
                                </div>
                                <div id="resultDiv${question.objectId}">
                                    ${answerTurkishElement}
                                    <div class="flex flex-row content-center items-center gap-x-3">
                                        <span class="font-medium">Answer :</span>
                                        <input class="user-answer flex-auto px-1 text-slate-900" type="text" id="input${
                                            question.objectId
                                        }" />
                                        <button
                                        class="rounded-md bg-slate-400 px-4 py-1 text-base text-slate-700 duration-150 hover:bg-slate-500 hover:text-slate-200"
                                            onclick="resultCheck(${question.objectId})"
                                        >
                                            Reply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              `;
                contentElement.innerHTML += element;
            });
        }
    } else console.log('önce soru oluştur');
}
