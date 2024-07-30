let rId
let modeTypes = JSON.parse(localStorage.getItem("NData") ?? "[]")
let mode = document.querySelector(".mode")
let services = document.querySelector(".service")
render()

// To select normal note or Checkbox note
mode.addEventListener("click",(e)=>{
    if(e.target.classList.contains("nNote")){
        let Nlist = `<li><p>title</p><span class="close">X</span><textarea rows="4" cols="50"></textarea></li>`
        createElement(Nlist)
        console.log("normal note");
    } else if(e.target.classList.contains("cNote")){
        let Clist =  `<li><p>title</p><span class="close">X</span><input type="todo" name="todo" id="todo"> <button>Add Task</button></li>`
        createElement(Clist)
        console.log("checkbox note");
    } 
   
    localStorage.setItem("NData",JSON.stringify(modeTypes))
    console.log("active");
})
let remove = document.querySelectorAll(".close")

// This function is used to create element and pushed those element to array 
function createElement(list){
    rId = crypto.randomUUID()
    console.log("normal note");
    const newElement = document.createElement("div");
    const newID = document.createElement("p");
    newElement.innerHTML = list
    newID.innerHTML = rId
    newElement.append(newID)
    services.appendChild(newElement)
    modeTypes.push({list,rId})
    console.log(modeTypes);
    console.log(newID);
}


//To remove the elements
remove.forEach((element,index) => {
    element.addEventListener("click", ()=> {
        console.log("removed");
        element.parentElement.remove()
        // modeTypes.splice(index,1)
        // console.log(modeTypes.splice(index,1));
        localStorage.setItem("NData",JSON.stringify(modeTypes))
        console.log(modeTypes[5]);
    })
})

console.log(modeTypes);

// This function used to render arrays from local storage
function render(){
    modeTypes.forEach((element) => {
        const newElement = document.createElement("div");
        newElement.innerHTML = element.list
        services.append(newElement.firstChild) 
    })
}


