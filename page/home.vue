<style scoped></style>

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
					@mousedown.left="slipMouseDown('slip1')"
					@touchstart="slipMouseDown('slip1')"
				>
					<img src="../images/test.jpeg" alt />
					<button class="slip_item_detail" @click="detailHandler(238721)">
						<i v-html="icon_all.detail"></i>
					</button>
					<div class="slip_item_info">
						<button class="unlike" @click="recordUnLike('slip1')">
							<i v-html="icon_all.unlike"></i>
						</button>
						<petinfo></petinfo>
						<button class="like" @click="recordLike('slip1')">
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
				who: "",
				boxWMin: 0,
				boxWMax: 0,
				boxWCenter: 0,
				startNewX: 0
			}
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
		recordUnLike(str) {
			console.log("unlike btn");
			this.addClassHandler(str, "unlike", 10);
			// this.unlikeList.push(this.who.split("slip")[1]);
		},
		recordLike(str) {
			console.log("like btn");
			this.addClassHandler(str, "like", 10);
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
			let boxW = document.getElementById("info");
			this.move.boxWMin = boxW.offsetWidth * (1 / 5);
			this.move.boxWMax = boxW.offsetWidth * (4 / 5);
			this.move.boxWCenter = boxW.offsetWidth / 2;
			this.move.startNewX = 0;
			window.addEventListener("mousemove", this.slipMouseMove);
			window.addEventListener("mouseup", this.slipMouseUp);
			window.addEventListener("touchmove", this.slipMouseMove);
			window.addEventListener("touchend", this.slipMouseUp);
		},
		slipMouseMove() {
			console.log("滑動卡片");
			var moveWho = document.getElementById(this.move.who);
			// console.log("moveWho", moveWho);
			if (!event.touches) {
				//相容移動端
				var nx = event.clientX;
				var ny = event.clientY;
			} else {
				//相容PC端
				var nx = event.touches[0].pageX;
				var ny = event.touches[0].pageY;
			}
			let newX = ny - this.move.startY;
			let newY = nx - this.move.startX;
			var itemRotateArea =
				(51 / (this.move.boxWMax - this.move.boxWCenter)) * newY - 3;
			if (itemRotateArea >= 45) {
				itemRotateArea = 45;
			} else if (itemRotateArea <= -48) {
				itemRotateArea = -48;
			}
			this.move.startNewX = newY;
			this.transformHandler(newY, newX, itemRotateArea, 0);
		},
		slipMouseUp() {
			console.log("鬆開卡片");
			var moveWho = document.getElementById(this.move.who);
			var itemCenter = moveWho.offsetWidth / 2;
			if (
				this.move.startNewX + this.move.boxWCenter >
				this.move.boxWMax
			) {
				console.log("like");
				this.transformHandler(0, 0, -3, 0.5);
				this.addClassHandler(this.move.who, "like", 10);
			} else if (
				this.move.startNewX + this.move.boxWCenter <
				this.move.boxWMin
			) {
				this.transformHandler(0, 0, -3, 0.5);
				this.addClassHandler(this.move.who, "unlike", 10);
				console.log("unlike");
			} else {
				this.transformHandler(0, 0, -3, 0.5);
			}
			window.removeEventListener("mousemove", this.slipMouseMove);
			window.removeEventListener("mouseup", this.slipMouseUp);
			window.removeEventListener("touchmove", this.slipMouseMove);
			window.removeEventListener("touchend", this.slipMouseUp);
		},
		transformHandler(x, y, rotate, time) {
			let scrollitem = document.getElementById(this.move.who);
			scrollitem.style = `transform: translate3d(${x}px ,${y}px , 0) rotate(${rotate}deg); transition-duration: ${time}s;`;
		},
		addClassHandler(who, what, when) {
			let addObj = document.getElementById(who);
			setTimeout(() => {
				addObj.classList.add(what);
			}, when);
		},
		detailHandler(id) {
			this.$router.push("/home/" + id);
		}

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
