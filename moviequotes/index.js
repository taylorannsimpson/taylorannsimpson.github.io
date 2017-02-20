
// var json = (function () {
//     var json = null;
//     // JQuery Ajax Request Documentation: https://api.jquery.com/jquery.ajax/
//     $.ajax({
//         'async': false,
//         'global': false,
//         'type': 'GET',
//         'url': "http://mysafeinfo.com/api/data?list=moviequotes&format=json",
//         'dataType': 'json',
//         'success': function (data) {
//           json = data
//         },
//         'error': function(jqXHR, textStatus, errorThrown) {
//           // alert('Danger Danger Danger')
//           // debugger
//           // return $("#dinosaurs").text(jqXHR.statusText);
//           return $("#quote").text('Sorry!  There was an error requesting your data.')
//         }
//     });
//     return json
// })();


var json = [
  {
    "seq": 1,
    "year": 1939,
    "qt": "Frankly, my dear, I don't give a damn.",
    "ref": "Gone With the Wind"
  },
  {
    "seq": 2,
    "year": 1972,
    "qt": "I'm going to make him an offer he can't refuse.",
    "ref": "The Godfather"
  },
  {
    "seq": 3,
    "year": 1954,
    "qt": "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
    "ref": "On the Waterfront"
  },
  {
    "seq": 4,
    "year": 1939,
    "qt": "Toto, I've got a feeling we're not in Kansas anymore.",
    "ref": "The Wizard of Oz"
  },
  {
    "seq": 5,
    "year": 1942,
    "qt": "Here's looking at you, kid.",
    "ref": "Casablanca"
  },
  {
    "seq": 6,
    "year": 1983,
    "qt": "Go ahead, make my day.",
    "ref": "Sudden Impact"
  },
  {
    "seq": 7,
    "year": 1950,
    "qt": "All right, Mr. DeMille, I'm ready for my close-up.",
    "ref": "Sunset Blvd."
  },
  {
    "seq": 8,
    "year": 1977,
    "qt": "May the Force be with you.",
    "ref": "Star Wars"
  },
  {
    "seq": 9,
    "year": 1950,
    "qt": "Fasten your seatbelts. It's going to be a bumpy night.",
    "ref": "All About Eve"
  },
  {
    "seq": 10,
    "year": 1976,
    "qt": "You talking to me?",
    "ref": "Taxi Driver"
  },
  {
    "seq": 11,
    "year": 1967,
    "qt": "What we've got here is failure to communicate.",
    "ref": "Cool Hand Luke"
  },
  {
    "seq": 12,
    "year": 1979,
    "qt": "I love the smell of napalm in the morning.",
    "ref": "Apocalypse Now"
  },
  {
    "seq": 13,
    "year": 1970,
    "qt": "Love means never having to say you're sorry.",
    "ref": "Love Story"
  },
  {
    "seq": 14,
    "year": 1941,
    "qt": "The stuff that dreams are made of.",
    "ref": "The Maltese Falcon"
  },
  {
    "seq": 15,
    "year": 1982,
    "qt": "E.T. phone home.",
    "ref": "E.T. The Extra-Terrestrial"
  },
  {
    "seq": 16,
    "year": 1967,
    "qt": "They call me Mister Tibbs!",
    "ref": "In the Heat of the Night"
  },
  {
    "seq": 17,
    "year": 1941,
    "qt": "Rosebud.",
    "ref": "Citizen Kane"
  },
  {
    "seq": 18,
    "year": 1949,
    "qt": "Made it, Ma! Top of the world!",
    "ref": "White Heat"
  },
  {
    "seq": 19,
    "year": 1976,
    "qt": "I'm as mad as hell, and I'm not going to take this anymore!",
    "ref": "Network"
  },
  {
    "seq": 20,
    "year": 1942,
    "qt": "Louis, I think this is the beginning of a beautiful friendship.",
    "ref": "Casablanca"
  },
  {
    "seq": 21,
    "year": 1991,
    "qt": "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
    "ref": "The Silence of the Lambs"
  },
  {
    "seq": 22,
    "year": 1962,
    "qt": "Bond. James Bond.",
    "ref": "Dr. No"
  },
  {
    "seq": 23,
    "year": 1939,
    "qt": "There's no place like home.",
    "ref": "The Wizard of Oz"
  },
  {
    "seq": 24,
    "year": 1950,
    "qt": "I am big! It's the pictures that got small.",
    "ref": "Sunset Blvd."
  },
  {
    "seq": 25,
    "year": 1996,
    "qt": "Show me the money!",
    "ref": "Jerry Maguire"
  },
  {
    "seq": 26,
    "year": 1933,
    "qt": "Why don't you come up sometime and see me?",
    "ref": "She Done Him Wrong"
  },
  {
    "seq": 27,
    "year": 1969,
    "qt": "I'm walking here! I'm walking here!",
    "ref": "Midnight Cowboy"
  },
  {
    "seq": 28,
    "year": 1942,
    "qt": "Play it, Sam. Play 'As Time Goes By.'",
    "ref": "Casablanca"
  },
  {
    "seq": 29,
    "year": 1992,
    "qt": "You can't handle the truth!",
    "ref": "A Few Good Men"
  },
  {
    "seq": 30,
    "year": 1932,
    "qt": "I want to be alone.",
    "ref": "Grand Hotel"
  },
  {
    "seq": 31,
    "year": 1939,
    "qt": "After all, tomorrow is another day!",
    "ref": "Gone With the Wind"
  },
  {
    "seq": 32,
    "year": 1942,
    "qt": "Round up the usual suspects.",
    "ref": "Casablanca"
  },
  {
    "seq": 33,
    "year": 1989,
    "qt": "I'll have what she's having.",
    "ref": "When Harry Met Sally"
  },
  {
    "seq": 34,
    "year": 1944,
    "qt": "You know how to whistle, don't you, Steve? You just put your lips together and blow.",
    "ref": "To Have and Have Not"
  },
  {
    "seq": 35,
    "year": 1975,
    "qt": "You're gonna need a bigger boat.",
    "ref": "Jaws"
  },
  {
    "seq": 36,
    "year": 1948,
    "qt": "Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!",
    "ref": "The Treasure of the Sierra Madre"
  },
  {
    "seq": 37,
    "year": 1984,
    "qt": "I'll be back.",
    "ref": "The Terminator"
  },
  {
    "seq": 38,
    "year": 1942,
    "qt": "Today, I consider myself the luckiest man on the face of the earth.",
    "ref": "The Pride of the Yankees"
  },
  {
    "seq": 39,
    "year": 1989,
    "qt": "If you build it, he will come.",
    "ref": "Field of Dreams"
  },
  {
    "seq": 40,
    "year": 1994,
    "qt": "Mama always said life was like a box of chocolates. You never know what you're gonna get.",
    "ref": "Forrest Gump"
  },
  {
    "seq": 41,
    "year": 1967,
    "qt": "We rob banks.",
    "ref": "Bonnie and Clyde"
  },
  {
    "seq": 42,
    "year": 1967,
    "qt": "Plastics.",
    "ref": "The Graduate"
  },
  {
    "seq": 43,
    "year": 1942,
    "qt": "We'll always have Paris.",
    "ref": "Casablanca"
  },
  {
    "seq": 44,
    "year": 1999,
    "qt": "I see dead people.",
    "ref": "The Sixth Sense"
  },
  {
    "seq": 45,
    "year": 1951,
    "qt": "Stella! Hey, Stella!",
    "ref": "A Streetcar Named Desire"
  },
  {
    "seq": 46,
    "year": 1942,
    "qt": "Oh, Jerry, don't let's ask for the moon. We have the stars.",
    "ref": "Now, Voyager"
  },
  {
    "seq": 47,
    "year": 1953,
    "qt": "Shane. Shane. Come back!",
    "ref": "Shane"
  },
  {
    "seq": 48,
    "year": 1959,
    "qt": "Well, nobody's perfect.",
    "ref": "Some Like It Hot"
  },
  {
    "seq": 49,
    "year": 1931,
    "qt": "It's alive! It's alive!",
    "ref": "Frankenstein"
  },
  {
    "seq": 50,
    "year": 1995,
    "qt": "Houston, we have a problem.",
    "ref": "Apollo 13"
  },
  {
    "seq": 51,
    "year": 1971,
    "qt": "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    "ref": "Dirty Harry"
  },
  {
    "seq": 52,
    "year": 1996,
    "qt": "You had me at “hello.”",
    "ref": "Jerry Maguire"
  },
  {
    "seq": 53,
    "year": 1930,
    "qt": "One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know.",
    "ref": "Animal Crackers"
  },
  {
    "seq": 54,
    "year": 1992,
    "qt": "There's no crying in baseball!",
    "ref": "A League of Their Own"
  },
  {
    "seq": 55,
    "year": 1977,
    "qt": "La-dee-da, la-dee-da.",
    "ref": "Annie Hall"
  },
  {
    "seq": 56,
    "year": 1960,
    "qt": "A boy's best friend is his mother.",
    "ref": "Psycho"
  },
  {
    "seq": 57,
    "year": 1987,
    "qt": "Greed, for lack of a better word, is good.",
    "ref": "Wall Street"
  },
  {
    "seq": 58,
    "year": 1974,
    "qt": "Keep your friends close, but your enemies closer.",
    "ref": "The Godfather II"
  },
  {
    "seq": 59,
    "year": 1939,
    "qt": "As God is my witness, I'll never be hungry again.",
    "ref": "Gone With the Wind"
  },
  {
    "seq": 60,
    "year": 1933,
    "qt": "Well, here's another nice mess you've gotten me into!",
    "ref": "Sons of the Desert"
  },
  {
    "seq": 61,
    "year": 1983,
    "qt": "Say “hello” to my little friend!",
    "ref": "Scarface"
  },
  {
    "seq": 62,
    "year": 1949,
    "qt": "What a dump.",
    "ref": "Beyond the Forest"
  },
  {
    "seq": 63,
    "year": 1967,
    "qt": "Mrs. Robinson, you're trying to seduce me. Aren't you?",
    "ref": "The Graduate"
  },
  {
    "seq": 64,
    "year": 1964,
    "qt": "Gentlemen, you can't fight in here! This is the War Room!",
    "ref": "Dr. Strangelove"
  },
  {
    "seq": 65,
    "year": 1929,
    "qt": "Elementary, my dear Watson.",
    "ref": "The Adventures of Sherlock Holmes"
  },
  {
    "seq": 66,
    "year": 1968,
    "qt": "Get your stinking paws off me, you damned dirty ape.",
    "ref": "Planet of the Apes"
  },
  {
    "seq": 67,
    "year": 1942,
    "qt": "Of all the gin joints in all the towns in all the world, she walks into mine.",
    "ref": "Casablanca"
  },
  {
    "seq": 68,
    "year": 1980,
    "qt": "Here's Johnny!",
    "ref": "The Shining"
  },
  {
    "seq": 69,
    "year": 1982,
    "qt": "They're here!",
    "ref": "Poltergeist"
  },
  {
    "seq": 70,
    "year": 1976,
    "qt": "Is it safe?",
    "ref": "Marathon Man"
  },
  {
    "seq": 71,
    "year": 1927,
    "qt": "Wait a minute, wait a minute. You ain't heard nothin' yet!",
    "ref": "The Jazz Singer"
  },
  {
    "seq": 72,
    "year": 1981,
    "qt": "No wire hangers, ever!",
    "ref": "Mommie Dearest"
  },
  {
    "seq": 73,
    "year": 1930,
    "qt": "Mother of mercy, is this the end of Rico?",
    "ref": "Little Caesar"
  },
  {
    "seq": 74,
    "year": 1974,
    "qt": "Forget it, Jake, it's Chinatown.",
    "ref": "Chinatown"
  },
  {
    "seq": 75,
    "year": 1951,
    "qt": "I have always depended on the kindness of strangers.",
    "ref": "A Streetcar Named Desire"
  },
  {
    "seq": 76,
    "year": 1991,
    "qt": "Hasta la vista, baby.",
    "ref": "Terminator 2: Judgment Day"
  },
  {
    "seq": 77,
    "year": 1973,
    "qt": "Soylent Green is people!",
    "ref": "Soylent Green"
  },
  {
    "seq": 78,
    "year": 1968,
    "qt": "Open the pod bay doors, HAL.",
    "ref": "2001: A Space Odyssey"
  },
  {
    "seq": 79,
    "year": 1980,
    "qt": "Striker: Surely you can't be serious.",
    "ref": "Airplane!"
  },
  {
    "seq": 80,
    "year": 1980,
    "qt": "Rumack: I am serious…and don't call me Shirley.",
    "ref": "Airplane!"
  },
  {
    "seq": 81,
    "year": 1968,
    "qt": "Hello, gorgeous.",
    "ref": "Funny Girl"
  },
  {
    "seq": 82,
    "year": 1978,
    "qt": "Toga! Toga!",
    "ref": "National Lampoon's Animal House"
  },
  {
    "seq": 83,
    "year": 1931,
    "qt": "Listen to them. Children of the night. What music they make.",
    "ref": "Dracula"
  },
  {
    "seq": 84,
    "year": 1933,
    "qt": "Oh, no, it wasn't the airplanes. It was Beauty killed the Beast.",
    "ref": "King Kong"
  },
  {
    "seq": 85,
    "year": 2002,
    "qt": "My precious.",
    "ref": "The Lord of the Rings: Two Towers"
  },
  {
    "seq": 86,
    "year": 1975,
    "qt": "Attica! Attica!",
    "ref": "Dog Day Afternoon"
  },
  {
    "seq": 87,
    "year": 1933,
    "qt": "Sawyer, you're going out a youngster, but you've got to come back a star!",
    "ref": "42nd Street"
  },
  {
    "seq": 88,
    "year": 1981,
    "qt": "Listen to me, mister. You're my knight in shining armor. Don't you forget it. You're going to get back on that horse, and I'm going to be right behind you, holding on tight, and away we're gonna go, go, go!",
    "ref": "On Golden Pond"
  },
  {
    "seq": 89,
    "year": 1940,
    "qt": "Tell 'em to go out there with all they got and win just one for the Gipper.",
    "ref": "Knute Rockne All American"
  },
  {
    "seq": 90,
    "year": 1964,
    "qt": "A martini. Shaken, not stirred.",
    "ref": "Goldfinger"
  },
  {
    "seq": 91,
    "year": 1945,
    "qt": "Who's on first.",
    "ref": "The Naughty Nineties"
  },
  {
    "seq": 92,
    "year": 1980,
    "qt": "Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion. It looks like a mirac...It's in the hole! It's in the hole! It's in the hole!",
    "ref": "Caddyshack"
  },
  {
    "seq": 93,
    "year": 1958,
    "qt": "Life is a banquet, and most poor suckers are starving to death!",
    "ref": "Auntie Mame"
  },
  {
    "seq": 94,
    "year": 1986,
    "qt": "I feel the need - the need for speed!",
    "ref": "Top Gun"
  },
  {
    "seq": 95,
    "year": 1989,
    "qt": "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    "ref": "Dead Poets Society"
  },
  {
    "seq": 96,
    "year": 1987,
    "qt": "Snap out of it!",
    "ref": "Moonstruck"
  },
  {
    "seq": 97,
    "year": 1942,
    "qt": "My mother thanks you. My father thanks you. My sister thanks you. And I thank you.",
    "ref": "Yankee Doodle Dandy"
  },
  {
    "seq": 98,
    "year": 1987,
    "qt": "Nobody puts Baby in a corner.",
    "ref": "Dirty Dancing"
  },
  {
    "seq": 99,
    "year": 1939,
    "qt": "I'll get you, my pretty, and your little dog, too!",
    "ref": "The Wizard of Oz"
  },
  {
    "seq": 100,
    "year": 1997,
    "qt": "I'm king of the world!",
    "ref": "Titanic"
  }
];

var groups = {};

for(var i = 0; i < json.length; i++) {
    var year = json[i].year;
    var rank = '<span class="ranking">'+ json[i].seq + '</span>' + " ";
    var quote = '<span class="quote">' + json[i].qt + '</span>' + " ";
    var movie = '<span class="ranking">' + json[i].ref + '</span>'; 
    groups[year] = groups[year] || [];
    groups[year].push(rank + quote + movie);

    if (year === 1927) {
        $('#1927').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1927].pop() + '</p>');
    }

    if (year === 1929) {
        $('#1929').append('<p class="large-text">' + '<span class="no">' + "rank." + '</span>'+ groups[1929].pop() + '</p>');
    }

    if (year === 1930) {
        // $('#y-1930').append('<p>' + "1930" + '</p>');
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