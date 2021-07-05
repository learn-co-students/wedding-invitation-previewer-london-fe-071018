document.addEventListener("DOMContentLoaded", (e) => {
const images={
  'classic': 'classic.jpg',
  'formal': 'formal1.jpg',
  'different': 'funky.jpg'
  };
  
  const style={
  'classic': {'color': 'blue' },
  'formal':{'color':'lightpink'},
  'different':{'color':'white'}
  };
const containerDisplay=document.getElementsByClassName("container-display")[0];

//form details
const classic=document.getElementById('classic');
const formal=document.getElementById('formal');
const diferent=document.getElementById('diferent');
const firstname=document.getElementById('firstname');
const secondname=document.getElementById('secondname');
const lastname=document.getElementById('lastname');
const date=document.getElementById('date');
const WeddingLocation=document.getElementById('WeddingLocation');

//display details
const initials=document.getElementById('initials');
const sentence= document.getElementById('sentence');
const names=document.getElementById('names');
const displayLastname=document.getElementById('displayLastname');
const Weddingdate=document.getElementById('Weddingdate');
const location=document.getElementById('location');


function displaybackgrnds(input){
  styleSelected=input; 
  // document.getElementsByTagName("form")[0].classList.add("active");
  containerDisplay.style.backgroundImage=`url(${images[input]})`;
  initials.style.color = style[input].color;
  sentence.style.color = style[input].color;
  names.style.color = style[input].color;
  displayLastname.style.color = style[input].color;
  Weddingdate.style.color = style[input].color;
  location.style.color = style[input].color;
}

displaybackgrnds('classic');

/*for style one*/
  classic.addEventListener('click',event=>{
  styleSelected='classic' ;
  displaybackgrnds(styleSelected);
})

/*for style two*/
formal.addEventListener('click',event=>{
  styleSelected='formal';
  console.log(styleSelected);
   displaybackgrnds(styleSelected);
})

/*for style three*/
different.addEventListener('click',event=>{
  styleSelected='different';
  displaybackgrnds(styleSelected);
})

/*for inputs*/
  firstname.addEventListener('input',event=>{
    initials.innerHTML=firstname.value.substring(0, 1).toUpperCase();
    initials.innerHTML=initials.innerHTML+' & ';
    names.innerHTML=firstname.value;
  })

  secondname.addEventListener('input',event=>{
      let value=initials.innerHTML;
      if (secondname.value.length===1) {
        initials.innerHTML=
        value+secondname.value.toUpperCase();
        names.innerHTML=names.innerHTML+' & ';
      }
      if (secondname.value.length===0) {
        initials.innerHTML=initials.innerHTML.substring(0, 1)
      }
      if (secondname.value.length>=1) {
        console.log('length=',secondname.value.length);
        console.log('value=',secondname.value);
        console.log('value=',secondname.value.slice((secondname.value.length)-1));
       names.innerHTML=names.innerHTML+secondname.value.slice(secondname.value.length-1);
      }
  })

  lastname.addEventListener('input',event=>{
      displayLastname.innerHTML=lastname.value;
    })

  date.addEventListener('input',event=>{
        Weddingdate.innerHTML=date.value;
    })
    
  WeddingLocation.addEventListener('input',event=>{
        location.innerHTML=WeddingLocation.value;
    })  
})
