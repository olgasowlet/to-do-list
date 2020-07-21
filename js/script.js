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
                </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const addNewTask = (newTaskContent) => {

        tasks.push({
            content: newTaskContent,
            done: false,
        });

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