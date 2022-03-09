export default function getLanguage(model) {
  const [lang] = model.split("_");
  return `${lang} English`;
}
