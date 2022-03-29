<style scoped></style>

<template>
    <div id="container" class="container">
        <div class="func">
            <div class="func_box">
                <h2>我想尋找</h2>
                <ul class="func_ul">
                    <li class="square on">
                        <i class="animal">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 36 36"
                            >
                                <path :d="icon_all.cat" />
                            </svg>
                        </i>
                    </li>
                    <li class="square">
                        <i class="animal">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 36 36"
                            >
                                <path :d="icon_all.dog" />
                            </svg>
                        </i>
                    </li>
                    <li class="square">不拘</li>
                </ul>
            </div>
            <div class="func_box">
                <h2>性別</h2>
                <ul class="func_ul">
                    <li class="square male">
                        <i class="gender">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path :d="icon_all.male" />
                            </svg>
                        </i>
                    </li>
                    <li class="square female">
                        <i class="gender">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path :d="icon_all.female" />
                            </svg>
                        </i>
                    </li>
                    <li class="square on">不拘</li>
                </ul>
            </div>
            <div class="func_box">
                <h2>年齡</h2>
                <ul class="func_ul">
                    <li>幼齡</li>
                    <li>成年</li>
                    <li class="on">不拘</li>
                </ul>
            </div>
            <div class="func_box">
                <h2>顏色</h2>
                <ul class="func_ul">
                    <li>白貓</li>
                    <li>黑貓</li>
                    <li>乳牛貓</li>
                    <li>橘貓</li>
                    <li>虎斑貓</li>
                    <li>三色貓</li>
                    <li>玳瑁貓</li>
                    <li class="on">不拘</li>
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
            <button class="btn">套用</button>
        </div>
        <div class="headFunc">
            <button class="backCard">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46">
                    <path :d="icon_all.back" />
                </svg>
            </button>
            <span class="name">雙色狗</span>
            <button class="searchBtn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38">
                    <path :d="icon_all.filter" />
                </svg>
            </button>
        </div>
        <div class="info">
            <div class="slip">
                <div
                    v-for="(item, index) in 2"
                    :key="index"
                    :id="'slip' + index"
                    class="slip_item"
                    @mousedown="slipMouseDown('slip' + index)"
                    @touchstart="slipMouseDown('slip' + index)"
                >
                    <!-- 
					@mouseup="slipMouseUp('slip' + index)"
					@touchend="slipMouseUp('slip' + index)" -->
                    <!-- @mousemove="slipMouseMove('slip' + index)" -->
                    <!-- v-on="{ mousedown: slipMouseDown, mouseup: slipMouseUp }" -->

                    <button
                        class="slip_item_detail"
                        @click="detailHandler('123')"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 51 51"
                        >
                            <path :d="icon_all.detail" />
                        </svg>
                    </button>
                    <div class="slip_item_box">
                        <button
                            class="unlike_btn"
                            @click="unlikeHandler('slip' + index)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25 25"
                            >
                                <path :d="icon_all.unlike" />
                            </svg>
                        </button>
                        <div class="slip_item_info">
                            <p class="name female">
                                <span>157763</span>
                                <i class="gender">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path :d="icon_all.female" />
                                    </svg>
                                </i>
                            </p>
                            <p class="address">臺南市南區</p>
                        </div>
                        <button
                            class="like_btn"
                            @click="likeHandler('slip' + index)"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                            >
                                <path :d="icon_all.like" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <ul class="recommend">
                <li>
                    <div class="recommend_pic"></div>
                    <petinfo></petinfo>
                </li>
                <li>
                    <div class="recommend_pic"></div>
                    <petinfo></petinfo>
                </li>
                <li>
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
            icon_all: icon_all,
            isDown: false,
            who: "",
            startX: "",
            startY: "",
            cardL: "",
            cardT: "",
            box2CurrentX: 0,
            box2CurrentY: 100,
        };
    },
    components: {
        petinfo: httpVueLoader("../components/PetInfo.vue"),
    },
    mounted() {},
    computed: {},
    methods: {
        showHandler(str) {
            // console.log("showHandler", str);
            let scrollitem = document.getElementById(str);
            // console.log(this.getMousePos());
        },
        getMousePos(event) {
            var e = event || window.event;
            var scrollX =
                document.documentElement.scrollLeft || document.body.scrollLeft;
            var scrollY =
                document.documentElement.scrollTop || document.body.scrollTop;
            var x = e.pageX || e.clientX + scrollX;
            var y = e.pageY || e.clientY + scrollY;
            //alert('x: ' + x + '\ny: ' + y);
            return { x: x, y: y };
        },
        detailHandler(id) {
            this.$router.push("/detail");
        },
        slipMouseUp() {
            console.log("鬆開卡片");

            window.removeEventListener("mousemove", this.slipMouseMove);
            window.removeEventListener("mouseup", this.slipMouseUp);

            let boxW = document.getElementById("container");
            let scrollitem = document.getElementById(this.who);

            let boxWMin = boxW.offsetWidth * (1 / 4);
            let boxWMax = boxW.offsetWidth * (3 / 4);

            let itemCenter = scrollitem.offsetWidth / 2 + scrollitem.offsetLeft;
            console.log("boxWMin", boxWMin);
            console.log("boxWMax", boxWMax);
            console.log("itemCenter", itemCenter);

            if (itemCenter >= boxWMax * (3 / 4)) {
                console.log("like");
            } else if (itemCenter <= boxWMin) {
                console.log("unlike");
            }
        },
        slipMouseMove($event) {
            let scrollitem = document.getElementById(this.who);
            console.log("卡片滑動");

            let nx = event.clientX;
            let ny = event.clientY;
            let nl = nx - (this.startX - this.cardL);
            let nt = ny - (this.startY - this.cardT);

            // 程式碼關鍵處
            this.box2CurrentX = nl;
            this.box2CurrentY = nt;

            scrollitem.style = `left: ${nl}px; top:${nt}px;transition-duration: 0s;`;
        },
        slipMouseDown(str, $event) {
            this.who = str;
            this.startX = event.clientX;
            this.startY = event.clientY;

            let scrollitem = document.getElementById(str);

            window.addEventListener("mousemove", this.slipMouseMove);
            window.addEventListener("mouseup", this.slipMouseUp);
            this.cardL = scrollitem.offsetLeft;
            this.cardT = scrollitem.offsetTop;
        },
        unlikeHandler(str) {
            console.log("unlikeHandler", str);
            let ac = document.getElementById(str);
            ac.style = `left: ${ac.offsetLeft}px; top:${ac.offsetTop}px;transition-duration: 1s;`;
            setTimeout(() => {
                ac.classList.add("unlike");
            }, 10);
        },
        likeHandler(str) {
            console.log("likeHandler", str);
            let ac = document.getElementById(str);
            ac.style = `left: ${ac.offsetLeft}px; top:${ac.offsetTop}px;transition-duration: 1s;`;
            setTimeout(() => {
                ac.classList.add("like");
            }, 10);
        },
    },
};
</script>
