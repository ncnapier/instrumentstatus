//for 4500 functioning:
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
    if (document.getElementById('instStat').innerText === 'available'){
        document.getElementById('4500InstStat').style.backgroundColor = 'lightgreen'
    }else if(document.getElementById('instStat').innerText === 'maint'){
        document.getElementById('4500InstStat').style.backgroundColor = 'skyblue'
    }else if(document.getElementById('instStat').innerText === 'reserved'){
        document.getElementById('4500InstStat').style.backgroundColor = '#FFFF8F'
    }else{
        document.getElementById('4500InstStat').style.backgroundColor = 'salmon'
        
    }
}

//for 5500 functioning:
document.getElementById('submitB').addEventListener('click', formFillB)
document.getElementById('submitB').addEventListener('click', statusLightB)

function formFillB() {
    xxx = document.getElementById('initB').value 
    document.getElementById('initEB').innerHTML = xxx

    yyy = document.getElementById('statB').value 
    document.getElementById('instStatB').innerHTML = yyy

    aaa = document.getElementById('dateB').value 
    document.getElementById('runDateB').innerHTML = aaa

    bbb = document.getElementById('dateendB').value 
    document.getElementById('endDateB').innerHTML = bbb
}


function statusLightB() {
    if (document.getElementById('instStatB').innerText === 'available'){
        document.getElementById('5500InstStat').style.backgroundColor = 'lightgreen'
    }else if(document.getElementById('instStatB').innerText === 'maint'){
        document.getElementById('5500InstStat').style.backgroundColor = 'skyblue'
    }else if(document.getElementById('instStatB').innerText === 'reserved'){
        document.getElementById('5500InstStat').style.backgroundColor = '#FFFF8F'
    }else{
        document.getElementById('5500InstStat').style.backgroundColor = 'salmon'
        
    }
}

//for 4000_02 functioning:
document.getElementById('submitC').addEventListener('click', formFillC)
document.getElementById('submitC').addEventListener('click', statusLightC)

function formFillC() {
    xxx = document.getElementById('initC').value 
    document.getElementById('initEC').innerHTML = xxx

    yyy = document.getElementById('statC').value 
    document.getElementById('instStatC').innerHTML = yyy

    aaa = document.getElementById('dateC').value 
    document.getElementById('runDateC').innerHTML = aaa

    bbb = document.getElementById('dateendC').value 
    document.getElementById('endDateC').innerHTML = bbb
}


function statusLightC() {
    if (document.getElementById('instStatC').innerText === 'available'){
        document.getElementById('40002InstStat').style.backgroundColor = 'lightgreen'
    }else if(document.getElementById('instStatC').innerText === 'maint'){
        document.getElementById('40002InstStat').style.backgroundColor = 'skyblue'
    }else if(document.getElementById('instStatC').innerText === 'reserved'){
        document.getElementById('40002InstStat').style.backgroundColor = '#FFFF8F'
    }else{
        document.getElementById('40002InstStat').style.backgroundColor = 'salmon'
        
    }
}

//for 4000_01 functioning:
document.getElementById('submitD').addEventListener('click', formFillD)
document.getElementById('submitD').addEventListener('click', statusLightD)

function formFillD() {
    xxx = document.getElementById('initD').value 
    document.getElementById('initED').innerHTML = xxx

    yyy = document.getElementById('statD').value 
    document.getElementById('instStatD').innerHTML = yyy

    aaa = document.getElementById('dateD').value 
    document.getElementById('runDateD').innerHTML = aaa

    bbb = document.getElementById('dateendD').value 
    document.getElementById('endDateD').innerHTML = bbb
}


function statusLightD() {
    if (document.getElementById('instStatD').innerText === 'available'){
        document.getElementById('40001InstStat').style.backgroundColor = 'lightgreen'
    }else if(document.getElementById('instStatD').innerText === 'maint'){
        document.getElementById('40001InstStat').style.backgroundColor = 'skyblue'
    }else if(document.getElementById('instStatD').innerText === 'reserved'){
        document.getElementById('40001InstStat').style.backgroundColor = '#FFFF8F'
    }else{
        document.getElementById('40001InstStat').style.backgroundColor = 'salmon'
        
    }
}