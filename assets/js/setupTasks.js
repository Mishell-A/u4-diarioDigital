import { createTask, onGetTask } from "./firebase.js";
import { showMessage } from "./toastMessage.js";

const taskForm = document.querySelector("#task-form");
const tasksContainer = document.querySelector("#tasks-container");

export const setupTasks = () => {
  //Create
  // e: evento que desencadena una opcion
  //
  taskForm.addEventListener("submit", async (e) => {
    //Previene el comportamiento por defecto de recargar la pagina
    e.preventDefault();

    const title = taskForm["title"].value;
    const description = taskForm["description"].value;

    try {
      await createTask(title, description);
      taskForm.reset();
      showMessage("Tarea creada", "success");
    } catch (error) {
      showMessage(error.code, "error");
    }
  });

  onGetTask((querySnapshot) => {
    let tasksHtml = "";

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      tasksHtml += `<article class="task-article border border-2 rounder-2 p-3 my-3">
          <h4>${data.title}</h4>
          <hr />
          <p>${data.description}</p>
        </article>`;
    });

    //MOSTRAR LAS TAREAS EN EL DOM
    tasksContainer.innerHTML = tasksHtml;
  });
};
