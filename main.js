var reasons = [ "Dad", "Mom", "Mrunmayee", "Me" ]; 
var images = [ "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN5J5Pc-8kRJsC8as_t5cuieVRMabXk7oeOQ&usqp=CAU", "https://cdn.imgbin.com/12/22/0/imgbin-woman-cartoon-businessperson-drawing-woman-b26we5FAuBasYDr4GDt9QtnXB.jpg", "https://png.pngitem.com/pimgs/s/514-5146806_cute-little-girl-clipart-hd-png-download.png", "https://www.clipartmax.com/png/middle/129-1299602_base-de-mi-nena-martina-stoessel-by-alakita-d641sfa-teen-girl-cartoon.png" ]; 
var j = 0; 
function nextslide() { document.getElementById("reasontext").innerHTML = reasons[j]; 
document.getElementById("album").src = images[j]; 
    j++; document.getElementById("audio").play(); }
