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


const contects = [
    {
        personId: 101,
        Name: "Alice",
        dp: "alice.jpg",
        lastMessage: new Date("2024-11-28T10:30:00"),
        isSeen: true
    },
    {
        personId: 102,
        Name: "Bob",
        dp: "bob.jpg",
        lastMessage: new Date("2024-11-28T09:15:00"),
        isSeen: false
    },
    {
        personId: 103,
        Name: "Charlie",
        dp: "charlie.jpg",
        lastMessage: new Date("2024-11-28T08:45:00"),
        isSeen: true
    },
    {
        personId: 104,
        Name: "David",
        dp: "david.jpg",
        lastMessage: new Date("2024-11-27T18:30:00"),
        isSeen: false
    },
    {
        personId: 105,
        Name: "Eve",
        dp: "eve.jpg",
        lastMessage: new Date("2024-11-27T17:15:00"),
        isSeen: true
    },
    {
        personId: 106,
        Name: "Frank",
        dp: "frank.jpg",
        lastMessage: new Date("2024-11-27T16:00:00"),
        isSeen: true
    },
    {
        personId: 107,
        Name: "Grace",
        dp: "grace.jpg",
        lastMessage: new Date("2024-11-27T15:00:00"),
        isSeen: false
    },
    {
        personId: 108,
        Name: "Hannah",
        dp: "hannah.jpg",
        lastMessage: new Date("2024-11-26T20:30:00"),
        isSeen: true
    },
    {
        personId: 109,
        Name: "Ian",
        dp: "ian.jpg",
        lastMessage: new Date("2024-11-26T19:45:00"),
        isSeen: false
    },
    {
        personId: 110,
        Name: "Jane",
        dp: "jane.jpg",
        lastMessage: new Date("2024-11-26T18:20:00"),
        isSeen: true
    },
    {
        personId: 111,
        Name: "Kyle",
        dp: "kyle.jpg",
        lastMessage: new Date("2024-11-25T21:00:00"),
        isSeen: true
    },
    {
        personId: 112,
        Name: "Laura",
        dp: "laura.jpg",
        lastMessage: new Date("2024-11-25T19:10:00"),
        isSeen: false
    },
    {
        personId: 113,
        Name: "Mike",
        dp: "mike.jpg",
        lastMessage: new Date("2024-11-24T22:30:00"),
        isSeen: true
    },
    {
        personId: 114,
        Name: "Nina",
        dp: "nina.jpg",
        lastMessage: new Date("2024-11-24T20:50:00"),
        isSeen: false
    },
    {
        personId: 115,
        Name: "Oscar",
        dp: "oscar.jpg",
        lastMessage: new Date("2024-11-24T19:30:00"),
        isSeen: true
    }
];
// console.log(persons);


const chatsBox = document.getElementById("chats");
// Add Element in Chats in function

{/* <div class="chat-contect" id="selected">
                    <img src="images/dp.png">
                    <span>
                        <span id="chat-cont-name">Nayan Soni</span>
                        <span>okk bhai</span>
                    </span>
                </div> */}

function addChatCont(data){
    let d1 = document.createElement('div');
    d1.className = "chat-contect";
    d1.id = "selected";
    chatsBox.appendChild(d1)
    console.log("Working...");
    
    let i1 = document.createElement("img");
    i1.src = "images/dp.png";
    d1.appendChild(i1);

    let spn1 = document.createElement('span');
    d1.appendChild(spn1);
    let spn2 = document.createElement('span');
    spn2.id = "chat-cont-name";
    spn2.innerText = data.Name;
    
    let span3 = document.createElement('span');
    span3.innerText = "okk Bro";
    spn1.appendChild(spn2);
    spn1.appendChild(span3);

}

// for(let x of contects){
//     addChatCont(x)
// }
