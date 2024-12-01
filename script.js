const navMenu = document.getElementById("nav-op-disp");
const hiddenMenu = document.getElementById("hidden-menu");

navMenu.addEventListener('click',()=>{
    document.getElementById("nav-menu-clicked").style.display = "block";
    navMenu.style.display = "none";
    hiddenMenu.style.display = "block";
});

hiddenMenu.addEventListener("click",()=>{
    document.getElementById("nav-menu-clicked").style.display = "none";
    navMenu.style.display = "block";
})




const contacts = [
    {
        contactId: 101,
        contactName: "Alice",
        dp: "alice.jpg",
        phone: "9876543210",
        lastMessage: "Yes Bro",
        isSeen: true,
        messageTime: new Date("2024-11-28T10:30:00"),
        isReceived: false
    },
    {
        contactId: 102,
        contactName: "Bob",
        dp: "bob.jpg",
        phone: "8765432109",
        lastMessage: "See you later!",
        isSeen: false,
        messageTime: new Date("2024-11-28T09:15:00"),
        isReceived: true
    },
    {
        contactId: 103,
        contactName: "Charlie",
        dp: "charlie.jpg",
        phone: "7654321098",
        lastMessage: "Thank you!",
        isSeen: true,
        messageTime: new Date("2024-11-28T08:45:00"),
        isReceived: false
    },
    {
        contactId: 104,
        contactName: "David",
        dp: "david.jpg",
        phone: "6543210987",
        lastMessage: "Let's catch up.",
        isSeen: false,
        messageTime: new Date("2024-11-27T18:30:00"),
        isReceived: true
    },
    {
        contactId: 105,
        contactName: "Eve",
        dp: "eve.jpg",
        phone: "5432109876",
        lastMessage: "Where are you?",
        isSeen: true,
        messageTime: new Date("2024-11-27T17:15:00"),
        isReceived: false
    },
    {
        contactId: 106,
        contactName: "Frank",
        dp: "frank.jpg",
        phone: "4321098765",
        lastMessage: "Call me.",
        isSeen: true,
        messageTime: new Date("2024-11-27T16:00:00"),
        isReceived: true
    },
    {
        contactId: 107,
        contactName: "Grace",
        dp: "grace.jpg",
        phone: "3210987654",
        lastMessage: "Good morning!",
        isSeen: false,
        messageTime: new Date("2024-11-27T15:00:00"),
        isReceived: false
    },
    {
        contactId: 108,
        contactName: "Hannah",
        dp: "hannah.jpg",
        phone: "2109876543",
        lastMessage: "All set.",
        isSeen: true,
        messageTime: new Date("2024-11-26T20:30:00"),
        isReceived: true
    },
    {
        contactId: 109,
        contactName: "Ian",
        dp: "ian.jpg",
        phone: "1098765432",
        lastMessage: "Check your email.",
        isSeen: false,
        messageTime: new Date("2024-11-26T19:45:00"),
        isReceived: false
    },
    {
        contactId: 110,
        contactName: "Jane",
        dp: "jane.jpg",
        phone: "0987654321",
        lastMessage: "See you soon.",
        isSeen: true,
        messageTime: new Date("2024-11-26T18:20:00"),
        isReceived: true
    },
    {
        contactId: 111,
        contactName: "Kyle",
        dp: "kyle.jpg",
        phone: "9876501234",
        lastMessage: "Sure thing!",
        isSeen: true,
        messageTime: new Date("2024-11-25T21:00:00"),
        isReceived: false
    },
    {
        contactId: 112,
        contactName: "Laura",
        dp: "laura.jpg",
        phone: "8765430123",
        lastMessage: "Busy right now.",
        isSeen: false,
        messageTime: new Date("2024-11-25T19:10:00"),
        isReceived: true
    },
    {
        contactId: 113,
        contactName: "Mike",
        dp: "mike.jpg",
        phone: "7654321012",
        lastMessage: "Let me know.",
        isSeen: true,
        messageTime: new Date("2024-11-24T22:30:00"),
        isReceived: false
    },
    {
        contactId: 114,
        contactName: "Nina",
        dp: "nina.jpg",
        phone: "6543210123",
        lastMessage: "Got it!",
        isSeen: false,
        messageTime: new Date("2024-11-24T20:50:00"),
        isReceived: true
    },
    {
        contactId: 115,
        contactName: "Oscar",
        dp: "oscar.jpg",
        phone: "5432101234",
        lastMessage: "Catch you later.",
        isSeen: true,
        messageTime: new Date("2024-11-24T19:30:00"),
        isReceived: false
    }
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let obj = contacts[0];


const chatsBox = document.getElementById("chats");


function addChatCont(data){
    let d1 = document.createElement('div');
    d1.className = "chat-contect";
    d1.id = `aa-${data.contactId}`;
    chatsBox.appendChild(d1)

    let span1 = document.createElement('span');
    let dp = document.createElement('img');
    dp.src = "images/dp.png";
    span1.appendChild(dp);

    let span11 = document.createElement("span");
    span1.appendChild(span11);

    let spn111 = document.createElement("span");
    spn111.id = "chat-cont-name";
    spn111.innerText = data.contactName;
    span11.appendChild(spn111);
    
    let spn112 = document.createElement("span");
    span11.appendChild(spn112);

    let span1111 = document.createElement("span");
    spn112.appendChild(span1111);
    span1111.innerText = data.lastMessage + " ";
    
    let isSendImg = document.createElement("img");
    isSendImg.src = "images/checkmark.png";
    isSendImg.width = 16;
    if(!data.isReceived)spn112.appendChild(isSendImg);


    let span2 = document.createElement('span');
    span2.id = "m-time";
    let span21 = document.createElement("span");
    span21.innerText = days[data.messageTime.getDay()];
    let span22 = document.createElement("span");
    span22.innerText = data.messageTime.getDate() + "/" + (data.messageTime.getMonth()+1);
    span2.appendChild(span21);
    span2.appendChild(span22);

    d1.appendChild(span1);
    d1.appendChild(span2);

}

function addChatContAtFirst(data){
    let d1 = document.createElement('div');
    d1.className = "chat-contect";
    chatsBox.prepend(d1);

    let span1 = document.createElement('span');
    let dp = document.createElement('img');
    dp.src = "images/dp.png";
    span1.appendChild(dp);

    let span11 = document.createElement("span");
    span1.appendChild(span11);

    let spn111 = document.createElement("span");
    spn111.id = "chat-cont-name";
    spn111.innerText = data.contactName;
    span11.appendChild(spn111);
    
    let spn112 = document.createElement("span");
    span11.appendChild(spn112);

    let span1111 = document.createElement("span");
    spn112.appendChild(span1111);
    span1111.innerText = data.lastMessage + " ";
    
    let isSendImg = document.createElement("img");
    isSendImg.src = "images/checkmark.png";
    isSendImg.width = 16;
    if(!data.isReceived)spn112.appendChild(isSendImg);


    let span2 = document.createElement('span');
    span2.id = "m-time";
    let span21 = document.createElement("span");
    span21.innerText = days[data.messageTime.getDay()];
    let span22 = document.createElement("span");
    span22.innerText = data.messageTime.getDate() + "/" + (data.messageTime.getMonth()+1);
    span2.appendChild(span21);
    span2.appendChild(span22);

    d1.appendChild(span1);
    d1.appendChild(span2);

}

for(let x of contacts){
    setTimeout(() => {
        addChatCont(x)
    }, 1000);
}


// Searching functionalities in 
const searchCont = document.getElementById("cont-chat-search");
searchCont.addEventListener("keyup",()=>{
    chatsBox.innerHTML = "";
    if(searchCont.value == ""){
        for(let x of contacts){
            setTimeout(() => {
                addChatCont(x)
            }, 1000);
        }
    }else{
        for(let x of contacts){
            let nm = x.contactName + "";
            nm = nm.toLowerCase();
            let sv = searchCont.value + "";
            sv = sv.toLowerCase();

            let nb = x.phone + "";

            if(nm.match(sv))addChatCont(x);
        }
    }
});

const newChat = document.getElementById("new-chat");
const newChatCancel = document.getElementById("new-chat-cancel");
const newChatDiv = document.getElementById("new-chat-div");

newChat.addEventListener('click',(e)=>{
    newChatDiv.style.display = "block";
})

newChatCancel.addEventListener('click',(e)=>{
    newChatDiv.style.display = "none";
})

const addChatBtn1 = document.getElementById("sb-btn");
addChatBtn1.addEventListener('click',(e)=>{
    e.preventDefault();
    let nm = document.getElementById("name");  
    let ph = document.getElementById("phone");  
    
    let newCont = {
        contactId : 384849,
        contactName : nm.value,
        dp : "dp.png",
        phone : ph.value,
        lastMessage: " ",
        isSeen: false,
        messageTime: new Date(Date.now()),
        isReceived: true
    }

    addChatContAtFirst(newCont);

    nm.value = ""
    ph.value = ""
    newChatDiv.style.display = "none";
})