// JISOR - Main Application JavaScript

// Initialize campaign data if not exists
if (!localStorage.getItem('jisorCampaignData')) {
    // Data will be loaded from campaign-data.js
    console.log('Campaign data loaded from campaign-data.js');
}

// Helper Functions
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
}

function formatPrice(price) {
    return price.toLocaleString() + ' SAR';
}

function getTimeAgo(hours) {
    if (hours < 1) {
        return 'Just now';
    } else if (hours === 1) {
        return '1 hour ago';
    } else if (hours < 24) {
        return hours + ' hours ago';
    } else {
        const days = Math.floor(hours / 24);
        return days === 1 ? '1 day ago' : days + ' days ago';
    }
}

function getPlatformIcon(platform) {
    const icons = {
        instagram: `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
        </svg>`,
        tiktok: `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>`
    };
    return icons[platform] || '';
}

function getStatusBadge(status) {
    const badges = {
        'pending': '<span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Pending',
        'rejected': '<span class="w-1.5 h-1.5 rounded-full bg-red-500"></span> Rejected',
        'awaiting-signature': '<span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Awaiting Signature',
        'expired': '<span class="w-1.5 h-1.5 rounded-full bg-red-500"></span> Expired',
        'contract-signed': '<span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Contract Signed',
        'paid': '<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Paid',
        'content-submitted': '<span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Content Submitted',
        'approved': '<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Approved',
        'revision': '<span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Revision'
    };
    return badges[status] || status;
}

// Application Actions
function acceptApplication(appId) {
    const data = JSON.parse(localStorage.getItem('jisorCampaignData'));
    const application = data.applications.find(a => a.id === appId);

    if (application && confirm(`Accept ${application.name}'s proposal for ${formatPrice(application.price)}?`)) {
        // Remove from applications
        data.applications = data.applications.filter(a => a.id !== appId);

        // Add to accepted pool
        const poolInfluencer = {
            id: 100 + data.acceptedPool.length + 1,
            name: application.name,
            avatar: application.avatar,
            verified: application.verified,
            followers: application.followers,
            engagementRate: application.engagementRate,
            rating: application.rating,
            status: 'awaiting-signature',
            price: application.price,
            paid: false,
            platforms: application.platforms,
            timeLeftHours: 48,
            acceptedDate: new Date().toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }),
            gradient: application.gradient,
            deliverables: application.deliverables.map(d => ({
                type: d.type,
                count: d.count,
                status: 'pending'
            }))
        };

        data.acceptedPool.push(poolInfluencer);
        localStorage.setItem('jisorCampaignData', JSON.stringify(data));

        alert(`✅ ${application.name} has been accepted! They now have 48 hours to sign the contract.`);
        location.reload();
    }
}

function rejectApplication(appId) {
    const data = JSON.parse(localStorage.getItem('jisorCampaignData'));
    const application = data.applications.find(a => a.id === appId);

    if (application && confirm(`Reject ${application.name}'s proposal?`)) {
        application.status = 'rejected';
        localStorage.setItem('jisorCampaignData', JSON.stringify(data));

        alert(`❌ ${application.name}'s proposal has been rejected.`);
        location.reload();
    }
}

function viewProposal(appId) {
    window.location.href = `proposal-details.html?id=${appId}`;
}

// Pool Actions
function payInfluencer(poolId) {
    const data = JSON.parse(localStorage.getItem('jisorCampaignData'));
    const influencer = data.acceptedPool.find(i => i.id === poolId);

    if (influencer && confirm(`Pay ${formatPrice(influencer.price)} to ${influencer.name}?\n\nMoney will be held in escrow until content is approved.`)) {
        influencer.status = 'paid';
        influencer.paid = true;
        influencer.paidDate = new Date().toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });

        // Set due date (7 days from now)
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 7);
        influencer.dueDate = dueDate.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        localStorage.setItem('jisorCampaignData', JSON.stringify(data));

        alert(`✅ Payment of ${formatPrice(influencer.price)} has been secured in escrow for ${influencer.name}.`);
        location.reload();
    }
}

function approveContent(poolId) {
    const data = JSON.parse(localStorage.getItem('jisorCampaignData'));
    const influencer = data.acceptedPool.find(i => i.id === poolId);

    if (influencer && confirm(`Approve ${influencer.name}'s content?\n\nPayment of ${formatPrice(influencer.price)} will be released to the influencer.`)) {
        influencer.status = 'approved';
        influencer.approvedDate = new Date().toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        // Update deliverables status
        if (influencer.deliverables) {
            influencer.deliverables = influencer.deliverables.map(d => ({
                ...d,
                status: 'approved'
            }));
        }

        localStorage.setItem('jisorCampaignData', JSON.stringify(data));

        alert(`✅ Content approved! Payment of ${formatPrice(influencer.price)} has been released to ${influencer.name}.`);
        location.reload();
    }
}

function requestRevision(poolId) {
    const data = JSON.parse(localStorage.getItem('jisorCampaignData'));
    const influencer = data.acceptedPool.find(i => i.id === poolId);

    if (influencer) {
        const feedback = prompt(`Request revision from ${influencer.name}:\n\nPlease provide your feedback:`);
        if (feedback) {
            influencer.status = 'revision';
            influencer.revisionFeedback = feedback;
            localStorage.setItem('jisorCampaignData', JSON.stringify(data));

            alert(`📝 Revision request sent to ${influencer.name}.`);
            location.reload();
        }
    }
}

function replaceInfluencer(poolId) {
    const data = JSON.parse(localStorage.getItem('jisorCampaignData'));
    const influencer = data.acceptedPool.find(i => i.id === poolId);

    if (influencer && confirm(`Replace ${influencer.name}?\n\nYou'll be able to select a new influencer from pending applications.`)) {
        // Remove from pool
        data.acceptedPool = data.acceptedPool.filter(i => i.id !== poolId);
        localStorage.setItem('jisorCampaignData', JSON.stringify(data));

        alert(`🔄 ${influencer.name} has been removed. You can now select a replacement from applications.`);
        window.location.href = 'applications.html';
    }
}

function cancelDeal(poolId) {
    const data = JSON.parse(localStorage.getItem('jisorCampaignData'));
    const influencer = data.acceptedPool.find(i => i.id === poolId);

    if (influencer && confirm(`⚠️ Cancel deal with ${influencer.name}?\n\nThis action cannot be undone.`)) {
        const reason = prompt('Please provide a reason for cancellation:');
        if (reason) {
            data.acceptedPool = data.acceptedPool.filter(i => i.id !== poolId);
            localStorage.setItem('jisorCampaignData', JSON.stringify(data));

            alert(`❌ Deal with ${influencer.name} has been cancelled.`);
            location.reload();
        }
    }
}

function viewInfluencerDetails(poolId) {
    window.location.href = `influencer-details.html?id=${poolId}`;
}

// Export functions to global scope
window.acceptApplication = acceptApplication;
window.rejectApplication = rejectApplication;
window.viewProposal = viewProposal;
window.payInfluencer = payInfluencer;
window.approveContent = approveContent;
window.requestRevision = requestRevision;
window.replaceInfluencer = replaceInfluencer;
window.cancelDeal = cancelDeal;
window.viewInfluencerDetails = viewInfluencerDetails;
window.formatNumber = formatNumber;
window.formatPrice = formatPrice;
window.getTimeAgo = getTimeAgo;
window.getPlatformIcon = getPlatformIcon;
window.getStatusBadge = getStatusBadge;
