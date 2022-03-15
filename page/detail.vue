<style scoped></style>

<template>
    <div class="container 1">
        <div class="info">
            <div class="slip">
                <div class="slip_item">
                    <!-- <button class="slip_item_detail">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 51 51"
						>
							<path :d="icon_all.detail" />
						</svg>
					</button> -->
                    <!-- <div class="slip_item_box">
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
					</div> -->
                </div>
            </div>
        </div>
        <div class="basic">
            <div class="basic_info">
                <p class="name female">
                    157763
                </p>
                <p class="address">臺南市南區</p>
                <button class="like_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path :d="icon_all.like" />
                    </svg>
                </button>
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
            <ul class="basic_introduction">
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
