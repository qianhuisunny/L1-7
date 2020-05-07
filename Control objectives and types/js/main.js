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

elementD9 = document.getElementById('object9');
positionD9 = elementD9.getBoundingClientRect();
xD9 = positionD9.left;
yD9 = positionD9.top;



//////Right////////
elementDR0 = document.getElementById('objectR0');
positionDR0 = elementDR0.getBoundingClientRect();
xDR0 = positionDR0.left;
yDR0 = positionDR0.top;

elementDR1 = document.getElementById('objectR1');
positionDR1 = elementDR1.getBoundingClientRect();
xDR1 = positionDR1.left;
yDR1 = positionDR1.top;

elementDR2 = document.getElementById('objectR2');
positionDR2 = elementDR2.getBoundingClientRect();
xDR2 = positionDR2.left;
yDR2 = positionDR2.top;

elementDR3 = document.getElementById('objectR3');
positionDR3 = elementDR3.getBoundingClientRect();
xDR3 = positionDR3.left;
yDR3 = positionDR3.top;

elementDR4 = document.getElementById('objectR4');
positionDR4 = elementDR4.getBoundingClientRect();
xDR4 = positionDR4.left;
yDR4 = positionDR4.top;

elementDR5 = document.getElementById('objectR5');
positionDR5 = elementDR5.getBoundingClientRect();
xDR5 = positionDR5.left;
yDR5 = positionDR5.top;

elementDR6 = document.getElementById('objectR6');
positionDR6 = elementDR6.getBoundingClientRect();
xDR6 = positionDR6.left;
yDR6 = positionDR6.top;

elementDR7 = document.getElementById('objectR7');
positionDR7 = elementDR7.getBoundingClientRect();
xDR7 = positionDR7.left;
yDR7 = positionDR7.top;

elementDR8 = document.getElementById('objectR8');
positionDR8 = elementDR8.getBoundingClientRect();
xDR8 = positionDR8.left;
yDR8 = positionDR8.top;

elementDR9 = document.getElementById('objectR9');
positionDR9 = elementDR9.getBoundingClientRect();
xDR9 = positionDR9.left;
yDR9 = positionDR9.top;

}

for(var i=0;i<=9;++i)
	{
		// document.getElementById("drop"+i).style.zIndex = zAxis;
	     initPosX.push(eval("xD"+i));
		 initPosY.push(eval("yD"+i));
		 initPosRX.push(eval("xDR"+i));
		 initPosRY.push(eval("yDR"+i));
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
	
	element9 = document.getElementById('drop9');
	position9 = element9.getBoundingClientRect();
	x9 = position9.left;
    y9 = position9.top;
	
	
	elementR0 = document.getElementById('dropR0');
	positionR0 = elementR0.getBoundingClientRect();
	xR0 = positionR0.left;
    yR0 = positionR0.top;
	
    elementR1 = document.getElementById('dropR1');
	positionR1 = elementR1.getBoundingClientRect();
	xR1 = positionR1.left;
    yR1 = positionR1.top;
	
	elementR2 = document.getElementById('dropR2');
	positionR2 = elementR2.getBoundingClientRect();
	xR2 = positionR2.left;
    yR2 = positionR2.top;
	
	elementR3 = document.getElementById('dropR3');
	positionR3 = elementR3.getBoundingClientRect();
	xR3 = positionR3.left;
    yR3 = positionR3.top;
	
	elementR4 = document.getElementById('dropR4');
	positionR4 = elementR4.getBoundingClientRect();
	xR4 = positionR4.left;
    yR4 = positionR4.top;
	
	elementR5 = document.getElementById('dropR5');
	positionR5 = elementR5.getBoundingClientRect();
	xR5 = positionR5.left;
    yR5 = positionR5.top;
	
	elementR6 = document.getElementById('dropR6');
	positionR6 = elementR6.getBoundingClientRect();
	xR6 = positionR6.left;
    yR6 = positionR6.top;
	
	elementR7 = document.getElementById('dropR7');
	positionR7 = elementR7.getBoundingClientRect();
	xR7 = positionR7.left;
    yR7 = positionR7.top;
	
	elementR8 = document.getElementById('dropR8');
	positionR8 = elementR8.getBoundingClientRect();
	xR8 = positionR8.left;
    yR8 = positionR8.top;
	
	elementR9 = document.getElementById('dropR9');
	positionR9 = elementR9.getBoundingClientRect();
	xR9 = positionR9.left;
    yR9 = positionR9.top;
	
	//alert(initPosX);
	for(var i=0;i<=9;++i)
	{
		//document.getElementById("drop"+i).style.zIndex = zAxis;Math.round()
		dropMajorPosX.push(Math.round(eval("x"+i)));
		dropMajorPosY.push(Math.round(eval("y"+i)));
		dropMajorPosRX.push(Math.round(eval("xR"+i)));
		dropMajorPosRY.push(Math.round(eval("yR"+i)));
		//console.log(dropMajorPosY[2]);
	}
	//alert(dropMajorPosY);
	//alert(dropMajorPosY);	


var letsGO;
$(document).ready(function() {	
$("#submitB").attr('disabled','disabled');
$("#submitB").css( 'cursor', 'default' );
$('#submitB').css('pointer-events','none');
$("#dragVisible").css("visibility","hidden");


 for(var i=0;i<=9;++i)
 {
	 for(var j=1;j<=2;++j)
     {
        $("#w"+i+j).css("visibility","hidden");
	    $("#a"+i+j).css("visibility","hidden");
	 } 
 }

letsGO = function()
{
	$("#dragVisible").css("visibility","visible");
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
	init();
	$(this).css("background-color","#C0C0C0");
	$(this).attr('disabled','disabled');
	$(this).css("cursor","default");
	$(this).css('pointer-events','none');
	
	for(var k=0;k<=9;++k)
    {
		$("#object"+k).attr('cursor','default');
		$("#objectR"+k).attr('cursor','default');
		$("#object"+k).attr('disabled','disabled');
		$("#objectR"+k).attr('disabled','disabled');
		$("#object"+k).css('pointer-events','none');
		$("#objectR"+k).css('pointer-events','none');
	}
	
	/////LHS/////    
    if((yD0==y0) || (yD1==y0) || (yD2==y0) || (yD3==y0))
    { $("#a01").css("visibility","visible");}
	else
	{ $("#w01").css("visibility","visible");}
	
	if((yD4==y1) || (yD5==y1) || (yD6==y1) || (yD7==y1) || (yD8==y1) || (yD9==y1))
    { $("#a11").css("visibility","visible");}
	else
	{ $("#w11").css("visibility","visible");}
	
	if((yD4==y2) || (yD5==y2) || (yD6==y2) || (yD7==y2) || (yD8==y2) || (yD9==y2))
    { $("#a21").css("visibility","visible");}
	else
	{ $("#w21").css("visibility","visible");}
	
	if((yD0==y3) || (yD1==y3) || (yD2==y3) || (yD3==y3))
    { $("#a31").css("visibility","visible");}
	else
	{ $("#w31").css("visibility","visible");}
	
	if((yD4==y4) || (yD5==y4) || (yD6==y4) || (yD7==y4) || (yD8==y4) || (yD9==y4))
    { $("#a41").css("visibility","visible");}
	else
	{ $("#w41").css("visibility","visible");}
	
	if((yD4==y5) || (yD5==y5) || (yD6==y5) || (yD7==y5) || (yD8==y5) || (yD9==y5))
    { $("#a51").css("visibility","visible");}
	else
	{ $("#w51").css("visibility","visible");}
		
	if((yD0==y6) || (yD1==y6) || (yD2==y6) || (yD3==y6))
    { $("#a61").css("visibility","visible");}
	else
	{ $("#w61").css("visibility","visible");}
	
	if((yD0==y7) || (yD1==y7) || (yD2==y7) || (yD3==y7))
    { $("#a71").css("visibility","visible");}
	else
	{ $("#w71").css("visibility","visible");}
	
	if((yD4==y8) || (yD5==y8) || (yD6==y8) || (yD7==y8) || (yD8==y8) || (yD9==y8))
    { $("#a81").css("visibility","visible");}
	else
	{ $("#w81").css("visibility","visible");}
	
	if((yD4==y9) || (yD5==y9) || (yD6==y9) || (yD7==y9) || (yD8==y9) || (yD9==y9))
    { $("#a91").css("visibility","visible");}
	else
	{ $("#w91").css("visibility","visible");}
	
	
	
	/////RHS/////
	if((yDR0==yR0) || (yDR1==yR0) || (yDR2==yR0) || (yDR3==yR0))
    { $("#a02").css("visibility","visible");}
	else
	{ $("#w02").css("visibility","visible");}
	
	if((yDR0==yR1) || (yDR1==yR1) || (yDR2==yR1) || (yDR3==yR1))
    { $("#a12").css("visibility","visible");}
	else
	{ $("#w12").css("visibility","visible");}
	
	if((yDR6==yR2) || (yDR7==yR2) || (yDR8==yR2) || (yDR9==yR2))
    { $("#a22").css("visibility","visible");}
	else
	{ $("#w22").css("visibility","visible");}
	
	if((yDR0==yR3) || (yDR1==yR3) || (yDR2==yR3) || (yDR3==yR3))
    { $("#a32").css("visibility","visible");}
	else
	{ $("#w32").css("visibility","visible");}
	
	if((yDR4==yR4) || (yDR5==yR4))
    { $("#a42").css("visibility","visible");}
	else
	{ $("#w42").css("visibility","visible");}
	
	if((yDR6==yR5) || (yDR7==yR5) || (yDR8==yR5) || (yDR9==yR5))
    { $("#a52").css("visibility","visible");}
	else
	{ $("#w52").css("visibility","visible");}
	
	if((yDR4==yR6) || (yDR5==yR6))
    { $("#a62").css("visibility","visible");}
	else
	{ $("#w62").css("visibility","visible");}
	
	if((yDR0==yR7) || (yDR1==yR7) || (yDR2==yR7) || (yDR3==yR7))
    { $("#a72").css("visibility","visible");}
	else
	{ $("#w72").css("visibility","visible");}
	
	if((yDR6==yR8) || (yDR7==yR8) || (yDR8==yR8) || (yDR9==yR8))
    { $("#a82").css("visibility","visible");}
	else
	{ $("#w82").css("visibility","visible");}
	
	if((yDR6==yR9) || (yDR7==yR9) || (yDR8==yR9) || (yDR9==yR9))
    { $("#a92").css("visibility","visible");}
	else
	{ $("#w92").css("visibility","visible");}
	
})


submitEnable = function()
{
	if(leftdrop && rightdrop == true)
	{
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $("#submitB").css("color", "#000000"); 
		 $("#submitB").css("background-color", "#FFE600"); 
		 $('#submitB').css('pointer-events','auto');
	}
	else
	{
		 $("#submitB").attr('disabled','disabled');
		 $("#submitB").css( 'cursor', 'default' ); 
		 $("#submitB").css("color", "#FFFFFF"); 
		 $("#submitB").css("background-color", "#424242"); 
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
	for(var j=0;j<=9;++j)
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
			if(count>=10)
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


calculateR = function()
{
	countR=0;
	this["prevbtnArrayR"+dragItemR].push(draggedObject);
	potR1=this["prevbtnArrayR"+dragItemR];
	potR2=(potR1.length)-2;
	pointerR = potR1[potR2];
	$("#objectR"+pointerR).css({left:initPosRX[pointerR],top:initPosRY[pointerR]});
	for(var j=0;j<=9;++j)
	{
		//console.log(xinit+"x"+dropMajorPosX[j]+"XX"+yinit+"y"+dropMajorPosY[j]+"YY");
		if(xinitR==dropMajorPosRX[j] && yinitR==dropMajorPosRY[j])
		{
				this["prevbtnArrayR"+j] = [];
		}
		if($("#objectR"+j).offset().top!=initPosRY[j])
		{
			countR++;
			if(countR>=10)
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
	for(var i=0;i<=9;++i)
	{
		document.getElementById("drop"+i).style.zIndex = zAxis;
		document.getElementById("dropR"+i).style.zIndex = zAxis;
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

function drag_startR(event){
	leftDrag=false;
	rightDrag=true;
	event.dataTransfer.dropEffect = "move";
	event.dataTransfer.setData("text",event.target.getAttribute('id'));
	
	objectTR=event.dataTransfer.getData("text");
	elementTR = document.getElementById(objectTR);
	positionTR = elementTR.getBoundingClientRect();
	xRT = Math.round(positionTR.left);
	yRT = Math.round(positionTR.top);
	xinitR = Math.round(positionTR.left);
	yinitR = Math.round(positionTR.top);
	zAxis++;
	//console.log(yT);
	for(var i=0;i<=9;++i)
	{
		document.getElementById("drop"+i).style.zIndex = zAxis;
		document.getElementById("dropR"+i).style.zIndex = zAxis;
	}
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
    for(var i=0;i<=9;++i)
	{
	 document.getElementById("drop"+i).style.zIndex = tempZindex;
	 document.getElementById("dropR"+i).style.zIndex = tempZindex;
	}	
}

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
					document.getElementById(elem_id).style.top = y0+"px";
					document.getElementById(elem_id).style.left = x0+"px";
					dragItem=0;
					calculate();
					
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
					calculate();
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
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(6);
					document.getElementById(elem_id).style.top = y6+"px";
					document.getElementById(elem_id).style.left = x6+"px";
					dragItem=6;
					calculate();
		}
		else if((event.target.getAttribute('id') == "drop7"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(6);
					document.getElementById(elem_id).style.top = y7+"px";
					document.getElementById(elem_id).style.left = x7+"px";
					dragItem=7;
					calculate();
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


///////////Right Hand Side Script/////////////
function drag_dropR(event){
	event.preventDefault();
	
	if(rightDrag)
	{
		if((event.target.getAttribute('id') == "dropR0"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(7);
					document.getElementById(elem_id).style.top = yR0+"px";
					document.getElementById(elem_id).style.left = xR0+"px";
					//alert(draggedObject);
					dragItemR=0;
					calculateR();
				
					
		}
		else if((event.target.getAttribute('id') == "dropR1"))
		{
					elem_id= event.dataTransfer.getData("text");
					//event.target.appendChild(_(elem_id));
					draggedObject=elem_id.slice(7);
					//alert(draggedObject);
					document.getElementById(elem_id).style.top = yR1+"px";
					document.getElementById(elem_id).style.left = xR1+"px";
					dragItemR=1;
					calculateR();
					
		}
		else if((event.target.getAttribute('id') == "dropR2"))
		{
					elem_id= event.dataTransfer.getData("text");
					//event.target.appendChild(_(elem_id));
					draggedObject=elem_id.slice(7);
					document.getElementById(elem_id).style.top = yR2+"px";
					document.getElementById(elem_id).style.left = xR2+"px";
					dragItemR=2;
					calculateR();
		}
		else if((event.target.getAttribute('id') == "dropR3"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(7);
					document.getElementById(elem_id).style.top = yR3+"px";
					document.getElementById(elem_id).style.left = xR3+"px";
					dragItemR=3;
					calculateR();
		}
		else if((event.target.getAttribute('id') == "dropR4"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(7);
					document.getElementById(elem_id).style.top = yR4+"px";
					document.getElementById(elem_id).style.left = xR4+"px";
					dragItemR=4;
					calculateR();
		}
		else if((event.target.getAttribute('id') == "dropR5"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(7);
					document.getElementById(elem_id).style.top = yR5+"px";
					document.getElementById(elem_id).style.left = xR5+"px";
					dragItemR=5;
					calculateR();
		}
		else if((event.target.getAttribute('id') == "dropR6"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(7);
					document.getElementById(elem_id).style.top = yR6+"px";
					document.getElementById(elem_id).style.left = xR6+"px";
					dragItemR=6;
					calculateR();
		}
		else if((event.target.getAttribute('id') == "dropR7"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(7);
					document.getElementById(elem_id).style.top = yR7+"px";
					document.getElementById(elem_id).style.left = xR7+"px";
					dragItemR=7;
					calculateR();
		}
		else if((event.target.getAttribute('id') == "dropR8"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(7);
					document.getElementById(elem_id).style.top = yR8+"px";
					document.getElementById(elem_id).style.left = xR8+"px";
					dragItemR=8;
					calculateR();
		}
		else if((event.target.getAttribute('id') == "dropR9"))
		{
					elem_id= event.dataTransfer.getData("text");
					draggedObject=elem_id.slice(7);
					document.getElementById(elem_id).style.top = yR9+"px";
					document.getElementById(elem_id).style.left = xR9+"px";
					dragItemR=9;
					calculateR();
		}
		else
		{
					goBack();
		}
	}
}













