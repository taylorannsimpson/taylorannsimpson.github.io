
// shows and hides navigation //
//----------------------------//

$('#links').hide();

$('#navigation').click(function(e) {
  
  e.preventDefault();

  $(this).next('#links').slideToggle(400);

  $('#square').toggle();
  $('#arc').toggle();

});

// shows stored section //
//----------------------//

$('#stored').hide();
$('#arc').hide();

$('#square').click(function(e) {

  e.preventDefault();

  $('#background').toggleClass('bg-white');
  $('#navigation').toggleClass('bg-white');
  $('#h1').toggleClass('t-dark-blue');
  $('#currently').toggleClass('t-dark-blue');

  $(this).next('#stored').slideToggle(400);

  $('#displayed').hide();
  $('#square').hide();
  $('#arc').show();

});

// shows displayed section //
//-------------------------//

$('#arc').click(function(e) {

  e.preventDefault();

  $('#background').toggleClass('bg-white');
  $('#navigation').toggleClass('bg-white');
  $('#h1').toggleClass('t-dark-blue');
  $('#currently').toggleClass('t-dark-blue');

  $('#displayed').slideToggle(400).show();

  $('#stored').hide();
  $('#square').show();
  $('#arc').hide();

});

// shows and hides displayed sidebar search //
//------------------------------------------//

$("#sort-displayed").hide();

$("#sidebar-displayed").click(function() {

  $(this).prev("#sort-displayed").toggle(400);

  // $(".object").addClass('object-right');

});

// shows and hides stored sidebar search //
//---------------------------------------//

$("#sort-stored").hide();

$("#sidebar-stored").click(function() {

  $(this).prev("#sort-stored").toggle(400);

});

// displayed // data from sheetlabs //
//----------------------------------//

var displayed = (function () {
    var displayed = null;
    $.ajax({
        'async': false,
        'global': false,
        'type': 'GET',
        'url': "https://sheetlabs.com/TANN/displayedobjects",
        'dataType': 'json',
        'success': function (data) {
         displayed = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          return $("#a").text('Sorry!  There was an error requesting your data.')
        }
    });
    return displayed
})();

// stored // data from sheetlabs //
//-------------------------------//

var stored = (function () {
    var stored = null;
    $.ajax({
        'async': false,
        'global': false,
        'type': 'GET',
        'url': "https://sheetlabs.com/TANN/storedobjects",
        'dataType': 'json',
        'success': function (data) {
          stored = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          return $("#two").text('Sorry!  There was an error requesting your data.')
        }
    });
    return stored
})();

// text change functions //
//-----------------------//

var textChanges = function() {

  // toggles object descriptions //
  //-----------------------------//

  $(".meaning").hide();

  $(".object").click(function() {

    $(this).next(".meaning").slideToggle(200);

  });

  // show dropdown navigation //
  //--------------------------//

  $(".l-dropdown").hide();

  $(".l-label").click(function() {

    $(".l-dropdown").slideToggle(200);

  });

  // toggles text colors based on use //
  // -------------------------------- //

  $(".practical").click(function() {

    $(this).toggleClass('t-blue');  

  });

  $(".both").click(function() {

    $(this).toggleClass('t-green');  

  });

  $(".beautiful").click(function() {

    $(this).toggleClass('t-yellow');  

  });

  // toggles background color of displayed objects //
  //-----------------------------------------------//

  $(".displayed").click(function() {

    $(this).toggleClass('bg-light-gray');

  });

  // toggles background color of stored objects //
  //--------------------------------------------//

  $(".stored").click(function() {

    $(this).toggleClass('bg-dark-blue');

  });

};

// dropdown labels //
//-----------------//

var dDropAlphabet = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var dDropUse = ['practical', 'both', 'beautiful'];

var dDropLocation = ['Baltimore, MD', 'Brooklyn, NY', 'Canton, MI', 'Caseville, MI', 'College Park, MD', 'Commerce Twp, MI', 'Grand Haven, MI', 'Mackinac Island, MI', 'New York, NY', 'Novi, MI', 'Petoskey, MI', 'Philadelphia, PA', 'Souderton, PA', 'Sunnyvale, CA', 'Tampa, FL', 'White Marsh, MD'];

var dDropHow = ['purchased new', 'purchased used', 'given new', 'given used', 'made', 'found used', 'found new'];

var dDropYear = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'];

// dropdown setup //
//----------------//

var dDropdown 

var dSetUpDropdown = function() {

  dDropdown_template = dDropdown_div.innerHTML;
  dDropdown_target.innerHTML = _.template(dDropdown_template,{dDropdown:dDropdown});

};

var sSetUpDropdown = function() {

  sDropdown_template = sDropdown_div.innerHTML;
  sDropdown_target.innerHTML = _.template(sDropdown_template,{dDropdown:dDropdown});

};

// Label setup //
//-------------//

var dDropLabel

var dSetUpLabel = function() {

  dLabel_template = dLabel_div.innerHTML;
  dLabelTarget.innerHTML = _.template(dLabel_template,{dDropLabel:dDropLabel});

};

var sSetUpLabel = function() {

  sLabel_template = sLabel_div.innerHTML;
  sLabelTarget.innerHTML = _.template(sLabel_template,{dDropLabel:dDropLabel});

};

// sorting template for displayed objects //
//----------------------------------------//

var displayed_template
var groupDisplayed
var sortDisplayed
var titleLabel

var setUpTemplate = function(sortDisplayed) {

  displayed_template = displayed_div.innerHTML;
  displayed_target.innerHTML += _.template(displayed_template,{displayed:sortDisplayed});

};

// displayed checkbox sorting toggles //
//------------------------------------//

if ($('#d-year').attr('checked')) {

  displayed_target.innerHTML = "";
  
  dDropLabel = ['year'];
  dDropdown = dDropYear;

  groupDisplayed = _.groupBy(displayed, 'year');
  // console.log(groupDisplayed);

  _.each(groupDisplayed, function(displayed, key) {

    var sortDisplayed = _.sortBy(displayed, 'object')
      //console.log(key)

      titleLabel = displayed[0].year;

      setUpTemplate(sortDisplayed);

  });
  
  dSetUpLabel();
  dSetUpDropdown();
  textChanges();

}


$('#d-year').click(function() {

  displayed_target.innerHTML = "";

  dDropLabel = ['year'];
  dDropdown = dDropYear;

  groupDisplayed = _.groupBy(displayed, 'year');

  _.each(groupDisplayed, function(displayed, key) {

    var sortDisplayed = _.sortBy(displayed, 'object')
      //console.log(key)

      titleLabel = displayed[0].year;

      setUpTemplate(sortDisplayed);

  });
  
  dSetUpLabel();
  dSetUpDropdown();
  textChanges();
  
});

// if ($('#d-year').attr('checked')) {

$('#d-alphabetical').click(function() {

  displayed_target.innerHTML = "";

  dDropLabel = ['alphabet'];
  dDropdown = dDropAlphabet;

  groupDisplayed = _.groupBy(displayed, letter);

    var letter = 'object'.charAt(1);

  _.each(groupDisplayed, function(displayed, key) {

    var sortDisplayed = _.sortBy(displayed, 'object')
      //console.log(key)

      titleLabel = displayed[0].object.substring(0,1);

      setUpTemplate(sortDisplayed);

  });
      
  dSetUpLabel();
  dSetUpDropdown();
  textChanges();

});

$('#d-location').click(function() {

  displayed_target.innerHTML = "";

  dDropLabel = ['location'];
  dDropdown = dDropLocation;
    
  groupDisplayed = _.groupBy(displayed, 'location');

  _.each(groupDisplayed, function(displayed, key) {

    var sortDisplayed = _.sortBy(displayed, 'object')
      //console.log(key)

      titleLabel = displayed[0].location;

      setUpTemplate(sortDisplayed);

  });
 

  dSetUpLabel();
  dSetUpDropdown();
  textChanges();

});

$('#d-how').click(function() {

  displayed_target.innerHTML = "";

  dDropLabel = ['how'];
  dDropdown = dDropHow;

  groupDisplayed = _.groupBy(displayed, 'how1');

  _.each(groupDisplayed, function(displayed, key) {

    var sortDisplayed = _.sortBy(displayed, 'object')
      //console.log(key)

      titleLabel = displayed[0].how1;

      setUpTemplate(sortDisplayed);

  });
   
  dSetUpLabel();
  dSetUpDropdown();
  textChanges();

});

$('#d-classification').click(function() {

  displayed_target.innerHTML = "";

  dDropLabel = ['classification'];
  dDropdown = dDropUse;
  
  groupDisplayed = _.groupBy(displayed, 'use');

  _.each(groupDisplayed, function(displayed, key) {

    var sortDisplayed = _.sortBy(displayed, 'object')
      //console.log(key)

      titleLabel = displayed[0].use;

      setUpTemplate(sortDisplayed);

  });
  
  dSetUpLabel();
  dSetUpDropdown();
  textChanges();

});

// sorting template for stored objects //
//-------------------------------------//

var stored_template
var sortStored

var setUpStored = function(sortStored) {

  stored_template = stored_div.innerHTML;
  stored_target.innerHTML += _.template(stored_template,{stored:sortStored});

};

// checkbox toggles for stored objects //
//-------------------------------------//

// if ($('#s-year').attr('checked')) {
  
//   dDropLabel = ['year'];
//   dDropdown = dDropYear;
//   sortStored = _.sortBy(stored, 'year');

//   sSetUpLabel();
//   sSetUpDropdown();
//   setUpStored(sortStored);
//   textChanges();

// }

$('#s-year').click(function() {

  dDropLabel = ['year'];
  dDropdown = dDropYear;
  sortStored = _.sortBy(stored, 'year');

  sSetUpLabel();
  sSetUpDropdown();
  setUpStored(sortStored);
  textChanges();
  
});

$('#s-alphabetical').click(function() {

  dDropLabel = ['alphabet'];
  dDropdown = dDropAlphabet;
  sortStored = _.sortBy(stored, 'object');
   
  sSetUpLabel();
  sSetUpDropdown(); 
  setUpStored(sortStored);
  textChanges();

});

$('#s-location').click(function() {

  dDropLabel = ['location'];
  dDropdown = dDropLocation;
  sortStored = _.sortBy(stored, 'location');
  
  sSetUpLabel();
  sSetUpDropdown();  
  setUpStored(sortStored);
  textChanges();

});

$('#s-how').click(function() {

  dDropLabel = ['how'];
  dDropdown = dDropHow;
  sortStored = _.sortBy(stored, 'how1');
  
  sSetUpLabel();
  sSetUpDropdown(); 
  setUpStored(sortStored);
  textChanges();

});

$('#s-classification').click(function() {

  dDropLabel = ['classification'];
  dDropdown = dDropUse;

  groupStored = _.groupBy(stored, 'use');

  _.each(groupStored, function(stored, key) {

    var sortStored = _.sortBy(stored, 'object')
      //console.log(key)

      titleLabel = stored[0].use;

      setUpStored(sortStored);

  });
  
  sSetUpLabel();
  sSetUpDropdown();
  textChanges();

});