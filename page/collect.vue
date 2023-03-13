<style scoped></style>

<template>
	<div class="container">
		<div class="scroll_y">
			<ul class="collect_group">
				<li class="collect_item" v-for="(item, index) in 21" :key="index">
					<div class="collect_item_pic">
						<img src="../images/test.jpeg" alt />
					</div>
					<petinfo></petinfo>
				</li>
			</ul>
		</div>
		<!-- <div class="collect_head showPAD">寵物名單</div>
		.scroll_y
		<div class="scroll_y">
			<ul class="collect_group">
				<li
					class="collect_item"
					v-for="(item, index) in 7"
					:key="index"
				>

					<petinfo></petinfo>
					<button class="close_btn">
						<i v-html="icon_all.unlike"></i>
					</button>
				</li>
			</ul>
		</div>

		<confirm style="display:none;"></confirm>-->
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all
		};
	},
	components: {
		petinfo: httpVueLoader("../components/PetInfo.vue")
		// confirm: httpVueLoader("../components/Confirm.vue")
	},
	mounted() {
		// console.log(store.state.nowPage);
	},
	computed: {},
	methods: {}
};
</script>
