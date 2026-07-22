const Dashboard = {
    template: `
        <div class="dashboard">
            <div class="dashboard-header">
                <img src="/static/images/logo.png" alt="АВД ГРУПП" class="logo">
                <h1>АВД Групп</h1>
                <button class="button btn-logout" @click="handleLogout">Выйти</button>
            </div>
            <div class="dashboard-content">
                <div class="card">
                    <h2>Профиль</h2>
                    <div v-if="loading">Загрузка...</div>
                    <div v-else-if="user">
                        <div class="info-row">
                            <span class="label">Имя</span>
                            <span class="value">{{ user.name }}</span>
                        </div>
                        <div class="info-row">
                            <span class="label">ID</span>
                            <span class="value">{{ user.id }}</span>
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
    data() {
        return { user: null, loading: true, exp: '' };
    },
    async created() {
        if (!API.isLoggedIn()) {
            this.$router.push('/login');
            return;
        }
        try {
            this.user = await API.request('/user/me');
            const tokenData = API.parseToken();
            if (tokenData && tokenData.exp) {
                this.exp = new Date(tokenData.exp * 1000).toLocaleString('ru-RU');
            }
        } catch (e) {
            console.error('Failed to load profile:', e);
        } finally {
            this.loading = false;
        }
    },
    methods: {
        handleLogout() {
            API.logout();
            this.$router.push('/login');
        },
    },
};
