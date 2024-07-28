times = ["01-09-2023", "01-10-2023", "27-10-2023", "27-09-2022", "28-08-2023", "01-03-2023", "28-10-2024", "28-08-2024", "29-08-2015", "29-12-2013", "30-05-2013", "30-10-2013", "31-09-2013", "31-08-2013"]
function dmyOrdA(a,b){ return myDate(a) - myDate(b);}
function dmyOrdD(a,b){ return myDate(b) - myDate(a);}
function myDate(s){var a=s.split(/-|\//); return new Date(a[2],a[1]-1,a[0]);}

times.sort(dmyOrdA);
console.log(times)