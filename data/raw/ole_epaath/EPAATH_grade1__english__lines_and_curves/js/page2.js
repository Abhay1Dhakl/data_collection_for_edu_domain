var imgpath = $ref + "/images/SVG/";
var soundAsset = $ref+"/sounds/"+$lang+"/";

var content=[
// slide1
	{
		contentnocenteradjust: true,
		// contentblockadditionalclass: 'bg-a',
		extratextblock:[{
			textdata: data.string.blank,
			textclass: "divider-left",
			},{
				textdata: data.string.blank,
				textclass: "divider-right",
			},{
			textdata: data.string.p2txt,
			textclass: "topletter",
			},{
				textdata: data.string.blank,
				textclass: "box-right",
			},{
				textdata: data.string.blank,
				textclass: "box-left",
			}],

		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left-ltSml",
					imgsrc : '',
					imgid : 'letter-aa'
				}
			]
		}],
		svgblock: [{
			svgblock: 'letter-svg',
		}],
	},
	// A slide1
	{
		contentnocenteradjust: true,
		// contentblockadditionalclass: 'bg-a',
		extratextblock:[{
			textdata: data.string.blank,
			textclass: "divider-left",
			},{
				textdata: data.string.blank,
				textclass: "divider-right",
			},{
			textdata: data.string.p2txt,
			textclass: "topletter",
			},{
				textdata: data.string.blank,
				textclass: "box-right",
			},{
				textdata: data.string.blank,
				textclass: "box-left",
			}],

		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-a'
				}
			]
		}],
		svgblock: [{
			svgblock: 'letter-svg',
		}],
	},

	// A slide1
	{
		contentnocenteradjust: true,
		// contentblockadditionalclass: 'bg-a',
		extratextblock:[{
			textdata: data.string.blank,
			textclass: "divider-left",
			},{
				textdata: data.string.blank,
				textclass: "divider-right",
			},{
			textdata: data.string.p2txt,
			textclass: "topletter",
			},{
				textdata: data.string.blank,
				textclass: "box-right",
			},{
				textdata: data.string.blank,
				textclass: "box-left",
			}],

		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-b'
				}
			]
		}],
		svgblock: [{
			svgblock: 'letter-svg',
		}],
	},


		// A slide1
		{
			contentnocenteradjust: true,
			// contentblockadditionalclass: 'bg-a',
			extratextblock:[{
				textdata: data.string.blank,
				textclass: "divider-left",
				},{
					textdata: data.string.blank,
					textclass: "divider-right",
				},{
				textdata: data.string.p2txt,
				textclass: "topletter",
				},{
					textdata: data.string.blank,
					textclass: "box-right",
				},{
					textdata: data.string.blank,
					textclass: "box-left",
				}],

			imageblock:[{
				imagestoshow : [
					{
						imgclass : "letter-left",
						imgsrc : '',
						imgid : 'letter-c'
					}
				]
			}],
			svgblock: [{
				svgblock: 'letter-svg',
			}],
		},
// A slide1
{
	contentnocenteradjust: true,
	// contentblockadditionalclass: 'bg-a',
	extratextblock:[{
		textdata: data.string.blank,
		textclass: "divider-left",
		},{
			textdata: data.string.blank,
			textclass: "divider-right",
		},{
		textdata: data.string.p2txt,
		textclass: "topletter",
		},{
			textdata: data.string.blank,
			textclass: "box-right",
		},{
			textdata: data.string.blank,
			textclass: "box-left",
		}],

	imageblock:[{
		imagestoshow : [
			{
				imgclass : "letter-left",
				imgsrc : '',
				imgid : 'letter-d'
			}
		]
	}],
	svgblock: [{
		svgblock: 'letter-svg',
	}],
},
// A slide1
{
	contentnocenteradjust: true,
	// contentblockadditionalclass: 'bg-a',
	extratextblock:[{
		textdata: data.string.blank,
		textclass: "divider-left",
		},{
			textdata: data.string.blank,
			textclass: "divider-right",
		},{
		textdata: data.string.p2txt,
		textclass: "topletter",
		},{
			textdata: data.string.blank,
			textclass: "box-right",
		},{
			textdata: data.string.blank,
			textclass: "box-left",
		}],

	imageblock:[{
		imagestoshow : [
			{
				imgclass : "letter-left",
				imgsrc : '',
				imgid : 'letter-e'
			}
		]
	}],
	svgblock: [{
		svgblock: 'letter-svg',
	}],
},
//slide 6
{
	contentnocenteradjust: true,
	// contentblockadditionalclass: 'bg-a',
	extratextblock:[{
		textdata: data.string.blank,
		textclass: "divider-left",
		},{
			textdata: data.string.blank,
			textclass: "divider-right",
		},{
		textdata: data.string.p2txt,
		textclass: "topletter",
		},{
			textdata: data.string.blank,
			textclass: "box-right",
		},{
			textdata: data.string.blank,
			textclass: "box-left",
		}],

	imageblock:[{
		imagestoshow : [
			{
				imgclass : "letter-left newhere",
				imgsrc : '',
				imgid : 'letter-f'
			}
		]
	}],
	svgblock: [{
		svgblock: 'letter-svg',
	}],
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
	// readCSV();
	var vocabcontroller =  new Vocabulary();
	vocabcontroller.init();

	var my_interval = null;
	var my_interval2 = null;
	//for preload
	var preload;
	var timeoutvar = null;
	var timeoutArr = [];
	var current_sound;

	function init() {
		//specify type otherwise it will load assests as XHR
		manifest = [
			//images
			// {id: "apple", src: imgpath+"p2/apple.png", type: createjs.AbstractLoader.IMAGE},
			// {id: "ball", src: imgpath+"p2/ball.png", type: createjs.AbstractLoader.IMAGE},
			// {id: "cat", src: imgpath+"p2/cat.png", type: createjs.AbstractLoader.IMAGE},
			// {id: "dog", src: imgpath+"p2/dog.png", type: createjs.AbstractLoader.IMAGE},
			// {id: "egg", src: imgpath+"p2/egg.png", type: createjs.AbstractLoader.IMAGE},
			// {id: "fish", src: imgpath+"p2/fish.png", type: createjs.AbstractLoader.IMAGE},
			// {id: "goat", src: imgpath+"p2/goat.png", type: createjs.AbstractLoader.IMAGE},
			// {id: "hen", src: imgpath+"p2/hen.png", type: createjs.AbstractLoader.IMAGE},
			// {id: "boygirl", src: imgpath+"boyandgirl.png", type: createjs.AbstractLoader.IMAGE},
			// {id: "bg2", src: imgpath+"../bg02.png", type: createjs.AbstractLoader.IMAGE},
			// {id: "tb-2", src: imgpath+"tl-1.png", type: createjs.AbstractLoader.IMAGE},

			{id: "letter-aa", src: imgpath+"linenew.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-a", src: imgpath+"line01.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-b", src: imgpath+"line04.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-c", src: imgpath+"line03.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-d", src: imgpath+"r_curve.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-e", src: imgpath+"l_curve.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-f", src: imgpath+"circle_02.svg", type: createjs.AbstractLoader.IMAGE},
			// {id: "cover", src: imgpath+"lp_n.png", type: createjs.AbstractLoader.IMAGE},
			// sounds
			{id: "sound_1", src: soundAsset+"p2_s1.mp3"},
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

	/*===============================================
	 =            user notification function        =
	 ===============================================*/
	function notifyuser($notifyinside) {
		//check if $notifyinside is provided
		typeof $notifyinside !== "object" ? alert("Notifyuser : Hi Master, Please pass me a Jquery Object which should contain notification style.") : null;

		/*variable that will store the element(s) to remove notification from*/
		var $allnotifications = $notifyinside.find("*[data-usernotification='notifyuser']");
		// if there are any notifications removal required add the event handler
		if ($allnotifications.length > 0) {
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

	function navigationcontroller(islastpageflag) {
		typeof islastpageflag === "undefined" ? islastpageflag = false : typeof islastpageflag != 'boolean' ? alert("NavigationController : Hi Master, please provide a boolean parameter") : null;

		// islastpageflag ? ole.footerNotificationHandler.lessonEndSetNotification() : ole.footerNotificationHandler.pageEndSetNotification();
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

			$toggleinstructionblockbutton.on('click', function() {
				instructionblockisvisibleflag = $instructionblock.attr("data-instructionblockshow");
				if (instructionblockisvisibleflag == 'true') {
					instructionblockisvisibleflag = 'false';
					$contentblock.css('pointer-events', 'auto');
				} else if (instructionblockisvisibleflag == 'false') {
					instructionblockisvisibleflag = 'true';
					$contentblock.css('pointer-events', 'none');
				}

				$instructionblock.attr("data-instructionblockshow", instructionblockisvisibleflag);
			});
		}
	}

	/*=====  End of InstructionBlockController  ======*/

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
		$(".letter-left").hide(0);

		switch(countNext) {
			// case 0:
			// 	sound_nav("sound_16");
			// 	// $nextBtn.show(0);
			//  break;
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:

				if(countNext>0) $prevBtn.show(0);
				var letterSoundArray = ['sound_letter_1', 'sound_letter_2', 'sound_letter_3', 'sound_letter_4', 'sound_letter_5', 'sound_letter_6'];
				var letterSVG = ['letter-aa', 'letter-a', 'letter-b', 'letter-c', 'letter-d', 'letter-e', 'letter-f'];
				var s = Snap('#letter-svg');
				var newCount = countNext;
				//alert(newCount);
				var path, circle, circle_1;
				var svg = Snap.load(preload.getResult(letterSVG[newCount]).src, function ( loadedFragment ) {
					s.append(loadedFragment);
					circle=Snap.select('#circle');
					circle_1=Snap.select('#circle01');
					path = Snap.select('#path1');
					countNext==5?path.addClass('hide-stroke-2'):countNext==6?path.addClass('hide-stroke-3'):path.addClass('hide-stroke');
				} );
				if(countNext == 0){
						current_sound = createjs.Sound.play("sound_1");
						current_sound.play();
						current_sound.on("complete", function(){
							$(".letter-left-ltSml").show(0);
							setTimeout(function(){
								circle.attr('display', 'block');
								circle_1.attr('display', 'block');
								circle.addClass('fade-in-1');
								circle_1.addClass('fade-in-2');
								path.addClass('path-anim-1');
							},1000);
						});
						nav_button_controls(10000);
				}
				else{
					$(".letter-left").show(0);
					setTimeout(function(){
						circle.attr('display', 'block');
						circle_1.attr('display', 'block');
						circle.addClass('fade-in-1');
						circle_1.addClass('fade-in-2');
						path.addClass('path-anim-1');
					},1000);
					nav_button_controls(7000);
				}
				break;
			default:
				$prevBtn.show(0);
				timeoutvar = setTimeout(function(){
					sound_nav('sound_'+countNext);
				}, 300);
				break;
		}
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
	function sound_player(sound_id){
		createjs.Sound.stop();
		current_sound = createjs.Sound.play(sound_id);
		current_sound.play();
	}
	function sound_nav(sound_id){
		createjs.Sound.stop();
		current_sound = createjs.Sound.play(sound_id);
		current_sound.play();
		current_sound.on("complete", function(){
			nav_button_controls(0);
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
	function put_image2(content, count){
		if(content[count].hasOwnProperty('imagedivblock')){
			var imageblock = content[count].imagedivblock[0];
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
						// console.log(selector);
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
		 /*
		for (var i = 0; i < content.length; i++) {
			slides(i);
			$($('.totalsequence')[i]).html(i);
			$($('.totalsequence')[i]).css({'color':'red',"height": "4.3vmin",
				"width": "4.3vmin" , "cursor" : "pointer","text-align":"center"
			});
		}
		function slides(i){
				$($('.totalsequence')[i]).click(function(){
					countNext = i;
					createjs.Sound.stop();
					templateCaller();
				});
			}
	*/
	}

	$nextBtn.on('click', function() {
		clearTimeout(timeoutvar);
		createjs.Sound.stop();
		for(var i=0; i<timeoutArr.length; i++){
			clearTimeout(timeoutArr[i]);
		}
		switch(countNext) {
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
		for(var i=0; i<timeoutArr.length; i++){
			clearTimeout(timeoutArr[i]);
		}
		countNext--;
		templateCaller();
		/* if footerNotificationHandler pageEndSetNotification was called then on click of
		 previous slide button hide the footernotification */
		countNext < $total_page ? ole.footerNotificationHandler.hideNotification() : null;
	});

});
