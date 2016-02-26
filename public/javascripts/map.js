/**
 * Holds the US map with all the data
 */

var election = new Datamap({
    scope: 'usa',
    responsive: true,
    element: document.getElementById('container'),
    geographyConfig: {
        highlightBorderColor: '#ffffff',
        highlightFillOpacity: 0.5,
        popupTemplate: function(geography, data) {
            var output = '<div class="hoverinfo">' + geography.properties.name + ' delegates: ' +  data.electoralVotes + '<br>Primary/caucus date: ' + data.primaryDate;
            if (data.frontrunnerName != undefined) {
                output += '<br>' + data.frontrunnerName +' lead: ' + data.lead+'%' + '<br>' + data.pollDate;
            }
            else {
                output += '<br> No polling data available';
            }
            return output;
        },
        highlightBorderWidth: 3
    },

    fills: {
        'Republican': '#CA5E5B',
        'Democrat': '#667FAF',
        'Heavy Democrat': '#306596',
        'Light Democrat': '#A9C0DE',
        'Heavy Republican': '#CC4731',
        'Light Republican': '#EAA9A8',
        'Republican Win': '#FF00FF',
        'Democrat Win': '#00FFFF',
        defaultFill: '#CCCCCC'
    },
    data:{
        "AZ": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 75,
            "primaryDate": "March 22"
        },
        "CO": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 66,
            "primaryDate": "March 1"
        },
        "DE": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 21,
            "primaryDate": "April 26"
        },
        "FL": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 214,
            "primaryDate": "March 15"
        },
        "GA": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 102,
            "primaryDate": "March 1"
        },
        "HI": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 25,
            "primaryDate": "March 26"
        },
        "ID": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 23,
            "primaryDate": "March 22"
        },
        "IL": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 156,
            "primaryDate": "March 15"
        },
        "IN": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 83,
            "primaryDate": "May 3"
        },
        "IA": {
            "fillKey": "Republican Win",
            "electoralVotes": 44,
            "frontrunnerName": "Clinton",
            "lead": 0.3,
            "pollDate": "Final result",
            "primaryDate": "February 1"
        },
        "KS": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 33,
            "primaryDate": "March 5"
        },
        "KY": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 55,
            "primaryDate": "May 17"
        },
        "LA": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 51,
            "primaryDate": "March 5"
        },
        "MD": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 95,
            "primaryDate": "April 26"
        },
        "ME": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 25,
            "primaryDate": "March 6"
        },
        "MA": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 91,
            "primaryDate": "March 1"
        },
        "MN": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 77,
            "primaryDate": "March 1"
        },
        "MI": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 130,
            "primaryDate": "March 8"
        },
        "MS": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 36,
            "primaryDate": "March 8"
        },
        "MO": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 71,
            "primaryDate": "March 15"
        },
        "MT": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 21,
            "primaryDate": "June 7"
        },
        "NC": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 107,
            "primaryDate": "March 15"
        },
        "NE": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 25,
            "primaryDate": "March 5"
        },
        "NV": {
            "fillKey": "Republican Win",
            "electoralVotes": 35,
            "frontrunnerName": "Clinton",
            "lead": 5.3,
            "pollDate": "Final result",
            "primaryDate": "February 20"
        },
        "NH": {
            "fillKey": "Democrat Win",
            "electoralVotes": 24,
            "frontrunnerName": "Sanders",
            "lead": 22.4,
            "pollDate": "Final result",
            "primaryDate": "February 9"
        },
        "NJ": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 126,
            "primaryDate": "June 7"
        },
        "NY": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 247,
            "primaryDate": "April 19"
        },
        "ND": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 18,
            "primaryDate": "June 7"
        },
        "NM": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 34,
            "primaryDate": "June 7"
        },
        "OH": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 143,
            "primaryDate": "March 15"
        },
        "OK": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 38,
            "primaryDate": "March 1"
        },
        "OR": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 61,
            "primaryDate": "May 17"
        },
        "PA": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 189,
            "primaryDate": "April 26"
        },
        "RI": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 24,
            "primaryDate": "April 26"
        },
        "SC": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 53,
            "primaryDate": "February 27"
        },
        "SD": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 20,
            "primaryDate": "June 7"
        },
        "TN": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 67,
            "primaryDate": "March 1"
        },
        "TX": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 222,
            "primaryDate": "March 1"
        },
        "UT": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 33,
            "primaryDate": "March 22"
        },
        "WI": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 86,
            "primaryDate": "April 5"
        },
        "VA": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 95,
            "primaryDate": "March 1"
        },
        "VT": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 16,
            "primaryDate": "March 1"
        },
        "WA": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 101,
            "primaryDate": "March 26"
        },
        "WV": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 29,
            "primaryDate": "May 10"
        },
        "WY": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 14,
            "primaryDate": "April 9"
        },
        "CA": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 475,
            "primaryDate": "June 7"
        },
        "CT": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 55,
            "primaryDate": "April 26"
        },
        "AK": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 16,
            "primaryDate": "March 26"
        },
        "AR": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 32,
            "primaryDate": "March 1"
        },
        "AL": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 53,
            "primaryDate": "March 1"
        },
        "DC": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 53,
            "primaryDate": "June 14"
        }
    }
});
election.labels();

var stateNames = ['SC', 'TX', 'MA', 'VA', 'MN', 'TN', 'AR', 'OK', 'VT', 'LA', 'GA', 'FL', 'OH', 'NC', 'NJ', 'MD', 'MI', 'CT', 'PA', 'WI', 'CA'];

function fillDeterminer(stateName, datamap) {
    $.getJSON('/javascripts/'+stateName+'.json', function (json) {
        var delta = json.frontrunnerPoints - json.underdogPoints;
        var fill;
        if (json.frontrunnerName == "Clinton") {
            if (delta >= 15) fill = "Heavy Republican";
            else if (delta >= 5) fill ="Republican";
            else if (delta > 0) fill ="Light Republican";
        }
        else {
            if (delta >= 15) fill = "Heavy Democrat";
            else if (delta >= 5) fill ="Democrat";
            else if (delta > 0) fill = "Light Democrat";
        }

        // Here, I'm creating an object with the state's name as a variable
        // in order to pass the fill key and then update the map.
        var innerObj = {};
        innerObj.fillKey = fill;
        innerObj.frontrunnerName = json.frontrunnerName;
        innerObj.lead = delta.toPrecision(3);
        innerObj.pollDate = json.pollDate.substr(0,16);
        var outerObj = {};
        outerObj[stateName] = innerObj;
        datamap.updateChoropleth(outerObj);
    });
}

for (i = 0; i<stateNames.length;i++) {
    fillDeterminer(stateNames[i], election);
}