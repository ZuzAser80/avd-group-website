const About = {
    template: `
        <div class="-38">
            <!-- ШАПКА -->
            <div class="header-39">
                <div class="container-40">
                    <router-link to="/" class="prototype-link">
                        <img src="/static/images/logo.png" alt="АВД ГРУПП" />
                    </router-link>
                    <div class="nav-center">
                        <router-link to="/" class="prototype-link">
                            <p class="menu"><span class="text-rgb-50-50-50">Главная</span></p>
                        </router-link>
                        <p class="menu active"><span class="text-rgb-181-85-47">О компании</span></p>
                        <router-link to="/projects" class="prototype-link">
                            <p class="menu"><span class="text-rgb-50-50-50">Объекты</span></p>
                        </router-link>
                        <router-link to="/contacts" class="prototype-link">
                            <p class="menu"><span class="text-rgb-50-50-50">Контакты</span></p>
                        </router-link>
                    </div>
                    <div class="nav-auth">
                        <router-link to="/login" class="prototype-link">
                            <button class="btn-login">Личный кабинет</button>
                        </router-link>
                        <p class="text-46"><span class="text-rgb-207-120-85">+7 902 80 32 835</span></p>
                    </div>
                </div>
            </div>

            <div class="page-wrap">
                <div class="page">
                    <div class="page-header">
                        <h1 class="h1">О компании</h1>
                        <p class="body">АВД ГРУПП — застройщик и девелопер малоэтажного жилья в Перми</p>
                    </div>
                    <div class="page-content">
                        <div class="card">
                            <h2 class="h2">Мы — застройщик, а не подрядчик</h2>
                            <p class="body">АВД ГРУПП проектирует, строит и продаёт собственные объекты жилой недвижимости. Мы отвечаем за результат на всех этапах — от покупки земли и проекта до ввода дома в эксплуатацию и передачи ключей покупателям. Застройщиком объектов выступает ООО «Специализированный застройщик СК „Рост-Строй“», производственные задачи выполняет ООО «АВД-Строй». Это означает прямые продажи без посредников и полный контроль качества на стройке.</p>
                        </div>

                        <!-- TIMELINE -->
                        <h2 class="tl-title">История группы</h2>
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-dot"></div>
                                <div class="timeline-content">
                                    <p class="timeline-year">2016</p>
                                    <p class="timeline-text">Зарегистрирован специализированный застройщик ООО СК «Рост-Строй» — начата подготовка к девелопменту малоэтажного жилья.</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-dot"></div>
                                <div class="timeline-content">
                                    <p class="timeline-year">2017</p>
                                    <p class="timeline-text">ИП Авдеев Андрей Викторович — отделочные и общестроительные работы. Нарабатываем производственные компетенции собственными силами.</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-dot"></div>
                                <div class="timeline-content">
                                    <p class="timeline-year">2020–2022</p>
                                    <p class="timeline-text">Возведение первого собственного комплекса таунхаусов на ул. Вольская, 29 в Кировском районе Перми.</p>
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
                                    <p class="timeline-text">Комплекс таунхаусов на ул. Вольская, 29 введён в эксплуатацию. Старт прямых продаж готового жилья от застройщика.</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-dot"></div>
                                <div class="timeline-content">
                                    <p class="timeline-year">Сегодня</p>
                                    <p class="timeline-text">Продолжаем продажи готовых таунхаусов, развиваем новые площадки под малоэтажную застройку и сопровождаем сделки с ипотекой.</p>
                                </div>
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
                                Юридический адрес: 614000, г. Пермь, ул. Окулова, 27<br>
                                Генеральный директор и учредитель: Авдеев Андрей Викторович<br><br>
                                Производственное подразделение: ООО «АВД-Строй» (ИНН 5904400121)<br><br>
                                Телефоны: 8 (908) 25-85-888, +7 902 80 32 835<br>
                                Email: avd_groupp@mail.ru
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};