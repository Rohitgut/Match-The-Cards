

const cards = document.querySelectorAll('.card');
const back = document.querySelectorAll('.back');

var count=1;

var findel=[];

const card=[[1,17],[2,10],[3,15],[4,12],[5,9],[7,16],[11,19],[8,14],[6,18],[13,20]];

const remaining=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var cardsound=new Audio("music/cards.mp3");
var gamepoint=new Audio("music/points.mp3");
var win=new Audio("music/win.mp3");

var s=0;
var pl1=0;
var pl2=0;

function changeMultipleCSS(x){

	cardsound.play();
 	cards[x-1].classList.add('flip');
 	
 	
 	s=toMatchingcard(x,count);
 	
 	if(s==count){ 
 		s=0;
 		return ; 
 	}
 	count++;

 	



 	setTimeout(function(){if((count%4==0)||(count%4==3)){
 		document.getElementById('player').innerHTML='<i class="fa-solid fa-robot fa-xl" style="color: #000000;"></i>';
 		if((pl1+pl2)==10){
 		document.getElementById('player').innerHTML="Game Over";	
 		}
 	}else{
 		document.getElementById('player').innerHTML='<i class="fa-solid fa-user fa-xl" style="color: #000000;"></i>';
 		if((pl1+pl2)==10){
 		document.getElementById('player').innerHTML="Game Over";	
 		}

 	}},700)

 	


 	setTimeout(function(){if((count%4==0)||(count%4==3)){      // Computer player.
 		let x=Math.floor((Math.random()*remaining.length)+1);
 		let y=remaining[x-1];
 		changeMultipleCSS(y);
 	}},3000);



 }	







 function toMatchingcard(x,c){

 	findel.push(x);  
 	if (c%2==0){
 	 
 	   a=findel[0];
 	   b=findel[1];

 	   if(a==b){findel.pop(); return c;}       // for same card.

 	   if(card.some(item=> item.includes(findel[0]) && item.includes(findel[1]))){    


 		if(remaining.length!=0){

 	   		let index1=remaining.indexOf(a);             // For remaining array.
 	   		remaining.splice(index1,1);

 	   		let index2=remaining.indexOf(b); 
 	   		remaining.splice(index2,1); 

 		   console.log(remaining);
 		}

 	


 	     setTimeout(function() { 
		  if(c%4!=0){
		 	pl1++;
		 	console.log("pl1-"+pl1);
 			document.getElementById('pl1').innerHTML=pl1;

 		  }else{
 		  	pl2++;  
 		  	console.log("pl2-"+pl2);
 			document.getElementById('pl2').innerHTML=pl2;
 	   	   } 

 	   	   if((pl1+pl2)==10){
 	   	      console.log("sum-",pl1+pl2);  
 	   		 
 	   		 	if(pl1>pl2){
 	   				document.getElementById('winner1').innerHTML='You <br> WON';
 	   				document.getElementById('won').innerHTML='You <br> WON';
 	   				
 	   	 	 	}else if(pl2>pl1){
 	   				document.getElementById('winner2').innerHTML='Device <br> WON';
 	   				document.getElementById('won').innerHTML='Device <br> WON';
 	   				
 	   		 	}else if((pl1==5)&&(pl2==5)) {
 	   				document.getElementById('draw2').innerHTML='DRAW';
 	   				document.getElementById('draw1').innerHTML='DRAW';
 	   				document.getElementById('won').innerHTML='DRAW';
 	   		
 	   		 	}
 	   		 	win.play();
 	   		 	document.getElementById('result').style.zIndex='1';
 	   	    }
 	   	  } , 600);
 	

 	      
		  setTimeout(function() { 
			 back[a-1].classList.add('lock');
			 back[b-1].classList.add('lock');
			 gamepoint.volume=0.4;
			 gamepoint.play();
			 document.getElementById(a).style.pointerEvents='none';
			 document.getElementById(b).style.pointerEvents='none';} , 800);



 	   }
 	   else{
 	  
	   	  setTimeout(function() { 
				 cards[a-1].classList.remove('flip');
	   	  		 cards[b-1].classList.remove('flip');
			 } , 800);
 	   }
 	  


 	   findel=[];



 	}
 } 	   

