import "./styles/base.scss";
import educationImg from "./static/education.jpg";
import calc from "./js/calc";

document.querySelector("img").src = educationImg;
console.log("hello world", calc(8, 9));

fetch("http://localhost:1960/data")
  .then((res) => {
    res
      .json()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
