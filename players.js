
function setColor(element) {
    element.style.backgroundColor = "pink";
    element.style.padding = "30px";
    element.style.margin = "30px";
    element.style.border = "1px solid red";
    element.style.borderRadius = "10px"
}

const players = document.getElementsByClassName("player")

for (element of players) {
    setColor(element)
    element.addEventListener("click", function () {
        element.style.backgroundColor = "black";
        element.style.color = "white"
        const newTag = document.createElement("h4")
        const myAge= document.createElement("p")

        newTag.innerText = "My name is Robert"
        myAge.innerText="I am 22 years old.I live in Canada.I am a web developer"
        element.appendChild(newTag)
        element.appendChild(myAge)
        console.log("first")
    })
}

const button = document.getElementById("btnClr")
button.style.backgroundColor = "gray"
button.style.color = "white"
button.style.fontSize = "20px"
button.style.marginLeft = "550px"
button.style.padding = "40px"


function addNew() {
    const insertNew = document.getElementById("players")
    //console.log(insertNew);
    const playerAdd = document.createElement("div")
    playerAdd.classList.add("player");
    playerAdd.innerHtml = `   
    <h4 class="player-name">New Player</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quasi excepturi quo sit quibusdam animi voluptatibus officiis natus quod eveniet ab commodi quae, facere hic sunt a deleniti sequi reiciendis.</p>`;


    
    playerAdd.appendChild
setColor(playerAdd)
    insertNew.appendChild(playerAdd)
    console.log(playerAdd)
}

