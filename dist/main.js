(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{(()=>{const n=document.getElementById("container");(()=>{const e=document.createElement("header");e.className="header",e.innerHTML='\n    <nav>\n      <button class="btn collapse-menu">\n        <i class="fas fa-tasks"></i>\n      </button>\n      <div>ToDo List</div>\n      <button class="btn add-task">\n        <i class="fas fa-plus"></i>\n      </button>\n    </nav>\n      ',n.appendChild(e)})(),(()=>{const e=document.createElement("main");e.innerHTML='\n      <section class="menu" id="mySidebar">\n        <div class="project-section-title">Projects</div>\n        <button class="btn" id="create-new-project"><i class="fas fa-plus"></i>Create new project</button>\n        <div id="projects-list"></div>\n      </section>\n      <section class="task-container">\n        <div class="cards" id="cards"></div>\n      </section>\n        ',n.appendChild(e)})()})(),document.addEventListener("click",(n=>{n.target.matches(".collapse-menu")&&document.getElementById("container").classList.toggle("collapse")}))}))})();