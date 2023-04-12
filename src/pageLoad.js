import createNavBar from './navBar';
import createProjectsBar from './projectsBar';
import createTasksBar from './tasksBar';

function pageLoad() {
    createNavBar();
    createProjectsBar();
    createTasksBar();
}

export default pageLoad;