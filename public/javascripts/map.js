/**
 * Holds the US map with all the data
 */

var election = new Datamap({
    scope: 'usa',
    responsive: true,
    element: document.getElementById('container'),
    done: function(datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {
            window.open(statePollLinks.get(geography.id),'_blank');
        });
    },
    geographyConfig: {
        highlightBorderColor: '#ffffff',
        highlightFillOpacity: 0.5,
        popupTemplate: function(geography, data) {
            var output = '<div class="hoverinfo">' + geography.properties.name + ' delegates: ' +  data.electoralVotes + '<br>Primary/caucus date: ' + data.primaryDate;
            if (data.frontrunnerName != undefined) {
                output += '<br>' + data.frontrunnerName +' lead: ' + data.lead+'%' + '<br>' + data.pollDate + '<br><b>Click the state to open its RCP page.</b>';
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
            "fillKey": "Democrat Win",
            "electoralVotes": 66,
            "frontrunnerName": "Sanders",
            "lead": 18.5,
            "pollDate": "Final result",
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
            "fillKey": "Republican Win",
            "electoralVotes": 102,
            "frontrunnerName": "Clinton",
            "lead": 42.9,
            "pollDate": "Final result",
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
            "fillKey": "Republican Win",
            "electoralVotes": 91,
            "frontrunnerName": "Clinton",
            "lead": 1.8,
            "pollDate": "Final result",
            "primaryDate": "March 1"
        },
        "MN": {
            "fillKey": "Democrat Win",
            "electoralVotes": 77,
            "frontrunnerName": "Sanders",
            "lead": 23.4,
            "pollDate": "Final result",
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
            "fillKey": "Democrat Win",
            "electoralVotes": 38,
            "frontrunnerName": "Sanders",
            "lead": 10.4,
            "pollDate": "Final result",
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
            "fillKey": "Republican Win",
            "electoralVotes": 53,
            "frontrunnerName": "Clinton",
            "lead": 47.5,
            "pollDate": "Final result",
            "primaryDate": "February 27"
        },
        "SD": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 20,
            "primaryDate": "June 7"
        },
        "TN": {
            "fillKey": "Republican Win",
            "electoralVotes": 67,
            "frontrunnerName": "Clinton",
            "lead": 33.7,
            "pollDate": "Final result",
            "primaryDate": "March 1"
        },
        "TX": {
            "fillKey": "Republican Win",
            "electoralVotes": 222,
            "frontrunnerName": "Clinton",
            "lead": 32,
            "pollDate": "Final result",
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
            "fillKey": "Republican Win",
            "electoralVotes": 95,
            "frontrunnerName": "Clinton",
            "lead": 29.1,
            "pollDate": "Final result",
            "primaryDate": "March 1"
        },
        "VT": {
            "fillKey": "Democrat Win",
            "electoralVotes": 16,
            "frontrunnerName": "Sanders",
            "lead": 72.6,
            "pollDate": "Final result",
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
            "fillKey": "Republican Win",
            "electoralVotes": 32,
            "frontrunnerName": "Clinton",
            "lead": 36.6,
            "pollDate": "Final result",
            "primaryDate": "March 1"
        },
        "AL": {
            "fillKey": "Republican Win",
            "electoralVotes": 53,
            "frontrunnerName": "Clinton",
            "lead": 58.6,
            "pollDate": "Final result",
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

var stateNames = ['LA', 'FL', 'OH', 'NC', 'NJ', 'MD', 'MI', 'CT', 'PA', 'WI', 'CA', 'MS'];

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

// Contains the links for the function that opens a new tab for the state RCP poll website.
var statePollLinks = new Map();
statePollLinks.set('AK', 'http://www.realclearpolitics.com/epolls/2016/president/ak/alaska_democratic_presidential_caucus-5773.html');
statePollLinks.set('AL', 'http://www.realclearpolitics.com/epolls/2016/president/al/alabama_democratic_presidential_primary-5791.html');
statePollLinks.set('AR', 'http://www.realclearpolitics.com/epolls/2016/president/ar/arkansas_democratic_presidential_primary-5233.html');
statePollLinks.set('CA', 'http://www.realclearpolitics.com/epolls/2016/president/ca/california_democratic_presidential_primary-5321.html');
statePollLinks.set('CT', 'http://www.realclearpolitics.com/epolls/2016/president/ct/connecticut_democratic_presidential_primary-5353.html');
statePollLinks.set('FL', 'http://www.realclearpolitics.com/epolls/2016/president/fl/florida_democratic_presidential_primary-3556.html');
statePollLinks.set('GA', 'http://www.realclearpolitics.com/epolls/2016/president/ga/georgia_democratic_presidential_primary-5623.html');
statePollLinks.set('IA', 'http://www.realclearpolitics.com/epolls/2016/president/ia/iowa_democratic_presidential_caucus-3195.html');
statePollLinks.set('IL', 'http://www.realclearpolitics.com/epolls/2016/president/il/illinois_democratic_presidential_primary-5567.html');
statePollLinks.set('LA', 'http://www.realclearpolitics.com/epolls/2016/president/la/louisiana_democratic_presidential_primary-5695.html');
statePollLinks.set('MA', 'http://www.realclearpolitics.com/epolls/2016/president/ma/massachusetts_democratic_presidential_primary-3891.html');
statePollLinks.set('MD', 'http://www.realclearpolitics.com/epolls/2016/president/md/maryland_democratic_presidential_primary-4312.html');
statePollLinks.set('MI', 'http://www.realclearpolitics.com/epolls/2016/president/mi/michigan_democratic_presidential_primary-5224.html');
statePollLinks.set('MN', 'http://www.realclearpolitics.com/epolls/2016/president/mn/minnesota_democratic_presidential_caucus-3585.html');
statePollLinks.set('MS', 'http://www.realclearpolitics.com/epolls/2016/president/ms/mississippi_democratic_presidential_primary-5799.html');
statePollLinks.set('NC', 'http://www.realclearpolitics.com/epolls/2016/president/nc/north_carolina_democratic_presidential_primary-5175.html');
statePollLinks.set('NH', 'http://www.realclearpolitics.com/epolls/2016/president/nh/new_hampshire_democratic_presidential_primary-3351.html');
statePollLinks.set('NJ', 'http://www.realclearpolitics.com/epolls/2016/president/nj/new_jersey_democratic_presidential_primary-3443.html');
statePollLinks.set('NV', 'http://www.realclearpolitics.com/epolls/2016/president/nv/nevada_democratic_presidential_caucus-5337.html');
statePollLinks.set('OH', 'http://www.realclearpolitics.com/epolls/2016/president/oh/ohio_democratic_presidential_primary-5313.html');
statePollLinks.set('OK', 'http://www.realclearpolitics.com/epolls/2016/president/ok/oklahoma_democratic_presidential_primary-5739.html');
statePollLinks.set('PA', 'http://www.realclearpolitics.com/epolls/2016/president/pa/pennsylvania_democratic_presidential_primary-4249.html');
statePollLinks.set('SC', 'http://www.realclearpolitics.com/epolls/2016/president/sc/south_carolina_democratic_presidential_primary-4167.html');
statePollLinks.set('TN', 'http://www.realclearpolitics.com/epolls/2016/president/tn/tennessee_democratic_presidential_primary-5768.html');
statePollLinks.set('TX', 'http://www.realclearpolitics.com/epolls/2016/president/tx/texas_democratic_presidential_primary-4158.html');
statePollLinks.set('UT', 'http://www.realclearpolitics.com/epolls/2016/president/ut/utah_democratic_presidential_caucus-5766.html');
statePollLinks.set('VA', 'http://www.realclearpolitics.com/epolls/2016/president/va/virginia_democratic_presidential_primary-3922.html');
statePollLinks.set('VT', 'http://www.realclearpolitics.com/epolls/2016/president/vt/vermont_democratic_presidential_primary-5796.html');
statePollLinks.set('WI', 'http://www.realclearpolitics.com/epolls/2016/president/wi/wisconsin_democratic_presidential_primary-3764.html');
statePollLinks.set('WV', 'http://www.realclearpolitics.com/epolls/2016/president/wv/west_virginia_democratic_presidential_primary-5425.html');