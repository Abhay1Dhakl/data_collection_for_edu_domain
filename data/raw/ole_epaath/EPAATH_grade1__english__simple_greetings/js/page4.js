var imgpath = $ref + "/images/diy/";
var soundAsset = $ref+"/audio_en/";

var content=[

	// slide0
	{
		uppertextblock:[{
			textclass:'diy_text',
			textdata:data.string.diytext
		}],
		imageblock:[{
			imagestoshow:[{
				imgclass:'bg_full',
				imgid:'diy_bg'
			}]
		}]
	},

	// slide1
	{
		contentblockadditionalclass:'pink',
		uppertextblock:[{
			textclass:'top_text',
			textdata:data.string.p4text1
		},{
			textclass:'main_ques',
			textdata:data.string.p4text2
		}],
		imageblock:[{
			imagestoshow:[{
				imgclass:'option1 correct',
				imgid:'d01'
			},
			{
				imgclass:'option2',
				imgid:'d02'
			},
			{
				imgclass:'option3',
				imgid:'d03'
			}]
		}]
	},

	// slide2
	{
		contentblockadditionalclass:'purple',
		uppertextblock:[{
			textclass:'top_text',
			textdata:data.string.p4text1
		},{
			textclass:'main_ques',
			textdata:data.string.p4text3
		}],
		imageblock:[{
			imagestoshow:[{
				imgclass:'option1',
				imgid:'d04'
			},
			{
				imgclass:'option2 ',
				imgid:'d05'
			},
			{
				imgclass:'option3 correct',
				imgid:'d06'
			}]
		}]
	},

	// slide3
	{
		contentblockadditionalclass:'purple2',
		uppertextblock:[{
			textclass:'top_text bgcolor1',
			textdata:data.string.p4text1
		},{
			textclass:'main_ques',
			textdata:data.string.p4text4
		}],
		imageblock:[{
			imagestoshow:[{
				imgclass:'option1 correct',
				imgid:'d07'
			},
			{
				imgclass:'option2 ',
				imgid:'d08'
			},
			{
				imgclass:'option3 ',
				imgid:'d09'
			}]
		}]
	},

	// slide4
	{
		contentblockadditionalclass:'cream',
		uppertextblock:[{
			textclass:'top_text bgcolor2',
			textdata:data.string.p4text1
		},{
			textclass:'main_ques',
			textdata:data.string.p4text5
		}],
		imageblock:[{
			imagestoshow:[{
				imgclass:'option1 ',
				imgid:'d10'
			},
			{
				imgclass:'option2 correct',
				imgid:'d11'
			},
			{
				imgclass:'option3 ',
				imgid:'d12'
			}]
		}]
	},

	// slide5
	{
		contentblockadditionalclass:'bluish',
		uppertextblock:[{
			textclass:'top_text bgcolor3',
			textdata:data.string.p4text1
		},{
			textclass:'main_ques',
			textdata:data.string.p4text6
		}],
		imageblock:[{
			imagestoshow:[{
				imgclass:'option1 ',
				imgid:'d13'
			},
			{
				imgclass:'option2 correct',
				imgid:'d14'
			},
			{
				imgclass:'option3 ',
				imgid:'d15'
			}]
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
			{id: "diy_bg", src: imgpath+"a_08.png", type: createjs.AbstractLoader.IMAGE},
			{id: "d01", src: imgpath+"d01.png", type: createjs.AbstractLoader.IMAGE},
			{id: "d02", src: imgpath+"d02.png", type: createjs.AbstractLoader.IMAGE},
			{id: "d03", src: imgpath+"d03.png", type: createjs.AbstractLoader.IMAGE},
			{id: "d04", src: imgpath+"d04.png", type: createjs.AbstractLoader.IMAGE},
			{id: "d05", src: imgpath+"d05.png", type: createjs.AbstractLoader.IMAGE},
			{id: "d06", src: imgpath+"d06.png", type: createjs.AbstractLoader.IMAGE},
			{id: "d07", src: imgpath+"d07.png", type: createjs.AbstractLoader.IMAGE},
			{id: "d08", src: imgpath+"d08.png", type: createjs.AbstractLoader.IMAGE},
			{id: "d09", src: imgpath+"d09.png", type: createjs.AbstractLoader.IMAGE},
			{id: "d10", src: imgpath+"d10.png", type: createjs.AbstractLoader.IMAGE},
			{id: "d11", src: imgpath+"d11.png", type: createjs.AbstractLoader.IMAGE},
			{id: "d12", src: imgpath+"d12.png", type: createjs.AbstractLoader.IMAGE},
			{id: "d13", src: imgpath+"d13.png", type: createjs.AbstractLoader.IMAGE},
			{id: "d14", src: imgpath+"d14.png", type: createjs.AbstractLoader.IMAGE},
			{id: "d15", src: imgpath+"d15.png", type: createjs.AbstractLoader.IMAGE},
			//textboxes
			{id: "tb-2", src: 'images/textbox/white/tl-1.png', type: createjs.AbstractLoader.IMAGE},
			{id: "tb-1", src: 'images/textbox/white/lb-1.png', type: createjs.AbstractLoader.IMAGE},
			// sounds
			{id: "sound_1", src: soundAsset+"S4_P1.mp3"},
			{id: "sound_2", src: soundAsset+"S4_P2.mp3"},
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


		$('.option1,.option2,.option3').click(function(){
			createjs.Sound.stop();
			if($(this).hasClass('correct')){
				var $this = $(this);
				var position = $this.position();
				var width = $this.width();
				var height = $this.height();
				var centerX = ((position.left + width / 2)*100)/$('.coverboardfull').width()+'%';
				var centerY = (100-((position.top + height)*100)/$('.coverboardfull').height())+'%';
				$(this).css('border-color','#EEFF41');
				$('.option1,.option2,.option3').css('pointer-events','none');
				$('<img style="left:'+centerX+';bottom:'+centerY+';position:absolute;height:5%;transform:translate(261%,-523%);z-index:2;" src="'+imgpath +'correct.png" />').insertAfter(this);
				play_correct_incorrect_sound(1);
				nav_button_controls(100);
			}
			else{
				var $this = $(this);
				var position = $this.position();
				var width = $this.width();
				var height = $this.height();
				var centerX = ((position.left + width / 2)*100)/$('.coverboardfull').width()+'%';
				var centerY = (100-((position.top + height)*100)/$('.coverboardfull').height())+'%';
				$(this).css('border-color','#DD7E6B');
				$(this).css('pointer-events','none');
				$('<img style="left:'+centerX+';bottom:'+centerY+';position:absolute;height:5%;transform:translate(261%,-523%);z-index:2;" src="'+imgpath +'incorrect.png" />').insertAfter(this);
				play_correct_incorrect_sound(0);
			}
		});

		switch (countNext) {
			case 0:
				sound_player('sound_1');
				nav_button_controls(2500);
				break;
				case 1:
				createjs.Sound.stop();
				var current_sound = createjs.Sound.play('sound_2');
				current_sound.play();
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
