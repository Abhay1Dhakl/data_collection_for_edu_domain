var imgpath = $ref + '/images/Section1/'
var soundAsset = $ref + '/audio_' + $lang + '/'

var content = [
  //slide1
  {
    coverboardadditionalclass: 'bg_color',
    uppertextblockadditionalclass: 'topbar',
    uppertextblock: [
      {
        textclass: 'headertext',
        textdata: data.string.s1_P7_txt7,
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgid: 'hand',
            imgclass: 'hand',
          },

          {
            imgid: 'hand',
            imgclass: 'hand1',
          },

          {
            imgid: 'hand',
            imgclass: 'hand2',
          },
        ],
      },
    ],

    contentdivclass: 'contentdivclass secondcontdiv',
    contentdiv: [
      {
        innercontentdivclass: 'innercontentdivclass innercontentdivclass1',
        imagedivclass: 'contentimgdivclass contentimgdivclass1',
        imagediv: [
          {
            imgid: 'Udhauli',
            imgclass: 'contentdivimg contentdivimg1 maya_talking',
          },
        ],
        textclass: 'contentdivtxt contentdivtxt1',
        textdata: data.string.s1_P1_txt2,
      },
      {
        innercontentdivclass: 'innercontentdivclass innercontentdivclass2',
        imagedivclass: 'contentimgdivclass contentimgdivclass2',
        imagediv: [
          {
            imgid: 'Chhath',
            imgclass: 'contentdivimg contentdivimg2 raghu_talking',
          },
        ],
        textclass: 'contentdivtxt contentdivtxt2',
        textdata: data.string.s1_P1_txt3,
      },
      {
        innercontentdivclass: 'innercontentdivclass innercontentdivclass3',
        imagedivclass: 'contentimgdivclass contentimgdivclass3',
        imagediv: [
          {
            imgid: 'Mha_Puja_bg',
            imgclass: 'contentdivimg contentdivimg3 monu_talking',
          },
        ],
        textclass: 'contentdivtxt contentdivtxt3',
        textdata: data.string.s1_P1_txt4,
      },
    ],
  },
  //slide2
  //slide2:1
  {
    containerBlock: [
      {
        mainContainer: 'main_container main_container1',
        speechbox: [
          {
            speechbox: 'speechbox1',
            imgid: 'bubble2',
            imgsrc: imgpath + 'image2.png',
            imgclass: 'txtbox bubble1',
            textclass: 'spktxt',
            textdata: data.string.s1_P8_txt1,
          },
        ],
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'maya_bg_1',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'terai.png',
              },
              {
                imgid: 'maya_talking',
                imgclass: 'bgimg2',
                imgsrc: imgpath + 'muna_talking_still.png',
              },
              {
                imgid: 'maya_talking',
                imgclass: 'bggif',
                imgsrc: imgpath + 'muna_talking.gif',
              },
              {
                imgid: 'nextarrow',
                imgclass: 'nextarrow',
                imgsrc: imgpath + 'arrow.png',
              },
            ],
          },
        ],
      },

      //slide2:2

      {
        mainContainer: 'main_container main_container2',
        speechbox: [
          {
            speechbox: 'speechbox1',
            imgid: 'bubble2',
            imgsrc: imgpath + 'image2.png',
            imgclass: 'txtbox bubble1',
            textclass: 'spktxt',
            textdata: data.string.s1_P9_txt1,
          },
        ],
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'maya_bg_1',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'terai.png',
              },
              {
              
                imgclass: 'bgimg2',
                imgsrc: imgpath + 'muna_talking_still.png',
              },
              {
               
                imgclass: 'bggif',
                imgsrc: imgpath + 'muna_talking.gif',
              },
              {
                imgid: 'nextarrow',
                imgclass: 'nextarrow',
                imgsrc: imgpath + 'arrow.png',
              },
            ],
          },
        ],
      },

      //slide2:3

      {
        mainContainer: 'main_container main_container3',
        speechbox: [
          {
            speechbox: 'speechbox7',
            imgid: 'bubble2',
            imgsrc: imgpath + 'image.png',
            imgclass: 'txtbox bubble1',
            textclass: 'spktxt',
            textdata: data.string.s1_P10_txt1,
          },
        ],
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'maya_bg_1',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'cooking_bg.png',
              },
              {
                imgid: 'maya_talking',
                imgclass: 'bgimg3',
                imgsrc: imgpath + 'muna_talking_still.png',
              },
              {
                imgid: 'maya_talking',
                imgclass: 'bggif2',
                imgsrc: imgpath + 'muna_talking.gif',
              },
              {
                imgid: 'nextarrow',
                imgclass: 'nextarrow',
                imgsrc: imgpath + 'arrow.png',
              },
            ],
          },
        ],
      },

      //slide2: 4

      {
        mainContainer: 'main_container main_container4',

        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_2',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'sakela_dance.png',
              },
              {
                imgid: 'wrongbtn',
                imgclass: 'wrongbtn',
                imgsrc: imgpath + 'wrongbtn.png',
              },
            ],
          },
        ],
        uppertextblockadditionalclass: 'topbar topbar2',
        uppertextblock: [
          {
            textclass: 'headertext',
            textdata: data.string.s1_P11_txt1,
          },
        ],
      },
    ],
  },

  //slide 3 starts from here

  //slide3:1
  {
    containerBlock: [
      {
        mainContainer: 'main_container main_container1',
        speechbox: [
          {
            speechbox: 'speechbox2',
            imgid: 'bubble2',
            imgsrc: imgpath + 'image2.png',
            imgclass: 'txtbox bubble2',
            textclass: 'spktxt',
            textdata: data.string.s2_P1_txt1,
          },
        ],
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_1',
                imgclass: 'bg_full',

                imgsrc: imgpath + 'raghu_bg_1.png',
              },
             
              {
                imgid: 'maya_talking',
                imgclass: 'bggif4',
                imgsrc: imgpath + 'boy_talking.gif',
              },
              {
                imgid: 'maya_talking',
                imgclass: 'bgimg4',
                imgsrc: imgpath + 'boy_talking_still.gif',
              },
              
              {
                imgid: 'nextarrow',
                imgclass: 'nextarrow',
                imgsrc: imgpath + 'arrow.png',
              },
            ],
          },
        ],
      },

      //slide3:2

      {
        mainContainer: 'main_container main_container2',
        speechbox: [
          {
            speechbox: 'speechbox2',
            imgid: 'bubble2',
            imgsrc: imgpath + 'image2.png',
            imgclass: 'txtbox bubble2',
            textclass: 'spktxt',
            textdata: data.string.s2_P2_txt1,
          },
        ],
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_1',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'raghu_bg_1.png',
              },
              {
                imgid: 'maya_talking',
                imgclass: 'bggif4',
                imgsrc: imgpath + 'boy_talking.gif',
              },
              {
                imgid: 'maya_talking',
                imgclass: 'bgimg4',
                imgsrc: imgpath + 'boy_talking_still.gif',
              },
              {
                imgid: 'nextarrow',
                imgclass: 'nextarrow',
                imgsrc: imgpath + 'arrow.png',
              },
            ],
          },
        ],
      },

      //slide3: 3

      {
        mainContainer: 'main_container main_container3',

        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_2',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'chhat_cover.png',
              },
            
              {
                imgid: 'nextarrow',
                imgclass: 'nextarrow',
                imgsrc: imgpath + 'arrow.png',
              },
            ],
          },
        ],
        uppertextblockadditionalclass: 'topbar topbar2',
        uppertextblock: [
          {
            textclass: 'headertext',
            textdata: data.string.s2_P3_txt1,
            imagestoshow: [
              {
                imgid: 'raghu_talking_half',
                imgclass: 'halfgif1',
                imgsrc: imgpath + 'raghu_half.gif',
              },
              {
                imgid: 'raghu_talking_half',
                imgclass: 'halfimg1',
                imgsrc: imgpath + 'boy_cropped_still.gif',
              },
            ],
          },
        ],
      },

      //slide3: 4

      {
        mainContainer: 'main_container main_container4',
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_2',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'chhat_cover.png',
              },
  
              {
                imgid: 'nextarrow',
                imgclass: 'nextarrow',
                imgsrc: imgpath + 'arrow.png',
              },
            ],
          },
        ],
        uppertextblockadditionalclass: 'topbar topbar2',
        uppertextblock: [
          {
            textclass: 'headertext',
            textdata: data.string.s2_P4_txt1,
            imagestoshow: [
              {
                imgid: 'raghu_talking_half',
                imgclass: 'halfgif1',
                imgsrc: imgpath + 'raghu_half.gif',
              },
              {
                imgid: 'raghu_talking_half',
                imgclass: 'halfimg1',
                imgsrc: imgpath + 'boy_cropped_still.gif',
              },
            ],
          },
        ],
      },

      //slide3: 5

      {
        mainContainer: 'main_container main_container5',
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_2',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'making_thekuwa.png',
              },
              {
                imgid: 'wrongbtn ',
                imgclass: 'wrongbtn ',
                imgsrc: imgpath + 'wrongbtn.png',
              },
            ],
          },
        ],

        uppertextblockadditionalclass: 'topbar topbar2',
        uppertextblock: [
          {
            textclass: 'headertext',
            textdata: data.string.s2_P5_txt1,
            imagestoshow: [
              {
                imgid: 'raghu_talking_half',
                imgclass: 'halfgif1',
                imgsrc: imgpath + 'raghu_half.gif',
              },
              {
                imgid: 'raghu_talking_half',
                imgclass: 'halfimg1',
                imgsrc: imgpath + 'boy_cropped_still.gif',
              },
            ],
          },
        ],
      },
    ],
  },

  //slide 4 starts from here

  //slide4:1
  {
    containerBlock: [
      {
        mainContainer: 'main_container main_container1',
        speechbox: [
          {
            speechbox: 'speechbox3',
            imgid: 'bubble2',
            imgsrc: imgpath + 'image.png',
            imgclass: 'txtbox bubble2',
            textclass: 'spktxt',
            textdata: data.string.s3_P1_txt1,
          },
        ],
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_1',
                imgclass: 'bg_full',

                imgsrc: imgpath + 'ktm_city.png',
              },
              {
                imgid: 'sabina_talking',
                imgclass: 'bgimg5',
                imgsrc: imgpath + 'girlpng.gif',
              },
              {
                imgid: 'sabina_talking',
                imgclass: 'bggif3',
                imgsrc: imgpath + 'sabina.gif',
              },
              {
                imgid: 'nextarrow',
                imgclass: 'nextarrow',
                imgsrc: imgpath + 'arrow.png',
              },
            ],
          },
        ],
      },

      //slide4:2

      {
        mainContainer: 'main_container main_container2',
        speechbox: [
          {
            speechbox: 'speechbox3',
            imgid: 'bubble2',
            imgsrc: imgpath + 'image.png',
            imgclass: 'txtbox bubble2',
            textclass: 'spktxt',
            textdata: data.string.s3_P2_txt1,
          },
        ],
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_1',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'ktm_city.png',
              },
              {
                imgid: 'sabina_talking',
                imgclass: 'bgimg5',
                imgsrc: imgpath + 'girlpng.gif',
              },
              {
                imgid: 'sabina_talking',
                imgclass: 'bggif3',
                imgsrc: imgpath + 'sabina.gif',
              },
              {
                imgid: 'nextarrow',
                imgclass: 'nextarrow',
                imgsrc: imgpath + 'arrow.png',
              },
            ],
          },
        ],
      },

      //slide4: 3

      {
        mainContainer: 'main_container main_container3',

        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_2',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'mha-pujaa.png',
              },
              {
                imgid: 'nextarrow',
                imgclass: 'nextarrow',
                imgsrc: imgpath + 'arrow.png',
              },
            ],
          },
        ],
        uppertextblockadditionalclass: 'topbar topbar2',
        uppertextblock: [
          {
            textclass: 'headertext',
            textdata: data.string.s3_P3_txt1,
            imagestoshow: [
              {
                imgid: 'sabina_talking_half',
                imgclass: 'halfgif',
                imgsrc: imgpath + 'sabina_talking.gif',
              },
              {
                imgid: 'sabina_stop',
                imgclass: 'halfimg',
                imgsrc: imgpath + 'girl2_crop.gif',
              },
            ],
          },
        ],
      },

      //slide4: 4

      {
        mainContainer: 'main_container main_container4',
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_2',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'mha-pujaa.png',
              },

              {
                imgid: 'nextarrow',
                imgclass: 'nextarrow',
                imgsrc: imgpath + 'arrow.png',
              },
            ],
          },
        ],
        uppertextblockadditionalclass: 'topbar topbar2',
        uppertextblock: [
          {
            textclass: 'headertext',
            textdata: data.string.s3_P4_txt1,
            imagestoshow: [
              {
                imgid: 'sabina_talking_half',
                imgclass: 'halfgif',
                imgsrc: imgpath + 'sabina_talking.gif',
              },
              {
                imgid: 'sabina_stop',
                imgclass: 'halfimg',
                imgsrc: imgpath + 'girl2_crop.gif',
              },
            ],
          },
        ],
      },

      //slide4: 5

      {
        mainContainer: 'main_container main_container5',
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_2',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'mha-pujaa.png',
              },

              {
                imgid: 'wrongbtn ',
                imgclass: 'wrongbtn ',
                imgsrc: imgpath + 'wrongbtn.png',
              },
            ],
          },
        ],

        uppertextblockadditionalclass: 'topbar topbar2',
        uppertextblock: [
          {
            textclass: 'headertext',
            textdata: data.string.s3_P5_txt1,
            imagestoshow: [
              {
                imgid: 'sabina_talking_half',
                imgclass: 'halfgif',
                imgsrc: imgpath + 'sabina_talking.gif',
              },
              {
                imgid: 'sabina_stop',
                imgclass: 'halfimg',
                imgsrc: imgpath + 'girl2_crop.gif',
              },
            ],
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
  var next = 0
  var settimeoutclear;
  var pagrtracker = 0;
  var spoundplay = true;
  var nextBtn = true;

  var $total_page = content.length
  loadTimelineProgress($total_page, countNext + 1)
  // readCSV();
  var vocabcontroller = new Vocabulary()
  vocabcontroller.init()
  $('.mainBox > div').prepend('<p class="replay_button"></p>')

  //for preload
  var preload
  var timeoutvar = null
  var current_sound

  function init() {
    //specify type otherwise it will load assests as XHR
    manifest = [
      //images
      {
        id: 'bubble2',
        src: imgpath + 'bubble2.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'nextarrow',
        src: imgpath + 'arrow.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'wrongbtn',
        src: imgpath + 'wrongbtn.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'maya_talking',
        src: imgpath + 'maya_talking.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'monu_talking',
        src: imgpath + 'monu_talking.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'puja_talking',
        src: imgpath + 'puja_talking.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'raghu_talking',
        src: imgpath + 'raghu_talking.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'rehan_talking',
        src: imgpath + 'rehan_talking.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'sara_talking',
        src: imgpath + 'sara_talking.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'maya_bg_1',
        src: imgpath + 'maya_bg_1.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'maya_bg_2',
        src: imgpath + 'maya_bg_2.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'maya_bg_3',
        src: imgpath + 'maya_bg_3.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'raghu_talking_half',
        src: imgpath + 'raghu_talking_half.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'recording',
        src: imgpath + 'recording.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'stop',
        src: imgpath + 'stop.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'mum_making_saleroti',
        src: imgpath + 'mum_making_saleroti.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'raghu_bg_1',
        src: imgpath + 'raghu_bg_1.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'raghu_bg_2',
        src: imgpath + 'raghu_bg_2.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'raghu_bg_3',
        src: imgpath + 'raghu_bg_3.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'raghu_bg_4',
        src: imgpath + 'raghu_bg_4.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ladies_doing_puja',
        src: imgpath + 'ladies_doing_puja.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'making_roti',
        src: imgpath + 'making_roti.png',
        type: createjs.AbstractLoader.IMAGE,
      },

      {
        id: 'hand',
        src: imgpath + 'hand.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'Chhath',
        src: imgpath + 'chhat_cover.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'Udhauli',
        src: imgpath + 'udhauli_cover.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'Mha_Puja_bg',
        src: imgpath + 'mha-pujaa.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'maya_talking_gif',
        src: imgpath + 'maya_talking.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'monu_talking_gif',
        src: imgpath + 'monu_talking.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'puja_talking_gif',
        src: imgpath + 'puja_talking.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'raghu_talking_gif',
        src: imgpath + 'raghu_talking.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'rehan_talking_gif',
        src: imgpath + 'rehan_talking.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'sara_talking_gif',
        src: imgpath + 'sara_talking.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'raghu_talking_half_gif',
        src: imgpath + 'raghu_talking_half.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'mum_making_saleroti_gif',
        src: imgpath + 'mum_making_saleroti.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'crow_gif',
        src: imgpath + 'crow.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'crow0_gif',
        src: imgpath + 'crow0.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'ladies_doing_puja_gif',
        src: imgpath + 'ladies_doing_puja.gif',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'making_roti_gif',
        src: imgpath + 'making_roti.gif',
        type: createjs.AbstractLoader.IMAGE,
      },

      //sounds
      { id: 's1_P7_txt7', src: soundAsset + 's1_P7_txt7.mp3' },

			//maya
			{ id: 's1_P8_txt1', src: soundAsset + 's1_P8_txt1.mp3' },
			{ id: 's1_P9_txt1', src: soundAsset + 's1_P9_txt1.mp3' },
			{ id: 's1_P10_txt1', src: soundAsset + 's1_P10_txt1.mp3' },
			{ id: 's1_P11_txt1', src: soundAsset + 's1_P11_txt1.mp3' },
		//	{ id: 'character3', src: soundAsset + 's1_P11_txt1.mp3' },
//raghu
			{ id: 's2_P1_txt1', src: soundAsset + 's2_P1_txt1.mp3' },
			{ id: 's2_P2_txt1', src: soundAsset + 's2_P2_txt1.mp3' },
			{ id: 's2_P3_txt1', src: soundAsset + 's2_P3_txt1.mp3' },
			{ id: 's2_P4_txt1', src: soundAsset + 's2_P4_txt1.mp3' },
			{ id: 's2_P5_txt1', src: soundAsset + 's2_P5_txt1.mp3' },

			//sabina
			{ id: 's3_P1_txt1', src: soundAsset + 's3_P1_txt1.mp3' },
			{ id: 's3_P2_txt1', src: soundAsset + 's3_P2_txt1.mp3' },
			{ id: 's3_P3_txt1', src: soundAsset + 's3_P3_txt1.mp3' },
			{ id: 's3_P4_txt1', src: soundAsset + 's3_P4_txt1.mp3' },
			{ id: 's3_P5_txt1', src: soundAsset + 's3_P5_txt1.mp3' },
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
    put_image_container(content, countNext)
    put_speechbox_image(content, countNext)
    var top_val =
      ($('.top_text').height() / $('.coverboardfull').height()) * 100 +
      6.5 +
      '%'
    $('.top_below_text').css({
      top: top_val,
    })
    var casenext = [false, false, false, false, false, false]
    switch (countNext) {
      case 0:
        
        if(spoundplay){
          console.log("aa99999")
          sound_player('s1_P7_txt7');
        }
            // current_sound.on('complete', function () {
              
          $('.innercontentdivclass1').css('pointer-events', 'all')
          $('.innercontentdivclass2').css('pointer-events', 'all')
          $('.innercontentdivclass3').css('pointer-events', 'all')
          $('.innercontentdivclass').hover(
            function () {
              $(this).css({
                transform: 'scale(1.1)',
                background: '#FCE5CD',
                border: ' 0.1em solid #F6B26B',
              })
            },
            function () {
              $(this).css({
                transform: 'scale(1)',
                background: '#EEEEEE',
                border: ' 0.1em solid #ADCAF9',
              })
            }
          );
          if(pagrtracker == 0){
            spoundplay = false;
            console.log(spoundplay)
          $('.innercontentdivclass1').on("click", function(){
              countNext ++;
              console.log(countNext);
              templateCaller();
             // nav_button_controls()
          });
          $('.innercontentdivclass2').click(function(){
            countNext = countNext + 2;
             console.log(countNext);
            templateCaller();
            //nav_button_controls()
          })
          $('.innercontentdivclass3').click(function(){
            countNext = countNext + 3;
             console.log(countNext);
            templateCaller();
           // nav_button_controls()
        });
       // });
      }
        if(pagrtracker == 1){

          console.log("pagetracker 1");
          console.log(pagrtracker + ">>>>")
         // $('.hand').css("display", "none");
         // $('.hand1').fadeIn(500, function(){
            $('.innercontentdivclass2').click(function(){
              countNext = countNext + 2;
              templateCaller();
             // nav_button_controls()
            })
            $('.innercontentdivclass3').click(function(){
              countNext = countNext + 3;
              templateCaller();
            })
            $('.innercontentdivclass1').on("click", function(){
              countNext ++;
              console.log(countNext);
              templateCaller();
             // nav_button_controls()
          });
        }
     // });
        if(pagrtracker == 2){
          console.log("pagetracker 2");
          console.log(pagrtracker + ">>>>")
          //$('.hand1').css("display", "none");
          //$('.hand').css("display", "none");
         // $('.hand2').fadeIn(500, function(){
            $('.innercontentdivclass3').click(function(){
              countNext = countNext + 3;
              templateCaller();
             // nav_button_controls();
            })
            $('.innercontentdivclass2').click(function(){
              console.log("page2")
              let $end_page = ole.footerNotificationHandler.pageEndSetNotification()
              console.log(end_page)
             $end_page.hide(0)
              countNext = countNext + 2;
              templateCaller();
             // nav_button_controls();
            })
              $('.innercontentdivclass1').on("click", function(){
              countNext ++;
              console.log(countNext);
              templateCaller();
             // nav_button_controls();
          });
        }
      // });
      
        break;
      case 1:
        switch (next) {
          case 0:
          nextBtn= false;
            // $('.hand').fadeIn(1000, function (params) {
            $('.main_container1').css('display', 'block')
            //$('.hand1').css('left', '55%');
            $('.hand').css('display', 'none')
            sound_player('s1_P8_txt1')
            current_sound.on('complete', function () {
                $('.bggif').hide(0)
                $('.bgimg2').fadeIn(0);
              console.log("sound done")
              //$('.bggif').hide();
              $('.nextarrow').fadeIn(1000, function (params) {
              });
            })
          // })
          break;
          case 1:
            nextBtn= false;
            $('.main_container2').css('display', 'block')
            // $('.hand').css('left', '55%')
            sound_player('s1_P9_txt1')
            current_sound.on('complete', function () {
              $('.bggif').hide(0);
              $('.bgimg2').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;
          case 2:
            nextBtn= false;
            $('.main_container3').css('display', 'block')
            $('.hand').css('left', '55%')
            sound_player('s1_P10_txt1')
            console.log('>>>>>>>>>>>>>>>>')
            current_sound.on('complete', function () {
              $('.bggif2').hide(0);
              $('.bgimg3').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;
          case 3:
            nextBtn= true;
               $('.main_container4').css('display', 'block')
            sound_player('s1_P11_txt1');
            console.log(countNext);
            $('.wrongbtn').css("display","block");
            $('.wrongbtn').click(function () {
              if(nextBtn){
                console.log("aa99999")
                ole.footerNotificationHandler.pageEndSetNotification()
              }
              countNext = 0;
              next = 0;
              pagrtracker = 0;
              //$('.hand').css('display', 'none')
              //$('.hand1').fadeIn(500);
              templateCaller();
            })
            break;
        }
        break;
      case 2:
        switch (next) {
          case 0:
            nextBtn= false;
            $('.main_container1').css('display', 'block')
           // $('.hand').css('left', '55%')
            sound_player('s2_P1_txt1')
            current_sound.on('complete', function () {
              $('.bggif2').hide(0);
              $('.bgimg4').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;
          case 1:
            nextBtn= false;
            $('.main_container2').css('display', 'block')
           // $('.hand').css('left', '55%')
            sound_player('s2_P2_txt1')
            current_sound.on('complete', function () {
              $('.bggif2').hide(0)
              $('.bgimg4').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;
          case 2:
            nextBtn= false;
            $('.main_container3').css('display', 'block')
            //$('.hand').css('left', '55%')
            sound_player('s2_P3_txt1')
            current_sound.on('complete', function () {
              $('.halfgif1').hide(0);
              $('.halfimg1').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;
          case 3:
            nextBtn= false;
            $('.main_container4').css('display', 'block')
           // $('.hand').css('left', '55%')
            sound_player('s2_P4_txt1')
            current_sound.on('complete', function () {
              $('.halfgif1').hide(0);
              $('.halfimg1').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) { 
              })
            })
            break;
          case 4:
            nextBtn= true;
            console.log('aaaaaaaa')
            $('.main_container5').css('display', 'block')
            // $('.hand').css('left', '55%');
            sound_player('s2_P5_txt1');
            current_sound.on('complete', function () {
              $('.halfgif1').hide(0);
              $('.halfimg1').fadeIn(0);
            $('.wrongbtn').css("display","block");
            $('.wrongbtn').click(function () {
              if(nextBtn){
                console.log("aa99999")
                ole.footerNotificationHandler.pageEndSetNotification()
              }
              countNext = 0;
              next = 0;
              console.log(countNext);
              pagrtracker = 0;
              $('.hand1').css('display', 'none')
              $('.hand').css('display', 'none')
              $('.hand2').fadeIn(500);
              // gonextpage()
              templateCaller();
              
          })
        })
            break;
        }
      break;
      case 3:
        switch (next) {
          case 0:
            nextBtn= false;
            $('.main_container1').css('display', 'block')
            //$('.hand2').css('left', '55%');
            sound_player('s3_P1_txt1')
            current_sound.on('complete', function () {
              $('.bggif3').hide(0)
              $('.bgimg5').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;
          case 1:
            nextBtn= false;
            $('.main_container2').css('display', 'block')
           // $('.hand2').css('left', '55%')
            sound_player('s3_P2_txt1')
            current_sound.on('complete', function () {
              $('.bggif3').hide(0)
              $('.bgimg5').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;

          case 2:
            nextBtn= false;
            $('.main_container3').css('display', 'block')
           // $('.hand2').css('left', '55%')
            sound_player('s3_P3_txt1')
            current_sound.on('complete', function () {
              $('.nextarrow').fadeIn(1000, function (params) {
                $('.halfgif').hide(0);
                $('.halfimg').fadeIn(0);
              })
            })
            break;
          case 3:
            nextBtn= false;
            $('.main_container4').css('display', 'block')
           // $('.hand2').css('left', '55%')
            sound_player('s3_P4_txt1')
            current_sound.on('complete', function () {
              $('.nextarrow').fadeIn(1000, function (params) {
                $('.halfgif').hide(0);
                $('.halfimg').fadeIn(0);
              })
            })
            break;
          case 4:
            nextBtn= true;
            $('.main_container5').css('display', 'block')
            //$('.hand2').css('left', '55%')
            sound_player('s3_P5_txt1')
            current_sound.on('complete', function () {
              $('.halfgif').hide(0);
              $('.halfimg').fadeIn(0);
              $('.wrongbtn').css("display","block");
              $('.wrongbtn').click(function () {
                if(nextBtn){
                  console.log("aa99999")
                  ole.footerNotificationHandler.pageEndSetNotification()
                }
                // Wrongbtn()
                pagrtracker = 0;
                countNext = 0;
                next = 0;
                console.log(countNext)
               // gonextpage()
                templateCaller()
            // nav_button_controls2(0)
              })
            })
            break;
          }
    
        default:
          break;
         
    }

    function clickarrow() {
      // console.log(">>>>>>>>>>>")
      $('.nextarrow').click(function () {
        next++;
        templateCaller();
        console.log(next);
      })
    }
    clickarrow()

    function gonextpage() {
      $('.hand').css('display', 'none')
      console.log(countNext)
      countNext = countNext + 2
    }

    function gonextpage1() {
      $('.hand').css('display', 'none')
      console.log(countNext)
      countNext = countNext + 2
    }

    function gonextpage2() {
      $('.hand').css('display', 'none')
      console.log(countNext)
      countNext = countNext 
    }

    function goonnextpage() {
      $('.hand').css('display', 'none')
      $('.hand1').css('display', 'none')
      $('.hand2').css('display', 'block')
      console.log(countNext + 1)
      countNext = countNext + 3
    }
    function Wrongbtn() {
      console.log('>>>>>>>>>>>')
      $('.wrongbtn').click(function () {
        countNext = countNext - 1
        $prevBtn.trigger('click')
        console.log('Aaa')
        nav_button_controls2(0)
      })
    }
    function showtext(i = 1) {
      if (i == 1) {
        createjs.Sound.stop()
        clearTimeout(settimeoutclear)
      }
      if (countNext == 6) {
        $('.innercontentdivclassspeak' + i).animate(
          {
            opacity: 1,
          },
          3000,
          function () {
            if (countNext == 6) {
              sound_player('textaudio' + i)
              current_sound.on('complete', function () {
                if (i == 6) {
                  settimeoutclear = setTimeout(() => {
                    nav_button_controls(0)
                  }, 200)
                } else {
                  settimeoutclear = setTimeout(() => {
                    showtext(i + 1)
                  }, 200)
                }
              })
            }
          }
        )
      }
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

  function nav_button_controls2(delay_ms) {
    timeoutvar = setTimeout(function () {
      if (countNext == 0) {
        $arrow.show(0)
      } else if (next > 4 && next == $total_page - 1) {
        $prevBtn.show(0)
        ole.footerNotificationHandler.pageEndSetNotification()
      } else {
        $arrow.show(0)
        $arrow.show(0)
      }
    }, delay_ms)
  }
  function sound_player(sound_id) {
    createjs.Sound.stop()
    current_sound = createjs.Sound.play(sound_id)
    current_sound.play()
    current_sound.on('complete', function () {
       //nav_button_controls(0);
    })
  }

  function sound_player_duo(sound_id, sound_id_se) {
    createjs.Sound.stop()
    current_sound = createjs.Sound.play(sound_id)
    current_sound_se = createjs.Sound.play(sound_id_se)
    current_sound.play()
    current_sound.on('complete', function () {
      //nav_button_controls(0)
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
    if (content[count].hasOwnProperty('uppertextblock')) {
      var uppertextblock = content[count].uppertextblock[0]
      if (uppertextblock.hasOwnProperty('imagestoshow')) {
        var imageClass = uppertextblock.imagestoshow
        for (var i = 0; i < imageClass.length; i++) {
          var image_src = preload.getResult(imageClass[i].imgid).src
          //get list of classes
          var classes_list = imageClass[i].imgclass.match(/\S+/g) || []
          var selector = '.' + classes_list[classes_list.length - 1]
          $(selector).attr('src', image_src)
        }
      }
    }
    if (content[count].hasOwnProperty('contentdiv')) {
      var contentdivlength = content[count].contentdiv
      for (var j = 0; j < contentdivlength.length; j++) {
        var contentdiv = content[count].contentdiv[j]
        if (contentdiv.hasOwnProperty('imagediv')) {
          var imageClass = contentdiv.imagediv
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
    if (content[count].hasOwnProperty('popupinnerdiv')) {
      var contentdivlength = content[count].popupinnerdiv
      for (var j = 0; j < contentdivlength.length; j++) {
        var popupinnerdiv = content[count].popupinnerdiv[j]
        if (popupinnerdiv.hasOwnProperty('imagediv')) {
          var imageClass = popupinnerdiv.imagediv
          for (var i = 0; i < imageClass.length; i++) {
            var image_src = preload.getResult(imageClass[i].imgid).src
            //get list of classes
            var classes_list = imageClass[i].imgclass.match(/\S+/g) || []
            var selector = '.' + classes_list[classes_list.length - 1]
            $(selector).attr('src', image_src)
          }
        }
        if (popupinnerdiv.hasOwnProperty('imagestoshow')) {
          var imageClass = popupinnerdiv.imagestoshow
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
  function put_image_container(content, count) {
    if (content[count].hasOwnProperty('contentblock')) {
      var contentblock = content[count].contentblock[0]
      if (contentblock.hasOwnProperty('imagestoshow')) {
        var imageClass = contentblock.imagestoshow
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
    $nextBtn.css('display', 'none')
    navigationcontroller()
    generaltemplate()
    loadTimelineProgress($total_page, countNext + 1)
  }

  $nextBtn.on('click', function () {
    clearTimeout(settimeoutclear)
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
    clearTimeout(settimeoutclear)
    templateCaller()
  })

  $prevBtn.on('click', function () {
    createjs.Sound.stop()
    clearTimeout(timeoutvar)
    clearTimeout(settimeoutclear)
    countNext--
    templateCaller()
    /* if footerNotificationHandler pageEndSetNotification was called then on click of
		 previous slide button hide the footernotification */
    countNext < $total_page
      ? ole.footerNotificationHandler.hideNotification()
      : null
  })
})
