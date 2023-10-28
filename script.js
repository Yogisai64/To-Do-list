const inputBox = document.getElementById("input-box");
const listContainer =document.getElementById("list-container");
function addTask(){
    // if the user did't enter anyyhing 
    if (inputBox.value == '') {
        alert("You must write a task before adding!!!")
    }
    else{
        // lets store the user enterd value in the string in the list conntainer
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // to display the cross mark
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    // lets empty the input box after adding
    inputBox.value = "";
    saveData();
}
// click function
    
 listContainer.addEventListener("click" , function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
 }, false);
// just store the data we have entered in the list tag even if refreshed th eoage it will not close until its checked
 function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
 }
 // to show the taskl when ever we opened the file
 function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
 }
 showTask();