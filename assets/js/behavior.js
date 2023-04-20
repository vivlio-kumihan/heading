// 見出し2に付いてる属性『letter-spacing: .5em;』を最後の文字だけ取り去る
let headingTwo = document.querySelectorAll("h2")
for (let heading of headingTwo) {
  let orgText = heading.innerHTML
  let lastChar = orgText.slice(-1)
  heading.innerHTML = orgText.replace(lastChar, `<span class="remove-letter-spacing">${lastChar}</span>`)
}

let pictures = document.querySelectorAll(".wrapper picture")
for (let picture of pictures) {
  picture.addEventListener("mouseenter", function() {
    this.firstElementChild.classList.add("hover-dark")
  })
  picture.addEventListener("mouseleave", function() {
    this.firstElementChild.classList.remove("hover-dark")
  })
}