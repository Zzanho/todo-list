export const DOM_HEADER = () => {
  const container = document.getElementById('container')
  const createNavBar = (() => {

    const header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = `
    <nav>
      <button class="btn collapse-menu">
        <i class="fas fa-tasks"></i>
      </button>
      <div>ToDo List</div>
      <button class="btn add-task">
        <i class="fas fa-plus"></i>
      </button>
    </nav>
      `;
    container.appendChild(header)

  })();

  const createMenu = (() => {
    const main = document.createElement('main');

    main.innerHTML = `
      <section class="menu" id="mySidebar">
        <div class="project-section-title">Projects</div>
        <button class="btn" id="create-new-project"><i class="fas fa-plus"></i>Create new project</button>
        <div id="projects-list"></div>
      </section>
      <section class="task-container">
        <div class="cards" id="cards"></div>
      </section>
        `;
    container.appendChild(main)

  })();

}