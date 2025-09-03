// open or close messenger
var messengerButton = document.getElementById('messenger-btn');
var messagesSection = document.getElementById('messages-section');
messengerButton.addEventListener('click', function (M) {
M.preventDefault(); 
if (messagesSection.style.display === 'none' || messagesSection.style.display === '') {
messagesSection.style.display = 'block'; 
} else {
messagesSection.style.display = 'none';
}
});
// open chat box
var chatList = document.querySelector('.chat-list');
var chatBox = document.getElementById('chat-box');
var chatUserName = document.getElementById('chat-user-name');
var chatUserImg = document.getElementById('chat-user-img');

chatList.addEventListener('click', function(event) { 
chatContent.innerHTML = '';
var clickedChatItem = event.target.closest('.chat-item');
if (!clickedChatItem) {
return;}
var userName = clickedChatItem.querySelector('.chat-name').textContent;
var userImgSrc = clickedChatItem.querySelector('.profile-pic').src;
chatUserName.textContent = userName;
chatUserImg.src = userImgSrc;
chatBox.style.display = 'flex';
});
// close chat box
window.closeChat = function() { 
    chatBox.style.display = 'none';
    }
// send massages
const chatInput = document.getElementById('chat-input');
const chatContent = document.getElementById('chat-content');
function sendMessage() {
const messageText = chatInput.value.trim();
if (messageText === '') {
return; 
}
const messageElement = document.createElement('div');
messageElement.classList.add('message', 'message-sent');
messageElement.textContent = messageText;
chatContent.appendChild(messageElement);
chatInput.value = '';
}
