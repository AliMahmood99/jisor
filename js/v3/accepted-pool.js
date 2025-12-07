// Accepted Pool Page Logic
let currentPoolFilter = 'all';

// Update time
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}`;
}
updateTime();
setInterval(updateTime, 60000);

// Load pool on page load
window.addEventListener('DOMContentLoaded', function() {
    const data = JSON.parse(localStorage.getItem('jisorCampaignData'));
    if (data) {
        loadAcceptedPool(data);
    }
});

function loadAcceptedPool(data) {
    const pool = data.acceptedPool;
    const applications = data.applications;

    // Update badges
    document.getElementById('pool-badge').textContent = pool.length;
    document.getElementById('applications-badge').textContent = applications.length;

    // Update progress
    const campaign = data.campaign;
    const poolCurrent = pool.length;
    const poolRequired = campaign.requiredInfluencers;
    const poolPercentage = Math.round((poolCurrent / poolRequired) * 100);

    document.getElementById('pool-current').textContent = poolCurrent;
    document.getElementById('pool-required').textContent = poolRequired;
    document.getElementById('progress-bar').style.width = poolPercentage + '%';

    // Update counts
    const counts = {
        all: pool.length,
        awaiting: pool.filter(i => i.status === 'awaiting-signature').length,
        signed: pool.filter(i => i.status === 'contract-signed').length,
        paid: pool.filter(i => i.status === 'paid').length,
        content: pool.filter(i => i.status === 'content-submitted').length,
        done: pool.filter(i => i.status === 'approved').length
    };

    document.getElementById('count-all').textContent = counts.all;
    document.getElementById('count-awaiting').textContent = counts.awaiting;
    document.getElementById('count-signed').textContent = counts.signed;
    document.getElementById('count-paid').textContent = counts.paid;
    document.getElementById('count-content').textContent = counts.content;
    document.getElementById('count-done').textContent = counts.done;

    // Render pool
    renderPool(pool);
}

function renderPool(pool) {
    const container = document.getElementById('pool-container');

    // Filter pool
    const filtered = currentPoolFilter === 'all'
        ? pool
        : pool.filter(i => i.status === currentPoolFilter);

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                </div>
                <h3 class="empty-title">No influencers here</h3>
                <p class="empty-message">Accepted influencers will appear in this section.</p>
            </div>
        `;
        return;
    }

    // Group by status
    const groups = {
        'expired': { title: 'Expired - Need Replacement', icon: 'error', count: 0, items: [] },
        'awaiting-signature': { title: 'Awaiting Signature', icon: 'warning', count: 0, items: [] },
        'contract-signed': { title: 'Contract Signed', icon: 'info', count: 0, items: [] },
        'paid': { title: 'Paid - Awaiting Content', icon: 'success', count: 0, items: [] },
        'content-submitted': { title: 'Content Submitted - Review', icon: 'purple', count: 0, items: [] },
        'approved': { title: 'Approved & Completed', icon: 'success', count: 0, items: [] },
        'revision': { title: 'Revision Requested', icon: 'warning', count: 0, items: [] }
    };

    filtered.forEach(influencer => {
        if (groups[influencer.status]) {
            groups[influencer.status].items.push(influencer);
            groups[influencer.status].count++;
        }
    });

    // Render groups
    let html = '';
    Object.keys(groups).forEach((status, index) => {
        const group = groups[status];
        if (group.count > 0) {
            html += renderGroup(group, status, index + 1);
        }
    });

    container.innerHTML = html;
}

function renderGroup(group, status, delayIndex) {
    let html = `
        <div class="section-header fade-in delay-${delayIndex}">
            <div class="section-icon ${group.icon}">
                ${getSectionIcon(status)}
            </div>
            <span class="section-title">${group.title}</span>
            <span class="section-count">(${group.count})</span>
        </div>
        <div class="influencer-list">
    `;

    group.items.forEach((influencer, index) => {
        html += renderInfluencerCard(influencer, index + 1);
    });

    html += '</div>';
    return html;
}

function renderInfluencerCard(inf, delay) {
    const cardClass = inf.status === 'expired' ? 'influencer-card expired' : 'influencer-card';

    return `
        <div class="${cardClass} fade-in delay-${delay}">
            <div class="card-main">
                <div class="influencer-avatar" style="background: ${inf.gradient}">
                    ${inf.avatar}
                </div>
                <div class="card-content">
                    <div class="card-top-row">
                        <span class="influencer-name">${inf.name}</span>
                        <span class="card-price">${formatPrice(inf.price)}</span>
                    </div>
                    <div class="card-middle-row">
                        <span class="influencer-stats">${inf.followers} • ${inf.engagementRate} ER</span>
                        <div class="platform-icons">
                            ${inf.platforms.map(p => `
                                <span class="platform-dot ${p}">
                                    ${getPlatformIcon(p)}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                    <div class="status-row">
                        ${getStatusBadgeHTML(inf.status)}
                        ${getTimeLeftHTML(inf)}
                    </div>
                </div>
            </div>
            ${getPaymentIndicatorHTML(inf)}
            ${getActionsHTML(inf)}
        </div>
    `;
}

function getSectionIcon(status) {
    const icons = {
        'expired': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
        'awaiting-signature': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        'contract-signed': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
        'paid': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
        'content-submitted': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
        'approved': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
        'revision': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>'
    };
    return icons[status] || '';
}

function getStatusBadgeHTML(status) {
    const badges = {
        'awaiting-signature': '<span class="status-badge awaiting-signature">⏳ Awaiting Signature</span>',
        'expired': '<span class="status-badge expired">⛔ Didn\'t Sign in Time</span>',
        'contract-signed': '<span class="status-badge contract-signed">📝 Contract Signed</span>',
        'paid': '<span class="status-badge paid">💰 Paid (In Escrow)</span>',
        'content-submitted': '<span class="status-badge content-submitted">📤 Content Submitted</span>',
        'approved': '<span class="status-badge approved">✅ Approved</span>',
        'revision': '<span class="status-badge revision">🔄 Revision Requested</span>'
    };
    return badges[status] || '';
}

function getTimeLeftHTML(inf) {
    if (inf.status === 'awaiting-signature' && inf.timeLeftHours) {
        const urgent = inf.timeLeftHours < 24 ? 'urgent' : '';
        return `
            <span class="time-left ${urgent}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                </svg>
                ${inf.timeLeftHours}h left
            </span>
        `;
    }
    return '';
}

function getPaymentIndicatorHTML(inf) {
    if (inf.status === 'expired') return '';

    const isPaid = inf.paid;
    const iconClass = isPaid ? 'paid' : 'unpaid';
    const textClass = isPaid ? 'paid' : 'unpaid';
    const text = isPaid ? `${formatPrice(inf.price)} in escrow` : 'Not paid yet';
    const icon = isPaid
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>';

    return `
        <div class="payment-indicator">
            <div class="payment-icon ${iconClass}">
                ${icon}
            </div>
            <span class="payment-text ${textClass}">${text}</span>
        </div>
    `;
}

function getActionsHTML(inf) {
    let html = '<div class="card-actions">';

    switch(inf.status) {
        case 'awaiting-signature':
            html += `
                <button class="action-btn secondary" onclick="alert('Opening chat...')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    Message
                </button>
                <button class="action-btn danger" onclick="cancelDeal(${inf.id})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    Cancel
                </button>
            `;
            break;

        case 'expired':
            html += `
                <button class="replace-btn" onclick="replaceInfluencer(${inf.id})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 2v6h-6"/>
                        <path d="M3 12a9 9 0 0 1 15-6.7L21 8"/>
                        <path d="M3 22v-6h6"/>
                        <path d="M21 12a9 9 0 0 1-15 6.7L3 16"/>
                    </svg>
                    Replace with Another Influencer
                </button>
            `;
            break;

        case 'contract-signed':
            html += `
                <button class="action-btn secondary">View Contract</button>
                <button class="action-btn primary" onclick="payInfluencer(${inf.id})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                        <line x1="1" y1="10" x2="23" y2="10"/>
                    </svg>
                    Pay Now
                </button>
            `;
            break;

        case 'paid':
            html += `
                <button class="action-btn secondary" onclick="alert('Opening chat...')">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    Message
                </button>
                <button class="action-btn secondary" onclick="viewInfluencerDetails(${inf.id})">View Details</button>
            `;
            break;

        case 'content-submitted':
            html += `
                <button class="action-btn warning" onclick="requestRevision(${inf.id})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                    </svg>
                    Request Revision
                </button>
                <button class="action-btn success" onclick="approveContent(${inf.id})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Approve
                </button>
            `;
            break;

        case 'approved':
            html += `
                <button class="action-btn secondary" onclick="viewInfluencerDetails(${inf.id})">View Details</button>
            `;
            break;

        case 'revision':
            html += `
                <button class="action-btn secondary" onclick="alert('Opening chat...')">Message</button>
                <button class="action-btn secondary" onclick="viewInfluencerDetails(${inf.id})">View Details</button>
            `;
            break;
    }

    html += '</div>';
    return html;
}

function filterPool(filter) {
    currentPoolFilter = filter;

    // Update active chip
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.remove('active');
        if (chip.dataset.filter === filter) {
            chip.classList.add('active');
        }
    });

    // Reload pool
    const data = JSON.parse(localStorage.getItem('jisorCampaignData'));
    if (data) {
        renderPool(data.acceptedPool);
    }
}

// Make function global
window.filterPool = filterPool;
