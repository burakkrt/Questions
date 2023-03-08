export const htmlMenuElements = {
    'numbers-alphabet': {
        'question-number-input-id': '01-0',
        'question-created-button-id': '01-1',
        'just-question-id': '01-2',
        'question-and-answer-id': '01-3',
    },
    'greeting-farewell': {
        'question-number-input-id': '02-0',
        'question-created-button-id': '02-1',
        'just-question-id': '02-2',
        'question-and-answer-id': '02-3',
    },
    'situation-ask': {
        'question-number-input-id': '03-0',
        'question-created-button-id': '03-1',
        'just-question-id': '03-2',
        'question-and-answer-id': '03-3',
    },
    'to-meet': {
        'question-number-input-id': '04-0',
        'question-created-button-id': '04-1',
        'just-question-id': '04-2',
        'question-and-answer-id': '04-3',
    },
    'days-months-years': {
        'question-number-input-id': '05-0',
        'question-created-button-id': '05-1',
        'just-question-id': '05-2',
        'question-and-answer-id': '05-3',
    },
};

export default function MenuItems(menuElement) {
    menuElement.innerHTML = '';
    for (const [key] of Object.entries(htmlMenuElements)) {
        const menu = htmlMenuElements[key];
        let element = `
            <div class="border-2 p-2 mb-2">
                <p class="mb-2">${key}</p>
                <div class="flex flex-row items-center gap-x-3">
                    <div>
                        <div>
                            <input type="checkbox" name="just-question" id="${menu['just-question-id']}" checked="true" />
                            <label for="${menu['just-question-id']}" class="cursor-pointer">Sadece soru</label>
                        </div>
                        <div>
                            <input type="checkbox" name="question-and-answer-id" id="${menu['question-and-answer-id']}" />
                            <label for="${menu['question-and-answer-id']}" class="cursor-pointer">Soru ve cevap</label>
                        </div>
                    </div>
                    <input type="number" class="question-number-input px-1" placeholder="Default 0 questions" id="${menu['question-number-input-id']}" />
                    <button
                        onclick="createdQuestions('${key}')"
                        class="rounded-md bg-slate-500 py-1 px-2 text-stone-200"
                    >
                        Create
                    </button>
                </div>
            </div>
        `;
        menuElement.innerHTML += element;
    }
}
