
function priceChangeHandler(){
    var range= document.getElementById("priceRange").value;
    document.getElementById('priceRanges').innerHTML = range;

}

//arrow function
const sliderprogress= ()=> {
    var sliderValue = document.getElementById("priceRange").value;
    document.getElementById("priceRange").style.background = `linear-gradient(90deg,hsl(174, 77%, 80%)  ${sliderValue}%, hsl(225, 20%, 60%) ${sliderValue}%)`;
  }
  