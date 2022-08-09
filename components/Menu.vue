<style scoped></style>

<template>
	<div class="menu">
		<div class="container">
			<h1 class="logo" @click="change('home')">
				<router-link to="/">
					<img src="./images/logo.png" alt="" />
					<!-- <img src="./images/logo-mobile.png" alt="" /> -->
				</router-link>
			</h1>
			<div class="menu_group">
				<router-link to="/" class="menu_item">
					<i>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 25 21"
						>
							<path :d="icon_all.pair" />
						</svg>
					</i>
					<span>配對</span>
				</router-link>
				<router-link to="/collect" class="menu_item">
					<i>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 25"
						>
							<path :d="icon_all.favorites" />
						</svg>
					</i>
					<span>收藏</span>
				</router-link>
				<router-link to="/theme" class="menu_item">
					<i>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 25"
						>
							<path :d="icon_all.theme" />
						</svg>
					</i>
					<span>主題館</span>
				</router-link>
				<router-link to="/adoption" class="menu_item">
					<i>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 26 25"
						>
							<path :d="icon_all.collar" />
						</svg>
					</i>
					<span>送養</span>
				</router-link>
				<router-link to="/emergency" class="menu_item">
					<i>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 25"
						>
							<path :d="icon_all.hospital" />
						</svg>
					</i>
					<span>急診</span>
				</router-link>
				<!-- <li
					@click="change('home')"
					:class="nowPage == 'home' ? 'on' : ''"
				>
					
				</li>
				<li
					@click="change('collect')"
					:class="nowPage == 'collect' ? 'on' : ''"
				>
					
				</li>
				<li
					@click="change('theme')"
					:class="nowPage == 'theme' ? 'on' : ''"
				>
				</li>
				<li
					@click="change('adoption')"
					:class="nowPage == 'adoption' ? 'on' : ''"
				>
				 
				</li>
				<li
					@click="change('emergency')"
					:class="nowPage == 'emergency' ? 'on' : ''"
				>
				  
				</li> -->
			</div>
		</div>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all,
			nowPage: "",
		};
	},
	mounted() {
		this.nowPage = store.state.nowPage;
	},
	computes: {},
	methods: {
		change(str) {
			this.nowPage = str;
		},
	},
};
</script>
