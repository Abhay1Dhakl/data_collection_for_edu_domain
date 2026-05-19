var imgpath = $ref + "/images/sec1/";
var imgpath1 = $ref + "/images/sec1/new/";

var soundAsset = $ref + "/sounds/" + $lang + "/";
var soundAsset1 = $ref + "/sounds/" + $lang + "/alphabets/";

var content = [
  // page 1 for selecting two alphabets
  {
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg",
            imgid: "bg3",
          },
          {
            imgclass: "farmer1",
            imgid: "farmer-gif",
          },
          {
            imgclass: "hand1",
            imgid: "hand-icon",
          },
          
        ],
      },
    ],
 
    imgtextblock: [
      {
        divid: "ant",
        divclass: "antdiv soundonhover clickable",
        imgclass: "imgball",
        imgid: "ant",
        imgsrc: imgpath1 + "ant.png",
        textclass: "",
        textdata: ''
      },
      {
        divid: "apple",
        divclass: "applediv soundonhover clickable",
        imgclass: "imgbat apple",
        imgid: "apple",
        imgsrc: imgpath1 + "apple.png",
        textclass: "",
        textdata: ''
      },
    ],
  speechbox:[
    {
      speechbox: "spbox2",
      textdata: data.string.p1str5,
      imgclass: "",
      textclass: "speechboxtext",
      imgid: "dbox",
    },
  ],
  alphdiv:true,
  alphdiv:[{
    alphimgclass:'alphspkr a',
    alphimgsrc: imgpath + 'speaker.png',
    alphtextclass:'alphtxt',
    alphtextdata: data.string.a,
  }],
  },
  //page 2 for ant
  {
    uppertextblock: [
      {
        textdata: data.string.p1text8,
        textclass: "toptext ttext",
      },
      {
        textdata: data.string.a,
        textclass: "capital single_alpha1",
      },
      {
        textdata: data.string.a,
        textclass: "single_alpha2",
      },
      {
        textdata: data.string.playagain,
        textclass: "play-again",
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg bg1",
            imgid: "canva",
          },
          {
            imgclass: "spkr spkr1-1 a",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr2-1 n",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr3-1 t",
            imgid: "speaker",
          },
        ],
      },
    ],
    imagesliderclass: "slider-items",
    slidertoptxt:'slidertop',
    textdata:data.string.p1str6,
    imageslider: [
      {
        divclass: "item active",
        imgclass: "img1",
        imgid: "ant",
        imgsrc: imgpath1 + "ant.png",
        imgclass1: "speaker",
        imgsrc1: imgpath1 + "speaker.png",
        id: "ant",
        textdivadditionalclass:'popuptextdiv',
        textdiv:[{
          textclass: "slidertext",
          textdata: data.string.a,
        },
        {
          textclass: "slidertext",
          textdata: data.string.n,
        },
        {
          textclass: "slidertext",
          textdata: data.string.t,
        },
      ],
      },
    ],
  },
  //page 3 for apple
  {
    uppertextblock: [
      {
        textdata: data.string.p1text8,
        textclass: "toptext ttext",
      },
      {
        textdata: data.string.a,
        textclass: "capital single_alpha1",
      },
      {
        textdata: data.string.a,
        textclass: "single_alpha2",
      },
      {
        textdata: data.string.playagain,
        textclass: "play-again",
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg bg1",
            imgid: "canva",
          },
          {
            imgclass: "spkr spkr1 a",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr2 p",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr3 p",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr4 l",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr5 e",
            imgid: "speaker",
          },
        ],
      },
    ],
    imagesliderclass: "slider-items",
    slidertoptxt:'slidertop',
    textdata:data.string.p1str6,
    imageslider: [
      {
        divclass: "item active",
        imgclass: "img1",
        imgid: "apple",
        imgsrc: imgpath1 + "apple.png",
        imgclass1: "speaker speaker1",
        imgsrc1: imgpath1 + "speaker.png",
        id: "apple",
        textdivadditionalclass:'popuptextdiv2',
        textdiv:[{
          textclass: "slidertext",
          textdata: data.string.a,
        },
        {
          textclass: "slidertext",
          textdata: data.string.p,
        },
        {
          textclass: "slidertext",
          textdata: data.string.p,
        },
        {
          textclass: "slidertext",
          textdata: data.string.l,
        },
        {
          textclass: "slidertext",
          textdata: data.string.e,
        }
      ],
      },
    ],
  },
   // page 4 for selecting two alphabets
   {
    imageblock: [
      { 
        imagestoshow: [
          {
            imgclass: "bg",
            imgid: "bg3",
          },
          {
            imgclass: "farmer1",
            imgid: "farmer-gif",
          },
        ],
      },
    ],
    imgtextblock: [
      {
        divid: "bee",
        divclass: "antdiv soundonhover clickable",
        imgclass: "imgball",
        imgid: "bee",
        imgsrc: imgpath1 + "bee.png",
        textclass: "",
        textdata: ''
      },
      {
        divid: "bull",
        divclass: "applediv soundonhover clickable",
        imgclass: "imgbat bull",
        imgid: "bull",
        imgsrc: imgpath1 + "bull.png",
        textclass: "",
        textdata: ''
      },
    ],
  speechbox:[
    {
      speechbox: "spbox2",
      textdata: data.string.p1str7,
      imgclass: "",
      textclass: "speechboxtext",
      imgid: "dbox",
    },
  ],
  alphdiv:true,
  alphdiv:[{
    alphimgclass:'alphspkr b',
    alphimgsrc: imgpath + 'speaker.png',
    alphtextclass:'alphtxt',
    alphtextdata: data.string.b,
  }],
  },
  //page 5 for bee
  {
    uppertextblock: [
      {
        textdata: data.string.p1text8,
        textclass: "toptext ttext",
      },
      {
        textdata: data.string.b,
        textclass: "capital single_alpha1",
      },
      {
        textdata: data.string.b,
        textclass: "single_alpha2",
      },
      {
        textdata: data.string.playagain,
        textclass: "play-again",
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg bg1",
            imgid: "canva",
          },
          {
            imgclass: "spkr spkr1-1 b",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr2-1 e",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr3-1 e",
            imgid: "speaker",
          },
        ],
      },
    ],
    imagesliderclass: "slider-items",
    slidertoptxt:'slidertop',
    textdata:data.string.p1str6,
    imageslider: [
      {
        divclass: "item active",
        imgclass: "img1",
        imgid: "bee",
        imgsrc: imgpath1 + "bee.png",
        imgclass1: "speaker speaker2",
        imgsrc1: imgpath1 + "speaker.png",
        id: "bee",
        textdivadditionalclass:'popuptextdiv',
        textdiv:[{
          textclass: "slidertext",
          textdata: data.string.b,
        },
        {
          textclass: "slidertext",
          textdata: data.string.e,
        },
        {
          textclass: "slidertext",
          textdata: data.string.e,
        },
      ],
      },
    ],
  },
  //page 6 for bull
  {
    uppertextblock: [
      {
        textdata: data.string.p1text8,
        textclass: "toptext ttext",
      },
      {
        textdata: data.string.b,
        textclass: "capital single_alpha1",
      },
      {
        textdata: data.string.b,
        textclass: "single_alpha2",
      },
      {
        textdata: data.string.playagain,
        textclass: "play-again",
      },
      
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg bg1",
            imgid: "canva",
          },
          {
            imgclass: "spkr spkr4-1 b",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr4-2 u",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr4-3 l",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr4-4 l",
            imgid: "speaker",
          },
         
        ],
      },
    ],
    imagesliderclass: "slider-items",
    slidertoptxt:'slidertop',
    textdata:data.string.p1str6,
    imageslider: [
      {
        divclass: "item active",
        imgclass: "img1",
        imgid: "bull",
        imgsrc: imgpath1 + "bull.png",
        imgclass1: "speaker speaker2",
        imgsrc1: imgpath1 + "speaker.png",
        id: "bull",
        textdivadditionalclass:'popuptextdiv3',
        textdiv:[{
          textclass: "slidertext",
          textdata: data.string.b,
        },
        {
          textclass: "slidertext",
          textdata: data.string.u,
        },
        {
          textclass: "slidertext",
          textdata: data.string.l,
        },
        {
          textclass: "slidertext",
          textdata: data.string.l,
        },
      ],
      },
    ],
  },
  // page 7 for selecting two alphabets
  {
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg",
            imgid: "bg3",
          },
          {
            imgclass: "farmer1",
            imgid: "farmer-gif",
          },
        ],
      },
    ],
    imgtextblock: [
      {
        divid: "cow",
        divclass: "antdiv soundonhover clickable",
        imgclass: "imgball",
        imgid: "cow",
        imgsrc: imgpath1 + "cow.png",
        textclass: "",
        textdata: ''
      },
      {
        divid: "corn",
        divclass: "applediv soundonhover clickable",
        imgclass: "imgbat corn",
        imgid: "corn",
        imgsrc: imgpath1 + "corn.png",
        textclass: "",
        textdata: ''
      },
    ],
  speechbox:[
    {
      speechbox: "spbox2",
      textdata: data.string.p1str8,
      imgclass: "",
      textclass: "speechboxtext",
      imgid: "dbox",
    },
  ],
  alphdiv:true,
  alphdiv:[{
    alphimgclass:'alphspkr c',
    alphimgsrc: imgpath + 'speaker.png',
    alphtextclass:'alphtxt',
    alphtextdata: data.string.c,
  }],
  },
  //page 8 for cow
   {
    uppertextblock: [
      {
        textdata: data.string.p1text8,
        textclass: "toptext ttext",
      },
      {
        textdata: data.string.c,
        textclass: "capital single_alpha1",
      },
      {
        textdata: data.string.c,
        textclass: "single_alpha2",
      },
      {
        textdata: data.string.playagain,
        textclass: "play-again",
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg bg1",
            imgid: "canva",
          },
          {
            imgclass: "spkr spkr1-1 c",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr2-1 o",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr3-1 w",
            imgid: "speaker",
          },
        ],
      },
    ],
    imagesliderclass: "slider-items",
    slidertoptxt:'slidertop',
    textdata:data.string.p1str6,
    imageslider: [
      {
        divclass: "item active",
        imgclass: "img1",
        imgid: "cow",
        imgsrc: imgpath1 + "cow.png",
        imgclass1: "speaker speaker3",
        imgsrc1: imgpath1 + "speaker.png",
        id: "cow",
        textdivadditionalclass:'popuptextdiv',
        textdiv:[{
          textclass: "slidertext",
          textdata: data.string.c,
        },
        {
          textclass: "slidertext",
          textdata: data.string.o,
        },
        {
          textclass: "slidertext",
          textdata: data.string.w,
        },
      ],
      },
    ],
  },
  //page 9 for corn
  {
    uppertextblock: [
      {
        textdata: data.string.p1text8,
        textclass: "toptext ttext",
      },
      {
        textdata: data.string.c,
        textclass: "capital single_alpha1",
      },
      {
        textdata: data.string.c,
        textclass: "single_alpha2",
      },
      {
        textdata: data.string.playagain,
        textclass: "play-again",
      },
      
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg bg1",
            imgid: "canva",
          },
          {
            imgclass: "spkr spkr4-1 c",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr4-2 o",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr4-3 r",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr4-4 n",
            imgid: "speaker",
          },
         
        ],
      },
    ],
    imagesliderclass: "slider-items",
    slidertoptxt:'slidertop',
    textdata:data.string.p1str6,
    imageslider: [
      {
        divclass: "item active",
        imgclass: "img1",
        imgid: "corn",
        imgsrc: imgpath1 + "corn.png",
        imgclass1: "speaker speaker3",
        imgsrc1: imgpath1 + "speaker.png",
        id: "corn",
        textdivadditionalclass:'popuptextdiv4',
        textdiv:[{
          textclass: "slidertext",
          textdata: data.string.c,
        },
        {
          textclass: "slidertext",
          textdata: data.string.o,
        },
        {
          textclass: "slidertext",
          textdata: data.string.r,
        },
        {
          textclass: "slidertext",
          textdata: data.string.n,
        },
      ],
      },
    ],
  },
  // page 10 for selecting two alphabets
  {
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg",
            imgid: "bg3",
          },
          {
            imgclass: "farmer1",
            imgid: "farmer-gif",
          },
        ],
      },
    ],
    imgtextblock: [
      {
        divid: "dog",
        divclass: "antdiv soundonhover clickable",
        imgclass: "imgball",
        imgid: "dog",
        imgsrc: imgpath1 + "dog.png",
        textclass: "",
        textdata: ''
      },
      {
        divid: "donkey",
        divclass: "applediv soundonhover clickable",
        imgclass: "imgball",
        imgid: "donkey",
        imgsrc: imgpath1 + "donkey.png",
        textclass: "",
        textdata: ''
      },
    ],
  speechbox:[
    {
      speechbox: "spbox2",
      textdata: data.string.p1str9,
      imgclass: "",
      textclass: "speechboxtext",
      imgid: "dbox",
    },
  ],
  alphdiv:true,
  alphdiv:[{
    alphimgclass:'alphspkr d',
    alphimgsrc: imgpath + 'speaker.png',
    alphtextclass:'alphtxt',
    alphtextdata: data.string.d,
  }],
  },
  //page 11 for dog
  {
    uppertextblock: [
      {
        textdata: data.string.p1text8,
        textclass: "toptext ttext",
      },
      {
        textdata: data.string.d,
        textclass: "capital single_alpha1",
      },
      {
        textdata: data.string.d,
        textclass: "single_alpha2",
      },
      {
        textdata: data.string.playagain,
        textclass: "play-again",
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg bg1",
            imgid: "canva",
          },
          {
            imgclass: "spkr spkr1-1 d",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr2-1 o",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr3-1 g",
            imgid: "speaker",
          },
        ],
      },
    ],
    imagesliderclass: "slider-items",
    slidertoptxt:'slidertop',
    textdata:data.string.p1str6,
    imageslider: [
      {
        divclass: "item active",
        imgclass: "img1",
        imgid: "dog",
        imgsrc: imgpath1 + "dog.png",
        imgclass1: "speaker speaker4",
        imgsrc1: imgpath1 + "speaker.png",
        id: "dog",
        textdivadditionalclass:'popuptextdiv2',
        textdiv:[{
          textclass: "slidertext",
          textdata: data.string.d,
        },
        {
          textclass: "slidertext",
          textdata: data.string.o,
        },
        {
          textclass: "slidertext",
          textdata: data.string.g,
        },
      ],
      },
    ],
  },
  //page 12 for donkey
  {
    uppertextblock: [
      {
        textdata: data.string.p1text8,
        textclass: "toptext ttext",
      },
      {
        textdata: data.string.d,
        textclass: "capital single_alpha1",
      },
      {
        textdata: data.string.d,
        textclass: "single_alpha2",
      },
      {
        textdata: data.string.playagain,
        textclass: "play-again",
      },
      
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg bg1",
            imgid: "canva",
          },
          {
            imgclass: "spkr spkr6-1 d",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr6-2 o",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr6-3 n",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr6-4 k",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr6-5 e",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr6-6 y",
            imgid: "speaker",
          },
         
        ],
      },
    ],
    imagesliderclass: "slider-items",
    slidertoptxt:'slidertop',
    textdata:data.string.p1str6,
    imageslider: [
      {
        divclass: "item active",
        imgclass: "img1",
        imgid: "donkey",
        imgsrc: imgpath1 + "donkey.png",
        imgclass1: "speaker speaker4",
        imgsrc1: imgpath1 + "speaker.png",
        id: "donkey",
        textdivadditionalclass:'popuptextdiv2 popuptextdiv2-1',
        textdiv:[{
          textclass: "slidertext fs-7",
          textdata: data.string.d,
        },
        {
          textclass: "slidertext fs-7",
          textdata: data.string.o,
        },
        {
          textclass: "slidertext fs-7",
          textdata: data.string.n,
        },
        {
          textclass: "slidertext fs-7",
          textdata: data.string.k,
        },
        {
          textclass: "slidertext fs-7",
          textdata: data.string.e,
        },
        {
          textclass: "slidertext fs-7",
          textdata: data.string.y,
        },
      ],
      },
    ],
  },
  // page 13 for selecting two alphabets
  {
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg",
            imgid: "bg3",
          },
          {
            imgclass: "farmer1",
            imgid: "farmer-gif",
          },
        ],
      },
    ],
    imgtextblock: [
      {
        divid: "egg",
        divclass: "eggdiv soundonhover clickable",
        imgclass: "imgball",
        imgid: "egg",
        imgsrc: imgpath1 + "egg.png",
        textclass: "",
        textdata: ''
      },
      {
        divid: "eagle",
        divclass: "eaglediv soundonhover clickable",
        imgclass: "imgball eagle",
        imgid: "eagle",
        imgsrc: imgpath1 + "eagle.png",
        textclass: "",
        textdata: ''
      },
    ],
  speechbox:[
    {
      speechbox: "spbox2",
      textdata: data.string.p1str10,
      imgclass: "",
      textclass: "speechboxtext",
      imgid: "dbox",
    },
  ],
  alphdiv:true,
  alphdiv:[{
    alphimgclass:'alphspkr e',
    alphimgsrc: imgpath + 'speaker.png',
    alphtextclass:'alphtxt',
    alphtextdata: data.string.e,
  }],
  },
   //page 14 for egg
   {
    uppertextblock: [
      {
        textdata: data.string.p1text8,
        textclass: "toptext ttext",
      },
      {
        textdata: data.string.e,
        textclass: "capital single_alpha1",
      },
      {
        textdata: data.string.e,
        textclass: "single_alpha2",
      },
      {
        textdata: data.string.playagain,
        textclass: "play-again",
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg bg1",
            imgid: "canva",
          },
          {
            imgclass: "spkr spkr1-1 e",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr2-1 g",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr3-1 g",
            imgid: "speaker",
          },
        ],
      },
    ],
    imagesliderclass: "slider-items",
    slidertoptxt:'slidertop',
    textdata:data.string.p1str6,
    imageslider: [
      {
        divclass: "item active",
        imgclass: "img1",
        imgid: "egg",
        imgsrc: imgpath1 + "egg.png",
        imgclass1: "speaker speaker4",
        imgsrc1: imgpath1 + "speaker.png",
        id: "egg",
        textdivadditionalclass:'popuptextdiv2',
        textdiv:[{
          textclass: "slidertext",
          textdata: data.string.e,
        },
        {
          textclass: "slidertext",
          textdata: data.string.g,
        },
        {
          textclass: "slidertext",
          textdata: data.string.g,
        },
      ],
      },
    ],
  },
  //page 15 for eagle
  {
    uppertextblock: [
      {
        textdata: data.string.p1text8,
        textclass: "toptext ttext",
      },
      {
        textdata: data.string.e,
        textclass: "capital single_alpha1",
      },
      {
        textdata: data.string.e,
        textclass: "single_alpha2",
      },
      {
        textdata: data.string.playagain,
        textclass: "play-again",
      },
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg bg1",
            imgid: "canva",
          },
          {
            imgclass: "spkr spkr1 e",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr2 a",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr3 g",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr4 l",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr5 e",
            imgid: "speaker",
          },
        ],
      },
    ],
    imagesliderclass: "slider-items",
    slidertoptxt:'slidertop',
    textdata:data.string.p1str6,
    imageslider: [
      {
        divclass: "item active",
        imgclass: "img1",
        imgid: "eagle",
        imgsrc: imgpath1 + "eagle.png",
        imgclass1: "speaker",
        imgsrc1: imgpath1 + "speaker.png",
        id: "eagle",
        textdivadditionalclass:'popuptextdiv4',
        textdiv:[{
          textclass: "slidertext",
          textdata: data.string.e,
        },
        {
          textclass: "slidertext",
          textdata: data.string.a,
        },
        {
          textclass: "slidertext",
          textdata: data.string.g,
        },
        {
          textclass: "slidertext",
          textdata: data.string.l,
        },
        {
          textclass: "slidertext",
          textdata: data.string.e,
        }
      ],
      },
    ],
  },
   // page 16 for selecting two alphabets
   {
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg",
            imgid: "bg3",
          },
          {
            imgclass: "farmer1",
            imgid: "farmer-gif",
          },
        ],
      },
    ],
    imgtextblock: [
      {
        divid: "frog",
        divclass: "frogdiv soundonhover clickable",
        imgclass: "imgball",
        imgid: "frog",
        imgsrc: imgpath1 + "frog.png",
        textclass: "",
        textdata: ''
      },
      {
        divid: "flower",
        divclass: "flowerdiv soundonhover clickable",
        imgclass: "imgbat corn",
        imgid: "flower",
        imgsrc: imgpath1 + "flower.png",
        textclass: "",
        textdata: ''
      },
    ],
  speechbox:[
    {
      speechbox: "spbox2",
      textdata: data.string.p1str11,
      imgclass: "",
      textclass: "speechboxtext",
      imgid: "dbox",
    },
  ],
  alphdiv:true,
  alphdiv:[{
    alphimgclass:'alphspkr f',
    alphimgsrc: imgpath + 'speaker.png',
    alphtextclass:'alphtxt',
    alphtextdata: data.string.f,
  }],
  },
   //page 17 for frog
   {
    uppertextblock: [
      {
        textdata: data.string.p1text8,
        textclass: "toptext ttext",
      },
      {
        textdata: data.string.f,
        textclass: "capital single_alpha1",
      },
      {
        textdata: data.string.f,
        textclass: "single_alpha2",
      },
      {
        textdata: data.string.playagain,
        textclass: "play-again",
      },
      
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg bg1",
            imgid: "canva",
          },
          {
            imgclass: "spkr spkr4-1 f",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr4-2 r",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr4-3 o",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr4-4 g",
            imgid: "speaker",
          },
         
        ],
      },
    ],
    imagesliderclass: "slider-items",
    slidertoptxt:'slidertop',
    textdata:data.string.p1str6,
    imageslider: [
      {
        divclass: "item active",
        imgclass: "img1",
        imgid: "frog",
        imgsrc: imgpath1 + "frog.png",
        imgclass1: "speaker speaker3",
        imgsrc1: imgpath1 + "speaker.png",
        id: "frog",
        textdivadditionalclass:'popuptextdiv2 popuptextdiv3-1',
        textdiv:[{
          textclass: "slidertext frogtxt fs-7",
          textdata: data.string.f,
        },
        {
          textclass: "slidertext frogtxt fs-7",
          textdata: data.string.r,
        },
        {
          textclass: "slidertext frogtxt fs-7",
          textdata: data.string.o,
        },
        {
          textclass: "slidertext frogtxt fs-7",
          textdata: data.string.g,
        },
      ],
      },
    ],
  },
  //page 18 for flower
  {
    uppertextblock: [
      {
        textdata: data.string.p1text8,
        textclass: "toptext ttext",
      },
      {
        textdata: data.string.f,
        textclass: "capital single_alpha1",
      },
      {
        textdata: data.string.f,
        textclass: "single_alpha2",
      },
      {
        textdata: data.string.playagain,
        textclass: "play-again",
      },
      
    ],
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg bg1",
            imgid: "canva",
          },
          {
            imgclass: "spkr spkr6-1 f",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr6-2 l",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr6-3 o",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr6-4 w",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr6-5 e",
            imgid: "speaker",
          },
          {
            imgclass: "spkr spkr6-6 r",
            imgid: "speaker",
          },
         
        ],
      },
    ],
    imagesliderclass: "slider-items",
    slidertoptxt:'slidertop',
    textdata:data.string.p1str6,
    imageslider: [
      {
        divclass: "item active",
        imgclass: "img1",
        imgid: "flower",
        imgsrc: imgpath1 + "flower.png",
        imgclass1: "speaker speaker4",
        imgsrc1: imgpath1 + "speaker.png",
        id: "flower",
        textdivadditionalclass:'popuptextdiv2 popuptextdiv4-1',
        textdiv:[{
          textclass: "slidertext flowertxt",
          textdata: data.string.f,
        },
        {
          textclass: "slidertext flowertxt",
          textdata: data.string.l,
        },
        {
          textclass: "slidertext flowertxt",
          textdata: data.string.o,
        },
        {
          textclass: "slidertext flowertxt",
          textdata: data.string.w,
        },
        {
          textclass: "slidertext flowertxt",
          textdata: data.string.e,
        },
        {
          textclass: "slidertext flowertxt",
          textdata: data.string.r,
        },
      ],
      },
    ],
  },
];

$(function () {
  var $board = $(".board");
  var $nextBtn = $("#activity-page-next-btn-enabled");
  var $prevBtn = $("#activity-page-prev-btn-enabled");
  var $refreshBtn = $("#activity-page-refresh-btn");
  var countNext = 0;
  
  var clicked = 0;
  var sound_to_play = 0;
  var next_enable = 0;

  var $total_page = content.length;
  loadTimelineProgress($total_page, countNext + 1);

  var vocabcontroller = new Vocabulary();
  vocabcontroller.init();

  var preload;
  var timeoutvar = null;
  var current_sound;
  var removetimeout;

  function init() {
    manifest = [
      {id: "cover",src: imgpath1+ "cover_page.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "bg2",src: imgpath1+ "sec1_farmer_s_bg.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "bg3",src: imgpath1+ "farmer_s_bg2_without_farmer.png",type: createjs.AbstractLoader.IMAGE,},

      {id: "apple",src: imgpath1+ "apple.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "ant",src: imgpath1+ "ant.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "bee",src: imgpath1+ "bee.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "bull",src: imgpath1+ "bull.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "cow",src: imgpath1+ "cow.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "corn",src: imgpath1+ "corn.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "dog",src: imgpath1+ "dog.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "donkey",src: imgpath1+ "donkey.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "egg",src: imgpath1+ "egg.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "eagle",src: imgpath1+ "eagle.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "frog",src: imgpath1+ "frog.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "flower",src: imgpath1+ "flower.png",type: createjs.AbstractLoader.IMAGE,},

      {id: "speaker",src: imgpath1+ "speaker.png",type: createjs.AbstractLoader.IMAGE,},
      
      {id: "teacher-gif",src: imgpath1+ "teacher_talking_gif.gif",type: createjs.AbstractLoader.IMAGE,},
      {id: "teacher-png",src: imgpath1+ "teacher_talking_png.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "students",src: imgpath1+ "students.png",type: createjs.AbstractLoader.IMAGE,},
      
      {id: "farmer-gif",src: imgpath1+ "farmer_talking_gif.gif",type: createjs.AbstractLoader.IMAGE,},
      {id: "farmer-png",src: imgpath1+ "farmer_talking_png.png",type: createjs.AbstractLoader.IMAGE,},

      {id: "hand-icon",src: imgpath1+ "hand.gif",type: createjs.AbstractLoader.IMAGE,},

      {id: "dbox",src: imgpath1+ "dialoguebox1.png",type: createjs.AbstractLoader.IMAGE,},
      
      
// ============================================================================
      {
        id: "bg",
        src: imgpath + "bg.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "sec1",
        src: imgpath + "sec1.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "slide4",
        src: imgpath + "background.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "canva",
        src: imgpath + "canva.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "slide5",
        src: imgpath + "background.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "slide22",
        src: imgpath + "slide22.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "mother",
        src: imgpath + "mother.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "pasang",
        src: imgpath + "pasang.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "puppy",
        src: imgpath + "puppy.gif",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "pasangmother",
        src: imgpath + "pasangmother.gif",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "pasang_walking",
        src: imgpath + "pasang_walking.gif",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "flyingbirds",
        src: imgpath + "flying-birds.gif",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "bird01",
        src: imgpath + "bird01.gif",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "cricket",
        src: imgpath + "cricket.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "tree",
        src: imgpath + "tree.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "flower",
        src: imgpath + "flower.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "bench",
        src: imgpath + "bench.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "textbox",
        src: imgpath + "textbox.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "handicon",
        src: imgpath + "handicon.gif",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "ball",
        src: imgpath + "ball.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "bat",
        src: imgpath + "bat.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "girlwithballoon",
        src: imgpath + "girlwithballoon.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "balloon_red",
        src: imgpath + "balloon_red.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      {
        id: "bird",
        src: imgpath + "bird.png",
        type: createjs.AbstractLoader.IMAGE,
      },
      
      
      { id: "listen_repeat", src: soundAsset + "p1text8.mp3" },
      { id: "p1text0", src: soundAsset + "p1str5.mp3" },
      { id: "p1text3", src: soundAsset + "p1str7.mp3" },
      { id: "p1text6", src: soundAsset + "p1str8.mp3" },
      { id: "p1text9", src: soundAsset + "p1str9.mp3" },
      { id: "p1text12", src: soundAsset + "p1str10.mp3" },
      { id: "p1text15", src: soundAsset + "p1str11.mp3" },
    
      { id: "p1text1sub", src: soundAsset + "p1str6.mp3" },      


      { id: "ant", src: soundAsset + "ant.mp3" },
      { id: "apple", src: soundAsset + "apple.mp3" },
      { id: "bee", src: soundAsset + "bee.mp3" },
      { id: "bull", src: soundAsset + "bull.mp3" },
      { id: "cow", src: soundAsset + "cow.mp3" },
      { id: "corn", src: soundAsset + "corn.mp3" },
      { id: "dog", src: soundAsset + "dog.mp3" },
      { id: "donkey", src: soundAsset + "donkey.mp3" },
      { id: "egg", src: soundAsset + "egg.mp3" },
      { id: "eagle", src: soundAsset + "eagle.mp3" },
      { id: "frog", src: soundAsset + "frog.mp3" },
      { id: "flower", src: soundAsset + "flower.mp3" },

      // alphabets sounds
      { id: "sound_a", src: soundAsset1 + "a.mp3" },
      { id: "sound_b", src: soundAsset1 + "b.mp3" },
      { id: "sound_c", src: soundAsset1 + "c.mp3" },
      { id: "sound_d", src: soundAsset1 + "d.mp3" },
      { id: "sound_e", src: soundAsset1 + "e.mp3" },
      { id: "sound_f", src: soundAsset1 + "f.mp3" },
      { id: "sound_g", src: soundAsset1 + "g.mp3" },
      { id: "sound_h", src: soundAsset1 + "h.mp3" },
      { id: "sound_i", src: soundAsset1 + "i.mp3" },
      { id: "sound_j", src: soundAsset1 + "j.mp3" },
      { id: "sound_k", src: soundAsset1 + "k.mp3" },
      { id: "sound_l", src: soundAsset1 + "l.mp3" },
      { id: "sound_m", src: soundAsset1 + "m.mp3" },
      { id: "sound_n", src: soundAsset1 + "n.mp3" },
      { id: "sound_o", src: soundAsset1 + "o.mp3" },
      { id: "sound_p", src: soundAsset1 + "p.mp3" },
      { id: "sound_q", src: soundAsset1 + "q.mp3" },
      { id: "sound_r", src: soundAsset1 + "r.mp3" },
      { id: "sound_s", src: soundAsset1 + "s.mp3" },
      { id: "sound_t", src: soundAsset1 + "t.mp3" },
      { id: "sound_u", src: soundAsset1 + "u.mp3" },
      { id: "sound_v", src: soundAsset1 + "v.mp3" },
      { id: "sound_w", src: soundAsset1 + "w.mp3" },
      { id: "sound_x", src: soundAsset1 + "x.mp3" },
      { id: "sound_y", src: soundAsset1 + "y.mp3" },
      { id: "sound_z", src: soundAsset1 + "z.mp3" },
    ];
    preload = new createjs.LoadQueue(false);
    preload.installPlugin(createjs.Sound);
    preload.on("progress", handleProgress);
    preload.on("complete", handleComplete);
    preload.on("fileload", handleFileLoad);
    preload.loadManifest(manifest, true);
  }

  function handleFileLoad(event) {}

  function handleProgress(event) {
    $("#loading-text").html(parseInt(event.loaded * 100) + "%");
  }

  function handleComplete(event) {
    $("#loading-wrapper").hide(0);

    current_sound = createjs.Sound.play("sound_1");
    current_sound.stop();

    templateCaller();
  }

  init();

  Handlebars.registerPartial("textcontent", $("#textcontent-partial").html());
  Handlebars.registerPartial("imagecontent", $("#imagecontent-partial").html());

  function navigationcontroller(islastpageflag) {
    typeof islastpageflag === "undefined"
      ? (islastpageflag = false)
      : typeof islastpageflag != "boolean"
      ? alert(
          "NavigationController : Hi Master, please provide a boolean parameter"
        )
      : null;
  }

  function generaltemplate() {
    var source = $("#general-template").html();
    var template = Handlebars.compile(source);
    var html = template(content[countNext]);
    $board.html(html);

    texthighlight($board);

    vocabcontroller.findwords(countNext);
    put_image(content, countNext);
    put_speechbox_image(content, countNext);
    put_imgtextblock(content, countNext);
    put_imageslider(content, countNext);

    switch (countNext) {
        case 0:
        case 3:
        case 6:
        case 9:
        case 12:
        case 15:
          if(sound_to_play == 0){

            sound_player("p1text"+countNext);
            current_sound.on('complete',function(){
              show_alpha_block();
            })
          }
        // console.log("p1text"+countNext);
          else{
            show_alpha_block();
          }
        break;
      case 1:
        case 2:
        if(next_enable == 1){
          sound_player("listen_repeat");
          current_sound.on("complete",function(){
            inside_aplha_block();
          })
        }
        else{
          inside_aplha_block()
        }
      slider();
        break;


        case 4:
        case 5:
        case 7:
        case 8:
        case 10:
        case 11:
        case 13:
        case 14:
        case 16:
        case 17: 
        inside_aplha_block();
        slider();
        break;
      default:
        break;
    }



    
  }

  function texthighlight($highlightinside) {
    typeof $highlightinside !== "object"
      ? alert(
          "Texthighlight : Hi Master, Please pass me a Jquery Object whose child are to be highlighted"
        )
      : null;

    var $alltextpara = $highlightinside.find("*[data-highlight='true']");
    var stylerulename;
    var replaceinstring;
    var texthighlightstarttag;
    var texthighlightendtag = "</span>";
    if ($alltextpara.length > 0) {
      $.each($alltextpara, function (index, val) {
        $(this).attr("data-highlightcustomclass")
          ? (stylerulename = $(this).attr("data-highlightcustomclass"))
          : (stylerulename = "parsedstring");

        texthighlightstarttag = "<span class='" + stylerulename + "'>";
        replaceinstring = $(this).html();
        replaceinstring = replaceinstring.replace(/#/g, texthighlightstarttag);
        replaceinstring = replaceinstring.replace(/@/g, texthighlightendtag);
        $(this).html(replaceinstring);
      });
    }
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

  function sound_player(sound_id, next) {
    createjs.Sound.stop();
    current_sound = createjs.Sound.play(sound_id);
    current_sound.play();
    current_sound.on("complete", function () {});
  }

  function sound_player_duo(sound_id, sound_id_2) {
    createjs.Sound.stop();
    current_sound = createjs.Sound.play(sound_id);

    current_sound.play();
    current_sound.on("complete", function () {
      sound_player(sound_id_2);
    });
  }

  function put_image(content, count) {
    if (content[count].hasOwnProperty("imageblock")) {
      var imageblock = content[count].imageblock[0];
      if (imageblock.hasOwnProperty("imagestoshow")) {
        var imageClass = imageblock.imagestoshow;
        for (var i = 0; i < imageClass.length; i++) {
          var image_src = preload.getResult(imageClass[i].imgid).src;

          var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
          var selector = "." + classes_list[classes_list.length - 1];
          $(selector).attr("src", image_src);
        }
      }
    }
  }

  /**
   * TODO
   * This function is not used
   */
  function put_speechbox_image(content, count) {
    if (content[count].hasOwnProperty("speechbox")) {
      var speechbox = content[count].speechbox;
      for (var i = 0; i < speechbox.length; i++) {
        var image_src = preload.getResult(speechbox[i].imgid).src;

        var classes_list = speechbox[i].speechbox.match(/\S+/g) || [];
        var selector =
          "." + classes_list[classes_list.length - 1] + ">.speechbg";

        $(selector).attr("src", image_src);
      }
    }
  }

  function put_imageslider(content, count) {
    if (content[count].hasOwnProperty("imageslider")) {
      var imageblock = content[count].imageslider;
      var imageClass = imageblock;
      for (var i = 0; i < imageClass.length; i++) {
        var image_src = preload.getResult(imageClass[i].imgid).src;

        var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
        var selector = "." + classes_list[classes_list.length - 1];
        $(selector).attr("src", image_src);
      }
    }
  }
  function put_imgtextblock(content, count) {
    if (content[count].hasOwnProperty("imgtextblock")) {
      var imageblock = content[count].imgtextblock;
      var imageClass = imageblock;
      for (var i = 0; i < imageClass.length; i++) {
        var image_src = preload.getResult(imageClass[i].imgid).src;

        var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
        var selector = "." + classes_list[classes_list.length - 1];
        $(selector).attr("src", image_src);
      }
    }
  }

  function templateCaller() {
    $prevBtn.css("display", "none");
    $nextBtn.css("display", "none");

    if (countNext == 0) navigationcontroller();

    generaltemplate();
    loadTimelineProgress($total_page, countNext + 1);
  }

  $nextBtn.on("click", function () {
    $(".bg2,.tree,.flower,.bird,.flyingbirds,.sbox,.sbox2").clearQueue();
    sound_to_play = 0;
    createjs.Sound.stop();
    clearTimeout(timeoutvar);
    clearTimeout(removetimeout);
    switch (countNext) {
      default:
        countNext++;
        templateCaller();
        break;
    }
  });

  $refreshBtn.click(function () {
    templateCaller();
    clearTimeout(removetimeout);
  });

  $prevBtn.on("click", function () {
    sound_to_play = 0;
    createjs.Sound.stop();
    clearTimeout(timeoutvar);
    clearTimeout(removetimeout);
    countNext--;
    templateCaller();

    countNext < $total_page
      ? ole.footerNotificationHandler.hideNotification()
      : null;
  });



  function showalphabet(){
    $(".alphadiv").fadeIn(1000);
    console.log(clicked,sound_to_play)
    $(".imgtextblock").animate({'opacity':'1'},1000);
    // if(countNext == 0){
    //   $(".hand1").fadeIn(1200);
     
    // }
    setTimeout(function(){
      $(".clickable").css('pointer-events','auto');
    });
    
      $(".clickable").click(function(){
       next_enable++;
        // clicked++;
        console.log(next_enable)


       

        var alph_word =  $(this).attr("id");
        console.log(alph_word);
        if(alph_word == "ant"){
          clicked = clicked + 1;
          console.log(clicked);
          countNext = 1;
          templateCaller();
        }
        else if(alph_word == "apple"){
          clicked = clicked + 2;
          console.log(clicked);
          countNext = 2;
          templateCaller();
        }
        else if(alph_word == "bee"){
          countNext = 4;
          clicked = clicked + 1;
          templateCaller();
        }
        else if(alph_word == "bull"){
          countNext = 5;
          clicked = clicked + 2;
          templateCaller();
        }
        else if(alph_word == "cow"){
          countNext = 7;
          clicked = clicked + 1;
          templateCaller();
        }
        else if(alph_word == "corn"){
          countNext = 8;
          clicked = clicked + 2;
          templateCaller();
        }
        else if(alph_word == "dog"){
          countNext = 10;
          clicked = clicked + 1;
          templateCaller();
        }
        else if(alph_word == "donkey"){
          countNext = 11;
          clicked = clicked + 2;
          templateCaller();
        }
        else if(alph_word == "egg"){
          countNext = 13;
          clicked = clicked + 1;
          templateCaller();
        }
        else if(alph_word == "eagle"){
          countNext = 14;
          clicked = clicked + 2;
          templateCaller();
        }
        else if(alph_word == "frog"){
          countNext = 16;
          clicked = clicked + 1;
          templateCaller();
        }
        else if(alph_word == "flower"){
          countNext = 17;
          clicked = clicked + 2;
          templateCaller();
        }
      })
    
  }

  function popupblock() {
    var closeCount = 0;
    $(".clickable").click(function () {
      $(".popupblock").css("display", "flex");
      $(
        ".pasangmother,.pasang_walking,.cricket,.handicon,.sbox2,.sbox,.bench,.ballimg"
      ).hide();
      var clickid = $(this).attr("id");
      sound_player(clickid);
      $(".popuptext").text(clickid);
      $(".popupimg").addClass(clickid + "imgpop");
      if (clickid == "bird") {
        $(".popupimg").attr("src", imgpath + clickid + ".gif");
      } else {
        $(".popupimg").attr("src", imgpath + clickid + ".png");
      }
    });
    $(".closediv").click(function () {
      createjs.Sound.stop();
      $(".popupblock").css("display", "none");
      $(".pasangmother,.pasang_walking,.cricket").show();
      $(".cricket").removeClass("slideani");

      $(".balloon").animate({ top: "-25%" }, 4000, function () {
        $(".girlwithballoon").attr("src", imgpath + "asha02.png");
      });
      $(".handicons4_1").hide();
      $(".birdclick").css("pointer-events", "auto");

      closeCount++;
      if (closeCount == 1) {
        $(".handicons4_2").show();
        if (countNext == 1) {
          removetimeout = setTimeout(function () {
            $(".sbox3").show();
            sound_player("p1text9");
            current_sound.on("complete", function () {
              removetimeout = setTimeout(function () {
                $(".sbox4").show();
                sound_player("p1text10");
                current_sound.on("complete", function () {
                  $(".cricket").attr("src", imgpath + "cricket.gif");
                  removetimeout = setTimeout(function () {
                    $(".sbox3,.sbox4").hide();
                    $(".ballimg,.handicon2").show();
                    $(".cricket").attr("src", imgpath + "cricket.png");
                  }, 3000);
                });
              }, 1000);
            });
          }, 1000);
        }
      }
      if (closeCount == 2) {
        if (countNext == 3) {
          $(".handicons4_2").hide();
          $(".birds4").animate({ right: "100%" }, 9000);
          removetimeout = setTimeout(function () {
            $(".toptext").hide();
            $(".sboxs4").show();
            sound_player("p1text7");
            current_sound.on("complete", function () {
              nav_button_controls(100);
            });
          }, 2000);
        } else {
          $(".ballimg,.handicon2").hide();
          nav_button_controls(100);
        }
      }
    });
  }

  function playonhover() {
    $(".soundonhover").hover(function () {
      var hoverid = $(this).attr("id");
      sound_player(hoverid);
    });
  }

  function slider() {
    var slides = document.querySelector(".slider-items").children;
    var nextSlide = document.querySelector(".right-slide");
    var prevSlide = document.querySelector(".left-slide");
    var totalSlides = slides.length;
    var index = 0;
    nextclickcount = 0;
    // current_sound.on("complete", () => {
    //   current_sound = createjs.Sound.play($(".item.active").attr("id"));
    //   // current_sound.play();
    // });
    $(".speaker").click(function(){
      $(".play-again").fadeIn(1000);
      $(".play-again").click(function(){
        sound_to_play++;
        console.log(clicked,sound_to_play)
        if (clicked == 2){
            console.log(clicked);
            countNext = countNext - 2;
            templateCaller();
            clicked = 0 ;
           
        }else if(clicked == 1){
          $(".plagain1").click(function(){
            $(".hand1").addClass("hand2")
          });
          countNext = countNext - 1;
          clicked = 0;
          templateCaller();
          console.log(clicked);
        }

        if(next_enable == 2){
          console.log(next_enable);
          nav_button_controls(0);
          countNext = countNext + 2;
          next_enable = 0;
        }
        
      })
    });
  //   $(".speaker2").click(function(){
  //     $(".play-again").fadeIn(1000);
  //     $(".play-again").click(function(){
  //       countNext = 8;
  //       templateCaller();
  //     })
  //   })

  // $(".speaker3").click(function(){
  //       $(".play-again").fadeIn(1000);
  //       $(".play-again").click(function(){
  //         countNext = 11;
  //         templateCaller();
  //       })
  //     })

  //     $(".speaker4").click(function(){
  //       $(".play-again").fadeIn(1000);
  //       $(".play-again").click(function(){
  //         countNext = 14;
  //         templateCaller();
  //       })
  //     })

  }
  

  function soundonclick() {
    $(".speaker").on("click", function () {
      var speakerid = $(this).attr("id");
      sound_player(speakerid);
      console.log(speakerid)
    });
  }

  function show_alpha_block(){
    $(".farmer1").attr("src",preload.getResult("farmer-png").src);
    $(".spbox2").fadeOut(1000);
   
    $(".alphspkr").click(function(){
     var alpha_icon =  $(this).attr("class").split(' ')[1];
     console.log(alpha_icon)
      sound_player("sound_" + alpha_icon)
    })
    setTimeout(function(){
      $(".bg,.farmer1").css('opacity','0.5');
      showalphabet();
    },1000);
  }


  function inside_aplha_block(){
    sound_player("p1text1sub");
            current_sound.on("complete",function(){
              if(countNext == 4){

                showalphabet();
              }
              $(".spkr, .speaker").css('pointer-events','all');
              $(".spkr").click(function(){
                var audio_id = $(this).attr("class").split(' ')[2];
                sound_player("sound_"+audio_id)
                console.log("sound_"+audio_id)
              })
            soundonclick();
            })
            console.log("p1text"+countNext+"sub");
  }

});
