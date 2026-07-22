const Login = {
    template: `
        <div class="auth-page">
            <div class="auth-container">
                <img src="/static/images/logo.png" alt="АВД ГРУПП" class="logo">
                <h1>АВД Групп</h1>
                <p class="subtitle">Вход в личный кабинет</p>
                <form class="auth-form" @submit.prevent="handleLogin">
                    <div class="form-group">
                        <label>Имя пользователя</label>
                        <input v-model="name" type="text" required placeholder="Введите имя">
                    </div>
                    <div class="form-group">
                        <label>Пароль</label>
                        <input v-model="password" type="password" required placeholder="Введите пароль">
                    </div>
                    <button class="button" type="submit" :disabled="loading">
                        {{ loading ? 'Вход...' : 'Войти' }}
                    </button>
                    <p v-if="error" class="error">{{ error }}</p>
                </form>
                <router-link to="/" class="auth-back-link">← Вернуться на главную</router-link>
            </div>
        </div>
    `,
    data() {
        return { name: '', password: '', loading: false, error: '' };
    },
    methods: {
        async handleLogin() {
            this.loading = true;
            this.error = '';
            try {
                await API.login(this.name, this.password);
                this.$router.push('/dashboard');
            } catch (e) {
                this.error = e.message;
            } finally {
                this.loading = false;
            }
        },
    },
};