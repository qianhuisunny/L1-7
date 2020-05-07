// JavaScript Document
///////----Declaring varaibles----///////
var objectT;
var elementT,element0,element1,element2,element3,element4,element5,element6,element7,element8,element9;
var elementTR,elementR0,elementR1,elementR2,elementR3,elementR4,elementR5,elementR6,elementR7,elementR8,elementR9;
var positionT,position0,position1,position2,position3,position4,position5,position6,position7,position8,position9;
var positionTR,positionR0,positionR1,positionR2,positionR3,positionR4,positionR5,positionR6,positionR7,positionR8,positionR9;
var xT,yT,xinit,yinit;
var xRT,yRT,xinitR,yinitR;
var x0,x1,x2,x3,x4,x5,x6,x7,x8,x9;
var xR0,xR1,xR2,xR3,xR4,xR5,xR6,xR7,xR8,xR9;
var y0,y1,y2,y3,y4,y5,y6,y7,y8,y9;
var yR0,yR1,yR2,yR3,yR4,yR5,yR6,yR7,yR8,yR9;
var elem_id;
var zAxis=0;
var tempZindex=0;
var initPosX= new Array();
var initPosY= new Array();
var initPosRX= new Array();
var initPosRY= new Array();
var dragItem=0;
var dragItemR=0;
var prevbtnArray1= new Array();var prevbtnArray2= new Array();var prevbtnArray3= new Array();var prevbtnArray4= new Array();var prevbtnArray5= new Array();
var prevbtnArray6= new Array();var prevbtnArray7= new Array();var prevbtnArray8= new Array();var prevbtnArray9= new Array();var prevbtnArray0= new Array();
var prevbtnArrayR1= new Array();var prevbtnArrayR2= new Array();var prevbtnArrayR3= new Array();var prevbtnArrayR4= new Array();var prevbtnArrayR5= new Array();
var prevbtnArrayR6= new Array();var prevbtnArrayR7= new Array();var prevbtnArrayR8= new Array();var prevbtnArrayR9= new Array();var prevbtnArrayR0= new Array();
var dropMajorPosX= new Array();
var dropMajorPosRX= new Array();
var dropMajorPosY= new Array();
var dropMajorPosRY= new Array();
var calculate;
var pot1;
var pot2;
var pointer;
var calculateR;
var potR1;
var potR2;
var pointerR;
var submitEnable;
var leftDrag=false;
var rightDrag=false;
var tempNo=0;
var count=0;
var countR=0;
var leftdrop=false;
var rightdrop=false;
var alreadyexists4=false;
var alreadyexists43=false;

/*for(var i=1;i<=10;++i)
{
eval("elementD"+i) = document.getElementById('object'+i);
eval("positionD"+i) = eval("elementD"+i).getBoundingClientRect();
eval("xD"+i) = eval("positionD"+i).left;
eval("yD"+i) = eval("positionD"+i).top;
initPosX.push(eval("xD"+i));
initPosY.push(eval("yD"+i));
alert(initPosX[0]+","+initPosY[0]);
}*/

init();

function init()
{


elementTrack4 = document.getElementById('track4');
positionTrack4 = elementTrack4.getBoundingClientRect();
xTrack4 = positionTrack4.left;
yTrack4 = positionTrack4.top;
	
	
elementD0 = document.getElementById('object0');
positionD0 = elementD0.getBoundingClientRect();
xD0 = positionD0.left;
yD0 = positionD0.top;

elementD1 = document.getElementById('object1');
positionD1 = elementD1.getBoundingClientRect();
xD1 = positionD1.left;
yD1 = positionD1.top;

elementD2 = document.getElementById('object2');
positionD2 = elementD2.getBoundingClientRect();
xD2 = positionD2.left;
yD2 = positionD2.top;

elementD3 = document.getElementById('object3');
positionD3 = elementD3.getBoundingClientRect();
xD3 = positionD3.left;
yD3 = positionD3.top;

elementD4 = document.getElementById('object4');
positionD4 = elementD4.getBoundingClientRect();
xD4 = positionD4.left;
yD4 = positionD4.top;

elementD5 = document.getElementById('object5');
positionD5 = elementD5.getBoundingClientRect();
xD5 = positionD5.left;
yD5 = positionD5.top;

elementD6 = document.getElementById('object6');
positionD6 = elementD6.getBoundingClientRect();
xD6 = positionD6.left;
yD6 = positionD6.top;

elementD7 = document.getElementById('object7');
positionD7 = elementD7.getBoundingClientRect();
xD7 = positionD7.left;
yD7 = positionD7.top;

elementD8 = document.getElementById('object8');
positionD8 = elementD8.getBoundingClientRect();
xD8 = positionD8.left;
yD8 = positionD8.top;
}





for(var i=0;i<=8;++i)
	{
		// document.getElementById("drop"+i).style.zIndex = zAxis;
	     initPosX.push(eval("xD"+i));
		 initPosY.push(eval("yD"+i));
		
		 //console.log(initPosY[9]);	  
	}
	
/*Drop Area X and Y Co-ordinates*/
	element0 = document.getElementById('drop0');
	position0 = element0.getBoundingClientRect();
	x0 = position0.left;
    y0 = position0.top;
	
    element1 = document.getElementById('drop1');
	position1 = element1.getBoundingClientRect();
	x1 = position1.left;
    y1 = position1.top;
	
	element2 = document.getElementById('drop2');
	position2 = element2.getBoundingClientRect();
	x2 = position2.left;
    y2 = position2.top;
	
	element3 = document.getElementById('drop3');
	position3 = element3.getBoundingClientRect();
	x3 = position3.left;
    y3 = position3.top;
	
	element4 = document.getElementById('drop4');
	position4 = element4.getBoundingClientRect();
	x4 = position4.left;
    y4 = position4.top;
	
	element5 = document.getElementById('drop5');
	position5 = element5.getBoundingClientRect();
	x5 = position5.left;
    y5 = position5.top;
	
	element6 = document.getElementById('drop6');
	position6 = element6.getBoundingClientRect();
	x6 = position6.left;
    y6 = position6.top;
	
	element7 = document.getElementById('drop7');
	position7 = element7.getBoundingClientRect();
	x7 = position7.left;
    y7 = position7.top;
	
	element8 = document.getElementById('drop8');
	position8 = element8.getBoundingClientRect();
	x8 = position8.left;
    y8 = position8.top;
	
	
	
	
	
	
	//alert(initPosX);
	for(var i=0;i<=8;++i)
	{
		//document.getElementById("drop"+i).style.zIndex = zAxis;Math.round()
		dropMajorPosX.push(Math.round(eval("x"+i)));
		dropMajorPosY.push(Math.round(eval("y"+i)));
		
		//console.log(dropMajorPosY[2]);
	}
	//alert(dropMajorPosY);
	//alert(dropMajorPosY);	


var letsGO;

$(document).ready(function() {	
$("#letsGo").css("background-color","#424242");
$("#letsGo").css("color","#FFF");
$("#dragVisible").css("visibility","hidden");
$("#submitB").css("visibility","hidden");
$("#sideID").css("visibility","hidden");
$("#completedID").css("visibility", "hidden");
$("#LogoRotator").css("visibility","hidden");
$("#dummyLoader").css("visibility","hidden");
$('#submitB').css('pointer-events','none');

for(var i=0;i<=8;++i)
{
	 $("#object"+i).css("cursor","pointer");
	 $("#w"+i).css("visibility","hidden");
	 $("#a"+i).css("visibility","hidden");
}



$("#letsGo").hover(function() {
   $(this).css("background-color", "#FFE600"); 
   $(this).css("cursor","pointer");
   $(this).css("color","#000");

})
$("#letsGo").mouseout(function() {
  $(this).css("background-color", "#424242");
  $(this).css("color","#FFF");
   
})
$("#letsGo").click(function(){
	letsGO();
	timerStart();
})


letsGO = function()
{
	$("#inits").css("visibility","hidden");
	$("#sideID").css("visibility","visible");
	$("#submitB").css("visibility","visible");
	$("#submitB").attr('disabled','disabled');
    $("#submitB").css( 'cursor', 'default' );
	$("#time").css("visibility","visible");
	$("#LogoRotator").css("visibility","visible");
   $("#dummyLoader").css("visibility","hidden");
	
	for(var i=0;i<=8;++i)
    {
		$("#drop"+i).css("visibility","visible");
		//$("#w"+i).css("visibility","visible");
		//$("#a"+i).css("visibility","visible");
	}
	
   
	
}



$("#submitB").hover(function() {
   $(this).css("background-color", "#424242"); 
   $(this).css("cursor","pointer");
   $(this).css("color","#FFF");

})

$("#submitB").mouseout(function() {
  $(this).css("background-color", "#FFE600"); 
  $(this).css("color","#000");
   
})

$("#submitB").click(function(){
	$(this).css("background-color","FFE600");
	$(this).attr('disabled','disabled');
	$(this).css("cursor","default");
	$(this).css('pointer-events','none');
	
	init();
	$("#LogoRotator").css("visibility","hidden");
    $("#dummyLoader").css("visibility","hidden");
	$("#time").css("visibility","hidden");
	
	for(var k=0;k<=8;++k)
    {
		$("#object"+k).css('cursor','default');
		$("#object"+k).attr('disabled','disabled');
		$("#object"+k).css('pointer-events','none');
		
	}
	
	if((xD0==x0 && yD0==y0) || (xD1==x0 && yD1==y0) || (xD3==x0 && yD3==y0) || (xD4==x0 && yD4==y0))
	{ $("#a0").css("visibility","visible");}
	else
	{ $("#w0").css("visibility","visible");}
	
	if((xD0==x1 && yD0==y1) || (xD1==x1 && yD1==y1) || (xD3==x1 && yD3==y1) || (xD4==x1 && yD4==y1))
	{ $("#a1").css("visibility","visible");}
	else
	{ $("#w1").css("visibility","visible");}
	
	if((xD0==x2 && yD0==y2) || (xD1==x2 && yD1==y2) || (xD3==x2 && yD3==y2) || (xD4==x2 && yD4==y2))
	{ $("#a2").css("visibility","visible");}
	else
	{ $("#w2").css("visibility","visible");}
	
	if((xD2==x3 && yD2==y3))
	{ $("#a3").css("visibility","visible");}
	else
	{ $("#w3").css("visibility","visible");}
	
	if((xD3==x4 && yD3==y4)||(xD4==x4 && yD4==y4))
	{ $("#a4").css("visibility","visible");}
	else
	{ $("#w4").css("visibility","visible");}
	
	if((xD5==x5 && yD5==y5))
	{ $("#a5").css("visibility","visible");}
	else
	{ $("#w5").css("visibility","visible");}
	
	if((xD8==x8 && yD8==y8))
	{ $("#a8").css("visibility","visible");}
	else
	{ $("#w8").css("visibility","visible");}
	
	if((xD7==x6 && yD7==y6) || (xD6==x6 && yD6==y6))
	{ $("#a6").css("visibility","visible");}
	else
	{ $("#w6").css("visibility","visible");}
	
	if((xD6==x7 && yD6==y7) || (xD7==x7 && yD7==y7))
	{ $("#a7").css("visibility","visible");}
	else
	{ $("#w7").css("visibility","visible");}
	
	/*
	
	/////LHS/////    
    if(prevbtnArray0 == 0 || prevbtnArray0 == 1 || prevbtnArray0 == 3 || prevbtnArray0 == 4)
    { $("#a0").css("visibility","visible");}
	else
	{ $("#w0").css("visibility","visible");}
	
	if(prevbtnArray1 == 0 || prevbtnArray1 == 1 || prevbtnArray1 == 3 || prevbtnArray1 == 4)
    { $("#a1").css("visibility","visible");}
	else
	{ $("#w1").css("visibility","visible");}
	
	if(prevbtnArray2 == 0 || prevbtnArray2 == 1 || prevbtnArray2 == 3 || prevbtnArray2 == 4)
    { $("#a2").css("visibility","visible");}
	else
	{ $("#w2").css("visibility","visible");}
	
	if(prevbtnArray3 == 2)
    { $("#a3").css("visibility","visible");}
	else
	{ $("#w3").css("visibility","visible");}
	
	if(prevbtnArray4 == 0 || prevbtnArray4 == 1 || prevbtnArray4 == 3 || prevbtnArray4 == 4)
    { $("#a4").css("visibility","visible");}
	else
	{ $("#w4").css("visibility","visible");}
	
	if(prevbtnArray5 == 5)
    { $("#a5").css("visibility","visible");}
	else
	{ $("#w5").css("visibility","visible");}
		
	if(prevbtnArray6 == 7)
    { $("#a6").css("visibility","visible");}
	else
	{ $("#w6").css("visibility","visible");}
	
	if(prevbtnArray7 == 6)
    { $("#a7").css("visibility","visible");}
	else
	{ $("#w7").css("visibility","visible");}
	
	if(prevbtnArray8 == 8)
    { $("#a8").css("visibility","visible");}
	else
	{ $("#w8").css("visibility","visible");}
	
	*/
	notCompletedTask=true;
})


submitEnable = function()
{
	if(leftdrop == true)
	{
		 $("#submitB").css("background-color", "#FFE600");
		 $("#submitB").css("color", "#000");
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#submitB').css('pointer-events','auto');
	}
	else
	{
		 $("#submitB").css("background-color", "#999");
		 $("#submitB").css("color", "#FFF");
		 $("#submitB").attr('disabled','disabled');
		 $("#submitB").css( 'cursor', 'default' ); 
		 $('#submitB').css('pointer-events','none');
	}
}



calculate = function()
{
	count=0;
	
	//this["prevbtnArray"+dragItem]=[];
	this["prevbtnArray"+dragItem].push(draggedObject);
	//console.log(this["prevbtnArray"+dragItem]);
	pot1=this["prevbtnArray"+dragItem];
	pot2=(pot1.length)-2;
	pointer = pot1[pot2];
	//this["object"+pointer].css({top: initPosY[pointer], left: initPosX[pointer]});
	$("#object"+pointer).css({left:initPosX[pointer],top:initPosY[pointer]});
	//this["dropCount"+draggedObject]=true;
	//["prevbtnArray"+dragItem].push(draggedObject);
	//this["prevbtnArray"+dragItem].push(myCurrentNum);
	//alert("pot2>>>>"+pointer);
	//dropArrayX1.push(xT);
	//alert(dropMajorPosX);
	//alert(prevbtnArray0)
	init();
	//if( ((xD3==x6)&&(yD3==y6)) )
	if((xD3==x6 && yD3==y6) || (xD4==x7 && yD4==y7) || (xD3==x7 && yD3==y7) || (xD4==x6 && yD4==y6))
	{
		//alert("god1");
		alreadyexists4=true;
		
	}
	else
	{
		//alert("god2");
		alreadyexists4=false;
	}
	
	
	if((yD3==y0) || (yD4==y0) || (yD3==y1) || (yD4==y1) || (yD3==y2) || (yD4==y2))
	{
		//alert("god1");
		alreadyexists43=true;
	}
	else
	{
		//alert("god2");
		alreadyexists43=false;
	}
	
	
	for(var j=0;j<=8;++j)
	{
		//alert(xT+">"+dropMajorPosX[j]);
		//console.log(this["prevbtnArray"+j]);
		//console.log(this["prevbtnArray"+j] = []);
		//console.log(xinit+"x"+dropMajorPosX[j]+"XX"+yinit+"y"+dropMajorPosY[j]+"YY");
		if(xinit==dropMajorPosX[j] && yinit==dropMajorPosY[j])
		{
				this["prevbtnArray"+j] = [];
		}
		
		//console.log($("#object"+j).offset().top +"<<>>"+initPosY[j]);
		if($("#object"+j).offset().top!=initPosY[j])
		{
			count++;
			//console.log(count);
			if(count>=9)
			{
		      leftdrop=true;
			}
			else
			{
			  leftdrop=false;
			}
		}
		submitEnable();
	}
}


})


function drag_start(event){
	leftDrag=true;
	rightDrag=false;
	event.dataTransfer.dropEffect = "move";
	event.dataTransfer.setData("text",event.target.getAttribute('id'));
	objectT=event.dataTransfer.getData("text");
	elementT = document.getElementById(objectT);
	positionT = elementT.getBoundingClientRect();
	xT = Math.round(positionT.left);
	yT = Math.round(positionT.top);
	xinit = Math.round(positionT.left);
	yinit = Math.round(positionT.top);
	//console.log("God is really Great, Pls save me!");
	//document.getElementById("sample").innerHTML = "Dragging the "+ yT;
	zAxis++;
	//console.log(yT);
	for(var i=0;i<=8;++i)
	{
		document.getElementById("drop"+i).style.zIndex = zAxis;
		
	}
	//document.getElementById("drop1").style.opacity = '0.2';
	//alert(yT);
	/*for(var i=1;i<=3;++i)
	{
		eval("element"+i) = document.getElementById("drop"+i);
		eval("position"+i) = eval("element"+i).getBoundingClientRect();
		eval("x"+i) = eval("position"+i).left;
		eval("y"+i) = eval("position"+i).top;
	}*/
	
	//alert(y1);
	
}



function drag_enter(event){
	//_('app_status').innerHTML = "You are dragging over the  "+ event.target.getAttribute('id');
	//alert("god");
	//document.getElementById("sample").innerHTML = "You are dragging over the  "+ event.target.getAttribute('id');
	
	
}
	
function drag_leave(event){
	//_('app_status').innerHTML = "You left the"+ event.target.getAttribute('id');
	
}

function drag_end(event){
	//_('app_status').innerHTML = "You left the"+ event.target.getAttribute('id');
	goBack();
}


function goBack()
{
    for(var i=0;i<=8;++i)
	{
		//console.log(tempZindex);
	 document.getElementById("drop"+i).style.zIndex = tempZindex;
	 document.getElementById("object"+i).style.zIndex = 1;
	 
	}	
}

var flagT1=false;
var flagT2=false;
function drag_drop(event){
	event.preventDefault();
	
	//alert(event.target.getAttribute('id'));
	//document.getElementById("object10").style.zIndex='0';
	//document.getElementById("drop1").style.zIndex = '100';
	//alert(document.getElementById("object10").style.zIndex )
	
	if(leftDrag)
	{
		if((event.target.getAttribute('id') == "drop0"))
		{
			         elem_id= event.dataTransfer.getData("text");
			         draggedObject=elem_id.slice(6);
			         if((draggedObject == 3) || (draggedObject == 4))
					 {
						if(alreadyexists43)
						{
							goBack();
						}
						else
						{
							document.getElementById(elem_id).style.top = y0+"px";
							document.getElementById(elem_id).style.left = x0+"px";
							dragItem=0;
							calculate();
						}
					 }
					else
					{
					document.getElementById(elem_id).style.top = y0+"px";
					document.getElementById(elem_id).style.left = x0+"px";
					dragItem=0;
					calculate();
					}
					
		}
		else if((event.target.getAttribute('id') == "drop1"))
		{
			        elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(6);
			         if((draggedObject == 3) || (draggedObject == 4))
					 {
						if(alreadyexists43)
						{
							goBack();
						}
						else
						{
							document.getElementById(elem_id).style.top = y1+"px";
							document.getElementById(elem_id).style.left = x1+"px";
							dragItem=1;
							calculate();
						}
					 }
					else
					{
					document.getElementById(elem_id).style.top = y1+"px";
					document.getElementById(elem_id).style.left = x1+"px";
					dragItem=1;
					calculate();
					}
					
		}
		else if((event.target.getAttribute('id') == "drop2"))
		{
			        elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(6);
					//alert(draggedObject);
			         if((draggedObject == 3) || (draggedObject == 4))
					 {
						if(alreadyexists43)
						{
							goBack();
						}
						else
						{
							document.getElementById(elem_id).style.top = y2+"px";
							document.getElementById(elem_id).style.left = x2+"px";
							dragItem=2;
							calculate();
						}
					 }
					else
					{
					document.getElementById(elem_id).style.top = y2+"px";
					document.getElementById(elem_id).style.left = x2+"px";
					dragItem=2;
					calculate();
					}
		}
		else if((event.target.getAttribute('id') == "drop3"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(6);
					document.getElementById(elem_id).style.top = y3+"px";
					document.getElementById(elem_id).style.left = x3+"px";
					dragItem=3;
					calculate();
		}
		else if((event.target.getAttribute('id') == "drop4"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(6);
					document.getElementById(elem_id).style.top = y4+"px";
					document.getElementById(elem_id).style.left = x4+"px";
					dragItem=4;
					calculate();
		}
		else if((event.target.getAttribute('id') == "drop5"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(6);
					document.getElementById(elem_id).style.top = y5+"px";
					document.getElementById(elem_id).style.left = x5+"px";
					dragItem=5;
					calculate();
		}
		else if((event.target.getAttribute('id') == "drop6"))
		{
			////double/////
			elem_id= event.dataTransfer.getData("text");
			draggedObject=elem_id.slice(6);
			//alert(draggedObject);
			         if((draggedObject == 3) || (draggedObject == 4))
					 {
						if(alreadyexists4)
						{
							goBack();
						}
						else
						{
							document.getElementById(elem_id).style.top = y6+"px";
							document.getElementById(elem_id).style.left = x6+"px";
							dragItem=6;
							calculate();
						}
					 }
					else
					{
					document.getElementById(elem_id).style.top = y6+"px";
					document.getElementById(elem_id).style.left = x6+"px";
					dragItem=6;
					calculate();
					}
		}
		else if((event.target.getAttribute('id') == "drop7"))
		{
			/////double/////
			elem_id= event.dataTransfer.getData("text");
			draggedObject=elem_id.slice(6);
			//alert(draggedObject);
			       if((draggedObject == 3) || (draggedObject == 4))
					 {
						if(alreadyexists4)
						{
							goBack();
						}
						else
						{
							document.getElementById(elem_id).style.top = y7+"px";
							document.getElementById(elem_id).style.left = x7+"px";
							dragItem=7;
							calculate();
						}
					 }
					else
					{
					document.getElementById(elem_id).style.top = y7+"px";
					document.getElementById(elem_id).style.left = x7+"px";
					dragItem=7;
					calculate();
					}
		}
		else if((event.target.getAttribute('id') == "drop8"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(6);
					document.getElementById(elem_id).style.top = y8+"px";
					document.getElementById(elem_id).style.left = x8+"px";
					dragItem=8;
					calculate();
		}
		else if((event.target.getAttribute('id') == "drop9"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(6);
					document.getElementById(elem_id).style.top = y9+"px";
					document.getElementById(elem_id).style.left = x9+"px";
					dragItem=9;
					calculate();
		}
		else
		{
					goBack();
		}
	}
}


var notCompletedTask=false;
var completedSlide=false;

function startTimer(duration, display) {
	
    var timer = duration, minutes, seconds;
    setInterval(function () {
		
		if(notCompletedTask==false)
		{
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < -1) {
			//alert("ok");
			
			timer=0;
			display.textContent = minutes + ":" + "00";
			//$("#timeUpID").css("visibility", "visible");
			$("#completedID").css("visibility", "visible");
			//alert("Completed");
			end();
			
			
            //timer = duration;
        }}
    }, 1000);
}

function end()
{
	
	clearInterval(timer);
			
}

window.onload = function () {
    
   //startTimer(fiveMinutes, display);
	//document.getElementById('LogoRotator').style.animationPlayState = 'paused';
	//document.getElementById('LogoRotator').style.animationPlayState = 'paused';
	//document.getElementById('LogoRotator').style.animationPlayState = 'paused';
	 
};
	
function timerStart()
{
	var fiveMinutes = 60 * 15,
    display = document.querySelector('#time');
	startTimer(fiveMinutes, display);
	

}












