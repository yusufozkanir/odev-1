let fullName = prompt("Adınızı giriniz: ") //Kullanıcıdan ismini alarak bir "fullName" değişkenine atarız.

let myName = document.querySelector('#myName') //myName adında bir değişken oluşturup "querySelector" özelliği ile html içerisindeki "myName" id'li element ile eşleştiririz.

myName.innerHTML = `${fullName}` //myName id'li elementimize innerHTML ile kullanıcıdan promt ile aldığımız değeri yazdırırız.

function showTime(){
        
    let myClock = document.querySelector("#myClock")
    var date = new Date()
    var hour = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds();
    let day = date.getDay(); 
    if(day == 1)
        day = "Pazartesi"
    else if (day == 2)
        day = "Salı"
    else if (day == 3)
        day = "Çarşamba"
    else if (day == 4)
        day = "Perşembe"
    else if (day == 5)
        day = "Cuma"
    else if (day == 6)
        day = "Cumartesi"
    else 
        day = "Pazar"
    myClock.innerHTML = `${hour}:${min}:${sec} ${day}`
}

setInterval(showTime,1000);