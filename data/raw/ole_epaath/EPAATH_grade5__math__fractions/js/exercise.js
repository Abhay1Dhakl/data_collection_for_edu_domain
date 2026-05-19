var imgpath = $ref+"/images/page5/";
var animationend = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var content=[
  {
    imageblock:[
      {
        imagestoshow:[
          {
            imgclass:"timetothink",
            imgsrc: "images/lokharke/2.png"
          }
        ],
        imagelabels:[
          {
            imagelabelclass: "timeToThink_figdata classlink",
            imagelabeldata: data.string.p6_heading,
          }
        ]
      }
    ]
  }
];


$(function () { 
  var $board = $('.board');
  var $nextBtn = $("#activity-page-next-btn-enabled");
  var $prevBtn = $("#activity-page-prev-btn-enabled");
  var $refreshBtn= $("#activity-page-refresh-btn");
  var countNext = 0;

  var $total_page = content.length;
  loadTimelineProgress($total_page,countNext+1);

/*==================================================
=            Handlers and helpers Block            =
==================================================*/
   /*==========  register the handlebar partials first  ==========*/
   Handlebars.registerPartial("textcontent", $("#textcontent-partial").html());
   Handlebars.registerPartial("imagecontent", $("#imagecontent-partial").html());
   
     /*===============================================
     =            data highlight function            =
     ===============================================*/
      /**

        What it does:
        - send an element where the function has to see
        for data to highlight
        - this function searches for all nodes whose
        data-highlight element is set to true 
        -searches for # character and gives a start tag
        ;span tag here, also for @ character and replaces with
        end tag of the respective
        - if provided with data-highlightcustomclass value for highlight it
          applies the custom class or else uses parsedstring class
        
        E.g: caller : texthighlight($board);
       */
      function texthighlight($highlightinside){
        //check if $highlightinside is provided
        typeof $highlightinside !== "object" ?
        alert("Texthighlight : Hi Master, Please pass me a Jquery Object whose child are to be highlighted") :
        null ;
          
        var $alltextpara = $highlightinside.find("*[data-highlight='true']");
        var stylerulename;
        var replaceinstring;
        var texthighlightstarttag;
        var texthighlightendtag   = "</span>";
        if($alltextpara.length > 0){
          $.each($alltextpara, function(index, val) { 
            /*if there is a data-highlightcustomclass attribute defined for the text element
            use that or else use default 'parsedstring'*/       
            $(this).attr("data-highlightcustomclass") ? /*if there is data-highlightcustomclass defined it is true else it is not*/
              (stylerulename = $(this).attr("data-highlightcustomclass")) :
              (stylerulename = "parsedstring") ;

            texthighlightstarttag = "<span class='"+stylerulename+"'>";
            replaceinstring       = $(this).html();
            replaceinstring       = replaceinstring.replace(/#/g,texthighlightstarttag);
            replaceinstring       = replaceinstring.replace(/@/g,texthighlightendtag);
            $(this).html(replaceinstring);
          });
        }
      }
    /*=====  End of data highlight function  ======*/

    /*===============================================
     =            user notification function        =
     ===============================================*/
    /**   
      How to:
      - First set any html element with 
        "data-usernotification='notifyuser'" attribute,
      and "data-isclicked = ''".
      - Then call this function to give notification    
     */
    
    /**
      What it does:
      - You send an element where the function has to see
      for data to notify user
      - this function searches for all text nodes whose
      data-usernotification attribute is set to notifyuser
      - applies event handler for each of the html element which 
       removes the notification style.
     */
    function notifyuser($notifyinside){
      //check if $notifyinside is provided
      typeof $notifyinside !== "object" ?
      alert("Notifyuser : Hi Master, Please pass me a Jquery Object which should contain notification style.") :
      null ;

      /*variable that will store the element(s) to remove notification from*/ 
      var $allnotifications = $notifyinside.find("*[data-usernotification='notifyuser']");
       // if there are any notifications removal required add the event handler
      if($allnotifications.length > 0){
        $allnotifications.one('click', function() {
          /* Act on the event */
          $(this).attr('data-isclicked', 'clicked');
          $(this).removeAttr('data-usernotification');
        });
      }
    }
    /*=====  End of user notification function  ======*/

   /*======================================================
   =            Navigation Controller Function            =
   ======================================================*/    
   /**   
    How To:
    - Just call the navigation controller if it is to be called from except the
      last page of lesson
    - If called from last page set the islastpageflag to true such that 
      footernotification is called for continue button to navigate to exercise
    */
  
  /**   
      What it does:
      - If not explicitly overriden the method for navigation button
        controls, it shows the navigation buttons as required,
        according to the total count of pages and the countNext variable
      - If for a general use it can be called from the templateCaller
        function
      - Can be put anywhere in the template function as per the need, if 
        so should be taken out from the templateCaller function
      - If the total page number is 
     */  
   
  function navigationcontroller(islastpageflag){
    // check if the parameter is defined and if a boolean,
    // update islastpageflag accordingly
    typeof islastpageflag === "undefined" ? 
    islastpageflag = false : 
      typeof islastpageflag != 'boolean'?
      alert("NavigationController : Hi Master, please provide a boolean parameter") :
      null;

   }
   /*=====  End of user navigation controller function  ======*/

   /*==================================================
  =            InstructionBlockController            =
  ==================================================*/
    /**   
      How to:
      - Just call instructionblockcontroller() from the template    
     */

    /**
      What it does:
      - It inserts and handles closing and opening of instruction block
      - this function searches for all text nodes whose
      data-usernotification attribute is set to notifyuser
      - applies event handler for each of the html element which 
       removes the notification style.
    */
    function instructionblockcontroller(){
      var $instructionblock = $board.find("div.instructionblock");
      if($instructionblock.length > 0){
        var $contentblock = $board.find("div.contentblock");
        var $toggleinstructionblockbutton = $instructionblock.find("div.toggleinstructionblock");
        var instructionblockisvisibleflag;

        $contentblock.css('pointer-events', 'none');

        $toggleinstructionblockbutton.on('click', function() {
          instructionblockisvisibleflag = $instructionblock.attr("data-instructionblockshow");
          if(instructionblockisvisibleflag == 'true'){
            instructionblockisvisibleflag = 'false';
            $contentblock.css('pointer-events', 'auto');
          }
          else if(instructionblockisvisibleflag == 'false'){
            instructionblockisvisibleflag = 'true';
            $contentblock.css('pointer-events', 'none');
          }

          $instructionblock.attr("data-instructionblockshow" , instructionblockisvisibleflag);          
        });
      }
    } 
  /*=====  End of InstructionBlockController  ======*/
  
/*=====  End of Handlers and helpers Block  ======*/

/*=======================================
=            Templates Block            =
=======================================*/
  /*=================================================
  =            general template function            =
  =================================================*/   
  function generalTemplate() {
    var source = $("#general-template").html();
    var template = Handlebars.compile(source);
    var html = template(content[countNext]);
    $board.html(html);
    $nextBtn.hide(0);
        
    // highlight any text inside board div with datahighlightflag set true
    texthighlight($board);

    //call instruction block controller
    // instructionblockcontroller($board);

    //call notifyuser
    // notifyuser($anydiv);



    // find if there is linehorizontal div in the slide
    // var $linehorizontal = $board.find("div.linehorizontal");
    // if($linehorizontal.length > 0)
    // {
    //   $linehorizontal.attr('data-isdrawn', 'draw');
    // }
  }

/*=====  End of Templates Block  ======*/

/*==================================================
=            Templates Controller Block            =
==================================================*/

  /*==================================================
  =            function to call templates            =
  ==================================================*/
  /**
    Motivation :
    - Make a single function call that handles all the 
      template load easier

    How To:
    - Update the template caller with the required templates
    - Call template caller

    What it does:
    - According to value of the Global Variable countNext
      the slide templates are updated 
   */
  
  function templateCaller(){
    /*always hide next and previous navigation button unless
    explicitly called from inside a template*/ 
    $prevBtn.css('display', 'none');
    $nextBtn.css('display', 'none');
    
    // call navigation controller
    navigationcontroller();

    // call the template
    generalTemplate();
  		/*
		  for (var i = 0; i < content.length; i++) {
		    slides(i);
		    $($('.totalsequence')[i]).html(i);
		    $($('.totalsequence')[i]).css({'color':'red',"height": "4.3vmin",
		  "width": "4.3vmin" , "cursor" : "pointer","text-align":"center"});
		  }
		  function slides(i){
		      $($('.totalsequence')[i]).click(function(){
		        countNext = i;
		        templateCaller();
		      });
		    }
		*/
   

    /*OR, call templates like this if you have more than one template
    to call*/
    /*switch(countNext){
      case 0 : sometemplate()); break;
      .
      .
      .
      case 5 : someothertemplate();
    break;
      default : break;
    }*/

    //call the slide indication bar handler for pink indicators
    loadTimelineProgress($total_page,countNext+1);

    // just for development purpose to see total slide vs current slide number
    // $board.append("<span id='slidecount' style='position:absolute;top:0px;left:0px;'>"+"Developers : "+countNext+" / "+($total_page-1)+"</span>");
  }

  /*this countNext variable change here is solely for development phase and
  should be commented out for deployment*/
  // countNext+=1;

  // first call to template caller
  templateCaller();

  /* navigation buttons event handlers */
  

/*=====  End of Templates Controller Block  ======*/
});
