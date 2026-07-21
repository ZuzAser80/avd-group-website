const Dashboard = {
    template: `
        <div class="dashboard">
            <div class="dashboard-header">
                <img src="/static/images/1-4.png" alt="АВД ГРУПП" class="logo">
                <h1>АВД Групп</h1>
                <button class="button btn-logout" @click="handleLogout">Выйти</button>
            </div>
            <div class="dashboard-content">
                <div class="card">
                    <h2>Профиль</h2>
                    <div v-if="user">
                        <div class="info-row">
                            <span class="label">ID</span>
                            <span class="value">{{ user.sub }}</span>
                        </div>
                        <div class="info-row">
                            <span class="label">Токен истекает</span>
                            <span class="value">{{ exp }}</span>
                        </div>
                    </div>
                    <p v-else class="info-row">Нет данных</p>
                </div>
            </div>
        </div>
    `,
    computed: {
        user() {
            return API.parseToken();
        },
        exp() {
            if (!this.user || !this.user.exp) return '';
            return new Date(this.user.exp * 1000).toLocaleString('ru-RU');
        },
    },
    created() {
        if (!API.isLoggedIn()) {
            this.$router.push('/login');
        }
    },
    methods: {
        handleLogout() {
            API.logout();
            this.$router.push('/login');
        },
    },
};
