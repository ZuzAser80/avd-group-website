const Projects = {
    template: `
        <div class="-83">
            <!-- ШАПКА -->
            <div class="header-84">
                <div class="container-85">
                    <router-link to="/" class="prototype-link">
                        <img src="/static/images/logo.png" alt="АВД ГРУПП" />
                    </router-link>
                    <div class="nav-center">
                        <router-link to="/" class="prototype-link">
                            <p class="menu"><span class="text-rgb-50-50-50">Главная</span></p>
                        </router-link>
                        <router-link to="/about" class="prototype-link">
                            <p class="menu"><span class="text-rgb-50-50-50">О нас</span></p>
                        </router-link>
                        <router-link to="/contacts" class="prototype-link">
                            <p class="menu"><span class="text-rgb-50-50-50">Контакты</span></p>
                        </router-link>
                        <p class="menu active"><span class="text-rgb-181-85-47">Объекты</span></p>
                    </div>
                    <div class="nav-auth">
                        <router-link to="/login" class="prototype-link">
                            <button class="btn-login">Личный кабинет</button>
                        </router-link>
                        <p class="text-91"><span class="text-rgb-207-120-85">+7 902 80 32 835</span></p>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
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
=======

            <div class="page-wrap">
                <div class="page">
                    <div class="page-header">
                        <h1 class="h1">Наши объекты</h1>
                        <p class="body">Реальные проекты, реализованные командой АВД ГРУПП в Перми и Пермском крае</p>
                    </div>
                    <div class="projects-grid">
                        <div class="project-card">
                            <img src="/static/images/project1.jpg" alt="4-этажный жилой дом" />
                            <div class="project-card-content">
                                <h3>4-этажный жилой дом</h3>
                                <p class="project-meta">г. Пермь, ул. Левченко, 11</p>
                                <p class="project-meta">Заказчик: ООО «АЯК-Строй»</p>
                                <span class="project-tag">2012 год</span>
                            </div>
                        </div>
                        <div class="project-card">
                            <img src="/static/images/project2.jpg" alt="16-этажный жилой дом" />
                            <div class="project-card-content">
                                <h3>16-этажный жилой дом</h3>
                                <p class="project-meta">г. Пермь, ул. Беляева, 8</p>
                                <p class="project-meta">Заказчик: ОАО «ПЗСП»</p>
                                <span class="project-tag">2013 год</span>
                            </div>
                        </div>
                        <div class="project-card">
                            <img src="/static/images/project3.jpg" alt="16-этажный жилой дом" />
                            <div class="project-card-content">
                                <h3>16-этажный жилой дом</h3>
                                <p class="project-meta">г. Пермь, ул. Левченко, 31</p>
                                <p class="project-meta">Заказчик: ООО «Альфа-Строй»</p>
                                <span class="project-tag">2013-2014</span>
                            </div>
                        </div>
                        <div class="project-card">
                            <img src="/static/images/project4.jpg" alt="Малоэтажные дома" />
                            <div class="project-card-content">
                                <h3>Группа малоэтажных домов</h3>
                                <p class="project-meta">с. Лобаново, секции №7, №8</p>
                                <p class="project-meta">Заказчик: ООО «КУБ-Стройкомплекс»</p>
                                <span class="project-tag">2014 год</span>
                            </div>
                        </div>
                        <div class="project-card">
                            <img src="/static/images/project5.jpg" alt="Комплекс 4-этажных домов" />
                            <div class="project-card-content">
                                <h3>Комплекс 4-этажных жилых домов</h3>
                                <p class="project-meta">г. Пермь, ул. Кировоградская, 180</p>
                                <p class="project-meta">Генподрядчик: ООО «КУБ-Стройкомплекс»</p>
                                <span class="project-tag">2014-2015</span>
                            </div>
                        </div>
                        <div class="project-card">
                            <img src="/static/images/project6.jpg" alt="Апартаменты Усть-Качка" />
                            <div class="project-card-content">
                                <h3>Апартаменты при курорте Усть-Качка</h3>
                                <p class="project-meta">Пермский край, с. Усть-Качка</p>
                                <p class="project-meta">Заказчик: ООО «СОМ-Строй»</p>
                                <span class="project-tag">2014-2015</span>
                            </div>
                        </div>
                        <div class="project-card">
                            <img src="/static/images/project7.jpg" alt="5-этажный жилой дом" />
                            <div class="project-card-content">
                                <h3>5-этажный жилой дом</h3>
                                <p class="project-meta">с. Усть-Качка, ул. Победы, 18</p>
                                <p class="project-meta">Заказчик: ООО «СОМ-Строй»</p>
                                <span class="project-tag">2014-2015</span>
                            </div>
                        </div>
                        <div class="project-card">
                            <img src="/static/images/project8.jpg" alt="ЖК Олимп" />
                            <div class="project-card-content">
                                <h3>ЖК «Олимп»</h3>
                                <p class="project-meta">г. Пермь, ул. Локомотивная, 1</p>
                                <p class="project-meta">Заказчик: ООО «Альфа-Строй»</p>
                                <span class="project-tag">2016 год</span>
                            </div>
                        </div>
                        <div class="project-card">
                            <img src="/static/images/project9.jpg" alt="ЖК Новый центр" />
                            <div class="project-card-content">
                                <h3>ЖК «Новый центр»</h3>
                                <p class="project-meta">г. Пермь, ул. Революции, 22</p>
                                <p class="project-meta">Застройщик: ООО «Талант»</p>
                                <span class="project-tag">2017-2018</span>
                            </div>
                        </div>
>>>>>>> 9045012 (Супер обновлений 6767 оно теперь работает)
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