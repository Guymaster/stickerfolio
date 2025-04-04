const skillItems = document.querySelectorAll('.skills-item');
const skillTitleElt = document.querySelector('.skills-title');

skillItems.forEach(item => {
    const name = item.querySelector("span").innerText;
    const newDiv = document.createElement("div");
    newDiv.setAttribute("data-name", name);
    newDiv.innerText = name;
    skillTitleElt.appendChild(newDiv);
});

function handleChange(event){
    const item = event.currentTarget;
    console.log("item", item);
    skillTitleElt.querySelectorAll('div').forEach(div => {
        div.classList.remove('active');
    });
    const name = item.querySelector("span").innerText;
    console.log(name);
    const activeDiv = skillTitleElt.querySelector(`div[data-name="${name}"]`);
    if (activeDiv) {
        activeDiv.classList.add('active');
    }
}

skillItems.forEach(item => {
    item.addEventListener('mouseenter', handleChange);
    item.addEventListener('click', handleChange);
});