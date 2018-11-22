console.log("connected123");
//   //Working from here: https://stackoverflow.com/questions/19333422/create-random-falling-object-in-jquery
// and here: https://scaleupnation.com/
//1. Make an array and add and remove shit from it HALF-DONE
//2. Put buttons in front DONE
//3. Make a counter DONE
//4. Make counter give you something new every 100 clicks

var clock = $('.your-clock').FlipClock(180, {
          clockFace: 'MinuteCounter',
					countdown: true,
          interval: 50,
          callbacks: {
              stop: function() {
              setTimeout(function(){
              clock.setTime(180);
              clock.start();
            },50)
          }
        }
})


$('.reset').click(function() {
  clock.stop();
});


function fallingGoats() {
    var goats = [];

    // loop through the creation of individual goats, each with their own class "goats"
    for (var i = 0; i < 1; i++) {
        var goat = $('<div class="goats"></div>');
        $('.goats').append('<img src="images/goat.png"/>');
        //randomize distribution of each goat across screen
        goat.css({
            'left': (Math.random() * $('#site').width()) + 'px',
            'top': (- Math.random() * $('#site').height()) + 'px'
        });
        ///trying to add a class to some of the goat divs on the screen to remove them later
        // console.log(goat["'0'"].offsetTop);
        console.log(goat[i]);
        if(goat.css.left>20){
          $('.goats').addClass('deleteMe');
        }
        // add this randomized goat to the set of goats
        goats = $(goats).add(goat);
    }
    
    $('#goatZone').append(goats);
    //fade goats as they fall
    $(goats).animate({
        top: "500px", opacity : "0",}, Math.random() *-2500 + 5000,);
        $('.button').click(function(){
          $(goat).remove();
        //VARIOUS experiments to remove goats in a better way. Banging my head against ARRAY problems.
        // intervalTime +=100;
        // console.log(intervalTime);
        });
        // $('.button').click(function(){
        //   goats = $(goats).splice(goat);
        // });
    console.log(goats.length);
}


fallingGoats();
var intervalTime = 100
interval = setInterval(fallingGoats, intervalTime);
