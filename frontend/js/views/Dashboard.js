const Dashboard = {
    template: `
        <div class="dashboard">
            <div class="dashboard-header">
                <h1>AVD Group</h1>
                <button class="btn btn-danger" style="width:auto;padding:8px 16px" @click="handleLogout">Выйти</button>
            </div>
            <div class="dashboard-content">
                <div class="card">
                    <h2>Профиль</h2>
                    <div v-if="user">
                        <div class="info-row">
                            <span class="label">ID</span>
                            <span>{{ user.sub }}</span>
                        </div>
                        <div class="info-row">
                            <span class="label">Токен истекает</span>
                            <span>{{ exp }}</span>
                        </div>
                    </div>
                    <p v-else style="color:#666">Нет данных</p>
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
