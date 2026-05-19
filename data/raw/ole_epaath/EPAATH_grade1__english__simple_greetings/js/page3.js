var soundAsset = $ref+"/audio_en/";
var imgpath = $ref+"/images/page03/";
var imgpath1 = $ref+"/images/";


var content=[


	// slide1
	{
		// contentblockadditionalclass: 'purplebg',
		imageblock:[{
			imagestoshow:[{
				imgclass:'bg_full',
				imgid:'p03'
			}]
		}],
			speechbox:[{
				speechbox: 'sp-1',
				textdata : data.string.p3text1,
				imgclass: 'flipped-h',
				textclass : 'text_inside',
				imgid : 'sp-dialogue1',
				imgsrc: '',
				// audioicon: true,
			}],
	},

	// slide2
	{
		// contentblockadditionalclass: 'purplebg',
		imageblock:[{
			imagestoshow:[{
				imgclass:'bg_full',
				imgid:'p04'
			}]
		}],
			speechbox:[{
				speechbox: 'sp-2',
				textdata : data.string.p3text2,
				imgclass: 'flipped-h',
				textclass : 'text_inside',
				imgid : 'sp-dialogue2',
				imgsrc: '',
				// audioicon: true,
			}],
	},

	// slide3
	{
		// contentblockadditionalclass: 'purplebg',
		imageblock:[{
			imagestoshow:[{
				imgclass:'bg_full',
				imgid:'p03'
			}]
		}],
			speechbox:[{
				speechbox: 'sp-1',
				textdata : data.string.p3text3,
				imgclass: 'flipped-h',
				textclass : 'text_inside',
				imgid : 'sp-dialogue1',
				imgsrc: '',
				// audioicon: true,
			}],
	},

	// slide4
	{
		// contentblockadditionalclass: 'purplebg',
		imageblock:[{
			imagestoshow:[{
				imgclass:'bg_full',
				imgid:'p04'
			}]
		}],
			speechbox:[{
				speechbox: 'sp-2',
				textdata : data.string.p3text4,
				imgclass: 'flipped-h',
				textclass : 'text_inside',
				imgid : 'sp-dialogue2',
				imgsrc: '',
				// audioicon: true,
			}],
	},

	// slide5
	{
		// contentblockadditionalclass: 'purplebg',
		imageblock:[{
			imagestoshow:[{
				imgclass:'bg_full',
				imgid:'p03'
			}]
		}],
			speechbox:[{
				speechbox: 'sp-1',
				textdata : data.string.p3text5,
				imgclass: 'flipped-h',
				textclass : 'text_inside',
				imgid : 'sp-dialogue1',
				imgsrc: '',
				// audioicon: true,
			}],
	},

	// slide6
	{
		// contentblockadditionalclass: 'purplebg',
		imageblock:[{
			imagestoshow:[{
				imgclass:'bg_full',
				imgid:'p04'
			}]
		}],
			speechbox:[{
				speechbox: 'sp-2',
				textdata : data.string.p3text6,
				imgclass: 'flipped-h',
				textclass : 'text_inside',
				imgid : 'sp-dialogue2',
				imgsrc: '',
				// audioicon: true,
			}],
	},

	// slide7
	{
		// contentblockadditionalclass: 'purplebg',
		imageblock:[{
			imagestoshow:[{
				imgclass:'bg_full',
				imgid:'p05'
			}]
		}],
			speechbox:[{
				speechbox: 'sp-1',
				textdata : data.string.p3text7,
				imgclass: 'flipped-h',
				textclass : 'text_inside',
				imgid : 'sp-dialogue1',
				imgsrc: '',
				// audioicon: true,
			}],
	},

	// slide8
	{
		// contentblockadditionalclass: 'purplebg',
		imageblock:[{
			imagestoshow:[{
				imgclass:'bg_full',
				imgid:'p06'
			}]
		}],
			speechbox:[{
				speechbox: 'sp-2',
				textdata : data.string.p3text8,
				imgclass: 'flipped-h',
				textclass : 'text_inside',
				imgid : 'sp-dialogue2',
				imgsrc: '',
				// audioicon: true,
			}],
	},


];


$(function () {
	var $board = $('.board');
	var $nextBtn = $("#activity-page-next-btn-enabled");
	var $prevBtn = $("#activity-page-prev-btn-enabled");
  var $refreshBtn= $("#activity-page-refresh-btn");
	var countNext = 0;
	var colors = ['green','pink','orange','yellow','purple','lightgreen'];
	var shuffledcolors=colors.shufflearray();
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
			{id: "p01", src: imgpath+"p3-01.png", type: createjs.AbstractLoader.IMAGE},
			{id: "p02", src: imgpath+"p3-02.png", type: createjs.AbstractLoader.IMAGE},
			{id: "p03", src: imgpath+"p3-03.png", type: createjs.AbstractLoader.IMAGE},
			{id: "p04", src: imgpath+"p3-04.png", type: createjs.AbstractLoader.IMAGE},
			{id: "p05", src: imgpath+"p3-05.png", type: createjs.AbstractLoader.IMAGE},
			{id: "p06", src: imgpath+"p3-06.png", type: createjs.AbstractLoader.IMAGE},
			{id: "sp-dialogue1", src: imgpath1+"speechbubble-02.png", type: createjs.AbstractLoader.IMAGE},
			{id: "sp-dialogue2", src: imgpath1+"numa-12.png", type: createjs.AbstractLoader.IMAGE},
			//textboxesp01
			// {id: "coverpage", src: imgpath+'coverpage.png', type: createjs.AbstractLoader.IMAGE},
			// {id: "icon-orange", src: imgpath+'icon-orange.png', type: createjs.AbstractLoader.IMAGE},
			// // soundsicon-orange
			{id: "sound_1", src: soundAsset+"S3_P1.mp3"},
			{id: "sound_2", src: soundAsset+"s3_p2.mp3"},
			{id: "sound_3", src: soundAsset+"S3_P3.mp3"},
			{id: "sound_4", src: soundAsset+"s3_p4.mp3"},
			{id: "sound_5", src: soundAsset+"S3_P5.mp3"},
			{id: "sound_6", src: soundAsset+"s3_p6.mp3"},
			{id: "sound_7", src: soundAsset+"S3_P7.mp3"},
			{id: "sound_8", src: soundAsset+"s3_p8.mp3"}
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
		put_speechbox_image(content, countNext);

		sound_player('sound_'+(countNext+1));
		switch(countNext) {
				case 0:
				case 2:
				case 4:
				case 6:
				$('.sp-1').css('left','29%');
				break;
				
				case 1:
				case 3:
				case 5:
				case 7:
				$('.sp-2').css({'left':'38%',
											'top': '15%'});
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
		current_sound.on("complete", function(){
			if(typeof click_class != 'undefined'){
				$(click_class).click(function(){
					current_sound.play();
				});
			}
			nav_button_controls(1000);
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
