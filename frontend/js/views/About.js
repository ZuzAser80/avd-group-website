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
                        <p class="menu active"><span class="text-rgb-181-85-47">О нас</span></p>
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
                        <p class="text-46"><span class="text-rgb-207-120-85">+7 902 80 32 835</span></p>
                    </div>
                </div>
            </div>

            <div class="page-wrap">
                <div class="page">
                    <div class="page-header">
                        <h1 class="h1">О компании</h1>
                        <p class="body">АВД ГРУПП — строительная компания с безупречной репутацией в Перми и Пермском крае</p>
                    </div>
                    <div class="page-content">
                        <div class="card">
                            <h2 class="h2">Наша история</h2>
                            <p class="body">Компания основана в 2013 году. За более чем 10 лет работы мы реализовали свыше 50 объектов различной сложности — от частных домов до многоквартирных жилых комплексов и бизнес-центров. Мы работаем как генподрядчик и субподрядчик с крупнейшими застройщиками Пермского края.</p>
                        </div>

                        <!-- TIMELINE -->
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-dot"></div>
                                <div class="timeline-content">
                                    <p class="timeline-year">2013</p>
                                    <p class="timeline-text">Основание компании. Первые объекты — малоэтажное жилищное строительство.</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-dot"></div>
                                <div class="timeline-content">
                                    <p class="timeline-year">2014-2015</p>
                                    <p class="timeline-text">Расширение деятельности. Строительство 16-этажных домов, комплексов в Усть-Качке.</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-dot"></div>
                                <div class="timeline-content">
                                    <p class="timeline-year">2016</p>
                                    <p class="timeline-text">Участие в строительстве ЖК «Олимп». Укрепление позиций на рынке.</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-dot"></div>
                                <div class="timeline-content">
                                    <p class="timeline-year">2017-2018</p>
                                    <p class="timeline-text">Строительство ЖК «Новый центр». Сотрудничество с ООО «Талант» и ООО «РЕКОН-Строй».</p>
                                </div>
                            </div>
                            <div class="timeline-item">
                                <div class="timeline-dot"></div>
                                <div class="timeline-content">
                                    <p class="timeline-year">2023+</p>
                                    <p class="timeline-text">Более 50 реализованных объектов. Репутация надёжного подрядчика.</p>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <h2 class="h2">Наша миссия</h2>
                            <p class="body">Мы верим, что ответственное и качественное выполнение работ создаёт доверие. Каждый проект — это не просто строительство, а создание пространства для жизни и работы наших клиентов. Мы строим объекты, которые служат десятилетиями.</p>
                        </div>
                        <div class="card">
                            <h2 class="h2">Наши ценности</h2>
                            <ul>
                                <li>Качество превыше всего — работаем строго по ГОСТ и СНиП</li>
                                <li>Прозрачность — личный контроль руководителя на каждом этапе</li>
                                <li>Соблюдение сроков — сдаём объекты точно в оговоренные даты</li>
                                <li>Доверие клиентов — строим отношения на десятилетия</li>
                                <li>Безопасность — соблюдаем все нормы охраны труда</li>
                            </ul>
                        </div>
                        <div class="card">
                            <h2 class="h2">Реквизиты</h2>
                            <p class="body">
                                Индивидуальный предприниматель Авдеев Андрей Викторович<br>
                                ООО «СЗ СК «Рост-Строй»<br>
                                ООО «АВД-Строй»<br>
                                г. Пермь, ул. Петропавловская, 41, оф. 209<br>
                                Телефон: +7 902 80 32 835<br>
                                Email: avd_grupp@mail.ru
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
};