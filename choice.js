
var click=new Audio("music/click.mp3");

var x=new Audio("music/music.mp3");
        var button=new Audio("music/click.mp3");
        x.autoplay=false;
        document.getElementById('dba').addEventListener('click',function(){

            
            
            x.loop=true;
            x.volume=0.3;
            
            if(x.autoplay){
                x.pause();
                document.getElementById('dba').innerHTML='<i class="fa-solid fa-volume-xmark" style="color: #000000;"></i>';
                x.autoplay=false;

            }else{
                x.play();
                document.getElementById('dba').innerHTML='<i class="fa-solid fa-volume-high" style="color: #000000;"></i>';
                x.autoplay=true;
            }
            
        });

document.getElementById('pvp').addEventListener('click',function(){
      			
      			click.play();

      	    fetch("matchcard.html")
                .then(response => response.text())
                .then(data => {
                    document.body.innerHTML = data;

                   
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
                    document.body.innerHTML = data;

                   
                    var script = document.createElement("script");
                    script.src = "matchcard2.js";
                    document.head.appendChild(script);
                })
                .catch(error => {
                    console.error("Error:", error);
                });
   		
      });
