<style scoped></style>

<template>
    <div class="container">
        <func></func>
        
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
        func: httpVueLoader("../components/Func.vue"),
    },
    mounted() {},
    computed: {},
    methods: {},
};
</script>
