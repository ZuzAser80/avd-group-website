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
                    <router-link to="/posts"><span>📄</span> Все объекты</router-link>
                </nav>
                <div class="sidebar-footer">
                    <button class="btn-logout" @click="handleLogout">Выйти</button>
                </div>
            </div>

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
                    <p class="info-row">Скоро здесь появится больше информации</p>
                </div>
            </div>
        </div>
    `,
    data() {
        return {};
    },
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
            return this.user ? this.user.name : 'Гость';
        },
        userInitials() {
            if (!this.user || !this.user.name) return 'Г';
            return this.user.name.substring(0, 2).toUpperCase();
        }
    },
    async created() {
        if (!API.isLoggedIn()) {
            this.$router.push('/login');
            return;
        }
    },
    methods: {
        handleLogout() {
            API.logout();
            this.$router.push('/login');
        },
    },
};
