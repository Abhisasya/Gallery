const works = {
    "task1": { "title": "Project 1-Html Styling", "url": "project/task1/index.html" },
    "task2": { "title": "Project 2-Hovering", "url": "project/task2/index.html" },
    "task3": { "title": "Project 3-Alert", "url": "project/task3/index.html" },
    "task4": { "title": "Project 4-Calculator", "url": "project/task4/index.html" },
    "task5": { "title": "Project 5-String", "url": "project/task5/index.html" },
    "task6": { "title": "Project 6-Grade Calculator", "url": "project/task6/index.html" },
    "task7": { "title": "Project 7-Stack of array", "url": "project/task7/index.html" },
    "task8": { "title": "Project 8-Loops", "url": "project/task8/index.html" },
    "task9": { "title": "Project 9-Car INFO", "url": "project/task9/index.html" },
    "task10": { "title": "Project 10-Personal INFO", "url": "project/task10/index.html" },
    "task11": { "title": "Project 11-Sum Calculation", "url": "project/task11/index.html" },
    "task12": { "title": "Project 12-Update personal INFO", "url": "project/task12/index.html" },
    "task13": { "title": "Project 13-Random Number", "url": "project/task13/index.html" },
    "task14": { "title": "Project 14-Auto Function", "url": "project/task14/index.html" },
    "task15": { "title": "Project 15-Form", "url": "project/task15/index.html" },
    "task16": { "title": "Project 16-Age Calculator", "url": "project/task16/index.html" }
}


const workFrame = document.getElementById("workFrame");
const projectsContainer = document.getElementById("projects-container");

Object.keys(works).forEach(key => {
    const button = document.createElement("button");
    button.textContent = works[key].title;
    button.onclick = () => {
        workFrame.src = works[key].url;
    };
    projectsContainer.appendChild(button);
});