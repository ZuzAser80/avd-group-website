const OBJECT_STATUS_TABS = [
    { key: 'planned', label: 'Планируемые', empty: 'Планируемых объектов пока нет — мы добавим их по мере утверждения проектов.' },
    { key: 'selling', label: 'В продаже', empty: 'Сейчас все объекты распроданы. Оставьте заявку, и мы сообщим о новых поступлениях.' },
    { key: 'sold', label: 'Продано', empty: 'Проданных объектов пока нет.' },
];

const DEFAULT_OBJECT_STATUS = 'planned';

const OBJECT_STATUS_FALLBACK = 'selling';

const OBJECT_STATUS_BADGE = {
    planned: 'Планируется',
    selling: 'В продаже',
    sold: 'Продано',
};

function normalizeObjectStatus(post) {
    const raw = (post && post.status) || '';
    if (raw === 'planned' || raw === 'selling' || raw === 'sold') {
        return raw;
    }
    return post && post.sold ? 'sold' : 'selling';
}

function statusLabel(key) {
    const tab = OBJECT_STATUS_TABS.find(t => t.key === key);
    return tab ? tab.label : key;
}

function statusEmptyText(key) {
    const tab = OBJECT_STATUS_TABS.find(t => t.key === key);
    return tab ? tab.empty : '';
}

function statusBadgeLabel(key) {
    return OBJECT_STATUS_BADGE[key] || statusLabel(key);
}

function firstPopulatedStatus(items) {
    for (const tab of OBJECT_STATUS_TABS) {
        if (items.some(item => normalizeObjectStatus(item) === tab.key)) {
            return tab.key;
        }
    }
    return DEFAULT_OBJECT_STATUS;
}

function countByStatus(items) {
    const counts = {};
    for (const tab of OBJECT_STATUS_TABS) {
        counts[tab.key] = 0;
    }
    for (const item of items) {
        const key = normalizeObjectStatus(item);
        if (key in counts) {
            counts[key] += 1;
        }
    }
    return counts;
}

function plural(count, forms) {
    const n = Math.abs(count) % 100;
    if (n > 10 && n < 20) {
        return forms[2];
    }
    switch (n % 10) {
        case 1: return forms[0];
        case 2:
        case 3:
        case 4: return forms[1];
        default: return forms[2];
    }
}
