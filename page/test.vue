<style scoped>
.zzz {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box {
    touch-action: none;
    cursor: grab;
    height: 80px;
    width: 80px;
    background: blue;
    border-radius: 16px;
}
</style>

<template>
    <div class="zzz">
        <div class="box" @click="show"></div>

        <v-touch
            v-on:swipeleft="swiperleft"
            v-on:swiperight="swiperright"
            class="wrapper"
        >
            <div class="menu-container" ref="menuContainer">
                <!-- 这个是内容 -->
            </div>
        </v-touch>
    </div>
</template>

<script src="https://cdn.skypack.dev/vue-use-gesture"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-touch@1.1.0/vue-touch.min.js"></script>

<script>
module.exports = {
    data() {
        return {};
    },
    components: {},
    mounted() {},
    computed: {},
    methods: {
        show() {
            console.log("show", this.useSpring({ x: 0, y: 0 }));
        },
    },
};
</script>
