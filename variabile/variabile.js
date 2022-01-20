// punem data curenta in variabila date
var date = new Date()


var hour = date.getHours() 
var minutes = date.getMinutes()
var seconds = date.getSeconds()
var isRaining = false
//am adaugat la un sir o variabila (concatenare)
var message = "Hello! Este ora " + hour + ":" + minutes + ":" + seconds
// o variabila fara valoare (undefined)
var city

// alert(message)
console.log(message)
    
document.write('<h1>' + message + '</h1>')    