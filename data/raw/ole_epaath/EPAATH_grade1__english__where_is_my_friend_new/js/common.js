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
    : null;

  // islastpageflag ? ole.footerNotificationHandler.lessonEndSetNotification() : ole.footerNotificationHandler.pageEndSetNotification();
}

/*=====  End of user navigation controller function  ======*/

function put_image(content, count, preload) {
  var contentCount = content[count];
  var imageblockcontent = contentCount.hasOwnProperty('imageblock');
  dynamicimageload(imageblockcontent, contentCount, preload);
}

function dynamicimageload(imageblockcontent, contentCount, preload) {
  if (imageblockcontent) {
    for (var i = 0; i < contentCount.imageblock.length; i++) {
      var imageblock = contentCount.imageblock[i];
      // debugger
      if (imageblock.hasOwnProperty('imagestoshow')) {
        var imageClass = imageblock.imagestoshow;
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
}

function put_speechbox_image(content, count, preload) {
  if (content[count].hasOwnProperty('speechbox')) {
    var speechbox = content[count].speechbox;
    for (var i = 0; i < speechbox.length; i++) {
      var image_src = preload.getResult(speechbox[i].imgid).src;
      //get list of classes
      var classes_list = speechbox[i].speechbox.match(/\S+/g) || [];
      var selector = '.' + classes_list[classes_list.length - 1] + '>.speechbg';
      // console.log(selector);
      $(selector).attr('src', image_src);
    }
  }
}

function playgif(
  preload,
  soundid,
  imageid,
  gifid,
  imageclass,
  callback,
  soundid2 = null,
  callback2
) {
  createjs.Sound.stop();
  current_sound = createjs.Sound.play(soundid);
  current_sound.play();
  $('.' + imageclass).attr('src', preload.getResult(gifid).src);
  current_sound.on('complete', function () {
    $('.' + imageclass).attr('src', preload.getResult(imageid).src);

    callback && callback();

    // calling itself again
    soundid2 &&
      playgif(preload, soundid2, imageid, gifid, imageclass, callback2);
  });
}

function sound_player(sound_id, callback) {
  createjs.Sound.stop();
  current_sound = createjs.Sound.play(sound_id);
  current_sound.play();
  current_sound.on('complete', function () {
    callback && callback();
  });
}

//shuffle array function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

//min inclusive max exclusive
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
