var imgpath = $ref + "/images/";
var soundAsset = $ref + "/sounds/";

var jspath = $ref + "/js/";

var content = [
    // slide0
    {
        contentnocenteradjust: true,
        contentblockadditionalclass: "bg1",
        uppertextblockadditionalclass:"titlecls",
        uppertextblock:[
            {
                textclass: "clickImage",
                textdata: data.string.clickmsg
            }
        ],
        imageblock:[{
            imagestoshow:[
                {
                    imgdiv:"bgForPotDiv",
                    imgclass: "generalchild bgForPot",
                    imgid : 'potImg',
                    imgsrc: "",
                    audioicon:true
                },
                {
                    imgdiv:"div1",
                    imgclass: "generalchild audioicon1",
                    imgid: "audioicon",
                    imgsrc: "",
                },
                {
                    imgdiv:"alphadiv1",
                    imgclass: "generalchild audioicon2",
                    imgid: "audioicon",
                    imgsrc: "",
                    imgtxt:[{
                        txt:data.string.p,
                        txtclass:"alphabetAnim"
                    }]
                },
                {
                    imgdiv:"alphadiv2",
                    imgclass: "generalchild audioicon3",
                    imgid: "audioicon",
                    imgsrc: "",
                    imgtxt:[{
                        txt:data.string.o,
                        txtclass:"alphabetAnim"
                    }]
                },
                {
                    imgdiv:"alphadiv3",
                    imgclass: "generalchild audioicon4",
                    imgid: "audioicon",
                    imgsrc: "",
                    imgtxt:[{
                        txt:data.string.t,
                        txtclass:"alphabetAnim"
                    }]
                }
            ]
        }]
    },

    //slide 1
    {
        contentnocenteradjust: true,
        contentblockadditionalclass: "bg2",
        uppertextblockadditionalclass:"titlecls",
        uppertextblock:[
            {
                textclass: "clickImage",
                textdata: data.string.clickmsg
            }
        ],
        imageblock:[{
            imagestoshow:[
                {
                    imgdiv:"imagegeneraldiv bgForCotDiv",
                    imgclass: "generalchild bgForCot",
                    imgid : 'cotImg',
                    imgsrc: "",
                    audioicon:true
                },
                {
                    imgdiv:"div1",
                    imgclass: "generalchild audioicon1",
                    imgid: "audioicon",
                    imgsrc: "",
                },
                {
                    imgdiv:"alphadiv1",
                    imgclass: "generalchild audioicon2",
                    imgid: "audioicon",
                    imgsrc: "",
                    imgtxt:[{
                        txt:data.string.c,
                        txtclass:"alphabetAnim"
                    }]
                },
                {
                    imgdiv:"alphadiv2",
                    imgclass: "generalchild audioicon3",
                    imgid: "audioicon",
                    imgsrc: "",
                    imgtxt:[{
                        txt:data.string.o,
                        txtclass:"alphabetAnim"
                    }]
                },
                {
                    imgdiv:"alphadiv3",
                    imgclass: "generalchild audioicon4",
                    imgid: "audioicon",
                    imgsrc: "",
                    imgtxt:[{
                        txt:data.string.t,
                        txtclass:"alphabetAnim"
                    }]
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
    loadTimelineProgress($total_page, countNext + 1);

    var preload;
    var timeoutvar = null;
    var current_sound;
    var alphabetSeq = new AlphabetSeq();
    var vocabcontroller =  new Vocabulary();
    vocabcontroller.init();
    function init() {
        //specify type otherwise it will load assests as XHR
        manifest = [
            // {id: "common-css", src: $ref + "css/common.css", type: createjs.AbstractLoader.CSS},
            // {id: "page2-css", src: $ref + "css/page2.css", type: createjs.AbstractLoader.CSS},
            // // images
            {id: "potImg", src: imgpath+"pot.png", type: createjs.AbstractLoader.IMAGE},
            {id: "cotImg", src: imgpath+"cot.png", type: createjs.AbstractLoader.IMAGE},
            {id: "audioicon", src: "images/speaker.png", type: createjs.AbstractLoader.IMAGE},

            // sounds
             {id: "sound_0", src: soundAsset+"POT.mp3"},
             {id: "sound_1", src: soundAsset+"p4_s0_0.mp3"},
             {id: "sound_2", src: soundAsset+"p4_s0_1.mp3"},
             {id: "sound_3", src: soundAsset+"p4_s0_2.mp3"},
             {id: "sound_4", src: soundAsset+"p4_s1_0.mp3"},
             {id: "sound_5", src: soundAsset+"p4_s1_1.mp3"},
             {id: "sound_6", src: soundAsset+"p4_s1_2.mp3"},
             {id: "sound_20", src: soundAsset+"p1_s2_0.mp3"},
             {id: "sound_7", src: soundAsset+"COT.mp3"},
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
        $('#loading-text').html(parseInt(event.loaded * 100) + '%');
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
            $.each($alltextpara, function (index, val) {
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
        typeof islastpageflag === "undefined" ?
            islastpageflag = false :
            typeof islastpageflag != 'boolean' ?
                alert("NavigationController : Hi Master, please provide a boolean parameter") :
                null;

        if (countNext == 0 && $total_page != 1) {
            $nextBtn.show(0);
            $prevBtn.css('display', 'none');
        }
        else if ($total_page == 1) {
            $prevBtn.css('display', 'none');
            $nextBtn.css('display', 'none');

            ole.footerNotificationHandler.lessonEndSetNotification();
        }
        else if (countNext > 0 && countNext < $total_page - 1) {
            $nextBtn.show(0);
            $prevBtn.show(0);
        }
        else if (countNext == $total_page - 1) {
            $nextBtn.css('display', 'none');
            $prevBtn.show(0);

            // if lastpageflag is true
            islastpageflag ?
                ole.footerNotificationHandler.lessonEndSetNotification() :
                ole.footerNotificationHandler.pageEndSetNotification();
        }
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


        vocabcontroller.findwords(countNext);
        put_image(content, countNext);

        $(".audioicon1, .audioicon2, .audioicon3, .audioicon4").css("pointer-events","none");

        switch(countNext){
        	case 0:
            alphabetSeq.showalphabetseq();
          	currentSound = "sound_1";
          	currentSound1 = "sound_2";
          	currentSound2 = "sound_3";
          	currentmainsound="sound_0";
            var soundarray = ["sound_0","sound_1", "sound_2", "sound_3", "sound_20"];
            playaudioseq( index, soundarray);
        	break;

        	case 1:
            alphabetSeq.showalphabetseq();
            setTimeout(function () {
                navigationcontroller();
            },3500);
          	currentSound = "sound_4";
          	currentSound1 = "sound_5";
          	currentSound2 = "sound_6";
          	currentmainsound ="sound_7";
            var soundarray = ["sound_7","sound_4", "sound_5", "sound_6"];
            playaudioseq( index, soundarray);
        	break;
            default:
          navigationcontroller();
         }

      $('.audioicon1').click(function(){
	     sound_player(currentmainsound);
			});
      $('.audioicon2').click(function(){
	     sound_player(currentSound);
			});
      $('.audioicon3').click(function(){
	     sound_player(currentSound1);
			});
      $('.audioicon4').click(function(){
	     sound_player(currentSound2);
			});
    }

    var index = 0;
    function playaudioseq( index, soundarray){
        if(index < soundarray.length){
            createjs.Sound.stop();
            current_sound = createjs.Sound.play(soundarray[index]);
            index++;
            current_sound.on('complete', function () {
              playaudioseq( index, soundarray)
            });
        }else{
            $(".audioicon1, .audioicon2, .audioicon3, .audioicon4").css("pointer-events","auto");
            navigationcontroller();
        }
    }

    function lateSound(){
	    setTimeout(function()
			{
				sound_player(currentSound)},1000)
		}
	function lateSound1(){
	    setTimeout(function()
			{
				sound_player(currentSound1)},2000)
		}
    function lateSound2(){
	    setTimeout(function()
			{
				sound_player(currentSound2)},3000)
		}

    function sound_player(sound_id) {
        createjs.Sound.stop();
        current_sound = createjs.Sound.play(sound_id);
        current_sound.play();
        // current_sound.on('complete', function () {
        //     navigationcontroller();
        // });
    }


    function put_image(content, count) {
        if (content[count].hasOwnProperty('imageblock')) {
            var imageblock = content[count].imageblock[0];
            if (imageblock.hasOwnProperty('imagestoshow')) {
                var imageClass = imageblock.imagestoshow;
                for (var i = 0; i < imageClass.length; i++) {
                    var image_src = preload.getResult(imageClass[i].imgid).src;
                    //get list of classes
                    var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
                    var selector = ('.' + classes_list[classes_list.length - 1]);
                    $(selector).attr('src', image_src);
                }
            }
        }
    }


    function templateCaller() {
        $prevBtn.css('display','none');
        $nextBtn.css('display','none');
        generaltemplate();
        loadTimelineProgress($total_page, countNext + 1);
    }

    $nextBtn.on('click', function () {
        createjs.Sound.stop();
        clearTimeout(timeoutvar);
        countNext++;
        templateCaller();
    });

    $refreshBtn.click(function(){
		templateCaller();
	});

	$prevBtn.on('click', function () {
        createjs.Sound.stop();
        clearTimeout(timeoutvar);
        countNext--;
        templateCaller();
        /* if footerNotificationHandler pageEndSetNotification was called then on click of
         previous slide button hide the footernotification */
        countNext < $total_page ? ole.footerNotificationHandler.hideNotification() : null;
    });


});
