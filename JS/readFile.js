function readFile(file){
  if (window.XMLHttpRequest)
             {// code for IE7+, Firefox, Chrome, Opera, Safari
                 xmlhttp=new XMLHttpRequest();
             }
             else
             {// code for IE6, IE5
                 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
             }



             xmlhttp.onload = function() {
                 var xmlDoc = new DOMParser().parseFromString(.responseText,'text/xml');

                 console.log(xmlDoc);

                 document.write("<table border='1'>");
                 var x=xmlDoc.getElementsByTagName("CD");
                 for (i=0;i<x.length;i++)
                 {
                     document.write("<tr><td>");
                     document.write(x[i].getElementsByTagName("c_id")[0].childNodes[0].nodeValue);
                     document.write("</td><td>");
                     document.write(x[i].getElementsByTagName("facebook_id")[0].childNodes[0].nodeValue);
                     document.write("</td></tr>");
                 }
                 document.write("</table>");

             }


             xmlhttp.open("GET","social.xml",false);
             xmlhttp.send();
}
