/**
 * Holds the US map with all the data
 */

var stateNames = ['sCarolina', 'nevada', 'texas', 'massachusetts', 'virginia', 'minnesota', 'tennessee', 'arkansas', 'oklahoma', 'vermont'];

var election = new Datamap({
    scope: 'usa',
    responsive: true,
    element: document.getElementById('container'),
    geographyConfig: {
        highlightBorderColor: '#ffffff',
        highlightFillColor: '#ff66ff',
        popupTemplate: function(geography, data) {
            return '<div class="hoverinfo">' + geography.properties.name + ' delegates:' +  data.electoralVotes + ' '
        },
        highlightBorderWidth: 3
    },

    fills: {
        'Republican': '#CC4731',
        'Democrat': '#306596',
        'Heavy Democrat': '#667FAF',
        'Light Democrat': '#A9C0DE',
        'Heavy Republican': '#CA5E5B',
        'Light Republican': '#EAA9A8',
        defaultFill: '#CCCCCC'
    },
    data:{
        "AZ": {
            "fillKey": "Republican",
            "electoralVotes": 75
        },
        "CO": {
            "fillKey": "Light Democrat",
            "electoralVotes": 66
        },
        "DE": {
            "fillKey": "Democrat",
            "electoralVotes": 21
        },
        "FL": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 214
        },
        "GA": {
            "fillKey": "Republican",
            "electoralVotes": 102
        },
        "HI": {
            "fillKey": "Democrat",
            "electoralVotes": 25
        },
        "ID": {
            "fillKey": "Republican",
            "electoralVotes": 23
        },
        "IL": {
            "fillKey": "Democrat",
            "electoralVotes": 156
        },
        "IN": {
            "fillKey": "Republican",
            "electoralVotes": 83
        },
        "IA": {
            "fillKey": "Light Democrat",
            "electoralVotes": 44
        },
        "KS": {
            "fillKey": "Republican",
            "electoralVotes": 33
        },
        "KY": {
            "fillKey": "Republican",
            "electoralVotes": 55
        },
        "LA": {
            "fillKey": "Republican",
            "electoralVotes": 51
        },
        "MD": {
            "fillKey": "Democrat",
            "electoralVotes": 95
        },
        "ME": {
            "fillKey": "Democrat",
            "electoralVotes": 25
        },
        "MA": {
            "fillKey": "Democrat",
            "electoralVotes": 91
        },
        "MN": {
            "fillKey": "Democrat",
            "electoralVotes": 77
        },
        "MI": {
            "fillKey": "Democrat",
            "electoralVotes": 130
        },
        "MS": {
            "fillKey": "Republican",
            "electoralVotes": 36
        },
        "MO": {
            "fillKey": "Republican",
            "electoralVotes": 71
        },
        "MT": {
            "fillKey": "Republican",
            "electoralVotes": 21
        },
        "NC": {
            "fillKey": "Light Republican",
            "electoralVotes": 107
        },
        "NE": {
            "fillKey": "Republican",
            "electoralVotes": 25
        },
        "NV": {
            "fillKey": "Heavy Democrat",
            "electoralVotes": 35
        },
        "NH": {
            "fillKey": "Light Democrat",
            "electoralVotes": 24
        },
        "NJ": {
            "fillKey": "Democrat",
            "electoralVotes": 126
        },
        "NY": {
            "fillKey": "Democrat",
            "electoralVotes": 247
        },
        "ND": {
            "fillKey": "Republican",
            "electoralVotes": 18
        },
        "NM": {
            "fillKey": "Democrat",
            "electoralVotes": 34
        },
        "OH": {
            "fillKey": "UNDECIDED",
            "electoralVotes": 143
        },
        "OK": {
            "fillKey": "Republican",
            "electoralVotes": 38
        },
        "OR": {
            "fillKey": "Democrat",
            "electoralVotes": 61
        },
        "PA": {
            "fillKey": "Democrat",
            "electoralVotes": 189
        },
        "RI": {
            "fillKey": "Democrat",
            "electoralVotes": 24
        },
        "SC": {
            "fillKey": "Republican",
            "electoralVotes": 53
        },
        "SD": {
            "fillKey": "Republican",
            "electoralVotes": 20
        },
        "TN": {
            "fillKey": "Republican",
            "electoralVotes": 67
        },
        "TX": {
            "fillKey": "Republican",
            "electoralVotes": 222
        },
        "UT": {
            "fillKey": "Republican",
            "electoralVotes": 33
        },
        "WI": {
            "fillKey": "Democrat",
            "electoralVotes": 86
        },
        "VA": {
            "fillKey": "Light Democrat",
            "electoralVotes": 95
        },
        "VT": {
            "fillKey": "Democrat",
            "electoralVotes": 16
        },
        "WA": {
            "fillKey": "Democrat",
            "electoralVotes": 101
        },
        "WV": {
            "fillKey": "Republican",
            "electoralVotes": 29
        },
        "WY": {
            "fillKey": "Republican",
            "electoralVotes": 14
        },
        "CA": {
            "fillKey": "Democrat",
            "electoralVotes": 475
        },
        "CT": {
            "fillKey": "Democrat",
            "electoralVotes": 55
        },
        "AK": {
            "fillKey": "Republican",
            "electoralVotes": 16
        },
        "AR": {
            "fillKey": "Republican",
            "electoralVotes": 32
        },
        "AL": {
            "fillKey": "Republican",
            "electoralVotes": 53
        }
    }
});
election.labels();