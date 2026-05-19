var soundAsset = $ref + '/sounds/';
var imgpathMain = $ref + '/images/';
var imgpath = $ref + '/images/sec3/';

var content = [
  // Page 1
  {
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'bg_full',
            imgid: 'cover',
          },
          {
            imgclass: 'character ch-left',
            imgid: 'munaWheelChair',
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'speechbox sp-1',
        textclass: 'sppechtext',
        textdata: data.string.p3s1,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
  },
  // Page 2
  {
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'bg_full',
            imgid: 'cover',
          },
          {
            imgclass: 'character ch-left',
            imgid: 'munaWheelChair',
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'speechbox sp-1',
        textclass: 'sppechtext',
        textdata: data.string.p3s2,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
  },
  // Page 3
  {
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'bg_full blur',
            imgid: 'cover',
          },
          {
            imgclass: 'bag',
            imgid: 'bagempty',
          },
          {
            imgclass: 'character ch-left__lg',
            imgid: 'munaWheelChair',
          },
        ],
      },
    ],
    speechbox: [
      {
        audioicon: true,
        speechbox: 'speechbox sp-1 sp-left',
        textclass: 'sppechtext',
        textdata: data.string.p3s3,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
    qna: [
      {
        textclass: 'instruction',
        textdata: data.string.p3instruction,
        imagestoshow: [
          {
            imgcontentindivwithlabel: true,
            imgcontentindivclass: 'option correct',
            imgclass: 'img1',
            imgid: 'bagonbed',
          },
          {
            imgcontentindivwithlabel: true,
            imgcontentindivclass: 'option',
            imgclass: 'img2',
            imgid: 'bagunderbed',
          },
        ],
      },
    ],
  },
  // Page 4
  {
    svgblock: [
      {
        svgblock: 'bagsvg',
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'bg_full blur',
            imgid: 'cover',
          },
          {
            imgclass: 'character ch-left__lg',
            imgid: 'munaWheelChair',
          },
        ],
      },
    ],
    speechbox: [
      {
        audioicon: true,
        speechbox: 'speechbox sp-1 sp-left',
        textclass: 'sppechtext',
        textdata: data.string.p3s4,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
    qna: [
      {
        textclass: 'instruction',
        textdata: data.string.p3instruction,
        imagestoshow: [
          {
            imgcontentindivwithlabel: true,
            imgcontentindivclass: 'option correct',
            imgclass: 'img1',
            imgid: 'penglass',
          },
          {
            imgcontentindivwithlabel: true,
            imgcontentindivclass: 'option',
            imgclass: 'img2',
            imgid: 'pencarpet',
          },
        ],
      },
    ],
  },
  // Page 5
  {
    svgblock: [
      {
        svgblock: 'bagsvg',
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'bg_full blur',
            imgid: 'cover',
          },
          {
            imgclass: 'character ch-left__lg',
            imgid: 'munaWheelChair',
          },
        ],
      },
    ],
    speechbox: [
      {
        audioicon: true,
        speechbox: 'speechbox sp-1 sp-left',
        textclass: 'sppechtext',
        textdata: data.string.p3s5,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
    qna: [
      {
        textclass: 'instruction',
        textdata: data.string.p3instruction,
        imagestoshow: [
          {
            imgcontentindivwithlabel: true,
            imgcontentindivclass: 'option opt-h_sm correct',
            imgclass: 'img1',
            imgid: 'bottleunder',
          },
          {
            imgcontentindivwithlabel: true,
            imgcontentindivclass: 'option opt-h_sm',
            imgclass: 'img2',
            imgid: 'bottleon',
          },
        ],
      },
    ],
  },
  // Page 6
  {
    svgblock: [
      {
        svgblock: 'bagsvg',
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'bg_full blur',
            imgid: 'cover',
          },
          {
            imgclass: 'character ch-left__lg',
            imgid: 'munaWheelChair',
          },
        ],
      },
    ],
    speechbox: [
      {
        audioicon: true,
        speechbox: 'speechbox sp-1 sp-left',
        textclass: 'sppechtext',
        textdata: data.string.p3s6,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
    qna: [
      {
        textclass: 'instruction',
        textdata: data.string.p3instruction,
        imagestoshow: [
          {
            imgcontentindivwithlabel: true,
            imgcontentindivclass: 'option correct',
            imgclass: 'img1',
            imgid: 'booknextto',
          },
          {
            imgcontentindivwithlabel: true,
            imgcontentindivclass: 'option',
            imgclass: 'img2',
            imgid: 'bookbehind',
          },
        ],
      },
    ],
  },
  // Page 7
  {
    svgblock: [
      {
        svgblock: 'bagsvg',
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'bg_full blur',
            imgid: 'cover',
          },
          {
            imgclass: 'character ch-left__lg',
            imgid: 'munaWheelChair',
          },
        ],
      },
    ],
    speechbox: [
      {
        audioicon: true,
        speechbox: 'speechbox sp-1 sp-left',
        textclass: 'sppechtext',
        textdata: data.string.p3s7,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
    qna: [
      {
        textclass: 'instruction',
        textdata: data.string.p3instruction,
        imagestoshow: [
          {
            imgcontentindivwithlabel: true,
            imgcontentindivclass: 'option correct',
            imgclass: 'img1',
            imgid: 'eraserbehind',
          },
          {
            imgcontentindivwithlabel: true,
            imgcontentindivclass: 'option',
            imgclass: 'img2',
            imgid: 'erasernextto',
          },
        ],
      },
    ],
  },
  // Page 8
  {
    svgblock: [
      {
        svgblock: 'bagsvg',
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'bg_full blur',
            imgid: 'cover',
          },
          {
            imgclass: 'character ch-left__lg',
            imgid: 'munaWheelChair',
          },
        ],
      },
    ],
    speechbox: [
      {
        audioicon: true,
        speechbox: 'speechbox sp-1 sp-left',
        textclass: 'sppechtext',
        textdata: data.string.p3s8,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
    qna: [
      {
        textclass: 'instruction',
        textdata: data.string.p3instruction,
        imagestoshow: [
          {
            imgcontentindivwithlabel: true,
            imgcontentindivclass: 'option opt-h_sm correct',
            imgclass: 'img1',
            imgid: 'lunchboxbetween',
          },
          {
            imgcontentindivwithlabel: true,
            imgcontentindivclass: 'option opt-h_sm',
            imgclass: 'img2',
            imgid: 'lunchboxbehind',
          },
        ],
      },
    ],
  },
  // Page 9
  {
    svgblock: [
      {
        svgblock: 'bagsvg',
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'bg_full blur',
            imgid: 'cover',
          },
          {
            imgclass: 'character ch-left__lg',
            imgid: 'munaWheelChair',
          },
        ],
      },
    ],
    speechbox: [
      {
        audioicon: true,
        speechbox: 'speechbox sp-1 sp-left',
        textclass: 'sppechtext',
        textdata: data.string.p3s9,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
    qna: [
      {
        textclass: 'instruction',
        textdata: data.string.p3instruction,
        imagestoshow: [
          {
            imgcontentindivwithlabel: true,
            imgcontentindivclass: 'option correct',
            imgclass: 'img1',
            imgid: 'handkerchiefover',
          },
          {
            imgcontentindivwithlabel: true,
            imgcontentindivclass: 'option',
            imgclass: 'img2',
            imgid: 'handkerchiefunder',
          },
        ],
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

  const bagitems = [
    'pen',
    'water_bottle',
    'book',
    'eraser',
    'lunch_box',
    'handkerchief',
  ];

  function init() {
    //specify type otherwise it will load assests as XHR
    manifest = [
      //images
      {
        id: 'cover',
        src: imgpath + 'bg_1.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'textbox',
        src: imgpathMain + 'textbox.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'munaWheelChair',
        src: imgpathMain + 'wheelchair_muna_png.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'munaWheelChairGif',
        src: imgpathMain + 'muna_wheelchair_talking_gif.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'bagonbed',
        src: imgpath + 'bag_is_on_the_bed.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'bagunderbed',
        src: imgpath + 'bag_is_under_the_bed.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'bagempty',
        src: imgpath + 'SCHOOL_BAG_empty.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'bagSVG',
        src:
          imgpath +
          'SCHOOL_BAG_pen_bottle_book_eraser_lunchbox_handkerchief.svg',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'pencarpet',
        src: imgpath + 'pen_is_in_the_carpet.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'penglass',
        src: imgpath + 'pen_is_in_the_glass.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'bottleunder',
        src: imgpath + 'bottle_is_under_the_chair.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'bottleon',
        src: imgpath + 'bottle_is_on_the_chair.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'booknextto',
        src: imgpath + 'book_next_to.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'bookbehind',
        src: imgpath + 'book_behind.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'erasernextto',
        src: imgpath + 'eraser_next_to.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'eraserbehind',
        src: imgpath + 'eraser_behind.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'lunchboxbehind',
        src: imgpath + 'lunchbox_behind.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'lunchboxbetween',
        src: imgpath + 'lunchbox_between.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'handkerchiefover',
        src: imgpath + 'handkerchief_is_over_the_blanket.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'handkerchiefunder',
        src: imgpath + 'handkerchief_is_under_the_blanket.png',
        type: createjs.AbstractLoader.IMAGE,
      },

      // soundsicon-orange
      { id: 'p3instruction', src: soundAsset + 'p3instruction.mp3' },
      { id: 'p3s1', src: soundAsset + 'p3s1.mp3' },
      { id: 'p3s2', src: soundAsset + 'p3s2.mp3' },
      { id: 'p3s3', src: soundAsset + 'p3s3.mp3' },
      { id: 'p3s4', src: soundAsset + 'p3s4.mp3' },
      { id: 'p3s5', src: soundAsset + 'p3s5.mp3' },
      { id: 'p3s6', src: soundAsset + 'p3s6.mp3' },
      { id: 'p3s7', src: soundAsset + 'p3s7.mp3' },
      { id: 'p3s8', src: soundAsset + 'p3s8.mp3' },
      { id: 'p3s9', src: soundAsset + 'p3s9.mp3' },
    ];
    preload = new createjs.LoadQueue(false);
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
  /*===============================================
    =            data highlight function            =
    ===============================================*/
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
  /*=====  End of data highlight function  ======*/

  /*=====  End of InstructionBlockController  ======*/

  /*=================================================
     =            general template function            =
     =================================================*/
  function generaltemplate() {
    var source = $('#general-template').html();
    var template = Handlebars.compile(source);
    var html = template(content[countNext]);
    $board.html(html);

    // highlight any text inside board div with datahighlightflag set true
    texthighlight($board);
    put_image(content, countNext, preload);
    put_qna(content, countNext);
    put_speechbox_image(content, countNext, preload);
    vocabcontroller.findwords(countNext);

    $('.qna-container').hide();
    $('.qna-container, .audioicon').css('pointer-events', 'none');

    switch (countNext) {
      case 0:
      case 1:
        commonGifController();
        break;

      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
        //   shuffling the option
        const originalOptions = $('.option-container > *');
        $('.option-container').html(shuffleArray(originalOptions));

        countNext === 2 && $('.bag').hide();
        bagsvg();
        commonGifController(true);
        break;

      default:
        nav_button_controls(1000);
        break;
    }
  }

  function bagsvg() {
    var s1 = Snap('#bagsvg');

    // laoding SVG
    Snap.load(preload.getResult('bagSVG').src, function (loadedFragment) {
      s1.append(loadedFragment);

      // hiding all things in bags expect previously shown
      $.each(bagitems, (index, item) => {
        index >= countNext - 3 && $('#' + item).hide();
      });
    });
  }

  function commonGifController(iscallback = false, isRecursive = false) {
    playgif(
      preload,
      'p3s' + (countNext + 1),
      'munaWheelChair',
      'munaWheelChairGif',
      'character',
      !iscallback
        ? nav_button_controls
        : () => {
            // isRecursive is used to prevent from calling it in hover action
            !isRecursive &&
              $('.qna-container').fadeIn(1000, () => {
                // instruction
                sound_player('p3instruction', () => {
                  // hover action
                  $('.audioicon').css('pointer-events', 'all');
                  $('.audioicon').mouseenter(() =>
                    commonGifController(true, true)
                  );

                  checkans();
                });
              });
          }
    );
  }

  function checkans() {
    $('.qna-container').css('pointer-events', 'all');

    //   checking ans
    $('.option').click(function () {
      if ($(this).hasClass('correct')) {
        $('.qna-container').css('pointer-events', 'none');
        $(this).toggleClass('correctans');

        $(this).append(`<img src='/images/correct.png' class='correct-img'/>`);

        play_correct_incorrect_sound(1);

        if (countNext === 2) {
          $('.bag').fadeIn(100, nav_button_controls);
        } else {
          //  show items in bag one by one

          $.each(bagitems, (index, item) => {
            index <= countNext - 3 &&
              $('#' + item).fadeIn(1000, nav_button_controls);
          });
        }
      } else {
        $(this).css('pointer-events', 'none');
        $(this).toggleClass('wrongans');

        $(this).append(`<img src='/images/wrong.png' class='wrong-img'/>`);

        play_correct_incorrect_sound(0);
      }
    });
  }

  function put_qna(content, count) {
    if (content[count].hasOwnProperty('qna')) {
      for (var i = 0; i < content[count].qna.length; i++) {
        var option = content[count].qna[i];
        var imageClass = option.imagestoshow;
        for (var j = 0; j < imageClass.length; j++) {
          var image_src = preload.getResult(imageClass[j].imgid).src;
          //get list of classes
          var classes_list = imageClass[j].imgclass.match(/\S+/g) || [];
          var selector = '.' + classes_list[classes_list.length - 1];
          $(selector).attr('src', image_src);
        }
      }
    }
  }

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

  function templateCaller() {
    $prevBtn.css('display', 'none');
    $nextBtn.css('display', 'none');

    navigationcontroller();

    loadTimelineProgress($total_page, countNext + 1);
    generaltemplate();
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
});
