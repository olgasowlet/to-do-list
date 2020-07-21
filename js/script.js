{
    const tasks = [];

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

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li${task.done ? " class=\"listedTask--done\"" : " class=\"listedTask\""}>
                    <button class="listedTask__button listedTask__button--doner js-done"><i class="fas fa-check"></i></button>
                    <span class="listedTask__content">${task.content}</span>
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

        const doneButtons = document.querySelectorAll(".js-done");

        doneButtons.forEach((doneButton, index) => {
            doneButton.addEventListener('click', () => {
                toggleTaskDone(index);
            })
        })
    };


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