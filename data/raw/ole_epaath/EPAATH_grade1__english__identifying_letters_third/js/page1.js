var imgpath = $ref + "/images/";
var soundAsset = $ref+"/sounds/";

var content=[
	// slide0
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'bg-cover',

		extratextblock:[{
			textdata: data.string.title,
			textclass: "lesson-title",
		}],
		imageblock:[{
			imagestoshow : [
				{
					imgclass : "bg-full",
					imgsrc : '',
					imgid : 'im-1'
				}
			]
		}],
	},
	// slide1
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: '',

		speechbox:[{
			speechbox: 'sp-1',
			textdata : data.string.p1text1,
			datahighlightflag : true,
			datahighlightcustomclass : 'select-opt',
			imgclass: 'flipped-h',
			textclass : '',
			imgid : 'textbox',
			imgsrc: '',
			// audioicon: true,
		}],

		imageblock:[{
			imagestoshow : [
				{
					imgclass : "bg-full",
					imgsrc : '',
					imgid : 'im-2'
				},
				{
					imgclass : "man",
					imgsrc : '',
					imgid : 'man'
				}
			]
		}],
	},

	// slide2
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'bg-blue',

		imageblock:[{
			imagestoshow : [
				{
					imgclass : "band-img croc",
					imgsrc : '',
					imgid : 'croc'
				},
				{
					imgclass : "band-img panda",
					imgsrc : '',
					imgid : 'panda'
				},
				{
					imgclass : "band-img rhino",
					imgsrc : '',
					imgid : 'rhino'
				},
				{
					imgclass : "band-img leo",
					imgsrc : '',
					imgid : 'leo'
				},
				{
					imgclass : "band-img monkey",
					imgsrc : '',
					imgid : 'monkey'
				},
			]
		}],
		cloudpage: [{
			cloudpage: 'cpage-1',
			cloudtextblock:[
				{
					cloudtextdiv: 'clouddiv-anim cloud-1',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-a",
					textdata: data.string.texta
				},{
					cloudtextdiv: 'clouddiv-anim cloud-2',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-b",
					textdata: data.string.textb
				},{
					cloudtextdiv: 'clouddiv-anim cloud-3',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-c",
					textdata: data.string.textc
				},{
					cloudtextdiv: 'clouddiv-anim cloud-4',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-d",
					textdata: data.string.textd
				},{
					cloudtextdiv: 'clouddiv-anim cloud-5',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-e",
					textdata: data.string.texte
				},{
					cloudtextdiv: 'clouddiv-anim cloud-6',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-f",
					textdata: data.string.textf
				},{
					cloudtextdiv: 'clouddiv-anim cloud-7',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-g",
					textdata: data.string.textg
				},{
					cloudtextdiv: 'clouddiv-anim cloud-8',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-h",
					textdata: data.string.texth
				},{
					cloudtextdiv: 'clouddiv-anim cloud-9',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-i",
					textdata: data.string.texti
				}
			],
		},
		{
			cloudpage: 'cpage-2',
			cloudtextblock:[
				{
					cloudtextdiv: 'clouddiv-anim cloud-10',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-j",
					textdata: data.string.textj
				},{
					cloudtextdiv: 'clouddiv-anim cloud-11',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-k",
					textdata: data.string.textk
				},{
					cloudtextdiv: 'clouddiv-anim cloud-12',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-l",
					textdata: data.string.textl
				},{
					cloudtextdiv: 'clouddiv-anim cloud-13',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-m",
					textdata: data.string.textm
				},{
					cloudtextdiv: 'clouddiv-anim cloud-14',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-n",
					textdata: data.string.textn
				},{
					cloudtextdiv: 'clouddiv-anim cloud-15',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-o",
					textdata: data.string.texto
				},{
					cloudtextdiv: 'clouddiv-anim cloud-16',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-p",
					textdata: data.string.textp
				},{
					cloudtextdiv: 'clouddiv-anim cloud-17',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-q",
					textdata: data.string.textq
				}
			],
		},
		{
			cloudpage: 'cpage-3',
			cloudtextblock:[
				{
					cloudtextdiv: 'clouddiv-anim cloud-18',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-r",
					textdata: data.string.textr
				},{
					cloudtextdiv: 'clouddiv-anim cloud-19',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-s",
					textdata: data.string.texts
				},{
					cloudtextdiv: 'clouddiv-anim cloud-20',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-t",
					textdata: data.string.textt
				},{
					cloudtextdiv: 'clouddiv-anim cloud-21',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-u",
					textdata: data.string.textu
				},{
					cloudtextdiv: 'clouddiv-anim cloud-22',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-v",
					textdata: data.string.textv
				},{
					cloudtextdiv: 'clouddiv-anim cloud-23',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-w",
					textdata: data.string.textw
				},{
					cloudtextdiv: 'clouddiv-anim cloud-24',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-x",
					textdata: data.string.textx
				},{
					cloudtextdiv: 'clouddiv-anim cloud-25',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-y",
					textdata: data.string.texty
				},{
					cloudtextdiv: 'clouddiv-anim cloud-26',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-z",
					textdata: data.string.textz
				}
			],
		}]

	},

// slide3_sec
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'bg-1',

		uppertextblockadditionalclass: 'top-text',
		uppertextblock:[{
			textdata: data.string.p1text2_sec,
			textclass: "",
		}],
		imageblock:[{
			imagestoshow : [
				{
					imgclass : "man-icon",
					imgsrc : '',
					imgid : 'man-icon'
				}
			]
		}],
		cloudpage: [{
			cloudpage: 'cpage-new',
			cloudtextblock:[
				{
					cloudtextdiv: ' clouda-1 pronunce-effect',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-a",
					textdata: data.string.textq
				},{
					cloudtextdiv: ' clouda-2 pronunce-effect',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-b",
					textdata: data.string.textr
				},{
					cloudtextdiv: ' clouda-3 pronunce-effect',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-c",
					textdata: data.string.texts
				},{
					cloudtextdiv: 'clouda-4 pronunce-effect',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-d",
					textdata: data.string.textt
				},{
					cloudtextdiv: 'clouda-5 pronunce-effect',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-e",
					textdata: data.string.textu
				},{
					cloudtextdiv: 'clouda-6 pronunce-effect',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-f",
					textdata: data.string.textv
				},{
					cloudtextdiv: 'clouda-7 pronunce-effect',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-g",
					textdata: data.string.textw
				},{
					cloudtextdiv: 'clouda-8 pronunce-effect',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-h",
					textdata: data.string.textx
				},{
					cloudtextdiv: 'clouda-9 pronunce-effect',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-h",
					textdata: data.string.texty
				},{
					cloudtextdiv: 'clouda-10 pronunce-effect',
					imgclass : "",
					imgsrc : '',
					imgid : 'cloud',
					textclass : "text-h",
					textdata: data.string.textz
				}
			],
		}]
	},
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

	//for preload
	var preload;
	var timeoutvar = null;
	var current_sound;

	function init() {
		//specify type otherwise it will load assests as XHR
		manifest = [
			//images
			{id: "im-1", src: imgpath+"bg01.png", type: createjs.AbstractLoader.IMAGE},
			{id: "im-2", src: imgpath+"bg02.png", type: createjs.AbstractLoader.IMAGE},
			{id: "cloud", src: imgpath+"cloud.png", type: createjs.AbstractLoader.IMAGE},
			{id: "man", src: imgpath+"man-talking.png", type: createjs.AbstractLoader.IMAGE},
			{id: "man-gif", src: imgpath+"man-talking.gif", type: createjs.AbstractLoader.IMAGE},
			{id: "man-icon", src: imgpath+"man.png", type: createjs.AbstractLoader.IMAGE},


			{id: "croc", src: 'images/band/croc-and-congas01.gif', type: createjs.AbstractLoader.IMAGE},
			{id: "panda", src: 'images/band/red-panda-on-recorder01.gif', type: createjs.AbstractLoader.IMAGE},
			{id: "rhino", src: 'images/band/rhino-on-keyboard01.gif', type: createjs.AbstractLoader.IMAGE},
			{id: "leo", src: 'images/band/snow-leopardess-on-sax01.gif', type: createjs.AbstractLoader.IMAGE},
			{id: "monkey", src: 'images/band/sundari-maracas01.gif', type: createjs.AbstractLoader.IMAGE},

			{id: "textbox", src: 'images/textbox/white/tr-1.png', type: createjs.AbstractLoader.IMAGE},

			// sounds
			{id: "sound_1", src: soundAsset+"s1_p1.mp3"},
			{id: "sound_2", src: soundAsset+"s1_p2.mp3"},
			{id: "sound_3", src: soundAsset+"p1_s3.mp3"},
			{id: "s1_p4", src: soundAsset+"s1_p4.mp3"},

			{id: "song", src: soundAsset+"song.mp3"},
			{id: "sound_4", src: soundAsset+"letters_a_to_h.mp3"},
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

		switch(countNext) {
			case 0:
				// $nextBtn.show(0);
				sound_nav('sound_1');
				break;
			case 1:
				$prevBtn.show(0);
				// $nextBtn.show(0);
				createjs.Sound.stop();
				current_sound = createjs.Sound.play('sound_2');
				current_sound.play();
				$('.man').attr('src', preload.getResult('man-gif').src);
				$('.speechbox').css('pointer-events', 'none');
				current_sound.on("complete", function(){
					$('.man').attr('src', preload.getResult('man').src);
					$('.speechbox').css('pointer-events', 'all');
					nav_button_controls(0);
				});
				$('.speechbox').click(function(){
					createjs.Sound.stop();
					current_sound = createjs.Sound.play('sound_2');
					current_sound.play();
					$('.man').attr('src', preload.getResult('man-gif').src);
					current_sound.on("complete", function(){
						nav_button_controls(0);
						$('.man').attr('src', preload.getResult('man').src);
					});
				});
				break;
			case 2:
				$prevBtn.show(0);
				// $('.clouddiv').hide(0);
				$('.cloudimg').attr('src', preload.getResult('cloud').src);
				//for clouds upto i
				sound_nav('song');
				for(var j=0; j<3; j++){
					for(var i=0; i<3; i++){
						var index = j*3 + (i+1);
						var xPad = 3.5, yPad = 6, xRand = 9, yRand = 4;
						var rotateRand = Math.random() < 0.5 ? -2.5 : 5;
						(i==2)?xRand=3.5:xRand=9;
						(j==2)?yRand=2:yRand=3;
						var xPos = xPad + Math.random()*xRand + i*31;
						var yPos = yPad + Math.random()*yRand + j*30;
						$('.cloud-'+index).css({
							'top': yPos+'%',
							'left': xPos+'%',
							'transform': 'rotate('+ Math.random()*rotateRand +'deg)',
						});
						// $('.cloud-'+index).delay(index*1000).show(0);
					}
				}
				//for clouds from j to q
				for(var j=0; j<3; j++){
					for(var i=0; i<3; i++){
						var index = 9 + j*3 + (i+1);
						if(index<18){
							var xPad = 3.5, yPad = 6, xRand = 9, yRand = 3;
							var rotateRand = Math.random() < 0.5 ? -2.5 : 5;
							(i==2)?xRand=3.5:xRand=9;
							if(j==2){
								yRand = 2;
								xPad = 19.5;
							}
							var xPos = xPad + Math.random()*xRand + i*31;
							var yPos = yPad + Math.random()*yRand + j*30;
							$('.cloud-'+index).css({
								'top': yPos+'%',
								'left': xPos+'%',
								'transform': 'rotate('+ Math.random()*rotateRand +'deg)',
							});
							// $('.cloud-'+index).delay(index*1000).show(0);
						}
					}
				}
				//for clouds from r to z
				for(var j=0; j<3; j++){
					for(var i=0; i<3; i++){
						var index = 17 + j*3 + (i+1);
						var xPad = 3.5, yPad = 6, xRand = 9, yRand = 3;
						var rotateRand = Math.random() < 0.5 ? -2.5 : 5;
						(i==2)?xRand=3.5:xRand=9;
						if(j==2){
							yRand = 2;
						}
						var xPos = xPad + Math.random()*xRand + i*31;
						var yPos = yPad + Math.random()*yRand + j*30;
						$('.cloud-'+index).css({
							'top': yPos+'%',
							'left': xPos+'%',
							'transform': 'rotate('+ Math.random()*rotateRand +'deg)',
						});
						// $('.cloud-'+index).delay(index*1000).show(0);
					}
				}
				setTimeout(function(){
					$('.cpage-1').addClass('float-out');
					$('.cpage-2').addClass('float-in');
				}, 17500);
				setTimeout(function(){
					$('.cpage-2').removeClass('float-in').addClass('float-out');
					$('.cpage-3').addClass('float-in');
				}, 21300);
				break;
			case 3:
				$prevBtn.show(0);
				$('.cloudimg').attr('src', preload.getResult('cloud').src);
				//for clouds upto i
				for(var j=0; j<3; j++){
					for(var i=0; i<4; i++){
						var index = j*4 + (i+1);
						var xPad = 3, yPad = 6, xRand = 6, yRand = 4;
						var rotateRand = Math.random() < 0.5 ? -2.5 : 5;
						(i==5)?xRand=2.5:xRand=6;
						if(i==0) xPad = 5;
						if(i==3) xPad = 4;
						if(j==2){
							yRand = 2;
							xPad = 25;
						}
						var xPos = xPad + Math.random()*xRand + i*23;
						var yPos = yPad + Math.random()*yRand + j*30;
						$('.clouda-'+index).css({
							'top': yPos+'%',
							'left': xPos+'%',
							'transform': 'rotate('+ Math.random()*rotateRand +'deg)',
						});
					}
				}
				createjs.Sound.stop();
				current_sound = createjs.Sound.play('sound_3');
				current_sound.play();
				// $('.man').attr('src', preload.getResult('man-gif').src);
				$('.speechbox').css('pointer-events', 'none');
				current_sound.on("complete", function(){
					// $('.man').attr('src', preload.getResult('man').src);
					$('.speechbox').css('pointer-events', 'all');
					sound_nav('s1_p4');
				});
				break;
			case 4:
				$prevBtn.show(0);
				$('.cloudimg').attr('src', preload.getResult('cloud').src);
				//for clouds upto p
				for(var j=0; j<3; j++){
					for(var i=0; i<3; i++){
						var index = j*3 + (i+1);
						var xPad = 5, yPad = 6, xRand = 6, yRand = 4;
						var rotateRand = Math.random() < 0.5 ? -2.5 : 5;
						(i==2)?xRand=3.5:xRand=6;
						if(i==0) xPad = 8;
						if(i==2) xPad = 2;
						if(j==2){
							yRand = 2;
							xPad = 21;
						}
						var xPos = xPad + Math.random()*xRand + i*35;
						var yPos = yPad + Math.random()*yRand + j*30;
						$('.clouda-'+index).css({
							'top': yPos+'%',
							'left': xPos+'%',
							'transform': 'rotate('+ Math.random()*rotateRand +'deg)',
						});
					}
				}
				createjs.Sound.stop();
				current_sound = createjs.Sound.play('sound_3');
				current_sound.play();
				// $('.man').attr('src', preload.getResult('man-gif').src);
				$('.speechbox').css('pointer-events', 'none');
				current_sound.on("complete", function(){
					// $('.man').attr('src', preload.getResult('man').src);
					$('.speechbox').css('pointer-events', 'all');
					sound_nav('sound_4');
				});
				break;
			default:
				$prevBtn.show(0);
				$nextBtn.show(0);
				sound_nav('sound_'+(countNext+1));
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
