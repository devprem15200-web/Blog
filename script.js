function showPage(pageNum) {
   for(let i=1; i<=3; i++) {
     document.getElementById('page'+i).style.display = (i === pageNum) ? 'block' : 'none';
   }
 }
 function updateDateTime() {
   const dateTime = new Date().toISOString().replace('T', ' ').substring(0, 19);
   document.getElementById('datetime1').textContent = "Date & Time: " + dateTime + " UTC";
   document.getElementById('datetime2').textContent = "Date & Time: " + dateTime + " UTC";
   document.getElementById('datetime3').textContent = "Date & Time: " + dateTime + " UTC";
 }
 setInterval(updateDateTime, 1000);
 updateDateTime();