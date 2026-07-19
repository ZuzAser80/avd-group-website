const API = {
    BASE: '/auth',

    getToken() {
        return localStorage.getItem('token');
    },

    setToken(token) {
        localStorage.setItem('token', token);
    },

    clearToken() {
        localStorage.removeItem('token');
    },

    isLoggedIn() {
        return !!this.getToken();
    },

    async request(url, options = {}) {
        const token = this.getToken();
        const headers = { 'Content-Type': 'application/json', ...options.headers };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const res = await fetch(url, { ...options, headers });
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.detail || 'Ошибка');
        }
        return data;
    },

    async login(name, password) {
        const data = await this.request(`${this.BASE}/`, {
            method: 'POST',
            body: JSON.stringify({ name, password }),
        });
        this.setToken(data.access_token);
        return data;
    },

    logout() {
        this.clearToken();
    },

    parseToken() {
        const token = this.getToken();
        if (!token) return null;
        try {
            const payload = token.split('.')[1];
            return JSON.parse(atob(payload));
        } catch {
            return null;
        }
    },
};
