const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const deadlineInput = document.getElementById("deadline"); // deadline input

function addTask(){
    if(inputBox.value == ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");

        // current date
        let date = new Date().toLocaleDateString();

        // deadline
        let deadline = deadlineInput.value;

        li.innerHTML = "📝 " + inputBox.value + " (" + date + " | Due: " + deadline + ")";
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    deadlineInput.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");  
        saveData(); 
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

inputBox.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();