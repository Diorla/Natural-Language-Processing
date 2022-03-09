export default function getPolarity(score) {
  if (score === "P+") return "Strong positive";
  if (score === "P") return "Positive";
  if (score === "NEU") return "Neutral";
  if (score === "N") return "Negative";
  if (score === "N+") return "Strong negative";
  return "No polarity";
}
