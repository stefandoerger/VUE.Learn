// 1. Find and store the element we want to listen to events on.    

// function getRandomInt(max) {
// return Math.floor(Math.random() * Math.floor(max));
// }

// phaseOne = phase.slice(0);

// var tokenModus = 0

// function getRandomInt(max) {
// return Math.floor(Math.random() * Math.floor(max));
// }

// function restart(){
//     phaseOne = phase.slice(0);
//     tokenModus = 0;
// }

// var randominox = getRandomInt (phaseOne.length);

// var onButtonClick = function(){
// if (tokenModus <= 9) {   
//     $("#text1").text("RANDOM PHASE: ");
//     $("#text2").fadeOut(50, function() {$(this).text((phaseOne[randominox].name))}).fadeIn(100);;     
//     $("#text3").fadeOut(50, function() {$(this).text((phaseOne[randominox].task))}).fadeIn(100);;
//     $("#cardIMG").fadeOut(50, function() {$(this).attr('src',(phaseOne[randominox].img))}).fadeIn(100);;
//     // $("#cardIMG").attr('src', phaseOne[randominox].img);;    
//     $(".StartButton").text("New");
//     phaseOne.splice(randominox,1);
//     getRandomInt();
//     randominox = getRandomInt (phaseOne.length);
//     tokenModus = tokenModus + 1;
//     $("#round").fadeOut(50, function() {$(this).text(("Round: " + tokenModus))}).fadeIn(400);;
// }    
// else {
//     $("#text1").fadeOut(0, function() {$(this).text(("Game Over"))}).fadeIn(100);;     
//     $("#text3").fadeOut(0, function() {$(this).text((""))}).fadeIn(100);;     
//     $("#text2").fadeOut(0, function() {$(this).text(("Play Again?"))}).fadeIn(100);;
//     $("#cardIMG").fadeOut(0, function() {$(this).attr('src',('img/cards/empty.png'))}).fadeIn(100);;
//     $(".StartButton").text("");
//     $(".StartButton").text("Restart ");      
//     $(".StartButton").append('<div <i style="float: center;" class="fas fa-sync-alt"></i>');  
//     restart();    
//     // $(".StartButton").click(restart);
// }   
// };

// var sdUnghost = function () {
//     $("#overlayBox").toggleClass("sD_UnGhost");
//   };

// $(".StartButton").click(sdUnghost);


// var sdUnghost = function () {
// document.querySelector('#overlayBox').classList.toggle('sD_UnGhost');
// };

// document.querySelector('.startButton').addEventListener('click', function() {
    
//     // Random Number
//     sdUnghost();
// });



// var sD_QUery = document.querySelector('#overlayBox').classList;


// var sD_Unghost = function () {
//     sD_QUery.classList.add('sD_UnGhost');
//     // console.log(2+2)
//     };
// // Function to show Overlay

// var sD_Ghost = function () {
//     sD_QUery.classList.remove('sD_UnGhost');
//     // console.log(2+2)
//     };
// // Function to hide Overlay


// var sD_Unghost = function () {
//     sD_QUery.add('sD_UnGhost');
//     // console.log(2+2)
//     };
// // Function to show Overlay

// var sD_Ghost = function () {
//     sD_QUery.remove('sD_UnGhost');
//     // console.log(2+2)
//     };
// // Function to hide Overlay


// var sD_ButtonTextToggle =function() {
//     document.querySelector('.startButton').classList.toggle('startButtonDone');
// };


// document.querySelector('.startButton').addEventListener('click', function() {
//     sD_Unghost();
//     sD_ButtonTextToggle();
// });
// // Function to show Overlay on Index.phtml by click on Button appointmentCtaOverlay
  

// document.querySelector('#sD_Closer').addEventListener('click', function() {
//         sD_Ghost();
//         sD_ButtonTextToggle();
// });

// Fresh Start


    // Show Overlay by Button
    
    // document.querySelector('.startButton').addEventListener('click', function() {
        
    //     // Function to toggle Class
    //     document.querySelector('.overlayBox').classList.toggle('sD_UnGhost');
    // });




    // var box1 = document.querySelectorAll('[data-sD_Target="box1"]');

    // box1.addEventListener('click', function() {
        
    //     // Function to toggle Class
    //     alert("WTF");
    // });




    // // Show Overlay 2 by Button
    
    // document.querySelector('#sD_boxButton1').addEventListener('click', function() {
        
    //     // Function to toggle Class
    //     document.querySelector('#sD_OverlayBox1').classList.toggle('sD_UnGhost');
    // });
    

    // // Show Overlay 2 by Button

    // document.querySelector('#sD_boxButton2').addEventListener('click', function() {
        
    //     // Function to toggle Class
    //     document.querySelector('#sD_OverlayBox2').classList.toggle('sD_UnGhost');
    // });




    // // Hide Overlay 2 by Closing-Button
    
    // document.querySelector('#closer1').addEventListener('click', function() {
        
    //     // Function to toggle Class
    //     document.querySelector('#sD_OverlayBox1').classList.toggle('sD_UnGhost');
    // });
    

    // // Hide Overlay 2 by Closing-Button

    // document.querySelector('#closer2').addEventListener('click', function() {
        
    //     // Function to toggle Class
    //     document.querySelector('#sD_OverlayBox2').classList.toggle('sD_UnGhost');
    // });




    // Show Overlay 2 by Button
    
    // document.querySelectorAll('.sD_startButton').forEach(function (element) {

    //     element.addEventListener('click', function (event) {
    //         // console.log(event);
    //         // console.log(element);
    //         var selector = element.getAttribute('data-sD_Target');
    //         // console.log(selector);
    //         document.querySelector(selector).classList.toggle('sD_Ghost');
    //         // Function to toggle Class
    //         // document.querySelector('#sD_OverlayBox1').classList.toggle('sD_UnGhost');
    
    //     });
    // });


    // Show Overlay 2 by Button .sD_Closer
    
    
    // document.querySelectorAll('.sD_startButton, .sD_Closer').forEach(function (element) {

    //     element.addEventListener('click', function (event) {
    //         // console.log(event);
    //         // console.log(element);
    //         var selector = element.getAttribute('data-sD_Target');
    //         // console.log(selector);
    //         document.querySelector(selector).classList.toggle('sD_UnGhost');
    //         // Function to toggle Class
    //         // document.querySelector('#sD_OverlayBox1').classList.toggle('sD_UnGhost');

    //     });
    // });    


// document.querySelectorAll('.sD_OpenClose').forEach(function (element) {

//     sD_CloserClickAdd(element);

// });

// function sD_CloserClickAdd (element) {

//         element.addEventListener('click', function (event) {
        
//         sD_ClickAdd(event, element);
//         console.log('Eventlistener added');
//     });
//         element.removeEventListener('click', function (event) {
        
//         sD_ClickAdd(event, element);
//         console.log('Eventlistener removed');
//     });

// };

// function sD_ClickAdd (event, element) {
//     // console.log(event);
//       // console.log(element);
//       var selector = element.getAttribute('data-sD_Target');
//       // console.log(selector);
//       document.querySelector(selector).classList.toggle('sD_UnGhost');
//       // Function to toggle Class
//       // document.querySelector('#sD_OverlayBox1').classList.toggle('sD_UnGhost');  
// };


document.querySelectorAll('.sD_OpenClose').forEach(function (element) {

    element.addEventListener('click', function (event) {
    
    sD_showOverlay(event, element);
    console.log('Eventlistener added');
    });

});

function sD_showOverlay (event, element) {
      var selector = element.getAttribute('data-sD_Target');
      document.querySelector(selector).classList.toggle('sD_UnGhost');
};

var huhu = document.querySelectorAll('.huhu');

document.querySelectorAll('.huhu').forEach(function (element) {
    
        str.toLowerCase();  
    });