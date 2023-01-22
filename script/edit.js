if (localStorage.getItem('arr')) {
    let ul = document.querySelector('ul')
    let li
    
    li = document.createElement('li')
    li.className = "table"

    let div;

    div = document.createElement('div')
    div.className = "info";
    

    let span1;
    let span2;
    span1 = document.createElement('span')
    span1.className = "data"
    span1.innerHTML = "22.01.23"

    span2 = document.createElement('span')
    span2.className = "number"
    span2.innerHTML = "43"


    let btn;

    btn = document.createElement('button')
    btn.className = "btn"
    btn.innerHTML = "Edit"
    
    div.append(span1)
    div.append(span2)
    li.append(div)
    li.append(btn)
    ul.append(li)

    }