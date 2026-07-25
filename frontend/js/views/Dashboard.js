const Dashboard = {
    template: `
        <div class="dashboard">
            <!-- SIDEBAR -->
            <div class="dashboard-sidebar">
                <div class="sidebar-logo">
                    <img src="/static/images/logo.png" alt="АВД ГРУПП">
                </div>
                <nav class="sidebar-nav">
                    <a href="#" class="active" @click.prevent><span>📊</span> Профиль</a>
                    <a href="#" @click.prevent><span>📁</span> Мои проекты</a>
                    <a href="#" @click.prevent><span>📄</span> Документы</a>
                    <a href="#" @click.prevent><span>⚙️</span> Настройки</a>
                </nav>
                <div class="sidebar-footer">
                    <button class="btn-logout" @click="handleLogout">Выйти</button>
                </div>
            </div>

            <!-- MAIN CONTENT -->
            <div class="dashboard-main">
                <div class="dashboard-header-bar">
                    <h1>Личный кабинет</h1>
                    <div class="user-badge">
                        <div class="avatar">{{ userInitials }}</div>
                        <span>{{ userName }}</span>
                    </div>
                </div>

                <div class="dashboard-cards">
                    <div class="dashboard-card">
                        <h3>ID пользователя</h3>
                        <p class="value">{{ user ? user.sub : '—' }}</p>
                    </div>
                    <div class="dashboard-card">
                        <h3>Сессия истекает</h3>
                        <p class="value orange">{{ exp }}</p>
                    </div>
                    <div class="dashboard-card">
                        <h3>Статус</h3>
                        <p class="value" style="color: #27ae60;">Активен</p>
                    </div>
                </div>

                <div class="dashboard-content-card">
                    <h2>Информация о профиле</h2>
                    <p class="info-row">Скоро здесь появится больше информации</p>
                </div>

                <div class="dashboard-content-card" style="margin-top: 24px;">
                    <div class="create-post-header">
                        <h2>Управление объектами</h2>
                        <button class="btn-create" @click="openCreateModal">Создать объект</button>
                    </div>
                    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
                </div>
            </div>

            <!-- CREATE POST MODAL -->
            <div class="modal-overlay" v-if="showCreateModal" @click.self="closeCreateModal">
                <div class="modal-content">
                    <h2>Новый объект</h2>
                    <form @submit.prevent="submitPost">
                        <label>Название *</label>
                        <input type="text" v-model="newPost.title" required placeholder="Название объекта" />

                        <label>Описание</label>
                        <textarea v-model="newPost.content" placeholder="Описание объекта"></textarea>

                        <label>Адрес</label>
                        <input type="text" v-model="newPost.address" placeholder="г. Пермь, ул. ..." />

                        <label>Заказчик</label>
                        <input type="text" v-model="newPost.client" placeholder="ООО «Название»" />

                        <label>Год</label>
                        <input type="text" v-model="newPost.year" placeholder="2024 год" />

                        <label>Фото</label>
                        <input type="file" accept="image/*" @change="onFileChange" class="file-input" />

                        <div class="modal-actions">
                            <button type="submit" class="btn-primary" :disabled="submitting">
                                {{ submitting ? 'Создание...' : 'Создать' }}
                            </button>
                            <button type="button" class="btn-secondary" @click="closeCreateModal">Отмена</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            showCreateModal: false,
            successMessage: '',
            submitting: false,
            newPost: { title: '', content: '', address: '', client: '', year: '' },
            newPostFile: null,
        };
    },
    computed: {
        user() {
            return API.parseToken();
        },
        exp() {
            if (!this.user || !this.user.exp) return '';
            return new Date(this.user.exp * 1000).toLocaleString('ru-RU');
        },
        now() {
            return new Date().toLocaleString('ru-RU');
        },
        userName() {
            return this.user ? this.user.name : 'Гость';
        },
        userInitials() {
            if (!this.user || !this.user.name) return 'Г';
            return this.user.name.substring(0, 2).toUpperCase();
        }
    },
    async created() {
        if (!API.isLoggedIn()) {
            this.$router.push('/login');
            return;
        }
    },
    methods: {
        handleLogout() {
            API.logout();
            this.$router.push('/login');
        },
        openCreateModal() {
            this.showCreateModal = true;
        },
        closeCreateModal() {
            this.showCreateModal = false;
            this.newPost = { title: '', content: '', address: '', client: '', year: '' };
            this.newPostFile = null;
        },
        onFileChange(e) {
            this.newPostFile = e.target.files[0] || null;
        },
        async submitPost() {
            this.submitting = true;
            try {
                const formData = new FormData();
                formData.append('title', this.newPost.title);
                if (this.newPost.content) formData.append('content', this.newPost.content);
                if (this.newPost.address) formData.append('address', this.newPost.address);
                if (this.newPost.client) formData.append('client', this.newPost.client);
                if (this.newPost.year) formData.append('year', this.newPost.year);
                if (this.newPostFile) formData.append('file', this.newPostFile);

                const token = API.getToken();
                const res = await fetch('/post/create', {
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${token}` },
                    body: formData,
                });
                if (!res.ok) {
                    const data = await res.json();
                    throw new Error(data.detail || 'Ошибка создания');
                }
                this.closeCreateModal();
                this.successMessage = 'Объект успешно создан!';
                setTimeout(() => { this.successMessage = ''; }, 3000);
            } catch (e) {
                console.error('Failed to create post:', e);
                alert('Ошибка: ' + e.message);
            } finally {
                this.submitting = false;
            }
        },
    },
};
