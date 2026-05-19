var imgpath = $ref + '/images/'
var imgpath1 = $ref + '/images/Section1/'
var imgpath2 = $ref + '/images/Section2/'
var imgpath3 = $ref + '/images/Section3/'
var soundAsset = $ref + '/sounds/' + $lang + '/'

var content = [
  //slide0
  {
    contentnocenteradjust: true,
    contentblockadditionalclass: 'bg',
    textblock: [
      {
        textdiv: 'maintitle fadeInEffect',
        textclass: 'content centertext',
        textdata: data.string.p3text1,
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgdiv: 'ball b1 first boy_talking1',
            imgclass: 'relativecls img2',
            imgid: 'boy_talking1',
            imgsrc: '',
          },
        ],
      },
    ],
  },
  //slide1
  {
    contentnocenteradjust: true,
    contentblockadditionalclass: 'bg',
    textblock: [
      {
        textdiv: 'maintitle fadeInEffect',
        textclass: 'content',
        textdata: data.string.p3text2,
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgdiv: 'speechbox_img first',
            imgclass: 'relativecls img2 boy_talking',
            imgid: 'boy_talking',
            imgsrc: '',
          },
        ],
      },
    ],

    containerblockadditionalclass: 'container',
    containerblock: [
      {
        divclass: 'collection centercontainer bg_color_4',
      },
    ],

    optionblock: [
      {
        textdiv: 'option opt1',
        textclass: 'content1',
        textdata: data.string.p3text2_opt_a,
      },
      {
        textdiv: 'option opt2 correct',
        textclass: 'content1',
        textdata: data.string.p3text2_opt_b,
      },
      {
        textdiv: 'option opt3',
        textclass: 'content1',
        textdata: data.string.p3text2_opt_c,
      },
    ],
  },
  //slide2
  {
    contentnocenteradjust: true,
    contentblockadditionalclass: 'bg',
    textblock: [
      {
        textdiv: 'maintitle fadeInEffect',
        textclass: 'content',
        textdata: data.string.p3text3,
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgdiv: 'speechbox_img first',
            imgclass: 'relativecls img2 boy_talking',
            imgid: 'boy_talking',
            imgsrc: '',
          },
        ],
      },
    ],

    containerblockadditionalclass: 'container',
    containerblock: [
      {
        divclass: 'collection centercontainer bg_color_4',
      },
    ],

    optionblock: [
      {
        textdiv: 'option opt1',
        textclass: 'content1',
        textdata: data.string.p3text3_opt_a,
      },
      {
        textdiv: 'option opt2 correct',
        textclass: 'content1',
        textdata: data.string.p3text3_opt_b,
      },
      {
        textdiv: 'option opt3',
        textclass: 'content1',
        textdata: data.string.p3text3_opt_c,
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
  var count = 0
  var setTime
  var $total_page = content.length
  loadTimelineProgress($total_page, countNext + 1)

  var preload
  var timeoutvar = null
  var current_sound
  var vocabcontroller = new Vocabulary()
  vocabcontroller.init()

  function init() {
    //specify type otherwise it will load assests as XHR
    manifest = [
      {
        id: 'boy_blinking',
        src: imgpath + 'character/boy_blinking.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'boy_talking',
        src: imgpath + 'character/boy_talking.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'boy_talking1',
        src: imgpath + 'character/boy_talking1.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'pluse',
        src: imgpath + 'Section1/pluse.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'questionbar',
        src: imgpath + 'Section1/questionbar.png',
        type: createjs.AbstractLoader.IMAGE,
      },

      // sounds
      { id: 'it_is_less_than', src: soundAsset + 'it_is_less_than.mp3' },
      { id: 'it_is_more_than', src: soundAsset + 'it_is_more_than.mp3' },
      { id: 'p3text1', src: soundAsset + 'p3text1.mp3' },
      { id: 'p3text2', src: soundAsset + 'p3text2.mp3' },
      { id: 'p3text3', src: soundAsset + 'p3text3.mp3' },
      { id: 'p3text1', src: soundAsset + 'p3text1.mp3' },
      { id: 'p3text2', src: soundAsset + 'p3text2.mp3' },
      { id: 'p3text2_ans_a', src: soundAsset + 'p3text2_ans_a.mp3' },
      { id: 'p3text2_ans_b', src: soundAsset + 'p3text2_ans_b.mp3' },
      { id: 'p3text3', src: soundAsset + 'p3text3.mp3' },
      { id: 'p3text3_ans_a', src: soundAsset + 'p3text3_ans_a.mp3' },
      { id: 'p3text3_ans_b', src: soundAsset + 'p3text3_ans_b.mp3' },
    ]
    preload = new createjs.LoadQueue(false)
    preload.installPlugin(createjs.Sound) //for registering sounds
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
    //initialize varibales
    current_sound = createjs.Sound.play('sound_1')
    current_sound.stop()
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

  /*=================================================
     =            general template function            =
     =================================================*/
  function generaltemplate() {
    var source = $('#general-template').html()
    var template = Handlebars.compile(source)
    var html = template(content[countNext])
    $board.html(html)

    texthighlight($board)
    vocabcontroller.findwords(countNext)
    put_image(content, countNext, preload)
    switch (countNext) {
      case 0:
        sound_player('p3text1', function () {
          nav_button_controls(0)
        })
        break
      case 1:
        $('.container').css('justify-content', 'center')

        $('.centercontainer').append(`
          <img class='questionbar' src=''>
          <div class='question_text'>
            <div class='addition_icon'>
              <img class='addicon' src=''>
            </div>
            <div class="number_section">
              <span class="first_number">${data.string.p3text2_a}</span>
              <span class="second_number">${data.string.p3text2_b}</span>
            </div>
            <div class='answer_text'></div>
          </div>
          <div class="highlighter"></div>
        `)
        $('.questionbar').attr('src', preload.getResult('questionbar').src)
        $('.addicon').attr('src', preload.getResult('pluse').src)

        $('.options').suffleCardList()
        $('.option').css('pointer-events', 'none')
        $('.option').fadeIn(2000).css('display', 'flex')
        sound_player('p3text2', function () {
          $('.boy_talking').attr('src', preload.getResult('boy_blinking').src)
          checkAns(animateAns)
          clearTimeout(timeoutvar)
        })
        function animateAns() {
          if ($lang == 'np') {
            $('.answer_text').text('६')
          } else {
            $('.answer_text').text('6')
          }
          $('.highlighter').fadeIn(1000).css({ height: '35%' })

          $('.maintitle > .content').html(
            `<span>${data.string.p3text2_ans_a} </span>`
          )
          $('.boy_talking').attr('src', preload.getResult('boy_talking').src)
          sound_player('p3text2_ans_a', function () {
            $('.boy_talking').attr('src', preload.getResult('boy_blinking').src)
            $('.highlighter').fadeIn(1000).css({ left: '44%' })
            $('.answer_text').text(data.string.p3text2_opt_b)

            $('.maintitle > .content').append(
              `</br><span>${data.string.p3text2_ans_b}</span>`
            )
            $('.boy_talking').attr('src', preload.getResult('boy_talking').src)
            sound_player('p3text2_ans_b', function () {
              $('.boy_talking').attr(
                'src',
                preload.getResult('boy_blinking').src
              )
              nav_button_controls(0)
            })
          })
        }
        break
      case 2:
        $('.container').css('justify-content', 'center')

        $('.centercontainer').append(`
          <img class='questionbar' src=''>
          <div class='question_text'>
            <div class='addition_icon'>
              <img class='addicon' src=''>
            </div>
            <div class="number_section">
              <span class="first_number">${data.string.p3text4_a}</span>
              <span class="second_number">${data.string.p3text4_b}</span>
            </div>
            <div class='answer_text'></div>
          </div>
          <div class="highlighter"></div>
        `)
        $('.questionbar').attr('src', preload.getResult('questionbar').src)
        $('.addicon').attr('src', preload.getResult('pluse').src)

        $('.options').suffleCardList()
        $('.option').css('pointer-events', 'none')
        $('.option').fadeIn(2000).css('display', 'flex')
        sound_player('p3text3', function () {
          $('.boy_talking').attr('src', preload.getResult('boy_blinking').src)
          checkAns(animateAnsNew)
          clearTimeout(timeoutvar)
        })

        function animateAnsNew() {
          if ($lang == 'np') {
            $('.answer_text').text('५')
          } else {
            $('.answer_text').text('5')
          }
          $('.highlighter').fadeIn(1000).css({ height: '35%' })

          $('.maintitle > .content').html(
            `<span>${data.string.p3text3_ans_a} </span>`
          )
          $('.boy_talking').attr('src', preload.getResult('boy_talking').src)
          sound_player('p3text3_ans_a', function () {
            $('.boy_talking').attr('src', preload.getResult('boy_blinking').src)
            $('.highlighter').fadeIn(1000).css({ left: '44%' })
            $('.answer_text').text(data.string.p3text3_opt_b)

            $('.maintitle > .content').append(
              `</br><span>${data.string.p3text3_ans_b}</span>`
            )
            $('.boy_talking').attr('src', preload.getResult('boy_talking').src)
            sound_player('p3text3_ans_b', function () {
              $('.boy_talking').attr(
                'src',
                preload.getResult('boy_blinking').src
              )
              nav_button_controls(0)
            })
          })
        }
        break
      default:
        clearTimeout(setTime)
        break
    }
  }

  $.fn.suffleCardList = function () {
    $.each(this.get(), function (index, el) {
      var $el = $(el)
      var $find = $el.children()

      $find.sort(function () {
        return 0.5 - Math.random()
      })

      $el.empty()
      $find.appendTo($el)
    })
  }

  function checkAns(callback) {
    $('.option').css('pointer-events', 'all')
    $('.option').click(function () {
      $('.highlighter').hide(0).css({ left: '49%' })
      if ($(this).hasClass('correct')) {
        $(this).addClass('correctans')

        $('.answerspan').animate({ color: '#595959' }, 500)
        $('.option').css('pointer-events', 'none')
        $('.option').off('click')
        callback()
      } else {
        $(this).addClass('wrongans')
        if ($(this).hasClass('opt1')) {
          $('.maintitle > .content').text(data.string.it_is_more_than)
          $('.boy_talking').attr('src', preload.getResult('boy_talking').src)
          $('.highlighter').fadeIn(1000)
          sound_player('it_is_more_than', function () {
            $('.highlighter').css({ left: '44%' })
            $('.boy_talking').attr('src', preload.getResult('boy_blinking').src)
          })
        }
        if ($(this).hasClass('opt3')) {
          $('.maintitle > .content').text(data.string.it_is_less_than)
          $('.boy_talking').attr('src', preload.getResult('boy_talking').src)

          $('.highlighter').fadeIn(1000)
          sound_player('it_is_less_than', function () {
            $('.highlighter').css({ left: '44%' })
            $('.boy_talking').attr('src', preload.getResult('boy_blinking').src)
          })
        }

        $(this).css('pointer-events', 'none')
        $(this).off('click')
      }
    })
  }
  function sound_player(sound_id, callback) {
    createjs.Sound.stop()
    current_sound = createjs.Sound.play(sound_id)
    current_sound.play()
    current_sound.on('complete', function () {
      callback ? callback() : ''
    })
  }

  function nav_button_controls(delay_ms) {
    timeoutvar = setTimeout(function () {
      if (countNext == 0) {
        $nextBtn.show(0)
        // ole.footerNotificationHandler.lessonEndSetNotification();
      } else if (countNext > 0 && countNext == $total_page - 1) {
        $prevBtn.show(0)
        ole.footerNotificationHandler.lessonEndSetNotification()
      } else {
        $prevBtn.show(0)
        $nextBtn.show(0)
      }
    }, delay_ms)
  }

  function templateCaller() {
    $prevBtn.css('display', 'none')
    $nextBtn.css('display', 'none')
    generaltemplate()
    loadTimelineProgress($total_page, countNext + 1)
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
})
