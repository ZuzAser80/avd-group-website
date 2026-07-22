const publicPaths = ['/', '/about', '/projects', '/contacts', '/login'];

const routes = [
    { path: '/', component: Frontpage },
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/contacts', component: Contacts },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (publicPaths.includes(to.path)) {
        next();
    } else {
        if (!API.isLoggedIn()) {
            next('/login');
        } else {
            next();
        }
    }
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');