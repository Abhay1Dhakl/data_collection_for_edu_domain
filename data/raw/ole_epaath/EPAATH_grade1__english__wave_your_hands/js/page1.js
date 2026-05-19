var imgpath = $ref + "/images/";
var soundAsset = $ref+"/sounds/"+$lang+"/";

var content=[
	// coverpage
	{
		contentblockadditionalclass: 'bg-cover',
		// extratextblock:[{
		// 	textclass: "chapterName fs-7",
		// 	textdata: data.lesson.chapter,
		// }],

		imageblock:[{
			imagestoshow : [
			{
				imgclass : "background",
				imgid : 'coverpage',
				imgsrc : '',
			}]
		}],
	},
	// slide 1
	{
		contentblockadditionalclass: 'bg-green ',
		extratextblock:[{
			textclass: "clkHereTxt fs-4 hidden",
			textdata: data.string.clickHereTxt,
			commonclass: "common",
		}],
		imageblock:[{
			imagestoshow : [
				{
				imgclass : "kids1",
				imgid : 'kids_speak1',
				imgsrc : '',
			},
			{
				imgclass : "teacher2",
				imgid : 'teacher2',
				imgsrc : '',
			},
			{
				imgclass : "teacher",
				imgid : 'teacher',
				imgsrc : '',
			},
			{
				imgclass : "bg1",
				imgid : 'bg1',
				imgsrc : '',
			},
		
		]
		}],		
		speechbox:[{
			speechbox:"spBox_1 hidden",
			imgclass:'inverted',
			imgid:"textBox",
			imgsrc:'',
			textclass: "textInSp fs-4",
			textdata: data.string.p1s1txt,
		}],
	},

	// slide 2
	{
		contentblockadditionalclass: 'bg-green ',
		extratextblock:[{
			textclass: "clkHereTxt fs-4 hidden",
			textdata: data.string.clickHereTxt,
			commonclass: "common",
		}],
		imageblock:[{
			imagestoshow : [
				{
					imgclass : "kids1",
					imgid : 'kids_speak1',
					imgsrc : '',
				},
				{
					imgclass : "kids2",
					imgid : 'kids_speak',
					imgsrc : '',
				},
				
			{
				imgclass : "teacher2",
				imgid : 'teacher2',
				imgsrc : '',
			},
			{
				imgclass : "teacher",
				imgid : 'teacher',
				imgsrc : '',
			},
			{
				imgclass : "bg1",
				imgid : 'bg1',
				imgsrc : '',
			},
		
		]
		}],		
		speechbox:[
			{
			speechbox:"spBox_1 hidden",
			imgclass:'inverted',
			imgid:"textBox",
			imgsrc:'',
			textclass: "textInSp fs-4",
			textdata: data.string.p1s2txt,
		},
		{
			speechbox:"spBox_2 hidden",
			imgclass:'inverted',
			imgid:"textBox",
			imgsrc:'',
			textclass: "textInSp fs-4",
			textdata: data.string.p1s3txt,
		}
	],
	},


// slide 3
{
	contentblockadditionalclass: 'bg-green ',
	extratextblock:[{
		textclass: "clkHereTxt fs-4 hidden",
		textdata: data.string.clickHereTxt,
		commonclass: "common",
	}],
	imageblock:[{
		imagestoshow : [
			{
				imgclass : "kids1",
				imgid : 'kids_speak1',
				imgsrc : '',
			},
		{
			imgclass : "teacher2",
			imgid : 'teacher2',
			imgsrc : '',
		},
		{
			imgclass : "teacher",
			imgid : 'teacher',
			imgsrc : '',
		},
		{
			imgclass : "bg1",
			imgid : 'bg1',
			imgsrc : '',
		},
	
	]
	}],		
	speechbox:[{
		speechbox:"spBox_1 hidden",
		imgclass:'inverted',
		imgid:"textBox",
		imgsrc:'',
		textclass: "textInSp fs-4",
		textdata: data.string.p1s4txt,
	}],
	},
// slide 4
{
	contentblockadditionalclass: 'bg-green ',
	extratextblock:[{
		textclass: "clkHereTxt fs-4 hidden",
		textdata: data.string.clickHereTxt,
		commonclass: "common",
	}],
	imageblock:[{
		imagestoshow : [
			{
				imgclass: "kids1 img img1",
				imgid : 'kids_speak1',
				imgsrc : '',
			},
			{
				imgclass: "kids4 img img2",
				imgid: 'walking',
				imgsrc : '',
			},
			{
				imgclass: "kids3 img img-stand img4",
				imgid: 'kids_speak1',
				imgsrc : '',
			},

			{
				imgclass: "sit1 img img3",
				imgid: 'sit1',
				imgsrc: '',
			},

			{
				imgclass: "clap img img5",
				imgid: 'clap',
				imgsrc: '',
			},
			{
				imgclass: "wave img img6",
				imgid: 'wave',
				imgsrc : '',
			},
			{
				imgclass: "go img img7",
				imgid: 'go',
				imgsrc: '',
			},
		// 	{
		// 		imgclass: "teacher-img teacher2",
		// 	imgid : 'teacher2',
		// 	imgsrc : '',
		// },
		{
			imgclass: "teacher-img teacher",
			imgid : 'teacher',
			imgsrc : '',
		},
		{
			imgclass : "bg1",
			imgid : 'bg1',
			imgsrc : '',
		},
		{
			imgclass: "hand hand1 ",
			imgid : 'hand',
				imgsrc: '',
			},
			{
				imgclass: "hand hand2 ",
				imgid: 'hand',
				imgsrc: '',
			},
			{
				imgclass: "hand hand3 ",
				imgid: 'hand',
				imgsrc: '',
			},
			{
				imgclass: "hand hand4 ",
				imgid: 'hand',
				imgsrc: '',
			},
			{
				imgclass: "hand hand5 ",
				imgid: 'hand',
				imgsrc: '',
			},
			{
				imgclass: "hand hand6 ",
				imgid: 'hand',
				imgsrc: '',
			},

			{

				imgclass: "replay",
				imgid: 'replay',
				imgsrc: '',
			},

		],
		popup: [
			{
				textclass: 'popup-text click-pop__up',
				textdata: data.string.clickhere,
			},
	]
	}],		
	speechbox:[{
		speechbox: "spBox_1 speechbox sp-1",
		imgclass:'inverted',
		imgid:"textBox",
		imgsrc:'',
		textclass: "textInSp fs-4",
		textdata: data.string.p1s5txt,
	},
		{
			speechbox: "spBox_1a speechbox sp-2",
			imgclass: 'inverted',
			imgid: "textBox",
			imgsrc: '',
			textclass: "textInSp fs-4",
			textdata: data.string.p1s6txt,
		},
		{
			speechbox: "spBox_1b speechbox sp-3",
			imgclass: 'inverted',
			imgid: "textBox",
			imgsrc: '',
			textclass: "textInSp fs-4",
			textdata: data.string.p1s7txt,
		},
		{
			speechbox: "spBox_1c speechbox sp-4",
			imgclass: 'inverted',
			imgid: "textBox",
			imgsrc: '',
			textclass: "textInSp fs-4",
			textdata: data.string.p1s8txt,
		},
		{
			speechbox: "spBox_1e speechbox sp-5",
			imgclass: 'inverted',
			imgid: "textBox",
			imgsrc: '',
			textclass: "textInSp fs-4",
			textdata: data.string.p1s9txt,
		},
		{
			speechbox: "spBox_1d speechbox sp-6",
			imgclass: 'inverted',
			imgid: "textBox",
			imgsrc: '',
			textclass: "textInSp fs-4",
			textdata: data.string.p1s10txt,
		}
	],
},


];


$(function () {
	var $board = $('.board');
	var $nextBtn = $("#activity-page-next-btn-enabled");
	var $prevBtn = $("#activity-page-prev-btn-enabled");
	var $refreshBtn= $("#activity-page-refresh-btn");
	var countNext = 0;

	let clickCounter = 1

	var $total_page = content.length;
	loadTimelineProgress($total_page,countNext+1);
	// readCSV();
	var vocabcontroller =  new Vocabulary();
	vocabcontroller.init();

	//for preload
	var preload;
	var timeoutvar = null;
	var current_sound;

	function init() {
		//specify type otherwise it will load assests as XHR
		manifest = [
			//images
			{id: "walking", src: imgpath+"walking.gif", type: createjs.AbstractLoader.IMAGE},
			{ id: "replay", src: imgpath + "replay.png", type: createjs.AbstractLoader.IMAGE },
			{id: "coverpage", src: imgpath+"mainbg.png", type: createjs.AbstractLoader.IMAGE},
			{id: "bg1", src: imgpath+"bg1.png", type: createjs.AbstractLoader.IMAGE},
			{id: "girl1_gif", src: imgpath+"girl1_talking_gif.gif", type: createjs.AbstractLoader.IMAGE},
			{id: "girl1", src: imgpath+"girl1_talking_png.png", type: createjs.AbstractLoader.IMAGE},
			{id: "teacher2", src: imgpath+"sir_talking_gif.gif", type: createjs.AbstractLoader.IMAGE},
			{id: "teacher", src: imgpath+"sir_talking_png.png", type: createjs.AbstractLoader.IMAGE},
			{id: "kids_speak1", src: imgpath+"kids_speak.png", type: createjs.AbstractLoader.IMAGE},
			{id: "kids_speak", src: imgpath+"kids_speak.gif", type: createjs.AbstractLoader.IMAGE},
			{id: "sit", src: imgpath+"sit.png", type: createjs.AbstractLoader.IMAGE},
			{id: "sit1", src: imgpath+"sit1.png", type: createjs.AbstractLoader.IMAGE},
			{id: "clap", src: imgpath+"clap_all.gif", type: createjs.AbstractLoader.IMAGE},
			{id: "hand", src: imgpath+"hand.gif", type: createjs.AbstractLoader.IMAGE},
			{id: "go", src: imgpath+"go.png", type: createjs.AbstractLoader.IMAGE},
			{id: "wave", src: imgpath+"waving.gif", type: createjs.AbstractLoader.IMAGE},

			//textboxes
			{id: "textBox", src: imgpath+"textbox.png", type: createjs.AbstractLoader.IMAGE},

			// sounds
			{ id: "chapterName", src: soundAsset + "chapterName.mp3" },
			{ id: "s1_p1", src: soundAsset + "s1_p1.mp3" },
			{ id: "p1s1txt", src: soundAsset + "p1s1txt.mp3" },
			{ id: "p1s2txt", src: soundAsset + "p1s2txt.mp3" },
			{ id: "p1s3txt", src: soundAsset + "p1s3txt.mp3" },
			{ id: "clickhere", src: soundAsset + "clickhere.mp3" },
			{ id: "p1s4txt", src: soundAsset + "p1s4txt.mp3" },
			{ id: "p1s5txt", src: soundAsset + "p1s5txt.mp3" },
			{ id: "p1s6txt", src: soundAsset + "p1s6txt.mp3" },
			{ id: "p1s7txt", src: soundAsset + "p1s7txt.mp3" },
			{ id: "p1s8txt", src: soundAsset + "p1s8txt.mp3" },
			{ id: "p1s9txt", src: soundAsset + "p1s9txt.mp3" },
			{ id: "p1s10txt", src: soundAsset + "p1s10txt.mp3" },
		

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
	function texthighlight($highlightinside) {
		//check if $highlightinside is provided
		typeof $highlightinside !== "object" ? alert("Texthighlight : Hi Master, Please pass me a Jquery Object whose child are to be highlighted") : null;

		var $alltextpara = $highlightinside.find("*[data-highlight='true']");
		var stylerulename;
		var replaceinstring;
		var texthighlightstarttag;
		var texthighlightendtag = "</span>";
		if ($alltextpara.length > 0) {
			$.each($alltextpara, function(index, val) {
				/*if there is a data-highlightcustomclass attribute defined for the text element
				 use that or else use default 'parsedstring'*/
				$(this).attr("data-highlightcustomclass") ? /*if there is data-highlightcustomclass defined it is true else it is not*/
				( stylerulename = $(this).attr("data-highlightcustomclass")) : ( stylerulename = "parsedstring");

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
		typeof islastpageflag === "undefined" ? islastpageflag = false : typeof islastpageflag != 'boolean' ? alert("NavigationController : Hi Master, please provide a boolean parameter") : null;

		// islastpageflag ? ole.footerNotificationHandler.lessonEndSetNotification() : ole.footerNotificationHandler.pageEndSetNotification();
	}

	/*=====  End of user navigation controller function  ======*/


	/*=================================================
	 =            general template function            =
	 =================================================*/
	function generaltemplate() {
		var source = $("#general-template").html();
		var template = Handlebars.compile(source);
		var html = template(content[countNext]);
		$board.html(html);


		// highlight any text inside board div with datahighlightflag set true
		texthighlight($board);
		vocabcontroller.findwords(countNext);
		put_image(content, countNext);
		put_speechbox_image(content, countNext);

		switch(countNext) {	
			case 0:
				current_sound = createjs.Sound.play("chapterName");
			current_sound.play();
			current_sound.on('complete', function(){
				nav_button_controls(0);
			});
			break;
			case 1:
				$(".spBox_1").removeClass("hidden").addClass("fadein");
				$(".spBox_1").css(
					{
						"top": "7%",
						"left": "1%",
						"width": "32%",
						"height": "34%",
					}
				)
				current_sound = createjs.Sound.play("p1s1txt");
						current_sound.on("complete", function () {
                        $('.teacher2').hide(0);
                        $('.teacher').fadeIn(0);
						nav_button_controls(0);
				});
			break;
			case 2:
				$(".spBox_1").removeClass("hidden").addClass("fadein");
				current_sound = createjs.Sound.play("p1s2txt");
						current_sound.on("complete", function () {
							$('.spBox_1').hide(0);
							$('.teacher2').hide(0);
							$('.teacher').fadeIn(0);
							current_sound = createjs.Sound.play("p1s3txt");
							$(".spBox_2").removeClass("hidden").addClass("fadein");
							$('.kids1').hide(0);
							$('.kids2').fadeIn(0);
							current_sound.on("complete", function () {
								$('.kids2').hide(0);
							$('.kids1').fadeIn(0);
								nav_button_controls(0);
							});
				});
			break;
			case 3:
				$(".spBox_1").removeClass("hidden").addClass("fadein");
				current_sound = createjs.Sound.play("p1s4txt");
						current_sound.on("complete", function () {
							$('.teacher2').hide(0);
							$('.teacher').fadeIn(0);
								nav_button_controls(0);
				});
			break;
			case 4:
				$('.speechbox:not(.sp-1,.clickhere), .img:not(.img1,.img2), .hand').hide()
				$('.teacher-img').fadeIn(100);
				clickHand();
				Replay();
					break;
			default:
				nav_button_controls();
			break;
		}
	}
	function clickHand() {
		// debugger
		playgif('p1s' + (clickCounter + 4) + 'txt', 'teacher', 'teacher2', 'teacher-img', () => {
			//if less than 7 vaya
			clickCounter < 7 ? $('.hand' + clickCounter).fadeIn(1000, () => {
				$('.replay').fadeIn(9000);
				//for playing sound only once
				clickCounter === 1 && sound_player("clickhere");
				clickCounter === 1 && $('.clickhere').fadeIn(0);
				$('.clickhere').fadeOut(3000);
				$('.hand' + clickCounter).click(function () {
					$(this).fadeOut();
					$('.sp-' + clickCounter).fadeOut(300)
					$('.sp-' + (clickCounter + 1)).fadeIn(300)
					$('.img' + (clickCounter)).fadeOut(0, () => {
						//for animating first img
						clickCounter === 1 ? $('.img' + (clickCounter + 1)).fadeIn().animate(
							{
								left: "46%", 
							}, 2000, function () {
							$(this).fadeOut(0)
							$('.img-stand').fadeIn(0)
						}) : $('.img' + (clickCounter + 1)).fadeIn(0)
					})
					clickCounter === 2 && $('.img-stand').fadeOut(100)
					timeoutvar = setTimeout(() => {
						clickCounter++;
						clickCounter === 7 && $('.replay').fadeOut(0);
						//hand icon appears unless clickcount is less than 7
						clickCounter < 7 && clickHand();
						clickCounter > 1 && Replay()
						clearTimeout(timeoutvar)
					}, clickCounter === 1 ? 2000 : 1000)
				});
			}) : $('.img').fadeIn(50000, () => $('.img7').fadeIn(5000));
			nav_button_controls(32000);

		});

	}
	function Replay() {
		// debugger
		// $('.replay').click(function () {
			console.log(clickCounter)
		clickCounter > 1 && $('.replay').click(function () {
			console.log("clicked", clickCounter);
			//according to rank of them
			$('.sp-' + clickCounter).fadeOut(500)
			$('.hand' + clickCounter).hide(500)
			$('.sp-' + (clickCounter - 1)).fadeIn(500,)
			$('.hand' + (clickCounter - 1)).fadeIn(1000, () => {
				clickCounter === 2 ? $('.img-stand').fadeOut(100, () => $('.img' + (clickCounter - 1)).fadeIn(100)) : $('.img' + (clickCounter)).fadeOut(100, () => {
					$('.img' + (clickCounter - 1)).fadeIn(100)
					playgif('p1s' + (clickCounter + 3) + 'txt', 'teacher', 'teacher2', 'teacher-img', () => {
							timeoutvar = setTimeout(() => {
								clickCounter--
								clickCounter > 1 
								clearTimeout(timeoutvar)
							}, 1000)
						})
					})


			});
		});
	};

	function playgif(
		soundid,
		imageid,
		gifid,
		imageclass,
		callback,
	) {
		createjs.Sound.stop()
		current_sound = createjs.Sound.play(soundid)
		current_sound.play()
		$('.' + imageclass).attr('src', preload.getResult(gifid).src)
		current_sound.on('complete', function () {
			$('.' + imageclass).attr('src', preload.getResult(imageid).src)
			callback && callback();
		})
	}

	function nav_button_controls(delay_ms){
		timeoutvar = setTimeout(function(){
			if(countNext==0){
				$nextBtn.show(0);
			} else if( countNext>0 && countNext == $total_page-1){
				$prevBtn.show(0);
				ole.footerNotificationHandler.pageEndSetNotification();
			} else{
				$prevBtn.show(0);
				$nextBtn.show(0);
			}
		},delay_ms);
	}

	function sound_player(sound_id, callback = null) { 
			createjs.Sound.stop();
			current_sound = createjs.Sound.play(sound_id);
			current_sound.play();
			current_sound.on('complete', function(){
				callback && callback()
			}); 
	}

	function put_image(content, count){
		if(content[count].hasOwnProperty('imageblock')){
			var imageblock = content[count].imageblock[0];
			if(imageblock.hasOwnProperty('imagestoshow')){
				var imageClass = imageblock.imagestoshow;
				for(var i=0; i<imageClass.length; i++){
					var image_src = preload.getResult(imageClass[i].imgid).src;
					//get list of classes
					var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
					var selector = ('.'+classes_list[classes_list.length-1]);
					$(selector).attr('src', image_src);
				}
			}
		}
	}
	function put_speechbox_image(content, count){
		if(content[count].hasOwnProperty('speechbox')){
			var speechbox = content[count].speechbox;
			for(var i=0; i<speechbox.length; i++){
				var image_src = preload.getResult(speechbox[i].imgid).src;
				//get list of classes
				var classes_list = speechbox[i].speechbox.match(/\S+/g) || [];
				var selector = ('.'+classes_list[classes_list.length-1]+'>.speechbg');
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

	$nextBtn.on('click', function() {
		createjs.Sound.stop();
		clearTimeout(timeoutvar);
		switch(countNext) {
		default:
			countNext++;
			templateCaller();
			break;
		}
	});

	$refreshBtn.click(function(){
		clickCounter = 1
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

});
