import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
const signUpform = document.querySelector("#signup-form");
import { showMessage } from "./toastMessage.js";

signUpform.addEventListener("submit", async (e) => {
  // para que no se recargue la pagina y se vea en consola el form
  e.preventDefault();
  console.log("formulario enviado");

  //obtener los datos del formulario
  const email = signUpform["signup-email"].value;
  const password = signUpform["signup-password"].value;

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredentials);
    showMessage("Usuario correctamente registrado", "success");
  } catch (error) {
    console.log(error);
    if (error.code === "auth/email.already-in-use") {
      showMessage("Este email ya está registrado", "error");
    } else {
      showMessage("Hubo un error al registrar el usuario", "error");
    }
  }
});
