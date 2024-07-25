let rId
let modeTypes = JSON.parse(localStorage.getItem("NData") ?? "[]")
let mode = document.querySelector(".mode")
let services = document.querySelector(".service")
render()

// To select normal note or Checkbox note
mode.addEventListener("click",(e)=>{
    if(e.target.classList.contains("nNote")){
        let Nlist = `<li><div><p>title</p><span class="close">X</span><textarea rows="4" cols="50"></textarea></div></li>`
        createElement(Nlist)
        console.log("normal note");
    } else if(e.target.classList.contains("cNote")){
        let Clist =  `<div> <p>title</p><span class="close">X</span><input type="todo" name="todo" id="todo"> <button>Add Task</button> </div>`
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
    const parser = new DOMParser();
    // Parse the element string
    const listHtml = parser.parseFromString(list, "text/html");
    const body = listHtml.body
    services.appendChild(body)
    modeTypes.push({list,rId})
    console.log(modeTypes);
}

// This function used to render arrays from local storage
function render(){
    modeTypes.forEach((element) => {
        const parser = new DOMParser();
        const listHtml = parser.parseFromString(element.list, "text/html");
        const body = listHtml.body
        services.appendChild(body) 
    })
}

// To remove the elements
services.addEventListener("click",(e) => {
     if(e.target.classList.contains("close")){
          console.log("close");
    }
})

