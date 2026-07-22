const Projects = {
    template: `
        <div class="-83">
            <div class="header-84">
                <div class="container-85">
                    <img src="/static/images/logo.png" class="1-86" alt="АВД ГРУПП" />
                    <router-link to="/contacts" class="prototype-link"><p class="menu"><span class="text-rgb-50-50-50">Контакты</span></p></router-link>
                    <router-link to="/about" class="prototype-link"><p class="menu"><span class="text-rgb-50-50-50">О нас</span></p></router-link>
                    <router-link to="/" class="prototype-link"><p class="menu"><span class="text-rgb-50-50-50">Главная</span></p></router-link>
                    <p class="menu"><span class="text-rgb-181-85-47">Объекты</span></p>
                    <p class="text-91"><span class="text-rgb-207-120-85">+7 902 80 32 835</span></p>
                </div>
            </div>
            <div class="page">
                <div class="page-header">
                    <h1 class="h1">Наши объекты</h1>
                    <p class="body">Примеры наших работ — от частных домов до бизнес-центров.</p>
                </div>
                <div class="page-content">
                    <div v-if="loading" class="empty">Загрузка...</div>
                    <div v-else-if="posts.length === 0" class="empty">Пока нет объектов</div>
                    <div v-else class="card" v-for="post in posts" :key="post.id">
                        <img v-if="post.image" :src="post.image" :alt="post.title" class="post-page-image">
                        <h2 class="h2">{{ post.title }}</h2>
                        <p class="body">{{ post.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return { posts: [], loading: true };
    },
    async created() {
        try {
            this.posts = await API.request('/post/all');
        } catch (e) {
            console.error('Failed to load posts:', e);
        } finally {
            this.loading = false;
        }
    },
};