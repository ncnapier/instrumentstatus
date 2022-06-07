document.getElementById('submit').addEventListener('click', formFill)
document.getElementById('submit').addEventListener('click', statusLight)

function formFill() {
    xxx = document.getElementById('init').value 
    document.getElementById('initE').innerHTML = xxx

    yyy = document.getElementById('stat').value 
    document.getElementById('instStat').innerHTML = yyy

    aaa = document.getElementById('date').value 
    document.getElementById('runDate').innerHTML = aaa

    bbb = document.getElementById('dateend').value 
    document.getElementById('endDate').innerHTML = bbb
}


function statusLight() {
    if (document.getElementById('instStat').innerText = 'available'){
        document.getElementById('4500').style.backgroundColor = 'green'
    }else{document.getElementById('4500').style.backgroundColor = 'red'}
}