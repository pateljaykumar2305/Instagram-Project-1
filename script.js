var arr = [{dp:"https://thumbs.dreamstime.com/b/skin-care-beauty-portrait-woman-holding-bottle-dropper-near-face-model-using-natural-cosmetic-product-skin-care-beauty-192845926.jpg",
            story: "https://thumbs.dreamstime.com/b/skin-care-beauty-portrait-woman-holding-bottle-dropper-near-face-model-using-natural-cosmetic-product-skin-care-beauty-192845926.jpg"},
            {dp:"https://images.pexels.com/photos/1572878/pexels-photo-1572878.jpeg?auto=compress&cs=tinysrgb&w=600",
            story: "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600"},
            {dp:"https://images.pexels.com/photos/735552/pexels-photo-735552.jpeg?auto=compress&cs=tinysrgb&w=600",
            story: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=600"} ,
            {dp:"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
            story: "https://images.pexels.com/photos/2825034/pexels-photo-2825034.jpeg?auto=compress&cs=tinysrgb&w=600"} ,
            {dp:"https://images.pexels.com/photos/1638051/pexels-photo-1638051.jpeg?auto=compress&cs=tinysrgb&w=600",
            story: "https://images.pexels.com/photos/1848471/pexels-photo-1848471.jpeg?auto=compress&cs=tinysrgb&w=600"},          
]

var clutter = "";
var storiyan = document.querySelector("#storiyan")

arr.forEach(function(element , idx) {
    clutter +=  `<div class="story">
    <img id="${idx}"src="${element.dp}" alt="">
    </div>`
});

console.log(clutter);
storiyan.innerHTML = clutter;
var currentStoryIndex = 0; // Keeps track of the currently displayed story

var fullScreen = document.querySelector("#fullScreen");
var nextStoryArrow = fullScreen.querySelector("#nextStoryArrow"); // Get reference to arrow element

storiyan.addEventListener("click",function(dets){
      fullScreen.style.display = "block"
      fullScreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;
      currentStoryIndex = parseInt(dets.target.id); // Update current story index
   
});

// function closeFullScreenAndGoHome() {
//     fullScreen.style.display = "none";
// }

// fullScreen.addEventListener("click", closeFullScreenAndGoHome);

nextStoryArrow.addEventListener("dblclick", function () {
    fullScreen.style.display = "none";
});


nextStoryArrow.addEventListener("click", function () {
    fullScreen.style.display = "none";
    // Go to next story on click (considering boundaries)
    currentStoryIndex = (currentStoryIndex + 1) ;
    fullScreen.style.backgroundImage = `url(${arr[currentStoryIndex].story})`;
    fullScreen.style.display = "block";
  });

  PreviousStoryArrow.addEventListener("click", function () {
    fullScreen.style.display = "none";
    // Go to next story on click (considering boundaries)
    currentStoryIndex = (currentStoryIndex - 1);
    fullScreen.style.backgroundImage = `url(${arr[currentStoryIndex].story})`;
    fullScreen.style.display = "block";
  });

 

