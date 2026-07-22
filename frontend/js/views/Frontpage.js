const Frontpage = {
    template: `
        <div class="-1">
            <!-- ШАПКА -->
            <div class="header-2">
                <div class="container-3">
                    <router-link to="/" class="prototype-link">
                        <img src="/static/images/logo.png" alt="АВД ГРУПП" />
                    </router-link>
                    <div class="nav-center">
                        <p class="menu active"><span class="text-rgb-181-85-47">Главная</span></p>
                        <router-link to="/about" class="prototype-link">
                            <p class="menu"><span class="text-rgb-50-50-50">О нас</span></p>
                        </router-link>
                        <router-link to="/contacts" class="prototype-link">
                            <p class="menu"><span class="text-rgb-50-50-50">Контакты</span></p>
                        </router-link>
                        <router-link to="/projects" class="prototype-link">
                            <p class="menu"><span class="text-rgb-50-50-50">Объекты</span></p>
                        </router-link>
                    </div>
                    <div class="nav-auth">
                        <router-link to="/login" class="prototype-link">
                            <button class="btn-login">Личный кабинет</button>
                        </router-link>
                        <p class="text-9"><span class="text-rgb-207-120-85">+7 902 80 32 835</span></p>
                    </div>
                </div>
            </div>

            <!-- ГЕРОЙ-БЛОК -->
            <div class="hero-10">
                <img src="/static/images/cover.png" class="hero-bg" alt="Фон" />
                <div class="hero-content">
                    <p class="h1 animate-fade-in-up"><span class="text-white">МЫ ВЕРИМ, ЧТО ОТВЕТСТВЕННОЕ И КАЧЕСТВЕННОЕ ВЫПОЛНЕНИЕ РАБОТ СОЗДАЮТ ДОВЕРИЕ</span></p>
                    <p class="h3 animate-fade-in-up delay-2"><span class="text-rgb-207-120-85">Строим с 2013 года</span></p>
                    <router-link to="/about" class="prototype-link animate-fade-in-up delay-3">
                        <div class="button-primary-14">
                            <p class="button"><span class="text-white">Подробнее</span></p>
                            <span class="button-arrow">→</span>
                        </div>
                    </router-link>
                </div>
            </div>

            <!-- СЧЁТЧИКИ -->
            <div class="stats-section">
                <div class="stats-grid">
                    <div class="stat-item animate-fade-in-up">
                        <div class="stat-number">50+</div>
                        <div class="stat-label">Реализованных объектов</div>
                    </div>
                    <div class="stat-item animate-fade-in-up delay-1">
                        <div class="stat-number">10+</div>
                        <div class="stat-label">Лет на рынке</div>
                    </div>
                    <div class="stat-item animate-fade-in-up delay-2">
                        <div class="stat-number">100%</div>
                        <div class="stat-label">Сдача в срок</div>
                    </div>
                    <div class="stat-item animate-fade-in-up delay-3">
                        <div class="stat-number">2013</div>
                        <div class="stat-label">Год основания</div>
                    </div>
                </div>
            </div>

            <!-- БЛОК "О КОМПАНИИ" -->
            <div class="about-17">
                <div class="frame-1-18">
                    <div class="about-left animate-slide-left">
                        <p class="about-subtitle">О компании</p>
                        <p class="h2"><span class="text-rgb-181-85-47">АВД ГРУПП</span></p>
                        <div class="frame-2-21">
                            <p class="body"><span class="text-white">АВД ГРУПП – надёжный подрядчик в сфере строительства и реконструкции. Мы работаем с 2013 года, специализируемся на возведении жилых и коммерческих объектов. Наша команда гарантирует высокое качество, соблюдение сроков и полную прозрачность на всех этапах строительства. Мы ценим доверие клиентов и создаём объекты, которые служат десятилетиями.</span></p>
                        </div>
                    </div>
                    <img src="/static/images/house.png" class="about-img animate-slide-right" alt="О компании" />
                </div>
            </div>

            <!-- НАШИ УСЛУГИ -->
            <div class="services-section">
                <div class="section-header">
                    <h2>Наши услуги</h2>
                    <p>Полный комплекс строительных работ под ключ</p>
                </div>
                <div class="services-grid">
                    <div class="service-card animate-fade-in-up">
                        <div class="service-icon">🏗️</div>
                        <h3>Генподряд</h3>
                        <p>Полное управление проектом от фундамента до сдачи</p>
                    </div>
                    <div class="service-card animate-fade-in-up delay-1">
                        <div class="service-icon">🏠</div>
                        <h3>Жилое строительство</h3>
                        <p>Многоэтажные дома, коттеджи, таунхаусы</p>
                    </div>
                    <div class="service-card animate-fade-in-up delay-2">
                        <div class="service-icon">🏢</div>
                        <h3>Коммерческие объекты</h3>
                        <p>Бизнес-центры, торговые площади, офисы</p>
                    </div>
                    <div class="service-card animate-fade-in-up delay-3">
                        <div class="service-icon">🔧</div>
                        <h3>Реконструкция</h3>
                        <p>Модернизация и капитальный ремонт зданий</p>
                    </div>
                </div>
            </div>

            <!-- БЛОК ПРЕИМУЩЕСТВ -->
            <div class="advantages-23">
                <p class="h2"><span class="text-white">Почему выбирают</span> нас?</p>
                <div class="advantages-grid">
                    <div class="rectangle-1-25 animate-fade-in-up">
                        <p class="h3"><span class="text-rgb-181-85-47">1. Опыт с 2013 года</span></p>
                        <p class="body"><span class="text-rgb-50-50-50">Более 10 лет успешной работы на рынке строительства. Реализовано свыше 50 объектов разной сложности — от частных домов до многоквартирных жилых комплексов. Мы знаем строительство «изнутри» и предвидим любые риски.</span></p>
                    </div>
                    <div class="rectangle-2-26 animate-fade-in-up delay-1">
                        <p class="h3"><span class="text-rgb-181-85-47">2. Качество и ответственность</span></p>
                        <p class="body"><span class="text-rgb-50-50-50">Работаем строго по ГОСТ и СНиП, гарантируем полное соответствие проектной документации. Каждый этап строительства контролируется личным выездом руководителя на объект. Никаких скрытых дефектов — только прозрачная сдача.</span></p>
                    </div>
                    <div class="rectangle-3-29 animate-fade-in-up delay-2">
                        <p class="h3"><span class="text-rgb-181-85-47">3. Соблюдение сроков</span></p>
                        <p class="body"><span class="text-rgb-50-50-50">Все объекты сдаём точно в оговоренные сроки, без задержек. Используем эффективное планирование и собственную логистику материалов. При необходимости готовы работать в выходные и праздничные дни, чтобы уложиться в график.</span></p>
                    </div>
                </div>
            </div>

            <!-- ЭТАПЫ РАБОТЫ -->
            <div class="steps-section">
                <div class="section-header">
                    <h2>Как мы работаем</h2>
                    <p>4 простых шага от задумки до готового объекта</p>
                </div>
                <div class="steps-grid">
                    <div class="step-card animate-fade-in-up">
                        <div class="step-number">1</div>
                        <h3>Консультация</h3>
                        <p>Бесплатный выезд на объект и расчёт сметы</p>
                    </div>
                    <div class="step-card animate-fade-in-up delay-1">
                        <div class="step-number">2</div>
                        <h3>Проектирование</h3>
                        <p>Разработка проектной документации</p>
                    </div>
                    <div class="step-card animate-fade-in-up delay-2">
                        <div class="step-number">3</div>
                        <h3>Строительство</h3>
                        <p>Возведение объекта с контролем качества</p>
                    </div>
                    <div class="step-card animate-fade-in-up delay-3">
                        <div class="step-number">4</div>
                        <h3>Сдача</h3>
                        <p>Приёмка объекта и передача заказчику</p>
                    </div>
                </div>
            </div>

            <!-- ПАРТНЁРЫ -->
            <div class="partners-section">
                <h3>Нам доверяют</h3>
                <div class="partners-grid">
                    <span class="partner-logo" style="font-family:Montserrat;font-weight:800;font-size:18px;color:#999;">ООО «АЯК-Строй»</span>
                    <span class="partner-logo" style="font-family:Montserrat;font-weight:800;font-size:18px;color:#999;">ОАО «ПЗСП»</span>
                    <span class="partner-logo" style="font-family:Montserrat;font-weight:800;font-size:18px;color:#999;">ООО «Альфа-Строй»</span>
                    <span class="partner-logo" style="font-family:Montserrat;font-weight:800;font-size:18px;color:#999;">ООО «Талант»</span>
                    <span class="partner-logo" style="font-family:Montserrat;font-weight:800;font-size:18px;color:#999;">ООО «РЕКОН-Строй»</span>
                </div>
            </div>

            <!-- ФУТЕР -->
            <div class="info-34">
                <div class="info-wrap">
                    <div class="info-text">
                        <p class="h3"><span class="text-white">ООО "СЗ СК 'Рост-Строй'"</span></p>
                        <p class="body"><span class="text-white">г. Пермь, ул. Ленина, 9, оф. 415<br>тел. 8(908) 25-85-888<br>e-mail: avd_groupp@mail.ru</span></p>
                    </div>
                    <img src="/static/images/monochrome_logo.png" class="footer-logo" alt="Логотип" />
                </div>
            </div>
        </div>
    `
};