const Posts = {
    template: `
        <div class="-83">
            <div class="page-wrap">
                <div class="page">
                    <div class="page-header">
                        <router-link to="/dashboard" class="auth-back-link" style="display: inline-block; margin-bottom: 12px;">← Вернуться в личный кабинет</router-link>
                        <h1 class="h1">Все объекты</h1>
                        <button class="btn-create" @click="openCreateModal" style="margin-top: 16px;">Создать объект</button>
                    </div>
                    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
                    <div class="status-tabs" v-if="!loading">
                        <button type="button" v-for="tab in statusTabs" :key="tab.key"
                                class="status-tab" :class="{ 'status-tab-active': activeStatus === tab.key }"
                                @click="activeStatus = tab.key">
                            {{ tab.label }}
                            <span class="status-tab-count">{{ statusCounts[tab.key] }}</span>
                        </button>
                    </div>
                    <div v-if="loading" class="empty">Загрузка...</div>
                    <div v-else-if="posts.length === 0" class="empty">Нет объектов</div>
                    <div v-else-if="visiblePosts.length === 0" class="empty">{{ statusEmptyText(activeStatus) }}</div>
                    <div v-else class="projects-grid">
                        <div class="project-card" v-for="post in visiblePosts" :key="post.id">
                            <img v-if="post.image" :src="post.image" :alt="post.title" />
                            <div class="project-card-content">
                                <h3>{{ post.title }}</h3>
                                <span class="project-status" :class="'project-status-' + postStatus(post)">{{ statusBadgeLabel(postStatus(post)) }}</span>
                                <p v-if="post.address" class="project-meta">{{ post.address }}</p>
                                <p v-if="post.client" class="project-meta">{{ post.client }}</p>
                                <span v-if="post.year" class="project-tag">{{ post.year }}</span>
                            </div>
                            <div style="padding: 0 20px 20px; display: flex; gap: 8px;">
                                <button class="btn-create" style="flex:1; padding: 8px 16px; font-size: 13px;" @click="editPost(post)">Редактировать</button>
                                <button class="btn-create" style="flex:1; padding: 8px 16px; font-size: 13px; background: #e74c3c;" @click="deletePost(post.id)">Удалить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CREATE POST MODAL -->
            <div class="modal-overlay" v-if="showCreateModal" @click.self="closeCreateModal">
                <div class="modal-content">
                    <h2>{{ editingPostId ? 'Редактировать объект' : 'Новый объект' }}</h2>
                    <form @submit.prevent="submitPost">
                        <label>Название *</label>
                        <input type="text" v-model="newPost.title" required placeholder="Название объекта" />

                        <label>Описание</label>
                        <textarea v-model="newPost.content" placeholder="Описание объекта"></textarea>

                        <label>Статус объекта</label>
                        <select v-model="newPost.status">
                            <option value="planned">Планируемые</option>
                            <option value="selling">В продаже</option>
                            <option value="sold">Продано</option>
                        </select>
                        <p class="form-hint">Объект появится во вкладке «{{ statusTabLabel }}» на странице «Объекты».</p>

                        <label>Адрес</label>
                        <input type="text" v-model="newPost.address" placeholder="г. Пермь, ул. ..." />

                        <label>Заказчик</label>
                        <input type="text" v-model="newPost.client" placeholder="ООО «Название»" />

                        <label>Год</label>
                        <input type="text" v-model="newPost.year" placeholder="2024 год" />

                        <label>Цена</label>
                        <input type="text" v-model="newPost.price" placeholder="12 830 000 ₽" />

                        <label>Метка (тег)</label>
                        <input type="text" v-model="newPost.tag" placeholder="2 этажа · кирпич · дом сдан" />

                        <label>Позиция (порядок вывода)</label>
                        <input type="number" v-model.number="newPost.position" min="0" />

                        <label>Этажи / состав</label>
                        <div v-for="(f, i) in newPost.floors" :key="i" style="display: flex; gap: 6px; margin-bottom: 6px;" class="floors-row">
                            <input type="text" v-model="f.label" placeholder="1 этаж" style="flex: 0 0 90px;" />
                            <input type="text" v-model="f.text" placeholder="прихожая, кухня-гостиная..." style="flex: 1;" />
                            <button type="button" class="btn-secondary" style="padding: 4px 10px; font-size: 12px;" @click="removeFloor(i)">✕</button>
                        </div>
                        <button type="button" class="btn-secondary" style="margin-bottom: 12px;" @click="addFloor">+ Добавить этаж</button>

                        <label>Фото галереи</label>
                        <div v-for="(ph, i) in newPost.photos" :key="i" style="display: flex; gap: 6px; margin-bottom: 6px;" class="photos-row">
                            <input type="text" v-model="ph.src" placeholder="/static/uploads/..." style="flex: 1;" />
                            <input type="text" v-model="ph.caption" placeholder="Подпись" style="flex: 1;" />
                            <button type="button" class="btn-secondary" style="padding: 4px 10px; font-size: 12px;" @click="removePhoto(i)">✕</button>
                        </div>
                        <button type="button" class="btn-secondary" @click="addPhoto">+ Добавить фото</button>

                        <label>Фото</label>
                        <input type="file" accept="image/*" @change="onFileChange" class="file-input" />

                        <div class="modal-actions">
                            <button type="submit" class="btn-primary" :disabled="submitting">
                                {{ submitting ? 'Сохранение...' : (editingPostId ? 'Сохранить' : 'Создать') }}
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
            posts: [],
            loading: true,
            showCreateModal: false,
            successMessage: '',
            submitting: false,
            activeStatus: DEFAULT_OBJECT_STATUS,
            statusTabs: OBJECT_STATUS_TABS,
            newPost: { title: '', content: '', address: '', client: '', year: '', status: 'selling', price: '', tag: '', position: 0, floors: [], photos: [] },
            newPostFile: null,
            editingPostId: null,
        };
    },
    computed: {
        statusCounts() {
            return countByStatus(this.posts);
        },
        visiblePosts() {
            return this.posts.filter(p => normalizeObjectStatus(p) === this.activeStatus);
        },
        statusTabLabel() {
            return statusLabel(this.newPost.status);
        },
    },
    async created() {
        if (!API.isLoggedIn()) {
            this.$router.push('/login');
            return;
        }
        await this.loadPosts();
    },
    methods: {
        blankPost() {
            return { title: '', content: '', address: '', client: '', year: '', status: 'selling', price: '', tag: '', position: 0, floors: [], photos: [] };
        },
        postStatus(post) {
            return normalizeObjectStatus(post);
        },
        async loadPosts() {
            this.loading = true;
            try {
                this.posts = await API.request('/post/all');
            } catch (e) {
                console.error('Failed to load posts:', e);
            } finally {
                this.loading = false;
            }
        },
        openCreateModal() {
            this.showCreateModal = true;
            this.editingPostId = null;
            this.newPost = this.blankPost();
            this.newPostFile = null;
        },
        editPost(post) {
            this.showCreateModal = true;
            this.editingPostId = post.id;
            this.newPost = {
                title: post.title,
                content: post.content || '',
                address: post.address || '',
                client: post.client || '',
                year: post.year || '',
                status: normalizeObjectStatus(post),
                price: post.price || '',
                tag: post.tag || '',
                position: post.position || 0,
                floors: Array.isArray(post.floors) ? post.floors.map(f => ({ label: f[0], text: f[1] })) : [],
                photos: Array.isArray(post.photos) ? post.photos.map(p => ({ src: p.src, caption: p.caption })) : [],
            };
            this.newPostFile = null;
        },
        addFloor() {
            this.newPost.floors.push({ label: '', text: '' });
        },
        removeFloor(i) {
            this.newPost.floors.splice(i, 1);
        },
        addPhoto() {
            this.newPost.photos.push({ src: '', caption: '' });
        },
        removePhoto(i) {
            this.newPost.photos.splice(i, 1);
        },
        async deletePost(postId) {
            if (!confirm('Вы уверены, что хотите удалить этот объект?')) {
                return;
            }
            try {
                const token = API.getToken();
                const res = await fetch(`/post/${postId}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${token}` },
                });
                if (!res.ok) {
                    const data = await res.json();
                    throw new Error(data.detail || 'Ошибка удаления');
                }
                await this.loadPosts();
            } catch (e) {
                console.error('Failed to delete post:', e);
                alert('Ошибка: ' + e.message);
            }
        },
        closeCreateModal() {
            this.showCreateModal = false;
            this.editingPostId = null;
            this.newPost = this.blankPost();
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
                formData.append('status', this.newPost.status || 'selling');
                if (this.newPost.price) formData.append('price', this.newPost.price);
                if (this.newPost.tag) formData.append('tag', this.newPost.tag);
                formData.append('position', String(this.newPost.position || 0));
                if (this.newPost.floors.length) {
                    formData.append('floors', JSON.stringify(this.newPost.floors.map(f => [f.label, f.text])));
                }
                if (this.newPost.photos.length) {
                    formData.append('photos', JSON.stringify(this.newPost.photos.map(p => ({ src: p.src, caption: p.caption }))));
                }
                if (this.newPostFile) formData.append('file', this.newPostFile);

                const token = API.getToken();
                let url = '/post/create';
                let method = 'POST';
                
                if (this.editingPostId) {
                    url = `/post/${this.editingPostId}`;
                    method = 'PUT';
                }

                const res = await fetch(url, {
                    method: method,
                    headers: { 'Authorization': `Bearer ${token}` },
                    body: formData,
                });
                if (!res.ok) {
                    const data = await res.json();
                    throw new Error(data.detail || (this.editingPostId ? 'Ошибка редактирования' : 'Ошибка создания'));
                }
                this.closeCreateModal();
                const message = this.editingPostId ? 'Объект успешно обновлен!' : 'Объект успешно создан!';
                this.successMessage = message;
                setTimeout(() => { this.successMessage = ''; }, 3000);
                await this.loadPosts();
            } catch (e) {
                console.error(this.editingPostId ? 'Failed to update post:' : 'Failed to create post:', e);
                alert('Ошибка: ' + e.message);
            } finally {
                this.submitting = false;
            }
        },
    },
};
