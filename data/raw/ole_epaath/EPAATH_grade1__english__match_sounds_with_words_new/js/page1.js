var imgpath = $ref + "/images/sec1/";
var imgpath1 = $ref + "/images/sec1/new/";

var soundAsset = $ref + "/sounds/" + $lang + "/";

var content = [
  // page 1
  {
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg",
            imgid: "cover",
          },
        ],
      },
    ],
    uppertextblock: [
      {
        textclass: "title",
        textdata: data.string.title,
      },
    ],
  },
  // page 2
  {
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg",
            imgid: "bg2",
          },
          {
            imgclass: "teacher1",
            imgid: "teacher-gif",
          },
          {
            imgclass: "students",
            imgid: "students",
          },
          
        ],
      },
    ],
  speechbox:[
    {
      speechbox: "spbox1",
      textdata: data.string.p1str1,
      imgclass: "",
      textclass: "speechboxtext",
      imgid: "textbox",
    },
  ]
  },
   // page 3
   {
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg",
            imgid: "bg2",
          },
          {
            imgclass: "teacher1",
            imgid: "teacher-gif",
          },
          {
            imgclass: "students",
            imgid: "students",
          },
          
        ],
      },
    ],
  speechbox:[
    {
      speechbox: "spbox1",
      textdata: data.string.p1str2,
      imgclass: "",
      textclass: "speechboxtext",
      imgid: "textbox",
    },
  ]
  },
   // page 4
   {
    imageblock: [
      {
        imagestoshow: [
          {
            imgclass: "bg",
            imgid: "bg2",
          },
          {
            imgclass: "teacher1",
            imgid: "teacher-gif",
          },
          {
            imgclass: "students",
            imgid: "students",
          },
          
        ],
      },
    ],
  speechbox:[
    {
      speechbox: "spbox1",
      textdata: data.string.p1str3,
      imgclass: "",
      textclass: "speechboxtext",
      imgid: "textbox",
    },
  ]
  },
  // page 5
  {
      imageblock: [
        {
          imagestoshow: [
            {
              imgclass: "bg",
              imgid: "bg2",
            },
            {
              imgclass: "teacher1",
              imgid: "teacher-gif",
            },
            {
              imgclass: "students",
              imgid: "students",
            },
            
          ],
        },
      ],
    speechbox:[
      {
        speechbox: "spbox1",
        textdata: data.string.p1str4,
        imgclass: "",
        textclass: "speechboxtext",
        imgid: "textbox",
      },
    ]
  },
];

$(function () {
  var $board = $(".board");
  var $nextBtn = $("#activity-page-next-btn-enabled");
  var $prevBtn = $("#activity-page-prev-btn-enabled");
  var $refreshBtn = $("#activity-page-refresh-btn");
  var countNext = 0;
  
  var clicked = 0;

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
      // {id: "donkey",src: imgpath1+ "donkry.png",type: createjs.AbstractLoader.IMAGE,},

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
      
      { id: "sound1", src: soundAsset + "title.mp3" },
      { id: "p1text1", src: soundAsset + "p1str1.mp3" },
      { id: "p1text2", src: soundAsset + "p1str2.mp3" },
      { id: "p1text3", src: soundAsset + "p1str3.mp3" },
      { id: "p1text4", src: soundAsset + "p1str4.mp3" },
      { id: "p1text5", src: soundAsset + "p1str5.mp3" },

      
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
        sound_player("sound1");
        current_sound.on("complete", function () {
          nav_button_controls(100);
        });
        break;
        case 1:
        sound_player("p1text1");
        current_sound.on("complete", function () {
          $(".teacher1").attr("src",preload.getResult("teacher-png").src);
          nav_button_controls(100);
        });
        break;
        case 2:
        sound_player("p1text2");
        current_sound.on("complete", function () {
          $(".teacher1").attr("src",preload.getResult("teacher-png").src);
          nav_button_controls(100);
        });
        break;
        case 3:
        sound_player("p1text3");
        current_sound.on("complete", function () {
          $(".teacher1").attr("src",preload.getResult("teacher-png").src);
          nav_button_controls(100);
        });
        break;
        case 4:
        sound_player("p1text4");
        current_sound.on("complete", function () {
          $(".teacher1").attr("src",preload.getResult("teacher-png").src);
          nav_button_controls(100);
        });
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

  function showalphabet(){
    
    console.log(clicked)
    $(".imgtextblock").animate({'opacity':'1'},1000);
    if(countNext == 5){
      $(".hand1").fadeIn(1200);
     
    }
    setTimeout(function(){
      $(".clickable").css('pointer-events','auto');
    });
    
      $(".clickable").click(function(){
       
        clicked++;
        console.log(clicked)
       

        var alph_word =  $(this).attr("id");
        console.log(alph_word);
        if(alph_word == "ant"){
          countNext = 6;
          templateCaller();
        }
        else if(alph_word == "apple"){
          countNext = 7;
          templateCaller();
        }
        else if(alph_word == "bee"){
          countNext = 9;
          templateCaller();
        }
        else if(alph_word == "bull"){
          countNext = 10;
          templateCaller();
        }
        else if(alph_word == "cow"){
          countNext = 12;
          templateCaller();
        }
        else if(alph_word == "corn"){
          countNext = 13;
          templateCaller();
        }
        else if(alph_word == "dog"){
          countNext = 15;
          templateCaller();
        }
        else if(alph_word == "donkey"){
          countNext = 16;
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
    current_sound.on("complete", () => {
      current_sound = createjs.Sound.play($(".item.active").attr("id"));
      current_sound.play();
    });
    $(".speaker").click(function(){
      $(".play-again").fadeIn(1000);
      $(".play-again").click(function(){
        if (clicked == 2){
            console.log("asasss");
            countNext = countNext - 2;
            templateCaller();
            clicked = 0 ;
            if(clicked == 0){
              nav_button_controls(0);
              countNext = countNext + 2;
            }
        }else{
          countNext = countNext - 1;
          templateCaller();
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
    });
  }
});
