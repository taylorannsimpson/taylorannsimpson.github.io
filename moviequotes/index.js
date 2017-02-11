
var json = (function () {
    var json = null;
    // JQuery Ajax Request Documentation: https://api.jquery.com/jquery.ajax/
    $.ajax({
        'async': false,
        'global': false,
        'type': 'GET',
        'url': "http://mysafeinfo.com/api/data?list=moviequotes&format=json",
        'dataType': 'json',
        'success': function (data) {
          json = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          // alert('Danger Danger Danger')
          // debugger
          // return $("#dinosaurs").text(jqXHR.statusText);
          return $("#quote").text('Sorry!  There was an error requesting your data.')
        }
    });
    return json
})();

for(var i = 0; i < json.length; i++) {
    var year = json[i].year; 
    // var date = year.toString();
    // groups[date] = groups[date] || [];
    // groups[date].push(year);

    if (year === 1927) {
        $('#year').append('<p>' + year + '</p>');
    }

    if (year === 1939) {
        $('#year').append('<p>' + year + '</p>');
    }

    if (year === 1933) {
        $('#year').append('<p>' + year + '</p>');
    }

    $('#quote').append('<p class="large-text">' + '<span class="ranking">' + json[i].seq + '</span>' + " " + '<span class="quote">' + '"' + json[i].qt + '"' + '</span>' + " " + '<span class="ranking">' + json[i].ref + '</span>' + '</p>');
    
    // if (json[i].object.substring(0,1) === "r") {
    //     $("#dark").append('<p class="dark">' + "R" + '</p>');
    // }

    // if (json[i].object.substring(0,1) === "m") {
    //     $("#dark").append('<p class="dark">' + "M" + '</p>');
    // }
};

// var groups = {};

// for (var i = 0; i < json.length; i++) {
//     var year = json[i].year;
//     var date = year.toString();
//     groups[date] = groups[date] || [];
//     groups[date].push(year);
// };

// for (var i = 0; i < json.length; i++) {
//     var year = json[i].year; 
//     if (year === 1927);
//         $('#year').append('<p>' + year + '</p>');
// };

// for (var i = 0; i < json.length; i++) {
//     var object = json[i].year;
//     var firstChar = object.charAt(0);
//     groups[firstChar] = groups[firstChar] || [];
//     groups[firstChar].push(object);

//     if(groups[firstChar] === groups["r"]) {
//       $('#r').append('<p class="object">' + groups["r"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
//     }

//     if(groups[firstChar] === groups["m"]) {
//       $('#m').append('<p class="object">' + groups["m"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
//     }
// };