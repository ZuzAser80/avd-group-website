const Gallery = {
    template: `
        <div class="-83">
            <div class="page-wrap">
                <div class="page">
                    <div class="page-header">
                        <router-link to="/dashboard" class="auth-back-link" style="display: inline-block; margin-bottom: 12px;">← Вернуться в личный кабинет</router-link>
                        <h1 class="h1">Фотогалерея</h1>
                        <p class="form-hint" style="margin-top: 8px;">Фотографии появляются в разделе «Фотогалерея» на странице «Объекты». Первое фото показывается крупным — меняйте порядок кнопками ↑ ↓.</p>
                    </div>
                    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>

                    <div class="gal-upload">
                        <span class="gal-upload-title">Добавить фото</span>
                        <input type="file" accept="image/*" ref="fileInput" @change="onFileChange" class="file-input" />
                        <input type="text" v-model="newCaption" placeholder="Подпись (необязательно)" class="gal-caption-input" />
                        <button class="btn-create" :disabled="uploading || !file" @click="uploadPhoto">
                            {{ uploading ? 'Загрузка...' : 'Загрузить' }}
                        </button>
                    </div>

                    <div v-if="loading" class="empty">Загрузка...</div>
                    <div v-else-if="photos.length === 0" class="empty">Галерея пуста — загрузите первое фото.</div>
                    <div v-else class="gal-grid">
                        <div class="gal-card" v-for="(ph, i) in photos" :key="ph.id">
                            <img :src="ph.src" :alt="ph.caption || 'Фото галереи'" />
                            <div class="gal-card-body">
                                <span class="gal-pos">{{ i + 1 }} / {{ photos.length }}<template v-if="i === 0"> · крупное</template></span>
                                <input type="text" v-model="ph.caption" placeholder="Подпись" class="gal-caption-input" @keyup.enter="saveCaption(ph)" />
                                <div class="gal-card-actions">
                                    <button type="button" class="btn-secondary" :disabled="i === 0" @click="move(ph, -1)" title="Выше">↑</button>
                                    <button type="button" class="btn-secondary" :disabled="i === photos.length - 1" @click="move(ph, 1)" title="Ниже">↓</button>
                                    <button type="button" class="btn-secondary" @click="saveCaption(ph)">Сохранить</button>
                                    <button type="button" class="btn-secondary gal-del" @click="remove(ph)">Удалить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            photos: [],
            loading: true,
            uploading: false,
            file: null,
            newCaption: '',
            successMessage: '',
        };
    },
    async created() {
        if (!API.isLoggedIn()) {
            this.$router.push('/login');
            return;
        }
        await this.loadPhotos();
    },
    methods: {
        authFetch(url, options = {}) {
            const token = API.getToken();
            return fetch(url, {
                ...options,
                headers: { 'Authorization': `Bearer ${token}`, ...(options.headers || {}) },
            });
        },
        async loadPhotos() {
            this.loading = true;
            try {
                const photos = await API.request('/gallery/all');
                this.photos = Array.isArray(photos) ? photos : [];
            } catch (e) {
                console.error('Failed to load gallery:', e);
            } finally {
                this.loading = false;
            }
        },
        flash(message) {
            this.successMessage = message;
            setTimeout(() => { this.successMessage = ''; }, 3000);
        },
        onFileChange(e) {
            this.file = e.target.files[0] || null;
        },
        async uploadPhoto() {
            if (!this.file) return;
            this.uploading = true;
            try {
                const formData = new FormData();
                formData.append('file', this.file);
                if (this.newCaption) formData.append('caption', this.newCaption);
                const res = await this.authFetch('/gallery/upload', {
                    method: 'POST',
                    body: formData,
                });
                if (!res.ok) {
                    const data = await res.json();
                    throw new Error(data.detail || 'Ошибка загрузки файла');
                }
                this.file = null;
                this.newCaption = '';
                if (this.$refs.fileInput) this.$refs.fileInput.value = '';
                await this.loadPhotos();
                this.flash('Фото добавлено в галерею');
            } catch (e) {
                console.error('Failed to upload photo:', e);
                alert('Ошибка: ' + e.message);
            } finally {
                this.uploading = false;
            }
        },
        async saveCaption(photo) {
            try {
                const formData = new FormData();
                formData.append('caption', photo.caption || '');
                const res = await this.authFetch(`/gallery/${photo.id}`, {
                    method: 'PUT',
                    body: formData,
                });
                if (!res.ok) {
                    const data = await res.json();
                    throw new Error(data.detail || 'Ошибка сохранения');
                }
                this.flash('Подпись обновлена');
            } catch (e) {
                console.error('Failed to save caption:', e);
                alert('Ошибка: ' + e.message);
            }
        },
        async move(photo, direction) {
            const index = this.photos.findIndex(p => p.id === photo.id);
            const other = this.photos[index + direction];
            if (!other) return;
            try {
                const first = new FormData();
                first.append('caption', photo.caption || '');
                first.append('position', String(other.position));
                const second = new FormData();
                second.append('caption', other.caption || '');
                second.append('position', String(photo.position));
                const res1 = await this.authFetch(`/gallery/${photo.id}`, { method: 'PUT', body: first });
                if (!res1.ok) throw new Error('Ошибка перестановки');
                const res2 = await this.authFetch(`/gallery/${other.id}`, { method: 'PUT', body: second });
                if (!res2.ok) throw new Error('Ошибка перестановки');
                await this.loadPhotos();
            } catch (e) {
                console.error('Failed to reorder gallery:', e);
                alert('Ошибка: ' + e.message);
            }
        },
        async remove(photo) {
            if (!confirm('Удалить это фото из галереи?')) return;
            try {
                const res = await this.authFetch(`/gallery/${photo.id}`, { method: 'DELETE' });
                if (!res.ok) {
                    const data = await res.json();
                    throw new Error(data.detail || 'Ошибка удаления');
                }
                await this.loadPhotos();
                this.flash('Фото удалено');
            } catch (e) {
                console.error('Failed to delete photo:', e);
                alert('Ошибка: ' + e.message);
            }
        },
    },
};
