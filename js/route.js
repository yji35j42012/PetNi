const routes=[
    {
        path: '/',
        component: () => loadModule('./page/home.vue', options),
    },
    {
        path: '/collect',
        component: () => loadModule('./page/collect.vue', options),
    },
    {
        path: '/theme',
        component: () => loadModule('./page/theme.vue', options),
    },
    {
        path: '/rescue',
        component: () => loadModule('./page/rescue.vue', options),
    },
    {
        path: '/hospital',
        component: () => loadModule('./page/hospital.vue', options),
    },
];
const router=VueRouter.createRouter({
    history: VueRouter.createWebHistory('#'),
    routes
})