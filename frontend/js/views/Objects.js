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
                    <p class="ts-hero-sub">{{ heroSummary }}</p>
                    <div class="ts-hero-actions">
                        <router-link to="/request" class="ts-btn ts-btn-orange">Записаться на просмотр</router-link>
                    </div>
                </div>
            </section>

            <!-- ОБЪЕКТЫ ПО ВКЛАДКАМ -->
            <section class="ts-section">
                <div class="ts-container">
                    <div class="ts-object-banner" v-if="featuredSelling">
                        <img :src="featuredSelling.image || '/static/images/object/volskaya-1.jpg'" :alt="featuredSelling.name" />
                        <div class="ts-object-banner-body">
                            <span class="ts-object-banner-badge">{{ statusBadgeLabel(featuredSelling.status) }}</span>
                            <h3 class="ts-object-banner-title">{{ featuredSelling.name }}</h3>
                            <p class="ts-object-banner-price" v-if="featuredSelling.price">{{ featuredSelling.price }}</p>
                        </div>
                    </div>
                    <p class="ts-label">Объекты</p>
                    <h2 class="ts-h2">{{ objectsHeading.total }} — <span>{{ objectsHeading.highlight }}</span></h2>
                    <div class="ts-avail-strip" v-if="statusChips.length">
                        <span class="ts-avail-chip" v-for="chip in statusChips" :key="chip.label"
                              :class="{ 'ts-avail-chip-hot': chip.hot }">
                            {{ chip.count }} {{ plural(chip.count, chip.forms) }} — {{ chip.label }}
                        </span>
                    </div>

                    <div class="status-tabs status-tabs-dark">
                        <button type="button" v-for="tab in statusTabs" :key="tab.key"
                                class="status-tab" :class="{ 'status-tab-active': activeStatus === tab.key }"
                                @click="activeStatus = tab.key">
                            {{ tab.label }}
                            <span class="status-tab-count">{{ tabCounts[tab.key] }}</span>
                        </button>
                    </div>

                    <div class="ts-homes" :class="{ 'ts-homes-single': activeItems.length < 2 }" v-if="activeItems.length">
                        <div v-for="(item, i) in activeItems" :key="item.key"
                             class="ts-home" :class="{ 'ts-home-featured': isFeatured(i) }">
                            <div class="ts-home-card">
                                <img v-if="item.image" class="ts-home-photo" :src="item.image" :alt="item.name" />
                                <span v-if="item.tag" class="ts-home-tag">{{ item.tag }}</span>
                                <p class="ts-home-price"><b>{{ item.price }}</b></p>
                                <h3 class="ts-home-name">{{ item.name }}</h3>
                                <p v-if="item.note" class="ts-home-note">{{ item.note }}</p>
                                <ul class="ts-home-floors">
                                    <li v-for="(f, j) in item.floors" :key="j"><b>{{ f[0] }}</b>{{ f[1] }}</li>
                                </ul>
                                <div class="ts-home-actions">
                                    <router-link v-if="item.status !== 'sold'" to="/request" class="ts-btn ts-btn-orange">Заявка на дом</router-link>
                                    <button type="button" class="ts-btn ts-btn-outline" @click="openItem(item)">Состав и фото</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p v-else class="status-empty">{{ statusEmptyText(activeStatus) }}</p>
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

            <!-- МОДАЛКА ОБЪЕКТА -->
            <div v-if="activeItem" class="ts-modal" @click.self="activeItem = null">
                <div class="ts-modal-box">
                    <button type="button" class="ts-modal-close" @click="activeItem = null">✕</button>
                    <p class="ts-modal-badge"
                       :class="{ 'ts-modal-sold': activeItem.status === 'sold', 'ts-modal-planned': activeItem.status === 'planned' }">
                        {{ statusBadgeLabel(activeItem.status) }}
                    </p>
                    <h3 class="ts-modal-title">{{ activeItem.name }}</h3>
                    <p v-if="activeItem.address" class="ts-modal-note">{{ activeItem.address }}</p>
                    <p v-if="activeItem.status !== 'sold' && activeItem.price" class="ts-modal-price">{{ activeItem.price }}</p>
                    <p v-if="activeItem.note" class="ts-modal-note">{{ activeItem.note }}</p>
                    <img v-if="activeItem.image" :src="activeItem.image" :alt="activeItem.name" class="ts-modal-img-lg" />
                    <div class="ts-modal-gallery">
                        <figure v-for="(ph, i) in activeItem.photos" :key="i">
                            <img :src="ph.src" :alt="ph.caption" />
                            <figcaption>{{ ph.caption }}</figcaption>
                        </figure>
                    </div>
                    <ul class="ts-home-floors ts-modal-floors">
                        <li v-for="(f, i) in activeItem.floors" :key="i"><b>{{ f[0] }}</b> — {{ f[1] }}</li>
                    </ul>
                    <router-link v-if="activeItem.status !== 'sold'" to="/request" class="ts-btn ts-btn-orange">Заявка на дом</router-link>
                    <p v-else class="ts-modal-cta-note">Этот дом уже продан. Оставьте заявку — расскажем о похожих вариантах.</p>
                </div>
            </div>

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
            items: [],
            activeItem: null,
            activeStatus: DEFAULT_OBJECT_STATUS,
            statusTabs: OBJECT_STATUS_TABS,
        };
    },
    computed: {
        tabCounts() {
            return countByStatus(this.items);
        },
        activeItems() {
            return this.items.filter(i => i.status === this.activeStatus);
        },
        sellingCount() {
            return this.tabCounts.selling;
        },
        featuredSelling() {
            return this.items.filter(i => i.status === 'selling')[0] || null;
        },
        heroSummary() {
            const total = this.items.length;
            if (!total) {
                return 'Объекты появятся здесь совсем скоро. Оставьте заявку, и мы сообщим о новых поступлениях.';
            }
            const selling = this.sellingCount;
            let clause;
            if (selling === 1) {
                clause = 'в продаже остался последний';
            } else if (selling > 1) {
                clause = 'в продаже ' + selling + ' ' + plural(selling, ['объект', 'объекта', 'объектов']);
            } else {
                clause = 'сейчас в продаже нет';
            }
            return 'Комплекс таунхаусов на ул. Вольская, 29 — сдан и заселён. Из ' + total + ' ' +
                plural(total, ['объекта', 'объектов', 'объектов']) + ' ' + clause +
                '. Состав и фотографии каждого объекта — ниже.';
        },
        objectsHeading() {
            const total = this.items.length;
            const selling = this.sellingCount;
            let highlight;
            if (!total) {
                highlight = 'объектов пока нет';
            } else if (selling === 1) {
                highlight = 'остался последний';
            } else if (selling > 1) {
                highlight = selling + ' ' + plural(selling, ['в продаже', 'в продаже', 'в продаже']);
            } else {
                highlight = 'всё распродано';
            }
            return { total: 'Всего ' + total + ' ' + plural(total, ['объект', 'объекта', 'объектов']), highlight };
        },
        statusChips() {
            const counts = this.tabCounts;
            const defs = [
                { key: 'planned', label: 'планируются', forms: ['дом', 'дома', 'домов'] },
                { key: 'selling', label: 'в продаже', forms: ['дом', 'дома', 'домов'] },
                { key: 'sold', label: 'проданы', forms: ['дом', 'дома', 'домов'] },
            ];
            return defs
                .filter(d => counts[d.key] > 0)
                .map(d => ({ count: counts[d.key], label: d.label, forms: d.forms, hot: d.key === 'selling' }));
        },
    },
    watch: {
        activeItem() {
            this.toggleScroll();
        }
    },
    async created() {
        try {
            const raw = await API.request('/post/all');
            this.items = raw
                .map(p => ({
                    key: p.id,
                    status: normalizeObjectStatus(p),
                    position: p.position || 0,
                    image: p.image,
                    tag: p.tag,
                    price: p.price,
                    name: p.title,
                    note: p.content,
                    address: p.address,
                    year: p.year,
                    floors: Array.isArray(p.floors) ? p.floors : [],
                    photos: Array.isArray(p.photos) ? p.photos : [],
                }))
                .sort((a, b) => a.position - b.position);
            this.activeStatus = firstPopulatedStatus(this.items);
        } catch (e) {
            console.error('Failed to load posts:', e);
        }
    },
    methods: {
        isFeatured(index) {
            return this.activeStatus === 'selling' && this.activeItems.length === 1 && index === 0;
        },
        openItem(item) {
            this.activeItem = item;
        },
        toggleScroll() {
            document.body.style.overflow = this.activeItem ? 'hidden' : '';
        }
    }
};
