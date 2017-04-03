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


// bricks

for (var i = 0; i < demo.length; i++) {

    var full_date = demo[i].demolition_date;
    var date = full_date.substring(0,10);
    var sort_date = [date];
    
    $('#bricks').append('<div class="demo">' + '<p class="type">' + "DEMOLITION" + '</p>' + '<p class="address-date">' + demo[i].address + '</p>' + '<p class="info">' + "cost: $" + demo[i].price + '</p>' + '<p class="address-date">' + date + '</p>' + '</div>');

   function compareNumbers(a, b) {
        return a - b;
   };

   console.log(sort_date.sort(compareNumbers));
   // sort_date.sort(compareNumbers);

};



for (var i = 0; i < issue.length; i++) {
    
    var full_date = issue[i].ticket_created_date_time;
    var date = full_date.substring(0,10);

    $('#bricks').append('<div class="issue">' + '<div class="l-issue">' + '<p class="type">' + "ISSUE" + '</p>' + '<p class="address-date">' + issue[i].address + '</p>' + '<p class="info">' + issue[i].issue_type + '</p>' + '<p class="info">' + issue[i].issue_description + '</p>' + '<p class="address-date">' + date + '</p>' + '</div>' + '<img src="svg/camera.svg" class="camera">' + '</div>');

    // $('#image').append('<img src="camera.svg" class="camera">')

    // if (issue[i].issue_description === undefined) {
    //   issue[i}.issue_description.hide();
    // };

};

for (var i = 0; i < permit.length; i++) {
    
    // var long_date = permit[i].permit_issued;
    // var date = long_date.substring(0,10);

    $('#bricks').append('<div class="permit">' + '<p class="type">' + "PERMIT" + '</p>' + '<p class="address-date">' + permit[i].site_address + '</p>' + '<p class="info">' + permit[i].bld_type_use + ": " + permit[i].bld_permit_desc + '</p>' + '<p class="address-date">' + permit[i].permit_issued + '</p>' + '</div>');

};

for (var i = 0; i < auction.length; i++) {

    var full_date = auction[i].closing_date;
    var date = full_date.substring(0,10);
    
    $('#bricks').append('<div class="sale">' + '<p class="type">' + "SALE" + '</p>' + '<p class="address-date">' + auction[i].address + '</p>' + '<p class="info">' + "cost: $" + auction[i].final_sale_amount + '</p>' + '<p class="address-date">' + date + '</p>' + '</div>');

};

// toggles about section

$('#info-pop').hide();
$('#method').hide();

$('#about').click(function(e) {
  
  e.preventDefault();

  $('#info-pop').toggle(0);

  // $('html, body').animate({
  //   scrollTop: $('#info-pop').height()
  // }, 400);

// $('html, body').animate({
//     $scrollTop: ('#info-pop')
// });

// $('html, body').animate({
//     scrollTop: $('#info-pop').height()
//   }, 400);

  // $('html, body').scrollTop(0).animate(400);

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

