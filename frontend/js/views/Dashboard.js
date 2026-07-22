const Dashboard = {
    template: `
        <div class="dashboard">
            <!-- SIDEBAR -->
            <div class="dashboard-sidebar">
                <div class="sidebar-logo">
                    <img src="/static/images/logo.png" alt="АВД ГРУПП">
                </div>
                <nav class="sidebar-nav">
                    <a href="#" class="active" @click.prevent><span>📊</span> Профиль</a>
                    <a href="#" @click.prevent><span>📁</span> Мои проекты</a>
                    <a href="#" @click.prevent><span>📄</span> Документы</a>
                    <a href="#" @click.prevent><span>⚙️</span> Настройки</a>
                </nav>
                <div class="sidebar-footer">
                    <button class="btn-logout" @click="handleLogout">Выйти</button>
                </div>
            </div>
<<<<<<< HEAD
            <div class="dashboard-content">
                <div class="card">
                    <h2>Профиль</h2>
                    <div v-if="loading">Загрузка...</div>
                    <div v-else-if="user">
                        <div class="info-row">
                            <span class="label">Имя</span>
                            <span class="value">{{ user.name }}</span>
                        </div>
=======

            <!-- MAIN CONTENT -->
            <div class="dashboard-main">
                <div class="dashboard-header-bar">
                    <h1>Личный кабинет</h1>
                    <div class="user-badge">
                        <div class="avatar">{{ userInitials }}</div>
                        <span>{{ userName }}</span>
                    </div>
                </div>

                <div class="dashboard-cards">
                    <div class="dashboard-card">
                        <h3>ID пользователя</h3>
                        <p class="value">{{ user ? user.sub : '—' }}</p>
                    </div>
                    <div class="dashboard-card">
                        <h3>Сессия истекает</h3>
                        <p class="value orange">{{ exp }}</p>
                    </div>
                    <div class="dashboard-card">
                        <h3>Статус</h3>
                        <p class="value" style="color: #27ae60;">Активен</p>
                    </div>
                </div>

                <div class="dashboard-content-card">
                    <h2>Информация о профиле</h2>
                    <div v-if="user">
>>>>>>> 9045012 (Супер обновлений 6767 оно теперь работает)
                        <div class="info-row">
                            <span class="label">ID</span>
                            <span class="value">{{ user.id }}</span>
                        </div>
                        <div class="info-row">
                            <span class="label">Токен истекает</span>
                            <span class="value">{{ exp }}</span>
                        </div>
                        <div class="info-row">
                            <span class="label">Последний вход</span>
                            <span class="value">{{ now }}</span>
                        </div>
                    </div>
                    <p v-else class="info-row">Нет данных</p>
                </div>
            </div>
        </div>
    `,
<<<<<<< HEAD
    data() {
        return { user: null, loading: true, exp: '' };
=======
    computed: {
        user() {
            return API.parseToken();
        },
        exp() {
            if (!this.user || !this.user.exp) return '';
            return new Date(this.user.exp * 1000).toLocaleString('ru-RU');
        },
        now() {
            return new Date().toLocaleString('ru-RU');
        },
        userName() {
            return this.user ? ('Пользователь ' + this.user.sub) : 'Гость';
        },
        userInitials() {
            return this.user ? 'АВ' : 'Г';
        }
>>>>>>> 9045012 (Супер обновлений 6767 оно теперь работает)
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