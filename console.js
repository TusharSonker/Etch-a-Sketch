const button = document.querySelector('button');
button.addEventListener('click',()=>{generateGrid();});

function generateGrid() {
    const input = document.querySelector('input');
    let inputValue = input.value;
    console.log(inputValue)
    const container = document.querySelector('.container');
    for(let i = 0;i<inputValue;i++) {
        let parent = document.createElement('div.parent');
        for(let j = 0;j<inputValue;j++) {
            let child = document.createElement('div');
            child.setAttribute(
                'style','height: 20px; width: 20px; border: 2px solid red'
            );
            child.addEventListener('click',()=>{child.style.backgroundColor = 'red';});
            parent.appendChild(child);
        }
        parent.setAttribute('style','display: flex;');
        container.appendChild(parent);
    }
}