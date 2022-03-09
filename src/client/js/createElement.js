/**
 * It will create a list item
 * @param {string} title the title of the list item
 * @param {string} content the value or description
 */
export default function createElement(title, content) {
  const listTitle = document.createElement("dt");
  listTitle.textContent = title;
  const listContent = document.createElement("dd");
  listContent.textContent = content;

  document.querySelector("dl").appendChild(listTitle);
  document.querySelector("dl").appendChild(listContent);
}
