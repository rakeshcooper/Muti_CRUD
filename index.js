let rId
let modeTypes = JSON.parse(localStorage.getItem("NData") ?? "[]")
let mode = document.querySelector(".mode")
let services = document.querySelector(".service")
render()

// To select normal note or Checkbox note
mode.addEventListener("click",(e)=>{
    if(e.target.classList.contains("nNote")){
        let Nlist = `<li class="nodeList" ><p>title</p><span class="close">X</span><textarea rows="4" cols="50"></textarea></li>`
        createElement(Nlist)
        console.log("normal note");
    } else if(e.target.classList.contains("cNote")){
        let Clist =  `<li class="nodeList" ><p>title</p><span class="close">X</span><input type="todo" name="todo" id="todo"> <button>Add Task</button></li>`
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
    newElement.innerHTML = list
    newElement.firstChild.setAttribute('data-ids' , rId);
    services.appendChild(newElement.firstChild)
    modeTypes.push({list,rId})
    console.log(modeTypes);
}




//To remove the elements
let nodeList = document.querySelectorAll(".nodeList")
nodeList.forEach((element,index) => {
    element.addEventListener("click", (e)=> {
        console.log(element);
        let dataIdattr = element.getAttribute("data-ids")
        console.log(dataIdattr);
        console.log(modeTypes[index].rId);
            // if(dataIdattr == modeTypes[index].Id){
                console.log("removed");
                element.remove()
                const filteredmodeTypes = modeTypes.filter(val => {return val.rId != dataIdattr});
                console.log(filteredmodeTypes);
                // localStorage.setItem("NData",JSON.stringify(modeTypes))
                
            // }
    })
})

console.log(modeTypes);

// This function used to render arrays from local storage
function render(){
    modeTypes.forEach((element) => {
        const newElement = document.createElement("div");
        newElement.innerHTML = element.list
        newElement.firstChild.setAttribute('data-ids' , element.rId);
        services.append(newElement.firstChild) 
    })
}


