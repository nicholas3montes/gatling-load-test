var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "56",
        "ko": "944"
    },
    "minResponseTime": {
        "total": "5054",
        "ok": "5054",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60007",
        "ok": "59942",
        "ko": "60007"
    },
    "meanResponseTime": {
        "total": "58360",
        "ok": "30707",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "7747",
        "ok": "16178",
        "ko": "1"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "30231",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "45152",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "55290",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "57386",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 56,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 944,
    "percentage": 94
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14.286",
        "ok": "0.8",
        "ko": "13.486"
    }
},
contents: {
"req_request-15c2d": {
        type: "REQUEST",
        name: "Request",
path: "Request",
pathFormatted: "req_request-15c2d",
stats: {
    "name": "Request",
    "numberOfRequests": {
        "total": "1000",
        "ok": "56",
        "ko": "944"
    },
    "minResponseTime": {
        "total": "5054",
        "ok": "5054",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60007",
        "ok": "59942",
        "ko": "60007"
    },
    "meanResponseTime": {
        "total": "58360",
        "ok": "30707",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "7747",
        "ok": "16178",
        "ko": "1"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "30231",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "45152",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "55290",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "57386",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 56,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 944,
    "percentage": 94
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14.286",
        "ok": "0.8",
        "ko": "13.486"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
