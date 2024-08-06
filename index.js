let rId
let modeTypes = JSON.parse(localStorage.getItem("NData") ?? "[]")
let filteredmodeTypes = []
let mode = document.querySelector(".mode")
let services = document.querySelector(".service")
render()

// To select normal note or Checkbox note
mode.addEventListener("click",(e)=>{
    if(e.target.classList.contains("nNote")){
        let Nlist = `<div class="nodeList"><span class="close">X</span><p>Note title</p><input type="text" name="name-title" class="name-title" id="name-title"><textarea id="desc" class="desc" rows="4" cols="50"></textarea></div>`
        createElement(Nlist)
        console.log("normal note");
    } else if(e.target.classList.contains("cNote")){
        let Clist =  `<div class="nodeList" ><span class="close">X</span><p>Note title</p><input type="text" name="name-title" class="name-title" id="name-title"><input type="todo" name="todo" id="todo"> <button>Add Task</button></div>`
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
    let title
    let description
    // let desc = document.querySelector(".desc").value = "this is desc"
    // console.log(title,desc);
    modeTypes.push({list,rId,title:"",description:""})
    localStorage.setItem("NData",JSON.stringify(modeTypes))
    console.log(modeTypes);
    removefirstarr()
}


//This function used to remove the note elements in array and dom and add title and description in dom and array
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
                // console.log(newDescValue);
                

            }
            console.log(modeTypes);
            localStorage.setItem("NData",JSON.stringify(modeTypes))    
        })

        
        
        
        
    })
}

console.log(modeTypes);



//This function used to render arrays from local storage for initial load
function render(){
    modeTypes.forEach((element) => {
        const newElement = document.createElement("li");
        // newElement.querySelector("#name-title").value = ""
        // newElement.querySelector("#desc").value = ""
        newElement.innerHTML = element.list
        newElement.firstChild.setAttribute('data-ids' , element.rId);
        newElement.querySelector("#name-title").value = element.title
        newElement.querySelector("#desc").value = element.description
        console.log(element.description); 
        services.append(newElement.firstChild)
        removefirstarr() 
    })
}


