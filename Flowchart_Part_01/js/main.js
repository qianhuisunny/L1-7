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
var tempZindexText=0;
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


elementR0 = document.getElementById('text0');
positionR0 = elementR0.getBoundingClientRect();
xR0 = positionR0.left;
yR0 = positionR0.top;


elementR1 = document.getElementById('text1');
positionR1 = elementR1.getBoundingClientRect();
xR1 = positionR1.left;
yR1 = positionR1.top;

elementR2 = document.getElementById('text2');
positionR2 = elementR2.getBoundingClientRect();
xR2 = positionR2.left;
yR2 = positionR2.top;

elementR3 = document.getElementById('text3');
positionR3 = elementR3.getBoundingClientRect();
xR3 = positionR3.left;
yR3 = positionR3.top;

elementR4 = document.getElementById('text4');
positionR4 = elementR4.getBoundingClientRect();
xR4 = positionR4.left;
yR4 = positionR4.top;

elementR5 = document.getElementById('text5');
positionR5 = elementR5.getBoundingClientRect();
xR5 = positionR5.left;
yR5 = positionR5.top;

elementR6 = document.getElementById('text6');
positionR6 = elementR6.getBoundingClientRect();
xR6 = positionR6.left;
yR6 = positionR6.top;

elementR7 = document.getElementById('text7');
positionR7 = elementR7.getBoundingClientRect();
xR7 = positionR7.left;
yR7 = positionR7.top;

elementR8 = document.getElementById('text8');
positionR8 = elementR8.getBoundingClientRect();
xR8 = positionR8.left;
yR8 = positionR8.top;


}





for(var i=0;i<=8;++i)
	{
		// document.getElementById("drop"+i).style.zIndex = zAxis;
	     initPosX.push(eval("xD"+i));
		 initPosY.push(eval("yD"+i));
		 initPosRX.push(eval("xR"+i));
		 initPosRY.push(eval("yR"+i));
		
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
$("#letsGo").css("background-color","#FFF");
$("#letsGo").css("color","#000");
$("#dragVisible").css("visibility","hidden");
$("#submitB").css("visibility","hidden");
$('#submitB').css('pointer-events','none');
$("#itext").css("visibility","hidden");
$("#sideID").css("visibility","hidden");
$("#completedID").css("visibility", "hidden");
$("#secFlowChart").css("visibility", "hidden");
$("#secListPage").css("visibility","hidden");
$("#inits").css("visibility","hidden");
$("#time").css("visibility","hidden");
$("#textDragID").css("visibility","hidden");
$("#time").css("visibility","hidden");
$("#LogoRotator").css("visibility","hidden");
$("#dummyLoader").css("visibility","hidden");

for(var i=0;i<=8;++i)
{
	 $("#object"+i).css("cursor","pointer");
	 $("#text"+i).css("cursor","pointer");
	 $("#w"+i).css("visibility","hidden");
	 $("#a"+i).css("visibility","hidden");
}



$("#letsGo").hover(function() {
   $(this).css("background-color", "#999999"); 
   $(this).css("cursor","pointer");
   $(this).css("color","#FFF");

})
$("#letsGo").mouseout(function() {
  $(this).css("background-color", "#FFF");
  $(this).css("color","#000");
   
})
$("#letsGo").click(function(){
	letsGO();
	timerStart();
})


letsGO = function()
{
	$("#inits").css("visibility","hidden");
	$("#secFlowChart").css("visibility", "visible");
	$("#hiddenRed").css( 'cursor', 'pointer' );
	
	$("#popVisible").css("visibility","hidden");
	
	
	//$("#sideID").css("visibility","visible");
	$("#submitB").css("visibility","visible");
	$("#submitB").attr('disabled','disabled');
	//$("#hiddenRed").attr('disabled','disabled');
	//$("#time").css("visibility","visible");
	//console.log();
	
	for(var i=0;i<=8;++i)
    {
		$("#drop"+i).css("visibility","visible");
		//$("#w"+i).css("visibility","visible");
		//$("#a"+i).css("visibility","visible");
	}
	
   
	
}

$("#hiddenRed").click(function(){
	//$("#popVisible").css("visibility","visible");
	$("#secFlowChart").css("visibility", "hidden");
	
	$("#inits").css("visibility","visible");
	$("#submitB").css("visibility","visible");
	$("#itext").css("visibility","visible");
	$("#sideID").css("visibility","visible");
	$("#textDragID").css("visibility","visible");
	$("#time").css("visibility","visible");
	$("#LogoRotator").css("visibility","visible");
	
})


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
	$(this).css("background-color","#C0C0C0");
	$(this).attr('disabled','disabled');
	$(this).css("cursor","default");
	$(this).css('pointer-events','none');
	
	$("#LogoRotator").css("visibility","hidden");
    $("#dummyLoader").css("visibility","hidden");
	$("#time").css("visibility","hidden");
	
	for(var k=0;k<=8;++k)
    {
		$("#object"+k).css('cursor','default');
		$("#object"+k).attr('disabled','disabled');
		$("#object"+k).css('pointer-events','none');	
		$("#text"+k).css('cursor','default');
		$("#text"+k).attr('disabled','disabled');
		$("#text"+k).css('pointer-events','none');	
		
	}
	
	init();
	 //if((xD0==xR0==x0)&&(yD0==yR0==y0)||(xD1==xR0==x0)&&(yD1==yR0==y0))
    //if(   (((xD0==xR0)&&(xR0==x0)&&(xD0==x0)) && ((yD0==yR0)&&(yR0==y0)&&(yD0==y0)))  ||  (((xD1==xR0)&&(xR0==x0)&&(xD1==x0)) && ((yD1==yR0)&&(yR0==y0)&&(yD1==y0))))
	//if( ((xD0==x0)&&(xD0==xR0)) || ((xD1==x0)&&(xD1==xR0)) )
	//if((xD0==x0) || (xD1==x0))
	if( ((xD0==x0)&&(xD0==xR0)) || ((xD1==x0)&&(xD1==xR0)) )
    { $("#a0").css("visibility","visible");}
	else
	{ $("#w0").css("visibility","visible");}
	
	if( ((xD6==x1)&&(xD6==xR1)) || ((xD7==x1)&&(xD7==xR1)) || ((xD8==x1)&&(xD8==xR1)))
    { $("#a1").css("visibility","visible");}
	else
	{ $("#w1").css("visibility","visible");}
	
	
	if( ((xD2==x2)&&(xD2==xR6)) || ((xD3==x2)&&(xD3==xR6)) || ((xD4==x2)&&(xD4==xR6)) )
    { $("#a2").css("visibility","visible");}
	else
	{ $("#w2").css("visibility","visible");}
		
	if( ((xD5==x3)&&(xD5==xR8)))
    { $("#a3").css("visibility","visible");}
	else
	{ $("#w3").css("visibility","visible");}
	
	if( ((xD6==x4)&&(xD6==xR2)) || ((xD7==x4)&&(xD7==xR2)) || ((xD8==x4)&&(xD8==xR2)))
    { $("#a4").css("visibility","visible");}
	else
	{ $("#w4").css("visibility","visible");}
	
	if( ((xD2==x5)&&(xD2==xR3)) || ((xD3==x5)&&(xD3==xR3)) || ((xD4==x5)&&(xD4==xR3)) )
    { $("#a5").css("visibility","visible");}
	else
	{ $("#w5").css("visibility","visible");}
	
	if( ((xD6==x6)&&(xD6==xR4)) || ((xD7==x6)&&(xD7==xR4)) || ((xD8==x6)&&(xD8==xR4)))
    { $("#a6").css("visibility","visible");}
	else
	{ $("#w6").css("visibility","visible");}
	
	
	
	if( ((xD0==x7)&&(xD0==xR5)) || ((xD1==x7)&&(xD1==xR5)) )
    { $("#a7").css("visibility","visible");}
	else
	{ $("#w7").css("visibility","visible");}
	
	if( ((xD2==x8)&&(xD2==xR7)) || ((xD3==x8)&&(xD3==xR7)) || ((xD4==x8)&&(xD4==xR7)) )
    { $("#a8").css("visibility","visible");}
	else
	{ $("#w8").css("visibility","visible");}
	
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
	
	if(prevbtnArray3 == 0 || prevbtnArray3 == 1 || prevbtnArray3 == 3 || prevbtnArray3 == 4)
    { $("#a3").css("visibility","visible");}
	else
	{ $("#w3").css("visibility","visible");}
	
	if(prevbtnArray4 == 2)
    { $("#a4").css("visibility","visible");}
	else
	{ $("#w4").css("visibility","visible");}
	
	if(prevbtnArray5 == 3 || prevbtnArray5 == 4)
    { $("#a5").css("visibility","visible");}
	else
	{ $("#w5").css("visibility","visible");}
		
	if(prevbtnArray6 == 0 || prevbtnArray6 == 1 || prevbtnArray6 == 2 || prevbtnArray6 == 3)
    { $("#a6").css("visibility","visible");}
	else
	{ $("#w6").css("visibility","visible");}
	
	if(prevbtnArray5 == 0)
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
	if(leftdrop && rightdrop == true)
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
	for(var j=0;j<=8;++j)
	{
		//alert(xT+">"+dropMajorPosX[j]);
		//console.log(this["prevbtnArray"+j]);
		//console.log(this["prevbtnArray"+j] = []);
		//console.log(xinit+"x"+dropMajorPosX[j]+"XX"+yinit+"y"+dropMajorPosY[j]+"YY");
		if(xinit==dropMajorPosX[j] && yinit==dropMajorPosY[j])
		{
				this["prevbtnArray"+j] = [];
				document.getElementById("drop"+j).style.opacity = "1";
		}
		
		
		
	
		/*for(var i=0;i<=8;++i)
		{
			if(($("#object"+j).offset().top== "y"+i+"px")&& ($("#object"+j).offset().left== "x"+i+"px"))
			{
				$("#drop"+i).css("visibility","hidden");
		       alert(i);
			}
			else
			{
				 
				//$("#drop"+i).css("visibility","visible");
			}
		}*/
	
		
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
	boxDragState=true;
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
		//$('#drop'+i).css('z-index',zAxis);
		
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
	 document.getElementById("text"+i).style.zIndex = 2;
	 
	 $('#drop'+i).css('z-index',tempZindex);
	 $('#object'+i).css('z-index',1);
	 $('#text'+i).css('z-index',2);
	 
	}	
}

function drag_drop(event){
	event.preventDefault();
	boxDragState=false;
	//alert("God1");
	//alert(event.target.getAttribute('id'));
	//document.getElementById("object10").style.zIndex='0';
	//document.getElementById("drop1").style.zIndex = '100';
	//alert(document.getElementById("object10").style.zIndex )
	
	var temp = event.dataTransfer.getData("text");
	var temp2 = temp.slice(6);
	console.log(temp2);
	//alert(temp2);
	if(temp2 != "")
	{
		if((event.target.getAttribute('id') == "drop0"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(6);
					document.getElementById(elem_id).style.top = y0+"px";
					document.getElementById(elem_id).style.left = x0+"px";
					dragItem=0;
					document.getElementById("drop"+dragItem).style.opacity = "0.1";
					calculate();
					//alert(elem_id)
					
		}
		else if((event.target.getAttribute('id') == "drop1"))
		{
					elem_id= event.dataTransfer.getData("text");
					//event.target.appendChild(_(elem_id));
					draggedObject=elem_id.slice(6);
					//alert(draggedObject);
					document.getElementById(elem_id).style.top = y1+"px";
					document.getElementById(elem_id).style.left = x1+"px";
					dragItem=1;
					document.getElementById("drop"+dragItem).style.opacity = "0.1";
					calculate();
					
		}
		else if((event.target.getAttribute('id') == "drop2"))
		{
					elem_id= event.dataTransfer.getData("text");
					//event.target.appendChild(_(elem_id));
					draggedObject=elem_id.slice(6);
					document.getElementById(elem_id).style.top = y2+"px";
					document.getElementById(elem_id).style.left = x2+"px";
					dragItem=2;
					document.getElementById("drop"+dragItem).style.opacity = "0.1";
					calculate();
		}
		else if((event.target.getAttribute('id') == "drop3"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(6);
					document.getElementById(elem_id).style.top = y3+"px";
					document.getElementById(elem_id).style.left = x3+"px";
					dragItem=3;
					document.getElementById("drop"+dragItem).style.opacity = "0.1";
					calculate();
		}
		else if((event.target.getAttribute('id') == "drop4"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(6);
					document.getElementById(elem_id).style.top = y4+"px";
					document.getElementById(elem_id).style.left = x4+"px";
					dragItem=4;
					document.getElementById("drop"+dragItem).style.opacity = "0.1";
					calculate();
		}
		else if((event.target.getAttribute('id') == "drop5"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(6);
					document.getElementById(elem_id).style.top = y5+"px";
					document.getElementById(elem_id).style.left = x5+"px";
					dragItem=5;
					document.getElementById("drop"+dragItem).style.opacity = "0.1";
					calculate();
		}
		else if((event.target.getAttribute('id') == "drop6"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(6);
					document.getElementById(elem_id).style.top = y6+"px";
					document.getElementById(elem_id).style.left = x6+"px";
					dragItem=6;
					document.getElementById("drop"+dragItem).style.opacity = "0.1";
					calculate();
		}
		else if((event.target.getAttribute('id') == "drop7"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(6);
					document.getElementById(elem_id).style.top = y7+"px";
					document.getElementById(elem_id).style.left = x7+"px";
					dragItem=7;
					document.getElementById("drop"+dragItem).style.opacity = "0.1";
					calculate();
		}
		else if((event.target.getAttribute('id') == "drop8"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(6);
					document.getElementById(elem_id).style.top = y8+"px";
					document.getElementById(elem_id).style.left = x8+"px";
					dragItem=8;
					document.getElementById("drop"+dragItem).style.opacity = "0.1";
					calculate();
		}
		
		else
		{
					goBack();
		}
		
	}
goBack();
}



///////////////////Second Level of Drag//////////////
function drag_startText(event){
	//alert("Right");
	boxDragState=false;
	event.dataTransfer.dropEffect = "move";
	event.dataTransfer.setData("text",event.target.getAttribute('id'));
	objectText=event.dataTransfer.getData("text");
	elementText = document.getElementById(objectText);
	positionText = elementText.getBoundingClientRect();
	xText = Math.round(positionText.left);
	yText = Math.round(positionText.top);
	xinitText = Math.round(positionText.left);
	yinitText = Math.round(positionText.top);
	console.log(xinitText);
	init();
}

function drag_endText(event){
	goBackText();
	
}

function goBackText()
{
    for(var i=0;i<=8;++i)
	{
		//console.log(tempZindexText);
	 document.getElementById("object"+i).style.zIndex = tempZindexText;
	 //document.getElementById("text"+i).style.zIndex = 1;
	 
	}	
}

var marginTop= 15;
var objectValue0= 14;
var objectValue1= 9;
var objectValue3= 8;
var objectValue4= 12;
var objectValue5= 13;
var objectValue6= 5;
var fontValue= 7;
var fontValue1= 7;
var fontValueSpecial1= 6;
var objectValueSpec1=13;
var fontValueSpecial3= 7;
var objectValueSpec3=14;
var fontValue6= 7;

var boxDragState=false;
function drag_dropText(event){
	event.preventDefault();
   //alert(boxDragState)
	if(boxDragState != true)
	{
		
	   if((event.target.getAttribute('id') == "object0"))
		{
					elem_ids= event.dataTransfer.getData("text");
					draggedObjects=elem_ids.slice(4);
				
					document.getElementById(elem_ids).style.top = yD0+"px";
					document.getElementById(elem_ids).style.left = xD0+"px";
					
					//document.getElementById(elem_ids).style.alignmentBaseline = widthValue+"px";
					if(draggedObjects==0)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue0+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue+"px";
					}
					else if(draggedObjects==1)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue1+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==3)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue3+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==4)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue4+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==5)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue5+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==6)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue6+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue6+"px";
					}
					else
					{
						document.getElementById(elem_ids).style.fontSize = fontValue+"px";
					    document.getElementById(elem_ids).style.marginTop= marginTop+"px";
					}
					dragItemR=0;
					calculateText();
					
		}
		else if((event.target.getAttribute('id') == "object1"))
		{
					elem_ids= event.dataTransfer.getData("text");
					draggedObjects=elem_ids.slice(4);
					document.getElementById(elem_ids).style.top = yD1+"px";
					document.getElementById(elem_ids).style.left = xD1+"px";
					document.getElementById(elem_ids).style.fontSize = fontValue+"px";
					
					
					if(draggedObjects==0)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue0+"px";
					}
					else if(draggedObjects==1)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue1+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==3)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue3+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==4)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue4+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==5)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue5+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==6)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue6+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue6+"px";
					}
					else
					{
					    document.getElementById(elem_ids).style.marginTop= marginTop+"px";
					}
					
					dragItemR=1;
					calculateText();
					
		}
		else if((event.target.getAttribute('id') == "object2"))
		{
					elem_ids= event.dataTransfer.getData("text");
					draggedObjects=elem_ids.slice(4);
					document.getElementById(elem_ids).style.top = yD2+"px";
					document.getElementById(elem_ids).style.left = xD2+"px";
					document.getElementById(elem_ids).style.fontSize = fontValue+"px";
					if(draggedObjects==0)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue0+"px";
					}
					else if(draggedObjects==1)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue1+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==3)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue3+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==4)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue4+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==5)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue5+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==6)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue6+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue6+"px";
					}
					else
					{
					    document.getElementById(elem_ids).style.marginTop= marginTop+"px";
					}
					dragItemR=2;
					calculateText();
					
		}
		else if((event.target.getAttribute('id') == "object3"))
		{
					elem_ids= event.dataTransfer.getData("text");
					draggedObjects=elem_ids.slice(4);
					document.getElementById(elem_ids).style.top = yD3+"px";;
					document.getElementById(elem_ids).style.left = xD3+"px";;
					document.getElementById(elem_ids).style.fontSize = fontValue+"px";
					if(draggedObjects==0)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue0+"px";
					}
					else if(draggedObjects==1)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue1+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==3)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue3+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==4)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue4+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==5)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue5+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==6)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue6+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue6+"px";
					}
					else
					{
					    document.getElementById(elem_ids).style.marginTop= marginTop+"px";
					}
					dragItemR=3;
					calculateText();
					
		}
		else if((event.target.getAttribute('id') == "object4"))
		{
					elem_ids= event.dataTransfer.getData("text");
					draggedObjects=elem_ids.slice(4);
					document.getElementById(elem_ids).style.top = yD4+"px";;
					document.getElementById(elem_ids).style.left = xD4+"px";;
					document.getElementById(elem_ids).style.fontSize = fontValue+"px";
					if(draggedObjects==0)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue0+"px";
					}
					else if(draggedObjects==1)
					{
						document.getElementById(elem_ids).style.marginTop= objectValueSpec1+"px";
						document.getElementById(elem_ids).style.fontSize = fontValueSpecial1+"px";
					}
					else if(draggedObjects==3)
					{
						document.getElementById(elem_ids).style.marginTop= objectValueSpec3+"px";
						document.getElementById(elem_ids).style.fontSize = fontValueSpecial3+"px";
					}
					else if(draggedObjects==4)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue4+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==5)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue5+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==6)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue6+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue6+"px";
					}
					else
					{
					    document.getElementById(elem_ids).style.marginTop= marginTop+"px";
					}
					dragItemR=4;
					calculateText();
					
		}
		else if((event.target.getAttribute('id') == "object5"))
		{
					elem_ids= event.dataTransfer.getData("text");
					draggedObjects=elem_ids.slice(4);
					document.getElementById(elem_ids).style.top = yD5+"px";;
					document.getElementById(elem_ids).style.left = xD5+"px";;
					document.getElementById(elem_ids).style.fontSize = fontValue+"px";
					if(draggedObjects==0)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue0+"px";
					}
					else if(draggedObjects==1)
					{
						document.getElementById(elem_ids).style.marginTop= objectValueSpec1+"px";
						document.getElementById(elem_ids).style.fontSize = fontValueSpecial1+"px";
					}
					else if(draggedObjects==3)
					{
						document.getElementById(elem_ids).style.marginTop= objectValueSpec3+"px";
						document.getElementById(elem_ids).style.fontSize = fontValueSpecial3+"px";
					}
					else if(draggedObjects==4)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue4+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==5)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue5+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==6)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue6+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue6+"px";
					}
					else
					{
					    document.getElementById(elem_ids).style.marginTop= marginTop+"px";
					}
					dragItemR=5;
					calculateText();
					
		}
		else if((event.target.getAttribute('id') == "object6"))
		{
					elem_ids= event.dataTransfer.getData("text");
					draggedObjects=elem_ids.slice(4);
					document.getElementById(elem_ids).style.top = yD6+"px";;
					document.getElementById(elem_ids).style.left = xD6+"px";;
					document.getElementById(elem_ids).style.fontSize = fontValue+"px";
					if(draggedObjects==0)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue0+"px";
					}
					else if(draggedObjects==1)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue1+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==3)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue3+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==4)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue4+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==5)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue5+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==6)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue6+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue6+"px";
					}
					else
					{
					    document.getElementById(elem_ids).style.marginTop= marginTop+"px";
					}
					dragItemR=6;
					calculateText();
					
		}
		else if((event.target.getAttribute('id') == "object7"))
		{
					elem_ids= event.dataTransfer.getData("text");
					draggedObjects=elem_ids.slice(4);
					document.getElementById(elem_ids).style.top = yD7+"px";;
					document.getElementById(elem_ids).style.left = xD7+"px";;
					document.getElementById(elem_ids).style.fontSize = fontValue+"px";
					if(draggedObjects==0)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue0+"px";
					}
					else if(draggedObjects==1)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue1+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
						
					}
					else if(draggedObjects==3)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue3+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==4)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue4+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==5)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue5+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==6)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue6+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue6+"px";
					}
					else
					{
					    document.getElementById(elem_ids).style.marginTop= marginTop+"px";
					}
					dragItemR=7
					calculateText();
					
		}
		else if((event.target.getAttribute('id') == "object8"))
		{
					elem_ids= event.dataTransfer.getData("text");
					draggedObjects=elem_ids.slice(4);
					document.getElementById(elem_ids).style.top = yD8+"px";;
					document.getElementById(elem_ids).style.left = xD8+"px";;
					document.getElementById(elem_ids).style.fontSize = fontValue+"px";
					if(draggedObjects==0)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue0+"px";
					}
					else if(draggedObjects==1)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue1+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==3)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue3+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==4)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue4+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==5)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue5+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue1+"px";
					}
					else if(draggedObjects==6)
					{
						document.getElementById(elem_ids).style.marginTop= objectValue6+"px";
						document.getElementById(elem_ids).style.fontSize = fontValue6+"px";
					}
					else
					{
					    document.getElementById(elem_ids).style.marginTop= marginTop+"px";
					}
					dragItemR=8;
					calculateText();
					
		}
	}
}




calculateText = function()
{
	countR=0;
	this["prevbtnArrayR"+dragItemR].push(draggedObjects);
	//console.log(this["prevbtnArray"+dragItem]);
	potR1=this["prevbtnArrayR"+dragItemR];
	potR2=(potR1.length)-2;
	pointerR = potR1[potR2];
	//this["object"+pointer].css({top: initPosY[pointer], left: initPosX[pointer]});
	$("#text"+pointerR).css({left:initPosRX[pointerR],top:initPosRY[pointerR]});
	//this["dropCount"+draggedObject]=true;
	//["prevbtnArray"+dragItem].push(draggedObject);
	//this["prevbtnArray"+dragItem].push(myCurrentNum);
	//alert("pot2>>>>"+pointer);
	//dropArrayX1.push(xT);
	//alert(dropMajorPosX);
	for(var j=0;j<=8;++j)
	{
		//alert(xT+">"+dropMajorPosX[j]);
		//console.log(this["prevbtnArray"+j]);
		//console.log(this["prevbtnArray"+j] = []);
		//console.log(xinit+"x"+dropMajorPosX[j]+"XX"+yinit+"y"+dropMajorPosY[j]+"YY");
		if(xinitR==dropMajorPosRX[j] && yinitR==dropMajorPosRY[j])
		{
				this["prevbtnArrayR"+j] = [];
				//document.getElementById("drop"+j).style.opacity = "1";
		}
		
		
		
	
		/*for(var i=0;i<=8;++i)
		{
			if(($("#object"+j).offset().top== "y"+i+"px")&& ($("#object"+j).offset().left== "x"+i+"px"))
			{
				$("#drop"+i).css("visibility","hidden");
		       alert(i);
			}
			else
			{
				 
				//$("#drop"+i).css("visibility","visible");
			}
		}*/
	
		
		//console.log($("#object"+j).offset().top +"<<>>"+initPosY[j]);
		if($("#text"+j).offset().top!=initPosRY[j])
		{
			countR++;
			//console.log(count);
			if(countR>=9)
			{
		      rightdrop=true;
			}
			else
			{
			  rightdrop=false;
			}
		}
		submitEnable();
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
			$("#LogoRotator").css("visibility","hidden");
            $("#dummyLoader").css("visibility","visible");
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












