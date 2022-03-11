<style scoped></style>

<template>
    <div class="container detail">
        <div class="func">
            <div class="func_box">
                <h2>我想尋找</h2>
                <div class="func_ul">
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
                </div>
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
                <div class="slip_item">
                    <button class="slip_item_detail">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 51 51"
                        >
                            <path :d="icon_all.detail" />
                        </svg>
                    </button>
                    <div class="slip_item_box">
                        <button class="slip_item_unlike">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 25 25"
                            >
                                <path :d="icon_all.unlike" />
                            </svg>
                        </button>
                        <div class="slip_item_info">
                            <p class="name female">
                                157763
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
                        <button class="slip_item_like">
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
                    <div class="recommend_info">
                        <p class="name female">
                            157763
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
                </li>
                <li>
                    <div class="recommend_pic"></div>
                    <div class="recommend_info">
                        <p class="name">
                            157763
                            <i class="gender female">
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
                </li>
                <li>
                    <div class="recommend_pic"></div>
                    <div class="recommend_info">
                        <p class="name">
                            157763
                            <i class="gender male">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path :d="icon_all.male" />
                                </svg>
                            </i>
                        </p>
                        <p class="address">臺南市南區</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="basic">
            <div class="basic_info">
                <p class="name female">
                    157763
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
            <ul class="basic_serial">
                <li>
                    <span>W09C0429-03</span>
                    <span>130</span>
                </li>
                <li>
                    <span>2020.08.28</span>
                    <span>followers</span>
                </li>
            </ul>
            <ul class="basic_detail">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                        <path :d="icon_all.status" />
                    </svg>
                </li>
                <li class="gender">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path :d="icon_all.female" />
                    </svg>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25">
                        <path :d="icon_all.theme" />
                    </svg>
                </li>
            </ul>
            <ul class="basic_detail">
                <li>03-4861 760</li>
                <li>桃園市新屋區永興里3鄰藻礁路1668號</li>
                <li>
                    本站動物皆採現場互動面談後評估能否認養，不接受系統上的預約。
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
        };
    },
    components: {
        // func: httpVueLoader("../components/Func.vue"),
    },
    mounted() {},
    computed: {},
    methods: {},
};
</script>
