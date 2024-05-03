document.addEventListener("DOMContentLoaded", function() {
    // Function to generate a random page URL
    function getRandomPage() {
        var pages = ["algopatterns.html", "confitmationbias.html", "hyperlinks.html", "multimodularity.html", "printtodigital.html", "textarchitecture.html"];
        var randomIndex = Math.floor(Math.random() * pages.length);
        return pages[randomIndex];
    }

    // Event listener for the random link
    document.getElementById("randomLink").addEventListener("click", function() {
        var randomPage = getRandomPage();
        window.location.href = randomPage;
    });

    // CLICKABLE BOXES MAIN PAGE-------------------------------------------------

    // Event listeners for each box
    document.getElementById("box1").addEventListener("click", function() {
        window.location.href = "printtodigital.html";
    });

    document.getElementById("box2").addEventListener("click", function() {
        window.location.href = "confitmationbias.html";
    });

    document.getElementById("box3").addEventListener("click", function() {
        window.location.href = "algopatterns.html";
    });

    document.getElementById("box4").addEventListener("click", function() {
        window.location.href = "hyperlinks.html";
    });

    document.getElementById("box5").addEventListener("click", function() {
        window.location.href = "textarchitecture.html";
    });

    document.getElementById("box6").addEventListener("click", function() {
        window.location.href = "multimodularity.html";
    });

    // LEFT ARROW------------------------------------------

     // Function to handle left arrow click event
     function handleLeftArrowClick() {
        window.history.back();
    }

    // Wait for the left arrow element to be available
    var leftArrowInterval = setInterval(function() {
        var leftArrow = document.querySelector(".left-arrow");
        if (leftArrow) {
            // Once the left arrow element is found, add the click event listener
            leftArrow.addEventListener("click", handleLeftArrowClick);
            clearInterval(leftArrowInterval); // Stop the interval
        }
    }, 100); // Check every 100 milliseconds

// JavaScript code to set initial opacity of textbox to 0% when the page loads
window.addEventListener('DOMContentLoaded', function() {
    const textbox = document.getElementById('textbox');
    const star = document.getElementById('star');
  
    textbox.style.opacity = '0'; // Set initial opacity to 0%
  
    // Event listener to toggle opacity of textbox when star is clicked
    star.addEventListener('click', function() {
      // Check current opacity state
      const currentOpacity = parseFloat(textbox.style.opacity || '0');
  
      // Toggle opacity
      if (currentOpacity === 0) {
        textbox.style.opacity = '1'; // Change opacity to 100%
      } else {
        textbox.style.opacity = '0'; // Change opacity to 0%
      }
    });
  });

//   HEADER COLOR CHANGE ----------------------------------------

// JavaScript code to dynamically change background color
var header = document.getElementById('header');
var colors = ['#eb69ee', '#47b974', '#8361e4', '#ee6969']; // Array of colors to cycle through
var index = 0;

function changeBackgroundColor() {
  header.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length; // Move to the next color, looping back to the start if necessary
}

// Change background color every 3 seconds (adjust interval as needed)
setInterval(changeBackgroundColor, 500);
  

    
});

