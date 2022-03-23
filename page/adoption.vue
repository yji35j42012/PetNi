<style scoped></style>

<template>
    <div class="container">
        <ul class="petCard">
            <li class="petCard_item _new">
                <div class="collect_pic"></div>
            </li>
            <petcard v-for="(item , index) in 7" :key="index"></petcard>
        </ul>
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
        petcard: httpVueLoader("../components/PetCard.vue"),
    },
    mounted() {
        // console.log(store.state.nowPage);
    },
    computed: {},
    methods: {},
};
</script>
