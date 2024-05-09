function openPage(page)
 {
    var i , content;

    content = document.getElementsByClassName("tab");

    for (let i = 0; i < content.length; i++) {
       content[i].style.display = "none"

    }

         document.getElementById(page).style.display ="block";



 }

 function closePage(page)
 {
   if (document.getElementById(page) ="block") {
      document.getElementById(page) ="none";
   }

 }