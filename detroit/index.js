// demoliton bricks

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

// issue bricks

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

// permit bricks

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

// auction bricks

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


// header counts

$('#demo-count').append('<div class="count">' + '<p class="total">' + demo.length + '</p>' + '<p class="total-type">' + "DEMOLITONS" + '</p>' + '</div>');

$('#permit-count').append('<div class="count">' + '<p class="total">' + permit.length + '</p>' + '<p class="total-type">' + "BUILDING PERMITS" + '</p>' + '</div>');

$('#auction-count').append('<div class="count">' + '<p class="total">' + auction.length + '</p>' + '<p class="total-type">' + "AUCTION SALES" + '</p>' + '</div>');

$('#issue-count').append('<div class="count">' + '<p class="total">' + issue.length + '</p>' + '<p class="total-type">' + "SUBMITTED ISSUES" + '</p>' + '</div>');


// toggles about section

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

// closes about section

$('#about-exit').click(function(e) {
  
  e.preventDefault();

  $('#info-pop').toggle(0);
  $('#method').hide()

});

// underscore brick template

var template = containingDiv.innerHTML;
target.innerHTML = _.template(template,{demo:demo, issue:issue, permit:permit, auction:auction});

// zoom out

$('#minus').click(function(e) {
      
  e.preventDefault();

  if ($('#bricks div').hasClass('brick')) {

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

// zoom in

$('#plus').click(function(e) {
      
  e.preventDefault();

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
    
});
