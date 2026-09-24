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
                            <div class="ts-opt-label">Интересующий объект</div>
                            <div class="ts-opt-grid">
                                <button type="button" v-for="o in choiceOptions" :key="o.key"
                                        class="ts-opt" :class="{ 'ts-opt-active': pick === o.key, 'ts-opt-sold': o.disabled }"
                                        :disabled="o.disabled" @click="pick = o.key">
                                    <span class="ts-opt-radio"></span>
                                    <span class="ts-opt-text">
                                        <span class="ts-opt-name">{{ o.title }}</span>
                                        <span class="ts-opt-sub">{{ o.sub }}</span>
                                    </span>
                                    <span v-if="o.badge" class="ts-opt-badge">{{ o.badge }}</span>
                                </button>
                            </div>
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
                        <p class="ts-footer-item">614000, Пермский край, г. Пермь, ул. Окулова, д. 27 оф. 103</p>
                        <p class="ts-footer-item">пн–пт: 9:00–18:00 · сб: 10:00–14:00</p>
                    </div>
                    <div>
                        <p class="ts-footer-title">Контакты</p>
                        <p class="ts-footer-item">8 (908) 25-85-888</p>
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
                    <p class="ts-footer-legal">АВД ГРУПП — застройщик малоэтажного жилья в Перми<br>Информация на сайте носит справочный характер и не является публичной офертой · © АВД ГРУПП</p>
                </div>
            </footer>
        </div>
    `,
    data() {
        return {
            form: { name: '', phone: '', object_name: '', message: '' },
            pick: '',
            posts: [],
            sent: false,
            error: '',
            submitting: false
        };
    },
    computed: {
        choiceOptions() {
            const staticOpts = [
                { key: 'av', title: 'Таунхаус 133,6 м²', sub: 'Вольская 29 · 12 830 000 ₽', badge: 'последний дом', disabled: false },
                { key: 'consult', title: 'Нужна консультация', sub: 'Подбор дома и условий ипотеки', badge: '', disabled: false },
                { key: 'sold', title: 'Таунхаус 99,6 м²', sub: 'Все дома этого формата проданы', badge: 'продано', disabled: true }
            ];
            const postOpts = this.posts.map(p => ({
                key: 'p' + p.id,
                title: p.title,
                sub: p.address || 'Другой объект',
                badge: '',
                disabled: false
            }));
            return [...staticOpts, ...postOpts];
        }
    },
    async created() {
        try {
            const items = await API.request('/post/all');
            this.posts = items.filter(p => p.kind !== 'home');
        } catch (e) {
            console.error('Failed to load posts:', e);
        }
    },
    methods: {
        async submitForm() {
            this.submitting = true;
            this.error = '';
            const chosen = this.choiceOptions.find(o => o.key === this.pick);
            if (!chosen || chosen.disabled) {
                this.submitting = false;
                this.error = 'Пожалуйста, выберите интересующий объект.';
                return;
            }
            try {
                await API.request('/lead/create', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: this.form.name,
                        phone: this.form.phone,
                        subject: 'Заявка на просмотр',
                        object_name: chosen.title,
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