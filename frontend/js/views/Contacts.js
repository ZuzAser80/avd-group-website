const Contacts = {
    template: `
        <div class="-47">
            <app-header></app-header>

            <!-- ТЁМНАЯ СЕКЦИЯ КОНТАКТОВ -->
            <div class="contacts-dark">
                <p class="hero-badge">Контакты</p>
                <p class="h1"><span class="text-white">Свяжитесь с нами</span></p>
                <p class="inner-hero-sub">Отвечаем быстро и без посредников — свяжитесь удобным способом или отправьте обращение</p>
                <div class="contacts-grid">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <img src="/static/images/map_simbol.svg" alt="Адрес" />
                        </div>
                        <p class="h3"><span class="text-white">г. Пермь, ул. Петропавловская, 41, оф. 209</span></p>
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
                        <p class="h3"><span class="text-white">avd_grupp@mail.ru</span></p>
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
                        <p class="h3"><span class="text-white"><a href="https://t.me/avd_grupp" target="_blank" class="contact-link">Написать в Telegram</a></span></p>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                            <img src="/static/images/vk_simbol.svg" alt="Мессенджеры" />
                        </div>
                        <p class="h3"><span class="text-white"><a href="https://t.me/avd_grupp" target="_blank" class="contact-link">Мы в мессенджерах</a></span></p>
                    </div>
                </div>
            </div>

            <!-- ФОРМА ОБРАТНОЙ СВЯЗИ -->
            <div class="contact-form-section">
                <div class="contact-form-wrap">
                    <h2>Оставить обращение</h2>
                    <form class="contact-form" @submit.prevent="submitForm">
                        <input type="text" v-model="form.name" placeholder="Ваше имя" required />
                        <input type="tel" v-model="form.phone" placeholder="Телефон" required />
                        <input type="email" v-model="form.email" placeholder="Email" />
                        <textarea v-model="form.message" placeholder="Сообщение"></textarea>
                        <button type="submit" :disabled="submitting">{{ submitting ? 'Отправляем...' : 'Отправить обращение' }}</button>
                    </form>
                    <p v-if="sent" class="contact-form-success">Спасибо! Ваше обращение принято. Мы свяжемся с вами в ближайшее время.</p>
                    <p v-if="error" class="contact-form-error">{{ error }}</p>
                    <div class="working-hours">
                        <h4>Режим работы</h4>
                        <p>Пн-Пт: 9:00 — 18:00 | Сб: 10:00 — 14:00 | Вс: выходной</p>
                    </div>
                </div>
            </div>

            <!-- КАРТА -->
            <div class="map-section">
                <div class="map-container">
                    <iframe src="https://yandex.ru/map-widget/v1/?text=Пермь, улица Петропавловская, 41" allowfullscreen loading="lazy"></iframe>
                </div>
                <p class="h2"><span class="text-black">Офис застройщика — центр Перми</span></p>
            </div>
        </div>
    `,
    data() {
        return {
            form: { name: '', phone: '', email: '', message: '' },
            sent: false,
            submitting: false,
            error: ''
        };
    },
    methods: {
        async submitForm() {
            this.submitting = true;
            this.error = '';
            try {
                await API.request('/lead/create', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: this.form.name,
                        phone: this.form.phone,
                        subject: 'Обратная связь',
                        object_name: '',
                        message: [this.form.email, this.form.message].filter(Boolean).join(' | ')
                    })
                });
                this.sent = true;
                this.form = { name: '', phone: '', email: '', message: '' };
            } catch (e) {
                this.error = 'Не удалось отправить обращение. Попробуйте ещё раз или позвоните нам.';
                console.error('Failed to submit feedback:', e);
            } finally {
                this.submitting = false;
            }
        }
    }
};