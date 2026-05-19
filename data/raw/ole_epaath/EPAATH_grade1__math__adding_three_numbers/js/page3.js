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
            imgdiv: 'background_1',
            imgclass: 'relativecls img1',
            imgid: 'background_1',
            imgsrc: '',
          },
          {
            imgdiv: 'ball b1 first girl_talk',
            imgclass: 'relativecls img2',
            imgid: 'girl_talk',
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
        textclass: 'content centertext',
        textdata: data.string.p3text2,
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgdiv: 'background_1',
            imgclass: 'relativecls img1',
            imgid: 'background_1',
            imgsrc: '',
          },
        ],
      },
    ],

    containerblockadditionalclass: 'container',
    containerblock: [
      {
        divclass: 'collection container1 bg_color_1',
      },
    ],
  },
  //slide1.1
  {
    contentnocenteradjust: true,
    contentblockadditionalclass: 'bg',
    textblock: [
      {
        textdiv: 'maintitle fadeInEffect',
        textclass: 'content centertext',
        textdata: data.string.p3text3,
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgdiv: 'background_1',
            imgclass: 'relativecls img1',
            imgid: 'background_1',
            imgsrc: '',
          },
        ],
      },
    ],

    containerblockadditionalclass: 'container',
    containerblock: [
      {
        divclass: 'collection container1 bg_color_1',
      },
      {
        divclass: 'collection container2 bg_color_2',
      },
    ],
  },
  //slide1.2
  {
    contentnocenteradjust: true,
    contentblockadditionalclass: 'bg',
    textblock: [
      {
        textdiv: 'maintitle fadeInEffect',
        textclass: 'content centertext',
        textdata: data.string.p3text4,
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgdiv: 'background_1',
            imgclass: 'relativecls img1',
            imgid: 'background_1',
            imgsrc: '',
          },
        ],
      },
    ],

    containerblockadditionalclass: 'container',
    containerblock: [
      {
        divclass: 'collection container1 bg_color_1',
      },
      {
        divclass: 'collection container2 bg_color_2',
      },
      {
        divclass: 'collection container3 bg_color_3',
      },
    ],
  },
  //slide1.3
  {
    contentnocenteradjust: true,
    contentblockadditionalclass: 'bg',
    textblock: [
      {
        textdiv: 'maintitle fadeInEffect',
        textclass: 'content centertext',
        textdata: data.string.p3text5,
      },
      {
        textdiv: 'maintitle maintitle4',
        textclass: 'content centertext',
        textdata: data.string.p3text6,
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgdiv: 'background_1',
            imgclass: 'relativecls img1',
            imgid: 'background_1',
            imgsrc: '',
          },
        ],
      },
    ],

    containerblockadditionalclass: 'container',
    containerblock: [
      {
        divclass: 'collection container1 bg_color_1',
      },
      {
        divclass: 'collection container2 bg_color_2',
      },
      {
        divclass: 'collection container3 bg_color_3',
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
        textclass: 'content centertext',
        textdata: data.string.p3text7,
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgdiv: 'background_1',
            imgclass: 'relativecls img1',
            imgid: 'background_1',
            imgsrc: '',
          },
        ],
      },
    ],

    containerblockadditionalclass: 'container-wrapper',
    containerblock: [
      {
        divclass: 'collection container1 bg_color_1',
      },
      {
        divclass: 'collection container2 bg_color_2',
      },
      {
        divclass: 'collection container3 bg_color_3',
      },
      {
        divclass: 'collection container4 bg_color_4',
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

  var nepalicounter = [
    '१',
    '२',
    '३',
    '४',
    '५',
    '६',
    '७',
    '८',
    '९',
    '१०',
    '११',
    '१२',
    '१३',
    '१४',
    '१५',
    '१६',
    '१७',
    '१८',
    '१९',
    '२०',
  ]

  function init() {
    //specify type otherwise it will load assests as XHR
    manifest = [
      {
        id: 'background_1',
        src: imgpath1 + 'background_1.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'girl_blink',
        src: imgpath1 + 'girl_blink.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'girl_talk',
        src: imgpath1 + 'girl_talk.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'girl_blink_crop',
        src: imgpath3 + 'girl_blink.gif ',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'girl_talk_crop',
        src: imgpath3 + 'girl_talk.gif ',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'hands_3',
        src: imgpath3 + 'hands_3.png ',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'hands_6',
        src: imgpath3 + 'hands_6.png ',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'hands_7',
        src: imgpath3 + 'hands_7.png ',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'marble_green',
        src: imgpath3 + 'marble_green.png ',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'marble_red',
        src: imgpath3 + 'marble_red.png ',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'marble_yellow',
        src: imgpath3 + 'marble_yellow.png ',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'numa_blink',
        src: imgpath3 + 'numa_blink.gif ',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'sagar_blink',
        src: imgpath3 + 'sagar_blink.gif',
        type: createjs.AbstractLoader.IMAGE,
      },

      // sounds
      { id: 'p3text1', src: soundAsset + 'p3text1.mp3' },
      { id: 'p3text2', src: soundAsset + 'p3text2.mp3' },
      { id: 'p3text2a', src: soundAsset + 'p3text2a.mp3' },
      { id: 'p3text3', src: soundAsset + 'p3text3.mp3' },
      { id: 'p3text3a', src: soundAsset + 'p3text3a.mp3' },
      { id: 'p3text4', src: soundAsset + 'p3text4.mp3' },
      { id: 'p3text4a', src: soundAsset + 'p3text4a.mp3' },
      { id: 'p3text5', src: soundAsset + 'p3text5.mp3' },
      { id: 'p3text6', src: soundAsset + 'p3text6.mp3' },
      { id: 'p3text7', src: soundAsset + 'p3text7.mp3' },

      { id: 'sound_n1', src: soundAsset + 'n_1.mp3' },
      { id: 'sound_n2', src: soundAsset + 'n_2.mp3' },
      { id: 'sound_n3', src: soundAsset + 'n_3.mp3' },
      { id: 'sound_n4', src: soundAsset + 'n_4.mp3' },
      { id: 'sound_n5', src: soundAsset + 'n_5.mp3' },
      { id: 'sound_n6', src: soundAsset + 'n_6.mp3' },
      { id: 'sound_n7', src: soundAsset + 'n_7.mp3' },
      { id: 'sound_n8', src: soundAsset + 'n_8.mp3' },
      { id: 'sound_n9', src: soundAsset + 'n_9.mp3' },
      { id: 'sound_n10', src: soundAsset + 'n_10.mp3' },
      { id: 'sound_n11', src: soundAsset + 'n_11.mp3' },
      { id: 'sound_n12', src: soundAsset + 'n_12.mp3' },
      { id: 'sound_n13', src: soundAsset + 'n_13.mp3' },
      { id: 'sound_n14', src: soundAsset + 'n_14.mp3' },
      { id: 'sound_n15', src: soundAsset + 'n_15.mp3' },
      { id: 'sound_n16', src: soundAsset + 'n_16.mp3' },
      { id: 'sound_n17', src: soundAsset + 'n_17.mp3' },
      { id: 'sound_n18', src: soundAsset + 'n_18.mp3' },
      { id: 'sound_n19', src: soundAsset + 'n_1.mp3' },
      { id: 'sound_n20', src: soundAsset + 'n_1.mp3' },
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
          $('.girl_talk')
            .children('img')
            .attr('src', preload.getResult('girl_blink').src)
          nav_button_controls(0)
        })
        break
      case 1:
        var counter = 0
        var n = 0
        $('.container').css('justify-content', 'center')
        // $('.container1').hide(0);
        $('.container1').append(
          "<img class='avatar bg_color_1 avatar_1' src=''>"
        )
        $('.avatar_1').attr('src', preload.getResult('girl_talk_crop').src)
        sound_player('p3text2', function () {
          $('.avatar_1').attr('src', preload.getResult('girl_blink_crop').src)

          for (var i = 0; i < 7; i++) {
            counter++
            $('.container1').append(
              "<div class='sweet" +
                counter +
                "'><img class='marble_green' src=''></div>"
            )
            $('.marble_green').attr(
              'src',
              preload.getResult('marble_green').src
            )
            if (i >= 6) {
              $('.container1').append(
                `<span class="top-num">${data.string.p3text2a}</span`
              )
            }
          }

          $('.container1').append("<img class='finger finger1' src=''>")
          $('.finger1').attr('src', preload.getResult('hands_7').src)
          $('.container1').fadeIn(1000, function () {
            nav_button_controls(0)
          })
        })
        break
      case 2:
        var counter = 0
        var n = 0
        $('.container').css({
          'justify-content': 'space-around',
          transition: 'justify-content 1s ease',
        })
        $('.container2').hide(0)
        $('.container1').append(
          "<img class='avatar bg_color_1 avatar_1' src=''>"
        )
        $('.avatar_1').attr('src', preload.getResult('girl_talk_crop').src)

        for (var i = 0; i < 7; i++) {
          counter++
          $('.container1').append(
            "<div class='sweet" +
              counter +
              "'><img class='marble_green' src=''></div>"
          )
          $('.marble_green').attr('src', preload.getResult('marble_green').src)
          if (i >= 6) {
            $('.container1').append(
              `<span class="top-num">${data.string.p3text2a}</span`
            )
          }
        }

        $('.container1').append("<img class='finger finger1' src=''>")
        $('.finger1').attr('src', preload.getResult('hands_7').src)

        sound_player('p3text3', function () {
          $('.avatar_1').attr('src', preload.getResult('girl_blink_crop').src)
          $('.container2').append(
            "<img class='avatar bg_color_1 avatar_2' src=''>"
          )
          $('.avatar_2').attr('src', preload.getResult('sagar_blink').src)

          for (var i = 0; i < 3; i++) {
            counter++
            $('.container2').append(
              "<div class='sweet" +
                counter +
                "'><img class='marble_yellow' src=''></div>"
            )
            $('.marble_yellow').attr(
              'src',
              preload.getResult('marble_yellow').src
            )

            if (i >= 2) {
              $('.container2').append(
                `<span class="top-num y">${data.string.p3text3a}</span`
              )
            }
          }

          $('.container2').append("<img class='finger finger2' src=''>")
          $('.finger2').attr('src', preload.getResult('hands_3').src)
          $('.container2').fadeIn(2000, function () {
            nav_button_controls(0)
          })
        })
        break
      case 3:
        var counter = 0
        var n = 0
        $('.container').css({
          'justify-content': 'space-around',
          transition: 'justify-content 1s ease',
        })
        $('.container3').hide(0)
        $('.container1').append(
          "<img class='avatar bg_color_1 avatar_1' src=''>"
        )
        $('.avatar_1').attr('src', preload.getResult('girl_talk_crop').src)

        for (var i = 0; i < 7; i++) {
          counter++
          $('.container1').append(
            "<div class='sweet" +
              counter +
              "'><img class='marble_green' src=''></div>"
          )
          $('.marble_green').attr('src', preload.getResult('marble_green').src)

          if (i >= 6) {
            $('.container1').append(
              `<span class="top-num">${data.string.p3text2a}</span`
            )
          }
        }

        $('.container1').append("<img class='finger finger1' src=''>")
        $('.finger1').attr('src', preload.getResult('hands_7').src)

        $('.container2').append(
          "<img class='avatar bg_color_1 avatar_2' src=''>"
        )
        $('.avatar_2').attr('src', preload.getResult('sagar_blink').src)

        for (var i = 0; i < 3; i++) {
          counter++
          $('.container2').append(
            "<div class='sweet" +
              counter +
              "'><img class='marble_yellow' src=''></div>"
          )
          $('.marble_yellow').attr(
            'src',
            preload.getResult('marble_yellow').src
          )

          if (i >= 2) {
            $('.container2').append(
              `<span class="top-num y">${data.string.p3text3a}</span`
            )
          }
        }

        $('.container2').append("<img class='finger finger2' src=''>")
        $('.finger2').attr('src', preload.getResult('hands_3').src)

        sound_player('p3text4', function () {
          $('.avatar_1').attr('src', preload.getResult('girl_blink_crop').src)
          $('.container3').append(
            "<img class='avatar bg_color_1 avatar_3' src=''>"
          )
          $('.avatar_3').attr('src', preload.getResult('numa_blink').src)

          for (var i = 0; i < 6; i++) {
            counter++
            $('.container3').append(
              "<div class='sweet" +
                counter +
                "'><img class='marble_red' src=''></div>"
            )
            $('.marble_red').attr('src', preload.getResult('marble_red').src)
            if (i >= 5) {
              $('.container3').append(
                `<span class="top-num p">${data.string.p3text4a}</span`
              )
            }
          }

          $('.container3').append("<img class='finger finger3' src=''>")
          $('.finger3').attr('src', preload.getResult('hands_6').src)

          $('.container3').fadeIn(2000, function () {
            nav_button_controls(0)
          })
        })
        break
      case 4:
        var counter = 0
        var n = 0
        $('.container').css({
          'justify-content': 'space-around',
          transition: 'justify-content 1s ease',
        })
        $('.maintitle4').hide(0)
        $('.container1').append(
          "<img class='avatar bg_color_1 avatar_1' src=''>"
        )
        $('.avatar_1').attr('src', preload.getResult('girl_talk_crop').src)

        for (var i = 0; i < 7; i++) {
          counter++
          $('.container1').append(
            "<div class='sweet" +
              counter +
              "'><img class='marble_green' src=''></div>"
          )
          $('.marble_green').attr('src', preload.getResult('marble_green').src)
          if ($lang == 'np')
            $('.sweet' + counter).append(
              "<span class='number n_" +
                counter +
                "'>" +
                nepalicounter[counter - 1] +
                '</span>'
            )
          else
            $('.sweet' + counter).append(
              "<span class='number n_" + counter + "'>" + counter + '</span>'
            )
          if (i >= 6) {
            $('.container1').append(
              `<span class="top-num">${data.string.p3text2a}</span`
            )
          }
        }

        $('.container1').append("<img class='finger finger1' src=''>")
        $('.finger1').attr('src', preload.getResult('hands_7').src)

        $('.container2').append(
          "<img class='avatar bg_color_1 avatar_2' src=''>"
        )
        $('.avatar_2').attr('src', preload.getResult('sagar_blink').src)

        for (var i = 0; i < 3; i++) {
          counter++
          $('.container2').append(
            "<div class='sweet" +
              counter +
              "'><img class='marble_yellow' src=''></div>"
          )
          $('.marble_yellow').attr(
            'src',
            preload.getResult('marble_yellow').src
          )
          if ($lang == 'np')
            $('.sweet' + counter).append(
              "<span class='number n_" +
                counter +
                "'>" +
                nepalicounter[counter - 1] +
                '</span>'
            )
          else
            $('.sweet' + counter).append(
              "<span class='number n_" + counter + "'>" + counter + '</span>'
            )
          if (i >= 2) {
            $('.container2').append(
              `<span class="top-num y">${data.string.p3text3a}</span`
            )
          }
        }

        $('.container2').append("<img class='finger finger2' src=''>")
        $('.finger2').attr('src', preload.getResult('hands_3').src)

        $('.container3').append(
          "<img class='avatar bg_color_1 avatar_3' src=''>"
        )
        $('.avatar_3').attr('src', preload.getResult('numa_blink').src)

        for (var i = 0; i < 6; i++) {
          counter++
          $('.container3').append(
            "<div class='sweet" +
              counter +
              "'><img class='marble_red' src=''></div>"
          )
          $('.marble_red').attr('src', preload.getResult('marble_red').src)
          if ($lang == 'np')
            $('.sweet' + counter).append(
              "<span class='number n_" +
                counter +
                "'>" +
                nepalicounter[counter - 1] +
                '</span>'
            )
          else
            $('.sweet' + counter).append(
              "<span class='number n_" + counter + "'>" + counter + '</span>'
            )
          if (i >= 5) {
            $('.container3').append(
              `<span class="top-num p">${data.string.p3text4a}</span`
            )
          }
        }

        $('.container3').append("<img class='finger finger3' src=''>")
        $('.finger3').attr('src', preload.getResult('hands_6').src)

        sound_player('p3text5', function () {
          $('.avatar_1').attr('src', preload.getResult('girl_blink_crop').src)
          for (var j = 1; j <= counter; j++) {
            $('.n_' + j)
              .delay(j * 1000)
              .fadeIn(500, function () {
                n++
                $('.avatar_1').attr(
                  'src',
                  preload.getResult('girl_talk_crop').src
                )
                sound_player('sound_n' + n, function () {
                  $('.avatar_1').attr(
                    'src',
                    preload.getResult('girl_blink_crop').src
                  )

                  check()
                })
              })
          }
        })

        function check() {
          if (n == counter) {
            $('.maintitle').hide(0)
            $('.maintitle4').fadeIn(2000)
            $('.avatar_1').attr('src', preload.getResult('girl_talk_crop').src)
            sound_player('p3text6', function () {
              $('.avatar_1').attr(
                'src',
                preload.getResult('girl_blink_crop').src
              )
              nav_button_controls(0)
            })
          }
        }
        break
      case 5:
        var counter = 0
        var n = 0
        $('.container4').append(
          `<div class='marbles_wrap first_marbles'></div>
          <div class='marbles_wrap second_marbles'></div>
          <div class='marbles_wrap third_marbles'></div>`
        )

        for (var i = 0; i < 7; i++) {
          counter++
          $('.container1').append(
            "<div class='sweet" +
              counter +
              "'><img class='marble_green' src=''></div>"
          )
          $('.first_marbles').append(`<img class='marble_green' src=''>`)
          $('.marble_green').attr('src', preload.getResult('marble_green').src)
          if (i >= 6) {
            if ($lang == 'np')
              $('.container1').append(
                `<span class="top-num">${nepalicounter[i]}</span`
              )
            else $('.container1').append(`<span class="top-num">${i + 1}</span`)
          }
        }

        for (var i = 0; i < 3; i++) {
          counter++
          $('.container2').append(
            "<div class='sweet" +
              counter +
              "'><img class='marble_yellow' src=''></div>"
          )
          $('.second_marbles').append(`<img class='marble_yellow' src=''>`)
          $('.marble_yellow').attr(
            'src',
            preload.getResult('marble_yellow').src
          )

          if (i >= 2) {
            if ($lang == 'np')
              $('.container2').append(
                `<span class="top-num y">${nepalicounter[i]}</span`
              )
            else
              $('.container2').append(`<span class="top-num y">${i + 1}</span`)
          }
        }

        for (var i = 0; i < 6; i++) {
          counter++
          $('.container3').append(
            "<div class='sweet" +
              counter +
              "'><img class='marble_red' src=''></div>"
          )
          $('.third_marbles').append(`<img class='marble_red' src=''>`)
          $('.marble_red').attr('src', preload.getResult('marble_red').src)

          if (i >= 5) {
            if ($lang == 'np')
              $('.container3').append(
                `<span class="top-num p">${nepalicounter[i]}</span`
              )
            else
              $('.container3').append(`<span class="top-num p">${i + 1}</span`)
          }
        }

        if ($lang == 'np')
          $('.container-wrapper').append(
            `<span class="top-num sum">${nepalicounter[counter - 1]}</span> `
          )
        else
          $('.container-wrapper').append(
            `<span class="top-num sum">${counter}</span> `
          )

        $('.container-wrapper').append(`<span class="top-num add">+</span> `)
        $('.container-wrapper').append(`<span class="top-num add2">+</span> `)
        $('.container-wrapper').append(`<span class="top-num equal">=</span> `)
        sound_player('p3text7', function () {
          nav_button_controls(0)
        })
        break
      default:
        clearTimeout(setTime)
        break
    }
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
