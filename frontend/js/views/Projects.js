const Projects = {
    template: `
        <div class="-83">
            <!-- ШАПКА -->
            <app-header></app-header>

            <div class="page-wrap">
                <div class="inner-hero">
                    <p class="hero-badge">Наши объекты</p>
                    <h1 class="h1">Готовое жильё от застройщика</h1>
                    <p class="inner-hero-sub">Собственные проекты АВД ГРУПП в Перми — комплексы кирпичных таунхаусов с закрытой территорией</p>
                </div>
                <div class="page">

                    <!-- ФЛАГМАНСКИЙ ОБЪЕКТ -->
                    <div class="featured-object-card">
                        <div class="foc-body">
                            <span class="foc-status">Готовое жильё · дом сдан</span>
                            <h2 class="foc-title">Комплекс таунхаусов<br>ул. Вольская, 29</h2>
                            <p class="foc-address">Кировский район, Пермь · 20 минут от центра</p>
                            <div class="foc-specs">
                                <div class="spec-item"><b>5</b><span>блок-секций</span></div>
                                <div class="spec-item"><b>99,6–133,6 м²</b><span>площадь домов</span></div>
                                <div class="spec-item"><b>Кирпич</b><span>стены и фасады</span></div>
                                <div class="spec-item"><b>12,83 млн ₽</b><span>максимальная цена</span></div>
                            </div>
                            <router-link to="/project/volskaya" class="prototype-link">
                                <div class="button-primary-14">
                                    <p class="button"><span class="text-white">Смотреть объект</span></p>
                                    <span class="button-arrow">→</span>
                                </div>
                            </router-link>
                        </div>
                        <div class="foc-side">
                            <div class="foc-price-box">
                                <span>от</span>
                                <b>9 960 000 ₽</b>
                                <p>дом 99,6 м²</p>
                            </div>
                            <p class="foc-note">Семейная и IT-ипотека, жилищные сертификаты, взаимозачёт</p>
                        </div>
                    </div>

                    <h2 class="projects-subtitle">Все объекты</h2>
                    <div v-if="loading" class="empty">Загрузка...</div>
                    <div v-else-if="posts.length === 0" class="empty">Пока нет других объектов</div>
                    <div v-else class="projects-grid">
                        <div class="project-card" v-for="post in posts" :key="post.id">
                            <img v-if="post.image" :src="post.image" :alt="post.title" />
                            <div class="project-card-content">
                                <h3>{{ post.title }}</h3>
                                <p v-if="post.address" class="project-meta">{{ post.address }}</p>
                                <p v-if="post.client" class="project-meta">{{ post.client }}</p>
                                <span v-if="post.year" class="project-tag">{{ post.year }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ФУТЕР -->
            <div class="info-34">
                <div class="info-wrap">
                    <div class="info-text">
                        <p class="h3"><span class="text-white">Группа компаний «АВД ГРУПП»</span></p>
                        <p class="body"><span class="text-white">Застройщик: ООО «Специализированный застройщик СК „Рост-Строй“»<br>ИНН 5903124969 · ОГРН 1165958080199 · г. Пермь, ул. Окулова, 27<br>тел. 8 (908) 25-85-888 · +7 902 80 32 835</span></p>
                    </div>
                    <img src="/static/images/monochrome_logo.png" class="footer-logo" alt="Логотип" />
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