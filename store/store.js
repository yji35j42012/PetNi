const store = new Vuex.Store({
	state: {
		nowPage: "",
		petData: "",
	},
	getters: {},
	mutations: {
		SET_PAGE(state, str) {
			state.nowPage = str;
		},
		SET_PETDATA(state, obj) {
			state.petData = obj;
		},
		// SET_CITY(state, str) {
		// 	state.city = str
		// },
	},
	actions: {
		PAGE({ commit }, str) {
			commit("SET_PAGE", str);
		},
		SET_PETDATA_ACTION({ commit }, petObj) {
			commit("SET_PETDATA", petObj);
		},
		// READ_CITY({ commit }) {
		// 	axios
		// 		.get("https://gist.motc.gov.tw/gist_api/V3/Map/Basic/City")
		// 		.then((res) => {
		// 			commit("SET_CITY", res.data)
		// 		})
		// },
		// READ_ATTRACTIONS_INFO ({ commit }) {
		// 	axios
		// 		.get(
		// 			// "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?%24select=Class1%2CPicture%2CScenicSpotName%2CScenicSpotID%2CDescription%2CAddress&%24format=JSON"
		// 			"../testData/attractions.json"
		// 		)
		// 		.then((res) => {
		// 			let class_obj = {
		// 				class_sort: [],
		// 				class_map: {},
		// 			}
		// 			let info_obj = []
		// 			res.data.forEach((item) => {
		// 				if (!class_obj.class_map[item.Class1] && item.Class1) {
		// 					class_obj.class_sort.push(item.Class1)
		// 					class_obj.class_map[item.Class1] = {
		// 						picUrl: [],
		// 					}
		// 				}
		// 				if (item.Class1) {
		// 					class_obj.class_map[item.Class1].picUrl.push(
		// 						item.Picture.PictureUrl1
		// 							? item.Picture.PictureUrl1
		// 							: "../images/error.png"
		// 					)
		// 				}
		// 				info_obj.push({
		// 					infoId: item.ScenicSpotID,
		// 					cityName: item.Address
		// 						? item.Address.substr(0, 3)
		// 						: "",
		// 					detail: item.Description,
		// 					picture: item.Picture,
		// 					pictureUrl: item.Picture.PictureUrl1
		// 						? item.Picture.PictureUrl1
		// 						: "../images/error.png",
		// 					infoName: item.ScenicSpotName,
		// 					type: item.Class1,
		// 				})
		// 			})
		// 			commit("SET_ATTRACTIONS", { class_obj, info_obj })
		// 		})
		// },
		// READ_RESTAURANT_INFO({ commit }) {
		// 	axios
		// 		.get(
		// 			// "https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?%24select=Class%2CPicture%2CRestaurantName%2CRestaurantID%2CDescription%2CAddress&%24format=JSON"
		// 			"../testData/restaurant.json"
		// 		)
		// 		.then((res) => {
		// 			let class_obj = {
		// 				class_sort: [],
		// 				class_map: {},
		// 			}
		// 			let info_obj = []
		// 			res.data.forEach((item) => {
		// 				if (!class_obj.class_map[item.Class] && item.Class) {
		// 					class_obj.class_sort.push(item.Class)
		// 					class_obj.class_map[item.Class] = {
		// 						picUrl: [],
		// 					}
		// 				}
		// 				if (item.Class) {
		// 					class_obj.class_map[item.Class].picUrl.push(
		// 						item.Picture.PictureUrl1
		// 					)
		// 				}
		// 				info_obj.push({
		// 					infoId: item.RestaurantID,
		// 					cityName: item.Address
		// 						? item.Address.substr(0, 3)
		// 						: "",
		// 					detail: item.Description,
		// 					picture: item.Picture,
		// 					pictureUrl: item.Picture.PictureUrl1
		// 						? item.Picture.PictureUrl1
		// 						: "../images/error.png",
		// 					infoName: item.RestaurantName,
		// 					type: item.Class,
		// 				})
		// 			})
		// 			commit("SET_RESTAURANT", { class_obj, info_obj })
		// 		})
		// },

		// READ_ACTIVITY_INFO({ commit }) {
		// 	axios
		// 		.get(
		// 			// "https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?%24select=Class1%2CPicture%2CActivityName%2CDescription%2CAddress%2CActivityID&%24format=JSON"
		// 			"../testData/activity.json"
		// 		)
		// 		.then((res) => {
		// 			let class_obj = {
		// 				class_sort: [],
		// 				class_map: {},
		// 			}
		// 			let info_obj = []
		// 			res.data.forEach((item) => {
		// 				if (!class_obj.class_map[item.Class1] && item.Class1) {
		// 					class_obj.class_sort.push(item.Class1)
		// 					class_obj.class_map[item.Class1] = {
		// 						picUrl: [],
		// 					}
		// 				}
		// 				if (item.Class1) {
		// 					class_obj.class_map[item.Class1].picUrl.push(
		// 						item.Picture.PictureUrl1
		// 							? item.Picture.PictureUrl1
		// 							: "../images/error.png"
		// 					)
		// 				}
		// 				info_obj.push({
		// 					infoId: item.ActivityID,
		// 					cityName: item.Address
		// 						? item.Address.substr(0, 3)
		// 						: "",
		// 					detail: item.Description,
		// 					picture: item.Picture,
		// 					pictureUrl: item.Picture.PictureUrl1
		// 						? item.Picture.PictureUrl1
		// 						: "../images/error.png",
		// 					infoName: item.ActivityName,
		// 					type: item.Class1,
		// 				})
		// 			})
		// 			commit("SET_ACTIVITY", { class_obj, info_obj })
		// 		})
		// },
		// ADD_BREADCRUMBS({ commit }, str) {
		// 	commit("SET_BREADCRUMBS", str)
		// },
		// DEL_BREADCRUMBS({ commit }) {
		// 	commit("DEL_BREADCRUMBS")
		// },
		// CLEAR_BREADCRUMBS({ commit }) {
		// 	commit("CLEAR_BREADCRUMBS")
		// },
		// SET_SEARCHITEM({ commit }, searchObj) {
		// 	commit("SET_SEARCHITEM", searchObj)
		// },
		// SET_SHOWSEARCH({ commit }, showObj) {
		// 	commit("SET_SHOWSEARCH", showObj)
		// },
		// SET_LOADING({ commit }, boo) {
		// 	setTimeout(() => {
		// 		commit("SET_LOADING", boo)
		// 	}, 1000)
		// },
	},
});
