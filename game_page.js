function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    ans= parseInt(number1)*parseInt(number2)
    qno= "<h4>"+number1+" X "+number2+"</h4>";
    ansbox="<br>Answer:<input type='text'id='checkbox'>";
    checkbutt="<br><br><button class='btn btn-info' onclick='check();'>check</button>";
    row=qno+ansbox+checkbutt;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";   
    document.getElementById("number1").style.display="none";
    document.getElementById("number2").style.display="none";
}
