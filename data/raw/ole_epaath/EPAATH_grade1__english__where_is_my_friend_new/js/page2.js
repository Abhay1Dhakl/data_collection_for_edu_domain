var soundAsset = $ref + '/sounds/';
var imgpathMain = $ref + '/images/';
var imgpath = $ref + '/images/sec2/';

var content = [
  // Page 1
  {
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'bg_panaroma',
            imgid: 'cover',
          },
          {
            imgclass: 'character ch-left',
            imgid: 'munaWheelChair',
          },
          {
            imgclass: 'bird',
            imgid: 'bird',
          },
          {
            imgclass: 'branch',
            imgid: 'branch',
          },
          {
            imgclass: 'rock',
            imgid: 'rock',
          },
          {
            imgclass: 'nest',
            imgid: 'nest',
          },
          {
            imgclass: 'leaf',
            imgid: 'leaf',
          },
          {
            imgclass: 'tree',
            imgid: 'tree',
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'speechbox sp-1',
        textclass: 'speechtext',
        textdata: data.string.p2s1 + `<span class="cheveron"> </span>`,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-2',
        textclass: 'speechtext',
        textdata: data.string.p2s2 + `<span class="cheveron"> </span>`,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-3',
        textclass: 'speechtext',
        textdata: data.string.p2s3 + `<span class="cheveron"> </span>`,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-4',
        textclass: 'speechtext',
        textdata: data.string.p2s4 + `<span class="cheveron"> </span>`,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-5',
        textclass: 'speechtext',
        textdata: data.string.p2s5 + `<span class="cheveron"> </span>`,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-6',
        textclass: 'speechtext',
        textdata: data.string.p2s6 + `<span class="cheveron"> </span>`,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-7',
        textclass: 'speechtext',
        textdata: data.string.p2s7 + `<span class="cheveron"> </span>`,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-8',
        textclass: 'speechtext',
        textdata: data.string.p2s8 + `<span class="cheveron"> </span>`,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-9',
        textclass: 'speechtext',
        textdata: data.string.p2s9 + `<span class="cheveron"> </span>`,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-10',
        textclass: 'speechtext',
        textdata: data.string.p2s10 + `<span class="cheveron"> </span>`,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-11',
        textclass: 'speechtext',
        textdata: data.string.p2s11 + `<span class="cheveron"> </span>`,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-12',
        textclass: 'speechtext',
        textdata: data.string.p2s12 + `<span class="cheveron"> </span>`,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-13',
        textclass: 'speechtext',
        textdata: data.string.p2s13 + `<span class="cheveron"> </span>`,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
  },

  // Page 2
  {
    coverboardadditionalclass: 'bg-slider',
    headerblock: [
      {
        textclass: 'header',
        textdata: data.string.p2header1,
      },
    ],

    // imageblock > imagestoshow with imgid disabled_btn and enabled_btn
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'left btn btn-left ',
            imgid: 'disabled_btn',
          },
          {
            imgclass: 'right btn btn-right',
            imgid: 'enabled_btn',
          },
          {
            imgclass: 'speaker',
            imgid: 'speaker',
          },
        ],
      },
    ],

    slider: [
      {
        textdata: data.string.p2s4,
        imgid: 'over_the_house',
        imgclass: 'sliderimg img1',
      },
      {
        textdata: data.string.p2s5,
        imgid: 'on_the_branch',
        imgclass: 'sliderimg img2',
      },
      {
        textdata: data.string.p2s6,
        imgid: 'through_the_tree',
        imgclass: 'sliderimg img3',
      },
      {
        textdata: data.string.p2s7,
        imgid: 'behind_the_rock',
        imgclass: 'sliderimg img4',
      },
      {
        textdata: data.string.p2s8,
        imgid: 'into_the_nest',
        imgclass: 'sliderimg img5',
      },
      {
        textdata: data.string.p2s9,
        imgid: 'behind_the_leaves',
        imgclass: 'sliderimg img6',
      },
      {
        textdata: data.string.p2s10,
        imgid: 'next_to_the_nest',
        imgclass: 'sliderimg img7',
      },
      {
        textdata: data.string.p2s11,
        imgid: 'between_the_trees',
        imgclass: 'sliderimg img8',
      },
      {
        textdata: data.string.p2s12,
        imgid: 'on_the_garden',
        imgclass: 'sliderimg img9',
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

  let recursiveCount = 1,
    sliderClick = 4;

  function init() {
    //specify type otherwise it will load assests as XHR
    manifest = [
      //images
      {
        id: 'cover',
        src: imgpath + 'panaroma_bg.png',
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
        id: 'textbox',
        src: imgpathMain + 'textbox.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'bird_pink',
        src: imgpath + 'bird_pink.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'bird',
        src: imgpath + 'bird_fly.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'bird_hover',
        src: imgpath + 'bird_hover.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'arrow',
        src: imgpath + 'arrow.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'branch',
        src: imgpath + 'branch.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'rock',
        src: imgpath + 'rock.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'nest',
        src: imgpath + 'nest.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'leaf',
        src: imgpath + 'leaf.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'tree',
        src: imgpath + 'tree.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'disabled_btn',
        src: imgpath + 'btn.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'enabled_btn',
        src: imgpath + 'btna.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'speaker',
        src: imgpath + 'speaker.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'over_the_house',
        src: imgpath + 'over_the_house.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'on_the_branch',
        src: imgpath + 'on_the_branch.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'behind_the_leaves',
        src: imgpath + 'behind_the_leaves.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'behind_the_rock',
        src: imgpath + 'behind_the_rock.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'between_the_trees',
        src: imgpath + 'between_the_trees.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'into_the_nest',
        src: imgpath + 'into_the_nest.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'next_to_the_nest',
        src: imgpath + 'next_to_the_nest.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'on_the_garden',
        src: imgpath + 'on_the_garden.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'through_the_tree',
        src: imgpath + 'through_the_tree.png',
        type: createjs.AbstractLoader.IMAGE,
      },

      // soundsicon-orange
      { id: 'p2s1', src: soundAsset + 'p2s1.mp3' },
      { id: 'p2s2', src: soundAsset + 'p2s2.mp3' },
      { id: 'p2s3', src: soundAsset + 'p2s3.mp3' },
      { id: 'p2s4', src: soundAsset + 'p2s4.mp3' },
      { id: 'p2s5', src: soundAsset + 'p2s5.mp3' },
      { id: 'p2s6', src: soundAsset + 'p2s6.mp3' },
      { id: 'p2s7', src: soundAsset + 'p2s7.mp3' },
      { id: 'p2s8', src: soundAsset + 'p2s8.mp3' },
      { id: 'p2s9', src: soundAsset + 'p2s9.mp3' },
      { id: 'p2s10', src: soundAsset + 'p2s10.mp3' },
      { id: 'p2s11', src: soundAsset + 'p2s11.mp3' },
      { id: 'p2s12', src: soundAsset + 'p2s12.mp3' },
      { id: 'p2s13', src: soundAsset + 'p2s13.mp3' },
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
    put_speechbox_image(content, countNext, preload);
    put_slider_image(content, countNext);
    vocabcontroller.findwords(countNext);

    //   hiding all textbox
    $('.speechbox').hide();
    // $('.speechbox, .branch, .rock , .leaf, .nest, .tree').hide()

    switch (countNext) {
      case 0:
        // showing first textbox
        $('.sp-1').fadeIn(100, panaromaInteraction);

        break;

      case 1:
        slider();

        $('.speaker').on('hover mouseover mouseenter', function () {
          console.log(sliderClick);
          sound_player('p2s' + sliderClick);
        });
        break;

      default:
        nav_button_controls(1000);
        break;
    }
  }

  // a recursive function to play sound, call flybirdAnimate inside it, put arrow click event and slide bg_panaroma call it 4 times
  function panaromaInteraction() {
    const speechboxHandler = () => {
      // showing next speechbox
      $('.sp-' + (recursiveCount + 1)).fadeIn(100, function () {
        playgif(
          preload,
          'p2s' + (recursiveCount + 1),
          'munaWheelChair',
          'munaWheelChairGif',
          'ch-left',
          () => {
            // increment the recursive count
            recursiveCount++;
            panaromaInteraction();
          }
        );
      });
    };

    const birdAnimate = (birdx = '15%', birdy = '5%') => {
      //bird animate
      recursiveCount === 2
        ? speechboxHandler()
        : $('.bird').animate(
            { right: birdx, top: birdy },
            3000,
            'linear',
            () => {
              if (
                recursiveCount === 4 ||
                recursiveCount === 6 ||
                recursiveCount === 7 ||
                recursiveCount === 9 ||
                recursiveCount === 11
              ) {
                // bird sitting on a branch ||
                // behind the rock || into the nest ||
                // next to the nest || landed on the field
                $('.bird').attr('src', preload.getResult('bird_pink').src);
              } else if (recursiveCount === 8) {
                // bird behind the leaf
                $('.bird').attr('src', preload.getResult('bird').src);
              } else {
                // bird hovering animation
                $('.bird').attr('src', preload.getResult('bird_hover').src);
              }
              speechboxHandler();
            }
          );
    };

    const commonInteraction = () => {
      let birdx = 0,
        birdy = 0;

      // add active class to cheveron
      $('.sp-' + recursiveCount + ' .cheveron').addClass('active');

      $('.sp-' + recursiveCount + ' .cheveron').on('click', function () {
        // showing nav button at last slide
        // recursiveCount === 13 && nav_button_controls()

        // if recursiveCount is 13 then incerement countNext and call tempalteCaller
        if (recursiveCount === 13) {
          countNext++;
          templateCaller();
        }

        // hiding following for the landing bird
        if (recursiveCount === 11) {
          timeoutvar = setTimeout(() => {
            $('.branch, .rock, .nest, .leaf, .tree').hide();
          }, 500);
        }

        // resetting the bird
        recursiveCount > 2 &&
          recursiveCount < 11 &&
          $('.bird').attr('src', preload.getResult('bird').src).css({
            transform: 'scaleX(1)',
            height: '30%',
          });

        $('.sp-' + recursiveCount).fadeOut(500, function () {
          if (recursiveCount === 1 || recursiveCount === 2) {
            birdAnimate();
          } else if (recursiveCount === 4) {
            // to sit the bird on the tree branch
            // put bird src of bird
            $('.bird')
              .attr('src', preload.getResult('bird').src)
              .css('transform', 'scaleX(-1)');

            birdx = '7%';
            birdy = '30%';

            birdAnimate(birdx, birdy);
          } else if (recursiveCount === 5) {
            // flying through the tree

            birdx = '30%';
            birdy = '35%';

            birdAnimate(birdx, birdy);
          } else if (recursiveCount === 6) {
            //behind the rock

            birdx = '-10%';
            birdy = '63%';

            //invert the bird
            $('.bird').css({ transform: 'scaleX(-1)', zIndex: 35 });

            birdAnimate(birdx, birdy);
          } else if (recursiveCount === 7) {
            // into the nest

            birdx = '15%';
            birdy = '27%';

            birdAnimate(birdx, birdy);
          } else if (recursiveCount === 8) {
            // under the leaves

            birdx = '28%';
            birdy = '31%';

            birdAnimate(birdx, birdy);
            $('.bird').css({
              transform: 'scaleX(1)',
              zIndex: 10,
            });
          } else if (recursiveCount === 9) {
            // next to the nest

            birdx = '-11%';
            birdy = '25%';

            birdAnimate(birdx, birdy);
            $('.bird').css({
              transform: 'scaleX(-1)',
            });
          } else if (recursiveCount === 10) {
            // between the trees

            birdx = '21%';
            birdy = '55%';

            birdAnimate(birdx, birdy);
          } else {
            let scrollAmount = '-125%';

            if (recursiveCount === 3) {
              // over the house

              $('.bird')
                .attr('src', preload.getResult('bird').src)
                .css('transform', 'scaleX(-1)');

              birdx = '60%';
              birdy = '7%';

              // sliding branch rock leaf nest tree

              $('.branch').animate({ right: '37%' }, 2100);
              $('.rock').animate({ right: '5%' }, 2100);
              $('.nest').animate({ right: '17%' }, 2100);
              $('.leaf').animate({ right: '23%' }, 2100);
              $('.tree').animate({ right: '22%' }, 2100);
            }

            if (recursiveCount === 11) {
              // landed on the field

              birdx = '-20%';
              birdy = '60%';

              scrollAmount = '-234%';

              // invert the bird
              $('.bird').css('transform', 'scaleX(-1)');
            }
            if (recursiveCount === 12) {
              // up in the sky
              $('.bird')
                .attr('src', preload.getResult('bird').src)
                .css({ transform: 'scaleX(1)' });

              birdx = '110%';
              birdy = '10%';

              scrollAmount = '-334%';
            }

            // slide bg_panaroma by 125% left smoothly but not for first interaction
            $('.bg_panaroma').animate(
              { left: scrollAmount },
              2000,

              'linear',
              function () {
                // put bird src of bird
                $('.bird').attr('src', preload.getResult('bird').src);

                if (recursiveCount === 3) {
                  // over the house

                  $('.bird').css('transform', 'scaleX(1)');
                }

                // to hover over the house
                if (recursiveCount === 3) {
                  birdx = '50%';
                }

                birdAnimate(birdx, birdy);
              }
            );
          }
        });
      });
    };

    recursiveCount === 1
      ? playgif(
          preload,
          'p2s' + recursiveCount,
          'munaWheelChair',
          'munaWheelChairGif',
          'ch-left',
          commonInteraction
        )
      : commonInteraction();
  }

  // for slider
  function slider() {
    var slicklist = $('.slicklist'),
      dragStart,
      dragEnd;
    $('.right').click(function () {
      if (sliderClick < 12) {
        shiftSlide(-1);
        sliderClick++;

        // repalce right src with disabled_btn and disable pointer events
        $('.left').attr('src', preload.getResult('enabled_btn').src);
        $('.left').css('pointer-events', 'all');
      } else {
        // repalce right src with disabled_btn and disable pointer events
        $('.right').attr('src', preload.getResult('disabled_btn').src);
        $('.right').css('pointer-events', 'none');
        nav_button_controls();
      }
    });
    $('.left').click(function () {
      if (sliderClick > 4) {
        shiftSlide(1);
        sliderClick--;

        // repalce right src with disabled_btn and disable pointer events
        $('.right').attr('src', preload.getResult('enabled_btn').src);
        $('.right').css('pointer-events', 'all');
      } else {
        // repalce right src with disabled_btn and disable pointer events
        $('.left').attr('src', preload.getResult('disabled_btn').src);
        $('.left').css('pointer-events', 'none');

        nav_button_controls();
      }
    });

    sound_player('p2s4');

    function shiftSlide(direction) {
      if (slicklist.hasClass('transition')) return;
      dragEnd = dragStart;
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }

      sound_player('p2s' + (sliderClick + 1));

      slicklist.removeClass('transition');
      slicklist.css('transform', 'translateX(0px)');
    }
  }

  function put_slider_image(content, count) {
    if (content[count].hasOwnProperty('slider')) {
      var slider = content[count].slider;
      for (var i = 0; i < slider.length; i++) {
        var image_src = preload.getResult(slider[i].imgid).src;
        //get list of classes
        var classes_list = slider[i].imgclass.match(/\S+/g) || [];
        var selector = '.' + classes_list[classes_list.length - 1];
        // console.log(selector);
        $(selector).attr('src', image_src);
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
    // resetting the recursiveCount to 1 adn sliderClick to 4
    recursiveCount = 1;
    sliderClick = 4;
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
