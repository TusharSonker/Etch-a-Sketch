const container = document.querySelector('.container');
for(let i = 0;i<16;i++) {
    let parent = document.createElement('div.parent');
    for(let j = 0;j<16;j++) {
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