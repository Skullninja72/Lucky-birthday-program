btnref = document.querySelector("#check");
outputref = document.querySelector("#output");

var luckynoref = document.querySelector("#luckynum");
opimgref = document.querySelector("#op-image");

var clickcount = 0;
btnref.addEventListener("click", clickhandler);
var img = document.createElement("IMG");

function clickhandler() {
     var inputDate = document.getElementById("dateip").value;
     var luckynumcheck = isNaN(luckynoref.value);
     if (luckynumcheck == true || luckynoref.value.length == 0) {
          alert("You must enter valid information as your lucky number.");
     } else {
          var luckyno = luckynoref.value;

          var [year, month, day] = inputDate.toString().split('-');

          year = Number(year);
          month = Number(month);
          day = Number(day);

          var sum = sumofnum(year) + sumofnum(month) + sumofnum(day);

          var rem = Math.round(sum % luckyno);

          var thisImg = '';
          if (rem == 0) {
               outputref.innerText = "YAY!,Your birthdate is lucky! May the force be with you!🖖";
               thisImg = 'images/success.svg';
               setImage(thisImg,img);
          } else {
               if (rem == 1) {
                    outputref.innerText = " You missed it by " + rem + "day, but dont worry because you dont get lucky you make your own luck😉 ";
                    thisImg = 'images/fail.svg';
                    setImage(thisImg, img);
               } else {

                    outputref.innerText = " You missed it! by " + rem + " days,but you can always make your own luck!😉 ";
                    thisImg = 'images/fail.svg';
                    setImage(thisImg, img);

               }
          }
     }
}

function sumofnum(num) {

     var sum = 0;

     while (num != 0) {
          var rem = num % 10;
          sum = sum + rem;
          num = Math.round(num / 10);

     }
     return sum;
}

function setImage(imagename, img) {
     img.src = imagename;
     document.getElementById('op-image').appendChild(img);
}