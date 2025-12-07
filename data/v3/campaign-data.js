// JISOR Campaign Data Storage
const campaignData = {
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
            coverLetter: "Hello! I'm really excited about this Ramadan food products campaign. As a lifestyle and food content creator, I've worked with several food brands in the past and understand what resonates with audiences during the holy month.",
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
            price: 6500,
            originalPrice: null,
            priceUpdated: false,
            platforms: ["instagram"],
            appliedHours: 5,
            coverLetter: "I specialize in beauty and lifestyle content with a focus on authentic engagement. My audience is highly responsive during Ramadan.",
            deliverables: [
                { type: "Instagram Reels", count: 3, description: "30-60 seconds" },
                { type: "Instagram Stories", count: 5, description: "Story frames" }
            ],
            timeline: "5 days",
            gradient: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)"
        },
        {
            id: 3,
            name: "Khalid Omar",
            avatar: "KO",
            verified: false,
            followers: "45K",
            engagementRate: "2.1%",
            rating: 3.8,
            status: "rejected",
            niches: ["Tech", "Gaming"],
            price: 15000,
            originalPrice: null,
            priceUpdated: false,
            platforms: ["tiktok"],
            appliedHours: 24,
            coverLetter: "Tech reviewer with experience in product reviews.",
            deliverables: [
                { type: "TikTok Video", count: 2, description: "Review format" }
            ],
            timeline: "10 days",
            gradient: "linear-gradient(135deg, #F59E0B 0%, #F97316 100%)"
        },
        {
            id: 4,
            name: "Noura Abdullah",
            avatar: "NA",
            verified: true,
            followers: "220K",
            engagementRate: "5.8%",
            rating: 4.9,
            status: "pending",
            niches: ["Food", "Recipes", "Lifestyle"],
            price: 8500,
            originalPrice: null,
            priceUpdated: false,
            platforms: ["instagram", "tiktok"],
            appliedHours: 3,
            coverLetter: "Food content creator specializing in Ramadan recipes and cultural content.",
            deliverables: [
                { type: "Instagram Reels", count: 2, description: "Recipe videos" },
                { type: "Instagram Stories", count: 4, description: "Behind the scenes" },
                { type: "TikTok Video", count: 1, description: "Quick recipe" }
            ],
            timeline: "6 days",
            gradient: "linear-gradient(135deg, #EC4899 0%, #F472B6 100%)"
        }
    ],

    acceptedPool: [
        {
            id: 101,
            name: "Ahmed Ali",
            avatar: "AA",
            verified: true,
            followers: "150K",
            engagementRate: "3.2%",
            rating: 4.8,
            status: "awaiting-signature",
            price: 5000,
            paid: false,
            platforms: ["instagram", "tiktok"],
            timeLeftHours: 23,
            acceptedDate: "Nov 29, 2025 - 10:30 AM",
            gradient: "linear-gradient(135deg, #10B981, #34D399)",
            deliverables: [
                { type: "Instagram Reels", count: 2, status: "pending" },
                { type: "Instagram Stories", count: 3, status: "pending" }
            ]
        },
        {
            id: 102,
            name: "Mohammed Saeed",
            avatar: "MS",
            verified: false,
            followers: "95K",
            engagementRate: "2.8%",
            rating: 4.2,
            status: "expired",
            price: 7000,
            paid: false,
            platforms: ["instagram"],
            timeLeftHours: 0,
            acceptedDate: "Nov 27, 2025 - 2:00 PM",
            gradient: "linear-gradient(135deg, #EF4444, #F87171)",
            deliverables: []
        },
        {
            id: 103,
            name: "Sara Abdullah",
            avatar: "SA",
            verified: true,
            followers: "200K",
            engagementRate: "4.5%",
            rating: 4.9,
            status: "contract-signed",
            price: 6500,
            paid: false,
            platforms: ["instagram", "tiktok"],
            signedDate: "Nov 28, 2025 - 3:20 PM",
            gradient: "linear-gradient(135deg, #3B82F6, #60A5FA)",
            deliverables: [
                { type: "Instagram Reels", count: 2, status: "pending" },
                { type: "Instagram Stories", count: 3, status: "pending" },
                { type: "TikTok Video", count: 1, status: "pending" }
            ]
        },
        {
            id: 104,
            name: "Noura Hassan",
            avatar: "NH",
            verified: true,
            followers: "180K",
            engagementRate: "5.2%",
            rating: 4.9,
            status: "paid",
            price: 8000,
            paid: true,
            platforms: ["instagram"],
            paidDate: "Nov 29, 2025 - 9:15 AM",
            dueDate: "Dec 5, 2025",
            gradient: "linear-gradient(135deg, #10B981, #34D399)",
            deliverables: [
                { type: "Instagram Reels", count: 2, status: "pending" },
                { type: "Instagram Stories", count: 3, status: "pending" }
            ],
            timeline: [
                { step: "Proposal Accepted", completed: true, date: "Nov 28, 2025 • 10:30 AM" },
                { step: "Contract Signed", completed: true, date: "Nov 28, 2025 • 2:45 PM" },
                { step: "Payment Completed", completed: true, date: "Nov 29, 2025 • 9:15 AM" },
                { step: "Awaiting Content", completed: false, date: "Due by Dec 5, 2025", current: true },
                { step: "Content Review", completed: false, date: "Pending" },
                { step: "Completed", completed: false, date: "Pending" }
            ]
        },
        {
            id: 105,
            name: "Fatima Al-Rashid",
            avatar: "FA",
            verified: true,
            followers: "350K",
            engagementRate: "6.1%",
            rating: 5.0,
            status: "content-submitted",
            price: 12000,
            paid: true,
            platforms: ["instagram", "tiktok"],
            submittedDate: "Nov 30, 2025 - 1:00 PM",
            gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
            deliverables: [
                { type: "Instagram Reels", count: 3, status: "submitted" },
                { type: "TikTok Video", count: 2, status: "submitted" }
            ]
        },
        {
            id: 106,
            name: "Yusuf Ibrahim",
            avatar: "YI",
            verified: false,
            followers: "95K",
            engagementRate: "3.8%",
            rating: 4.5,
            status: "contract-signed",
            price: 18000,
            paid: false,
            platforms: ["instagram"],
            signedDate: "Nov 29, 2025 - 11:00 AM",
            gradient: "linear-gradient(135deg, #7C3AED, #A78BFA)",
            deliverables: []
        },
        {
            id: 107,
            name: "Nora Fahad",
            avatar: "NF",
            verified: true,
            followers: "150K",
            engagementRate: "4.5%",
            rating: 4.8,
            status: "awaiting-signature",
            price: 22000,
            paid: false,
            platforms: ["instagram", "tiktok"],
            timeLeftHours: 35,
            gradient: "linear-gradient(135deg, #10B981, #34D399)",
            deliverables: []
        },
        {
            id: 108,
            name: "Fatima Hassan",
            avatar: "FH",
            verified: true,
            followers: "200K",
            engagementRate: "5.1%",
            rating: 4.9,
            status: "approved",
            price: 30000,
            paid: true,
            platforms: ["instagram", "tiktok"],
            approvedDate: "Nov 30, 2025",
            gradient: "linear-gradient(135deg, #EC4899, #F472B6)",
            deliverables: [
                { type: "Instagram Reels", count: 4, status: "approved" },
                { type: "Instagram Stories", count: 5, status: "approved" }
            ]
        }
    ]
};

// Save to localStorage
localStorage.setItem('jisorCampaignData', JSON.stringify(campaignData));
