const AppHeader = {
    template: `
        <div class="header-39" :class="{ 'menu-open': isOpen }">
            <div class="container-40">
                <router-link to="/" class="prototype-link">
                    <img src="/static/images/logo.png" alt="АВД ГРУПП" />
                </router-link>
                <button type="button" class="burger" :class="{ active: isOpen }" @click="isOpen = !isOpen" aria-label="Меню">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div class="header-menu" :class="{ open: isOpen }" @click="isOpen = false">
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
                        <router-link to="/objects" class="prototype-link">
                            <p class="menu" :class="{ active: isActive('/objects') }">
                                <span :class="isActive('/objects') ? 'text-rgb-181-85-47' : 'text-rgb-50-50-50'">Объекты</span>
                            </p>
                        </router-link>
                        <router-link to="/request" class="prototype-link">
                            <p class="menu" :class="{ active: isActive('/request') }">
                                <span :class="isActive('/request') ? 'text-rgb-181-85-47' : 'text-rgb-50-50-50'">Заявка</span>
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
                        <p class="text-46"><span class="text-rgb-207-120-85">8 (908) 25-85-888</span></p>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            isOpen: false
        };
    },
    watch: {
        '$route'() {
            this.isOpen = false;
        }
    },
    methods: {
        isActive(path) {
            return this.$route.path === path || this.$route.path.startsWith(path + '/');
        }
    }
};