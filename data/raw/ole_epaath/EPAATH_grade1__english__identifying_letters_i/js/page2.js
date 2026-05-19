var imgpath = $ref + "/images/";
var soundAsset = $ref+"/sounds/";

var content=[
	// A slide1
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
					imgid : 'letter-a'
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
						imgid : 'letter-a'
					},
					{
						imgclass : "letter-fade-out2 letter-right",
						imgsrc : '',
						imgid : 'letter-a'
					}
				]
			}],
			slider:[{
				imagestoshow:[{
					imgclass : "slideimg si1",
					imgsrc : '',
					imgid : 'ant',
					textdata: data.string.ant,
					textclass: "slideTxt",
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
				},{
					imgclass : "slideimg si2",
					imgsrc : '',
					imgid : 'apple',
					textdata: data.string.apple,
					textclass: "slideTxt",
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
				},{
					imgclass : "slideimg si3",
					imgsrc : '',
					imgid : 'arrow',
					textdata: data.string.arrow,
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
					imgid : 'ant',
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
					textclass:"boxTxt",
					textdata:data.string.ant,
					speakerimgclass:"speakerimg spkr1"
				},{
				imagediv:"imgdiv div1",
					imgclass : "imgbox ib2",
					imgsrc : '',
					imgid : 'apple',
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
					textclass:"boxTxt",
					textdata:data.string.apple,
					speakerimgclass:"speakerimg spkr2"
				},{
				imagediv:"imgdiv div2",
					imgclass : "imgbox ib3",
					imgsrc : '',
					imgid : 'arrow',
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
					textclass:"boxTxt",
					textdata:data.string.arrow,
					speakerimgclass:"speakerimg spkr3"
			}]
			},
			{
			imagescontainerclass:"topLtrContainer",
			imagestoshow:[{
			imagediv:"topLtrBox fadeInFirst",
				imgclass : "letterImg",
				imgsrc : '',
				imgid : 'letter-a',
				speakerimgclass:"speakerimg spkrTop"
			}]
		}]
	}]
	},

	// B slide 4
	{
		contentnocenteradjust: true,
		contentblockadditionalclass: 'bg-b',
		extratextblock:[{
			textdata: '',
			textclass: "divider divider-b",
		}],

		imageblock:[{
			imagestoshow : [
				{
					imgclass : "letter-left",
					imgsrc : '',
					imgid : 'letter-b'
				}
			]
		}],
		svgblock: [{
			svgblock: 'letter-svg',
		}],
	},
	// slide5
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
						imgid : 'letter-b'
					},
					{
						imgclass : "letter-fade-out2 letter-right",
						imgsrc : '',
						imgid : 'letter-b'
					}
				]
			}],
			slider:[{
				imagestoshow:[{
					imgclass : "slideimg si1",
					imgsrc : '',
					imgid : 'ball',
					textdata: data.string.ball,
					textclass: "slideTxt",
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
				},{
					imgclass : "slideimg si2",
					imgsrc : '',
					imgid : 'book',
					textdata: data.string.book,
					textclass: "slideTxt",
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
				},{
					imgclass : "slideimg si3",
					imgsrc : '',
					imgid : 'boy',
					textdata: data.string.boy,
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
					imgid : 'ball',
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
					textclass:"boxTxt",
					textdata:data.string.ball,
					speakerimgclass:"speakerimg spkr1"
				},{
				imagediv:"imgdiv div1",
					imgclass : "imgbox ib2",
					imgsrc : '',
					imgid : 'book',
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
					textclass:"boxTxt",
					textdata:data.string.book,
					speakerimgclass:"speakerimg spkr2"
				},{
				imagediv:"imgdiv div2",
					imgclass : "imgbox ib3",
					imgsrc : '',
					imgid : 'boy',
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
					textclass:"boxTxt",
					textdata:data.string.boy,
					speakerimgclass:"speakerimg spkr3"
			}]
			},
			{
			imagescontainerclass:"topLtrContainer",
			imagestoshow:[{
			imagediv:"topLtrBox fadeInFirst",
				imgclass : "letterImg",
				imgsrc : '',
				imgid : 'letter-b',
				speakerimgclass:"speakerimg spkrTop"
			}]
		}]
	}]
	},


	//C slide 7
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
					imgid : 'letter-c'
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
						imgid : 'letter-c'
					},
					{
						imgclass : "letter-fade-out2 letter-right",
						imgsrc : '',
						imgid : 'letter-c'
					}
				]
			}],
			slider:[{
				imagestoshow:[{
					imgclass : "slideimg si1",
					imgsrc : '',
					imgid : 'cat',
					textdata: data.string.cat,
					textclass: "slideTxt",
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
				},{
					imgclass : "slideimg si2",
					imgsrc : '',
					imgid : 'computer',
					textdata: data.string.computer,
					textclass: "slideTxt",
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
				},{
					imgclass : "slideimg si3",
					imgsrc : '',
					imgid : 'cow',
					textdata: data.string.cow,
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
					imgid : 'cat',
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
					textclass:"boxTxt",
					textdata:data.string.cat,
					speakerimgclass:"speakerimg spkr1"
				},{
				imagediv:"imgdiv div1",
					imgclass : "imgbox ib2",
					imgsrc : '',
					imgid : 'computer',
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
					textclass:"boxTxt",
					textdata:data.string.computer,
					speakerimgclass:"speakerimg spkr2"
				},{
				imagediv:"imgdiv div2",
					imgclass : "imgbox ib3",
					imgsrc : '',
					imgid : 'cow',
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
					textclass:"boxTxt",
					textdata:data.string.cow,
					speakerimgclass:"speakerimg spkr3"
			}]
			},
			{
			imagescontainerclass:"topLtrContainer",
			imagestoshow:[{
			imagediv:"topLtrBox fadeInFirst",
				imgclass : "letterImg",
				imgsrc : '',
				imgid : 'letter-c',
				speakerimgclass:"speakerimg spkrTop"
			}]
		}]
	}]
	},


	//D slide 10
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
					imgid : 'letter-d'
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
						imgid : 'letter-d'
					},
					{
						imgclass : "letter-fade-out2 letter-right",
						imgsrc : '',
						imgid : 'letter-d'
					}
				]
			}],
			slider:[{
				imagestoshow:[{
					imgclass : "slideimg si1",
					imgsrc : '',
					imgid : 'doctor',
					textdata: data.string.doctor,
					textclass: "slideTxt",
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
				},{
					imgclass : "slideimg si2",
					imgsrc : '',
					imgid : 'dog',
					textdata: data.string.dog,
					textclass: "slideTxt",
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
				},{
					imgclass : "slideimg si3",
					imgsrc : '',
					imgid : 'duck',
					textdata: data.string.duck,
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
					imgid : 'doctor',
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
					textclass:"boxTxt",
					textdata:data.string.doctor,
					speakerimgclass:"speakerimg spkr1"
				},{
				imagediv:"imgdiv div1",
					imgclass : "imgbox ib2",
					imgsrc : '',
					imgid : 'dog',
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
					textclass:"boxTxt",
					textdata:data.string.dog,
					speakerimgclass:"speakerimg spkr2"
				},{
				imagediv:"imgdiv div2",
					imgclass : "imgbox ib3",
					imgsrc : '',
					imgid : 'duck',
					datahighlightflag:'true',
					datahighlightcustomclass:'grayLtr',
					textclass:"boxTxt",
					textdata:data.string.duck,
					speakerimgclass:"speakerimg spkr3"
			}]
			},
			{
			imagescontainerclass:"topLtrContainer",
			imagestoshow:[{
			imagediv:"topLtrBox fadeInFirst",
				imgclass : "letterImg",
				imgsrc : '',
				imgid : 'letter-d',
				speakerimgclass:"speakerimg spkrTop"
			}]
		}]
	}]
	},


	//E slide 13
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
					imgid : 'letter-e'
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
					imgid : 'letter-e'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-e'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'eagle',
				textdata: data.string.eagle,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'egg',
				textdata: data.string.egg,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'elephant',
				textdata: data.string.elephant,
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
				imgid : 'eagle',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.eagle,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'egg',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.egg,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'elephant',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.elephant,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-e',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},


	//F slide 16
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
					imgid : 'letter-f'
				}
			]
		}],
		svgblock: [{
			svgblock: 'letter-svg',
		}],
	},
	// slide 17
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
					imgid : 'letter-f'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-f'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'fish',
				textdata: data.string.fish,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'flag',
				textdata: data.string.flag,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'flower',
				textdata: data.string.flower,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			}]
		}]
	},
	// slide 18
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
				imgid : 'fish',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.fish,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'flag',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.flag,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'flower',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.flower,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-f',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},


	//G slide 19
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
					imgid : 'letter-g'
				}
			]
		}],
		svgblock: [{
			svgblock: 'letter-svg',
		}],
	},
	// slide 20
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
					imgid : 'letter-g'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-g'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'girl',
				textdata: data.string.girl,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'glass',
				textdata: data.string.glass,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'goat',
				textdata: data.string.goat,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			}]
		}]
	},
	// slide 21
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
				imgid : 'girl',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.girl,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'glass',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.glass,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'goat',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.goat,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-g',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},


	//H slide 20
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
					imgid : 'letter-h'
				}
			]
		}],
		svgblock: [{
			svgblock: 'letter-svg',
		}],
	},
	// slide 21
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
					imgid : 'letter-h'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-h'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'hand',
				textdata: data.string.hand,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'hat',
				textdata: data.string.hat,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'hen',
				textdata: data.string.hen,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			}]
		}]
	},
	// slide 22
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
				imgid : 'hand',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.hand,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'hat',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.hat,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'hen',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.hen,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-h',
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
			{id: "ant", src: imgpath+"p2/ant.png", type: createjs.AbstractLoader.IMAGE},
			{id: "apple", src: imgpath+"p2/apple.png", type: createjs.AbstractLoader.IMAGE},
			{id: "arrow", src: imgpath+"p2/arrow.png", type: createjs.AbstractLoader.IMAGE},

			{id: "ball", src: imgpath+"p2/ball.png", type: createjs.AbstractLoader.IMAGE},
			{id: "book", src: imgpath+"p2/book.png", type: createjs.AbstractLoader.IMAGE},
			{id: "boy", src: imgpath+"p2/boy.png", type: createjs.AbstractLoader.IMAGE},

			{id: "cat", src: imgpath+"p2/cat.png", type: createjs.AbstractLoader.IMAGE},
			{id: "computer", src: imgpath+"p2/computer.png", type: createjs.AbstractLoader.IMAGE},
			{id: "cow", src: imgpath+"p2/cow.png", type: createjs.AbstractLoader.IMAGE},

			{id: "doctor", src: imgpath+"p2/doctor.png", type: createjs.AbstractLoader.IMAGE},
			{id: "dog", src: imgpath+"p2/dog.png", type: createjs.AbstractLoader.IMAGE},
			{id: "duck", src: imgpath+"p2/duck.png", type: createjs.AbstractLoader.IMAGE},

			{id: "eagle", src: imgpath+"p2/eagle.png", type: createjs.AbstractLoader.IMAGE},
			{id: "egg", src: imgpath+"p2/egg.png", type: createjs.AbstractLoader.IMAGE},
			{id: "elephant", src: imgpath+"p2/elephant.png", type: createjs.AbstractLoader.IMAGE},

			{id: "fish", src: imgpath+"p2/fish.png", type: createjs.AbstractLoader.IMAGE},
			{id: "flag", src: imgpath+"p2/flag.png", type: createjs.AbstractLoader.IMAGE},
			{id: "flower", src: imgpath+"p2/flower.png", type: createjs.AbstractLoader.IMAGE},

			{id: "girl", src: imgpath+"p2/girl.png", type: createjs.AbstractLoader.IMAGE},
			{id: "glass", src: imgpath+"p2/glass.png", type: createjs.AbstractLoader.IMAGE},
			{id: "goat", src: imgpath+"p2/goat.png", type: createjs.AbstractLoader.IMAGE},

			{id: "hand", src: imgpath+"p2/hand.png", type: createjs.AbstractLoader.IMAGE},
			{id: "hat", src: imgpath+"p2/hat.png", type: createjs.AbstractLoader.IMAGE},
			{id: "hen", src: imgpath+"p2/hen.png", type: createjs.AbstractLoader.IMAGE},

			{id: "letter-a", src: imgpath+"letters/A.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-b", src: imgpath+"letters/B.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-c", src: imgpath+"letters/C.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-d", src: imgpath+"letters/D.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-e", src: imgpath+"letters/E.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-f", src: imgpath+"letters/F.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-g", src: imgpath+"letters/G.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-h", src: imgpath+"letters/H.svg", type: createjs.AbstractLoader.IMAGE},

			// sounds



			{id: "sound_letter_1", src: soundAsset+"page2/a.mp3"},
			{id: "sound_letter_2", src: soundAsset+"page2/b.mp3"},
			{id: "sound_letter_3", src: soundAsset+"page2/c.mp3"},
			{id: "sound_letter_4", src: soundAsset+"page2/d.mp3"},
			{id: "sound_letter_5", src: soundAsset+"page2/e.mp3"},
			{id: "sound_letter_6", src: soundAsset+"page2/f.mp3"},
			{id: "sound_letter_7", src: soundAsset+"page2/g.mp3"},
			{id: "sound_letter_8", src: soundAsset+"page2/h.mp3"},

			{id: "sound_0", src: soundAsset+"how to write a.mp3"},
			{id: "sound_2", src: soundAsset+"how to write b.mp3"},
			{id: "sound_4", src: soundAsset+"how to write c.mp3"},
			{id: "sound_6", src: soundAsset+"how to write d.mp3"},
			{id: "sound_8", src: soundAsset+"how to write e.mp3"},
			{id: "sound_10", src: soundAsset+"how to write f.mp3"},
			{id: "sound_12", src: soundAsset+"how to write g.mp3"},
			{id: "sound_14", src: soundAsset+"how to write h.mp3"},

			{id: "a_ant", src: soundAsset+"page2/a_ant.mp3"},
			{id: "a_apple", src: soundAsset+"page2/a_apple.mp3"},
			{id: "a_arrow", src: soundAsset+"page2/a_arrow.mp3"},

			{id: "b_ball", src: soundAsset+"page2/b_ball.mp3"},
			{id: "b_book", src: soundAsset+"page2/b_book.mp3"},
			{id: "b_boy", src: soundAsset+"page2/b_boy.mp3"},

			{id: "c_cat", src: soundAsset+"page2/c_cat.mp3"},
			{id: "c_computer", src: soundAsset+"page2/c_computer.mp3"},
			{id: "c_cow", src: soundAsset+"page2/c_cow.mp3"},

			{id: "d_doctor", src: soundAsset+"page2/d_doctor.mp3"},
			{id: "d_dog", src: soundAsset+"page2/d_dog.mp3"},
			{id: "d_duck", src: soundAsset+"page2/d_duck.mp3"},

			{id: "e_eagle", src: soundAsset+"page2/e_eagle.mp3"},
			{id: "e_egg", src: soundAsset+"page2/e_egg.mp3"},
			{id: "e_elephant", src: soundAsset+"page2/e_elephant.mp3"},

			{id: "f_fish", src: soundAsset+"page2/f_fish.mp3"},
			{id: "f_flag", src: soundAsset+"page2/f_flag.mp3"},
			{id: "f_flower", src: soundAsset+"page2/f_flower.mp3"},

			{id: "g_girl", src: soundAsset+"page2/g_girl.mp3"},
			{id: "g_glass", src: soundAsset+"page2/g_glass.mp3"},
			{id: "g_goat", src: soundAsset+"page2/g_goat.mp3"},

			{id: "h_hand", src: soundAsset+"page2/h_hand.mp3"},
			{id: "h_hat", src: soundAsset+"page2/h_hat.mp3"},
			{id: "h_hen", src: soundAsset+"page2/h_hen.mp3"},


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
		function btnClk(sounds){
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
				// count ==3?nav_button_controls(0):"";
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
			var soundArray = [["a_ant", "a_apple", "a_arrow"],
										["b_ball", "b_book", "b_boy"],
										["c_cat", "c_computer", "c_cow"],
										["d_doctor", "d_dog", "d_duck"],
										["e_eagle", "e_egg", "e_elephant"],
										["f_fish", "f_flag", "f_flower"],
										["g_girl", "g_glass", "g_goat"],
										["h_hand", "h_hat", "h_hen"],
									];
			var arrayNumber = countNext==1?0:countNext==4?1:countNext==7?2:countNext==10?3:countNext==13?4
														:countNext==16?5:countNext==19?6:countNext==22?7:countNext==25?8:10;
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
		var topSounds = ["sound_letter_1","sound_letter_2","sound_letter_3",
										 "sound_letter_4","sound_letter_5","sound_letter_6",
									   "sound_letter_7","sound_letter_8"
									  ];
		var sounds = [[ "a_apple", "a_arrow","a_ant"],
						[ "b_book", "b_boy","b_ball"],
						[ "c_computer", "c_cow", "c_cat"],
						[ "d_dog", "d_duck","d_doctor"],
						[ "e_egg", "e_elephant","e_eagle"],
						[ "f_flag", "f_flower","f_fish"],
						[ "g_glass", "g_goat","g_girl"],
						[ "h_hat", "h_hen","h_hand"],
					];
		var arrayCountToShow = countNext==2?0:countNext==5?1:countNext==8?2:countNext==11?3:countNext==14?4
										      :countNext==17?5:countNext==20?6:countNext==23?7:10;
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
				if(countNext>0) $prevBtn.show(0);
				var letterSoundArray = ['sound_letter_1', 'sound_letter_2', 'sound_letter_3', 'sound_letter_4', 'sound_letter_5', 'sound_letter_6', 'sound_letter_7', 'sound_letter_8'];
				var soundArray = ['sound_0', 'sound_2', 'sound_4', 'sound_6', 'sound_8', 'sound_10', 'sound_12', 'sound_14'];
				var letterSVG = ['letter-a', 'letter-b', 'letter-c', 'letter-d', 'letter-e', 'letter-f', 'letter-g', 'letter-h'];
				var letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
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
				current_sound.on("complete", function(){
					animate_letter();
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
