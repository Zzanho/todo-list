export const DOM_HEADER = () => {
  const container = document.getElementById('container');

  // Create navbar
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
    <nav>
      <button class="btn collapse-menu">
        <i class="fas fa-tasks"></i>
      </button>
      <div>ToDo List</div>
      <div id="add-task-btn-container">
        <button class="btn add-task" id="add-task-form-btn">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </nav>
  `;
  container.appendChild(header);

  // Create menu
  const main = document.createElement('main');
  main.innerHTML = `
    <section class="menu" id="mySidebar">
      <div class="project-section-title">Projects</div>
      <button class="btn" id="create-new-project">
        <i class="fas fa-plus"></i>Create new project
      </button>
      <div id="projects-list"></div>
    </section>
    <section class="task-container">
      <div class="cards" id="cards"></div>
    </section>
  `;
  container.appendChild(main);

  // Create project form
  const projectForm = document.createElement('div');
  projectForm.id = 'project-form';
  projectForm.innerHTML = `
    <h2>Create New Project</h2>
    <form id="project-form">
      <label for="project-title">Title</label>
      <input type="text" id="project-title" name="project-title" required>
      <label for="project-description">Description</label>
      <textarea id="project-description" name="project-description"></textarea>
      <button type="submit">Create Project</button>
      <button type="button" id="cancel-project-form">Cancel</button>
    </form>
  `;
  container.appendChild(projectForm);

  // Create task form
  const taskForm = document.createElement('div');
  taskForm.id = 'task-form';
  taskForm.innerHTML = `
    <h2>Add New Task</h2>
    <form id="task-form">
      <label for="task-title">Title</label>
      <input type="text" id="task-title" name="task-title" required>
      <label for="task-description">Description</label>
      <textarea id="task-description" name="task-description"></textarea>
      <label for="task-due-date">Due Date</label>
      <input type="date" id="task-due-date" name="task-due-date">
      <label for="task-priority">Priority</label>
      <select id="task-priority" name="task-priority">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <label for="task-project">Project</label>
      <select id="task-project" name="task-project"></select>
      <button type="submit">Add Task</button>
      <button type="button" id="cancel-task-form">Cancel</button>
    </form>
  `;
  container.appendChild(taskForm);

  // Create project item
  const createProjectItem = (project) => {
    // get the projects list element from the DOM
    const projectList = document.getElementById('projects-list');

    // create a new div element to represent the project item
    const projectItem = document.createElement('div');
    projectItem.className = 'project-item';

    // create a new h3 element to represent the project title
    const projectTitle = document.createElement('h3');
    projectTitle.innerText = project.title;
    projectItem.appendChild(projectTitle);

    // create a new p element to represent the project description
    const projectDescription = document.createElement('p');
    projectDescription.innerText = project.description;
    projectItem.appendChild(projectDescription);

    // append the project item to the projects list element in the DOM
    projectList.appendChild(projectItem);
  };
}