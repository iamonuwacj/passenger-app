let count = 0
let saveEl = document.getElementById("save-el")

function Increment() {
    count += 1
    document.getElementById("count-el").textContent = count
}

function save() {
    let countDash = count + " - "
    saveEl.textContent += countDash 
    document.getElementById("count-el").textContent = 0
    count = 0
    console.log(count)
}
