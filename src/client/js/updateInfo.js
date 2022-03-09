import createElement from "./createElement";
import getPolarity from "./getPolarity";
import getLanguage from "./getLanguage";

export default function updateInfo(data) {
  const { subjectivity, agreement, confidence, irony, score_tag, model } = data;

  createElement("Subjectivity", subjectivity);
  createElement("Agreement", agreement);
  createElement("Confidence", confidence);
  createElement("Irony", irony);
  createElement("Polarity", getPolarity(score_tag));
  createElement("Language", getLanguage(model));
}
