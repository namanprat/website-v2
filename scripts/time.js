var getTime = function () {
    document.getElementById("time").innerHTML = new Date().toLocaleString("en-IN",{timeZone:'Asia/Kolkata', timeStyle:'long', hourCycle:'h24'});
}

getTime ();
setInterval(getTime,1000);