const taskBtn = document.querySelector(".task-btn");
const ul = document.querySelector("#task-list");
const inputTask = document.querySelector("#task-input")
const mianContainer = document.querySelector("#todo-container");
const h2 = document.querySelector("h2");
taskBtn.addEventListener("click", () => {
    addTask();
})

function addTask() {
    const input = document.getElementById('task-input');
    const taskText = input.value.trim();
    let dnt = new Date();
    let strTime = "Started at ---> " + " " + dnt.getDate() + "-" + (dnt.getMonth()+1) +
        "-"+dnt.getFullYear()+ " "+ dnt.getHours()+":"+
        dnt.getMinutes()+":"+dnt.getSeconds();
    console.log(strTime);
    if (taskText === '') 
        return;
    input.value = '';

    const li = document.createElement('li');
    li.innerText = taskText + "\n" + "\n" + strTime;
    ul.appendChild(li);
    li.addEventListener('click', () => {
        li.style.textDecoration = "line-through";
        li.style.color = "green";
        deleteBtn.style.textDecoration = "none";
        alert("The task is completed...")
        
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);

     
  }

const mode = document.querySelector(".mode-icon");
let modeState = "Light";

mode.addEventListener("click", (e) => {
    e.preventDefault();
    if (modeState === "Light") {
        document.body.style.transition = "3s ease";
    }
    else {
        document.body.style.transition = "3s ease";
    }

    setTimeout(() => {
        if(modeState === "Light") {
            modeState = "Dark";
            
            document.body.style.background = "url(./todoBG.jpg)";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
            mode.style.background = "url(Light_Mode.png)";
            mode.style.backgroundSize = "cover";
            mode.style.backgroundRepeat = "no-repeat";
            h2.style.background = "linear-gradient(45deg, rgba(255, 217, 192, 0.918), rgba(155, 141, 132, 0.918));"
        }
    }, 1000);
})