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

// Add num
function add_10() {
    inp.value = Number(inp.value) + 10
}
function add_20() {
    inp.value = Number(inp.value) + 20
}
function add_30() {
    inp.value = Number(inp.value) + 30
}

// Dell num
function dell_10() {
    inp.value = Number(inp.value) - 10
}
function dell_20() {
    inp.value = Number(inp.value) - 20
}
function dell_30() {
    inp.value = Number(inp.value) - 30
}