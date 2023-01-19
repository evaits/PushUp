// modal
let modal = document.querySelector(".modal")
let inp = document.querySelector("#much")

function open_modal() {
    modal.style.display = "block"
}
function close_modal() {
    modal.style.display = "none"
    inp.value = ''
}

// Edid num
function add(amount) {
    inp.value = Number(inp.value) + amount
}