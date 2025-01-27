//Typewriter like plugin for main page
//Credit goes to W3School for part of this code as I edited it a bit
var i = 0;
var txt1 = 'Software Engineer.';
var txt2 = '</Frontend Developer>';
var txt3 = 'Computer Science Student.';
var txt4 = 'Full Stack Developer.';
var txt5 = 'Problem Solver.';
var txt6 = 'Backend Developer.';
var textSpeed = 50;
var randNum = Math.floor(Math.random()*6); // Updated to include 5 options
function typeWriter() {
  if(randNum==0){
    if (i < txt1.length) {
        document.getElementById("type").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, textSpeed);
    }
  }
  if(randNum==1){
    var txt = txt2;
    if (i < txt2.length) {
        document.getElementById("type").innerHTML += txt2.charAt(i);
        i++;
        setTimeout(typeWriter, textSpeed);
    }
  }
  if(randNum==2){
    if (i < txt3.length) {
        document.getElementById("type").innerHTML += txt3.charAt(i);
        i++;
        setTimeout(typeWriter, textSpeed);
    }
  }
  if(randNum==3){
    if (i < txt4.length) {
        document.getElementById("type").innerHTML += txt4.charAt(i);
        i++;
        setTimeout(typeWriter, textSpeed);
    }
  }
  if(randNum==4){
    if (i < txt5.length) {
        document.getElementById("type").innerHTML += txt5.charAt(i);
        i++;
        setTimeout(typeWriter, textSpeed);
    }
  }
  if(randNum==5){
    if (i < txt6.length) {
        document.getElementById("type").innerHTML += txt6.charAt(i);
        i++;
        setTimeout(typeWriter, textSpeed);
    }
  }
} 