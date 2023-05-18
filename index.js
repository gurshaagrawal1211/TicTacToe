let turn="X";
let isgameOver=false;

// function to change the turn 
changeTurn=()=>{
    return turn==="X"?"0":"X";
}

checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!==""))
        {
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + " won";
            isgameOver=true;
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(Element=>{
    let boxtext=Element.querySelector('.boxtext');
    Element.addEventListener('click',()=>{
        if(!isgameOver){
            if(boxtext.innerText===''){
            boxtext.innerHTML=turn;
            turn=changeTurn();
            document.getElementsByClassName("info")[0].innerHTML="Turn for "+turn;
        }
        checkWin();

    }
        // if(boxtext.innerText===''){
        //     boxtext.innerHTML=turn;
        //     turn=changeTurn();
        //     checkWin();
        //     if(!isgameOver){
        //         document.getElementsByClassName("info")[0].innerHTML="Turn for "+turn;
        //     }
        // }
    })
})

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(Element=>{
        Element.innerText=""
    })
    turn="X"
    isgameOver=false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
})