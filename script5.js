

var seconds = 7654321;

var ciphre= seconds;

var MM=Math.floor (seconds/(3600*24*7*30));

seconds -=MM*3600*24*7*30;

var ww=Math.floor (seconds/(3600*24*7))

seconds -=ww*3600*24*7;

var days = Math.floor(seconds / (3600*24));

seconds  -= days*3600*24;

var hrs   = Math.floor(seconds / 3600);

seconds  -= hrs*3600;

var mnts = Math.floor(seconds / 60);

seconds  -= mnts*60;

document.write(ciphre+" seconds are equal at ");
document.write(MM+" months, "+ww+" weeks, "+days+" days, "+hrs+" Hrs, "+mnts+" Minutes, "+seconds+" Seconds");
document.write("<br>PS_I have decided that a \"month\" is an abstract span of time of 30 days");