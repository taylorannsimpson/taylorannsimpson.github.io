// practical section # 1

var practical = (function () {
    var practical = null;
    // JQuery Ajax Request Documentation: https://api.jquery.com/jquery.ajax/
    $.ajax({
        'async': false,
        'global': false,
        'type': 'GET',
        'url': "https://sheetlabs.com/TSIM/practical",
        'dataType': 'json',
        'success': function (data) {
          practical = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          // alert('Danger Danger Danger')
          // debugger
          // return $("#dinosaurs").text(jqXHR.statusText);
          return $("#a").text('Sorry!  There was an error requesting your data.')
        }
    });
    return practical
})();

// for practical section #1

var groups = {};

for (var i = 0; i < practical.length; i++) {
    var object = practical[i].object;
    var firstChar = object.charAt(0);
    groups[firstChar] = groups[firstChar] || [];
    groups[firstChar].push(object);

    // alphabet


    if(groups[firstChar] === groups["1"]) {
      $('#one').append('<p class="object">' + groups["1"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["A"]) {
      $('#a1').append('<p class="object">' + groups["A"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["B"]) {
      $('#b1').append('<p class="object">' + groups["B"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["C"]) {
      $('#c1').append('<p class="object">' + groups["C"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["D"]) {
      $('#d1').append('<p class="object">' + groups["D"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["E"]) {
      $('#e1').append('<p class="object">' + groups["E"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["F"]) {
      $('#f1').append('<p class="object">' + groups["F"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["G"]) {
      $('#g1').append('<p class="object">' + groups["G"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["H"]) {
      $('#h1').append('<p class="object">' + groups["H"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["I"]) {
      $('#i1').append('<p class="object">' + groups["I"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["J"]) {
      $('#j1').append('<p class="object">' + groups["J"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["K"]) {
      $('#k1').append('<p class="object">' + groups["K"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["L"]) {
      $('#l1').append('<p class="object">' + groups["L"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["M"]) {
      $('#m1').append('<p class="object">' + groups["M"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["N"]) {
      $('#n1').append('<p class="object">' + groups["N"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["O"]) {
      $('#o1').append('<p class="object">' + groups["O"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["P"]) {
      $('#p1').append('<p class="object">' + groups["P"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["Q"]) {
      $('#q1').append('<p class="object">' + groups["Q"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["R"]) {
      $('#r1').append('<p class="object">' + groups["R"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["S"]) {
      $('#s1').append('<p class="object">' + groups["S"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["T"]) {
      $('#t1').append('<p class="object">' + groups["T"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["U"]) {
      $('#u1').append('<p class="object">' + groups["U"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["V"]) {
      $('#v1').append('<p class="object">' + groups["V"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["W"]) {
      $('#w1').append('<p class="object">' + groups["W"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["X"]) {
      $('#x1').append('<p class="object">' + groups["X"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["Y"]) {
      $('#y1').append('<p class="object">' + groups["Y"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["Z"]) {
      $('#z1').append('<p class="object">' + groups["Z"].pop(object) + '</p>' + '<p class="meaning">' + practical[i].meaning + '</p>');
    }   
};

// practical and beautiful section # 2

var pb = (function () {
    var pb = null;
    // JQuery Ajax Request Documentation: https://api.jquery.com/jquery.ajax/
    $.ajax({
        'async': false,
        'global': false,
        'type': 'GET',
        'url': "https://sheetlabs.com/TSIM/pb",
        'dataType': 'json',
        'success': function (data) {
          pb = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          // alert('Danger Danger Danger')
          // debugger
          // return $("#dinosaurs").text(jqXHR.statusText);
          return $("#a").text('Sorry!  There was an error requesting your data.')
        }
    });
    return pb
})();

// for practical and beautiful section # 2

var groups = {};

for (var i = 0; i < pb.length; i++) {
    var object = pb[i].object;
    var firstChar = object.charAt(0);
    groups[firstChar] = groups[firstChar] || [];
    groups[firstChar].push(object);

    // alphabet

    if(groups[firstChar] === groups["A"]) {
      $('#a2').append('<p class="object">' + groups["A"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["B"]) {
      $('#b2').append('<p class="object">' + groups["B"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["C"]) {
      $('#c2').append('<p class="object">' + groups["C"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["D"]) {
      $('#d2').append('<p class="object">' + groups["D"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["E"]) {
      $('#e2').append('<p class="object">' + groups["E"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["F"]) {
      $('#f2').append('<p class="object">' + groups["F"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["G"]) {
      $('#g2').append('<p class="object">' + groups["G"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["H"]) {
      $('#h2').append('<p class="object">' + groups["H"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["I"]) {
      $('#i2').append('<p class="object">' + groups["I"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["J"]) {
      $('#j2').append('<p class="object">' + groups["J"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["K"]) {
      $('#k2').append('<p class="object">' + groups["K"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["L"]) {
      $('#l2').append('<p class="object">' + groups["L"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["M"]) {
      $('#m2').append('<p class="object">' + groups["M"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["N"]) {
      $('#n2').append('<p class="object">' + groups["N"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["O"]) {
      $('#o2').append('<p class="object">' + groups["O"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["P"]) {
      $('#p2').append('<p class="object">' + groups["P"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["Q"]) {
      $('#q2').append('<p class="object">' + groups["Q"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["R"]) {
      $('#r2').append('<p class="object">' + groups["R"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["S"]) {
      $('#s2').append('<p class="object">' + groups["S"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["T"]) {
      $('#t2').append('<p class="object">' + groups["T"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["U"]) {
      $('#u2').append('<p class="object">' + groups["U"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["V"]) {
      $('#v2').append('<p class="object">' + groups["V"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["W"]) {
      $('#w2').append('<p class="object">' + groups["W"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["X"]) {
      $('#x2').append('<p class="object">' + groups["X"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["Y"]) {
      $('#y2').append('<p class="object">' + groups["Y"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["Z"]) {
      $('#z2').append('<p class="object">' + groups["Z"].pop(object) + '</p>' + '<p class="meaning">' + pb[i].meaning + '</p>');
    }  
};

// beautiful section # 3

var json = (function () {
    var json = null;
    // JQuery Ajax Request Documentation: https://api.jquery.com/jquery.ajax/
    $.ajax({
        'async': false,
        'global': false,
        'type': 'GET',
        'url': "https://sheetlabs.com/TSIM/beautiful",
        'dataType': 'json',
        'success': function (data) {
          json = data
        },
        'error': function(jqXHR, textStatus, errorThrown) {
          // alert('Danger Danger Danger')
          // debugger
          // return $("#dinosaurs").text(jqXHR.statusText);
          return $("#a").text('Sorry!  There was an error requesting your data.')
        }
    });
    return json
})();

// for beautiful section # 3

var groups = {};

for (var i = 0; i < json.length; i++) {
    var object = json[i].object;
    var firstChar = object.charAt(0);
    groups[firstChar] = groups[firstChar] || [];
    groups[firstChar].push(object);

    // alphabet

    if(groups[firstChar] === groups["A"]) {
      $('#a3').append('<p class="object">' + groups["A"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["B"]) {
      $('#b3').append('<p class="object">' + groups["B"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["C"]) {
      $('#c3').append('<p class="object">' + groups["C"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["D"]) {
      $('#d3').append('<p class="object">' + groups["D"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["E"]) {
      $('#e3').append('<p class="object">' + groups["E"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["F"]) {
      $('#f3').append('<p class="object">' + groups["F"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["G"]) {
      $('#g3').append('<p class="object">' + groups["G"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["H"]) {
      $('#h3').append('<p class="object">' + groups["H"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["I"]) {
      $('#i3').append('<p class="object">' + groups["I"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["J"]) {
      $('#j3').append('<p class="object">' + groups["J"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["K"]) {
      $('#k3').append('<p class="object">' + groups["K"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["L"]) {
      $('#l3').append('<p class="object">' + groups["L"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["M"]) {
      $('#m3').append('<p class="object">' + groups["M"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["N"]) {
      $('#n3').append('<p class="object">' + groups["N"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["O"]) {
      $('#o3').append('<p class="object">' + groups["O"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["P"]) {
      $('#p3').append('<p class="object">' + groups["P"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["Q"]) {
      $('#q3').append('<p class="object">' + groups["Q"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["R"]) {
      $('#r3').append('<p class="object">' + groups["R"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["S"]) {
      $('#s3').append('<p class="object">' + groups["S"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["T"]) {
      $('#t3').append('<p class="object">' + groups["T"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["U"]) {
      $('#u3').append('<p class="object">' + groups["U"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["V"]) {
      $('#v3').append('<p class="object">' + groups["V"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["W"]) {
      $('#w3').append('<p class="object">' + groups["W"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["X"]) {
      $('#x3').append('<p class="object">' + groups["X"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["Y"]) {
      $('#y3').append('<p class="object">' + groups["Y"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }

    if(groups[firstChar] === groups["Z"]) {
      $('#z3').append('<p class="object">' + groups["Z"].pop(object) + '</p>' + '<p class="meaning">' + json[i].meaning + '</p>');
    }  
};