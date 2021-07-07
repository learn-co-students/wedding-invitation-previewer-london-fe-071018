



const options = [
  {theme: "floral", display: ""},
  {theme: "vintage", display: ""},
  {theme: "modern", display: ""},

];

const fields = ["first-spouse", "second-spouse", "date", "location"];

const images = {
  floral: "https://creative.blis.com/JamieInviteTest/pink.png",
  vintage: "https://creative.blis.com/JamieInviteTest/pattern.png",
  modern: "https://creative.blis.com/JamieInviteTest/circle.png",

};

const fonts ={
  floral: "Gamja Flower",
  vintage: "Dancing Script",
  modern: "Fjalla One",
};

const colors ={
  floral: "#7accc8",
  vintage: "black",
  modern: "white",
};

document.addEventListener("DOMContentLoaded", ()=>{
  const optionsContainer = document.getElementsByClassName("options")[0];
  
  const displayTitle = document.getElementById("display-title");
  const previewImage = document.getElementById("preview-img");
  
  const renderCard = theme => {
    displayTitle.innerHTML = `Current Theme: ${theme}`;
    console.log(!previewImage.src);
    if (!previewImage.src) document.getElementsByTagName("form")[0].classList.add("active");
    console.log(document.getElementsByTagName("form")[0].classList);
    previewImage.src = images[theme];
    previewImage.alt = theme;
     document.getElementsByClassName("display")[0].style.fontFamily=fonts[theme];
     document.getElementsByClassName("display")[0].style.color=colors[theme];
  };

  options.forEach(option => {
    const button = document.createElement("button");
    button.id = option.theme;
    button.innerHTML = option.theme;
    button.addEventListener("click", () => renderCard(option.theme));
    optionsContainer.appendChild(button);
  });
  
  fields.forEach(field => {
    document.getElementById(field).addEventListener("input", e => {
      console.log(e, e.target, e.target.value);
      document.getElementById(`display-${field}`).innerHTML = e.target.value;
    });
  });
});



 