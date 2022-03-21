<style scoped></style>

<template>
    <div class="container">
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
        };
    },
    components: {
        petinfo: httpVueLoader("../components/PetInfo.vue"),
    },
    mounted() {},
    computed: {},
    methods: {
        detailHandler(id) {
            this.$router.push("/detail");
        },
    },
};
</script>
