export default function questionDOM(questionsArray, contentElement) {
    if (questionsArray) {
        if (questionsArray.length > 0) {
            // local stroage 'den gelen tüm sorular burada doma aktıralacak
            // aktarım sonrasında bilgilendirme mesajı gösterilecek.
            // DOM 'a aktarım işleminde hız sorunlarına dikkat edilecek.
            contentElement.innerHTML = '';

            questionsArray.map((question, index) => {
                console.log(question);
                let element = `
                <!-- col -->
                <div class="rounded-md bg-slate-300" id="${question.objectId}">
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
                            <div class="flex h-full flex-col justify-between gap-y-2">
                                <div>
                                    <span>Question :</span>
                                    <p>${question.question}</p>
                                    <div class="">
                                        <p class="">${question.questionTurkish}</p>
                                    </div>
                                </div>
                                <div>
                                    <span>Answer :</span>
                                    <input class="block w-full px-1" type="text" id="input${question.objectId}" />
                                    <button
                                        class="mt-2 rounded-md bg-slate-400 px-4 py-1.5"
                                        onclick="resultCheck(${question.objectId})"
                                    >
                                        Test
                                    </button>
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
