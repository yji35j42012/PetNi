<style scoped>
/*
I’m still the same 都好像沒有變
Nothing changed 還是討厭下雨天
還是不愛認錯
脾氣是硬了點
這我都清楚但我沒有辦法改變
我後悔高中花錢裝很吵的排氣管
想努力賺錢養妳 卻養成了壞習慣
我還想帶妳到處晃晃到處帶妳玩
Cuz me without you it feels like
情人節沒有愛人
像台相機沒有快門
像張書桌沒有檯燈
Cuz me without you it feels like
A sentence without no spaces
It be like youtube without no playlist
Or a chapter without no pages
Cuz me without you it feels just wrong
I don’t wanna live without you
I dont wanna be alone and
想念妳的每個角度
如果我們還能夠重來
Oh
You dont know how I feel inside
So..
I don’t wanna live without you
我沒有辦法
Cuz I’ve been through that
重蹈覆徹 I can’t do that
沒得負責 oh damn too bad
I need you right now yo where you at?
先把我的面子放兩邊

榨乾我就像搶劫
Goddamn I got nothing left
掉進去no fun down here
救救我 I call my friends
訴苦 說了好幾遍
他們叫我振作點
I know man but I fuckin can’t
幫我刪了instagram
Your post I don’t wanna see
想到妳曾經promise me
我乾掉一支Hennessy
I just wanna know baby why you gonna go
我們之間太多 的我捨不得放手 yeah
失去妳就像失去我的麥克風
我不要我的fans 不要IG的followers cuz

I don’t wanna live without you
I don‘t wanna be alone and
想念妳的每個角度
如果我們還能夠重來
Oh
You don’t know how I feel inside
So
I don’t wanna live without you
我沒有辦法
*/
</style>

<template>
	<div id="container" class="container">
		<div class="head showPAD">
			<button class="head_btn _back">
				<i v-html="icon_all.back"></i>
			</button>

			<div class="head_title">雙色狗</div>
			<button class="head_btn _setting">
				<i v-html="icon_all.setting"></i>
			</button>
		</div>
		<div class="func showPC">
			<div class="func_box">
				<h2>我想尋找</h2>
				<ul class="func_ul">
					<li
						:class="['func_li','square',search.animal == 'cat' ? 'on' : '']"
						@click="searchAnimal('cat')"
					>
						<i class="icon _animal" v-html="icon_all.cat"></i>
					</li>
					<li
						:class="['func_li','square',search.animal == 'dog' ? 'on' : '']"
						@click="searchAnimal('dog')"
					>
						<i class="icon _animal" v-html="icon_all.dog"></i>
					</li>
					<li
						:class="['func_li','square',search.animal == 'all' ? 'on' : '']"
						@click="searchAnimal('all')"
					>不拘</li>
				</ul>
			</div>
			<div class="func_box">
				<h2>性別</h2>
				<ul class="func_ul">
					<li
						:class="['func_li','square','male',search.gender == 'male' ? 'on' : '']"
						@click="searchGender('male')"
					>
						<i class="gender" v-html="icon_all.male"></i>
					</li>
					<li
						:class="['func_li','square','female',search.gender == 'female' ? 'on' : '']"
						@click="searchGender('female')"
					>
						<i class="gender" v-html="icon_all.female"></i>
					</li>
					<li
						:class="['func_li','square',search.gender == 'all' ? 'on' : '']"
						@click="searchGender('all')"
					>不拘</li>
				</ul>
			</div>
			<div class="func_box">
				<h2>年齡</h2>
				<ul class="func_ul">
					<li :class="['func_li',search.age == 'child' ? 'on' : '']" @click="searchAge('child')">幼齡</li>
					<li :class="['func_li',search.age == 'adult' ? 'on' : '']" @click="searchAge('adult')">成年</li>
					<li :class="['func_li',search.age == 'all' ? 'on' : '']" @click="searchAge('all')">不拘</li>
				</ul>
			</div>
			<div class="func_box">
				<h2>顏色</h2>
				<ul class="func_ul">
					<li :class="['func_li']">白貓</li>
					<li :class="['func_li']">黑貓</li>
					<li :class="['func_li']">乳牛貓</li>
					<li :class="['func_li']">橘貓</li>
					<li :class="['func_li']">虎斑貓</li>
					<li :class="['func_li']">三色貓</li>
					<li :class="['func_li']">玳瑁貓</li>
					<li :class="['func_li','on']">不拘</li>
				</ul>
			</div>
			<div class="func_switch">
				<h2>搜尋附近</h2>
				<label class="switch">
					<input type="checkbox" />
					<span class="switch_ball"></span>
				</label>
			</div>
			<div class="func_switch">
				<h2>互動音效</h2>
				<label class="switch">
					<input type="checkbox" />
					<span class="switch_ball"></span>
				</label>
			</div>
			<button class="func_btn">套用</button>
		</div>
		<div id="info" class="info">
			<div class="slip">
				<div class="slip_item _noData">
					<span>
						很抱歉！
						<br />已沒有單身狗、單身貓了，
						<br />請嘗試修改篩選條件。
					</span>
				</div>
				<div
					id="slip1"
					class="slip_item"
					@mousedown="slipMouseDown('slip1')"
					@touchstart="slipMouseDown('slip1')"
				>
					<img src="../images/test.jpeg" alt />
					<button class="slip_item_detail">
						<i v-html="icon_all.detail"></i>
					</button>
					<div class="slip_item_info">
						<button class="unlike" @click="recordUnLike">
							<i v-html="icon_all.unlike"></i>
						</button>
						<petinfo></petinfo>
						<button class="like" @click="recordLike">
							<i v-html="icon_all.like"></i>
						</button>
					</div>
				</div>
			</div>
			<ul class="recommend showPC">
				<li class="recommend_li">
					<div class="recommend_pic"></div>
					<petinfo></petinfo>
				</li>
				<li class="recommend_li">
					<div class="recommend_pic"></div>
					<petinfo></petinfo>
				</li>
				<li class="recommend_li">
					<div class="recommend_pic"></div>
					<petinfo></petinfo>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			search: {
				animal: "all",
				gender: "all",
				age: "all"
			},
			icon_all: icon_all,
			// 	// oldpetData: pet,
			// 	who: "",
			move: {
				startX: "",
				startY: "",
				rotate: "",
				who: ""
			}
			// 	cardL: "",
			// 	cardT: "",
			// 	moveRotateRight: 0, //移動兼具＋
			// 	rotateNum: 30,
			// 	rotateMaxNum: 45,
			// 	newL: 0,
			// 	totalItem: null,
			// 	scolled: 0,
			// 	likeList: [],
			// 	unlikeList: [],
		};
	},
	components: {
		petinfo: httpVueLoader("../components/PetInfo.vue")
	},
	mounted() {
		// console.log("state", store.state.petData);
		// this.totalItem = store.state.petData.length;
		// axios
		//     .get(
		//         "https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL"
		//     )
		//     .then((res) => {
		//         console.log("test", res.data);
		//         this.oldpetData = res.data;
		//     });
		// axios.get("https://tw.rter.info/capi.php").then((res) => {
		//     console.log("test", res.data);
		//     this.oldpetData = res.data;
		// });
		// axios
		// 	.get("https://tw.rter.info/capi.php")
		// 	.then(function(response) {
		// 		let data = response.data;
		// 		console.log("data1111", data);
		// 		// console.log(arguments)
		// 	})
		// 	.catch(function(error) {
		// 		console.log(error);
		// 	})
		// 	.finally(function() {
		// 		console.log("finally");
		// 	});
	},
	computed: {
		// showTitle() {
		// 	if (this.totalItem == null) return;
		// 	let show = "";
		// 	if (this.totalItem !== 0 && this.totalItem !== this.scolled) {
		// 		show =
		// 			store.state.petData[this.totalItem - this.scolled - 1]
		// 				.animal_Variety;
		// 	} else if (this.totalItem == this.scolled) {
		// 		show = "沒資料了";
		// 	}
		// 	return show;
		// },
		// petItem() {
		// 	if (this.totalItem == null) return;
		// 	let showPet = [];
		// 	let randomNumList = [];
		// 	let maxItem = 10; //最多10筆
		// 	var resetRandom = 0;
		// 	// console.log("totalItem", this.totalItem);
		// 	// Math.floor(Math.random() * x);
		// 	for (let i = 0; i < maxItem + resetRandom; i++) {
		// 		var randomNum = Math.floor(Math.random() * this.totalItem);
		// 		// console.log("randomNum", randomNum);
		// 		// console.log("reset", randomNumList.indexOf(randomNum));
		// 		if (randomNumList.indexOf(randomNum) == -1) {
		// 			randomNumList.push(randomNum);
		// 			showPet.push(store.state.petData[randomNum]);
		// 		} else {
		// 			resetRandom++;
		// 		}
		// 	}
		// 	return showPet;
		// },
	},
	methods: {
		searchAnimal(str) {
			this.search.animal = str;
		},
		searchGender(str) {
			this.search.gender = str;
		},
		searchAge(str) {
			this.search.age = str;
		},
		recordUnLike() {
			console.log("unlike btn");
			// this.unlikeList.push(this.who.split("slip")[1]);
		},
		recordLike() {
			console.log("like btn");
		},
		slipMouseDown(str) {
			console.log("按下卡片", str);
			this.move.who = str;
			// 點擊位置
			if (!event.touches) {
				//相容移動端
				this.move.startX = event.clientX;
				this.move.startY = event.clientY;
			} else {
				//相容PC端
				this.move.startX = event.touches[0].pageX;
				this.move.startY = event.touches[0].pageY;
			}
			window.addEventListener("mousemove", this.slipMouseMove);
			window.addEventListener("mouseup", this.slipMouseUp);
			window.addEventListener("touchmove", this.slipMouseMove);
			window.addEventListener("touchend", this.slipMouseUp);
		},
		slipMouseMove($event) {
			console.log("滑動卡片");
			var moveWho = document.getElementById(this.move.who);
			// console.log("moveWho", moveWho);
			if (!event.touches) {
				//相容移動端
				$event.preventDefault();
				var nx = $event.clientX;
				var ny = $event.clientY;
			} else {
				//相容PC端
				var nx = $event.touches[0].pageX;
				var ny = $event.touches[0].pageY;
			}
			let newX = ny - this.move.startY;
			let newY = nx - this.move.startX;
			let boxW = document.getElementById("info");
			let boxWMin = boxW.offsetWidth * (1 / 5);
			let boxWMax = boxW.offsetWidth * (4 / 5);
			let boxCenter = boxW.offsetWidth / 2;
			console.log("boxW", boxW.offsetWidth);
			console.log("boxWMin", boxWMin);
			console.log("boxWMax", boxWMax);
			console.log("boxCenter", boxCenter);
			console.log("newY", newY);
			// 367 587.2

			// 左邊-54deg  右邊48deg
			moveWho.style = `transform: rotate(-3deg) translate(${newY}px,${newX}px);transition-duration:0s`;
		},
		slipMouseUp() {
			console.log("鬆開卡片");
			var moveWho = document.getElementById(this.move.who);
			moveWho.style = `transform: rotate(-3deg) translate(0px,0px)`;
			window.removeEventListener("mousemove", this.slipMouseMove);
			window.removeEventListener("mouseup", this.slipMouseUp);
			window.removeEventListener("touchmove", this.slipMouseMove);
			window.removeEventListener("touchend", this.slipMouseUp);
		}
		// detailHandler(id) {
		// 	this.$router.push("/home/" + id);
		// },
		// // 鬆開卡片
		// slipMouseUp() {
		// 	console.log("鬆開卡片");
		// 	let outside = document.getElementById("app");
		// 	outside.style = "";
		// 	window.removeEventListener("mousemove", this.slipMouseMove);
		// 	window.removeEventListener("mouseup", this.slipMouseUp);
		// 	window.removeEventListener("touchmove", this.slipMouseMove);
		// 	window.removeEventListener("touchend", this.slipMouseUp);
		// 	let boxW = document.getElementById("info");
		// 	let scrollitem = document.getElementById(this.who);
		// 	let boxWMin = boxW.offsetWidth * (1 / 5);
		// 	let boxWMax = boxW.offsetWidth * (4 / 5);
		// 	let itemCenter = scrollitem.offsetWidth / 2 + scrollitem.offsetLeft;
		// 	let itemLeft = scrollitem.offsetLeft;
		// 	if (itemCenter + this.newL >= boxWMax) {
		// 		console.log("like", itemCenter, this.newL, boxWMax);
		// 		this.transformHandler(0, 0, -3, 0.5);
		// 		this.addClassHandler(this.who, "like", 10);
		// 		this.scolled++;
		// 	} else if (itemCenter + this.newL <= boxWMin) {
		// 		console.log("unlike", itemCenter, this.newL, boxWMax);
		// 		this.addClassHandler(this.who, "unlike", 10);
		// 		this.scolled++;
		// 	} else {
		// 		// console.log("恢復", itemCenter, this.newL, boxWMax);
		// 		this.transformHandler(0, 0, -3, 0.5);
		// 	}
		// },
		// // 卡片滑動
		// slipMouseMove($event) {
		// 	console.log("卡片滑動");
		// 	let scrollitem = document.getElementById(this.who);
		// 	if (!event.touches) {
		// 		//相容移動端
		// 		$event.preventDefault();
		// 		var nx = event.clientX;
		// 		var ny = event.clientY;
		// 	} else {
		// 		//相容PC端
		// 		var nx = event.touches[0].pageX;
		// 		var ny = event.touches[0].pageY;
		// 	}
		// 	let newl = nx - this.move.startX;
		// 	this.newL = newl;
		// 	let newt = ny - this.move.startY;
		// 	// 程式碼關鍵處
		// 	let boxW = document.getElementById("container");
		// 	let boxWMin = boxW.offsetWidth * (1 / 5);
		// 	let boxWCen = boxW.offsetWidth * (1 / 2);
		// 	let boxWMax = boxW.offsetWidth * (4 / 5);
		// 	let itemCenter = scrollitem.offsetWidth / 2 + scrollitem.offsetLeft;
		// 	let rotate = 45 / this.moveRotateRight;
		// 	let nowRotate = rotate * newl + -3;
		// 	if (nowRotate >= this.rotateMaxNum) {
		// 		nowRotate = this.rotateMaxNum;
		// 	} else if (nowRotate <= -this.rotateMaxNum) {
		// 		nowRotate = -this.rotateMaxNum;
		// 	}
		// 	this.transformHandler(newl, newt, nowRotate, 0);
		// },
		// // 按下卡片
		// slipMouseDown(str, $event) {
		// 	console.log("按下卡片", str);
		// 	this.who = str;
		// 	this.move.startX = event.clientX;
		// 	this.newL = 0;
		// 	// 點擊位置
		// 	if (!event.touches) {
		// 		//相容移動端
		// 		this.move.startX = event.clientX;
		// 		this.move.startY = event.clientY;
		// 	} else {
		// 		//相容PC端
		// 		this.move.startX = event.touches[0].pageX;
		// 		this.move.startY = event.touches[0].pageY;
		// 	}
		// 	let scrollitem = document.getElementById(str);
		// 	let boxW = document.getElementById("container");
		// 	window.addEventListener("mousemove", this.slipMouseMove);
		// 	window.addEventListener("mouseup", this.slipMouseUp);
		// 	window.addEventListener("touchmove", this.slipMouseMove);
		// 	window.addEventListener("touchend", this.slipMouseUp);
		// 	this.cardL = scrollitem.offsetLeft;
		// 	this.cardT = scrollitem.offsetTop;
		// 	let boxWMax = boxW.offsetWidth * (4 / 5);
		// 	let boxWTotal = boxW.offsetWidth;
		// 	if (boxWTotal > 768) {
		// 		this.rotateNum = 30;
		// 		this.rotateMaxNum = 45;
		// 	} else {
		// 		this.rotateNum = 10;
		// 		this.rotateMaxNum = 15;
		// 	}
		// 	let itemCenter = scrollitem.offsetWidth / 2 + scrollitem.offsetLeft;
		// 	this.moveRotateRight = boxWMax - itemCenter;
		// 	this.transformHandler(0, 0, -3, 0);
		// },
		// transformHandler(x, y, rotate, time) {
		// 	let scrollitem = document.getElementById(this.who);
		// 	scrollitem.style = `transform: translate3d(${x}px ,${y}px , 0) rotate(${rotate}deg); transition-duration: ${time}s;`;
		// },
		// unlikeHandler(str) {
		// 	// console.log("unlikeHandler", str);
		// 	this.addClassHandler(str, "unlike", 10);
		// 	this.recordUnLike();
		// 	this.scolled++;
		// },
		// likeHandler(str) {
		// 	this.addClassHandler(str, "like", 10);
		// 	this.recordLike();
		// 	this.scolled++;
		// },
		// addClassHandler(who, what, when) {
		// 	let addObj = document.getElementById(who);
		// 	setTimeout(() => {
		// 		addObj.classList.add(what);
		// 	}, when);
		// },
		// backCard() {
		// 	let returnId = this.totalItem - this.scolled;
		// 	if (this.scolled == 0) return;
		// 	let removeObj = document.getElementById("slip" + returnId);
		// 	if (removeObj.classList.contains("like")) {
		// 		removeObj.classList.remove("like");
		// 		this.scolled--;
		// 	} else if (removeObj.classList.contains("unlike")) {
		// 		removeObj.classList.remove("unlike");
		// 		this.scolled--;
		// 	} else {
		// 		console.log("來亂？");
		// 	}
		// },
	}
};
</script>
