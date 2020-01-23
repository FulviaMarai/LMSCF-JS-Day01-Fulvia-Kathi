var seconds = parseInt(123456, 10);

var days = Math.floor(seconds / (3600*24));

seconds  -= days*3600*24;

var hrs   = Math.floor(seconds / 3600);

seconds  -= hrs*3600;

var mnts = Math.floor(seconds / 60);

seconds  -= mnts*60;

console.log(days+" days, "+hrs+" Hrs, "+mnts+" Minutes, "+seconds+" Seconds");