const routes = [
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard },
    { path: '/', redirect: '/dashboard' },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.path !== '/login' && !API.isLoggedIn()) {
        next('/login');
    } else {
        next();
    }
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
