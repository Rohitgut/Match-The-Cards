
var click=new Audio("music/click.mp3");

document.getElementById('pvp').addEventListener('click',function(){
      			
      			click.play();

      	    fetch("matchcard.html")
                .then(response => response.text())
                .then(data => {
                    document.getElementById('contents').innerHTML = data;

                   
                    var script = document.createElement("script");
                    script.src = "matchcard.js";
                    document.head.appendChild(script);
                })
                .catch(error => {
                    console.error("Error:", error);
                });
   		
      });

     


document.getElementById('device').addEventListener('click',function(){
      			
      			click.play();

      	    fetch("matchcard2.html")
                .then(response => response.text())
                .then(data => {
                    document.getElementById('contents').innerHTML = data;

                   
                    var script = document.createElement("script");
                    script.src = "matchcard2.js";
                    document.head.appendChild(script);
                })
                .catch(error => {
                    console.error("Error:", error);
                });
   		
      });
