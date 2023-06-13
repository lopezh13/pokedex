document.getElementById("mySelect").addEventListener("change", function() {
    var mainButton = document.querySelector(".main-button");
    var selectedOption = this.value;
    
    if (selectedOption === "nombre") {
      mainButton.innerHTML = '<i class="fas fa-font"></i>';
    } else if (selectedOption === "numero") {
      mainButton.innerHTML = '<i class="fas fa-hashtag"></i>';
    }
  });
  
  document.querySelector(".round-button").addEventListener("click", function() {
    this.classList.toggle("open");
    var dropdown = this.querySelector(".dropdown");
    if (this.classList.contains("open")) {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  });
  