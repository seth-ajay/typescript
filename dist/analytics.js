"use strict";
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
    logged = "AJ";
    console.log(logged);
}
sendAnalytics("The Data");
