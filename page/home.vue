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
        <div class="headFunc" style="display:none">
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
            <div id="slip" class="slip">
                <div
                    v-for="(item, index) in 2"
                    :key="index"
                    :id="'slip' + index"
                    class="slip_item"
                    @click="showHandler('slip' + index)"
                    @mousedown="slipMouseDown('slip' + index)"
                    @touchstart="slipMouseDown('slip' + index)"
                    @mouseup="slipMouseUp('slip' + index)"
                    @touchend="slipMouseUp('slip' + index)"
                    @mousemove="slipMouseMove('slip' + index)"
                >
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
                        <button class="unlike_btn">
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
                        <button class="like_btn">
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
            cardX: "",
            cardY: "",
            slipX: "",
            slipY: "",
        };
    },
    components: {
        petinfo: httpVueLoader("../components/PetInfo.vue"),
    },
    mounted() {
        window.onload = function() {};
    },
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
        slipMouseDown(str, $event) {
            console.log("按下卡片", str);
            this.isDown = true;
            this.cardX = event.offsetX * -1;
            this.cardY = event.offsetY * -1;

            console.log("按下卡片 cardX", this.cardX);
            console.log("按下卡片 cardY", this.cardY);
            let scrollitem = document.getElementById(str);

            scrollitem.classList.add("scroll");
            let slip = document.getElementById("slip");
            let info = document.getElementById("container");
            console.log("slipTop", slip.offsetTop);
            console.log("slipLeft", slip.offsetLeft);
            console.log("infoTop", info.offsetTop);
            console.log("infoLeft", info.offsetLeft);
            this.slipX = slip.offsetLeft + info.offsetLeft;
            this.slipY = slip.offsetTop + info.offsetTop;
        },
        slipMouseUp(str) {
            console.log("鬆開卡片", str);
            this.isDown = false;
            let scrollitem = document.getElementById(str);
            scrollitem.classList.remove("scroll");
        },
        slipMouseMove(str, $event) {
            if (!this.isDown) return;
            console.log("卡片滑動", str);
            let scrollitem = document.getElementById(str);
            var slip = document.getElementById(slip);
            if (!event.touches) {
                //相容移動端
                var x = event.clientX;
                var y = event.clientY;
            } else {
                //相容PC端
                var x = event.touches[0].pageX;
                var y = event.touches[0].pageY;
            }
            // console.log("X", x);
            // console.log("Y", y);
            var moveX = x - this.slipX; //小方塊相對於父元素（長線條）的left值
            var moveY = y - this.slipY; //小方塊相對於父元素（長線條）的left值
            // console.log("moveX", moveX);
            // console.log("moveY", moveY);
            // console.log("moveX", moveX);
            // console.log("moveY", moveY);

            if (!scrollitem.classList.contains("scroll")) return;
            scrollitem.style.left = moveX + "px";
            scrollitem.style.top = moveY + "px";
            scrollitem.style.transform = `translate3d(${this.cardX}px, ${this.cardY}px, 0)`;
        },
    },
};
</script>
