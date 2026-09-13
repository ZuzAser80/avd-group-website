const Objects = {
    template: `
        <div class="ts">
            <app-header></app-header>

            <!-- ГЕРОЙ СТРАНИЦЫ -->
            <section class="ts-hero ts-hero-small">
                <div class="ts-hero-bg"></div>
                <div class="ts-hero-inner">
                    <p class="ts-hero-badge">Объекты</p>
                    <h1 class="ts-hero-h1">Готовое жильё, которое можно увидеть сегодня</h1>
                    <p class="ts-hero-sub">Комплекс таунхаусов на ул. Вольская, 29 — сдан и заселён. Из 5 домов в продаже остался один — просторный дом 133,6 м². Ниже его состав и фотографии. Распроданные дома можно посмотреть — чтобы представить формат.</p>
                    <div class="ts-hero-actions">
                        <router-link to="/request" class="ts-btn ts-btn-orange">Записаться на просмотр</router-link>
                    </div>
                </div>
            </section>

            <!-- ДОМА КОМПЛЕКСА -->
            <section class="ts-section">
                <div class="ts-container">
                    <p class="ts-label">Дома комплекса</p>
                    <h2 class="ts-h2">Всего 5 домов — <span>остался последний</span></h2>
                    <div class="ts-avail-strip">
                        <span class="ts-avail-chip">3 дома 99,6 м² — проданы</span>
                        <span class="ts-avail-chip">1 дом 133,6 м² — продан</span>
                        <span class="ts-avail-chip ts-avail-chip-hot">1 дом 133,6 м² — в продаже</span>
                    </div>
                    <div class="ts-homes ts-homes-single">
                        <div class="ts-home ts-home-featured">
                            <div class="ts-home-card">
                                <span class="ts-home-tag">2 этажа · кирпич · дом сдан</span>
                                <p class="ts-home-price"><b>12 830 000 ₽</b></p>
                                <h3 class="ts-home-name">Таунхаус 133,6 м²</h3>
                                <p class="ts-home-note">Просторный дом с максимальным панорамным светом — последний в комплексе</p>
                                <ul class="ts-home-floors">
                                    <li><b>1 этаж</b>прихожая, просторная кухня-гостиная, санузел, котельная, тёплые полы</li>
                                    <li><b>2 этаж</b>3 спальни с панорамными окнами, дополнительные окна на лестнице</li>
                                    <li><b>Участок</b>закрытая лужайка до 70 м²</li>
                                </ul>
                                <div class="ts-home-actions">
                                    <router-link to="/request" class="ts-btn ts-btn-orange">Заявка на дом</router-link>
                                    <button type="button" class="ts-btn ts-btn-outline" @click="openHome(homes[0])">Состав и фото</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- РАСПРОДАННЫЕ ДОМА -->
                    <div class="ts-sold">
                        <h3 class="ts-sold-title">Распроданные дома — посмотреть</h3>
                        <p class="ts-sold-sub">Каждый дом комплекса уже куплен и заселён. Откройте карточку, чтобы увидеть формат, состав и фотографии.</p>
                        <div class="ts-sold-grid">
                            <button type="button" class="ts-sold-card" v-for="h in soldHomes" :key="h.key" @click="openHome(h)">
                                <span class="ts-sold-badge">Продано</span>
                                <b class="ts-sold-name">{{ h.name }}</b>
                                <span class="ts-sold-note">{{ h.note }}</span>
                                <span class="ts-sold-view">Смотреть состав и фото →</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ФОТОГАЛЕРЕЯ -->
            <section class="ts-section ts-white-sec">
                <div class="ts-container">
                    <p class="ts-label">Фотогалерея</p>
                    <h2 class="ts-h2">Как это выглядит <span>по-настоящему</span></h2>
                    <div class="ts-gallery">
                        <figure class="ts-g-item ts-g-main-photo">
                            <img src="/static/images/object/volskaya-1.jpg" alt="Комплекс таунхаусов на ул. Вольская, 29" />
                            <figcaption>Комплекс из пяти блокированных кирпичных домов</figcaption>
                        </figure>
                        <figure class="ts-g-item">
                            <img src="/static/images/object/volskaya-2.jpg" alt="Возведение стен и перегородок" />
                            <figcaption>Стены и перегородки</figcaption>
                        </figure>
                        <figure class="ts-g-item">
                            <img src="/static/images/object/volskaya-3.jpg" alt="Установка межэтажных перекрытий" />
                            <figcaption>Межэтажные перекрытия</figcaption>
                        </figure>
                        <figure class="ts-g-item">
                            <img src="/static/images/object/volskaya-4.jpg" alt="Благоустройство и озеленение территории" />
                            <figcaption>Благоустройство территории</figcaption>
                        </figure>
                        <figure class="ts-g-item">
                            <img src="/static/images/object/volskaya-5.jpg" alt="Детская площадка и зоны отдыха" />
                            <figcaption>Детская площадка и зоны отдыха</figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <!-- ОТДЕЛКА -->
            <section class="ts-section">
                <div class="ts-container ts-finish">
                    <p class="ts-label">Отделка</p>
                    <h2 class="ts-h2">Предчистовая отделка — <span>white box</span></h2>
                    <p class="ts-lead ts-lead-narrow">Ровные стены, подготовленные полы и смонтированные инженерные системы. Остаётся продумать интерьер — или заказать финишную отделку.</p>
                    <ul class="ts-finish-list">
                        <li>Кирпичные стены и фасады</li>
                        <li>Двухкамерные стеклопакеты REHAU</li>
                        <li>Водяные тёплые полы на 1 этаже</li>
                        <li>Автономная газовая котельная</li>
                        <li>Центральный водопровод и бойлер</li>
                        <li>Металлическая лестница с перилами</li>
                    </ul>
                </div>
            </section>

            <!-- РАСПОЛОЖЕНИЕ -->
            <section class="ts-section ts-white-sec">
                <div class="ts-container ts-loc-grid">
                    <div>
                        <p class="ts-label">Расположение</p>
                        <h2 class="ts-h2">Тихий Кировский район,<br><span>рядом — всё необходимое</span></h2>
                        <ul class="ts-loc-list">
                            <li><b>Остановка — в 10 метрах</b> — от дома до транспорта один шаг</li>
                            <li><b>До центра</b> — 20 минут без пробок</li>
                            <li><b>Школа «СинТез» и детские сады</b> — в шаговой доступности</li>
                            <li><b>«Магнит» и «Пятёрочка»</b> — по соседству</li>
                            <li><b>Лесопарк, лыжная база, конный клуб</b> — рядом</li>
                            <li><b>Доставка и сервисы</b> — без ограничений, как в городе</li>
                        </ul>
                        <a href="https://yandex.ru/maps/?text=Пермь, Вольская 29" target="_blank" class="ts-map-link">Показать на карте →</a>
                    </div>
                    <div class="ts-loc-card">
                        <p class="ts-loc-place">г. Пермь, Кировский район</p>
                        <p class="ts-loc-addr">ул. Вольская, 29/1–29/5</p>
                        <ul class="ts-loc-rows">
                            <li><span>До центра</span><b>20 минут</b></li>
                            <li><span>До остановки</span><b>10 метров</b></li>
                            <li><span>До школы «СинТез»</span><b>пешком</b></li>
                            <li><span>Лесопарк</span><b>рядом</b></li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- ДРУГИЕ ОБЪЕКТЫ -->
            <section class="ts-section" v-if="posts.length">
                <div class="ts-container">
                    <p class="ts-label">Другие объекты</p>
                    <h2 class="ts-h2">Чем ещё мы занимались</h2>
                    <div class="ts-posts">
                        <button type="button" class="ts-other-card ts-other-card-lg" v-for="post in posts" :key="post.id" @click="openPost(post)">
                            <img v-if="post.image" :src="post.image" :alt="post.title" />
                            <div>
                                <h3>{{ post.title }}</h3>
                                <p v-if="post.address">{{ post.address }}</p>
                                <p v-if="post.content" class="ts-post-content">{{ post.content }}</p>
                                <span v-if="post.year" class="ts-other-year">{{ post.year }}</span>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            <!-- МОДАЛКА ДОМА -->
            <div v-if="activeHome" class="ts-modal" @click.self="activeHome = null">
                <div class="ts-modal-box">
                    <button type="button" class="ts-modal-close" @click="activeHome = null">✕</button>
                    <p class="ts-modal-badge" :class="{ 'ts-modal-sold': activeHome.sold }">{{ activeHome.sold ? 'Продано' : 'В продаже' }}</p>
                    <h3 class="ts-modal-title">{{ activeHome.name }}</h3>
                    <p v-if="!activeHome.sold" class="ts-modal-price">{{ activeHome.price }}</p>
                    <p class="ts-modal-note">{{ activeHome.note }}</p>
                    <div class="ts-modal-gallery">
                        <figure v-for="(ph, i) in activeHome.photos" :key="i">
                            <img :src="ph.src" :alt="ph.caption" />
                            <figcaption>{{ ph.caption }}</figcaption>
                        </figure>
                    </div>
                    <ul class="ts-home-floors ts-modal-floors">
                        <li v-for="(f, i) in activeHome.floors" :key="i"><b>{{ f[0] }}</b> — {{ f[1] }}</li>
                    </ul>
                    <router-link v-if="!activeHome.sold" to="/request" class="ts-btn ts-btn-orange">Заявка на дом</router-link>
                    <p v-else class="ts-modal-cta-note">Этот дом уже продан. Оставьте заявку — расскажем о похожих вариантах.</p>
                </div>
            </div>

            <!-- МОДАЛКА ДРУГОГО ОБЪЕКТА -->
            <div v-if="activePost" class="ts-modal" @click.self="activePost = null">
                <div class="ts-modal-box ts-modal-narrow">
                    <button type="button" class="ts-modal-close" @click="activePost = null">✕</button>
                    <img v-if="activePost.image" :src="activePost.image" :alt="activePost.title" class="ts-modal-img-lg" />
                    <h3 class="ts-modal-title">{{ activePost.title }}</h3>
                    <p v-if="activePost.year" class="ts-modal-note">{{ activePost.year }}</p>
                    <p v-if="activePost.address" class="ts-modal-note">{{ activePost.address }}</p>
                    <p v-if="activePost.content" class="ts-post-content">{{ activePost.content }}</p>
                </div>
            </div>

            <!-- ФУТЕР -->
            <footer class="ts-footer">
                <div class="ts-container ts-footer-grid">
                    <div>
                        <p class="ts-footer-title">Офис продаж</p>
                        <p class="ts-footer-item">г. Пермь, ул. Петропавловская, 41, оф. 209</p>
                        <p class="ts-footer-item">пн–пт: 9:00–18:00 · сб: 10:00–14:00</p>
                    </div>
                    <div>
                        <p class="ts-footer-title">Контакты</p>
                        <p class="ts-footer-item">8 (908) 25-85-888 · +7 902 80 32 835</p>
                        <p class="ts-footer-item">avd_grupp@mail.ru</p>
                        <div class="ts-footer-links">
                            <a href="https://t.me/avd_grupp" target="_blank">Telegram</a>
                            <a href="mailto:avd_grupp@mail.ru">Написать</a>
                        </div>
                    </div>
                    <div class="ts-footer-cta">
                        <router-link to="/request" class="ts-btn ts-btn-orange">Записаться на просмотр</router-link>
                    </div>
                </div>
                <div class="ts-container">
                    <p class="ts-footer-legal">АВД ГРУПП — застройщик малоэтажного жилья в Перми<br>Информация на сайте носит справочный характер и не является публичной офертой · © АВД ГРУПП</p>
                </div>
            </footer>
        </div>
    `,
    data() {
        return {
            posts: [],
            activeHome: null,
            activePost: null,
            homes: [
                {
                    key: 'last',
                    tag: '2 этажа · кирпич · дом сдан',
                    price: '12 830 000 ₽',
                    name: 'Таунхаус 133,6 м²',
                    note: 'Просторный дом с максимальным панорамным светом — последний в комплексе',
                    sold: false,
                    floors: [
                        ['1 этаж', 'прихожая, просторная кухня-гостиная, санузел, котельная, тёплые полы'],
                        ['2 этаж', '3 спальни с панорамными окнами, дополнительные окна на лестнице'],
                        ['Участок', 'закрытая лужайка до 70 м²']
                    ],
                    photos: [
                        { src: '/static/images/object/volskaya-1.jpg', caption: 'Комплекс из пяти блокированных кирпичных домов' },
                        { src: '/static/images/object/volskaya-2.jpg', caption: 'Стены и перегородки' },
                        { src: '/static/images/object/volskaya-3.jpg', caption: 'Межэтажные перекрытия' },
                        { src: '/static/images/object/volskaya-4.jpg', caption: 'Благоустройство территории' },
                        { src: '/static/images/object/volskaya-5.jpg', caption: 'Детская площадка и зоны отдыха' }
                    ]
                },
                {
                    key: 's-133-1',
                    tag: '2 этажа · кирпич',
                    name: 'Таунхаус 133,6 м²',
                    note: 'Второй просторный дом комплекса — продан',
                    sold: true,
                    floors: [
                        ['1 этаж', 'прихожая, просторная кухня-гостиная, санузел, котельная, тёплые полы'],
                        ['2 этаж', '3 спальни с панорамными окнами, дополнительные окна на лестнице'],
                        ['Участок', 'закрытая лужайка до 70 м²']
                    ],
                    photos: [
                        { src: '/static/images/object/volskaya-1.jpg', caption: 'Комплекс из пяти блокированных кирпичных домов' },
                        { src: '/static/images/object/volskaya-4.jpg', caption: 'Благоустройство территории' },
                        { src: '/static/images/object/volskaya-5.jpg', caption: 'Детская площадка и зоны отдыха' }
                    ]
                },
                {
                    key: 's-99-1',
                    tag: '2 этажа · кирпич',
                    name: 'Таунхаус 99,6 м²',
                    note: 'Компактный семейный дом — продан',
                    sold: true,
                    floors: [
                        ['1 этаж', 'прихожая, кухня-гостиная, санузел, котельная, тёплые полы'],
                        ['2 этаж', 'спальни с панорамными окнами'],
                        ['Участок', 'закрытая лужайка до 40 м²']
                    ],
                    photos: [
                        { src: '/static/images/object/volskaya-1.jpg', caption: 'Комплекс из пяти блокированных кирпичных домов' },
                        { src: '/static/images/object/volskaya-4.jpg', caption: 'Благоустройство территории' },
                        { src: '/static/images/object/volskaya-5.jpg', caption: 'Детская площадка и зоны отдыха' }
                    ]
                },
                {
                    key: 's-99-2',
                    tag: '2 этажа · кирпич',
                    name: 'Таунхаус 99,6 м²',
                    note: 'Компактный семейный дом — продан',
                    sold: true,
                    floors: [
                        ['1 этаж', 'прихожая, кухня-гостиная, санузел, котельная, тёплые полы'],
                        ['2 этаж', 'спальни с панорамными окнами'],
                        ['Участок', 'закрытая лужайка до 40 м²']
                    ],
                    photos: [
                        { src: '/static/images/object/volskaya-1.jpg', caption: 'Комплекс из пяти блокированных кирпичных домов' },
                        { src: '/static/images/object/volskaya-4.jpg', caption: 'Благоустройство территории' },
                        { src: '/static/images/object/volskaya-5.jpg', caption: 'Детская площадка и зоны отдыха' }
                    ]
                },
                {
                    key: 's-99-3',
                    tag: '2 этажа · кирпич',
                    name: 'Таунхаус 99,6 м²',
                    note: 'Компактный семейный дом — продан',
                    sold: true,
                    floors: [
                        ['1 этаж', 'прихожая, кухня-гостиная, санузел, котельная, тёплые полы'],
                        ['2 этаж', 'спальни с панорамными окнами'],
                        ['Участок', 'закрытая лужайка до 40 м²']
                    ],
                    photos: [
                        { src: '/static/images/object/volskaya-1.jpg', caption: 'Комплекс из пяти блокированных кирпичных домов' },
                        { src: '/static/images/object/volskaya-4.jpg', caption: 'Благоустройство территории' },
                        { src: '/static/images/object/volskaya-5.jpg', caption: 'Детская площадка и зоны отдыха' }
                    ]
                }
            ]
        };
    },
    computed: {
        soldHomes() {
            return this.homes.filter(h => h.sold);
        }
    },
    watch: {
        activeHome() {
            this.activePost = null;
            this.toggleScroll();
        },
        activePost() {
            this.activeHome = null;
            this.toggleScroll();
        }
    },
    async created() {
        try {
            this.posts = await API.request('/post/all');
        } catch (e) {
            console.error('Failed to load posts:', e);
        }
    },
    methods: {
        openHome(h) {
            this.activeHome = h;
        },
        openPost(p) {
            this.activePost = p;
        },
        toggleScroll() {
            document.body.style.overflow = (this.activeHome || this.activePost) ? 'hidden' : '';
        }
    }
};