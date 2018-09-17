//highlight the current style button
window.addEventListener("load", function(){
  let spouse1="";
  let spouse2="";
  let surname="";
  let options = {year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("spouse1").addEventListener("keyup", function(){
    spouse1=document.getElementById("spouse1").value;
    document.getElementById("outputName").innerHTML=`${spouse1} & ${spouse2} ${surname}`;
    if (spouse1==="" && spouse2==="" && surname===""){
      document.getElementById("outputName").innerHTML="Mike and Rachel Ross"
    }
  });
  document.getElementById("spouse2").addEventListener("keyup", function(){
    spouse2=document.getElementById("spouse2").value;
    document.getElementById("outputName").innerHTML=`${spouse1} & ${spouse2} ${surname}`;
    if (spouse1==="" && spouse2==="" && surname===""){
      document.getElementById("outputName").innerHTML="Mike and Rachel Ross"
    }
  });
  document.getElementById("surname").addEventListener("keyup", function(){
    surname=document.getElementById("surname").value;
    document.getElementById("outputName").innerHTML=`${spouse1} & ${spouse2} ${surname}`;
    if (spouse1==="" && spouse2==="" && surname===""){
      document.getElementById("outputName").innerHTML="Mike and Rachel Ross"
    }//TURN THESE IFS INTO A FUNCTION
  });
  document.getElementById("date").addEventListener("input", function(){
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let date=document.getElementById("date").value;
    console.log(date);
    document.getElementById("outputDate").innerHTML=`${monthNames[parseInt(date.slice(5, 7))-1]} ${date.slice(8, 10)}, ${date.slice(0, 4)}`;
  });
  document.getElementById("location").addEventListener("keyup", function(){
    let location=document.getElementById("location").value;
    document.getElementById("outputLocation").innerHTML=location;
    if (location===""){
      document.getElementById("outputLocation").innerHTML="Westminister Abbey"
    }
  });
  document.getElementById("specialMessage").addEventListener("keyup", function(){
    let specialMessage=document.getElementById("specialMessage").value;
    document.getElementById("outputSpecialMessage").innerHTML=specialMessage;
    if (specialMessage===""){
      document.getElementById("outputSpecialMessage").innerHTML=" Please join us on this special day."
    }
  });
  document.getElementById("wooden").addEventListener("click", function(){
    document.getElementById("wooden").style.border = "8px solid grey";
    document.getElementById("rosy").style.border = "1px solid black";
    document.getElementById("classical").style.border = "1px solid black";
    document.getElementById("backgroundImage").src = "photos/wood.jpg";
    document.getElementById("formOutput").style.fontFamily = "Palatino Linotype";
    //Times New Roman
  });
  document.getElementById("rosy").addEventListener("click", function(){
    document.getElementById("rosy").style.border = "8px solid grey";
    document.getElementById("wooden").style.border = "1px solid black";
    document.getElementById("classical").style.border = "1px solid black";
    document.getElementById("backgroundImage").src = "photos/roses.jpg";
    document.getElementById("formOutput").style.fontFamily = "Times New Roman";
  });
  document.getElementById("classical").addEventListener("click", function(){
    document.getElementById("classical").style.border = "8px solid grey";
    document.getElementById("rosy").style.border = "1px solid black";
    document.getElementById("wooden").style.border = "1px solid black";
    document.getElementById("backgroundImage").src = "photos/classical.jpg";
    document.getElementById("formOutput").style.fontFamily = "Verdana";

  });
});
