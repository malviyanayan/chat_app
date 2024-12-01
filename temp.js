function getContect(id){
    for(let x of contacts){
        if(x.contactId == id)return x;
    }
    return null
}

function updateRight(id){
    let cont = getContect(id); 
    // console.log(cont)   
    const mainRight = document.getElementById("main-right");
    mainRight.innerHTML = "";

    let ct = document.createElement("div");
    ct.id = "chat-top";

    let cts1 = document.createElement('span');
    let backOp = document.createElement('i');
    backOp.id = "back-btn";
    backOp.className = "fa-solid fa-arrow-left";
    cts1.prepend(backOp);

    let i1 = document.createElement("img");
    i1.src = "images/dp.png";
    let h3 = document.createElement("h3");
    h3.innerText = cont.contactName;
    cts1.appendChild(i1);
    cts1.appendChild(h3);

    let cts2 = document.createElement('span');
    cts2.innerHTML = '<i class="fa-solid fa-video"></i><i class="fa-solid fa-phone"></i><i class="fa-solid fa-magnifying-glass"></i><i class="fa-solid fa-ellipsis"></i>';
    ct.appendChild(cts1)
    ct.appendChild(cts2)

    let d2 = document.createElement("div");
    d2.id = "messege-send";
    d2.innerHTML = '<input type="text" id="message" placeholder="Enter Message...">' + '<input type="submit" value="Send" id="m-send-btn">'
    
    mainRight.appendChild(ct)
    mainRight.appendChild(d2);

    if(screen.width <= 780){
        document.getElementById("main-left").style.display = "none";
        mainRight.style.display = "block";
    }else{
        backOp.style.display = "none";
    }
}


const chatsP = document.getElementById("chats");

chatsP.addEventListener('click',(event)=>{
    const bx = event.target.closest('.chat-contect');

    if(bx){
        let id = bx.id+"";
        id = id.split("aa-")[1]
        updateRight(id)
    }
})


let backButton = document.getElementById("back-btn");
backButton.addEventListener("click",(e)=>{
    document.getElementById("main-left").style.display = "block";
    document.getElementById("main-right").style.display = "none";
})