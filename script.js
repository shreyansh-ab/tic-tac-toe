let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#rst-btn")
let newgame = document.querySelector("#new-btn")
let msg = document.querySelector(".winmsg")
let winnercont = document.querySelector(".winner")
let turnO = "player0"

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]



boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        console.log("box");
        
        if(turnO === "player0"){
            
            box.innerHTML = "X"
            turnO = "playerx"
        }
        else{
            box.innerHTML = "O"
           
            turnO = "player0"
        }
        box.disabled = true;

        checkwinner();
    }
    )
})

const checkwinner = () =>{
   for (const pattern of winpattern) {
    let pos1 = boxes[pattern[0]].innerHTML;
    let pos2 = boxes[pattern[1]].innerHTML;
    let pos3 = boxes[pattern[2]].innerHTML;

    if(pos1 != "" && pos2 != "" && pos3 != ""){
        if (pos1 === pos2 && pos2 === pos1){
            msg.innerHTML = `Winner is Player ${pos1}`;
            winnercont.classList.remove("hide");

            boxes.forEach((box)=>{
                box.disabled = true;
            })
        }
       
    }
    
   }
}

// New game 
newgame.addEventListener("click",() =>{
    console.log("hello")
    boxes.forEach((box)=>{
        box.innerHTML =""
        box.disabled = false;
        winnercont.classList.add("hide");
        console.clear()
    })
})





// Reset game 
reset.addEventListener("click",() =>{
    console.log("hello")
    boxes.forEach((box)=>{
        box.innerHTML =""
        box.disabled = false
        console.clear()
    })
})

