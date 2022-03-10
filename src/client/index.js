import handleSubmit from "./js/handleSubmit";
import "./styles/reset.scss";
import "./styles/base.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/main.scss";
import "./styles/footer.scss";

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", handleSubmit);
