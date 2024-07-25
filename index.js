let rId
let modeTypes = JSON.parse(localStorage.getItem("NData") ?? "[]")
let mode = document.querySelector(".mode")
let services = document.querySelector(".service")
let remove = document.querySelectorAll(".close")
render()

// To select normal note or Checkbox note
mode.addEventListener("click",(e)=>{
    if(e.target.classList.contains("nNote")){
        let Nlist = `<li><div><p>title</p><span class="close">X</span><textarea rows="4" cols="50"></textarea></div></li>`
        createElement(Nlist)
        console.log("normal note");
    } else if(e.target.classList.contains("cNote")){
        let Clist =  `<li><div><p>title</p><span class="close">X</span><input type="todo" name="todo" id="todo"> <button>Add Task</button></div></li>`
        createElement(Clist)
        console.log("checkbox note");
    } 
   
    localStorage.setItem("NData",JSON.stringify(modeTypes))
    console.log("active");
})


// This function is used to create element and pushed those element to array 
function createElement(list){
    rId = crypto.randomUUID()
    console.log("normal note");
    const newElement = document.createElement("div");
    newElement.innerHTML = list
    services.appendChild(newElement.firstChild)
    modeTypes.push({list,rId})
    console.log(modeTypes);
}

// This function used to render arrays from local storage
function render(){
    modeTypes.forEach((element) => {
        const newElement = document.createElement("div");
        newElement.innerHTML = element.list
        services.append(newElement.firstChild) 
    })
}

//To remove the elements
remove.forEach((element) => {
    element.addEventListener("click", ()=> {
        console.log("removed");
    })
})

// console.log(typeof services.children[0]);


