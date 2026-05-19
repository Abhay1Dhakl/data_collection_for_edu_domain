var imgpath = $ref + '/images/section-2/'
var imgpathfruits = $ref + '/images/section-2/fruits/'
var imgpathvegetables = $ref + '/images/section-2/vegetables/'
var soundAsset = $ref + '/sounds/' + $lang + '/'
var soundAssetgirl = $ref + '/sounds/' + $lang + '/girl/'
var soundAssetboy = $ref + '/sounds/' + $lang + '/boy/'

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

var character
var character_gif
var character_png
var fruitslikearr = []
var fruitsnotlikearr = []
var vegetableslikearr = []
var vegetablesnotlikearr = []

var fruitslikeforrecording = []
var vegetableslikeforrecording = []
var fruitsnotlikeforrecording = []
var vegetablesnotlikeforrecording = []

var clickedarr = []

var timeout

var content = [
  // slide 1
  {
    uppertextblockadditionalclass: 'cover-text',
    uppertextblock: [
      {
        textclass: '',
        textdata: data.string.p2s1,
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: 'bg_1',
            imgid: 'bg_1',
          },
        ],
      },
    ],
    characterdiv: [
      {
        characterclass: 'chardiv',
        characterid: 'ch1',
        imgclass: 'boyimg boy ch1',
        imgid: 'ch1',
        charactergifid: 'ch1_gif',
        characterpngid: 'ch1_png',
      },
      {
        characterclass: 'chardiv',
        characterid: 'ch2',
        imgclass: 'boyimg girl ch2',
        charactergifid: 'ch2_gif',
        characterpngid: 'ch2_png',
        imgid: 'ch2',
      },
      {
        characterclass: 'chardiv',
        characterid: 'ch3',
        imgclass: 'boyimg boy ch3',
        charactergifid: 'ch3_gif',
        characterpngid: 'ch3_png',
        imgid: 'ch3',
      },
      {
        characterclass: 'chardiv',
        characterid: 'ch4',
        imgclass: 'boyimg girl ch4',
        charactergifid: 'ch4_gif',
        characterpngid: 'ch4_png',
        imgid: 'ch4',
      },
      {
        characterclass: 'chardiv',
        characterid: 'ch5',
        imgclass: 'boyimg girl ch5',
        charactergifid: 'ch5_gif',
        characterpngid: 'ch7_png',
        imgid: 'ch5',
      },
      {
        characterclass: 'chardiv',
        characterid: 'ch6',
        imgclass: 'boyimg girl ch6',
        charactergifid: 'ch6_gif',
        characterpngid: 'ch6_png',
        imgid: 'ch6',
      },
    ],
  },
  // Slide 2
  {
    uppertextblockadditionalclass: 'top-text',
    uppertextblock: [
      {
        textclass: '',
        textdata: data.string.p2s2txt1,
      },
    ],
    lowertextblockadditionalclass: '',
    lowertextblock: [
      {
        textclass: 'instruction',
        textdata: data.string.p2s2txt2,
      },
      {
        textclass: 'bold',
        textdata: data.string.fruits,
      },
    ],
    fruitsdiv: [
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'apple',
        imgclass: 'fruit apple',
        imgid: 'apple',
        fruitnameclass: '',
        textdata: data.string.Apple,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'banana',
        imgclass: 'fruit banana',
        imgid: 'banana',
        fruitnameclass: '',
        textdata: data.string.Banana,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'grapes',
        imgclass: 'fruit grapes',
        imgid: 'grapes',
        fruitnameclass: '',
        textdata: data.string.Grapes,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'guava',
        imgclass: 'fruit guava',
        imgid: 'guava',
        fruitnameclass: '',
        textdata: data.string.Guava,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'orange',
        imgclass: 'fruit orange',
        imgid: 'orange',
        fruitnameclass: '',
        textdata: data.string.Orange,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'mango',
        imgclass: 'fruit mango',
        imgid: 'mango',
        fruitnameclass: '',
        textdata: data.string.Mango,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'papaya',
        imgclass: 'fruit papaya',
        imgid: 'papaya',
        fruitnameclass: '',
        textdata: data.string.Papaya,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'peach',
        imgclass: 'fruit peach',
        imgid: 'peach',
        fruitnameclass: '',
        textdata: data.string.Peach,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'pear',
        imgclass: 'fruit pear',
        imgid: 'pear',
        fruitnameclass: '',
        textdata: data.string.Pear,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'pineapple',
        imgclass: 'fruit pineapple',
        imgid: 'pineapple',
        fruitnameclass: '',
        textdata: data.string.Pineapple,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'seabuckthorn',
        imgclass: 'fruit seabuckthorn',
        imgid: 'seabuckthorn',
        fruitnameclass: '',
        textdata: data.string.SeaBuckthorn,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'strawberry',
        imgclass: 'fruit strawberry',
        imgid: 'strawberry',
        fruitnameclass: '',
        textdata: data.string.Strawberry,
      },
    ],
  },
  // Slide 3
  {
    uppertextblockadditionalclass: 'top-text',
    uppertextblock: [
      {
        textclass: '',
        textdata: data.string.p2s2txt1,
      },
    ],
    lowertextblockadditionalclass: '',
    lowertextblock: [
      {
        textclass: 'instruction',
        textdata: data.string.p2s3txt2,
      },
      {
        textclass: 'bold',
        textdata: data.string.vegetables,
      },
    ],
    fruitsdiv: [
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'beans',
        imgclass: 'vegetable beans',
        imgid: 'beans',
        fruitnameclass: '',
        textdata: data.string.Beans,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'bittergourd',
        imgclass: 'vegetable bittergourd',
        imgid: 'bittergourd',
        fruitnameclass: '',
        textdata: data.string.Bittergourd,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'carrot',
        imgclass: 'vegetable carrot',
        imgid: 'carrot',
        fruitnameclass: '',
        textdata: data.string.Carrot,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'cauliflower',
        imgclass: 'vegetable cauliflower',
        imgid: 'cauliflower',
        fruitnameclass: '',
        textdata: data.string.Cauliflower,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'cucumber',
        imgclass: 'vegetable cucumber',
        imgid: 'cucumber',
        fruitnameclass: '',
        textdata: data.string.Cucumber,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'lettuce',
        imgclass: 'vegetable lettuce',
        imgid: 'lettuce',
        fruitnameclass: '',
        textdata: data.string.Lettuce,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'mushroom',
        imgclass: 'vegetable mushroom',
        imgid: 'mushroom',
        fruitnameclass: '',
        textdata: data.string.Mushroom,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'peas',
        imgclass: 'vegetable peas',
        imgid: 'peas',
        fruitnameclass: '',
        textdata: data.string.Peas,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'potato',
        imgclass: 'vegetable potato',
        imgid: 'potato',
        fruitnameclass: '',
        textdata: data.string.Potato,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'pumpkin',
        imgclass: 'vegetable pumpkin',
        imgid: 'pumpkin',
        fruitnameclass: '',
        textdata: data.string.Pumpkin,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'spinach',
        imgclass: 'vegetable spinach',
        imgid: 'spinach',
        fruitnameclass: '',
        textdata: data.string.Spinach,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'yam',
        imgclass: 'vegetable yam',
        imgid: 'yam',
        fruitnameclass: '',
        textdata: data.string.Yam,
      },
    ],
  },
  // Slide 4
  {
    uppertextblockadditionalclass: 'top-text',
    uppertextblock: [
      {
        textclass: '',
        textdata: data.string.p2s2txt1,
      },
    ],
    summarydiv: [
      {
        textclass: 'intro',
        textdata: data.string.p2s4txt1,
        summarydivclass: 'innerbox',
      },
      {
        textclass: 'intro',
        textdata: data.string.p2s4txt2,
        summarydivclass: 'innerbox1',
      },
    ],
  },
  // Slide 5
  {
    uppertextblockadditionalclass: 'top-text',
    uppertextblock: [
      {
        textclass: '',
        textdata: data.string.p2s5txt1,
      },
    ],
    lowertextblockadditionalclass: '',
    lowertextblock: [
      {
        textclass: 'instruction',
        textdata: data.string.p2s5txt2,
      },
      {
        textclass: 'bold',
        textdata: data.string.fruits,
      },
    ],
    fruitsdiv: [
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'apple',
        imgclass: 'fruit apple',
        imgid: 'apple',
        fruitnameclass: '',
        textdata: data.string.Apple,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'banana',
        imgclass: 'fruit banana',
        imgid: 'banana',
        fruitnameclass: '',
        textdata: data.string.Banana,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'grapes',
        imgclass: 'fruit grapes',
        imgid: 'grapes',
        fruitnameclass: '',
        textdata: data.string.Grapes,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'guava',
        imgclass: 'fruit guava',
        imgid: 'guava',
        fruitnameclass: '',
        textdata: data.string.Guava,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'orange',
        imgclass: 'fruit orange',
        imgid: 'orange',
        fruitnameclass: '',
        textdata: data.string.Orange,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'mango',
        imgclass: 'fruit mango',
        imgid: 'mango',
        fruitnameclass: '',
        textdata: data.string.Mango,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'papaya',
        imgclass: 'fruit papaya',
        imgid: 'papaya',
        fruitnameclass: '',
        textdata: data.string.Papaya,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'peach',
        imgclass: 'fruit peach',
        imgid: 'peach',
        fruitnameclass: '',
        textdata: data.string.Peach,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'pear',
        imgclass: 'fruit pear',
        imgid: 'pear',
        fruitnameclass: '',
        textdata: data.string.Pear,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'pineapple',
        imgclass: 'fruit pineapple',
        imgid: 'pineapple',
        fruitnameclass: '',
        textdata: data.string.Pineapple,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'seabuckthorn',
        imgclass: 'fruit seabuckthorn',
        imgid: 'seabuckthorn',
        fruitnameclass: '',
        textdata: data.string.SeaBuckthorn,
      },
      {
        fruitandvegclass: 'fruits',
        fruitandvegid: 'strawberry',
        imgclass: 'fruit strawberry',
        imgid: 'strawberry',
        fruitnameclass: '',
        textdata: data.string.Strawberry,
      },
    ],
  },
  // Slide 6
  {
    uppertextblockadditionalclass: 'top-text',
    uppertextblock: [
      {
        textclass: '',
        textdata: data.string.p2s5txt1,
      },
    ],
    lowertextblockadditionalclass: '',
    lowertextblock: [
      {
        textclass: 'instruction',
        textdata: data.string.p2s6txt2,
      },
      {
        textclass: 'bold',
        textdata: data.string.vegetables,
      },
    ],
    fruitsdiv: [
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'beans',
        imgclass: 'vegetable beans',
        imgid: 'beans',
        fruitnameclass: '',
        textdata: data.string.Beans,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'bittergourd',
        imgclass: 'vegetable bittergourd',
        imgid: 'bittergourd',
        fruitnameclass: '',
        textdata: data.string.Bittergourd,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'carrot',
        imgclass: 'vegetable carrot',
        imgid: 'carrot',
        fruitnameclass: '',
        textdata: data.string.Carrot,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'cauliflower',
        imgclass: 'vegetable cauliflower',
        imgid: 'cauliflower',
        fruitnameclass: '',
        textdata: data.string.Cauliflower,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'cucumber',
        imgclass: 'vegetable cucumber',
        imgid: 'cucumber',
        fruitnameclass: '',
        textdata: data.string.Cucumber,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'lettuce',
        imgclass: 'vegetable lettuce',
        imgid: 'lettuce',
        fruitnameclass: '',
        textdata: data.string.Lettuce,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'mushroom',
        imgclass: 'vegetable mushroom',
        imgid: 'mushroom',
        fruitnameclass: '',
        textdata: data.string.Mushroom,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'peas',
        imgclass: 'vegetable peas',
        imgid: 'peas',
        fruitnameclass: '',
        textdata: data.string.Peas,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'potato',
        imgclass: 'vegetable potato',
        imgid: 'potato',
        fruitnameclass: '',
        textdata: data.string.Potato,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'pumpkin',
        imgclass: 'vegetable pumpkin',
        imgid: 'pumpkin',
        fruitnameclass: '',
        textdata: data.string.Pumpkin,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'spinach',
        imgclass: 'vegetable spinach',
        imgid: 'spinach',
        fruitnameclass: '',
        textdata: data.string.Spinach,
      },
      {
        fruitandvegclass: 'vegetables',
        fruitandvegid: 'yam',
        imgclass: 'vegetable yam',
        imgid: 'yam',
        fruitnameclass: '',
        textdata: data.string.Yam,
      },
    ],
  },
  // Slide 7
  {
    uppertextblockadditionalclass: 'top-text',
    uppertextblock: [
      {
        textclass: '',
        textdata: data.string.p2s5txt1,
      },
    ],
    summarydiv: [
      {
        textclass: 'intro',
        textdata: data.string.p2s7txt1,
        bigboxadditionalclass: 'fruitsbigbox',
        summarydivclass: 'innerbox',
      },
      {
        textclass: 'intro',
        textdata: data.string.p2s7txt2,
        bigboxadditionalclass: 'vegetablesbigbox',
        summarydivclass: 'innerbox1',
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
      // ------------------------------------  IMAGES  ------------------------------------------//

      // characters
      {
        id: 'bg_1',
        src: imgpath + 'bg_1.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch1',
        src: imgpath + 'girl_1.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch1_gif',
        src: imgpath + 'Chhimi_talking_gif.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch1_png',
        src: imgpath + 'Chhimi_talking_png.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch2',
        src: imgpath + 'boy1.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch2_gif',
        src: imgpath + 'prakrit03_gif.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch2_png',
        src: imgpath + 'prakrit03_png.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch3',
        src: imgpath + 'girl_2.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch3_gif',
        src: imgpath + 'nirjala03_gif.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch3_png',
        src: imgpath + 'nirjala03_png.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch4',
        src: imgpath + 'boy_2.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch4_gif',
        src: imgpath + 'ishan_talking_gif.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch4_png',
        src: imgpath + 'ishan_png.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch5',
        src: imgpath + 'girl_3.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch5_gif',
        src: imgpath + 'sabina_talking_gif.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch5_png',
        src: imgpath + 'sabina_png.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch6',
        src: imgpath + 'girl_4.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch6_gif',
        src: imgpath + 'radha_talking02.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ch6_png',
        src: imgpath + 'radha_talking02.png',
        type: createjs.AbstractLoader.IMAGE,
      },

      {
        id: 'wheelchair_png',
        src: imgpath + 'girl-talking-1.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'wheelchair_gif',
        src: imgpath + 'girl-talking-1.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'boy_png',
        src: imgpath + 'boy-talking-2.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'sp-dialogue1',
        src: imgpath + 'textbox.png',
        type: createjs.AbstractLoader.IMAGE,
      },

      // fruits
      {
        id: 'apple',
        src: imgpathfruits + 'apple.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'banana',
        src: imgpathfruits + 'banana.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'grapes',
        src: imgpathfruits + 'Grapes.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'guava',
        src: imgpathfruits + 'guava.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'mango',
        src: imgpathfruits + 'mango.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'orange',
        src: imgpathfruits + 'orange.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'papaya',
        src: imgpathfruits + 'papaya.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'peach',
        src: imgpathfruits + 'peach.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'pear',
        src: imgpathfruits + 'pear.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'pineapple',
        src: imgpathfruits + 'pineapple.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'seabuckthorn',
        src: imgpathfruits + 'sea-buckthron.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'strawberry',
        src: imgpathfruits + 'strawberry.png',
        type: createjs.AbstractLoader.IMAGE,
      },

      // vegetables
      {
        id: 'beans',
        src: imgpathvegetables + 'Beans.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'bittergourd',
        src: imgpathvegetables + 'bittergourd.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'carrot',
        src: imgpathvegetables + 'carrot.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'cauliflower',
        src: imgpathvegetables + 'cauliflower.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'cucumber',
        src: imgpathvegetables + 'cucumber.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'lettuce',
        src: imgpathvegetables + 'lettuce.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'mushroom',
        src: imgpathvegetables + 'mushroom.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'peas',
        src: imgpathvegetables + 'peas.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'potato',
        src: imgpathvegetables + 'potato.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'pumpkin',
        src: imgpathvegetables + 'pumkin.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'spinach',
        src: imgpathvegetables + 'spinach.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'yam',
        src: imgpathvegetables + 'yam.png',
        type: createjs.AbstractLoader.IMAGE,
      },

      {
        id: 'speaker',
        src: imgpath + 'speaker.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'like',
        src: imgpath + 'like.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'notlike',
        src: imgpath + 'notlike.png',
        type: createjs.AbstractLoader.IMAGE,
      },

      {
        id: 'textbox',
        src: imgpath + 'textbox.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'recorder',
        src: imgpath + 'recorder.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'play',
        src: imgpath + 'play.png',
        type: createjs.AbstractLoader.IMAGE,
      },

      // ------------------------------------  SOUNDS  ------------------------------------------//

      { id: 's2_p0', src: soundAsset + 's2_p0.mp3' },
      { id: 'p2s1', src: soundAsset + 'p2s1.mp3' },
      { id: 'p2s2', src: soundAsset + 'p2s2txt2.mp3' },
      { id: 'p2s3', src: soundAsset + 'p2s3txt2.mp3' },
      { id: 'p2s5', src: soundAsset + 'p2s5txt2.mp3' },
      { id: 'p2s6', src: soundAsset + 'p2s6txt2.mp3' },
      { id: 'p2s8', src: soundAsset + 'practice_speaking.mp3' },
      { id: 'p2s9', src: soundAsset + 'p2s9txt.mp3' },
      { id: 'p2s13', src: soundAsset + 'p2s13.mp3' },

      // -----------------   Boy   -----------------//
      // fruits
      { id: 'Apple_boy', src: soundAssetboy + 'Apple.mp3' },
      { id: 'Banana_boy', src: soundAssetboy + 'Banana.mp3' },
      { id: 'Mango_boy', src: soundAssetboy + 'Mango.mp3' },
      { id: 'Peach_boy', src: soundAssetboy + 'Peach.mp3' },
      { id: 'Sea-Buckthorn_boy', src: soundAssetboy + 'SeaBuckthorn.mp3' },
      { id: 'Seabuckthorn_boy', src: soundAssetboy + 'SeaBuckthorn.mp3' },
      { id: 'SeaBuckthorn_boy', src: soundAssetboy + 'SeaBuckthorn.mp3' },
      { id: 'Sea buckthorn_boy', src: soundAssetboy + 'SeaBuckthorn.mp3' },
      { id: 'Guava_boy', src: soundAssetboy + 'Guava.mp3' },
      { id: 'Orange_boy', src: soundAssetboy + 'Orange.mp3' },
      { id: 'Pear_boy', src: soundAssetboy + 'Pear.mp3' },
      { id: 'Grapes_boy', src: soundAssetboy + 'Grapes.mp3' },
      { id: 'Papaya_boy', src: soundAssetboy + 'Papaya.mp3' },
      { id: 'Strawberry_boy', src: soundAssetboy + 'Strawberry.mp3' },
      { id: 'Pineapple_boy', src: soundAssetboy + 'Pineapple.mp3' },

      // vegetables
      { id: 'Potato_boy', src: soundAssetboy + 'Potato.mp3' },
      { id: 'Spinach_boy', src: soundAssetboy + 'Spinach.mp3' },
      { id: 'Peas_boy', src: soundAssetboy + 'Peas.mp3' },
      { id: 'Beans_boy', src: soundAssetboy + 'Beans.mp3' },
      { id: 'Pumpkin_boy', src: soundAssetboy + 'Pumpkin.mp3' },
      { id: 'Lettuce_boy', src: soundAssetboy + 'Lettuce.mp3' },
      { id: 'Cauliflower_boy', src: soundAssetboy + 'Cauliflower.mp3' },
      { id: 'Mushroom_boy', src: soundAssetboy + 'Mushroom.mp3' },
      { id: 'Carrot_boy', src: soundAssetboy + 'Carrot.mp3' },
      { id: 'Cucumber_boy', src: soundAssetboy + 'Cucumber.mp3' },
      { id: 'Bitter Gourd_boy', src: soundAssetboy + 'Bittergourd.mp3' },
      { id: 'Bittergourd_boy', src: soundAssetboy + 'Bittergourd.mp3' },
      { id: 'Yam_boy', src: soundAssetboy + 'Yam.mp3' },

      { id: 'fruits_like_boy', src: soundAssetboy + 'p2s4txt1.mp3' },
      { id: 'vegetables_like_boy', src: soundAssetboy + 'p2s4txt2.mp3' },

      { id: 'fruits_dontlike_boy', src: soundAssetboy + 'p2s7txt1.mp3' },
      { id: 'vegetables_dontlike_boy', src: soundAssetboy + 'p2s7txt2.mp3' },

      // Fruits like and dislike
      { id: 'apple_like_boy', src: soundAssetboy + 'apple_like.mp3' },
      { id: 'apple_dontlike_boy', src: soundAssetboy + 'apple_dontlike.mp3' },

      { id: 'banana_like_boy', src: soundAssetboy + 'banana_like.mp3' },
      { id: 'banana_dontlike_boy', src: soundAssetboy + 'banana_dontlike.mp3' },

      { id: 'mango_like_boy', src: soundAssetboy + 'mango_like.mp3' },
      { id: 'mango_dontlike_boy', src: soundAssetboy + 'mango_dontlike.mp3' },

      {
        id: 'seabuckthorn_like_boy',
        src: soundAssetboy + 'seabuckthorn_like.mp3',
      },
      {
        id: 'seabuckthorn_dontlike_boy',
        src: soundAssetboy + 'seabuckthorn_dontlike.mp3',
      },

      { id: 'peach_like_boy', src: soundAssetboy + 'peach_like.mp3' },
      { id: 'peach_dontlike_boy', src: soundAssetboy + 'peach_dontlike.mp3' },

      { id: 'guava_like_boy', src: soundAssetboy + 'guava_like.mp3' },
      { id: 'guava_dontlike_boy', src: soundAssetboy + 'guava_dontlike.mp3' },

      { id: 'orange_like_boy', src: soundAssetboy + 'orange_like.mp3' },
      { id: 'orange_dontlike_boy', src: soundAssetboy + 'orange_dontlike.mp3' },

      { id: 'pear_like_boy', src: soundAssetboy + 'pear_like.mp3' },
      { id: 'pear_dontlike_boy', src: soundAssetboy + 'pear_dontlike.mp3' },

      { id: 'grapes_like_boy', src: soundAssetboy + 'grapes_like.mp3' },
      { id: 'grapes_dontlike_boy', src: soundAssetboy + 'grapes_dontlike.mp3' },

      { id: 'papaya_like_boy', src: soundAssetboy + 'papaya_like.mp3' },
      { id: 'papaya_dontlike_boy', src: soundAssetboy + 'papaya_dontlike.mp3' },

      { id: 'strawberry_like_boy', src: soundAssetboy + 'strawberry_like.mp3' },
      {
        id: 'strawberry_dontlike_boy',
        src: soundAssetboy + 'strawberry_dontlike.mp3',
      },

      { id: 'pineapple_like_boy', src: soundAssetboy + 'pineapple_like.mp3' },
      {
        id: 'pineapple_dontlike_boy',
        src: soundAssetboy + 'pineapple_dontlike.mp3',
      },

      // Vegetables like and dislike
      { id: 'potato_like_boy', src: soundAssetboy + 'potato_like.mp3' },
      { id: 'potato_dontlike_boy', src: soundAssetboy + 'potato_dontlike.mp3' },

      { id: 'spinach_like_boy', src: soundAssetboy + 'spinach_like.mp3' },
      {
        id: 'spinach_dontlike_boy',
        src: soundAssetboy + 'spinach_dontlike.mp3',
      },

      { id: 'peas_like_boy', src: soundAssetboy + 'peas_like.mp3' },
      { id: 'peas_dontlike_boy', src: soundAssetboy + 'peas_dontlike.mp3' },

      { id: 'beans_like_boy', src: soundAssetboy + 'beans_like.mp3' },
      { id: 'beans_dontlike_boy', src: soundAssetboy + 'beans_dontlike.mp3' },

      { id: 'pumpkin_like_boy', src: soundAssetboy + 'pumpkin_like.mp3' },
      {
        id: 'pumpkin_dontlike_boy',
        src: soundAssetboy + 'pumpkin_dontlike.mp3',
      },

      { id: 'lettuce_like_boy', src: soundAssetboy + 'lettuce_like.mp3' },
      {
        id: 'lettuce_dontlike_boy',
        src: soundAssetboy + 'lettuce_dontlike.mp3',
      },

      {
        id: 'cauliflower_like_boy',
        src: soundAssetboy + 'cauliflower_like.mp3',
      },
      {
        id: 'cauliflower_dontlike_boy',
        src: soundAssetboy + 'cauliflower_dontlike.mp3',
      },

      { id: 'mushroom_like_boy', src: soundAssetboy + 'mushroom_like.mp3' },
      {
        id: 'mushroom_dontlike_boy',
        src: soundAssetboy + 'mushroom_dontlike.mp3',
      },

      { id: 'carrot_like_boy', src: soundAssetboy + 'carrot_like.mp3' },
      { id: 'carrot_dontlike_boy', src: soundAssetboy + 'carrot_dontlike.mp3' },

      { id: 'cucumber_like_boy', src: soundAssetboy + 'cucumber_like.mp3' },
      {
        id: 'cucumber_dontlike_boy',
        src: soundAssetboy + 'cucumber_dontlike.mp3',
      },

      {
        id: 'bittergourd_like_boy',
        src: soundAssetboy + 'bittergourd_like.mp3',
      },
      {
        id: 'bittergourd_dontlike_boy',
        src: soundAssetboy + 'bittergourd_dontlike.mp3',
      },

      { id: 'yam_like_boy', src: soundAssetboy + 'yam_like.mp3' },
      { id: 'yam_dontlike_boy', src: soundAssetboy + 'yam_dontlike.mp3' },

      // -----------------   Boy   -----------------//

      // -----------------   Girl   -----------------//
      // fruits
      { id: 'Apple_girl', src: soundAssetgirl + 'Apple.mp3' },
      { id: 'Banana_girl', src: soundAssetgirl + 'Banana.mp3' },
      { id: 'Mango_girl', src: soundAssetgirl + 'Mango.mp3' },
      { id: 'Peach_girl', src: soundAssetgirl + 'Peach.mp3' },
      { id: 'Sea-Buckthorn_girl', src: soundAssetgirl + 'SeaBuckthorn.mp3' },
      { id: 'SeaBuckthorn_girl', src: soundAssetgirl + 'SeaBuckthorn.mp3' },
      { id: 'Seabuckthorn_girl', src: soundAssetgirl + 'SeaBuckthorn.mp3' },
      { id: 'Sea buckthorn_girl', src: soundAssetgirl + 'SeaBuckthorn.mp3' },
      { id: 'Guava_girl', src: soundAssetgirl + 'Guava.mp3' },
      { id: 'Orange_girl', src: soundAssetgirl + 'Orange.mp3' },
      { id: 'Pear_girl', src: soundAssetgirl + 'Pear.mp3' },
      { id: 'Grapes_girl', src: soundAssetgirl + 'Grapes.mp3' },
      { id: 'Papaya_girl', src: soundAssetgirl + 'Papaya.mp3' },
      { id: 'Strawberry_girl', src: soundAssetgirl + 'Strawberry.mp3' },
      { id: 'Pineapple_girl', src: soundAssetgirl + 'Pineapple.mp3' },

      // vegetables
      { id: 'Potato_girl', src: soundAssetgirl + 'Potato.mp3' },
      { id: 'Spinach_girl', src: soundAssetgirl + 'Spinach.mp3' },
      { id: 'Peas_girl', src: soundAssetgirl + 'Peas.mp3' },
      { id: 'Beans_girl', src: soundAssetgirl + 'Beans.mp3' },
      { id: 'Pumpkin_girl', src: soundAssetgirl + 'Pumpkin.mp3' },
      { id: 'Lettuce_girl', src: soundAssetgirl + 'Lettuce.mp3' },
      { id: 'Cauliflower_girl', src: soundAssetgirl + 'Cauliflower.mp3' },
      { id: 'Mushroom_girl', src: soundAssetgirl + 'Mushroom.mp3' },
      { id: 'Carrot_girl', src: soundAssetgirl + 'Carrot.mp3' },
      { id: 'Cucumber_girl', src: soundAssetgirl + 'Cucumber.mp3' },
      { id: 'Bitter Gourd_girl', src: soundAssetgirl + 'Bittergourd.mp3' },
      { id: 'Bittergourd_girl', src: soundAssetgirl + 'Bittergourd.mp3' },
      { id: 'Yam_girl', src: soundAssetgirl + 'Yam.mp3' },

      { id: 'fruits_like_girl', src: soundAssetgirl + 'p2s4txt1.mp3' },
      { id: 'vegetables_like_girl', src: soundAssetgirl + 'p2s4txt2.mp3' },

      { id: 'fruits_dontlike_girl', src: soundAssetgirl + 'p2s7txt1.mp3' },
      { id: 'vegetables_dontlike_girl', src: soundAssetgirl + 'p2s7txt2.mp3' },

      // Fruits like and dislike
      { id: 'apple_like_girl', src: soundAssetgirl + 'apple_like.mp3' },
      { id: 'apple_dontlike_girl', src: soundAssetgirl + 'apple_dontlike.mp3' },

      { id: 'banana_like_girl', src: soundAssetgirl + 'banana_like.mp3' },
      {
        id: 'banana_dontlike_girl',
        src: soundAssetgirl + 'banana_dontlike.mp3',
      },

      { id: 'mango_like_girl', src: soundAssetgirl + 'mango_like.mp3' },
      { id: 'mango_dontlike_girl', src: soundAssetgirl + 'mango_dontlike.mp3' },

      {
        id: 'seabuckthorn_like_girl',
        src: soundAssetgirl + 'seabuckthorn_like.mp3',
      },
      {
        id: 'seabuckthorn_dontlike_girl',
        src: soundAssetgirl + 'seabuckthorn_dontlike.mp3',
      },

      { id: 'peach_like_girl', src: soundAssetgirl + 'peach_like.mp3' },
      { id: 'peach_dontlike_girl', src: soundAssetgirl + 'peach_dontlike.mp3' },

      { id: 'guava_like_girl', src: soundAssetgirl + 'guava_like.mp3' },
      { id: 'guava_dontlike_girl', src: soundAssetgirl + 'guava_dontlike.mp3' },

      { id: 'orange_like_girl', src: soundAssetgirl + 'orange_like.mp3' },
      {
        id: 'orange_dontlike_girl',
        src: soundAssetgirl + 'orange_dontlike.mp3',
      },

      { id: 'pear_like_girl', src: soundAssetgirl + 'pear_like.mp3' },
      { id: 'pear_dontlike_girl', src: soundAssetgirl + 'pear_dontlike.mp3' },

      { id: 'grapes_like_girl', src: soundAssetgirl + 'grapes_like.mp3' },
      {
        id: 'grapes_dontlike_girl',
        src: soundAssetgirl + 'grapes_dontlike.mp3',
      },

      { id: 'papaya_like_girl', src: soundAssetgirl + 'papaya_like.mp3' },
      {
        id: 'papaya_dontlike_girl',
        src: soundAssetgirl + 'papaya_dontlike.mp3',
      },

      {
        id: 'strawberry_like_girl',
        src: soundAssetgirl + 'strawberry_like.mp3',
      },
      {
        id: 'strawberry_dontlike_girl',
        src: soundAssetgirl + 'strawberry_dontlike.mp3',
      },

      { id: 'pineapple_like_girl', src: soundAssetgirl + 'pineapple_like.mp3' },
      {
        id: 'pineapple_dontlike_girl',
        src: soundAssetgirl + 'pineapple_dontlike.mp3',
      },

      // Vegetables like and dislike
      { id: 'potato_like_girl', src: soundAssetgirl + 'potato_like.mp3' },
      {
        id: 'potato_dontlike_girl',
        src: soundAssetgirl + 'potato_dontlike.mp3',
      },

      { id: 'spinach_like_girl', src: soundAssetgirl + 'spinach_like.mp3' },
      {
        id: 'spinach_dontlike_girl',
        src: soundAssetgirl + 'spinach_dontlike.mp3',
      },

      { id: 'peas_like_girl', src: soundAssetgirl + 'peas_like.mp3' },
      { id: 'peas_dontlike_girl', src: soundAssetgirl + 'peas_dontlike.mp3' },

      { id: 'beans_like_girl', src: soundAssetgirl + 'beans_like.mp3' },
      { id: 'beans_dontlike_girl', src: soundAssetgirl + 'beans_dontlike.mp3' },

      { id: 'pumpkin_like_girl', src: soundAssetgirl + 'pumpkin_like.mp3' },
      {
        id: 'pumpkin_dontlike_girl',
        src: soundAssetgirl + 'pumpkin_dontlike.mp3',
      },

      { id: 'lettuce_like_girl', src: soundAssetgirl + 'lettuce_like.mp3' },
      {
        id: 'lettuce_dontlike_girl',
        src: soundAssetgirl + 'lettuce_dontlike.mp3',
      },

      {
        id: 'cauliflower_like_girl',
        src: soundAssetgirl + 'cauliflower_like.mp3',
      },
      {
        id: 'cauliflower_dontlike_girl',
        src: soundAssetgirl + 'cauliflower_dontlike.mp3',
      },

      { id: 'mushroom_like_girl', src: soundAssetgirl + 'mushroom_like.mp3' },
      {
        id: 'mushroom_dontlike_girl',
        src: soundAssetgirl + 'mushroom_dontlike.mp3',
      },

      { id: 'carrot_like_girl', src: soundAssetgirl + 'carrot_like.mp3' },
      {
        id: 'carrot_dontlike_girl',
        src: soundAssetgirl + 'carrot_dontlike.mp3',
      },

      { id: 'cucumber_like_girl', src: soundAssetgirl + 'cucumber_like.mp3' },
      {
        id: 'cucumber_dontlike_girl',
        src: soundAssetgirl + 'cucumber_dontlike.mp3',
      },

      {
        id: 'bittergourd_like_girl',
        src: soundAssetgirl + 'bittergourd_like.mp3',
      },
      {
        id: 'bittergourd_dontlike_girl',
        src: soundAssetgirl + 'bittergourd_dontlike.mp3',
      },

      { id: 'yam_like_girl', src: soundAssetgirl + 'yam_like.mp3' },
      { id: 'yam_dontlike_girl', src: soundAssetgirl + 'yam_dontlike.mp3' },
      // -----------------   Girl   -----------------//
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
    put_recordsdiv_image(content, countNext)
    put_recordsdiv_image2(content, countNext)
    put_recordsummarydiv_image(content, countNext)
    put_speechbox_image(content, countNext)
    put_speechbox_image2(content, countNext)
    put_fruitsdiv_image(content, countNext)
    put_characterdiv_image(content, countNext)

    // Adding speaker icon to fruits, vegetables and speechbox class
    $('.fruits, .vegetables').append("<img class='speaker' src=''>")
    $('.speechbox').append("<img class='speakersmall scale' src=''>")
    $('.speaker, .speakersmall').attr('src', preload.getResult('speaker').src)

    // Default character
    $('.charac').attr('src', preload.getResult('ch1').src)

    // Declaring variable
    var ch_sound

    // Setting boy or girl gender for audio purpose accordingly
    if (countNext > 0) {
      if (character == 'ch2' || character == 'ch4') {
        ch_sound = 'boy'
      } else {
        ch_sound = 'girl'
      }
    }

    // function to show text and play audio on hover
    function hoverFn() {
      // Show text on hover and play audio
      $('.fruits, .vegetables').hover(
        function () {
          // $(this).children(".name").animate({"margin-top": "0%"});
          var audioid = $(this).children('.name').children('p').text()
          audioid = audioid.charAt(0).toUpperCase() + audioid.slice(1)
          sound_player(audioid + '_' + ch_sound)
        },
        function () {
          // $(this).children(".name").animate({"margin-top": "15%"});
        }
      )
    }

    // Animation function for page 3 and 6
    function animation() {
      // For description text audio
      if (countNext == 3) {
        var fruithead = 'fruits_like'
        var veghead = 'vegetables_like'
      } else {
        var fruithead = 'fruits_dontlike'
        var veghead = 'vegetables_dontlike'
      }

      // function to show text and corresponding image in page 4 and 7
      function showtextandimage(firstno, secondno, callback) {
        $('.names:eq(' + firstno + ') p:eq(' + secondno + ')').animate(
          { opacity: '1' },
          1500
        )
        $(
          '.smallfruitimages:eq(' + firstno + ') img:eq(' + secondno + ')'
        ).animate({ opacity: '1' }, 1500)
        $(
          '.smallfruitimages:eq(' + firstno + ') .likeemo' + secondno + ''
        ).animate({ opacity: '1' }, 1500)

        //As the auioName begins with capitalcase and text in lowercase so start the audioId with uppercase
        var fruitName = $(
          '.names:eq(' + firstno + ') p:eq(' + secondno + ')'
        ).text()
        fruitName = fruitName.charAt(0).toUpperCase() + fruitName.slice(1)
        // sound_player_with_callback(fruitName + '_' + ch_sound, function () {
        //   $('.charac').attr('src', preload.getResult(character_png).src);
        //   callback()
        // })
        playgif(fruitName + '_' + ch_sound, character_png, character_gif, 'charac', callback)
      }

      // Vegetable section animation
      function vegsection() {
        $('.bigbox:eq(1)').animate({ opacity: '1' })
        sound_player_with_callback(veghead + '_' + ch_sound, function () {
          current_sound.on('complete', function () {
            $('.charac').attr('src', preload.getResult(character_png).src)
          })
          // First vegetable
          showtextandimage(1, 0, function () {
            if ($('.names:eq(1) .fruitname').length > 1) {
              // Second vegetable
              showtextandimage(1, 1, function () {
                if ($('.names:eq(1) .fruitname').length > 2) {
                  // Third vegetable
                  showtextandimage(1, 2, function () {
                    nav_button_controls()
                  })
                } else {
                  nav_button_controls()
                }
              })
            } else {
              nav_button_controls()
            }
          })
        })
      }

      // Animation starts from here
      sound_player_with_callback(fruithead + '_' + ch_sound, function () {
        current_sound.on('complete', function () {
          $('.charac').attr('src', preload.getResult(character_png).src)
        })
        // First fruit showing
        showtextandimage(0, 0, function () {
          if ($('.names:eq(0) .fruitname').length > 1) {
            // Second fruits showing
            showtextandimage(0, 1, function () {
              if ($('.names:eq(0) .fruitname').length > 2) {
                // Third fruit showing
                showtextandimage(0, 2, function () {
                  vegsection()
                })
              } else {
                vegsection()
              }
            })
          } else {
            vegsection()
          }
        })
      })
    }

    // Dynamic contents in page 4 and page 7
    if (countNext == 3 || countNext == 6) {
      // Character assigned to specified class
      $('.charac').attr('src', preload.getResult(character_gif).src)
      current_sound.on('complete', function () {
        $('.charac').attr('src', preload.getResult(character_png).src)
      })

      if (countNext == 3) {
        // Shuffling array
        fruitslikearr = shuffle(fruitslikearr)
        var arr1 = fruitslikearr

        vegetableslikearr = shuffle(vegetableslikearr)
        var arr2 = vegetableslikearr
      } else {
        // Shuffling array
        fruitsnotlikearr = shuffle(fruitsnotlikearr)
        var arr1 = fruitsnotlikearr

        vegetablesnotlikearr = shuffle(vegetablesnotlikearr)
        var arr2 = vegetablesnotlikearr
      }

      // Fruit name and images assigning
      for (var i = 0; i < arr1.length; i++) {
        if (i < 3) {
          $('.bigbox:eq(0) .names').append(
            "<p class='fruitname' id='fruit1name'>" + arr1[i] + '</p>'
          )
          $('.bigbox:eq(0) .smallfruitimages').append(
            "<img class='fruit" + i + "' src='{{imgsrc}}'>"
          )
          $('.fruit' + i).attr('src', preload.getResult(arr1[i]).src)
        }
      }
      // Vegetables name and images assigning
      for (var i = 0; i < arr2.length; i++) {
        if (i < 3) {
          $('.bigbox:eq(1) .names').append(
            "<p class='fruitname' id='vegetable1name'>" + arr2[i] + '</p>'
          )
          $('.bigbox:eq(1) .smallfruitimages').append(
            "<img class='vegetable" + i + "' src='{{imgsrc}}'>"
          )
          $('.vegetable' + i).attr('src', preload.getResult(arr2[i]).src)
        }
      }
    }

    // function for recording section for record and play feature
    function sound_rec_and_play() {
      $('.maindivclass').append("<p class='recStat'></p>")
      playPauseStartBehaviour('.recorder')
      $('.recorder').click(function () {
        $('.instruction-record').text(data.string.repeat)
        $('.recStat').css('width', '0%')
        playPauseStopBehaviour('.recorder')
        playPauseStopBehaviour('.play')
        startRecording()
        $('.recStat').animate(
          {
            width: '100%',
          },
          10000,
          function () {
            stopRecording()
            playPauseStartBehaviour('.play')
            $('.instruction-record').text(data.string.listen)
          }
        )
      })

      //Handle playing
      $('.play').click(function () {
        $('.play').removeClass('scale')
        var audioel = document.getElementById('recorded-audio')
        audioel.play()
        playPauseStopBehaviour('.recorder')
        playPauseStopBehaviour('.play')
        $('.recStat').css('width', '0%')
        $('.recStat').animate(
          {
            width: '100%',
          },
          10000,
          function () {
            playPauseStartBehaviour('.play')
            playPauseStartBehaviour('.recorder')
            nav_button_controls()
          }
        )
      })

      function playPauseStartBehaviour(btnClass) {
        $(btnClass).addClass('scale')
        $(btnClass).css({
          opacity: '1',
          cursor: 'pointer',
          'pointer-events': 'auto',
        })
      }
      function playPauseStopBehaviour(btnClass) {
        $(btnClass).removeClass('scale')
        $(btnClass).css({
          opacity: '0.4',
          cursor: 'auto',
          'pointer-events': 'none',
        })
      }
    }

    // Sound record section main function
    function soundRecordSection(shuffledarray, likeornot) {
      // // Shuffling array
      // shuffledarray = shuffle(arrayforshuffle);
      $('.text-big').text(data.string[shuffledarray[0] + likeornot])
      $('.record-fruit').attr('src', preload.getResult(shuffledarray[0]).src)

      if (countNext == 9) {
        sound_player_with_callback('p2s9', function () {
          sound_player_with_callback(
            shuffledarray[0] + likeornot + '_' + ch_sound,
            function () {
              $('.speakersmall').click(function () {
                sound_player(shuffledarray[0] + likeornot + '_' + ch_sound)
                current_sound.on('complete', function () {
                  $('.charac').attr('src', preload.getResult(character_png).src);
                })
              })
              sound_rec_and_play();
            }
          )
        })
      } else {
        sound_player_with_callback(
          shuffledarray[0] + likeornot + '_' + ch_sound,
          function () {
            $('.speakersmall').click(function () {
              sound_player(shuffledarray[0] + likeornot + '_' + ch_sound)
              current_sound.on('complete', function () {
                $('.charac').attr('src', preload.getResult(character_png).src)
              })
            })
            sound_rec_and_play()
          }
        )
      }
    }
    switch (countNext) {
      case 0:
        sound_player_with_callback('p2s1', function () {
          // selecting character and storing it in character variable
          $('.chardiv').click(function () {
            var charid = $(this).attr('id')
            // var char_gifId = $(this).attr('data-attr')
            // var char_pngId = $(this).attr('data-attr')
            let char_gifId = charid + '_gif'
            let char_pngId = charid + '_png'

            character = charid
            character_gif = char_gifId
            character_png = char_pngId

            $.each($('.chardiv'), (index, element) => {
              //called shortcircuit in es6
              $(element).hasClass('selected') && $(element).removeClass('selected')
            })
            $(this).toggleClass('selected')
            //$('.chardiv').off('click')
            nav_button_controls()
          })
        })
        break
      case 1:
        sound_player_with_callback('p2s2', function () {
          $('.fruits').click(function () {
            var fruitid = $(this).attr('id')
            fruitslikearr.push(fruitid)
            $(this).toggleClass('selected')
            $(this).append(
              "<img class='correctwrongimg' src='images/smily.png'/>"
            )
            $(this).off('click')
            nav_button_controls()
          })
          hoverFn()
        })
        break
      case 2:
        sound_player_with_callback('p2s3', function () {
          $('.vegetables').click(function () {
            var fruitid = $(this).attr('id')
            vegetableslikearr.push(fruitid)
            $(this).addClass('selected')
            $(this).append(
              "<img class='correctwrongimg' src='images/smily.png'/>"
            )
            $(this).off('click')
            nav_button_controls()
          })
          hoverFn()
        })
        break
      case 3:
        // $(".charac").attr("src", preload.getResult("char1").src);
        // Putting emoji sign on fruits section
        for (var i = 0; i < $('.names:eq(0) .fruitname').length; i++) {
          var width = $('.smallfruitimages:eq(0) .fruit' + i).width()
          var height = $('.smallfruitimages:eq(0) .fruit' + i).height()
          var childPos = $('.smallfruitimages:eq(0) .fruit' + i).offset()
          var parentPos = $('.smallfruitimages:eq(0) .fruit' + i)
            .parent()
            .offset()
          var childOffset = {
            top: childPos.top - parentPos.top,
            left: childPos.left - parentPos.left,
          }

          $('.smallfruitimages:eq(0)').append(
            "<img class='likeemo" + i + "' src='{{imgsrc}}'>"
          )
          $('.smallfruitimages:eq(0) .likeemo' + i).attr(
            'src',
            preload.getResult('like').src
          )
          $('.smallfruitimages:eq(0) .likeemo' + i).css({
            position: 'absolute',
            width: '14%',
            top: childOffset.top + height - 18,
            left: childOffset.left + width - 18,
          })
        }

        // Putting emoji sign on vegetables section
        for (var i = 0; i < $('.names:eq(1) .fruitname').length; i++) {
          var width = $('.smallfruitimages:eq(1) .vegetable' + i).width()
          var height = $('.smallfruitimages:eq(1) .vegetable' + i).height()
          var childPos = $('.smallfruitimages:eq(1) .vegetable' + i).offset()
          var parentPos = $('.smallfruitimages:eq(1) .vegetable' + i)
            .parent()
            .offset()
          var childOffset = {
            top: childPos.top - parentPos.top,
            left: childPos.left - parentPos.left,
          }

          $('.smallfruitimages:eq(1)').append(
            "<img class='likeemo" + i + "' src='{{imgsrc}}'>"
          )
          $('.smallfruitimages:eq(1) .likeemo' + i).attr(
            'src',
            preload.getResult('like').src
          )
          $('.smallfruitimages:eq(1) .likeemo' + i).css({
            position: 'absolute',
            width: '14%',
            top: childOffset.top + height - 18,
            left: childOffset.left + width - 18,
          })
        }

        // hide all elements
        $('.fruitname, .smallfruitimages img, .bigbox:eq(1)').css({
          opacity: '0',
        })
        animation()
        break
      case 4:
        // setting click event off for those already clicked in previous slides
        for (var i = 0; i < $('.fruits').length; i++) {
          var id = $('.fruits:eq(' + i + ')').attr('id')
          if (fruitslikearr.includes(id)) {
            $('#' + id).addClass('not-selectable')
            $('#' + id).off('click')
            $('#' + id).toggleClass('selected')
          }
        }

        // Selecting not-liked fruits
        sound_player_with_callback('p2s5', function () {
          $('.fruits').click(function () {
            // unable to select those fruits which are already selected before
            if ($(this).hasClass('not-selectable')) {
              $(this).off('click')
              return
            } else {
              var fruitid = $(this).attr('id')
              fruitsnotlikearr.push(fruitid)
              $(this).addClass('redselected')
              $(this).off('click')
              nav_button_controls()
            }
          })
          hoverFn()
        })
        break
      case 5:
        // setting click event off for those already clicked in previous slides
        for (var i = 0; i < $('.vegetables').length; i++) {
          var id = $('.vegetables:eq(' + i + ')').attr('id')
          if (vegetableslikearr.includes(id)) {
            $('#' + id).addClass('not-selectable')
            $('#' + id).off('click')
            $('#' + id).addClass('selected')
          }
        }

        // Selecting not-liked vegetables
        sound_player_with_callback('p2s6', function () {
          $('.vegetables').click(function () {
            // unable to select those fruits which are already selected before
            if ($(this).hasClass('not-selectable')) {
              $(this).off('click')
              return
            } else {
              var fruitid = $(this).attr('id')
              vegetablesnotlikearr.push(fruitid)
              $(this).addClass('redselected')
              $(this).off('click')
              nav_button_controls()
            }
          })
          hoverFn()
        })
        break
      case 6:
        // Putting emoji sign on fruits section
        for (var i = 0; i < $('.names:eq(0) .fruitname').length; i++) {
          var width = $('.fruit' + i).width()
          var height = $('.fruit' + i).height()
          var childPos = $('.fruit' + i).offset()
          var parentPos = $('.fruit' + i)
            .parent()
            .offset()
          var childOffset = {
            top: childPos.top - parentPos.top,
            left: childPos.left - parentPos.left,
          }

          $('.smallfruitimages:eq(0)').append(
            "<img class='likeemo" + i + "' src='{{imgsrc}}'>"
          )
          $('.smallfruitimages:eq(0) .likeemo' + i).attr(
            'src',
            preload.getResult('notlike').src
          )
          $('.smallfruitimages:eq(0) .likeemo' + i).css({
            position: 'absolute',
            width: '14%',
            top: childOffset.top + height - 18,
            left: childOffset.left + width - 18,
          })
        }

        // Putting emoji sign on vegetables section
        for (var i = 0; i < $('.names:eq(1) .fruitname').length; i++) {
          var width = $('.vegetable' + i).width()
          var height = $('.vegetable' + i).height()
          var childPos = $('.vegetable' + i).offset()
          var parentPos = $('.vegetable' + i)
            .parent()
            .offset()
          var childOffset = {
            top: childPos.top - parentPos.top,
            left: childPos.left - parentPos.left,
          }

          $('.smallfruitimages:eq(1)').append(
            "<img class='likeemo" + i + "' src='{{imgsrc}}'>"
          )
          $('.smallfruitimages:eq(1) .likeemo' + i).attr(
            'src',
            preload.getResult('notlike').src
          )
          $('.smallfruitimages:eq(1) .likeemo' + i).css({
            position: 'absolute',
            width: '14%',
            top: childOffset.top + height - 18,
            left: childOffset.left + width - 18,
          })
        }

        // hide all elements
        $('.fruitname, .smallfruitimages img, .bigbox:eq(1)').css({
          opacity: '0',
        })
        animation()
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

  function sound_player(sound_id) {
    createjs.Sound.stop()
    current_sound = createjs.Sound.play(sound_id)
    current_sound.play()
  }

  function sound_player_with_nav(sound_id) {
    createjs.Sound.stop()
    current_sound = createjs.Sound.play(sound_id)
    current_sound.play()
    current_sound.on('complete', function () {
      nav_button_controls()
    })
  }

  function sound_player_with_callback(sound_id, callback) {
    createjs.Sound.stop()
    current_sound = createjs.Sound.play(sound_id)
    current_sound.play()
    current_sound.on('complete', function () {
      callback()
    })
  }

  function playgif(soundid, imageid, gifid, imageclass, callback) {
    createjs.Sound.stop()
    current_sound = createjs.Sound.play(soundid)
    current_sound.play()
    $('.' + imageclass?.split(' ')[0]).attr('src', preload.getResult(gifid).src)
    current_sound.on('complete', function () {
      $('.' + imageclass?.split(' ')[0]).attr(
        'src',
        preload.getResult(imageid).src
      )

      callback && callback()
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

  function put_recordsdiv_image(content, count) {
    if (content[count].hasOwnProperty('recordsdiv')) {
      if (content[count].recordsdiv[0].hasOwnProperty('imageblock')) {
        var recordsdiv = content[count].recordsdiv[0].imageblock[0]
        if (recordsdiv.hasOwnProperty('imagestoshow')) {
          var imageClass = recordsdiv.imagestoshow
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

  function put_recordsummarydiv_image(content, count) {
    if (content[count].hasOwnProperty('recordsummarydiv')) {
      if (content[count].recordsummarydiv[0].hasOwnProperty('imageblock')) {
        var recordsummarydiv = content[count].recordsummarydiv[0].imageblock[0]
        if (recordsummarydiv.hasOwnProperty('imagestoshow')) {
          var imageClass = recordsummarydiv.imagestoshow
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

  function put_recordsdiv_image2(content, count) {
    if (content[count].hasOwnProperty('recordsdiv')) {
      if (content[count].recordsdiv[0].hasOwnProperty('imageblock2')) {
        var recordsdiv = content[count].recordsdiv[0].imageblock2[0]
        if (recordsdiv.hasOwnProperty('imagestoshow')) {
          var imageClass = recordsdiv.imagestoshow
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

  function put_speechbox_image(content, count) {
    if (content[count].hasOwnProperty('recordsdiv')) {
      if (content[count].recordsdiv[0].hasOwnProperty('speechbox')) {
        var speechbox = content[count].recordsdiv[0].speechbox
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
  }

  function put_speechbox_image2(content, count) {
    if (content[count].hasOwnProperty('recordsummarydiv')) {
      if (content[count].recordsummarydiv[0].hasOwnProperty('speechbox')) {
        var speechbox = content[count].recordsummarydiv[0].speechbox
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
  }

  function put_fruitsdiv_image(content, count) {
    if (content[count].hasOwnProperty('fruitsdiv')) {
      var fruitsdiv = content[count].fruitsdiv
      for (var i = 0; i < fruitsdiv.length; i++) {
        var image_src = preload.getResult(fruitsdiv[i].imgid).src
        //get list of classes
        var classes_list = fruitsdiv[i].imgclass.match(/\S+/g) || []
        var selector = '.' + classes_list[classes_list.length - 1]
        $(selector).attr('src', image_src)
      }
    }
  }

  function put_characterdiv_image(content, count) {
    if (content[count].hasOwnProperty('characterdiv')) {
      var characterdiv = content[count].characterdiv
      for (var i = 0; i < characterdiv.length; i++) {
        var image_src = preload.getResult(characterdiv[i].imgid).src
        //get list of classes
        var classes_list = characterdiv[i].imgclass.match(/\S+/g) || []
        var selector = '.' + classes_list[classes_list.length - 1]
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
