<style scoped></style>

<template>
    <div class="container">
        <div class="collect_head showPAD" style="display:none;">寵物名單</div>
        <div class="scroll_y" style="display:none;">
            <ul class="collect_group">
                <li
                    class="collect_item"
                    v-for="(item, index) in 7"
                    :key="index"
                >
                    <div class="collect_pic"></div>
                    <petinfo></petinfo>
                    <button class="close_btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 7 7"
                        >
                            <path :d="icon_all.close" />
                        </svg>
                    </button>
                </li>
            </ul>
        </div>

        <confirm style="display:none;" style="display:none;"></confirm>
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
        confirm: httpVueLoader("../components/Confirm.vue"),
    },
    mounted() {
        // console.log(store.state.nowPage);
    },
    computed: {},
    methods: {},
};
</script>
