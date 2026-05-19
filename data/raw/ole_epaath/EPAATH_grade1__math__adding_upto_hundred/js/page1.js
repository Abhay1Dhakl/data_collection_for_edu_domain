var imgpath = $ref + '/images/';
var imgpath1 = $ref + '/images/Section1/';
var soundAsset = $ref + '/sounds/' + $lang + '/';

var content = [
  //slide0
  {
    contentnocenteradjust: true,
    contentblockadditionalclass: 'coverback',
    textblock: [
      {
        textdiv: 'chtitle',
        textclass: 'content centertext',
        textdata: data.string.chapter,
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgdiv: 'coverpage',
            imgclass: 'relativecls img1',
            imgid: 'coverpage',
            imgsrc: '',
            paragraph1: 'hello',
            name: data.string.chapter,
          },
        ],
      },
    ],
  },
  // slide1
  {
    contentnocenteradjust: true,
    contentblockadditionalclass: 'bg',
    textblock: [
      {
        textdiv: 'maintitle fadeInEffect',
        textclass: 'content centertext',
        textdata: data.string.p1text1,
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgdiv: 'ball b1 first boy_talking1',
            imgclass: 'relativecls img2 main_character',
            imgid: 'boy_talking1',
            imgsrc: '',
          },
        ],
      },
    ],
  },
  //slide 2
  {
    contentnocenteradjust: true,
    contentblockadditionalclass: 'bg',
    textblock: [
      {
        textdiv: 'maintitle fadeInEffect',
        textclass: 'content',
        textdata: data.string.p1text2,
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
        divclass: 'collection container1 bg_color_1',
      },
    ],
  },
  //slide 23
  {
    contentnocenteradjust: true,
    contentblockadditionalclass: 'bg',
    textblock: [
      {
        textdiv: 'maintitle fadeInEffect',
        textclass: 'content ',
        textdata: data.string.p1text3,
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
        divclass: 'collection container1 bg_color_1',
      },
      {
        divclass: 'collection container2 bg_color_2',
      },
    ],
  },
  //slide 4
  {
    contentnocenteradjust: true,
    contentblockadditionalclass: 'bg',
    textblock: [
      {
        textdiv: 'maintitle fadeInEffect',
        textclass: 'content',
        textdata: data.string.p1text4,
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
        divclass: 'collection container1 bg_color_1',
      },
      {
        divclass: 'collection container2 bg_color_2',
      },
      {
        divclass: 'collection container3 bg_color_3',
      },
    ],

    optionblock: [
      {
        textdiv: 'option opt1',
        textclass: 'content1',
        textdata: data.string.p1text4_opt_a,
      },
      {
        textdiv: 'option opt2 correct',
        textclass: 'content1',
        textdata: data.string.p1text4_opt_b,
      },
      {
        textdiv: 'option opt3',
        textclass: 'content1',
        textdata: data.string.p1text4_opt_c,
      },
    ],
  },
];

$(function () {
  var $board = $('.board');
  var $nextBtn = $('#activity-page-next-btn-enabled');
  var $prevBtn = $('#activity-page-prev-btn-enabled');
  var $refreshBtn = $('#activity-page-refresh-btn');
  var countNext = 0;

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
        id: 'boy_blinking1',
        src: imgpath + 'character/boy_blinking1.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'numa_blink',
        src: imgpath + 'character/numa_blink.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'usha_blinking',
        src: imgpath + 'character/usha_blinking.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'coverpage',
        src: imgpath1 + 'coverpage.png',
        type: createjs.AbstractLoader.IMAGE,
      },

      {
        id: 'pluse',
        src: imgpath + 'Section1/pluse.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: '30_marble',
        src: imgpath + 'Section1/30_marble.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: '40_marble',
        src: imgpath + 'Section1/40_marbles.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'questionbar',
        src: imgpath + 'Section1/questionbar.png',
        type: createjs.AbstractLoader.IMAGE,
      },

      // old images
      {
        id: 'coverpagenp',
        src: imgpath1 + 'coverpage_np.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'background_1',
        src: imgpath1 + 'background_1.png',
        type: createjs.AbstractLoader.IMAGE,
      },

      // sounds
      { id: 'less_than', src: soundAsset + 'less_than.mp3' },
      { id: 'more_than', src: soundAsset + 'more_than.mp3' },
      { id: 'chapter', src: soundAsset + 'chapter.mp3' },
      { id: 'p1text1', src: soundAsset + 'p1text1.mp3' },
      { id: 'p1text2', src: soundAsset + 'p1text2.mp3' },
      { id: 'p1text3', src: soundAsset + 'p1text3.mp3' },
      { id: 'p1text4', src: soundAsset + 'p1text4.mp3' },
      { id: 'p1text5', src: soundAsset + 'p1text5.mp3' },
      { id: 'p1text6', src: soundAsset + 'p1text6.mp3' },
      { id: 'p1text7', src: soundAsset + 'p1text7.mp3' },
    ];
    preload = new createjs.LoadQueue(false);
    preload.installPlugin(createjs.Sound); //for registering sounds
    preload.installPlugin(createjs.Sound); //for registering sounds
    preload.on('progress', handleProgress);
    preload.on('complete', handleComplete);
    preload.on('fileload', handleFileLoad);
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
  Handlebars.registerPartial('textcontent', $('#textcontent-partial').html());
  Handlebars.registerPartial('imagecontent', $('#imagecontent-partial').html());

  /*=================================================
     =            general template function            =
     =================================================*/
  function generaltemplate() {
    var source = $('#general-template').html();
    var template = Handlebars.compile(source);
    var html = template(content[countNext]);
    $board.html(html);

    texthighlight($board);
    vocabcontroller.findwords(countNext);
    put_image(content, countNext, preload);
    switch (countNext) {
      case 0:
        sound_player('chapter', function () {
          nav_button_controls(0);
        });
        break;
      case 1:
        sound_player('p1text1', function () {
          $('.main_character')
            .attr('src', preload.getResult('boy_blinking1').src)
            .css({
              width: '85%',
            });
          nav_button_controls(0);
        });
        break;
      case 2:
        $('.container1').hide(0);

        $('.container1').append(
          `<img class='green_candy' src=''>
           <img class='avatar bg_color_4 avatar_1' src=''>
           <div class="bottom_number bg_color_4"></div>`
        );
        $('.green_candy').attr('src', preload.getResult('30_marble').src);
        $('.avatar_1').attr('src', preload.getResult('usha_blinking').src);
        $('.bottom_number').text(data.string.p1text4_a);

        $('.container1').fadeIn(1000);
        sound_player('p1text2', function () {
          $('.boy_talking').attr('src', preload.getResult('boy_blinking').src);
          nav_button_controls(0);
        });
        break;
      case 3:
        $('.b2, .container2').hide(0);

        $('.container1').append(
          `<img class='green_candy' src=''>
           <img class='avatar bg_color_4 avatar_1' src=''>
           <div class="bottom_number bg_color_4"></div>`
        );
        $('.green_candy').attr('src', preload.getResult('30_marble').src);
        $('.avatar_1').attr('src', preload.getResult('usha_blinking').src);
        $('.bottom_number').text(data.string.p1text4_a);

        $('.container1').animate({ left: '30%' }, 1000, function () {
          $('.container2').append(
            `<img class='yellow_candy' src=''>
             <img class='avatar bg_color_5 avatar_2' src=''>
             <div class="bottom_number bottom_number_2 bg_color_5"></div>`
          );
          $('.yellow_candy').attr('src', preload.getResult('40_marble').src);
          $('.avatar_2').attr('src', preload.getResult('numa_blink').src);
          $('.bottom_number_2').text(data.string.p1text4_b);

          $('.container2').fadeIn(2000);
          sound_player('p1text3', function () {
            $('.boy_talking').attr(
              'src',
              preload.getResult('boy_blinking').src
            );

            nav_button_controls(0);
          });
        });
        break;
      case 4:
        $('.maintitle1, .b3, .container3').hide(0);

        $('.container1').append(
          `<img class='green_candy' src=''>
           <img class='avatar bg_color_4 avatar_1' src=''>
           <div class="bottom_number bg_color_4"></div>`
        );
        $('.green_candy').attr('src', preload.getResult('30_marble').src);
        $('.avatar_1').attr('src', preload.getResult('usha_blinking').src);
        $('.bottom_number').text(data.string.p1text4_a);

        $('.container1').css({ left: '30%' });
        $('.container1').animate({ left: '20%' }, 1000);

        $('.container2').append(
          `<img class='yellow_candy' src=''>
           <img class='avatar bg_color_5 avatar_2' src=''>
           <div class="bottom_number bottom_number_2 bg_color_5"></div>`
        );
        $('.yellow_candy').attr('src', preload.getResult('40_marble').src);
        $('.avatar_2').attr('src', preload.getResult('numa_blink').src);
        $('.bottom_number_2').text(data.string.p1text4_b);

        $('.container2').animate({ left: '48%' }, 1000, function () {
          $('.container3').append(`
            <img class='questionbar' src=''>
            <div class='question_text'>
              <div class='addition_icon'>
                <img class='addicon' src=''>
              </div>
              <div class="number_section">
                <span class="first_number">${data.string.p1text4_a}</span>
                <span class="second_number">${data.string.p1text4_b}</span>
              </div>
              <div class='answer_text'></div>
            </div>
            <div class="highlighter"></div>`);
          $('.questionbar').attr('src', preload.getResult('questionbar').src);
          $('.addicon').attr('src', preload.getResult('pluse').src);

          $('.options').suffleCardList();
          $('.option').css('pointer-events', 'none');
          $('.container3')
            .show(0)
            .animate({ right: 0 }, 1000, function () {
              $('.option').fadeIn(2000).css('display', 'flex');
            });
          sound_player('p1text4', function () {
            $('.boy_talking').attr(
              'src',
              preload.getResult('boy_blinking').src
            );
            checkAns();
            clearTimeout(timeoutvar);
          });
        });
        break;
      default:
        break;
    }
  }
  $.fn.suffleCardList = function () {
    $.each(this.get(), function (index, el) {
      var $el = $(el);
      var $find = $el.children();

      $find.sort(function () {
        return 0.5 - Math.random();
      });

      $el.empty();
      $find.appendTo($el);
    });
  };

  function checkAns() {
    $('.option').css('pointer-events', 'all');

    $('.option').click(function () {
      $('.highlighter').hide(0).css({ left: '54%' });
      if ($(this).hasClass('correct')) {
        $(this).addClass('correctans');

        $('.answerspan').animate({ color: '#595959' }, 500);
        $('.option').css('pointer-events', 'none');
        $('.option').off('click');

        // answer animation
        if ($lang == 'np') {
          $('.answer_text').text('०');
        } else {
          $('.answer_text').text('0');
        }
        $('.highlighter').fadeIn(1000).css({ height: '40%' });
        $('.maintitle > .content').html(`<span>${data.string.p1text5} </span>`);
        $('.boy_talking').attr('src', preload.getResult('boy_talking').src);

        sound_player('p1text5', function () {
          $('.boy_talking').attr('src', preload.getResult('boy_blinking').src);
          $('.highlighter').fadeIn(1000).css({ left: '45%' });
          $('.answer_text').text(data.string.p1text4_opt_b);

          $('.maintitle > .content').append(
            `</br><span>${data.string.p1text6}</span>`
          );
          $('.boy_talking').attr('src', preload.getResult('boy_talking').src);
          sound_player('p1text6', function () {
            $('.boy_talking').attr(
              'src',
              preload.getResult('boy_blinking').src
            );

            $('.maintitle > .content').text(data.string.p1text7);
            $('.boy_talking').attr('src', preload.getResult('boy_talking').src);
            sound_player('p1text7', function () {
              $('.boy_talking').attr(
                'src',
                preload.getResult('boy_blinking').src
              );

              nav_button_controls(0);
            });
          });
        });
      } else {
        $(this).addClass('wrongans');
        $('.highlighter').fadeIn(3000);
        if ($(this).hasClass('opt1')) {
          $('.maintitle > .content').text(data.string.more_than);
          $('.boy_talking').attr('src', preload.getResult('boy_talking').src);
          sound_player('more_than', function () {
            $('.highlighter').css({ left: '45%' });
            $('.boy_talking').attr(
              'src',
              preload.getResult('boy_blinking').src
            );
          });
        }
        if ($(this).hasClass('opt3')) {
          $('.boy_talking').attr('src', preload.getResult('boy_talking').src);
          $('.maintitle > .content').text(data.string.less_than);
          sound_player('less_than', function () {
            $('.highlighter').css({ left: '45%' });
            $('.boy_talking').attr(
              'src',
              preload.getResult('boy_blinking').src
            );
          });
        }

        $(this).css('pointer-events', 'none');
        $(this).off('click');
      }
    });
  }

  /**
   * TODO
   * This function is not used and can be used for next button show with delay time
   */
  function nav_button_controls(delay_ms) {
    timeoutvar = setTimeout(function () {
      if (countNext == 0) {
        $nextBtn.show(0);
      } else if (countNext > 0 && countNext == $total_page - 1) {
        $prevBtn.show(0);
        ole.footerNotificationHandler.pageEndSetNotification();
      } else {
        $prevBtn.show(0);
        $nextBtn.show(0);
      }
    }, delay_ms);
  }
  function sound_player(sound_id, callback) {
    createjs.Sound.stop();
    current_sound = createjs.Sound.play(sound_id);
    current_sound.play();
    current_sound.on('complete', function () {
      callback ? callback() : '';
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
    countNext < $total_page
      ? ole.footerNotificationHandler.hideNotification()
      : null;
  });

  function texthighlight($highlightinside) {
    //check if $highlightinside is provided
    typeof $highlightinside !== 'object'
      ? alert(
          'Texthighlight : Hi Master, Please pass me a Jquery Object whose child are to be highlighted'
        )
      : null;

    var $alltextpara = $highlightinside.find("*[data-highlight='true']");
    var stylerulename;
    var replaceinstring;
    var texthighlightstarttag;
    var texthighlightendtag = '</span>';
    if ($alltextpara.length > 0) {
      $.each($alltextpara, function (index, val) {
        /*if there is a data-highlightcustomclass attribute defined for the text element
                 use that or else use default 'parsedstring'*/
        $(this).attr(
          'data-highlightcustomclass'
        ) /*if there is data-highlightcustomclass defined it is true else it is not*/
          ? (stylerulename = $(this).attr('data-highlightcustomclass'))
          : (stylerulename = 'parsedstring');

        texthighlightstarttag = "<span class='" + stylerulename + "'>";
        replaceinstring = $(this).html();
        replaceinstring = replaceinstring.replace(/#/g, texthighlightstarttag);
        replaceinstring = replaceinstring.replace(/@/g, texthighlightendtag);
        $(this).html(replaceinstring);
      });
    }
  }
});
