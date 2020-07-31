{
    let tasks = [];
    // let buttonsVisibility = false;
    let hideDoneTasks = false;

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

    const renderTasks = () => {
        let htmlListOfTasks = "";

        for (const task of tasks) {
            htmlListOfTasks += `
                <li class="listedTask">
                    <button class="listedTask__button listedTask__button--doner js-done"><i${task.done ? " class=\"fas fa-check\"" : " class=\"fas--none fa-check\""}></i></button>
                    <span${task.done ? " class=\"listedTask__content--done\"" : " class=\"listedTask__content\""}>${task.content}</span>
                    <button class="listedTask__button listedTask__button--remover js-remove"><span class="far fa-trash-alt"></span></button>
                </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlListOfTasks;

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
        let htmlButtons = "";

        if (tasks.length !== 0) {
            htmlButtons += `
            <button class="section__button">Ukryj ukończone</button>
            <button class="section__button">Ukończ wszystkie</button>`;
        };

        document.querySelector(".js-buttons-start").innerHTML = htmlButtons;
        
    };

    // const bindButtonsEvents = () => {
    //     const hideFinishedTasksButton = document.querySelector(".js-button-hide");
    //     const finishTasksButton = document.querySelector(".js-button-finishAll");

    //     if (buttonsVisibility === true) {

    //     };
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