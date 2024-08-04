let rId
let modeTypes = JSON.parse(localStorage.getItem("NData") ?? "[]")
let filteredmodeTypes = []
let mode = document.querySelector(".mode")
let services = document.querySelector(".service")
let currentIndex = 0
render()

// To select normal note or Checkbox note
mode.addEventListener("click",(e)=>{
    if(e.target.classList.contains("nNote")){
        let Nlist = `<div class="nodeList"><span class="close">X</span><p>Note title</p><input type="text" name="name-title" class="name-title" id="name-title"><textarea class="desc" rows="4" cols="50"></textarea></div>`
        createElement(Nlist)
        console.log("normal note");
    } else if(e.target.classList.contains("cNote")){
        let Clist =  `<div class="nodeList" ><span class="close">X</span><p>Note title</p><input type="text" name="name-title" class="class="name-title" id="name-title"><input type="todo" name="todo" id="todo"> <button>Add Task</button></div>`
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
    let title = ""
    // let desc = document.querySelector(".desc").value = "this is desc"
    // console.log(title,desc);
    modeTypes.push({list,rId,title})
    localStorage.setItem("NData",JSON.stringify(modeTypes))
    console.log(modeTypes);
    removefirstarr()
}



//This function used to remove the note elements in array and dom
function removefirstarr(){
    let nodeList = document.querySelectorAll(".nodeList")
    nodeList.forEach((element,index) => {
    let dataIdattr = element.getAttribute("data-ids")
    console.log(element);
    console.log(dataIdattr);
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
           if(titValue){
                currentIndex = index
                titValue = e.target.value
                modeTypes[currentIndex].title = e.target.value 
            }
            localStorage.setItem("NData",JSON.stringify(modeTypes))    
        })
    })
}

console.log(modeTypes);

// To add title and description in array and dom




//This function used to render arrays from local storage for initial load
function render(){
    modeTypes.forEach((element) => {
        const newElement = document.createElement("li");
        newElement.innerHTML = element.list
        newElement.firstChild.setAttribute('data-ids' , element.rId);
    //    if (element.title.length > 0) {
    //         newElement.firstChild.children[2].value = element.title
    //    } else{
    //         newElement.firstChild.children[2].value = ""    
    //    }
    console.log(element.title.length);
     
        services.append(newElement.firstChild)
        removefirstarr() 
    })
}


