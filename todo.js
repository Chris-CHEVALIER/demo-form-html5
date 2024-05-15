const task = document.getElementById("task")
const list = document.getElementById("list")
const form = document.querySelector(".container")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const inputValue = task.value
    if (inputValue) {
        const li = document.createElement("li")
        li.addEventListener("click", () => {
            li.remove()
        })
        li.textContent = inputValue
        list.appendChild(li)
        task.value = ""
    }
})