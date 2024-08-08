let rId
let modeTypes = JSON.parse(localStorage.getItem("NData") ?? "[]")
let filteredmodeTypes = []
let mode = document.querySelector(".mode")
let services = document.querySelector(".service")
let rTid
let filteredtodoList = []
render()

// To select normal note or Checkbox note
mode.addEventListener("click",(e)=>{
    if(e.target.classList.contains("nNote")){
        let Nlist = `<div class="nodeList"><span class="close">X</span><p>Note title</p><input type="text" name="name-title" class="name-title" id="name-title"><textarea id="desc" class="desc" rows="4" cols="50"></textarea></div>`
        createElement(Nlist)
        console.log("normal note");
    } else if(e.target.classList.contains("cNote")){
        let Clist =  `<div class="nodeList" ><span class="close">X</span><p>Note title</p><input type="text" name="name-title" class="name-title" id="name-title"><input type="todo"  name="todo" id="todo"> <button class="addBtn">Add Task</button><ul class="todos"></ul></div>`
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
    const newElement = document.createElement("li");
    newElement.innerHTML = list
    newElement.firstChild.setAttribute('data-ids' , rId);
    services.appendChild(newElement)
    modeTypes.push({list,rId,title:"",description:"",TList:[]})
    localStorage.setItem("NData",JSON.stringify(modeTypes))
    console.log(modeTypes);
    removefirstarr()
}


//This function used to remove the note elements in array and dom and add title and description in dom and array
function removefirstarr(){
    let nodeList = document.querySelectorAll(".nodeList")
    nodeList.forEach((element) => {
    let dataIdattr = element.getAttribute("data-ids")
    element.addEventListener("click", (e)=> {
            if(e.target.classList.contains("close")){
                console.log(modeTypes);
                filteredmodeTypes = modeTypes.filter((val) => {return val.rId !== dataIdattr});
                console.log(filteredmodeTypes);
                modeTypes = filteredmodeTypes
                element.remove()
                localStorage.setItem("NData",JSON.stringify(modeTypes))
            }        
        })
    element.addEventListener("input", (e)=> {
        let titValue = e.target.classList.contains("name-title")
        let descValue = e.target.classList.contains("desc")
           if(titValue){
              let newTitleValue =  modeTypes.map((val) => {
                    if(val.rId == dataIdattr){
                        return val.title = e.target.value
                    }  
                })
                console.log(newTitleValue);    
            } else if(descValue){
                modeTypes.map((val) => {
                    if(val.rId == dataIdattr){
                       return val.description = e.target.value
                    }  
                })
            }
            console.log(modeTypes);
            localStorage.setItem("NData",JSON.stringify(modeTypes))    
        })        
    })
}
console.log(modeTypes);

// This code to add todo list
function createTodoelement(){
    let addBtn = document.querySelectorAll(".addBtn")
    let todoBox = document.querySelector(".todos")
    let todoList = ` <div class="todonodeList"><input type="text" name="tList" class="tList" id="tList"><input type="checkbox" name="todoCheck" class="todoCheck" id="todoCheck"><button class="delBtn">X</button></div>`
    addBtn.forEach((element) => {
        element.addEventListener("click",()=> {
            rTid = crypto.randomUUID()
            console.log("todolist");
            const newElement = document.createElement("li");
            newElement.innerHTML = todoList
            newElement.children[0].setAttribute('data-rtids' , rTid);
            // todoBox.appendChild(newElement)
            element.nextSibling.appendChild(newElement)
            let dataIdattr = element.parentElement.getAttribute("data-ids")
            modeTypes.forEach((val) => {
                if (val.rId == dataIdattr) {
                    val.TList.push({todoList,rTid})
                }
            })
            localStorage.setItem("NData",JSON.stringify(modeTypes))
        })
    })
}




// This function to remove nested array and dom

let todonodeList = document.querySelectorAll(".todonodeList")
todonodeList.forEach((element => {
    element.addEventListener("click", (e)=>{
        let datatodoIdattr = element.getAttribute("data-rtids")
        console.log(datatodoIdattr);
        if(e.target.classList.contains("delBtn")){
            modeTypes.map((tval) => {
                filteredtodoList = tval.TList.filter((val) => {
                    return val.rTid !== datatodoIdattr})
                    console.log(filteredtodoList);
                    tval.TList = filteredtodoList
            })
            element.remove()    
            localStorage.setItem("NData",JSON.stringify(modeTypes))
        }
    })
}))



//This function used to render arrays from local storage for initial load
function render(){    
    modeTypes.forEach((element) => {
            const newElement = document.createElement("li");
            newElement.innerHTML = element.list
            newElement.firstChild.setAttribute('data-ids' , element.rId);
            newElement.querySelector(".name-title").value = element.title
            if(newElement.firstChild.children[3].classList.contains("desc")){
                newElement.querySelector(".desc").value = element.description
            }
            console.log(element.description); 
            services.append(newElement)
            
            element.TList.map((telement) => {
                let todoBox = document.querySelector(".todos")
                const newtodoElement = document.createElement("li");
                newtodoElement.innerHTML = telement.todoList
                newtodoElement.children[0].setAttribute('data-rtids' , telement.rTid);
                // todoBox.append(newtodoElement)
                newElement.children[0].lastChild.append(newtodoElement)
            })
             
    })
    removefirstarr() 
    createTodoelement() 
}
