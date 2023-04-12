import { Task } from "./task";
import { Projects } from "./project";


const DOM_BODY = () => {


    document.addEventListener('click', (e) => {
        if (e.target.matches('.collapse-menu')) {
            const container = document.getElementById('container');
            container.classList.toggle('collapse');
        }


    });


}

export { DOM_BODY }