document.getElementById('animateButton').addEventListener('click', function() {
    var square = document.getElementById('square');
    
    // Animate the square
    square.style.animation = 'moveInOut 2s ease-in-out';
    
    // Transition to a new page after the animation finishes
    setTimeout(function() {
      window.location.href = 'new_page.html'; // Replace with the URL of your new page
    }, 2000); // Adjust the delay (in milliseconds) to match the animation duration
  });  