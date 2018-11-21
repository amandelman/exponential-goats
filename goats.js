console.log("connected123");


// var goat;
// var buttonYes;
// var buttonNo

// function preload(){
// goat = loadImage("./images/goat.png");
// }
//
// function setup(){
//   var cnv = createCanvas(720,580);
//   buttonYes = createButton('Yes');
//
//   // buttonNo = createButton("No");
//   background(220);
// }
//
// function draw(){
//   image(goat, 200, 200);
//   ellipse(100,100,50,50);
// }
// function fallingSnow() {
//
//   //Working from here: https://stackoverflow.com/questions/19333422/create-random-falling-object-in-jquery
//
//     var $goats = $(), qt = 20;
//
//     for (var i = 0; i < qt; ++i) {
//       // $('#container').append('<img class ="goats" src="images/goat.png" />')
//       // $('.snowflakes').prepend('<img id="theGoat" src="images/goat.png" />')
//         var $goat = $('<div class="goats"></div>');
//         $('.container').append(".goats");
//         $('.goats').append('<img class ="goats" src="images/goat.png"/>');
//         $goat.css({
//             'left': (Math.random() * $('#site').width()) + 'px',
//             'top': (- Math.random() * $('#site').height()) + 'px'
//         });
//         // add this snowflake to the set of snowflakes
//         $goats = $goats.add($goat);
//     }
//     $('#snowZone').prepend($goats);
//
//     $goats.animate({
//         top: "500px",
//         opacity : "0",
//     }, Math.random() + 5000, function(){
//         $(this).remove();
//         // run again when all 20 snowflakes hit the floor
//         if (--qt < 1) {
//             fallingSnow();
//         }
//     });
// }
// fallingSnow();
var goats = [];
function fallingSnow() {

    var $snowflakes = $(), qt = 1;
    //
    for (var i = 0; i < qt; ++i) {
        var $snowflake = $('<div class="snowflakes"></div>');

        $snowflake.css({
            'left': (Math.random() * $('#site').width()) + 'px',
            'top': (- Math.random() * $('#site').height()) + 'px'
        });
        // add this snowflake to the set of snowflakes
        $snowflakes = $snowflakes.add($snowflake);
    }
    $('#snowZone').prepend($snowflakes);
    $('.snowflakes').append('<img src="images/goat.png"/>');

    $snowflakes.animate({
        top: "500px",
        opacity : "0",
    }, Math.random() + 5000, function(){
        $(this).remove();
        // run again when all 20 snowflakes hit the floor
        if (--qt < 1) {
            fallingSnow();
        }
    });
}
fallingSnow();
interval = setInterval(fallingSnow, 100);
