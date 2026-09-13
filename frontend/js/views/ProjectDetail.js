const ProjectDetail = {
    template: `
        <div class="pd">
            <!-- ШАПКА -->
            <app-header></app-header>

            <!-- ГЕРОЙ ОБЪЕКТА -->
            <div class="pd-hero">
                <div class="pd-hero-bg"></div>
                <div class="pd-hero-content">
                    <p class="hero-badge animate-fade-in-up">Комплекс таунхаусов от застройщика</p>
                    <p class="pd-hero-title animate-fade-in-up delay-1">Кирпичные таунхаусы<br>на ул. Вольская, 29</p>
                    <p class="hero-sub animate-fade-in-up delay-2">Готовый дом 2 этажа с участком, подпольем и закрытой охраняемой территорией. Семейная и IT-ипотека, сертификаты, взаимозачёт.</p>
                    <div class="pd-hero-meta animate-fade-in-up delay-3">
                        <div class="hm-item"><b>Дом сдан</b><span>Готов к заселению</span></div>
                        <div class="hm-item"><b>5 домов</b><span>в комплексе</span></div>
                        <div class="hm-item"><b>99,6–133,6 м²</b><span>площадь</span></div>
                        <div class="hm-item"><b>12,83 млн ₽</b><span>максимальная цена</span></div>
                    </div>
                    <div class="hero-actions animate-fade-in-up delay-3">
                        <a href="#pd-form" class="prototype-link">
                            <div class="button-primary-14">
                                <p class="button"><span class="text-white">Записаться на просмотр</span></p>
                                <span class="button-arrow">→</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="pd-house">
                    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                        <defs>
                            <linearGradient id="phGrad" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0" stop-color="#B5552F"/>
                                <stop offset="1" stop-color="#CF7855"/>
                            </linearGradient>
                            <linearGradient id="phRoof" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0" stop-color="#3a3a3a"/>
                                <stop offset="1" stop-color="#1a1a1a"/>
                            </linearGradient>
                        </defs>
                        <rect x="30" y="270" width="420" height="22" rx="6" fill="rgba(255,255,255,0.12)"/>
                        <g>
                            <rect x="60" y="100" width="150" height="130" fill="url(#phGrad)" rx="4"/>
                            <rect x="270" y="100" width="150" height="130" fill="url(#phGrad)" rx="4"/>
                            <polygon points="45,100 135,40 225,100" fill="url(#phRoof)"/>
                            <polygon points="255,100 345,40 435,100" fill="url(#phRoof)"/>
                        </g>
                        <g fill="rgba(255,255,255,0.9)">
                            <rect x="78" y="122" width="44" height="34" rx="3"/>
                            <rect x="148" y="122" width="44" height="34" rx="3"/>
                            <rect x="85" y="172" width="28" height="58" rx="2"/>
                            <rect x="288" y="122" width="44" height="34" rx="3"/>
                            <rect x="358" y="122" width="44" height="34" rx="3"/>
                            <rect x="295" y="172" width="28" height="58" rx="2"/>
                            <rect x="132" y="55" width="46" height="28" rx="3"/>
                            <rect x="302" y="55" width="46" height="28" rx="3"/>
                        </g>
                        <g fill="rgba(50,50,50,0.7)">
                            <rect x="228" y="105" width="24" height="125" rx="2"/>
                            <rect x="198" y="105" width="12" height="125" rx="2"/>
                            <rect x="270" y="105" width="12" height="125" rx="2"/>
                        </g>
                        <text x="135" y="70" fill="#CF7855" font-size="26" font-family="Montserrat, sans-serif" font-weight="800" text-anchor="middle">133,6</text>
                        <text x="345" y="70" fill="#CF7855" font-size="26" font-family="Montserrat, sans-serif" font-weight="800" text-anchor="middle">99,6</text>
                    </svg>
                </div>
            </div>

            <!-- КОНЦЕПЦИЯ -->
            <div class="pd-section pd-concept">
                <div class="pd-container">
                    <p class="about-subtitle">Концепция</p>
                    <p class="h2"><span class="text-rgb-181-85-47">Больше, чем квартира.<br>Проще, чем дом</span></p>
                    <p class="pd-text">Собственный кирпичный дом с зелёной лужайкой, панорамными окнами и автономным отоплением — при этом в 20 минутах от центра Перми. Комплекс из пяти блокированных домов с закрытой охраняемой территорией: спокойно детям, комфортно взрослым. Это капитальное жильё для семей, которые хотят жить в тишине и на природе, не отказываясь от городской инфраструктуры.</p>
                </div>
            </div>

            <!-- ХАРАКТЕРИСТИКИ -->
            <div class="pd-section pd-features">
                <div class="pd-container">
                    <div class="section-header">
                        <h2>Характеристики домов</h2>
                        <p>Что вы получаете за свои деньги</p>
                    </div>
                    <div class="pd-spec-grid">
                        <div class="pd-spec"><div class="ps-ico">🧱</div><b>Кирпич</b><span>Несущие стены и облицовка фасада — полнотелый кирпич</span></div>
                        <div class="pd-spec"><div class="ps-ico">🪟</div><b>Панорамные окна</b><span>Двухкамерные стеклопакеты REHAU, свет во всех комнатах</span></div>
                        <div class="pd-spec"><div class="ps-ico">🔥</div><b>Тёплые полы</b><span>Водяные тёплые полы на первом этаже</span></div>
                        <div class="pd-spec"><div class="ps-ico">🚿</div><b>Два санузла</b><span>Раздельный санузел на каждом этаже</span></div>
                        <div class="pd-spec"><div class="ps-ico">♨️</div><b>Газовый котёл</b><span>Индивидуальная котельная в каждом доме</span></div>
                        <div class="pd-spec"><div class="ps-ico">🚰</div><b>Коммуникации</b><span>Центральный водопровод, бойлер, автономный септик</span></div>
                        <div class="pd-spec"><div class="ps-ico">🪜</div><b>Лестница</b><span>Металлический каркас с перилами</span></div>
                        <div class="pd-spec"><div class="ps-ico">📦</div><b>Подполье 54–72 м²</b><span>Техническое помещение не входит в стоимость</span></div>
                        <div class="pd-spec"><div class="ps-ico">🌿</div><b>Свой участок</b><span>Закрытая лужайка 40–70 м² у каждого дома</span></div>
                        <div class="pd-spec"><div class="ps-ico">🎨</div><b>Предчистовая отделка</b><span>Ровные стены и подготовленные полы — готово к ремонту</span></div>
                    </div>
                </div>
            </div>

            <!-- ДОМА В ПРОДАЖЕ -->
            <div class="pd-section pd-homes">
                <div class="pd-container">
                    <div class="section-header">
                        <h2>Дома в продаже</h2>
                        <p>Переезд сразу после сделки — жильё готовое</p>
                    </div>
                    <div class="pd-homes-grid">
                        <div class="pd-home-card">
                            <span class="ph-tag">2 этажа · кирпич</span>
                            <div class="ph-price"><b>9 960 000 ₽</b><span>от</span></div>
                            <h3>Таунхаус 99,6 м²</h3>
                            <ul class="ph-list">
                                <li>Два жилых этажа</li>
                                <li>Техническое подполье в подарок</li>
                                <li>Свой участок-лужайка</li>
                                <li>Автономный газовый котёл</li>
                            </ul>
                            <a href="#pd-form" class="prototype-link"><div class="button-outline-orange">Заявка на дом</div></a>
                        </div>
                        <div class="pd-home-card pd-home-card-featured">
                            <span class="ph-tag">2 этажа · кирпич · больше света</span>
                            <div class="ph-price"><b>12 830 000 ₽</b><span>от</span></div>
                            <h3>Таунхаус 133,6 м²</h3>
                            <ul class="ph-list">
                                <li>Просторная кухня-гостиная</li>
                                <li>Дополнительные окна в санузле и на лестнице (крайние секции)</li>
                                <li>Два санузла</li>
                                <li>Подполье до 72 м² — кладовая и прачечная</li>
                            </ul>
                            <a href="#pd-form" class="prototype-link"><div class="button-primary-14"><p class="button"><span class="text-white">Заявка на дом</span></p></div></a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ПЛАНИРОВКИ -->
            <div class="pd-section pd-plans">
                <div class="pd-container">
                    <div class="section-header">
                        <h2>Планировки</h2>
                        <p>Продуманная эргономика каждого квадратного метра</p>
                    </div>
                    <div class="pd-plan-grid">
                        <div class="pd-floor">
                            <div class="pf-head"><span class="pf-num">1 этаж</span><span class="pf-area">прихожая · гостиная · кухня</span></div>
                            <ul class="pf-list">
                                <li>Просторная прихожая с возможностью гардероба</li>
                                <li>Кухня-гостиная с панорамным окном</li>
                                <li>Гостевой санузел</li>
                                <li>Водяные тёплые полы</li>
                                <li>Собственная котельная с газовым котлом</li>
                            </ul>
                        </div>
                        <div class="pd-floor">
                            <div class="pf-head"><span class="pf-num">2 этаж</span><span class="pf-area">спальни · ванная</span></div>
                            <ul class="pf-list">
                                <li>Две-три просторные спальни с панорамными окнами</li>
                                <li>Второй санузел</li>
                                <li>Светлый лестничный проём с металлической лестницей и перилами</li>
                                <li>В крайних секциях — дополнительные окна на лестнице</li>
                            </ul>
                        </div>
                        <div class="pd-floor">
                            <div class="pf-head"><span class="pf-num">Подполье</span><span class="pf-area">54–72 м² · не входит в стоимость</span></div>
                            <ul class="pf-list">
                                <li>Техническое подполье от 54 до 72 м²</li>
                                <li>Удобно под кладовую, прачечную или мастерскую</li>
                                <li>Не входит в общую площадь и цену дома</li>
                                <li>У каждого дома — свой закрытый участок-лужайка 40–70 м²</li>
                            </ul>
                        </div>
                    </div>
                    <p class="pd-note">Предчистовая отделка: ровные оштукатуренные стены, подготовленные стяжкой полы, смонтированы инженерные системы. Остаётся продумать дизайн интерьера и заехать.</p>
                </div>
            </div>

            <!-- ТЕРРИТОРИЯ -->
            <div class="pd-advantages">
                <p class="h2"><span class="text-white">Закрытая территория</span> комплекса</p>
                <div class="pd-adv-grid">
                    <div class="pd-adv">🔒<b>Охрана</b><span>Охраняемая общая территория комплекса</span></div>
                    <div class="pd-adv">🧒<b>Детская площадка</b><span>Безопасное место для игр во дворе</span></div>
                    <div class="pd-adv">🌳<b>Ландшафтный дизайн</b><span>Ухоженная зелёная территория комплекса</span></div>
                    <div class="pd-adv">🚗<b>Парковка</b><span>Место для парковки у каждого дома</span></div>
                </div>
            </div>

            <!-- РАСПОЛОЖЕНИЕ -->
            <div class="pd-section pd-location">
                <div class="pd-container pd-loc-flex">
                    <div class="pd-loc-text">
                        <p class="about-subtitle">Расположение</p>
                        <p class="h2"><span class="text-rgb-181-85-47">Тихий Кировский район,<br>20 минут до центра</span></p>
                        <ul class="pd-loc-list">
                            <li><b>Остановка общественного транспорта</b> — в 10 метрах от комплекса</li>
                            <li><b>Школа «СинТез»</b> и детские сады — в шаговой доступности</li>
                            <li><b>Лесопарковая зона</b>, лыжная база и конный клуб рядом</li>
                            <li><b>Магазины «Магнит» и «Пятёрочка»</b> — по соседству</li>
                            <li><b>Доставка и сервисы</b> — без ограничений, как в городе</li>
                        </ul>
                        <a href="https://yandex.ru/maps/?text=Пермь, Вольская 29" target="_blank" class="pd-map-link">Открыть на карте →</a>
                    </div>
                    <div class="pd-loc-card">
                        <div class="loc-place">г. Пермь, Кировский район</div>
                        <div class="loc-addr">ул. Вольская, 29</div>
                        <div class="loc-rows">
                            <div class="loc-row"><span>До центра</span><b>20 минут</b></div>
                            <div class="loc-row"><span>До остановки</span><b>10 метров</b></div>
                            <div class="loc-row"><span>До школы «СинТез»</span><b>пешком</b></div>
                            <div class="loc-row"><span>Лесопарк</span><b>рядом</b></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ИПОТЕКА -->
            <div class="finance-section pd-finance">
                <div class="section-header">
                    <h2>Ипотека и способы оплаты</h2>
                    <p>Поможем подобрать самую выгодную программу</p>
                </div>
                <div class="finance-grid">
                    <div class="finance-card"><div class="finance-icon">👨‍👩‍👧</div><h3>Семейная ипотека</h3><p>Льготная ставка для семей с детьми</p></div>
                    <div class="finance-card"><div class="finance-icon">💻</div><h3>IT-ипотека</h3><p>Специальная программа для разработчиков</p></div>
                    <div class="finance-card"><div class="finance-icon">📜</div><h3>Жилищные сертификаты</h3><p>Принимаем все виды сертификатов</p></div>
                    <div class="finance-card"><div class="finance-icon">🔄</div><h3>Взаимозачёт</h3><p>Обмен вторичного жилья на новый дом</p></div>
                </div>
            </div>

            <!-- ФОРМА ЗАЯВКИ -->
            <div class="pd-section pd-form-sec" id="pd-form">
                <div class="pd-container pd-form-wrap">
                    <p class="h2"><span class="text-rgb-181-85-47">Запишитесь на просмотр</span></p>
                    <p class="pd-form-sub">Покажем дом лично, ответим на вопросы и рассчитаем ипотеку</p>
                    <form class="pd-form" @submit.prevent="submitForm">
                        <input type="text" v-model="form.name" placeholder="Ваше имя" required />
                        <input type="tel" v-model="form.phone" placeholder="Телефон" required />
                        <select v-model="form.home">
                            <option value="" disabled>Интересующий дом</option>
                            <option>Таунхаус 99,6 м² — 9 960 000 ₽</option>
                            <option>Таунхаус 133,6 м² — 12 830 000 ₽</option>
                            <option>Нужна консультация</option>
                        </select>
                        <button type="submit">Записаться на просмотр</button>
                    </form>
                    <p class="pd-form-note">Нажимая «Записаться», вы соглашаетесь на обработку персональных данных. Передайте заявку — мы перезвоним в течение рабочего дня: 8 (908) 25-85-888 или +7 902 80 32 835.</p>
                </div>
            </div>

            <!-- ФУТЕР -->
            <div class="info-34">
                <div class="info-wrap">
                    <div class="info-text">
                        <p class="h3"><span class="text-white">Группа компаний «АВД ГРУПП»</span></p>
                        <p class="body"><span class="text-white">Застройщик: ООО «Специализированный застройщик СК „Рост-Строй“»<br>ИНН 5903124969 · ОГРН 1165958080199 · г. Пермь, ул. Окулова, 27<br>тел. 8 (908) 25-85-888 · +7 902 80 32 835 · avd_groupp@mail.ru</span></p>
                    </div>
                    <img src="/static/images/monochrome_logo.png" class="footer-logo" alt="Логотип" />
                </div>
            </div>
        </div>
    `,
    data() {
        return { form: { name: '', phone: '', home: '' } };
    },
    methods: {
        submitForm() {
            alert('Спасибо! Заявка принята. Мы свяжемся с вами в ближайшее время и подберём удобное время для просмотра.');
            this.form = { name: '', phone: '', home: '' };
        }
    }
};