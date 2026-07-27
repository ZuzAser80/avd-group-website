const publicPaths = ['/', '/about', '/projects', '/contacts', '/login'];

const routes = [
    { path: '/', component: Frontpage },
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/contacts', component: Contacts },
    { path: '/posts', component: Posts },
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

// ✅ ИСПРАВЛЕНО: добавлен template с router-view
const app = Vue.createApp({
    template: '<router-view></router-view>'
});

app.use(router);
app.mount('#app');