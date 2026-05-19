var imgpath = $ref + "/images/";
var soundAsset = $ref+"/audio_en/";

var content=[
	// slide0
	{
		uppertextblock:[{
			textclass:'top_text',
			textdata:data.string.p2text1
		},{
			textclass:'text_1',
			textdata:data.string.p2text2
		},
		{
			textclass:'text_2',
			textdata:data.string.p2text3
		},
		{
			textclass:'text_3',
			textdata:data.string.p2text5
		}],
		imageblock:[{
			imagestoshow:[{
				imgclass:'cat1',
				imgid:'hat'
			}]
		}]
	},
	// slide1
	{
		uppertextblock:[{
			textclass:'top_text',
			textdata:data.string.p2text1
		},{
			textclass:'text_1',
			textdata:data.string.p2text2
		},
		{
			textclass:'text_2',
			textdata:data.string.p2text3
		},
		{
			textclass:'text_3',
			textdata:data.string.p2text4
		}],
		imageblock:[{
			imagestoshow:[{
				imgclass:'cat1',
				imgid:'cat'
			}]
		}]
	},
	// slide2
	{
		uppertextblock:[{
			textclass:'top_text',
			textdata:data.string.p2text1
		},{
			textclass:'text_1',
			textdata:data.string.p2text2
		},
		{
			textclass:'text_2',
			textdata:data.string.p2text3a
		},
		{
			textclass:'text_3',
			textdata:data.string.p2text6
		}],
		imageblock:[{
			imagestoshow:[{
				imgclass:'cat1',
				imgid:'pan'
			}]
		}]
	},
	// slide3
	{
		uppertextblock:[{
			textclass:'top_text',
			textdata:data.string.p2text1
		},{
			textclass:'text_1',
			textdata:data.string.p2text2
		},
		{
			textclass:'text_2',
			textdata:data.string.p2text3b
		},
		{
			textclass:'text_3',
			textdata:data.string.p2text7
		}],
		imageblock:[{
			imagestoshow:[{
				imgclass:'cat1',
				imgid:'tap'
			}]
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
			{id: "cat", src: imgpath+"cat.png", type: createjs.AbstractLoader.IMAGE},
			{id: "hat", src: imgpath+"hat.png", type: createjs.AbstractLoader.IMAGE},
			{id: "pan", src: imgpath+"pan.png", type: createjs.AbstractLoader.IMAGE},
			{id: "tap", src: imgpath+"tap.png", type: createjs.AbstractLoader.IMAGE},
			//textboxes
			{id: "tb-2", src: 'images/textbox/white/tl-1.png', type: createjs.AbstractLoader.IMAGE},
			{id: "tb-1", src: 'images/textbox/white/lb-1.png', type: createjs.AbstractLoader.IMAGE},
			// sounds
			{id: "sound_a", src: soundAsset+"a.mp3"},
			{id: "sound_at", src: soundAsset+"at.mp3"},
			{id: "sound_ap", src: soundAsset+"ap.mp3"},
			{id: "sound_an", src: soundAsset+"an.mp3"},
			{id: "sound_hat", src: soundAsset+"hat.mp3"},
			{id: "sound_cat", src: soundAsset+"cat.mp3"},
			{id: "sound_tap", src: soundAsset+"tap.mp3"},
			{id: "sound_pan", src: soundAsset+"pan.mp3"},
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
		put_image(content, countNext);
		put_image1(content, countNext);
		put_speechbox_image(content, countNext);
		switch(countNext) {
			case 0:
				$( ".text_1,.text_2,.text_3").hide(0);
				$('.text_1').fadeIn(500);
				sound_player('sound_a','.text_1');
				$('.text_2').delay(1000).fadeIn(500);
				setTimeout(function(){
					sound_player('sound_at','.text_2');
				},1000);
				$('.text_3').delay(2000).fadeIn(500);
				setTimeout(function(){
					sound_player('sound_hat','.text_3');
				},2000);
				nav_button_controls(4000);
				break;
			case 1:
				$( ".text_1,.text_2,.text_3").hide(0);
				$('.text_1').fadeIn(500);
				sound_player('sound_a','.text_1');
				$('.text_2').delay(1000).fadeIn(500);
				setTimeout(function(){
					sound_player('sound_at','.text_2');
				},1000);
				$('.text_3').delay(2000).fadeIn(500);
				setTimeout(function(){
					sound_player('sound_cat','.text_3');
				},2000);
				nav_button_controls(4000);
				break;
			case 2:
				$( ".text_1,.text_2,.text_3").hide(0);
				$('.text_1').fadeIn(500);
				sound_player('sound_a','.text_1');
				$('.text_2').delay(1000).fadeIn(500);
				setTimeout(function(){
					sound_player('sound_an','.text_2');
				},1000);
				$('.text_3').delay(2000).fadeIn(500);
				setTimeout(function(){
					sound_player('sound_pan','.text_3');
				},2000);
				nav_button_controls(4000);
				break;
			case 3:
				$( ".text_1,.text_2,.text_3").hide(0);
				$('.text_1').fadeIn(500);
				sound_player('sound_a','.text_1');
				$('.text_2').delay(1000).fadeIn(500);
				setTimeout(function(){
					sound_player('sound_ap','.text_2');
				},1000);
				$('.text_3').delay(2000).fadeIn(500);
				setTimeout(function(){
					sound_player('sound_tap','.text_3');
				},2000);
				nav_button_controls(4000);
				break;
		}
	}

	function sound_player(sound_id,click_class){
		createjs.Sound.stop();
		var current_sound = createjs.Sound.play(sound_id);
		current_sound.play();
		current_sound.on("complete", function(){
			if(typeof click_class != 'undefined'){
				$(click_class).click(function(){
					current_sound.play();
				});
			}
			// nav_button_controls(1000);
		});
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

	function put_image1(content, count){
		if(content[count].hasOwnProperty('divblock')){
			var divblock = content[count].divblock;
				for(var i=0; i<divblock.length; i++){
					var image_src = preload.getResult(divblock[i].imgid).src;
					//get list of classes
					var classes_list = divblock[i].imgclass.match(/\S+/g) || [];
					var selector = ('.'+classes_list[classes_list.length-1]);
					$(selector).attr('src', image_src);
				}
		}
	}



	function put_speechbox_image(content, count){
		if(content[count].hasOwnProperty('speechbox')){
			var speechbox = content[count].speechbox;
			for(var i=0; i<speechbox.length; i++){
				var image_src = preload.getResult(speechbox[i].imgid).src;
				console.log(image_src);
				var selector = ('.'+speechbox[i].speechbox+'>.speechbg');
				$(selector).attr('src', image_src);
			}
		}
	}
	function templateCaller() {
		$prevBtn.css('display', 'none');
		$nextBtn.css('display', 'none');

		navigationcontroller();

		loadTimelineProgress($total_page, countNext + 1);
		generaltemplate();
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
