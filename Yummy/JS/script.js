window.addEventListener('scroll', function() {
    if(pageYOffset>=60)
    {
        document.getElementById("navbar").style.backgroundColor = "#00000099";
    }
    else 
    {
        document.getElementById("navbar").style.backgroundColor = "transparent";
    }
});