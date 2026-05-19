var imgpath = $ref + "/images/";
var soundAsset = $ref + "/sounds/sound01/";

var sound_0 = new buzz.sound((soundAsset + "h.mp3"));
var sound_1 = new buzz.sound((soundAsset + "helmet.mp3"));
var sound_2 = new buzz.sound((soundAsset + "horse.mp3"));
var sound_3 = new buzz.sound((soundAsset + "hand.mp3"));
var sound_4 = new buzz.sound((soundAsset + "hen.mp3"));
var sound_5 = new buzz.sound((soundAsset + "hundred.mp3"));
var sound_6 = new buzz.sound((soundAsset + "hanger.mp3"));

var sound_group = [sound_0, sound_1, sound_2, sound_3, sound_4, sound_5, sound_6];
//array of colors for cards to be displayed in the end
var back_arr = ['#FBCA01', '#F68C1F', '#FCD53A', '#71BF45', '#FCD53A', '#A669E0'];

var content = [

	//slide0
	{
		contentblocknocenteradjust: true,
		contentblockadditionalclass: 'main_bg',

		imageblockadditionalclass: '',
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "egg egg_0",
					imgsrc: imgpath + "eggs/egg01.png",
				},
				{
					imgclass: "egg egg_1",
					imgsrc: imgpath + "eggs/egg04.png",
				},
				{
					imgclass: "egg egg_2",
					imgsrc: imgpath + "eggs/egg05.png",
				},
				{
					imgclass: "egg egg_3",
					imgsrc: imgpath + "eggs/egg08.png",
				},
				{
					imgclass: "egg egg_4",
					imgsrc: imgpath + "eggs/egg02.png",
				},
				{
					imgclass: "egg egg_5 vertical_vibration",
					imgsrc: imgpath + "eggs/egg06.png",
				},
				{
					imgclass: "egg egg_6",
					imgsrc: imgpath + "eggs/egg07.png",
				},
				{
					imgclass: "sound_waves_0 sound_vibration",
					imgsrc: imgpath + "eggs/wave.png",
				},
				{
					imgclass: "sound_waves_1 sound_vibration",
					imgsrc: imgpath + "eggs/wave.png",
				}
			],
			imagelabels: [
				{
					imagelabelclass: "egg_label_0 egg_label",
					imagelabeldata: data.string.pbtext1
				},
				{
					imagelabelclass: "egg_label_1 egg_label",
					imagelabeldata: data.string.pctext1
				},
				{
					imagelabelclass: "egg_label_2 egg_label",
					imagelabeldata: data.string.pdtext1
				},
				{
					imagelabelclass: "egg_label_3 egg_label",
					imagelabeldata: data.string.pftext1
				},
				{
					imagelabelclass: "egg_label_4 egg_label",
					imagelabeldata: data.string.pgtext1
				},
				{
					imagelabelclass: "egg_label_5 egg_label font_vibration",
					imagelabeldata: data.string.phtext1
				},
				{
					imagelabelclass: "egg_label_6 egg_label",
					imagelabeldata: data.string.pjtext1
				}
			]
		}],
	},

	//slide1
	{
		contentblocknocenteradjust: true,
		contentblockadditionalclass: 'main_bg',

		imageblockadditionalclass: '',
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "egg egg_0",
					imgsrc: imgpath + "eggs/egg01.png",
				},
				{
					imgclass: "egg egg_1",
					imgsrc: imgpath + "eggs/egg04.png",
				},
				{
					imgclass: "egg egg_2",
					imgsrc: imgpath + "eggs/egg05.png",
				},
				{
					imgclass: "egg egg_3",
					imgsrc: imgpath + "eggs/egg08.png",
				},
				{
					imgclass: "egg egg_4",
					imgsrc: imgpath + "eggs/egg02.png",
				},
				{
					imgclass: "egg egg_5 vertical_vibration",
					imgsrc: imgpath + "eggs/egg06a.png",
				},
				{
					imgclass: "egg egg_6",
					imgsrc: imgpath + "eggs/egg07.png",
				},
				{
					imgclass: "sound_waves_0 sound_vibration",
					imgsrc: imgpath + "eggs/wave.png",
				},
				{
					imgclass: "sound_waves_1 sound_vibration",
					imgsrc: imgpath + "eggs/wave.png",
				}
			],
			imagelabels: [
				{
					imagelabelclass: "egg_label_0 egg_label",
					imagelabeldata: data.string.pbtext1
				},
				{
					imagelabelclass: "egg_label_1 egg_label",
					imagelabeldata: data.string.pctext1
				},
				{
					imagelabelclass: "egg_label_2 egg_label",
					imagelabeldata: data.string.pdtext1
				},
				{
					imagelabelclass: "egg_label_3 egg_label",
					imagelabeldata: data.string.phtext1
				},
				{
					imagelabelclass: "egg_label_4 egg_label",
					imagelabeldata: data.string.phtext1
				},
				{
					imagelabelclass: "egg_label_5 egg_label font_vibration",
					imagelabeldata: data.string.phtext1
				},
				{
					imagelabelclass: "egg_label_6 egg_label",
					imagelabeldata: data.string.pjtext1
				},
				{
					imagelabelclass: "chick_1 chick_b2 fade_ins",
					imagelabeldata: "",
				},
				{
					imagelabelclass: "chick_alphabet chick_alphabet_b hatch_out",
					imagelabeldata: data.string.phtext1
				},
			]
		}],

		cardblock: [
			{
				cardstoshow: [
					{
						cardclass: "card_deck card_0 its_hidden fade_ins",
						frontimgclass: "card_back",
						frontimgsrc: imgpath + "flipcard03.png",
						backimgclass: "card_front",
						backimgsrc: imgpath + "h/helmet.png",
						imagelabelclass: "",
						imagelabeldata: data.string.phtext2,
					}
				]
			},
			{
				cardstoshow: [
					{
						cardclass: "card_deck card_1 its_hidden fade_ins",
						frontimgclass: "card_back",
						frontimgsrc: imgpath + "flipcard03.png",
						backimgclass: "card_front",
						backimgsrc: imgpath + "h/horse.png",
						imagelabelclass: "",
						imagelabeldata: data.string.phtext3,
					}
				]
			},
			{
				cardstoshow: [
					{
						cardclass: "card_deck card_2 its_hidden fade_ins",
						frontimgclass: "card_back",
						frontimgsrc: imgpath + "flipcard03.png",
						backimgclass: "card_front",
						backimgsrc: imgpath + "h/hand.png",
						imagelabelclass: "",
						imagelabeldata: data.string.phtext4,
					}
				]
			},
			{
				cardstoshow: [
					{
						cardclass: "card_deck card_3 its_hidden fade_ins",
						frontimgclass: "card_back",
						frontimgsrc: imgpath + "flipcard03.png",
						backimgclass: "card_front",
						backimgsrc: imgpath + "h/hen.png",
						imagelabelclass: "",
						imagelabeldata: data.string.phtext5,
					}
				]
			},
			{
				cardstoshow: [
					{
						cardclass: "card_deck card_4 its_hidden fade_ins",
						frontimgclass: "card_back",
						frontimgsrc: imgpath + "flipcard03.png",
						backimgclass: "card_front",
						backimgsrc: imgpath + "h/hundred.png",
						imagelabelclass: "",
						imagelabeldata: data.string.phtext6,
					}
				]
			},
			{
				cardstoshow: [
					{
						cardclass: "card_deck card_5 its_hidden fade_ins",
						frontimgclass: "card_back",
						frontimgsrc: imgpath + "flipcard03.png",
						backimgclass: "card_front",
						backimgsrc: imgpath + "h/hanger.png",
						imagelabelclass: "",
						imagelabeldata: data.string.phtext7,
					}
				]
			}

		],
	},


	//slide2
	{
		contentblocknocenteradjust: true,
		contentblockadditionalclass: 'main_bg',

		imageblockadditionalclass: '',
		imageblock: [{
			imagestoshow: [
				{
					imgclass: "sound_waves_4 sound_vibration its_hidden",
					imgsrc: imgpath + "eggs/wave.png",
				},
				{
					imgclass: "sound_waves_5 sound_vibration its_hidden",
					imgsrc: imgpath + "eggs/wave.png",
				}
			],
			imagelabels: [{
				imagelabelclass: "center_alphabet b_to_center",
				imagelabeldata: data.string.phtext1
			},
			{
				imagelabelclass: "chick_1 chick_center",
				imagelabeldata: '',
			}
			]

		}],

		cardblockadditionalclass: '',
		cardblock: [
			{
				cardstoshow: [
					{
						cardclass: "card_deck card_0",
						frontimgclass: "card_back",
						frontimgsrc: imgpath + "flipcard03.png",
						backimgclass: "card_front",
						backimgsrc: imgpath + "h/helmet.png",
						hassoundicon: true,
						soundclass: "sound_icon",
						soundimgsrc: imgpath + "audio_icon.png",
						imagelabelclass: "label_space",
						imagelabeldata: data.string.phtext2,
						datahighlightflag: true,
						datahighlightcustomclass: 'highlight_purple'
					}
				]
			},
			{
				cardstoshow: [
					{
						cardclass: "card_deck card_1",
						frontimgclass: "card_back",
						frontimgsrc: imgpath + "flipcard03.png",
						backimgclass: "card_front",
						backimgsrc: imgpath + "h/horse.png",
						hassoundicon: true,
						soundclass: "sound_icon",
						soundimgsrc: imgpath + "audio_icon.png",
						imagelabelclass: "label_space",
						imagelabeldata: data.string.phtext3,
						datahighlightflag: true,
						datahighlightcustomclass: 'highlight_purple'
					}
				]
			},
			{
				cardstoshow: [
					{
						cardclass: "card_deck card_2",
						frontimgclass: "card_back",
						frontimgsrc: imgpath + "flipcard03.png",
						backimgclass: "card_front",
						backimgsrc: imgpath + "h/hand.png",
						hassoundicon: true,
						soundclass: "sound_icon",
						soundimgsrc: imgpath + "audio_icon.png",
						imagelabelclass: "label_space",
						imagelabeldata: data.string.phtext4,
						datahighlightflag: true,
						datahighlightcustomclass: 'highlight_purple'
					}
				]
			},
			{
				cardstoshow: [
					{
						cardclass: "card_deck card_hover card_3",
						frontimgclass: "card_back",
						frontimgsrc: imgpath + "flipcard03.png",
						backimgclass: "card_front",
						backimgsrc: imgpath + "h/hen.png",
						hassoundicon: true,
						soundclass: "sound_icon",
						soundimgsrc: imgpath + "audio_icon.png",
						imagelabelclass: "label_space",
						imagelabeldata: data.string.phtext5,
						datahighlightflag: true,
						datahighlightcustomclass: 'highlight_purple'
					}
				]
			},
			{
				cardstoshow: [
					{
						cardclass: "card_deck card_4",
						frontimgclass: "card_back",
						frontimgsrc: imgpath + "flipcard03.png",
						backimgclass: "card_front",
						backimgsrc: imgpath + "h/hundred.png",
						hassoundicon: true,
						soundclass: "sound_icon",
						soundimgsrc: imgpath + "audio_icon.png",
						imagelabelclass: "label_space",
						imagelabeldata: data.string.phtext6,
						datahighlightflag: true,
						datahighlightcustomclass: 'highlight_purple'
					}
				]
			},
			{
				cardstoshow: [
					{
						cardclass: "card_deck card_5",
						frontimgclass: "card_back",
						frontimgsrc: imgpath + "flipcard03.png",
						backimgclass: "card_front",
						backimgsrc: imgpath + "h/hanger.png",
						hassoundicon: true,
						soundclass: "sound_icon",
						soundimgsrc: imgpath + "audio_icon.png",
						imagelabelclass: "label_space",
						imagelabeldata: data.string.phtext7,
						datahighlightflag: true,
						datahighlightcustomclass: 'highlight_purple'
					}
				]
			}

		],
	},

];

$(function () {

	var $board = $(".board");

	var $prevBtn = $("#activity-page-prev-btn-enabled");
	var $refreshBtn = $("#activity-page-refresh-btn");
	var $nextBtn = $("#activity-page-next-btn-enabled");
	var countNext = 0;
	var $label = $(".label-box");
	var $total_page = content.length;
	var go_next = false;
	loadTimelineProgress($total_page, countNext + 1);

	/*
	 inorder to use the handlebar partials we need to register them
	 to their respective handlebar partial pointer first
	 */
	Handlebars.registerPartial("definitioncontent", $("#definitioncontent-partial").html());
	Handlebars.registerPartial("imagecontent", $("#imagecontent-partial").html());
	Handlebars.registerPartial("textcontent", $("#textcontent-partial").html());
	Handlebars.registerPartial("cardcontent", $("#cardcontent-partial").html());

	// controls the navigational state of the program
	function navigationController(islastpageflag) {
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
			$nextBtn.show(0);
			$prevBtn.show(0);
		} else if (countNext == $total_page - 1) {
			$nextBtn.css('display', 'none');
			$prevBtn.show(0);
			// if lastpageflag is true
			// islastpageflag ? ole.footerNotificationHandler.lessonEndSetNotification() : ole.footerNotificationHandler.pageEndSetNotification();
		}
	}

	function generalTemplate() {
		var source = $("#general-template").html();
		var template = Handlebars.compile(source);
		var html = template(content[countNext]);

		loadTimelineProgress($total_page, countNext + 1);
		$board.html(html);
		// highlight any text inside board div with datahighlightflag set true
		texthighlight($board);
		$('.chick_1').css({
			'background-image': 'url(' + imgpath + "eggs/duckling_sprites.png" + ')'
		})
		switch (countNext) {
			case 0:
				break;
			case 1:
				$nextBtn.hide(0);
				$('.chick_1').hide(0);
				$('.chick_alphabet_b').hide(0);
				setTimeout(function () {
					$('.egg_5').attr('src', imgpath + "eggs/egg06b.png");
					$('.egg_5').removeClass('vertical_vibration');
					$('.egg').addClass('fade_out');
					$('.egg_label_5').removeClass('font_vibration');
					$('.egg_label').addClass('fade_out');

					$('.chick_1').show(0);
					$('.chick_alphabet_b').show(0);
					$('.sound_waves_0, .sound_waves_1').removeClass('sound_vibration');
					$('.sound_waves_0').addClass('to_sound_waves_2');
					$('.sound_waves_1').addClass('to_sound_waves_3');
				}, 300);
				setTimeout(function () {
					$('.sound_waves_0').removeClass('to_sound_waves_2');
					$('.sound_waves_0').addClass('wave_walk_0');
					$('.sound_waves_1').removeClass('to_sound_waves_3');
					$('.sound_waves_1').addClass('wave_walk_1');
					$('.chick_alphabet_b').removeClass('hatch_out');
					$('.chick_alphabet_b').addClass('bubble_walk');
					$('.chick_1').removeClass('fade_ins');
					$('.chick_1').addClass('chick_walk');
				}, 2800);
				setTimeout(function () {
					$('.chick_b2').removeClass('chick_walk');
					$('.chick_b2').css({
						'top': '43%',
						'left': '41%'
					});
					$('.its_hidden').show(0);
					$('.chick_b2').addClass('talking');
					$nextBtn.show(0);
				}, 6500);
				setTimeout(function () {
					go_next = false;
					long_play(1000);
				}, 5000);
				// egg_changer();
				break;
			case 2:
				/* card_count for first card and card_next for next one*/
				go_next = true;
				var card_count = 0;
				var card_next = 1;
				var enable_hover = false;		// to disable hover at the beginning
				setTimeout(function () {
					$('.chick_1').addClass('chick_walk_first');
				}, 300);
				// enable only after animation is complete
				setTimeout(function () {
					$('.chick_1').removeClass('chick_walk_first');
					$('.chick_1').addClass('chick_jump chick_to_first');
					$('.card_0').css("pointer-events", "all");
					$('.card_0> .card_back').addClass("card_back_1");
					enable_hover = true;
				}, 2500);

				$('.center_alphabet').hover(

					function () {
						if (!enable_hover) {
							return false;
						}
						$('.its_hidden').show(0);
						sound_0.play();
					}, function () {
						if (!enable_hover) {
							return false;
						}
						$('.its_hidden').hide(0);
					}
				);

				$('.card_deck').on("click", function () {
					var c = this.classList;
					if (c.contains("card_deck")) {
						var my_card = $('.card_' + card_count);
						var my_card2 = $('.card_' + card_next);
						// generate position of card on the run
						var dh = 16.4 + ((card_count % 3)) * 33;			// calculates left position according to card number
						var dv = 4;									// calculates top position according to card number
						/* offset returns length in pixels and we have to convert it into percentage then use it for position */
						var total_width = $('.imageblock').width();
						// var mmm = Math.round($( '.chick_1' ).offset().left);
						// var chick_offset = Math.round($( '.chick_1' ).offset().left/total_width*100);
						// var offset = String(chick_offset + 6 + '%');
						if (card_count > 2) {
							dv = 60;
						}
						if (card_count == 5) {
							$('.chick_1').hide(0);
						}
						switch (card_count) {
							case 0:
								offset = '22.5%';
								break;
							case 1:
								offset = '28.5%';
								break;
							case 2:
								offset = '61%';
								break;
							case 3:
								offset = '67%';
								break;
							case 4:
								offset = '73%';
								break;
						}

						$(my_card).css({
							'left': dh + '%',
							'top': dv + '%',
							'transform': 'translate(-50%, 0%) rotateY(180deg)',
							'-moz-transform': 'translate(-50%, 0%) rotateY(180deg)',
							'-webkit-transform': 'translate(-50%, 0%) rotateY(180deg)',
							'background-color': back_arr[card_count]
						});
						$('.chick_1').css({
							'left': offset,
						});
						$('.chick_1').removeClass('chick_jump');
						$('.chick_1').addClass('chick_jump_1');
						setTimeout(function () {
							$(my_card).removeClass("card_hover");
							$(my_card).removeClass("card_deck");
							$(my_card).addClass("card_alt");
							/* this implies that when card_deck is clicked to show its front, card_alt is also clicked
							   and thus calls the clickable sound function giving object sound */
							$(my_card2).css("pointer-events", "all");
							sound_group[card_count].play();
						}, 1000);
						$('.card_' + card_count + ' > .card_back').removeClass("card_back_1");
						$('.card_' + card_next + ' > .card_back').addClass("card_back_1");
						sound_caller(my_card, sound_group[card_next]);
						card_count++;
						card_next++;
					}
					if (card_count > 5) {
						setTimeout(function () {
							$('.chick_1').hide(0);
							ole.footerNotificationHandler.pageEndSetNotification();
						}, 1000);
					}
				});
				break;
			default:
				break;
		}
	}

	function templateCaller() {
		//convention is to always hide the prev and next button and show them based
		//on the convention or page index
		$prevBtn.hide(0);
		$nextBtn.hide(0);
		navigationController();

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
			templateCaller();
		  });
		}
	*/

	}


	$nextBtn.on("click", function () {
		countNext++;
		go_next = true;
		templateCaller();
	});

	$refreshBtn.click(function () {
		templateCaller();
	});

	$prevBtn.on("click", function () {
		countNext--;
		go_next = true;
		templateCaller();
	});

	total_page = content.length;
	templateCaller();

	function egg_changer() {
		for (var m = 0; m < 7; m++) {
			var $eggclass = $('.egg_' + m);
			var current_image = $eggclass.attr('src');
			var new_image = current_image.replace(/a.png/g, 'b.png');
			console.log('images', current_image);
			$eggclass.attr('src', new_image);
		}
	}

	/* ----- recursive function to call the sound infinitely checking the boolean flag ------ */
	function long_play(delay_time) {
		if (go_next) {
			return false;
		}
		sound_0.play();
		var c = go_next;
		sound_0.bind('ended', function () {
			$(this).delay(delay_time).queue(function () {
				long_play(delay_time);
				$(this).dequeue();
			});
		});
	}

	// function to add sound event on click
	function sound_caller(sound_box_class, sound_var) {
		$(sound_box_class).click(function () {
			sound_var.play();
		});
	}

});



/*===============================================
 =            data highlight function            =
 ===============================================*/
function texthighlight($highlightinside) {
	//check if $highlightinside is provided
	typeof $highlightinside !== "object" ? alert("Texthighlight : Hi Master, Please pass me a Jquery Object whose child are to be highlighted") : null;

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
				(stylerulename = $(this).attr("data-highlightcustomclass")) : (stylerulename = "parsedstring");

			texthighlightstarttag = "<span class = " + stylerulename + " >";

			replaceinstring = $(this).html();
			replaceinstring = replaceinstring.replace(/#/g, texthighlightstarttag);
			replaceinstring = replaceinstring.replace(/@/g, texthighlightendtag);

			$(this).html(replaceinstring);
		});
	}
}

/*=====  End of data highlight function  ======*/
