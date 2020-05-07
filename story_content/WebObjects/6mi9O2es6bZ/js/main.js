//Storyline Code//
//var player = window.parent.GetPlayer();	
//var revisit = false;
//revisit = player.GetVar("attempt22");
/////////////////

var droppedIn=false;
var tickArray = new Array();
var droppedInT=false;
var tickArrayT = new Array();
var droppedInL=false;
var tickArrayL = new Array();

var jqueryFunction;
var jqueryFunctionP;
var jqueryFunctionY;
var jqueryFunctionB;
var jqueryFunctionR;
var jqueryFunctionT;
var jqueryFunctionTP;
var jqueryFunctionTY;
var jqueryFunctionTB;
var jqueryFunctionTR;
var jqueryFunctionL;
var jqueryFunctionLP;
var jqueryFunctionLY;
var jqueryFunctionLB;
var jqueryFunctionLR;

var resetInitial;
var allDivTd = document.getElementById("test");
var resetInitialT;
var allDivTdT = document.getElementById("test");
var resetInitialL;
var allDivTdL = document.getElementById("test");
//alert(allDivTd);
var percentage=0;
var percentageP=0;
var percentageY=0;
var percentageB=0;
var percentageR=0;
var percentageT=0;
var percentageTP=0;
var percentageTY=0;
var percentageTB=0;
var percentageTR=0;
var percentageL=0;
var percentageLP=0;
var percentageLY=0;
var percentageLB=0;
var percentageLR=0;

var bucketDropCount1=0;
var bucketDropCount2=0;
var bucketDropCount3=0;
var bucketDropCount4=0;
var bucketDropCount5=0;
var bucketDropCountT1=0;
var bucketDropCountT2=0;
var bucketDropCountT3=0;
var bucketDropCountT4=0;
var bucketDropCountT5=0;
var bucketDropCountL1=0;
var bucketDropCountL2=0;
var bucketDropCountL3=0;
var bucketDropCountL4=0;
var bucketDropCountL5=0;

var dropArrayX1= new Array();
var dropArrayY1= new Array();
var dropArrayX2= new Array();
var dropArrayY2= new Array();
var dropArrayX3= new Array();
var dropArrayY3= new Array();
var dropArrayX4= new Array();
var dropArrayY4= new Array();
var dropArrayX5= new Array();
var dropArrayY5= new Array();
var dropArrayTX1= new Array();
var dropArrayTY1= new Array();
var dropArrayTX2= new Array();
var dropArrayTY2= new Array();
var dropArrayTX3= new Array();
var dropArrayTY3= new Array();
var dropArrayTX4= new Array();
var dropArrayTY4= new Array();
var dropArrayTX5= new Array();
var dropArrayTY5= new Array();
var dropArrayLX1= new Array();
var dropArrayLY1= new Array();
var dropArrayLX2= new Array();
var dropArrayLY2= new Array();
var dropArrayLX3= new Array();
var dropArrayLY3= new Array();
var dropArrayLX4= new Array();
var dropArrayLY4= new Array();
var dropArrayLX5= new Array();
var dropArrayLY5= new Array();

var dropObject1= new Array();
var dropObject2= new Array();
var dropObject3= new Array();
var dropObject4= new Array();
var dropObject5= new Array();
var dropObjectT1= new Array();
var dropObjectT2= new Array();
var dropObjectT3= new Array();
var dropObjectT4= new Array();
var dropObjectT5= new Array();
var dropObjectL1= new Array();
var dropObjectL2= new Array();
var dropObjectL3= new Array();
var dropObjectL4= new Array();
var dropObjectL5= new Array();

var draggedObject=0;
var draggedObjectT=0;
var draggedObjectL=0;

var element1;
var position1;
var element2;
var position2;
var element3;
var position3;
var element4;
var position4;

var elementT1;
var positionT1;
var elementT2;
var positionT2;
var elementT3;
var positionT3;
var elementT4;
var positionT4;

var elementL1;
var positionL1;
var elementL2;
var positionL2;
var elementL3;
var positionL3;
var elementL4;
var positionL4;


var x1, y1, x2, y2, x3, y3, x4, y4;
var xT1, yT1, xT2, yT2, xT3, yT3, xT4, yT4;
var xL1, yL1, xL2, yL2, xL3, yL3, xL4, yL4;

var elem_id, elem_idT, elem_idL;
var xyz, xyzT, xyzL;
var elementT,elementTT, elementTL ;
var positionT, positionTT, positionTL;
var xT, xTT, xTL;
var yT, yTT, yTL;
var objectT, objectTT, objectTL;

var zindexC=0;
var bucketC1=0;
var countB1=0;
var bucketC2=0;
var countB2=0;
var bucketC3=0;
var countB3=0;
var bucketC4=0;
var countB4=0;
var bucketC5=0;
var countB5=0;

var zindexTC=0;
var bucketTC1=0;
var countTB1=0;
var bucketTC2=0;
var countTB2=0;
var bucketTC3=0;
var countTB3=0;
var bucketTC4=0;
var countTB4=0;
var bucketTC5=0;
var countTB5=0;

var zindexLC=0;
var bucketLC1=0;
var countLB1=0;
var bucketLC2=0;
var countLB2=0;
var bucketLC3=0;
var countLB3=0;
var bucketLC4=0;
var countLB4=0;
var bucketLC5=0;
var countLB5=0;

var finalCount=0;
var bowl1=0;
var bowl2=0;
var bowl3=0;
var bowl4=0;
var bowl5=0;

var finalCountT=0;
var bowlT1=0;
var bowlT2=0;
var bowlT3=0;
var bowlT4=0;
var bowlT5=0;

var finalCountL=0;
var bowlL1=0;
var bowlL2=0;
var bowlL3=0;
var bowlL4=0;
var bowlL5=0;


//////////////Answers Level 1/////////////////
var answerArray1= new Array("1","2","3","4","5","6","7","8","9","10","11","12");
var answerArray2= new Array("1","2","3","4","5","6","7","8","9","10","11","12");
var answerArray3= new Array("4","5","6","7","8");
var answerArray4= new Array("1","2","3","4","5","6","7","8");
var answerArray5= new Array("4","5","6","7","8");

//////////////Answers Level 2/////////////////
var answerArrayT1= new Array("1","2","3","4","5","6","7","8","11","12");
var answerArrayT2= new Array("1","2","3","4","5","6","7","8","9","10","11","12");
var answerArrayT3= new Array("1","2","3","4","5","6","7","8");
var answerArrayT4= new Array("1","2","3","4","5","9","10");
var answerArrayT5= new Array("1","2","3","4","5");

//////////////Answers Level 3/////////////////
var answerArrayL1= new Array("1","2","3","4","5","6","7","8","9","10","11","12");
var answerArrayL2= new Array("1","2","3","4","5","6","7","8","9","10","11","12");
var answerArrayL3= new Array("1","2","3","4","5","6","7","8","9","10","11","12");
var answerArrayL4= new Array("7","8","9","10");



var attempt=0;
var attemptT=0;
var attemptL=0;

var courseLevel=0;

var resultPopCount1=false;
var resultPopCount2=false;
var resultPopCount3=false;
var resultPopCount4=false;
var resultPopCount5=false;

var resultPopCountT1=false;
var resultPopCountT2=false;
var resultPopCountT3=false;
var resultPopCountT4=false;
var resultPopCountT5=false;

var resultPopCountL1=false;
var resultPopCountL2=false;
var resultPopCountL3=false;
var resultPopCountL4=false;
var resultPopCountL5=false;

var interactiveCompleted=false;
var notCompletedTask=false;
var completedStatus=false;

/////////////////////////////JQUERY////////////////////////////
$(document).ready(function() {	
  $("#popExit").css("visibility", "hidden");
  $("#closeBtn").css('cursor','pointer');
  $("#correct").css("visibility", "hidden");
  $("#try").css("visibility", "hidden");
  $("#goodjob").css("visibility", "hidden");
  $("#tryagain").css("visibility", "hidden");
  $("#tryIncorrect").css("visibility", "hidden");
  $("#UK_buk_1").css("visibility", "hidden");
  $("#UK_buk_R").css("visibility", "hidden");
  $("#UK_buk_TR").css("visibility", "hidden");
  $("#UK_buk_LR").css("visibility", "hidden");
  $("#UK_buk_G").css("visibility", "hidden");
  $("#UK_buk_TG").css("visibility", "hidden");
  $("#UK_buk_LG").css("visibility", "hidden");
  $("#UK_buk_P").css("visibility", "hidden");
  $("#UK_buk_TP").css("visibility", "hidden");
  $("#UK_buk_LP").css("visibility", "hidden");
  $("#UK_buk_B").css("visibility", "hidden");
  $("#UK_buk_TB").css("visibility", "hidden");
  $("#UK_buk_LB").css("visibility", "hidden");
  $("#UK_buk_Y").css("visibility", "hidden");
  $("#UK_buk_TY").css("visibility", "hidden");
  $("#UK_buk_LY").css("visibility", "hidden");
  $("#openModal").css("visibility", "visible");
  
  $("#popDetailCompleted").css("visibility", "hidden");
  $("#instructionLast").css("visibility", "hidden");
  $("#instructionFirst").css("visibility", "visible");
  $("#poptimeUp").css("visibility","hidden");
  
  
  
  $("#LogoRotator").css("visibility","hidden");
  $("#dummyLoader").css("visibility","visible");
  
  $("#cont_inner").css("visibility", "visible");
  $("#cont_inner2").css("visibility", "hidden");
  $("#cont_inner3").css("visibility", "hidden");
 
  $("#submitID").attr('disabled','disabled');
  $('#submitID').css('pointer-events','none');
  $("#nextID").attr('disabled','disabled');
  $("#retryID").attr('disabled','disabled');
  //$("#nextID").removeAttr("disabled");
  $("#submitID").css("background-color", "#C7C7C7"); 
  $("#nextID").css("background-color", "#C7C7C7");
  $("#retryID").css("background-color", "#C7C7C7");
  
   $('#nextID').css('pointer-events','none');
   $('#retryID').css('pointer-events','none');
 // $('#submitID"').css( 'cursor', 'pointer' );
  for(var i=1;i<=4;++i)
  {
    $("#g"+i).css("visibility", "hidden");
	$("#gT"+i).css("visibility", "hidden");
	$("#gL"+i).css("visibility", "hidden");
	$("#ginviButton").css("visibility", "hidden");
	$("#ginviButton").attr('disabled','disabled');
	$("#ginviButtonT").css("visibility", "hidden");
	$("#ginviButtonT").attr('disabled','disabled');
	$("#ginviButtonL").css("visibility", "hidden");
	$("#ginviButtonL").attr('disabled','disabled');
    $("#p"+i).css("visibility", "hidden");
	$("#pT"+i).css("visibility", "hidden");
	$("#pL"+i).css("visibility", "hidden");
	$("#pinviButton").css("visibility", "hidden");
	$("#pinviButton").attr('disabled','disabled');
	$("#pinviButtonT").css("visibility", "hidden");
	$("#pinviButtonT").attr('disabled','disabled');
	$("#pinviButtonL").css("visibility", "hidden");
	$("#pinviButtonL").attr('disabled','disabled');
    $("#y"+i).css("visibility", "hidden");
	$("#yT"+i).css("visibility", "hidden");
	$("#yL"+i).css("visibility", "hidden");
	$("#yinviButton").css("visibility", "hidden");
	$("#yinviButton").attr('disabled','disabled');
	$("#yinviButtonT").css("visibility", "hidden");
	$("#yinviButtonT").attr('disabled','disabled');
	$("#yinviButtonL").css("visibility", "hidden");
	$("#yinviButtonL").attr('disabled','disabled');
	$("#b"+i).css("visibility", "hidden");
	$("#bT"+i).css("visibility", "hidden");
	$("#bL"+i).css("visibility", "hidden");
	$("#binviButton").css("visibility", "hidden");
	$("#binviButton").attr('disabled','disabled');
	$("#binviButtonT").css("visibility", "hidden");
	$("#binviButtonT").attr('disabled','disabled');
	$("#binviButtonL").css("visibility", "hidden");
	$("#binviButtonL").attr('disabled','disabled');
	$("#r"+i).css("visibility", "hidden");
	$("#rT"+i).css("visibility", "hidden");
	$("#rL"+i).css("visibility", "hidden");
	$("#rinviButton").css("visibility", "hidden");
	$("#rinviButton").attr('disabled','disabled');
	$("#rinviButtonT").css("visibility", "hidden");
	$("#rinviButtonT").attr('disabled','disabled');
	$("#rinviButtonL").css("visibility", "hidden");
	$("#rinviButtonL").attr('disabled','disabled');
	
	//$("#drop_zone1").attr('disabled','disabled');
	
  }
  
  
  for(var i=1;i<=12;++i)
  {
	 $("#object"+i).css( 'cursor', 'pointer' ); 
	 $("#objectT"+i).css( 'cursor', 'pointer' ); 
	 $("#objectL"+i).css( 'cursor', 'pointer' );
  }
  
  $("#NoExit").click(function(){
	
	$("#popExit").css("visibility", "hidden");
	if(interactiveCompleted==false)
	{
		notCompletedTask=false;
		$("#LogoRotator").css("visibility","visible");
		$("#dummyLoader").css("visibility","hidden");
	}
  })
  
  $("#myHref").on('click', function() {
    $("#openModal").css("visibility", "hidden");
	$("#LogoRotator").css("visibility","visible");
    $("#dummyLoader").css("visibility","hidden");
	timerStart();
  });
  
  $("#myCorrect").on('click', function() {
   $("#correct").css("visibility", "hidden");
   if(courseLevel >=2)
   {
     $("#popDetailCompleted").css("visibility", "visible");
	 $("#instructionLast").css("visibility", "visible");
	 $("#instructionFirst").css("visibility", "hidden");
   }
   
   completedStatusTrack();
  });
  
  
  
  $("#mytryIncorrect").on('click', function() {
   $("#tryIncorrect").css("visibility", "hidden");
   
  });
  
  $("#closeBtn").click(function(){
	revisit = player.GetVar("attempt22");
	if(revisit)
	{
		player.SetVar("exit22","true");
	}
	else
	{
		$("#popExit").css("visibility", "visible");	
		notCompletedTask=true;
		$("#LogoRotator").css("visibility","hidden");
		$("#dummyLoader").css("visibility","visible");
	}
	    
	
})

$("#yesExit").click(function(){
	
	player.SetVar("Task22","true");
	player.SetVar("exit22","true");
	

})
  


/////////Clicking on buckets @ last/////////
   $("#ginviButton").on('click', function() {
   $("#UK_buk_G").css("visibility", "visible");
   resultPopCount1=true;
   nextButtonClick();
   });
  
  $("#myHrefCloseG").on('click', function() {
    $("#UK_buk_G").css("visibility", "hidden");
	
  });
  
  $("#pinviButton").on('click', function() {
   $("#UK_buk_P").css("visibility", "visible");
   resultPopCount2=true;
    nextButtonClick();
   });
  
  $("#myHrefCloseP").on('click', function() {
    $("#UK_buk_P").css("visibility", "hidden");
	
  });
  
  $("#yinviButton").on('click', function() {
   $("#UK_buk_Y").css("visibility", "visible");
    resultPopCount3=true;
    nextButtonClick();
   });
  
  $("#myHrefCloseY").on('click', function() {
    $("#UK_buk_Y").css("visibility", "hidden");
	
  });
  
  $("#binviButton").on('click', function() {
   $("#UK_buk_B").css("visibility", "visible");
    resultPopCount4=true;
    nextButtonClick();
   });
  
  $("#myHrefCloseB").on('click', function() {
    $("#UK_buk_B").css("visibility", "hidden");
	
  });
  
  $("#rinviButton").on('click', function() {
   $("#UK_buk_R").css("visibility", "visible");
    resultPopCount5=true;
    nextButtonClick();
   });
  
  $("#myHrefCloseR").on('click', function() {
    $("#UK_buk_R").css("visibility", "hidden");
	
  });
  
//////////////////////////////////////////////
  
$("#myIncorrect").on('click', function() {
   $("#try").css("visibility", "hidden");
     if(courseLevel==0)
	  { 
	  
	     resetInitial();
	  }
      else if(courseLevel==1)
	  {
		 resetInitialT();
	  }
	  else if(courseLevel==2)
	  {
		 resetInitialL();
	  }
   
   
  });
  
$("#nextID").on('click', function() {
	   courseLevel++;
	   if(courseLevel==1)
	   {
		  $("#cont_inner").css("visibility", "hidden");
          $("#cont_inner2").css("visibility", "visible");  
		  document.getElementById("headingBucket").innerHTML = "Trade Payables";
		  $("#nextID").css("background-color", "#C7C7C7"); 
	      $("#nextID").attr('disabled','disabled');
	      $("#nextID").css( 'cursor', 'default' );
		  $('#nextID').css('pointer-events','none');
	   }
	   else if(courseLevel==2)
	   {
		  $("#cont_inner2").css("visibility", "hidden");
          $("#cont_inner3").css("visibility", "visible");  
		  $("#nextID").css("visibility", "hidden");
		  $('#nextID').css('pointer-events','none');
		  document.getElementById("headingBucket").innerHTML = "Sales";
	   }
	   
	    
	 
});



$("#submitID").on('click', function() {
      if(courseLevel==0)
	  { 
	     calculate();
	  }
      else if(courseLevel==1)
	  {
		  
		 calculateT(); 
	  }
	  else if(courseLevel==2)
	  {
		 calculateL(); 
	  }

});

$("#retryID").on('click', function() {
      if(courseLevel==0)
	  { 
	     resetAll();
	  }
	  else if(courseLevel==1)
	  {
		 resetAllT(); 
	  }
	  else if(courseLevel==2)
	  {
		 resetAllL(); 
	  }


});




$(function(){
 
$('#LogoRotator').addClass('<style>#LogoRotator{ content: ""; position: absolute; top: 2px; left: 2px; right: 2px; bottom: 2px; border-radius: 50%; border: 1px solid transparent; border-top-color: #e74c3c; -ms-animation-play-state: paused; }</style>');
		
	for(var i=1;i<=5;++i)
	{
	  for(var j=1;j<=4;++j)
		  {
			$("#t"+i+j).css("visibility", "hidden");  
			$("#tT"+i+j).css("visibility", "hidden");  
			$("#tL"+i+j).css("visibility", "hidden");
		  }
	}
	
})
	
	
	
	
////////////////////Level-1 //////////////////////////

completedStatusTrack = function()
{
	    $("#nextID").css( 'cursor', 'pointer' ); 
	    $("#nextID").css("background-color", "#FFCC00");
	    $("#nextID").removeAttr("disabled");
		$('#nextID').css('pointer-events','auto');
	    
		//$("#goodjob").css("visibility", "visible");
		$("#ginviButton").attr('disabled','disabled');
		$("#ginviButton").css( 'cursor', 'default' );
		$("#pinviButton").attr('disabled','disabled');
		$("#pinviButton").css( 'cursor', 'default' );
		$("#yinviButton").attr('disabled','disabled');
		$("#yinviButton").css( 'cursor', 'default' );
		$("#binviButton").attr('disabled','disabled');
		$("#binviButton").css( 'cursor', 'default' );
		$("#rinviButton").attr('disabled','disabled');
		$("#rinviButton").css( 'cursor', 'default' );
}
	
resetInitial = function()
	{
		  for(var i=1;i<=5;++i)
			{
			  for(var j=1;j<=4;++j)
				  {
					$("#t"+i+j).css("visibility", "hidden");  
				  }
			}
			
		  for(var i=1;i<=4;++i)
		  {
			$("#g"+i).css("visibility", "hidden");
			$("#ginviButton").css("visibility", "hidden");
			$("#ginviButton").attr('disabled','disabled');
			$("#p"+i).css("visibility", "hidden");
			$("#pinviButton").css("visibility", "hidden");
			$("#pinviButton").attr('disabled','disabled');
			$("#y"+i).css("visibility", "hidden");
			$("#yinviButton").css("visibility", "hidden");
			$("#yinviButton").attr('disabled','disabled');
			$("#b"+i).css("visibility", "hidden");
			$("#binviButton").css("visibility", "hidden");
			$("#binviButton").attr('disabled','disabled');
			$("#r"+i).css("visibility", "hidden");
			$("#rinviButton").css("visibility", "hidden");
			$("#rinviButton").attr('disabled','disabled');
		  }
			
        for(var i=1;i<=12;++i)
	     {
			$("#object"+i).show();
		 } 
		 
		 $("#submitID").css("background-color", "#C7C7C7"); 
		 $("#retryID").css("background-color", "#C7C7C7"); 
		 $("#retryID").attr('disabled','disabled');
		 $("#submitID").attr('disabled','disabled');
		 $("#submitID").css( 'cursor', 'default' ); 
		 $("#retryID").css( 'cursor', 'default' );
		 $('#submitID').css('pointer-events','none');
		 $('#retryID').css('pointer-events','none');
		
		percentage=0;
		percentageP=0;
        percentageY=0;
        percentageB=0;
        percentageR=0;
		
		bucketDropCount1=0;
		bucketDropCount2=0;
		bucketDropCount3=0;
		bucketDropCount4=0;
		bucketDropCount5=0;
		
		dropArrayX1= [];
		dropArrayY1= [];
		dropArrayX2= [];
		dropArrayY2= [];
		dropArrayX3= [];
		dropArrayY3= [];
		dropArrayX4= [];
		dropArrayY4= [];
		dropArrayX5= [];
		dropArrayY5= [];
		dropObject1= [];
		dropObject2= [];
		dropObject3= [];
		dropObject4= [];
		dropObject5= [];
		
		bucketC1=0;
        countB1=0;
		bucketC2=0;
        countB2=0;
		bucketC3=0;
        countB3=0;
		bucketC4=0;
        countB4=0;
		bucketC5=0;
        countB5=0;
		
}
	
	jqueryFunction = function()
	{
		
		 $("#submitID").css("background-color", "#FFCC00"); 
		 $("#retryID").css("background-color", "#FFCC00"); 
		 $("#retryID").removeAttr("disabled");
		 $("#retryID").css( 'cursor', 'pointer' );
		 $("#submitID").removeAttr("disabled");
		 $("#submitID").css( 'cursor', 'pointer' ); 
		 $('#submitID').css('pointer-events','auto');
		 $('#retryID').css('pointer-events','auto');
		 
		 
		 $("#t1"+bucketDropCount1).css("visibility", "visible");
		 for(var i=1;i<=4;++i)
	     {
			$("#g"+i).css("visibility", "hidden"); 
		 }
		 $("#g"+bucketDropCount1).css("visibility", "visible");
		 
		if((xT == x1)&&(yT == y1))
		{
			
		  $("#t1"+bucketDropCount1).html("1");
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{
		  $("#t1"+bucketDropCount1).html("2");	
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{
		  $("#t1"+bucketDropCount1).html("3");	
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{
		  $("#t1"+bucketDropCount1).html("4");	
		  dropArrayX1.push(xT);
		  dropArrayY1.push(yT);
		}
		
	}
	
	jqueryFunctionP = function()
	{
		 $("#submitID").css("background-color", "#FFCC00"); 
		 $("#submitID").removeAttr("disabled");
		 $("#submitID").css( 'cursor', 'pointer' ); 
		 $("#retryID").css("background-color", "#FFCC00"); 
		 $("#retryID").removeAttr("disabled");
		 $("#retryID").css( 'cursor', 'pointer' );
		 $('#submitID').css('pointer-events','auto');
		 $('#retryID').css('pointer-events','auto');
		 $("#t2"+bucketDropCount2).css("visibility", "visible");
		 for(var i=1;i<=4;++i)
	     {
			$("#p"+i).css("visibility", "hidden"); 
		 }
		 $("#p"+bucketDropCount2).css("visibility", "visible");
		 
		
		if((xT == x1)&&(yT == y1))
		{
			
		  $("#t2"+bucketDropCount2).html("1");
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{
		  $("#t2"+bucketDropCount2).html("2");	
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{
		  $("#t2"+bucketDropCount2).html("3");	
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{
		  $("#t2"+bucketDropCount2).html("4");	
		  dropArrayX2.push(xT);
		  dropArrayY2.push(yT);
		}
		
	}
	
	jqueryFunctionY = function()
	{
		 $("#submitID").css("background-color", "#FFCC00"); 
		 $("#submitID").removeAttr("disabled");
		 $("#submitID").css( 'cursor', 'pointer' ); 
		 $("#retryID").css("background-color", "#FFCC00"); 
		 $("#retryID").removeAttr("disabled");
		 $("#retryID").css( 'cursor', 'pointer' );
		 $("#t3"+bucketDropCount3).css("visibility", "visible");
		  $("#submitID").css( 'cursor', 'pointer' );
		  $('#submitID').css('pointer-events','auto');
		 $('#retryID').css('pointer-events','auto');
		 for(var i=1;i<=4;++i)
	     {
			$("#y"+i).css("visibility", "hidden"); 
		 }
		 $("#y"+bucketDropCount3).css("visibility", "visible");
		 
		if((xT == x1)&&(yT == y1))
		{
			
		  $("#t3"+bucketDropCount3).html("1");
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{
		  $("#t3"+bucketDropCount3).html("2");	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{
		  $("#t3"+bucketDropCount3).html("3");	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{
		  $("#t3"+bucketDropCount3).html("4");	
		  dropArrayX3.push(xT);
		  dropArrayY3.push(yT);
		}
		
	}
	
	jqueryFunctionB = function()
	{
		 $("#submitID").css("background-color", "#FFCC00"); 
		 $("#submitID").removeAttr("disabled");
		 $("#submitID").css( 'cursor', 'pointer' ); 
		 $("#retryID").css("background-color", "#FFCC00"); 
		 $("#retryID").removeAttr("disabled");
		 $("#retryID").css( 'cursor', 'pointer' );
		 $('#submitID').css('pointer-events','auto');
		 $('#retryID').css('pointer-events','auto');
		 $("#t4"+bucketDropCount4).css("visibility", "visible");
		 for(var i=1;i<=4;++i)
	     {
			$("#b"+i).css("visibility", "hidden"); 
		 }
		 $("#b"+bucketDropCount4).css("visibility", "visible");
		 
		if((xT == x1)&&(yT == y1))
		{
			
		  $("#t4"+bucketDropCount4).html("1");
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{
		  $("#t4"+bucketDropCount4).html("2");	
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{
		  $("#t4"+bucketDropCount4).html("3");	
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{
		  $("#t4"+bucketDropCount4).html("4");	
		  dropArrayX4.push(xT);
		  dropArrayY4.push(yT);
		}
	}
	
	jqueryFunctionR = function()
	{
		 $("#submitID").css("background-color", "#FFCC00"); 
		 $("#submitID").removeAttr("disabled");
		 $("#submitID").css( 'cursor', 'pointer' ); 
		 $("#retryID").css("background-color", "#FFCC00"); 
		 $("#retryID").removeAttr("disabled");
		 $("#retryID").css( 'cursor', 'pointer' );
		 $("#t5"+bucketDropCount5).css("visibility", "visible");
		 $('#submitID').css('pointer-events','auto');
		 $('#retryID').css('pointer-events','auto');
		 for(var i=1;i<=4;++i)
	     {
			$("#r"+i).css("visibility", "hidden"); 
		 }
		 $("#r"+bucketDropCount5).css("visibility", "visible");
		
		if((xT == x1)&&(yT == y1))
		{
			
		  $("#t5"+bucketDropCount5).html("1");
		  dropArrayX5.push(xT);
		  dropArrayY5.push(yT);
	    }
		else if((xT == x2)&&(yT == y2))
		{
		  $("#t5"+bucketDropCount5).html("2");	
		  dropArrayX5.push(xT);
		  dropArrayY5.push(yT);
		}
		else if((xT == x3)&&(yT == y3))
		{
		  $("#t5"+bucketDropCount5).html("3");	
		  dropArrayX5.push(xT);
		  dropArrayY5.push(yT);
		}
		else if((xT == x4)&&(yT == y4))
		{
		  $("#t5"+bucketDropCount5).html("4");	
		  dropArrayX5.push(xT);
		  dropArrayY5.push(yT);
		}
		
	}
	
});

//////////////////////////////////////////////////////////////

function _(id){
	    return document.getElementById(id);
}

function resetAll(){
	resetInitial();
};


function drag_start(event){
	//_('app_status').innerHTML = "Dragging the "+ event.target.getAttribute('id');
	event.dataTransfer.dropEffect = "copy";

	event.dataTransfer.setData("text",event.target.getAttribute('id'));
	//activeElements
	//alert(event.dataTransfer.getData("text"))
	
	objectT=event.dataTransfer.getData("text");
	elementT = document.getElementById(objectT);
	positionT = elementT.getBoundingClientRect();
	xT = positionT.left;
	yT = positionT.top;
	/*var p = $("#object1");
    var xyzC=p.position();
	alert(xyzC.top);*/
	//////Drag1,2,3,4////////
	element1 = document.getElementById('waterMark1');
	position1 = element1.getBoundingClientRect();
	x1 = position1.left;
    y1 = position1.top;
	//alert(x1 +"-"+ y1);
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
	
	//document.getElementById("timer").style.animationPlayState  = "running";
	
}
	
function drag_enter(event){
	event.dataTransfer.dropEffect = "copy";
	//_('app_status').innerHTML = "You are dragging over the  "+ event.target.getAttribute('id');
}
	
function drag_leave(event){
	//_('app_status').innerHTML = "You left the"+ event.target.getAttribute('id');
}

function drag_drop(event){
	event.preventDefault();
	
	if((event.target.getAttribute('id') == "drop_zone1")||(event.target.getAttribute('id') == "g1")||(event.target.getAttribute('id') == "g2")||(event.target.getAttribute('id') == "g3")||(event.target.getAttribute('id') == "g4"))
	{
		
		bucketC1++;
		countB1=0;
		if(bucketC1>4)
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
				percentage=percentage+3;
				jqueryFunction();	
			}
			else{
				bucketC1--;
			}
		}
	}
	else if((event.target.getAttribute('id') == "drop_zone2")||(event.target.getAttribute('id') == "p1")||(event.target.getAttribute('id') == "p2")||(event.target.getAttribute('id') == "p3")||(event.target.getAttribute('id') == "p4"))
	{
		bucketC2++;
		countB2=0;
		if(bucketC2>4)
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
				percentageP=percentageP+3;
				jqueryFunctionP();	
			}
			else{
				bucketC2--;
			}
		}
	}
	else if((event.target.getAttribute('id') == "drop_zone3")||(event.target.getAttribute('id') == "y1")||(event.target.getAttribute('id') == "y2")||(event.target.getAttribute('id') == "y3")||(event.target.getAttribute('id') == "y4"))
	{
		bucketC3++;
		countB3=0;
		if(bucketC3>4)
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
				percentageY=percentageY+3;
				jqueryFunctionY();	
			}
			else{
				bucketC3--;
			}
		}
	}
	else if((event.target.getAttribute('id') == "drop_zone4")||(event.target.getAttribute('id') == "b1")||(event.target.getAttribute('id') == "b2")||(event.target.getAttribute('id') == "b3")||(event.target.getAttribute('id') == "b4"))
	{
		bucketC4++;
		countB4=0;
		if(bucketC4>4)
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
				percentageB=percentageB+3;
				jqueryFunctionB();	
			}
			else{
				bucketC4--;
			}
		}
	}
	else if((event.target.getAttribute('id') == "drop_zone5")||(event.target.getAttribute('id') == "r1")||(event.target.getAttribute('id') == "r2")||(event.target.getAttribute('id') == "r3")||(event.target.getAttribute('id') == "r4"))
	{
		
		bucketC5++;
		countB5=0;
		if(bucketC5>4)
		{
				
		}
		else
		{
			for(var i=0;i<=dropArrayX5.length-1;++i)
			{
               if((xT==dropArrayX5[i])&&(yT==dropArrayY5[i]))
				{
					countB5++;	
				}
			}
			if(countB5==0)
			{
				elem_id= event.dataTransfer.getData("text");
				draggedObject=elem_id.slice(6);
				dropObject5.push(draggedObject);
				bucketDropCount5++;
				percentageR=percentageR+3;
				jqueryFunctionR();	
				
			}
			else{
				bucketC5--;
			}
		}
	}
	//	_('app_status').innerHTML = "Dropped"+elem_id+"into the"+event.target.getAttribute('id');
	_(elem_id).style.display = "none";
	//document.getElementById("boxTick1").visiblity="visible";
	//document.getElementById("waterG").style.zIndex = "5";
	//_(elem_id).removeEventListener("draggable");
	//_(elem_id).style.cursor="default";
	droppedIn=true;
	
	
}
	
function drag_end(event){
	droppedIn=false;
}


function nextButtonClick()
{
	if(resultPopCount1 && resultPopCount2 && resultPopCount3 && resultPopCount4 && resultPopCount5 ==true)
	{
	  //completedStatus=true;
	  $("#nextID").css( 'cursor', 'pointer' ); 
	  $("#nextID").css("background-color", "#FFCC00");
	  $("#nextID").removeAttr("disabled");
	  $('#nextID').css('pointer-events','auto');
	
	}
}



function calculate()
{
	         $("#submitID").css("background-color", "#C7C7C7"); 
			 $("#submitID").attr('disabled','disabled');
			 $("#submitID").css( 'cursor', 'default' ); 
			 $("#retryID").css("background-color", "#C7C7C7"); 
			 $("#retryID").attr('disabled','disabled');
			 $("#retryID").css( 'cursor', 'default' );
			 $('#submitID').css('pointer-events','none');
		     $('#retryID').css('pointer-events','none');
	
	finalCount=0;
	
	bowl1=0; bowl2=0; bowl3=0; bowl4=0; bowl5=0;
	
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
		
	for (var i = 0; i < answerArray5.length; ++i)
	    {
			for (var j = 0; j < answerArray5.length; ++j)
			{
				if (dropObject5[j] == answerArray5[i])
				{
					bowl5++;
				}
			}
		}
		
	finalCount = bowl1 + bowl2 + bowl3 + bowl4 + bowl5;
	if (finalCount < 12)
	{
		attempt++;
		if(attempt==1)
		{
		  $("#try").css("visibility", "visible");
		}
		else
		{
			showCase();
			$("#tryIncorrect").css("visibility", "visible");
			for(var i=1;i<=4;++i)
			{
				$("#ginviButton").css("visibility", "visible");
				$("#ginviButton").removeAttr("disabled");
				$("#ginviButton").css( 'cursor', 'pointer' ); 
				$("#pinviButton").css("visibility", "visible");
				$("#pinviButton").removeAttr("disabled");
				$("#pinviButton").css( 'cursor', 'pointer' ); 
				$("#yinviButton").css("visibility", "visible");
				$("#yinviButton").removeAttr("disabled");
				$("#yinviButton").css( 'cursor', 'pointer' ); 
				$("#binviButton").css("visibility", "visible");
				$("#binviButton").removeAttr("disabled");
				$("#binviButton").css( 'cursor', 'pointer' ); 
				$("#rinviButton").css("visibility", "visible");
				$("#rinviButton").removeAttr("disabled");
				$("#rinviButton").css( 'cursor', 'pointer' ); 
			}
			
			for(var i=1;i<=12;++i)
			{
				$("#object"+i).attr('disabled','disabled');
				$("#object"+i).draggable({ disabled: false });
			}
			$('#submitID').css('pointer-events','none');
		    $('#retryID').css('pointer-events','none');
		   	 
			
		}
	}
	else
	{
		$("#correct").css("visibility", "visible");
		$("#nextID").css("background-color", "#FFCC00");
		$('#submitID').css('pointer-events','none');
		$('#retryID').css('pointer-events','none');
	    showCase();
		
	}
}

function showCase()
{
	//document.getElementById("LogoRotator").animation-play-state: 'running';
	  for(var i=1;i<=12;++i)
	  {
		 $("#object"+i).css( 'cursor', 'default' ); 
	  }
		
		 if((dropObject1[0] == 1)||(dropObject1[0] == 2)||(dropObject1[0] == 3)||(dropObject1[0] == 4)||(dropObject1[0] == 5)||(dropObject1[0] == 6)||(dropObject1[0] == 7)||     (dropObject1[0] == 8)||(dropObject1[0] == 9)||(dropObject1[0] == 10)||(dropObject1[0] == 11)||(dropObject1[0] == 12))
		 {
               document.getElementById("t11").style.backgroundColor = "#349945";
		 }
		 else{
               document.getElementById("t11").style.backgroundColor = "#ED5245";
		 }
		
		 if((dropObject1[1] == 1)||(dropObject1[1] == 2)||(dropObject1[1] == 3)||(dropObject1[1] == 4)||(dropObject1[1] == 5)||(dropObject1[1] == 6)||(dropObject1[1] == 7)||(dropObject1[1] == 8)||(dropObject1[1] == 9)||(dropObject1[1] == 10)||(dropObject1[1] == 11)||(dropObject1[1] == 12))
		 {
			  document.getElementById("t12").style.backgroundColor = "#349945";
		 }
		 else{
              document.getElementById("t12").style.backgroundColor = "#ED5245";
		 }
		
		 if((dropObject1[2] == 1)||(dropObject1[2] == 2)||(dropObject1[2] == 3)||(dropObject1[2] == 4)||(dropObject1[2] == 5)||(dropObject1[2] == 6)||(dropObject1[2] == 7)||(dropObject1[2] == 8)||(dropObject1[2] == 9)||(dropObject1[2] == 10)||(dropObject1[2] == 11)||(dropObject1[2] == 12))
		 {
			  document.getElementById("t13").style.backgroundColor = "#349945";
		 }
		 else{
              document.getElementById("t13").style.backgroundColor = "#ED5245";
		 }
		
		 if((dropObject1[3] == 1)||(dropObject1[3] == 2)||(dropObject1[3] == 3)||(dropObject1[3] == 4)||(dropObject1[3] == 5)||(dropObject1[3] == 6)||(dropObject1[3] == 7)||(dropObject1[3] == 8)||(dropObject1[3] == 9)||(dropObject1[3] == 10)||(dropObject1[3] == 11)||(dropObject1[3] == 12))
		 {
			  document.getElementById("t14").style.backgroundColor = "#349945";
		 }
		 else{
              document.getElementById("t14").style.backgroundColor = "#ED5245";
		 }
		
		////////////////////22222////////////////////
		 if((dropObject2[0] == 1)||(dropObject2[0] == 2)||(dropObject2[0] == 3)||(dropObject2[0] == 4)||(dropObject2[0] == 5)||(dropObject2[0] == 6)||(dropObject2[0] == 7)||(dropObject2[0] == 8)||(dropObject2[0] == 9)||(dropObject2[0] == 10)||(dropObject2[0] == 11)||(dropObject2[0] == 12))
		 {
			   document.getElementById("t21").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("t21").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObject2[1] == 1)||(dropObject2[1] == 2)||(dropObject2[1] == 3)||(dropObject2[1] == 4)||(dropObject2[1] == 5)||(dropObject2[1] == 6)||(dropObject2[1] == 7)||(dropObject2[1] == 8)||(dropObject2[1] == 9)||(dropObject2[1] == 10)||(dropObject2[1] == 11)||(dropObject2[1] == 12))
		 {
			   document.getElementById("t22").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("t22").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObject2[2] == 1)||(dropObject2[2] == 2)||(dropObject2[2] == 3)||(dropObject2[2] == 4)||(dropObject2[2] == 5)||(dropObject2[2] == 6)||(dropObject2[2] == 7)||(dropObject2[2] == 8)||(dropObject2[2] == 9)||(dropObject2[2] == 10)||(dropObject2[2] == 11)||(dropObject2[2] == 12))
		 {
			   document.getElementById("t23").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("t23").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObject2[3] == 1)||(dropObject2[3] == 2)||(dropObject2[3] == 3)||(dropObject2[3] == 4)||(dropObject2[3] == 5)||(dropObject2[3] == 6)||(dropObject2[3] == 7)||(dropObject2[3] == 8)||(dropObject2[3] == 9)||(dropObject2[3] == 10)||(dropObject2[3] == 11)||(dropObject2[3] == 12))
		 {
			   document.getElementById("t24").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("t24").style.backgroundColor = "#ED5245"; 
		 }
		
		////////////////////33333333///////////////////
		
		 if((dropObject3[0] == 4)||(dropObject3[0] == 5)||(dropObject3[0] == 6)||(dropObject3[0] == 7)||(dropObject3[0] == 8))
		 {
			   document.getElementById("t31").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("t31").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObject3[1] == 4)||(dropObject3[1] == 5)||(dropObject3[1] == 6)||(dropObject3[1] == 7)||(dropObject3[1] == 8))
		 {
			   document.getElementById("t32").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("t32").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObject3[2] == 4)||(dropObject3[2] == 5)||(dropObject3[2] == 6)||(dropObject3[2] == 7)||(dropObject3[2] == 8))
		 {
			   document.getElementById("t33").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("t33").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObject3[3] == 4)||(dropObject3[3] == 5)||(dropObject3[3] == 6)||(dropObject3[3] == 7)||(dropObject3[3] == 8))
		 {
			   document.getElementById("t34").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("t34").style.backgroundColor = "#ED5245"; 
		 }
		
		//////////////////4444444/////////////////////
		
		 if((dropObject4[0] == 1)||(dropObject4[0] == 2)||(dropObject4[0] == 3)|| (dropObject4[0] == 4)||(dropObject4[0] == 5)||(dropObject4[0] == 6)||(dropObject4[0] == 7)||(dropObject4[0] == 8))
		   {
			   document.getElementById("t41").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("t41").style.backgroundColor = "#ED5245";
		   }
		   
		   if((dropObject4[1] == 1)||(dropObject4[1] == 2)||(dropObject4[1] == 3)|| (dropObject4[1] == 4)||(dropObject4[1] == 5)||(dropObject4[1] == 6)||(dropObject4[1] == 7)||(dropObject4[1] == 8))
		   {
			   document.getElementById("t42").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("t42").style.backgroundColor = "#ED5245";
		   }
		   
		   if((dropObject4[2] == 1)||(dropObject4[2] == 2)||(dropObject4[2] == 3)|| (dropObject4[2] == 4)||(dropObject4[2] == 5)||(dropObject4[2] == 6)||(dropObject4[2] == 7)||(dropObject4[2] == 8))
		   {
			   document.getElementById("t43").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("t43").style.backgroundColor = "#ED5245";
		   }
		   
		   if((dropObject4[3] == 1)||(dropObject4[3] == 2)||(dropObject4[3] == 3)|| (dropObject4[3] == 4)||(dropObject4[3] == 5)||(dropObject4[3] == 6)||(dropObject4[3] == 7)||(dropObject4[3] == 8))
		   {
			   document.getElementById("t44").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("t44").style.backgroundColor = "#ED5245";
		   }
		
		///////////////////////////555555555////////////////////
		   
		if((dropObject5[0] == 4)||(dropObject5[0] == 5)||(dropObject5[0] == 6)||(dropObject5[0] == 7)||(dropObject5[0] == 8))
		   {
			   document.getElementById("t51").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("t51").style.backgroundColor = "#ED5245";
		   }
		   
		   if((dropObject5[1] == 4)||(dropObject5[1] == 5)||(dropObject5[1] == 6)||(dropObject5[1] == 7)||(dropObject5[1] == 8))
		   {
			   document.getElementById("t52").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("t52").style.backgroundColor = "#ED5245";
		   }
		   
		   if((dropObject5[2] == 4)||(dropObject5[2] == 5)||(dropObject5[2] == 6)||(dropObject5[2] == 7)||(dropObject5[2] == 8))
		   {
			   document.getElementById("t53").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("t53").style.backgroundColor = "#ED5245"; 
		   }
		   
		   if((dropObject5[3] == 4)||(dropObject5[3] == 5)||(dropObject5[3] == 6)||(dropObject5[3] == 7)||(dropObject5[3] == 8))
		   {
			   document.getElementById("t54").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("t54").style.backgroundColor = "#ED5245"; 
		   }   
	
}







///////////////////////////////////////////////////////////////////////////
////////////////////////////----Level2----/////////////////////////////////
///////////////////////////////////////////////////////////////////////////

/////////Clicking on buckets @ last/////////
   $("#ginviButtonT").on('click', function() {
   $("#UK_buk_TG").css("visibility", "visible");
   resultPopCountT1=true;
   nextButtonClickT();
   });
  
  $("#myHrefCloseTG").on('click', function() {
    $("#UK_buk_TG").css("visibility", "hidden");
	
  });
  
  
  
  $("#pinviButtonT").on('click', function() {
   $("#UK_buk_TP").css("visibility", "visible");
   resultPopCountT2=true;
    nextButtonClickT();
   });
  
  $("#myHrefCloseTP").on('click', function() {
    $("#UK_buk_TP").css("visibility", "hidden");
	
  });
  
  
  
  $("#yinviButtonT").on('click', function() {
   $("#UK_buk_TY").css("visibility", "visible");
    resultPopCountT3=true;
    nextButtonClickT();
   });
  
  $("#myHrefCloseTY").on('click', function() {
    $("#UK_buk_TY").css("visibility", "hidden");
	
  });
  
  
  
  $("#binviButtonT").on('click', function() {
   $("#UK_buk_TB").css("visibility", "visible");
    resultPopCountT4=true;
    nextButtonClickT();
   });
  $("#myHrefCloseTB").on('click', function() {
    $("#UK_buk_TB").css("visibility", "hidden");
	
  });
  
  
  
  $("#rinviButtonT").on('click', function() {
   $("#UK_buk_TR").css("visibility", "visible");
    resultPopCountT5=true;
    nextButtonClickT();
   });
  
  $("#myHrefCloseTR").on('click', function() {
    $("#UK_buk_TR").css("visibility", "hidden");
	
  });
  
  
function nextButtonClickT()
{
	if(resultPopCountT1 && resultPopCountT2 && resultPopCountT3 && resultPopCountT4 && resultPopCountT5 ==true)
	{
	  //completedStatus=true;
	  $("#nextID").css( 'cursor', 'pointer' ); 
	  $("#nextID").css("background-color", "#FFCC00");
	  $("#nextID").removeAttr("disabled");
	  $('#nextID').css('pointer-events','auto');
	}
}
  
//////////////////////////////////////////////


resetInitialT = function()
	{
		  for(var i=1;i<=5;++i)
			{
			  for(var j=1;j<=4;++j)
				  {
					$("#tT"+i+j).css("visibility", "hidden");  
				  }
			}
			
		  for(var i=1;i<=4;++i)
		  {
			$("#gT"+i).css("visibility", "hidden");
			$("#ginviButtonT").css("visibility", "hidden");
			$("#ginviButtonT").attr('disabled','disabled');
			$("#pT"+i).css("visibility", "hidden");
			$("#pinviButtonT").css("visibility", "hidden");
			$("#pinviButtonT").attr('disabled','disabled');
			$("#yT"+i).css("visibility", "hidden");
			$("#yinviButtonT").css("visibility", "hidden");
			$("#yinviButtonT").attr('disabled','disabled');
			$("#bT"+i).css("visibility", "hidden");
			$("#binviButtonT").css("visibility", "hidden");
			$("#binviButtonT").attr('disabled','disabled');
			$("#rT"+i).css("visibility", "hidden");
			$("#rinviButtonT").css("visibility", "hidden");
			$("#rinviButtonT").attr('disabled','disabled');
		  }
			
        for(var i=1;i<=12;++i)
	     {
			$("#objectT"+i).show();
		 } 
		 
		 $("#submitID").css("background-color", "#C7C7C7"); 
		 $("#retryID").css("background-color", "#C7C7C7"); 
		 $("#retryID").attr('disabled','disabled');
		 $("#submitID").attr('disabled','disabled');
		 $("#submitID").css( 'cursor', 'default' ); 
		 $("#retryID").css( 'cursor', 'default' );
		 $('#submitID').css('pointer-events','none');
		 $('#retryID').css('pointer-events','none');
		
		percentageT=0;
		percentageTP=0;
        percentageTY=0;
        percentageTB=0;
        percentageTR=0;
		
		bucketDropCountT1=0;
		bucketDropCountT2=0;
		bucketDropCountT3=0;
		bucketDropCountT4=0;
		bucketDropCountT5=0;
		
		dropArrayTX1= [];
		dropArrayTY1= [];
		dropArrayTX2= [];
		dropArrayTY2= [];
		dropArrayTX3= [];
		dropArrayTY3= [];
		dropArrayTX4= [];
		dropArrayTY4= [];
		dropArrayTX5= [];
		dropArrayTY5= [];
		dropObjectT1= [];
		dropObjectT2= [];
		dropObjectT3= [];
		dropObjectT4= [];
		dropObjectT5= [];
		
		bucketTC1=0;
        countTB1=0;
		bucketTC2=0;
        countTB2=0;
		bucketTC3=0;
        countTB3=0;
		bucketTC4=0;
        countTB4=0;
		bucketTC5=0;
        countTB5=0;
		
}
	

completedStatusTrackT = function()
{
		$("#goodjob").css("visibility", "visible");
		$("#ginviButton").attr('disabled','disabled');
		$("#ginviButton").css( 'cursor', 'default' );
		$("#pinviButton").attr('disabled','disabled');
		$("#pinviButton").css( 'cursor', 'default' );
		$("#yinviButton").attr('disabled','disabled');
		$("#yinviButton").css( 'cursor', 'default' );
		$("#binviButton").attr('disabled','disabled');
		$("#binviButton").css( 'cursor', 'default' );
		$("#rinviButton").attr('disabled','disabled');
		$("#rinviButton").css( 'cursor', 'default' );
		$('#nextID').css('pointer-events','auto');
}


function resetAllT(){
	resetInitialT();
};


function drag_startT(event){
	//_('app_status').innerHTML = "Dragging the "+ event.target.getAttribute('id');
	event.dataTransfer.dropEffect = "move";
	event.dataTransfer.setData("text",event.target.getAttribute('id'));
	//alert(event.dataTransfer.getData("text"))
	
	objectTT=event.dataTransfer.getData("text");
	elementTT = document.getElementById(objectTT);
	positionTT = elementTT.getBoundingClientRect();
	xTT = positionTT.left;
	yTT = positionTT.top;
	
	elementT1 = document.getElementById('waterMarkT1');
	positionT1 = elementT1.getBoundingClientRect();
	xT1 = positionT1.left;
    yT1 = positionT1.top;
	//alert(x1 +"-"+ y1);
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
	
	//document.getElementById("timer").style.animationPlayState  = "running";
	
}
	
function drag_enterT(event){
	//_('app_status').innerHTML = "You are dragging over the  "+ event.target.getAttribute('id');
}
	
function drag_leaveT(event){
	//_('app_status').innerHTML = "You left the"+ event.target.getAttribute('id');
}

function drag_dropT(event){
	event.preventDefault();
	
	if((event.target.getAttribute('id') == "drop_zoneT1")||(event.target.getAttribute('id') == "gT1")||(event.target.getAttribute('id') == "gT2")||(event.target.getAttribute('id') == "gT3")||(event.target.getAttribute('id') == "gT4"))
	{
		
		bucketTC1++;
		countTB1=0;
		if(bucketTC1>4)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayTX1.length-1;++i)
			{
				
               if((xTT==dropArrayTX1[i])&&(yTT==dropArrayTY1[i]))
				{
					
					countTB1++;	
				}
			}
			if(countTB1==0)
			{
				elem_idT= event.dataTransfer.getData("text");
	            draggedObjectT=elem_idT.slice(7);
				dropObjectT1.push(draggedObjectT);
				bucketDropCountT1++;
				percentageT=percentageT+3;
				jqueryFunctionT();	
			}
			else{
				bucketTC1--;
			}
		}
	}
	
	
	else if((event.target.getAttribute('id') == "drop_zoneT2")||(event.target.getAttribute('id') == "pT1")||(event.target.getAttribute('id') == "pT2")||(event.target.getAttribute('id') == "pT3")||(event.target.getAttribute('id') == "pT4"))
	{
		bucketTC2++;
		countTB2=0;
		if(bucketTC2>4)
		{
				
		}
		else
		{
			for(var i=0;i<=dropArrayTX2.length-1;++i)
			{
               if((xTT==dropArrayTX2[i])&&(yTT==dropArrayTY2[i]))
				{
					countTB2++;	
				}
			}
			if(countTB2==0)
			{
				elem_idT= event.dataTransfer.getData("text");
				draggedObjectT=elem_idT.slice(7);
				dropObjectT2.push(draggedObjectT);
				bucketDropCountT2++;
				percentageTP=percentageTP+3;
				jqueryFunctionTP();	
			}
			else{
				bucketTC2--;
			}
		}
	}
	else if((event.target.getAttribute('id') == "drop_zoneT3")||(event.target.getAttribute('id') == "yT1")||(event.target.getAttribute('id') == "yT2")||(event.target.getAttribute('id') == "yT3")||(event.target.getAttribute('id') == "yT4"))
	{
		bucketTC3++;
		countTB3=0;
		if(bucketTC3>4)
		{
				
		}
		else
		{
			for(var i=0;i<=dropArrayTX3.length-1;++i)
			{
               if((xTT==dropArrayTX3[i])&&(yTT==dropArrayTY3[i]))
				{
					countTB3++;	
				}
			}
			if(countTB3==0)
			{
				elem_idT= event.dataTransfer.getData("text");
				draggedObjectT=elem_idT.slice(7);
				dropObjectT3.push(draggedObjectT);
				bucketDropCountT3++;
				percentageTY=percentageTY+3;
				jqueryFunctionTY();	
			}
			else{
				bucketTC3--;
			}
		}
	}
	else if((event.target.getAttribute('id') == "drop_zoneT4")||(event.target.getAttribute('id') == "bT1")||(event.target.getAttribute('id') == "bT2")||(event.target.getAttribute('id') == "bT3")||(event.target.getAttribute('id') == "bT4"))
	{
		bucketTC4++;
		countTB4=0;
		if(bucketTC4>4)
		{
				
		}
		else
		{
			for(var i=0;i<=dropArrayTX4.length-1;++i)
			{
               if((xTT==dropArrayTX4[i])&&(yTT==dropArrayTY4[i]))
				{
					countTB4++;	
				}
			}
			if(countTB4==0)
			{
				elem_idT= event.dataTransfer.getData("text");
				draggedObjectT=elem_idT.slice(7);
				dropObjectT4.push(draggedObjectT);
				bucketDropCountT4++;
				percentageTB=percentageTB+3;
				jqueryFunctionTB();	
			}
			else{
				bucketTC4--;
			}
		}
	}
	else if((event.target.getAttribute('id') == "drop_zoneT5")||(event.target.getAttribute('id') == "rT1")||(event.target.getAttribute('id') == "rT2")||(event.target.getAttribute('id') == "rT3")||(event.target.getAttribute('id') == "rT4"))
	{
		
		bucketTC5++;
		countTB5=0;
		if(bucketTC5>4)
		{
				
		}
		else
		{
			for(var i=0;i<=dropArrayTX5.length-1;++i)
			{
               if((xTT==dropArrayTX5[i])&&(yTT==dropArrayTY5[i]))
				{
					countTB5++;	
				}
			}
			if(countTB5==0)
			{
				elem_idT= event.dataTransfer.getData("text");
				draggedObjectT=elem_idT.slice(7);
				dropObjectT5.push(draggedObjectT);
				bucketDropCountT5++;
				percentageTR=percentageTR+3;
				jqueryFunctionTR();	
				
			}
			else{
				bucketTC5--;
			}
		}
	}
	//	_('app_status').innerHTML = "Dropped"+elem_id+"into the"+event.target.getAttribute('id');
	_(elem_idT).style.display = "none";
	//document.getElementById("boxTickT").visiblity="visible";
	//document.getElementById("waterG").style.zIndex = "5";
	//_(elem_idT).removeEventListener("draggable");
	//_(elem_idT).style.cursor="default";
	droppedInT=true;
	
	
}
	
function drag_endT(event){
	droppedInT=false;
}


jqueryFunctionT = function()
	{
		
		 $("#submitID").css("background-color", "#FFCC00"); 
		 $("#retryID").css("background-color", "#FFCC00"); 
		 $("#retryID").removeAttr("disabled");
		 $("#retryID").css( 'cursor', 'pointer' );
		 $("#submitID").removeAttr("disabled");
		 $("#submitID").css( 'cursor', 'pointer' ); 
		 $('#submitID').css('pointer-events','auto');
		 $('#retryID').css('pointer-events','auto');
		 
		 $("#tT1"+bucketDropCountT1).css("visibility", "visible");
		 for(var i=1;i<=4;++i)
	     {
			$("#gT"+i).css("visibility", "hidden"); 
		 }
		 $("#gT"+bucketDropCountT1).css("visibility", "visible");
		 
		if((xTT == xT1)&&(yTT == yT1))
		{
			
		  $("#tT1"+bucketDropCountT1).html("1");
		  dropArrayTX1.push(xTT);
		  dropArrayTY1.push(yTT);
	    }
		else if((xTT == xT2)&&(yTT == yT2))
		{
		  $("#tT1"+bucketDropCountT1).html("2");	
		  dropArrayTX1.push(xTT);
		  dropArrayTY1.push(yTT);
		}
		else if((xTT == xT3)&&(yTT == yT3))
		{
		  $("#tT1"+bucketDropCountT1).html("3");	
		  dropArrayTX1.push(xTT);
		  dropArrayTY1.push(yTT);
		}
		else if((xTT == xT4)&&(yTT == yT4))
		{
		  $("#tT1"+bucketDropCountT1).html("4");	
		  dropArrayTX1.push(xTT);
		  dropArrayTY1.push(yTT);
		}
		
	}



jqueryFunctionTP = function()
	{
		 $("#submitID").css("background-color", "#FFCC00"); 
		 $("#submitID").removeAttr("disabled");
		 $("#submitID").css( 'cursor', 'pointer' ); 
		 $("#retryID").css("background-color", "#FFCC00"); 
		 $("#retryID").removeAttr("disabled");
		 $("#retryID").css( 'cursor', 'pointer' );
		 $('#submitID').css('pointer-events','auto');
		 $('#retryID').css('pointer-events','auto');
		 $("#tT2"+bucketDropCountT2).css("visibility", "visible");
		 for(var i=1;i<=4;++i)
	     {
			$("#pT"+i).css("visibility", "hidden"); 
		 }
		 $("#pT"+bucketDropCountT2).css("visibility", "visible");
		 
		
		if((xTT == xT1)&&(yTT == yT1))
		{
			
		  $("#tT2"+bucketDropCountT2).html("1");
		  dropArrayTX2.push(xTT);
		  dropArrayTY2.push(yTT);
	    }
		else if((xTT == xT2)&&(yTT == yT2))
		{
		  $("#tT2"+bucketDropCountT2).html("2");	
		  dropArrayTX2.push(xTT);
		  dropArrayTY2.push(yTT);
		}
		else if((xTT == xT3)&&(yTT == yT3))
		{
		  $("#tT2"+bucketDropCountT2).html("3");	
		  dropArrayTX2.push(xTT);
		  dropArrayTY2.push(yTT);
		}
		else if((xTT == xT4)&&(yTT == yT4))
		{
		  $("#tT2"+bucketDropCountT2).html("4");	
		  dropArrayTX2.push(xTT);
		  dropArrayTY2.push(yTT);
		}
		
	}



jqueryFunctionTY = function()
	{
		 $("#submitID").css("background-color", "#FFCC00"); 
		 $("#submitID").removeAttr("disabled");
		 $("#submitID").css( 'cursor', 'pointer' ); 
		 $("#retryID").css("background-color", "#FFCC00"); 
		 $("#retryID").removeAttr("disabled");
		 $("#retryID").css( 'cursor', 'pointer' );
		 $("#tT3"+bucketDropCountT3).css("visibility", "visible");
		 $("#submitID").css( 'cursor', 'pointer' );
		 $('#submitID').css('pointer-events','auto');
		 $('#retryID').css('pointer-events','auto');
		 for(var i=1;i<=4;++i)
	     {
			$("#yT"+i).css("visibility", "hidden"); 
		 }
		 $("#yT"+bucketDropCountT3).css("visibility", "visible");
		 
		if((xTT == xT1)&&(yTT == yT1))
		{
			
		  $("#tT3"+bucketDropCountT3).html("1");
		  dropArrayTX3.push(xTT);
		  dropArrayTY3.push(yTT);
	    }
		else if((xTT == xT2)&&(yTT == yT2))
		{
		  $("#tT3"+bucketDropCountT3).html("2");	
		  dropArrayTX3.push(xTT);
		  dropArrayTY3.push(yTT);
		}
		else if((xTT == xT3)&&(yTT == yT3))
		{
		  $("#tT3"+bucketDropCountT3).html("3");	
		  dropArrayTX3.push(xTT);
		  dropArrayTY3.push(yTT);
		}
		else if((xTT == xT4)&&(yTT == yT4))
		{
		  $("#tT3"+bucketDropCountT3).html("4");	
		  dropArrayTX3.push(xTT);
		  dropArrayTY3.push(yTT);
		}
		
	}


jqueryFunctionTB = function()
	{
		 $("#submitID").css("background-color", "#FFCC00"); 
		 $("#submitID").removeAttr("disabled");
		 $("#submitID").css( 'cursor', 'pointer' ); 
		 $("#retryID").css("background-color", "#FFCC00"); 
		 $("#retryID").removeAttr("disabled");
		 $("#retryID").css( 'cursor', 'pointer' );
		 $("#tT4"+bucketDropCountT4).css("visibility", "visible");
		 $('#submitID').css('pointer-events','auto');
		 $('#retryID').css('pointer-events','auto');
		 for(var i=1;i<=4;++i)
	     {
			$("#bT"+i).css("visibility", "hidden"); 
		 }
		 $("#bT"+bucketDropCountT4).css("visibility", "visible");
		 
		if((xTT == xT1)&&(yTT == yT1))
		{
			
		  $("#tT4"+bucketDropCountT4).html("1");
		  dropArrayTX4.push(xTT);
		  dropArrayTY4.push(yTT);
	    }
		else if((xTT == xT2)&&(yTT == yT2))
		{
		  $("#tT4"+bucketDropCountT4).html("2");	
		  dropArrayTX4.push(xTT);
		  dropArrayTY4.push(yTT);
		}
		else if((xTT == xT3)&&(yTT == yT3))
		{
		  $("#tT4"+bucketDropCountT4).html("3");	
		  dropArrayTX4.push(xTT);
		  dropArrayTY4.push(yTT);
		}
		else if((xTT == xT4)&&(yTT == yT4))
		{
		  $("#tT4"+bucketDropCountT4).html("4");	
		  dropArrayTX4.push(xTT);
		  dropArrayTY4.push(yTT);
		}
}


jqueryFunctionTR = function()
	{
		 $("#submitID").css("background-color", "#FFCC00"); 
		 $("#submitID").removeAttr("disabled");
		 $("#submitID").css( 'cursor', 'pointer' ); 
		 $("#retryID").css("background-color", "#FFCC00"); 
		 $("#retryID").removeAttr("disabled");
		 $("#retryID").css( 'cursor', 'pointer' );
		 $("#tT5"+bucketDropCountT5).css("visibility", "visible");
		 $('#submitID').css('pointer-events','auto');
		 $('#retryID').css('pointer-events','auto');
		 for(var i=1;i<=4;++i)
	     {
			$("#rT"+i).css("visibility", "hidden"); 
		 }
		 $("#rT"+bucketDropCountT5).css("visibility", "visible");
		
		if((xTT == xT1)&&(yTT == yT1))
		{
			
		  $("#tT5"+bucketDropCountT5).html("1");
		  dropArrayTX5.push(xTT);
		  dropArrayTY5.push(yTT);
	    }
		else if((xTT == xT2)&&(yTT == yT2))
		{
		  $("#tT5"+bucketDropCountT5).html("2");	
		  dropArrayTX5.push(xTT);
		  dropArrayTY5.push(yTT);
		}
		else if((xTT == xT3)&&(yTT == yT3))
		{
		  $("#tT5"+bucketDropCountT5).html("3");	
		  dropArrayTX5.push(xTT);
		  dropArrayTY5.push(yTT);
		}
		else if((xTT == xT4)&&(yTT == yT4))
		{
		  $("#tT5"+bucketDropCountT5).html("4");	
		  dropArrayTX5.push(xTT);
		  dropArrayTY5.push(yTT);
		}
		
}



function calculateT()
{
	         $("#submitID").css("background-color", "#C7C7C7"); 
			 $("#submitID").attr('disabled','disabled');
			 $("#submitID").css( 'cursor', 'default' ); 
			 $("#retryID").css("background-color", "#C7C7C7"); 
			 $("#retryID").attr('disabled','disabled');
			 $("#retryID").css( 'cursor', 'default' );
			 $('#submitID').css('pointer-events','none');
		     $('#retryID').css('pointer-events','none');
	//alert("God");
	finalCountT=0;
	bowlT1=0; bowlT2=0; bowlT3=0; bowlT4=0; bowlT5=0;
	
	 for (var i = 0; i < answerArrayT1.length; ++i)
	    {
			for (var j = 0; j < answerArrayT1.length; ++j)
			{
				if (dropObjectT1[j] == answerArrayT1[i])
				{
					bowlT1++;
				}
			}
		}
		
	for (var i = 0; i < answerArrayT2.length; ++i)
	    {
			for (var j = 0; j < answerArrayT2.length; ++j)
			{
				if (dropObjectT2[j] == answerArrayT2[i])
				{
					bowlT2++;
				}
			}
		}
		
	for (var i = 0; i < answerArrayT3.length; ++i)
	    {
			for (var j = 0; j < answerArrayT3.length; ++j)
			{
				if (dropObjectT3[j] == answerArrayT3[i])
				{
					bowlT3++;
				}
			}
		}
		
	for (var i = 0; i < answerArrayT4.length; ++i)
	    {
			for (var j = 0; j < answerArrayT4.length; ++j)
			{
				if (dropObjectT4[j] == answerArrayT4[i])
				{
					bowlT4++;
				}
			}
		}
		
	for (var i = 0; i < answerArrayT5.length; ++i)
	    {
			for (var j = 0; j < answerArrayT5.length; ++j)
			{
				if (dropObjectT5[j] == answerArrayT5[i])
				{
					bowlT5++;
				}
			}
		}
		
	finalCountT = bowlT1 + bowlT2 + bowlT3 + bowlT4 + bowlT5;
	//alert(bowlT4);
	if (finalCountT < 12)
	{
		attemptT++;
		if(attemptT==1)
		{
		  $("#try").css("visibility", "visible");
		}
		else
		{
			showCaseT();
			
			$("#tryIncorrect").css("visibility", "visible");
			for(var i=1;i<=4;++i)
			{
				$("#ginviButtonT").css("visibility", "visible");
				$("#ginviButtonT").removeAttr("disabled");
				$("#ginviButtonT").css( 'cursor', 'pointer' ); 
				$("#pinviButtonT").css("visibility", "visible");
				$("#pinviButtonT").removeAttr("disabled");
				$("#pinviButtonT").css( 'cursor', 'pointer' ); 
				$("#yinviButtonT").css("visibility", "visible");
				$("#yinviButtonT").removeAttr("disabled");
				$("#yinviButtonT").css( 'cursor', 'pointer' ); 
				$("#binviButtonT").css("visibility", "visible");
				$("#binviButtonT").removeAttr("disabled");
				$("#binviButtonT").css( 'cursor', 'pointer' ); 
				$("#rinviButtonT").css("visibility", "visible");
				$("#rinviButtonT").removeAttr("disabled");
				$("#rinviButtonT").css( 'cursor', 'pointer' ); 
			}
			
			for(var i=1;i<=12;++i)
			{
				$("#objectT"+i).attr('disabled','disabled');
				$("#objectT"+i).draggable({ disabled: false });
			}
		   	 
			
		}
	}
	else
	{
		$("#correct").css("visibility", "visible");
		$("#nextID").css("background-color", "#FFCC00");
	    showCaseT();
		
	}
}




function showCaseT()
{
	//document.getElementById("LogoRotator").animation-play-state: 'running';
	  for(var i=1;i<=12;++i)
	  {
		 $("#objectT"+i).css( 'cursor', 'default' ); 
	  }
		
		 if((dropObjectT1[0] == 1)||(dropObjectT1[0] == 2)||(dropObjectT1[0] == 3)||(dropObjectT1[0] == 4)||(dropObjectT1[0] == 5)||(dropObjectT1[0] == 6)||(dropObjectT1[0] == 7)||     (dropObjectT1[0] == 8)||(dropObjectT1[0] == 11)||(dropObjectT1[0] == 12))
		 {
               document.getElementById("tT11").style.backgroundColor = "#349945";
		 }
		 else{
               document.getElementById("tT11").style.backgroundColor = "#ED5245";
		 }
		
		 if((dropObjectT1[1] == 1)||(dropObjectT1[1] == 2)||(dropObjectT1[1] == 3)||(dropObjectT1[1] == 4)||(dropObjectT1[1] == 5)||(dropObjectT1[1] == 6)||(dropObjectT1[1] == 7)||     (dropObjectT1[1] == 8)||(dropObjectT1[1] == 11)||(dropObjectT1[1] == 12))
		 {
			  document.getElementById("tT12").style.backgroundColor = "#349945";
		 }
		 else{
              document.getElementById("tT12").style.backgroundColor = "#ED5245";
		 }
		
		 if((dropObjectT1[2] == 1)||(dropObjectT1[2] == 2)||(dropObjectT1[2] == 3)||(dropObjectT1[2] == 4)||(dropObjectT1[2] == 5)||(dropObjectT1[2] == 6)||(dropObjectT1[2] == 7)||     (dropObjectT1[2] == 8)||(dropObjectT1[2] == 11)||(dropObjectT1[2] == 12))
		 {
			  document.getElementById("tT13").style.backgroundColor = "#349945";
		 }
		 else{
              document.getElementById("tT13").style.backgroundColor = "#ED5245";
		 }
		
		 if((dropObjectT1[3] == 1)||(dropObjectT1[3] == 2)||(dropObjectT1[3] == 3)||(dropObjectT1[3] == 4)||(dropObjectT1[3] == 5)||(dropObjectT1[3] == 6)||(dropObjectT1[3] == 7)||     (dropObjectT1[3] == 8)||(dropObjectT1[3] == 11)||(dropObjectT1[3] == 12))
		 {
			  document.getElementById("tT14").style.backgroundColor = "#349945";
		 }
		 else{
              document.getElementById("tT14").style.backgroundColor = "#ED5245";
		 }
		
		////////////////////22222////////////////////
		 if((dropObjectT2[0] == 1)||(dropObjectT2[0] == 2)||(dropObjectT2[0] == 3)||(dropObjectT2[0] == 4)||(dropObjectT2[0] == 5)||(dropObjectT2[0] == 6)||(dropObjectT2[0] == 7)||(dropObjectT2[0] == 8)||(dropObjectT2[0] == 9)||(dropObjectT2[0] == 10)||(dropObjectT2[0] == 11)||(dropObjectT2[0] == 12))
		 {
			   document.getElementById("tT21").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("tT21").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObjectT2[1] == 1)||(dropObjectT2[1] == 2)||(dropObjectT2[1] == 3)||(dropObjectT2[1] == 4)||(dropObjectT2[1] == 5)||(dropObjectT2[1] == 6)||(dropObjectT2[1] == 7)||(dropObjectT2[1] == 8)||(dropObjectT2[1] == 9)||(dropObjectT2[1] == 10)||(dropObjectT2[1] == 11)||(dropObjectT2[1] == 12))
		 {
			   document.getElementById("tT22").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("tT22").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObjectT2[2] == 1)||(dropObjectT2[2] == 2)||(dropObjectT2[2] == 3)||(dropObjectT2[2] == 4)||(dropObjectT2[2] == 5)||(dropObjectT2[2] == 6)||(dropObjectT2[2] == 7)||(dropObjectT2[2] == 8)||(dropObjectT2[2] == 9)||(dropObjectT2[2] == 10)||(dropObjectT2[2] == 11)||(dropObjectT2[2] == 12))
		 {
			   document.getElementById("tT23").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("tT23").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObjectT2[3] == 1)||(dropObjectT2[3] == 2)||(dropObjectT2[3] == 3)||(dropObjectT2[3] == 4)||(dropObjectT2[3] == 5)||(dropObjectT2[3] == 6)||(dropObjectT2[3] == 7)||(dropObjectT2[3] == 8)||(dropObjectT2[3] == 9)||(dropObjectT2[3] == 10)||(dropObjectT2[3] == 11)||(dropObjectT2[3] == 12))
		 {
			   document.getElementById("tT24").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("tT24").style.backgroundColor = "#ED5245"; 
		 }
		
		////////////////////33333333///////////////////
		
		 if((dropObjectT3[0] == 1)||(dropObjectT3[0] == 2)||(dropObjectT3[0] == 3)||(dropObjectT3[0] == 4)||(dropObjectT3[0] == 5)||(dropObjectT3[0] == 6)||(dropObjectT3[0] == 7)||(dropObjectT3[0] == 8))
		 {
			   document.getElementById("tT31").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("tT31").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObjectT3[1] == 1)||(dropObjectT3[1] == 2)||(dropObjectT3[1] == 3)||(dropObjectT3[1] == 4)||(dropObjectT3[1] == 5)||(dropObjectT3[1] == 6)||(dropObjectT3[1] == 7)||(dropObjectT3[1] == 8))
		 {
			   document.getElementById("tT32").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("tT32").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObjectT3[2] == 1)||(dropObjectT3[2] == 2)||(dropObjectT3[2] == 3)||(dropObjectT3[2] == 4)||(dropObjectT3[2] == 5)||(dropObjectT3[2] == 6)||(dropObjectT3[2] == 7)||(dropObjectT3[2] == 8))
		 {
			   document.getElementById("tT33").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("tT33").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObjectT3[3] == 1)||(dropObjectT3[3] == 2)||(dropObjectT3[3] == 3)||(dropObjectT3[3] == 4)||(dropObjectT3[3] == 5)||(dropObjectT3[3] == 6)||(dropObjectT3[3] == 7)||(dropObjectT3[3] == 8))
		 {
			   document.getElementById("tT34").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("tT34").style.backgroundColor = "#ED5245"; 
		 }
		
		//////////////////4444444/////////////////////
		
		 if((dropObjectT4[0] == 1)||(dropObjectT4[0] == 2)||(dropObjectT4[0] == 3)|| (dropObjectT4[0] == 4)||(dropObjectT4[0] == 5)||(dropObjectT4[0] == 9)||(dropObjectT4[0] == 10))
		   {
			   document.getElementById("tT41").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("tT41").style.backgroundColor = "#ED5245";
		   }
		   
		   if((dropObjectT4[1] == 1)||(dropObjectT4[1] == 2)||(dropObjectT4[1] == 3)|| (dropObjectT4[1] == 4)||(dropObjectT4[1] == 5)||(dropObjectT4[1] == 9)||(dropObjectT4[1] == 10))
		   {
			   document.getElementById("tT42").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("tT42").style.backgroundColor = "#ED5245";
		   }
		   
		   if((dropObjectT4[2] == 1)||(dropObjectT4[2] == 2)||(dropObjectT4[2] == 3)|| (dropObjectT4[2] == 4)||(dropObjectT4[2] == 5)||(dropObjectT4[2] == 9)||(dropObjectT4[2] == 10))
		   {
			   document.getElementById("tT43").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("tT43").style.backgroundColor = "#ED5245";
		   }
		   
		   if((dropObjectT4[3] == 1)||(dropObjectT4[3] == 2)||(dropObjectT4[3] == 3)|| (dropObjectT4[3] == 4)||(dropObjectT4[3] == 5)||(dropObjectT4[3] == 9)||(dropObjectT4[3] == 10))
		   {
			   document.getElementById("tT44").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("tT44").style.backgroundColor = "#ED5245";
		   }
		
		///////////////////////////555555555////////////////////
		   
		   if((dropObjectT5[0] == 1)||(dropObjectT5[0] == 2)||(dropObjectT5[0] == 3)||(dropObjectT5[0] == 4)||(dropObjectT5[0] == 5))
		   {
			   document.getElementById("tT51").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("tT51").style.backgroundColor = "#ED5245";
		   }
		   
		   if((dropObjectT5[1] == 1)||(dropObjectT5[1] == 2)||(dropObjectT5[1] == 3)||(dropObjectT5[1] == 4)||(dropObjectT5[1] == 5))
		   {
			   document.getElementById("tT52").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("tT52").style.backgroundColor = "#ED5245";
		   }
		   
		   if((dropObjectT5[2] == 1)||(dropObjectT5[2] == 2)||(dropObjectT5[2] == 3)||(dropObjectT5[2] == 4)||(dropObjectT5[2] == 5))
		   {
			   document.getElementById("tT53").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("tT53").style.backgroundColor = "#ED5245"; 
		   }
		   
		   if((dropObjectT5[3] == 1)||(dropObjectT5[3] == 2)||(dropObjectT5[3] == 3)||(dropObjectT5[3] == 4)||(dropObjectT5[3] == 5))
		   {
			   document.getElementById("tT54").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("tT54").style.backgroundColor = "#ED5245"; 
		   }   
	
}
























///////////////////////////////////////////////////////////////////////////
////////////////////////////----Level3----/////////////////////////////////
///////////////////////////////////////////////////////////////////////////

/////////Clicking on buckets @ last/////////
   $("#ginviButtonL").on('click', function() {
   $("#UK_buk_LG").css("visibility", "visible");
   resultPopCountL1=true;
   //nextButtonClickL();
   });
  
  $("#myHrefCloseLG").on('click', function() {
    $("#UK_buk_LG").css("visibility", "hidden");
	nextButtonClickL();
  });
  
  
  
  $("#pinviButtonL").on('click', function() {
   $("#UK_buk_LP").css("visibility", "visible");
   resultPopCountL2=true;
    //nextButtonClickL();
   });
  
  $("#myHrefCloseLP").on('click', function() {
    $("#UK_buk_LP").css("visibility", "hidden");
	nextButtonClickL();
  });
  
  
  
  $("#yinviButtonL").on('click', function() {
   $("#UK_buk_LY").css("visibility", "visible");
    resultPopCountL3=true;
    //nextButtonClickL();
   });
  
  $("#myHrefCloseLY").on('click', function() {
    $("#UK_buk_LY").css("visibility", "hidden");
	nextButtonClickL();
  });
  
  
  
  $("#binviButtonL").on('click', function() {
   $("#UK_buk_LB").css("visibility", "visible");
    resultPopCountL4=true;
   // nextButtonClickL();
   });
  $("#myHrefCloseLB").on('click', function() {
    $("#UK_buk_LB").css("visibility", "hidden");
	nextButtonClickL();
  });
  
  
  
  $("#rinviButtonL").on('click', function() {
   $("#UK_buk_LR").css("visibility", "visible");
    resultPopCountL5=true;
    //nextButtonClickL();
   });
  
  $("#myHrefCloseLR").on('click', function() {
    $("#UK_buk_LR").css("visibility", "hidden");
	nextButtonClickL();
  });
  
  
function nextButtonClickL()
{
	if(resultPopCountL1 && resultPopCountL2 && resultPopCountL3 && resultPopCountL4)
	{
	  //completedStatus=true;
	  notCompletedTask=true;
	  interactiveCompleted=true;
	  $("#popDetailCompleted").css("visibility", "visible");
	  $("#instructionLast").css("visibility", "visible");
	  $("#instructionFirst").css("visibility", "hidden");
	  $("#LogoRotator").css("visibility","hidden");
      $("#dummyLoader").css("visibility","visible");
	   player.SetVar("attempt22","true");
	   
	   

		
	
	  
	}
}
  
//////////////////////////////////////////////


resetInitialL = function()
	{
		  for(var i=1;i<=5;++i)
			{
			  for(var j=1;j<=4;++j)
				  {
					$("#tL"+i+j).css("visibility", "hidden");  
				  }
			}
			
		  for(var i=1;i<=4;++i)
		  {
			$("#gL"+i).css("visibility", "hidden");
			$("#ginviButtonL").css("visibility", "hidden");
			$("#ginviButtonL").attr('disabled','disabled');
			$("#pL"+i).css("visibility", "hidden");
			$("#pinviButtonL").css("visibility", "hidden");
			$("#pinviButtonL").attr('disabled','disabled');
			$("#yL"+i).css("visibility", "hidden");
			$("#yinviButtonL").css("visibility", "hidden");
			$("#yinviButtonL").attr('disabled','disabled');
			$("#bL"+i).css("visibility", "hidden");
			$("#binviButtonL").css("visibility", "hidden");
			$("#binviButtonL").attr('disabled','disabled');
			$("#rL"+i).css("visibility", "hidden");
			$("#rinviButtonL").css("visibility", "hidden");
			$("#rinviButtonL").attr('disabled','disabled');
		  }
			
        for(var i=1;i<=12;++i)
	     {
			$("#objectL"+i).show();
		 } 
		 
		 $("#submitID").css("background-color", "#C7C7C7"); 
		 $("#retryID").css("background-color", "#C7C7C7"); 
		 $("#retryID").attr('disabled','disabled');
		 $("#submitID").attr('disabled','disabled');
		 $("#submitID").css( 'cursor', 'default' ); 
		 $("#retryID").css( 'cursor', 'default' );
		 $('#submitID').css('pointer-events','none');
		 $('#retryID').css('pointer-events','none');
		
		percentageL=0;
		percentageLP=0;
        percentageLY=0;
        percentageLB=0;
        percentageLR=0;
		
		bucketDropCountL1=0;
		bucketDropCountL2=0;
		bucketDropCountL3=0;
		bucketDropCountL4=0;
		bucketDropCountL5=0;
		
		dropArrayLX1= [];
		dropArrayLY1= [];
		dropArrayLX2= [];
		dropArrayLY2= [];
		dropArrayLX3= [];
		dropArrayLY3= [];
		dropArrayLX4= [];
		dropArrayLY4= [];
		dropArrayLX5= [];
		dropArrayLY5= [];
		dropObjectL1= [];
		dropObjectL2= [];
		dropObjectL3= [];
		dropObjectL4= [];
		dropObjectL5= [];
		
		bucketLC1=0;
        countLB1=0;
		bucketLC2=0;
        countLB2=0;
		bucketLC3=0;
        countLB3=0;
		bucketLC4=0;
        countLB4=0;
		bucketLC5=0;
        countLB5=0;
		
}
	

completedStatusTrackL = function()
{
		$("#goodjob").css("visibility", "visible");
		$("#ginviButton").attr('disabled','disabled');
		$("#ginviButton").css( 'cursor', 'default' );
		$("#pinviButton").attr('disabled','disabled');
		$("#pinviButton").css( 'cursor', 'default' );
		$("#yinviButton").attr('disabled','disabled');
		$("#yinviButton").css( 'cursor', 'default' );
		$("#binviButton").attr('disabled','disabled');
		$("#binviButton").css( 'cursor', 'default' );
		$("#rinviButton").attr('disabled','disabled');
		$("#rinviButton").css( 'cursor', 'default' );
}


function resetAllL(){
	resetInitialL();
};


function drag_startL(event){
	//_('app_status').innerHTML = "Dragging the "+ event.target.getAttribute('id');
	event.dataTransfer.dropEffect = "move";
	event.dataTransfer.setData("text",event.target.getAttribute('id'));
	//alert(event.dataTransfer.getData("text"))
	
	objectTL=event.dataTransfer.getData("text");
	elementTL = document.getElementById(objectTL);
	positionTL = elementTL.getBoundingClientRect();
	xTL = positionTL.left;
	yTL = positionTL.top;
	
	elementL1 = document.getElementById('waterMarkL1');
	positionL1 = elementL1.getBoundingClientRect();
	xL1 = positionL1.left;
    yL1 = positionL1.top;
	//alert(x1 +"-"+ y1);
	elementL2 = document.getElementById('waterMarkL2');
	positionL2 = elementL2.getBoundingClientRect();
	xL2 = positionL2.left;
    yL2 = positionL2.top;
	
	elementL3 = document.getElementById('waterMarkL3');
	positionL3 = elementL3.getBoundingClientRect();
	xL3 = positionL3.left;
    yL3 = positionL3.top;
	
	elementL4 = document.getElementById('waterMarkL4');
	positionL4 = elementL4.getBoundingClientRect();
	xL4 = positionL4.left;
    yL4 = positionL4.top;
	
	//document.getElementById("timer").style.animationPlayState  = "running";
	
}
	
function drag_enterL(event){
	//_('app_status').innerHTML = "You are dragging over the  "+ event.target.getAttribute('id');
}
	
function drag_leaveL(event){
	//_('app_status').innerHTML = "You left the"+ event.target.getAttribute('id');
}

function drag_dropL(event){
	event.preventDefault();
	
	if((event.target.getAttribute('id') == "drop_zoneL1")||(event.target.getAttribute('id') == "gL1")||(event.target.getAttribute('id') == "gL2")||(event.target.getAttribute('id') == "gL3")||(event.target.getAttribute('id') == "gL4"))
	{
		
		bucketLC1++;
		countLB1=0;
		if(bucketLC1>4)
		{
			
		}
		else
		{
			for(var i=0;i<=dropArrayLX1.length-1;++i)
			{
				
               if((xTL==dropArrayLX1[i])&&(yTL==dropArrayLY1[i]))
				{
					
					countLB1++;	
				}
			}
			if(countLB1==0)
			{
				elem_idL= event.dataTransfer.getData("text");
	            draggedObjectL=elem_idL.slice(7);
				dropObjectL1.push(draggedObjectL);
				bucketDropCountL1++;
				percentageL=percentageL+3;
				jqueryFunctionL();	
			}
			else{
				bucketLC1--;
			}
		}
	}
	
	
	else if((event.target.getAttribute('id') == "drop_zoneL2")||(event.target.getAttribute('id') == "pL1")||(event.target.getAttribute('id') == "pL2")||(event.target.getAttribute('id') == "pL3")||(event.target.getAttribute('id') == "pL4"))
	{
		bucketLC2++;
		countLB2=0;
		if(bucketLC2>4)
		{
				
		}
		else
		{
			for(var i=0;i<=dropArrayLX2.length-1;++i)
			{
               if((xTL==dropArrayLX2[i])&&(yTL==dropArrayLY2[i]))
				{
					countLB2++;	
				}
			}
			if(countLB2==0)
			{
				elem_idL= event.dataTransfer.getData("text");
				draggedObjectL=elem_idL.slice(7);
				dropObjectL2.push(draggedObjectL);
				bucketDropCountL2++;
				percentageLP=percentageLP+3;
				jqueryFunctionLP();	
			}
			else{
				bucketLC2--;
			}
		}
	}
	else if((event.target.getAttribute('id') == "drop_zoneL3")||(event.target.getAttribute('id') == "yL1")||(event.target.getAttribute('id') == "yL2")||(event.target.getAttribute('id') == "yL3")||(event.target.getAttribute('id') == "yL4"))
	{
		bucketLC3++;
		countLB3=0;
		if(bucketLC3>4)
		{
				
		}
		else
		{
			for(var i=0;i<=dropArrayLX3.length-1;++i)
			{
               if((xTL==dropArrayLX3[i])&&(yTL==dropArrayLY3[i]))
				{
					countLB3++;	
				}
			}
			if(countLB3==0)
			{
				elem_idL= event.dataTransfer.getData("text");
				draggedObjectL=elem_idL.slice(7);
				dropObjectL3.push(draggedObjectL);
				bucketDropCountL3++;
				percentageLY=percentageLY+3;
				jqueryFunctionLY();	
			}
			else{
				bucketLC3--;
			}
		}
	}
	else if((event.target.getAttribute('id') == "drop_zoneL4")||(event.target.getAttribute('id') == "bL1")||(event.target.getAttribute('id') == "bL2")||(event.target.getAttribute('id') == "bL3")||(event.target.getAttribute('id') == "bL4"))
	{
		bucketLC4++;
		countLB4=0;
		if(bucketLC4>4)
		{
				
		}
		else
		{
			for(var i=0;i<=dropArrayLX4.length-1;++i)
			{
               if((xTL==dropArrayLX4[i])&&(yTL==dropArrayLY4[i]))
				{
					countLB4++;	
				}
			}
			if(countLB4==0)
			{
				elem_idL= event.dataTransfer.getData("text");
				draggedObjectL=elem_idL.slice(7);
				dropObjectL4.push(draggedObjectL);
				bucketDropCountL4++;
				percentageLB=percentageLB+3;
				jqueryFunctionLB();	
			}
			else{
				bucketLC4--;
			}
		}
	}
	
	//	_('app_status').innerHTML = "Dropped"+elem_id+"into the"+event.target.getAttribute('id');
	_(elem_idL).style.display = "none";
	//document.getElementById("boxTickT").visiblity="visible";
	//document.getElementById("waterG").style.zIndex = "5";
	//_(elem_idT).removeEventListener("draggable");
	//_(elem_idT).style.cursor="default";
	droppedInL=true;
	
	
}
	
function drag_endL(event){
	droppedInL=false;
}


jqueryFunctionL = function()
	{
		
		 $("#submitID").css("background-color", "#FFCC00"); 
		 $("#retryID").css("background-color", "#FFCC00"); 
		 $("#retryID").removeAttr("disabled");
		 $("#retryID").css( 'cursor', 'pointer' );
		 $("#submitID").removeAttr("disabled");
		 $("#submitID").css( 'cursor', 'pointer' ); 
		 $('#submitID').css('pointer-events','auto');
		 $('#retryID').css('pointer-events','auto');
		 
		 $("#tL1"+bucketDropCountL1).css("visibility", "visible");
		 for(var i=1;i<=4;++i)
	     {
			$("#gL"+i).css("visibility", "hidden"); 
		 }
		 $("#gL"+bucketDropCountL1).css("visibility", "visible");
		 
		if((xTL == xL1)&&(yTL == yL1))
		{
			
		  $("#tL1"+bucketDropCountL1).html("1");
		  dropArrayLX1.push(xTL);
		  dropArrayLY1.push(yTL);
	    }
		else if((xTL == xL2)&&(yTL == yL2))
		{
		  $("#tL1"+bucketDropCountL1).html("2");	
		  dropArrayLX1.push(xTL);
		  dropArrayLY1.push(yTL);
		}
		else if((xTL == xL3)&&(yTL == yL3))
		{
		  $("#tL1"+bucketDropCountL1).html("3");	
		  dropArrayLX1.push(xTL);
		  dropArrayLY1.push(yTL);
		}
		else if((xTL == xL4)&&(yTL == yL4))
		{
		  $("#tL1"+bucketDropCountL1).html("4");	
		  dropArrayLX1.push(xTL);
		  dropArrayLY1.push(yTL);
		}
		
	}



jqueryFunctionLP = function()
	{
		 $("#submitID").css("background-color", "#FFCC00"); 
		 $("#submitID").removeAttr("disabled");
		 $("#submitID").css( 'cursor', 'pointer' ); 
		 $("#retryID").css("background-color", "#FFCC00"); 
		 $("#retryID").removeAttr("disabled");
		 $("#retryID").css( 'cursor', 'pointer' );
		 $('#submitID').css('pointer-events','auto');
		 $('#retryID').css('pointer-events','auto');
		 $("#tL2"+bucketDropCountL2).css("visibility", "visible");
		 for(var i=1;i<=4;++i)
	     {
			$("#pL"+i).css("visibility", "hidden"); 
		 }
		 $("#pL"+bucketDropCountL2).css("visibility", "visible");
		 
		
		if((xTL == xL1)&&(yTL == yL1))
		{
			
		  $("#tL2"+bucketDropCountL2).html("1");
		  dropArrayLX2.push(xTL);
		  dropArrayLY2.push(yTL);
	    }
		else if((xTL == xL2)&&(yTL == yL2))
		{
		  $("#tL2"+bucketDropCountL2).html("2");	
		  dropArrayLX2.push(xTL);
		  dropArrayLY2.push(yTL);
		}
		else if((xTL == xL3)&&(yTL == yL3))
		{
		  $("#tL2"+bucketDropCountL2).html("3");	
		  dropArrayLX2.push(xTL);
		  dropArrayLY2.push(yTL);
		}
		else if((xTL == xL4)&&(yTL == yL4))
		{
		  $("#tL2"+bucketDropCountL2).html("4");	
		  dropArrayLX2.push(xTL);
		  dropArrayLY2.push(yTL);
		}
		
	}



jqueryFunctionLY = function()
	{
		 $("#submitID").css("background-color", "#FFCC00"); 
		 $("#submitID").removeAttr("disabled");
		 $("#submitID").css( 'cursor', 'pointer' ); 
		 $("#retryID").css("background-color", "#FFCC00"); 
		 $("#retryID").removeAttr("disabled");
		 $("#retryID").css( 'cursor', 'pointer' );
		 $("#tL3"+bucketDropCountL3).css("visibility", "visible");
		 $("#submitID").css( 'cursor', 'pointer' );
		 $('#submitID').css('pointer-events','auto');
		 $('#retryID').css('pointer-events','auto');
		 for(var i=1;i<=4;++i)
	     {
			$("#yL"+i).css("visibility", "hidden"); 
		 }
		 $("#yL"+bucketDropCountL3).css("visibility", "visible");
		 
		if((xTL == xL1)&&(yTL == yL1))
		{
			
		  $("#tL3"+bucketDropCountL3).html("1");
		  dropArrayLX3.push(xTL);
		  dropArrayLY3.push(yTL);
	    }
		else if((xTL == xL2)&&(yTL == yL2))
		{
		  $("#tL3"+bucketDropCountL3).html("2");	
		  dropArrayLX3.push(xTL);
		  dropArrayLY3.push(yTL);
		}
		else if((xTL == xL3)&&(yTL == yL3))
		{
		  $("#tL3"+bucketDropCountL3).html("3");	
		  dropArrayLX3.push(xTL);
		  dropArrayLY3.push(yTL);
		}
		else if((xTL == xL4)&&(yTL == yL4))
		{
		  $("#tL3"+bucketDropCountL3).html("4");	
		  dropArrayLX3.push(xTL);
		  dropArrayLY3.push(yTL);
		}
		
	}


jqueryFunctionLB = function()
	{
		//alert();
		 $("#submitID").css("background-color", "#FFCC00"); 
		 $("#submitID").removeAttr("disabled");
		 $("#submitID").css( 'cursor', 'pointer' ); 
		 $("#retryID").css("background-color", "#FFCC00"); 
		 $("#retryID").removeAttr("disabled");
		 $("#retryID").css( 'cursor', 'pointer' );
		 $("#tL4"+bucketDropCountL4).css("visibility", "visible");
		 $('#submitID').css('pointer-events','auto');
		 $('#retryID').css('pointer-events','auto');
		 for(var i=1;i<=4;++i)
	     {
			$("#bL"+i).css("visibility", "hidden"); 
		 }
		 $("#bL"+bucketDropCountL4).css("visibility", "visible");
		 
		if((xTL == xL1)&&(yTL == yL1))
		{
			
		  $("#tL4"+bucketDropCountL4).html("1");
		  dropArrayLX4.push(xTL);
		  dropArrayLY4.push(yTL);
	    }
		else if((xTL == xL2)&&(yTL == yL2))
		{
		  $("#tL4"+bucketDropCountL4).html("2");	
		  dropArrayLX4.push(xTL);
		  dropArrayLY4.push(yTL);
		}
		else if((xTL == xL3)&&(yTL == yL3))
		{
		  $("#tL4"+bucketDropCountL4).html("3");	
		  dropArrayLX4.push(xTL);
		  dropArrayLY4.push(yTL);
		}
		else if((xTL == xL4)&&(yTL == yL4))
		{
		  $("#tL4"+bucketDropCountL4).html("4");	
		  dropArrayLX4.push(xTL);
		  dropArrayLY4.push(yTL);
		}
}





function calculateL()
{
	         $("#submitID").css("background-color", "#C7C7C7"); 
			 $("#submitID").attr('disabled','disabled');
			 $("#submitID").css( 'cursor', 'default' ); 
			 $("#retryID").css("background-color", "#C7C7C7"); 
			 $("#retryID").attr('disabled','disabled');
			 $("#retryID").css( 'cursor', 'default' );
			 $('#submitID').css('pointer-events','none');
		     $('#retryID').css('pointer-events','none');
	
	finalCountL=0;
	bowlL1=0; bowlL2=0; bowlL3=0; bowlL4=0; 
	
	 for (var i = 0; i < answerArrayL1.length; ++i)
	    {
			for (var j = 0; j < answerArrayL1.length; ++j)
			{
				if (dropObjectL1[j] == answerArrayL1[i])
				{
					bowlL1++;
				}
			}
		}
		
	for (var i = 0; i < answerArrayL2.length; ++i)
	    {
			for (var j = 0; j < answerArrayL2.length; ++j)
			{
				if (dropObjectL2[j] == answerArrayL2[i])
				{
					bowlL2++;
				}
			}
		}
		
	for (var i = 0; i < answerArrayL3.length; ++i)
	    {
			for (var j = 0; j < answerArrayL3.length; ++j)
			{
				if (dropObjectL3[j] == answerArrayL3[i])
				{
					bowlL3++;
				}
			}
		}
		
	for (var i = 0; i < answerArrayL4.length; ++i)
	    {
			for (var j = 0; j < answerArrayL4.length; ++j)
			{
				if (dropObjectL4[j] == answerArrayL4[i])
				{
					bowlL4++;
				}
			}
		}
		
	
		
	finalCountL = bowlL1 + bowlL2 + bowlL3 + bowlL4;
	//alert(bowlT4);
	if (finalCountL < 12)
	{
		attemptL++;
		if(attemptL==1)
		{
		  $("#try").css("visibility", "visible");
		}
		else
		{
			showCaseL();
			$("#tryIncorrect").css("visibility", "visible");
			for(var i=1;i<=4;++i)
			{
				$("#ginviButtonL").css("visibility", "visible");
				$("#ginviButtonL").removeAttr("disabled");
				$("#ginviButtonL").css( 'cursor', 'pointer' ); 
				$("#pinviButtonL").css("visibility", "visible");
				$("#pinviButtonL").removeAttr("disabled");
				$("#pinviButtonL").css( 'cursor', 'pointer' ); 
				$("#yinviButtonL").css("visibility", "visible");
				$("#yinviButtonL").removeAttr("disabled");
				$("#yinviButtonL").css( 'cursor', 'pointer' ); 
				$("#binviButtonL").css("visibility", "visible");
				$("#binviButtonL").removeAttr("disabled");
				$("#binviButtonL").css( 'cursor', 'pointer' ); 
				$("#rinviButtonL").css("visibility", "visible");
				$("#rinviButtonL").removeAttr("disabled");
				$("#rinviButtonL").css( 'cursor', 'pointer' ); 
			}
			
			for(var i=1;i<=12;++i)
			{
				$("#objectL"+i).attr('disabled','disabled');
				$("#objectL"+i).draggable({ disabled: false });
			}
		   	 
			
		}
	}
	else
	{
		notCompletedTask=true;
	    interactiveCompleted=true;
		showCaseL();
		//$("#popDetailCompleted").css("visibility", "visible");
		$("#correct").css("visibility", "visible");
		$("#nextID").css("background-color", "#FFCC00");
		$("#LogoRotator").css("visibility","hidden");
        $("#dummyLoader").css("visibility","visible");
		player.SetVar("attempt22","true");
	    
		
	}
}




function showCaseL()
{
	//document.getElementById("LogoRotator").animation-play-state: 'running';
	  for(var i=1;i<=12;++i)
	  {
		 $("#objectL"+i).css( 'cursor', 'default' ); 
	  }
		
		 if((dropObjectL1[0] == 1)||(dropObjectL1[0] == 2)||(dropObjectL1[0] == 3)||(dropObjectL1[0] == 4)||(dropObjectL1[0] == 5)||(dropObjectL1[0] == 6)||(dropObjectL1[0] == 7)||(dropObjectL1[0] == 8)|| (dropObjectL1[0] == 9)||(dropObjectL1[0] == 10)||(dropObjectL1[0] == 11)||(dropObjectL1[0] == 12) ||(dropObjectL1[0] == 13))
		 {
               document.getElementById("tL11").style.backgroundColor = "#349945";
		 }
		 else{
               document.getElementById("tL11").style.backgroundColor = "#ED5245";
		 }
		
		 if((dropObjectL1[1] == 1)||(dropObjectL1[1] == 2)||(dropObjectL1[1] == 3)||(dropObjectL1[1] == 4)||(dropObjectL1[1] == 5)||(dropObjectL1[1] == 6)||(dropObjectL1[1] == 7)||(dropObjectL1[1] == 8)|| (dropObjectL1[1] == 9)||(dropObjectL1[1] == 10)||(dropObjectL1[1] == 11)||(dropObjectL1[1] == 12) ||(dropObjectL1[1] == 13))
		 {
			  document.getElementById("tL12").style.backgroundColor = "#349945";
		 }
		 else{
              document.getElementById("tL12").style.backgroundColor = "#ED5245";
		 }
		
		 if((dropObjectL1[2] == 1)||(dropObjectL1[2] == 2)||(dropObjectL1[2] == 3)||(dropObjectL1[2] == 4)||(dropObjectL1[2] == 5)||(dropObjectL1[2] == 6)||(dropObjectL1[2] == 7)||(dropObjectL1[2] == 8)|| (dropObjectL1[2] == 9)||(dropObjectL1[2] == 10)||(dropObjectL1[2] == 11)||(dropObjectL1[2] == 12) ||(dropObjectL1[2] == 13))
		 {
			  document.getElementById("tL13").style.backgroundColor = "#349945";
		 }
		 else{
              document.getElementById("tL13").style.backgroundColor = "#ED5245";
		 }
		
		 if((dropObjectL1[3] == 1)||(dropObjectL1[3] == 2)||(dropObjectL1[3] == 3)||(dropObjectL1[3] == 4)||(dropObjectL1[3] == 5)||(dropObjectL1[3] == 6)||(dropObjectL1[3] == 7)||(dropObjectL1[3] == 8)|| (dropObjectL1[3] == 9)||(dropObjectL1[3] == 10)||(dropObjectL1[3] == 11)||(dropObjectL1[3] == 12) ||(dropObjectL1[3] == 13))
		 {
			  document.getElementById("tL14").style.backgroundColor = "#349945";
		 }
		 else{
              document.getElementById("tL14").style.backgroundColor = "#ED5245";
		 }
		
		////////////////////22222////////////////////
		 if((dropObjectL2[0] == 1)||(dropObjectL2[0] == 2)||(dropObjectL2[0] == 3)||(dropObjectL2[0] == 4)||(dropObjectL2[0] == 5)||(dropObjectL2[0] == 6)||(dropObjectL2[0] == 7)||(dropObjectL2[0] == 8)|| (dropObjectL2[0] == 9)||(dropObjectL2[0] == 10)||(dropObjectL2[0] == 11)||(dropObjectL2[0] == 12) ||(dropObjectL2[0] == 13))
		 {
			   document.getElementById("tL21").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("tL21").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObjectL2[1] == 1)||(dropObjectL2[1] == 2)||(dropObjectL2[1] == 3)||(dropObjectL2[1] == 4)||(dropObjectL2[1] == 5)||(dropObjectL2[1] == 6)||(dropObjectL2[1] == 7)||(dropObjectL2[1] == 8)|| (dropObjectL2[1] == 9)||(dropObjectL2[1] == 10)||(dropObjectL2[1] == 11)||(dropObjectL2[1] == 12) ||(dropObjectL2[1] == 13))
		 {
			   document.getElementById("tL22").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("tL22").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObjectL2[2] == 1)||(dropObjectL2[2] == 2)||(dropObjectL2[2] == 3)||(dropObjectL2[2] == 4)||(dropObjectL2[2] == 5)||(dropObjectL2[2] == 6)||(dropObjectL2[2] == 7)||(dropObjectL2[2] == 8)|| (dropObjectL2[2] == 9)||(dropObjectL2[2] == 10)||(dropObjectL2[2] == 11)||(dropObjectL2[2] == 12) ||(dropObjectL2[2] == 13))
		 {
			   document.getElementById("tL23").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("tL23").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObjectL2[3] == 1)||(dropObjectL2[3] == 2)||(dropObjectL2[3] == 3)||(dropObjectL2[3] == 4)||(dropObjectL2[3] == 5)||(dropObjectL2[3] == 6)||(dropObjectL2[3] == 7)||(dropObjectL2[3] == 8)|| (dropObjectL2[3] == 9)||(dropObjectL2[3] == 10)||(dropObjectL2[3] == 11)||(dropObjectL2[3] == 12) ||(dropObjectL2[3] == 13))
		 {
			   document.getElementById("tL24").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("tL24").style.backgroundColor = "#ED5245"; 
		 }
		
		////////////////////33333333///////////////////
		
		 if((dropObjectL3[0] == 1)||(dropObjectL3[0] == 2)||(dropObjectL3[0] == 3)||(dropObjectL3[0] == 4)||(dropObjectL3[0] == 5)||(dropObjectL3[0] == 6)||(dropObjectL3[0] == 7)||(dropObjectL3[0] == 8)|| (dropObjectL3[0] == 9)||(dropObjectL3[0] == 10)||(dropObjectL3[0] == 11)||(dropObjectL3[0] == 12) ||(dropObjectL3[0] == 13))
		 {
			   document.getElementById("tL31").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("tL31").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObjectL3[1] == 1)||(dropObjectL3[1] == 2)||(dropObjectL3[1] == 3)||(dropObjectL3[1] == 4)||(dropObjectL3[1] == 5)||(dropObjectL3[1] == 6)||(dropObjectL3[1] == 7)||(dropObjectL3[1] == 8)|| (dropObjectL3[1] == 9)||(dropObjectL3[1] == 10)||(dropObjectL3[1] == 11)||(dropObjectL3[1] == 12) ||(dropObjectL3[1] == 13))
		 {
			   document.getElementById("tL32").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("tL32").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObjectL3[2] == 1)||(dropObjectL3[2] == 2)||(dropObjectL3[2] == 3)||(dropObjectL3[2] == 4)||(dropObjectL3[2] == 5)||(dropObjectL3[2] == 6)||(dropObjectL3[2] == 7)||(dropObjectL3[2] == 8)|| (dropObjectL3[2] == 9)||(dropObjectL3[2] == 10)||(dropObjectL3[2] == 11)||(dropObjectL3[2] == 12) ||(dropObjectL3[2] == 13))
		 {
			   document.getElementById("tL33").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("tL33").style.backgroundColor = "#ED5245"; 
		 }
		
		 if((dropObjectL3[3] == 1)||(dropObjectL3[3] == 2)||(dropObjectL3[3] == 3)||(dropObjectL3[3] == 4)||(dropObjectL3[3] == 5)||(dropObjectL3[3] == 6)||(dropObjectL3[3] == 7)||(dropObjectL3[3] == 8)|| (dropObjectL3[3] == 9)||(dropObjectL3[3] == 10)||(dropObjectL3[3] == 11)||(dropObjectL3[3] == 12) ||(dropObjectL3[3] == 13))
		 {
			   document.getElementById("tL34").style.backgroundColor = "#349945";
		 }
		 else
		 {
			   document.getElementById("tL34").style.backgroundColor = "#ED5245"; 
		 }
		
		//////////////////4444444/////////////////////
		
		 if((dropObjectL4[0] == 7)||(dropObjectL4[0] == 8)||(dropObjectL4[0] == 9)|| (dropObjectL4[0] == 10))
		   {
			   document.getElementById("tL41").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("tL41").style.backgroundColor = "#ED5245";
		   }
		   
		   if((dropObjectL4[1] == 7)||(dropObjectL4[1] == 8)||(dropObjectL4[1] == 9)|| (dropObjectL4[1] == 10))
		   {
			   document.getElementById("tL42").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("tL42").style.backgroundColor = "#ED5245";
		   }
		   
		   if((dropObjectL4[2] == 7)||(dropObjectL4[2] == 8)||(dropObjectL4[2] == 9)|| (dropObjectL4[2] == 10))
		   {
			   document.getElementById("tL43").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("tL43").style.backgroundColor = "#ED5245";
		   }
		   
		   if((dropObjectL4[3] == 7)||(dropObjectL4[3] == 8)||(dropObjectL4[3] == 9)|| (dropObjectL4[3] == 10))
		   {
			   document.getElementById("tL44").style.backgroundColor = "#349945";
		   }
		   else
		   {
			   document.getElementById("tL44").style.backgroundColor = "#ED5245";
		   }
}







//////////////////Timer////////////////////////////
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
			$("#poptimeUp").css("visibility","visible");
			$("#instructionLast").css("visibility", "visible");
			$("#instructionFirst").css("visibility", "hidden");
			$("#LogoRotator").css("visibility","hidden");
            $("#dummyLoader").css("visibility","visible");
			player.SetVar("attempt22","true");
			end();
        }
		}
    }, 1000);
	
}

function end()
{
	clearInterval(timer);
			
}

window.onload = function () {
    
};
	
function timerStart()
{
	var fiveMinutes = 60 * 20,
    display = document.querySelector('#time');
	startTimer(fiveMinutes, display);
	document.getElementById('LogoRotator').style.animationPlayState = 'running';
	document.getElementById('LogoRotator').style.animationDelay = "2s";

}