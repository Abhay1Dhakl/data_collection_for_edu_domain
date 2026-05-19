var imgpath = $ref+"/images/";
var soundAsset = $ref+"/sounds/"+$lang+"/";

var content=[
	// slide0
	{
		contentnocenteradjust: true,
				containscanvaselement: true,
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
	// slide1
	{
		contentnocenteradjust: true,

		containscanvaselement: true,
		contentblockadditionalclass: 'light_bg',

		uppertextblockadditionalclass: "instruction",
		uppertextblock:[{
			textdata: data.string.p3text1,
			textclass: "instruction_text_1",
			datahighlightflag : true,
			datahighlightcustomclass : ''
		},
		{
			textdata: data.string.p3text2,
			textclass: "multiply_text",
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : ''
		}]
	},
	// slide2
	{
		contentnocenteradjust: true,

		containscanvaselement: true,
		contentblockadditionalclass: 'light_bg',

		uppertextblockadditionalclass: "instruction",
		uppertextblock:[{
			textdata: data.string.p3text3,
			textclass: "instruction_text",
			datahighlightflag : true,
			datahighlightcustomclass : ''
		}],

		questionblockadditionalclass: "questions_1",
		questionblock:[{
			inputclass_numerator: 'box_numerator digit_box frac_1',
			inputclass_denominator: 'box_denominator digit_box frac_2',
			fractioninput: 'fractioninput',
			inputclass_numerator_1: 'box_numerator digit_box frac_3',
			inputclass_denominator_1: 'box_denominator digit_box frac_4',
			fractioninput_1: 'fractioninput',
			buttondata: data.string.pctext3,
			buttonclass: "check_button",
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : '',
			symboldata: data.string.smultiply,
			symbolclass: 'big_symbol'
		}],
		lowertextblockadditionalclass: "its_hidden hint",
		lowertextblock:[{
			textdata: data.string.p3text4,
			textclass: "hint_text",
		}],
	},

	// slide3
	{
		contentnocenteradjust: true,

		containscanvaselement: true,
		contentblockadditionalclass: 'light_bg',

		uppertextblockadditionalclass: "instruction",
		uppertextblock:[{
			textdata: data.string.p3text1,
			textclass: "instruction_text_1",
			datahighlightflag : true,
			datahighlightcustomclass : ''
		}],
		questionblockadditionalclass: "questions_1 offset_top",
		questionblock:[{
			inputclass_numerator: 'box_numerator digit_box_1 frac_1',
			inputclass_denominator: 'box_denominator digit_box_1 frac_2',
			fractioninput: 'fractioninput',
			answer_1_data: data.string.p3text4,
			answer_1_class: 'ans_1',
			answer_2_data: data.string.p3text6,
			answer_2_class: 'ans_2',
			buttondata: data.string.pctext1,
			buttonclass: "check_button",
			splitintofractionsflag: true,
			datahighlightflag : true,
			datahighlightcustomclass : ''
		}],
		lowertextblockadditionalclass: "its_hidden redo_button_div",
		lowertextblock:[{
			textdata: data.string.predo,
			textclass: "redo_button",
		}],
	}
];


$(function () {
	var $board = $('.board');
	var $nextBtn = $("#activity-page-next-btn-enabled");
	var $prevBtn = $("#activity-page-prev-btn-enabled");
  var $refreshBtn= $("#activity-page-refresh-btn");
	var countNext = 0;
	var go_next = 1;

	var canvas;
    var canvas_2;

    var ctx;
    var ctx_2;

    var frac_1, frac_2, frac_3, frac_4;


    var m1_c, n1_c, m2_c, n2_c, full;

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
				{id: "sound_0", src: soundAsset+"s3_p1.mp3"},
				{id: "sound_1", src: soundAsset+"s3_p2.mp3"},
				{id: "sound_2", src: soundAsset+"s3_p3.mp3"},


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
  		input_box('.digit_box_1', 2, '.check_button');
  		canvas = document.getElementById("canvas_fraction_1");
	    canvas_2 = document.getElementById("canvas_fraction_2");

		ctx = canvas.getContext("2d");
	    ctx_2 = canvas_2.getContext("2d");

	    switch(countNext){
				case 0:
				play_diy_audio();
				nav_button_controls(2000);
				break;
	   		case 1:
	   			init_canvas();
	   			save_variables(2 , 3, 1, 5, false);
	   			draw_grids(canvas, ctx, 2 , 3, 1, 5, true , false);
	   			draw_grids(canvas_2, ctx_2, 2 , 3, 1, 5, false , false);
	   			go_next = 0;
	   		sound_player("sound_2");
		  	break;
		  	case 2:
				sound_player("sound_1");
		  		$('#canvas_fraction_1').hide(0);
		  		$('#canvas_fraction_2').hide(0);
	   			init_canvas();
	   			$('.check_button').click(function(){
	   				frac_1 = parseInt($('.frac_1').val());
	   				frac_2 = parseInt($('.frac_2').val());
	   				frac_3 = parseInt($('.frac_3').val());
	   				frac_4 = parseInt($('.frac_4').val());

		   			if((frac_1 < frac_2) && (frac_3 < frac_4)){
		   				$('.check_button').css("pointer-events", 'none');
		   				$('.check_button').css("background", '#4CAF50');
		   				$('.digit_box').css({"background": '#C5F295', 'box-shadow': 'none'});
						$('.digit_box').prop("disabled", true);

				  		// $('#canvas_fraction_1').show(0);
				  		// $('#canvas_fraction_2').show(0);

				   		save_variables(frac_1 , frac_2, frac_3, frac_4, false);

				  		draw_grids(canvas, ctx, frac_1 , frac_2, frac_3, frac_4, true , false);
	   					draw_grids(canvas_2, ctx_2, frac_1 , frac_2, frac_3, frac_4, false , false);

	   					$('.hint').addClass('its_hidden');
			   			nav_button_controls(0);

							$('#canvas_fraction_1').show(0);
				  		$('#canvas_fraction_2').show(0);
		   			} else{
		   				$('.hint').removeClass('its_hidden');
		   				$('.check_button').css("background", '#D0553E');
		   				$('.digit_box').css({"background": '#FF7660'});
		   			}
		   		});
		  	break;
		  	case 3:
				sound_player("sound_2");
				$('.ans_1').html('::'+ frac_1 +'_/_'+ frac_2 +';; × ::' + frac_3 +'_/_'+ frac_4 +';; = ');
				$('.ans_2').html('::'+ frac_1 +'×'+ frac_3 +'_/_'+ frac_2 +'×'+ frac_4 +';; = ');
				splitintofractions($board);

		  		$('#canvas_fraction_1').hide(0);
		  		$('#canvas_fraction_2').hide(0);
		  		init_canvas();
		  		save_variables(frac_1 , frac_2, frac_3, frac_4, false);

		  		draw_grids(canvas, ctx, frac_1 , frac_2, frac_3, frac_4, true , false);
	   			draw_grids(canvas_2, ctx_2, frac_1 , frac_2, frac_3, frac_4, false , false);

	   			var answer = (frac_1*frac_3)/(frac_2*frac_4);
	   			var mistakes = 0;
	   			$('.check_button').click(function(){

		   			if( ( (parseInt(($('.frac_1').val()))/ parseInt($('.frac_2').val())) == (answer) )){
		   				$('.check_button').css("background", '#4CAF50');
		   				$('.digit_box_1').css({"background": '#C5F295', 'box-shadow': 'none'});
						$('.digit_box_1').prop("disabled", true);

				  		// $('#canvas_fraction_1').show(0);
				  		// $('#canvas_fraction_2').show(0);


				   		save_variables(frac_1 , frac_2, frac_3, frac_4, false);
				  		// draw_grids(canvas, ctx, frac_1 , frac_2, frac_3, frac_4, true , false);
	   					// draw_grids(canvas_2, ctx_2, frac_1 , frac_2, frac_3, frac_4, false , false);

			   			$('.redo_button_div').removeClass('its_hidden');
			   			nav_button_controls(0);
								createjs.Sound.stop();
						play_correct_incorrect_sound(1);
		   			} else {
							createjs.Sound.stop();
						play_correct_incorrect_sound(0);
		   				if(mistakes == 0){
		   					mistakes = 1;
					  		// $('#canvas_fraction_1').show(0);
					  		// $('#canvas_fraction_2').show(0);
			   				$('.ans_2').css('opacity', '1');
		   					$('.check_button').css("background", '#D0553E');
		   					$('.digit_box_1').css({"background": '#FF7660'});
		   				} else if(mistakes == 1){
		   					mistakes = 2;
		   					$('#canvas_fraction_1').animate({
			   					'left':'32.5%'
				   			}, 1000);
				   			$('#canvas_fraction_2').animate({
				   				'left':'32.5%'
				   			}, 1000);
				   			save_variables(frac_1 , frac_2, frac_3, frac_4, true);
				   			setTimeout(function(){
					   			draw_grids(canvas, ctx, frac_1 , frac_2, frac_3, frac_4, true , true);
					   			draw_grids(canvas_2, ctx_2, frac_1 , frac_2, frac_3, frac_4, false , true);
					   			draw_grids_only(canvas, ctx, frac_1 , frac_2, frac_3, frac_4);
					   			draw_grids_only(canvas_2, ctx_2, frac_1 , frac_2, frac_3, frac_4);
				   			}, 1000);
		   				}
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
				ole.footerNotificationHandler.lessonEndSetNotification();
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
			if(countNext==2 || countNext==3){
				$prevBtn.hide(0);
				$nextBtn.hide(0);
			}else {
				nav_button_controls(0);
			}
				});
	}

/*=====  End of Templates Block  ======*/

function init_canvas(){
	canvasheight = ($board.height() * 0.4);
	canvaswidth = ($board.width() * 0.35);

	canvas.height = canvasheight;
	canvas.width = canvaswidth;

	canvas_2.height = canvasheight;
	canvas_2.width = canvaswidth;

	ctx.clearRect(0, 0, canvaswidth, canvasheight);
	ctx_2.clearRect(0, 0, canvaswidth, canvasheight);
}

/* m, n for vertical grid, m2 and n2 for horizontal grid*/
function draw_grids(canvasid, context, m , n, m2, n2, is_vertical, final_fill){
	context.clearRect(0, 0, canvasid.width, canvasid.height);
	context.beginPath();
	if(!final_fill){
		is_vertical?context.fillStyle = '#FF6081':context.fillStyle = '#30C0AF';
		is_vertical?context.rect(0, 0, m*canvasid.width/n, canvasid.height):context.rect(0, 0, canvasid.width, m2*canvasid.height/n2);
		context.fill();
	} else {
		context.fillStyle = '#A061D6';
		context.rect(0, 0, m*canvasid.width/n, m2*canvasid.height/n2);
		context.fill();
	}
	if( is_vertical){
		for (var i=0; i<n; i++){
	    	context.beginPath();
	    	context.strokeStyle = '#000';
	    	context.moveTo(i*canvasid.width/n, 0);
	    	context.lineTo(i*canvasid.width/n, canvasid.height);
	    	context.stroke();
		}
	} else {
		for (var i=0; i<n2; i++){
	    	context.beginPath();
	    	context.strokeStyle = '#000';
	    	context.moveTo(0, i*canvasid.height/n2);
	    	context.lineTo(canvasid.width, i*canvasid.height/n2);
	    	context.stroke();
		}
	}
}

function draw_grids_only(canvasid, context, m, n, m2, n2){
	for (var i=0; i<n; i++){
    	context.beginPath();
    	context.strokeStyle = '#000';
    	context.moveTo(i*canvasid.width/n, 0);
    	context.lineTo(i*canvasid.width/n, canvasid.height);
    	context.stroke();
	}
	for (var i=0; i<n2; i++){
    	context.beginPath();
    	context.strokeStyle = '#000';
    	context.moveTo(0, i*canvasid.height/n2);
    	context.lineTo(canvasid.width, i*canvasid.height/n2);
    	context.stroke();
	}
}

function save_variables( am1_c, an1_c, am2_c, an2_c, afull){
	m1_c = am1_c;
	n1_c = an1_c;
	m2_c = am2_c;
	n2_c = an2_c;
	full = afull;
}

$(window).resize(function() {
	init_canvas();
	draw_grids(canvas, ctx, m1_c , n1_c, m2_c, n2_c, true , full);
	draw_grids(canvas_2, ctx_2, m1_c , n1_c, m2_c, n2_c, false , full);
	draw_grids_only(canvas, ctx, m1_c , n1_c, m2_c, n2_c);
	draw_grids_only(canvas_2, ctx_2, m1_c , n1_c, m2_c, n2_c);
});
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
			case 1:
				if(go_next == 0){
			   		$nextBtn.hide(0);
					$('#canvas_fraction_1').animate({
	   					'left':'32.5%'
		   			}, 1000);
		   			$('#canvas_fraction_2').animate({
		   				'left':'32.5%'
		   			}, 1000);
		   			setTimeout(function(){
		   				save_variables(2 , 3, 1, 5, true);
			   			draw_grids(canvas, ctx, 2 , 3, 1, 5, true , true);
			   			draw_grids(canvas_2, ctx_2, 2 , 3, 1, 5, false , true);
			   			draw_grids_only(canvas, ctx, 2 , 3, 1, 5);
			   			draw_grids_only(canvas_2, ctx_2, 2 , 3, 1, 5);
				   		nav_button_controls(0);
		   			}, 1000);
		   			go_next = 1;
				} else if(go_next == 1){
					countNext++;
					templateCaller();
				}
				break;
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
