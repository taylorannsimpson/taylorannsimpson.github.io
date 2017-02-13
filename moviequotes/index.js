
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

    // if (year === 1939) {
    //     $('#year').append('<p>' + year + '</p>');
    // }

    // if (year === 1933) {
    //     $('#year').append('<p>' + year + '</p>');
    // }

    $('#quote').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>' + '<span class="ranking">' + json[i].seq + '</span>' + " " + '<span class="quote">' + '"' + json[i].qt + '"' + '</span>' + " " + '<span class="ranking">' + json[i].ref + '</span>' + '</p>');
};