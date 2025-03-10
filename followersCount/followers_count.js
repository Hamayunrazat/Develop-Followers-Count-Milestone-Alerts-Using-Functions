let count = 0;

function increaseCount(){
    count++;
    displayCount(); // Display the count
  displayCountValue(); // Check count value and display messages
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}


function displayCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}
//this is with reset option too //
let count = 0;

function increaseCount(){
    count++;
    displayCount(); // Display the count
  displayCountValue(); // Check count value and display messages
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}


function displayCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

function resetCount(){
    count = 0
    displayCount();
    alert(" Followers count has been reset.");
} 






