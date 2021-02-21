var today = new Date();
var date = today.getFullYear()+'-'+ today.getDay()+ ', '+ (today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const days = ["Sunday", "Monday", "Tuesday", "Wednsday", "THursday", "Friday", "Saturday"]
console.log("This joke was saved on: " + date + " At " + time + ".");


var currentDay =  today.getDay();
var nameDay = days[currentDay];
console.log(nameDay);
