const publicPaths = ['/', '/about', '/objects', '/request', '/contacts', '/login'];

const routes = [
    { path: '/', component: Frontpage },
    { path: '/about', component: About },
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

// Шаблоны компилируются в `with (_ctx) { ... }`, и прокси экземпляра
// перехватывает любое имя: обращение к глобальной функции/константе из шаблона
// даёт "X is not a function". Поэтому публикуем общие хелперы как
// глобальные свойства приложения — только тогда шаблоны их видят.
Object.assign(app.config.globalProperties, {
    OBJECT_STATUS_TABS,
    DEFAULT_OBJECT_STATUS,
    OBJECT_STATUS_FALLBACK,
    OBJECT_STATUS_BADGE,
    normalizeObjectStatus,
    statusLabel,
    statusEmptyText,
    statusBadgeLabel,
    firstPopulatedStatus,
    countByStatus,
    plural,
    API,
});

app.component('AppHeader', AppHeader);

app.use(router);
app.mount('#app');