{
    let tasks = [];
    let buttonsVisibility = false; //przełącza przyciski czy je widać czy nie

    const addNewTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent },
        ];

        render();
    }

    const removeTask = (index) => {
        tasks = [
            ...tasks.slice(0, index),
            ...tasks.slice(index + 1),
        ];
        render();
    }

    const toggleTaskDone = (index) => {
        tasks = [
            ...tasks.slice(0, index),
            { ...tasks[index], done: tasks[index].done = !tasks[index].done },
            ...tasks.slice(index + 1),
        ];

        render();
    }

    const checkButtonsVisibility = () => {
        if (tasks.length !== 0) {
            buttonsVisibility = true;
        } else {
            buttonsVisibility = false;
        };
    };

    const displayButtons = () => {
        const hideFinishedTasksButton = document.querySelector(".js-button-hide");
        const finishTasksButton = document.querySelector(".js-button-finishAll");

        if (buttonsVisibility === true) {
            hideFinishedTasksButton.classList.replace("section__button", "section__button--display");
            finishTasksButton.classList.replace("section__button", "section__button--display");
        } else {
            hideFinishedTasksButton.classList.replace("section__button--display", "section__button");
            finishTasksButton.classList.replace("section__button--display", "section__button");
        };
    }

    const renderTasks = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="listedTask">
                    <button class="listedTask__button listedTask__button--doner js-done"><i${task.done ? " class=\"fas fa-check\"" : " class=\"fas--none fa-check\""}></i></button>
                    <span${task.done ? " class=\"listedTask__content--done\"" : " class=\"listedTask__content\""}>${task.content}</span>
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

    const renderButtons = () => {
        checkButtonsVisibility();
        displayButtons();
    };

    // const bindButtonsEvents = () => {


    // };

    const render = () => {
        renderTasks();
        renderButtons();
        // bindButtonsEvents();
    };


    const onFormReset = (event) => {
        const contentElement = document.querySelector(".js-input");
        const newTaskContent = contentElement.value.trim();

        if (newTaskContent === "") {
            return;
        };

        contentElement.focus();

        addNewTask(newTaskContent);

    }

    const init = () => {
        render();

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener('reset', onFormReset);

    };

    init();
}