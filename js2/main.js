const handleClick = event => {
    const divs = document.querySelectorAll("div")
    const target = event.target.nextElementSibling
    target.classList.toggle("hide")
  }
  
  document.querySelectorAll("button").forEach(item => {
    item.addEventListener("click", handleClick)
  })




