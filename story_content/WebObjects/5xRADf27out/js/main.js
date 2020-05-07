//////////////////////// Level 1 Page Script//////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////Storyline Code/////////
var player = window.parent.GetPlayer();	
var revisit = false;
revisit = player.GetVar("attempt21");
///////////////////////////////

var bucketC1=0;
var countB1=0;
var dropArrayX1= new Array();
var dropArrayY1= new Array();
var dropObject1= new Array();
var bucketCS1=0;
var countBS1=0;
var dropArraySX1= new Array();
var dropArraySY1= new Array();
var dropObjectS1= new Array();
var bucketCT1=0;
var countBT1=0;
var dropArrayTX1= new Array();
var dropArrayTY1= new Array();
var dropObjectT1= new Array();
var bucketCF1=0;
var countBF1=0;
var dropArrayFX1= new Array();
var dropArrayFY1= new Array();
var dropObjectF1= new Array();


var bucketC2=0;
var countB2=0;
var dropArrayX2= new Array();
var dropArrayY2= new Array();
var dropObject2= new Array();
var bucketCS2=0;
var countBS2=0;
var dropArraySX2= new Array();
var dropArraySY2= new Array();
var dropObjectS2= new Array();
var bucketCT2=0;
var countBT2=0;
var dropArrayTX2= new Array();
var dropArrayTY2= new Array();
var dropObjectT2= new Array();
var bucketCF2=0;
var countBF2=0;
var dropArrayFX2= new Array();
var dropArrayFY2= new Array();
var dropObjectF2= new Array();


var bucketC3=0;
var countB3=0;
var dropArrayX3= new Array();
var dropArrayY3= new Array();
var dropObject3= new Array();
var bucketCS3=0;
var countBS3=0;
var dropArraySX3= new Array();
var dropArraySY3= new Array();
var dropObjectS3= new Array();
var bucketCT3=0;
var countBT3=0;
var dropArrayTX3= new Array();
var dropArrayTY3= new Array();
var dropObjectT3= new Array();
var bucketCF3=0;
var countBF3=0;
var dropArrayFX3= new Array();
var dropArrayFY3= new Array();
var dropObjectF3= new Array();



var bucketC4=0;
var countB4=0;
var dropArrayX4= new Array();
var dropArrayY4= new Array();
var dropObject4= new Array();
var bucketCS4=0;
var countBS4=0;
var dropArraySX4= new Array();
var dropArraySY4= new Array();
var dropObjectS4= new Array();
var bucketCT4=0;
var countBT4=0;
var dropArrayTX4= new Array();
var dropArrayTY4= new Array();
var dropObjectT4= new Array();
var bucketCF4=0;
var countBF4=0;
var dropArrayFX4= new Array();
var dropArrayFY4= new Array();
var dropObjectF4= new Array();

var bucketCF5=0;
var countBF5=0;
var dropArrayFX5= new Array();
var dropArrayFY5= new Array();
var dropObjectF5= new Array();
var bucketCF6=0;
var countBF6=0;
var dropArrayFX6= new Array();
var dropArrayFY6= new Array();
var dropObjectF6= new Array();
var bucketCF7=0;
var countBF7=0;
var dropArrayFX7= new Array();
var dropArrayFY7= new Array();
var dropObjectF7= new Array();



var xT;
var yT;
var percentageA=0;
var percentageSA=0;
var percentageTA=0;
var percentageFA=0;
var percentageB=0;
var percentageSB=0;
var percentageTB=0;
var percentageFB=0;
var percentageC=0;
var percentageSC=0;
var percentageTC=0;
var percentageFC=0;
var percentageD=0;
var percentageSD=0;
var percentageTD=0;
var percentageFD=0;
var percentageFE=0;
var percentageFF=0;
var percentageFG=0;
var objectT;
var elementT;
var positionT;
var jqueryFunctionA;
var jqueryFunctionSA;
var jqueryFunctionTA;
var jqueryFunctionFA;
var jqueryFunctionB;
var jqueryFunctionSB;
var jqueryFunctionTB;
var jqueryFunctionFB;
var jqueryFunctionC;
var jqueryFunctionSC;
var jqueryFunctionTC;
var jqueryFunctionFC;
var jqueryFunctionD;
var jqueryFunctionSD;
var jqueryFunctionTD;
var jqueryFunctionFD;
var droppedIn=false;
var droppedInS=false;
var droppedInT=false;
var droppedInF=false;
var elem_id;
var bucketDropCount1=0;
var bucketDropCountS1=0;
var bucketDropCountT1=0;
var bucketDropCountF1=0;
var bucketDropCount2=0;
var bucketDropCountS2=0;
var bucketDropCountT2=0;
var bucketDropCountF2=0;
var bucketDropCount3=0;
var bucketDropCountS3=0;
var bucketDropCountT3=0;
var bucketDropCountF3=0;
var bucketDropCount4=0;
var bucketDropCountS4=0;
var bucketDropCountT4=0;
var bucketDropCountF4=0;
var bucketDropCountF5=0;
var bucketDropCountF6=0;
var bucketDropCountF7=0;
var x1,x2,x3,x4,x5,x6,x7,x8;
var xS1,xS2,xS3,xS4,xS5,xS6,xS7,xS8;
var xT1,xT2,xT3,xT4,xT5,xT6,xT7,xT8;
var xF1,xF2,xF3,xF4,xF5,xF6,xF7,xF8;
var y1,y2,y3,y4,y5,y6,y7,y8;
var yS1,yS2,yS3,yS4,yS5,yS6,yS7,yS8;
var yT1,yT2,yT3,yT4,yT5,yT6,yT7,yT8;
var yF1,yF2,yF3,yF4,yF5,yF6,yF7,yF8;
var element1,element2,element3,element4,element5,element6,element7,element8;
var elementS1,elementS2,elementS3,elementS4,elementS5,elementS6,elementS7,elementS8;
var elementT1,elementT2,elementT3,elementT4,elementT5,elementT6,elementT7,elementT8;
var elementF1,elementF2,elementF3,elementF4,elementF5,elementF6,elementF7,elementF8;
var position1,position2,position3,position4,position5,position6,position7,position8;
var positionS1,positionS2,positionS3,positionS4,positionS5,positionS6,positionS7,positionS8;
var positionT1,positionT2,positionT3,positionT4,positionT5,positionT6,positionT7,positionT8;
var positionF1,positionF2,positionF3,positionF4,positionF5,positionF6,positionF7,positionF8;
var resetInitial;
var resetInitialS;
var resetInitialT;
var resetInitialF;

/////Level 1 Answers//////
var answerArray1 = new Array("11");
var answerArray2 = new Array("1", "2", "3", "4", "5", "6", "7", "8");
var answerArray3 = new Array("10");
var answerArray4 = new Array("1", "2", "3", "4", "5", "6", "7", "8");
var correctAnswerCount = 6;

/////Level 2 Answers//////
var answerArrayS1 = new Array("4","5","6","7","8","9","10","11");
var answerArrayS2 = new Array("1", "2", "3", "4", "5", "6", "7", "13");
var answerArrayS3 = new Array("1", "2", "3", "4", "5", "6", "7");
var answerArrayS4 = new Array("8","9","10","11");
var correctAnswerCountS = 8;

/////Level 3 Answers//////
var answerArrayT1 = new Array("1","2","3","4","5","6","7","8","9","10","11");
var answerArrayT2 = new Array("4","5","6","7","8","9","10","11","12","13");
var answerArrayT3 = new Array("8","9","10","11");
var answerArrayT4 = new Array("8","9","10","11");
var correctAnswerCountT = 8;

/////Level 4 Answers//////
var answerArrayF1 = new Array("4","5","6","7","8","11","12");
var answerArrayF2 = new Array("4","5","6","7","8","11","12","13","14","15");
var answerArrayF3 = new Array("4","5","6","7","8","13","14","15");
var answerArrayF4 = new Array("9","10");
var answerArrayF5 = new Array("1","2","3","9","10");
var answerArrayF6 = new Array("1","2","3","4","5","6","7","8");
var answerArrayF7 = new Array("1","2","3","4","5","6","7","8","13","14","15");
var correctAnswerCountF = 15;


var attempt=0;
var attemptS=0;
var attemptT=0;
var attemptF=0;

var dropClicked1=false;
var dropClicked2=false;
var dropClicked3=false;
var dropClicked4=false;

var dropClickedS1=false;
var dropClickedS2=false;
var dropClickedS3=false;
var dropClickedS4=false;

var dropClickedT1=false;
var dropClickedT2=false;
var dropClickedT3=false;
var dropClickedT4=false;

var dropClickedF1=false;
var dropClickedF2=false;
var dropClickedF3=false;
var dropClickedF4=false;
var dropClickedF5=false;
var dropClickedF6=false;
var dropClickedF7=false;

var reachedClickLevel=false;
var reachedClickLevelS=false;
var reachedClickLevelT=false;
var reachedClickLevelF=false;
var notCompletedTask=false;
var completedSlide=false;
var gameLevel=0;



$(document).ready(function() {	
$("#activityID").css("visibility","visible");
$("#activityID2").css("visibility","hidden");
$("#activityID3").css("visibility","hidden");
$("#activityID4").css("visibility","hidden");
$("#timeUpPop").css("visibility","hidden");
$("#popIncorrectDetail").css("visibility","hidden");
$("#popCorrectDetail").css("visibility","hidden");
$("#popIncorrectConfirm").css("visibility","hidden");
$("#popDetailCompleted").css("visibility","hidden");
$("#instructionLast").css("visibility","hidden");
$("#instructionFirst").css("visibility","hidden");

$("#popExit").css("visibility", "hidden");
$("#LogoRotator").css("visibility","hidden");
$("#dummyLoader").css("visibility","visible");
$("#belowPatch").css("visibility","visible");

$("#submitB").css("visibility","visible");
$("#submitB").attr('disabled','disabled');
$("#submitB").css( 'cursor', 'default' );
$('#submitB').css('pointer-events','none');

//document.getElementById('submitB').setAttribute("disabled","disabled");

$("#resetB").css("visibility","visible");
$("#resetB").attr('disabled','disabled');
$('#resetB').css('pointer-events','none');

$("#resetB").css( 'cursor', 'default' );
$("#closeBtn").css('cursor','pointer');
$("#nextB").css("visibility","visible");
$("#nextB").attr('disabled','disabled');
$("#nextB").css( 'cursor', 'default' );
$('#nextB').css('pointer-events','none');
//$("#LogoRotator").css("animation-play-state", "paused");

for(var i=1;i<=17;++i)
{
	 $("#object"+i).css("cursor","pointer");
	 $("#objectS"+i).css("cursor","pointer");
	 $("#objectT"+i).css("cursor","pointer");
	 $("#objectF"+i).css("cursor","pointer");
	 $("#patch"+i).css("visibility","hidden"); 
	 $("#patchS"+i).css("visibility","hidden");
	 $("#patchT"+i).css("visibility","hidden");
	 $("#patchF"+i).css("visibility","hidden");
}

$("#letsGo").click(function() {
   $("#popDetail").css("visibility","hidden");
   $("#activityID").css("visibility","visible");
   $("#activityID2").css("visibility","hidden");
   $("#activityID3").css("visibility","hidden");
   $("#activityID4").css("visibility","hidden");
   $("#LogoRotator").css("visibility","visible");
   $("#dummyLoader").css("visibility","hidden");
   $("#instructionFirst").css("visibility","visible");
   timerStart();
})

$("#continue").click(function() {
   $("#popIncorrectDetail").css("visibility","hidden");
   $("#submitB").css("background-color", "#808080");
})

$("#continueCorrect").click(function() {
   $("#popCorrectDetail").css("visibility","hidden");
   //$("#popDetailCompleted").css("visibility","visible");
   //$("#activityID").css("visibility","hidden");
   //$("#activityID2").css("visibility","visible");
   //alert(gameLevel+"gameLevel");
   if(gameLevel >= 3)
   {
	   $("#popDetailCompleted").css("visibility","visible");  
	   $("#instructionLast").css("visibility","visible");
	   $("#instructionFirst").css("visibility","hidden");
   }
   else
   {
	   $("#nextB").css("background-color", "#FFE600"); 
	   $("#nextB").removeAttr("disabled");
	   $("#nextB").css( 'cursor', 'pointer' );
	   $('#nextB').css('pointer-events','auto');
	   
       $('#submitB').css('pointer-events','none');
	   $("#submitB").css("background-color", "#808080");
	   $("#resetB").css("background-color", "#808080");
	   $('#resetB').css('pointer-events','none');
	   for(var i=1;i<=13;++i)
	   {
			$("#object"+i).css( 'cursor', 'default' );
			$("#object"+i).attr('disabled','disabled');	
	   }
   }
})

$("#continueWrong").click(function() {
   $("#popIncorrectConfirm").css("visibility","hidden");
   $("#submitB").css("background-color", "#808080"); 
})

/*
$("#resetB").hover(function() {
   $(this).css("background-color", "#FFE600"); 
   $(this).css("cursor","pointer");
   $(this).css("color","#333");
}, function() {
  $(this).css("background-color", "#FFE600");
  $(this).css("color","#333");

});*/



$("#resetB").click(function(){
	$(this).css("color","#808080");
	
	
	if(gameLevel==0)
	{
	    resetInitial();
		
	}
	else if(gameLevel==1)
	{
		resetInitialS();
	}
	else if(gameLevel==2)
	{
		resetInitialT();
	}
	else
	{
		resetInitialF();
	}
})



$("#submitB").hover(function() {
   $(this).css("background-color", "#FFE600"); 
   $(this).css("cursor","pointer");
   $(this).css("color","#333");
}, function() {
  $(this).css("background-color", "#FFE600");
  $(this).css("color","#333");
});



$("#submitB").click(function(){
	$(this).css("color","#808080");
	
    
	if(gameLevel==0)
	{
		calculate();
	}
	else if(gameLevel==1)
	{
		calculateS();
	}
	else if(gameLevel==2)
	{
		calculateT();
	}
	else
	{
	    calculateF();	
	}
	
	
})
/*
$("#nextB").hover(function() {
   $(this).css("background-color", "#424242"); 
   $(this).css("cursor","pointer");
   $(this).css("color","#FFF");
})

$("#nextB").mouseout(function() {
  $(this).css("background-color", "#FFE600");
  $(this).css("color","#333");
})*/

$("#nextB").click(function(){
	$(this).css("color","#000");
	$("#submitB").css("background-color", "#808080");
	$('#submitB').css('pointer-events','none'); 
	//alert('next clicked');
	
	$("#nextB").css("visibility","visible");
    $("#nextB").attr('disabled','disabled');
    $("#nextB").css( 'cursor', 'default' );
	$('#nextB').css('pointer-events','none');
	$("#nextB").css("background-color", "#808080");
	
	$("#resetB").css("background-color", "#808080"); 
	$('#resetB').css('pointer-events','none');
	
	if(gameLevel==0)
	{
	    $("#activityID").css("visibility","hidden");
        $("#activityID2").css("visibility","visible");
		loadNextLevel();
	}
	else if(gameLevel==1)
	{
		 $("#activityID2").css("visibility","hidden");
		 $("#activityID3").css("visibility","visible");
		 loadNextLevelT();
		 for(var i=1;i<=5;++i)
		{
		 $("#patchS"+i).css("visibility","hidden"); 
		}
	}
	else
	{
		 $("#activityID3").css("visibility","hidden");
		 $("#activityID4").css("visibility","visible");
		 loadNextLevelF();
		 for(var i=1;i<=5;++i)
		 {
		   $("#patchT"+i).css("visibility","hidden"); 
		 }
	}
	
	for(var i=1;i<=13;++i)
    {
	 $("#object"+i).css("visibility","hidden");
	 $("#patch"+i).css("visibility","hidden"); 
    }

	
})

$("#closeBtn").click(function(){
	revisit = player.GetVar("attempt21");
	if(revisit)
	{
		player.SetVar("exit21","true");
	}
	else
	{
		$("#popExit").css("visibility", "visible");	
		notCompletedTask=true;
		$("#LogoRotator").css("visibility","hidden");
		$("#dummyLoader").css("visibility","visible");
	}
})


$("#NoExit").click(function(){
	
	$("#popExit").css("visibility", "hidden");
	notCompletedTask=false;
	$("#LogoRotator").css("visibility","visible");
    $("#dummyLoader").css("visibility","hidden");
	
})

$("#yesExit").click(function(){
	
	player.SetVar("Task21","true");
	player.SetVar("exit21","true");
	//player.SetVar("test_011","true");
	
})





////God is Great////
$("#drop1").click(function(){
	if(reachedClickLevel==true)
	{
		 resetPopup();
		 $("#patch1").css("visibility", "visible");
		 dropClicked1=true;
		 finalResult();
	}
})

$("#drop2").click(function(){
	if(reachedClickLevel==true)
	{
		 resetPopup();
		 $("#patch2").css("visibility", "visible");
		 dropClicked2=true;
		 finalResult();
	}
})

$("#drop3").click(function(){
	if(reachedClickLevel==true)
	{
		 resetPopup();
		 $("#patch3").css("visibility", "visible");
		 dropClicked3=true;
		 finalResult();
	}
})

$("#drop4").click(function(){
	if(reachedClickLevel==true)
	{
		 resetPopup();
		 $("#patch4").css("visibility", "visible");
		 dropClicked4=true;
		 finalResult();
	}
})


function finalResult()
{
	if(dropClicked1 && dropClicked2 && dropClicked3 && dropClicked4 == true)
	{
		//notCompletedTask=true;
		 $("#nextB").css("background-color", "#FFE600"); 
         $("#nextB").removeAttr("disabled");
         $("#nextB").css( 'cursor', 'pointer' );
		 $('#nextB').css('pointer-events','auto');
		//$("#popDetailCompleted").css("visibility","visible");

		//$("#LogoRotator").css("visibility","hidden");
       // $("#dummyLoader").css("visibility","visible");
		//saveName();
	}
}

function resetPopup()
{
	for(var i=1;i<=4;++i)
	{
		$("#patch"+i).css("visibility", "hidden");
	}
}


function calculate()
{
	     $("#submitB").css("background-color", "#333333"); 
		 $("#resetB").css("background-color", "#333333"); 
		 $("#resetB").attr('disabled','disabled');
		 $("#submitB").attr('disabled','disabled');
		 $("#submitB").css( 'cursor', 'default' ); 
		 $("#resetB").css( 'cursor', 'default' );
		 
	
	finalCount=0;
	bowl1=0; bowl2=0; bowl3=0; bowl4=0; 
	 for (var i = 0; i < answerArray1.length; ++i)
	    {
			for (var j = 0; j < answerArray1.length; ++j)
			{
				if (dropObject1[j] == answerArray1[i])
				{
					
					bowl1++;
				}
			}
		}
		
	for (var i = 0; i < answerArray2.length; ++i)
	    {
			for (var j = 0; j < answerArray2.length; ++j)
			{
				if (dropObject2[j] == answerArray2[i])
				{
					bowl2++;
				}
			}
		}
		
	for (var i = 0; i < answerArray3.length; ++i)
	    {
			for (var j = 0; j < answerArray3.length; ++j)
			{
				if (dropObject3[j] == answerArray3[i])
				{
					bowl3++;
				}
			}
		}
		
	for (var i = 0; i < answerArray4.length; ++i)
	    {
			for (var j = 0; j < answerArray4.length; ++j)
			{
				if (dropObject4[j] == answerArray4[i])
				{
					bowl4++;
				}
			}
		}
		
	finalCount = bowl1 + bowl2 + bowl3 + bowl4;
	droppedCount = dropObject1.length + dropObject2.length + dropObject3.length + dropObject4.length;
	if( (finalCount == correctAnswerCount) && (finalCount == droppedCount) )
	{
		$("#popCorrectDetail").css("visibility", "visible");
		       for(var i=1;i<=13;++i)
				{
				  $("#object"+i).css( 'cursor', 'default' );
				  $("#object"+i).attr('disabled','disabled');
				  $("#object"+i).css('pointer-events','none');	
				  
				}
		//notCompletedTask=true;
		//$("#LogoRotator").css("visibility","hidden");
        //$("#dummyLoader").css("visibility","visible");
		//saveName();
	}
	else
	{
    	attempt++;
		//alert(finalCount);
		if(attempt==1)
		{
		  $("#popIncorrectDetail").css("visibility","visible");
		  resetInitial();
		}
		else
		{
		     $("#submitB").css("background-color", "#808080"); 
			 $('#submitB').css('pointer-events','none');
			 $("#resetB").css("background-color", "#808080");
			 $('#resetB').css('pointer-events','none'); 
			 $("#resetB").css("color", "#000"); 
			 $("#submitB").css("color", "#000"); 
			 $("#resetB").attr('disabled','disabled');
			 $("#submitB").attr('disabled','disabled');
			 $("#submitB").css( 'cursor', 'default' ); 
			 $("#resetB").css( 'cursor', 'default' );
			 $("#popIncorrectConfirm").css("visibility", "visible");
			 
			
	 
			 
			   for(var i=1;i<=13;++i)
				{
				  $("#object"+i).css( 'cursor', 'default' );
				  $("#object"+i).attr('disabled','disabled');
				  $("#object"+i).css('pointer-events','none');	
				  //document.getElementById("object"+i).draggable = false;
				  $("#drop"+i).css("cursor","pointer");
				}
			   reachedClickLevel=true;
		}
	}
}


resetInitial = function()
{
	bucketDropCount1=0;
	bucketDropCount2=0;
	bucketDropCount3=0;
	bucketDropCount4=0;

    lastfun();
		 
	 
	$("#resetB").attr('disabled','disabled');
	$("#submitB").attr('disabled','disabled');
	$("#submitB").css( 'cursor', 'default' ); 
	$("#resetB").css( 'cursor', 'default' );
	$("#submitB").css("color","#333");
	$("#resetB").css("color","#333");
	$('#resetB').css('pointer-events','none');
    $('#submitB').css('pointer-events','none');
	$("#submitB").css("background-color", "#808080"); 
    $("#resetB").css("background-color", "#808080");
	
		 
	percentageA=0;
	percentageB=0;
    percentageC=0;
    percentageD=0;
		
	bucketDropCount1=0;
	bucketDropCount2=0;
	bucketDropCount3=0;
	bucketDropCount4=0;

		
	dropArrayX1= [];
	dropArrayY1= [];
	dropArrayX2= [];
	dropArrayY2= [];
	dropArrayX3= [];
	dropArrayY3= [];
	dropArrayX4= [];
	dropArrayY4= [];
    dropObject1= [];
	dropObject2= [];
	dropObject3= [];
	dropObject4= [];
	
		
	bucketC1=0;
    countB1=0;
	bucketC2=0;
    countB2=0;
	bucketC3=0;
    countB3=0;
	bucketC4=0;
    countB4=0;
	
	for(var i=1;i<=11;++i)
	{
	document.getElementById("object"+i).style.disabled = false;
	document.getElementById("object"+i).disabled = false;
	document.getElementById("object"+i).style.cursor = "pointer";
	document.getElementById("object"+i).draggable = true;
	}
	
}


jqueryFunctionA = function()
{
		
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $('#resetB').css('pointer-events','auto');
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").removeAttr("disabled");
		 $('#submitB').css('pointer-events','auto');
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $("#sT1"+bucketDropCount1).css("visibility", "visible");
		 $("#HsT1"+((bucketDropCount1)-1)).css("visibility", "visible");
		  
		if((xT == x1)&&(yT == y1))
		{
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{	
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}
		else if((xT == x5)&&(yT == y5))
		{	
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}	
}	



jqueryFunctionB = function()
{
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 $("#sT2"+bucketDropCount2).css("visibility", "visible");
		 $("#HsT2"+((bucketDropCount2)-1)).css("visibility", "visible");
		 
		if((xT == x1)&&(yT == y1))
		{
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{	
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{	
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		else if((xT == x5)&&(yT == y5))
		{
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		
}


jqueryFunctionC = function()
{
		
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 $("#sT3"+bucketDropCount3).css("visibility", "visible");
		 $("#HsT3"+((bucketDropCount3)-1)).css("visibility", "visible");
		 
		if((xT == x1)&&(yT == y1))
		{
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
		else if((xT == x5)&&(yT == y5))
		{	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
}

	
jqueryFunctionD = function()
{
		
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 $("#sT4"+bucketDropCount4).css("visibility", "visible");
		 $("#HsT4"+((bucketDropCount4)-1)).css("visibility", "visible");
		 
		if((xT == x1)&&(yT == y1))
		{
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{	
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{	
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}
		else if((xT == x5)&&(yT == y5))
		{
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}
}

})



lastfun = function()
{
        for(var i=1;i<=4;++i)
	     {
			document.getElementById("object"+i).style.top = y1+"px";
			document.getElementById("object"+i).style.left = x1+"px";
		 } 
		 
		 for(var i=5;i<=8;++i)
	     {
			document.getElementById("object"+i).style.top = y2+"px";
			document.getElementById("object"+i).style.left = x2+"px";
		 } 
		 document.getElementById("object9").style.top = y3+"px";
		 document.getElementById("object9").style.left = x3+"px";
		 document.getElementById("object10").style.top = y4+"px";
		 document.getElementById("object10").style.left = x4+"px";
		 document.getElementById("object11").style.top = y5+"px";
		 document.getElementById("object11").style.left = x5+"px";
		
		 $('#resetB').css("background-color", "#FFE600");
}


function _(id){
	    return document.getElementById(id);
}

function drag_start(event){
	event.dataTransfer.dropEffect = "move";
	event.dataTransfer.setData("text",event.target.getAttribute('id'));
	objectT=event.dataTransfer.getData("text");
	elementT = document.getElementById(objectT);
	positionT = elementT.getBoundingClientRect();
	xT = positionT.left;
	yT = positionT.top;
	
	element1 = document.getElementById('waterMark1');
	position1 = element1.getBoundingClientRect();
	x1 = position1.left;
    y1 = position1.top;
	
	element2 = document.getElementById('waterMark2');
	position2 = element2.getBoundingClientRect();
	x2 = position2.left;
    y2 = position2.top;
	
	element3 = document.getElementById('waterMark3');
	position3 = element3.getBoundingClientRect();
	x3 = position3.left;
    y3 = position3.top;
	
	element4 = document.getElementById('waterMark4');
	position4 = element4.getBoundingClientRect();
	x4 = position4.left;
    y4 = position4.top;
	
	element5 = document.getElementById('waterMark5');
	position5 = element5.getBoundingClientRect();
	x5 = position5.left;
    y5 = position5.top;
	
	
	dropE1 = document.getElementById('drop1');
	dropPos1 = dropE1.getBoundingClientRect();
	dx1 = dropPos1.left;
    dy1 = dropPos1.top;
	
	dropE2 = document.getElementById('drop2');
	dropPos2 = dropE2.getBoundingClientRect();
	dx2 = dropPos2.left;
    dy2 = dropPos2.top;
	
	dropE3 = document.getElementById('drop3');
	dropPos3 = dropE3.getBoundingClientRect();
	dx3 = dropPos3.left;
    dy3 = dropPos3.top;
	
	dropE4 = document.getElementById('drop4');
	dropPos4 = dropE4.getBoundingClientRect();
	dx4 = dropPos4.left;
    dy4 = dropPos4.top;
	
}

function drag_enter(event){
	//_('app_status').innerHTML = "You are dragging over the  "+ event.target.getAttribute('id');
}
	
function drag_leave(event){
	//_('app_status').innerHTML = "You left the"+ event.target.getAttribute('id');
}

function drag_end(event){
	droppedIn=false;
}

function drag_drop(event){
	event.preventDefault();
	console.log(event.target.getAttribute('id'));
	if(event.target.getAttribute('id') == "drop1")
	{
	    bucketC1++;
		countB1=0;
		
		if(bucketC1>5)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayX1.length-1;++i)
			{
               if((xT==dropArrayX1[i])&&(yT==dropArrayY1[i]))
				{
					countB1++;	
				}
			}
			if(countB1==0)
			{
				elem_id= event.dataTransfer.getData("text");
	            draggedObject=elem_id.slice(6);
				dropObject1.push(draggedObject);
				bucketDropCount1++;
				percentageA=percentageA+3;
				if(bucketC1==1)
				{
					dy1=dy1+60;
					dx1=dx1+27;
				}
				else if(bucketC1==2)
				{
					dy1=dy1+32;
					dx1=dx1-5;
				}
				else if(bucketC1==3)
				{
					dy1=dy1+32;
					dx1=dx1+60;
				}
				else if(bucketC1==4)
				{
					dy1=dy1+2;
					dx1=dx1+28;
				}
				else if(bucketC1==5)
				{
					dy1=dy1-32;
					dx1=dx1+52;
				}
				document.getElementById(elem_id).style.top = dy1+"px";
				document.getElementById(elem_id).style.left = dx1+"px";
				disableButton();
				jqueryFunctionA();	
			}
			else{
				bucketC1--;
			}
		}
	}
	else if(event.target.getAttribute('id') == "drop2")
	{
	    bucketC2++;
		countB2=0;
		if(bucketC2>5)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayX2.length-1;++i)
			{
               if((xT==dropArrayX2[i])&&(yT==dropArrayY2[i]))
				{
					countB2++;	
				}
			}
			if(countB2==0)
			{
				elem_id= event.dataTransfer.getData("text");
	            draggedObject=elem_id.slice(6);
				dropObject2.push(draggedObject);
				bucketDropCount2++;
				percentageB=percentageB+3;
				if(bucketC2==1)
				{
					dy2=dy2+60;
					dx2=dx2+27;
				}
				else if(bucketC2==2)
				{
					dy2=dy2+32;
					dx2=dx2-5;
				}
				else if(bucketC2==3)
				{
					dy2=dy2+32;
					dx2=dx2+60;
				}
				else if(bucketC2==4)
				{
					dy2=dy2+2;
					dx2=dx2+28;
				}
				else if(bucketC2==5)
				{
					dy2=dy2-32;
					dx2=dx2+52;
				}
				document.getElementById(elem_id).style.top = dy2+"px";
				document.getElementById(elem_id).style.left = dx2+"px";
				disableButton();
				jqueryFunctionB();	
			}
			else{
				bucketC2--;
			}
		}
	}
	else if(event.target.getAttribute('id') == "drop3")
	{
	    bucketC3++;
		countB3=0;
		if(bucketC3>5)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayX3.length-1;++i)
			{
               if((xT==dropArrayX3[i])&&(yT==dropArrayY3[i]))
				{
					countB3++;	
				}
			}
			if(countB3==0)
			{
				elem_id= event.dataTransfer.getData("text");
	            draggedObject=elem_id.slice(6);
				dropObject3.push(draggedObject);
				bucketDropCount3++;
				percentageC=percentageC+3;
				if(bucketC3==1)
				{
					dy3=dy3+60;
					dx3=dx3+27;
				}
				else if(bucketC3==2)
				{
					dy3=dy3+32;
					dx3=dx3-5;
				}
				else if(bucketC3==3)
				{
					dy3=dy3+32;
					dx3=dx3+60;
				}
				else if(bucketC3==4)
				{
					dy3=dy3+2;
					dx3=dx3+28;
				}
				else if(bucketC3==5)
				{
					dy3=dy3-32;
					dx3=dx3+52;
				}
				document.getElementById(elem_id).style.top = dy3+"px";
				document.getElementById(elem_id).style.left = dx3+"px";
				disableButton();
				jqueryFunctionC();	
			}
			else{
				bucketC3--;
			}
		}
	}
	
	else if(event.target.getAttribute('id') == "drop4")
	{
	    bucketC4++;
		countB4=0;
		if(bucketC4>5)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayX4.length-1;++i)
			{
               if((xT==dropArrayX4[i])&&(yT==dropArrayY4[i]))
				{
					countB4++;	
				}
			}
			if(countB4==0)
			{
				elem_id= event.dataTransfer.getData("text");
	            draggedObject=elem_id.slice(6);
				dropObject4.push(draggedObject);
				bucketDropCount4++;
				percentageD=percentageD+3;
				if(bucketC4==1)
				{
					dy4=dy4+60;
					dx4=dx4+27;
				}
				else if(bucketC4==2)
				{
					dy4=dy4+32;
					dx4=dx4-5;
				}
				else if(bucketC4==3)
				{
					dy4=dy4+32;
					dx4=dx4+60;
				}
				else if(bucketC4==4)
				{
					dy4=dy4+2;
					dx4=dx4+28;
				}
				else if(bucketC4==5)
				{
					dy4=dy4-32;
					dx4=dx4+52;
				}
				document.getElementById(elem_id).style.top = dy4+"px";
				document.getElementById(elem_id).style.left = dx4+"px";
				disableButton();
				jqueryFunctionD();	
			}
			else{
				bucketC4--;
			}
		}
	}
	
	droppedIn=true;
}


function disableButton(event)
{
	//alert();
	document.getElementById(elem_id).style.disabled = true;
	document.getElementById(elem_id).disabled = true;
	document.getElementById(elem_id).style.cursor = "default";
	document.getElementById(elem_id).draggable = false;
}

function disableButtonS(event)
{
	document.getElementById(elem_idS).style.disabled = true;
	document.getElementById(elem_idS).disabled = true;
	document.getElementById(elem_idS).style.cursor = "default";
	document.getElementById(elem_idS).draggable = false;
}

function disableButtonT(event)
{
	document.getElementById(elem_idT).style.disabled = true;
	document.getElementById(elem_idT).disabled = true;
	document.getElementById(elem_idT).style.cursor = "default";
	document.getElementById(elem_idT).draggable = false;
}

function disableButtonF(event)
{
	document.getElementById(elem_idF).style.disabled = true;
	document.getElementById(elem_idF).disabled = true;
	document.getElementById(elem_idF).style.cursor = "default";
	document.getElementById(elem_idF).draggable = false;
}





///////////////////////////////////////////////////////////////////////////////////////
//////////////////////// Level 2 Page Script//////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

function loadNextLevel()
{
	gameLevel++;
	document.getElementById("pageHeading").innerHTML = "Trade Payables";
	
}

function drag_startS(event){
	event.dataTransfer.dropEffect = "move";
	event.dataTransfer.setData("text",event.target.getAttribute('id'));
	objectTS=event.dataTransfer.getData("text");
	elementTS = document.getElementById(objectTS);
	positionTS = elementTS.getBoundingClientRect();
	xTS = positionTS.left;
	yTS = positionTS.top;
	
	elementS1 = document.getElementById('waterMarkS1');
	positionS1 = elementS1.getBoundingClientRect();
	xS1 = positionS1.left;
    yS1 = positionS1.top;
	console.log(yS1 +"yS1" + xS1 +"xS1");
	
	elementS2 = document.getElementById('waterMarkS2');
	positionS2 = elementS2.getBoundingClientRect();
	xS2 = positionS2.left;
    yS2 = positionS2.top;
	
	elementS3 = document.getElementById('waterMarkS3');
	positionS3 = elementS3.getBoundingClientRect();
	xS3 = positionS3.left;
    yS3 = positionS3.top;
	
	elementS4 = document.getElementById('waterMarkS4');
	positionS4 = elementS4.getBoundingClientRect();
	xS4 = positionS4.left;
    yS4 = positionS4.top;
	
	elementS5 = document.getElementById('waterMarkS5');
	positionS5 = elementS5.getBoundingClientRect();
	xS5 = positionS5.left;
    yS5 = positionS5.top;
	
	dropES1 = document.getElementById('dropS1');
	dropPosS1 = dropES1.getBoundingClientRect();
	dxS1 = dropPosS1.left;
    dyS1 = dropPosS1.top;
	
	dropES2 = document.getElementById('dropS2');
	dropPosS2 = dropES2.getBoundingClientRect();
	dxS2 = dropPosS2.left;
    dyS2 = dropPosS2.top;
	
	dropES3 = document.getElementById('dropS3');
	dropPosS3 = dropES3.getBoundingClientRect();
	dxS3 = dropPosS3.left;
    dyS3 = dropPosS3.top;
	
	dropES4 = document.getElementById('dropS4');
	dropPosS4 = dropES4.getBoundingClientRect();
	dxS4 = dropPosS4.left;
    dyS4 = dropPosS4.top;
	
}

function drag_endS(event){
	droppedInS=false;
}
	


function drag_dropS(event){
	event.preventDefault();
	console.log(event.target.getAttribute('id'));
	$("#nextB").css("background-color", "#808080");
	if(event.target.getAttribute('id') == "dropS1")
	{
	    bucketCS1++;
		console.log(bucketCS1+"bucketCS2");
		countBS1=0;
		if(bucketCS1>5)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArraySX1.length-1;++i)
			{
               if((xTS==dropArraySX1[i])&&(yTS==dropArraySY1[i]))
				{
					countBS1++;	
				}
			}
			if(countBS1==0)
			{
				elem_idS= event.dataTransfer.getData("text");
	            draggedObjectS=elem_idS.slice(7);
				dropObjectS1.push(draggedObjectS);
				bucketDropCountS1++;
				percentageSA=percentageSA+3;
				if(bucketCS1==1)
				{
					dyS1=dyS1+60;
					dxS1=dxS1+29;
					
				}
				else if(bucketCS1==2)
				{
					dyS1=dyS1+31;
					dxS1=dxS1-3;
				}
				else if(bucketCS1==3)
				{
					dyS1=dyS1+33;
					dxS1=dxS1+62;
				}
				else if(bucketCS1==4)
				{
					dyS1=dyS1+3;
					dxS1=dxS1+30;
				}
				else if(bucketCS1==5)
				{
					dyS1=dyS1-33;
					dxS1=dxS1+50;
				}
				document.getElementById(elem_idS).style.top = dyS1+"px";
				document.getElementById(elem_idS).style.left = dxS1+"px";
				disableButtonS();
				jqueryFunctionSA();	
			}
			else{
				bucketCS1--;
			}
		}
	}
	
	else if(event.target.getAttribute('id') == "dropS2")
	{
	    bucketCS2++;
		countBS2=0;
		if(bucketCS2>5)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArraySX2.length-1;++i)
			{
               if((xTS==dropArraySX2[i])&&(yTS==dropArraySY2[i]))
				{
					countBS2++;	
				}
			}
			if(countBS2==0)
			{
				elem_idS= event.dataTransfer.getData("text");
	            draggedObjectS=elem_idS.slice(7);
				dropObjectS2.push(draggedObjectS);
				bucketDropCountS2++;
				percentageSB=percentageSB+3;
				if(bucketCS2==1)
				{
					dyS2=dyS2+60;
					dxS2=dxS2+29;
					
				}
				else if(bucketCS2==2)
				{
					dyS2=dyS2+31;
					dxS2=dxS2-3;
				}
				else if(bucketCS2==3)
				{
					dyS2=dyS2+33;
					dxS2=dxS2+62;
				}
				else if(bucketCS2==4)
				{
					dyS2=dyS2+3;
					dxS2=dxS2+30;
				}
				else if(bucketCS2==5)
				{
					dyS2=dyS2-33;
					dxS2=dxS2+50;
				}
				document.getElementById(elem_idS).style.top = dyS2+"px";
				document.getElementById(elem_idS).style.left = dxS2+"px";
				disableButtonS();
				jqueryFunctionSB();	
			}
			else{
				bucketCS2--;
			}
		}
	}
	
	else if(event.target.getAttribute('id') == "dropS3")
	{
	    bucketCS3++;
		countBS3=0;
		if(bucketCS3>5)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArraySX3.length-1;++i)
			{
               if((xTS==dropArraySX3[i])&&(yTS==dropArraySY3[i]))
				{
					countBS3++;	
				}
			}
			if(countBS3==0)
			{
				elem_idS= event.dataTransfer.getData("text");
	            draggedObjectS=elem_idS.slice(7);
				dropObjectS3.push(draggedObjectS);
				bucketDropCountS3++;
				percentageSC=percentageSC+3;
				if(bucketCS3==1)
				{
					dyS3=dyS3+60;
					dxS3=dxS3+29;
					
				}
				else if(bucketCS3==2)
				{
					dyS3=dyS3+31;
					dxS3=dxS3-3;
				}
				else if(bucketCS3==3)
				{
					dyS3=dyS3+33;
					dxS3=dxS3+62;
				}
				else if(bucketCS3==4)
				{
					dyS3=dyS3+3;
					dxS3=dxS3+30;
				}
				else if(bucketCS3==5)
				{
					dyS3=dyS3-33;
					dxS3=dxS3+50;
				}
				document.getElementById(elem_idS).style.top = dyS3+"px";
				document.getElementById(elem_idS).style.left = dxS3+"px";
				disableButtonS();
				jqueryFunctionSC();	
			}
			else{
				bucketCS3--;
			}
		}
	}
	
	
	else if(event.target.getAttribute('id') == "dropS4")
	{
	    bucketCS4++;
		countBS4=0;
		if(bucketCS4>5)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArraySX4.length-1;++i)
			{
               if((xTS==dropArraySX4[i])&&(yTS==dropArraySY4[i]))
				{
					countBS4++;	
				}
			}
			if(countBS4==0)
			{
				elem_idS= event.dataTransfer.getData("text");
	            draggedObjectS=elem_idS.slice(7);
				dropObjectS4.push(draggedObjectS);
				bucketDropCountS4++;
				percentageSD=percentageSD+3;
				if(bucketCS4==1)
				{
					dyS4=dyS4+60;
					dxS4=dxS4+29;
					
				}
				else if(bucketCS4==2)
				{
					dyS4=dyS4+31;
					dxS4=dxS4-3;
				}
				else if(bucketCS4==3)
				{
					dyS4=dyS4+33;
					dxS4=dxS4+62;
				}
				else if(bucketCS4==4)
				{
					dyS4=dyS4+3;
					dxS4=dxS4+30;
				}
				else if(bucketCS4==5)
				{
					dyS4=dyS4-33;
					dxS4=dxS4+50;
				}
				document.getElementById(elem_idS).style.top = dyS4+"px";
				document.getElementById(elem_idS).style.left = dxS4+"px";
				disableButtonS();
				jqueryFunctionSD();	
			}
			else{
				bucketCS4--;
			}
		}
	}
	
	droppedInS=true;
}



////God is Great 2////
$("#dropS1").click(function(){
	if(reachedClickLevelS==true)
	{
		 resetPopupS();
		 $("#patchS1").css("visibility", "visible");
		 dropClickedS1=true;
		 finalResultS();
	}
})

$("#dropS2").click(function(){
	if(reachedClickLevelS==true)
	{
		 resetPopupS();
		 $("#patchS2").css("visibility", "visible");
		 dropClickedS2=true;
		 finalResultS();
	}
})

$("#dropS3").click(function(){
	if(reachedClickLevelS==true)
	{
		 resetPopupS();
		 $("#patchS3").css("visibility", "visible");
		 dropClickedS3=true;
		 finalResultS();
	}
})

$("#dropS4").click(function(){
	if(reachedClickLevelS==true)
	{
		 resetPopupS();
		 $("#patchS4").css("visibility", "visible");
		 dropClickedS4=true;
		 finalResultS();
	}
})

function finalResultS()
{
	if(dropClickedS1 && dropClickedS2 && dropClickedS3 && dropClickedS4 == true)
	{

		 $("#nextB").css("background-color", "#FFE600"); 
         $("#nextB").removeAttr("disabled");
         $("#nextB").css( 'cursor', 'pointer' );
		 $('#nextB').css('pointer-events','auto'); 

	}
}


function resetPopupS()
{
	for(var i=1;i<=4;++i)
	{
		$("#patchS"+i).css("visibility", "hidden");
	}
}


function calculateS()
{
	     $("#submitB").css("background-color", "#808080"); 
		 $("#resetB").css("background-color", "#808080"); 
		 $("#resetB").attr('disabled','disabled');
		 $("#submitB").attr('disabled','disabled');
		 $("#submitB").css( 'cursor', 'default' ); 
		 $("#resetB").css( 'cursor', 'default' );
	
	finalCountS=0;
	bowl1=0; bowl2=0; bowl3=0; bowl4=0; 
	 for (var i = 0; i < answerArrayS1.length; ++i)
	    {
			for (var j = 0; j < answerArrayS1.length; ++j)
			{
				if (dropObjectS1[j] == answerArrayS1[i])
				{
					
					bowl1++;
				}
				
			}
		}
		
	for (var i = 0; i < answerArrayS2.length; ++i)
	    {
			for (var j = 0; j < answerArrayS2.length; ++j)
			{
				if (dropObjectS2[j] == answerArrayS2[i])
				{
					bowl2++;
				}
			}
		}
		
	for (var i = 0; i < answerArrayS3.length; ++i)
	    {
			for (var j = 0; j < answerArrayS3.length; ++j)
			{
				if (dropObjectS3[j] == answerArrayS3[i])
				{
					bowl3++;
				}
			}
		}
		
	for (var i = 0; i < answerArrayS4.length; ++i)
	    {
			for (var j = 0; j < answerArrayS4.length; ++j)
			{
				if (dropObjectS4[j] == answerArrayS4[i])
				{
					bowl4++;
				}
			}
		}
		
	finalCountS = bowl1 + bowl2 + bowl3 + bowl4;
	droppedCountS = dropObjectS1.length + dropObjectS2.length + dropObjectS3.length + dropObjectS4.length;
	if( (finalCountS == correctAnswerCountS) && (finalCountS == droppedCountS) )
	{
		$("#popCorrectDetail").css("visibility", "visible");
		       for(var i=1;i<=14;++i)
				{
				  $("#objectS"+i).css( 'cursor', 'default' );
				  $("#objectS"+i).attr('disabled','disabled');
				  $("#objectS"+i).css('pointer-events','none');	
				  
				}	
	}
	else
	{
		attemptS++;
		if(attemptS==1)
		{
		  $("#popIncorrectDetail").css("visibility","visible");
		  resetInitialS();
		}
		else
		{
		     $("#submitB").css("background-color", "#808080"); 
			 $("#resetB").css("background-color", "#808080"); 
			 $("#resetB").css("color", "#000"); 
			 $("#submitB").css("color", "#000"); 
			 $("#resetB").attr('disabled','disabled');
			 $("#submitB").attr('disabled','disabled');
			 $("#submitB").css( 'cursor', 'default' ); 
			 $("#resetB").css( 'cursor', 'default' );
			 $("#popIncorrectConfirm").css("visibility", "visible");
			 $('#resetB').css('pointer-events','none');
             $('#submitB').css('pointer-events','none');
			 
			   for(var i=1;i<=14;++i)
				{
				  $("#objectS"+i).css( 'cursor', 'default' );
				  $("#objectS"+i).attr('disabled','disabled');	
				  $("#objectS"+i).attr('draggable','false');
				  $("#objectS"+i).css('pointer-events','none'); 
				  $("#dropS"+i).css("cursor","pointer");
				}
			   reachedClickLevelS=true;
		} 
	}
}


resetInitialS = function()
{
	bucketDropCountS1=0;
	bucketDropCountS2=0;
	bucketDropCountS3=0;
	bucketDropCountS4=0;

    
		 
	$("#submitB").css("background-color", "#808080"); 
    $("#resetB").css("background-color", "#808080"); 
	$("#resetB").attr('disabled','disabled');
	$("#submitB").attr('disabled','disabled');
	$("#submitB").css( 'cursor', 'default' ); 
	$("#resetB").css( 'cursor', 'default' );
	$("#submitB").css("color","#333");
	$("#resetB").css("color","#333");
	$('#resetB').css('pointer-events','none');
    $('#submitB').css('pointer-events','none');
		 
	percentageSA=0;
	percentageSB=0;
    percentageSC=0;
    percentageSD=0;
		
	bucketDropCountS1=0;
	bucketDropCountS2=0;
	bucketDropCountS3=0;
	bucketDropCountS4=0;

		
	dropArraySX1= [];
	dropArraySY1= [];
	dropArraySX2= [];
	dropArraySY2= [];
	dropArraySX3= [];
	dropArraySY3= [];
	dropArraySX4= [];
	dropArraySY4= [];
    dropObjectS1= [];
	dropObjectS2= [];
	dropObjectS3= [];
	dropObjectS4= [];
	
		
	bucketCS1=0;
    countBS1=0;
	bucketCS2=0;
    countBS2=0;
	bucketCS3=0;
    countBS3=0;
	bucketCS4=0;
    countBS4=0;
	
	lastfunS();
	
	for(var i=1;i<=14;++i)
	{
	document.getElementById("objectS"+i).style.disabled = false;
	document.getElementById("objectS"+i).disabled = false;
	document.getElementById("objectS"+i).style.cursor = "pointer";
	document.getElementById("objectS"+i).draggable = true;
	}
}


lastfunS = function()
{
        for(var i=1;i<=3;++i)
	     {
			document.getElementById("objectS"+i).style.top = yS1+"px";
			document.getElementById("objectS"+i).style.left = xS1+"px";
			console.log(yS1 +"yS1" + xS1 +"xS1");
		 } 
		 
		 for(var i=4;i<=7;++i)
	     {
			document.getElementById("objectS"+i).style.top = yS2+"px";
			document.getElementById("objectS"+i).style.left = xS2+"px";
		 } 
		 document.getElementById("objectS12").style.top = yS3+"px";
		 document.getElementById("objectS12").style.left = xS3+"px";
		 
		 for(var i=8;i<=11;++i)
	     {
			document.getElementById("objectS"+i).style.top = yS4+"px";
			document.getElementById("objectS"+i).style.left = xS4+"px";
		 } 
		 document.getElementById("objectS13").style.top = yS5+"px";
		 document.getElementById("objectS13").style.left = xS5+"px";
		 
}

jqueryFunctionSA = function()
{
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' );
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		  
		if((xTS == xS1)&&(yTS == yS1))
		{
		  dropArraySX1.push(xTS);
		  dropArraySY1.push(yTS);
	    }
		else if((xTS == xS2)&&(yTS == yS2))
		{
		  dropArraySX1.push(xTS);
		  dropArraySY1.push(yTS);
		}
		else if((xTS == xS3)&&(yTS == yS3))
		{	
		  dropArraySX1.push(xTS);
		  dropArraySY1.push(yTS);
		}
		else if((xTS == xS4)&&(yTS == yS4))
		{
		  dropArraySX1.push(xTS);
		  dropArraySY1.push(yTS);
		}
		else if((xTS == xS5)&&(yTS == yS5))
		{	
		  dropArraySX1.push(xTS);
		  dropArraySY1.push(yTS);
		}	
}	



jqueryFunctionSB = function()
{
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 
		if((xTS == xS1)&&(yTS == yS1))
		{
		  dropArraySX2.push(xTS);
		  dropArraySY2.push(yTS);
	    }
		else if((xTS == xS2)&&(yTS == yS2))
		{
		  dropArraySX2.push(xTS);
		  dropArraySY2.push(yTS);
		}
		else if((xTS == xS3)&&(yTS == yS3))
		{	
		  dropArraySX2.push(xTS);
		  dropArraySY2.push(yTS);
		}
		else if((xTS == xS4)&&(yTS == yS4))
		{	
		  dropArraySX2.push(xTS);
		  dropArraySY2.push(yTS);
		}
		else if((xTS == xS5)&&(yTS == yS5))
		{
		  dropArraySX2.push(xTS);
		  dropArraySY2.push(yTS);
		}
		
}



jqueryFunctionSC = function()
{
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 
		if((xTS == xS1)&&(yTS == yS1))
		{
		  dropArraySX3.push(xTS);
		  dropArraySY3.push(yTS);
	    }
		else if((xTS == xS2)&&(yTS == yS2))
		{
		  dropArraySX3.push(xTS);
		  dropArraySY3.push(yTS);
		}
		else if((xTS == xS3)&&(yTS == yS3))
		{	
		  dropArraySX3.push(xTS);
		  dropArraySY3.push(yTS);
		}
		else if((xTS == xS4)&&(yTS == yS4))
		{	
		  dropArraySX3.push(xTS);
		  dropArraySY3.push(yTS);
		}
		else if((xTS == xS5)&&(yTS == yS5))
		{
		  dropArraySX3.push(xTS);
		  dropArraySY3.push(yTS);
		}
		
}


jqueryFunctionSD = function()
{
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 
		if((xTS == xS1)&&(yTS == yS1))
		{
		  dropArraySX4.push(xTS);
		  dropArraySY4.push(yTS);
	    }
		else if((xTS == xS2)&&(yTS == yS2))
		{
		  dropArraySX4.push(xTS);
		  dropArraySY4.push(yTS);
		}
		else if((xTS == xS3)&&(yTS == yS3))
		{	
		  dropArraySX4.push(xTS);
		  dropArraySY4.push(yTS);
		}
		else if((xTS == xS4)&&(yTS == yS4))
		{	
		  dropArraySX4.push(xTS);
		  dropArraySY4.push(yTS);
		}
		else if((xTS == xS5)&&(yTS == yS5))
		{
		  dropArraySX4.push(xTS);
		  dropArraySY4.push(yTS);
		}
		
}













///////////////////////////////////////////////////////////////////////////////////////
//////////////////////// Level 3 Page Script//////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

function loadNextLevelT()
{
	gameLevel++;
	document.getElementById("pageHeading").innerHTML = "Sales";
	
}

function drag_startT(event){
	event.dataTransfer.dropEffect = "move";
	event.dataTransfer.setData("text",event.target.getAttribute('id'));
	objectTT=event.dataTransfer.getData("text");
	elementTT = document.getElementById(objectTT);
	positionTT = elementTT.getBoundingClientRect();
	xTT = positionTT.left;
	yTT = positionTT.top;
	
	elementT1 = document.getElementById('waterMarkT1');
	positionT1 = elementT1.getBoundingClientRect();
	xT1 = positionT1.left;
    yT1 = positionT1.top;
	//console.log(yT1 +"yS1" + xS1 +"xS1");
	
	elementT2 = document.getElementById('waterMarkT2');
	positionT2 = elementT2.getBoundingClientRect();
	xT2 = positionT2.left;
    yT2 = positionT2.top;
	
	elementT3 = document.getElementById('waterMarkT3');
	positionT3 = elementT3.getBoundingClientRect();
	xT3 = positionT3.left;
    yT3 = positionT3.top;
	
	elementT4 = document.getElementById('waterMarkT4');
	positionT4 = elementT4.getBoundingClientRect();
	xT4 = positionT4.left;
    yT4 = positionT4.top;
	
	
	dropET1 = document.getElementById('dropT1');
	dropPosT1 = dropET1.getBoundingClientRect();
	dxT1 = dropPosT1.left;
    dyT1 = dropPosT1.top;
	
	dropET2 = document.getElementById('dropT2');
	dropPosT2 = dropET2.getBoundingClientRect();
	dxT2 = dropPosT2.left;
    dyT2 = dropPosT2.top;
	
	dropET3 = document.getElementById('dropT3');
	dropPosT3 = dropET3.getBoundingClientRect();
	dxT3 = dropPosT3.left;
    dyT3 = dropPosT3.top;
	
	dropET4 = document.getElementById('dropT4');
	dropPosT4 = dropET4.getBoundingClientRect();
	dxT4 = dropPosT4.left;
    dyT4 = dropPosT4.top;
	
}

function drag_endT(event){
	droppedInT=false;
}
	


function drag_dropT(event){
	event.preventDefault();
	//console.log(event.target.getAttribute('id'));
	if(event.target.getAttribute('id') == "dropT1")
	{
	    bucketCT1++;
		//console.log(bucketCS1+"bucketCT2");
		countBT1=0;
		if(bucketCT1>4)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayTX1.length-1;++i)
			{
               if((xTT==dropArrayTX1[i])&&(yTT==dropArrayTY1[i]))
				{
					countBT1++;	
				}
			}
			if(countBT1==0)
			{
				elem_idT= event.dataTransfer.getData("text");
	            draggedObjectT=elem_idT.slice(7);
				dropObjectT1.push(draggedObjectT);
				bucketDropCountT1++;
				percentageTA=percentageTA+3;
				if(bucketCT1==1)
				{
					dyT1=dyT1+60;
					dxT1=dxT1+29;
					
				}
				else if(bucketCT1==2)
				{
					dyT1=dyT1+31;
					dxT1=dxT1-3;
				}
				else if(bucketCT1==3)
				{
					dyT1=dyT1+33;
					dxT1=dxT1+62;
				}
				else if(bucketCT1==4)
				{
					dyT1=dyT1+3;
					dxT1=dxT1+30;
				}
				
				
				document.getElementById(elem_idT).style.top = dyT1+"px";
				document.getElementById(elem_idT).style.left = dxT1+"px";
				disableButtonT();
				jqueryFunctionTA();	
			}
			else{
				bucketCT1--;
			}
		}
	}
	
	else if(event.target.getAttribute('id') == "dropT2")
	{
	    bucketCT2++;
		countBT2=0;
		if(bucketCT2>4)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayTX2.length-1;++i)
			{
               if((xTT==dropArrayTX2[i])&&(yTT==dropArrayTY2[i]))
				{
					countBT2++;	
				}
			}
			if(countBT2==0)
			{
				elem_idT= event.dataTransfer.getData("text");
	            draggedObjectT=elem_idT.slice(7);
				dropObjectT2.push(draggedObjectT);
				bucketDropCountT2++;
				percentageTB=percentageTB+3;
				if(bucketCT2==1)
				{
					dyT2=dyT2+60;
					dxT2=dxT2+29;
					
				}

				else if(bucketCT2==2)
				{
					dyT2=dyT2+31;
					dxT2=dxT2-3;
				}
				else if(bucketCT2==3)
				{
					dyT2=dyT2+33;
					dxT2=dxT2+62;
				}
				else if(bucketCT2==4)
				{
					dyT2=dyT2+3;
					dxT2=dxT2+30;
				}
				
				document.getElementById(elem_idT).style.top = dyT2+"px";
				document.getElementById(elem_idT).style.left = dxT2+"px";
				disableButtonT();
				jqueryFunctionTB();	
			}
			else{
				bucketCT2--;
			}
		}
	}
	
	else if(event.target.getAttribute('id') == "dropT3")
	{
	    bucketCT3++;
		countBT3=0;
		if(bucketCT3>4)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayTX3.length-1;++i)
			{
               if((xTT==dropArrayTX3[i])&&(yTT==dropArrayTY3[i]))
				{
					countBT3++;	
				}
			}
			if(countBT3==0)
			{
				elem_idT= event.dataTransfer.getData("text");
	            draggedObjectT=elem_idT.slice(7);
				dropObjectT3.push(draggedObjectT);
				bucketDropCountT3++;
				percentageTC=percentageTC+3;
				if(bucketCT3==1)
				{
					dyT3=dyT3+60;
					dxT3=dxT3+29;
					
				}
				else if(bucketCT3==2)
				{
					dyT3=dyT3+31;
					dxT3=dxT3-3;
				}
				else if(bucketCT3==3)
				{
					dyT3=dyT3+33;
					dxT3=dxT3+62;
				}
				else if(bucketCT3==4)
				{
					dyT3=dyT3+3;
					dxT3=dxT3+30;
				}
				
				document.getElementById(elem_idT).style.top = dyT3+"px";
				document.getElementById(elem_idT).style.left = dxT3+"px";
				disableButtonT();
				jqueryFunctionTC();	
			}
			else{
				bucketCT3--;
			}
		}
	}
	
	
	else if(event.target.getAttribute('id') == "dropT4")
	{
	    bucketCT4++;
		countBT4=0;
		if(bucketCT4>4)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayTX4.length-1;++i)
			{
               if((xTT==dropArrayTX4[i])&&(yTT==dropArrayTY4[i]))
				{
					countBT4++;	
				}
			}
			if(countBT4==0)
			{
				elem_idT= event.dataTransfer.getData("text");
	            draggedObjectT=elem_idT.slice(7);
				dropObjectT4.push(draggedObjectT);
				bucketDropCountT4++;
				percentageTD=percentageTD+3;
				if(bucketCT4==1)
				{
					dyT4=dyT4+60;
					dxT4=dxT4+29;
					
				}
				else if(bucketCT4==2)
				{
					dyT4=dyT4+31;
					dxT4=dxT4-3;
				}
				else if(bucketCT4==3)
				{
					dyT4=dyT4+33;
					dxT4=dxT4+62;
				}
				else if(bucketCT4==4)
				{
					dyT4=dyT4+3;
					dxT4=dxT4+30;
				}
				
				document.getElementById(elem_idT).style.top = dyT4+"px";
				document.getElementById(elem_idT).style.left = dxT4+"px";
				disableButtonT();
				jqueryFunctionTD();	
			}
			else{
				bucketCT4--;
			}
		}
	}
	
	droppedInS=true;
}



////God is Great 2////
$("#dropT1").click(function(){
	if(reachedClickLevelT==true)
	{
		 resetPopupT();
		 $("#patchT1").css("visibility", "visible");
		 dropClickedT1=true;
		 finalResultT();
	}
})

$("#dropT2").click(function(){
	if(reachedClickLevelT==true)
	{
		 resetPopupT();
		 $("#patchT2").css("visibility", "visible");
		 dropClickedT2=true;
		 finalResultT();
	}
})

$("#dropT3").click(function(){
	if(reachedClickLevelT==true)
	{
		 resetPopupT();
		 $("#patchT3").css("visibility", "visible");
		 dropClickedT3=true;
		 finalResultT();
	}
})

$("#dropT4").click(function(){
	if(reachedClickLevelT==true)
	{
		 resetPopupT();
		 $("#patchT4").css("visibility", "visible");
		 dropClickedT4=true;
		 finalResultT();
	}
})

function finalResultT()
{
	if(dropClickedT1 && dropClickedT2 && dropClickedT3 && dropClickedT4 == true)
	{

		 $("#nextB").css("background-color", "#FFE600"); 
         $("#nextB").removeAttr("disabled");
         $("#nextB").css( 'cursor', 'pointer' );
         $('#nextB').css('pointer-events','auto'); 
	}
}


function resetPopupT()
{
	for(var i=1;i<=4;++i)
	{
		$("#patchT"+i).css("visibility", "hidden");
	}
}


function calculateT()
{
	     $("#submitB").css("background-color", "#808080"); 
		 $("#resetB").css("background-color", "#808080"); 
		 $("#resetB").attr('disabled','disabled');
		 $("#submitB").attr('disabled','disabled');
		 $("#submitB").css( 'cursor', 'default' ); 
		 $("#resetB").css( 'cursor', 'default' );
	
	finalCountT=0;
	bowl1=0; bowl2=0; bowl3=0; bowl4=0; 
	 for (var i = 0; i < answerArrayT1.length; ++i)
	    {
			for (var j = 0; j < answerArrayT1.length; ++j)
			{
				if (dropObjectT1[j] == answerArrayT1[i])
				{
					
					bowl1++;
				}
			}
		}
		
	for (var i = 0; i < answerArrayT2.length; ++i)
	    {
			for (var j = 0; j < answerArrayT2.length; ++j)
			{
				if (dropObjectT2[j] == answerArrayT2[i])
				{
					bowl2++;
				}
			}
		}
		
	for (var i = 0; i < answerArrayT3.length; ++i)
	    {
			for (var j = 0; j < answerArrayT3.length; ++j)
			{
				if (dropObjectT3[j] == answerArrayT3[i])
				{
					bowl3++;
				}
			}
		}
		
	for (var i = 0; i < answerArrayT4.length; ++i)
	    {
			for (var j = 0; j < answerArrayT4.length; ++j)
			{
				if (dropObjectT4[j] == answerArrayT4[i])
				{
					bowl4++;
				}
			}
		}
		
	finalCountT = bowl1 + bowl2 + bowl3 + bowl4;
	droppedCountT = dropObjectT1.length + dropObjectT2.length + dropObjectT3.length + dropObjectT4.length;
	if( (finalCountT == correctAnswerCountT) && (finalCountT == droppedCountT) )
	{
		$("#popCorrectDetail").css("visibility", "visible");
		for(var i=1;i<=14;++i)
		{
			$("#objectT"+i).css( 'cursor', 'default' );
			$("#objectT"+i).attr('disabled','disabled');	
			$("#objectT"+i).css('pointer-events','none');
		}
		
	}
	else
	{
		attemptT++;
		if(attemptT==1)
		{
		  $("#popIncorrectDetail").css("visibility","visible");
		  resetInitialT();
		}
		else
		{
		     $("#submitB").css("background-color", "#808080"); 
			 $("#resetB").css("background-color", "#808080"); 
			 $("#resetB").css("color", "#000"); 
			 $("#submitB").css("color", "#000"); 
			 $("#resetB").attr('disabled','disabled');
			 $("#submitB").attr('disabled','disabled');
			 $("#submitB").css( 'cursor', 'default' ); 
			 $("#resetB").css( 'cursor', 'default' );
			 $("#popIncorrectConfirm").css("visibility", "visible");
			 $('#resetB').css('pointer-events','none');
             $('#submitB').css('pointer-events','none');
			 
			   for(var i=1;i<=14;++i)
				{
				  $("#objectT"+i).css( 'cursor', 'default' );
				  $("#objectT"+i).attr('disabled','disabled');	
				  $("#dropT"+i).css("cursor","pointer");
				  $("#objectT"+i).css('pointer-events','none');
				}
			   reachedClickLevelT=true;
		}
	  
	}
}


resetInitialT = function()
{
	bucketDropCountT1=0;
	bucketDropCountT2=0;
	bucketDropCountT3=0;
	bucketDropCountT4=0;

    
		 
	$("#submitB").css("background-color", "#808080"); 
    $("#resetB").css("background-color", "#808080"); 
	$("#resetB").attr('disabled','disabled');
	$("#submitB").attr('disabled','disabled');
	$("#submitB").css( 'cursor', 'default' ); 
	$("#resetB").css( 'cursor', 'default' );
	$("#submitB").css("color","#333");
	$("#resetB").css("color","#333");
	$('#resetB').css('pointer-events','none');
    $('#submitB').css('pointer-events','none');
		 
	percentageTA=0;
	percentageTB=0;
    percentageTC=0;
    percentageTD=0;
		
	bucketDropCountT1=0;
	bucketDropCountT2=0;
	bucketDropCountT3=0;
	bucketDropCountT4=0;

		
	dropArrayTX1= [];
	dropArrayTY1= [];
	dropArrayTX2= [];
	dropArrayTY2= [];
	dropArrayTX3= [];
	dropArrayTY3= [];
	dropArrayTX4= [];
	dropArrayTY4= [];
    dropObjectT1= [];
	dropObjectT2= [];
	dropObjectT3= [];
	dropObjectT4= [];
	
		
	bucketCT1=0;
    countBT1=0;
	bucketCT2=0;
    countBT2=0;
	bucketCT3=0;
    countBT3=0;
	bucketCT4=0;
    countBT4=0;
	
	lastfunT();
	
	for(var i=1;i<=13;++i)
	{
	document.getElementById("objectT"+i).style.disabled = false;
	document.getElementById("objectT"+i).disabled = false;
	document.getElementById("objectT"+i).style.cursor = "pointer";
	document.getElementById("objectT"+i).draggable = true;
	}
}


lastfunT = function()
{
        for(var i=1;i<=3;++i)
	     {
			document.getElementById("objectT"+i).style.top = yT1+"px";
			document.getElementById("objectT"+i).style.left = xT1+"px";
			//console.log(yS1 +"yS1" + xS1 +"xS1");
		 } 
		 
		 for(var i=4;i<=7;++i)
	     {
			document.getElementById("objectT"+i).style.top = yT2+"px";
			document.getElementById("objectT"+i).style.left = xT2+"px";
		 } 

		 for(var i=8;i<=11;++i)
	     {
			document.getElementById("objectT"+i).style.top = yT3+"px";
			document.getElementById("objectT"+i).style.left = xT3+"px";
		 } 
		 
		 for(var i=12;i<=13;++i)
	     {
			document.getElementById("objectT"+i).style.top = yT4+"px";
			document.getElementById("objectT"+i).style.left = xT4+"px";
		 } 
		 
}

jqueryFunctionTA = function()
{
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		  
		if((xTT == xT1)&&(yTT == yT1))
		{
		  dropArrayTX1.push(xTT);
		  dropArrayTY1.push(yTT);
	    }
		else if((xTT == xT2)&&(yTT == yT2))
		{
		  dropArrayTX1.push(xTT);
		  dropArrayTY1.push(yTT);
		}
		else if((xTT == xT3)&&(yTT == yT3))
		{	
		  dropArrayTX1.push(xTT);
		  dropArrayTY1.push(yTT);
		}
		else if((xTT == xT4)&&(yTT == yT4))
		{
		  dropArrayTX1.push(xTT);
		  dropArrayTY1.push(yTT);
		}
		else if((xTT == xT5)&&(yTT == yT5))
		{	
		  dropArrayTX1.push(xTT);
		  dropArrayTY1.push(yTT);
		}	
}	



jqueryFunctionTB = function()
{
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 
		if((xTT == xT1)&&(yTT == yT1))
		{
		  dropArrayTX2.push(xTT);
		  dropArrayTY2.push(yTT);
	    }
		else if((xTT == xT2)&&(yTT == yT2))
		{
		  dropArrayTX2.push(xTT);
		  dropArrayTY2.push(yTT);
		}
		else if((xTT == xT3)&&(yTT == yT3))
		{	
		  dropArrayTX2.push(xTT);
		  dropArrayTY2.push(yTT);
		}
		else if((xTT == xT4)&&(yTT == yT4))
		{	
		  dropArrayTX2.push(xTT);
		  dropArrayTY2.push(yTT);
		}
		else if((xTT == xT5)&&(yTT == yT5))
		{
		  dropArrayTX2.push(xTT);
		  dropArrayTY2.push(yTT);
		}
		
}



jqueryFunctionTC = function()
{
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 
		if((xTT == xT1)&&(yTT == yT1))
		{
		  dropArrayTX3.push(xTT);
		  dropArrayTY3.push(yTT);
	    }
		else if((xTT == xT2)&&(yTT == yT2))
		{
		  dropArrayTX3.push(xTT);
		  dropArrayTY3.push(yTT);
		}
		else if((xTT == xT3)&&(yTT == yT3))
		{	
		  dropArrayTX3.push(xTT);
		  dropArrayTY3.push(yTT);
		}
		else if((xTT == xT4)&&(yTT == yT4))
		{	
		  dropArrayTX3.push(xTT);
		  dropArrayTY3.push(yTT);
		}
		else if((xTT == xT5)&&(yTT == yT5))
		{
		  dropArrayTX3.push(xTT);
		  dropArrayTY3.push(yTT);
		}
		
}


jqueryFunctionTD = function()
{
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 
		if((xTT == xT1)&&(yTT == yT1))
		{
		  dropArrayTX4.push(xTT);
		  dropArrayTY4.push(yTT);
	    }
		else if((xTT == xT2)&&(yTT == yT2))
		{
		  dropArrayTX4.push(xTT);
		  dropArrayTY4.push(yTT);
		}
		else if((xTT == xT3)&&(yTT == yT3))
		{	
		  dropArrayTX4.push(xTT);
		  dropArrayTY4.push(yTT);
		}
		else if((xTT == xT4)&&(yTT == yT4))
		{	
		  dropArrayTX4.push(xTT);
		  dropArrayTY4.push(yTT);
		}
		else if((xTT == xT5)&&(yTT == yT5))
		{
		  dropArrayTX4.push(xTT);
		  dropArrayTY4.push(yTT);
		}
		
}














///////////////////////////////////////////////////////////////////////////////////////
//////////////////////// Level 4 Page Script//////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

function loadNextLevelF()
{
	gameLevel++;
	document.getElementById("pageHeading").innerHTML = "Summit Equipment PPE";
	$("#nextB").css("visibility", "hidden"); 
	
}

function drag_startF(event){
	event.dataTransfer.dropEffect = "move";
	event.dataTransfer.setData("text",event.target.getAttribute('id'));
	objectTF=event.dataTransfer.getData("text");
	elementTF = document.getElementById(objectTF);
	positionTF = elementTF.getBoundingClientRect();
	xTF = positionTF.left;
	yTF = positionTF.top;
	
	elementF1 = document.getElementById('waterMarkF1');
	positionF1 = elementF1.getBoundingClientRect();
	xF1 = positionF1.left;
    yF1 = positionF1.top;
	//console.log(yT1 +"yS1" + xS1 +"xS1");
	
	elementF2 = document.getElementById('waterMarkF2');
	positionF2 = elementF2.getBoundingClientRect();
	xF2 = positionF2.left;
    yF2 = positionF2.top;
	
	elementF3 = document.getElementById('waterMarkF3');
	positionF3 = elementF3.getBoundingClientRect();
	xF3 = positionF3.left;
    yF3 = positionF3.top;
	
	elementF4 = document.getElementById('waterMarkF4');
	positionF4 = elementF4.getBoundingClientRect();
	xF4 = positionF4.left;
    yF4 = positionF4.top;
	
	elementF5 = document.getElementById('waterMarkF5');
	positionF5 = elementF5.getBoundingClientRect();
	xF5 = positionF5.left;
    yF5 = positionF5.top;
	
	
	dropEF1 = document.getElementById('dropF1');
	dropPosF1 = dropEF1.getBoundingClientRect();
	dxF1 = dropPosF1.left;
    dyF1 = dropPosF1.top;
	
	dropEF2 = document.getElementById('dropF2');
	dropPosF2 = dropEF2.getBoundingClientRect();
	dxF2 = dropPosF2.left;
    dyF2 = dropPosF2.top;
	
	dropEF3 = document.getElementById('dropF3');
	dropPosF3 = dropEF3.getBoundingClientRect();
	dxF3 = dropPosF3.left;
    dyF3 = dropPosF3.top;
	
	dropEF4 = document.getElementById('dropF4');
	dropPosF4 = dropEF4.getBoundingClientRect();
	dxF4 = dropPosF4.left;
    dyF4 = dropPosF4.top;
	
	dropEF5 = document.getElementById('dropF5');
	dropPosF5 = dropEF5.getBoundingClientRect();
	dxF5 = dropPosF5.left;
    dyF5 = dropPosF5.top;
	
	dropEF6 = document.getElementById('dropF6');
	dropPosF6 = dropEF6.getBoundingClientRect();
	dxF6 = dropPosF6.left;
    dyF6 = dropPosF6.top;
	
	dropEF7 = document.getElementById('dropF7');
	dropPosF7 = dropEF7.getBoundingClientRect();
	dxF7 = dropPosF7.left;
    dyF7 = dropPosF7.top;
	
}

function drag_endF(event){
	droppedInF=false;
}
	


function drag_dropF(event){
	event.preventDefault();
	//console.log(event.target.getAttribute('id'));
	if(event.target.getAttribute('id') == "dropF1")
	{
	    bucketCF1++;
		//console.log(bucketCS1+"bucketCT2");
		countBF1=0;
		if(bucketCF1>5)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayFX1.length-1;++i)
			{
               if((xTF==dropArrayFX1[i])&&(yTF==dropArrayFY1[i]))
				{
					countBF1++;	
				}
			}
			if(countBF1==0)
			{
				elem_idF= event.dataTransfer.getData("text");
	            draggedObjectF=elem_idF.slice(7);
				dropObjectF1.push(draggedObjectF);
				bucketDropCountF1++;
				percentageFA=percentageFA+3;
				if(bucketCF1==1)
				{
					dyF1=dyF1+60;
					dxF1=dxF1+29;
					
				}
				else if(bucketCF1==2)
				{
					dyF1=dyF1+31;
					dxF1=dxF1-3;
				}
				else if(bucketCF1==3)
				{
					dyF1=dyF1+33;
					dxF1=dxF1+62;
				}
				else if(bucketCF1==4)
				{
					dyF1=dyF1+3;
					dxF1=dxF1+30;
				}
				else if(bucketCF1==5)
				{
					dyF1=dyF1-33;
					dxF1=dxF1+50;
				}
				
				document.getElementById(elem_idF).style.top = dyF1+"px";
				document.getElementById(elem_idF).style.left = dxF1+"px";
				disableButtonF();
				jqueryFunctionFA();	
			}
			else{
				bucketCF1--;
			}
		}
	}
	
	else if(event.target.getAttribute('id') == "dropF2")
	{
	    bucketCF2++;
		countBF2=0;
		if(bucketCF2>5)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayFX2.length-1;++i)
			{
               if((xTF==dropArrayFX2[i])&&(yTF==dropArrayFY2[i]))
				{
					countBF2++;	
				}
			}
			if(countBF2==0)
			{
				elem_idF= event.dataTransfer.getData("text");
	            draggedObjectF=elem_idF.slice(7);
				dropObjectF2.push(draggedObjectF);
				bucketDropCountF2++;
				percentageFB=percentageFB+3;
				if(bucketCF2==1)
				{
					dyF2=dyF2+60;
					dxF2=dxF2+29;
					
				}

				else if(bucketCF2==2)
				{
					dyF2=dyF2+31;
					dxF2=dxF2-3;
				}
				else if(bucketCF2==3)
				{
					dyF2=dyF2+33;
					dxF2=dxF2+62;
				}
				else if(bucketCF2==4)
				{
					dyF2=dyF2+3;
					dxF2=dxF2+30;
				}
				else if(bucketCF2==5)
				{
					dyF2=dyF2-33;
					dxF2=dxF2+50;
				}
				
				document.getElementById(elem_idF).style.top = dyF2+"px";
				document.getElementById(elem_idF).style.left = dxF2+"px";
				jqueryFunctionFB();	
				disableButtonF();
			}
			else{
				bucketCF2--;
			}
		}
	}
	
	else if(event.target.getAttribute('id') == "dropF3")
	{
	    bucketCF3++;
		countBF3=0;
		if(bucketCF3>5)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayFX3.length-1;++i)
			{
               if((xTF==dropArrayFX3[i])&&(yTF==dropArrayFY3[i]))
				{
					countBF3++;	
				}
			}
			if(countBF3==0)
			{
				elem_idF= event.dataTransfer.getData("text");
	            draggedObjectF=elem_idF.slice(7);
				dropObjectF3.push(draggedObjectF);
				bucketDropCountF3++;
				percentageFC=percentageFC+3;
				if(bucketCF3==1)
				{
					dyF3=dyF3+60;
					dxF3=dxF3+29;
					
				}
				else if(bucketCF3==2)
				{
					dyF3=dyF3+31;
					dxF3=dxF3-3;
				}
				else if(bucketCF3==3)
				{
					dyF3=dyF3+33;
					dxF3=dxF3+62;
				}
				else if(bucketCF3==4)
				{
					dyF3=dyF3+3;
					dxF3=dxF3+30;
				}
				else if(bucketCF3==5)
				{
					dyF3=dyF3-33;
					dxF3=dxF3+50;
				}
				
				document.getElementById(elem_idF).style.top = dyF3+"px";
				document.getElementById(elem_idF).style.left = dxF3+"px";
				disableButtonF();
				jqueryFunctionFC();	
			}
			else{
				bucketCF3--;
			}
		}
	}
	
	
	else if(event.target.getAttribute('id') == "dropF4")
	{
	    bucketCF4++;
		countBF4=0;
		if(bucketCF4>5)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayFX4.length-1;++i)
			{
               if((xTF==dropArrayFX4[i])&&(yTF==dropArrayFY4[i]))
				{
					countBF4++;	
				}
			}
			if(countBF4==0)
			{
				elem_idF= event.dataTransfer.getData("text");
	            draggedObjectF=elem_idF.slice(7);
				dropObjectF4.push(draggedObjectF);
				bucketDropCountF4++;
				percentageFD=percentageFD+3;
				if(bucketCF4==1)
				{
					dyF4=dyF4+60;
					dxF4=dxF4+29;
					
				}
				else if(bucketCF4==2)
				{
					dyF4=dyF4+31;
					dxF4=dxF4-3;
				}
				else if(bucketCF4==3)
				{
					dyF4=dyF4+33;
					dxF4=dxF4+62;
				}
				else if(bucketCF4==4)
				{
					dyF4=dyF4+3;
					dxF4=dxF4+30;
				}
				else if(bucketCF4==5)
				{
					dyF4=dyF4-33;
					dxF4=dxF4+50;
				}
				
				document.getElementById(elem_idF).style.top = dyF4+"px";
				document.getElementById(elem_idF).style.left = dxF4+"px";
				disableButtonF();
				jqueryFunctionFD();	
			}
			else{
				bucketCF4--;
			}
		}
	}
	
	
	else if(event.target.getAttribute('id') == "dropF5")
	{
	    bucketCF5++;
		countBF5=0;
		if(bucketCF5>5)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayFX5.length-1;++i)
			{
               if((xTF==dropArrayFX5[i])&&(yTF==dropArrayFY5[i]))
				{
					countBF5++;	
				}
			}
			if(countBF5==0)
			{
				elem_idF= event.dataTransfer.getData("text");
	            draggedObjectF=elem_idF.slice(7);
				dropObjectF5.push(draggedObjectF);
				bucketDropCountF5++;
				percentageFD=percentageFD+3;
				if(bucketCF5==1)
				{
					dyF5=dyF5+60;
					dxF5=dxF5+29;
					
				}
				else if(bucketCF5==2)
				{
					dyF5=dyF5+31;
					dxF5=dxF5-3;
				}
				else if(bucketCF5==3)
				{
					dyF5=dyF5+33;
					dxF5=dxF5+62;
				}
				else if(bucketCF5==4)
				{
					dyF5=dyF5+3;
					dxF5=dxF5+30;
				}
				else if(bucketCF5==5)
				{
					dyF5=dyF5-33;
					dxF5=dxF5+50;
				}
				
				document.getElementById(elem_idF).style.top = dyF5+"px";
				document.getElementById(elem_idF).style.left = dxF5+"px";
				disableButtonF();
				jqueryFunctionFE();	
			}
			else{
				bucketCF5--;
			}
		}
	}
	
	
	else if(event.target.getAttribute('id') == "dropF6")
	{
	    bucketCF6++;
		countBF6=0;
		if(bucketCF6>5)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayFX6.length-1;++i)
			{
               if((xTF==dropArrayFX6[i])&&(yTF==dropArrayFY6[i]))
				{
					countBF6++;	
				}
			}
			if(countBF6==0)
			{
				elem_idF= event.dataTransfer.getData("text");
	            draggedObjectF=elem_idF.slice(7);
				dropObjectF6.push(draggedObjectF);
				bucketDropCountF6++;
				percentageFD=percentageFD+3;
				if(bucketCF6==1)
				{
					dyF6=dyF6+60;
					dxF6=dxF6+29;
					
				}
				else if(bucketCF6==2)
				{
					dyF6=dyF6+31;
					dxF6=dxF6-3;
				}
				else if(bucketCF6==3)
				{
					dyF6=dyF6+33;
					dxF6=dxF6+62;
				}
				else if(bucketCF6==4)
				{
					dyF6=dyF6+3;
					dxF6=dxF6+30;
				}
				else if(bucketCF6==5)
				{
					dyF6=dyF6-33;
					dxF6=dxF6+50;
				}
				
				document.getElementById(elem_idF).style.top = dyF6+"px";
				document.getElementById(elem_idF).style.left = dxF6+"px";
				disableButtonF();
				jqueryFunctionFF();	
			}
			else{
				bucketCF6--;
			}
		}
	}
	
	else if(event.target.getAttribute('id') == "dropF7")
	{
	    bucketCF7++;
		countBF7=0;
		if(bucketCF7>5)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayFX7.length-1;++i)
			{
               if((xTF==dropArrayFX7[i])&&(yTF==dropArrayFY7[i]))
				{
					countBF7++;	
				}
			}
			if(countBF7==0)
			{
				elem_idF= event.dataTransfer.getData("text");
	            draggedObjectF=elem_idF.slice(7);
				dropObjectF7.push(draggedObjectF);
				bucketDropCountF7++;
				percentageFD=percentageFD+3;
				if(bucketCF7==1)
				{
					dyF7=dyF7+60;
					dxF7=dxF7+29;
					
				}
				else if(bucketCF7==2)
				{
					dyF7=dyF7+31;
					dxF7=dxF7-3;
				}
				else if(bucketCF7==3)
				{
					dyF7=dyF7+33;
					dxF7=dxF7+62;
				}
				else if(bucketCF7==4)
				{
					dyF7=dyF7+3;
					dxF7=dxF7+30;
				}
				else if(bucketCF7==5)
				{
					dyF7=dyF7-33;
					dxF7=dxF7+50;
				}
				
				document.getElementById(elem_idF).style.top = dyF7+"px";
				document.getElementById(elem_idF).style.left = dxF7+"px";
				disableButtonF();
				jqueryFunctionFG();	
			}
			else{
				bucketCF7--;
			}
		}
	}
	
	droppedInF=true;
}



////God is Great 2////
$("#dropF1").click(function(){
	if(reachedClickLevelF==true)
	{
		 resetPopupF();
		 $("#patchF1").css("visibility", "visible");
		 dropClickedF1=true;
		 finalResultF();
	}
})

$("#dropF2").click(function(){
	if(reachedClickLevelF==true)
	{
		 resetPopupF();
		 $("#patchF2").css("visibility", "visible");
		 dropClickedF2=true;
		 finalResultF();
	}
})

$("#dropF3").click(function(){
	if(reachedClickLevelF==true)
	{
		 resetPopupF();
		 $("#patchF3").css("visibility", "visible");
		 dropClickedF3=true;
		 finalResultF();
	}
})

$("#dropF4").click(function(){
	if(reachedClickLevelF==true)
	{
		 resetPopupF();
		 $("#patchF4").css("visibility", "visible");
		 dropClickedF4=true;
		 finalResultF();
	}
})

$("#dropF5").click(function(){
	if(reachedClickLevelF==true)
	{
		 resetPopupF();
		 $("#patchF5").css("visibility", "visible");
		 dropClickedF5=true;
		 finalResultF();
	}
})

$("#dropF6").click(function(){
	if(reachedClickLevelF==true)
	{
		 resetPopupF();
		 $("#patchF6").css("visibility", "visible");
		 dropClickedF6=true;
		 finalResultF();
	}
})


$("#dropF7").click(function(){
	if(reachedClickLevelF==true)
	{
		 resetPopupF();
		 $("#patchF7").css("visibility", "visible");
		 dropClickedF7=true;
		 finalResultF();
	}
})




function finalResultF()
{
	if(dropClickedF1 && dropClickedF2 && dropClickedF3 && dropClickedF4 && dropClickedF5 && dropClickedF6 && dropClickedF7 == true)
	{
            $("#LogoRotator").css("visibility","hidden");
            $("#dummyLoader").css("visibility","visible");
			$("#popDetailCompleted").css("visibility","visible");
			$("#instructionLast").css("visibility","visible");
			$("#instructionFirst").css("visibility","hidden");
			player.SetVar("attempt21","true");
		 //$("#nextB").css("background-color", "#FFE600"); 
         //$("#nextB").removeAttr("disabled");
         //$("#nextB").css( 'cursor', 'pointer' );
		 //popCorrectDetail

	}
}


function resetPopupF()
{
	for(var i=1;i<=7;++i)
	{
		$("#patchF"+i).css("visibility", "hidden");
	}
}


function calculateF()
{
	     $("#submitB").css("background-color", "#808080"); 
		 $("#resetB").css("background-color", "#808080"); 
		 $("#resetB").attr('disabled','disabled');
		 $("#submitB").attr('disabled','disabled');
		 $("#submitB").css( 'cursor', 'default' ); 
		 $("#resetB").css( 'cursor', 'default' );
	
	finalCountF=0;
	bowl1=0; bowl2=0; bowl3=0; bowl4=0 ; bowl5=0; bowl6=0; bowl7=0; 
	 for (var i = 0; i < answerArrayF1.length; ++i)
	    {
			for (var j = 0; j < answerArrayF1.length; ++j)
			{
				if (dropObjectF1[j] == answerArrayF1[i])
				{
					
					bowl1++;
				}
			}
		}
		
	for (var i = 0; i < answerArrayF2.length; ++i)
	    {
			for (var j = 0; j < answerArrayF2.length; ++j)
			{
				if (dropObjectF2[j] == answerArrayF2[i])
				{
					bowl2++;
				}
			}
		}
		
	for (var i = 0; i < answerArrayF3.length; ++i)
	    {
			for (var j = 0; j < answerArrayF3.length; ++j)
			{
				if (dropObjectF3[j] == answerArrayF3[i])
				{
					bowl3++;
				}
			}
		}
		
	for (var i = 0; i < answerArrayF4.length; ++i)
	    {
			for (var j = 0; j < answerArrayF4.length; ++j)
			{
				if (dropObjectF4[j] == answerArrayF4[i])
				{
					bowl4++;
				}
			}
		}
		
	for (var i = 0; i < answerArrayF5.length; ++i)
	    {
			for (var j = 0; j < answerArrayF5.length; ++j)
			{
				if (dropObjectF5[j] == answerArrayF5[i])
				{
					bowl5++;
				}
			}
		}
		
	  for(var i = 0; i < answerArrayF6.length; ++i)
	    {
			for (var j = 0; j < answerArrayF6.length; ++j)
			{
				if (dropObjectF6[j] == answerArrayF6[i])
				{
					bowl6++;
				}
			}
		}
		
	 for(var i = 0; i < answerArrayF7.length; ++i)
	    {
			for (var j = 0; j < answerArrayF7.length; ++j)
			{
				if (dropObjectF7[j] == answerArrayF7[i])
				{
					bowl7++;
				}
			}
		}
		
 finalCountF = bowl1 + bowl2 + bowl3 + bowl4 + bowl5 + bowl6 + bowl7;
 droppedCountF = dropObjectF1.length + dropObjectF2.length + dropObjectF3.length + dropObjectF4.length + dropObjectF5.length + dropObjectF6.length + dropObjectF7.length;
	if( (finalCountF == correctAnswerCountF) && (finalCountF == droppedCountF) )
	{
		$("#popCorrectDetail").css("visibility", "visible");
		for(var i=1;i<=14;++i)
		{
			$("#objectF"+i).css( 'cursor', 'default' );
			$("#objectF"+i).attr('disabled','disabled');
			$("#objectF"+i).css('pointer-events','none');	
		}
	    notCompletedTask=true;
		player.SetVar("attempt21","true");
	
	}
	else
	{
		attemptF++;
		if(attemptF==1)
		{
		  $("#popIncorrectDetail").css("visibility","visible");
		  resetInitialF();
		}
		else
		{
		     $("#submitB").css("background-color", "#808080"); 
			 $("#resetB").css("background-color", "#808080"); 
			 $("#resetB").css("color", "#000"); 
			 $("#submitB").css("color", "#000"); 
			 $("#resetB").attr('disabled','disabled');
			 $("#submitB").attr('disabled','disabled');
			 $("#submitB").css( 'cursor', 'default' ); 
			 $("#resetB").css( 'cursor', 'default' );
			 $("#popIncorrectConfirm").css("visibility", "visible");
			 $('#resetB').css('pointer-events','none');
             $('#submitB').css('pointer-events','none');
			 
			   for(var i=1;i<=14;++i)
				{
				  $("#objectF"+i).css( 'cursor', 'default' );
				  $("#objectF"+i).attr('disabled','disabled');	
				  $("#dropF"+i).css("cursor","pointer");
				  $("#objectF"+i).css('pointer-events','none'); 
				}
			   reachedClickLevelF=true;
			   notCompletedTask=true;
		}
	}
}


resetInitialF = function()
{
	bucketDropCountF1=0;
	bucketDropCountF2=0;
	bucketDropCountF3=0;
	bucketDropCountF4=0;
    bucketDropCountF5=0;
	bucketDropCountF6=0;
	bucketDropCountF7=0;
    
		 
	$("#submitB").css("background-color", "#808080"); 
    $("#resetB").css("background-color", "#808080"); 
	$("#resetB").attr('disabled','disabled');
	$("#submitB").attr('disabled','disabled');
	$("#submitB").css( 'cursor', 'default' ); 
	$("#resetB").css( 'cursor', 'default' );
	$("#submitB").css("color","#333");
	$("#resetB").css("color","#333");
	$('#resetB').css('pointer-events','none');
    $('#submitB').css('pointer-events','none');
		 
	percentageFA=0;
	percentageFB=0;
    percentageFC=0;
    percentageFD=0;
	percentageFE=0;
    percentageFF=0;
    percentageFG=0;

		
	dropArrayFX1= [];
	dropArrayFY1= [];
	dropArrayFX2= [];
	dropArrayFY2= [];
	dropArrayFX3= [];
	dropArrayFY3= [];
	dropArrayFX4= [];
	dropArrayFY4= [];
	dropArrayFX5= [];
	dropArrayFY5= [];
	dropArrayFX6= [];
	dropArrayFY6= [];
	dropArrayFX7= [];
	dropArrayFY7= [];
	
	
	
    dropObjectF1= [];
	dropObjectF2= [];
	dropObjectF3= [];
	dropObjectF4= [];
	dropObjectF5= [];
	dropObjectF6= [];
	dropObjectF7= [];
	
		
	bucketCF1=0;
    countBF1=0;
	bucketCF2=0;
    countBF2=0;
	bucketCF3=0;
    countBF3=0;
	bucketCF4=0;
    countBF4=0;
	bucketCF5=0;
    countBF5=0;
	bucketCF6=0;
    countBF6=0;
	bucketCF7=0;
    countBF7=0;
	
	lastfunF();
	
	for(var i=1;i<=14;++i)
	{
	document.getElementById("objectF"+i).style.disabled = false;
	document.getElementById("objectF"+i).disabled = false;
	document.getElementById("objectF"+i).style.cursor = "pointer";
	document.getElementById("objectF"+i).draggable = true;
	}
}


lastfunF = function()
{
        for(var i=1;i<=3;++i)
	     {
			document.getElementById("objectF"+i).style.top = yF1+"px";
			document.getElementById("objectF"+i).style.left = xF1+"px";
			//console.log(yS1 +"yS1" + xS1 +"xS1");
		 } 
		 
		 for(var i=4;i<=7;++i)
	     {
			document.getElementById("objectF"+i).style.top = yF2+"px";
			document.getElementById("objectF"+i).style.left = xF2+"px";
		 } 

		 for(var i=8;i<=9;++i)
	     {
			document.getElementById("objectF"+i).style.top = yF3+"px";
			document.getElementById("objectF"+i).style.left = xF3+"px";
		 } 
		 
		 for(var i=10;i<=11;++i)
	     {
			document.getElementById("objectF"+i).style.top = yF4+"px";
			document.getElementById("objectF"+i).style.left = xF4+"px";
		 } 
		 
		  for(var i=12;i<=14;++i)
	     {
			document.getElementById("objectF"+i).style.top = yF5+"px";
			document.getElementById("objectF"+i).style.left = xF5+"px";
		 } 
		 
}

jqueryFunctionFA = function()
{
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		  
		if((xTF == xF1)&&(yTF == yF1))
		{
		  dropArrayFX1.push(xTF);
		  dropArrayFY1.push(yTF);
	    }
		else if((xTF == xF2)&&(yTF == yF2))
		{
		  dropArrayFX1.push(xTF);
		  dropArrayFY1.push(yTF);
		}
		else if((xTF == xF3)&&(yTF == yF3))
		{	
		  dropArrayFX1.push(xTF);
		  dropArrayFY1.push(yTF);
		}
		else if((xTF == xF4)&&(yTF == yF4))
		{
		  dropArrayFX1.push(xTF);
		  dropArrayFY1.push(yTF);
		}
		else if((xTF == xF5)&&(yTF == yF5))
		{	
		  dropArrayFX1.push(xTF);
		  dropArrayFY1.push(yTF);
		}	
}	



jqueryFunctionFB = function()
{
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 
		if((xTF == xF1)&&(yTF == yF1))
		{
		  dropArrayFX2.push(xTF);
		  dropArrayFY2.push(yTF);
	    }
		else if((xTF == xF2)&&(yTF == yF2))
		{
		  dropArrayFX2.push(xTF);
		  dropArrayFY2.push(yTF);
		}
		else if((xTF == xF3)&&(yTF == yF3))
		{	
		  dropArrayFX2.push(xTF);
		  dropArrayFY2.push(yTF);
		}
		else if((xTF == xF4)&&(yTF == yF4))
		{	
		  dropArrayFX2.push(xTF);
		  dropArrayFY2.push(yTF);
		}
		else if((xTF == xF5)&&(yTF == yF5))
		{
		  dropArrayFX2.push(xTF);
		  dropArrayFY2.push(yTF);
		}
		
}



jqueryFunctionFC = function()
{
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 
		if((xTF == xF1)&&(yTF == yF1))
		{
		  dropArrayFX3.push(xTF);
		  dropArrayFY3.push(yTF);
	    }
		else if((xTF == xF2)&&(yTF == yF2))
		{
		  dropArrayFX3.push(xTF);
		  dropArrayFY3.push(yTF);
		}
		else if((xTF == xF3)&&(yTF == yF3))
		{	
		  dropArrayFX3.push(xTF);
		  dropArrayFY3.push(yTF);
		}
		else if((xTF == xF4)&&(yTF == yF4))
		{	
		  dropArrayFX3.push(xTF);
		  dropArrayFY3.push(yTF);
		}
		else if((xTF == xF5)&&(yTF == yF5))
		{
		  dropArrayFX3.push(xTF);
		  dropArrayFY3.push(yTF);
		}
		
}


jqueryFunctionFD = function()
{
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 
		if((xTF == xF1)&&(yTF == yF1))
		{
		  dropArrayFX4.push(xTF);
		  dropArrayFY4.push(yTF);
	    }
		else if((xTF == xF2)&&(yTF == yF2))
		{
		  dropArrayFX4.push(xTF);
		  dropArrayFY4.push(yTF);
		}
		else if((xTF == xF3)&&(yTF == yF3))
		{	
		  dropArrayFX4.push(xTF);
		  dropArrayFY4.push(yTF);
		}
		else if((xTF == xF4)&&(yTF == yF4))
		{	
		  dropArrayFX4.push(xTF);
		  dropArrayFY4.push(yTF);
		}
		else if((xTF == xF5)&&(yTF == yF5))
		{
		  dropArrayFX4.push(xTF);
		  dropArrayFY4.push(yTF);
		}
		
}



jqueryFunctionFE = function()
{
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 
		if((xTF == xF1)&&(yTF == yF1))
		{
		  dropArrayFX5.push(xTF);
		  dropArrayFY5.push(yTF);
	    }
		else if((xTF == xF2)&&(yTF == yF2))
		{
		  dropArrayFX5.push(xTF);
		  dropArrayFY5.push(yTF);
		}
		else if((xTF == xF3)&&(yTF == yF3))
		{	
		  dropArrayFX5.push(xTF);
		  dropArrayFY5.push(yTF);
		}
		else if((xTF == xF4)&&(yTF == yF4))
		{	
		  dropArrayFX5.push(xTF);
		  dropArrayFY5.push(yTF);
		}
		else if((xTF == xF5)&&(yTF == yF5))
		{
		  dropArrayFX5.push(xTF);
		  dropArrayFY5.push(yTF);
		}
		
}


jqueryFunctionFF = function()
{
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 
		if((xTF == xF1)&&(yTF == yF1))
		{
		  dropArrayFX6.push(xTF);
		  dropArrayFY6.push(yTF);
	    }
		else if((xTF == xF2)&&(yTF == yF2))
		{
		  dropArrayFX6.push(xTF);
		  dropArrayFY6.push(yTF);
		}
		else if((xTF == xF3)&&(yTF == yF3))
		{	
		  dropArrayFX6.push(xTF);
		  dropArrayFY6.push(yTF);
		}
		else if((xTF == xF4)&&(yTF == yF4))
		{	
		  dropArrayFX6.push(xTF);
		  dropArrayFY6.push(yTF);
		}
		else if((xTF == xF5)&&(yTF == yF5))
		{
		  dropArrayFX6.push(xTF);
		  dropArrayFY6.push(yTF);
		}
		
}



jqueryFunctionFG = function()
{
		 $("#resetB").css("background-color", "#FFE600"); 
		 $("#resetB").removeAttr("disabled");
		 $("#resetB").css( 'cursor', 'pointer' );
		 $("#submitB").css("background-color", "#FFE600"); 
		 $("#submitB").removeAttr("disabled");
		 $("#submitB").css( 'cursor', 'pointer' ); 
		 $('#resetB').css('pointer-events','auto');
         $('#submitB').css('pointer-events','auto');
		 
		if((xTF == xF1)&&(yTF == yF1))
		{
		  dropArrayFX7.push(xTF);
		  dropArrayFY7.push(yTF);
	    }
		else if((xTF == xF2)&&(yTF == yF2))
		{
		  dropArrayFX7.push(xTF);
		  dropArrayFY7.push(yTF);
		}
		else if((xTF == xF3)&&(yTF == yF3))
		{	
		  dropArrayFX7.push(xTF);
		  dropArrayFY7.push(yTF);
		}
		else if((xTF == xF4)&&(yTF == yF4))
		{	
		  dropArrayFX7.push(xTF);
		  dropArrayFY7.push(yTF);
		}
		else if((xTF == xF5)&&(yTF == yF5))
		{
		  dropArrayFX7.push(xTF);
		  dropArrayFY7.push(yTF);
		}
		
}










//////////////////////// TIMER SCRIPT ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
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
			timer=0;
			display.textContent = minutes + ":" + "00";
			$("#timeUpPop").css("visibility","visible");
			$("#instructionLast").css("visibility","visible");
			$("#instructionFirst").css("visibility","hidden");
			$("#LogoRotator").css("visibility","hidden");
            $("#dummyLoader").css("visibility","visible");
			player.SetVar("attempt21","true");
			end();
        }
		}
    }, 1000);
	
}

function end()
{
	//clearInterval(timer);		
}

function timerStart()
{
	var fiveMinutes = 60 * 20,
    display = document.querySelector('#time');
	startTimer(fiveMinutes, display);
}
