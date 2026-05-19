var imgpath = $ref + "/images/";
var soundAsset = $ref+"/sounds/"+$lang+"/";

var content=[
	// slide0
	{
		singletext:[
		{
			textclass: "middletext",
			textdata: data.lesson.chapter
		}
	],
	imageblock:[{
		imagestoshow:[
			{
				imgclass: "cover",
				imgid : 'bg1',
				imgsrc: ""
			}
		]
	}]
},
// slide1
{
speechbox:[{
	speechbox: 'sp-1',
	textclass: "answer",
	textdata: data.string.p1text1,
	imgclass: '',
	imgid : 'tb-2',
	imgsrc: '',
	// audioicon: true,
}],
imageblock:[{
	imagestoshow:[
		{
			imgclass: "cover",
			imgid : 'bg2',
			imgsrc: ""
		}
	]
}]
},
// slide2
{
contentblockadditionalclass: "bgcol-1",
vline:[{}],
singletext:[
	{
		textclass: "number",
		textdata: data.string.num1
	},
	{
		textclass: "letter",
		textdata: data.string.let1
	}
],
imageblock:[{
	imagestoshow:[
		{
			imgclass: "handimg",
			imgid : 'hand1',
			imgsrc: ""
		}
	]
}]
},
// slide3
{
contentblockadditionalclass: "bgcol-2",
vline:[{}],
singletext:[
	{
		textclass: "number",
		textdata: data.string.num2
	},
	{
		textclass: "letter",
		textdata: data.string.let2
	}
],
imageblock:[{
	imagestoshow:[
		{
			imgclass: "handimg",
			imgid : 'hand2',
			imgsrc: ""
		}
	]
}]
},
// slide4
{
contentblockadditionalclass: "bgcol-3",
vline:[{}],
singletext:[
	{
		textclass: "number",
		textdata: data.string.num3
	},
	{
		textclass: "letter",
		textdata: data.string.let3
	}
],
imageblock:[{
	imagestoshow:[
		{
			imgclass: "handimg",
			imgid : 'hand3',
			imgsrc: ""
		}
	]
}]
},
// slide5
{
contentblockadditionalclass: "bgcol-4",
vline:[{}],
singletext:[
	{
		textclass: "number",
		textdata: data.string.num4
	},
	{
		textclass: "letter",
		textdata: data.string.let4
	}
],
imageblock:[{
	imagestoshow:[
		{
			imgclass: "handimg",
			imgid : 'hand4',
			imgsrc: ""
		}
	]
}]
},
// slide6
{
contentblockadditionalclass: "bgcol-5",
vline:[{}],
singletext:[
	{
		textclass: "number",
		textdata: data.string.num5
	},
	{
		textclass: "letter",
		textdata: data.string.let5
	}
],
imageblock:[{
	imagestoshow:[
		{
			imgclass: "handimg",
			imgid : 'hand5',
			imgsrc: ""
		}
	]
}]
},
// slide7
{
contentblockadditionalclass: "bgcol-1",
vline:[{}],
singletext:[
	{
		textclass: "number",
		textdata: data.string.num6
	},
	{
		textclass: "letter",
		textdata: data.string.let6
	}
],
imageblock:[{
	imagestoshow:[
		{
			imgclass: "handimg",
			imgid : 'hand6',
			imgsrc: ""
		}
	]
}]
},
// slide8
{
contentblockadditionalclass: "bgcol-2",
vline:[{}],
singletext:[
	{
		textclass: "number",
		textdata: data.string.num7
	},
	{
		textclass: "letter",
		textdata: data.string.let7
	}
],
imageblock:[{
	imagestoshow:[
		{
			imgclass: "handimg",
			imgid : 'hand7',
			imgsrc: ""
		}
	]
}]
},
// slide9
{
contentblockadditionalclass: "bgcol-3",
vline:[{}],
singletext:[
	{
		textclass: "number",
		textdata: data.string.num8
	},
	{
		textclass: "letter",
		textdata: data.string.let8
	}
],
imageblock:[{
	imagestoshow:[
		{
			imgclass: "handimg",
			imgid : 'hand8',
			imgsrc: ""
		}
	]
}]
},
// slide10
{
contentblockadditionalclass: "bgcol-4",
vline:[{}],
singletext:[
	{
		textclass: "number",
		textdata: data.string.num9
	},
	{
		textclass: "letter",
		textdata: data.string.let9
	}
],
imageblock:[{
	imagestoshow:[
		{
			imgclass: "handimg",
			imgid : 'hand9',
			imgsrc: ""
		}
	]
}]
},
// slide11
{
contentblockadditionalclass: "bgcol-5",
vline:[{}],
singletext:[
	{
		textclass: "number",
		textdata: data.string.num10
	},
	{
		textclass: "letter",
		textdata: data.string.let10
	}
],
imageblock:[{
	imagestoshow:[
		{
			imgclass: "handimg",
			imgid : 'hand10',
			imgsrc: ""
		}
	]
}]
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
			{id: "bg1", src: imgpath+"bg01.png", type: createjs.AbstractLoader.IMAGE},
			{id: "bg2", src: imgpath+"bg02.png", type: createjs.AbstractLoader.IMAGE},
			{id: "bg3", src: imgpath+"bg04.png", type: createjs.AbstractLoader.IMAGE},
			{id: "hand1", src: imgpath+"n01.png", type: createjs.AbstractLoader.IMAGE},
			{id: "hand2", src: imgpath+"n02.png", type: createjs.AbstractLoader.IMAGE},
			{id: "hand3", src: imgpath+"n03.png", type: createjs.AbstractLoader.IMAGE},
			{id: "hand4", src: imgpath+"n04.png", type: createjs.AbstractLoader.IMAGE},
			{id: "hand5", src: imgpath+"n05.png", type: createjs.AbstractLoader.IMAGE},
			{id: "hand6", src: imgpath+"n06.png", type: createjs.AbstractLoader.IMAGE},
			{id: "hand7", src: imgpath+"n07.png", type: createjs.AbstractLoader.IMAGE},
			{id: "hand8", src: imgpath+"n08.png", type: createjs.AbstractLoader.IMAGE},
			{id: "hand9", src: imgpath+"n09.png", type: createjs.AbstractLoader.IMAGE},
			{id: "hand10", src: imgpath+"n10.png", type: createjs.AbstractLoader.IMAGE},
			{id: "dog", src: imgpath+"dog.png", type: createjs.AbstractLoader.IMAGE},
			{id: "kid1", src: imgpath+"play01.png", type: createjs.AbstractLoader.IMAGE},
			{id: "kid2", src: imgpath+"play02.png", type: createjs.AbstractLoader.IMAGE},
			{id: "kid3", src: imgpath+"play03.png", type: createjs.AbstractLoader.IMAGE},
			{id: "kid4", src: imgpath+"play04.png", type: createjs.AbstractLoader.IMAGE},
			{id: "kid5", src: imgpath+"play05.png", type: createjs.AbstractLoader.IMAGE},
			{id: "kid6", src: imgpath+"play06.png", type: createjs.AbstractLoader.IMAGE},
			{id: "flower", src: imgpath+"flower.png", type: createjs.AbstractLoader.IMAGE},
			{id: "correct", src: "images/right.png", type: createjs.AbstractLoader.IMAGE},
			{id: "wrong", src: "images/wrongicon.png", type: createjs.AbstractLoader.IMAGE},
			//textboxes
			{id: "tb-2", src: 'images/textbox/white/tl-1.png', type: createjs.AbstractLoader.IMAGE},
			{id: "tb-1", src: 'images/textbox/white/tr-2.png', type: createjs.AbstractLoader.IMAGE},
			// sounds
			{id: "sound_0", src: soundAsset+"p1_s0.mp3"},
			{id: "sound_1", src: soundAsset+"p1_s1.mp3"},
			{id: "s1", src: soundAsset+"1.mp3"},
			{id: "s2", src: soundAsset+"2.mp3"},
			{id: "s3", src: soundAsset+"3.mp3"},
			{id: "s4", src: soundAsset+"4.mp3"},
			{id: "s5", src: soundAsset+"5.mp3"},
			{id: "s6", src: soundAsset+"6.mp3"},
			{id: "s7", src: soundAsset+"7.mp3"},
			{id: "s8", src: soundAsset+"8.mp3"},
			{id: "s9", src: soundAsset+"9.mp3"},
			{id: "s10", src: soundAsset+"10.mp3"},
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
	Handlebars.registerPartial("svgcontent", $("#svgcontent-partial").html());
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
		put_speechbox_image(content, countNext);


		switch(countNext){
			case 0:
			sound_player("sound_0", 1);
			break;
			case 1:
			sound_player("sound_1", 1);
			break;
			case 2:
			sound_player("s1", 1);
			break;
			case 3:
			sound_player("s2", 1);
			break;
			case 4:
			sound_player("s3", 1);
			break;
			case 5:
			sound_player("s4", 1);
			break;
			case 6:
			sound_player("s5", 1);
			break;
			case 7:
			sound_player("s6", 1);
			break;
			case 8:
			sound_player("s7", 1);
			break;
			case 9:
			sound_player("s8", 1);
			break;
			case 10:
			sound_player("s9", 1);
			break;
			case 11:
			sound_player("s10", 1);
			break;
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
	function sound_player(sound_id, next){
		createjs.Sound.stop();
		current_sound = createjs.Sound.play(sound_id);
		current_sound.play();
		current_sound.on('complete', function(){
			if(next)
			navigationcontroller();
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
						// console.log(selector);
						$(selector).attr('src', image_src);
				}
		}
}
	function templateCaller() {
		$prevBtn.css('display', 'none');
		$nextBtn.css('display', 'none');

		//if(countNext == 0)
		//navigationcontroller();

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
