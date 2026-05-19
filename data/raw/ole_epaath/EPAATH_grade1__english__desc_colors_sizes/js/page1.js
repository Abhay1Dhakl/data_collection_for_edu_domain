var imgpath = $ref + "/images/";
var soundAsset = $ref + "/sounds/";

var content = [
    //slide0
    {
        contentnocenteradjust: true,
        contentblockadditionalclass: "coverbg",
        uppertextblockadditionalclass: "covertitle",
        uppertextblock: [
            {
                textclass: "chapter centertext",
                textdata: data.lesson.chapter
            }

        ]
    },
    // slide1
    {
        contentnocenteradjust: true,
        contentblockadditionalclass: "bgmain",
        imageblock: [{
            commonImgDiv: "commonImgDiv",
            imagestoshow: [
                {
                    imgdiv: "applediv zoomInEffect",
                    imgclass: "relativecls appleimg",
                    imgid: 'appleImg',
                    imgsrc: ""
                },
                {
                    imgdiv: "zoomInEffectText textdiv",
                    imgclass: "audioicondiv  audioiconimg",
                    imgid: 'audioicon',
                    imgsrc: "",
                    textdata: [{
                        textclass: "title centertext zoomInEffectText",
                        textdata: data.string.p1text1
                    }]
                }
            ]
        }]
    },
    //slide 2
    {
        contentnocenteradjust: true,
        contentblockadditionalclass: "bgmain",
        imageblock: [{
            commonImgDiv: "commonImgDiv",
            imagestoshow: [
                {
                    imgdiv: "ballondiv zoomInEffect",
                    imgclass: "relativecls ballonimg",
                    imgid: 'ballonImg',
                    imgsrc: ""
                },
                {
                    imgdiv: "textdiv zoomInEffectText",
                    imgclass: " audioicondiv audioiconimg",
                    imgid: 'audioicon',
                    imgsrc: "",
                    textdata: [{
                        textclass: "title centertext zoomInEffectText",
                        textdata: data.string.p1text2
                    }]
                }
            ]
        }]
    },

    // slide3
    {
        contentnocenteradjust: true,
        contentblockadditionalclass: "bgmain",
        imageblock: [{
            commonImgDiv: "commonImgDiv",
            imagestoshow: [
                {
                    imgdiv: "greenleafdiv zoomInEffect",
                    imgclass: "relativecls  greenleafimg",
                    imgid: 'greenleafImg',
                    imgsrc: ""
                },
                {
                    imgdiv: "textdiv zoomInEffectText",
                    imgclass: "audioicondiv audioiconimg",
                    imgid: 'audioicon',
                    imgsrc: "",
                    textdata: [{
                        textclass: "title centertext zoomInEffectText",
                        textdata: data.string.p1text3
                    }],
                }
            ]
        }]
    },
    //slide4
    {
        contentnocenteradjust: true,
        contentblockadditionalclass: "bgmain",
        imageblock: [{
            commonImgDiv: "commonImgDiv",
            imagestoshow: [
                {
                    imgdiv: "pinkdressdiv zoomInEffect",
                    imgclass: "relativecls  pinkdressimg",
                    imgid: 'pinkdressImg',
                    imgsrc: ""
                },
                {
                    imgdiv: "textdiv zoomInEffectText",
                    imgclass: "audioicondiv audioiconimg",
                    imgid: 'audioicon',
                    imgsrc: "",
                    textdata: [{
                        textclass: "title centertext zoomInEffectText",
                        textdata: data.string.p1text4
                    }]
                }
            ]
        }]
    },
    //slide5
    {
        contentnocenteradjust: true,
        contentblockadditionalclass: "bgmain",
        imageblock: [{
            commonImgDiv: "commonImgDiv",
            imagestoshow: [
                {
                    imgdiv: "bananadiv zoomInEffect",
                    imgclass: "relativecls  bananaimg",
                    imgid: 'bananaImg',
                    imgsrc: ""
                },
                {
                    imgdiv: "textdiv textdiv1 zoomInEffectText",
                    imgclass: "audioicondiv audioiconimg",
                    imgid: 'audioicon',
                    imgsrc: "",
                    textdata: [{
                        textclass: "title centertext zoomInEffectText",
                        textdata: data.string.p1text5
                    }]
                }
            ]
        }]
    },
    //slide6
    {
        contentnocenteradjust: true,
        contentblockadditionalclass: "bgmain",
        imageblock: [{
            commonImgDiv: "commonImgDiv",
            imagestoshow: [
                {
                    imgdiv: "carrotdiv zoomInEffect",
                    imgclass: "relativecls  carrotimg",
                    imgid: 'carrotImg',
                    imgsrc: ""
                },
                {
                    imgdiv: " textdiv textdiv1 zoomInEffectText",
                    imgclass: "audioicondiv audio1 audioiconimg",
                    imgid: 'audioicon',
                    imgsrc: "",
                    textdata: [{
                        textclass: "title centertext zoomInEffectText",
                        textdata: data.string.p1text6
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
    var $refreshBtn = $("#activity-page-refresh-btn");
    var countNext = 0;
    var count = 0;

    var $total_page = content.length;
    loadTimelineProgress($total_page, countNext + 1);

    var preload;
    var timeoutvar = null;
    var current_sound;
    var vocabcontroller = new Vocabulary();
    vocabcontroller.init();
    function init() {
        //specify type otherwise it will load assests as XHR
        manifest = [
            { id: "common-css", src: $ref + "css/common.css", type: createjs.AbstractLoader.CSS },
            { id: "page1-css", src: $ref + "css/page1.css", type: createjs.AbstractLoader.CSS },

            { id: "appleImg", src: imgpath + "apple.png", type: createjs.AbstractLoader.IMAGE },
            { id: "ballonImg", src: imgpath + "balloon.png", type: createjs.AbstractLoader.IMAGE },
            { id: "greenleafImg", src: imgpath + "leaf.png", type: createjs.AbstractLoader.IMAGE },
            { id: "pinkdressImg", src: imgpath + "pinkdress.png", type: createjs.AbstractLoader.IMAGE },
            { id: "bananaImg", src: imgpath + "banana.png", type: createjs.AbstractLoader.IMAGE },
            { id: "carrotImg", src: imgpath + "carrot.png", type: createjs.AbstractLoader.IMAGE },
            { id: "coverpage", src: imgpath + "coverpage.png", type: createjs.AbstractLoader.IMAGE },
            { id: "audioicon", src: "images/speaker.png", type: createjs.AbstractLoader.IMAGE },

            // sounds
            { id: "sound_0", src: soundAsset + "p1-s0.mp3" },
            { id: "sound_1", src: soundAsset + "p1-s1.mp3" },
            { id: "sound_2", src: soundAsset + "p1-s2.mp3" },
            { id: "sound_3", src: soundAsset + "p1-s3.mp3" },
            { id: "sound_4", src: soundAsset + "p1-s4.mp3" },
            { id: "sound_5", src: soundAsset + "p1-s5.mp3" },
            { id: "sound_6", src: soundAsset + "p1-s6.mp3" },
        ];
        preload = new createjs.LoadQueue(false);
        preload.installPlugin(createjs.Sound);//for registering sounds
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


    /*=================================================
     =            general template function            =
     =================================================*/
    function generaltemplate() {
        var source = $("#general-template").html();
        var template = Handlebars.compile(source);
        var html = template(content[countNext]);
        $board.html(html);

        vocabcontroller.findwords(countNext);
        put_image(content, countNext, preload);
        $(".audioicondiv,.textdiv").click(function () {
            sound_player("sound_" + countNext, true);
        });
        switch (countNext) {
            case 0:
                sound_player("sound_0", true);
                break;
            case 1:
                setTimeout(function () {
                    sound_player("sound_1", true);
                }, 1500);
                break;
            case 2:
                setTimeout(function () {
                    sound_player("sound_2", true);
                }, 1500);
                break;
            case 3:
                setTimeout(function () {
                    sound_player("sound_3", true);
                }, 1500);
                break;
            case 4:
                setTimeout(function () {
                    sound_player("sound_4", true);
                }, 1500);
                break;
            case 5:
                setTimeout(function () {
                    sound_player("sound_5", true);
                }, 1500);
                break;
            case 6:
                setTimeout(function () {
                    sound_player("sound_6", true);
                }, 1500);
                break;
        }


        $(".coverbg").css({
            'background-image': 'url(' + imgpath + "coverpage.png" + ')'
        })
    }



    function sound_player(sound_id, navigate) {
        createjs.Sound.stop();
        current_sound = createjs.Sound.play(sound_id);
        current_sound.play();
        current_sound.on('complete', function () {
            navigate ? navigationcontroller(countNext, $total_page) : "";
        });
    }


    function templateCaller() {
        $prevBtn.css('display', 'none');
        $nextBtn.css('display', 'none');
        generaltemplate();
        loadTimelineProgress($total_page, countNext + 1);
    }

    $nextBtn.on('click', function () {
        createjs.Sound.stop();
        clearTimeout(timeoutvar);
        switch (countNext) {
            default:
                countNext++;
                templateCaller();
                break;
        }
    });

    $refreshBtn.click(function () {
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
