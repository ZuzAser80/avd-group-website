const publicPaths = ['/', '/objects', '/request', '/contacts', '/login'];

const routes = [
    { path: '/', component: Frontpage },
    { path: '/objects', component: Objects },
    { path: '/request', component: RequestPage },
    { path: '/contacts', component: Contacts },
    { path: '/login', component: Login },
    { path: '/dashboard', component: Dashboard },
    { path: '/posts', component: Posts },
    { path: '/leads', component: Leads },
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

app.component('AppHeader', AppHeader);

app.use(router);
app.mount('#app');