<style scoped>
</style>

<template>
	<div class="menu">
		<div class="logo" @click="menuHandler(1)">
			<router-link to="/home">
				<img class="logo_img" src="./images/logo.png" alt />
			</router-link>
		</div>
		<ul class="menu_nav">
			<li :class="['menu_nav_item', menuItem==1?'on':'']" @click="menuHandler(1)">
				<router-link to="/home" data-txt="配對">
					<i v-html="icon_all.pair"></i>
				</router-link>
			</li>
			<li :class="['menu_nav_item', menuItem==2?'on':'']" @click="menuHandler(2)">
				<router-link to="/collect" data-txt="收藏">
					<i v-html="icon_all.favorites"></i>
				</router-link>
			</li>
			<li :class="['menu_nav_item', menuItem==3?'on':'']" @click="menuHandler(3)">
				<router-link to="/theme" data-txt="主題館">
					<i v-html="icon_all.theme"></i>
				</router-link>
			</li>
			<li :class="['menu_nav_item', menuItem==4?'on':'']" @click="menuHandler(4)">
				<router-link to="/" data-txt="送養">
					<i v-html="icon_all.collar"></i>
				</router-link>
			</li>
			<li :class="['menu_nav_item', menuItem==5?'on':'']" @click="menuHandler(5)">
				<router-link to="/emergency" data-txt="急診">
					<i v-html="icon_all.hospital"></i>
				</router-link>
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
