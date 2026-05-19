
function AlphabetSeq() {

    this.showalphabetseq = function () {
        $(".alphadiv1,.alphadiv2,.alphadiv3").hide(0);
        setTimeout(function () {

            $(".alphadiv1").show(0);

            setTimeout(function () {
                $(".alphadiv2").show(0);
                setTimeout(function () {
                    $(".alphadiv3").show(0);
                }, 700);
            }, 700);
        }, 1000);

    }
    this.showalphabetseq1 = function () {
        console.log("second function");
        $(".alphadiv1,.alphadiv2,.alphadiv3").hide(0);
        setTimeout(function () {
            console.log("time finished");
            $(".alphadiv1").show(0);
            setTimeout(function () {
                $(".alphadiv2").show(0);
                setTimeout(function () {
                    $(".alphadiv3").show(0);
                }, 700);
            }, 700);
        },1000);

    }
}
