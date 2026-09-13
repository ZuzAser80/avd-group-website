const AppHeader = {
    template: `
        <div class="header-39">
            <div class="container-40">
                <router-link to="/" class="prototype-link">
                    <img src="/static/images/logo.png" alt="АВД ГРУПП" />
                </router-link>
                <div class="nav-center">
                    <router-link to="/" class="prototype-link">
                        <p class="menu" :class="{ active: isActive('/') }">
                            <span :class="isActive('/') ? 'text-rgb-181-85-47' : 'text-rgb-50-50-50'">Главная</span>
                        </p>
                    </router-link>
                    <router-link to="/about" class="prototype-link">
                        <p class="menu" :class="{ active: isActive('/about') }">
                            <span :class="isActive('/about') ? 'text-rgb-181-85-47' : 'text-rgb-50-50-50'">О компании</span>
                        </p>
                    </router-link>
                    <router-link to="/projects" class="prototype-link">
                        <p class="menu" :class="{ active: isProjects }">
                            <span :class="isProjects ? 'text-rgb-181-85-47' : 'text-rgb-50-50-50'">Объекты</span>
                        </p>
                    </router-link>
                    <router-link to="/contacts" class="prototype-link">
                        <p class="menu" :class="{ active: isActive('/contacts') }">
                            <span :class="isActive('/contacts') ? 'text-rgb-181-85-47' : 'text-rgb-50-50-50'">Контакты</span>
                        </p>
                    </router-link>
                </div>
                <div class="nav-auth">
                    <router-link to="/login" class="prototype-link">
                        <button class="btn-login">Личный кабинет</button>
                    </router-link>
                    <p class="text-46"><span class="text-rgb-207-120-85">+7 902 80 32 835</span></p>
                </div>
            </div>
        </div>
    `,
    computed: {
        isProjects() {
            return this.$route.path.startsWith('/projects') || this.$route.path.startsWith('/project/');
        }
    },
    methods: {
        isActive(path) {
            return this.$route.path === path || this.$route.path.startsWith(path + '/');
        }
    }
};