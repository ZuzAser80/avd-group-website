const Frontpage = {
    template: `
        <div class="ts">
            <!-- ШАПКА -->
            <header class="ts-top">
                <div class="ts-top-inner">
                    <router-link to="/" class="ts-logo" @click="toTop">
                        <span class="ts-logo-mark">АВД</span>
                        <span class="ts-logo-sub">ГРУПП · таунхаусы</span>
                    </router-link>
                    <nav class="ts-nav">
                        <a v-for="m in menu" :key="m[1]" href="#" @click.prevent="goto(m[1])">{{ m[0] }}</a>
                    </nav>
                    <div class="ts-top-actions">
                        <a href="#" @click.prevent="goto('sec-form')" class="ts-cta-top">Записаться на просмотр</a>
                        <p class="ts-phone">8 (908) 25-85-888</p>
                        <button class="ts-burger" @click="menuOpen = !menuOpen" :aria-label="menuOpen ? 'Закрыть меню' : 'Открыть меню'">
                            <span></span><span></span><span></span>
                        </button>
                    </div>
                </div>
            </header>

            <!-- МЕНЮ НА ВЕСЬ ЭКРАН -->
            <div class="ts-menu" :class="{ 'ts-menu-open': menuOpen }">
                <div class="ts-menu-inner">
                    <a v-for="m in menu" :key="m[1]" href="#" class="ts-menu-link" @click.prevent="goto(m[1])">{{ m[0] }}</a>
                    <div class="ts-menu-foot">
                        <a href="#" @click.prevent="goto('sec-form')" class="ts-cta-dark">Заказать звонок</a>
                        <p class="ts-phone ts-phone-lg">+7 902 80 32 835</p>
                        <a href="https://wa.me/79028032835" target="_blank" class="ts-menu-tg">WhatsApp</a>
                    </div>
                </div>
            </div>

            <!-- ГЕРОЙ -->
            <section class="ts-hero" id="sec-top">
                <div class="ts-hero-bg"></div>
                <div class="ts-hero-inner">
                    <p class="ts-hero-badge">Таунхаусы в Перми · дом сдан</p>
                    <h1 class="ts-hero-h1">Свой кирпичный дом<br>с участком — 20 минут от центра</h1>
                    <p class="ts-hero-sub">Комплекс таунхаусов на ул. Вольская, 29, Кировский район. Два этажа, панорамные окна REHAU, автономный газовый котёл и закрытая охраняемая территория. Готов к заселению — остаётся выбрать дом.</p>
                    <div class="ts-hero-actions">
                        <a href="#" @click.prevent="goto('sec-form')" class="ts-btn ts-btn-orange">Записаться на просмотр</a>
                        <a href="#" @click.prevent="goto('sec-homes')" class="ts-btn ts-btn-ghost">Выбрать дом</a>
                    </div>
                    <div class="ts-hero-meta">
                        <div class="ts-hero-meta-item"><b>20 мин</b><span>До центра Перми</span></div>
                        <div class="ts-hero-meta-item"><b>10 м</b><span>До остановки</span></div>
                        <div class="ts-hero-meta-item"><b>99,6–133,6 м²</b><span>Площадь домов</span></div>
                        <div class="ts-hero-meta-item"><b>Дом сдан</b><span>Переезд сразу</span></div>
                    </div>
                </div>
            </section>

            <!-- КОНЦЕПЦИЯ -->
            <section class="ts-section" id="sec-concept">
                <div class="ts-container">
                    <p class="ts-label">Концепция</p>
                    <h2 class="ts-h2">Больше, чем квартира. <span>Проще, чем дом.</span></h2>
                    <p class="ts-lead">Собственный кирпичный таунхаус с зелёной лужайкой, панорамным светом и своим отоплением — в тихом Кировском районе, но в 20 минутах от центра. Комплекс из пяти блокированных домов с закрытой охраняемой территорией: спокойно детям, комфортно взрослым, всё — по-настоящему капитально.</p>
                    <div class="ts-concept-grid">
                        <div class="ts-concept-card">
                            <div class="ts-concept-ico">🧱</div>
                            <h3>Капитальный кирпич</h3>
                            <p>Несущие стены и фасады — полнотелый кирпич. Это дом на десятилетия, а не сезонная дача.</p>
                        </div>
                        <div class="ts-concept-card">
                            <div class="ts-concept-ico">🔑</div>
                            <h3>Готовое жильё</h3>
                            <p>Комплекс введён в эксплуатацию. Предчистовая отделка, два санузла, тёплые полы — меблируйте и заезжайте.</p>
                        </div>
                        <div class="ts-concept-card">
                            <div class="ts-concept-ico">🌳</div>
                            <h3>Закрытая территория</h3>
                            <p>Охрана, детская площадка, ландшафтный дизайн и свой участок-лужайка у каждого дома.</p>
                        </div>
                        <div class="ts-concept-card">
                            <div class="ts-concept-ico">☀️</div>
                            <h3>Свободные планировки</h3>
                            <p>Продуманная эргономика: панорамные окна во всех жилых комнатах, два санузла, своя котельная.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ПРЕИМУЩЕСТВА -->
            <section class="ts-chips-sec">
                <div class="ts-container">
                    <p class="ts-label ts-label-center">Почему этот дом</p>
                    <h2 class="ts-h2 ts-h2-center">Всё уже продумано за вас</h2>
                    <div class="ts-chips">
                        <span class="ts-chip" v-for="c in chips" :key="c[0]"><b>{{ c[0] }}</b>{{ c[1] }}</span>
                    </div>
                </div>
            </section>

            <!-- ДОМА / ПЛАНИРОВКИ -->
            <section class="ts-section" id="sec-homes">
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
                                <a href="#" @click.prevent="goto('sec-form')" class="ts-btn" :class="i === 1 ? 'ts-btn-orange' : 'ts-btn-outline'">Заявка на дом</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ФОТО -->
            <section class="ts-section ts-photo-sec" id="sec-photo">
                <div class="ts-container">
                    <p class="ts-label">Фотогалерея</p>
                    <h2 class="ts-h2">Посмотрите, как это <span>по-настоящему</span></h2>
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
            <section class="ts-section ts-white-sec">
                <div class="ts-container ts-finish">
                    <p class="ts-label">Отделка</p>
                    <h2 class="ts-h2">Предчистовая отделка — <span>white box</span></h2>
                    <p class="ts-lead ts-lead-narrow">Ровные оштукатуренные стены, подготовленные полы, смонтированные инженерные системы. Остаётся продумать интерьер — или заказать финишную отделку.</p>
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
            <section class="ts-section" id="sec-location">
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

            <!-- ПОКУПКА -->
            <section class="ts-section ts-buy-sec" id="sec-buy">
                <div class="ts-container">
                    <p class="ts-label ts-label-center">Как купить</p>
                    <h2 class="ts-h2 ts-h2-center">4 шага до собственного дома</h2>
                    <div class="ts-steps">
                        <div class="ts-step" v-for="(s, i) in steps" :key="s[0]">
                            <span class="ts-step-num">{{ i + 1 }}</span>
                            <h3>{{ s[0] }}</h3>
                            <p>{{ s[1] }}</p>
                        </div>
                    </div>
                    <div class="ts-mortgages">
                        <div class="ts-mortgage" v-for="m in mortgages" :key="m[0]">
                            <div class="ts-mortgage-ico">{{ m[2] }}</div>
                            <h3>{{ m[0] }}</h3>
                            <p>{{ m[1] }}</p>
                        </div>
                    </div>
                    <p class="ts-buy-note">Поможем подобрать самую выгодную программу и сопроводим сделку — без скрытых платежей.</p>
                </div>
            </section>

            <!-- ФОРМА -->
            <section class="ts-section ts-form-sec" id="sec-form">
                <div class="ts-container ts-form-wrap">
                    <p class="ts-label ts-label-center">Заявка</p>
                    <h2 class="ts-h2 ts-h2-center">Запишитесь на индивидуальный просмотр</h2>
                    <p class="ts-form-sub">Покажем дом лично, ответим на вопросы и рассчитаем ипотеку</p>
                    <form class="ts-form" @submit.prevent="submitForm">
                        <input type="text" v-model="form.name" placeholder="Ваше имя" required />
                        <input type="tel" v-model="form.phone" placeholder="Телефон" required />
                        <select v-model="form.home">
                            <option value="" disabled>Интересующий дом</option>
                            <option>Таунхаус 99,6 м² — 9 960 000 ₽</option>
                            <option>Таунхаус 133,6 м² — 12 830 000 ₽</option>
                            <option>Нужна консультация</option>
                        </select>
                        <button type="submit" class="ts-btn ts-btn-orange ts-btn-block">Отправить заявку</button>
                    </form>
                    <p class="ts-form-note">Нажимая «Отправить», вы соглашаетесь на обработку персональных данных. Перезвоним в течение рабочего дня.</p>
                </div>
            </section>

            <!-- КОНТАКТЫ / ФУТЕР -->
            <footer class="ts-footer" id="sec-contacts">
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
                            <a href="https://wa.me/79028032835" target="_blank">WhatsApp</a>
                            <a href="https://t.me/avd_grupp" target="_blank">Telegram</a>
                        </div>
                    </div>
                    <div class="ts-footer-cta">
                        <a href="#" @click.prevent="goto('sec-form')" class="ts-btn ts-btn-orange">Записаться на просмотр</a>
                    </div>
                </div>
                <div class="ts-container">
                    <p class="ts-footer-legal">Застройщик: ООО «Специализированный застройщик СК „Рост-Строй“» · ИНН 5903124969 · ОГРН 1165958080199<br>Информация на сайте носит справочный характер и не является публичной офертой · © АВД ГРУПП</p>
                </div>
            </footer>

            <!-- ПЛАВАЮЩИЕ КНОПКИ -->
            <a href="#" @click.prevent="goto('sec-form')" class="ts-fab ts-fab-call">Получить консультацию</a>
            <a href="https://wa.me/79028032835" target="_blank" class="ts-fab-phone">WhatsApp</a>
        </div>
    `,
    data() {
        return {
            menuOpen: false,
            menu: [
                ['Концепция', 'sec-concept'],
                ['Дома', 'sec-homes'],
                ['Фото', 'sec-photo'],
                ['Расположение', 'sec-location'],
                ['Покупка', 'sec-buy'],
                ['Контакты', 'sec-contacts']
            ],
            chips: [
                ['Кирпич', 'стены и фасады'],
                ['Панорамные окна', 'REHAU'],
                ['Тёплые полы', '1 этаж'],
                ['Два санузла', 'на каждом этаже'],
                ['Газовый котёл', 'своя котельная'],
                ['Центральный водопровод', 'и бойлер'],
                ['Подполье до 72 м²', 'кладовая и прачечная'],
                ['Участок 40–70 м²', 'закрытая лужайка'],
                ['Закрытая территория', 'охрана'],
                ['Детская площадка', 'для детей'],
                ['Лесопарк рядом', 'лыжная база'],
                ['Остановка в 10 м', 'до центра 20 минут']
            ],
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
            steps: [
                ['Заявка', 'Оставьте заявку — перезвоним в течение рабочего дня'],
                ['Просмотр', 'Приедем на объект, покажем дом и территорию'],
                ['Ипотека', 'Поможем с семейной и IT-ипотекой, сертификатами'],
                ['Сделка и переезд', 'Регистрация, ключи — можно заезжать']
            ],
            mortgages: [
                ['Семейная ипотека', 'Льготная ставка для семей с детьми', '👨‍👩‍👧'],
                ['IT-ипотека', 'Специальная программа для IT-специалистов', '💻'],
                ['Жилищные сертификаты', 'Принимаем все виды сертификатов', '📜'],
                ['Взаимозачёт', 'Обмен вторичного жилья на новый дом', '🔄']
            ],
            form: { name: '', phone: '', home: '' }
        };
    },
    methods: {
        toTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.menuOpen = false;
        },
        goto(id) {
            this.menuOpen = false;
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        },
        submitForm() {
            alert('Спасибо! Заявка принята. Мы свяжемся с вами в ближайшее время и подберём удобное время для просмотра.');
            this.form = { name: '', phone: '', home: '' };
        }
    }
};