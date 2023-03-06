<style scoped></style>

<template>
	<div class="menu">
		<div class="logo">
			<img class="logo_img" src="./images/logo.png" alt />
		</div>
		<ul class="menu_nav">
			<li :class="['menu_nav_item', menuItem==1?'on':'']" @click="menuHandler(1)" data-txt="配對">
				<i v-html="icon_all.pair"></i>
			</li>
			<li :class="['menu_nav_item', menuItem==2?'on':'']" @click="menuHandler(2)" data-txt="收藏">
				<i v-html="icon_all.favorites"></i>
			</li>
			<li :class="['menu_nav_item', menuItem==3?'on':'']" @click="menuHandler(3)" data-txt="主題館">
				<i v-html="icon_all.theme"></i>
			</li>
			<li :class="['menu_nav_item', menuItem==4?'on':'']" @click="menuHandler(4)" data-txt="送養">
				<i v-html="icon_all.collar"></i>
			</li>
			<li :class="['menu_nav_item', menuItem==5?'on':'']" @click="menuHandler(5)" data-txt="急診">
				<i v-html="icon_all.hospital"></i>
			</li>
		</ul>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			menuItem: 1
		};
	},
	components: {},
	mounted() {},
	computed: {},
	methods: {
		menuHandler(num) {
			this.menuItem = num;
		}
	}
};
</script>
