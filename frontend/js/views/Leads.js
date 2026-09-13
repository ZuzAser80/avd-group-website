const Leads = {
    template: `
        <div class="-83">
            <div class="page-wrap">
                <div class="page">
                    <div class="page-header">
                        <router-link to="/dashboard" class="auth-back-link" style="display: inline-block; margin-bottom: 12px;">← Вернуться в личный кабинет</router-link>
                        <h1 class="h1">Заявки и обращения</h1>
                    </div>
                    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
                    <div v-if="loading" class="empty">Загрузка...</div>
                    <div v-else-if="leads.length === 0" class="empty">Заявок пока нет</div>
                    <div v-else class="leads-list">
                        <div class="lead-card" v-for="lead in leads" :key="lead.id">
                            <div class="lead-card-head">
                                <span class="lead-subject">{{ lead.subject || 'Заявка' }}</span>
                                <span class="lead-date">{{ lead.created_at_text }}</span>
                            </div>
                            <div class="lead-card-grid">
                                <p><b>Имя:</b> {{ lead.name }}</p>
                                <p><b>Телефон:</b> <a :href="'tel:' + lead.phone">{{ lead.phone }}</a></p>
                                <p v-if="lead.object_name"><b>Объект:</b> {{ lead.object_name }}</p>
                                <p v-if="lead.message"><b>Комментарий:</b> {{ lead.message }}</p>
                            </div>
                            <button class="btn-create" style="padding: 8px 16px; font-size: 13px; background: #e74c3c;" @click="deleteLead(lead.id)">Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            leads: [],
            loading: true,
            successMessage: ''
        };
    },
    async created() {
        if (!API.isLoggedIn()) {
            this.$router.push('/login');
            return;
        }
        await this.loadLeads();
    },
    methods: {
        async loadLeads() {
            this.loading = true;
            try {
                const leads = await API.request('/lead/all');
                this.leads = leads.map(lead => ({
                    ...lead,
                    created_at_text: lead.created_at
                        ? new Date(lead.created_at).toLocaleString('ru-RU')
                        : ''
                }));
            } catch (e) {
                console.error('Failed to load leads:', e);
            } finally {
                this.loading = false;
            }
        },
        async deleteLead(leadId) {
            if (!confirm('Удалить эту заявку?')) {
                return;
            }
            try {
                const token = API.getToken();
                const res = await fetch(`/lead/${leadId}`, {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${token}` },
                });
                if (!res.ok) {
                    const data = await res.json();
                    throw new Error(data.detail || 'Ошибка удаления');
                }
                this.successMessage = 'Заявка удалена';
                setTimeout(() => { this.successMessage = ''; }, 3000);
                await this.loadLeads();
            } catch (e) {
                console.error('Failed to delete lead:', e);
                alert('Ошибка: ' + e.message);
            }
        }
    }
};