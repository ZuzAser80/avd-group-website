const Frontpage = {
    template: `
        <div class="ts">
            <app-header></app-header>

            <!-- ГЕРОЙ -->
            <section class="ts-hero">
                <div class="ts-hero-bg"></div>
                <div class="ts-hero-inner">
                    <p class="ts-hero-badge">АВД ГРУПП · жильё в Перми</p>
                    <h1 class="ts-hero-h1">Свой кирпичный дом с участком — не мечта, а план</h1>
                    <p class="ts-hero-sub">Устали от соседей за стеной и тесных квартир? Готовые таунхаусы в Перми — это зелёная лужайка, панорамный свет и тишина, при этом 20 минут до центра города. Приезжайте, походите по дому и решайте сами.</p>
                    <div class="ts-hero-actions">
                        <router-link to="/request" class="ts-btn ts-btn-orange">Записаться на просмотр</router-link>
                        <router-link to="/objects" class="ts-btn ts-btn-ghost">Смотреть объекты</router-link>
                    </div>
                    <div class="ts-hero-meta">
                        <div class="ts-hero-meta-item"><b>Дом сдан</b><span>Переезд уже сейчас</span></div>
                        <div class="ts-hero-meta-item"><b>20 мин</b><span>До центра Перми</span></div>
                        <div class="ts-hero-meta-item"><b>10 м</b><span>До остановки</span></div>
                        <div class="ts-hero-meta-item">
                            <b>{{ counts.selling }} {{ plural(counts.selling, ['дом', 'дома', 'домов']) }}</b>
                            <span>в продаже</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- КОНЦЕПЦИЯ -->
            <section class="ts-section">
                <div class="ts-container">
                    <p class="ts-label">Почему дом</p>
                    <h2 class="ts-h2">Больше, чем квартира. <span>Проще, чем дом.</span></h2>
                    <p class="ts-lead">Мы строим жильё в Перми так, чтобы в нём хотелось жить годами. Без обещаний «сдадим завтра» — дома уже готовы, и вы можете приехать и походить по ним сегодня. Осталось только выбрать свой.</p>
                    <div class="ts-concept-grid">
                        <div class="ts-concept-card">
                            <div class="ts-concept-ico">🏡</div>
                            <h3>Собственный дом</h3>
                            <p>Свой вход, свой участок, своё отопление. Никто не слышит вашу музыку, а вы не слышите соседей.</p>
                        </div>
                        <div class="ts-concept-card">
                            <div class="ts-concept-ico">🌿</div>
                            <h3>Тишина и воздух</h3>
                            <p>Небольшой квартал, зелень, детская площадка во дворе. Здесь спокойно и детям, и вам.</p>
                        </div>
                        <div class="ts-concept-card">
                            <div class="ts-concept-ico">🔒</div>
                            <h3>Закрытая территория</h3>
                            <p>Охрана и закрытый периметр: посторонних нет, дети гуляют спокойно, машина стоит у дома.</p>
                        </div>
                        <div class="ts-concept-card">
                            <div class="ts-concept-ico">🧱</div>
                            <h3>Капитально</h3>
                            <p>Полнотелый кирпич, окна REHAU, тёплые полы и автономный котёл — это не сезонная дача.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ЧИПЫ -->
            <section class="ts-chips-sec">
                <div class="ts-container">
                    <p class="ts-label ts-label-center">Что входит в каждый дом</p>
                    <h2 class="ts-h2 ts-h2-center">Всё уже продумано за вас</h2>
                    <div class="ts-chips">
                        <span class="ts-chip" v-for="c in chips" :key="c[0]"><b>{{ c[0] }}</b>{{ c[1] }}</span>
                    </div>
                </div>
            </section>

            <!-- НАШИ ОБЪЕКТЫ -->
            <section class="ts-section">
                <div class="ts-container">
                    <p class="ts-label">Наши объекты</p>
                    <h2 class="ts-h2">Посмотрите, что мы <span>уже построили</span></h2>
                    <div class="ts-featured-object" v-if="featured">
                        <div class="ts-featured-media">
                            <img :src="featured.image || '/static/images/object/volskaya-1.jpg'" :alt="featured.name" />
                            <span class="ts-featured-status">{{ statusBadgeLabel(featured.status) }}</span>
                        </div>
                        <div class="ts-featured-body">
                            <h3 class="ts-featured-title">{{ featured.name }}</h3>
                            <p class="ts-featured-addr">{{ featured.address || 'Кировский район, Пермь' }}</p>
                            <div class="ts-featured-specs">
                                <div class="ts-fspec"><b>{{ objects.length }}</b><span>всего объектов</span></div>
                                <div class="ts-fspec"><b>{{ counts.selling }}</b><span>в продаже</span></div>
                                <div class="ts-fspec"><b>{{ counts.sold }}</b><span>продано</span></div>
                            </div>
                            <p class="ts-featured-price"><b>{{ featured.price }}</b><span>{{ featured.note }}</span></p>
                            <router-link to="/objects" class="ts-btn ts-btn-orange">Подробнее об объекте</router-link>
                        </div>
                    </div>
                    <p v-else class="status-empty">Сейчас нет объектов в продаже. Загляните в раздел <router-link to="/objects">«Объекты»</router-link> — там есть и планирующиеся, и проданные.</p>

                    <div v-if="otherSelling.length" class="ts-other-objects">
                        <div class="ts-other-card" v-for="post in otherSelling" :key="post.key">
                            <img v-if="post.image" :src="post.image" :alt="post.name" />
                            <div>
                                <h3>{{ post.name }}</h3>
                                <p v-if="post.address">{{ post.address }}</p>
                                <span v-if="post.year" class="ts-other-year">{{ post.year }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ПОКУПКА -->
            <section class="ts-section ts-buy-sec">
                <div class="ts-container">
                    <p class="ts-label ts-label-center">Как купить</p>
                    <h2 class="ts-h2 ts-h2-center">Удобные способы оплаты</h2>
                    <div class="ts-mortgages">
                        <div class="ts-mortgage" v-for="m in mortgages" :key="m[0]">
                            <div class="ts-mortgage-ico">{{ m[2] }}</div>
                            <h3>{{ m[0] }}</h3>
                            <p>{{ m[1] }}</p>
                        </div>
                    </div>
                    <p class="ts-buy-cta">
                        <router-link to="/request" class="ts-btn ts-btn-orange">Оставить заявку на объект</router-link>
                    </p>
                    <p class="ts-buy-note">Поможем подобрать самую выгодную программу и сопроводим сделку на всех этапах.</p>
                </div>
            </section>

            <!-- ФУТЕР -->
            <footer class="ts-footer">
                <div class="ts-container ts-footer-grid">
                    <div>
                        <p class="ts-footer-title">Офис продаж</p>
                        <p class="ts-footer-item">614000, Пермский край, г. Пермь, ул. Окулова, д. 27 оф. 103</p>
                        <p class="ts-footer-item">пн–пт: 9:00–18:00 · сб: 10:00–14:00</p>
                    </div>
                    <div>
                        <p class="ts-footer-title">Контакты</p>
                        <p class="ts-footer-item">8 (908) 25-85-888</p>
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
            chips: [
                ['Кирпич', 'стены и фасады'],
                ['Панорамные окна', 'REHAU'],
                ['Тёплые полы', '1 этаж'],
                ['Отдельный санузел', 'на каждом этаже'],
                ['Газовый котёл', 'своя котельная'],
                ['Центральный водопровод', 'и бойлер'],
                ['Участок 40–70 м²', 'закрытая лужайка'],
                ['Закрытая территория', 'охрана'],
                ['Детская площадка', 'для детей'],
                ['Лесопарк рядом', 'лыжная база'],
                ['Остановка в 10 м', 'в двух шагах от дома'],
                ['До центра', '20 минут без пробок']
            ],
            mortgages: [
                ['Семейная ипотека', 'Льготная ставка для семей с детьми', '👨‍👩‍👧'],
                ['IT-ипотека', 'Специальная программа для IT-специалистов', '💻'],
                ['Жилищные сертификаты', 'Принимаем все виды сертификатов', '📜'],
                ['Взаимозачёт', 'Вторичное жильё в счёт нового дома', '🔄']
            ],
            objects: []
        };
    },
    computed: {
        counts() {
            return countByStatus(this.objects);
        },
        sellingObjects() {
            return this.objects.filter(o => o.status === 'selling');
        },
        featured() {
            return this.sellingObjects[0] || null;
        },
        otherSelling() {
            return this.sellingObjects.slice(1);
        },
    },
    async created() {
        try {
            const raw = await API.request('/post/all');
            this.objects = raw
                .map(p => ({
                    key: p.id,
                    status: normalizeObjectStatus(p),
                    position: p.position || 0,
                    image: p.image,
                    name: p.title,
                    note: p.content,
                    address: p.address,
                    year: p.year,
                    price: p.price,
                }))
                .sort((a, b) => a.position - b.position);
        } catch (e) {
            console.error('Failed to load posts:', e);
        }
    }
};
