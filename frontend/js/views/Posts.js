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
                    <div v-if="loading" class="empty">Загрузка...</div>
                    <div v-else-if="posts.length === 0" class="empty">Нет объектов</div>
                    <div v-else class="projects-grid">
                        <div class="project-card" v-for="post in posts" :key="post.id">
                            <img v-if="post.image" :src="post.image" :alt="post.title" />
                            <div class="project-card-content">
                                <h3>{{ post.title }}</h3>
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
            newPost: { title: '', content: '', address: '', client: '', year: '' },
            newPostFile: null,
            editingPostId: null,
        };
    },
    async created() {
        if (!API.isLoggedIn()) {
            this.$router.push('/login');
            return;
        }
        await this.loadPosts();
    },
    methods: {
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
            this.newPost = { title: '', content: '', address: '', client: '', year: '' };
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
                year: post.year || ''
            };
            this.newPostFile = null;
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
