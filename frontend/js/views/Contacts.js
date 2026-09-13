const Contacts = {
    template: `
        <div class="ts">
            <app-header></app-header>

            <!-- ГЕРОЙ -->
            <section class="ts-hero ts-hero-small">
                <div class="ts-hero-bg"></div>
                <div class="ts-hero-inner">
                    <p class="ts-hero-badge">Контакты</p>
                    <h1 class="ts-hero-h1">Свяжитесь с нами удобным способом</h1>
                    <p class="ts-hero-sub">Офис продаж в центре Перми. Позвоните, напишите или оставьте обращение — отвечаем быстро и без посредников.</p>
                </div>
            </section>

            <!-- КАРТОЧКИ КОНТАКТОВ -->
            <section class="ts-section">
                <div class="ts-container">
                    <p class="ts-label ts-label-center">Как с нами связаться</p>
                    <h2 class="ts-h2 ts-h2-center">Мы всегда на связи</h2>
                    <div class="ts-contact-cards">
                        <div class="ts-contact-card">
                            <div class="ts-contact-ico">🏢</div>
                            <h3>Офис продаж</h3>
                            <p>г. Пермь, ул. Петропавловская, 41, оф. 209</p>
                        </div>
                        <div class="ts-contact-card">
                            <div class="ts-contact-ico">📞</div>
                            <h3>Телефон</h3>
                            <p><a href="tel:+79082585888">8 (908) 25-85-888</a><br><a href="tel:+79028032835">+7 902 80 32 835</a></p>
                        </div>
                        <div class="ts-contact-card">
                            <div class="ts-contact-ico">✉️</div>
                            <h3>Электронная почта</h3>
                            <p><a href="mailto:avd_grupp@mail.ru">avd_grupp@mail.ru</a></p>
                        </div>
                        <div class="ts-contact-card">
                            <div class="ts-contact-ico">🕘</div>
                            <h3>Время работы</h3>
                            <p>Пн–Пт: 9:00–18:00<br>Сб: 10:00–14:00 · Вс: выходной</p>
                        </div>
                        <div class="ts-contact-card">
                            <div class="ts-contact-ico">💬</div>
                            <h3>Telegram</h3>
                            <p><a href="https://t.me/avd_grupp" target="_blank">@avd_grupp</a></p>
                        </div>
                        <div class="ts-contact-card">
                            <div class="ts-contact-ico">📍</div>
                            <h3>Офис застройщика</h3>
                            <p>Центр Перми · 5 минут пешком от остановки «Газета Звезда»</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ФОРМА + ИНФО -->
            <section class="ts-section ts-white-sec">
                <div class="ts-container ts-contacts-grid">
                    <div class="ts-req-form-wrap">
                        <h3 class="ts-req-form-title">Оставить обращение</h3>
                        <p class="ts-contact-form-sub">Расскажите, что вас интересует, — перезвоним в течение рабочего дня</p>
                        <form class="ts-form ts-req-form" @submit.prevent="submitForm">
                            <input type="text" v-model="form.name" placeholder="Ваше имя" required />
                            <input type="tel" v-model="form.phone" placeholder="Телефон" required />
                            <input type="email" v-model="form.email" placeholder="Email (необязательно)" />
                            <textarea v-model="form.message" rows="4" placeholder="Сообщение"></textarea>
                            <button type="submit" class="ts-btn ts-btn-orange ts-btn-block" :disabled="submitting">
                                {{ submitting ? 'Отправляем...' : 'Отправить обращение' }}
                            </button>
                        </form>
                        <p class="ts-form-note">Нажимая «Отправить», вы соглашаетесь на обработку персональных данных.</p>
                        <p v-if="sent" class="ts-req-success ts-contacts-sent"><b>Спасибо!</b> Обращение принято, свяжемся с вами в ближайшее время.</p>
                        <p v-if="error" class="ts-form-error">{{ error }}</p>
                    </div>

                    <div class="ts-contact-info">
                        <div class="ts-req-tips">
                            <p>Что важно знать</p>
                            <ul>
                                <li>Отвечаем на звонки и сообщения пн–пт с 9:00 до 18:00</li>
                                <li>Дома сданы — приезжайте на просмотр в удобное время</li>
                                <li>Рассчитаем ипотеку и условия покупки за один визит</li>
                            </ul>
                        </div>
                        <a href="#/request" class="ts-contact-button">
                            <span>Записаться на просмотр объекта</span>
                            <b>→</b>
                        </a>
                    </div>
                </div>
            </section>

            <!-- КАРТА -->
            <section class="ts-section">
                <div class="ts-container">
                    <p class="ts-label">Карта</p>
                    <h2 class="ts-h2">Как добраться до офиса</h2>
                    <div class="ts-contact-map">
                        <iframe src="https://yandex.ru/map-widget/v1/?text=Пермь, улица Петропавловская, 41" allowfullscreen loading="lazy"></iframe>
                    </div>
                </div>
            </section>

            <!-- ФУТЕР -->
            <footer class="ts-footer">
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
                            <a href="https://t.me/avd_grupp" target="_blank">Telegram</a>
                            <a href="mailto:avd_grupp@mail.ru">Написать</a>
                        </div>
                    </div>
                    <div class="ts-footer-cta">
                        <router-link to="/request" class="ts-btn ts-btn-orange">Записаться на просмотр</router-link>
                    </div>
                </div>
                <div class="ts-container">
                    <p class="ts-footer-legal">Застройщик: ООО «Специализированный застройщик СК „Рост-Строй“» · ИНН 5903124969 · ОГРН 1165958080199<br>Информация на сайте носит справочный характер и не является публичной офертой · © АВД ГРУПП</p>
                </div>
            </footer>
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