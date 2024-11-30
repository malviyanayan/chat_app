const newChat = document.getElementById("new-chat");
const newChatCancel = document.getElementById("new-chat-cancel");
const newChatDiv = document.getElementById("new-chat-div");

newChat.addEventListener('click',(e)=>{
    newChatDiv.style.display = "block";
})

newChatCancel.addEventListener('click',(e)=>{
    newChatDiv.style.display = "none";
})