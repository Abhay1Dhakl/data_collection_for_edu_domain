var imgpath = $ref + '/images/'
var soundAsset = $ref + '/sounds/' + $lang + '/'

var timeout

var content = [
  // slide 0
  {
    outsidediv: [
      {
        outdiv: 'backgroundimage',
        divtextblock: [
          {
            textclass: 'toptext',
            textdata: data.string.covertext,
          },
        ],
        divimageblock: [
          {
            imagestoshow: [
              {
                imgclass: 'backgroundinside',
                imgid: 'bg1',
                imgsrc: '',
              },
            ],
          },
        ],
      },
    ],
  },
  // slide 1
  {
    outsidediv: [
      {
        outdiv: 'backgroundimage',
        divtextblock: [],
        divimageblock: [
          {
            imagestoshow: [
              {
                imgclass: 'backgroundinside',
                imgid: 'bg2',
                imgsrc: '',
              },
              {
                imgclass: 'girl',
                imgid: 'girl',
                imgsrc: '',
              },
              {
                imgclass: 'boy',
                imgid: '1fb',
                imgsrc: '',
              },
              {
                imgclass: 'speaker',
                imgid: 'speaker',
                imgsrc: '',
              },

              {
                imgclass: 'speaker1',
                imgid: 'speaker',
                imgsrc: '',
              },
            ],
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'spbox-left',
        imgclass: 'textbox',
        imgid: 'speechbox',
        textclass: 'text',
        textdata: data.string.s1p1,
      },
      {
        speechbox: 'spbox-right',
        imgclass: 'textbox inverted',
        imgid: 'speechbox',
        textclass: 'text',
        textdata: data.string.s1p2,
      },
    ],
  },
  // Slide 2
  {
    outsidediv: [
      {
        outdiv: 'backgroundimage',
        divtextblock: [],
        divimageblock: [
          {
            imagestoshow: [
              {
                imgclass: 'backgroundinside',
                imgid: 'bg2',
                imgsrc: '',
              },
              {
                imgclass: 'girl',
                imgid: 'girl',
                imgsrc: '',
              },
              {
                imgclass: 'boy',
                imgid: 'boy',
                imgsrc: '',
              },

              {
                imgclass: 'speaker',
                imgid: 'speaker',
                imgsrc: '',
              },

              {
                imgclass: 'speaker1',
                imgid: 'speaker',
                imgsrc: '',
              },
            ],
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'spbox-left',
        imgclass: 'textbox',
        imgid: 'speechbox',
        textclass: 'text',
        textdata: data.string.s1p3,
      },
    ],
  },
  // Slide 3
  {
    outsidediv: [
      {
        outdiv: 'backgroundimage',
        divtextblock: [],
        divimageblock: [
          {
            imagestoshow: [
              {
                imgclass: 'backgroundinside',
                imgid: 'bg2',
                imgsrc: '',
              },
              {
                imgclass: 'girl2',
                imgid: 'girl2',
                imgsrc: '',
              },
              {
                imgclass: 'boy2',
                imgid: 'boy2',
                imgsrc: '',
              },
              {
                imgclass: 'speaker',
                imgid: 'speaker',
                imgsrc: '',
              },

              {
                imgclass: 'speaker1',
                imgid: 'speaker',
                imgsrc: '',
              },
            ],
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'spbox-left',
        imgclass: 'textbox',
        imgid: 'speechbox',
        textclass: 'text',
        textdata: data.string.s1p4,
      },
    ],
  },
  // Slide 4
  {
    outsidediv: [
      {
        outdiv: 'backgroundimage',
        divtextblock: [],
        divimageblock: [
          {
            imagestoshow: [
              {
                imgclass: 'backgroundinside',
                imgid: 'bg2',
                imgsrc: '',
              },
              {
                imgclass: 'girl2',
                imgid: 'girl2',
                imgsrc: '',
              },
              {
                imgclass: 'boy2',
                imgid: 'boy2',
                imgsrc: '',
              },
              {
                imgclass: 'speaker',
                imgid: 'speaker',
                imgsrc: '',
              },

              {
                imgclass: 'speaker1',
                imgid: 'speaker',
                imgsrc: '',
              },
            ],
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'spbox-right',
        imgclass: 'textbox inverted',
        imgid: 'speechbox',
        textclass: 'text',
        textdata: data.string.s1p5,
      },
    ],
    divimageblock: [
      {
        optiondiv: 'optdiv',
        commonclass: 'commonbox',
        textclass: 'text01',
        textdata: data.string.s1p5a,
        imagestoshow: [
          {
            imgclass: 'options correct',
            imgid: 'man',
            imgsrc: imgpath + 'mango.png',
          },

          {
            imgclass: 'options incorrect opt2',
            imgid: 'girl2',
            imgsrc: imgpath + 'apple.png',
          },
          {
            imgclass: 'options op0 incorrect',
            imgid: 'ban',
            imgsrc: imgpath + 'banana.png',
          },
        ],
      },
    ],
  },
  // slide 5
  {
    outsidediv: [
      {
        outdiv: 'backgroundimage',
        divtextblock: [],
        divimageblock: [
          {
            imagestoshow: [
              {
                imgclass: 'backgroundinside',
                imgid: 'bg2',
                imgsrc: '',
              },
              {
                imgclass: 'girl2',
                imgid: '2sg',
                imgsrc: '',
              },
              {
                imgclass: 'boy2',
                imgid: 'boy2',
                imgsrc: '',
              },
              {
                imgclass: 'speaker',
                imgid: 'speaker',
                imgsrc: '',
              },

              {
                imgclass: 'speaker1',
                imgid: 'speaker',
                imgsrc: '',
              },
            ],
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'spbox-left',
        imgclass: 'textbox',
        imgid: 'speechbox',
        textclass: 'text',
        textdata: data.string.s1p6,
      },
      {
        speechbox: 'spbox-right',
        imgclass: 'textbox inverted',
        imgid: 'speechbox',
        textclass: 'text',
        textdata: data.string.s1p0,
      },
    ],

    divimageblock: [
      {
        optiondiv: 'optdiv',
        commonclass: 'commonbox1',
        textclass: 'text01',
        textdata: data.string.s1p01,
        imagestoshow: [
          {
            imgclass: 'options incorrect',
            imgsrc: imgpath + 'grapes.png',
          },
          {
            imgclass: 'options correct opt2',
            imgsrc: imgpath + 'orange.png',
          },
          {
            imgclass: 'options incorrect',
            imgsrc: imgpath + 'watermelon.png',
          },
        ],
      },
    ],
  },

  // Slide 6
  {
    outsidediv: [
      {
        outdiv: 'backgroundimage',
        divtextblock: [],
        divimageblock: [
          {
            imagestoshow: [
              {
                imgclass: 'backgroundinside',
                imgid: 'bg2',
                imgsrc: '',
              },
              {
                imgclass: 'girl2',
                imgid: '2sg',
                imgsrc: '',
              },
              {
                imgclass: 'boy2',
                imgid: 'boy2',
                imgsrc: '',
              },
              {
                imgclass: 'speaker',
                imgid: 'speaker',
                imgsrc: '',
              },

              {
                imgclass: 'speaker1',
                imgid: 'speaker',
                imgsrc: '',
              },
            ],
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'spbox-right',
        imgclass: 'textbox inverted',
        imgid: 'speechbox',
        textclass: 'text',
        textdata: data.string.s1p7,
      },
    ],

    divimageblock: [
      {
        optiondiv: 'optdiv',
        textclass: 'text01',
        commonclass: 'commonbox',
        textdata: data.string.s1p07,
        imagestoshow: [
          {
            imgclass: 'options incorrect',
            imgsrc: imgpath + 'banana.png',
            forappend: 'append1',
          },
          {
            imgclass: 'options correct opt2',
            imgsrc: imgpath + 'grapes.png',
            forappend: 'append1',
          },
          {
            imgclass: 'options incorrect',
            imgsrc: imgpath + 'strawberry.png',
            forappend: 'append1',
          },
        ],
      },
    ],
  },
  // Slide 7
  {
    outsidediv: [
      {
        outdiv: 'backgroundimage',
        divtextblock: [],
        divimageblock: [
          {
            imagestoshow: [
              {
                imgclass: 'backgroundinside',
                imgid: 'bg2',
                imgsrc: '',
              },
              {
                imgclass: 'girl2',
                imgid: 'girl2',
                imgsrc: '',
              },
              {
                imgclass: 'boy2',
                imgid: 'boy2',
                imgsrc: '',
              },
              {
                imgclass: 'speaker',
                imgid: 'speaker',
                imgsrc: '',
              },

              {
                imgclass: 'speaker1',
                imgid: 'speaker',
                imgsrc: '',
              },
            ],
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'spbox-left',
        imgclass: 'textbox',
        imgid: 'speechbox',
        textclass: 'text',
        textdata: data.string.s1p8,
      },
    ],
    divimageblock: [
      {
        optiondiv: 'optdiv',
        textclass: 'text01',
        appendimage: true,
        textdata: data.string.s1p08,
        commonclass: 'commonbox1',
        imagestoshow: [
          {
            imgclass: 'options incorrect',
            imgsrc: imgpath + 'sea-buckthron.png',
          },
          {
            imgclass: 'options incorrect opt2',
            imgsrc: imgpath + 'pear.png',
          },
          {
            imgclass: 'options correct',
            imgsrc: imgpath + 'banana.png',
          },
        ],
      },
    ],
  },
]

$(function () {
  var $board = $('.board')
  var $nextBtn = $('#activity-page-next-btn-enabled')
  var $prevBtn = $('#activity-page-prev-btn-enabled')
  var $refreshBtn = $('#activity-page-refresh-btn')
  var countNext = 0

  var $total_page = content.length
  loadTimelineProgress($total_page, countNext + 1)
  // readCSV();
  var vocabcontroller = new Vocabulary()
  vocabcontroller.init()

  //for preload
  var preload
  var timeoutvar = null
  var current_sound

  function init() {
    //specify type otherwise it will load assests as XHR
    manifest = [
      //images
      {
        id: 'bg1',
        src: imgpath + 'mainimg1.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'bg2',
        src: imgpath + 'bg_1.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'boy',
        src: imgpath + 'boy talking-2.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'girl',
        src: imgpath + 'girl-talking-1.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'speechbox',
        src: imgpath + 'commentbox.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      // {id: "cld2", src: imgpath+"commentbox.png", type: createjs.AbstractLoader.IMAGE},
      {
        id: 'thi',
        src: imgpath + 'think-bubble.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'girl2',
        src: imgpath + 'girl-talking-2.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'boy2',
        src: imgpath + 'boy talking-1.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'man',
        src: imgpath + 'mango.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'man1',
        src: imgpath + 'smily.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'man2',
        src: imgpath + 'Copy of do-not-like.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: '1sb',
        src: imgpath + 'boy-talking-1.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: '1fb',
        src: imgpath + 'boy-talking-2.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: '2fg',
        src: imgpath + 'girl-talking-1.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: '2sg',
        src: imgpath + 'girl-talking-2.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      // {id: "man", src: imgpath+"mango.png", type: createjs.AbstractLoader.IMAGE},
      {
        id: 'org',
        src: imgpath + 'orange.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'speaker',
        src: imgpath + 'speaker.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'gra',
        src: imgpath + 'grapes.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ban',
        src: imgpath + 'banana.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'pea',
        src: imgpath + 'pea_plant.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'spa',
        src: imgpath + 'spinach.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'peass',
        src: imgpath + 'peas.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'cuc',
        src: imgpath + 'cucumber.png',
        type: createjs.AbstractLoader.IMAGE,
      },

      // {id: "bg3", src: imgpath+"scenery.png", type: createjs.AbstractLoader.IMAGE},

      // sounds
      { id: 's1_1', src: soundAsset + 'covertext.mp3' },
      { id: 'muna', src: soundAsset + 's1p1.mp3' },
      { id: 'anjan', src: soundAsset + 's1p2.mp3' },
      { id: 'li$noli', src: soundAsset + 's1p3.mp3' },
      { id: 'fruit', src: soundAsset + 's1p4.mp3' },
      { id: 'mango', src: soundAsset + 's1p5.mp3' },
      { id: 'tasty', src: soundAsset + 's1p5a.mp3' },
      { id: 'orange', src: soundAsset + 's1p6.mp3' },
      { id: 'nogrape', src: soundAsset + 's1p7.mp3' },
      { id: 'grape', src: soundAsset + 's1p8.mp3' },
      { id: 'vegi', src: soundAsset + 's1p9.mp3' },
      { id: 'peas', src: soundAsset + 's1p10.mp3' },
      { id: 'spanich', src: soundAsset + 's1p11.mp3' },
      { id: 'nobean', src: soundAsset + 's1p12.mp3' },
      { id: 'bean', src: soundAsset + 's1p13.mp3' },
      { id: 'li', src: soundAsset + 's1p14.mp3' },
      { id: 'noli', src: soundAsset + 's1p15.mp3' },
      { id: 's1p01', src: soundAsset + 's1p01.mp3' },
      { id: 's1p07', src: soundAsset + 's1p07.mp3' },
      { id: 's1p08', src: soundAsset + 's1p08.mp3' },
      { id: 's1p0', src: soundAsset + 's1p0.mp3' },
    ]
    preload = new createjs.LoadQueue(false)
    preload.installPlugin(createjs.Sound) //for registering sounds
    preload.on('progress', handleProgress)
    preload.on('complete', handleComplete)
    preload.on('fileload', handleFileLoad)
    preload.loadManifest(manifest, true)
  }
  function handleFileLoad(event) {
    // console.log(event.item);
  }
  function handleProgress(event) {
    $('#loading-text').html(parseInt(event.loaded * 100) + '%')
  }
  function handleComplete(event) {
    $('#loading-wrapper').hide(0)
    // call main function
    templateCaller()
  }
  //initialize
  init()

  /*==================================================
	=            Handlers and helpers Block            =
	==================================================*/
  /*==========  register the handlebar partials first  ==========*/
  Handlebars.registerPartial('textcontent', $('#textcontent-partial').html())
  Handlebars.registerPartial('imagecontent', $('#imagecontent-partial').html())
  Handlebars.registerPartial(
    'imagecontent2',
    $('#imagecontent-partial2').html()
  )
  /*===============================================
	=            data highlight function            =
	===============================================*/
  function texthighlight($highlightinside) {
    //check if $highlightinside is provided
    typeof $highlightinside !== 'object'
      ? alert(
          'Texthighlight : Hi Master, Please pass me a Jquery Object whose child are to be highlighted'
        )
      : null

    var $alltextpara = $highlightinside.find("*[data-highlight='true']")
    var stylerulename
    var replaceinstring
    var texthighlightstarttag
    var texthighlightendtag = '</span>'
    if ($alltextpara.length > 0) {
      $.each($alltextpara, function (index, val) {
        /*if there is a data-highlightcustomclass attribute defined for the text element
				 use that or else use default 'parsedstring'*/
        $(this).attr(
          'data-highlightcustomclass'
        ) /*if there is data-highlightcustomclass defined it is true else it is not*/
          ? (stylerulename = $(this).attr('data-highlightcustomclass'))
          : (stylerulename = 'parsedstring')

        texthighlightstarttag = "<span class='" + stylerulename + "'>"
        replaceinstring = $(this).html()
        replaceinstring = replaceinstring.replace(/#/g, texthighlightstarttag)
        replaceinstring = replaceinstring.replace(/@/g, texthighlightendtag)
        $(this).html(replaceinstring)
      })
    }
  }
  /*=====  End of data highlight function  ======*/

  /*===============================================
	 =            user notification function        =
	 ===============================================*/
  function notifyuser($notifyinside) {
    //check if $notifyinside is provided
    typeof $notifyinside !== 'object'
      ? alert(
          'Notifyuser : Hi Master, Please pass me a Jquery Object which should contain notification style.'
        )
      : null

    /*variable that will store the element(s) to remove notification from*/
    var $allnotifications = $notifyinside.find(
      "*[data-usernotification='notifyuser']"
    )
    // if there are any notifications removal required add the event handler
    if ($allnotifications.length > 0) {
      $allnotifications.one('click', function () {
        /* Act on the event */
        $(this).attr('data-isclicked', 'clicked')
        $(this).removeAttr('data-usernotification')
      })
    }
  }

  /*=====  End of user notification function  ======*/

  /*======================================================
	 =            Navigation Controller Function            =
	 ======================================================*/

  function navigationcontroller(islastpageflag) {
    typeof islastpageflag === 'undefined'
      ? (islastpageflag = false)
      : typeof islastpageflag != 'boolean'
      ? alert(
          'NavigationController : Hi Master, please provide a boolean parameter'
        )
      : null

    // islastpageflag ? ole.footerNotificationHandler.lessonEndSetNotification() : ole.footerNotificationHandler.pageEndSetNotification();
  }

  /*=====  End of user navigation controller function  ======*/

  /*==================================================
	 =            InstructionBlockController            =
	 ==================================================*/

  function instructionblockcontroller() {
    var $instructionblock = $board.find('div.instructionblock')
    if ($instructionblock.length > 0) {
      var $contentblock = $board.find('div.contentblock')
      var $toggleinstructionblockbutton = $instructionblock.find(
        'div.toggleinstructionblock'
      )
      var instructionblockisvisibleflag

      $contentblock.css('pointer-events', 'none')

      $toggleinstructionblockbutton.on('click', function () {
        instructionblockisvisibleflag = $instructionblock.attr(
          'data-instructionblockshow'
        )
        if (instructionblockisvisibleflag == 'true') {
          instructionblockisvisibleflag = 'false'
          $contentblock.css('pointer-events', 'auto')
        } else if (instructionblockisvisibleflag == 'false') {
          instructionblockisvisibleflag = 'true'
          $contentblock.css('pointer-events', 'none')
        }

        $instructionblock.attr(
          'data-instructionblockshow',
          instructionblockisvisibleflag
        )
      })
    }
  }

  /*=====  End of InstructionBlockController  ======*/

  /*=================================================
	 =            general template function            =
	 =================================================*/
  function generaltemplate() {
    var source = $('#general-template').html()
    var template = Handlebars.compile(source)
    var html = template(content[countNext])
    $board.html(html)

    // highlight any text inside board div with datahighlightflag set true
    texthighlight($board)
    vocabcontroller.findwords(countNext)
    put_image(content, countNext)
    put_image2(content, countNext)
    put_speechbox_image(content, countNext)

    function showTextAndSay(classtoadd, girlClass, pngGifId, sound_id) {
      // adding zoom class
      $('.contentblock').addClass(classtoadd)

      // if (countNext === 3) {
      // 	$(".first").addClass("opaque");
      // }

      // Showing text bubble
      $('.speechbox').addClass('fadeInsSuperfast')

      // Adding gif to girl to make lipsync
      girlClass.attr('src', preload.getResult(pngGifId[1]).src)
      createjs.Sound.stop()
      // PLaying the audio of girl
      current_sound = createjs.Sound.play(sound_id)
      current_sound.play()
      current_sound.on('complete', function () {
        // Adding back image class to the girl
        girlClass.attr('src', preload.getResult(pngGifId[0]).src)
        if (countNext === 3) {
          nav_button_controls()
          $('.hand-to-grandma').addClass('fadeInsSuperfast')
          $('.hand-to-grandma').click(function () {
            // Going to next page
            createjs.Sound.stop()
            clearTimeout(timeout)
            switch (countNext) {
              default:
                countNext++
                templateCaller()
                break
            }
          })
        } else {
          nav_button_controls()
        }
      })
    }

    switch (countNext) {
      case 0:
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('s1_1')
        $('.toptext').css('font-size', '195%')
        current_sound.play()
        nav_button_controls()
        break
      case 1:
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('muna')
        current_sound.play()
        $('.spbox-left').show()
        current_sound.on('complete', function () {
        //  clickspeaker('muna');
          $('.speaker1').fadeOut(0)
          $('.speaker').fadeIn(0)
          $('.girl').attr('src', preload.getResult('2fg').src)
          $('.boy').attr('src', preload.getResult('boy2').src)
          createjs.Sound.stop()
          current_sound = createjs.Sound.play('anjan')
          current_sound.play()
          clickspeaker('anjan')
          $('.spbox-left').css('display', 'none')
          $('.spbox-right').show()
          current_sound.on('complete', function () {
            $('.boy').attr('src', preload.getResult('1fb').src)
            nav_button_controls(1000)
          })
        })
        break
      case 2:
        $('.boy').attr('src', preload.getResult('1fb').src)
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('li$noli')
        current_sound.play()
        $('.spbox-left').show()
        current_sound.on('complete', function () {
          clickspeaker('li$noli')
          $('.girl').attr('src', preload.getResult('2fg').src)
          nav_button_controls(2000)
        })

        break
      case 3:
        $('.boy2').attr('src', preload.getResult('1sb').src)
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('fruit')
        current_sound.play()
        $('.spbox-left').show()
        current_sound.on('complete', function () {
          clickspeaker('fruit')
          $('.girl2').attr('src', preload.getResult('2sg').src)
          nav_button_controls(2000)
        })

        break
      case 4:
        $('.sad').hide(0);
        $('.speaker1').fadeOut(0)
        $('.speaker').fadeIn(0)
        $('.girl2').attr('src', preload.getResult('2sg').src)
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('mango')
        current_sound.play()
        clickspeaker('mango')
        $('.spbox-right').show()
        current_sound.on('complete', function () {
          $('.boy2').attr('src', preload.getResult('1sb').src)
          //  $('.smily1').fadeIn(0);
          createjs.Sound.stop()
          current_sound = createjs.Sound.play('tasty')
          current_sound.play()
          $('.spbox-right').css('display', 'none')
          $('.spbox-right2').show()
          $('.speaker').fadeOut(0)
          $('.commonbox').animate(
            {
              left: '56%',
            },
            3500
          )
          current_sound.on('complete', function () {
            $(this).css('pointer-events', 'none')
            clickAns()
            $('.boy2').attr('src', preload.getResult('1sb').src)
            $('.boy2').css({
              left: '30%',
              height: '43%',
              width: '17%',
            })
            $('.girl2').css({
              left: '-30%',
            })
            $('.spbox-right2').css('display', 'none')
          })
        })

        break
      case 5:
        $('.sad').hide(0);
        $('.speaker1').fadeOut(0)
        $('.speaker').fadeIn(0)
        $('.boy2').attr('src', preload.getResult('boy2').src)
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('s1p0')
        current_sound.play()
        $('.spbox-right').show()
        current_sound.on('complete', function () {
          clickspeaker('s1_1')
          $('.speaker').fadeOut(0)
          $('.boy2').attr('src', preload.getResult('1sb').src)
          $('.girl2').attr('src', preload.getResult('girl2').src)
          $('.spbox-right').css('display', 'none')
          $('.spbox-left').show()
          $('.speaker1').fadeIn(0)
          $('.girl2').attr('src', preload.getResult('girl2').src)
          current_sound = createjs.Sound.play('orange')
          current_sound.play()
          current_sound.on('complete', function () {
            // clickspeaker('s1_1')
            $('.speaker1').fadeOut(0)
            $('.girl2').attr('src', preload.getResult('2sg').src)
            $('.spbox-left').css('display', 'none')
            // thinking image
            $('.commonbox1').animate(
              {
                left: '6%',
              },
              3500
            );
            current_sound = createjs.Sound.play('s1p01')
            current_sound.play();
            $(this).css('pointer-events', 'none')
            clickAns()
            $('.boy2').attr('src', preload.getResult('1sb').src)
            $('.boy2').css({
              left: '72%',
            })
            $('.girl2').css({
              left: '10%',
            })
          })
        })

        break

      case 6:
        $('.speaker1').fadeOut(0)
        $('.speaker').fadeIn(0)
        $('.girl2').attr('src', preload.getResult('2sg').src)
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('nogrape')
        current_sound.play()
        $('.spbox-right').show()
        current_sound.on('complete', function () {
          clickspeaker('s1_1')
          $('.speaker').fadeOut(0)
          $('.boy2').attr('src', preload.getResult('1sb').src)
          $('.spbox-right').css('display', 'none')
          // 	// thinking image
          $('.commonbox').animate(
            {
              left: '56%',
            },
            3500
          )
          current_sound = createjs.Sound.play('s1p07')
          current_sound.play()
          $(this).css('pointer-events', 'none')
          clickAns()
          $('.boy2').attr('src', preload.getResult('1sb').src)
          $('.boy2').css({
            left: '30%',
            height: '43%',
            width: '17%',
          })
          $('.girl2').css({
            left: '-30%',
          })
          //$(".spbox-right2").css('display','none')
          //$(".spbox-right").css('display','none')
        })
        break

      case 7:
        $('.boy2').attr('src', preload.getResult('1sb').src)
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('grape')
        current_sound.play()
        $('.spbox-left').show()
        current_sound.on('complete', function () {
          clickspeaker('s1_1')
          $('.speaker1').fadeOut(0)
          $('.girl2').attr('src', preload.getResult('2sg').src)
          $('.spbox-left').css('display', 'none')
          $('.boy2').attr('src', preload.getResult('1sb').src)
          $('.spbox-right').css('display', 'none')
          // 	// thinking image
          $('.commonbox1').animate(
            {
              left: '6%',
            },
            3500
          );
          current_sound = createjs.Sound.play('s1p08')
          current_sound.play();
          $(this).css('pointer-events', 'none')
          clickAns()
          $('.boy2').attr('src', preload.getResult('1sb').src)
          $('.boy2').css({
            left: '72%',
          })
          $('.girl2').css({
            left: '10%',
          })
        })
        break
    }
  }

  function clickAns() {
    console.log('>>>>>>>>>>>')
    $('.options').click(function () {
      console.log('Aaa')
      if ($(this).hasClass('correct')) {
        //for (let i = 0; i <2; i++) {
        //sound_player_nav('correct')
        console.log('Aaa')
        $(this).css('border', '2px solid green')
        $(this).css('background-color', '#5df65d')
        play_correct_incorrect_sound_sybbas_prayas(1)
          //$('.commonappend').append("<img class='correctwrongimg' src='images/smily.png'/>")
        $(".options").css('pointer-events', 'none');
        nav_button_controls(0)
        //}
      }
      if ($(this).hasClass('incorrect')) {
        play_correct_incorrect_sound_sybbas_prayas(0)
        //	sound_player_nav('incorrect')
        console.log('Aaa')
        $(this).css('border', '2px solid red')
        $(this).css('background-color', 'rgb(246 147 147')
        // $('.options').attr("src", incorrect).appendTo(".incorrect");
        // $('.commonappend').append("<img class='correctwrongimg' src='images/smily.png'/>")
      }
    })
  }

  function clickspeaker(speaker_sound) {
    $('.speaker').click()
    $('.speaker1').click()
    $('.speaker').click(function () {
      console.log('hello world')
      current_sound = createjs.Sound.play(speaker_sound)
      current_sound.play();
      $('.speaker').css('pointer-events', 'none')
      current_sound.on('complete', function () {
        $('.speaker').css('pointer-events', 'all')
      })
    })
    $('.speaker1').click(function () {
      console.log('hello world')
      current_sound = createjs.Sound.play(speaker_sound)
      current_sound.play()
      $('.speaker1').css('pointer-events', 'none')
      current_sound.on('complete', function () {
        $('.speaker1').css('pointer-events', 'all')
      })
    })
  }

  function TalkGifManager(girlClass, pngGifId, soundId, soundId2, delay) {
    setTimeout(function () {
      $('.speechbox').addClass('fadeInsSuperfast')
      girlClass.attr('src', preload.getResult(pngGifId[1]).src)
      createjs.Sound.stop()
      current_sound = createjs.Sound.play(soundId)
      current_sound.play()
      current_sound.on('complete', function () {
        girlClass.attr('src', preload.getResult(pngGifId[0]).src)
        $('.hand-2').addClass('fadeInsfast')
        $('.hand-2').click(function () {
          // Going to next page
          createjs.Sound.stop()
          clearTimeout(timeout)
          switch (countNext) {
            default:
              countNext++
              templateCaller()
              break
          }
        })
        nav_button_controls()
      })
    }, delay)
  }
  function TalkGifManager2(girlClass, pngGifId, soundId, delay) {
    setTimeout(function () {
      $('.speechbox').addClass('fadeInsSuperfast')
      girlClass.attr('src', preload.getResult(pngGifId[1]).src)
      createjs.Sound.stop()
      current_sound = createjs.Sound.play(soundId)
      current_sound.play()
      current_sound.on('complete', function () {
        girlClass.attr('src', preload.getResult(pngGifId[0]).src)
        // sound_player(soundId);
        nav_button_controls()
      })
    }, delay)
  }
  function click(class1, class2) {
    $(class1).click(function () {
      $('.wrong').show()

      $(this).css('border', '6px solid red')
      $(this).css('background-color', '#f4cccc')
      play_correct_incorrect_sound_sybbas_prayas(0)
    })
    $(class2).click(function () {
      $('.correct').show()
      $(this).css('background-color', '#d9ead3')
      $(this).css('border', '6px solid  #6aa84f')
      play_correct_incorrect_sound_sybbas_prayas(1)
      $(class1).off()
    })
  }
  function click2(class1, class2) {
    $(class1).click(function () {
      $('.correct').show()
      $(this).css('background-color', '#d9ead3')
      $(this).css('border', '6px solid  #6aa84f')
      play_correct_incorrect_sound_sybbas_prayas(1)
      $(class2).off()
    })
    $(class2).click(function () {
      $('.wrong').show()
      $(this).css('border', '6px solid red')
      $(this).css('background-color', '#f4cccc')
      play_correct_incorrect_sound_sybbas_prayas(0)
    })
  }

  function HandleClose() {
    $('.closeDiv').click(function () {
      $('.descriptionDiv, .closeDiv').removeClass('fadeIn').addClass('hidden')
      $('.hand').show()
    })
  }
  function HandlehandClick(means) {
    var counter = 0
    $('.clickable').click(function () {
      counter++
      var action = $(this).attr('class').split(' ')[1].split('-')[1]
      $('.hand').hide()
      $('.decription-img').attr(
        'src',
        preload.getResult(means + '-' + action).src
      )
      writeText(action, counter)
      $('.descriptionDiv ').removeClass('hidden').addClass('fadeIn')
      // nav_button_controls();
    })
  }

  function writeText(action, counter) {
    // console.log(action);
    switch (action) {
      case 'news':
        console.log(counter)
        $('.description-txt').html(data.string.p2s3t11)
        sound_player2('radio-news-sound', true, true, counter)
        break
      case 'song':
        console.log(counter)
        $('.description-txt').html(data.string.p2s3t22)
        sound_player2('radio-song-sound', true, true, counter)
        break
      case 'program':
        console.log(counter)
        $('.description-txt').html(data.string.p2s3t33)
        sound_player2('radio-program-sound', true, true, counter)
        break
    }
  }

  function nav_button_controls(delay_ms) {
    timeoutvar = setTimeout(function () {
      if (countNext == 0) {
        $nextBtn.show(0)
      } else if (countNext > 0 && countNext == $total_page - 1) {
        $prevBtn.show(0)
        ole.footerNotificationHandler.pageEndSetNotification()
      } else {
        $prevBtn.show(0)
        $nextBtn.show(0)
      }
    }, delay_ms)
  }

  function sound_player(sound_id, next) {
    createjs.Sound.stop()
    current_sound = createjs.Sound.play(sound_id)
    current_sound.play()
    current_sound.on('complete', function () {
      nav_button_controls()
    })
  }

  function sound_player2(sound_id, next, showClose, counter) {
    createjs.Sound.stop()
    current_sound = createjs.Sound.play(sound_id)
    current_sound.play()
    current_sound.on('complete', function () {
      if (counter >= 3) {
        next ? nav_button_controls() : ''
      }
      showClose ? $('.closeDiv').removeClass('hidden').addClass('fadeIn') : ''
    })
  }

  function put_image(content, count) {
    if (content[count].hasOwnProperty('outsidediv')) {
      var outsidediv = content[count].outsidediv[0]
      console.log(outsidediv)
      if (outsidediv.hasOwnProperty('divimageblock')) {
        var divimageblock = outsidediv.divimageblock[0]
        if (divimageblock.hasOwnProperty('imagestoshow')) {
          console.log(divimageblock)
          var imageClass = divimageblock.imagestoshow
          console.log(imageClass)
          for (var i = 0; i < imageClass.length; i++) {
            var image_src = preload.getResult(imageClass[i].imgid).src
            //get list of classes
            var classes_list = imageClass[i].imgclass.match(/\S+/g) || []
            var selector = '.' + classes_list[classes_list.length - 1]
            $(selector).attr('src', image_src)
          }
        }
      }
    }
  }

  function put_image2(content, count) {
    if (content[count].hasOwnProperty('imageblock2')) {
      var imageblock2 = content[count].imageblock2[0]
      if (imageblock2.hasOwnProperty('imagestoshow')) {
        var imageClass = imageblock2.imagestoshow
        for (var i = 0; i < imageClass.length; i++) {
          var image_src = preload.getResult(imageClass[i].imgid).src
          //get list of classes
          var classes_list = imageClass[i].imgclass.match(/\S+/g) || []
          var selector = '.' + classes_list[classes_list.length - 1]
          $(selector).attr('src', image_src)
        }
      }
    }
  }

  function put_speechbox_image(content, count) {
    if (content[count].hasOwnProperty('speechbox')) {
      var speechbox = content[count].speechbox
      for (var i = 0; i < speechbox.length; i++) {
        var image_src = preload.getResult(speechbox[i].imgid).src
        //get list of classes
        var classes_list = speechbox[i].speechbox.match(/\S+/g) || []
        var selector =
          '.' + classes_list[classes_list.length - 1] + '>.speechbg'
        $(selector).attr('src', image_src)
      }
    }
  }

  function templateCaller() {
    $prevBtn.css('display', 'none')
    $nextBtn.css('display', 'none')

    navigationcontroller()

    generaltemplate()
    loadTimelineProgress($total_page, countNext + 1)
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

  $nextBtn.on('click', function () {
    createjs.Sound.stop()
    clearTimeout(timeout)
    switch (countNext) {
      default:
        countNext++
        templateCaller()
        break
    }
  })

  $refreshBtn.click(function () {
    templateCaller()
    // clearTimeout(timeout);
  })

  $prevBtn.on('click', function () {
    createjs.Sound.stop()
    clearTimeout(timeout)
    countNext--
    templateCaller()
    /* if footerNotificationHandler pageEndSetNotification was called then on click of
		 previous slide button hide the footernotification */
    countNext < $total_page
      ? ole.footerNotificationHandler.hideNotification()
      : null
  })
})
