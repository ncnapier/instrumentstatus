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

//dmpk letter colors

function letterColor() {
    document.getElementById('D').style.color = "lightgreen"
    document.getElementById('M').style.color = "salmon"
    document.getElementById('P').style.color = "skyblue"
    document.getElementById('K').style.color = "#FFFF8F"
}
function letterColor2() {
    document.getElementById('M').style.color = "lightgreen"
    document.getElementById('P').style.color = "salmon"
    document.getElementById('K').style.color = "skyblue"
    document.getElementById('D').style.color = "#FFFF8F"
}
function letterColor3() {
    document.getElementById('P').style.color = "lightgreen"
    document.getElementById('K').style.color = "salmon"
    document.getElementById('D').style.color = "skyblue"
    document.getElementById('M').style.color = "#FFFF8F"
}
function letterColor4() {
    document.getElementById('K').style.color = "lightgreen"
    document.getElementById('D').style.color = "salmon"
    document.getElementById('M').style.color = "skyblue"
    document.getElementById('P').style.color = "#FFFF8F"
    
}

function flashes() {
    x = 2;
letterColor()
setTimeout(letterColor2, 500)
setTimeout(letterColor3,1000)
setTimeout(letterColor4, 1500)
setTimeout(flashes, x*1000);
}
flashes();
//setInterval(flashes(), 2000)

//accuweather API
fetch("https://dataservice.accuweather.com/currentconditions/v1/335668?apikey=WlJdqhjA4jTuM6FQA5uH1Rr7GoyHhKYY&language=en-us&details=true")
.then(res => res.json()) // parse response as JSON
.then(data => {
    console.log(data)
  console.log(data[0].ApparentTemperature.Metric.Value)
  document.querySelector("h4").innerText = `${data[0].WeatherText} and ${data[0].Temperature.Imperial.Value} F (${data[0].Temperature.Metric.Value} C)`
})
.catch(err => {
    console.log(`error ${err}`)
});

