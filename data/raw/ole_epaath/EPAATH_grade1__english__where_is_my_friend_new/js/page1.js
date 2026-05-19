var soundAsset = $ref + '/sounds/';
var imgpathMain = $ref + '/images/';
var imgpath = $ref + '/images/sec1/';
var imgpathAvatar = $ref + '/images/sec1/avatar/';
var imgpathSVG = $ref + '/images/sec1/svg/';
var imgpathWalk = $ref + '/images/sec1/walkingchars/';

var content = [
  // coverpage
  {
    uppertextblockadditionalclass: 'container-center',
    uppertextblock: [
      {
        textclass: 'covertext',
        textdata: data.string.chapter,
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'bg_full',
            imgid: 'cover',
          },
        ],
      },
    ],
  },
  // page 1
  {
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'bg_full',
            imgid: 'school',
          },
          {
            imgclass: 'character muna',
            imgid: 'munaFront',
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'speechbox sp-1',
        textclass: 'sppechtext',
        textdata: data.string.p1s1,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-2',
        textclass: 'sppechtext',
        textdata: data.string.p1s2,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-3',
        textclass: 'sppechtext',
        textdata: data.string.p1s3,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
  },
  // page 2
  {
    uppertextblockadditionalclass: 'instruction',
    uppertextblock: [
      {
        textdata: data.string.p1instruction,
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'bg_full blur',
            imgid: 'school',
          },
        ],
      },
    ],

    avatars: [
      {
        imagestoshow: [
          {
            imgclass: 'avatar girl chimmi',
            imgid: 'chimmi',
          },
          {
            imgclass: 'avatar boy prakrit',
            imgid: 'prakrit',
          },
          {
            imgclass: 'avatar girl nirjala',
            imgid: 'nirjala',
          },
          {
            imgclass: 'avatar boy ishan',
            imgid: 'ishan',
          },
          {
            imgclass: 'avatar girl sabina',
            imgid: 'sabina',
          },
          {
            imgclass: 'avatar girl hira',
            imgid: 'hira',
          },
        ],
      },
    ],
  },
  // page 3
  {
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'bg_full',
            imgid: 'school',
          },
          {
            imgclass: 'character muna',
            imgid: 'muna',
          },
          {
            imgclass: 'character inverted selected-character',
            imgid: 'chimmiTalk',
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'speechbox sp-4',
        textclass: 'sppechtext',
        textdata: data.string.p1s4,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-5',
        textclass: 'sppechtext',
        textdata: data.string.p1s5,
        imgclass: 'speechimg inverted',
        imgid: 'textbox',
      },
    ],
  },
  // page 4
  {
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'bg_full',
            imgid: 'school',
          },
          {
            imgclass: 'character muna',
            imgid: 'muna',
          },
          {
            imgclass: 'character inverted selected-character',
            imgid: 'chimmiTalk',
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'speechbox sp-4',
        textclass: 'sppechtext',
        textdata: data.string.p1s6,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-5',
        textclass: 'sppechtext',
        textdata: data.string.p1s7,
        imgclass: 'speechimg inverted',
        imgid: 'textbox',
      },
    ],
  },
  // page 5
  {
    svgblock: [
      {
        svgblock: 'bgSVG',
        svgclass: '',
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'character ch-room  muna',
            imgid: 'muna',
          },
          {
            imgclass: 'character inverted ch-room2  selected-character',
            imgid: 'chimmiTalk',
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'speechbox sp-4',
        textclass: 'sppechtext',
        textdata: data.string.p1s8,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-5 sp-room2',
        textclass: 'sppechtext',
        textdata: data.string.p1s9,
        imgclass: 'speechimg inverted',
        imgid: 'textbox',
      },
    ],
  },
  // page 6
  {
    svgblock: [
      {
        svgblock: 'bgSVG',
        svgclass: '',
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'character ch-room muna',
            imgid: 'muna',
          },
          {
            imgclass: 'character ch-room2 inverted selected-character',
            imgid: 'chimmiTalk',
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'speechbox sp-4',
        textclass: 'sppechtext',
        textdata: data.string.p1s10,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
  },
  // page 7
  {
    svgblock: [
      {
        svgblock: 'bgSVG',
        svgclass: '',
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'character ch-room3 selected-character',
            imgid: 'chimmiFront',
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'speechbox sp-4',
        textclass: 'sppechtext',
        textdata: data.string.p1s11,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
  },
  // page 8
  {
    headerblock: [
      {
        textdata: data.string.p1instruction2,
      },
    ],
    svgblock: [
      {
        svgblock: 'bgSVG',
        svgclass: '',
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'character ch-room3 inverted selected-character',
            imgid: 'chimmiFront',
          },
        ],
      },
    ],
    textblock: [
      { textclass: 'hidingspot door', textdata: data.string.hidespotdoor },
      {
        textclass: 'hidingspot curtain',
        textdata: data.string.hidespotcurtain,
      },
      {
        textclass: 'hidingspot blackboard',
        textdata: data.string.hidespotblackboard,
      },
      { textclass: 'hidingspot closet', textdata: data.string.hidespotcloset },
      { textclass: 'hidingspot tables', textdata: data.string.hidespottables },
      { textclass: 'hidingspot bench', textdata: data.string.hidespotbench },
    ],
  },
  // page 9
  {
    svgblock: [
      {
        svgblock: 'bgSVG',
        svgclass: '',
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'character ch-room inverted muna',
            imgid: 'munaWalkGif',
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'speechbox sp-4',
        textclass: 'sppechtext',
        textdata: data.string.p1s12,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
  },
  // page 10
  {
    svgblock: [
      {
        svgblock: 'bgSVG',
        svgclass: '',
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'character ch-room muna',
            imgid: 'munaFront',
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'speechbox sp-4',
        textclass: 'sppechtext',
        textdata: data.string.p1s13,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-6',
        textclass: 'sppechtext',
        textdata: data.string.p1s14,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-7',
        textclass: 'sppechtext',
        textdata: data.string.p1s15,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-8',
        textclass: 'sppechtext',
        textdata: data.string.p1s14,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
  },
  // page 11
  {
    svgblock: [
      {
        svgblock: 'bgSVG',
        svgclass: '',
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'character ch-room muna',
            imgid: 'munaFront',
          },
          {
            imgclass: 'character ch-room2 inverted selected-character',
            imgid: 'chimmiFront',
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'speechbox sp-4 sp-right',
        textclass: 'sppechtext',
        textdata: data.string.p1s16,
        imgclass: 'speechimg inverted',
        imgid: 'textbox',
      },
    ],
  },
  // page 12
  {
    svgblock: [
      {
        svgblock: 'bgSVG',
        svgclass: '',
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'character ch-room muna',
            imgid: 'muna',
          },
          {
            imgclass: 'character ch-room2 inverted selected-character',
            imgid: 'chimmiFront',
          },
        ],
      },
    ],
    uppertextblockadditionalclass: 'instruction3',
    uppertextblock: [
      {
        textdata: data.string.p1instruction3,
      },
    ],
    speechbox: [
      {
        speechbox: 'speechbox sp-4 ',
        textclass: 'sppechtext',
        textdata: data.string.p1s18,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
  },
  // page 13
  {
    svgblock: [
      {
        svgblock: 'bgSVG',
        svgclass: '',
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'character ch-room3 inverted selected-character',
            imgid: 'chimmiFront',
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'speechbox sp-4',
        textclass: 'sppechtext',
        textdata: data.string.p1s19,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
  },
  // page 14
  {
    headerblock: [
      {
        textdata: data.string.p1instruction4,
      },
    ],
    svgblock: [
      {
        svgblock: 'bgSVG',
        svgclass: '',
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'character ch-room3 inverted selected-character',
            imgid: 'chimmiFront',
          },
          {
            imgclass: 'character ch-room4 inverted',
            imgid: 'muna',
          },
        ],
      },
    ],
    textblock: [
      { textclass: 'hidingspot door', textdata: data.string.hidespotdoor },
      {
        textclass: 'hidingspot curtain',
        textdata: data.string.hidespotcurtain,
      },
      {
        textclass: 'hidingspot blackboard',
        textdata: data.string.hidespotblackboard,
      },
      { textclass: 'hidingspot closet', textdata: data.string.hidespotcloset },
      { textclass: 'hidingspot tables', textdata: data.string.hidespottables },
      { textclass: 'hidingspot bench', textdata: data.string.hidespotbench },
    ],
    speechbox: [
      {
        speechbox: 'speechbox sp-4',
        textclass: 'sppechtext',
        textdata: data.string.p1s20,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-5',
        textclass: 'sppechtext',
        textdata: data.string.p1s23,
        imgclass: 'speechimg inverted',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-6',
        textclass: 'sppechtext',
        textdata: data.string.p1s21,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
      {
        speechbox: 'speechbox sp-7',
        textclass: 'sppechtext',
        textdata: data.string.p1s22,
        imgclass: 'speechimg',
        imgid: 'textbox',
      },
    ],
  },
  // page 15
  {
    svgblock: [
      {
        svgblock: 'bgSVG',
        svgclass: '',
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'character ch-room3 inverted selected-character',
            imgid: 'chimmiFront',
          },
          {
            imgclass: 'character ch-room4 inverted',
            imgid: 'muna',
          },
        ],
      },
    ],
    textblock: [
      { textclass: 'option final-opt opt-1', textdata: data.string.p1s25 },
      {
        textclass: 'option final-opt opt-2',
        textdata: data.string.p1s26,
      },
    ],
    speechbox: [
      {
        speechbox: 'speechbox sp-5',
        textclass: 'sppechtext',
        textdata: data.string.p1s24,
        imgclass: 'speechimg inverted',
        imgid: 'textbox',
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

  let selectedCharacter = 'chimmi';
  let selectedCharacterGender = 'girl';
  let selectedHidingSpot = 'door';

  // preposition and hiding spots
  const hidingspots = [
    /** preposition, hidingspot, svghidingspotproposition, svgaction **/
    [' behind the ', 'door', '_behind_the_door', 'Open_door'],
    [' behind the ', 'curtain', '_behind_the_curtain', 'Close_Curtain'],
    [' next to the ', 'blackboard', '_next_to_the_blackboard', 'Blackboard'],
    [' in the ', 'closet', '_in_the_closet', 'Close_cupboard'],
    [' under the ', 'tables', '_under_the_table', 'Table'],
    [' on the ', 'bench', '_on_the_bench', 'Teacher_table'],
  ];

  let munaHidingSpot = hidingspots[0];

  // return where character is hidden
  const findCorrectHidingSpots = () => {
    let correctHidingSpots = hidingspots.filter(
      (item) => item[1] === selectedHidingSpot
    );
    return [
      $('#' + selectedCharacter + correctHidingSpots[0][2]),
      correctHidingSpots,
    ];
  };
  // return where character is not hidden
  const findWrongHidingSpots = () =>
    hidingspots.filter((item) => item[1] !== selectedHidingSpot);

  function init() {
    //specify type otherwise it will load assests as XHR
    manifest = [
      //images
      {
        id: 'cover',
        src: imgpath + 'cover_page.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'textbox',
        src: imgpathMain + 'textbox.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'school',
        src: imgpath + 'school.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'munaFront',
        src: imgpath + 'muna_talking_front.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'munaFrontGif',
        src: imgpath + 'muna_talking_front.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'chimmi',
        src: imgpathAvatar + 'chimmi.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'prakrit',
        src: imgpathAvatar + 'prakrit.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'nirjala',
        src: imgpathAvatar + 'nirjala.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ishan',
        src: imgpathAvatar + 'ishan.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'sabina',
        src: imgpathAvatar + 'sabina.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'hira',
        src: imgpathAvatar + 'hira.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'muna',
        src: imgpath + 'Muna_talking.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'munaGif',
        src: imgpath + 'Muna_talking.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'chimmiTalk',
        src: imgpath + 'chimmi_talk_right.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'chimmiTalkGif',
        src: imgpath + 'chimmi_talk_right.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'prakritTalk',
        src: imgpath + 'prakrit_talk_right.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'prakritTalkGif',
        src: imgpath + 'prakrit_talk_right.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'nirjalaTalk',
        src: imgpath + 'nirjala_talk_right.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'nirjalaTalkGif',
        src: imgpath + 'nirjala_talk_right.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ishanTalk',
        src: imgpath + 'ishan_talk_right.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ishanTalkGif',
        src: imgpath + 'ishan_talk_right.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'sabinaTalk',
        src: imgpath + 'sabina_talk_right.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'sabinaTalkGif',
        src: imgpath + 'sabina_talk_right.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'hiraTalk',
        src: imgpath + 'hira_talk_right.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'hiraTalkGif',
        src: imgpath + 'hira_talk_right.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'munaSVG',
        src: imgpathSVG + 'muna.svg',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'chimmiSVG',
        src: imgpathSVG + 'chimmi.svg',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'prakritSVG',
        src: imgpathSVG + 'prakrit.svg',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'nirjalaSVG',
        src: imgpathSVG + 'nirjala.svg',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ishanSVG',
        src: imgpathSVG + 'ishan.svg',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'sabinaSVG',
        src: imgpathSVG + 'sabina.svg',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'hiraSVG',
        src: imgpathSVG + 'hira.svg',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'munaWalk',
        src: imgpathWalk + 'muna_walking_left.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'munaWalkGif',
        src: imgpathWalk + 'muna_walking_left.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ishanFront',
        src: imgpath + 'ishan_talk_front.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ishanFrontGif',
        src: imgpath + 'ishan_talk_front.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'chimmiFront',
        src: imgpath + 'chimmi_talking_front.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'chimmiFrontGif',
        src: imgpath + 'chimmi_talking_front.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'hiraFront',
        src: imgpath + 'hira_front_talk.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'hiraFrontGif',
        src: imgpath + 'hira_front_talk.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'nirjalaFront',
        src: imgpath + 'nirjala_front_talking.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'nirjalaFrontGif',
        src: imgpath + 'nirjala_front_talking.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'prakritFront',
        src: imgpath + 'prakrit_talk_front.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'prakritFrontGif',
        src: imgpath + 'prakrit_talk_front.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'sabinaFront',
        src: imgpath + 'sabina_talk_front.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'sabinaFrontGif',
        src: imgpath + 'sabina_talk_front.gif',
        type: createjs.AbstractLoader.IMAGE,
      },

      // soundsicon-orange
      { id: 'chapter', src: soundAsset + 'chapter.mp3' },
      { id: 'p1s1', src: soundAsset + 'p1s1.mp3' },
      { id: 'p1s2', src: soundAsset + 'p1s2.mp3' },
      { id: 'p1instruction', src: soundAsset + 'p1instruction.mp3' },
      { id: 'p1s3', src: soundAsset + 'p1s3.mp3' },
      { id: 'p1s4', src: soundAsset + 'p1s4.mp3' },
      {
        id: 'p1s5boy',
        src: soundAsset + 'boy/p1s5.mp3',
      },
      {
        id: 'p1s5girl',
        src: soundAsset + 'girl/p1s5.mp3',
      },
      { id: 'p1s6', src: soundAsset + 'p1s6.mp3' },
      {
        id: 'p1s7boy',
        src: soundAsset + 'boy/p1s7.mp3',
      },
      {
        id: 'p1s7girl',
        src: soundAsset + 'girl/p1s7.mp3',
      },
      { id: 'p1s8', src: soundAsset + 'p1s8.mp3' },
      {
        id: 'p1s9boy',
        src: soundAsset + 'boy/p1s9.mp3',
      },
      {
        id: 'p1s9girl',
        src: soundAsset + 'girl/p1s9.mp3',
      },
      { id: 'p1s10', src: soundAsset + 'p1s10.mp3' },
      {
        id: 'p1s11boy',
        src: soundAsset + 'boy/p1s11.mp3',
      },
      {
        id: 'p1s11girl',
        src: soundAsset + 'girl/p1s11.mp3',
      },
      { id: 'p1instruction2', src: soundAsset + 'p1instruction2.mp3' },
      { id: 'hidespotdoorboy', src: soundAsset + 'boy/hidespotdoor.mp3' },
      { id: 'hidespotdoorgirl', src: soundAsset + 'girl/hidespotdoor.mp3' },
      { id: 'hidespotcurtainboy', src: soundAsset + 'boy/hidespotcurtain.mp3' },
      {
        id: 'hidespotcurtaingirl',
        src: soundAsset + 'girl/hidespotcurtain.mp3',
      },
      {
        id: 'hidespotblackboardboy',
        src: soundAsset + 'boy/hidespotblackboard.mp3',
      },
      {
        id: 'hidespotblackboardgirl',
        src: soundAsset + 'girl/hidespotblackboard.mp3',
      },
      { id: 'hidespotclosetboy', src: soundAsset + 'boy/hidespotcloset.mp3' },
      { id: 'hidespotclosetgirl', src: soundAsset + 'girl/hidespotcloset.mp3' },
      { id: 'hidespottablesboy', src: soundAsset + 'boy/hidespottables.mp3' },
      { id: 'hidespottablesgirl', src: soundAsset + 'girl/hidespottables.mp3' },
      { id: 'hidespotbenchboy', src: soundAsset + 'boy/hidespotbench.mp3' },
      { id: 'hidespotbenchgirl', src: soundAsset + 'girl/hidespotbench.mp3' },

      { id: 'hidespotdoor', src: soundAsset + 'hidespotdoor.mp3' },
      { id: 'hidespotcurtain', src: soundAsset + 'hidespotcurtain.mp3' },
      {
        id: 'hidespotblackboard',
        src: soundAsset + 'hidespotblackboard.mp3',
      },
      { id: 'hidespotcloset', src: soundAsset + 'hidespotcloset.mp3' },
      { id: 'hidespottables', src: soundAsset + 'hidespottables.mp3' },
      { id: 'hidespotbench', src: soundAsset + 'hidespotbench.mp3' },

      { id: 'p1s12', src: soundAsset + 'p1s12.mp3' },
      { id: 'p1s13', src: soundAsset + 'p1s13.mp3' },
      { id: 'p1s14', src: soundAsset + 'p1s14.mp3' },
      { id: 'p1s15', src: soundAsset + 'p1s15.mp3' },
      {
        id: 'p1s16boy',
        src: soundAsset + 'boy/p1s16.mp3',
      },
      {
        id: 'p1s16girl',
        src: soundAsset + 'girl/p1s16.mp3',
      },
      { id: 'p1s17', src: soundAsset + 'p1s17.mp3' },
      { id: 'p1s18', src: soundAsset + 'p1s18.mp3' },
      { id: 'p1instruction3', src: soundAsset + 'p1instruction3.mp3' },

      {
        id: 'p1s19boy',
        src: soundAsset + 'boy/p1s19.mp3',
      },
      {
        id: 'p1s19girl',
        src: soundAsset + 'girl/p1s19.mp3',
      },

      { id: 'p1instruction4', src: soundAsset + 'p1instruction4.mp3' },
      {
        id: 'p1s20boy',
        src: soundAsset + 'boy/p1s20.mp3',
      },
      {
        id: 'p1s20girl',
        src: soundAsset + 'girl/p1s20.mp3',
      },

      {
        id: 'p1s21boy',
        src: soundAsset + 'boy/p1s21.mp3',
      },
      {
        id: 'p1s21girl',
        src: soundAsset + 'girl/p1s21.mp3',
      },
      {
        id: 'p1s22boy',
        src: soundAsset + 'boy/p1s22.mp3',
      },
      {
        id: 'p1s22girl',
        src: soundAsset + 'girl/p1s22.mp3',
      },
      { id: 'p1s23', src: soundAsset + 'p1s23.mp3' },
      { id: 'p1s24', src: soundAsset + 'p1s24.mp3' },
      {
        id: 'p1s25boy',
        src: soundAsset + 'boy/p1s25.mp3',
      },
      {
        id: 'p1s25girl',
        src: soundAsset + 'girl/p1s25.mp3',
      },
      {
        id: 'p1s26boy',
        src: soundAsset + 'boy/p1s26.mp3',
      },
      {
        id: 'p1s26girl',
        src: soundAsset + 'girl/p1s26.mp3',
      },
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
    put_avatars_image(content, countNext);
    vocabcontroller.findwords(countNext);

    switch (countNext) {
      case 0:
        sound_player('chapter', nav_button_controls);
        break;
      case 1:
        $('.sp-2, .sp-3').hide();
        playgif(
          preload,
          'p1s1',
          'munaFront',
          'munaFrontGif',
          'muna',
          hideNshowSpBox
        );
        break;

      case 2:
        $('.avatar').css('pointer-events', 'none');
        sound_player('p1instruction', pickCharacter);
        // pickCharacter()
        break;

      case 3:
        handleConversation('p1s4', 'p1s5');
        break;
      case 4:
        handleConversation('p1s6', 'p1s7');
        break;

      case 5:
        bgsvg();
        handleConversation('p1s8', 'p1s9');
        break;
      case 6:
      case 7:
        bgsvg();
        handleConversation('p1s' + (countNext + 4));
        break;
      case 8:
        bgsvg();
        // placing the selected character

        $('.selected-character, .hidingspot').hide();
        $('.hidingspot').css('pointer-events', 'none');
        sound_player('p1instruction2', function () {
          $('.selected-character').fadeIn(500, showHidingSpot);
        });
        // chooseHidingSpot()
        break;

      case 9:
        bgsvg();
        // hiding speechbox initially
        $('.sp-4').hide();
        $('.muna').css('left', '-5%');

        // animating walking mun
        $('.muna').animate({ left: '5%' }, 1000, 'linear', function () {
          let delay = 500;
          // only removing the inverted class when playgif starts
          timeoutvar = setTimeout(() => {
            $(this).toggleClass('inverted');
          }, delay);

          // showing and reading textbox
          $('.sp-4').fadeIn(delay, () =>
            playgif(
              preload,
              'p1s12',
              'muna',
              'munaGif',
              'muna',
              nav_button_controls
            )
          );
        });
        break;

      case 10:
        bgsvg();
        $('.sp-6,.sp-7, .sp-8').hide();
        guessHidingSpot();
        break;

      case 11:
        // spot where character is hidden
        const correctHidingSpots = hidingspots.filter(
          (item) => item[1] === selectedHidingSpot
        );
        bgsvg();
        $('.sp-4 > p').append(
          correctHidingSpots[0][0] + correctHidingSpots[0][1] + '.'
        );
        handleConversation('p1s16', 'hidespot' + correctHidingSpots[0][1]);
        break;

      case 12:
        bgsvg();
        // hiding the button at first
        $('.instruction3').hide();
        playgif(preload, 'p1s18', 'muna', 'munaGif', 'muna', () => {
          $('.instruction3').fadeIn(500);
          sound_player('p1instruction3', getOutOfRoom);
        });
        break;
      case 13:
        // munahidingplace
        const randNo = getRandomNumber(0, 5);
        munaHidingSpot = hidingspots[randNo];

        bgsvg();

        playgif(
          preload,
          'p1s19' + selectedCharacterGender,
          selectedCharacter + 'Front',
          selectedCharacter + 'FrontGif',
          'selected-character',
          nav_button_controls
        );
        break;

      case 14:
        bgsvg();

        // console.log(munaHidingSpot)

        $('.sp-4,.sp-5, .sp-6,.sp-7, .ch-room4').hide();

        $('.selected-character, .hidingspot').hide();
        $('.hidingspot').css('pointer-events', 'none');
        sound_player('p1instruction4', function () {
          $('.selected-character').fadeIn(500, showHidingSpot);
        });

        // showHidingSpot()
        // console.log(munaHidingSpot[1])
        break;

      case 15:
        bgsvg();
        $('.option').hide().css('pointer-events', 'none');
        playgif(preload, 'p1s24', 'muna', 'munaGif', 'ch-room4', function () {
          $('.opt-1').fadeIn(1000, function () {
            playgif(
              preload,
              'p1s25' + selectedCharacterGender,
              'muna',
              'munaGif',
              'ch-room4',
              function () {
                $('.opt-2').fadeIn(1000, function () {
                  playgif(
                    preload,
                    'p1s26' + selectedCharacterGender,
                    'muna',
                    'munaGif',
                    'ch-room4',
                    function () {
                      $('.option').css('pointer-events', 'all');

                      // play again option taking back to page 5

                      $('.opt-1').click(() => {
                        createjs.Sound.stop();
                        clearTimeout(timeoutvar);
                        countNext = 4;
                        templateCaller();
                      });

                      // continue option
                      $('.opt-2').click(nav_button_controls);
                    }
                  );
                });
              }
            );
          });
        });

        break;

      default:
        nav_button_controls(1000);
        break;
    }
  }

  // hiding and showing speechbox
  function hideNshowSpBox(hideClassCounter = 1, showClassCounter = 2) {
    // hideclasscouter -> sp-1 speechbox to hide
    // showclasscouter -> sp-2 speechbox to show
    $('.sp-' + hideClassCounter).fadeOut(1000, () =>
      $('.sp-' + showClassCounter).fadeIn(1000, () =>
        playgif(
          preload,
          'p1s' + showClassCounter,
          'munaFront',
          'munaFrontGif',
          'muna',
          () => {
            hideClassCounter++;
            showClassCounter++;

            // stop recursion when show counter > 3
            showClassCounter > 3 ||
              hideNshowSpBox(hideClassCounter, showClassCounter);
            showClassCounter > 3 && nav_button_controls();
          }
        )
      )
    );
  }

  // getting the character out of room
  function getOutOfRoom() {
    $('.instruction3').click(function () {
      $(this).hide();
      $('.selected-character')
        .attr('src', imgpathWalk + selectedCharacter + '_walk_right.gif')
        .animate({ left: '80%', height: '30%' }, 1000, 'linear', function () {
          $(this).fadeOut(100, function () {
            $(this)
              .css({ left: '15%', bottom: '20%' })
              .fadeIn(500)
              .animate({ left: '-5%' }, 2000, 'linear');
            timeoutvar = setTimeout(() => {
              $('.selected-character').hide(0, nav_button_controls);
            }, 2000);
          });
        });
    });
  }

  // AI guessing the character hiding spot
  function guessHidingSpot() {
    playgif(preload, 'p1s13', 'munaFront', 'munaFrontGif', 'muna', function () {
      $('.sp-4').fadeOut(100, function () {
        let slideBlackboard = 'translate(-1300 -722)';
        let slideBench = 'translate(1190.245 -100)';
        let slideTable = 'translate(-1101.956 5245.276)';

        // to slide the blacboard, bench and table when guessing
        if (selectedCharacter === 'chimmi') {
          slideBlackboard = 'translate(-1300 -722)';
          slideBench = 'translate(1190.245 -100)';
          slideTable = 'translate(-1036 -822)';
        } else if (selectedCharacter === 'ishan') {
          slideBlackboard = 'translate(-1300 1645.604)';
          slideBench = 'translate(1186.245 2239.405)';
          slideTable = 'translate(-1040 1545.604)';
        } else if (selectedCharacter === 'hira') {
          slideBlackboard = 'translate(-1300 447.604)';
          slideBench = 'translate(1186.245 1041.405)';
          slideTable = 'translate(-1040 347.604)';
        } else if (selectedCharacter === 'nirjala') {
          slideBlackboard = 'translate(-1300 4233.276)';
          slideBench = 'translate(1128.289 4827.076)';
          slideTable = 'translate(-1097.956 4133.276)';
        } else if (selectedCharacter === 'sabina') {
          slideBlackboard = 'translate(-1300 6614.881)';
          slideBlackboard = 'translate(-1300 6614.881)';
          slideBench = 'translate(1128.289 7208.681)';
          slideTable = 'translate(-1097.956 6514.881)';
        } else if (selectedCharacter === 'prakrit') {
          slideBlackboard = 'translate(-1300 5445.276)';
          slideBench = 'translate(1124.289 6039.076)';
          slideTable = 'translate(-1101.956 5345.276)';
        } else {
          null;
        }
        const randNo = getRandomNumber(0, 5);

        // spots where character is not hidden
        const wrongHidingSpots = findWrongHidingSpots();

        // console.log(wrongHidingSpots)

        // spot where character is hidden
        const [$selector, correctHidingSpots] = findCorrectHidingSpots();
        // console.log(
        //   selectedHidingSpot,
        //   wrongHidingSpots[randNo][0] + wrongHidingSpots[randNo][1] + '?'
        // )

        // inserting the random guess to textbox
        $('.sp-6 > p').append(
          wrongHidingSpots[randNo][0] + wrongHidingSpots[randNo][1] + '?'
        );

        // inserting the correct guess to textbox
        $('.sp-7 > p').append(
          wrongHidingSpots[randNo][0] + wrongHidingSpots[randNo][1] + '.'
        );

        // guessing the wrong and right spots and shwoing the character on correct guess
        // guessing the wrong spots
        $('.sp-6').fadeIn(500, function () {
          // hidespot
          playgif(
            preload,
            'p1s14',
            'munaFront',
            'munaFrontGif',
            'muna',
            null,
            'hidespot' + wrongHidingSpots[randNo][1],
            function () {
              // guessing the wrong spots feedback
              // hiding the wrong hiding spot
              // console.log(wrongHidingSpots[randNo][1])

              wrongHidingSpots[randNo][1] === 'bench' ||
              wrongHidingSpots[randNo][1] === 'blackboard' ||
              wrongHidingSpots[randNo][1] === 'tables'
                ? null
                : $('#' + wrongHidingSpots[randNo][3]).fadeOut(100);

              wrongHidingSpots[randNo][1] === 'door' &&
                $('#Close_door').fadeIn(100);
              wrongHidingSpots[randNo][1] === 'closet' &&
                $('#Open_cupboard').fadeIn(100);
              wrongHidingSpots[randNo][1] === 'blackboard' &&
                $('#' + wrongHidingSpots[randNo][3])
                  .attr('transform', slideBlackboard)
                  .css('transition', 'all 1s');
              wrongHidingSpots[randNo][1] === 'bench' &&
                $('#' + wrongHidingSpots[randNo][3])
                  .attr('transform', slideBench)
                  .css('transition', 'all 1s');
              wrongHidingSpots[randNo][1] === 'tables' &&
                $('#' + wrongHidingSpots[randNo][3])
                  .attr('transform', slideTable)
                  .css('transition', 'all 1s');

              $('.sp-6').fadeOut(1000, function () {
                // for smooth transition
                timeoutvar = setTimeout(() => {
                  $('.sp-7').fadeIn(500, function () {
                    playgif(
                      preload,
                      'p1s15',
                      'munaFront',
                      'munaFrontGif',
                      'muna',
                      null,
                      'hidespot' + wrongHidingSpots[randNo][1],
                      function () {
                        // guessing the correct hiding spot

                        $('.sp-7').fadeOut(500, function () {
                          // inserting the correct guess to textbox
                          $('.sp-8 > p').append(
                            correctHidingSpots[0][0] +
                              correctHidingSpots[0][1] +
                              '?'
                          );

                          $('.sp-8').fadeIn(500, function () {
                            playgif(
                              preload,
                              'p1s14',
                              'munaFront',
                              'munaFrontGif',
                              'muna',
                              null,
                              'hidespot' + correctHidingSpots[0][1],
                              () => {
                                // showing the character and hiding hiding spot

                                correctHidingSpots[0][1] === 'door' &&
                                  $('#Close_door').fadeIn(100);
                                correctHidingSpots[0][1] === 'closet' &&
                                  $('#Open_cupboard').fadeIn(100);
                                correctHidingSpots[0][1] === 'blackboard' &&
                                  $('#' + correctHidingSpots[0][3])
                                    .attr('transform', slideBlackboard)
                                    .css('transition', 'all 1s');

                                correctHidingSpots[0][1] === 'bench' &&
                                  $('#' + correctHidingSpots[0][3])
                                    .attr('transform', slideBench)
                                    .css('transition', 'all 1s');
                                correctHidingSpots[0][1] === 'tables' &&
                                  $('#' + correctHidingSpots[0][3])
                                    .attr('transform', slideTable)
                                    .css('transition', 'all 1s');

                                correctHidingSpots[0][1] === 'bench' ||
                                correctHidingSpots[0][1] === 'blackboard' ||
                                correctHidingSpots[0][1] == 'tables'
                                  ? $(
                                      '#' +
                                        selectedCharacter +
                                        correctHidingSpots[0][2]
                                    ).fadeIn(100, nav_button_controls)
                                  : $('#' + correctHidingSpots[0][3]).hide(
                                      1000,
                                      function () {
                                        $(
                                          '#' +
                                            selectedCharacter +
                                            correctHidingSpots[0][2]
                                        ).fadeIn(100, nav_button_controls);
                                      }
                                    );
                              }
                            );
                          });
                        });
                      }
                    );
                  });
                }, 1000);
              });
            }
          );
        });
      });
    });
  }

  function showHidingSpot() {
    // underling the preposition and manipuling those sentence
    $('.hidingspot').each((index, sentence) => {
      // showing the sentence one by one
      timeoutvar = setTimeout(() => {
        $(sentence).fadeIn();
        // enabling pointer event
        if (index === $('.hidingspot').length - 1) {
          $('.hidingspot').css('pointer-events', 'all');
          hidingSpotHover();
          chooseHidingSpot();
        }
      }, 1000 * (index + 1));

      const words = $(sentence).text().split(' ');

      $(sentence).text(''); //emptying the sentence
      $.each(words, (index, word) => {
        $(sentence).append(
          `${
            index === 0
              ? '<span style="text-decoration: underline">' + word + '</span>'
              : ' ' + word + ' '
          }`
        );
      });
    });

    // adding speaker icon
    $('.hidingspot').append(
      `<img class="speaker" src="/images/speaker-orange.png"/>`
    );
  }

  // play the sound of the hiding spot on hover
  function hidingSpotHover() {
    $('.speaker').on('mouseover', function () {
      // $(this).parent().attr('class ') -> 'hidingspot door'
      // console.log(
      //   'hidespot' +
      //     $(this).parent().attr('class').split(' ')[1] +
      //     selectedCharacterGender
      // )

      sound_player(
        'hidespot' +
          $(this).parent().attr('class').split(' ')[1] +
          selectedCharacterGender
      );
    });
  }

  // choosing the hiding spot
  function chooseHidingSpot() {
    $('.hidingspot').click(function () {
      // play the sound of the hiding on click also
      sound_player(
        'hidespot' +
          $(this).attr('class').split(' ')[1] +
          selectedCharacterGender
      );

      $(this)
        .off('click')
        .css({ 'pointer-events': 'none', 'background-color': '#f5f5f5' });

      // getting the hiding spot
      selectedHidingSpot = $(this).attr('class').split(' ')[1];

      // console.log(selectedHidingSpot)

      const $selectedCharacter = $('.selected-character');
      const $selectedHidingSpot = $('.' + selectedHidingSpot);

      // removing inverting effect for all spot except door
      selectedHidingSpot === 'door' ||
        $selectedCharacter.toggleClass('inverted');

      // hiding all options expect selected one and replace selected charc gif
      $('.hidingspot').each((index, item) => {
        $(item).hasClass(selectedHidingSpot) || $(item).fadeOut(100);
      });

      // for page 9
      if (countNext === 8) {
        let charMoveX = 0,
          charMoveY = 0,
          charMoveX2 = 0,
          charMoveX3 = 0,
          delay = 1000,
          charheight = '35%',
          imgsrc = imgpathWalk + selectedCharacter + '_walk_right.gif';

        // moving the character toward selected spot
        switch (selectedHidingSpot) {
          case 'door':
            charMoveX = '10%';
            charMoveY = '25%';
            charheight = '25%';
            delay = 2000;
            imgsrc = imgpathWalk + selectedCharacter + '_walk_back.gif';
            break;
          case 'curtain':
            charMoveX = '20%';
            charMoveY = '35%';
            charheight = '25%';
            delay = 3000;
            imgsrc = imgpathWalk + selectedCharacter + '_walk_back.gif';
            break;
          case 'blackboard':
            charMoveX = '15%';
            charMoveX2 = '40%';
            charMoveX3 = '45%';
            charMoveY = '33%';
            charheight = '28%';
            delay = 2000;
            break;
          case 'closet':
            charMoveX = '15%';
            charMoveX2 = '80%';
            charMoveX3 = '85%';
            charMoveY = '30%';
            charheight = '28%';
            delay = 2000;
            break;
          case 'tables':
            charheight = '33%';
            charMoveX = '15%';
            charMoveX2 = '65%';
            charMoveX3 = '68%';
            charMoveY = '5%';
            break;
          case 'bench':
            charheight = '33%';
            charMoveX = '25%';
            charMoveY = '5%';
            delay = 1000;
            break;
        }

        $selectedHidingSpot.fadeOut(500, function () {
          // showing walking character
          $selectedCharacter.attr('src', imgsrc);
          $selectedCharacter.animate(
            {
              left: charMoveX,
              bottom: charMoveY,
              height: charheight,
            },
            delay,
            'linear',
            function () {
              const [$selector, correctHidingSpots] = findCorrectHidingSpots();

              if (
                selectedHidingSpot === 'blackboard' ||
                selectedHidingSpot === 'closet' ||
                selectedHidingSpot === 'tables'
              ) {
                // showing the character in next to hiding spot
                $selectedCharacter.css('left', charMoveX2);
                // hiding character in hiding spot
                $selectedCharacter.animate(
                  {
                    left: charMoveX3,
                    bottom: charMoveY,
                    height: charheight,
                  },
                  1000,
                  'linear',
                  () =>
                    $selectedCharacter.fadeOut(500, () =>
                      $selector.show(100, nav_button_controls)
                    )
                );
              } else {
                $selectedCharacter.fadeOut(500, () =>
                  $selector.show(100, nav_button_controls)
                );
              }
            }
          );
        });
      } else {
        // for page 15
        guessMunaHidingSpot(selectedHidingSpot);
      }
    });
  }

  // guessing muna hiding spot
  function guessMunaHidingSpot(selectedHidingSpot) {
    // hiding all option
    $('.hidingspot').hide();

    const selectedHidingSpotMuna = hidingspots.filter(
      (item) => item[1] === selectedHidingSpot
    );

    // guessing muna spot
    const spotText = (textboxclass, soundid, soundid2, textval, callback) => {
      $('.' + textboxclass + '> p').text(textval);

      $('.' + textboxclass).fadeIn(500, function () {
        playgif(
          preload,
          soundid,
          selectedCharacter + 'Front',
          selectedCharacter + 'FrontGif',
          'selected-character',
          () =>
            playgif(
              preload,
              soundid2,
              selectedCharacter + 'Front',
              selectedCharacter + 'FrontGif',
              'selected-character',
              callback
            )
        );
      });
    };

    const finalcallback = () => {
      // using setTimeout for smooth animation
      timeoutvar = setTimeout(() => {
        $('.sp-5 > p').text(
          data.string.p1s23 + munaHidingSpot[0] + munaHidingSpot[1] + '.'
        );
        $('#muna' + selectedHidingSpotMuna[0][2]).fadeOut(1000, () =>
          $('.ch-room4').fadeIn(100, function () {
            $('.sp-5').fadeIn(500, function () {
              playgif(preload, 'p1s23', 'muna', 'munaGif', 'ch-room4', () =>
                playgif(
                  preload,
                  'hidespot' + selectedHidingSpotMuna[0][1],
                  'muna',
                  'munaGif',
                  'ch-room4',
                  nav_button_controls
                )
              );
            });
          })
        );
      }, 1000);
    };

    // initial guess
    spotText(
      'sp-4',
      'p1s20' + selectedCharacterGender,
      'hidespot' + selectedHidingSpotMuna[0][1] + selectedCharacterGender,
      data.string.p1s20 +
        selectedHidingSpotMuna[0][0] +
        (selectedHidingSpotMuna[0][1] === 'tables'
          ? 'table' //to prevent showing under the tables
          : // sorry for those who are maintainin this
            // initially I used tables so instead changing all put condition here
            selectedHidingSpotMuna[0][1]) +
        '?',
      function () {
        if (selectedHidingSpotMuna[0][1] === munaHidingSpot[1]) {
          // showing muna
          selectedHidingSpotMuna[0][1] === 'door' &&
            $('#Close_door').fadeIn(100);
          selectedHidingSpotMuna[0][1] === 'closet' &&
            $('#Open_cupboard').fadeIn(100);

          selectedHidingSpotMuna[0][1] === 'blackboard' &&
            $('#' + selectedHidingSpotMuna[0][3])
              .attr('transform', 'translate(-1293.956 3021.276)')
              .css('transition', 'all 1s');
          selectedHidingSpotMuna[0][1] === 'bench' &&
            $('#' + selectedHidingSpotMuna[0][3])
              .attr('transform', 'translate(1132.289 3740)')
              .css('transition', 'all 1s');
          selectedHidingSpotMuna[0][1] === 'tables' &&
            $('#' + selectedHidingSpotMuna[0][3])
              .attr('transform', 'translate(-1093.956 2921.276)')
              .css('transition', 'all 1s');

          selectedHidingSpotMuna[0][1] === 'bench' ||
          selectedHidingSpotMuna[0][1] === 'tables' ||
          selectedHidingSpotMuna[0][1] === 'blackboard'
            ? $('#muna' + selectedHidingSpotMuna[0][2]).fadeIn(
                100,
                finalcallback
              )
            : $('#' + selectedHidingSpotMuna[0][3]).hide(1000, function () {
                $('#muna' + selectedHidingSpotMuna[0][2]).fadeIn(
                  100,
                  finalcallback
                );
              });
          $('.sp-6').fadeOut(500, function () {
            spotText(
              'sp-7',
              'p1s22' + selectedCharacterGender,
              data.string.p1s22 + munaHidingSpot[0] + munaHidingSpot[1] + '.',
              function () {
                $('.speechbox').hide();
              }
            );
          });
        } else {
          $('.sp-4').fadeOut(500, function () {
            // hiding the wrong guessed items
            selectedHidingSpotMuna[0][1] === 'bench' ||
            selectedHidingSpotMuna[0][1] === 'blackboard' ||
            selectedHidingSpotMuna[0][1] === 'tables'
              ? null
              : $('#muna' + selectedHidingSpotMuna[0][2]).fadeOut(
                  100,
                  function () {
                    $('#' + selectedHidingSpotMuna[0][3]).hide(1000);
                  }
                );
            selectedHidingSpotMuna[0][1] === 'closet' &&
              $('#Open_cupboard').fadeIn(100);
            selectedHidingSpotMuna[0][1] === 'door' &&
              $('#Close_door').fadeIn(100);
            selectedHidingSpotMuna[0][1] === 'blackboard' &&
              $('#' + selectedHidingSpotMuna[0][3])
                .attr('transform', 'translate(-1293.956 3021.276)')
                .css('transition', 'all 1s');
            selectedHidingSpotMuna[0][1] === 'bench' &&
              $('#' + selectedHidingSpotMuna[0][3])
                .attr('transform', 'translate(1132.289 3740)')
                .css('transition', 'all 1s');
            selectedHidingSpotMuna[0][1] === 'tables' &&
              $('#' + selectedHidingSpotMuna[0][3])
                .attr('transform', 'translate(-1093.956 2921.276)')
                .css('transition', 'all 1s');

            timeoutvar = setTimeout(() => {
              spotText(
                'sp-6',
                'p1s21' + selectedCharacterGender,
                'hidespot' +
                  selectedHidingSpotMuna[0][1] +
                  selectedCharacterGender,
                data.string.p1s21 +
                  selectedHidingSpotMuna[0][0] +
                  selectedHidingSpotMuna[0][1] +
                  '.',
                function () {
                  $('.sp-6').hide();
                  $('.hidingspot').fadeIn(100);
                }
              );
            }, 1000);
          });
        }
      }
    );
  }

  function bgsvg() {
    var s1 = Snap('#bgSVG');

    // placing the selected character
    $('.selected-character').attr(
      'src',
      preload.getResult(selectedCharacter + 'Front').src
    );

    // laoding SVG
    Snap.load(
      preload.getResult((countNext >= 13 ? 'muna' : selectedCharacter) + 'SVG')
        .src,
      function (loadedFragment) {
        s1.append(loadedFragment);

        $('#Open_cupboard').hide();
        $('#Close_door').hide();
        if (countNext === 9 || countNext === 10) {
          const [$selector, correctHidingSpots] = findCorrectHidingSpots();
          const wrongHidingSpots = findWrongHidingSpots();

          $selector.show();

          // hiding the wrong hiding spots
          $.each(wrongHidingSpots, (index, wrongHidingSpot) => {
            // console.log(selectedCharacter + wrongHidingSpot[2])
            $('#' + selectedCharacter + wrongHidingSpot[2]).hide();
          });
        } else if (countNext === 13 || countNext === 14) {
          hidingspots.forEach((item) => {
            item != munaHidingSpot
              ? $('#muna' + item[2]).hide() // hiding the character at wrong hiding spots
              : $('#muna' + item[2]).show(); //shwowing the character at correct hiding spot
          });
        } else {
          $(
            '#' +
              (countNext >= 13 ? 'muna' : selectedCharacter) +
              '_behind_the_door'
          ).hide();
          $(
            '#' +
              (countNext >= 13 ? 'muna' : selectedCharacter) +
              '_behind_the_curtain'
          ).hide();
          $(
            '#' +
              (countNext >= 13 ? 'muna' : selectedCharacter) +
              '_next_to_the_blackboard'
          ).hide();
          $(
            '#' +
              (countNext >= 13 ? 'muna' : selectedCharacter) +
              '_in_the_closet'
          ).hide();
          $(
            '#' +
              (countNext >= 13 ? 'muna' : selectedCharacter) +
              '_under_the_table'
          ).hide();
          $(
            '#' +
              (countNext >= 13 ? 'muna' : selectedCharacter) +
              '_on_the_bench'
          ).hide();
        }
      }
    );
  }

  function handleConversation(soundid1, soundid2) {
    // console.log(selectedCharacter, selectedCharacterGender)
    $('.sp-5').hide();
    // placing the selected character
    $('.selected-character').attr(
      'src',
      preload.getResult(selectedCharacter + 'Talk').src
    );
    // in page 8 and 12 only the selected character speaks
    playgif(
      preload,
      countNext === 7 || countNext === 11
        ? soundid1 + selectedCharacterGender
        : soundid1,
      countNext === 7 || countNext === 11
        ? selectedCharacter + 'Front'
        : 'muna',
      countNext === 7 || countNext === 11
        ? selectedCharacter + 'FrontGif'
        : 'munaGif',
      countNext === 7 || countNext === 11 ? 'selected-character' : 'muna',
      countNext === 7 || countNext === 6
        ? () => nav_button_controls()
        : function () {
            if (soundid2) {
              countNext !== 11
                ? $('.sp-4').fadeOut(500, function () {
                    // for page 8 animate muna going out of room
                    countNext === 7 &&
                      $('.muna')
                        .attr('src', preload.getResult('munaWalkGif').src)
                        .animate(
                          {
                            left: '-3%',
                          },
                          4000,
                          'linear',
                          function () {
                            $(this).fadeOut(500, nav_button_controls);
                          }
                        );

                    $('.sp-5').fadeIn(500, function () {
                      playgif(
                        preload,
                        soundid2 + selectedCharacterGender,
                        selectedCharacter + 'Talk',
                        selectedCharacter + 'Talk' + 'Gif',
                        'selected-character ',
                        nav_button_controls
                      );
                    });
                  })
                : playgif(
                    preload,
                    soundid2 + selectedCharacterGender,
                    selectedCharacter + 'Talk',
                    selectedCharacter + 'Talk' + 'Gif',
                    'selected-character ',
                    nav_button_controls
                  );
            }
          }
    );
  }

  function pickCharacter() {
    $('.avatar').css('pointer-events', 'all');
    $('.avatar').click(function () {
      selectedCharacterGender = $(this).attr('class').split(' ')[1];
      selectedCharacter = $(this).attr('class').split(' ')[2];
      //  make clicked avatar selected
      $(this).toggleClass('selected');
      // removing selected class from all avatars
      $(this).siblings().removeClass('selected');

      nav_button_controls(100);
    });
  }

  function put_avatars_image(content, count) {
    if (content[count].hasOwnProperty('avatars')) {
      for (var i = 0; i < content[count].avatars.length; i++) {
        var character = content[count].avatars[i];
        var imageClass = character.imagestoshow;
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
