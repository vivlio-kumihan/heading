const headings = document.querySelectorAll("section > h2")

headings.forEach((element, idx) => {
  const topText = document.createElement("span"),
        number = idx + 1

  if (number < 10) {
    topText.textContent = "0" + String(number)
    element.appendChild(topText)
  } else {
    topText.textContent = number
    element.appendChild(topText)
  }
});