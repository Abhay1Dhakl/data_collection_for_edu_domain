var imgpath = $ref + '/images/Section1/';
var soundAsset = $ref + '/audio_' + $lang + '/';

var content = [
	// slide1
	{
		// contentblockadditionalclass: 'light_bg',
		titletextblock: [
			{
				textclass: 'chapter_text',
				textdata: data.lesson.chapter,
			},
		],
		imageblock: [
			{
				imagestoshow: [
					{
						imgid: 'bg01',
						imgclass: 'bg_full',
					},
				],
			},
		],
	},

	//slide 2
	{
		imageblock: [
			{
				imagestoshow: [
					{
						imgid: 'section_1_bg',
						imgclass: 'bg_full',
					}, {
						imgid: 'rahul-png',
						imgclass: 'rahul-png',
					},
					{
						imgid: 'rahul-gif',
						imgclass: 'rahul-gif',
					}
				],
			},
		],
		speechbox: [{
			speechbox: 'speechboxr',
			imgid: 'bubble2',
			imgclass: 'txtbox bubble2',
			textclass: 'spktxt',
			textdata: data.string.s1_talk1,
		}],
	},


	//slide 3
	{
		imageblock: [
			{
				imagestoshow: [
					{
						imgid: 'section_1_bg',
						imgclass: 'bg_full',
					}, {
						imgid: 'rahul-png',
						imgclass: 'rahul-png',
					},

					{
						imgid: 'rahul-gif',
						imgclass: 'rahul-gif',
					}
				],
			},
		],
		speechbox: [{
			speechbox: 'speechboxr',
			imgid: 'bubble2',
			imgclass: 'txtbox bubble2',
			textclass: 'spktxt',
			textdata: data.string.s1_talk2,
		}],
	},

	//slide 4
	{
		imageblock: [
			{
				imagestoshow: [
					{
						imgid: 'section_1_bg',
						imgclass: 'bg_full',
					}, {
						imgid: 'rahul-png',
						imgclass: 'rahul-png',
					},
					{
						imgid: 'rahul-gif',
						imgclass: 'rahul-gif',
					}
				],
			},
		],
		speechbox: [{
			speechbox: 'speechboxr',
			imgid: 'bubble2',
			imgclass: 'txtbox bubble2',
			textclass: 'spktxt',
			textdata: data.string.s1_talk3,
		}],
	},

	//slide 5
	{
		imageblock: [
			{
				imagestoshow: [
					{
						imgid: 'section_1_bg',
						imgclass: 'bg_full',
					}, {
						imgid: 'rahul-png',
						imgclass: 'rahul-png',
					},

					{
						imgid: 'rahul-gif',
						imgclass: 'rahul-gif',
					}
				],
			},
		],
		speechbox: [{
			speechbox: 'speechboxr',
			imgid: 'bubble2',
			imgclass: 'txtbox bubble2',
			textclass: 'spktxt',
			textdata: data.string.s1_talk4,
		}],
	},


	// slide 6
	{
		coverboardadditionalclass: "bg_color",
		uppertextblockadditionalclass: "topbar",
		uppertextblock: [{
			textclass: "headertext",
			textdata: data.string.s1_T1_txt,
		}],
		
		
		contentdivclass: "contentdivclass",
		contentdiv: [{
			innercontentdivclass: "innercontentdivclass innercontentdivclass1",
			imagedivclass: "contentimgdivclass contentimgdivclass1",
			imagediv: [{
				imgid: 'Udhauli_bg',
				imgclass: 'contentdivimg contentdivimg1',
			}],
			textclass: "contentdivtxt contentdivtxt1",
			textdata: data.string.s1_P1_txt2
		}, {
			innercontentdivclass: "innercontentdivclass innercontentdivclass2",
			imagedivclass: "contentimgdivclass contentimgdivclass2",
			imagediv: [{
				imgid: 'Chhath',
				imgclass: 'contentdivimg contentdivimg2',
			}],
			textclass: "contentdivtxt contentdivtxt2",
			textdata: data.string.s1_P1_txt3
		}, {
			innercontentdivclass: "innercontentdivclass innercontentdivclass3",
			imagedivclass: "contentimgdivclass contentimgdivclass3",
			imagediv: [{
				imgid: 'Mha_Puja',
				imgclass: 'contentdivimg contentdivimg3',
			}],
			textclass: "contentdivtxt contentdivtxt3",
			textdata: data.string.s1_P1_txt4
		}, {
			innercontentdivclass: "innercontentdivclass innercontentdivclass4",
			imagedivclass: "contentimgdivclass contentimgdivclass4",
			imagediv: [{
				imgid: 'Dashain',
				imgclass: 'contentdivimg contentdivimg4',
			}],
			textclass: "contentdivtxt contentdivtxt4",
			textdata: data.string.s1_P1_txt5
		}, {
			innercontentdivclass: "innercontentdivclass innercontentdivclass5",
			imagedivclass: "contentimgdivclass contentimgdivclass5",
			imagediv: [{
				imgid: 'Christmas',
				imgclass: 'contentdivimg contentdivimg5',
			}],
			textclass: "contentdivtxt contentdivtxt5",
			textdata: data.string.s1_P1_txt6
		}, {
			innercontentdivclass: "innercontentdivclass innercontentdivclass6",
			imagedivclass: "contentimgdivclass contentimgdivclass6",
			imagediv: [{
				imgid: 'Eid',
				imgclass: 'contentdivimg contentdivimg6',
			}],
			textclass: "contentdivtxt contentdivtxt6",
			textdata: data.string.s1_P1_txt7
		}],
	},

	// slide 7
	{
		coverboardadditionalclass: "bg_color",
		uppertextblockadditionalclass: "topbar",
		uppertextblock: [{
			textclass: "headertext",
			textdata: data.string.s1_T2_txt,
		}],
		contentdivclass: "contentdivclass",
		contentdiv: [{
			innercontentdivclass: "innercontentdivclass innercontentdivclass1",
			imagedivclass: "contentimgdivclass contentimgdivclass1",
			imagediv: [{
				imgid: 'Udhauli_bg',
				imgclass: 'contentdivimg contentdivimg1',
			}],
			textclass: "contentdivtxt contentdivtxt1",
			textdata: data.string.s1_P1_txt2
		}, {
			innercontentdivclass: "innercontentdivclass innercontentdivclass2",
			imagedivclass: "contentimgdivclass contentimgdivclass2",
			imagediv: [{
				imgid: 'Chhath',
				imgclass: 'contentdivimg contentdivimg2',
			}],
			textclass: "contentdivtxt contentdivtxt2",
			textdata: data.string.s1_P1_txt3
		}, {
			innercontentdivclass: "innercontentdivclass innercontentdivclass3",
			imagedivclass: "contentimgdivclass contentimgdivclass3",
			imagediv: [{
				imgid: 'Mha_Puja',
				imgclass: 'contentdivimg contentdivimg3',
			}],
			textclass: "contentdivtxt contentdivtxt3",
			textdata: data.string.s1_P1_txt4
		}, {
			innercontentdivclass: "innercontentdivclass innercontentdivclass4",
			imagedivclass: "contentimgdivclass contentimgdivclass4",
			imagediv: [{
				imgid: 'Dashain',
				imgclass: 'contentdivimg contentdivimg4',
			}],
			textclass: "contentdivtxt contentdivtxt4",
			textdata: data.string.s1_P1_txt5
		}, {
			innercontentdivclass: "innercontentdivclass innercontentdivclass5",
			imagedivclass: "contentimgdivclass contentimgdivclass5",
			imagediv: [{
				imgid: 'Christmas',
				imgclass: 'contentdivimg contentdivimg5',
			}],
			textclass: "contentdivtxt contentdivtxt5",
			textdata: data.string.s1_P1_txt6
		}, {
			innercontentdivclass: "innercontentdivclass innercontentdivclass6",
			imagedivclass: "contentimgdivclass contentimgdivclass6",
			imagediv: [{
				imgid: 'Eid',
				imgclass: 'contentdivimg contentdivimg6',
			}],
			textclass: "contentdivtxt contentdivtxt6",
			textdata: data.string.s1_P1_txt7
		}],
		},
];

$(function () {
	var $board = $('.board');
	var $nextBtn = $('#activity-page-next-btn-enabled');
	var $prevBtn = $('#activity-page-prev-btn-enabled');
	var $refreshBtn = $('#activity-page-refresh-btn');
	var countNext = 0;
	var settimeoutclear;
	var settimeoutclear2;

	var $total_page = content.length;
	loadTimelineProgress($total_page, countNext + 1);
	// readCSV();
	var vocabcontroller = new Vocabulary();
	vocabcontroller.init();
	$('.mainBox > div').prepend('<p class="replay_button"></p>');

	//for preload
	var preload;
	var timeoutvar = null;
	var current_sound;

	function init() {
		//specify type otherwise it will load assests as XHR
		manifest = [
			//images
			{ id: 'bg01', src: imgpath + 'cover_page.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'rahul-png', src: imgpath + 'rahul-png.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'rahul-gif', src: imgpath + 'rahul_gif.gif', type: createjs.AbstractLoader.IMAGE },
			{ id: 'Chhath', src: imgpath + 'chhat_cover.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'Christmas', src: imgpath + 'bg_with_character.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'Dashain', src: imgpath + 'putting_tika.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'Eid', src: imgpath + 'Eid.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'Mha_Puja', src: imgpath + 'mha-pujaa.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'Udhauli', src: imgpath + 'Udhauli.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'Christmas_bg', src: imgpath + 'Christmas_bg.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'Dashain_bg', src: imgpath + 'Dashain_bg.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'Eid_bg', src: imgpath + 'Eid_bg.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'Mha_Puja_bg', src: imgpath + 'Mha_Puja_bg.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'Udhauli_bg', src: imgpath + 'udhauli_cover.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'Chhath_bg', src: imgpath + 'Chhath_bg.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'section_1_bg', src: imgpath + 'section_1_bg.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'rahul_talking', src: imgpath + 'rahul_talking.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'rahul_talking_gif', src: imgpath + 'rahul_talking.gif', type: createjs.AbstractLoader.IMAGE },
			{ id: 'bubble2', src: imgpath + 'bubble2.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'maya_talking', src: imgpath + 'maya_talking.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'monu_talking', src: imgpath + 'monu_talking.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'puja_talking', src: imgpath + 'puja_talking.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'raghu_talking', src: imgpath + 'raghu_talking.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'rehan_talking', src: imgpath + 'rehan_talking.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'sara_talking', src: imgpath + 'sara_talking.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'maya_bg_1', src: imgpath + 'maya_bg_1.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'maya_bg_2', src: imgpath + 'maya_bg_2.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'maya_bg_3', src: imgpath + 'maya_bg_3.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'maya_talking_half', src: imgpath + 'maya_talking_half.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'recording', src: imgpath + 'recording.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'stop', src: imgpath + 'stop.png', type: createjs.AbstractLoader.IMAGE },
			{ id: 'mum_making_saleroti', src: imgpath + 'mum_making_saleroti.png', type: createjs.AbstractLoader.IMAGE },


			{ id: 'hand', src: imgpath + 'hand.gif', type: createjs.AbstractLoader.IMAGE },
			{ id: 'maya_talking_gif', src: imgpath + 'maya_talking.gif', type: createjs.AbstractLoader.IMAGE },
			{ id: 'monu_talking_gif', src: imgpath + 'monu_talking.gif', type: createjs.AbstractLoader.IMAGE },
			{ id: 'puja_talking_gif', src: imgpath + 'puja_talking.gif', type: createjs.AbstractLoader.IMAGE },
			{ id: 'raghu_talking_gif', src: imgpath + 'raghu_talking.gif', type: createjs.AbstractLoader.IMAGE },
			{ id: 'rehan_talking_gif', src: imgpath + 'rehan_talking.gif', type: createjs.AbstractLoader.IMAGE },
			{ id: 'sara_talking_gif', src: imgpath + 'sara_talking.gif', type: createjs.AbstractLoader.IMAGE },
			{ id: 'maya_talking_half_gif', src: imgpath + 'maya_talking_half.gif', type: createjs.AbstractLoader.IMAGE },
			{ id: 'mum_making_saleroti_gif', src: imgpath + 'mum_making_saleroti.gif', type: createjs.AbstractLoader.IMAGE },


			//sounds
			//{ id: 'dummy', src: soundAsset + 'dummy.mp3' },
			//slide 1
			{ id: 'title', src: soundAsset + 'title.mp3' },
			{ id: 's1_talk1', src: soundAsset + 's1_talk1.mp3' },
			{ id: 's1_talk2', src: soundAsset + 's1_talk2.mp3' },
			{ id: 's1_talk3', src: soundAsset + 's1_talk3.mp3' },
			{ id: 's1_talk4', src: soundAsset + 's1_talk3-2.mp3' },

			{ id: 's1_T1_txt', src: soundAsset + 's1_T1_txt.mp3' },
			{ id: 's1_T2_txt', src: soundAsset + 's1_T2_txt.mp3' },
			
			{ id: 's1_P1_txt2', src: soundAsset + 's1_P1_txt2.mp3' },
			{ id: 's1_P1_txt3', src: soundAsset + 's1_P1_txt3.mp3' },
			{ id: 's1_P1_txt4', src: soundAsset + 's1_P1_txt4.mp3' },
			{ id: 's1_P1_txt5', src: soundAsset + 's1_P1_txt5.mp3' },
			{ id: 's1_P1_txt6', src: soundAsset + 's1_P1_txt6.mp3' },
			{ id: 's1_P1_txt7', src: soundAsset + 's1_P1_txt7.mp3' },

			//page 2 starts here

			//slide 3
			{ id: 'textaudio2', src: soundAsset + 's1_P12_txt3.mp3' },
			{ id: 'textaudio3', src: soundAsset + 's1_P12_txt4.mp3' },
			{ id: 'textaudio4', src: soundAsset + 's1_P10_txt1.mp3' },
			{ id: 'textaudio5', src: soundAsset + 's1_P11_txt1.mp3' },
			{ id: 's1_P13_txt1', src: soundAsset + 's1_P13_txt1.mp3' },
			{ id: 'record', src: soundAsset + 's1_P12_txt1.mp3' },
		];
		preload = new createjs.LoadQueue(false);
		preload.installPlugin(createjs.Sound); //for registering sounds
		preload.on('progress', handleProgress);
		preload.on('complete', handleComplete);
		preload.on('fileload', handleFileLoad);
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
		// call main function
		templateCaller();
	}
	//initialize
	init();

	/*==================================================
	=            Handlers and helpers Block            =
	==================================================*/
	/*==========  register the handlebar partials first  ==========*/
	Handlebars.registerPartial('textcontent', $('#textcontent-partial').html());
	Handlebars.registerPartial('imagecontent', $('#imagecontent-partial').html());
	/*===============================================
	=            data highlight function            =
	===============================================*/
	function texthighlight($highlightinside) {
		//check if $highlightinside is provided
		typeof $highlightinside !== 'object'
			? alert('Texthighlight : Hi Master, Please pass me a Jquery Object whose child are to be highlighted')
			: null;

		var $alltextpara = $highlightinside.find("*[data-highlight='true']");
		var stylerulename;
		var replaceinstring;
		var texthighlightstarttag;
		var texthighlightendtag = '</span>';
		if ($alltextpara.length > 0) {
			$.each($alltextpara, function (index, val) {
				/*if there is a data-highlightcustomclass attribute defined for the text element
				 use that or else use default 'parsedstring'*/
				$(this).attr(
					'data-highlightcustomclass'
				) /*if there is data-highlightcustomclass defined it is true else it is not*/
					? (stylerulename = $(this).attr('data-highlightcustomclass'))
					: (stylerulename = 'parsedstring');

				texthighlightstarttag = "<span class='" + stylerulename + "'>";
				replaceinstring = $(this).html();
				replaceinstring = replaceinstring.replace(/#/g, texthighlightstarttag);
				replaceinstring = replaceinstring.replace(/@/g, texthighlightendtag);
				$(this).html(replaceinstring);
			});
		}
	}
	/*=====  End of data highlight function  ======*/

	/*======================================================
	 =            Navigation Controller Function            =
	 ======================================================*/

	function navigationcontroller(islastpageflag) {
		typeof islastpageflag === 'undefined'
			? (islastpageflag = false)
			: typeof islastpageflag != 'boolean'
				? alert('NavigationController : Hi Master, please provide a boolean parameter')
				: null;

		// islastpageflag ? ole.footerNotificationHandler.lessonEndSetNotification() : ole.footerNotificationHandler.pageEndSetNotification();
	}

	/*=====  End of user navigation controller function  ======*/

	/*=================================================
	 =            general template function            =
	 =================================================*/
	function generaltemplate() {
		var source = $('#general-template').html();
		var template = Handlebars.compile(source);
		var html = template(content[countNext]);
		$board.html(html);

		// highlight any text inside board div with datahighlightflag set true
		texthighlight($board);
		vocabcontroller.findwords(countNext);
		put_image(content, countNext);
		put_image_container(content, countNext);
		put_speechbox_image(content, countNext);
		var top_val = ($('.top_text').height() / $('.coverboardfull').height()) * 100 + 6.5 + '%';
		$('.top_below_text').css({
			top: top_val,
		});
		var casenext = [false, false, false, false, false, false];
		switch (countNext) {
			case 0:
				sound_player('title');
				current_sound.on("complete", function () {
					nav_button_controls(0);
				});
				break;

			case 1:
				$('.speechboxr').fadeIn(1000, function () {
					if (countNext == 1) {
						sound_player('s1_talk1');
						current_sound.on("complete", function () {
$('.rahul-gif').fadeOut(0);
$('.rahul-png').fadeIn(0);

							if (countNext == 1) {
								nav_button_controls(0);
							}
						});
					}
				});
				break;
			case 2:
				$('.speechboxr').fadeIn(1000, function () {
					if (countNext == 2) {
						sound_player('s1_talk2');
						current_sound.on("complete", function () {
							$('.rahul-gif').fadeOut(0);
							$('.rahul-png').fadeIn(0);
							if (countNext == 2) {
								nav_button_controls(0);
							}
						});
					}
				});
				break;

			case 3:
				$('.speechboxr').fadeIn(1000, function () {
					if (countNext == 3) {
						sound_player('s1_talk3');
						current_sound.on("complete", function () {
							$('.rahul-gif').fadeOut(0);
							$('.rahul-png').fadeIn(0);
							if (countNext == 3) {
								nav_button_controls(0);
							}
						});
					}
				});
				break;

			case 4:
				$('.speechboxr').fadeIn(1000, function () {
					if (countNext == 4) {
						sound_player('s1_talk4');
						current_sound.on("complete", function () {
							$('.rahul-gif').fadeOut(0);
							$('.rahul-png').fadeIn(0);
							if (countNext == 4) {
								nav_button_controls(0);
							}
						});
					}
				});
				break;


			case 5:
				sound_player('s1_T1_txt');
				current_sound.on("complete", function () {
					$('.innercontentdivclass').css('pointer-events', 'all');
					nav_button_controls(0);
				});
				break;

			case 6:
				sound_player('s1_T2_txt');
				current_sound.on("complete", function () {
					$('.innercontentdivclass').css('pointer-events', 'all');
					$('.innercontentdivclass').click(function (params) {
						sound_player('festival' + indxx);
						current_sound.on("complete", function () {

						});
					});
					nav_button_controls(0);
				});
				break;


			default:

				break;
		}
		function showpeople(i = 1) {
			if (i == 1) {
				createjs.Sound.stop();
				clearTimeout(settimeoutclear2);
				clearTimeout(settimeoutclear);
			}

		}
		function showtext(i = 1) {
			if (i == 1) {
				clearTimeout(settimeoutclear);
			}
			if (countNext == 13) {
				$('.innercontentdivclassspeak' + i).animate({
					opacity: 1,
				}, 3000, function () {
					if (countNext == 13) {
						sound_player('textaudio' + i);
						current_sound.on("complete", function () {
							if (i == 5) {
								settimeoutclear = setTimeout(() => {
									nav_button_controls(0);
								}, 200);
							} else {
								settimeoutclear = setTimeout(() => {
									showtext(i + 1)
								}, 200);
							}
						});
					}
				});
			}
		}
		function sound_rec_and_play() {
			$(".coverboardfull").append("<p class='recStat'></p>");
			$(".coverboardfull").append("<p class='listenStat'></p>");
			$('.recording').addClass('scale');
			$('.stop').addClass('darkbg');

			$(".recording").click(function () {
				$('.recordpulse').addClass('Rec');
				$('.recording').addClass('noclick');
				$('.recording').removeClass('scale');
				startRecording();
				$(".recStat").animate({
					"width": "100%"
				}, 15000, function () {
					stopRecording();
					$('.recordpulse').removeClass('Rec');
					$('.stop').removeClass('darkbg');
					$('.stop').removeClass('noclick');
					$('.recording').addClass('darkbg');
					$('.stop').addClass('scale');

					$(".stop").click(function () {
						$('.stop').addClass('noclick');
						$('.speakpulse').addClass('Spk');
						$(".stop").removeClass("scale");
						var audioel = document.getElementById('recorded-audio');
						audioel.play();
						$(".listenStat").animate({
							"width": "100%"
						}, 15000, function () {
							$('.speakpulse').removeClass('Spk');
							$('audio').remove();
							$('.recStat').css('width', '0%');
							$('.listenStat').css('width', '0%');
							$('.recording').addClass('scale');
							$('.recording').removeClass('darkbg');
							$('.recording').removeClass('noclick');
							$('.stop').addClass('darkbg');
							nav_button_controls()
						});
					});
				});
			});
		};
	}

	function nav_button_controls(delay_ms) {
		timeoutvar = setTimeout(function () {
			if (countNext == 0) {
				$nextBtn.show(0);
			} else if (countNext > 0 && countNext == $total_page - 1) {
				$prevBtn.show(0);
				ole.footerNotificationHandler.pageEndSetNotification();
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
		current_sound.on('complete', function () {
			// nav_button_controls(0);
		});
	}

	function sound_player_duo(sound_id, sound_id_se) {
		createjs.Sound.stop();
		current_sound = createjs.Sound.play(sound_id);
		current_sound_se = createjs.Sound.play(sound_id_se);
		current_sound.play();
		current_sound.on('complete', function () {
			nav_button_controls(0);
		});
	}

	function put_image(content, count) {
		if (content[count].hasOwnProperty('imageblock')) {
			var imageblock = content[count].imageblock[0];
			if (imageblock.hasOwnProperty('imagestoshow')) {
				var imageClass = imageblock.imagestoshow;
				for (var i = 0; i < imageClass.length; i++) {
					var image_src = preload.getResult(imageClass[i].imgid).src;
					//get list of classes
					var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
					var selector = '.' + classes_list[classes_list.length - 1];
					$(selector).attr('src', image_src);
				}
			}
		}
		if (content[count].hasOwnProperty('uppertextblock')) {
			var uppertextblock = content[count].uppertextblock[0];
			if (uppertextblock.hasOwnProperty('imagestoshow')) {
				var imageClass = uppertextblock.imagestoshow;
				for (var i = 0; i < imageClass.length; i++) {
					var image_src = preload.getResult(imageClass[i].imgid).src;
					//get list of classes
					var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
					var selector = '.' + classes_list[classes_list.length - 1];
					$(selector).attr('src', image_src);
				}
			}
		}
		if (content[count].hasOwnProperty('contentdiv')) {
			var contentdivlength = content[count].contentdiv;
			for (var j = 0; j < contentdivlength.length; j++) {
				var contentdiv = content[count].contentdiv[j];
				if (contentdiv.hasOwnProperty('imagediv')) {
					var imageClass = contentdiv.imagediv;
					for (var i = 0; i < imageClass.length; i++) {
						var image_src = preload.getResult(imageClass[i].imgid).src;
						//get list of classes
						var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
						var selector = '.' + classes_list[classes_list.length - 1];
						$(selector).attr('src', image_src);
					}
				}
			}
		}
		if (content[count].hasOwnProperty('popupinnerdiv')) {
			var contentdivlength = content[count].popupinnerdiv;
			for (var j = 0; j < contentdivlength.length; j++) {
				var popupinnerdiv = content[count].popupinnerdiv[j];
				if (popupinnerdiv.hasOwnProperty('imagediv')) {
					var imageClass = popupinnerdiv.imagediv;
					for (var i = 0; i < imageClass.length; i++) {
						var image_src = preload.getResult(imageClass[i].imgid).src;
						//get list of classes
						var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
						var selector = '.' + classes_list[classes_list.length - 1];
						$(selector).attr('src', image_src);
					}
				}
				if (popupinnerdiv.hasOwnProperty('imagestoshow')) {
					var imageClass = popupinnerdiv.imagestoshow;
					for (var i = 0; i < imageClass.length; i++) {
						var image_src = preload.getResult(imageClass[i].imgid).src;
						//get list of classes
						var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
						var selector = '.' + classes_list[classes_list.length - 1];
						$(selector).attr('src', image_src);
					}
				}
			}
		}
	}
	function put_image_container(content, count) {
		if (content[count].hasOwnProperty('contentblock')) {
			var contentblock = content[count].contentblock[0];
			if (contentblock.hasOwnProperty('imagestoshow')) {
				var imageClass = contentblock.imagestoshow;
				for (var i = 0; i < imageClass.length; i++) {
					var image_src = preload.getResult(imageClass[i].imgid).src;
					//get list of classes
					var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
					var selector = '.' + classes_list[classes_list.length - 1];
					$(selector).attr('src', image_src);
				}
			}
		}
	}
	function put_speechbox_image(content, count) {
		if (content[count].hasOwnProperty('speechbox')) {
			var speechbox = content[count].speechbox;
			for (var i = 0; i < speechbox.length; i++) {
				var image_src = preload.getResult(speechbox[i].imgid).src;
				//get list of classes
				var classes_list = speechbox[i].speechbox.match(/\S+/g) || [];
				var selector = '.' + classes_list[classes_list.length - 1] + '>.speechbg';
				$(selector).attr('src', image_src);
			}
		}
	}
	function templateCaller() {
		$prevBtn.css('display', 'none');
		$nextBtn.css('display', 'none');

		navigationcontroller();

		generaltemplate();
		loadTimelineProgress($total_page, countNext + 1);
	}

	$nextBtn.on('click', function () {
		createjs.Sound.stop();
		clearTimeout(timeoutvar);
		clearTimeout(settimeoutclear);
		clearTimeout(settimeoutclear2);
		switch (countNext) {
			default:
				countNext++;
				templateCaller();
				break;
		}
	});

	$refreshBtn.click(function () {
		clearTimeout(timeoutvar);
		clearTimeout(settimeoutclear);
		clearTimeout(settimeoutclear2);
		templateCaller();
	});

	$prevBtn.on('click', function () {
		createjs.Sound.stop();
		clearTimeout(timeoutvar);
		clearTimeout(settimeoutclear);
		clearTimeout(settimeoutclear2);
		countNext--;
		templateCaller();
		/* if footerNotificationHandler pageEndSetNotification was called then on click of
		 previous slide button hide the footernotification */
		countNext < $total_page ? ole.footerNotificationHandler.hideNotification() : null;
	});
});
