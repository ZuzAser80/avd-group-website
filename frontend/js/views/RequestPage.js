const RequestPage = {
    template: `
        <div class="ts">
            <app-header></app-header>

            <section class="ts-section">
                <div class="ts-container ts-req-grid">
                    <div class="ts-req-info">
                        <p class="ts-label">Заявка на объект</p>
                        <h2 class="ts-h2">Оставьте заявку — <span>покажем дом лично</span></h2>
                        <p class="ts-lead">Расскажите, какой дом вам интересен, — перезвоним в течение рабочего дня, договоримся о просмотре и рассчитаем ипотеку. Без скрытых платежей и навязчивых менеджеров.</p>
                        <ul class="ts-req-list">
                            <li><b>Пн–пт:</b> с 9:00 до 18:00 · <b>сб:</b> с 10:00 до 14:00</li>
                            <li><b>8 (908) 25-85-888</b> — звонок или чтение сообщений в мессенджерах</li>
                            <li><b>avd_grupp@mail.ru</b> — напишите нам на почту</li>
                        </ul>
                        <div class="ts-req-tips">
                            <p>Полезно знать перед просмотром:</p>
                            <ul>
                                <li>Дома сданы — заезд возможен сразу после сделки</li>
                                <li>Предчистовая отделка white box входит в цену</li>
                                <li>Семейная и IT-ипотека, жилищные сертификаты, взаимозачёт</li>
                            </ul>
                        </div>
                    </div>

                    <div class="ts-req-form-wrap">
                        <form class="ts-form ts-req-form" @submit.prevent="submitForm">
                            <h3 class="ts-req-form-title">Записаться на просмотр</h3>
                            <input type="text" v-model="form.name" placeholder="Ваше имя" required />
                            <input type="tel" v-model="form.phone" placeholder="Телефон" required />
                            <select v-model="form.object_name">
                                <option value="" disabled>Интересующий объект</option>
                                <option>Таунхаус 99,6 м² — Вольская 29 · 9 960 000 ₽</option>
                                <option>Таунхаус 133,6 м² — Вольская 29 · 12 830 000 ₽</option>
                                <option v-for="post in posts" :key="post.id">{{ post.title }}</option>
                                <option>Нужна консультация</option>
                            </select>
                            <textarea v-model="form.message" rows="3" placeholder="Комментарий (необязательно)"></textarea>
                            <button type="submit" class="ts-btn ts-btn-orange ts-btn-block" :disabled="submitting">
                                {{ submitting ? 'Отправляем...' : 'Отправить заявку' }}
                            </button>
                            <p v-if="error" class="ts-form-error">{{ error }}</p>
                        </form>
                        <p class="ts-form-note">Нажимая «Отправить заявку», вы соглашаетесь на обработку персональных данных.</p>
                        <div v-if="sent" class="ts-req-success">
                            <p class="ts-req-success-ico">✓</p>
                            <h3>Заявка принята!</h3>
                            <p>Спасибо, {{ form.name || 'друг' }}! Мы свяжемся с вами в ближайшее время и подберём удобное время для просмотра.</p>
                        </div>
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
                        <router-link to="/objects" class="ts-btn ts-btn-orange">Смотреть объекты</router-link>
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
            form: { name: '', phone: '', object_name: '', message: '' },
            posts: [],
            sent: false,
            error: '',
            submitting: false
        };
    },
    async created() {
        try {
            this.posts = await API.request('/post/all');
        } catch (e) {
            console.error('Failed to load posts:', e);
        }
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
                        subject: 'Заявка на просмотр',
                        object_name: this.form.object_name || '',
                        message: this.form.message || ''
                    })
                });
                this.sent = true;
            } catch (e) {
                this.error = 'Не удалось отправить заявку. Пожалуйста, попробуйте ещё раз или позвоните нам.';
                console.error('Failed to submit lead:', e);
            } finally {
                this.submitting = false;
            }
        }
    }
};