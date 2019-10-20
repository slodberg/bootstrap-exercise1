$(function () { // DOM ready for jQuery??
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  if (!isMobile()) {
    //alert('hello');
    $('.parallax-window').parallax({});
  } else {
    alert("hello");
  }

  //$('.parallax-window').parallax({
  //imageSrc: 'https://picsum.photos/id/823/2000/3000'
  //});
  /* $window = $(window);
   $window.scroll(function () { //lytter på scroll event i vinduet    
     $windowYoffset = window.pageYOffset + $window.height(); //Viewportens y-værdi efter scroll + vinduets højde for at komme ned i bunden af vinduet - ellers ville animation fyre lang tid før vore element er i viewporten */
  /* console.log('windowY ' + $windowYoffset);
  }); //END scroll event
*/

}); //END DOM ready
