// modal
if(localStorage.getItem("arr") == null){
    localStorage.setItem("arr", 0)
}
   
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


//              Changes
let arr = [0]
arr = localStorage.getItem("arr")
    arr = arr.split(',')
    for(let i = 0; i<arr.length; i++){
        arr[i] = Number(arr[i])
    }
// if(arr[0] == 0){
//     arr = []
// }

console.log(arr)


// Main
let push = document.querySelector('.today-push')
let pod = document.querySelector('.today-pod')

let sum = 0
arr.map((item) => sum += item);
push.innerHTML = sum
pod.innerHTML = arr.length-1

// Second
let best = document.querySelector('.best')
let sort_arr = arr.sort((a,b)=>a-b);
best.innerHTML = sort_arr[sort_arr.length-1] 

let total = document.querySelector('.total')
total.innerHTML = sum

let average = document.querySelector('.average')
average.innerHTML = sum/arr.length + '/ap'




function save() {
    if((inp.value == '') || (inp.value<=0)){
        alert('Error')
        return
    }
    else{
        arr.push(Number(inp.value))

        //          Add num
        sum += Number(inp.value)
        push.innerHTML = sum
        pod.innerHTML = arr.length

        //          Change 

        // Best
        let sort_arr = arr.sort((a,b)=>a-b);
        best.innerHTML = sort_arr[sort_arr.length-1] 

        // Total
        total.innerHTML = sum

        // Average
        average.innerHTML = Math.round(sum/arr.length) + '/ap'

        // LocalStorage
        localStorage.setItem("arr", arr)
        //          Close modal
        close_modal()
    } 
}
