function getDate(){
    let jamlogs;
    let menitlogs;
    let detiklogs;
    let currentdate = new Date(); 
    let jamlogsX = currentdate.getHours() + 0 // change + 0 into what ever your time zone from utc
    if (jamlogsX > 23){
        jamlogs = jamlogsX - 24
    } else{jamlogs = jamlogsX}
    menitlogs = currentdate.getMinutes()
    detiklogs = currentdate.getSeconds()
    jamlogs = ("0" + jamlogs).slice(-2);
    menitlogs = ("0" + menitlogs).slice(-2);
    detiklogs = ("0" + detiklogs).slice(-2);
    let datetime = jamlogs+':'+menitlogs+':'+detiklogs
    return datetime
}

getDate()
