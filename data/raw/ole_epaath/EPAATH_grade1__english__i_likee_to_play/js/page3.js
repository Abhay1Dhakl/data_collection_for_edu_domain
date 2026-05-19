var imgpath = $ref + '/images/section-3/'
//var imgpath = $ref + "/images/";
var soundAsset = $ref + '/sounds/' + $lang + '/'

var timeout

var content = [
  // Slide 1
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
                imgclass: 'boy1',
                imgid: 'boy1',
                imgsrc: '',
              },
              {
                imgclass: 'boy2',
                imgid: 'boy2',
                imgsrc: '',
              },
              {
                imgclass: 'dog',
                imgid: 'dog',
                imgsrc: '',
              },
              {
                imgclass: 'speaker',
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
        textdata: data.string.s2p1,
      },
    ],
  },
  // slide 2
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
                imgclass: 'boy1',
                imgid: 'boy1',
                imgsrc: '',
              },
              {
                imgclass: 'boy2',
                imgid: 'boy2',
                imgsrc: '',
              },
              {
                imgclass: 'think',
                imgid: 'thi',
                imgsrc: '',
              },
              {
                imgclass: 'dog',
                imgid: 'dog',
                imgsrc: '',
              },
              {
                imgclass: 'bone',
                imgid: 'bone',
                imgsrc: '',
              },
              {
                imgclass: 'ban',
                imgid: 'ban',
                imgsrc: '',
              },
              {
                imgclass: 'smily',
                imgid: 'man1',
                imgsrc: '',
              },
              {
                imgclass: 'speaker',
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
        textdata: data.string.s2p2,
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
                imgclass: 'boy1',
                imgid: 'boy1',
                imgsrc: '',
              },
              {
                imgclass: 'boy2',
                imgid: 'boy2',
                imgsrc: '',
              },
              {
                imgclass: 'think',
                imgid: 'thi',
                imgsrc: '',
              },
              {
                imgclass: 'dog',
                imgid: 'dog',
                imgsrc: '',
              },
              {
                imgclass: 'cookie',
                imgid: 'cookie',
                imgsrc: '',
              },
              {
                imgclass: 'smily',
                imgid: 'man2',
                imgsrc: '',
              },
              {
                imgclass: 'speaker',
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
        textdata: data.string.s2p3,
      },
    ],
  },
  // Slide 4
  {
    outsidediv: [
      {
        outdiv: 'backgroundimage',
        appearclass: 'appear',
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
                imgclass: 'boy1',
                imgid: 'boy1',
                imgsrc: '',
              },
              {
                imgclass: 'boy2',
                imgid: 'boy2',
                imgsrc: '',
              },
              {
                imgclass: 'dog',
                imgid: 'dog',
                imgsrc: '',
              },
              {
                imgclass: 'cookie',
                imgid: 'cookie',
                imgsrc: '',
              },
              {
                imgclass: 'speaker',
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
        textdata: data.string.s2p4,
      },
    ],
    divimageblock: [
      {
        optiondiv: 'optdiv',
        commonclass: 'commonbox',
        textclass: 'text01',
        textdata: data.string.s2p5,
        imagestoshow: [
          {
            imgclass: 'bone1',
            imgid: 'bone',
            imgsrc: imgpath + 'bone.png',
          },
          {
            imgclass: 'cookie1',
            imgid: 'cookie',
            imgsrc: imgpath + 'cookiee.png',
          },
          {
            imgclass: 'ban1',
            imgid: 'ban',
            imgsrc: imgpath + 'banana.png',
          },
          {
            imgclass: 'bone2 options correct',
            imgid: 'bone',
            imgsrc: imgpath + 'bone.png',
          },
          {
            imgclass: 'ban2 options incorrect1',
            imgid: 'banana',
            imgsrc: imgpath + 'banana.png',
          },
          {
            imgclass: 'cookie2 options incorrect2',
            imgid: 'cookie',
            imgsrc: imgpath + 'cookiee.png',
          },

          {
            imgclass: 'hand',
            imgid: 'hand',
            imgsrc: imgpath + 'hand.gif',
          },
        ],
      },
    ],
  },

  //next one
  //slide 5
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
                imgid: 'bg',
              },
              {
                imgclass: 'girl2',
                imgid: 'girl2',
                imgsrc: '',
              },
              {
                imgclass: 'girl1',
                imgid: 'girl1',
                imgsrc: '',
              },
              {
                imgclass: 'cow',
                imgid: 'cow',
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
        speechbox: 'spbox-right1',
        imgclass: 'textbox inverted',
        imgid: 'speechbox',
        textclass: 'text',
        textdata: data.string.s2p6,
      },
    ],
  },
  //slide 6
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
                imgid: 'bg',
                imgsrc: '',
              },
              {
                imgclass: 'girl2',
                imgid: 'girl2',
                imgsrc: '',
              },
              {
                imgclass: 'girl1',
                imgid: 'girl1',
                imgsrc: '',
              },
              {
                imgclass: 'cow',
                imgid: 'cow',
                imgsrc: '',
              },
              {
                imgclass: 'speaker1',
                imgid: 'speaker',
                imgsrc: '',
              },
              {
                imgclass: 'think1',
                imgid: 'thi',
                imgsrc: '',
              },

              {
                imgclass: 'bone',
                imgid: 'bone',
                imgsrc: '',
              },
              {
                imgclass: 'grass7',
                imgid: 'grass',
                imgsrc: '',
              },
              {
                imgclass: 'corn7',
                imgid: 'corn',
                imgsrc: '',
              },
              {
                imgclass: 'smily1',
                imgid: 'man1',
                imgsrc: '',
              },
            ],
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'spbox-right1',
        imgclass: 'textbox inverted',
        imgid: 'speechbox',
        textclass: 'text',
        textdata: data.string.s2p7,
      },
    ],
  },

  //slide 7
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
                imgid: 'bg',
                imgsrc: '',
              },
              {
                imgclass: 'girl2',
                imgid: 'girl2',
                imgsrc: '',
              },
              {
                imgclass: 'girl1',
                imgid: 'girl1',
                imgsrc: '',
              },
              {
                imgclass: 'cow',
                imgid: 'cow',
                imgsrc: '',
              },
              {
                imgclass: 'speaker1',
                imgid: 'speaker',
                imgsrc: '',
              },
              {
                imgclass: 'think1',
                imgid: 'thi',
                imgsrc: '',
              },
              {
                imgclass: 'bread7',
                imgid: 'bread',
                imgsrc: '',
              },
              {
                imgclass: 'smily1',
                imgid: 'man2',
                imgsrc: '',
              },
            ],
          },
        ],
      },
    ],
    speechbox: [
      {
        speechbox: 'spbox-right1',
        imgclass: 'textbox inverted',
        imgid: 'speechbox',
        textclass: 'text',
        textdata: data.string.s2p8,
      },
    ],
  },
  // Slide 8
  {
    outsidediv: [
      {
        outdiv: 'backgroundimage',

        appearclass: 'appear',
        divtextblock: [],
        divimageblock: [
          {
            imagestoshow: [
              {
                imgclass: 'backgroundinside',
                imgid: 'bg',
                imgsrc: '',
              },
              {
                imgclass: 'girl2',
                imgid: 'girl2',
                imgsrc: '',
              },
              {
                imgclass: 'girl1',
                imgid: 'girl1',
                imgsrc: '',
              },
              {
                imgclass: 'cow',
                imgid: 'cow',
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
        speechbox: 'spbox-right1',
        imgclass: 'textbox inverted',
        imgid: 'speechbox',
        textclass: 'text',
        textdata: data.string.s2p9,
      },
    ],
    divimageblock: [
      {
        optiondiv: 'optdiv',
        commonclass: 'commonbox1',
        textclass: 'text01',
        textdata: data.string.s2p9,
        imagestoshow: [
          {
            imgclass: 'bread',
            imgid: 'bread',
            imgsrc: imgpath + 'bread.png',
          },
          {
            imgclass: 'corn',
            imgid: 'corn',
            imgsrc: imgpath + 'corn.png',
          },
          {
            imgclass: 'grass',
            imgid: 'grass',
            imgsrc: imgpath + 'grass.png',
          },
          {
            imgclass: 'bone2 options incorrect',
            imgid: 'bread',
            imgsrc: imgpath + 'bread.png',
          },
          {
            imgclass: 'ban2 options correct1',
            imgid: 'grass',
            imgsrc: imgpath + 'grass.png',
          },
          {
            imgclass: 'cookie2 options correct2',
            imgid: 'corn',
            imgsrc: imgpath + 'corn.png',
          },
        ],
      },
    ],
  },
  //girl3
  // Slide 9
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
                imgid: 'bg1',
                imgsrc: '',
              },
              {
                imgclass: 'she1',
                imgid: 'she1',
                imgsrc: '',
              },
              {
                imgclass: 'she',
                imgid: 'she',
                imgsrc: '',
              },
              {
                imgclass: 'cat',
                imgid: 'cat',
                imgsrc: '',
              },
              {
                imgclass: 'speaker',
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
        textdata: data.string.s2p10,
      },
    ],
  },

  //slide 10
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
                imgid: 'bg1',
                imgsrc: '',
              },
              {
                imgclass: 'she1',
                imgid: 'she1',
                imgsrc: '',
              },
              {
                imgclass: 'she',
                imgid: 'she',
                imgsrc: '',
              },
              {
                imgclass: 'cat',
                imgid: 'cat',
                imgsrc: '',
              },
              {
                imgclass: 'speaker',
                imgid: 'speaker',
                imgsrc: '',
              },
              {
                imgclass: 'think',
                imgid: 'thi',
                imgsrc: '',
              },

              {
                imgclass: 'bone',
                imgid: 'fish',
                imgsrc: imgpath + 'fish.png',
              },
              {
                imgclass: 'ban',
                imgid: 'milk',
                imgsrc: imgpath + 'milk.png',
              },
              {
                imgclass: 'smily',
                imgid: 'man1',
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
        textdata: data.string.s2p11,
      },
    ],
  },

  //slide 11
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
                imgid: 'bg1',
                imgsrc: '',
              },
              {
                imgclass: 'she1',
                imgid: 'she1',
                imgsrc: '',
              },
              {
                imgclass: 'she',
                imgid: 'she',
                imgsrc: '',
              },
              {
                imgclass: 'cat',
                imgid: 'cat',
                imgsrc: '',
              },
              {
                imgclass: 'speaker',
                imgid: 'speaker',
                imgsrc: '',
              },
              {
                imgclass: 'think',
                imgid: 'thi',
                imgsrc: '',
              },

              {
                imgclass: 'corn1',
                imgid: 'corn1',
                imgsrc: imgpath + 'corn1.png',
              },
              {
                imgclass: 'smily',
                imgid: 'man2',
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
        textdata: data.string.s2p12,
      },
    ],
  },
  // Slide 12
  {
    outsidediv: [
      {
        outdiv: 'backgroundimage',
        appearclass: 'appear',
        divtextblock: [],
        divimageblock: [
          {
            imagestoshow: [
              {
                imgclass: 'backgroundinside',
                imgid: 'bg1',
                imgsrc: '',
              },
              {
                imgclass: 'she1',
                imgid: 'she1',
                imgsrc: '',
              },
              {
                imgclass: 'she',
                imgid: 'she',
                imgsrc: '',
              },
              {
                imgclass: 'cat',
                imgid: 'cat',
                imgsrc: '',
              },
              {
                imgclass: 'cookie',
                imgid: 'cookie',
                imgsrc: '',
              },
              {
                imgclass: 'speaker',
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
        textdata: data.string.s2p13,
      },
    ],
    divimageblock: [
      {
        optiondiv: 'optdiv',
        commonclass: 'commonbox',
        textclass: 'text01',
        textdata: data.string.s2p5,
        imagestoshow: [
          {
            imgclass: 'bone1',
            imgid: 'fish',
            imgsrc: imgpath + 'fish.png',
          },
          {
            imgclass: 'cookie1',
            imgid: 'milk',
            imgsrc: imgpath + 'milk.png',
          },
          {
            imgclass: 'ban1',
            imgid: 'corn1',
            imgsrc: imgpath + 'corn1.png',
          },
          {
            imgclass: 'bone2 options correct1 correct',
            imgid: 'fish',
            imgsrc: imgpath + 'fish.png',
          },
          {
            imgclass: 'ban2 options incorrect',
            imgid: 'corn1',
            imgsrc: imgpath + 'corn1.png',
          },
          {
            imgclass: 'cookie2 options correct2 correct',
            imgid: 'milk',
            imgsrc: imgpath + 'milk.png',
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
        id: 'bg2',
        src: imgpath + 'cover.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'speaker',
        src: imgpath + 'speaker.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      //{id: "girl", src: imgpath+"girl-talking-1.gif", type: createjs.AbstractLoader.IMAGE},
      {
        id: 'man1',
        src: imgpath + 'smily.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'man2',
        src: imgpath + 'sad.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'boy1',
        src: imgpath + 'boy_talking_png.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'boy2',
        src: imgpath + 'boy_talking_gif.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'dog',
        src: imgpath + 'dog.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'speechbox',
        src: imgpath + 'commentbox.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'bone',
        src: imgpath + 'bone.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ban',
        src: imgpath + 'banana.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'cookie',
        src: imgpath + 'cookiee.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'thi',
        src: imgpath + 'think-bubble.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'hand',
        src: imgpath + 'hand.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      // {id: "cld2", src: imgpath+"commentbox.png", type: createjs.AbstractLoader.IMAGE},
      //for girl 1
      {
        id: 'bg',
        src: imgpath + 'bg2.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'girl1',
        src: imgpath + 'prena_talking_gif.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'girl2',
        src: imgpath + 'prena_png.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'cow',
        src: imgpath + 'cow.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'corn',
        src: imgpath + 'corn.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'grass',
        src: imgpath + 'grass.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'bread',
        src: imgpath + 'bread.png',
        type: createjs.AbstractLoader.IMAGE,
      },

      // {id: "bg3", src: imgpath+"scenery.png", type: createjs.AbstractLoader.IMAGE},
      //for girl 2
      {
        id: 'bg1',
        src: imgpath + 'bg_3.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'she',
        src: imgpath + 'girl_talking_gif.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'she1',
        src: imgpath + 'girl_talking_png.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'cat',
        src: imgpath + 'cat.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      // {
      //   id: 'cat1',
      //   src: imgpath + 'cat_gif.png',
      //   type: createjs.AbstractLoader.IMAGE,
      // },
      {
        id: 'milk',
        src: imgpath + 'milk.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'fish',
        src: imgpath + 'fish.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'corn1',
        src: imgpath + 'corn1.png',
        type: createjs.AbstractLoader.IMAGE,
      },

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
      // {id: "s1_2", src: soundAsset+"p2s1txt2.mp3"},
      // {id: "s1_2a", src: soundAsset+"p2s1txt2a.mp3"},
      // {id: "s1_2b", src: soundAsset+"p2s1txt2b.mp3"},

      // {id: "s2", src: soundAsset+"p2s3txt.mp3"},
      // {id: "s2con", src: soundAsset+"p2s3t1.mp3"},
      // {id: "s31", src: soundAsset+"p2s3t2.mp3"},
      // {id: "s32", src: soundAsset+"p2s3t22.mp3"},

      // {id: "s33", src: soundAsset+"p2s3t3.mp3"},
      // {id: "s3con", src: soundAsset+"p2s3t33.mp3"},

      // {id: "s4", src: soundAsset+"p2s4txt.mp3"},
      // {id: "s5", src: soundAsset+"nirjiv.mp3"},
      // {id: "s4a", src: soundAsset+"p11a.mp3"},

      // {id: "s4b", src: soundAsset+"p11b.mp3"},
      // {id: "s4c", src: soundAsset+"p11c.mp3"},

      // {id: "s4d", src: soundAsset+"p11d.mp3"},
      // {id: "s4e", src: soundAsset+"p11e.mp3"},

      // {id: "s4f", src: soundAsset+"p11f.mp3"},

      { id: 's2p1', src: soundAsset + 's2p1.mp3' },
      { id: 's2p2', src: soundAsset + 's2p2.mp3' },
      { id: 's2p3', src: soundAsset + 's2p3.mp3' },
      { id: 's2p4', src: soundAsset + 's2p4.mp3' },
      { id: 's2p5', src: soundAsset + 's2p5.mp3' },
      { id: 's2p6', src: soundAsset + 's2p6.mp3' },
      { id: 's2p7', src: soundAsset + 's2p7.mp3' },
      { id: 's2p8', src: soundAsset + 's2p8.mp3' },
      { id: 's2p9', src: soundAsset + 's2p9.mp3' },
      { id: 's2p10', src: soundAsset + 's2p10.mp3' },
      { id: 's2p11', src: soundAsset + 's2p11.mp3' },
      { id: 's2p12', src: soundAsset + 's2p12.mp3' },
      { id: 's2p13', src: soundAsset + 's2p13.mp3' },
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
    //put_image2(content, countNext);
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
        current_sound = createjs.Sound.play('s2p1')
        current_sound.play()
        $('.spbox-right').show()
        current_sound.on('complete', function () {
          $('.boy2').hide(0)
          $('.boy1').fadeIn(0)
          clickspeaker('s2p1')
          nav_button_controls()
          //   })
        })
        break
      case 1:
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('s2p2')
        current_sound.play()
        $('.spbox-right').show()
        current_sound.on('complete', function () {
          //clickspeaker('mango');
          //   createjs.Sound.stop()
          //   current_sound = createjs.Sound.play('tasty')
          //   current_sound.play()
          $('.spbox-right2').show()
          //   current_sound.on('complete', function () {
          clickspeaker('s2p2')
          $('.boy2').hide(0)
          $('.boy1').fadeIn(0)
          //  $('.spbox-right').hide()
          //  $('.speaker').hide()
          $('.think').fadeIn(200)
          $('.bone').fadeIn(4000)
          $('.ban').fadeIn(4000)
          $('.smily').fadeIn(7000)
          nav_button_controls(7000)
          //   })
        })
        break

      case 2:
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('s2p3')
        current_sound.play()
        $('.spbox-right').show()
        current_sound.on('complete', function () {
          //   createjs.Sound.stop()
          //   current_sound = createjs.Sound.play('tasty')
          //   current_sound.play()
          $('.spbox-right2').show()
          //   current_sound.on('complete', function () {
          clickspeaker('s2p3')
          $('.boy2').hide(0)
          $('.boy1').fadeIn(0)
          //  $('.spbox-right').hide()
          //$('.speaker').hide()
          $('.think').fadeIn(200)
          $('.cookie').fadeIn(4000)
          $('.smily').fadeIn(7000)
          nav_button_controls(7000)
          //   })
        })
        break
      case 3:
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('s2p4')
        current_sound.play()
        $('.spbox-right').show()
        current_sound.on('complete', function () {
          //   createjs.Sound.stop()
          //   current_sound = createjs.Sound.play('tasty')
          //   current_sound.play()
          $('.spbox-right2').show()
          //   current_sound.on('complete', function () {
          clickspeaker('s2p4')
          $('.boy2').hide(0)
          $('.boy1').fadeIn(0)
          // $('.spbox-right').hide()
          // $('.speaker').hide()
          $('.commonbox').animate(
            {
              left: '56%',
            },
            3500
          )
          $('.appear').fadeIn(0)
          // $(this).css('pointer-events', 'none')
          clickAns()
          //   })
        })
        break
      case 4:
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('s2p6')
        current_sound.play()
        $('.spbox-right1').fadeIn(1000)
        current_sound.on('complete', function () {
          //clickspeaker('mango');
          //   createjs.Sound.stop()
          //   current_sound = createjs.Sound.play('tasty')
          //   current_sound.play()
          $('.spbox-right2').show()
          //   current_sound.on('complete', function () {
          clickspeaker('s2p6')
          $('.girl1').hide(0)
          $('.girl2').fadeIn(0)
          nav_button_controls()
          //   })
        })
        break
      case 5:
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('s2p7')
        current_sound.play()
        $('.spbox-right1').show()
        current_sound.on('complete', function () {
          //clickspeaker('mango');
          //   createjs.Sound.stop()
          //   current_sound = createjs.Sound.play('tasty')
          //   current_sound.play()
          $('.spbox-right2').show()
          //   current_sound.on('complete', function () {
          clickspeaker('s2p7')
          $('.girl1').hide(0)
          $('.girl2').fadeIn(0)
          //$('.spbox-right1').hide()
          // $('.speaker1').hide()
          $('.think1').fadeIn(200)
          $('.grass7').fadeIn(0)
          $('.corn7').fadeIn(0)
          $('.smily1').fadeIn(7000)
          nav_button_controls(7000)
          //   })
        })
        break
      case 6:
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('s2p8')
        current_sound.play()
        $('.spbox-right1').show()
        current_sound.on('complete', function () {
          //clickspeaker('mango');
          //   createjs.Sound.stop()
          //   current_sound = createjs.Sound.play('tasty')
          //   current_sound.play()
          $('.spbox-right2').show()
          //   current_sound.on('complete', function () {
          clickspeaker('s2p8')
          $('.girl1').hide(0)
          $('.girl2').fadeIn(0)
          // $('.spbox-right1').hide()
          //  $('.speaker1').hide()
          $('.think1').fadeIn(200)
          $('.bread7').fadeIn(4000)
          $('.smily1').fadeIn(7000)
          nav_button_controls(7000)
          //   })
        })
        break

      case 7:
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('s2p9')
        current_sound.play()
        $('.spbox-right1').show()
        current_sound.on('complete', function () {
          //clickspeaker('mango');
          //   createjs.Sound.stop()
          //   current_sound = createjs.Sound.play('tasty')
          //   current_sound.play()
          $('.spbox-right2').show()
          //   current_sound.on('complete', function () {
          clickspeaker('s2p9')
          $('.girl1').hide(0)
          $('.girl2').fadeIn(0)
          // $('.spbox-right1').hide()
          //  $('.speaker1').hide()
          $('.commonbox1').animate(
            {
              left: '56%',
            },
            3500
          )
          $('.appear').fadeIn(0)
          // $(this).css('pointer-events', 'none')
          clickAns1()
          // })
        })
        break
      case 8:
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('s2p10')
        current_sound.play()
        $('.spbox-right').show()
        current_sound.on('complete', function () {
          //clickspeaker('mango');
          //   createjs.Sound.stop()
          //   current_sound = createjs.Sound.play('tasty')
          //   current_sound.play()
          $('.spbox-right2').show()
          //   current_sound.on('complete', function () {
          clickspeaker('s2p10')
          $('.she').hide(0)
          $('.she1').fadeIn(0)
          nav_button_controls()
          //   })
        })
        break

      case 9:
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('s2p11')
        current_sound.play()
        $('.spbox-right').show()
        current_sound.on('complete', function () {
          //clickspeaker('mango');
          //   createjs.Sound.stop()
          //   current_sound = createjs.Sound.play('tasty')
          //   current_sound.play()
          $('.spbox-right2').show()
          //   current_sound.on('complete', function () {
          clickspeaker('s2p11')
          $('.she').hide(0)
          $('.she1').fadeIn(0)
          // $('.spbox-right').hide()
          // $('.speaker').hide()
          $('.think').fadeIn(200)
          $('.bone').fadeIn(4000)
          $('.ban').fadeIn(4000)
          $('.smily').fadeIn(7000)
          nav_button_controls(7000)
          //   })
        })
        break

      case 10:
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('s2p12')
        current_sound.play()
        $('.spbox-right').show()
        current_sound.on('complete', function () {
          //clickspeaker('mango');
          //   createjs.Sound.stop()
          //   current_sound = createjs.Sound.play('tasty')
          //   current_sound.play()
          $('.spbox-right2').show()
          //   current_sound.on('complete', function () {
          clickspeaker('s2p12')
          $('.she').hide(0)
          $('.she1').fadeIn(0)
          //$('.spbox-right').hide()
          // $('.speaker').hide()
          $('.think').fadeIn(200)
          $('.corn1').fadeIn(4000)
          $('.smily').fadeIn(7000)
          nav_button_controls(7000)
          //   })
        })
        break

      case 11:
        createjs.Sound.stop()
        current_sound = createjs.Sound.play('s2p13')
        current_sound.play()
        $('.spbox-right').show()
        current_sound.on('complete', function () {
          //clickspeaker('mango');
          //   createjs.Sound.stop()
          //   current_sound = createjs.Sound.play('tasty')
          //   current_sound.play()
          $('.spbox-right2').show()
          //   current_sound.on('complete', function () {
          clickspeaker('s2p13')
          $('.she').hide(0)
          $('.she1').fadeIn(0)
          //$('.spbox-right').hide()
          //  $('.speaker').hide()
          $('.commonbox').animate(
            {
              left: '56%',
            },
            3500
          )
          $('.appear').fadeIn(0)
          // $(this).css('pointer-events', 'none')
          clickAns2()
          //   })
        })
        break

      default:
        nav_button_controls()
        break
    }
  }
  function clickAns() {
    $('.options, .hand').click(function () {
      if ($(this).hasClass('correct')) {
        // sound_player_nav('correct')
        $('.hand').fadeOut(0)
        $('.correctwrongimg').fadeOut(0)
        $('.ban1').fadeOut(0)
        $('.cookie1').fadeOut(0)
        $('.bone2').fadeOut(0)
        $('.bone1').fadeIn(0)
        $('.appear').css('border', '2px solid green')
        $('.appear').css('background-color', '#5df65d')
        // $('.appear').fadeIn(0);
        $('.appear').append(
          "<img class='correctwrongimg' src='images/correct.png'/>"
        )
        play_correct_incorrect_sound_sybbas_prayas(1)
        $('.options').addClass('avoid-click')
        nav_button_controls(0)
      }
      if ($(this).hasClass('incorrect1')) {
        console.log('Aaa')
        $('.correctwrongimg').fadeOut(0)
        $('.ban2').fadeOut(0)
        $('.cookie1').fadeOut(0)
        $('.bone1').fadeOut(0)
        $('.ban1').fadeIn(0)
        $('.appear').css('border', '2px solid red')
        $('.appear').css('background-color', 'rgb(246 147 147')
        play_correct_incorrect_sound_sybbas_prayas(0)
        $('.appear').append(
          "<img class='correctwrongimg' src='images/wrong.png'/>"
        )
      }
      if ($(this).hasClass('incorrect2')) {
        $('.correctwrongimg').fadeOut(0)
        $('.ban1').fadeOut(0)
        $('.bone1').fadeOut(0)
        $('.cookie2').fadeOut(0)
        $('.cookie1').fadeIn(0)
        $('.appear').css('border', '2px solid red')
        $('.appear').css('background-color', 'rgb(246 147 147')
        play_correct_incorrect_sound_sybbas_prayas(0)
        //$(this).attr("src", incorrect).appendTo(".incorrect");
        $('.appear').append(
          "<img class='correctwrongimg' src='images/wrong.png'/>"
        )
      }
    })
  }
  function clickspeaker(speaker_sound) {
    $('.speaker').click()
    $('.speaker1').click()
    $('.speaker').click(function () {
      console.log('hello world')
      current_sound = createjs.Sound.play(speaker_sound)
      current_sound.play()
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

  function clickAns1() {
    $('.options').click(function () {
      //console.log('Aaa')
      if ($(this).hasClass('incorrect')) {
        // sound_player_nav('correct')
        console.log('Aaa')
        $('.hand').fadeOut(0)
        $('.correctwrongimg').fadeOut(0)
        $('.grass').fadeOut(0)
        $('.corn').fadeOut(0)
        $('.bone2').fadeOut(0)
        $('.bread').fadeIn(0)
        $('.appear').css('border', '2px solid red')
        $('.appear').css('background-color', 'rgb(246 147 147')
        play_correct_incorrect_sound_sybbas_prayas(0)
        $('.appear').html('')
        $('.appear').append(
          "<img class='correctwrongimg' src='images/wrong.png'/>"
        )
        // $('.options').addClass('avoid-click')
      }
      if ($(this).hasClass('correct1')) {
        $('.correctwrongimg').fadeOut(0)
        $('.ban2').fadeOut(0)
        $('.cookie1').fadeOut(0)
        $('.bread').fadeOut(0)
        $('.grass').fadeIn(0)
        $('.appear').css('border', '2px solid green')
        $('.appear').css('background-color', '#5df65d')
        //$(this).attr("src", incorrect).appendTo(".incorrect");
        play_correct_incorrect_sound_sybbas_prayas(1)
        $('.appear').html('')
        $('.appear').append(
          "<img class='correctwrongimg' src='images/correct.png'/>"
        )
      }
      if ($(this).hasClass('correct2')) {
        //  $('.appear').fadeOut(0);
        $('.grass').fadeOut(0)
        $('.bread').fadeOut(0)
        $('.cookie2').fadeOut(0)
        $('.corn').fadeIn(0)
        $('.appear').css('border', '2px solid green')
        $('.appear').css('background-color', '#5df65d')
        //$(this).attr("src", incorrect).appendTo(".incorrect");
        play_correct_incorrect_sound_sybbas_prayas(1)
        $('.appear').html('')
        $('.appear').append(
          "<img class='correctwrongimg' src='images/correct.png'/>"
        )
        nav_button_controls(0)
      }
    })
  }
  function clickAns2() {
    $('.options').click(function () {
      //console.log('Aaa')
      if ($(this).hasClass('incorrect')) {
        // sound_player_nav('correct')
        $('.correctwrongimg').fadeOut(0)
        $('.bone1').fadeOut(0)
        $('.cookie1').fadeOut(0)
        $('.ban2').fadeOut(0)
        $('.ban1').fadeIn(0)
        $('.appear').css('border', '2px solid red')
        $('.appear').css('background-color', 'rgb(246 147 147')
        play_correct_incorrect_sound_sybbas_prayas(0)
        $('.appear').append(
          "<img class='correctwrongimg' src='images/wrong.png'/>"
        )
        // $('.options').addClass('avoid-click')
      }
      if ($(this).hasClass('correct')) {
        if ($(this).hasClass('correct2')) {
          $('.correctwrongimg').fadeOut(0)
          $('.ban1').fadeOut(0)
          $('.bone1').fadeOut(0)
          $('.cookie2').fadeOut(0)
          $('.cookie1').fadeIn(0)
          $('.appear').css('border', '2px solid green')
          $('.appear').css('background-color', '#5df65d')
          //$(this).attr("src", incorrect).appendTo(".incorrect");
          play_correct_incorrect_sound_sybbas_prayas(1)
          $('.appear').append(
            "<img class='correctwrongimg' src='images/correct.png'/>"
          )
          nav_button_controls(0)
        }
        if ($(this).hasClass('correct1')) {
          $('.correctwrongimg').fadeOut(0)
          $('.ban1').fadeOut(0)
          $('.cookie1').fadeOut(0)
          $('.bone2').fadeOut(0)
          $('.bone1').fadeIn(0)
          $('.appear').css('border', '2px solid green')
          $('.appear').css('background-color', '#5df65d')
          //$(this).attr("src", incorrect).appendTo(".incorrect");
          play_correct_incorrect_sound_sybbas_prayas(1)
          $('.appear').append(
            "<img class='correctwrongimg' src='images/correct.png'/>"
          )
        }
      }
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
        ole.footerNotificationHandler.lessonEndSetNotification()
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

    for (var i = 0; i < content.length; i++) {
      slides(i)
      $($('.totalsequence')[i]).html(i)
      $($('.totalsequence')[i]).css({
        color: 'red',
        height: '4.3vmin',
        width: '4.3vmin',
        cursor: 'pointer',
        'text-align': 'center',
      })
    }
    function slides(i) {
      $($('.totalsequence')[i]).click(function () {
        countNext = i
        createjs.Sound.stop()
        templateCaller()
      })
    }
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
