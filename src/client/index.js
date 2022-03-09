import handleSubmit from "./js/handleSubmit";
import "./styles/reset.scss";
import "./styles/base.scss";
import "./styles/form.scss";

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", handleSubmit);
