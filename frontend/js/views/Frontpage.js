const Frontpage = {
    template: `
        <div class="frontpage">
            <header class="frontpage-header">
                <img src="/static/images/logo.png" alt="АВД ГРУПП" class="logo">
                <h1>АВД Групп</h1>
                <div class="header-actions">
                    <template v-if="loggedIn">
                        <router-link to="/dashboard" class="button" style="width:auto;text-decoration:none">Кабинет</router-link>
                        <button class="button btn-logout" style="width:auto" @click="handleLogout">Выйти</button>
                    </template>
                    <router-link v-else to="/login" class="button" style="width:auto;text-decoration:none">Войти</router-link>
                </div>
            </header>
            <section class="hero">
                <h2>Добро пожаловать в АВД Групп</h2>
                <p>Мы создаём инновационные решения для вашего бизнеса. Здесь вы найдете наши последние новости и публикации.</p>
            </section>
            <section class="frontpage-content">
                <h2>Новости</h2>
                <div v-if="loading" class="loading">Загрузка...</div>
                <div v-else-if="posts.length === 0" class="empty">Пока нет публикаций</div>
                <div v-else class="post-grid">
                    <div class="post-card" v-for="post in posts" :key="post.id">
                        <img v-if="post.image" :src="post.image" :alt="post.title" class="post-image">
                        <div class="post-body">
                            <h3>{{ post.title }}</h3>
                            <p>{{ post.content }}</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="frontpage-footer">
                <p>&copy; 2026 АВД Групп. Все права защищены.</p>
            </footer>
        </div>
    `,
    data() {
        return { posts: [], loading: true };
    },
    computed: {
        loggedIn() {
            return API.isLoggedIn();
        },
    },
    async created() {
        try {
            const res = await fetch('/post/all');
            this.posts = await res.json();
        } catch (e) {
            console.error('Failed to load posts:', e);
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
