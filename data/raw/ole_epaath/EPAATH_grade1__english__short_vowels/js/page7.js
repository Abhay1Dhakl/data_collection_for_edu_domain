var imgpath = $ref + "/images/";
var soundAsset = $ref + "/audio_" + $lang + "/";

var soundcontent;

var content = [
	{
		//slide 0
		contentblockadditionalclass: 'bg',
		uppertextblock: [{
			textclass: "description_main2",
			textdata: data.string.diytext
		}]

	},
	{
		//slide 1
		contentnocenteradjust: true,
		uppertextblockadditionalclass: "utb",
		uppertextblock: [{
			textclass: "description_main",
			textdata: data.string.p7text1
		}],
		imageblock: [{
			imagestoshow: [{
				imgclass: "image",
				imgid: "bat"
			}]
		}],
		lowertextblockadditionalclass: "ltb",
		lowertextblock: [{
			textclass: "description pos0",
			textdata: data.string.p7text2
		}, {
			textclass: "description pos1 option yes",
			textdata: data.string.p7text3
		}, {
			textclass: "description pos2 option",
			textdata: data.string.p7text4
		}, {
			textclass: "description pos3 option",
			textdata: data.string.p7text5
		}, {
			textclass: "description pos4 option",
			textdata: data.string.p7text6
		}
		]
	},

	{
		//slide 2
		contentnocenteradjust: true,
		uppertextblockadditionalclass: "utb",
		uppertextblock: [{
			textclass: "description_main",
			textdata: data.string.p7text1
		}],
		imageblock: [{
			imagestoshow: [{
				imgclass: "image",
				imgid: "hen"
			}]
		}],
		lowertextblockadditionalclass: "ltb",
		lowertextblock: [{
			textclass: "description pos0",
			textdata: data.string.p7text7
		}, {
			textclass: "description pos1 option ",
			textdata: data.string.p7text3
		}, {
			textclass: "description pos2 option yes",
			textdata: data.string.p7text4
		}, {
			textclass: "description pos3 option",
			textdata: data.string.p7text5
		}, {
			textclass: "description pos4 option",
			textdata: data.string.p7text6
		}
		]
	},

	{
		//slide 3
		contentnocenteradjust: true,
		uppertextblockadditionalclass: "utb",
		uppertextblock: [{
			textclass: "description_main",
			textdata: data.string.p7text1
		}],
		imageblock: [{
			imagestoshow: [{
				imgclass: "image",
				imgid: "pin"
			}]
		}],
		lowertextblockadditionalclass: "ltb",
		lowertextblock: [{
			textclass: "description pos0",
			textdata: data.string.p7text8
		}, {
			textclass: "description pos1 option ",
			textdata: data.string.p7text3
		}, {
			textclass: "description pos2 option ",
			textdata: data.string.p7text4
		}, {
			textclass: "description pos3 option yes",
			textdata: data.string.p7text5
		}, {
			textclass: "description pos4 option ",
			textdata: data.string.p7text6
		}
		]
	},

	{
		//slide 4
		contentnocenteradjust: true,
		uppertextblockadditionalclass: "utb",
		uppertextblock: [{
			textclass: "description_main",
			textdata: data.string.p7text1
		}],
		imageblock: [{
			imagestoshow: [{
				imgclass: "image",
				imgid: "pot"
			}]
		}],
		lowertextblockadditionalclass: "ltb",
		lowertextblock: [{
			textclass: "description pos0",
			textdata: data.string.p7text9
		}, {
			textclass: "description pos1 option ",
			textdata: data.string.p7text3
		}, {
			textclass: "description pos2 option ",
			textdata: data.string.p7text4
		}, {
			textclass: "description pos3 option ",
			textdata: data.string.p7text5
		}, {
			textclass: "description pos4 option yes",
			textdata: data.string.p7text6
		}
		]
	},

	{
		//slide 5
		contentnocenteradjust: true,
		uppertextblockadditionalclass: "utb",
		uppertextblock: [{
			textclass: "description_main",
			textdata: data.string.p7text1
		}],
		imageblock: [{
			imagestoshow: [{
				imgclass: "image",
				imgid: "mug"
			}]
		}],
		lowertextblockadditionalclass: "ltb",
		lowertextblock: [{
			textclass: "description pos0",
			textdata: data.string.p7text10
		}, {
			textclass: "description pos1 option ",
			textdata: data.string.p7text3
		}, {
			textclass: "description pos2 option ",
			textdata: data.string.p7text4
		}, {
			textclass: "description pos3 option ",
			textdata: data.string.p7text5
		}, {
			textclass: "description pos4 option yes",
			textdata: data.string.p7text11
		}
		]
	},

];


$(function () {
	var $board = $('.board');
	var $nextBtn = $("#activity-page-next-btn-enabled");
	var $prevBtn = $("#activity-page-prev-btn-enabled");
	var $refreshBtn = $("#activity-page-refresh-btn");
	var countNext = 0;

	var $total_page = content.length;
	loadTimelineProgress($total_page, countNext + 1);

	var isFirefox = typeof InstallTrigger !== 'undefined';
	var vocabcontroller = new Vocabulary();
	vocabcontroller.init();

	//for preload
	var preload;
	var timeoutvar = null;
	var current_sound;

	function init() {
		//specify type otherwise it will load assests as XHR
		manifest = [
			//images
			{ id: "coverpage", src: imgpath + "bg.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "bat", src: imgpath + "bat.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "hen", src: imgpath + "hen.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "pin", src: imgpath + "pin.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "pot", src: imgpath + "pot.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "mug", src: imgpath + "mug.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "correct", src: imgpath + "correct.png", type: createjs.AbstractLoader.IMAGE },
			{ id: "incorrect", src: imgpath + "incorrect.png", type: createjs.AbstractLoader.IMAGE },

			// sounds
			{ id: "sound_0", src: soundAsset + "p7_s0.mp3" },
			{ id: "sound_1", src: soundAsset + "p7_s1.mp3" },
			{ id: "correct", src: soundAsset + "correct.mp3" },
			{ id: "incorrect", src: soundAsset + "incorrect.mp3" },
			{ id: "sound_a1", src: soundAsset + "BAT.mp3" },
			// {id: "sound_a2", src: soundAsset+"HEN.mp3"},
			// {id: "sound_a3", src: soundAsset+"PIN.mp3"},
			// {id: "sound_a4", src: soundAsset+"POT.mp3"},
			// {id: "sound_a5", src: soundAsset+"MUG.mp3"},

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
		$('#loading-text').html(parseInt(event.loaded * 100) + '%');
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
	function texthighlight($highlightinside) {
		//check if $highlightinside is provided
		typeof $highlightinside !== "object" ?
			alert("Texthighlight : Hi Master, Please pass me a Jquery Object whose child are to be highlighted") :
			null;

		var $alltextpara = $highlightinside.find("*[data-highlight='true']");
		var stylerulename;
		var replaceinstring;
		var texthighlightstarttag;
		var texthighlightendtag = "</span>";
		if ($alltextpara.length > 0) {
			$.each($alltextpara, function (index, val) {
				/*if there is a data-highlightcustomclass attribute defined for the text element
				use that or else use default 'parsedstring'*/
				$(this).attr("data-highlightcustomclass") ? /*if there is data-highlightcustomclass defined it is true else it is not*/
					(stylerulename = $(this).attr("data-highlightcustomclass")) :
					(stylerulename = "parsedstring");

				texthighlightstarttag = "<span class='" + stylerulename + "'>";
				replaceinstring = $(this).html();
				replaceinstring = replaceinstring.replace(/#/g, texthighlightstarttag);
				replaceinstring = replaceinstring.replace(/@/g, texthighlightendtag);
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
	function notifyuser($notifyinside) {
		//check if $notifyinside is provided
		typeof $notifyinside !== "object" ?
			alert("Notifyuser : Hi Master, Please pass me a Jquery Object which should contain notification style.") :
			null;

		/*variable that will store the element(s) to remove notification from*/
		var $allnotifications = $notifyinside.find("*[data-usernotification='notifyuser']");
		// if there are any notifications removal required add the event handler
		if ($allnotifications.length > 0) {
			$allnotifications.one('click', function () {
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

	function navigationcontroller(islastpageflag) {
		typeof islastpageflag === "undefined" ? islastpageflag = false : typeof islastpageflag != 'boolean' ? alert("NavigationController : Hi Master, please provide a boolean parameter") : null;

		if (countNext == 0 && $total_page != 1) {
			$nextBtn.show(0);
			$prevBtn.css('display', 'none');
		} else if ($total_page == 1) {
			$prevBtn.css('display', 'none');
			$nextBtn.css('display', 'none');

			// if lastpageflag is true
			islastpageflag ? ole.footerNotificationHandler.lessonEndSetNotification() : ole.footerNotificationHandler.pageEndSetNotification();
		} else if (countNext > 0 && countNext < $total_page - 1) {
			// $nextBtn.show(0);
			// $prevBtn.show(0);
		} else if (countNext == $total_page - 1) {
			$nextBtn.css('display', 'none');
			// $prevBtn.show(0);

			// if lastpageflag is true
			// islastpageflag ? ole.footerNotificationHandler.lessonEndSetNotification() : ole.footerNotificationHandler.pageEndSetNotification();
		}
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
	function instructionblockcontroller() {
		var $instructionblock = $board.find("div.instructionblock");
		if ($instructionblock.length > 0) {
			var $contentblock = $board.find("div.contentblock");
			var $toggleinstructionblockbutton = $instructionblock.find("div.toggleinstructionblock");
			var instructionblockisvisibleflag;

			$contentblock.css('pointer-events', 'none');

			$toggleinstructionblockbutton.on('click', function () {
				instructionblockisvisibleflag = $instructionblock.attr("data-instructionblockshow");
				if (instructionblockisvisibleflag == 'true') {
					instructionblockisvisibleflag = 'false';
					$contentblock.css('pointer-events', 'auto');
				}
				else if (instructionblockisvisibleflag == 'false') {
					instructionblockisvisibleflag = 'true';
					$contentblock.css('pointer-events', 'none');
				}

				$instructionblock.attr("data-instructionblockshow", instructionblockisvisibleflag);
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
	var animationinprogress = false;

	var sound_data;
	var timeourcontroller;
	function generalTemplate() {
		var source = $("#general-template").html();
		var template = Handlebars.compile(source);
		var html = template(content[countNext]);
		$board.html(html);

		if (countNext == 0) {
			$nextBtn.show(0);
		}

		// highlight any text inside board div with datahighlightflag set true
		texthighlight($board);
		$(".bg").css({
			'background-image': 'url(' + imgpath + 'bg.png' + ')'
		})
		put_image(content, countNext);
		vocabcontroller.findwords(countNext);
		// splitintofractions($(".fractionblock"));
		(countNext > 0) ? $prevBtn.show(0) : true;
		// sound_player("sound_0");
		// $(".image_label1").append('&nbsp;&nbsp; <span class="glyphicon glyphicon-volume-up"></span>');

		$(".imageblock").append('&nbsp;&nbsp; <span class="speaker_icon glyphicon glyphicon-volume-up"></span>');
		switch (countNext) {
			case 0:
				$nextBtn.show(0);
				sound_player('sound_0');
				$('.speaker_icon').css('display', 'none');
				break;
			case 1:
				sound_player('sound_1');
				setTimeout(function () {
					sound_player('sound_a' + countNext);
				}, 5000);
				break;
			default:
				sound_player('sound_a' + countNext);
				break;
		}
		$('.speaker_icon,.image').click(function () {
			sound_player('sound_a' + countNext);
		});
		$('.option').click(function () {
			if ($(this).hasClass('yes')) {
				var $this = $(this);
				var position = $this.position();
				var clicked_letter = $this.text();
				$('.dropinto').html(clicked_letter);
				$('.option').css('pointer-events', 'none');
				var width = $this.width();
				var height = $this.height();
				var centerX = ((position.left + width / 2) * 100) / $board.width() + '%';
				var centerY = ((position.top + height) * 100) / $board.height() + '%';
				$('<img style="left:' + centerX + ';top:' + centerY + ';position:absolute;width:4%;transform:translate(-39%,-68%)" src="' + imgpath + 'correct.png" />').insertAfter(this);
				$(this).css({ "background": "rgb(190,214,47)", "color": "white", "border": "1vmin solid #DEEF3C" });
				sound_player('correct');
				nav_button_controls(100);
			}
			else {
				var $this = $(this);
				var position = $this.position();
				var clicked_letter = $this.text();
				$('.dropinto').html(clicked_letter);
				var width = $this.width();
				var height = $this.height();
				var centerX = ((position.left + width / 2) * 100) / $board.width() + '%';
				var centerY = ((position.top + height) * 100) / $board.height() + '%';
				$('<img style="left:' + centerX + ';top:' + centerY + ';position:absolute;width:4%;transform:translate(-39%,-68%)" src="' + imgpath + 'incorrect.png" />').insertAfter(this);
				sound_player('incorrect');
				$(this).css({ "background": "rgb(168, 33, 36)", "color": "white", "pointer-events": "none", "border": "1vmin solid #980000" });
			}
		});
	}


	/*=====  End of Templates Block  ======*/

	function sound_player(sound_id) {
		createjs.Sound.stop();
		var current_sound = createjs.Sound.play(sound_id);
		current_sound.on("complete", function () {
			if (countNext == 0)
				$nextBtn.show(0);
		});
	}
	function nav_button_controls(delay_ms) {
		timeoutvar = setTimeout(function () {
			if (countNext == 0) {
				$nextBtn.show(0);
			} else if (countNext > 0 && countNext == $total_page - 1) {
				$prevBtn.show(0);
				ole.footerNotificationHandler.lessonEndSetNotification();
			} else {
				$prevBtn.show(0);
				$nextBtn.show(0);
			}
		}, delay_ms);
	}

	function put_image(content, count) {
		if (content[count].hasOwnProperty('imageblock')) {
			for (var j = 0; j < content[count].imageblock.length; j++) {
				var imageblock = content[count].imageblock[j];
				if (imageblock.hasOwnProperty('imagestoshow')) {
					var imageClass = imageblock.imagestoshow;
					for (var i = 0; i < imageClass.length; i++) {
						var image_src = preload.getResult(imageClass[i].imgid).src;
						//get list of classes
						var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
						var selector = ('.' + classes_list[classes_list.length - 1]);
						$(selector).attr('src', image_src);
					}
				}
			}
		}
	}

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

	function templateCaller() {
		/*always hide next and previous navigation button unless
		explicitly called from inside a template*/
		$prevBtn.css('display', 'none');
		$nextBtn.css('display', 'none');

		// call navigation controller
		// navigationcontroller();

		loadTimelineProgress($total_page, countNext + 1);
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

	}

	/*this countNext variable change here is solely for development phase and
	should be commented out for deployment*/

	// first call to template caller
	// templateCaller();

	/* navigation buttons event handlers */

	$nextBtn.on('click', function () {
		if (sound_data != null) {
			sound_data.stop();
			sound_data.unbind('ended');
		}
		clearTimeout(timeourcontroller);
		countNext++;
		templateCaller();
	});

	$refreshBtn.click(function () {
		templateCaller();
	});

	$prevBtn.on('click', function () {
		if (sound_data != null) {
			sound_data.stop();
			sound_data.unbind('ended');
		}
		clearTimeout(timeourcontroller);
		countNext--;
		templateCaller();

		/* if footerNotificationHandler pageEndSetNotification was called then on click of
		 previous slide button hide the footernotification */
		countNext < $total_page ? ole.footerNotificationHandler.hideNotification() : null;
	});
	/*=====  End of Templates Controller Block  ======*/
});
