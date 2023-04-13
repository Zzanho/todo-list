import { Projects } from './project.js';
import { Tasks } from './task.js';

export class Body {
    constructor() {
        this.projects = [];
        this.currentProject = null;
        this.taskFormVisible = false;
    }

    createProject(title) {
        const project = new Projects(title);
        this.projects.push(project);
        this.setCurrentProject(project);
    }

    setCurrentProject(project) {
        this.currentProject = project;
        this.renderTasks();
    }

    createTask(title, description, dueDate, priority) {
        if (!this.currentProject) {
            throw new Error('No project selected');
        }
        const task = new Tasks(title, description, dueDate, priority);
        this.currentProject.addTask(task);
        this.renderTasks();
    }


    deleteTask(task) {
        this.currentProject.deleteTask(task);
        this.renderTasks();
    }

    toggleTaskForm() {
        this.taskFormVisible = !this.taskFormVisible;
        this.renderTaskForm();
    }

    renderTasks() {
        const taskContainer = document.getElementById('task-container');
        taskContainer.innerHTML = '';
        this.currentProject.tasks.forEach(task => {
            const taskCard = document.createElement('div');
            taskCard.classList.add('task-card');
            taskCard.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p>Due date: ${task.dueDate}</p>
        <p>Priority: ${task.priority}</p>
        <button class="delete-task-btn">Delete</button>
      `;
            taskCard.querySelector('.delete-task-btn').addEventListener('click', () => {
                this.deleteTask(task);
            });
            taskContainer.appendChild(taskCard);
        });
    }

    renderTaskForm() {
        const taskContainer = document.getElementById('task-container');
        const taskForm = document.getElementById('task-form');
        if (this.taskFormVisible) {
            taskForm.style.display = 'block';
            taskContainer.appendChild(taskForm);
        } else {
            taskForm.style.display = 'none';
        }
    }



    createFormUI() {
        // Add event listener to toggle task form button
        const toggleTaskFormBtn = document.getElementById('add-task-form-btn');
        toggleTaskFormBtn.addEventListener('click', () => {
            // Check if task form has already been created
            const taskForm = document.getElementById('task-form');
            if (!taskForm) {
                // Create task form
                const taskFormContainer = document.getElementById('task-form-container');
                const taskFormTemplate = `
              <form id="task-form">
                <h3>Add Task</h3>
                <div class="form-group">
                  <label for="task-title-input">Title:</label>
                  <input type="text" id="task-title-input">
                </div>
                <div class="form-group">
                  <label for="task-description-input">Description:</label>
                  <textarea id="task-description-input"></textarea>
                </div>
                <div class="form-group">
                  <label for="task-due-date-input">Due Date:</label>
                  <input type="date" id="task-due-date-input">
                </div>
                <div class="form-group">
                  <label for="task-priority-input">Priority:</label>
                  <select id="task-priority-input">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <div class="form-group">
                  <button type="button" id="add-task-btn">Add Task</button>
                </div>
              </form>
             `;
                taskFormContainer.insertAdjacentHTML('beforeend', taskFormTemplate);

                // Add event listener to add task button
                const addTaskBtn = document.getElementById('add-task-btn');
                addTaskBtn.addEventListener('click', () => {
                    const taskTitleInput = document.getElementById('task-title-input');
                    const taskDescriptionInput = document.getElementById('task-description-input');
                    const taskDueDateInput = document.getElementById('task-due-date-input');
                    const taskPriorityInput = document.getElementById('task-priority-input');
                    const taskTitle = taskTitleInput.value;
                    const taskDescription = taskDescriptionInput.value;
                    const taskDueDate = taskDueDateInput.value;
                    const taskPriority = taskPriorityInput.value;
                    if (taskTitle && taskDueDate && taskPriority) {
                        this.createTask(taskTitle, taskDescription, taskDueDate, taskPriority);
                        taskTitleInput.value = '';
                        taskDescriptionInput.value = '';
                        taskDueDateInput.value = '';
                        taskPriorityInput.value = '';
                        this.toggleTaskForm();
                    }
                });
            }

            // Toggle task form visibility
            this.toggleTaskForm();
        });
    }

    initializeUI() {
        const createProjectBtn = document.getElementById('create-project-btn');
        if (createProjectBtn) {
            createProjectBtn.addEventListener('click', () => {
                const projectTitleInput = document.createElement('input');
                projectTitleInput.setAttribute('type', 'text');
                const projectTitle = projectTitleInput.value;
                if (projectTitle) {
                    this.createProject(projectTitle);
                    projectTitleInput.value = '';
                }
                const projectForm = document.getElementById('project-form');
                projectForm.insertBefore(projectTitleInput, projectForm.firstChild);
            });
        }

        const toggleTaskFormBtn = document.getElementById('toggle-task-form-btn');
        if (toggleTaskFormBtn) {
            toggleTaskFormBtn.addEventListener('click', () => {
                this.toggleTaskForm();
            });
        }

        const toggleMenuBtn = document.querySelector('.collapse-menu');
        toggleMenuBtn.addEventListener('click', () => {
            const container = document.getElementById('container');
            container.classList.toggle('collapse');
        });
    }

}

const DOM_BODY = () => {
    const body = new Body();
    body.initializeUI();
    body.createFormUI();


}

export { DOM_BODY };