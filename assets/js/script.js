const projects = [...document.querySelectorAll('.project-item')];
for (const project of projects) {
    if (projects.indexOf(project)%2 == 0) {
        project.style.backgroundColor = "#eee"
    } else {
        project.style.backgroundColor = "#ddd"
    }
};