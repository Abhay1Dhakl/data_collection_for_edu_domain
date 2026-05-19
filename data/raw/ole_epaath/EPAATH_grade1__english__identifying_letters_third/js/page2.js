var imgpath = $ref + "/images/";
var soundAsset = $ref+"/sounds/";

var content=[
	// q slide1
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'bg-a',
		extratextblock:[{
			textdata: '',
			textclass: "divider divider-a",
		}],

		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-q'
				}
			]
		}],
		svgblock: [{
			svgblock: 'letter-svg',
		}],
	},
	// slide2
	{
		contentnocenteradjust: true,
		sliderload:true,
		extratextblock:[
		{
			textdata: '',
			textclass: "rightDiv",
		}],
		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-q'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-q'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'queen',
				textdata: data.string.queen,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'question',
				textdata: data.string.question,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'quil',
				textdata: data.string.quil,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			}]
		}]
	},
	// slide 3
	{
		contentblockadditionalclass:"creambg",
		imageload:true,
		imgspkrcontainer:[{
			imagedivblock:[{
			imagescontainerclass:"btmContainer",
			imagestoshow:[{
			imagediv:"imgdiv div3",
				imgclass : "imgbox ib1",
				imgsrc : '',
				imgid : 'queen',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.queen,
				speakerimgclass:"speakerimg spkr1"

			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'question',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.question,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'quil',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.quil,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-q',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},


	// r slide 4
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'bg-a',
		extratextblock:[{
			textdata: '',
			textclass: "divider divider-b",
		}],

		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-r'
				}
			]
		}],
		svgblock: [{
			svgblock: 'letter-svg',
		}],
	},
	// slide 5
	{
		contentnocenteradjust: true,
		sliderload:true,
		extratextblock:[
		{
			textdata: '',
			textclass: "rightDiv",
		}],
		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-r'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-r'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'rabbit',
				textdata: data.string.rabbit,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'rainbow',
				textdata: data.string.rainbow,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'rice',
				textdata: data.string.rice,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			}]
		}]
	},
	// slide 6
	{
		contentblockadditionalclass:"creambg",
		imageload:true,
		imgspkrcontainer:[{
			imagedivblock:[{
			imagescontainerclass:"btmContainer",
			imagestoshow:[{
			imagediv:"imgdiv div3",
				imgclass : "imgbox ib1",
				imgsrc : '',
				imgid : 'rabbit',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.rabbit,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'rainbow',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.rainbow,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'rice',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.rice,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-r',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},
	//s slide 7
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'bg-c',
		extratextblock:[{
			textdata: '',
			textclass: "divider divider-c",
		}],

		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-s'
				}
			]
		}],
		svgblock: [{
			svgblock: 'letter-svg',
		}],
	},
	// slide 8
	{
		contentnocenteradjust: true,
		sliderload:true,
		extratextblock:[
		{
			textdata: '',
			textclass: "rightDiv",
		}],
		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-s'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-s'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'school',
				textdata: data.string.school,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'snake',
				textdata: data.string.snake,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'sun',
				textdata: data.string.sun,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			}]
		}]
	},
	// slide 9
	{
		contentblockadditionalclass:"creambg",
		imageload:true,
		imgspkrcontainer:[{
			imagedivblock:[{
			imagescontainerclass:"btmContainer",
			imagestoshow:[{
			imagediv:"imgdiv div3",
				imgclass : "imgbox ib1",
				imgsrc : '',
				imgid : 'school',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.school,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'snake',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.snake,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'sun',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.sun,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-s',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},

//t slide 10
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'bg-d',
		extratextblock:[{
			textdata: '',
			textclass: "divider divider-d",
		}],

		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-t'
				}
			]
		}],
		svgblock: [{
			svgblock: 'letter-svg',
		}],
	},
	// slide 11
	{
		contentnocenteradjust: true,
		sliderload:true,
		extratextblock:[
		{
			textdata: '',
			textclass: "rightDiv",
		}],
		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-t'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-t'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'table',
				textdata: data.string.table,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'tiger',
				textdata: data.string.tiger,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'tree',
				textdata: data.string.tree,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			}]
		}]
	},
	// slide 12
	{
		contentblockadditionalclass:"creambg",
		imageload:true,
		imgspkrcontainer:[{
			imagedivblock:[{
			imagescontainerclass:"btmContainer",
			imagestoshow:[{
			imagediv:"imgdiv div3",
				imgclass : "imgbox ib1",
				imgsrc : '',
				imgid : 'table',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.table,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'tiger',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.tiger,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'tree',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.tree,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-t',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},

	//U slide 13
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'bg-e',
		extratextblock:[{
			textdata: '',
			textclass: "divider divider-e",
		}],

		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-u'
				}
			]
		}],
		svgblock: [{
			svgblock: 'letter-svg',
		}],
	},
	// slide 14
	{
		contentnocenteradjust: true,
		sliderload:true,
		extratextblock:[
		{
			textdata: '',
			textclass: "rightDiv",
		}],
		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-u'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-u'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'umbrella',
				textdata: data.string.umbrella,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'uncle',
				textdata: data.string.uncle,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'up',
				textdata: data.string.up,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			}]
		}]
	},
	// slide 15
	{
		contentblockadditionalclass:"creambg",
		imageload:true,
		imgspkrcontainer:[{
			imagedivblock:[{
			imagescontainerclass:"btmContainer",
			imagestoshow:[{
			imagediv:"imgdiv div3",
				imgclass : "imgbox ib1",
				imgsrc : '',
				imgid : 'umbrella',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.umbrella,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'uncle',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.uncle,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'up',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.up,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-u',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},

	//v slide15
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'bg-f',
		extratextblock:[{
			textdata: '',
			textclass: "divider divider-f",
		}],

		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-v'
				}
			]
		}],
		svgblock: [{
			svgblock: 'letter-svg',
		}],
	},
	// slide 16
	{
		contentnocenteradjust: true,
		sliderload:true,
		extratextblock:[
		{
			textdata: '',
			textclass: "rightDiv",
		}],
		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-v'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-v'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'van',
				textdata: data.string.van,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'vest',
				textdata: data.string.vest,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'village',
				textdata: data.string.village,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			}]
		}]
	},
	// slide 17
	{
		contentblockadditionalclass:"creambg",
		imageload:true,
		imgspkrcontainer:[{
			imagedivblock:[{
			imagescontainerclass:"btmContainer",
			imagestoshow:[{
			imagediv:"imgdiv div3",
				imgclass : "imgbox ib1",
				imgsrc : '',
				imgid : 'van',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.van,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'vest',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.vest,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'village',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.village,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-v',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},
	//w slide18
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'bg-g',
		extratextblock:[{
			textdata: '',
			textclass: "divider divider-g",
		}],

		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-w'
				}
			]
		}],
		svgblock: [{
			svgblock: 'letter-svg',
		}],
	},
	// slide 19
	{
		contentnocenteradjust: true,
		sliderload:true,
		extratextblock:[
		{
			textdata: '',
			textclass: "rightDiv",
		}],
		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-w'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-w'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'watch',
				textdata: data.string.watch,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'watermelon',
				textdata: data.string.watermelon,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'window',
				textdata: data.string.window,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			}]
		}]
	},
	// slide 20
	{
		contentblockadditionalclass:"creambg",
		imageload:true,
		imgspkrcontainer:[{
			imagedivblock:[{
			imagescontainerclass:"btmContainer",
			imagestoshow:[{
			imagediv:"imgdiv div3",
				imgclass : "imgbox ib1",
				imgsrc : '',
				imgid : 'watch',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.watch,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'watermelon',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.watermelon,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'window',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.window,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-w',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},


	//x slide 21
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'bg-h',
		extratextblock:[{
			textdata: '',
			textclass: "divider divider-h",
		}],

		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-x'
				}
			]
		}],
		svgblock: [{
			svgblock: 'letter-svg',
		}],
	},
	// slide 22
	{
		contentnocenteradjust: true,
		sliderload:true,
		extratextblock:[
		{
			textdata: '',
			textclass: "rightDiv",
		}],
		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-x'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-x'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'xmas',
				textdata: data.string.xmas,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'xray',
				textdata: data.string.xray,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'xylophone',
				textdata: data.string.xylophone,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			}]
		}]
	},
	// slide 23
	{
		contentblockadditionalclass:"creambg",
		imageload:true,
		imgspkrcontainer:[{
			imagedivblock:[{
			imagescontainerclass:"btmContainer",
			imagestoshow:[{
			imagediv:"imgdiv div3",
				imgclass : "imgbox ib1",
				imgsrc : '',
				imgid : 'xmas',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.xmas,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'xray',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.xray,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'xylophone',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.xylophone,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-x',
			speakerimgclass:"speakerimg spkrtop"
		}]
	}]
}]
},


	//y slide 24
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'bg-h',
		extratextblock:[{
			textdata: '',
			textclass: "divider divider-h",
		}],

		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-y'
				}
			]
		}],
		svgblock: [{
			svgblock: 'letter-svg',
		}],
	},
	// slide 25
	{
		contentnocenteradjust: true,
		sliderload:true,
		extratextblock:[
		{
			textdata: '',
			textclass: "rightDiv",
		}],
		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-y'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-y'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'yak',
				textdata: data.string.yak,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'yellow',
				textdata: data.string.yellow,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'yoyo',
				textdata: data.string.yoyo,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			}]
		}]
	},
	// slide 26
	{
		contentblockadditionalclass:"creambg",
		imageload:true,
		imgspkrcontainer:[{
			imagedivblock:[{
			imagescontainerclass:"btmContainer",
			imagestoshow:[{
			imagediv:"imgdiv div3",
				imgclass : "imgbox ib1",
				imgsrc : '',
				imgid : 'yak',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.yak,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'yellow',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.yellow,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'yoyo',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.yoyo,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-y',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},
//z slide 27
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'bg-h',
		extratextblock:[{
			textdata: '',
			textclass: "divider divider-h",
		}],

		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-z'
				}
			]
		}],
		svgblock: [{
			svgblock: 'letter-svg',
		}],
	},
	// slide 28
	{
		contentnocenteradjust: true,
		sliderload:true,
		extratextblock:[
		{
			textdata: '',
			textclass: "rightDiv",
		}],
		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-z'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-z'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'zebra',
				textdata: data.string.zebra,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'zipper',
				textdata: data.string.zipper,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'zoo',
				textdata: data.string.zoo,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			}]
		}]
	},
	// slide 29
	{
		contentblockadditionalclass:"creambg",
		imageload:true,
		imgspkrcontainer:[{
			imagedivblock:[{
			imagescontainerclass:"btmContainer",
			imagestoshow:[{
			imagediv:"imgdiv div3",
				imgclass : "imgbox ib1",
				imgsrc : '',
				imgid : 'zebra',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.zebra,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'zipper',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.zipper,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'zoo',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.zoo,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-z',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},
];


$(function () {
	var $board = $('.board');
	var $nextBtn = $("#activity-page-next-btn-enabled");
	var $prevBtn = $("#activity-page-prev-btn-enabled");
  var $refreshBtn= $("#activity-page-refresh-btn");
	var countNext = 0;

	var $total_page = content.length;
	loadTimelineProgress($total_page,countNext+1);
	// readCSV();
	var vocabcontroller =  new Vocabulary();
	vocabcontroller.init();

	var my_interval = null;
	var my_interval2 = null;
	//for preload
	var preload;
	var timeoutvar = null;
	var timeoutArr = [];
	var current_sound;
	var arrayCountToShow = 0;
	var arrClkToShow = 0;

	function init() {
		//specify type otherwise it will load assests as XHR
		manifest = [
			//images
			{id: "queen", src: imgpath+"p2/queen.png", type: createjs.AbstractLoader.IMAGE},
			{id: "question", src: imgpath+"p2/question.png", type: createjs.AbstractLoader.IMAGE},
			{id: "quil", src: imgpath+"p2/quil.png", type: createjs.AbstractLoader.IMAGE},

			{id: "rabbit", src: imgpath+"p2/rabbit.png", type: createjs.AbstractLoader.IMAGE},
			{id: "rainbow", src: imgpath+"p2/rainbow.png", type: createjs.AbstractLoader.IMAGE},
			{id: "rice", src: imgpath+"p2/rice01.png", type: createjs.AbstractLoader.IMAGE},

			{id: "school", src: imgpath+"p2/school.png", type: createjs.AbstractLoader.IMAGE},
			{id: "snake", src: imgpath+"p2/snake.png", type: createjs.AbstractLoader.IMAGE},
			{id: "sun", src: imgpath+"p2/sun.png", type: createjs.AbstractLoader.IMAGE},

			{id: "table", src: imgpath+"p2/table.png", type: createjs.AbstractLoader.IMAGE},
			{id: "tiger", src: imgpath+"p2/tiger.png", type: createjs.AbstractLoader.IMAGE},
			{id: "tree", src: imgpath+"p2/tree.png", type: createjs.AbstractLoader.IMAGE},

			{id: "umbrella", src: imgpath+"p2/umbrella.png", type: createjs.AbstractLoader.IMAGE},
			{id: "uncle", src: imgpath+"p2/uncle.png", type: createjs.AbstractLoader.IMAGE},
			{id: "up", src: imgpath+"p2/up.png", type: createjs.AbstractLoader.IMAGE},

			{id: "van", src: imgpath+"p2/van.png", type: createjs.AbstractLoader.IMAGE},
			{id: "vest", src: imgpath+"p2/vest.png", type: createjs.AbstractLoader.IMAGE},
			{id: "village", src: imgpath+"p2/village.png", type: createjs.AbstractLoader.IMAGE},

			{id: "watch", src: imgpath+"p2/watch.png", type: createjs.AbstractLoader.IMAGE},
			{id: "watermelon", src: imgpath+"p2/watermelon.png", type: createjs.AbstractLoader.IMAGE},
			{id: "window", src: imgpath+"p2/window.png", type: createjs.AbstractLoader.IMAGE},

			{id: "xmas", src: imgpath+"p2/xmas.png", type: createjs.AbstractLoader.IMAGE},
			{id: "xray", src: imgpath+"p2/xray.png", type: createjs.AbstractLoader.IMAGE},
			{id: "xylophone", src: imgpath+"p2/xylophone.png", type: createjs.AbstractLoader.IMAGE},

			{id: "yak", src: imgpath+"p2/yak.png", type: createjs.AbstractLoader.IMAGE},
			{id: "yellow", src: imgpath+"p2/yellow.png", type: createjs.AbstractLoader.IMAGE},
			{id: "yoyo", src: imgpath+"p2/yoyo.png", type: createjs.AbstractLoader.IMAGE},

			{id: "zebra", src: imgpath+"p2/zebra.png", type: createjs.AbstractLoader.IMAGE},
			{id: "zipper", src: imgpath+"p2/zipper.png", type: createjs.AbstractLoader.IMAGE},
			{id: "zoo", src: imgpath+"p2/zoo.png", type: createjs.AbstractLoader.IMAGE},




			{id: "letter-q", src: imgpath+"letters/Q_new.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-r", src: imgpath+"letters/R.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-s", src: imgpath+"letters/S.svg", type: createjs.AbstractLoader.IMAGE},

			{id: "letter-t", src: imgpath+"letters/T.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-u", src: imgpath+"letters/U.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-v", src: imgpath+"letters/V.svg", type: createjs.AbstractLoader.IMAGE},

			{id: "letter-w", src: imgpath+"letters/W.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-x", src: imgpath+"letters/X.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-y", src: imgpath+"letters/Y.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-z", src: imgpath+"letters/Z.svg", type: createjs.AbstractLoader.IMAGE},

			// sounds

			{id: "sound_letter_1", src: soundAsset+"page2/q.mp3"},
			{id: "sound_letter_2", src: soundAsset+"page2/r.mp3"},
			{id: "sound_letter_3", src: soundAsset+"page2/s.mp3"},
			{id: "sound_letter_4", src: soundAsset+"page2/t.mp3"},
			{id: "sound_letter_5", src: soundAsset+"page2/u.mp3"},
			{id: "sound_letter_6", src: soundAsset+"page2/v.mp3"},
			{id: "sound_letter_7", src: soundAsset+"page2/w.mp3"},
			{id: "sound_letter_8", src: soundAsset+"page2/x.mp3"},
			{id: "sound_letter_9", src: soundAsset+"page2/y.mp3"},
			{id: "sound_letter_10", src: soundAsset+"page2/z.mp3"},

			{id: "sound_0", src: soundAsset+"new/how_to_write_q.mp3"},
			{id: "sound_2", src: soundAsset+"new/how_to_write_r.mp3"},
			{id: "sound_4", src: soundAsset+"new/how_to_write_s.mp3"},
			{id: "sound_6", src: soundAsset+"new/how_to_write_t.mp3"},
			{id: "sound_8", src: soundAsset+"new/how_to_write_u.mp3"},
			{id: "sound_10", src: soundAsset+"new/how_to_write_v.mp3"},
			{id: "sound_12", src: soundAsset+"new/how_to_write_w.mp3"},
			{id: "sound_14", src: soundAsset+"new/how_to_write_x.mp3"},
			{id: "sound_16", src: soundAsset+"new/how_to_write_y.mp3"},
			{id: "sound_18", src: soundAsset+"new/how_to_write_z.mp3"},



			{id: "q_queen", src: soundAsset+"page2/q_queen.mp3"},
			{id: "q_question", src: soundAsset+"page2/q_question.mp3"},
			{id: "q_quill", src: soundAsset+"page2/q_quill.mp3"},
			//
			{id: "r_rabbit", src: soundAsset+"page2/r_rabbit.mp3"},
			{id: "r_rainbow", src: soundAsset+"page2/r_rainbow.mp3"},
			{id: "r_rice", src: soundAsset+"page2/r_rice.mp3"},
			//
			{id: "s_school", src: soundAsset+"page2/s_school.mp3"},
			{id: "s_snake", src: soundAsset+"page2/s_snake.mp3"},
			{id: "s_sun", src: soundAsset+"page2/s_sun.mp3"},

			{id: "t_table", src: soundAsset+"page2/t_table.mp3"},
			{id: "t_tiger", src: soundAsset+"page2/t_tiger.mp3"},
			{id: "t_tree", src: soundAsset+"page2/t_tree.mp3"},
			//
			{id: "u_umbrella", src: soundAsset+"page2/u_umbrella.mp3"},
			{id: "u_uncle", src: soundAsset+"page2/u_uncle.mp3"},
			{id: "u_up", src: soundAsset+"page2/u_up.mp3"},
			//
			{id: "v_van", src: soundAsset+"page2/v_van.mp3"},
			{id: "v_vest", src: soundAsset+"page2/v_vest.mp3"},
			{id: "v_village", src: soundAsset+"page2/v_village.mp3"},
			//
			{id: "w_watch", src: soundAsset+"page2/w_watch.mp3"},
			{id: "w_watermelon", src: soundAsset+"page2/w_watermelon.mp3"},
			{id: "w_window", src: soundAsset+"page2/w_window.mp3"},
			//
			{id: "x_xmas", src: soundAsset+"page2/x_xmas.mp3"},
			{id: "x_xray", src: soundAsset+"page2/x_xray.mp3"},
			{id: "x_xylophone", src: soundAsset+"page2/x_xylophone.mp3"},
			//
			{id: "y_yak", src: soundAsset+"page2/y_yak.mp3"},
			{id: "y_yellow", src: soundAsset+"page2/y_yellow.mp3"},
			{id: "y_yoyo", src: soundAsset+"page2/y_yoyo.mp3"},
			//
			{id: "z_zebra", src: soundAsset+"page2/z_zebra.mp3"},
			{id: "z_zipper", src: soundAsset+"page2/z_zipper.mp3"},
			{id: "z_zoo", src: soundAsset+"page2/z_zoo.mp3"},


		];
		preload = new createjs.LoadQueue(false);
		preload.installPlugin(createjs.Sound);//for registering sounds
		preload.on("progress", handleProgress);
		preload.on("complete", handleComplete);
		preload.on("fileload", handleFileLoad);
		preload.loadManifest(manifest, true);
	}
	function handleFileLoad(event) {
		// console.log(event.item);
	}
	function handleProgress(event) {
		$('#loading-text').html(parseInt(event.loaded*100)+'%');
	}
	function handleComplete(event) {
		$('#loading-wrapper').hide(0);
		// call main function
		templateCaller();
	}
	//initialize
	init();

	/*==================================================
	=            Handlers and helpers Block            =
	==================================================*/
	/*==========  register the handlebar partials first  ==========*/
	Handlebars.registerPartial("textcontent", $("#textcontent-partial").html());
	Handlebars.registerPartial("imagecontent", $("#imagecontent-partial").html());
	/*===============================================
	=            data highlight function            =
	===============================================*/
	function texthighlight($highlightinside) {
		//check if $highlightinside is provided
		typeof $highlightinside !== "object" ? alert("Texthighlight : Hi Master, Please pass me a Jquery Object whose child are to be highlighted") : null;

		var $alltextpara = $highlightinside.find("*[data-highlight='true']");
		var stylerulename;
		var replaceinstring;
		var texthighlightstarttag;
		var texthighlightendtag = "</span>";
		if ($alltextpara.length > 0) {
			$.each($alltextpara, function(index, val) {
				/*if there is a data-highlightcustomclass attribute defined for the text element
				 use that or else use default 'parsedstring'*/
				$(this).attr("data-highlightcustomclass") ? /*if there is data-highlightcustomclass defined it is true else it is not*/
				( stylerulename = $(this).attr("data-highlightcustomclass")) : ( stylerulename = "parsedstring");

				texthighlightstarttag = "<span class='" + stylerulename + "'>";
				replaceinstring = $(this).html();
				replaceinstring = replaceinstring.replace(/#/g, texthighlightstarttag);
				replaceinstring = replaceinstring.replace(/@/g, texthighlightendtag);
				$(this).html(replaceinstring);
			});
		}
	}
	/*=====  End of data highlight function  ======*/

	/*===============================================
	 =            user notification function        =
	 ===============================================*/
	function notifyuser($notifyinside) {
		//check if $notifyinside is provided
		typeof $notifyinside !== "object" ? alert("Notifyuser : Hi Master, Please pass me a Jquery Object which should contain notification style.") : null;

		/*variable that will store the element(s) to remove notification from*/
		var $allnotifications = $notifyinside.find("*[data-usernotification='notifyuser']");
		// if there are any notifications removal required add the event handler
		if ($allnotifications.length > 0) {
			$allnotifications.one('click', function() {
				/* Act on the event */
				$(this).attr('data-isclicked', 'clicked');
				$(this).removeAttr('data-usernotification');
			});
		}
	}

	/*=====  End of user notification function  ======*/

	/*======================================================
	 =            Navigation Controller Function            =
	 ======================================================*/

	function navigationcontroller(islastpageflag) {
		typeof islastpageflag === "undefined" ? islastpageflag = false : typeof islastpageflag != 'boolean' ? alert("NavigationController : Hi Master, please provide a boolean parameter") : null;

		// islastpageflag ? ole.footerNotificationHandler.lessonEndSetNotification() : ole.footerNotificationHandler.pageEndSetNotification();
	}

	/*=====  End of user navigation controller function  ======*/

	/*==================================================
	 =            InstructionBlockController            =
	 ==================================================*/

	function instructionblockcontroller() {
		var $instructionblock = $board.find("div.instructionblock");
		if ($instructionblock.length > 0) {
			var $contentblock = $board.find("div.contentblock");
			var $toggleinstructionblockbutton = $instructionblock.find("div.toggleinstructionblock");
			var instructionblockisvisibleflag;

			$contentblock.css('pointer-events', 'none');

			$toggleinstructionblockbutton.on('click', function() {
				instructionblockisvisibleflag = $instructionblock.attr("data-instructionblockshow");
				if (instructionblockisvisibleflag == 'true') {
					instructionblockisvisibleflag = 'false';
					$contentblock.css('pointer-events', 'auto');
				} else if (instructionblockisvisibleflag == 'false') {
					instructionblockisvisibleflag = 'true';
					$contentblock.css('pointer-events', 'none');
				}

				$instructionblock.attr("data-instructionblockshow", instructionblockisvisibleflag);
			});
		}
	}

	/*=====  End of InstructionBlockController  ======*/

	/*=================================================
	 =            general template function            =
	 =================================================*/
	function generaltemplate() {
		var source = $("#general-template").html();
		var template = Handlebars.compile(source);
		var html = template(content[countNext]);
		$board.html(html);
 

		// highlight any text inside board div with datahighlightflag set true
		texthighlight($board);
		vocabcontroller.findwords(countNext);
		put_image(content, countNext);
		content[countNext].imageload?put_image2(content, countNext):"";
		content[countNext].sliderload?put_image3(content, countNext):"";
	 	var count  = 0;
		function soundAnimate(sounds,count,arrayCountToShow){
			createjs.Sound.stop();
			current_sound = createjs.Sound.play(sounds[arrayCountToShow][count]);
			current_sound.play();
			$(".div"+(count+1)).addClass("fadeInFirst");
			count++;
			if(count <=2){
				current_sound.on('complete',function(){
					soundAnimate(sounds,count,arrayCountToShow);
				});
			}
			else{
				current_sound.on('complete', function(){
					$(".speakerimg").css('pointer-events','auto');
					nav_button_controls(0);
				});
			}
		}

		var soundCount = 0;
		function btnClk(sounds, arrayNumber){
			var count = 1;
			// sound_player(sounds[arrayNumber][count]);
			$(".arrow").css('pointer-events', 'none');
			createjs.Sound.stop();
			current_sound_1 = createjs.Sound.play(sounds[arrayNumber][count]);
			current_sound_1.play();
			current_sound_1.on('complete',function(){
				$(".arrow").css('pointer-events', 'auto');
				$(".arrow").addClass("hghlghtAnim");
			});
			$(".arrow").click(function(){
				count+=1;
				soundCount+=1;
				count>2?count = 0:count;
				$(".arrow").removeClass("hghlghtAnim");
				$(".arrow").css('pointer-events', 'none');
				var selectImg = $(".slider:eq(0)");
				$(".innerwrapper").append(selectImg.clone());
				selectImg.animate({
					height: "0%",
					padding: "0%"
				},1000,function(){
					selectImg.remove();
					createjs.Sound.stop();
					current_sound_1 = createjs.Sound.play(sounds[arrayNumber][count]);
					current_sound_1.play();
					current_sound_1.on('complete', function(){
						$(".arrow").css('pointer-events', 'auto');
						$(".arrow").addClass("hghlghtAnim");
						soundCount==2?nav_button_controls(0):"";
					});
				});
			});
		}
		switch(countNext) {
		case 1:
		case 4:
		case 7:
		case 10:
		case 13:
		case 16:
		case 19:
		case 22:
		case 25:
		case 28:
			var soundArray = [["q_queen", "q_question", "q_quill"],
												["r_rabbit", "r_rainbow", "r_rice"],
												["s_school", "s_snake", "s_sun"],
												["t_table", "t_tiger", "t_tree"],
												["u_umbrella", "u_uncle", "u_up"],
												["v_van", "v_vest", "v_village"],
												["w_watch", "w_watermelon", "w_window"],
												["x_xmas", "x_xray", "x_xylophone"],
												["y_yak", "y_yellow", "y_yoyo"],
												["z_zebra", "z_zipper", "z_zoo"],
											];
			var arrayNumber = countNext==1?0:countNext==4?1:countNext==7?2:countNext==10?3:countNext==13?4
														:countNext==16?5:countNext==19?6:countNext==22?7:countNext==25?8:9;
			btnClk(soundArray, arrayNumber);
		break;
		case 2:
		case 5:
		case 8:
		case 11:
		case 14:
		case 17:
		case 20:
		case 23:
		case 26:
		case 29:
		var topSounds = ["sound_letter_1","sound_letter_2","sound_letter_3",
										 "sound_letter_4","sound_letter_5","sound_letter_6",
									   "sound_letter_7","sound_letter_8","sound_letter_9",
									   "sound_letter_10",
									  ];
		var sounds = [["q_question", "q_quill", "q_queen"],
						["r_rainbow", "r_rice","r_rabbit"],
						["s_snake", "s_sun","s_school"],
						["t_tiger", "t_tree","t_table"],
						["u_uncle", "u_up","u_umbrella"],
						["v_vest", "v_village","v_van"],
						["w_watermelon", "w_window","w_watch"],
						["x_xray", "x_xylophone","x_xmas"],
						["y_yellow", "y_yoyo","y_yak"],
						["z_zipper", "z_zoo","z_zebra"],
					];
		var arrayCountToShow = countNext==2?0:countNext==5?1:countNext==8?2:countNext==11?3:countNext==14?4
											:countNext==17?5:countNext==20?6:countNext==23?7:countNext==26?8:9;
			sound_player(topSounds[arrayCountToShow]);
			setTimeout(function(){
				$(".btmContainer").animate({
					top: "42%"
				},1000);
			},1500);
			setTimeout(function(){
				soundAnimate(sounds,count,arrayCountToShow);
			},2500);

			$(".spkrTop").on('click', function(){
				sound_player(topSounds[arrayCountToShow]);
			});
			$(".spkr1").on('click', function(){
				sound_player(sounds[arrayCountToShow][2]);
			});
			$(".spkr2").on('click', function(){
				sound_player(sounds[arrayCountToShow][0]);
			});
			$(".spkr3").on('click', function(){
				sound_player(sounds[arrayCountToShow][1]);
			});
		break;
		case 0:
		case 3:
		case 6:
		case 9:
		case 12:
		case 15:
		case 18:
		case 21:
		case 24:
		case 27:
				if(countNext>0) $prevBtn.show(0);
				var letterSoundArray = ['sound_letter_1', 'sound_letter_2', 'sound_letter_3', 'sound_letter_4', 'sound_letter_5', 'sound_letter_6', 'sound_letter_7', 'sound_letter_8', 'sound_letter_9', 'sound_letter_10'];
				var soundArray = ['sound_0', 'sound_2', 'sound_4', 'sound_6', 'sound_8', 'sound_10', 'sound_12', 'sound_14', 'sound_16', 'sound_18'];
				var letterSVG = ['letter-q', 'letter-r', 'letter-s', 'letter-t', 'letter-u', 'letter-v', 'letter-w', 'letter-x', 'letter-y', 'letter-z'];
				var letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
				var s = Snap('#letter-svg');
				var newCount = countNext/3;
				var path = [], group, animate_letter = null;
				var svg = Snap.load(preload.getResult(letterSVG[newCount]).src, function ( loadedFragment ) {
					s.append(loadedFragment);
					//to resive whole svg
					for(var i=0; i<5; i++){
						if(Snap.select('#path'+i)!=null)
						path.push(Snap.select('#path'+i));
					}
					group = Snap.select('#gr');
					path[0].addClass('opacity_0');
					var animatePath = function(pathName, index, callback){
						var curIndex = index;
						var soundName = ('step_'+(pathName.length-1))+(index+1);
						// audio for 1, 2, 3....
						// sound_player(soundName);
						console.log(pathName);
						if(index == 0){
							pathName[index+1].addClass('line-anim-1');
						} else{
							pathName[index+1].addClass('line-anim-css');
						}
						timeoutvar = setTimeout(function(){
							curIndex = index+1;
							if(index<pathName.length-2){
								callback(pathName, curIndex, callback);
							}else{
								$nextBtn.show(0);
								sound_player(letterSoundArray[newCount]);
							}
						}, 2000);
					};
					animate_letter = function(){
						group.attr('display', 'block');
						path[0].addClass('letter-fade-in-'+letterArr[newCount]);
						group.addClass('letter-fade-out-'+letterArr[newCount]);
						for(var i=1; i<path.length; i++){
							path[i].addClass('no-dash-'+letterArr[newCount]);
						}
						animatePath(path, 0, animatePath);
					};
				} );
				current_sound = createjs.Sound.play(soundArray[newCount]);
				current_sound.play();
				// alert(soundArray[newCount]);
				current_sound.on("complete", function(){
					animate_letter();
					// alert(soundArray[newCount]);
				});
				break;
			default:
				$prevBtn.show(0);
				timeoutvar = setTimeout(function(){
					sound_nav('sound_'+countNext);
				}, 300);
				break;
		}
	}
	function nav_button_controls(delay_ms){
		timeoutvar = setTimeout(function(){
			if(countNext==0){
				$nextBtn.show(0);
			} else if( countNext>0 && countNext == $total_page-1){
				$prevBtn.show(0);
				ole.footerNotificationHandler.lessonEndSetNotification();
			} else{
				$prevBtn.show(0);
				$nextBtn.show(0);
			}
		},delay_ms);
	}
	function sound_player(sound_id){
		createjs.Sound.stop();
		current_sound = createjs.Sound.play(sound_id);
		current_sound.play();
	}
	function sound_nav(sound_id){
		createjs.Sound.stop();
		current_sound = createjs.Sound.play(sound_id);
		current_sound.play();
		current_sound.on("complete", function(){
			nav_button_controls(0);
		});
	}

	function put_image(content, count){
		if(content[count].hasOwnProperty('imageblock')){
			var imageblock = content[count].imageblock[0];
			if(imageblock.hasOwnProperty('imagestoshow')){
				var imageClass = imageblock.imagestoshow;
				for(var i=0; i<imageClass.length; i++){
					var image_src = preload.getResult(imageClass[i].imgid).src;
					//get list of classes
					var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
					var selector = ('.'+classes_list[classes_list.length-1]);
					$(selector).attr('src', image_src);
				}
			}
		}
	}
	function put_image2(content, count){
		if(content[count].imgspkrcontainer[0].hasOwnProperty('imagedivblock')){
			var imagblockVal = content[count].imgspkrcontainer[0];
			for(var j=0; j<imagblockVal.imagedivblock.length; j++){
				var imageblock = imagblockVal.imagedivblock[j];
				if(imageblock.hasOwnProperty('imagestoshow')){
					var imageClass = imageblock.imagestoshow;
					for(var i=0; i<imageClass.length; i++){
						var image_src = preload.getResult(imageClass[i].imgid).src;
						//get list of classes
						var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
						var selector = ('.'+classes_list[classes_list.length-1]);
						$(selector).attr('src', image_src);
					}
				}
			}
		}
	}

	function put_image3(content, count){
		if(content[count].hasOwnProperty('slider')){
			var imageblock = content[count].slider[0];
			if(imageblock.hasOwnProperty('imagestoshow')){
				var imageClass = imageblock.imagestoshow;
				for(var i=0; i<imageClass.length; i++){
					var image_src = preload.getResult(imageClass[i].imgid).src;
					//get list of classes
					var classes_list = imageClass[i].imgclass.match(/\S+/g) || [];
					var selector = ('.'+classes_list[classes_list.length-1]);
					$(selector).attr('src', image_src);
				}
			}
		}
	}
	function templateCaller() {
		$prevBtn.css('display', 'none');
		$nextBtn.css('display', 'none');

		navigationcontroller();

		generaltemplate();
		loadTimelineProgress($total_page, countNext + 1);
		 /*
		for (var i = 0; i < content.length; i++) {
			slides(i);
			$($('.totalsequence')[i]).html(i);
			$($('.totalsequence')[i]).css({'color':'red',"height": "4.3vmin",
				"width": "4.3vmin" , "cursor" : "pointer","text-align":"center"
			});
		}
		function slides(i){
				$($('.totalsequence')[i]).click(function(){
					countNext = i;
					createjs.Sound.stop();
					templateCaller();
				});
			}
	*/
	}

	$nextBtn.on('click', function() {
		clearTimeout(timeoutvar);
		createjs.Sound.stop();
		for(var i=0; i<timeoutArr.length; i++){
			clearTimeout(timeoutArr[i]);
		}
		switch(countNext) {
		default:
			countNext++;
			templateCaller();
			break;
		}
	});

	$refreshBtn.click(function(){
		templateCaller();
	});

	$prevBtn.on('click', function() {
		createjs.Sound.stop();
		clearTimeout(timeoutvar);
		for(var i=0; i<timeoutArr.length; i++){
			clearTimeout(timeoutArr[i]);
		}
		countNext--;
		templateCaller();
		/* if footerNotificationHandler pageEndSetNotification was called then on click of
		 previous slide button hide the footernotification */
		countNext < $total_page ? ole.footerNotificationHandler.hideNotification() : null;
	});

});
