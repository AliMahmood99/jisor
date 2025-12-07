// JISOR Campaign Data - Direct Data (No localStorage)
window.campaignData = {
    campaign: {
        id: "MASS-2025-00089",
        name: "Ramadan Food Products Campaign",
        status: "active",
        publishDate: "1 Ramadan 1446",
        daysLeft: 3,
        requiredInfluencers: 25,
        totalBudget: 125000,
        budgetCommitted: 90000,
        budgetPending: 15000,
        budgetAvailable: 20000
    },

    applications: [
        {
            id: 1,
            name: "Ahmed Ali",
            avatar: "AA",
            verified: true,
            followers: "150K",
            engagementRate: "3.2%",
            rating: 4.8,
            status: "pending",
            niches: ["Fashion", "Lifestyle"],
            price: 4000,
            originalPrice: 5000,
            priceUpdated: true,
            platforms: ["instagram", "tiktok"],
            appliedHours: 2,
            coverLetter: "Hello! I'm really excited about this Ramadan food products campaign.",
            deliverables: [
                { type: "Instagram Reels", count: 2, description: "30-60 seconds video content" },
                { type: "Instagram Stories", count: 3, description: "Story frames with swipe-up" },
                { type: "TikTok Video", count: 1, description: "Trending format video" }
            ],
            timeline: "7 days",
            gradient: "linear-gradient(135deg, #10B981 0%, #34D399 100%)"
        },
        {
            id: 2,
            name: "Sara Mohammed",
            avatar: "SM",
            verified: true,
            followers: "89K",
            engagementRate: "4.1%",
            rating: 4.9,
            status: "pending",
            niches: ["Beauty", "Skincare"],
            price: 3500,
            originalPrice: 3500,
            priceUpdated: false,
            platforms: ["instagram"],
            appliedHours: 5,
            coverLetter: "Excited to collaborate on this campaign!",
            deliverables: [
                { type: "Instagram Reels", count: 1, description: "60 seconds video" },
                { type: "Instagram Posts", count: 2, description: "Feed posts" }
            ],
            timeline: "5 days",
            gradient: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)"
        },
        {
            id: 3,
            name: "Khalid Hassan",
            avatar: "KH",
            verified: false,
            followers: "45K",
            engagementRate: "5.2%",
            rating: 4.6,
            status: "pending",
            niches: ["Food", "Travel"],
            price: 2500,
            originalPrice: 3000,
            priceUpdated: true,
            platforms: ["tiktok"],
            appliedHours: 12,
            coverLetter: "I love food content!",
            deliverables: [
                { type: "TikTok Video", count: 3, description: "Short videos" }
            ],
            timeline: "4 days",
            gradient: "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)"
        },
        {
            id: 4,
            name: "Fatima Nasser",
            avatar: "FN",
            verified: true,
            followers: "120K",
            engagementRate: "3.8%",
            rating: 4.2,
            status: "rejected",
            niches: ["Tech", "Gaming"],
            price: 5500,
            originalPrice: 5500,
            priceUpdated: false,
            platforms: ["instagram", "tiktok"],
            appliedHours: 24,
            coverLetter: "Looking forward to working together!",
            deliverables: [
                { type: "Instagram Reels", count: 2, description: "Tech reviews" }
            ],
            timeline: "6 days",
            gradient: "linear-gradient(135deg, #EF4444 0%, #F87171 100%)"
        }
    ],

    acceptedPool: [
        {
            id: 101,
            name: "Layla Ahmed",
            avatar: "LA",
            followers: "200K",
            engagementRate: "4.5%",
            platforms: ["instagram"],
            price: 5000,
            status: "awaiting-signature",
            timeLeftHours: 18,
            paid: false,
            gradient: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)"
        },
        {
            id: 102,
            name: "Omar Youssef",
            avatar: "OY",
            followers: "175K",
            engagementRate: "3.9%",
            platforms: ["tiktok"],
            price: 4500,
            status: "awaiting-signature",
            timeLeftHours: 42,
            paid: false,
            gradient: "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)"
        },
        {
            id: 103,
            name: "Nour Ibrahim",
            avatar: "NI",
            followers: "95K",
            engagementRate: "5.1%",
            platforms: ["instagram", "tiktok"],
            price: 3800,
            status: "expired",
            paid: false,
            gradient: "linear-gradient(135deg, #6B7280 0%, #9CA3AF 100%)"
        },
        {
            id: 104,
            name: "Huda Salem",
            avatar: "HS",
            followers: "130K",
            engagementRate: "4.2%",
            platforms: ["instagram"],
            price: 4200,
            status: "contract-signed",
            paid: false,
            gradient: "linear-gradient(135deg, #14B8A6 0%, #2DD4BF 100%)"
        },
        {
            id: 105,
            name: "Youssef Ali",
            avatar: "YA",
            followers: "88K",
            engagementRate: "4.8%",
            platforms: ["tiktok"],
            price: 3200,
            status: "contract-signed",
            paid: false,
            gradient: "linear-gradient(135deg, #F97316 0%, #FB923C 100%)"
        },
        {
            id: 106,
            name: "Amira Fahd",
            avatar: "AF",
            followers: "215K",
            engagementRate: "3.6%",
            platforms: ["instagram"],
            price: 5500,
            status: "paid",
            paid: true,
            gradient: "linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)"
        },
        {
            id: 107,
            name: "Zain Khaled",
            avatar: "ZK",
            followers: "142K",
            engagementRate: "4.4%",
            platforms: ["tiktok"],
            price: 4100,
            status: "content-submitted",
            paid: true,
            gradient: "linear-gradient(135deg, #84CC16 0%, #A3E635 100%)"
        },
        {
            id: 108,
            name: "Rana Majed",
            avatar: "RM",
            followers: "99K",
            engagementRate: "5.3%",
            platforms: ["instagram"],
            price: 3600,
            status: "approved",
            paid: true,
            gradient: "linear-gradient(135deg, #10B981 0%, #34D399 100%)"
        }
    ]
};

// Initialize the app when DOM is ready
console.log('🚀 Data loaded:', {
    applications: window.campaignData.applications.length,
    acceptedPool: window.campaignData.acceptedPool.length
});

// Load data when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('📊 DOM Ready - Loading all data...');
        if (typeof loadOverview === 'function') {
            loadOverview(window.campaignData);
            loadApplicationsTab(window.campaignData);
            loadPoolTab(window.campaignData);
            console.log('✅ All data loaded successfully!');
        } else {
            console.error('❌ Load functions not found');
        }
    });
} else {
    console.log('📊 DOM Already Ready - Loading all data...');
    if (typeof loadOverview === 'function') {
        loadOverview(window.campaignData);
        loadApplicationsTab(window.campaignData);
        loadPoolTab(window.campaignData);
        console.log('✅ All data loaded successfully!');
    } else {
        // Delay slightly to ensure functions are defined
        setTimeout(function() {
            if (typeof loadOverview === 'function') {
                loadOverview(window.campaignData);
                loadApplicationsTab(window.campaignData);
                loadPoolTab(window.campaignData);
                console.log('✅ All data loaded successfully!');
            }
        }, 100);
    }
}
