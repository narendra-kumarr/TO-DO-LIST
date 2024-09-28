let input = document.getElementById('inpu')
let text = document.querySelector('.text')

function add(){
    if(input.value == ''){
        alert('Please enter a value')
    }
    else{
        let newElement = document.createElement('ul')
        newElement.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i> `;
        text.appendChild(newElement)
        input.value=''
        newElement.querySelector('i').addEventListener('click', remove)
        function remove(){
            newElement.remove()
        }

    }
}