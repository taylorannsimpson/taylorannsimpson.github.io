/* demoliton bricks*/

var demo = (function () {
    var demo = null;
    // JQuery Ajax Request Documentation: https://api.jquery.com/jquery.ajax/
    $.ajax({
        'async': false,
        'global': false,
        'type': 'GET',
        'url': "https://data.detroitmi.gov/resource/uzpg-2pfj.json",
        'dataType': 'json',
        'success': function (data) {
          demo = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          return $("#demo-brick").text('Sorry!  There was an error requesting your data.')
        }
    });
    return demo
})();

/* issue bricks*/

var issue = (function () {
    var issue = null;
    // JQuery Ajax Request Documentation: https://api.jquery.com/jquery.ajax/
    $.ajax({
        'async': false,
        'global': false,
        'type': 'GET',
        'url': "https://data.detroitmi.gov/resource/j7tb-epek.json",
        'dataType': 'json',
        'success': function (data) {
          issue = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          return $("#issue-brick").text('Sorry!  There was an error requesting your data.')
        }
    });
    return issue
})();

/* permit bricks*/

var permit = (function () {
    var permit = null;
    // JQuery Ajax Request Documentation: https://api.jquery.com/jquery.ajax/
    $.ajax({
        'async': false,
        'global': false,
        'type': 'GET',
        'url': "https://data.detroitmi.gov/resource/but4-ky7y.json",
        'dataType': 'json',
        'success': function (data) {
          permit = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          return $("#permit-brick").text('Sorry!  There was an error requesting your data.')
        }
    });
    return permit
})();

/* auction bricks*/

var auction = (function () {
    var auction = null;
    // JQuery Ajax Request Documentation: https://api.jquery.com/jquery.ajax/
    $.ajax({
        'async': false,
        'global': false,
        'type': 'GET',
        'url': "https://data.detroitmi.gov/resource/f45s-n4rb.json",
        'dataType': 'json',
        'success': function (data) {
          auction = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          return $("#auction-brick").text('Sorry!  There was an error requesting your data.')
        }
    });
    return auction
})();


/* toggles about section */

$('#info-pop').hide();
$('#method').hide();

$('#about').click(function(e) {
  
  e.preventDefault();

  $('#info-pop').toggle(0);

});

// toggle methodology 

$('#method-link').click(function(e) {
  
  e.preventDefault();

  $('#method').slideToggle(400);

});

$('#method-exit').click(function(e) {
  
  e.preventDefault();

  $('#method').slideToggle(400);

});

/* closes about section*/

$('#about-exit').click(function() {

  $('#info-pop').toggle(0);
  $('#method').hide()

});

/* closes brick sorting options */
// -----------------------------//

$('#brick-form').hide();

$('#sortBricks').click(function() {

  $('#brick-form').slideToggle(200);

});

/* sort bricks by date */
/*---------------------*/

var sortDemo = _.sortBy(demo, 'demolition_date');
var sortIssue = _.sortBy(issue, 'ticket_created_date_time');
var sortPermit = _.sortBy(permit, 'permit_issued');
var sortSale = _.sortBy(auction, 'closing_date');

var demoArray = ($.merge([], sortDemo)).reverse();
var issueArray = ($.merge([], sortIssue)).reverse();
var permitArray = ($.merge([], sortPermit)).reverse();
var auctionArray = ($.merge([], sortSale)).reverse();

// options for brick sorting //
//---------------------------//

$('#demoOption').click(function() {
  $('.demo').toggle();
  $('#demo-count').toggle();
});

$('#issueOption').click(function() {
  $('.issue').toggle();
  $('#issue-count').toggle();
});

$('#permitOption').click(function() {
  $('.permit').toggle();
  $('#permit-count').toggle();
});

$('#auctionOption').click(function() {
  $('.sale').toggle();
  $('#auction-count').toggle();
});

/* closes year sorting options */
// -----------------------------//

$('#year-form').hide();

$('#sortYears').click(function() {

  $('#year-form').slideToggle(200);

});

// options for year sorting //
//---------------------------//


$('#14Option').click(function() {
  $('.2014').toggle();
});

$('#15Option').click(function() {
  $('.2015').toggle();

});

$('#16Option').click(function() {
  $('.2016').toggle();
});

$('#17Option').click(function() {
  $('.2017').toggle();
});


// header counts*/

$('#demo-count').append('<a href="#demoJump">' + '<div class="count demo-count">' + '<p class="total">' + demoArray.length + '</p>' + '<p class="total-type">' + "DEMOLITONS" + '</p>' + '</div>' + '</a>');

$('#permit-count').append('<a href="#permitJump">' + '<div class="count permit-count">' + '<p class="total">' + permitArray.length + '</p>' + '<p class="total-type">' + "BUILDING PERMITS" + '</p>' + '</div>' + '</a>');

$('#auction-count').append('<a href="#auctionJump">' + '<div class="count auction-count">' + '<p class="total">' + auctionArray.length + '</p>' + '<p class="total-type">' + "AUCTION SALES" + '</p>' + '</div>' + '</a>');

$('#issue-count').append('<a href="#issueJump">' + '<div class="count issue-count">' + '<p class="total">' + issueArray.length + '</p>' + '<p class="total-type">' + "SUBMITTED ISSUES" + '</p>' + '</div>' + '</a>');



/* underscore brick template */
/*---------------------------*/

var template = containingDiv.innerHTML;
target.innerHTML = _.template(template,{demoArray:demoArray, issueArray:issueArray, permitArray:permitArray, auctionArray:auctionArray});

/* zoom out */
/*----------*/

$('.more-info').hide();
$('.image').hide();

$('#minus').click(function() {

  if ($('#bricks div').hasClass('large-brick')) {

    $('#bricks div').removeClass('large-brick');
    $('#bricks div').addClass('brick');
    $('.more-info').hide();
    $('.image').hide();

    $('.l-issue-pic').addClass('l-issue');
    $('.l-issue-pic').removeClass('l-issue-pic');

  }

  else if ($('#bricks div').hasClass('brick')) {

    $('#bricks div').removeClass('brick');
    $('#bricks div').addClass('half-brick');
    $('.info').hide();
    $('.address-date').hide();

  }

  else if ($('#bricks div').hasClass('half-brick')) {

    $('#bricks div').removeClass('half-brick');
    $('#bricks div').addClass('quarter-brick');
    $('.type').hide();
    $('.camera').hide();

  }

  else if ($('#bricks div').hasClass('quarter-brick')) {
    
    $('#bricks div').removeClass('quarter-brick');
    $('#bricks div').addClass('eighth-brick');

  }

  else if ($('#bricks div').hasClass('eighth-brick')) {

    $('#bricks div').removeClass('eighth-brick');
    $('#bricks div').addClass('sixteenth-brick');

  }

});

/* zoom in */

$('#plus').click(function() {

  if ($('#bricks div').hasClass('sixteenth-brick')) {
    
    $('#bricks div').removeClass('sixteenth-brick');
    $('#bricks div').addClass('eighth-brick');

  }

  else if ($('#bricks div').hasClass('eighth-brick')) {

    $('#bricks div').removeClass('eighth-brick');
    $('#bricks div').addClass('quarter-brick');   

  } 

  else if ($('#bricks div').hasClass('quarter-brick')) {

    $('#bricks div').removeClass('quarter-brick');
    $('#bricks div').addClass('half-brick');
    $('.type').show();
    $('.camera').show();

  }

  else if ($('#bricks div').hasClass('half-brick')) {

    $('#bricks div').removeClass('half-brick');
    $('#bricks div').addClass('brick');
    $('.info').show();
    $('.address-date').show();

  }

  else if ($('#bricks div').hasClass('brick')) {

    $('#bricks div').removeClass('brick');
    $('#bricks div').addClass('large-brick');
    $('.more-info').show();
    $('.image').show();

    $('.l-issue').addClass('l-issue-pic');
    $('.l-issue').removeClass('l-issue');

  }
    
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 220
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
