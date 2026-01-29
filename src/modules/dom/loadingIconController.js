export function renderLoadingIcon() {
  const div = document.createElement("div");
  div.classList.add("loader");
  document.body.appendChild(div);
  return div;
}

export function removeLoadingIcon(element) {
  element?.remove();
}
