const About = {
    template: `
        <div class="-38">
            <!-- ШАПКА -->
            <app-header></app-header>

            <!-- ГЕРОЙ -->
            <div class="inner-hero">
                <p class="hero-badge">О компании</p>
                <h1 class="h1">АВД ГРУПП — застройщик малоэтажного жилья</h1>
                <p class="inner-hero-sub">Проектируем, строим и продаём собственные объекты в Перми. Прямые продажи от застройщика — без посредников.</p>
            </div>

            <div class="page-wrap">
                <div class="page">
                    <div class="card card-lead">
                        <h2 class="h2">Мы — застройщик, а не подрядчик</h2>
                        <p class="body">АВД ГРУПП проектирует, строит и продаёт собственные объекты жилой недвижимости. Мы отвечаем за результат на всех этапах — от покупки земли и проекта до ввода дома в эксплуатацию и передачи ключей покупателям. Застройщиком объектов выступает ООО «Специализированный застройщик СК „Рост-Строй“», производственные задачи выполняет ООО «АВД-Строй». Это означает прямые продажи без посредников и полный контроль качества на стройке.</p>
                    </div>

                    <!-- ЦИФРЫ -->
                    <div class="about-counts">
                        <div class="about-count"><b>2013</b><span>Строим с 2013 года</span></div>
                        <div class="about-count"><b>5</b><span>Таунхаусов в комплексе на Вольской, 29</span></div>
                        <div class="about-count"><b>2</b><span>Формата — 99,6 и 133,6 м²</span></div>
                        <div class="about-count"><b>100%</b><span>Готовое жильё — переезд сразу</span></div>
                    </div>

                    <!-- TIMELINE -->
                    <h2 class="tl-title">История группы</h2>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <p class="timeline-year">2013</p>
                                <p class="timeline-text">Начало строительной деятельности группы «АВД ГРУПП» — первые объекты многоквартирного жилья в Перми.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <p class="timeline-year">2013–2018</p>
                                <p class="timeline-text">Каталог выполненных работ: жилые дома и ЖК в Перми и Пермском крае — «Олимп», «Новый центр», комплексы домов в Усть-Качке и Лобаново.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <p class="timeline-year">2016</p>
                                <p class="timeline-text">Зарегистрирован специализированный застройщик ООО СК «Рост-Строй» — начата подготовка к девелопменту собственного малоэтажного жилья.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <p class="timeline-year">2022</p>
                                <p class="timeline-text">Создано производственно-строительное подразделение — ООО «АВД-Строй» (ИНН 5904400121).</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <p class="timeline-year">2023</p>
                                <p class="timeline-text">Собственный комплекс таунхаусов на ул. Вольская, 29 введён в эксплуатацию. Старт прямых продаж готового жилья от застройщика.</p>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-dot"></div>
                            <div class="timeline-content">
                                <p class="timeline-year">Сегодня</p>
                                <p class="timeline-text">Продаём готовые таунхаусы, сопровождаем сделки с ипотекой и развиваем новые площадки под малоэтажную застройку.</p>
                            </div>
                        </div>
                    </div>

                    <!-- КАТАЛОГ ВЫПОЛНЕННЫХ РАБОТ -->
                    <h2 class="tl-title">Каталог выполненных работ</h2>
                    <div class="portfolio-grid">
                        <div class="portfolio-item">
                            <span class="portfolio-year">2012</span>
                            <h3>4-этажный жилой дом</h3>
                            <p>г. Пермь, ул. Левченко, 11</p>
                        </div>
                        <div class="portfolio-item">
                            <span class="portfolio-year">2013</span>
                            <h3>16-этажный жилой дом</h3>
                            <p>г. Пермь, ул. Беляева, 8</p>
                        </div>
                        <div class="portfolio-item">
                            <span class="portfolio-year">2013–2014</span>
                            <h3>16-этажный жилой дом</h3>
                            <p>г. Пермь, ул. Левченко, 31</p>
                        </div>
                        <div class="portfolio-item">
                            <span class="portfolio-year">2014</span>
                            <h3>Группа малоэтажных домов</h3>
                            <p>с. Лобаново, секции №7, №8</p>
                        </div>
                        <div class="portfolio-item">
                            <span class="portfolio-year">2014–2015</span>
                            <h3>Комплекс 4-этажных домов</h3>
                            <p>г. Пермь, ул. Кировоградская, 180</p>
                        </div>
                        <div class="portfolio-item">
                            <span class="portfolio-year">2014–2015</span>
                            <h3>Апартаменты у курорта</h3>
                            <p>с. Усть-Качка, Пермский район</p>
                        </div>
                        <div class="portfolio-item">
                            <span class="portfolio-year">2014–2015</span>
                            <h3>5-этажный жилой дом</h3>
                            <p>с. Усть-Качка, ул. Победы, 18</p>
                        </div>
                        <div class="portfolio-item">
                            <span class="portfolio-year">2016</span>
                            <h3>ЖК «Олимп»</h3>
                            <p>г. Пермь, ул. Локомотивная, 1</p>
                        </div>
                        <div class="portfolio-item">
                            <span class="portfolio-year">2017–2018</span>
                            <h3>ЖК «Новый центр»</h3>
                            <p>г. Пермь, ул. Революции, 22</p>
                        </div>
                    </div>

                    <!-- ГАРАНТИИ -->
                    <div class="guarantees">
                        <div class="guarantee-item">
                            <div class="g-icon">🤝</div>
                            <h3>Прямые продажи</h3>
                            <p>Без риелторов и посредников — вы покупаете жильё напрямую у застройщика</p>
                        </div>
                        <div class="guarantee-item">
                            <div class="g-icon">✅</div>
                            <h3>Готовый объект</h3>
                            <p>Комплекс введён в эксплуатацию: дом, техплан, регистрация права — всё оформлено</p>
                        </div>
                        <div class="guarantee-item">
                            <div class="g-icon">🏦</div>
                            <h3>Ипотека банков</h3>
                            <p>Помогаем оформить семейную и IT-ипотеку, принимаем жилищные сертификаты</p>
                        </div>
                        <div class="guarantee-item">
                            <div class="g-icon">📄</div>
                            <h3>Прозрачный договор</h3>
                            <p>Честные и понятные условия сделки без скрытых платежей</p>
                        </div>
                    </div>

                    <div class="card">
                        <h2 class="h2">Наша миссия</h2>
                        <p class="body">Дать пермякам возможность жить в собственном полноценном доме из кирпича в тихом зелёном районе — но в 20 минутах от центра города. Мы верим, что ответственное строительство и честные продажи создают доверие на десятилетия.</p>
                    </div>
                    <div class="card">
                        <h2 class="h2">Наши ценности</h2>
                        <ul>
                            <li>Капитальность — строим только из кирпича, без компромиссов</li>
                            <li>Честность — продажи напрямую от застройщика, без посредников</li>
                            <li>Прозрачность — понятные договоры и условия сделки</li>
                            <li>Готовность — жильё сданное, пригодное для переезда сразу</li>
                            <li>Сопровождение — помогаем с ипотекой, сертификатами и взаимозачётом</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h2 class="h2">Реквизиты</h2>
                        <p class="body">
                            Застройщик: ООО «Специализированный застройщик „Строительная компания „Рост-Строй“»<br>
                            ИНН 5903124969 · КПП 590201001 · ОГРН 1165958080199<br>
                            Дата регистрации: 16.05.2016<br>
                            Офис: 614000, г. Пермь, ул. Петропавловская, 41, оф. 209<br>
                            Генеральный директор и учредитель: Авдеев Андрей Викторович<br><br>
                            Производственное подразделение: ООО «АВД-Строй» (ИНН 5904400121)<br><br>
                            Телефоны: 8 (908) 25-85-888, +7 902 80 32 835<br>
                            Email: avd_grupp@mail.ru
                        </p>
                    </div>
                </div>
            </div>

            <!-- ФУТЕР -->
            <div class="info-34">
                <div class="info-wrap">
                    <div class="info-text">
                        <p class="h3"><span class="text-white">Группа компаний «АВД ГРУПП»</span></p>
                        <p class="body"><span class="text-white">Застройщик: ООО «Специализированный застройщик СК „Рост-Строй“»<br>ИНН 5903124969 · ОГРН 1165958080199 · г. Пермь, ул. Петропавловская, 41, оф. 209<br>тел. 8 (908) 25-85-888 · +7 902 80 32 835<br>e-mail: avd_grupp@mail.ru</span></p>
                    </div>
                    <img src="/static/images/monochrome_logo.png" class="footer-logo" alt="Логотип" />
                </div>
            </div>
        </div>
    `
};