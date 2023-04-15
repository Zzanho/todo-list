(()=>{"use strict";class t{constructor(t){this._title=t}}class e{constructor(t,e,n,s,o,i){this.title=t,this.description=e,this.dueDate=n,this.priority=s,this.notes=o,this.checklist=i}}class n{constructor(){this.projects=[],this.currentProject=null,this.taskFormVisible=!1,this.projectFormVisible=!1}createProject(e){const n=new t(e);this.projects.push(n),this.setCurrentProject(n)}setCurrentProject(t){this.currentProject=t,this.renderTasks()}createTask(t,n,s,o){if(!this.currentProject)throw new Error("No project selected");const i=new e(t,n,s,o);this.currentProject.addTask(i),this.renderTasks()}deleteTask(t){this.currentProject.deleteTask(t),this.renderTasks()}toggleTaskForm(){this.taskFormVisible=!this.taskFormVisible,this.renderTaskForm()}toggleProjectForm(){this.taskProjectVisible=!this.taskProjectVisible,this.renderProjectForm()}renderTasks(){const t=document.getElementById("task-container");t.innerHTML="",this.currentProject.tasks.forEach((e=>{const n=document.createElement("div");n.classList.add("task-card"),n.innerHTML=`\n        <h3>${e.title}</h3>\n        <p>${e.description}</p>\n        <p>Due date: ${e.dueDate}</p>\n        <p>Priority: ${e.priority}</p>\n        <button class="delete-task-btn">Delete</button>\n      `,n.querySelector(".delete-task-btn").addEventListener("click",(()=>{this.deleteTask(e)})),t.appendChild(n)}))}renderTaskForm(){const t=document.getElementById("task-container"),e=document.getElementById("task-form");this.taskFormVisible?(e.style.display="flex",t.appendChild(e)):e.style.display="none"}renderProjectForm(){const t=document.getElementById("project-form-container"),e=document.getElementById("mySidebar");this.taskProjectVisible?(t.style.display="flex",e.appendChild(projectForm)):t.style.display="none"}createFormUI(){document.getElementById("add-task-form-btn").addEventListener("click",(()=>{document.getElementById("task-form-container")||(document.getElementById("task-form-container").insertAdjacentHTML("beforeend",taskFormTemplate),document.getElementById("add-task-btn").addEventListener("click",(()=>{const t=document.getElementById("task-title-input"),e=document.getElementById("task-description-input"),n=document.getElementById("task-due-date-input"),s=document.getElementById("task-priority-input"),o=t.value,i=e.value,r=n.value,a=s.value;o&&r&&a&&projects&&(this.createTask(o,i,r,a),t.value="",e.value="",n.value="",s.value="",this.toggleTaskForm())}))),this.toggleTaskForm()})),document.getElementById("create-new-project").addEventListener("click",(()=>{this.toggleProjectForm()}))}initializeUI(){const t=document.getElementById("create-project-btn");t&&t.addEventListener("click",(()=>{const t=document.createElement("input");t.setAttribute("type","text");const e=t.value;e&&(this.createProject(e),t.value="");const n=document.getElementById("project-form");n.insertBefore(t,n.firstChild)}));const e=document.getElementById("toggle-task-form-btn");e&&e.addEventListener("click",(()=>{this.toggleTaskForm()})),document.querySelector(".collapse-menu").addEventListener("click",(()=>{document.getElementById("container").classList.toggle("collapse")}))}}document.addEventListener("DOMContentLoaded",(()=>{(()=>{const t=document.getElementById("container"),e=document.createElement("header");e.className="header",e.innerHTML='\n    <nav>\n      <button class="btn collapse-menu">\n        <i class="fas fa-tasks"></i>\n      </button>\n      <div>ToDo List</div>\n      <div id="add-task-btn-container">\n        <button class="btn add-task" id="add-task-form-btn">\n          <i class="fas fa-plus"></i>\n        </button>\n      </div>\n    </nav>\n  ',t.appendChild(e);const n=document.createElement("main");n.innerHTML='\n    <section class="menu" id="mySidebar">\n      <div class="project-section-title">Projects</div>\n      <button class="btn" id="create-new-project">\n        <i class="fas fa-plus"></i>Create new project\n      </button>\n      <div id="project-form-container"></div>\n      <div id="projects-list"></div>\n    </section>\n    <section class="task-container">\n      <div id="task-form-container"></div>\n      <div class="cards" id="cards"></div>\n    </section>\n  ',t.appendChild(n);const s=document.getElementById("project-form-container"),o=document.createElement("div");o.classList="project-form",o.innerHTML='\n    <h2>Create New Project</h2>\n    <form id="project-form">\n     <div id="top">\n      <label for="project-title">Title</label>\n      <input type="text" id="project-title" name="project-title" required>\n     </div>\n     <div id="bot">\n      <button type="submit">Create Project</button>\n      <button type="button" id="cancel-project-form">Cancel</button>\n     </div>\n    </form>\n  ',s.appendChild(o),document.getElementById("task-form-container").innerHTML='\n  <form id="task-form">\n  <h2>Add New Task</h2>\n    <label for="task-title">Title</label>\n    <input type="text" id="task-title" name="task-title" required>\n    <label for="task-description">Description</label>\n    <textarea id="task-description" name="task-description"></textarea>\n    <label for="task-due-date">Due Date</label>\n    <input type="date" id="task-due-date" name="task-due-date">\n    <label for="task-priority">Priority</label>\n    <select id="task-priority" name="task-priority">\n      <option value="high" style="background-color: red;">High</option>\n      <option value="medium">Medium</option>\n      <option value="low">Low</option>\n    </select>\n    <label for="task-project">Project</label>\n    <select id="task-project" name="task-project"></select>\n    <button type="submit" id="add-task-btn">Add Task</button>\n    <button type="button" id="cancel-task-form">Cancel</button>\n  </form>\n'})(),(()=>{const t=new n;t.initializeUI(),t.createFormUI()})()}))})();