var imgpath = $ref + "/images/";
var soundAsset = $ref + "/sounds/" + $lang + "/";
var global_animation;
var global_counter;

var content = [
	//slide0
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'firstpagebackground',
		hasheaderblock: false,

		uppertextblock: [{
			textdata: data.lesson.chapter,
			textclass: 'lesson-title'
		}]
	},
	// slide1
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'light_bg',
		questionblockadditionalclass: "questions_1",
		questionblock: [{
			questiondata: data.string.p1text1,
			questionclass: "",
			inputdata: '',
			inputclass: "digit_box",
			buttondata: data.string.pctext1,
			buttonclass: "check_button",
			splitintofractionsflag: true,
			datahighlightflag: true,
			datahighlightcustomclass: ''
		}],

		imageblockadditionalclass: "",
		imageblock: [{
			imagestoshow: [{
				imgclass: "candy candy_1",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_2",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_3",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_4",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_5",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_6",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_7",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_8",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_9",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_10",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_11",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_12",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_13",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_14",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_15",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_16",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_17",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_18",
				imgsrc: imgpath + "candy.png",
			}],
		}],
	},
	// slide2
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'light_bg',
		uppertextblockadditionalclass: "questions_text_1",
		uppertextblock: [{
			textdata: data.string.p1text2,
			textclass: "text_1",
			splitintofractionsflag: true,
			datahighlightflag: true,
			datahighlightcustomclass: ''
		}],
		questionblockadditionalclass: "questions_1 its_hidden",
		questionblock: [{
			questiondata: data.string.p1text3,
			questionclass: "",
			inputdata: '',
			inputclass: "digit_box frac_question_offset",
			buttondata: data.string.pctext1,
			buttonclass: "check_button frac_question_offset",
			splitintofractionsflag: true,
			datahighlightflag: true,
			datahighlightcustomclass: ''
		}],
		imageblockadditionalclass: "",
		imageblock: [{
			imagestoshow: [{
				imgclass: "candy candy_1",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_2",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_3",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_4",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_5",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_6",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_7",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_8",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_9",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_10",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_11",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_12",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_13",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_14",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_15",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_16",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_17",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_18",
				imgsrc: imgpath + "candy.png",
			}],
		}],
	},
	// slide3
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'light_bg',
		uppertextblockadditionalclass: "questions_text_1",
		uppertextblock: [{
			textdata: data.string.p1text4,
			textclass: "text_1",
			splitintofractionsflag: true,
			datahighlightflag: true,
			datahighlightcustomclass: ''
		}],
		questionblockadditionalclass: "questions_1 its_hidden",
		questionblock: [{
			questiondata: data.string.p1text5,
			questionclass: "",
			inputdata: '',
			inputclass: "digit_box frac_question_offset",
			buttondata: data.string.pctext1,
			buttonclass: "check_button frac_question_offset",
			splitintofractionsflag: true,
			datahighlightflag: true,
			datahighlightcustomclass: ''
		}],
		imageblockadditionalclass: "",
		imageblock: [{
			imagestoshow: [{
				imgclass: "candy candy_1",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_2",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_3",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_4",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_5",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_6",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_7",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_8",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_9",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_10",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_11",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_12",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_13",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_14",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_15",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_16",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_17",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_18",
				imgsrc: imgpath + "candy.png",
			}],
		}],
	},
	// slide4
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'light_bg',
		uppertextblockadditionalclass: "definition",
		uppertextblock: [{
			textdata: data.string.p1text6,
			textclass: "text_description",
			datahighlightflag: true,
			datahighlightcustomclass: ''
		},
		{
			textdata: data.string.p1text7,
			textclass: "text_1 text_fraction",
			splitintofractionsflag: true,
			datahighlightflag: true,
			datahighlightcustomclass: ''
		}],
	},
	// slide5
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'light_bg',
		uppertextblockadditionalclass: "definition",
		uppertextblock: [
			{
				textdata: data.string.p1text8,
				textclass: "text_description",
				datahighlightflag: true,
				datahighlightcustomclass: ''
			},
			{
				textdata: data.string.p1text16,
				textclass: "text_2 text_fraction",
				splitintofractionsflag: true,
				datahighlightflag: true,
				datahighlightcustomclass: 'highlight_num'
			},
			{
				textdata: data.string.p1text13,
				textclass: "text_description_1 text_3 its_hidden",
				splitintofractionsflag: true,
				datahighlightflag: true,
				datahighlightcustomclass: 'highlight_num'
			}],
		imageblockadditionalclass: 'fraction_image_block',
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "fraction_image its_hidden",
					imgsrc: imgpath + "fraction_5_3.png",
				}]
		}]
	},
	// slide6
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'light_bg',
		questionblockadditionalclass: "questions_1",
		questionblock: [{
			questiondata: data.string.p1text1,
			questionclass: "",
			inputdata: '',
			inputclass: "digit_box",
			buttondata: data.string.pctext1,
			buttonclass: "check_button",
			splitintofractionsflag: true,
			datahighlightflag: true,
			datahighlightcustomclass: ''
		}],

		imageblockadditionalclass: "",
		imageblock: [{
			imagestoshow: [{
				imgclass: "candy candy_1",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_2",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_3",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_4",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_5",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_6",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_7",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_8",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_9",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_10",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_11",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_12",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_13",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_14",
				imgsrc: imgpath + "candy.png",
			}],
		}],
	},
	// slide7
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'light_bg',
		uppertextblockadditionalclass: "questions_text_1",
		uppertextblock: [{
			textdata: data.string.p1text14,
			textclass: "text_1",
			splitintofractionsflag: true,
			datahighlightflag: true,
			datahighlightcustomclass: ''
		}],
		questionblockadditionalclass: "questions_2 its_hidden",
		questionblock: [{
			questiondata: data.string.p1text15,
			questionclass: "large_equation",
			inputdata: '',
			fractioninput: 'fractioninput',
			inputclass: "digit_box_1",
			inputclass_numerator: 'box_numerator digit_box_2',
			inputclass_denominator: 'box_denominator digit_box_2',
			buttondata: data.string.pctext1,
			buttonclass: "check_button",
			splitintofractionsflag: true,
			datahighlightflag: true,
			datahighlightcustomclass: ''
		}],
		imageblockadditionalclass: "",
		imageblock: [{
			imagestoshow: [{
				imgclass: "candy candy_1",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_2",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_3",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_4",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_5",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_6",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_7",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_8",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_9",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_10",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_11",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_12",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_13",
				imgsrc: imgpath + "candy.png",
			}, {
				imgclass: "candy candy_14",
				imgsrc: imgpath + "candy.png",
			}],
		}],
	},
];


$(function () {
	var $board = $('.board');
	var $nextBtn = $("#activity-page-next-btn-enabled");
	var $prevBtn = $("#activity-page-prev-btn-enabled");
	var $refreshBtn = $("#activity-page-refresh-btn");
	var countNext = 0;
	var go_next = 1;

	var $total_page = content.length;
	loadTimelineProgress($total_page, countNext + 1);

	var index = 0;
	var preload;
	var timeoutvar = null;
	var current_sound;

	function init() {
		//specify type otherwise it will load assests as XHR
		manifest = [
			//images

			// sounds
			{ id: "sound_0", src: soundAsset + "s1_p1.mp3" },
			{ id: "sound_1", src: soundAsset + "s1_p2.mp3" },
			{ id: "sound_2", src: soundAsset + "s1_p3.mp3" },
			{ id: "sound_3", src: soundAsset + "s1_p4.mp3" },
			{ id: "sound_4", src: soundAsset + "s1_p5.mp3" },
			{ id: "sound_5", src: soundAsset + "s1_p6.mp3" },
			{ id: "sound_6", src: soundAsset + "s1_p7.mp3" },
			{ id: "sound_7", src: soundAsset + "s1_p8.mp3" },

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
	Handlebars.registerPartial("fractioncontent", $("#fractioncontent-partial").html());
	/*===============================================
	=            data highlight function            =
	===============================================*/
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

	/*===== This function splits the string in data into convential fraction used in mathematics =====*/
	function splitintofractions($splitinside) {
		typeof $splitinside !== "object" ?
			alert("Texthighlight : Hi Master, Please pass me a Jquery Object whose child are to be highlighted") :
			null;

		var $splitintofractions = $splitinside.find("*[data-splitintofractions ='true']");
		if ($splitintofractions.length > 0) {
			$.each($splitintofractions, function (index, value) {
				$this = $(this);
				var tobesplitfraction = $this.html();
				if ($this.hasClass('fraction')) {
					tobesplitfraction = tobesplitfraction.replace(/::/g, '<span class="top">');
					tobesplitfraction = tobesplitfraction.replace(/;;/g, '</span>');
				} else {
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

	function navigationcontroller(islastpageflag) {
		typeof islastpageflag === "undefined" ? islastpageflag = false : typeof islastpageflag != 'boolean' ? alert("NavigationController : Hi Master, please provide a boolean parameter") : null;

	}
	/*=====  End of user navigation controller function  ======*/

	/*==================================================
   =            InstructionBlockController            =
   ==================================================*/

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

	function generalTemplate() {
		var source = $("#general-template").html();
		var template = Handlebars.compile(source);
		var html = template(content[countNext]);
		$board.html(html);

		// highlight any text inside board div with datahighlightflag set true
		texthighlight($board);
		$(".firstpagebackground").css({
			'background-image': 'url(' + imgpath + 'fraction-multiplication.jpg' + ')'
		})
		splitintofractions($board);

		input_box('.digit_box', 2, '.check_button');

		input_box('.digit_box_1', 1, '.check_button');
		input_box('.digit_box_2', 1, '.check_button');
		// splitintofractions($(".fractionblock"));
		switch (countNext) {
			case 0:
				sound_player("sound_0");
				break;
			case 1:
				sound_player("sound_1");
				$('.check_button').click(function () {
					var answer = $('.digit_box').val();
					if (answer == 18) {
						$('.check_button').css("background", '#4CAF50');
						$('.digit_box').css({ "background": '#C5F295', 'box-shadow': 'none' });
						$('.digit_box').prop("disabled", true);
						nav_button_controls(0);
						play_correct_incorrect_sound(1);
					} else {
						$('.check_button').css("background", '#D0553E');
						$('.digit_box').css({ "background": '#FF7660' });
						play_correct_incorrect_sound(0);
					}
				});
				break;
			case 2:
				cancelAnimationFrame(global_animation);
				global_animation = null;
				go_next = 0;
				sound_player("sound_2");
				$('.check_button').click(function () {
					var answer = $('.digit_box').val();
					if (answer == 9) {
						$('.check_button').css("background", '#4CAF50');
						$('.digit_box').css({ "background": '#C5F295', 'box-shadow': 'none' });
						$('.digit_box').prop("disabled", true);
						nav_button_controls(0);
						play_correct_incorrect_sound(1);
					} else {
						$('.check_button').css("background", '#D0553E');
						$('.digit_box').css({ "background": '#FF7660' });
						play_correct_incorrect_sound(0);
					}
				});
				break;
			case 3:
				cancelAnimationFrame(global_animation);
				global_animation = null;
				go_next = 0;
				sound_player("sound_3");
				$('.check_button').click(function () {
					var answer = $('.digit_box').val();
					if (answer == 6) {
						$('.check_button').css("background", '#4CAF50');
						$('.digit_box').css({ "background": '#C5F295', 'box-shadow': 'none' });
						$('.digit_box').prop("disabled", true);
						nav_button_controls(0);
						play_correct_incorrect_sound(1);
					} else {
						$('.check_button').css("background", '#D0553E');
						$('.digit_box').css({ "background": '#FF7660' });
						play_correct_incorrect_sound(0);
					}
				});
				break;
			case 4:
				sound_player("sound_4");
				break;
			case 5:
				go_next = 0;
				sound_player("sound_5");
				break;
			case 6:
				sound_player("sound_6");
				$('.check_button').click(function () {
					var answer = $('.digit_box').val();
					if (answer == 14) {
						$('.check_button').css("background", '#4CAF50');
						$('.digit_box').css({ "background": '#C5F295', 'box-shadow': 'none' });
						$('.digit_box').prop("disabled", true);
						nav_button_controls(0);
						play_correct_incorrect_sound(1);
					} else {
						$('.check_button').css("background", '#D0553E');
						$('.digit_box').css({ "background": '#FF7660' });
						play_correct_incorrect_sound(0);
					}
				});
				break;
			case 7:
				cancelAnimationFrame(global_animation);
				global_animation = null;
				go_next = 0;
				sound_player("sound_7");
				$('.check_button').click(function () {
					var answer_1 = $('.digit_box_1').val();
					var answer_2 = $('.box_numerator').val();
					var answer_3 = $('.box_denominator').val();
					if (answer_1 == 4 && answer_2 == 2 && answer_3 == 3) {
						$('.check_button').css("background", '#4CAF50');
						$('.digit_box_1, .digit_box_2').css({ "background": '#C5F295', 'box-shadow': 'none' });
						$('.digit_box_1').prop("disabled", true);
						$('.digit_box_2').prop("disabled", true);
						play_correct_incorrect_sound(1);
						ole.footerNotificationHandler.pageEndSetNotification();
					} else {
						$('.check_button').css("background", '#D0553E');
						$('.digit_box_1, .digit_box_2').css({ "background": '#FF7660' });
						play_correct_incorrect_sound(0);
					}
				});
				break;
			default:
				nav_button_controls(100);
				break;
		}
	}
	function nav_button_controls(delay_ms) {
		timeoutvar = setTimeout(function () {
			if (countNext == 0) {
				$nextBtn.show(0);
			} else if (countNext > 0 && countNext == $total_page - 1) {
				$prevBtn.show(0);
				$nextBtn.show(0);
				// ole.footerNotificationHandler.pageEndSetNotification();
			} else {
				$prevBtn.show(0);
				$nextBtn.show(0);
			}
		}, delay_ms);
	}
	function sound_player(sound_id) {
		createjs.Sound.stop();
		current_sound = createjs.Sound.play(sound_id);
		current_sound.play();
		current_sound.on("complete", function () {
			if (countNext == 1 || countNext == 6) {
				$prevBtn.hide(0);
				$nextBtn.hide(0);
			}
			else {
				nav_button_controls(0);
			}
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

	function templateCaller() {
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
		loadTimelineProgress($total_page, countNext + 1);

		// just for development purpose to see total slide vs current slide number
		// $board.append("<span id='slidecount' style='position:absolute;top:0px;left:0px;'>"+"Developers : "+countNext+" / "+($total_page-1)+"</span>");
	}

	/*this countNext variable change here is solely for development phase and
	should be commented out for deployment*/
	// countNext+=1;

	// first call to template caller
	templateCaller();

	/* navigation buttons event handlers */
	var fps = 2;
	var time_init = 0;
	var time_elapsed = 0;
	var time_then = 0;
	$nextBtn.on('click', function () {
		createjs.Sound.stop();
		clearTimeout(timeoutvar);
		switch (countNext) {
			case 2:
				if (go_next) {
					countNext++;
					templateCaller();
				} else {
					$nextBtn.hide(0);
					// splitintofractions($('.questions_text_1'));
					global_counter = 1;
					time_then = Date.now();
					function repeatOften() {
						global_animation = requestAnimationFrame(repeatOften);
						time_init = Date.now();
						time_elapsed = time_init - time_then;
						if (time_elapsed > 1000 / fps) {
							time_then = time_init - (time_elapsed % (1000 / fps));
							if (global_counter < 20) {
								var left_position = 0;
								var top_position = 0;
								switch ((global_counter - 1) % 4) {
									case 0:
										left_position = ((global_counter - 1) % 4) * 12 + 7;
										top_position = Math.floor((global_counter - 1) / 4) * 11 + 13;
										break;
									case 1:
										left_position = ((global_counter - 2) % 4) * 12 + 69;
										top_position = Math.floor((global_counter - 1) / 4) * 11 + 13;
										break;
									case 2:
										left_position = ((global_counter - 3) % 4) * 12 + 19;
										top_position = Math.floor((global_counter - 1) / 4) * 11 + 13;
										break;
									case 3:
										left_position = ((global_counter - 4) % 4) * 12 + 81;
										top_position = Math.floor((global_counter - 1) / 4) * 11 + 13;
										break;
								}
								$('.candy_' + global_counter).animate({
									'left': left_position + '%',
									'top': top_position + '%',
								}, 500);
								global_counter++;
							}
							if (global_counter >= 19) {
								cancelAnimationFrame(global_animation);
								$('.text_1').addClass('its_hidden');
								$('.questions_1').removeClass('its_hidden');
							}
						}
					}
					global_animation = requestAnimationFrame(repeatOften);
					go_next = 1;
				}
				break;
			case 3:
				if (go_next) {
					countNext++;
					templateCaller();
				} else {
					$nextBtn.hide(0);
					// splitintofractions($('.questions_text_1'));
					global_counter = 1;
					time_then = Date.now();
					function repeatOften_next() {
						global_animation = requestAnimationFrame(repeatOften_next);
						time_init = Date.now();
						time_elapsed = time_init - time_then;
						if (time_elapsed > 1000 / fps) {
							time_then = time_init - (time_elapsed % (1000 / fps));
							if (global_counter < 20) {
								var left_position = 0;
								var top_position = 0;
								switch ((global_counter - 1) % 6) {
									case 0:
										left_position = ((global_counter - 1) % 6) * 12 + 2;
										top_position = Math.floor((global_counter - 1) / 6) * 15 + 13;
										break;
									case 1:
										left_position = ((global_counter - 2) % 6) * 12 + 38;
										top_position = Math.floor((global_counter - 1) / 6) * 15 + 13;
										break;
									case 2:
										left_position = ((global_counter - 3) % 6) * 12 + 74;
										top_position = Math.floor((global_counter - 1) / 6) * 15 + 13;
										break;
									case 3:
										left_position = ((global_counter - 4) % 6) * 12 + 14;
										top_position = Math.floor((global_counter - 1) / 6) * 15 + 13;
										break;
									case 4:
										left_position = ((global_counter - 5) % 6) * 12 + 50;
										top_position = Math.floor((global_counter - 1) / 6) * 15 + 13;
										break;
									case 5:
										left_position = ((global_counter - 6) % 6) * 12 + 86;
										top_position = Math.floor((global_counter - 1) / 6) * 15 + 13;
										break;
								}
								$('.candy_' + global_counter).animate({
									'left': left_position + '%',
									'top': top_position + '%',
								}, 500);
								global_counter++;
							}
							if (global_counter >= 19) {
								cancelAnimationFrame(global_animation);
								$('.text_1').addClass('its_hidden');
								$('.questions_1').removeClass('its_hidden');
							}
						}
					}
					global_animation = requestAnimationFrame(repeatOften_next);
					go_next = 1;
				}
				break;
			case 4:
				$('.text_description').addClass('fade_out');
				$('.text_1').html(data.string.p1text16);
				splitintofractions($board);
				$nextBtn.hide(0);
				setTimeout(function () {
					countNext++;
					templateCaller();
				}, 2000);
				break;
			case 5:
				switch (go_next) {
					case 0:
						$('.text_2').html(data.string.p1text9);
						splitintofractions($board);
						texthighlight($board);
						go_next = 1;
						$nextBtn.show(0);
						break;
					case 1:
						$('.text_2').html(data.string.p1text10);
						splitintofractions($board);
						texthighlight($board);
						go_next = 2;
						$nextBtn.show(0);
						break;
					case 2:
						$('.text_2').html(data.string.p1text11);
						splitintofractions($board);
						texthighlight($board);
						go_next = 3;
						$nextBtn.show(0);
						break;
					case 3:
						$('.text_2').html(data.string.p1text12);
						splitintofractions($board);
						texthighlight($board);
						go_next = 4;
						break;
					case 4:
						$('.text_3').removeClass('its_hidden');
						go_next = 5;
						break;
					case 5:
						$('.fraction_image').removeClass('its_hidden');
						go_next = 6;
						break;
					case 6:
						countNext++;
						templateCaller();
						break;
				}
				break;
			case 7:
				if (go_next) {
					countNext++;
					templateCaller();
				} else {
					$nextBtn.hide(0);
					// splitintofractions($('.questions_text_1'));
					global_counter = 1;
					time_then = Date.now();
					function repeatOften_next() {
						global_animation = requestAnimationFrame(repeatOften_next);
						time_init = Date.now();
						time_elapsed = time_init - time_then;
						if (time_elapsed > 1000 / fps) {
							time_then = time_init - (time_elapsed % (1000 / fps));
							if (global_counter < 14) {
								var left_position = 0;
								var top_position = 0;
								switch ((global_counter - 1) % 6) {
									case 0:
										left_position = ((global_counter - 1) % 6) * 12 + 2;
										top_position = Math.floor((global_counter - 1) / 6) * 15 + 13;
										break;
									case 1:
										left_position = ((global_counter - 2) % 6) * 12 + 38;
										top_position = Math.floor((global_counter - 1) / 6) * 15 + 13;
										break;
									case 2:
										left_position = ((global_counter - 3) % 6) * 12 + 74;
										top_position = Math.floor((global_counter - 1) / 6) * 15 + 13;
										break;
									case 3:
										left_position = ((global_counter - 4) % 6) * 12 + 14;
										top_position = Math.floor((global_counter - 1) / 6) * 15 + 13;
										break;
									case 4:
										left_position = ((global_counter - 5) % 6) * 12 + 50;
										top_position = Math.floor((global_counter - 1) / 6) * 15 + 13;
										break;
									case 5:
										left_position = ((global_counter - 6) % 6) * 12 + 86;
										top_position = Math.floor((global_counter - 1) / 6) * 15 + 13;
										break;
								}
								$('.candy_' + global_counter).animate({
									'left': left_position + '%',
									'top': top_position + '%',
								}, 500);
								global_counter++;
							}
							if (global_counter >= 13) {
								cancelAnimationFrame(global_animation);
								$('.text_1').addClass('its_hidden');
								$('.questions_2').removeClass('its_hidden');
							}
						}
					}
					global_animation = requestAnimationFrame(repeatOften_next);
					go_next = 1;
				}
				break;
			default:
				countNext++;
				templateCaller();
				break;
		}
	});

	$refreshBtn.click(function () {
		templateCaller();
	});

	$prevBtn.on('click', function () {
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
		$(input_class).keydown(function (event) {
			var charCode = (event.which) ? event.which : event.keyCode;
			/* charCodes 8 => backspace, 48 - 57 => 0 -9, 97-105 => num(1-9), 37-40 => arrowkeys, 110=>., 190=>., 46=> del */
			if (charCode === 13 && button_class != null) {
				$(button_class).trigger("click");
			}
			var condition = charCode != 8 && (charCode < 37 || charCode > 40) && charCode != 46;
			//check if user inputs del, backspace or arrow keys
			if (!condition) {
				return true;
			}
			//check if user inputs more than one '.'
			if ((charCode == 190 || charCode == 110) && event.target.value.split('.').length >= 2) {
				return false;
			}
			//check . and 0-9 separately after checking arrow and other keys
			if ((charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105) && charCode != 190 && charCode != 110) {
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
