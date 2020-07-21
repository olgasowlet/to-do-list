{
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener('click', (event) => {
        event.preventDefault(formElement);
    });

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
                <li>
                    ${task.content}
                </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };

    init();
}