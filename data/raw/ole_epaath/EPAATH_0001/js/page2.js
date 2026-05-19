var imgpath = $ref+"/images/";
var soundAsset = $ref+"/sounds/"+$lang+"/";

var content=[
	// slide0
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'diy_cover',
		imageblockadditionalclass: "diy_cover",
		imageblock : [{
			imagestoshow: [{
				imgclass : "diy_coverpage",
				imgsrc :imgpath + "a_40.png",
			}],
			imagelabels:[{
				imagelabelclass:"diy_text",
				imagelabeldata:data.string.pdiy
			}]
		}]
	},
	//slide1
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'light_bg',
		questionblockadditionalclass: "questions_1",
		questionblock:[{
			questiondata: data.string.p2text1,
			questionclass: "",
			inputdata: '',
			inputclass: "digit_box",
			buttondata: data.string.pctext2,
			buttonclass: "check_button",
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : ''
		}]
	},
	// slide2
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'light_bg',
		uppertextblockadditionalclass: "hint its_hidden",
		uppertextblock:[{
			textdata: data.string.p2text8,
			textclass: "hint_text",
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : ''
		}],

		questionblockadditionalclass: "questions_1",
		questionblock:[{
			questiondata: data.string.p2text1,
			questionclass: "",
			inputdata: '',
			inputclass: "digit_box_disabled",
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : ''
		},
		{
			questiondata: data.string.p2text2,
			questionclass: "",
			inputdata: '',
			fractioninput: 'fractioninput',
			inputclass_numerator: 'box_numerator digit_box_2',
			inputclass_denominator: 'box_denominator digit_box_2',
			buttondata: data.string.pctext2,
			buttonclass: "check_button",
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : ''
		}]
	},
	// slide3
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'light_bg',
		uppertextblockadditionalclass: "hint  its_hidden",
		uppertextblock:[{
			textdata: data.string.phint,
			textclass: "hint_text",
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : ''
		},
		{
			textdata: data.string.p2text5,
			textclass: "hint_text",
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : ''
		}],
		questionblockadditionalclass: "questions_1",
		questionblock:[{
			questiondata: data.string.p2text1,
			questionclass: "",
			inputdata: '',
			inputclass: "digit_box_disabled first_box",
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : ''
		},
		{
			questiondata: data.string.p2text2,
			questionclass: "",
			inputdata: '',
			fractioninput: 'fractioninput',
			inputclass_numerator: 'box_numerator digit_box_disabled second_boxes_1',
			inputclass_denominator: 'box_denominator digit_box_disabled second_boxes_2',
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : ''
		},
		{
			questionblockwrapperadditionalclass: 'current_selector',
			questiondata: data.string.p2text3,
			questionclass: "",
			inputdata: '',
			fractioninput: 'fractioninput',
			inputclass_numerator: 'box_numerator digit_box_3 frac_1',
			inputclass_denominator: 'box_denominator digit_box_3 frac_2',
			buttondata: data.string.pctext1,
			buttonclass: "check_button",
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : ''
		}]
	},
	// slide4
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'light_bg',
		uppertextblockadditionalclass: "hint  its_hidden",
		uppertextblock:[{
			textdata: data.string.phint,
			textclass: "hint_text",
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : ''
		},
		{
			textdata: data.string.p2text6,
			textclass: "hint_text",
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : 'fraction_sign'
		},
		{
			textdata: data.string.p2text7,
			textclass: "hint_text",
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : 'fraction_sign'
		}],
		questionblockadditionalclass: "questions_1",
		questionblock:[{
			questiondata: data.string.p2text1,
			questionclass: "",
			inputdata: '',
			inputclass: "digit_box_disabled first_box",
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : ''
		},
		{
			questiondata: data.string.p2text2,
			questionclass: "",
			inputdata: '',
			fractioninput: 'fractioninput',
			inputclass_numerator: 'box_numerator digit_box_disabled second_boxes_1',
			inputclass_denominator: 'box_denominator digit_box_disabled second_boxes_2',
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : ''
		},
		{
			questionblockwrapperadditionalclass: 'current_selector',
			questiondata: data.string.p2text4,
			questionclass: "",
			inputdata: '',
			fractioninput: 'fractioninput',
			inputclass: "digit_box_1",
			inputclass_numerator: 'box_numerator digit_box_2 frac_1 ',
			inputclass_denominator: 'box_denominator digit_box_2 frac_2',
			buttondata: data.string.pctext1,
			buttonclass: "check_button",
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : 'like_input_boxes'
		}],
		lowertextblockadditionalclass: "its_hidden redo_button_div",
		lowertextblock:[{
			textdata: data.string.predo,
			textclass: "redo_button",
		}],
	},
];


$(function () {
	var $board = $('.board');
	var $nextBtn = $("#activity-page-next-btn-enabled");
	var $prevBtn = $("#activity-page-prev-btn-enabled");
  var $refreshBtn= $("#activity-page-refresh-btn");
	var countNext = 0;
	var go_next = 1;

	var whole_number = 0;
	var nominator = 0;
	var denominator = 0;

	var frac_1 = 0;
	var input_1;
	var input_2;

	var $total_page = content.length;
	loadTimelineProgress($total_page,countNext+1);

	var index = 0;
	var preload;
	var timeoutvar = null;
	var current_sound;

	function init() {
		//specify type otherwise it will load assests as XHR
		manifest = [
			//images

			// sounds
			{id: "sound_0", src: soundAsset+"s2_p1.mp3"},
			{id: "sound_1", src: soundAsset+"s2_p2.mp3"},
			{id: "sound_2", src: soundAsset+"s2_p3.mp3"},


		];
		preload = new createjs.LoadQueue(false);
		preload.installPlugin(createjs.Sound);//for registering sounds
		preload.on("progress", handleProgress);
		preload.on("complete", handleComplete);
		preload.on("fileload", handleFileLoad);
		preload.loadManifest(manifest, true);
	}
	function handleFileLoad(event) {
		// console.log(event.item);
	}
	function handleProgress(event) {
		$('#loading-text').html(parseInt(event.loaded*100)+'%');
	}
	function handleComplete(event) {
		$('#loading-wrapper').hide(0);
		//initialize varibales
		// call main function
		templateCaller();
	}
	//initialize
	init();

	/*==================================================
	=            Handlers and helpers Block            =
	==================================================*/
    /*==========  register the handlebar partials first  ==========*/
    Handlebars.registerPartial("textcontent", $("#textcontent-partial").html());
    Handlebars.registerPartial("imagecontent", $("#imagecontent-partial").html());
    Handlebars.registerPartial("fractioncontent", $("#fractioncontent-partial").html());
     /*===============================================
     =            data highlight function            =
     ===============================================*/
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

    /*===== This function splits the string in data into convential fraction used in mathematics =====*/
    function splitintofractions($splitinside){
   		typeof $splitinside !== "object" ?
        alert("Texthighlight : Hi Master, Please pass me a Jquery Object whose child are to be highlighted") :
        null ;

        var $splitintofractions = $splitinside.find("*[data-splitintofractions ='true']");
       	if($splitintofractions.length > 0){
       		$.each($splitintofractions, function(index, value){
	        	$this = $(this);
	        	var tobesplitfraction = $this.html();
	        	if($this.hasClass('fraction')){
	        		tobesplitfraction = tobesplitfraction.replace(/::/g, '<span class="top">');
		        	tobesplitfraction = tobesplitfraction.replace(/;;/g, '</span>');
	        	}else{
	        		tobesplitfraction = tobesplitfraction.replace(/::/g, '<span class="fraction2"><span class="top">');
		        	tobesplitfraction = tobesplitfraction.replace(/;;/g, '</span></span>');
	        	}


				tobesplitfraction = tobesplitfraction.replace(/_\/_/g, '</span><span class="bottom">');
	        	$this.html(tobesplitfraction);
	        });
       	}
   	}
   	/*===== split into fractions end =====*/

    /*===============================================
     =            user notification function        =
     ===============================================*/
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

  function navigationcontroller(islastpageflag){
  		typeof islastpageflag === "undefined" ? islastpageflag = false : typeof islastpageflag != 'boolean' ? alert("NavigationController : Hi Master, please provide a boolean parameter") : null;

		// if (countNext == 0 && $total_page != 1) {
		// 	$nextBtn.show(0);
		// 	$prevBtn.css('display', 'none');
		// } else if ($total_page == 1) {
		// 	$prevBtn.css('display', 'none');
		// 	$nextBtn.css('display', 'none');
		//
		// 	// if lastpageflag is true
		// 	islastpageflag ? ole.footerNotificationHandler.lessonEndSetNotification() : ole.footerNotificationHandler.pageEndSetNotification();
		// } else if (countNext > 0 && countNext < $total_page - 1) {
		// 	// $nextBtn.show(0);
		// 	$prevBtn.show(0);
		// } else if (countNext == $total_page - 1) {
		// 	$nextBtn.css('display', 'none');
		// 	$prevBtn.show(0);
		//
		// 	// if lastpageflag is true
		// 	// islastpageflag ? ole.footerNotificationHandler.lessonEndSetNotification() : ole.footerNotificationHandler.pageEndSetNotification();
		// }
   }
   /*=====  End of user navigation controller function  ======*/

   /*==================================================
  =            InstructionBlockController            =
  ==================================================*/

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

	    // highlight any text inside board div with datahighlightflag set true
	    texthighlight($board);
	    splitintofractions($board);

  		input_box('.digit_box', 1, '.check_button');
  		input_box('.digit_box_1', 1, '.check_button');
  		input_box('.digit_box_2', 1, '.check_button');
  		input_box('.digit_box_3', 2, '.check_button');
		// splitintofractions($(".fractionblock"));
	    switch(countNext){
				case 0:
				play_diy_audio();
				nav_button_controls(2000);
				break;
	   		case 1:
					sound_player("sound_0");
		   		$('.check_button').click(function(){
		   			var answer = $('.digit_box').val();
		   			whole_number = parseInt(answer);
		   			if(whole_number > 0){
		   				$('.check_button').css("background", '#4CAF50');
		   				$('.digit_box').css({"background": '#C5F295', 'box-shadow': 'none'});
						$('.digit_box').prop("disabled", true);
								nav_button_controls(0);
		   			}
		   		});
	   			break;
	   		case 2:
					sound_player("sound_1");
	   			$('.digit_box_disabled').prop("disabled", true);
	   			$('.digit_box_disabled').val(whole_number);
		   		$('.check_button').click(function(){
		   			nominator = parseInt($('.box_numerator').val());
		   			denominator = parseInt($('.box_denominator').val());
		   			if(denominator > nominator){
		   				$('.check_button').css("background", '#4CAF50');
		   				$('.digit_box_2').css({"background": '#C5F295', 'box-shadow': 'none'});
						$('.digit_box_2').prop("disabled", true);
						nav_button_controls(0);
						play_correct_incorrect_sound(1);
		   			} else{
		   				$('.check_button').css("background", '#D0553E');
		   				$('.digit_box_2').css({"background": '#FF7660'});
		   				$('.hint').removeClass('its_hidden');
							play_correct_incorrect_sound(0);
		   			}
		   		});
	   			break;
	   		case 3:
					sound_player("sound_2");
	   			$('.digit_box_disabled').prop("disabled", true);
	   			$('.first_box').val(whole_number);
	   			$('.second_boxes_1').val(nominator);
	   			$('.second_boxes_2').val(denominator);
	   			$('.current_selector> .fractioninput').addClass('frac_question_offset');
	   			$('.current_selector> .check_button').addClass('frac_question_offset');
	   			$('.hint_text>.fraction2').css('transform','translateY(0%)');
	   			$('.hint_a').html(whole_number);
   				$('.hint_b').html(nominator);
   				$('.hint_c').html(denominator);
		   		$('.check_button').click(function(){
		   			input_1 = parseInt($('.frac_1').val());
		   			input_2 = parseInt($('.frac_2').val());
		   			if( (parseInt($('.frac_1').val())/ parseInt($('.frac_2').val()) ) == (whole_number*nominator) /denominator ){
		   				$('.check_button').css("background", '#4CAF50');
		   				$('.digit_box_3').css({"background": '#C5F295', 'box-shadow': 'none'});
						$('.digit_box_3').prop("disabled", true);
						nav_button_controls(0);
						play_correct_incorrect_sound(1);
		   			} else{
		   				$('.hint').removeClass('its_hidden');
		   				$('.check_button').css("background", '#D0553E');
		   				$('.digit_box_3').css({"background": '#FF7660'});
						play_correct_incorrect_sound(0);
		   			}
		   		});
	   			break;
	   		case 4:
	   			$('.digit_box_disabled').prop("disabled", true);
	   			$('.first_box').val(whole_number);
	   			$('.second_boxes_1').val(nominator);
	   			$('.second_boxes_2').val(denominator);
	   			$('.bottom').css({
	   				'padding-top': '1vmin',
	   				'margin-top': '1vmin'
	   				});
	   			$('.hint_text>.fraction2').css('transform','translateY(0%)');
	   			$('.current_selector> .digit_box_1').addClass('frac_question_offset');
	   			$('.current_selector> .fractioninput').addClass('frac_question_offset');
	   			$('.current_selector> .check_button').addClass('frac_question_offset');
		   		$('.top>.like_input_boxes').html(input_1);
	   			$('.bottom>.like_input_boxes').html(input_2);
	   			$('.hint_a').html(whole_number);
   				$('.hint_b').html(nominator);
   				$('.hint_c').html(denominator);
		   		$('.check_button').click(function(){
		   			if((parseInt($('.digit_box_1').val()) == Math.floor(whole_number*nominator/denominator)) && ( (parseInt($('.frac_1').val()) / parseInt($('.frac_2').val()) ) == (Math.floor((whole_number*nominator)%denominator)/denominator))){
		   				$('.check_button').css("background", '#93C496');
		   				$('.check_button').css("background", '#4CAF50');
		   				$('.digit_box_2, .digit_box_1').css({"background": '#C5F295', 'box-shadow': 'none'});
							$('.digit_box_2, .digit_box_1').prop("disabled", true);
		   				$('.redo_button_div').removeClass('its_hidden');
						nav_button_controls(0);
						play_correct_incorrect_sound(1);
		   			} else{
		   				$('.hint_f').html(input_2);
		   				$('.hint_e').html(input_1);
		   				$('.hint_x').html(Math.floor(input_1/input_2));
		   				$('.hint_z').html(Math.floor(input_1/input_2)*input_2);
		   				$('.hint_y').html(input_1 - Math.floor(input_1/input_2)*input_2);
		   				$('.hint').removeClass('its_hidden');
		   				$('.check_button').css("background", '#D0553E');
		   				$('.digit_box_2, .digit_box_1').css({"background": '#FF7660'});
						play_correct_incorrect_sound(0);
		   			}
		   		});
		   		$('.redo_button').click(function(){
		   			countNext = 0;
					templateCaller();
		   		});
	   			break;
	   		default:
	   			$nextBtn.show(0);
	   			break;
	    }
  }
	function nav_button_controls(delay_ms){
		timeoutvar = setTimeout(function(){
			if(countNext==0){
				$nextBtn.show(0);
			} else if( countNext>0 && countNext == $total_page-1){
				$prevBtn.show(0);
				// $nextBtn.show(0);
				ole.footerNotificationHandler.pageEndSetNotification();
			} else{
				$prevBtn.show(0);
				$nextBtn.show(0);
			}
		},delay_ms);
	}
	function sound_player(sound_id){
		createjs.Sound.stop();
		current_sound = createjs.Sound.play(sound_id);
		current_sound.play();
		current_sound.on("complete", function(){
		});
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
	$nextBtn.on('click', function() {
		createjs.Sound.stop();
		clearTimeout(timeoutvar);
		switch(countNext){
			default:
				countNext++;
				templateCaller();
				break;
		}
	});

	$refreshBtn.click(function(){
		templateCaller();
	});

	$prevBtn.on('click', function() {
		createjs.Sound.stop();
		clearTimeout(timeoutvar);
		countNext--;
		templateCaller();

		/* if footerNotificationHandler pageEndSetNotification was called then on click of
		 previous slide button hide the footernotification */
		countNext < $total_page ? ole.footerNotificationHandler.hideNotification() : null;
	});

	/** function to check the key pressed is a valid number(1-9 and .) for the input box or not
	 * event.key reurns the value of key pressed by user and it is converted to integer
	 * event.target gets the element where event is occuring (usually a div)
	 * conditions for backspace, del, arrow keys, decimal point and full stop are checked and enter is checked separately
	 * input_class and button_classes should be something like '.class_name'
	 * max_number must be number of digit allowed for 0-9 max_number = 1  and for 0-99 max_number = 2 and so on
	 */
	function input_box(input_class, max_number, button_class) {
		$(input_class).keydown(function(event){
    		var charCode = (event.which) ? event.which : event.keyCode;
    		/* charCodes 8 => backspace, 48 - 57 => 0 -9, 97-105 => num(1-9), 37-40 => arrowkeys, 110=>., 190=>., 46=> del */
    		if(charCode === 13 && button_class!=null) {
		        $(button_class).trigger("click");
			}
			var condition = charCode != 8 && (charCode < 37 || charCode > 40) && charCode != 46;
			//check if user inputs del, backspace or arrow keys
   			if (!condition) {
    			return true;
    		}
    		//check if user inputs more than one '.'
			if((charCode == 190 || charCode == 110) && event.target.value.split('.').length >= 2) {
        		return false;
    		}
    		//check . and 0-9 separately after checking arrow and other keys
    		if((charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105) && charCode != 190 && charCode != 110 ){
    			return false;
    		}
    		//check max no of allowed digits
    		if (String(event.target.value).length >= max_number) {
    			return false;
    		}
  			return true;
		});
	}
/*=====  End of Templates Controller Block  ======*/
});
