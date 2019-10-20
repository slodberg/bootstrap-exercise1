$(function () { // DOM ready for jQuery??
  $('.parallax-window').parallax({});
}); //END DOM ready

//BU = back up - kan slettes
/*function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if (!isMobile()) {
  //alert('hello');
  $('.parallax-window').parallax({});
} else {
  alert("hello");
}

...det her vil virke, se CSS nederst. Billederne skal sættes som baggrundsbilleder i stedet for data-src-img - parallaxen virker stadig.

//$('.parallax-window').parallax({
//imageSrc: 'https://picsum.photos/id/823/2000/3000'
//});
/* $window = $(window);
 $window.scroll(function () { //lytter på scroll event i vinduet
   $windowYoffset = window.pageYOffset + $window.height(); //Viewportens y-værdi efter scroll + vinduets højde for at komme ned i bunden af vinduet - ellers ville animation fyre lang tid før vore element er i viewporten */
/* console.log('windowY ' + $windowYoffset);
  }); //END scroll event



CSS:
    .bck-img-1 {
      background-image: url(https://picsum.photos/id/824/3000/2000);
      background-size: cover;
    }

*/
