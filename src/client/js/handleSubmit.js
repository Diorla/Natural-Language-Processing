import postData from "./postData";
import loader from "../static/load.gif";
import updateInfo from "./updateInfo";

export default function handleSubmit(event) {
  event.preventDefault();

  let formUrl = document.getElementById("link").value;
  if (
    formUrl &&
    RegExp(/(https?:\/\/)?(www\d?\.)?\w{3,}\..{2,}/).test(formUrl)
  ) {
    const img = document.createElement("img");
    img.src = loader;
    document.body.appendChild(img);
    postData("http://localhost:1963/form", {
      url: formUrl,
    })
      .then((data) => {
        updateInfo(data);
        document.body.removeChild(img);
      })
      .catch((err) => {
        document.getElementById("error").textContent = err.message;
      });
  } else if (formUrl) {
    document.getElementById("error").textContent =
      "Please provide a valid web address";
  } else {
    document.getElementById("error").textContent =
      "Please provide a web address";
  }
}
