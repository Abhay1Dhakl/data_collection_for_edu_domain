var imgpath = $ref + "/images/";
var soundAsset = $ref+"/sounds/";

var content=[
	// coverpage
	{
		contentnocenteradjust: true,
		//contentblockadditionalclass: "thebg1",
		uppertextblock:[
		{
           textclass: "chapter",
			textdata:data.string.cp
		}
	],
		imageblock:[{
		imagestoshow:[
			{
				imgclass: "coverpage",
				imgid : 'coverpage',
				imgsrc: ""
			}
		]
	}]
},

	// slide1
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: "bg bg1",
		uppertextblock:[
		{
           textclass: "p1s0txt",
			textdata:data.string.p1s0txt
		}
	]
},
	// slide2
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: "bg bg2",
	uppertextblock:[
		{
           textclass: "btmtxt",
			textdata:data.string.p1s1txt
		}
	],
	imageblock:[{
		imagestoshow:[
			{
				imgclass: "singleimg",
				imgid : 'circle',
				imgsrc: ""
			}
		]
	}]
},
//slide3
{
		contentnocenteradjust: true,
		contentblockadditionalclass: "bg bg2",
	uppertextblock:[
		{
           textclass: "toptxt p1s2txt",
			textdata:data.string.p1s2txt
		},
		{
         textclass: "midtxt p1s2txt1",
		 textdata:data.string.p1s2txt1
		},
		{
           textclass: "midtxt p1s2txt2",
		   textdata:data.string.p1s2txt2
		},
		{
           textclass: "midtxt p1s2txt3",
		   textdata:data.string.p1s2txt3
		}
	],
	imageblock:[{
		imagestoshow:[
			{
				imgclass: "speakers s2first",
				imgid : 'speaker',
				imgsrc: ""
			},
						{
				imgclass: "speakers s2sec",
				imgid : 'speaker',
				imgsrc: ""
			},
			{
				imgclass: "speakers s2third",
				imgid : 'speaker',
				imgsrc: ""
			},
			{
				imgclass: "mid1",
				imgid : 'wheel',
				imgsrc: ""
			},
			{
				imgclass: "mid2",
				imgid : 'saleroti',
				imgsrc: ""
			},
			{
				imgclass: "mid3",
				imgid : 'plate',
				imgsrc: ""
			}
		]
	}]

},
//slide4
{
		contentnocenteradjust: true,
		contentblockadditionalclass: "bg bg3",
	uppertextblock:[
		{
           textclass: "btmtxt",
			textdata:data.string.p1s3txt
		}
	],

	imageblock:[{
		imagestoshow:[
			{
				imgclass: "singleimg",
				imgid : 'squire',
				imgsrc: ""
			}
		]
	}]

},
//slide5
{
		contentnocenteradjust: true,
		contentblockadditionalclass: "bg bg2",
	uppertextblock:[
		{
           textclass: "toptxt p1s4txt",
			textdata:data.string.p1s4txt
		},
		{
         textclass: "midtxt p1s2txt1",
		 textdata:data.string.p1s4txt1
		},
		{
           textclass: "midtxt p1s2txt2",
		   textdata:data.string.p1s4txt2
		},
		{
           textclass: "midtxt p1s2txt3",
		   textdata:data.string.p1s4txt3
		}

	],
	imageblock:[{
		imagestoshow:[
			{
				imgclass: "speakers s2first",
				imgid : 'speaker',
				imgsrc: ""
			},
						{
				imgclass: "speakers s2sec",
				imgid : 'speaker',
				imgsrc: ""
			},
						{
				imgclass: "speakers s2third",
				imgid : 'speaker',
				imgsrc: ""
			},
			{
				imgclass: "mid1",
				imgid : 'clock',
				imgsrc: ""
			},
			{
				imgclass: "mid2",
				imgid : 'mirror',
				imgsrc: ""
			},
			{
				imgclass: "mid3",
				imgid : 'chessboard',
				imgsrc: ""
			}
		]
	}
]

},
//slide6
{
		contentnocenteradjust: true,
		contentblockadditionalclass: "bg bg5",
	uppertextblock:[
		{
           textclass: "btmtxt",
			textdata:data.string.p1s5txt
		}
	],
	imageblock:[{
		imagestoshow:[
			{
				imgclass: "singleimg",
				imgid : 'triangle',
				imgsrc: ""
			}

		]
	}

]
},
//slide7
{
		contentnocenteradjust: true,
		contentblockadditionalclass: "bg bg5",
	uppertextblock:[
		{
           textclass: "toptxt p1s4txt",
			textdata:data.string.p1s6txt
		},
		{
         textclass: "midtxt p1s2txt1 txt",
		 textdata:data.string.p1s6txt1
		},
		{
           textclass: "midtxt p1s2txt2 txt",
		   textdata:data.string.p1s6txt2
		},
		{
           textclass: "midtxt p1s2txt3 txt",
		   textdata:data.string.p1s6txt3
		}

	],
	imageblock:[{
		imagestoshow:[
			{
				imgclass: "speakers s2first",
				imgid : 'speaker',
				imgsrc: ""
			},
						{
				imgclass: "speakers s2sec",
				imgid : 'speaker',
				imgsrc: ""
			},
						{
				imgclass: "speakers s2third",
				imgid : 'speaker',
				imgsrc: ""
			},
			{
				imgclass: "mid1",
				imgid : 'road-sign',
				imgsrc: ""
			},
			{
				imgclass: "mid2",
				imgid : 'watermelon',
				imgsrc: ""
			},
			{
				imgclass: "mid3",
				imgid : 'icecream-cone',
				imgsrc: ""
			}
		]
	}
]

},
//slide8
{
		contentnocenteradjust: true,
		contentblockadditionalclass: "thebg1",
	uppertextblock:[
		{
           textclass: "btmtxt p1s7txt",
			textdata:data.string.p1s7txt
		},
		{
           textclass: "bg bg7",
			textdata:data.string.bg
		}

	],

	imageblock:[{
		imagestoshow:[
			{
				imgclass: "singleimgrct",
				imgid : 'rectangle',
				imgsrc: ""
			}
		]
	}
]


},
//slide9
{
		contentnocenteradjust: true,
		contentblockadditionalclass: "thebg1",
	uppertextblock:[
		{
           textclass: "toptxt p1s4txt",
			textdata:data.string.p1s8txt
		},
		{
           textclass: "bg bg7",
			textdata:data.string.bg
		},
		{
         textclass: "midtxt p1s2txt1 txt",
		 textdata:data.string.p1s8txt1
		},
		{
           textclass: "midtxt p1s2txt2 txt",
		   textdata:data.string.p1s8txt2
		},
		{
           textclass: "midtxt p1s2txt3 txt",
		   textdata:data.string.p1s8txt3
		}

	],
	imageblock:[{
		imagestoshow:[
			{
				imgclass: "speakers s2first",
				imgid : 'speaker',
				imgsrc: ""
			},
						{
				imgclass: "speakers s2sec",
				imgid : 'speaker',
				imgsrc: ""
			},
						{
				imgclass: "speakers s2third",
				imgid : 'speaker',
				imgsrc: ""
			},
			{
				imgclass: "mid1door",
				imgid : 'door',
				imgsrc: ""
			},
			{
				imgclass: "mid2",
				imgid : 'blockboard',
				imgsrc: ""
			},
			{
				imgclass: "mid3book",
				imgid : 'book',
				imgsrc: ""
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

	var vocabcontroller =  new Vocabulary();
	vocabcontroller.init();

	var preload;
	var timeoutvar = null;
	var current_sound;

	function init() {
		//specify type otherwise it will load assests as XHR
		manifest = [
			// {id: "common-css", src: $ref+"css/common.css", type: createjs.AbstractLoader.CSS},
			// {id: "page1-css", src: $ref+"css/page1.css", type: createjs.AbstractLoader.CSS},
			//   ,
			//images
			{id: "speaker", src: imgpath+"speaker.png", type: createjs.AbstractLoader.IMAGE},
			{id: "circle", src: imgpath+"circle.png", type: createjs.AbstractLoader.IMAGE},
			{id: "plate", src: imgpath+"plate.png", type: createjs.AbstractLoader.IMAGE},
			{id: "saleroti", src: imgpath+"saleroti.png", type: createjs.AbstractLoader.IMAGE},
			{id: "squire", src: imgpath+"squire.png", type: createjs.AbstractLoader.IMAGE},
			{id: "triangle", src: imgpath+"triangle.png", type: createjs.AbstractLoader.IMAGE},
			{id: "wheel", src: imgpath+"wheel.png", type: createjs.AbstractLoader.IMAGE},
			{id: "blockboard", src: imgpath+"blockboard.png", type: createjs.AbstractLoader.IMAGE},
			{id: "book", src: imgpath+"book.png", type: createjs.AbstractLoader.IMAGE},
			{id: "chessboard", src: imgpath+"chessboard.png", type: createjs.AbstractLoader.IMAGE},
			{id: "clock", src: imgpath+"clock.png", type: createjs.AbstractLoader.IMAGE},
			{id: "door", src: imgpath+"door.png", type: createjs.AbstractLoader.IMAGE},
			{id: "icecream-cone", src: imgpath+"icecream-cone.png", type: createjs.AbstractLoader.IMAGE},
			{id: "mirror", src: imgpath+"mirror.png", type: createjs.AbstractLoader.IMAGE},
			{id: "rectangle", src: imgpath+"rectangle.png", type: createjs.AbstractLoader.IMAGE},
			{id: "road-sign", src: imgpath+"road-sign.png", type: createjs.AbstractLoader.IMAGE},
			{id: "speaker", src: imgpath+"speaker.png", type: createjs.AbstractLoader.IMAGE},
			{id: "watermelon", src: imgpath+"watermelon.png", type: createjs.AbstractLoader.IMAGE},
			{id: "coverpage", src: imgpath+"bg.png", type: createjs.AbstractLoader.IMAGE},
			//textboxes
			{id: "tb-2", src: 'images/textbox/white/tl-1.png', type: createjs.AbstractLoader.IMAGE},
			{id: "tb-1", src: 'images/textbox/white/tr-2.png', type: createjs.AbstractLoader.IMAGE},
			// sounds
			{id: "sound_0", src: soundAsset+"s1_p1.mp3"},
			{id: "sound_1", src: soundAsset+"p1_s0.mp3"},
			{id: "sound_2", src: soundAsset+"p1_s1.mp3"},
			{id: "sound_3", src: soundAsset+"p1_s2.mp3"},
			{id: "sound_4", src: soundAsset+"p1_s2_1.mp3"},
			{id: "sound_5", src: soundAsset+"p1_s2_2.mp3"},
			{id: "sound_6", src: soundAsset+"p1_s2_3.mp3"},
			{id: "sound_7", src: soundAsset+"p1_s3.mp3"},
			{id: "sound_8", src: soundAsset+"p1_s4.mp3"},
			{id: "sound_9", src: soundAsset+"p1_s4_1.mp3"},
			{id: "sound_10", src: soundAsset+"p1_s4_2.mp3"},
			{id: "sound_11", src: soundAsset+"p1_s4_3.mp3"},
			{id: "sound_12", src: soundAsset+"p1_s5.mp3"},
			{id: "sound_13", src: soundAsset+"p1_s6.mp3"},
			{id: "sound_14", src: soundAsset+"p1_s6_1.mp3"},
			{id: "sound_15", src: soundAsset+"p1_s6_2.mp3"},
			{id: "sound_16", src: soundAsset+"p1_s6_3.mp3"},
			{id: "sound_17", src: soundAsset+"p1_s7.mp3"},
			{id: "sound_18", src: soundAsset+"p1_s8.mp3"},
			{id: "sound_19", src: soundAsset+"p1_s8_1.mp3"},
			{id: "sound_20", src: soundAsset+"p1_s8_2.mp3"},
			{id: "sound_21", src: soundAsset+"p1_s8_3.mp3"},
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
		current_sound = createjs.Sound.play('sound_1');
		current_sound.stop();
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

function navigationcontroller(islastpageflag){
 typeof islastpageflag === "undefined" ?
 islastpageflag = false :
 typeof islastpageflag != 'boolean'?
 alert("NavigationController : Hi Master, please provide a boolean parameter") :
 null;

 if(countNext == 0 && $total_page!=1){
 	$nextBtn.show(0);
 	$prevBtn.css('display', 'none');
 }
 else if($total_page == 1){
 	$prevBtn.css('display', 'none');
 	$nextBtn.css('display', 'none');

 	// if lastpageflag is true
 	islastpageflag ?
 	ole.footerNotificationHandler.lessonEndSetNotification() :
 	ole.footerNotificationHandler.lessonEndSetNotification() ;
 }
 else if(countNext > 0 && countNext < $total_page-1){
 	$nextBtn.show(0);
 	$prevBtn.show(0);
 }
 else if(countNext == $total_page-1){
 	$nextBtn.css('display', 'none');
 	$prevBtn.show(0);

 	// if lastpageflag is true
 	islastpageflag ?
 	ole.footerNotificationHandler.lessonEndSetNotification() :
 	ole.footerNotificationHandler.pageEndSetNotification() ;
 }
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
		put_image2(content, countNext);
		put_speechbox_image(content, countNext);

		switch(countNext){
			case 0:
			$nextBtn.hide(0);
			sound_player1("sound_0");
			break;
			case 1:
			sound_player1("sound_1");
			break;
			case 2:
			sound_player1("sound_2");
			break;
			case 3:
        	sound_player("sound_3");
			setTimeout(function () {
                navigationcontroller();
                },8000);
			currentSound = "sound_4";
        	currentSound1 = "sound_5";
        	currentSound2 = "sound_6";
        	lateSound();
        	lateSound1();
        	lateSound2();
        	setTimeout(function(){
						$(".s2first,.s2sec,.s2third").css("pointer-events","auto");
					},8000);
			break;
			case 4:
			sound_player1("sound_7");
			break;
			case 5:
        	sound_player("sound_8");
		    setTimeout(function () {
				navigationcontroller();
				},8000);
			currentSound = "sound_9";
        	currentSound1 = "sound_10";
        	currentSound2 = "sound_11";
        	lateSound();
        	lateSound1();
        	lateSound2();
					setTimeout(function(){
						$(".s2first,.s2sec,.s2third").css("pointer-events","auto");
					},8000);
			break;
			case 6:
			sound_player1("sound_12");
			break;
			case 7:
        	sound_player("sound_13");
			setTimeout(function () {
                navigationcontroller();
                },9000);
			currentSound = "sound_14";
        	currentSound1 = "sound_15";
        	currentSound2 = "sound_16";
        	lateSound();
        	lateSound1();
        	lateSound2();
					setTimeout(function(){
						$(".s2first,.s2sec,.s2third").css("pointer-events","auto");
					},9000);
			break;
			case 8:
			sound_player1("sound_17");
			break;
			case 9:
        	sound_player("sound_18");
			setTimeout(function () {
                navigationcontroller();
                },10000);
			currentSound = "sound_19";
        	currentSound1 = "sound_20";
        	currentSound2 = "sound_21";
        	lateSound();
        	lateSound1();
        	lateSound2();
					setTimeout(function(){
						$(".s2first,.s2sec,.s2third").css("pointer-events","auto");
					},10000);
			break;
		}
//click and play start

      $('.s2first').click(function(){
				$nextBtn.hide(0);
				$prevBtn.hide(0);
			sound_player(currentSound);
			setTimeout(function(){
				$nextBtn.show(0);
				$prevBtn.show(0);
			},1500);
			});
      $('.s2sec').click(function(){
				$nextBtn.hide(0);
				$prevBtn.hide(0);
			sound_player(currentSound1);
			setTimeout(function(){
				$nextBtn.show(0);
				$prevBtn.show(0);
			},1500);
			});
      $('.s2third').click(function(){
				$nextBtn.hide(0);
				$prevBtn.hide(0);
			sound_player(currentSound2);
			setTimeout(function(){
			$nextBtn.show(0);
			$prevBtn.show(0);
			},1500);
			});
//click and play end
	}

    function lateSound(){
	    setTimeout(function()
			{
				sound_player(currentSound)},3000)
		}
	function lateSound1(){
	    setTimeout(function()
			{
				sound_player(currentSound1)},5000)
		}
    function lateSound2(){
	    setTimeout(function()
			{
				sound_player(currentSound2)},7000)
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
function sound_player(sound_id, next){
	createjs.Sound.stop();
	current_sound = createjs.Sound.play(sound_id);
	current_sound.play();
	// current_sound.on('complete', function(){
		 // $('.speaker').addClass("enable");
		  // $('.p1s4peakerimg').addClass("enable");
			// if(next == null)
			// navigationcontroller();

}
	function sound_player1(sound_id, next){
		createjs.Sound.stop();
		current_sound = createjs.Sound.play(sound_id);
		current_sound.play();
		current_sound.on('complete', function(){
		 $('.speaker').addClass("enable");
		  $('.p1s4peakerimg').addClass("enable");
			if(next == null)
			navigationcontroller();

		});



	}

	function sound_player_duo(sound_id, sound_id_2){
		createjs.Sound.stop();
		current_sound = createjs.Sound.play(sound_id);
		//current_sound_2 = createjs.Sound.play(sound_id_2);
		current_sound.play();
		current_sound.on('complete', function(){
			$(".dotext").show(0);
			sound_player(sound_id_2);
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
		if(content[count].hasOwnProperty('livinnonlivin')){
			var lncontent = content[count].livinnonlivin[0];
			if(lncontent.hasOwnProperty('imageblock')){
				var imageblock = lncontent.imageblock[0];
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
			var lncontent = content[count].livinnonlivin[1];
			if(lncontent.hasOwnProperty('imageblock')){
				var imageblock = lncontent.imageblock[0];
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

		if(countNext == 0)
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
