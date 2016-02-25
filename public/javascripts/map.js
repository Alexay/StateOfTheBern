/**
 * Holds the US map with all the data
 */

var election = new Datamap({
    scope: 'usa',
    responsive: true,
    element: document.getElementById('container'),
    geographyConfig: {
        highlightBorderColor: '#ffffff',
        highlightFillColor: '#ff66ff',
        popupTemplate: function(geography, data) {
            return '<div class="hoverinfo">' + geography.properties.name + ' delegates:' +  data.electoralVotes + '<br>' + data.frontrunnerName +' lead: ' + data.lead+'%' + '<br>' + data.pollDate
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
        defaultFill: '#CCCCCC'
    },
    data:{
        "AZ": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 75
        },
        "CO": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 66
        },
        "DE": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 21
        },
        "FL": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 214
        },
        "GA": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 102
        },
        "HI": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 25
        },
        "ID": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 23
        },
        "IL": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 156
        },
        "IN": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 83
        },
        "IA": {
            "fillKey": "Light Republican",
            "electoralVotes": 44,
            "frontrunnerName": "Clinton",
            "lead": 0.3,
            "pollDate": "Final result"
        },
        "KS": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 33
        },
        "KY": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 55
        },
        "LA": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 51
        },
        "MD": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 95
        },
        "ME": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 25
        },
        "MA": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 91
        },
        "MN": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 77
        },
        "MI": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 130
        },
        "MS": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 36
        },
        "MO": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 71
        },
        "MT": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 21
        },
        "NC": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 107
        },
        "NE": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 25
        },
        "NV": {
            "fillKey": "Republican",
            "electoralVotes": 35,
            "frontrunnerName": "Clinton",
            "lead": 5.3,
            "pollDate": "Final result"
        },
        "NH": {
            "fillKey": "Heavy Democrat",
            "electoralVotes": 24,
            "frontrunnerName": "Sanders",
            "lead": 22.4,
            "pollDate": "Final result"
        },
        "NJ": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 126
        },
        "NY": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 247
        },
        "ND": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 18
        },
        "NM": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 34
        },
        "OH": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 143
        },
        "OK": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 38
        },
        "OR": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 61
        },
        "PA": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 189
        },
        "RI": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 24
        },
        "SC": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 53
        },
        "SD": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 20
        },
        "TN": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 67
        },
        "TX": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 222
        },
        "UT": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 33
        },
        "WI": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 86
        },
        "VA": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 95
        },
        "VT": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 16
        },
        "WA": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 101
        },
        "WV": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 29
        },
        "WY": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 14
        },
        "CA": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 475
        },
        "CT": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 55
        },
        "AK": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 16
        },
        "AR": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 32
        },
        "AL": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 53
        },
        "DC": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 53
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