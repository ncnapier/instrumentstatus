document.getElementById('submit').addEventListener('click', formFillB)

//date and time for chat
let currentDate = new Date();
// let cDay = currentDate.getDate();
// let cMonth = currentDate.getMonth() + 1;
// let cYear = currentDate.getFullYeaar();
// let dateToPrint = cDay + '/' + cMonth + '/' + cYear;

function formFillB() {
    yyy = document.getElementById('statD').value 
    
    xxx = document.getElementById('chats').value 
    document.getElementById('chatsE').innerHTML = yyy + ":" + "<br>" + xxx + "<br>" + "(" + currentDate + ")"
    
}