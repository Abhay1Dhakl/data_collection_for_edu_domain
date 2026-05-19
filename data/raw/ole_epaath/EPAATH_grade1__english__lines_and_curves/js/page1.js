var imgpath = $ref + "/images/SVG/";
var soundAsset = $ref+"/sounds/"+$lang+"/";

var content=[
// slide0
	{
		contentblockadditionalclass: 'bg cover',
		extratextblock:[{
			textdata:data.lesson.chapter,
			textclass:"coverpagetxt"
		}],
	imageblock:[{
		imagestoshow:[
			{
				imgclass: "cover_image",
				imgid : 'cover_image',
				imgsrc: ""
			}
		]
	}]
	},
	// slide1
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'bg blue',
		extratextblock:[{
			textdata: data.string.p1title,
			textclass: "topltr",
		},{
			textdata: data.string.slpln,
			textclass: "btmltr ltr-1",
		},{
			textdata: data.string.stdln,
			textclass: "btmltr ltr-2",
		},{
			textdata: data.string.rsln,
			textclass: "btmltr ltr-3",
		},{
			textdata: data.string.lsln,
			textclass: "btmltr ltr-4",
		}
		],
		svgblock: [{
			svgblock: 'line-svg-1',
		}],
	},
	//slide2
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'bg blue',
		extratextblock:[{
			textdata: data.string.p1title,
			textclass: "topltr",
		},{
			textdata: data.string.slpln,
			textclass: "btmltr ltr-1",
		},{
			textdata: data.string.stdln,
			textclass: "btmltr ltr-2",
		},{
			textdata: data.string.rsln,
			textclass: "btmltr ltr-3",
		},{
			textdata: data.string.lsln,
			textclass: "btmltr ltr-4",
		}
		],
		svgblock: [{
			svgblock: 'line-svg-2',
		}],
	},
	//slide3
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'bg blue',extratextblock:[{
			textdata: data.string.p1last,
			textclass: "topltr",
		}
	],
		imageblock:[{
			imagestoshow:[{
				imgclass:"shape l1",
				imgid:'line1',
				imgsrc:" "
			},{
				imgclass:"shape l2",
				imgid:'line2',
				imgsrc:" "
			},{
				imgclass:"shape l3",
				imgid:'line3',
				imgsrc:" "
			},{
				imgclass:"shape l4",
				imgid:'line4',
				imgsrc:" "
			},{
				imgclass:"shape l5",
				imgid:'leftcrv',
				imgsrc:" "
			},{
				imgclass:"shape l6",
				imgid:'rightcrv',
				imgsrc:" "
			},{
				imgclass:"circle l7",
				imgid:'circle_n',
				imgsrc:" "
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
			{id: "line1", src: $ref + "/images/"+"line01.png", type: createjs.AbstractLoader.IMAGE},
			{id: "line2", src: $ref + "/images/"+"line02.png", type: createjs.AbstractLoader.IMAGE},
			{id: "line3", src: $ref + "/images/"+"line03.png", type: createjs.AbstractLoader.IMAGE},
			{id: "line4", src: $ref + "/images/"+"line04.png", type: createjs.AbstractLoader.IMAGE},
			{id: "leftcrv", src: $ref + "/images/"+"left-curve.png", type: createjs.AbstractLoader.IMAGE},
			{id: "rightcrv", src: $ref + "/images/"+"right-curve.png", type: createjs.AbstractLoader.IMAGE},
			{id: "circle_n", src: $ref + "/images/"+"circle.png", type: createjs.AbstractLoader.IMAGE},
			{id: "cover_image", src: $ref + "/images/"+"lp_n.png", type: createjs.AbstractLoader.IMAGE},

			{id: "line", src: imgpath+"pencil and line_1.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "circle", src: imgpath+"circle.svg", type: createjs.AbstractLoader.IMAGE},
			// sounds
			{id: "sound_0", src: soundAsset+"p1_s0.mp3"},
			{id: "sound_1", src: soundAsset+"p1_s2.mp3"},
			{id: "sound_3", src: soundAsset+"p1_s4.mp3"},
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
	 var intervalcontroller;
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
		var svgtoload;
		var lineCount;

				// var count=0;
				function svganm(iteration, id){
				var s= Snap('#line-svg-'+countNext);
				var svg = Snap.load(preload.getResult(id).src, function ( loadedFragment ) {
				s.append(loadedFragment);
					function self(count, iteration){
							var pencil=Snap.select("#pencil");
							var path = Snap.select('#path'+count);
							var anim_path 	= path.attr('path');
							var path_length	= Snap.path.getTotalLength(anim_path);
							var last_point	= Snap.path.getPointAtLength(path_length);
							var timetemp = path_length*3;
							path.attr({'display':'block','stroke-dashoffset': path_length, 'stroke-dasharray': path_length});

							Snap.animate(0, path_length, function(step) {
									path.attr({'stroke-dashoffset': (path_length-step)});
								var moveToPoint = Snap.path.getPointAtLength(anim_path, step);
								if(countNext == 1){
								var x = moveToPoint.x - 1290.391;
								var y = moveToPoint.y - 676.616;
								}
								else if(countNext == 2){
									var x = moveToPoint.x - 1500.391;
									var y = moveToPoint.y - 370.616;
								}
								pencil.transform('translate(' + x + ',' + y + ') rotate(20 1300 665)');
							}, timetemp, mina.easeinout, function() {
									// ship_move_up();
								});
						 setTimeout(function(){
									if (count <= iteration){
											if(countNext == 2){
												setTimeout(function(){
													count++;
											 		self(count,iteration);
												},1000);
											}
											else{
												count++;
												self(count,iteration);
											}
									}
								else{
											nav_button_controls(0);
								}
								},2000);
					}
					self(1, iteration);
				});
			}
			function showline(lnCnt){
				$(".l"+lnCnt).css({display:'block'});
				lnCnt++;
				if(lnCnt<=7){
						setTimeout(function(){
						showline(lnCnt);
					},1000);
				}
				else{
						nav_button_controls(0);
				}
			}
		switch(countNext) {
			case 0:
					sound_nav("sound_0");
			 break;
			case 1:
				createjs.Sound.stop();
				current_sound = createjs.Sound.play("sound_1");
				current_sound.on('complete', function(){
				svgtoload ="line";
				svganm(4, svgtoload);
				});
			setTimeout(function(){
						nav_button_controls();
			},12000);
			break;
			case 2:
			svgtoload ="circle";
			svganm(3, svgtoload);
			setTimeout(function(){
					nav_button_controls(0);
			},11000);
			break;
			case 3:
				createjs.Sound.stop();
				current_sound = createjs.Sound.play("sound_3");
				current_sound.on('complete', function(){
					var lineCount=1;
					showline(lineCount);
				});
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
		clearInterval(intervalcontroller);
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
		clearInterval(intervalcontroller);
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
