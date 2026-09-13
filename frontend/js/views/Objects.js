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
                    <p class="ts-hero-sub">Комплекс таунхаусов на ул. Вольская, 29 — сдан. Ниже — состав домов, планировки и фотографии. Остальные объекты в работе — следите за обновлениями.</p>
                    <div class="ts-hero-actions">
                        <router-link to="/request" class="ts-btn ts-btn-orange">Записаться на просмотр</router-link>
                    </div>
                </div>
            </section>

            <!-- ДОМА В ПРОДАЖЕ -->
            <section class="ts-section">
                <div class="ts-container">
                    <p class="ts-label">Дома в продаже</p>
                    <h2 class="ts-h2">Два формата — <span>выберите свой</span></h2>
                    <div class="ts-homes">
                        <div class="ts-home" v-for="(h, i) in homes" :key="h.name" :class="{ 'ts-home-featured': i === 1 }">
                            <div class="ts-home-card">
                                <span class="ts-home-tag">{{ h.tag }}</span>
                                <p class="ts-home-price"><span>от</span><b>{{ h.price }}</b></p>
                                <h3 class="ts-home-name">{{ h.name }}</h3>
                                <p class="ts-home-note">{{ h.note }}</p>
                                <ul class="ts-home-floors">
                                    <li v-for="f in h.floors" :key="f"><b>{{ f.split(' — ')[0] }}</b>{{ f.split(' — ')[1] }}</li>
                                </ul>
                                <router-link to="/request" class="ts-btn" :class="i === 1 ? 'ts-btn-orange' : 'ts-btn-outline'">Заявка на дом</router-link>
                            </div>
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
                            <li><b>Остановка — в 10 метрах</b> — до центра города 20 минут без пробок</li>
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
                        <div class="ts-other-card ts-other-card-lg" v-for="post in posts" :key="post.id">
                            <img v-if="post.image" :src="post.image" :alt="post.title" />
                            <div>
                                <h3>{{ post.title }}</h3>
                                <p v-if="post.address">{{ post.address }}</p>
                                <p v-if="post.content" class="ts-post-content">{{ post.content }}</p>
                                <span v-if="post.year" class="ts-other-year">{{ post.year }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
                    <p class="ts-footer-legal">Застройщик: ООО «Специализированный застройщик СК „Рост-Строй“» · ИНН 5903124969 · ОГРН 1165958080199<br>Информация на сайте носит справочный характер и не является публичной офертой · © АВД ГРУПП</p>
                </div>
            </footer>
        </div>
    `,
    data() {
        return {
            homes: [
                {
                    tag: '2 этажа · кирпич · дом сдан',
                    price: '9 960 000 ₽',
                    name: 'Таунхаус 99,6 м²',
                    note: 'Компактный семейный дом с участком',
                    floors: [
                        '1 этаж — прихожая, кухня-гостиная, гостевой санузел, котельная, тёплые полы',
                        '2 этаж — спальни с панорамными окнами, второй санузел',
                        'Подполье 54 м² — кладовая и прачечная',
                        'Участок-лужайка до 40 м²'
                    ]
                },
                {
                    tag: '2 этажа · кирпич · больше света',
                    price: '12 830 000 ₽',
                    name: 'Таунхаус 133,6 м²',
                    note: 'Просторный дом с максимальным панорамным светом',
                    floors: [
                        '1 этаж — просторная кухня-гостиная, гостевой санузел, котельная, тёплые полы',
                        '2 этаж — спальни, второй санузел, дополнительные окна в санузле и на лестнице',
                        'Подполье до 72 м² — кладовая, прачечная, мастерская',
                        'Участок-лужайка до 70 м²'
                    ]
                }
            ],
            posts: []
        };
    },
    async created() {
        try {
            this.posts = await API.request('/post/all');
        } catch (e) {
            console.error('Failed to load posts:', e);
        }
    }
};