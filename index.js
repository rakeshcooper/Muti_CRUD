// let rId
// let modeTypes = JSON.parse(localStorage.getItem("NData") ?? "[]")
// let filteredmodeTypes = []
// let mode = document.querySelector(".mode")
// let services = document.querySelector(".service")
// render()

// // To select normal note or Checkbox note
// mode.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("nNote")){
//         let Nlist = `<li class="nodeList" ><p>title</p><span class="close">X</span><textarea rows="4" cols="50"></textarea></li>`
//         createElement(Nlist)
//         console.log("normal note");
//     } else if(e.target.classList.contains("cNote")){
//         let Clist =  `<li class="nodeList" ><p>title</p><span class="close">X</span><input type="todo" name="todo" id="todo"> <button>Add Task</button></li>`
//         createElement(Clist)
//         console.log("checkbox note");
//     } 
//     localStorage.setItem("NData",JSON.stringify(modeTypes))
//     console.log("active");
   
// })
// let remove = document.querySelectorAll(".close")

// // This function is used to create element and pushed those element to array 
// function createElement(list){
//     rId = crypto.randomUUID()
//     console.log("normal note");
//     const newElement = document.createElement("div");
//     newElement.innerHTML = list
//     newElement.firstChild.setAttribute('data-ids' , rId);
//     services.appendChild(newElement.firstChild)
//     // let title = document.querySelector(".name-title").value
//     // let desc = document.querySelector(".desc").value = "this is desc"
//     // console.log(title,desc);
//     modeTypes.push({list,rId})
//     localStorage.setItem("NData",JSON.stringify(modeTypes))
//     console.log(modeTypes);
//     removefirstarr()
// }



// //This function used to remove the note elements
// function removefirstarr(){
//     let nodeList = document.querySelectorAll(".nodeList")
//     nodeList.forEach((element) => {
//     let dataIdattr = element.getAttribute("data-ids")
//     console.log(element);
//     console.log(dataIdattr);
//     element.addEventListener("click", (e)=> {
//             if(e.target.classList.contains("close")){
//                 console.log(modeTypes);
//                 filteredmodeTypes = modeTypes.filter((val) => {return val.rId !== dataIdattr});
//                 console.log(filteredmodeTypes);
//                 modeTypes = filteredmodeTypes
//                 element.remove()
//                 localStorage.setItem("NData",JSON.stringify(modeTypes))
//             }    
//         })
//     })
// }

// console.log(modeTypes);

// //This function used to render arrays from local storage for initial load
// // function render(){
// //     modeTypes.forEach((element) => {
// //         const newElement = document.createElement("div");
// //         newElement.innerHTML = element.list
// //         newElement.firstChild.setAttribute('data-ids' , element.rId);
// //         services.append(newElement.firstChild)
// //         removefirstarr() 
// //     })
// // }

// function render(){
//     modeTypes.forEach((element) => {
//         const newElement = document.createElement("div");
//         newElement.innerHTML = element.list
//         newElement.firstChild.setAttribute('data-ids' , element.rId);
//         services.append(newElement.firstChild)
//         removefirstarr() 
//     })
// }


let rId
let modeTypes = JSON.parse(localStorage.getItem("NData") ?? "[]")
let filteredmodeTypes = []
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
    removefirstday()
}



//To remove the elements
function removefirstday(){
    let nodeList = document.querySelectorAll(".nodeList")
    nodeList.forEach((element) => {
        let dataIdattr = element.getAttribute("data-ids")
        console.log(element);
        console.log(dataIdattr);
        element.addEventListener("click", ()=> {
            console.log(modeTypes);
            filteredmodeTypes = modeTypes.filter((val) => {return val.rId !== dataIdattr});
            console.log(filteredmodeTypes);
            modeTypes = filteredmodeTypes
            element.remove()
            localStorage.setItem("NData",JSON.stringify(modeTypes))
        })
    })
}

console.log(modeTypes);

// This function used to render arrays from local storage
function render(){
    modeTypes.forEach((element) => {
        const newElement = document.createElement("div");
        newElement.innerHTML = element.list
        newElement.firstChild.setAttribute('data-ids' , element.rId);
        services.append(newElement.firstChild)
        removefirstday() 
    })
}
