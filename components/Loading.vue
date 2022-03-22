<style scoped>
.loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 100;
}
</style>

<template>
    <div id="loading" class="loading">
        loading
    </div>
</template>

<script>
var animation = bodymovin.loadAnimation({
    container: document.getElementById("loading"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../js/loading.json",
});
module.exports = {
    data() {
        return {
            icon_all: icon_all,
        };
    },
    mounted() {},
    computes: {},
    methods: {},
};
</script>
