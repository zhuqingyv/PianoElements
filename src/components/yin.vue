<template>
	<div class="yinBox">
		<div class="pianoBox">
			<audio :src="src1" class="audio" preload="load"></audio>
			<audio :src="src2" class="audio" preload="load"></audio>
			<audio :src="src3" class="audio" preload="load"></audio>
			<audio :src="src4" class="audio" preload="load"></audio>
			<audio :src="src5" class="audio" preload="load"></audio>
			<audio :src="src6" class="audio" preload="load"></audio>
			<audio :src="src7" class="audio" preload="load"></audio>
			<audio :src="src8" class="audio" preload="load"></audio>
			<!--小组-->
			<div class="small">
				<div class="white1 click" @click="A1" :class="{'active':Active.A1}">
					<p class="mainKey">A</p>
				</div>
				<div class="white2">
					<p>B</p>
				</div>
				<div class="black"></div>
			</div>
			<!--小组-->

			<!--大组-->
			<div class="bigBox">
				<div class="white11 p">
					<P>C</p>
				</div>
				<div class="white22 p">
					<p>D</p>
				</div>
				<div class="white33 p">
					<p>E</p>
				</div>
				<div class="white44 p">
					<p>F</p>
				</div>
				<div class="white55 p">
					<p>G</p>
				</div>
				<div class="white66 p click" @click="A2()" :class="{'active':Active.A2}">
					<p class="mainKey">A</p>
				</div>
				<div class="white77 p">
					<p>B</p>
				</div>
				<div class="black11"></div>
				<div class="black22"></div>
				<div class="black33"></div>
				<div class="black44"></div>
				<div class="black55"></div>
			</div>
			<!--大组-->


			<!--大组-->
			<div class="bigBox2">
				<div class="white11 p">
					<P>C</p>
				</div>
				<div class="white22 p">
					<p>D</p>
				</div>
				<div class="white33 p">
					<p>E</p>
				</div>
				<div class="white44 p">
					<p>F</p>
				</div>
				<div class="white55 p">
					<p>G</p>
				</div>
				<div class="white66 p click" @click="A3()" :class="{'active':Active.A3}">
					<p class="mainKey">A</p>
				</div>
				<div class="white77 p">
					<p>B</p>
				</div>
				<div class="black11"></div>
				<div class="black22"></div>
				<div class="black33"></div>
				<div class="black44"></div>
				<div class="black55"></div>
			</div>
			<!--大组-->


			<!--大组-->
			<div class="bigBox3">
				<div class="white11 p">
					<P>C</p>
				</div>
				<div class="white22 p">
					<p>D</p>
				</div>
				<div class="white33 p">
					<p>E</p>
				</div>
				<div class="white44 p">
					<p>F</p>
				</div>
				<div class="white55 p">
					<p>G</p>
				</div>
				<div class="white66 p click" @click="A4()" :class="{'active':Active.A4}">
					<p class="mainKey">A</p>
				</div>
				<div class="white77 p">
					<p>B</p>
				</div>
				<div class="black11"></div>
				<div class="black22"></div>
				<div class="black33"></div>
				<div class="black44"></div>
				<div class="black55"></div>
			</div>
			<!--大组-->


			<!--大组-->
			<div class="bigBox4">
				<div class="white11 p">
					<P>C</p>
				</div>
				<div class="white22 p">
					<p>D</p>
				</div>
				<div class="white33 p">
					<p>E</p>
				</div>
				<div class="white44 p">
					<p>F</p>
				</div>
				<div class="white55 p">
					<p>G</p>
				</div>
				<div class="white66 p click" @click="A5()" :class="{'active':Active.A5}">
					<p class="mainKey">A</p>
				</div>
				<div class="white77 p">
					<p>B</p>
				</div>
				<div class="black11"></div>
				<div class="black22"></div>
				<div class="black33"></div>
				<div class="black44"></div>
				<div class="black55"></div>
			</div>
			<!--大组-->


			<!--大组-->
			<div class="bigBox5">
				<div class="white11 p">
					<P>C</p>
				</div>
				<div class="white22 p">
					<p>D</p>
				</div>
				<div class="white33 p">
					<p>E</p>
				</div>
				<div class="white44 p">
					<p>F</p>
				</div>
				<div class="white55 p">
					<p>G</p>
				</div>
				<div class="white66 p click" @click="A6()" :class="{'active':Active.A6}">
					<p class="mainKey">A</p>
				</div>
				<div class="white77 p">
					<p>B</p>
				</div>
				<div class="black11"></div>
				<div class="black22"></div>
				<div class="black33"></div>
				<div class="black44"></div>
				<div class="black55"></div>
			</div>
			<!--大组-->

			<!--大组-->
			<div class="bigBox6">
				<div class="white11 p">
					<P>C</p>
				</div>
				<div class="white22 p">
					<p>D</p>
				</div>
				<div class="white33 p">
					<p>E</p>
				</div>
				<div class="white44 p">
					<p>F</p>
				</div>
				<div class="white55 p">
					<p>G</p>
				</div>
				<div class="white66 p click" @click="A7()" :class="{'active':Active.A7}">
					<p class="mainKey">A</p>
				</div>
				<div class="white77 p">
					<p>B</p>
				</div>
				<div class="black11"></div>
				<div class="black22"></div>
				<div class="black33"></div>
				<div class="black44"></div>
				<div class="black55"></div>
			</div>
			<!--大组-->


			<!--大组-->
			<div class="bigBox7">
				<div class="white11 p">
					<P>C</p>
				</div>
				<div class="white22 p">
					<p>D</p>
				</div>
				<div class="white33 p">
					<p>E</p>
				</div>
				<div class="white44 p">
					<p>F</p>
				</div>
				<div class="white55 p">
					<p>G</p>
				</div>
				<div class="white66 p click" @click="A8()" :class="{'active':Active.A8}">
					<p class="mainKey">A</p>
				</div>
				<div class="white77 p">
					<p>B</p>
				</div>
				<div class="black11"></div>
				<div class="black22"></div>
				<div class="black33"></div>
				<div class="black44"></div>
				<div class="black55"></div>
			</div>
			<!--大组-->
			<div class="CHeight p">
				<p>C</p>
			</div>
			<audio :src="src1" class="A1"></audio>
			<audio :src="src2" class="A2"></audio>
			<audio :src="src3" class="A3"></audio>
			<audio :src="src4" class="A4"></audio>
			<audio :src="src5" class="A5"></audio>
			<audio :src="src6" class="A6"></audio>
			<audio :src="src7" class="A7"></audio>
			<audio :src="src8" class="A8"></audio>
		</div>
		<div class="careBox">
			
			<span><img src="@/assets/care.png" /><span>乐音体系中，琴键上所标识并具有固定音高的音，用大写字母A表示此音的音名，即A音。</span></span>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Yin',
		data(){
			//1.92307692%盒子单位X白键
			return{
				src1:require('@/assets/audios/A1.mp3'),
				src2:require('@/assets/audios/A2.mp3'),
				src3:require('@/assets/audios/A3.mp3'),
				src4:require('@/assets/audios/A4.mp3'),
				src5:require('@/assets/audios/A5.mp3'),
				src6:require('@/assets/audios/A6.mp3'),
				src7:require('@/assets/audios/A7.mp3'),
				src8:require('@/assets/audios/A8.mp3'),
				audio1:true,
				audio2:true,
				audio3:true,
				audio4:true,
				audio5:true,
				audio6:true,
				audio7:true,
				audio8:true,
				Active:{
					A1:false,
					A2:false,
					A3:false,
					A4:false,
					A5:false,
					A6:false,
					A7:false,
					A8:false
				}
			}
		},
		methods:{
			endFunction(){
				alert("我是你爹");
			},
			A1(){
				var audio1 = document.querySelector(".A1");
				audio1.currentTime = 0;
				this.Active.A1 = true;
				if(this.audio1){
					audio1.play();
				}
				audio1.onended =()=>{
					this.Active.A1 = !this.Active.A1;
				}
			},
			A2(){
				var audio2 = document.querySelector(".A2");
				audio2.currentTime = 0;
				this.Active.A2 = true;
				if(this.audio2 = true){		
					audio2.play();
				}
				audio2.onended =()=>{
					this.Active.A2 = !this.Active.A2;
				}
			},
			A3(){
				var audio3 = document.querySelector(".A3");
				audio3.currentTime = 0;
				this.Active.A3 = true;
				if(this.audio3 = true){	
					audio3.play();
				}
				audio3.onended =()=>{
					this.Active.A3 = !this.Active.A3;
				}
			},
			A4(){
				var audio4 = document.querySelector(".A4");
				audio4.currentTime = 0;
				this.Active.A4 = true;
				if(this.audio4){
					audio4.play();
				}
				audio4.onended =()=>{
					this.Active.A4 = !this.Active.A4;
				}
			},
			A5(){
				var audio5 = document.querySelector(".A5");
				audio5.currentTime = 0;
				this.Active.A5 = true;
				if(this.audio5){
					audio5.play();
				}
				audio5.onended =()=>{
					this.Active.A5 = !this.Active.A5;
				}
			},
			A6(){
				var audio6 = document.querySelector(".A6");
				audio6.currentTime = 0;
				this.Active.A6 = true;
				if(this.audio6){
					audio6.play();
				}
				audio6.onended =()=>{
					this.Active.A6 = !this.Active.A6;
				}
			},
			A7(){
				var audio7 = document.querySelector(".A7");
				audio7.currentTime = 0;
				this.Active.A7 = true;
				if(this.audio7){
					audio7.play();
				}
				audio7.onended =()=>{
					this.Active.A7 = !this.Active.A7;
				}
			},
			A8(){
				var audio8 = document.querySelector(".A8");
				audio8.currentTime = 0;
				this.Active.A8 = true;
				if(this.audio8){
					audio8.play();
				}
				audio8.onended =()=>{
					this.Active.A8 = !this.Active.A8;
				}
			}
		}
	};
</script>
<style scoped>
audio{
	width:0;
	height:0;
	position: relative;
}
.click{
	cursor: pointer;
}
.CHeight{
	width:1.9%;
	height:100%;
	border:0.5px solid #000;
	position: absolute;
	background-color: #fff;
	left:96.2%;
	z-index: 888;
	border-bottom-left-radius:4px;
	border-bottom-right-radius:4px;
}
.p p{
	width:90%;
		font-size: 24px;
		font-weight: bold;
		color:#000;
		position: absolute;
		bottom: 2%;
		text-align: center;
		left:5%;
}
.bigBox{
	width:13.3%;
	height:100%;
	position: absolute;
	left:3.8%;
}
.bigBox2{
	width:13.3%;
	height:100%;
	position: absolute;
	left:17.1%;
}
.bigBox3{
	width:13.3%;
	height:100%;
	position: absolute;
	left:30.2%;
}
.bigBox4{
	width:13.3%;
	height:100%;
	position: absolute;
	left:43.4%;
}
.bigBox5{
	width:13.3%;
	height:100%;
	position: absolute;
	left:56.6%;
}
.bigBox6{
	width:13.3%;
	height:100%;
	position: absolute;
	left:69.8%;
}
.bigBox7{
	width:13.3%;
	height:100%;
	position: absolute;
	left:83%;
}
.black11{
	width:12%;
	height:55%;
	position: absolute;
	background-color: #000;
	left:8.5%;
}
.black22{
	width:12%;
	height:55%;
	position: absolute;
	background-color: #000;
	left: 23.2%
}
.black33{
	width:12%;
	height:55%;
	position: absolute;
	background-color: #000;
	left: 51.3%;
}
.black44{
	width:12%;
	height:55%;
	position: absolute;
	background-color: #000;
	left: 65.6%;
}
.black55{
	width:12%;
	height:55%;
	position: absolute;
	background-color: #000;
	left:80%;
}
.small{
	width:3.82%;
	height:100%;
	float:left;
	position: relative;
}
.white1{
	width:50%;
	height:100%;
	background-color: #fff;
	position: absolute;
	cursor:pointer;
	border:0.5px solid #000;
	z-index: 1;
	border-bottom-left-radius:4px;
	border-bottom-right-radius:4px;
	}
.white2{
	width:50%;
	height:100%;
	background-color: #fff;
	position: relative;
	cursor:pointer;
	border:0.5px solid #000;
	left:50%;
	z-index: 1;
	border-bottom-left-radius:4px;
	border-bottom-right-radius:4px;
}
.white11{
	width:14.2%;
	height:100%;
	position: absolute;
	background-color: #fff;
	left:0;
	border:0.5px solid #000;
	border-bottom-left-radius:4px;
	border-bottom-right-radius:4px;
}
.white22{
	width:14.2%;
	height:100%;
	position: absolute;
	background-color: #fff;
	left:14.2%;
	border:0.5px solid #000;
	border-bottom-left-radius:4px;
	border-bottom-right-radius:4px;
}
.white33{
	width:14.2%;
	height:100%;
	position: absolute;
	background-color: #fff;
	left:28.4%;
	border:0.5px solid #000;
	border-bottom-left-radius:4px;
	border-bottom-right-radius:4px;
}
.white44{
	width:14.2%;
	height:100%;
	position: absolute;
	background-color: #fff;
	left:42.6%;
	border:0.5px solid #000;
	border-bottom-left-radius:4px;
	border-bottom-right-radius:4px;
}
.white55{
	width:14.2%;
	height:100%;
	position: absolute;
	background-color: #fff;
	left:56.8%;
	border:0.5px solid #000;
	border-bottom-left-radius:4px;
	border-bottom-right-radius:4px;
}
.white66{
	width:14.2%;
	height:100%;
	position: absolute;
	background-color: #fff;
	left:71%;
	border:0.5px solid #000;
	border-bottom-left-radius:4px;
	border-bottom-right-radius:4px;
}
.white77{
	width:14.2%;
	height:100%;
	position: absolute;
	background-color: #fff;
	left:85.26%;
	border:0.5px solid #000;
	border-bottom-left-radius:4px;
	border-bottom-right-radius:4px;
}
.black{
	width:46%;
	height:55%;
	background-color: #000;
	position: absolute;
	top:0;
	z-index: 2;
	left:25%;
}
	.yinBox{
		width:100%;
		height:100%;
		opacity: 0.9;
		position: absolute;
		/*display: table;*/
		overflow: hidden;
	}
	.pianoBox{
		width:101%;
		height:45%;
		position: absolute;
		top: 20%;
	}
	.careBox{
		width:100%;
		height:60px;
		/*width:60%;*/
		/*padding:20px;*/
		/*position: absolute;*/
		/*bottom: 5%;*/
		/*margin:0 auto!important;*/
		
		border-radius: 800px;
		transition:all 0.5s;
		/*display: table-cell;
		vertical-align: middle;*/
		margin-top: 43%;
		position: relative;
		text-align: center;
	}
	.careBox img{
		width:60px;
		height:60px;
		display: inline-block;
	}
	.careBox>span{
		width:100%;
		display: inline-block;
		transition: all 0.8s;
		font-size: 26px;
		margin:0 auto;
		line-height: 20px;
		position: absolute;
		left:0px;
		top:18px;
	}
	.careBox>span>span{
		position: relative;
		top:-20px;
		line-height: 35px;
	}
	.white1 p{
		width:90%;
		font-size: 24px;
		font-weight: bold;
		color:#000;
		position: absolute;
		bottom: 2%;
		left:5%;
	}
	.white2 p{
		width:90%;
		font-size: 24px;
		font-weight: bold;
		color:#000;
		position: absolute;
		bottom: 2%;
		text-align: center;
		left:5%;
	}
	.mainKey{
		background-color: #00f3f3;
	}
	.audio{
		width:0;
		height:0;
	}
	p{
		transition:all 0.5s;
	}
	@media screen and (min-width: 1423px) and (max-width: 1920px){
		p{
			transform: scale(1);
		}
		.careBox{
			transform: scale(1);
			margin-top: 43%;
		}
		.careBox span{
			transform: scale(1);
		}
	}
	@media screen and (min-width: 1200px) and (max-width: 1422px){
		p{
			transform: scale(0.8);
		}
		.careBox{
			transform: scale(0.8);
			margin-top: 54%;/*Lapto with touch 1280x950*/
		}
		.careBox span{
			transform: scale(0.8);
		}
	}
	@media screen and (min-width: 1024px) and (max-width: 1199px){
		p{
			transform: scale(0.6);
		}
		.careBox{
			transform: scale(0.6);
			margin-top: 50%;/*修改过1024pxIpadMIMI*/
		}
		.careBox span{
			transform: scale(0.6);
		}
	}
	@media screen and (min-width:960px) and (max-width:1023px){
		p{
			transform: scale(0.55);
		}
		.careBox{
			transform: scale(0.55);
			margin-top: 41%;
		}
		.careBox span{
			transform: scale(0.55);
		}
	}
	@media screen and (min-width: 854px) and (max-width: 959px){
		p{
			transform: scale(0.45);
		}
		.careBox{
			transform: scale(0.55);
			margin-top: 40%;/*NokiaN9 854x480*/
		}
		.careBox span{
			transform: scale(0.55);
		}
	}
	@media screen and (min-width: 768px) and (max-width: 853px){
		p{
			transform: scale(0.45);
		}
		.careBox{
			transform: scale(0.55);
			margin-top: 32%;/*iphoneX 812x375*/
		}
		.careBox span{
			transform: scale(0.55);
		}
	}
	@media screen and (min-width: 736px) and (max-width: 767px){
		p{
			transform: scale(0.35);
		}
		.careBox{
			transform: scale(0.5);
			margin-top: 43%;
		}
		.careBox span{
			transform: scale(0.5);
		}
	}
	@media screen and (min-width: 568px) and (max-width: 735px){
		p{
			transform: scale(0.25);
		}
		.careBox{
			transform: scale(0.5);
			margin-top: 40%;
			/*height:50px;*/
		}
		.careBox span{
			transform: scale(0.5);
		}
	}
	@media screen and (min-width: 250px) and (max-width: 567px){
		p{
			transform: scale(0.3);
		}
		.careBox{
			transform: scale(0.45);
			margin-top: 42%;/*iphone4 480x320*/
		}
		.careBox span{
			transform: scale(0.45);
		}
	}
	.stay{

	}
	.active{
		animation: Active 0.8s infinite;
	}
	@keyframes Active{
		0%{
			background-color: white;
		}
		25%{
			background-color: red;
		}
		50%{
			background-color: white;
		}
		75%{
			background-color: red;
		}
		100%{
			background-color: white;
		}
	}
</style>