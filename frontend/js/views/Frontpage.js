const Frontpage = {
    template: `
        <div class="page-main">
            <!-- ШАПКА -->
            <app-header></app-header>

            <!-- ГЕРОЙ-БЛОК -->
            <div class="hero-10 hero-developer">
                <div class="hero-bg"></div>
                <div class="hero-sketch" aria-hidden="true">
                    <svg viewBox="0 0 1440 320" preserveAspectRatio="xMidYMax slice">
                        <path fill="rgba(255,255,255,0.06)" d="M-40 320V120h120l100-80h160l100 80h160l100-80h160l100 80h160l100-80h160l80 40 0 160z"/>
                        <path fill="rgba(255,255,255,0.05)" d="M-40 320V170h140l90-70h180l90 70h170l90-70h180l90 70h170l90-70h180l80 30v150z"/>
                        <rect x="0" y="320" width="1440" height="40" fill="rgba(255,255,255,0.07)"/>
                    </svg>
                </div>
                <div class="hero-content">
                    <p class="hero-badge animate-fade-in-up">Застройщик малоэтажного жилья · Пермь</p>
                    <p class="h1 animate-fade-in-up delay-1"><span class="text-white">Готовые таунхаусы от застройщика</span></p>
                    <p class="hero-sub animate-fade-in-up delay-2">Кирпичный дом 2 этажа с участком и закрытой охраняемой территорией. 20 минут от центра Перми. Ипотека, жилищные сертификаты и взаимозачёт — без посредников.</p>
                    <div class="hero-actions animate-fade-in-up delay-3">
                        <router-link to="/project/volskaya" class="prototype-link">
                            <div class="button-primary-14">
                                <p class="button"><span class="text-white">Смотреть объект</span></p>
                                <span class="button-arrow">→</span>
                            </div>
                        </router-link>
                        <router-link to="/about" class="prototype-link">
                            <div class="button-ghost">
                                <p class="button"><span class="text-white">О компании</span></p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- СЧЁТЧИКИ -->
            <div class="stats-section">
                <div class="stats-grid">
                    <div class="stat-item animate-fade-in-up">
                        <div class="stat-number">2016</div>
                        <div class="stat-label">Год основания застройщика</div>
                    </div>
                    <div class="stat-item animate-fade-in-up delay-1">
                        <div class="stat-number">5</div>
                        <div class="stat-label">Таунхаусов в комплексе</div>
                    </div>
                    <div class="stat-item animate-fade-in-up delay-2">
                        <div class="stat-number">2</div>
                        <div class="stat-label">Формата — 99,6 и 133,6 м²</div>
                    </div>
                    <div class="stat-item animate-fade-in-up delay-3">
                        <div class="stat-number">100%</div>
                        <div class="stat-label">Готовое жильё — переезд сразу</div>
                    </div>
                </div>
            </div>

            <!-- ФЛАГМАНСКИЙ ОБЪЕКТ -->
            <div class="featured-object">
                <div class="featured-object-inner">
                    <div class="featured-left animate-slide-left">
                        <p class="about-subtitle">Флагманский объект</p>
                        <p class="h2"><span class="text-rgb-181-85-47">Комплекс таунхаусов на ул. Вольская, 29</span></p>
                        <p class="featured-address">Кировский район, Пермь · дом сдан</p>
                        <div class="featured-specs">
                            <div class="spec-item"><b>5</b><span>блок-секций</span></div>
                            <div class="spec-item"><b>133,6 м²</b><span>максимальная площадь</span></div>
                            <div class="spec-item"><b>2 этажа</b><span>+ подполье до 72 м²</span></div>
                            <div class="spec-item"><b>Кирпич</b><span>стены и фасады</span></div>
                        </div>
                        <p class="featured-text">Полноценный кирпичный таунхаус с собственным участком, панорамными окнами REHAU, автономным газовым котлом и закрытой охраняемой территорией с детской площадкой. В 20 минутах от центра города, рядом лесопарковая зона.</p>
                        <router-link to="/project/volskaya" class="prototype-link">
                            <div class="button-primary-14">
                                <p class="button"><span class="text-white">Подробно об объекте</span></p>
                                <span class="button-arrow">→</span>
                            </div>
                        </router-link>
                    </div>
                    <div class="featured-right animate-slide-right">
                        <div class="house-illu">
                            <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                                <defs>
                                    <linearGradient id="houseGrad" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0" stop-color="#B5552F"/>
                                        <stop offset="1" stop-color="#CF7855"/>
                                    </linearGradient>
                                    <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0" stop-color="#323232"/>
                                        <stop offset="1" stop-color="#1a1a1a"/>
                                    </linearGradient>
                                </defs>
                                <rect x="20" y="330" width="440" height="20" rx="6" fill="rgba(50,50,50,0.25)"/>
                                <g>
                                    <rect x="80" y="120" width="130" height="115" fill="url(#houseGrad)" rx="4"/>
                                    <rect x="270" y="120" width="130" height="115" fill="url(#houseGrad)" rx="4"/>
                                    <polygon points="70,120 145,55 220,120" fill="url(#roofGrad)"/>
                                    <polygon points="260,120 335,55 410,120" fill="url(#roofGrad)"/>
                                    <polygon points="55,75 145,25 235,75" fill="url(#roofGrad)"/>
                                </g>
                                <g fill="rgba(255,255,255,0.9)">
                                    <rect x="95" y="145" width="36" height="30" rx="3"/>
                                    <rect x="155" y="145" width="36" height="30" rx="3"/>
                                    <rect x="100" y="195" width="24" height="40" rx="2"/>
                                    <rect x="285" y="145" width="36" height="30" rx="3"/>
                                    <rect x="345" y="145" width="36" height="30" rx="3"/>
                                    <rect x="290" y="195" width="24" height="40" rx="2"/>
                                    <rect x="160" y="60" width="40" height="28" rx="3"/>
                                    <rect x="350" y="60" width="40" height="28" rx="3"/>
                                </g>
                                <g fill="rgba(50,50,50,0.7)">
                                    <rect x="232" y="130" width="16" height="105" rx="2"/>
                                </g>
                                <text x="145" y="80" fill="#CF7855" font-size="22" font-family="Montserrat, sans-serif" font-weight="800" text-anchor="middle">5</text>
                                <text x="335" y="80" fill="#CF7855" font-size="22" font-family="Montserrat, sans-serif" font-weight="800" text-anchor="middle">5</text>
                            </svg>
                        </div>
                        <div class="house-caption">Комплекс из 5 блокированных домов · два формата планировок</div>
                    </div>
                </div>
            </div>

            <!-- О КОМПАНИИ -->
            <div class="about-17">
                <div class="frame-1-18">
                    <div class="about-left animate-slide-left">
                        <p class="about-subtitle">О компании</p>
                        <p class="h2"><span class="text-rgb-181-85-47">АВД ГРУПП</span></p>
                        <div class="frame-2-21">
                            <p class="body"><span class="text-white">АВД ГРУПП — девелопер малоэтажного жилья в Перми. Мы строим и продаём собственные объекты: комплексы комфортных таунхаусов из кирпича с закрытыми территориями. Застройщиком выступает ООО «Специализированный застройщик СК „Рост-Строй“» — работаем с 2016 года, гарантируем качество, сроки и прозрачные условия сделки.</span></p>
                        </div>
                    </div>
                    <div class="about-right animate-slide-right">
                        <div class="about-stat-card">
                            <p class="stat-num">10 лет</p>
                            <p class="stat-txt">развиваем малоэтажное строительство</p>
                        </div>
                        <div class="about-stat-card">
                            <p class="stat-num">Собственный</p>
                            <p class="stat-txt">проект готовых таунхаусов в Перми</p>
                        </div>
                        <div class="about-stat-card">
                            <p class="stat-num">Прямые</p>
                            <p class="stat-txt">продажи от застройщика, без посредников</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- НАПРАВЛЕНИЯ -->
            <div class="services-section">
                <div class="section-header">
                    <h2>Направления работы</h2>
                    <p>От девелопмента до готового жилья</p>
                </div>
                <div class="services-grid">
                    <div class="service-card animate-fade-in-up">
                        <div class="service-icon">🏘️</div>
                        <h3>Таунхаусы</h3>
                        <p>Блокированные кирпичные дома 2 этажа с собственным участком</p>
                    </div>
                    <div class="service-card animate-fade-in-up delay-1">
                        <div class="service-icon">🔑</div>
                        <h3>Готовое жильё</h3>
                        <p>Дом сдан — можно заезжать сразу после сделки</p>
                    </div>
                    <div class="service-card animate-fade-in-up delay-2">
                        <div class="service-icon">📋</div>
                        <h3>Ипотека и сертификаты</h3>
                        <p>Семейная и IT-ипотека, жилищные сертификаты, взаимозачёт</p>
                    </div>
                    <div class="service-card animate-fade-in-up delay-3">
                        <div class="service-icon">🏗️</div>
                        <h3>Девелопмент площадок</h3>
                        <p>Подготовка и застройка новых участков под малоэтажные комплексы</p>
                    </div>
                </div>
            </div>

            <!-- ПРЕИМУЩЕСТВА -->
            <div class="advantages-23">
                <p class="h2"><span class="text-white">Почему выбирают</span> АВД ГРУПП</p>
                <div class="advantages-grid">
                    <div class="rectangle-1-25 animate-fade-in-up">
                        <p class="h3"><span class="text-rgb-181-85-47">Полноценный кирпичный дом</span></p>
                        <p class="body"><span class="text-rgb-50-50-50">Несущие стены и фасады из кирпича, панорамные стеклопакеты REHAU. Это капитальное жильё, которое прослужит десятилетиями — а не каркасная сезонная дача.</span></p>
                    </div>
                    <div class="rectangle-2-26 animate-fade-in-up delay-1">
                        <p class="h3"><span class="text-rgb-181-85-47">Готовое жильё</span></p>
                        <p class="body"><span class="text-rgb-50-50-50">Комплекс введён в эксплуатацию. Предчистовая отделка, два санузла, тёплые полы на первом этаже — остаётся только меблировать и заехать.</span></p>
                    </div>
                    <div class="rectangle-3-29 animate-fade-in-up delay-2">
                        <p class="h3"><span class="text-rgb-181-85-47">Закрытая территория</span></p>
                        <p class="body"><span class="text-rgb-50-50-50">Охраняемая территория комплекса, ландшафтный дизайн, детская площадка и свой участок-лужайка у каждого дома. Безопасно для семьи и детей.</span></p>
                    </div>
                </div>
            </div>

            <!-- ЭТАПЫ ПОКУПКИ -->
            <div class="steps-section">
                <div class="section-header">
                    <h2>Как проходит покупка</h2>
                    <p>4 простых шага от заявки до переезда</p>
                </div>
                <div class="steps-grid">
                    <div class="step-card animate-fade-in-up">
                        <div class="step-number">1</div>
                        <h3>Заявка</h3>
                        <p>Оставьте заявку на сайте или позвоните нам</p>
                    </div>
                    <div class="step-card animate-fade-in-up delay-1">
                        <div class="step-number">2</div>
                        <h3>Подбор дома</h3>
                        <p>Выберите формат: 99,6 или 133,6 м²</p>
                    </div>
                    <div class="step-card animate-fade-in-up delay-2">
                        <div class="step-number">3</div>
                        <h3>Ипотека</h3>
                        <p>Поможем с программой, сертификатами и взаимозачётом</p>
                    </div>
                    <div class="step-card animate-fade-in-up delay-3">
                        <div class="step-number">4</div>
                        <h3>Сделка и переезд</h3>
                        <p>Регистрация, ключи — и можно заезжать</p>
                    </div>
                </div>
            </div>

            <!-- ФИНАНСИРОВАНИЕ -->
            <div class="finance-section">
                <div class="section-header">
                    <h2>Доступное финансирование</h2>
                    <p>Подберём удобный вариант покупки</p>
                </div>
                <div class="finance-grid">
                    <div class="finance-card animate-fade-in-up">
                        <div class="finance-icon">👨‍👩‍👧</div>
                        <h3>Семейная ипотека</h3>
                        <p>Льготная ставка для семей с детьми</p>
                    </div>
                    <div class="finance-card animate-fade-in-up delay-1">
                        <div class="finance-icon">💻</div>
                        <h3>IT-ипотека</h3>
                        <p>Специальная программа для IT-специалистов</p>
                    </div>
                    <div class="finance-card animate-fade-in-up delay-2">
                        <div class="finance-icon">📜</div>
                        <h3>Жилищные сертификаты</h3>
                        <p>Принимаем все виды жилищных сертификатов</p>
                    </div>
                    <div class="finance-card animate-fade-in-up delay-3">
                        <div class="finance-icon">🔄</div>
                        <h3>Взаимозачёт и trade-in</h3>
                        <p>Обмен вторичного жилья на новый дом</p>
                    </div>
                </div>
            </div>

            <!-- РАСПОЛОЖЕНИЕ -->
            <div class="loc-teaser animate-fade-in-up" style="animation-delay:0.1s;">
                <div class="loc-teaser-inner">
                    <div class="loc-teaser-info">
                        <p class="about-subtitle">Расположение</p>
                        <p class="loc-teaser-title">Тихий район — рядом с городом</p>
                        <p class="loc-teaser-text">Комплекс на ул. Вольская, 29 — в Кировском районе Перми, в 20 минутах от центра. Рядом школа «СинТез», детские сады, магазины «Магнит» и «Пятёрочка», лесопарковая зона и лыжная база.</p>
                        <router-link to="/project/volskaya" class="prototype-link">
                            <p class="loc-more">Подробно об объекте →</p>
                        </router-link>
                    </div>
                    <div class="loc-teaser-facts">
                        <div class="loc-fact"><b>20 мин</b><span>от центра Перми</span></div>
                        <div class="loc-fact"><b>10 м</b><span>до остановки</span></div>
                        <div class="loc-fact"><b>СинТез</b><span>школа рядом</span></div>
                        <div class="loc-fact"><b>Лес</b><span>лесопарковая зона</span></div>
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="cta-strip">
                <div class="cta-strip-inner">
                    <div>
                        <p class="cta-title">Подберите свой таунхаус</p>
                        <p class="cta-sub">Покажем дом лично, ответим на вопросы и рассчитаем ипотеку</p>
                    </div>
                    <router-link to="/contacts" class="prototype-link">
                        <div class="button-primary-14">
                            <p class="button"><span class="text-white">Оставить заявку</span></p>
                            <span class="button-arrow">→</span>
                        </div>
                    </router-link>
                </div>
            </div>

            <!-- ФУТЕР -->
            <div class="info-34">
                <div class="info-wrap">
                    <div class="info-text">
                        <p class="h3"><span class="text-white">Группа компаний «АВД ГРУПП»</span></p>
                        <p class="body"><span class="text-white">Застройщик: ООО «Специализированный застройщик СК „Рост-Строй“»<br>ИНН 5903124969 · ОГРН 1165958080199 · г. Пермь, ул. Окулова, 27<br>тел. 8 (908) 25-85-888 · +7 902 80 32 835<br>e-mail: avd_groupp@mail.ru</span></p>
                    </div>
                    <img src="/static/images/monochrome_logo.png" class="footer-logo" alt="Логотип" />
                </div>
            </div>
        </div>
    `
};