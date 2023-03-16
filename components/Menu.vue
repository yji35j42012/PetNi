<style scoped>
/*
我們在做什麼
The problems we caused
Had my back against the wall
愛在混亂後會變成什麼

你離開my life's a misery
在適應新的生活 面對新的課題
得克服我心裡面的那個漩渦
才能和你同舟共濟

You might have mistaken me for somebody else
Girl 我也想陪著妳 但誰想得到
你搭上地鐵 你越來越遠
memories be creeping in 我睡得不好

You might have mistaken me for somebody else
來不及說對不起 我沒那麼好
會放下紀念
就一天一點
Take us back to the summertimes
We'll go anywhere

但我曾是妳的先鋒
披上披風
如今妳是我的氪/剋星

像是脫鉤的Crypto 崩的Krypton
遺憾留在客廳

Damn
曾是彼此的劍與盾
漸漸變成了欠與恨
Why?
還沒看透徹這心態
那首theme song 聽了痛徹心扉

飛越山
別回頭看
陪你流淚 流汗
Back in my ways again
想妳想了太多
I'm growing up
I'll put my ego aside 表達我的歉意我很願意
如果讓我回到那天
讓我早點明白你需要的只是我的聆聽不是建議

You might have mistaken me for somebody else
Girl 我也想陪著妳 但誰想得到
你搭上地鐵 你越來越遠
memories be creeping in 我睡得不好

You might have mistaken me for somebody else
來不及說對不起 我沒那麼好
會放下紀念
就一天一點
Take us back to the summertimes
We'll go anywhere */
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
				<router-link to="/" data-txt="主題館">
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
