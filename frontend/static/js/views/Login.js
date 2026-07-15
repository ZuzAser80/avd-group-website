const Login = {
    template: `
        <div class="auth-container">
            <img src="/static/images/logo.png" alt="АВД ГРУПП" class="logo">
            <h1>АВД Групп</h1>
            <p class="subtitle">Вход в систему</p>
            <form @submit.prevent="handleLogin">
                <div class="form-group">
                    <label>Имя</label>
                    <input v-model="name" type="text" required placeholder="Введите имя">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input v-model="email" type="email" required placeholder="Введите email">
                </div>
                <div class="form-group">
                    <label>Пароль</label>
                    <input v-model="password" type="password" required placeholder="Введите пароль">
                </div>
                <button class="button" type="submit" :disabled="loading" style="width:100%;">
                    {{ loading ? 'Вход...' : 'Войти' }}
                </button>
                <p v-if="error" class="error">{{ error }}</p>
            </form>
        </div>
    `,
    data() {
        return { name: '', email: '', password: '', loading: false, error: '' };
    },
    methods: {
        async handleLogin() {
            this.loading = true;
            this.error = '';
            try {
                await API.login(this.name, this.email, this.password);
                this.$router.push('/dashboard');
            } catch (e) {
                this.error = e.message;
            } finally {
                this.loading = false;
            }
        },
    },
};
