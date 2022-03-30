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
                <div class="slip_item _noData">
                    <span>
                        很抱歉 ！<br />已沒有單身狗、單身貓了，<br />請嘗試修改篩選條件。
                    </span>
                </div>
                <div
                    v-for="(item, index) in petInfo"
                    :key="index"
                    :id="'slip' + index"
                    class="slip_item"
                    @mousedown="slipMouseDown('slip' + index)"
                    @touchstart="slipMouseDown('slip' + index)"
                >
                    <img :src="item.album_file" alt="" />
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
                                <span>{{ item.animal_id }}</span>
                                <i class="gender">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path :d="icon_all.female" />
                                    </svg>
                                </i>
                            </p>
                            <p class="address">{{item.animal_place}}</p>
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
            moveRotateRight: 0, //移動兼具＋
            petInfo: pet,
        };
    },
    components: {
        petinfo: httpVueLoader("../components/PetInfo.vue"),
    },
    mounted() {
        // console.log(this.petInfo);
    },
    computed: {
        petInfo() {
            return this.petInfo;
        },
    },
    methods: {
        detailHandler(id) {
            this.$router.push("/detail");
        },
        slipMouseUp() {
            console.log("鬆開卡片");

            window.removeEventListener("mousemove", this.slipMouseMove);
            window.removeEventListener("mouseup", this.slipMouseUp);
            window.removeEventListener("touchmove", this.slipMouseMove);
            window.removeEventListener("touchend", this.slipMouseUp);

            let boxW = document.getElementById("container");
            let scrollitem = document.getElementById(this.who);
            let boxWMin = boxW.offsetWidth * (1 / 5);
            let boxWMax = boxW.offsetWidth * (4 / 5);

            let itemCenter = scrollitem.offsetWidth / 2 + scrollitem.offsetLeft;
            let itemLeft = scrollitem.offsetLeft;

            if (itemCenter >= boxWMax) {
                console.log("like");
                scrollitem.style = `left: ${scrollitem.offsetLeft}px; top:${scrollitem.offsetTop}px;transition-duration: 1s;`;
                this.addClassHandler(this.who, "like", 10);
            } else if (itemCenter <= boxWMin) {
                console.log("unlike");
                scrollitem.style = `left: ${scrollitem.offsetLeft}px; top:${scrollitem.offsetTop}px;transition-duration: 1s;`;
                this.addClassHandler(this.who, "unlike", 10);
            } else {
                // if (itemCenter < boxWMax * (3 / 4) && itemCenter > boxWMin)
                console.log("回赴");
                scrollitem.style = `left: ${this.cardL}px; top:${this.cardT}px;transition-duration: 1s;`;
            }
        },
        slipMouseMove($event) {
            let scrollitem = document.getElementById(this.who);
            console.log("卡片滑動");
            if (!event.touches) {
                //相容移動端
                var nx = event.clientX;
                var ny = event.clientY;
            } else {
                //相容PC端
                var nx = event.touches[0].pageX;
                var ny = event.touches[0].pageY;
            }
            let nl = nx - (this.startX - this.cardL);
            let nt = ny - (this.startY - this.cardT);
            // 程式碼關鍵處
            this.box2CurrentX = nl;
            this.box2CurrentY = nt;
            let boxW = document.getElementById("container");
            let boxWTotal = boxW.offsetWidth;
            console.log("boxWTotal", boxWTotal);

            let boxWMin = boxW.offsetWidth * (1 / 5);
            let boxWCen = boxW.offsetWidth * (1 / 2);
            let boxWMax = boxW.offsetWidth * (4 / 5);
            let itemCenter = scrollitem.offsetWidth / 2 + scrollitem.offsetLeft;
            if (boxWTotal > 768) {
                var rotateNum = 30;
                var rotateMaxNum = 45;
            } else {
                var rotateNum = 10;
                var rotateMaxNum = 15;
            }
            var nowRotate = scrollitem.style.transform
                .split("rotate(")[1]
                .split("deg)")[0];
            let rotate = rotateNum / this.moveRotateRight;
            if (
                boxWMax - itemCenter >= 0 &&
                nowRotate <= rotateMaxNum &&
                nowRotate >= -rotateMaxNum
            ) {
                nowRotate =
                    rotate * (this.moveRotateRight - (boxWMax - itemCenter));
                if (nowRotate > rotateMaxNum) {
                    nowRotate = rotateMaxNum;
                } else if (nowRotate < -rotateMaxNum) {
                    nowRotate = -rotateMaxNum;
                }
            }
            scrollitem.style = `left: ${nl}px; top:${nt}px;transition-duration: 0s;transform: rotate(${nowRotate}deg);`;
        },
        slipMouseDown(str, $event) {
            this.who = str;
            this.startX = event.clientX;
            if (!event.touches) {
                //相容移動端
                this.startX = event.clientX;
                this.startY = event.clientY;
            } else {
                //相容PC端
                this.startX = event.touches[0].pageX;
                this.startY = event.touches[0].pageY;
            }

            let scrollitem = document.getElementById(str);
            let boxW = document.getElementById("container");
            window.addEventListener("mousemove", this.slipMouseMove);
            window.addEventListener("mouseup", this.slipMouseUp);
            window.addEventListener("touchmove", this.slipMouseMove);
            window.addEventListener("touchend", this.slipMouseUp);

            this.cardL = scrollitem.offsetLeft;
            this.cardT = scrollitem.offsetTop;
            let boxWMax = boxW.offsetWidth * (3 / 4);
            let itemCenter = scrollitem.offsetWidth / 2 + scrollitem.offsetLeft;
            this.moveRotateRight = boxWMax - itemCenter;
            scrollitem.style = `left: ${this.cardL}px; top:${this.cardT}px;transition-duration: 0s;transform: rotate(-3deg)`;
        },
        unlikeHandler(str) {
            console.log("unlikeHandler", str);
            let scrollitem = document.getElementById(str);
            scrollitem.style = `left: ${scrollitem.offsetLeft}px; top:${scrollitem.offsetTop}px;transition-duration: 1s;`;
            this.addClassHandler(str, "unlike", 10);
        },
        likeHandler(str) {
            console.log("likeHandler", str);
            let scrollitem = document.getElementById(str);
            scrollitem.style = `left: ${scrollitem.offsetLeft}px; top:${scrollitem.offsetTop}px;transition-duration: 1s;`;
            this.addClassHandler(str, "like", 10);
        },
        addClassHandler(who, what, when) {
            let addObj = document.getElementById(who);
            setTimeout(() => {
                addObj.classList.add(what);
            }, when);
        },
    },
};
</script>
