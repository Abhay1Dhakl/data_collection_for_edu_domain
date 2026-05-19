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
    /*imageblock: [
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
    ],*/

    contentdivclass: 'contentdivclass secondcontdiv',
    contentdiv: [
      {
        innercontentdivclass: 'innercontentdivclass innercontentdivclass1',
        imagedivclass: 'contentimgdivclass contentimgdivclass1',
        imagediv: [
          {
            imgid: 'Dashain',
            imgclass: 'contentdivimg contentdivimg1 maya_talking',
          },
        ],
        textclass: 'contentdivtxt contentdivtxt1',
        textdata: data.string.s1_P1_txt5,
      },
      {
        innercontentdivclass: 'innercontentdivclass innercontentdivclass2',
        imagedivclass: 'contentimgdivclass contentimgdivclass2',
        imagediv: [
          {
            imgid: 'Christmas',
            imgclass: 'contentdivimg contentdivimg2 raghu_talking',
          },
        ],
        textclass: 'contentdivtxt contentdivtxt2',
        textdata: data.string.s1_P1_txt6,
      },
      {
        innercontentdivclass: 'innercontentdivclass innercontentdivclass3',
        imagedivclass: 'contentimgdivclass contentimgdivclass3',
        imagediv: [
          {
            imgid: 'Eid',
            imgclass: 'contentdivimg contentdivimg3 monu_talking',
          },
        ],
        textclass: 'contentdivtxt contentdivtxt3',
        textdata: data.string.s1_P1_txt7,
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
            imgsrc: imgpath + 'image.png',
            imgclass: 'txtbox bubble2',
            textclass: 'spktxt',
            textdata: data.string.s4_P1_txt1,
          },
        ],
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'maya_bg_1',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'surkhet.png',
              },
              {
                imgid: 'maya_talking',
                imgclass: 'bggif1',
                imgsrc: imgpath + 'girl_talking_gif.gif',
              },
             {
                imgid: 'maya_talking',
                imgclass: 'bgimg2',
                imgsrc: imgpath + 'girl_talking_png.png',
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
            imgsrc: imgpath + 'image.png',
            imgclass: 'txtbox bubble1',
            textclass: 'spktxt',
            textdata: data.string.s4_P2_txt1,
          },
        ],
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'maya_bg_1',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'surkhet.png',
              },
                {
                  imgid: 'maya_talking',
                  imgclass: 'bggif1',
                  imgsrc: imgpath + 'girl_talking_gif.gif',
                },
               {
                  imgid: 'maya_talking',
                  imgclass: 'bgimg2',
                  imgsrc: imgpath + 'girl_talking_png.png',
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

        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_2',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'celebrating_dashian.png',
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
            textdata: data.string.s4_P3_txt1,
            imagestoshow: [
              {
                imgid: 'puja_half',
                imgclass: 'halfgif',
                imgsrc: imgpath + 'puja_crop.gif',
              },
              {
                imgid: 'gif_half',
                imgclass: 'halfimg',
                imgsrc: imgpath + 'puja_half_png.gif',
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
                imgsrc: imgpath + 'puja_bg_3a.png',
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
            textdata: data.string.s4_P4_txt1,
            imagestoshow: [
              {
                imgid: 'puja_half',
                imgclass: 'halfgif',
                imgsrc: imgpath + 'puja_crop.gif',
              },
              {
                imgid: 'gif_half',
                imgclass: 'halfimg',
                imgsrc: imgpath + 'puja_half_png.gif',
              },
            ],
          },
        ],
       
      },

      //slide2: 5

      {
        mainContainer: 'main_container main_container5',

        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_2',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'blessings.png',
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
            textdata: data.string.s4_P5_txt1,
            imagestoshow: [
              {
                imgid: 'puja_half',
                imgclass: 'halfgif',
                imgsrc: imgpath + 'puja_crop.gif',
              },
              {
                imgid: 'gif_half',
                imgclass: 'halfimg',
                imgsrc: imgpath + 'puja_half_png.gif',
              },
            ],
          },
        ],
      },

      //slide2: 6

      {
        mainContainer: 'main_container main_container6',

        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_2',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'eating_food.png',
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
            textdata: data.string.s4_P6_txt1,
            imagestoshow: [
              {
                imgid: 'puja_half',
                imgclass: 'halfgif',
                imgsrc: imgpath + 'puja_crop.gif',
              },
              {
                imgid: 'gif_half',
                imgclass: 'halfimg',
                imgsrc: imgpath + 'puja_half_png.gif',
              },
            ],
     
        }],
             },

      //slide2: 7

      {
        mainContainer: 'main_container main_container7',

        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_2',
                imgclass: 'bg_half',
                imgsrc: imgpath + 'swing.gif',
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
            textdata: data.string.s4_P7_txt1,
            imagestoshow: [
              {
                imgid: 'puja_half',
                imgclass: 'halfgif',
                imgsrc: imgpath + 'puja_crop.gif',
              },
              {
                imgid: 'gif_half',
                imgclass: 'halfimg',
                imgsrc: imgpath + 'puja_half_png.gif',
              },
            ],
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
            speechbox: 'speechbox3',
            imgid: 'bubble2',
            imgsrc: imgpath + 'image.png',
            imgclass: 'txtbox bubble2',
            textclass: 'spktxt',
            textdata: data.string.p5s1,
          },
        ],
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_1',
                imgclass: 'bg_full',

                imgsrc: imgpath + 'bg_christmas.png',
              },
              {
                imgid: 'raghu_talking',
                imgclass: 'bgimg3',
                imgsrc: imgpath + 'niraj_png.png',
              },
              {
                imgid: 'raghu_talking',
                imgclass: 'bggif2',
                imgsrc: imgpath + 'niraj_talking_gif.gif',
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
            speechbox: 'speechbox3',
            imgid: 'bubble2',
            imgsrc: imgpath + 'image.png',
            imgclass: 'txtbox bubble2',
            textclass: 'spktxt',
            textdata: data.string.p5s2,
          },
        ],
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_1',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'bg_christmas.png',
              },
                {
                  imgid: 'raghu_talking',
                  imgclass: 'bgimg3',
                  imgsrc: imgpath + 'niraj_png.png',
                },
                {
                  imgid: 'raghu_talking',
                  imgclass: 'bggif2',
                  imgsrc: imgpath + 'niraj_talking_gif.gif',
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
                imgsrc: imgpath + 'bg_with_character.png',
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
            textdata: data.string.p5s3,
            imagestoshow: [
              {
                imgid: 'niraj',
                imgclass: 'halfimg',
                imgsrc: imgpath + 'niraj_talking_half_png.png',
              },
              {
                imgid: 'niraj',
                imgclass: 'halfgif',
                imgsrc: imgpath + 'niraj_talking_half_gif.gif',
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
                imgsrc: imgpath + 'going_church.png',
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
            textdata: data.string.p5s4,
            imagestoshow: [
              {
                imgid: 'niraj',
                imgclass: 'halfimg',
                imgsrc: imgpath + 'niraj_talking_half_png.png',
              },
              {
                imgid: 'niraj',
                imgclass: 'halfgif',
                imgsrc: imgpath + 'niraj_talking_half_gif.gif',
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
                imgsrc: imgpath + 'christmas_cover.png',
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
            textdata: data.string.p5s5,
            imagestoshow: [
              {
                imgid: 'niraj',
                imgclass: 'halfimg',
                imgsrc: imgpath + 'niraj_talking_half_png.png',
              },
              {
                imgid: 'niraj',
                imgclass: 'halfgif',
                imgsrc: imgpath + 'niraj_talking_half_gif.gif',
              },
            ],
          },
        ],
      },

      //slide3: 6

      {
        mainContainer: 'main_container main_container6',
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_2',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'christmas_cover.png',
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
            textdata: data.string.p5s6,
            imagestoshow: [
              {
                imgid: 'niraj',
                imgclass: 'halfimg',
                imgsrc: imgpath + 'niraj_talking_half_png.png',
              },
              {
                imgid: 'niraj',
                imgclass: 'halfgif',
                imgsrc: imgpath + 'niraj_talking_half_gif.gif',
              },
            ],
          },
        ],
      },
      //slide3: 7

      {
        mainContainer: 'main_container main_container7',
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_2',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'gift_exchange.png',
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
            textdata: data.string.p5s7,
            imagestoshow: [
              {
                imgid: 'niraj',
                imgclass: 'halfimg',
                imgsrc: imgpath + 'niraj_talking_half_png.png',
              },
              {
                imgid: 'niraj',
                imgclass: 'halfgif',
                imgsrc: imgpath + 'niraj_talking_half_gif.gif',
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
            speechbox: 'speechbox4',
            imgid: 'bubble2',
            imgsrc: imgpath + 'image.png',
            imgclass: 'txtbox bubble2',
            textclass: 'spktxt',
            textdata: data.string.p6s1,
          },
        ],
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_1',
                imgclass: 'bg_full',

                imgsrc: imgpath + 'bg01.png',
              },
              {
                imgid: 'rehan',
                imgclass: 'bgimg4',
                imgsrc: imgpath + 'rehan_talking.png',
              },
              {
                imgid: 'rehan',
                imgclass: 'bggif3',
                imgsrc: imgpath + 'rehan_talking.gif',
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
            speechbox: 'speechbox4',
            imgid: 'bubble2',
            imgsrc: imgpath + 'image.png',
            imgclass: 'txtbox bubble2',
            textclass: 'spktxt',
            textdata: data.string.p6s2,
          },
        ],
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_1',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'bg01.png',
              },
              {
                imgid: 'rehan',
                imgclass: 'bgimg4',
                imgsrc: imgpath + 'rehan_talking.png',
              },
              {
                imgid: 'rehan',
                imgclass: 'bggif3',
                imgsrc: imgpath + 'rehan_talking.gif',
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
                imgsrc: imgpath + 'Eid.png',
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
            textdata: data.string.p6s3,
            imagestoshow: [
              {
                imgid: 'rehan',
                imgclass: 'halfimg',
                imgsrc: imgpath + 'rehan_talking_half.png',
              },
              {
                imgid: 'rehan',
                imgclass: 'halfgif',
                imgsrc: imgpath + 'rehan_talking_half.gif',
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
                imgsrc: imgpath + 'praying.png',
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
            textdata: data.string.p6s4,
            imagestoshow: [
              {
                imgid: 'rehan',
                imgclass: 'halfimg',
                imgsrc: imgpath + 'rehan_talking_half.png',
              },
              {
                imgid: 'rehan',
                imgclass: 'halfgif',
                imgsrc: imgpath + 'rehan_talking_half.gif',
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
                  imgsrc: imgpath + 'donating_food.png',
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
              textdata: data.string.p6s5,
              imagestoshow: [
                {
                  imgid: 'rehan',
                  imgclass: 'halfimg',
                  imgsrc: imgpath + 'rehan_talking_half.png',
                },
                {
                  imgid: 'rehan',
                  imgclass: 'halfgif',
                  imgsrc: imgpath + 'rehan_talking_half.gif',
                },
              ],
            },
          ],
        },
  

      //slide4: 5

      {
        mainContainer: 'main_container main_container6',
        imageblock: [
          {
            imagestoshow: [
              {
                imgid: 'raghu_bg_2',
                imgclass: 'bg_full',
                imgsrc: imgpath + 'having_feast.png',
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
            textdata: data.string.p6s6,
            imagestoshow: [
              {
                imgid: 'rehan',
                imgclass: 'halfimg',
                imgsrc: imgpath + 'rehan_talking_half.png',
              },
              {
                imgid: 'rehan',
                imgclass: 'halfgif',
                imgsrc: imgpath + 'rehan_talking_half.gif',
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
  var countNext = 0;
  var next = 0;
  var pagrtracker = 0;
  var spoundplay = true;
  var settimeoutclear

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
        id: 'Christmas',
        src: imgpath + 'bg_with_character.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'Dashain',
        src: imgpath + 'putting_tika.png',
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: 'Eid',
        src: imgpath + 'Eid.png',
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
    //  { id: 'dummy', src: soundAsset + 'dummy.mp3' },
    //puja
      { id: 's1_P7_txt7', src: soundAsset + 's1_P7_txt7.mp3' },
      { id: 's4_P1_txt1', src: soundAsset + 's4_P1_txt1.mp3' },
      { id: 's4_P2_txt1', src: soundAsset + 's4_P2_txt1.mp3' },
      { id: 's4_P3_txt1', src: soundAsset + 's4_P3_txt1.mp3' },
      { id: 's4_P4_txt1', src: soundAsset + 's4_P4_txt1.mp3' },
      { id: 's4_P5_txt1', src: soundAsset + 's4_P5_txt1.mp3' },
      { id: 's4_P6_txt1', src: soundAsset + 's4_P6_txt1.mp3' },
      { id: 's4_P7_txt1', src: soundAsset + 's4_P7_txt1.mp3' },

//niraj
      { id: 'p5s1', src: soundAsset + 'p5s1.mp3' },
      { id: 'p5s2', src: soundAsset + 'p5s2.mp3' },
      { id: 'p5s3', src: soundAsset + 'p5s3.mp3' },
      { id: 'p5s4', src: soundAsset + 'p5s4.mp3' },
      { id: 'p5s5', src: soundAsset + 'p5s5.mp3' },
      { id: 'p5s6', src: soundAsset + 'p5s6.mp3' },
      { id: 'p5s7', src: soundAsset + 'p5s7.mp3' },

      
//rihaan
{ id: 'p6s1', src: soundAsset + 'p6s1.mp3' },
{ id: 'p6s2', src: soundAsset + 'p6s2.mp3' },
{ id: 'p6s3', src: soundAsset + 'p6s3.mp3' },
{ id: 'p6s4', src: soundAsset + 'p6s4.mp3' },
{ id: 'p6s5', src: soundAsset + 'p6s5.mp3' },
{ id: 'p6s6', src: soundAsset + 'p6s6.mp3' },
{ id: 'p6s7', src: soundAsset + 'p6s7.mp3' },
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
    var casenext = [false, false, false, false, false, false,false]
    $('.coverboardfull').css('bakground-image', 'url('+imgpath+'firstbg.png)');

    switch (countNext) {
      case 0:
        if(spoundplay){
          sound_player('s1_P7_txt7')
        }
       // $('.hand').fadeIn(1000);
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
          )
          if(pagrtracker == 0){
            spoundplay = false;
          $('.innercontentdivclass1').on("click", function(){
            countNext ++;
            console.log(countNext);
            templateCaller();
        });
        $('.innercontentdivclass2').click(function(){
          countNext = countNext + 2;
           console.log(countNext);
          templateCaller();
        })
        $('.innercontentdivclass3').click(function(){
          countNext = countNext + 3;
           console.log(countNext);
          templateCaller();
        })
       // });
      };
        if(pagrtracker == 1){
          console.log(pagrtracker + ">>>>")
          //$('.hand').css("display", "none");
         // $('.hand1').fadeIn(500, function(){
            $('.innercontentdivclass2').click(function(){
              countNext = countNext + 2;
              templateCaller();
              $('.innercontentdivclass1').on("click", function(){
                countNext ++;
                console.log(countNext);
                templateCaller();
            });
              $('.innercontentdivclass3').click(function(){
                countNext = countNext + 3;
                 console.log(countNext);
                templateCaller();
              })
            })
         // })
        }
        if(pagrtracker == 2){
          $('.innercontentdivclass2').click(function(){
            countNext = countNext + 2;
            templateCaller();
            $('.innercontentdivclass1').on("click", function(){
              countNext ++;
              console.log(countNext);
              templateCaller();
          });
            $('.innercontentdivclass3').click(function(){
              countNext = countNext + 3;
               console.log(countNext);
              templateCaller();
            })
          })
        }
        break;
      case 1:
        switch (next) {
          case 0:
             // $('.hand').fadeIn(1000, function (params) {
              $('.main_container1').css('display', 'block')
              //$('.hand1').css('left', '55%');
             // $('.hand').css('display', 'none')
              sound_player('s4_P1_txt1')
              current_sound.on('complete', function () {
                  $('.bggif1').hide(0)
                  $('.bgimg2').fadeIn(0);
                console.log("sound done")
                //$('.bggif').hide();
                $('.nextarrow').fadeIn(1000, function (params) {
                });
              })
              break;
          case 1:
            $('.main_container2').css('display', 'block')
            // $('.hand').css('left', '55%')
            sound_player('s4_P2_txt1')
            current_sound.on('complete', function () {
              $('.bggif1').hide(0);
              $('.bgimg2').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
             break;
              case 2:
                $('.main_container3').css('display', 'block')
                sound_player('s4_P3_txt1')
                console.log('>>>>>>>>>>>>>>>>')
                current_sound.on('complete', function () {
                  $('.halfgif').hide(0);
              $('.halfimg').fadeIn(0);
                  $('.nextarrow').fadeIn(1000, function (params) {
                  })
                })
                break;
                 case 3:
            $('.main_container4').css('display', 'block')
            sound_player('s4_P4_txt1')
            console.log('>>>>>>>>>>>>>>>>')
            current_sound.on('complete', function () {
              $('.halfgif').hide(0);
              $('.halfimg').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;
            case 4:
            $('.main_container5').css('display', 'block')
            sound_player('s4_P5_txt1')
            console.log("testing")
            current_sound.on('complete', function () {
              $('.halfgif').hide(0);
              $('.halfimg').fadeIn(0);
            $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;
            case 5:
            $('.main_container6').css('display', 'block');
            sound_player('s4_P6_txt1');
            console.log('>>>>>>>>>>>>>>>>')
            current_sound.on('complete', function () {
              $('.halfgif').hide(0);
              $('.halfimg').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
break;
      case 6:
            console.log("container 8")
            $('.main_container7').css('display', 'block')
            sound_player('s4_P7_txt1');
            current_sound.on('complete', function () {
              $('.halfgif').hide(0);
              $('.halfimg').fadeIn(0);
            $('.wrongbtn').css("display","block");
            $('.wrongbtn').click(function () {
              ole.footerNotificationHandler.pageEndSetNotification()
              countNext = 0;
              next = 0;
              pagrtracker = 0;
             // $('.hand').css('display', 'none')
             // $('.hand1').fadeIn(500);
              templateCaller();
              //nav_button_controls(0);
            })
          });
            break;
        }
        break;
      case 2:
        switch (next) {
          case 0:
           // pageEndSetNotification.hide(0)
            $('.main_container1').css('display', 'block')
            sound_player('p5s1')
            current_sound.on('complete', function () {
              $('.nextarrow').fadeIn(1000, function (params) {
                $('.bggif2').hide(0);
                $('.bgimg3').fadeIn(0);
              })
            })
            break;
          case 1:
            $('.main_container2').css('display', 'block')
          //  $('.hand').css('left', '55%')
            sound_player('p5s2')
            current_sound.on('complete', function () {
              $('.bggif2').hide(0);
              $('.bgimg3').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;
          case 2:
            $('.main_container3').css('display', 'block')
         //   $('.hand').css('left', '55%')
            sound_player('p5s3')
            current_sound.on('complete', function () {
              $('.halfgif').hide(0);
              $('.halfimg').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;
          case 3:
            $('.main_container4').css('display', 'block')
         //   $('.hand').css('left', '55%')
            sound_player('p5s4')
            current_sound.on('complete', function () {
              $('.halfgif').hide(0);
              $('.halfimg').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;
          case 4:
            $('.main_container5').css('display', 'block')
           // $('.hand').css('left', '55%')
            sound_player('p5s5')
            current_sound.on('complete', function () {
              $('.halfgif').hide(0);
              $('.halfimg').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;
          case 5:
            $('.main_container6').css('display', 'block')
          //  $('.hand').css('left', '55%')
            sound_player('p5s6')
            current_sound.on('complete', function () {
              $('.halfgif').hide(0);
              $('.halfimg').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;
          case 6:
            console.log('aaaaaaaa')
            $('.main_container7').css('display', 'block')
            // $('.hand').css('left', '55%');
            sound_player('p5s7');
            current_sound.on('complete', function () {
              $('.halfgif').hide(0);
              $('.halfimg').fadeIn(0);
            $('.wrongbtn').css("display","block");
            $('.wrongbtn').click(function () {
              ole.footerNotificationHandler.pageEndSetNotification()
              countNext = 0;
              next = 0;
              console.log(countNext);
              pagrtracker = 0;
            //  $('.hand1').css('display', 'none')
            //  $('.hand').css('display', 'none')
           //   $('.hand2').fadeIn(500);
              // gonextpage()
              templateCaller();
             // nav_button_controls(0);
          })
        })
            break;
        }
      break;

      case 3:
        switch (next) {
          case 0:
            $('.main_container1').css('display', 'block')
            //$('.hand2').css('left', '55%');
            sound_player('p6s1')
            current_sound.on('complete', function () {
              $('.bggif3').hide(0);
              $('.bgimg4').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;
          case 1:
            $('.main_container2').css('display', 'block')
            //$('.hand2').css('left', '55%');
            sound_player('p6s2')
            current_sound.on('complete', function () {
              $('.bggif3').hide(0);
              $('.bgimg4').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;
            case 2:
              $('.main_container3').css('display', 'block')
            //$('.hand2').css('left', '55%');
            sound_player('p6s3')
            current_sound.on('complete', function () {
              $('.halfgif').hide(0);
              $('.halfimg').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;
          case 3:
            $('.main_container4').css('display', 'block')
            //$('.hand2').css('left', '55%');
            sound_player('p6s4')
            current_sound.on('complete', function () {
              $('.halfgif').hide(0);
              $('.halfimg').fadeIn(0);
              $('.nextarrow').fadeIn(1000, function (params) {
              })
            })
            break;
            case 4:
              $('.main_container5').css('display', 'block')
              //$('.hand2').css('left', '55%');
              sound_player('p6s5')
              current_sound.on('complete', function () {
                $('.halfgif').hide(0);
                $('.halfimg').fadeIn(0);
                $('.nextarrow').fadeIn(1000, function (params) {
                })
              })
              break;
          case 5:
            $('.main_container6').css('display', 'block')
            $('.hand2').css('left', '55%')
            sound_player('p6s6')
            current_sound.on('complete', function () {
              $('.halfgif').hide(0);
              $('.halfimg').fadeIn(0);
              $('.wrongbtn').css("display","block");
              $('.wrongbtn').click(function () {
                ole.footerNotificationHandler.pageEndSetNotification()
                // Wrongbtn()
                pagrtracker = 0;
                countNext = 0;
                next = 0;
                console.log(countNext)
               // gonextpage()
                templateCaller();
          //nav_button_controls(0);
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
        next++
        // countNext = countNext - 4;
        // $prevBtn.trigger('click');
        // console.log("Aaa");
        templateCaller()
        console.log(next)
        // if ($(this).click(0)) {
        // 	$(this).append("<img class='correctwrongimg' src='images/correct.png'/>");
        // 	$('.wrongbtn').addClass('avoid-click');
        // 	$(this).append("<p class='afterans'>");

        // }
      })
    }
    clickarrow()

    function gonextpage() {
      $('.hand').css('display', 'none')
      console.log(countNext)
      countNext = countNext + 2
      console.log(countNext)
    }

    function goonnextpage() {
      $('.hand').css('display', 'none')
      // $('.hand1').css('display', 'none')
      $('.hand2').css('display', 'block')
      $('.hand1').css('display', 'block')
      console.log(countNext + 1)
      countNext = countNext + 3
    }
    
    function gonextpage1() {
      $('.hand').css('display', 'none')
      console.log(countNext)
      countNext = countNext + 2
    }

    function Wrongbtn() {
      console.log('>>>>>>>>>>>')
      $('.wrongbtn').click(function () {
        countNext = countNext - 2

        $prevBtn.trigger('click')
        console.log('Aaa')
      })
    }
    function showtext(i = 1) {
      if (i == 1) {
        createjs.Sound.stop()
        clearTimeout(settimeoutclear)
      }
      if (countNext == 7) {
        $('.innercontentdivclassspeak' + i).animate(
          {
            opacity: 1,
          },
          3000,
          function () {
            if (countNext == 7) {
              sound_player('textaudio' + i)
              current_sound.on('complete', function () {
                if (i == 7) {
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
    function sound_rec_and_play() {
      $('.coverboardfull').append("<p class='recStat'></p>")
      $('.coverboardfull').append("<p class='listenStat'></p>")
      $('.recording').addClass('scale')
      $('.stop').addClass('darkbg')

      $('.recording').click(function () {
        $('.recordpulse').addClass('Rec')
        $('.recording').addClass('noclick')
        $('.recording').removeClass('scale')
        startRecording()
        $('.recStat').animate(
          {
            width: '100%',
          },
          15000,
          function () {
            stopRecording()
            $('.recordpulse').removeClass('Rec')
            $('.stop').removeClass('darkbg')
            $('.stop').removeClass('noclick')
            $('.recording').addClass('darkbg')
            $('.stop').addClass('scale')

            $('.stop').click(function () {
              $('.stop').addClass('noclick')
              $('.speakpulse').addClass('Spk')
              $('.stop').removeClass('scale')
              var audioel = document.getElementById('recorded-audio')
              audioel.play()
              $('.listenStat').animate(
                {
                  width: '100%',
                },
                15000,
                function () {
                  $('.speakpulse').removeClass('Spk')
                  $('audio').remove()
                  $('.recStat').css('width', '0%')
                  $('.listenStat').css('width', '0%')
                  $('.recording').addClass('scale')
                  $('.recording').removeClass('darkbg')
                  $('.recording').removeClass('noclick')
                  $('.stop').addClass('darkbg')
                  nav_button_controls()
                }
              )
            })
          }
        )
      })
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
      } else if (countNext > 0 && countNext == $total_page - 1) {
        $prevBtn.show(0)
        ole.footerNotificationHandler.pageEndSetNotification()
      } else {
        $arrow.show(0)
       
         
      }
    }, delay_ms)
  }
  function sound_player(sound_id) {
    createjs.Sound.stop()
    current_sound = createjs.Sound.play(sound_id)
    current_sound.play()
    current_sound.on('complete', function () {
      // nav_button_controls(0);
    })
  }

  function sound_player_duo(sound_id, sound_id_se) {
    createjs.Sound.stop()
    current_sound = createjs.Sound.play(sound_id)
    current_sound_se = createjs.Sound.play(sound_id_se)
    current_sound.play()
    current_sound.on('complete', function () {
      nav_button_controls(0)
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
