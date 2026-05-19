var imgpath = $ref + "/images/";
var soundAsset = $ref+"/sounds/"+$lang+"/";


var content = [
	//cover
	{
		contentnocenteradjust : true,
		contentblockadditionalclass : "bg",
		extratextblock : [{
			textclass : "diytxt",
			textdata : data.string.diy
		}],
		imageblock:[{
			imagestoshow:[{
				imgclass:"diycover",
				imgid:"diy_bg",
				imgsrc:''
			}]
		}],
	},
	//slide0
	{
		contentnocenteradjust : true,
		contentblockadditionalclass : "bg",
		uppertextblock : [{
			textclass : "toptxt",
			textdata : data.string.p3top
		}],
		imageblock:[{
			imagestoshow:[{
				imgclass:"qn circle",
				imgid:"line1",
				imgsrc:''
			}]
		}],
		exerciseblock : [{
			imageoptions : [{
				imgclass : "class1 cir",
				imgid : 'line1',
				imgsrc : ""
			},{
				imgclass : "rct class2 ",
				imgid : 'rightcrv',
				imgsrc : ""
			},{
				imgclass : "tri class3 ",
				imgid : 'circle',
				imgsrc : ""
			},{
				imgclass : "sqr class4 ",
				imgid : 'line3',
				imgsrc : ""
			}]
		}]
	},
	//slide1
	{
		contentnocenteradjust : true,
		contentblockadditionalclass : "bg",
		uppertextblock : [{
			textclass : "toptxt",
			textdata : data.string.p3top
		}],
		imageblock:[{
			imagestoshow:[{
				imgclass:"qn circle",
				imgid:"line2",
				imgsrc:''
			}]
		}],
		exerciseblock : [{
			imageoptions : [{
				imgclass : "class1 cir",
				imgid : 'line2',
				imgsrc : ""
			},{
				imgclass : "rct class2 ",
				imgid : 'rightcrv',
				imgsrc : ""
			},{
				imgclass : "tri class3 ",
				imgid : 'line3',
				imgsrc : ""
			},{
				imgclass : "sqr class4 ",
				imgid : 'line1',
				imgsrc : ""
			}]
		}]
	},
	//slide2
	{
		contentnocenteradjust : true,
		contentblockadditionalclass : "bg",
		uppertextblock : [{
			textclass : "toptxt",
			textdata : data.string.p3top
		}],
		imageblock:[{
			imagestoshow:[{
				imgclass:"qn circle",
				imgid:"circle",
				imgsrc:''
			}]
		}],
		exerciseblock : [{
			imageoptions : [{
				imgclass : "class1 cir",
				imgid : 'circle',
				imgsrc : ""
			},{
				imgclass : "rct class2 ",
				imgid : 'rightcrv',
				imgsrc : ""
			},{
				imgclass : "tri class3 ",
				imgid : 'leftcrv',
				imgsrc : ""
			},{
				imgclass : "sqr class4 ",
				imgid : 'line1',
				imgsrc : ""
			}]
		}]
	},
	//slide3
	{
		contentnocenteradjust : true,
		contentblockadditionalclass : "bg",
		uppertextblock : [{
			textclass : "toptxt",
			textdata : data.string.p3top
		}],
		imageblock:[{
			imagestoshow:[{
				imgclass:"qn circle",
				imgid:"rightcrv",
				imgsrc:''
			}]
		}],
		exerciseblock : [{
			imageoptions : [{
				imgclass : "class1 cir",
				imgid : 'rightcrv',
				imgsrc : ""
			},{
				imgclass : "rct class2 ",
				imgid : 'line4',
				imgsrc : ""
			},{
				imgclass : "tri class3 ",
				imgid : 'line3',
				imgsrc : ""
			},{
				imgclass : "sqr class4 ",
				imgid : 'circle',
				imgsrc : ""
			}]
		}]
	},
	//slide4
	{
		contentnocenteradjust : true,
		contentblockadditionalclass : "bg",
		uppertextblock : [{
			textclass : "toptxt",
			textdata : data.string.p3top
		}],
		imageblock:[{
			imagestoshow:[{
				imgclass:"qn circle",
				imgid:"line4",
				imgsrc:''
			}]
		}],
		exerciseblock : [{
			imageoptions : [{
				imgclass : "class1 cir",
				imgid : 'line4',
				imgsrc : ""
			},{
				imgclass : "rct class2 ",
				imgid : 'rightcrv',
				imgsrc : ""
			},{
				imgclass : "tri class3 ",
				imgid : 'line3',
				imgsrc : ""
			},{
				imgclass : "sqr class4 ",
				imgid : 'circle',
				imgsrc : ""
			}]
		}]
	},
	//slide5
	{
		contentnocenteradjust : true,
		contentblockadditionalclass : "bg",
		uppertextblock : [{
			textclass : "toptxt",
			textdata : data.string.p3top
		}],
		imageblock:[{
			imagestoshow:[{
				imgclass:"qn circle",
				imgid:"leftcrv",
				imgsrc:''
			}]
		}],
		exerciseblock : [{
			imageoptions : [{
				imgclass : "class1 cir",
				imgid : 'leftcrv',
				imgsrc : ""
			},{
				imgclass : "rct class2 ",
				imgid : 'rightcrv',
				imgsrc : ""
			},{
				imgclass : "tri class3 ",
				imgid : 'circle',
				imgsrc : ""
			},{
				imgclass : "sqr class4 ",
				imgid : 'line1',
				imgsrc : ""
			}]
		}]
	}
];

//content.shufflearray();
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
			{id: "circle", src: imgpath+"circle.png", type: createjs.AbstractLoader.IMAGE},
			{id: "leftcrv", src: imgpath+"left-curve.png", type: createjs.AbstractLoader.IMAGE},
			{id: "slant", src: imgpath+"lp.png", type: createjs.AbstractLoader.IMAGE},
			{id: "rightcrv", src: imgpath+"right-curve.png", type: createjs.AbstractLoader.IMAGE},
			{id: "line1", src: imgpath+"line01.png", type: createjs.AbstractLoader.IMAGE},
			{id: "line2", src: imgpath+"line02.png", type: createjs.AbstractLoader.IMAGE},
			{id: "line3", src: imgpath+"line03.png", type: createjs.AbstractLoader.IMAGE},
			{id: "line4", src: imgpath+"line04.png", type: createjs.AbstractLoader.IMAGE},
			{id: "diy_bg", src: imgpath+"bg07.png", type: createjs.AbstractLoader.IMAGE},

			{id: "tb-2", src: 'images/textbox/white/tl-1.png', type: createjs.AbstractLoader.IMAGE},
			{id: "tb-1", src: 'images/textbox/white/tr-2.png', type: createjs.AbstractLoader.IMAGE},
			// sounds
			{id: "sound_1", src: soundAsset+"p3_s1.mp3"},
			{id: "sound_2", src: soundAsset+"p3_s2.mp3"},

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
		var currentSound;
		//tick qns start
		var wrngClicked = false;
		var corrCounter=0;

		var parent = $(".optionsdiv");
		var divs = parent.children();
		//console.log("length--"+divs.length);
		while (divs.length) {
	    	parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
		}

$(".buttonsel").click(function(){
		/*class 1 is always for the right answer. updates scoreboard and disables other click if
		right answer is clicked*/

		if(($(this).hasClass("class1")) && ($(this).hasClass("forhoverimg")))
		{
			$(".buttonsel").removeClass("forhoverimg");
			$(this).siblings(".corctopt").show(0);
			 play_correct_incorrect_sound(1);
					$(this).parent().addClass("blink");
					$(".qn").addClass("blink");
					// var parent = $(this).parent();
					// var g_par = $(this).parent().parent();
					// var par_pos = parent.position();
					// var g_pos = g_par.position();
					// $(".qn").animate({
					// 	left:par_pos.left,
					// 	top:g_pos.top,
					// },1000);
					nav_button_controls();
		}
		else {
		 if((! $(this).hasClass("class1")) &&($(this).hasClass("forhoverimg")))
		 {
 	    	$(this).removeClass("forhoverimg");
				$(this).siblings(".wrngopt").show(0);
				play_correct_incorrect_sound();
				wrngClicked = true;
     }
		}

	});

//tick qns end

	switch(countNext){
			case 0:
			sound_player("sound_1");
			break;
			case 1:
			sound_player("sound_2");
			break;
			case 2:
			break;
			case 3:
			break;
			case 4:
			break;
		}

	}
	function nav_button_controls(delay_ms){
		timeoutvar = setTimeout(function(){
			if(countNext==0){
				$nextBtn.show(0);
			} else if( countNext>0 && countNext == $total_page-1){
				$prevBtn.show(0);
				ole.footerNotificationHandler.lessonEndSetNotification();
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
		// current_sound.on("complete", function(){
		// 	navigationcontroller();
		// });
	}

	function sound_player_duo(sound_id, sound_id_2){
		createjs.Sound.stop();
		current_sound = createjs.Sound.play(sound_id);
		//current_sound_2 = createjs.Sound.play(sound_id_2);
		current_sound.play();
		current_sound.on('complete', function(){
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
		if(content[count].hasOwnProperty('exerciseblock')){
			var lncontent = content[count].exerciseblock[0];
				if(lncontent.hasOwnProperty('imageoptions')){
					var imageClass = lncontent.imageoptions;
					for(var i=0; i<imageClass.length; i++){
						var image_src = preload.getResult(imageClass[i].imgid).src;
						//get list of classes
						// console.log(image_src)
						var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
						var selector = ('.'+classes_list[classes_list.length-1]);
						// console.log(selector)
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
