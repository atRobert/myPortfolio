$(document).ready(function() {

    var scrollLink = $('.scroll');
  
    //Smooth Scrolling
    scrollLink.click(function(event) {
      event.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000);
    })
  
    //Night Mode On!
    var nightCount = 0
    var nightMode = $('.night-mode');
    nightMode.click(function(event){
      event.preventDefault();
      $('.btn').children().toggleClass('fa-sun');
      if(nightCount%2==0){
  
        document.documentElement.style.setProperty('--main-color', 'grey');
        document.documentElement.style.setProperty('--first-accent', '#333333');
        document.documentElement.style.setProperty('--second-accent', 'black');
      nightCount ++;
      console.log(nightCount);
    } else {
      document.documentElement.style.setProperty('--main-color', 'grey');
      document.documentElement.style.setProperty('--first-accent', '#333333');
      document.documentElement.style.setProperty('--second-accent', 'black');
      nightCount ++;
    }
    })
  
  
    // ProjectInvolved Icon Hover Appear/Disappear
    var projectInvolved = $('.project-involved')
  
    $('.fa-python').hover(function(){
      projectInvolved.text('PYTHON (DJANGO)');
    }, function(){
      projectInvolved.text('\xa0')
    })
    $('.fa-gem').hover(function(){
      projectInvolved.text('RUBY');
    }, function(){
      projectInvolved.text('\xa0')
    })
    $('.fa-git-alt').hover(function(){
      projectInvolved.text('GIT');
    }, function(){
      projectInvolved.text('\xa0')
    })
    $('.fa-css3-alt').hover(function(){
      projectInvolved.text('CSS 3');
    }, function(){
      projectInvolved.text('\xa0')
    })
    $('.fa-html5').hover(function(){
      projectInvolved.text('HTML5');
    }, function(){
      projectInvolved.text('\xa0')
    })
    $('.fa-js').hover(function(){
      projectInvolved.text('JAVASCRIPT');
    }, function(){
      projectInvolved.text('\xa0')
    })
    $('.fa-react').hover(function(){
      projectInvolved.text('REACT JS');
    }, function(){
      projectInvolved.text('\xa0')
    })
    $('.fa-bootstrap').hover(function(){
      projectInvolved.text('BOOTSTRAP');
    }, function(){
      projectInvolved.text('\xa0')
    })
  
    //Active Link Change
    $(window).scroll(function(){
      var scrollbarLocation = $(this).scrollTop();
  
      scrollLink.each(function() {
  
  
        var sectionOffset = $(this.hash).offset().top
        if ( sectionOffset <= scrollBarLocation) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })
  
    })
})