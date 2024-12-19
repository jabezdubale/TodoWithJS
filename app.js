const inputText = document.getElementById("input-text");
const mainContainer = document.getElementById("main-container"); 
const theForm = document.querySelector(".inputField");
getData();
function addTask(){
    if(inputText.value === ""){
        alert("Please enter your todo list");
    }
    else{
    const taskContainer = document.createElement("div");
    taskContainer.className = "taskItem undoneTodos";

    taskContainer.appendChild(Object.assign(document.createElement("img"), {
        src: "icons/uncheckMark.png", 
        className: "check-id"
    }));

    taskContainer.appendChild(Object.assign(document.createElement("p"), {
        textContent: inputText.value
    }));

    taskContainer.appendChild(Object.assign(document.createElement("img"), {
        src: "icons/delete.png",
        className: "close-icon"
    }));

    mainContainer.appendChild(taskContainer);
    addData();
    inputText.value= "";
}
}

theForm.addEventListener("submit", function(e){
    e.preventDefault();
    addTask();
})

mainContainer.addEventListener("click", function(e){
    e.preventDefault();
    if(e.target.className === "check-id" && e.target.parentElement.className ==="taskItem undoneTodos"){
        e.target.src = "icons/checkMark.png";
        e.target.parentElement.className ="taskItem doneTodos"
        addData();
    }
    else if(e.target.className === "check-id" && e.target.parentElement.className ==="taskItem doneTodos"){
        e.target.src = "icons/uncheckMark.png";
        e.target.parentElement.className ="taskItem undoneTodos"
        addData();
    }
    else if (e.target.className === "close-icon"){
        e.target.parentElement.remove();
        addData();
    }
})
function addData(){
    localStorage.setItem("data", mainContainer.innerHTML)
}
function getData(){
    const storedData = localStorage.getItem("data");
    if(storedData) mainContainer.innerHTML = storedData;
}
