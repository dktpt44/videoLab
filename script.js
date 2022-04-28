$(document).ready(() => {
  setTimeout(() => {
    $(".loadingScreen").fadeOut("slow", () => {
      $(".showText").fadeIn("slow");
    });
    // hide the text scroll and show the video
    setTimeout(() => {
      $(".showText").fadeOut("slow", () => {
        $(".playButtonClass").fadeIn("slow");
      });
    }, 24000);

    // when my button is clicked
    $(".myButton").on("click", () => {
      $(".mybuttonDivHOlder").addClass("decreasesizeanim");
      setTimeout(() => {
        $(".rotateDiv").addClass("rotateoneeighty");
        setTimeout(() => {
          $(".mybuttonDivHOlder").addClass("bringitback");

          // video elem
          var vid = $('#myVid')[0];
          vid.pause();
          var isvideoPlaying = false;
          var playPause = $(".controlsInfo span");
          playPause.text("play_circle");

          document.querySelector("body").addEventListener('wheel', (e) => {
            vid.pause();
            isvideoPlaying = false;
            playPause.text("play_circle");
            // scroll down 
            if (e.wheelDelta < 0) {
              let myTm = setInterval(() => {
                vid.currentTime += 0.25;
              }, 100);
              setTimeout(() => {
                clearInterval(myTm)
              }, 200)
            } else {
              let myTm = setInterval(() => {
                vid.currentTime -= 0.25;
              }, 100);
              setTimeout(() => {
                clearInterval(myTm)
              }, 200)
            }
            e.preventDefault();
            e.stopPropagation();
            return false;
          }, { passive: false });

          // pause play controls 
          playPause.on("click", () => {
            if (isvideoPlaying) {
              isvideoPlaying = false;
              playPause.text("pause");
              vid.pause();
            } else {
              isvideoPlaying = true;
              playPause.text("play_circle");
              vid.play();
            }
          });
          //
        }, 2200);
      }, 1000)
    });





  }, 1000);
});
