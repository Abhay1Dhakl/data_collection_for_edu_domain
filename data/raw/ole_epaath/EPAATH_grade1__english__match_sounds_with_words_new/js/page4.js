var imgpath = $ref + "/images/sec1/";
var imgpath1 = $ref + "/images/sec1/new/";
var imgpath2 = $ref + "/images/sec3/new/";
var imgpath3 = $ref + "/images/sec4/";

var soundAsset = $ref + "/sounds/" + $lang + "/";

var content = [
  // page 1
  {
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg1",
            imgid: "bg2",
          },
          {
            imgclass: "farmer1",
            imgid: "farmer-gif",
          },
        ],
      },
    ],
  speechbox:[
    {
      speechbox: "spbox1",
      textdata: data.string.p3text1,
      imgclass: "",
      textclass: "speechboxtext",
      imgid: "textbox",
    },
  ]
  },
 // page 2 for selecting corn and bee
 {
  uppertextblock: [
    {
      textdata: data.string.p3text2,
      textclass: "toptext ttext2",
    },
    // {
    //   textdata: data.string.corn,
    //   textclass: "opt-title",
    // },
  ],
  imageblock: [
    {
      imagestoshow: [
        {
          imgclass: "bg1",
          imgid: "bg2",
        },
        // {
        //   imgclass: "spkr1 spker",
        //   imgid: "speaker-big",
        // },
      ],
    },
  ],
  imgtextblock: [
    {
      divid: "bee",
      divclass: "beediv optdiv clickable incorrect",
      textclass: "bee optiontext",
      textdata: data.string.bee,
      imgclass: "imghay",
      imgid: "corn",
      imgsrc: imgpath2 + "hay.png",
      opttextsrc: imgpath2 + 'speaker-blue.png',
      opttextclass: 'spkr2 spker',
      
    },
    {
      divid: "corn",
      divclass: "corndiv optdiv clickable correct",
      textclass: "corn optiontext optiontext2",
      textdata: data.string.corn,
      imgclass: "imghay",
      imgid: "corn",
      imgsrc: imgpath2 + "hay.png",
      opttextsrc: imgpath2 + 'speaker-blue.png',
      opttextclass: 'spkr3 spker',
    },
  ],
  titletxt:[{
    titletxtclass:'opt-title',
    titletxtdata:data.string.corn,
  }]
 },
  // page 3 for dog
 {
  uppertextblock: [
    {
      textdata: data.string.p3text2,
      textclass: "toptext ttext2",
    },
    
  ],
  imageblock: [
    {
      imagestoshow: [
        {
          imgclass: "bg1",
          imgid: "bg2",
        },
        // {
        //   imgclass: "spkr1 spker",
        //   imgid: "speaker-big",
        // },
        
      ],
    },
  ],
  imgtextblock: [
    {
      divid: "bull",
      divclass: "bulldiv optdiv clickable incorrect",
      imgclass: "imghay",
      imgid: "bull",
      imgsrc: imgpath2 + "hay.png",
      textclass: "bull optiontext",
      textdata: data.string.bull,
      opttextsrc: imgpath2 + 'speaker-blue.png',
      opttextclass: 'spkr2 spker',
    },
    {
      divid: "dog",
      divclass: "dogdiv optdiv clickable correct",
      imgclass: "imghay",
      imgid: "dog",
      imgsrc: imgpath2 + "hay.png",
      textclass: "dog optiontext optiontext2",
      textdata: data.string.dog,
      opttextsrc: imgpath2 + 'speaker-blue.png',
      opttextclass: 'spkr3 spker',
    },
  ],
  titletxt:[{
    titletxtclass:'opt-title',
    titletxtdata:data.string.dog,
  }]
 },
 // page 4 for bee
 {
  uppertextblock: [
    {
      textdata: data.string.p3text2,
      textclass: "toptext ttext2",
    },
  
  ],
  imageblock: [
    {
      imagestoshow: [
        {
          imgclass: "bg1",
          imgid: "bg2",
        },
        // {
        //   imgclass: "spkr1 spker",
        //   imgid: "speaker-big",
        // },
       
      ],
    },
  ],
  imgtextblock: [
    {
      divid: "frog",
      divclass: "frogdiv optdiv clickable incorrect",
      imgclass: "imghay",
      imgid: "frog",
      imgsrc: imgpath2 + "hay.png",
      textclass: "frog optiontext",
      textdata: data.string.frog,
      opttextsrc: imgpath2 + 'speaker-blue.png',
      opttextclass: 'spkr2 spker',
    },
    {
      divid: "bee",
      divclass: "beediv optdiv clickable correct",
      imgclass: "imghay",
      imgid: "bee",
      imgsrc: imgpath2 + "hay.png",
      textclass: "bee optiontext optiontext2",
      textdata: data.string.bee,
      opttextsrc: imgpath2 + 'speaker-blue.png',
      opttextclass: 'spkr3 spker',
    },
  ],
  titletxt:[{
    titletxtclass:'opt-title',
    titletxtdata:data.string.bee,
  }]
 },
 // page 5 for donkey
 {
  uppertextblock: [
    {
      textdata: data.string.p3text2,
      textclass: "toptext ttext2",
    },
   
  ],
  imageblock: [
    {
      imagestoshow: [
        {
          imgclass: "bg1",
          imgid: "bg2",
        },
        // {
        //   imgclass: "spkr1 spker",
        //   imgid: "speaker-big",
        // },
        
      ],
    },
  ],
  imgtextblock: [
    {
      divid: "apple",
      divclass: "applediv optdiv clickable incorrect",
      imgclass: "imghay",
      imgid: "apple",
      imgsrc: imgpath2 + "hay.png",
      textclass: "apple optiontext",
      textdata: data.string.apple,
      opttextsrc: imgpath2 + 'speaker-blue.png',
      opttextclass: 'spkr2 spker',
    },
    {
      divid: "donkey",
      divclass: "donkeydiv optdiv clickable correct",
      imgclass: "imghay",
      imgid: "donkey",
      imgsrc: imgpath2 + "hay.png",
      textclass: "donkey optiontext optiontext2",
      textdata: data.string.donkey,
      opttextsrc: imgpath2 + 'speaker-blue.png',
      opttextclass: 'spkr3 spker',
    },
  ],
  titletxt:[{
    titletxtclass:'opt-title',
    titletxtdata:data.string.donkey,
  }]
 },
 // page 6 for cow
 {
  uppertextblock: [
    {
      textdata: data.string.p3text2,
      textclass: "toptext ttext2",
    },
    
  ],
  imageblock: [
    {
      imagestoshow: [
        {
          imgclass: "bg1",
          imgid: "bg2",
        },
        // {
        //   imgclass: "spkr1 spker",
        //   imgid: "speaker-big",
        // },
       
      ],
    },
  ],
  imgtextblock: [
    {
      divid: "eagle",
      divclass: "eaglediv optdiv clickable incorrect",
      imgclass: "imghay",
      imgid: "eagle",
      imgsrc: imgpath2 + "hay.png",
      textclass: "eagle optiontext",
      textdata: data.string.eagle,
      opttextsrc: imgpath2 + 'speaker-blue.png',
      opttextclass: 'spkr2 spker',
    },
    {
      divid: "cow",
      divclass: "cowdiv optdiv clickable correct",
      imgclass: "imghay",
      imgid: "cow",
      imgsrc: imgpath2 + "hay.png",
      textclass: "cow optiontext optiontext2",
      textdata: data.string.cow,
      opttextsrc: imgpath2 + 'speaker-blue.png',
      opttextclass: 'spkr3 spker',
    },
  ],
  titletxt:[{
    titletxtclass:'opt-title',
    titletxtdata:data.string.cow,
  }]
 },
];

$(function () {
  var $board = $(".board");
  var $nextBtn = $("#activity-page-next-btn-enabled");
  var $prevBtn = $("#activity-page-prev-btn-enabled");
  var $refreshBtn = $("#activity-page-refresh-btn");
  var countNext = 0;

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
      {id: "bg2",src: imgpath2 + "bg.png",type: createjs.AbstractLoader.IMAGE},
      {id: "bee-img",src: imgpath1 + "bee.png",type: createjs.AbstractLoader.IMAGE},
      {id: "corn-img",src: imgpath1 + "corn.png",type: createjs.AbstractLoader.IMAGE},
      {id: "dog-img",src: imgpath1 + "dog.png",type: createjs.AbstractLoader.IMAGE},
      {id: "bull-img",src: imgpath1 + "bull.png",type: createjs.AbstractLoader.IMAGE},
      {id: "frog-img",src: imgpath1 + "frog.png",type: createjs.AbstractLoader.IMAGE},
      {id: "apple-img",src: imgpath1 + "apple.png",type: createjs.AbstractLoader.IMAGE},
      {id: "donkey-img",src: imgpath1 + "donkey.png",type: createjs.AbstractLoader.IMAGE},
      {id: "cow-img",src: imgpath1 + "cow.png",type: createjs.AbstractLoader.IMAGE},
      {id: "eagle-img",src: imgpath1 + "eagle.png",type: createjs.AbstractLoader.IMAGE},

      {id: "hay",src: imgpath2+ "hay.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "farmer-gif",src: imgpath1+ "farmer_talking_gif.gif",type: createjs.AbstractLoader.IMAGE,},
      {id: "farmer-png",src: imgpath1+ "farmer_talking_png.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "speaker-big",src: imgpath2+ "speaker-blue.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "speaker-small",src: imgpath2+ "speaker-blue.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "correct",src: imgpath2+ "right.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "incorrect",src: imgpath2+ "wrong.png",type: createjs.AbstractLoader.IMAGE,},
      {id: "textbox",src: imgpath1+ "dialoguebox1.png",type: createjs.AbstractLoader.IMAGE,},
 
      // ------------------------------------------------------------------
      
     
      { id: "sound1", src: soundAsset + "p3text1.mp3" },
      { id: "p2text2", src: soundAsset + "p3text2.mp3" },
      { id: "p2text3", src: soundAsset + "p3text3.mp3" },
  
      { id: "pg1-aud", src: soundAsset + "corn.mp3" },
      { id: "pg2-aud", src: soundAsset + "dog.mp3" },
      { id: "pg3-aud", src: soundAsset + "bee.mp3" },
      { id: "pg4-aud", src: soundAsset + "donkey.mp3" },
      { id: "pg5-aud", src: soundAsset + "cow.mp3" },

      { id: "bee-aud", src: soundAsset + "bee.mp3" },
      { id: "bull-aud", src: soundAsset + "bull.mp3" },
      { id: "corn-aud", src: soundAsset + "corn.mp3" },
      { id: "dog-aud", src: soundAsset + "dog.mp3" },
      { id: "frog-aud", src: soundAsset + "frog.mp3" },
      { id: "apple-aud", src: soundAsset + "apple.mp3" },
     
      { id: "donkey-aud", src: soundAsset + "donkey.mp3" },
      { id: "eagle-aud", src: soundAsset + "eagle.mp3" },
      { id: "cow-aud", src: soundAsset + "cow.mp3" },
      
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


    /*for randomizing the options*/
		function randomize(parent){
			// alert(parent);
			var parent = $(parent);
			var divs = parent.children();
			while (divs.length) {
	 		parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
			}
		}
    switch (countNext) {
      case 0:
        $(".imgtextblock").css('display','none')
        sound_player("sound1");
        current_sound.on("complete", function () {
          sound_player("p2text2");
          $(".speechboxtext").html(data.string.p2text2)
          current_sound.on("complete", function () {
          $(".farmer1").attr("src",preload.getResult("farmer-png").src);
          nav_button_controls(2000);
        });
        });
        break;
      case 1:
        sound_player("p2text3");
        current_sound.on("complete", function () {
         
          speakerAudio();
        });
        checkOptions();
        break;
        case 2:
          checkOptions();
          speakerAudio();
        
          break;  
      case 3:
        checkOptions();
        speakerAudio();
         
          break; 
      case 4:
        
        $(".spikr").css("width","20%");
        $(".boxtxt").css({"width":"78%","left":"0%"});
        checkOptions();
        speakerAudio();
          break; 
      case 5:
        $(".boxtxt").css({"width":"48%","left":"16%"});
        checkOptions();
        speakerAudio();
          
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
        ole.footerNotificationHandler.lessonEndSetNotification();
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

  /**
   * TODO
   * This function is not used
   */

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
        // var image_src = preload.getResult(imageClass[i].imgid).src;

        var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
        var selector = "." + classes_list[classes_list.length - 1];
        // $(selector).attr("src", image_src);
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
    createjs.Sound.stop();
    clearTimeout(timeoutvar);
    clearTimeout(removetimeout);
    countNext--;
    templateCaller();

    countNext < $total_page
      ? ole.footerNotificationHandler.hideNotification()
      : null;
  });

function speakerAudio(){
  $(".spikr").click(function(){
    console.log("abc")
    sound_player("pg"+countNext+"-aud")
    console.log("pg"+countNext+"-aud")
  });
  
  $(".opttext").mouseover(function(){
    var obj_name = $(this).children(".optiontext").attr("class").split(' ')[0];
    console.log(obj_name)
    sound_player(obj_name + "-aud")
    // console.log("first-opt"+countNext)
  });
  $(".opttext").mouseout(function(){
current_sound.stop();
  })
 
}

  function checkOptions(){
  
    $(".opt-title").append("<img class='spikr' src='"+preload.getResult("speaker-big").src+"' />");
   
    $(".clickable").css('pointer-events','auto');
    $(".clickable").click(function(){
      var word = $(this).attr('id');
      imgreplace = word+"-img"
      console.log(imgreplace)

     if($(this).hasClass("correct")){
      $(".clickable").css("pointer-events","none")
      $(this).append("<img class='corincor right' src='"+preload.getResult("correct").src+"' />");
      play_correct_incorrect_sound(1);
      setTimeout(function(){
        $(".correct").children(".imghay").addClass("smallimg")
        $(".correct").children(".imghay").attr("src",preload.getResult(imgreplace).src);
      },500);

      console.log(imgreplace)
      nav_button_controls(0)
     }
     else{
      $(this).css("pointer-events","none")
      $(this).append("<img class='corincor right' src='"+preload.getResult("incorrect").src+"' />");
      setTimeout(function(){
        $(".incorrect").children(".imghay").addClass("smallimg")
        $(".incorrect").children(".imghay").attr("src",preload.getResult(imgreplace).src);
      },1000);
      play_correct_incorrect_sound(0);
      setTimeout(function(){
        // $(".clickable").children(".imghay").attr("src",preload.getResult("hay").src);
      },3000);
     }
  
    })
  }

 

  function playonhover() {
    $(".soundonhover").hover(function () {
      var hoverid = $(this).attr("id");

      console.log(hoverid);
    });
  }

  function soundonclick() {
    $(".speaker").on("click", function () {
      var speakerid = $(this).attr("id");

      sound_player(speakerid);
    });
  }
});
