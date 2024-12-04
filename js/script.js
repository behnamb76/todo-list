const container = document.getElementById("container")
document.getElementById("add-button").addEventListener("click", function () {
    let text = document.getElementById("task-text").value;
    const liItem = document.createElement("li")
    liItem.innerText = text
    document.getElementById("List-of-task").appendChild(liItem)
    container.style.height = container.scrollHeight + 'px'
    document.getElementById("task-text").value = ""
})

document.getElementById("clear-button").addEventListener("click", function () {
    document.getElementById("List-of-task").innerHTML = ''
    container.style.height = '75%'
})