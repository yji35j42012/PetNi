<style scoped></style>

<template>
	<div class="container">
		<div class="detail_img">
			<img src="../images/test.jpeg" alt />
			<button class="close_btn" @click="close">
				<i v-html="icon_all.arrowLeft"></i>
			</button>
		</div>
		<div class="detail_basic">
			<div class="detail_basic_info">
				<petinfo></petinfo>
				<button class="like" @click="recordLike('slip1')">
					<i v-html="icon_all.like"></i>
				</button>
			</div>
			<ul class="detail_basic_serial">
				<li class="big">
					<span>W09C0429-03</span>
					<span>130</span>
				</li>
				<li class="small">
					<span>2020.08.28</span>
					<span>followers</span>
				</li>
			</ul>
			<ul class="detail_basic_introduction">
				<li>
					<div class="pic">
						<i v-html="icon_all.status"></i>
					</div>
					<div class="txt">求</div>
				</li>
				<li>
					<div class="pic">
						<i v-html="icon_all.female"></i>
					</div>
					<div class="txt">女生</div>
				</li>
				<li>
					<div class="pic">
						<i v-html="icon_all.theme"></i>
					</div>
					<div class="txt">黑白色</div>
				</li>
			</ul>
			<ul class="detail_basic_normal">
				<li class="phone">03-4861 760</li>
				<li class="address">桃園市新屋區永興里3鄰藻礁路1668號</li>
				<li class="txt">本站動物皆採現場互動面談後評估能否認養，不接受系統上的預約。</li>
			</ul>
		</div>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			icon_all: icon_all
			// nameId: null,
			// subid: null,
			// tel: null,
			// address: null,
			// remark: null
		};
	},
	components: {
		petinfo: httpVueLoader("../components/PetInfo.vue")
	},
	mounted() {
		// let detailId = this.$route.params.id;
		// store.state.petData.forEach(item => {
		// 	if (detailId == item.animal_id) {
		// 		this.nameId = item.animal_id;
		// 		this.subid = item.animal_subid;
		// 		this.tel = item.shelter_tel;
		// 		this.address = item.shelter_address;
		// 		this.remark = item.animal_remark;
		// 		console.log("detailId item", item);
		// 	}
		// });
	},
	computed: {},
	methods: {
		close() {
			this.$router.push("/home");
		}
	}
};
</script>
