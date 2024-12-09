window.addEventListener('scroll', function() {
    if(pageYOffset>=60) 
    {
        document.getElementById("header").style.backgroundColor = "#000000";
    } 
    else {
        document.getElementById("header").style.backgroundColor = "transparent";
    }
})