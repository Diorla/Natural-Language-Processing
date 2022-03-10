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
    document.querySelector("#loader-wrapper").innerHTML = "";
    document.querySelector("#loader-wrapper").appendChild(img);
    postData("http://localhost:1963/form", {
      url: formUrl,
    })
      .then((data) => {
        document.querySelector("dl").innerHTML = "";
        updateInfo(data);
        document.querySelector("#loader-wrapper").removeChild(img);
        document.querySelector("h2").classList.remove("hidden");
      })
      .catch((err) => {
        document.querySelector("#loader-wrapper").removeChild(img);
        document.querySelector("#loader-wrapper").textContent = err.message;
      });
  } else if (formUrl) {
    document.getElementById("error").textContent =
      "Please provide a valid web address";
  } else {
    document.getElementById("error").textContent =
      "Please provide a web address";
  }
}
