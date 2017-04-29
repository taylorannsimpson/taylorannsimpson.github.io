// 
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



var chosenItems
var arrayUse = [];
var arrayYear = [];
var arrayHow

//     chosenItems = _.intersection(arrayUse, arrayYear, arrayHow);

var filterChosen
var checkedValues = [];

var updateCount = function() {

    // filterChosen = _.filter(displayed, function(item){return checkedValues});

    chosenItems = _.intersection(checkedValues);

    console.log(chosenItems);

    var numberItems = chosenItems.length;

    console.log(numberItems);

    circle_target.innerHTML = "";

    infographic_template = infographic_div.innerHTML;
    circle_target.innerHTML = _.template(infographic_template,{chosenItems:chosenItems, numberItems:numberItems});

};

// classification textboxes //
//--------------------------//

$('#ibeautiful').click(function() {

    arrayUse = _.filter(displayed, function(item){return item.use === "beautiful"});

    checkedValues.push(arrayUse);

    // checkedValues.push("beautiful");

    updateCount();

    // setUpCircle(displayed);

});


// if ($('#iboth').attr('checked')) {
$('#iboth').click(function() {

    arrayUse = _.filter(displayed, function(item){return item.use === "both"});

    checkedValues.push(arrayUse);

    // checkedValues.push("both");

    updateCount();

    
    // setUpCircle(displayed);

});


// if ($('#ipractical').prop('checked')) {
$('#ipractical').click(function() {

    arrayUse = _.filter(displayed, function(item){return item.use === "practical"});

    checkedValues.push(arrayUse);

    // checkedValues.push("practical");

    updateCount();

    
    // setUpCircle(displayed);

});

// year checkboxes //
//-----------------//

$('#i03').click(function() {

    // arrayYear = _.filter(displayed, function(item){return item.year === 2003});

    // checkedValues.push(arrayYear);

    checkedValues.push(2003);

    updateCount();

    
    // setUpCircle(displayed);

});

// $('#i05').click(function() {

//     arrayYear = _.filter(displayed, function(item){return item.year === 2005});

//     checkedValues.push(arrayYear);

//     updateCount();

//     // setUpCircle(displayed);

// });

// $('#i06').click(function() {

//     arrayYear = _.filter(displayed, function(item){return item.year === 2006});

//     checkedValues.push(arrayYear);

//     updateCount();

//     // setUpCircle(displayed);

// });

// $('#i07').click(function() {

//     arrayYear = _.filter(displayed, function(item){return item.year === 2007});

//     checkedValues.push(arrayYear);

//     updateCount();

//     // setUpCircle(displayed);

// });

// $('#i08').click(function() {

//     arrayYear = _.filter(displayed, function(item){return item.year === 2008});

//     checkedValues.push(arrayYear);

//     updateCount();

//     // setUpCircle(displayed);

// });

// $('#i09').click(function() {

//     arrayYear = _.filter(displayed, function(item){return item.year === 2009});

//     checkedValues.push(arrayYear);

//     updateCount();

//     // setUpCircle(displayed);

// });


// $('#i10').click(function() {

//     arrayYear = _.filter(displayed, function(item){return item.year === 2010});

//     checkedValues.push(arrayYear);

//     updateCount();

//     // setUpCircle(displayed);

// });


// $('#i11').click(function() {

//     arrayYear = _.filter(displayed, function(item){return item.year === 2011});

//     checkedValues.push(arrayYear);

//     updateCount();

//     // setUpCircle(displayed);

// });


$('#i12').click(function() {

    // arrayYear = _.filter(displayed, function(item){return item.year === 2012});

    // checkedValues.push(arrayYear);

    checkedValues.push(2012);

    updateCount();

    // setUpCircle(displayed);

});

$('#i13').click(function() {

    // arrayYear = _.filter(displayed, function(item){return item.year === 2013});

    // checkedValues.push(arrayYear);

    checkedValues.push(2013);

    updateCount();

    // setUpCircle(displayed);

});


$('#i14').click(function() {

    // arrayYear = _.filter(displayed, function(item){return item.year === 2014});

    // checkedValues.push(arrayYear);

    checkedValues.push(2014);

    updateCount();

    // setUpCircle(displayed);

});

$('#i15').click(function() {

    // arrayYear = _.filter(displayed, function(item){return item.year === 2015});

    // checkedValues.push(arrayYear);

    checkedValues.push(2015);

    updateCount();

    // setUpCircle(displayed);

});

$('#i16').click(function() {

    // arrayYear = _.filter(displayed, function(item){return item.year === 2016});

    // checkedValues.push(arrayYear);

    checkedValues.push(2016);

    updateCount();

    // setUpCircle(displayed);

});

$('#i17').click(function() {

    // arrayYear = _.filter(displayed, function(item){return item.year === 2017});

    // checkedValues.push(arrayYear);

    checkedValues.push(2017);

    updateCount();

    // setUpCircle(displayed);

});

// how checkboxes //
//----------------//

$('#ifnew').click(function() {

    arrayHow = _.filter(displayed, function(item){return item.how1 === "found new"});
    // setUpCircle(displayed);

});

$('#ifused').click(function() {

    arrayHow = _.filter(displayed, function(item){return item.how1 === "found used"});
    // setUpCircle(displayed);

});

$('#ignew').click(function() {

    arrayHow = _.filter(displayed, function(item){return item.how1 === "given new"});
    // setUpCircle(displayed);

});

$('#igused').click(function() {

    arrayHow = _.filter(displayed, function(item){return item.how1 === "given used"});
    // setUpCircle(displayed);

});

$('#imade').click(function() {

    arrayHow = _.filter(displayed, function(item){return item.how1 === "made"});
    // setUpCircle(displayed);

});

$('#ipnew').click(function() {

    arrayHow = _.filter(displayed, function(item){return item.how1 === "purchased new"});
    // setUpCircle(displayed);

});

$('#ipused').click(function() {

    arrayHow = _.filter(displayed, function(item){return item.how1 === "purchased used"});
    // setUpCircle(displayed);

});


