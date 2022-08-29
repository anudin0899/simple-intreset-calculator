function compute()
{
    
    var p = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = p * years * rate /100;
    var futureyear = new Date().getFullYear()+parseInt(years);
    result = document.getElementById("result");
    result.innerHTML="If you deposit <mark>" +p+ "</mark>,\<br\>at an interest rate of <mark> "+rate+"</mark> %\<br\>You will receive an amount of <mark> "+interest+" </mark>,\<br\>in the year <mark>"+futureyear+"</mark>\<br\>"
    
    if (p == "") {
        alert("enter a positive number");
        principal.focus();
        return false;
    }

    if (p <= 0) {
        alert("enter a positive number");
        principal.focus();
        return false;
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}




       
