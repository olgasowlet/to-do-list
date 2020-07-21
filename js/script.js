{
    const tasks = [
        {
            content: "Zjeść obiad",
            done: false,
        },
        {
            content: "Zjeść czekoladę",
            done: true,
        },
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li${task.done ? " class=\"listedTask--done\"" : " class=\"listedTask\""}>
                    ${task.content}
                    <button class="listedTask__button listedTask__button--remover js-remove"><span class="far fa-trash-alt"></span></button>
                </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener('click', () => {
                removeTask(index);
            })
        })
    };

    const addNewTask = (newTaskContent) => {

        tasks.push({
            content: newTaskContent,
            done: false,
        });

        render();
    }

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContent = document.querySelector(".js-input").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    }

    const init = () => {
        render();

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener('submit', onFormSubmit);
    };

    init();
}