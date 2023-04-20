// 見出し2に付いてる属性『letter-spacing: .5em;』を最後の文字だけ取り去る
let headingTwo = document.querySelectorAll("h2")
for (let heading of headingTwo) {
  let lastChar = heading.textContent.slice(-1)
  let preText = heading.textContent.slice(0, -1)
  heading.innerHTML = `${preText}<span class="remove-letter-spacing">${lastChar}</span>`
}

let pictures = document.querySelectorAll(".wrapper picture")
for (let picture of pictures) {
  picture.addEventListener("mouseenter", function() {
    this.classList.add("cover")
  })
  picture.addEventListener("mouseleave", function() {
    this.classList.remove("cover")
  })
}