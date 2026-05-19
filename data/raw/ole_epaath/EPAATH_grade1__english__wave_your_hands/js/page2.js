var soundAsset = $ref + '/sounds/' + $lang + '/'
var imgpath = $ref + '/images/'

var content = [
  // slide1
  {
    contentblockadditionalclass: 'bg_linear',
    topimgtextblockadditionalclass: 'top_text',
    topimgtextblock: [
      {
        textclass: 'secondpara',
        textdata: data.string.p2s1txt,
      },
    ],

    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'boy',
            imgid: 'boy',
            imgsrc: '',
          },
          {
            imgclass: 'boy1',
            imgid: 'boy1',
            imgsrc: '',
          },
          {
            imgclass: 'stand',
            imgid: 'stand',
            imgsrc: imgpath + 'stick.png',
          },

          {
            imgclass: 'replay',
            imgid: 'replay',
            imgsrc: '',
          },
          {
            imgclass: 'speaker spk1',
            imgid: 'speaker',
            imgsrc: '',
          },
          {
            imgclass: 'speaker spk2',
            imgid: 'speaker',
            imgsrc: '',
          },
        ],
      },
    ],
    lowertextblock: [
      {
        lowertextblockadditionalclass: 'middletxt',
        textclass: 'textblock1',
        textdiv: 'maindiv',
        textdata: data.string.p2s2txt,
      },
      {
        lowertextblockadditionalclass: 'lasttxt',
        textclass: 'textblock2 commontxt',
        textdiv: 'textdiv textdiv2 correct',
        textdata: data.string.stand,
      },
      {
        lowertextblockadditionalclass: 'lasttxt',
        textdiv: 'textdiv textdiv1 wrong',
        textclass: 'textblock3 commontxt',
        textdata: data.string.wave,
      },
    ],
  },
  // slide2
  {
    contentblockadditionalclass: 'bg_linear',
    topimgtextblockadditionalclass: 'top_text',
    topimgtextblock: [
      {
        textclass: '',
        textdata: data.string.p2s1txt,
      },
    ],

    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'wave1',
            imgid: 'comehere',
            imgsrc: '',
          },
          {
            imgclass: 'wave2',
            imgid: 'comehere_img',
            imgsrc: '',
          },
          {
            imgclass: 'stand',
            imgid: 'stand',
            imgsrc: imgpath + 'stick.png',
          },
          {
            imgclass: 'stand1',
            imgid: 'arrow_green',
            imgsrc: imgpath + '',
          },

          {
            imgclass: 'replay',
            imgid: 'replay',
            imgsrc: '',
          },
          {
            imgclass: 'speaker spk1',
            imgid: 'speaker',
            imgsrc: '',
          },
          {
            imgclass: 'speaker spk2',
            imgid: 'speaker',
            imgsrc: '',
          },
        ],
      },
    ],
    lowertextblock: [
      {
        lowertextblockadditionalclass: 'middletxt',
        textclass: 'textblock1',
        textdiv: 'maindiv',
        textdata: data.string.p2s2txt,
      },
      {
        lowertextblockadditionalclass: 'lasttxt',
        textdiv: 'textdiv textdiv2 correct',
        textclass: 'textblock2 commontxt',
        textdata: data.string.come,
      },
      {
        lowertextblockadditionalclass: 'lasttxt',
        textdiv: 'textdiv textdiv1 wrong',
        textclass: 'textblock3 commontxt',
        textdata: data.string.go,
      },
    ],
  },
  // slide3
  {
    contentblockadditionalclass: 'bg_linear',
    topimgtextblockadditionalclass: 'top_text',
    topimgtextblock: [
      {
        textclass: '',
        textdata: data.string.p2s1txt,
      },
    ],

    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'boy',
            imgid: 'img2',
            imgsrc: '',
          },
          {
            imgclass: 'boy1',
            imgid: 'gif2',
            imgsrc: '',
          },
          {
            imgclass: 'stand',
            imgid: 'stand',
            imgsrc: imgpath + 'stick.png',
          },

          {
            imgclass: 'replay',
            imgid: 'replay',
            imgsrc: '',
          },
          {
            imgclass: 'speaker spk1',
            imgid: 'speaker',
            imgsrc: '',
          },
          {
            imgclass: 'speaker spk2',
            imgid: 'speaker',
            imgsrc: '',
          },
        ],
      },
    ],
    lowertextblock: [
      {
        lowertextblockadditionalclass: 'middletxt',
        textdiv: 'maindiv',
        textclass: 'textblock1',
        textdata: data.string.p2s2txt,
      },
      {
        lowertextblockadditionalclass: 'lasttxt',
        textdiv: 'textdiv textdiv1 correct',
        textclass: 'textblock2 commontxt',
        textdata: data.string.clap,
      },
      {
        lowertextblockadditionalclass: 'lasttxt',
        textdiv: 'textdiv textdiv2 wrong',
        textclass: 'textblock3 commontxt',
        textdata: data.string.wave,
      },
    ],
  },
  // slide4
  {
    contentblockadditionalclass: 'bg_linear',
    topimgtextblockadditionalclass: 'top_text',
    topimgtextblock: [
      {
        textclass: '',
        textdata: data.string.p2s1txt,
      },
    ],

    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'wave1',
            imgid: 'wave_gif',
            imgsrc: '',
          },
          {
            imgclass: 'wave2',
            imgid: 'wave',
            imgsrc: imgpath + 'girl.png',
          },
          {
            imgclass: 'stand',
            imgid: 'stand',
            imgsrc: imgpath + 'stick.png',
          },

          {
            imgclass: 'replay',
            imgid: 'replay',
            imgsrc: '',
          },
          {
            imgclass: 'speaker spk1',
            imgid: 'speaker',
            imgsrc: '',
          },
          {
            imgclass: 'speaker spk2',
            imgid: 'speaker',
            imgsrc: '',
          },
        ],
      },
    ],
    lowertextblock: [
      {
        lowertextblockadditionalclass: 'middletxt',
        textdiv: 'maindiv',
        textclass: 'textblock1',
        textdata: data.string.p2s2txt,
      },
      {
        lowertextblockadditionalclass: 'lasttxt',
        textdiv: 'textdiv textdiv1 correct',
        textclass: 'textblock2 commontxt',
        textdata: data.string.wave,
      },
      {
        lowertextblockadditionalclass: 'lasttxt',
        textdiv: 'textdiv textdiv2 wrong',
        textclass: 'textblock3 commontxt',
        textdata: data.string.clap,
      },
    ],
  },
  // slide5
  {
    contentblockadditionalclass: 'bg_linear',
    topimgtextblockadditionalclass: 'top_text',
    topimgtextblock: [
      {
        textclass: '',
        textdata: data.string.p2s1txt,
      },
    ],

    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'last',
            imgid: 'img1',
            imgsrc: '',
          },
          {
            imgclass: 'gif1',
            imgid: 'gif1',
            imgsrc: imgpath + '',
          },
          {
            imgclass: 'replay',
            imgid: 'replay',
            imgsrc: '',
          },
          {
            imgclass: 'speaker spk1',
            imgid: 'speaker',
            imgsrc: '',
          },
          {
            imgclass: 'speaker spk2',
            imgid: 'speaker',
            imgsrc: '',
          },
        ],
      },
    ],
    lowertextblock: [
      {
        lowertextblockadditionalclass: 'middletxt',
        textdiv: 'maindiv',
        textclass: 'textblock1',
        textdata: data.string.p2s2txt,
      },
      {
        lowertextblockadditionalclass: 'lasttxt',
        textdiv: 'textdiv textdiv1 correct',
        textclass: 'textblock2 commontxt',
        textdata: data.string.out,
      },
      {
        lowertextblockadditionalclass: 'lasttxt',
        textdiv: 'textdiv textdiv2 wrong',
        textclass: 'textblock3 commontxt',
        textdata: data.string.sit,
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
        id: 'stand',
        src: imgpath + 'board/stick.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'speaker',
        src: imgpath + 'speaker.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'replay',
        src: imgpath + 'replay.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'boy1',
        src: imgpath + 'stand_up_img.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'boy',
        src: imgpath + 'stand_up.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'bg1',
        src: imgpath + 'bg1.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'girl1',
        src: imgpath + 'girl.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'comehere_img',
        src: imgpath + 'comehere_img.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'comehere',
        src: imgpath + 'comehere.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'wave_gif',
        src: imgpath + 'girl1.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'wave',
        src: imgpath + 'girl.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'img1',
        src: imgpath + 'get_out.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      //{ id: "speaker", src: imgpath + "speaker.png", type: createjs.AbstractLoader.IMAGE },
      {
        id: 'img2',
        src: imgpath + 'clap.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'gif1',
        src: imgpath + 'out_blank.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'gif2',
        src: imgpath + 'clap_img.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'corrimg',
        src: 'images/correct.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'incorrimg',
        src: 'images/wrongicon.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'arrow_green',
        src: 'images/arrow_green.png',
        type: createjs.AbstractLoader.IMAGE,
      },

      // sounds
      { id: 'p2s1txt', src: soundAsset + 'p2s1txt.mp3' },
      { id: 's1_p2', src: soundAsset + 's1_p6.mp3' },
      { id: 'stand', src: soundAsset + 'stand.mp3' },
      { id: 'clap', src: soundAsset + 'clap.mp3' },
      { id: 'come', src: soundAsset + 'come.mp3' },
      { id: 'go', src: soundAsset + 'go.mp3' },
      { id: 'wave', src: soundAsset + 'wave.mp3' },
      // { id: 'clap', src: soundAsset + "clap.mp3" },
      //{ id: 'out', src: soundAsset + "out.mp3" },
      { id: 'sit', src: soundAsset + 'sit.mp3' },
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
    // put_top_head_image(content, countNext);
    // put_option_image(content, countNext);
    // put_summary_image(content, countNext);
    put_speechbox_image(content, countNext)

    $('.motherlion').css('height', '42%')
    $('.childtiger').css('bottom', '24%')

    if (countNext == 0) {
      console.log('Aa')
      // sound_player("p2s1txt");
      createjs.Sound.stop()
      current_sound = createjs.Sound.play('p2s1txt')
      current_sound.play()
    }
    switch (countNext) {
      case 0:
        current_sound.on('complete', function () {
          // 		 //timeoutvar = setTimeout(()=>{
          $('.speaker').fadeIn(0)
          $('.imagediv').fadeIn(100)
          $('.textdiv').fadeIn(0)
          setTimeout(() => {
            $('.boy').hide(0)
            $('.boy1').fadeIn(0)
          }, 1500)
          clickspeaker('stand')
          clickspeaker1('wave')
          clickAns()
          Replay()
        })
        break
      case 1:
        $('.imagediv').fadeIn(2000)
        $('.textdiv').fadeIn(2500)

        //timeoutvar = setTimeout(()=>{
        sound_player('p2s1txt')
        current_sound.on('complete', function () {
          //    setTimeout(() => {
          $('.wave1').hide(0)
          $('.wave2').fadeIn(0)
          //    }, 2000);
          clickspeaker('come')
          clickspeaker1('go')
          clickAns()
          Replay()
        })
        break
      case 2:
        $('.imagediv').fadeIn(2000)
        $('.textdiv').fadeIn(2500)
        //timeoutvar = setTimeout(()=>{
        sound_player('p2s1txt')
        current_sound.on('complete', function () {
          $('.imagediv').fadeIn(0)
          clickspeaker('wave')
          clickspeaker1('clap')
          //    setTimeout(() => {
          $('.boy').hide(0)
          $('.boy1').fadeIn(0)
          //    }, 2000);
          clickAns()
          Replay()
        })
        break
      case 3:
        $('.imagediv').fadeIn(2000)
        $('.textdiv').fadeIn(2500)
        //timeoutvar = setTimeout(()=>{
        sound_player('p2s1txt')
        current_sound.on('complete', function () {
          clickspeaker('clap')
          clickspeaker1('wave')
          //    setTimeout(() => {
          $('.wave1').hide(0)
          $('.wave2').fadeIn(0)
          //    }, 2000);
          clickAns()
          Replay()
        })
        break
      case 4:
        $('.imagediv').fadeIn(2000)
        $('.textdiv').fadeIn(2500)
        //timeoutvar = setTimeout(()=>{
        sound_player('p2s1txt')
        current_sound.on('complete', function () {
          $('.imagediv').fadeIn(0)
          clickspeaker('sit')
          clickspeaker1('go')
          $('.last').hide(0)
          $('.gif1').fadeIn(0)
          clickAns()
          Replay()
          //   pageEndSetNotification();
        })
        break
      default:
        nav_button_controls(1000)
        break
    }
  }
  function Replay() {
    $('.replay').click(function () {
      //clearTimeout(function () {
      $('.wave2,.boy1, .gif1').fadeOut(0)
      $('.wave1,.boy, .last').show(0)
      setTimeout(() => {
        $('.wave2,.boy1, .gif1').fadeIn(0)
        $('.wave1,.boy, .last').hide(0)
        $('confetti').fadeIn(0)
        $('.star').fadeIn(0)
      }, 2400)
    })
  }

  function clickspeaker(speaker_sound) {
    $('.spk1').click(function () {
      current_sound = createjs.Sound.play(speaker_sound)
      current_sound.play()
      $('.spk1').css('pointer-events', 'none')
      current_sound.on('complete', function () {
        $('.spk1').css('pointer-events', 'all')
      })
    })
  }
  function clickspeaker1(speaker_sound) {
    $('.spk2').click(function () {
      current_sound = createjs.Sound.play(speaker_sound)
      current_sound.play()
      $('.spk2').css('pointer-events', 'none')
      current_sound.on('complete', function () {
        $('.spk2').css('pointer-events', 'all')
      })
    })
  }
  function clickAns() {
    console.log('>>>>>>>>>>>')
    $('.textdiv').click(function () {
      console.log('Aaa')
      if ($(this).hasClass('correct')) {
        play_correct_incorrect_sound(1)
        console.log('Aaa')
        $(this).css('border', '2px solid #b6d7a8')
        $(this).css('background-color', '#e7f3feff')
        $(this).append(
          "<img class='correctwrongimg' src='images/correct.png'/>"
        )
        $('.optclass').addClass('avoid-click')
        $(this).append("<p class='afterans'>")
        $('.sb-p1').fadeOut(0)
        $('.sb-p22').fadeIn(0)
        $('.textdiv').css('pointer-events', 'none')
        nav_button_controls(0)
      }
      if ($(this).hasClass('wrong')) {
        play_correct_incorrect_sound(0)
        console.log('Aaa')
        $(this).css('border', '2px solid #ffbb90')
        $(this).css('background-color', '#e7f3feff')
        //$(this).attr("src", incorrect).appendTo(".incorrect");
        $(this).append(
          "<img class='correctwrongimg' src='images/incorrect.png'/>"
        )
      }
    })
  }

  $('[class*="diybutton-"]').css({ 'pointer-events': 'none' })
  $('.buttonsel').click(function () {
    if ($(this).hasClass('forhover')) {
      $(this).removeClass('forhover')
      if ($(this).hasClass('correct')) {
        // $('.speechbg.flipped,.answer1').animate({ opacity: '1' }, 600, 'linear');
        play_correct_incorrect_sound_sybbas_prayas(1)
        $(this).css({
          // background: '#bed62f',
          background: 'transparent',
          border: '0.25em solid #6AA84F',
          color: 'white',
        })
        $('[class*="diybutton-"]').css({ 'pointer-events': 'none' })
        appender($(this), 'corrimg')
        $('.buttonsel').removeClass('forhover forhoverimg')
        nav_button_controls(1000)
        // sound_player(itsa, 1);
      } else {
        play_correct_incorrect_sound_sybbas_prayas(0)
        appender($(this), 'incorrimg')
        $(this).css({
          // background: '#FF0000',
          background: 'transparent',
          border: '0.25em solid #CC0000',
          color: '#000000',
        })
        // $(this).siblings(".wrngopt").show(0);
      }
    }

    function appender($this, icon) {
      if ($this.hasClass('diybutton-1'))
        $('.coverboardfull').append(
          "<img class='icon-one icon1' src= '" +
            preload.getResult(icon).src +
            "'>"
        )
      else
        $('.coverboardfull').append(
          "<img class='icon-two icon1' src= '" +
            preload.getResult(icon).src +
            "'>"
        )
    }
  })

  function nav_button_controls(delay_ms) {
    timeoutvar = setTimeout(function () {
      if (countNext == 0) {
        $nextBtn.show(0)
      } else if (countNext > 0 && countNext == $total_page - 1) {
        $prevBtn.show(0)
        ole.footerNotificationHandler.lessonEndSetNotification()
      } else {
        $prevBtn.show(0)
        $nextBtn.show(0)
      }
    }, delay_ms)
  }
  function sound_player(sound_id) {
    createjs.Sound.stop()
    current_sound = createjs.Sound.play(sound_id)
    current_sound.play()
  }
  function sound_nav(sound_id) {
    createjs.Sound.stop()
    current_sound = createjs.Sound.play(sound_id)
    current_sound.play()
    current_sound.on('complete', function () {
      nav_button_controls(0)
    })
  }

  function put_image(content, count) {
    if (content[count].hasOwnProperty('imageblock')) {
      var imageblock = content[count].imageblock[0]
      if (imageblock.hasOwnProperty('imagestoshow')) {
        var imageClass = imageblock.imagestoshow
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
  function put_top_head_image(content, count) {
    if (content[count].hasOwnProperty('imagetop')) {
      var imagetop = content[count].imagetop[0]
      if (imagetop.hasOwnProperty('imagestoshow')) {
        var imageClass = imagetop.imagestoshow
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
  function put_option_image(content, count) {
    if (content[count].hasOwnProperty('optionimageblock')) {
      var optionimageblock = content[count].optionimageblock[0]
      if (optionimageblock.hasOwnProperty('imagestoshow')) {
        var imageClass = optionimageblock.imagestoshow
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
  function put_summary_image(content, count) {
    if (content[count].hasOwnProperty('summaryitem')) {
      var summaryitem = content[count].summaryitem
      for (var i = 0; i < summaryitem.length; i++) {
        var image_src = preload.getResult(summaryitem[i].imgid).src
        //get list of classes
        var classes_list = summaryitem[i].summaryitem.match(/\S+/g) || []
        var selector =
          '.' + classes_list[classes_list.length - 1] + '>.summaryimg'
        $(selector).attr('src', image_src)
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
				});
			}
	*/
  }
  $nextBtn.on('click', function () {
    createjs.Sound.stop()
    clearTimeout(timeoutvar)
    switch (countNext) {
      default:
        countNext++
        templateCaller()
        break
    }
  })

  $refreshBtn.click(function () {
    templateCaller()
  })

  $prevBtn.on('click', function () {
    createjs.Sound.stop()
    clearTimeout(timeoutvar)
    countNext--
    templateCaller()
    /* if footerNotificationHandler pageEndSetNotification was called then on click of
		 previous slide button hide the footernotification */
    countNext < $total_page
      ? ole.footerNotificationHandler.hideNotification()
      : null
  })
})
