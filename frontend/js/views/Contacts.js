const Contacts = {
    template: `
        <div class="-47">
            <!-- ШАПКА -->
            <div class="header-48">
                <div class="container-49">
                    <router-link to="/" class="prototype-link">
                        <img src="/static/images/logo.png" alt="АВД ГРУПП" />
                    </router-link>
                    <div class="nav-center">
                        <router-link to="/" class="prototype-link">
                            <p class="menu"><span class="text-rgb-50-50-50">Главная</span></p>
                        </router-link>
                        <router-link to="/about" class="prototype-link">
                            <p class="menu"><span class="text-rgb-50-50-50">О нас</span></p>
                        </router-link>
                        <p class="menu active"><span class="text-rgb-181-85-47">Контакты</span></p>
                        <router-link to="/projects" class="prototype-link">
                            <p class="menu"><span class="text-rgb-50-50-50">Объекты</span></p>
                        </router-link>
                    </div>
                    <div class="nav-auth">
                        <router-link to="/login" class="prototype-link">
                            <button class="btn-login">Личный кабинет</button>
                        </router-link>
                        <p class="text-55"><span class="text-rgb-207-120-85">+7 902 80 32 835</span></p>
                    </div>
                </div>
            </div>

            <!-- ТЁМНАЯ СЕКЦИЯ КОНТАКТОВ -->
            <div class="contacts-dark">
                <p class="h1"><span class="text-white">Контакты</span></p>
                <div class="contacts-grid">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <img src="/static/images/map_simbol.svg" alt="Адрес" />
                        </div>
                        <p class="h3"><span class="text-white">г. Пермь, ул. Ленина, 9, оф. 415</span></p>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <img src="/static/images/phone_simbol.svg" alt="Телефон" />
                        </div>
                        <p class="h3"><span class="text-white">8(908) 25-85-888</span></p>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <img src="/static/images/mail_simbol.svg" alt="Email" />
                        </div>
                        <p class="h3"><span class="text-white">avd_groupp@mail.ru</span></p>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <img src="/static/images/phone_simbol.svg" alt="Телефон" />
                        </div>
                        <p class="h3"><span class="text-white">+7 902 80 32 835</span></p>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <img src="/static/images/tg_simbol.svg" alt="Telegram" />
                        </div>
                        <p class="h3"><span class="text-white"><a href="https://t.me/avd_groupp" target="_blank" class="contact-link">Наш Telegram</a></span></p>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <img src="/static/images/max_simbol.svg" alt="WhatsApp" />
                        </div>
                        <p class="h3"><span class="text-white"><a href="https://wa.me/79028032835" target="_blank" class="contact-link">Написать в WhatsApp</a></span></p>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <img src="/static/images/vk_simbol.svg" alt="VK" />
                        </div>
                        <p class="h3"><span class="text-white"><a href="https://vk.com/avd_groupp" target="_blank" class="contact-link">Мы ВКонтакте</a></span></p>
                    </div>
                </div>
            </div>

            <!-- ФОРМА ОБРАТНОЙ СВЯЗИ -->
            <div class="contact-form-section">
                <div class="contact-form-wrap">
                    <h2>Оставить заявку</h2>
                    <form class="contact-form" @submit.prevent="submitForm">
                        <input type="text" v-model="form.name" placeholder="Ваше имя" required />
                        <input type="tel" v-model="form.phone" placeholder="Телефон" required />
                        <input type="email" v-model="form.email" placeholder="Email" />
                        <textarea v-model="form.message" placeholder="Сообщение"></textarea>
                        <button type="submit">Отправить заявку</button>
                    </form>
                    <div class="working-hours">
                        <h4>Режим работы</h4>
                        <p>Пн-Пт: 9:00 — 18:00 | Сб: 10:00 — 14:00 | Вс: выходной</p>
                    </div>
                </div>
            </div>

            <!-- КАРТА -->
            <div class="map-section">
                <div class="map-container">
                    <iframe src="https://2gis.ru/perm/firm/70000001022018321" allowfullscreen loading="lazy"></iframe>
                </div>
                <p class="h2"><span class="text-black">Мы находимся в центре Перми</span></p>
            </div>
        </div>
    `,
    data() {
        return {
            form: { name: '', phone: '', email: '', message: '' }
        };
    },
    methods: {
        submitForm() {
            alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
            this.form = { name: '', phone: '', email: '', message: '' };
        }
    }
};