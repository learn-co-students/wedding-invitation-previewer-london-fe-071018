const options = [
  {theme: "anime", display: ""},
  {theme: "ninja", display: ""},
  {theme: "zombie", display: ""},
  {theme: "sci-fi", display: ""},
  {theme: "dinosaurs", display: ""}
];

const fields = ["first-spouse", "second-spouse", "date", "location"];

const images = {
  anime: "https://cdn.shopify.com/s/files/1/0248/3042/products/One_PUnch_Man_Thank_You_Sample_1024x1024.jpg?v=1489334353",
  ninja: "https://i.kym-cdn.com/photos/images/original/001/038/582/15d.png",
  zombie: "https://pre00.deviantart.net/3bf8/th/pre/i/2016/094/d/1/little_ami_zombie_girl_by_penciltales-d9xs1os.jpg",
  "sci-fi": "https://images-na.ssl-images-amazon.com/images/I/61qAYUyvGDL._SL1000_.jpg",
  dinosaurs: "https://sep.yimg.com/ay/prehistory/inflatable-t-rex-dinosaur-blow-up-toy-43-inch-1.jpg"
}

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
  }

  options.forEach(option => {
    const button = document.createElement("button");
    button.id = option.theme;
    button.innerHTML = option.theme;
    button.addEventListener("click", () => renderCard(option.theme));
    optionsContainer.appendChild(button);
  })
  
  fields.forEach(field => {
    document.getElementById(field).addEventListener("input", e => {
      console.log(e, e.target, e.target.value)
      document.getElementById(`display-${field}`).innerHTML = e.target.value;
    })
  })
});