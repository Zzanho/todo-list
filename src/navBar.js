const createNavBar = () => {
    const content = document.querySelector('#content')
    const header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = `
      <div class="logo">ToDo List</div>
      <nav class="nav">
          <button class="btn collapse-menu"><i class="fas fa-bars"></i></button>


      </nav>
      <div class="info">
      <div class="low">Low</div>
      <div class="medium">Medium</div>
      <div class="high">High</div>
      </div>
      `;
    content.appendChild(header)

}

export default createNavBar
