const routes = [
    { path: '/', component: Frontpage },
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.path !== '/login' && to.path !== '/' && !API.isLoggedIn()) {
        next('/login');
    } else {
        next();
    }
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
