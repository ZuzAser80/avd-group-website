const About = {
    template: `
        <div class="ts">
            <app-header></app-header>

            <!-- ГЕРОЙ -->
            <section class="ts-hero ts-hero-small">
                <div class="ts-hero-bg"></div>
                <div class="ts-hero-inner">
                    <p class="ts-hero-badge">О компании</p>
                    <h1 class="ts-hero-h1">Малоэтажный девелопер АВД ГРУПП</h1>
                    <p class="ts-hero-sub">Строим кирпичные таунхаусы в Перми: сами проектируем, сами строим, сами отвечаем за результат.</p>
                </div>
            </section>

            <!-- РАССКАЗ -->
            <section class="ts-section">
                <div class="ts-container">
                    <p class="ts-label">Кто мы</p>
                    <h2 class="ts-h2">Компания, за которой <span>дело и опыт</span></h2>
                    <div class="ts-about-text">
                        <p>АВД ГРУПП — малоэтажный застройщик из Перми. Мы специализируемся на кирпичных домах блокированной застройки и выпускаем их в свет «под ключ»: с благоустроенной закрытой территорией, детской площадкой и готовой инфраструктурой.</p>
                        <p>Всю строительную историю мы прошли в регионе: от первых малоэтажных объектов до сданного комплекса на ул. Вольская, 29. Ценим репутацию — объекты вводим в срок, цены держим честными, а каждую сделку сопровождаем лично: от заявки до вручения ключей.</p>
                    </div>
                    <div class="ts-about-stats">
                        <div class="ts-about-stat"><b>5 домов</b><span>комплекс на Вольской, 29</span></div>
                        <div class="ts-about-stat"><b>100%</b><span>введённых в срок объектов</span></div>
                        <div class="ts-about-stat"><b>20 минут</b><span>от дома до центра города</span></div>
                        <div class="ts-about-stat"><b>1 день</b><span>на ответ по заявке</span></div>
                    </div>
                </div>
            </section>

            <!-- ПРИНЦИПЫ -->
            <section class="ts-section ts-white-sec">
                <div class="ts-container">
                    <p class="ts-label ts-label-center">Как мы работаем</p>
                    <h2 class="ts-h2 ts-h2-center">Простые принципы</h2>
                    <div class="ts-concept-grid">
                        <div class="ts-concept-card">
                            <div class="ts-concept-ico">🧱</div>
                            <h3>Капитально</h3>
                            <p>Полнотелый кирпич и продуманные инженерные системы. Дом строим так, чтобы жить в нём было спокойно десятилетиями.</p>
                        </div>
                        <div class="ts-concept-card">
                            <div class="ts-concept-ico">🤝</div>
                            <h3>Честно</h3>
                            <p>Реальная цена дома и прозрачный состав покупки. Без скрытых платежей и «сюрпризов» на этапе сделки.</p>
                        </div>
                        <div class="ts-concept-card">
                            <div class="ts-concept-ico">🗓️</div>
                            <h3>В срок</h3>
                            <p>Все объекты комплекса сданы. Выбирая нас, вы переезжаете в готовое жильё, а не ждёте обещанного «через пару лет».</p>
                        </div>
                        <div class="ts-concept-card">
                            <div class="ts-concept-ico">🚗</div>
                            <h3>Рядом</h3>
                            <p>Офис продаж — в центре Перми, объект — в 20 минутах. Просмотр можно совместить с поездкой в офис.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ОФИС -->
            <section class="ts-section">
                <div class="ts-container ts-contacts-simple">
                    <p class="ts-label">Офис продаж</p>
                    <h2 class="ts-h2">Приходите — покажем <span>дома и документы</span></h2>
                    <div class="ts-contact-cards">
                        <div class="ts-contact-card">
                            <div class="ts-contact-ico">📍</div>
                            <b>Адрес </b>
                            <span>614000, Пермский край, г. Пермь, ул. Окулова, д. 27 оф. 103</span>
                        </div>
                        <div class="ts-contact-card">
                            <div class="ts-contact-ico">📞</div>
                            <b>Телефон </b>
                            <span>8 (908) 25-85-888</span>
                        </div>
                        <div class="ts-contact-card">
                            <div class="ts-contact-ico">✉️</div>
                            <b>E-mail </b>
                            <span>avd_grupp@mail.ru</span>
                        </div>
                    </div>
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
                        <router-link to="/objects" class="ts-btn ts-btn-orange">Смотреть объекты</router-link>
                    </div>
                </div>
                <div class="ts-container">
                    <p class="ts-footer-legal">АВД ГРУПП — застройщик малоэтажного жилья в Перми<br>Информация на сайте носит справочный характер и не является публичной офертой · © АВД ГРУПП</p>
                </div>
            </footer>
        </div>
    `
};