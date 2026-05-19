var imgpath = $ref + '/images/';
var imgpath1 = $ref + '/images/Section1/';
var imgpath2 = $ref + '/images/Section2/';
var soundAsset = $ref + '/sounds/' + $lang + '/';

var content = [
  //slide0
  {
    contentnocenteradjust: true,
    contentblockadditionalclass: 'rollback',
    textblock: [
      {
        textdiv: 'maintitle',
        textclass: 'content0 centertext',
        textdata: data.string.p2text1,
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgdiv: 'dice first_dice',
            imgclass: 'relativecls img1',
            imgid: 'd6',
          },
          {
            imgdiv: 'dice second_dice',
            imgclass: 'relativecls img1',
            imgid: 'd6',
          },
          {
            imgdiv: 'dice third_dice',
            imgclass: 'relativecls img1',
            imgid: 'd6',
          },
        ],
      },
    ],
    lowertextblockadditionalclass: 'rollbtn-wrapper',
    lowertextblock: [
      {
        textdata: data.string.roll,
        textclass: 'roll-btn',
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

  var setTime;
  var $total_page = content.length;
  loadTimelineProgress($total_page, countNext + 1);

  var preload;
  var timeoutvar = null;
  var current_sound;
  var vocabcontroller = new Vocabulary();
  vocabcontroller.init();

  
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
  ];

  function init() {
    //specify type otherwise it will load assests as XHR
    manifest = [
      // {
      //   id: 'background',
      //   src: imgpath2 + 'background_2.png',
      //   type: createjs.AbstractLoader.IMAGE,
      // },
      {
        id: 'd1',
        src: imgpath2 + '1.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'd2',
        src: imgpath2 + '2.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'd3',
        src: imgpath2 + '3.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'd4',
        src: imgpath2 + '4.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'd5',
        src: imgpath2 + '5.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'd6',
        src: imgpath2 + '6.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'dice_roll',
        src: imgpath2 + 'dice_roll.gif',
        type: createjs.AbstractLoader.IMAGE,
      },

      // sounds
      { id: 'p2text1', src: soundAsset + 'p2text1.mp3' },
      { id: 'p2text2', src: soundAsset + 'p2text2.mp3' },
      { id: 'p2text3', src: soundAsset + 'p2text3.mp3' },
      { id: 'p2text3a', src: soundAsset + 'p2text3a.mp3' },
      //   numbers
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
$('.rollback').css('background-image', 'url(' + imgpath2 + 'background_2.png)');
    switch (countNext) {
      case 0:
        var counter = 0;
        var clickCount = {
          first: 0,
          second: 0,
          third: 0,
        };
        var totalCount = 0;
        var firstvalue;
        var secondvalue;
        var thirdvalue;

        $('.dice, .roll-btn').css('pointer-events', 'none');
        sound_player('p2text1', function () {
          $('.roll-btn').css('pointer-events', 'all');
          $('.roll-btn').click(function () {
            $('.dice')
              .children('img')
              .attr('src', preload.getResult('dice_roll').src);

            setTime = setTimeout(() => {
              rollDice($('.first_dice').children('img'));
              rollDice($('.second_dice').children('img'));
              rollDice($('.third_dice').children('img'));
              $('.roll-btn')
                .css('pointer-events', 'none')
                .text(data.string.p2text2);

              firstvalue = $('.first_dice').children('img').attr('data-count');
              secondvalue = $('.second_dice')
                .children('img')
                .attr('data-count');
              thirdvalue = $('.third_dice').children('img').attr('data-count');
              sound_player('p2text2', function () {
                call();
              });
            }, 2000);
            $('.dice').css('cursor', 'pointer');
            $('.dice').css('pointer-events', 'all');
          });

          function rollDice(dice) {
            var result = Math.floor(Math.random() * 6) + 1;
            switch (result) {
              case 1:
                $(dice).attr({
                  src: preload.getResult('d1').src,
                  'data-count': 1,
                });
                break;
              case 2:
                $(dice).attr({
                  src: preload.getResult('d2').src,
                  'data-count': 2,
                });
                break;
              case 3:
                $(dice).attr({
                  src: preload.getResult('d3').src,
                  'data-count': 3,
                });
                break;
              case 4:
                $(dice).attr({
                  src: preload.getResult('d4').src,
                  'data-count': 4,
                });
                break;
              case 5:
                $(dice).attr({
                  src: preload.getResult('d5').src,
                  'data-count': 5,
                });
                break;
              case 6:
                $(dice).attr({
                  src: preload.getResult('d6').src,
                  'data-count': 6,
                });
                break;
            }
          }

          function call() {
            if (firstvalue && secondvalue && thirdvalue) {
              totalCount =
                Number(firstvalue) + Number(secondvalue) + Number(thirdvalue);
            }

            $('.first_dice').click(function () {
              counter++;
              clickCount.first++;
              if (clickCount.first >= firstvalue) {
                $(this).css('cursor', 'initial');
                $(this).css('pointer-events', 'none');
              }
              playSound();
            });

            $('.second_dice').click(function () {
              counter++;
              clickCount.second++;
              if (clickCount.second >= secondvalue) {
                $(this).css('cursor', 'initial');
                $(this).css('pointer-events', 'none');
              }
              playSound();
            });

            $('.third_dice').click(function () {
              counter++;
              clickCount.third++;
              if (clickCount.third >= thirdvalue) {
                $(this).css('cursor', 'initial');
                $(this).css('pointer-events', 'none');
              }
              playSound();
            });
          }

          function playSound() {
            sound_player('sound_n' + counter, function () {
              if (counter >= totalCount) {
                if ($lang == 'en') {
                  $('.roll-btn')
                    .css('pointer-events', 'none')
                    .text(`${data.string.p2text3} ${totalCount}`);
                  sound_player('p2text3', function () {
                    sound_player('sound_n' + totalCount, function () {
                      nav_button_controls(0);
                    });
                  });
                }
                if ($lang == 'np') {
                  $('.roll-btn')
                    .css('pointer-events', 'none')
                    .text(
                      `${data.string.p2text3} ${
                        nepalicounter[totalCount - 1]
                      } ${data.string.p2text3a} `
                    );
                  sound_player('p2text3', function () {
                    sound_player('sound_n' + totalCount, function () {
                      sound_player('p2text3a', function () {
                        nav_button_controls(0);
                      });
                    });
                  });
                }
              }
            });
          }
        });
        break;

      default:
        clearTimeout(setTime);
        break;
    }
  }

  /*===============================================
  =            data highlight function            =
  ===============================================*/
  //definition of data highlight function called in general template
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
        // console.log(index)
        texthighlightstarttag = "<span class='" + stylerulename + "'>";
        replaceinstring = $(this).html();
        replaceinstring = replaceinstring.replace(/#/g, texthighlightstarttag);
        replaceinstring = replaceinstring.replace(/@/g, texthighlightendtag);
        $(this).html(replaceinstring);
        var storedata = [];
        var arr = $(this).children();
        arr.map(function (idx) {
          storedata.push(arr[idx]);
          for (var i = 0; i <= storedata.length; i++) {
            // console.log($(storedata[i]).addClass("color"+i));
            $(storedata[i]).addClass('color' + i);
          }
        });
      });
    }
  }
  /*=====  End of data highlight function  ======*/

  /**
   * TODO
   * This function is not used and can be used for next button show with delay time
   */
  function nav_button_controls(delay_ms) {
    timeoutvar = setTimeout(function () {
      if (countNext == 0) {
        $nextBtn.show(0);
        ole.footerNotificationHandler.pageEndSetNotification();
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
});
