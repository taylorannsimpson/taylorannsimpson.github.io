
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

var groups = {};

for(var i = 0; i < json.length; i++) {
    var year = json[i].year;
    var rank = '<span class="ranking">'+ json[i].seq + '</span>' + " ";
    var quote = '<span class="quote">' + json[i].qt + '</span>' + " ";
    var movie = '<span class="ranking">' + json[i].ref + '</span>'; 
    groups[year] = groups[year] || [];
    // groups[year].push(year);
    groups[year].push(rank + quote + movie);

    // if (year === 1927) {
    //     $('#block').append(
    //     $('#year').append('<p>' + year + '</p>') +
    //     $('#quote').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>' + groups[1927].pop() + '</p>')
    //     );
    // }

    // if (year === 1927) {
    //     $('#1927').append(
    //     $('#quote').append('<p>' + '<span class="no">' + "rank." + '</span>'+ groups[1927].pop() + '</p>')
    //     );
    // }

    // if (year === 1933) {
    //     $('#1933').append(
    //     $('#quote').append('<p>' + '<span class="no">' + "rank." + '</span>'+ groups[1933].pop() + '</p>')
    //     );
    // }

    if (year === 1927) {
        $('#1927').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1927].pop() + '</p>');
    }

    if (year === 1929) {
        $('#1929').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1929].pop() + '</p>');
    }

    if (year === 1930) {
        $('#1930').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1930].pop() + '</p>');
    }

    if (year === 1931) {
        $('#1931').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1931].pop() + '</p>');
    }

    if (year === 1932) {
        $('#1932').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1932].pop() + '</p>');
    }

    if (year === 1933) {
        $('#1933').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1933].pop() + '</p>');
    }

    if (year === 1939) {
        $('#1939').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1939].pop() + '</p>');
    }

    if (year === 1940) {
        $('#1940').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1940].pop() + '</p>');
    }

    if (year === 1941) {
        $('#1941').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1941].pop() + '</p>');
    }

    if (year === 1942) {
        $('#1942').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1942].pop() + '</p>');
    }

    if (year === 1944) {
        $('#1944').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1944].pop() + '</p>');
    }

    if (year === 1945) {
        $('#1945').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1945].pop() + '</p>');
    }

    if (year === 1948) {
        $('#1948').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1948].pop() + '</p>');
    }

    if (year === 1949) {
        $('#1949').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1949].pop() + '</p>');
    }

    if (year === 1950) {
        $('#1950').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1950].pop() + '</p>');
    }

    if (year === 1951) {
        $('#1951').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1951].pop() + '</p>');
    }

    if (year === 1953) {
        $('#1953').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1953].pop() + '</p>');
    }

    if (year === 1954) {
        $('#1954').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1954].pop() + '</p>');
    }

    if (year === 1958) {
        $('#1958').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1958].pop() + '</p>');
    }

    if (year === 1959) {
        $('#1959').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1959].pop() + '</p>');
    }

    if (year === 1960) {
        $('#1960').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1960].pop() + '</p>');
    }

    if (year === 1962) {
        $('#1962').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1962].pop() + '</p>');
    }

    if (year === 1964) {
        $('#1964').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1964].pop() + '</p>');
    }

    if (year === 1967) {
        $('#1967').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1967].pop() + '</p>');
    }

    if (year === 1968) {
        $('#1968').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1968].pop() + '</p>');
    }

    if (year === 1969) {
        $('#1969').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1969].pop() + '</p>');
    }

    if (year === 1970) {
        $('#1970').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1970].pop() + '</p>');
    }

    if (year === 1971) {
        $('#1971').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1971].pop() + '</p>');
    }

    if (year === 1972) {
        $('#1972').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1972].pop() + '</p>');
    }

    if (year === 1973) {
        $('#1973').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1973].pop() + '</p>');
    }

    if (year === 1974) {
        $('#1974').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1974].pop() + '</p>');
    }

    if (year === 1975) {
        $('#1975').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1975].pop() + '</p>');
    }

    if (year === 1976) {
        $('#1976').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1976].pop() + '</p>');
    }

    if (year === 1977) {
        $('#1977').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1977].pop() + '</p>');
    }

    if (year === 1978) {
        $('#1978').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1978].pop() + '</p>');
    }

    if (year === 1979) {
        $('#1979').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1979].pop() + '</p>');
    }

    if (year === 1980) {
        $('#1980').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1980].pop() + '</p>');
    }

    if (year === 1981) {
        $('#1981').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1981].pop() + '</p>');
    }

    if (year === 1982) {
        $('#1982').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1982].pop() + '</p>');
    }

    if (year === 1983) {
        $('#1983').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1983].pop() + '</p>');
    }

    if (year === 1984) {
        $('#1984').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1984].pop() + '</p>');
    }

    if (year === 1986) {
        $('#1986').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1986].pop() + '</p>');
    }

    if (year === 1987) {
        $('#1987').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1987].pop() + '</p>');
    }

    if (year === 1989) {
        $('#1989').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1989].pop() + '</p>');
    }

    if (year === 1991) {
        $('#1991').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1991].pop() + '</p>');
    }

    if (year === 1992) {
        $('#1992').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1992].pop() + '</p>');
    }

    if (year === 1994) {
        $('#1994').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1994].pop() + '</p>');
    }

    if (year === 1995) {
        $('#1995').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1995].pop() + '</p>');
    }

    if (year === 1996) {
        $('#1996').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1996].pop() + '</p>');
    }

    if (year === 1997) {
        $('#1997').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1997].pop() + '</p>');
    }

    if (year === 1999) {
        $('#1999').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1999].pop() + '</p>');
    }

    if (year === 2002) {
        $('#2002').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[2002].pop() + '</p>');
    }
};