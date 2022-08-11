function getDate(){
    let hour;
    let minute;
    let second;
    let currentdate = new Date(); 
    let hours = currentdate.getHours() + 0 // change + 0 into what ever your time zone from utc
    if (hours > 23){
        hour = hours - 24
    } else{hour = hours}
    minute = currentdate.getMinutes()
    second = currentdate.getSeconds()
    hour = ("0" + hour).slice(-2);
    minute = ("0" + minute).slice(-2);
    second = ("0" + second).slice(-2);
    let datetime = hour+':'+minute+':'+second
    return datetime
}

getDate()
