/*======================================================
    =            Navigation Controller Function            =
    ======================================================*/
var $nextBtn = $("#activity-page-next-btn-enabled");
var $prevBtn = $("#activity-page-prev-btn-enabled");
var $refreshBtn= $("#activity-page-refresh-btn");
function navigationcontroller(countNext,$total_page,endLesson,lastpagedisplay) {

    if (countNext == 0 && $total_page != 1) {
        $nextBtn.show(0);
        $prevBtn.css('display', 'none');
    }
    else if ($total_page == 1) {
        $prevBtn.css('display', 'none');
        $nextBtn.css('display', 'none');

        ole.footerNotificationHandler.lessonEndSetNotification();
    }
    else if (countNext > 0 && countNext < $total_page - 1) {
        $nextBtn.show(0);
        $prevBtn.show(0);
    }
    else if(lastpagedisplay == true){
        console.log("nav here");
        $nextBtn.show(0);
        $prevBtn.show(0);
    }
    else if (countNext == $total_page - 1 ) {
        console.log("nav here last"+lastpagedisplay);
        $nextBtn.css('display', 'none');
        $prevBtn.show(0);

        // if lastpageflag is true
        // ole.footerNotificationHandler.pageEndSetNotification();
        endLesson?ole.footerNotificationHandler.lessonEndSetNotification():'';
    }

}

function put_image(content, count,preload) {
    var contentCount=content[count];
    var imageblockcontent=contentCount.hasOwnProperty('imageblock');
    dynamicimageload(imageblockcontent,contentCount,preload);
    imageblockcontent=contentCount.hasOwnProperty('imageblock1');
    contentCount = imageblockcontent?contentCount.imageblock1[0]:false;
    imageblockcontent?dynamicimageload(imageblockcontent,contentCount,preload):'';
}

function dynamicimageload(imageblockcontent,contentCount,preload){
    if (imageblockcontent) {
        var imageblock = contentCount.imageblock[0];
        if (imageblock.hasOwnProperty('imagestoshow')) {
            var imageClass = imageblock.imagestoshow;
            for (var i = 0; i < imageClass.length; i++) {
                var image_src = preload.getResult(imageClass[i].imgid).src;
                //get list of classes
                var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
                var selector = ('.' + classes_list[classes_list.length - 1]);
                $(selector).attr('src', image_src);
            }
        }
    }
}
