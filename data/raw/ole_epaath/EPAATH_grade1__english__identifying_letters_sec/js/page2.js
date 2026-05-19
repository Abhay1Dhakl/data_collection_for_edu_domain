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
					imgid : 'letter-i'
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
					imgid : 'letter-i'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-i'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgdiv:"slider1",
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'igloo',
				textdata: data.string.igloo,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgdiv:"slider2",
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'inkpot',
				textdata: data.string.inkpot,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgdiv:"slider3",
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'insect',
				textdata: data.string.insect,
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
				imgid : 'igloo',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.igloo,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'inkpot',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.inkpot,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'insect',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.insect,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-i',
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
					imgid : 'letter-j'
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
					imgid : 'letter-j'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-j'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'jacket',
				textdata: data.string.jacket,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'jug',
				textdata: data.string.jug,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'juice',
				textdata: data.string.juice,
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
				imgid : 'jacket',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.jacket,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'jug',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.jug,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'juice',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.juice,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-j',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},
	// slide 7
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
					imgid : 'letter-k'
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
					imgid : 'letter-k'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-k'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'key',
				textdata: data.string.key,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'king',
				textdata: data.string.king,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'kite',
				textdata: data.string.kite,
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
				imgid : 'key',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.key,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'king',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.king,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'kite',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.kite,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-k',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},

//l slide 10
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
					imgid : 'letter-l'
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
					imgid : 'letter-l'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-l'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'ladder',
				textdata: data.string.ladder,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'leaf',
				textdata: data.string.leaf,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'lion',
				textdata: data.string.lion,
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
				imgid : 'ladder',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.ladder,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'leaf',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.leaf,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'lion',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.lion,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-l',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},

	//M slide 13
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
					imgid : 'letter-m'
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
					imgid : 'letter-m'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-m'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'man',
				textdata: data.string.man,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'mango',
				textdata: data.string.mango,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'moon',
				textdata: data.string.moon,
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
				imgid : 'man',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.man,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'mango',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.mango,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'moon',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.moon,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-m',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},

	//N slide15
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
					imgid : 'letter-n'
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
					imgid : 'letter-n'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-n'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'nest',
				textdata: data.string.nest,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'nose',
				textdata: data.string.nose,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'nurse',
				textdata: data.string.nurse,
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
				imgid : 'nest',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.nest,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'nose',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.nose,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'nurse',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.nurse,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-n',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},
	//O slide18
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
					imgid : 'letter-o'
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
					imgid : 'letter-o'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-o'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'octopus',
				textdata: data.string.octopus,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'orange',
				textdata: data.string.orange,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'ostrich',
				textdata: data.string.ostrich,
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
				imgid : 'octopus',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.octopus,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'orange',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.orange,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'ostrich',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.ostrich,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-o',
			speakerimgclass:"speakerimg spkrTop"
		}]
	}]
}]
},


	//P slide 21
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
					imgid : 'letter-p'
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
					imgid : 'letter-p'
				},
				{
					imgclass : "letter-fade-out2 letter-right",
					imgsrc : '',
					imgid : 'letter-p'
				}
			]
		}],
		slider:[{
			imagestoshow:[{
				imgclass : "slideimg si1",
				imgsrc : '',
				imgid : 'pig',
				textdata: data.string.pig,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si2",
				imgsrc : '',
				imgid : 'pan',
				textdata: data.string.pan,
				textclass: "slideTxt",
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
			},{
				imgclass : "slideimg si3",
				imgsrc : '',
				imgid : 'pencil',
				textdata: data.string.pencil,
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
				imgid : 'pig',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.pig,
				speakerimgclass:"speakerimg spkr1"
			},{
			imagediv:"imgdiv div1",
				imgclass : "imgbox ib2",
				imgsrc : '',
				imgid : 'pan',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.pan,
				speakerimgclass:"speakerimg spkr2"
			},{
			imagediv:"imgdiv div2",
				imgclass : "imgbox ib3",
				imgsrc : '',
				imgid : 'pencil',
				datahighlightflag:'true',
				datahighlightcustomclass:'grayLtr',
				textclass:"boxTxt",
				textdata:data.string.pencil,
				speakerimgclass:"speakerimg spkr3"
		}]
		},
		{
		imagescontainerclass:"topLtrContainer",
		imagestoshow:[{
		imagediv:"topLtrBox fadeInFirst",
			imgclass : "letterImg",
			imgsrc : '',
			imgid : 'letter-p',
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
			{id: "igloo", src: imgpath+"p2/indego.png", type: createjs.AbstractLoader.IMAGE},
			{id: "inkpot", src: imgpath+"p2/ink_pot.png", type: createjs.AbstractLoader.IMAGE},
			{id: "insect", src: imgpath+"p2/insect01.png", type: createjs.AbstractLoader.IMAGE},

			{id: "jacket", src: imgpath+"p2/jacket.png", type: createjs.AbstractLoader.IMAGE},
			{id: "jug", src: imgpath+"p2/jug.png", type: createjs.AbstractLoader.IMAGE},
			{id: "juice", src: imgpath+"p2/juice.png", type: createjs.AbstractLoader.IMAGE},

			{id: "key", src: imgpath+"p2/key.png", type: createjs.AbstractLoader.IMAGE},
			{id: "king", src: imgpath+"p2/king.png", type: createjs.AbstractLoader.IMAGE},
			{id: "kite", src: imgpath+"p2/kite.png", type: createjs.AbstractLoader.IMAGE},

			{id: "ladder", src: imgpath+"p2/ladder.png", type: createjs.AbstractLoader.IMAGE},
			{id: "leaf", src: imgpath+"p2/leaf.png", type: createjs.AbstractLoader.IMAGE},
			{id: "lion", src: imgpath+"p2/lion.png", type: createjs.AbstractLoader.IMAGE},

			{id: "man", src: imgpath+"p2/man.png", type: createjs.AbstractLoader.IMAGE},
			{id: "mango", src: imgpath+"p2/mango.png", type: createjs.AbstractLoader.IMAGE},
			{id: "moon", src: imgpath+"p2/moon.png", type: createjs.AbstractLoader.IMAGE},

			{id: "nest", src: imgpath+"p2/nest.png", type: createjs.AbstractLoader.IMAGE},
			{id: "nose", src: imgpath+"p2/nose.png", type: createjs.AbstractLoader.IMAGE},
			{id: "nurse", src: imgpath+"p2/nurse.png", type: createjs.AbstractLoader.IMAGE},

			{id: "octopus", src: imgpath+"p2/octopus.png", type: createjs.AbstractLoader.IMAGE},
			{id: "orange", src: imgpath+"p2/orange.png", type: createjs.AbstractLoader.IMAGE},
			{id: "ostrich", src: imgpath+"p2/ostrich.png", type: createjs.AbstractLoader.IMAGE},

			{id: "pig", src: imgpath+"p2/pig.png", type: createjs.AbstractLoader.IMAGE},
			{id: "pan", src: imgpath+"p2/pan.png", type: createjs.AbstractLoader.IMAGE},
			{id: "pencil", src: imgpath+"p2/pencil.png", type: createjs.AbstractLoader.IMAGE},

			{id: "letter-i", src: imgpath+"letters/I.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-j", src: imgpath+"letters/J.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-k", src: imgpath+"letters/K.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-l", src: imgpath+"letters/L.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-m", src: imgpath+"letters/M.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-n", src: imgpath+"letters/N.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-o", src: imgpath+"letters/O.svg", type: createjs.AbstractLoader.IMAGE},
			{id: "letter-p", src: imgpath+"letters/P.svg", type: createjs.AbstractLoader.IMAGE},

			// sounds



			{id: "sound_letter_1", src: soundAsset+"page2/i.mp3"},
			{id: "sound_letter_2", src: soundAsset+"page2/j.mp3"},
			{id: "sound_letter_3", src: soundAsset+"page2/k.mp3"},
			{id: "sound_letter_4", src: soundAsset+"page2/l.mp3"},
			{id: "sound_letter_5", src: soundAsset+"page2/m.mp3"},
			{id: "sound_letter_6", src: soundAsset+"page2/n.mp3"},
			{id: "sound_letter_7", src: soundAsset+"page2/o.mp3"},
			{id: "sound_letter_8", src: soundAsset+"page2/p.mp3"},

			{id: "sound_0", src: soundAsset+"new/how_to_write_i.mp3"},
			{id: "sound_2", src: soundAsset+"new/how_to_write_j.mp3"},
			{id: "sound_4", src: soundAsset+"new/how_to_write_k.mp3"},
			{id: "sound_6", src: soundAsset+"new/how_to_write_l.mp3"},
			{id: "sound_8", src: soundAsset+"new/how_to_write_m.mp3"},
			{id: "sound_10", src: soundAsset+"new/how_to_write_n.mp3"},
			{id: "sound_12", src: soundAsset+"new/how_to_write_o.mp3"},
			{id: "sound_14", src: soundAsset+"new/how_to_write_p.mp3"},

			{id: "s_igloo", src: soundAsset+"page2/i_igloo.mp3"},
			{id: "s_inkpot", src: soundAsset+"page2/i_inkpot.mp3"},
			{id: "s_insect", src: soundAsset+"page2/i_insect.mp3"},

			{id: "j_jacket", src: soundAsset+"page2/j_jacket.mp3"},
			{id: "j_jug", src: soundAsset+"page2/j_jug.mp3"},
			{id: "j_juice", src: soundAsset+"page2/j_juice.mp3"},

			{id: "k_key", src: soundAsset+"page2/k_key.mp3"},
			{id: "k_king", src: soundAsset+"page2/k_king.mp3"},
			{id: "k_kit", src: soundAsset+"page2/k_kit.mp3"},

			{id: "l_ladder", src: soundAsset+"page2/l_ladder.mp3"},
			{id: "l_leaf", src: soundAsset+"page2/l_leaf.mp3"},
			{id: "l_lion", src: soundAsset+"page2/l_lion.mp3"},

			{id: "m_man", src: soundAsset+"page2/m_man.mp3"},
			{id: "m_mango", src: soundAsset+"page2/m_mango.mp3"},
			{id: "m_moon", src: soundAsset+"page2/m_moon.mp3"},

			{id: "n_nest", src: soundAsset+"page2/n_nest.mp3"},
			{id: "n_nose", src: soundAsset+"page2/n_nose.mp3"},
			{id: "n_nurse", src: soundAsset+"page2/n_nurse.mp3"},

			{id: "o_octopus", src: soundAsset+"page2/o_octopus.mp3"},
			{id: "o_orange", src: soundAsset+"page2/o_orange.mp3"},
			{id: "o_ostrich", src: soundAsset+"page2/o_ostrich.mp3"},

			{id: "p_pan", src: soundAsset+"page2/p_pan.mp3"},
			{id: "p_pencil", src: soundAsset+"page2/p_pencil.mp3"},
			{id: "p_pig", src: soundAsset+"page2/p_pig.mp3"}

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
			var soundArray = [["s_igloo", "s_inkpot", "s_insect"],
												["j_jacket", "j_jug", "j_juice"],
												["k_key", "k_king", "k_kit"],
												["l_ladder", "l_leaf", "l_lion"],
												["m_man", "m_mango", "m_moon"],
												["n_nest", "n_nose", "n_nurse"],
												["o_octopus", "o_orange", "o_ostrich"],
												["p_pig", "p_pan", "p_pencil"],
											];
			var arrayNumber = countNext==1?0:countNext==4?1:countNext==7?2:countNext==10?3:countNext==13?4
														:countNext==16?5:countNext==19?6:countNext==22?7:countNext==25?8:10;
														// alert(arrayNumber)
			btnClk(soundArray);
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
									   "sound_letter_7","sound_letter_8",
									  ];
		var sounds = [["s_inkpot", "s_insect","s_igloo"],
									["j_jug", "j_juice","j_jacket"],
									["k_king", "k_kit","k_key"],
									["l_leaf", "l_lion","l_ladder"],
									["m_mango", "m_moon","m_man"],
									["n_nose", "n_nurse","n_nest"],
									["o_orange", "o_ostrich","o_octopus"],
									["p_pan", "p_pencil","p_pig"],
								];
		var arrayCountToShow = countNext==2?0:countNext==5?1:countNext==8?2:countNext==11?3:countNext==14?4
											:countNext==17?5:countNext==20?6:countNext==23?7:countNext==26?8:10;
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
				var letterSVG = ['letter-i', 'letter-j', 'letter-k', 'letter-l', 'letter-m', 'letter-n', 'letter-o', 'letter-p'];
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
						// var soundName = ('step_'+(pathName.length-1))+(index+1);
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

	function slidetheimage(){
		// var count = 1;
		// var prevSlider = $(".slider"+count);
		// $(".slider"+count).css("opacity","1")
		$(".arrow").click(function(){
			// prevSlider.removeClass("moveup");
			// // $(".slider"+count).css("opacity","0");
			// count = count<3?count+1:1;
			// prevSlider = $(".slider"+count);
			// console.log(count);
			// $(".slider"+count).addClass("moveup");
			$(".arrow").prop('disabled', true);
			var selectQuadImg = $(".slider :eq(0)");
			$(".innerwrapper").append(selectQuadImg.clone());
			selectQuadImg.animate({
				height: "0%",
				padding: "0%"
			},500,function(){
				$(".arrow").prop('disabled', false);
				selectQuadImg.remove();
			});
		});
	}

});
