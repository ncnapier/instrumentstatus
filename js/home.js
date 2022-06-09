document.getElementById('submit').addEventListener('click', formFillB)


function formFillB() {
    xxx = document.getElementById('chats').value 
    document.getElementById('chatsE').innerHTML = xxx
}