// Realistic Campaign Data Model
// All possible states for HYBRID, INVITE ONLY, and PUBLIC campaigns

window.campaignsData = [
  // ============================================
  // HYBRID CAMPAIGNS - 4 States
  // ============================================

  // State 1: Has both manual invites AND applications
  {
    id: 'CAMP-2025-00089',
    name: 'Ramadan Food Products Campaign',
    type: 'hybrid',
    status: 'active',
    createdDate: '2025-11-15',
    deadline: '2025-12-25',
    daysLeft: 3,

    invited: [
      {
        id: 'INF-001',
        name: 'Sarah Ahmed',
        avatar: 'S',
        platform: 'instagram',
        followers: 95000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        source: 'application', // ← Applied & accepted

        // Contract & Payment
        contractAmount: 60000,
        contractStatus: 'completed',
        paymentStatus: 'paid',
        brandSignedAt: '2025-11-18T10:30:00',
        influencerSignedAt: '2025-11-19T14:20:00',

        // Content
        contentStatus: 'submitted',
        contentDueDate: '2025-12-15',
        contentSubmittedAt: '2025-12-03T09:15:00',
        submittedHoursAgo: 2,
        deliverables: ['Instagram Reel ×1', 'Story ×3']
      },
      {
        id: 'INF-002',
        name: 'Ahmed Ali',
        avatar: 'A',
        platform: 'tiktok',
        followers: 45000,
        status: 'pending',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        source: 'manual', // ← Invited by you

        // Contract & Payment - Awaiting Payment
        contractAmount: 60000,
        contractStatus: 'awaiting-payment',
        paymentStatus: 'pending',
        deliverables: ['TikTok Video ×1', 'Story ×2']
      },
      {
        id: 'INF-003',
        name: 'Nora Hassan',
        avatar: 'N',
        platform: 'youtube',
        followers: 120000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        source: 'application', // ← Applied & accepted

        // Contract & Payment - Awaiting Brand Signature
        contractAmount: 60000,
        contractStatus: 'awaiting-brand-signature',
        paymentStatus: 'paid',
        paidAt: '2025-12-02T16:45:00',
        deliverables: ['YouTube Video ×1']
      },
      {
        id: 'INF-004',
        name: 'Mohammed Khalid',
        avatar: 'M',
        platform: 'instagram',
        followers: 67000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        source: 'application', // ← Applied & accepted

        // Contract & Payment - Awaiting Influencer Signature
        contractAmount: 60000,
        contractStatus: 'awaiting-influencer-signature',
        paymentStatus: 'paid',
        paidAt: '2025-12-01T12:00:00',
        brandSignedAt: '2025-12-01T14:30:00',
        influencerSignatureDeadline: '2025-12-15T14:30:00',
        hoursLeftToSign: 48,
        deliverables: ['Instagram Reel ×2', 'Story ×5']
      },
      {
        id: 'INF-005',
        name: 'Layla Mohammed',
        avatar: 'L',
        platform: 'tiktok',
        followers: 82000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        source: 'manual', // ← Invited by you

        // Contract & Payment - Creating Content
        contractAmount: 60000,
        contractStatus: 'signed',
        paymentStatus: 'paid',
        brandSignedAt: '2025-11-20T10:00:00',
        influencerSignedAt: '2025-11-21T09:30:00',
        contentStatus: 'creating',
        contentDueDate: '2025-12-15',
        deliverables: ['TikTok Video ×1', 'Story ×3']
      },
      {
        id: 'INF-006',
        name: 'Fatima Ali',
        avatar: 'F',
        platform: 'instagram',
        followers: 110000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        source: 'application', // ← Applied & accepted

        // Contract & Payment - Content Revision
        contractAmount: 60000,
        contractStatus: 'signed',
        paymentStatus: 'paid',
        contentStatus: 'revision',
        contentDueDate: '2025-12-18',
        lastRevisionAt: '2025-12-02T15:30:00',
        revisionRequestedAgo: '1d ago',
        revisionReason: 'Please adjust product placement in first 3 seconds',
        deliverables: ['Instagram Reel ×1', 'Story ×2']
      },
      {
        id: 'INF-007',
        name: 'Omar Hassan',
        avatar: 'O',
        platform: 'youtube',
        followers: 95000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        source: 'manual', // ← Invited by you

        // Signature Expired
        contractAmount: 60000,
        contractStatus: 'signature-expired',
        paymentStatus: 'paid',
        brandSignedAt: '2025-11-25T10:00:00',
        influencerSignatureDeadline: '2025-11-27T10:00:00',
        hoursPassedDeadline: 48,
        deliverables: ['YouTube Video ×1']
      },
      {
        id: 'INF-008',
        name: 'Rania Khaled',
        avatar: 'R',
        platform: 'instagram',
        followers: 78000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        source: 'application', // ← Applied & accepted

        // Campaign Completed
        contractAmount: 60000,
        contractStatus: 'completed',
        paymentStatus: 'paid',
        contentStatus: 'approved',
        completedAt: '2025-11-28T16:00:00',
        contentUrl: '#',
        deliverables: ['Instagram Reel ×1', 'Story ×3'],
        performance: {
          reach: 125000,
          engagement: 8500,
          views: 98000
        }
      },
      // NEW: Applicants Ready to Pay (for Bulk Payment CTA)
      {
        id: 'INF-009',
        name: 'Sara Abdullah',
        avatar: 'S',
        platform: 'tiktok',
        followers: 200000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        source: 'application',
        avgEngagement: 4.5,
        contractAmount: 6500,
        contractStatus: 'signed',
        paymentStatus: 'pending',
        brandSignedAt: '2025-12-01T10:00:00',
        influencerSignedAt: '2025-12-02T14:30:00',
        deliverables: ['TikTok Video ×1', 'Story ×2']
      },
      {
        id: 'INF-010',
        name: 'Noura Hassan',
        avatar: 'N',
        platform: 'instagram',
        followers: 180000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        source: 'application',
        avgEngagement: 5.2,
        contractAmount: 8000,
        contractStatus: 'signed',
        paymentStatus: 'pending',
        brandSignedAt: '2025-12-01T11:00:00',
        influencerSignedAt: '2025-12-02T09:00:00',
        deliverables: ['Instagram Reel ×1', 'Story ×3']
      },
      {
        id: 'INF-011',
        name: 'Layla Ahmed',
        avatar: 'L',
        platform: 'tiktok',
        followers: 165000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        source: 'application',
        avgEngagement: 4.8,
        contractAmount: 7500,
        contractStatus: 'signed',
        paymentStatus: 'pending',
        brandSignedAt: '2025-12-01T15:00:00',
        influencerSignedAt: '2025-12-02T16:00:00',
        deliverables: ['TikTok Video ×2', 'Story ×4']
      },
      {
        id: 'INF-012',
        name: 'Maha Salem',
        avatar: 'M',
        platform: 'instagram',
        followers: 145000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        source: 'application',
        avgEngagement: 6.1,
        contractAmount: 9500,
        contractStatus: 'signed',
        paymentStatus: 'pending',
        brandSignedAt: '2025-12-02T10:00:00',
        influencerSignedAt: '2025-12-02T18:00:00',
        deliverables: ['Instagram Reel ×1', 'Story ×2']
      },
      {
        id: 'INF-013',
        name: 'Aisha Youssef',
        avatar: 'A',
        platform: 'youtube',
        followers: 220000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        source: 'application',
        avgEngagement: 3.8,
        contractAmount: 11000,
        contractStatus: 'signed',
        paymentStatus: 'pending',
        brandSignedAt: '2025-12-02T12:00:00',
        influencerSignedAt: '2025-12-02T20:00:00',
        deliverables: ['YouTube Video ×1']
      }
    ],

    // Applications (detailed)
    applicationsData: [
      {
        id: 'APP-001',
        name: 'Fatima Hassan',
        avatar: 'F',
        platform: 'tiktok',
        followers: 125000,
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',

        proposedAmount: 45000,
        deliverables: ['TikTok Video ×1', 'Story ×2'],

        rating: 4.8,
        completedCampaigns: 23,
        avgReach: 250000,
        avgEngagement: 8.2,

        appliedAt: '2025-12-02T10:30:00',
        hoursAgo: 5,
        status: 'pending'
      },
      {
        id: 'APP-002',
        name: 'Abdullah Omar',
        avatar: 'A',
        platform: 'instagram',
        followers: 89000,
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',

        proposedAmount: 38000,
        deliverables: ['Instagram Reel ×1', 'Story ×3'],

        rating: 4.6,
        completedCampaigns: 15,
        avgReach: 180000,
        avgEngagement: 7.5,

        appliedAt: '2025-12-01T15:20:00',
        hoursAgo: 1,
        status: 'pending'
      },
      {
        id: 'APP-003',
        name: 'Noura Al-Rashid',
        avatar: 'N',
        platform: 'tiktok',
        followers: 156000,
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',

        proposedAmount: 52000,
        deliverables: ['TikTok Video ×2', 'Instagram Reel ×1'],

        rating: 4.9,
        completedCampaigns: 47,
        avgReach: 320000,
        avgEngagement: 9.1,

        appliedAt: '2025-11-30T09:45:00',
        hoursAgo: 2,
        status: 'pending'
      },
      {
        id: 'APP-004',
        name: 'Khalid Mohammed',
        avatar: 'K',
        platform: 'youtube',
        followers: 210000,
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',

        proposedAmount: 65000,
        deliverables: ['YouTube Video ×1'],

        rating: 4.7,
        completedCampaigns: 31,
        avgReach: 450000,
        avgEngagement: 6.8,

        appliedAt: '2025-11-29T14:15:00',
        hoursAgo: 3,
        status: 'pending'
      },
      {
        id: 'APP-005',
        name: 'Mona Saeed',
        avatar: 'M',
        platform: 'instagram',
        followers: 95000,
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',

        proposedAmount: 42000,
        deliverables: ['Instagram Reel ×1', 'Story ×5'],

        rating: 4.5,
        completedCampaigns: 19,
        avgReach: 195000,
        avgEngagement: 7.9,

        appliedAt: '2025-11-28T11:00:00',
        hoursAgo: 6,
        status: 'pending'
      },
      {
        id: 'APP-006',
        name: 'Youssef Ibrahim',
        avatar: 'Y',
        platform: 'tiktok',
        followers: 178000,
        gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',

        proposedAmount: 58000,
        deliverables: ['TikTok Video ×2', 'Story ×3'],

        rating: 4.8,
        completedCampaigns: 38,
        avgReach: 380000,
        avgEngagement: 8.7,

        appliedAt: '2025-11-27T16:30:00',
        hoursAgo: 8,
        status: 'pending'
      },
      {
        id: 'APP-007',
        name: 'Hala Mustafa',
        avatar: 'H',
        platform: 'instagram',
        followers: 112000,
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',

        proposedAmount: 48000,
        deliverables: ['Instagram Reel ×2', 'Story ×4'],

        rating: 4.6,
        completedCampaigns: 26,
        avgReach: 235000,
        avgEngagement: 7.3,

        appliedAt: '2025-11-26T09:20:00',
        hoursAgo: 12,
        status: 'pending'
      }
    ],

    applications: {
      pending: 7,
      reviewed: 5,
      accepted: 3,
      rejected: 2,
      total: 17
    },

    settings: {
      targetInfluencers: 25,
      budget: 500000,
      maxBudgetPerInfluencer: 8000,
      tiers: ['10k-50k', '50k-200k'],
      niches: ['food', 'lifestyle', 'family']
    },

    progress: 32
  },

  // State 2: Manual invites only (no applications yet)
  {
    id: 'CAMP-2025-00124',
    name: 'Product Launch Q4',
    type: 'hybrid',
    status: 'active',
    createdDate: '2025-11-20',
    deadline: '2025-12-30',
    daysLeft: 8,

    invited: [
      {
        name: 'Layla Mohammed',
        avatar: 'L',
        platform: 'instagram',
        followers: 156000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
      },
      {
        name: 'Khalid Omar',
        avatar: 'K',
        platform: 'instagram',
        followers: 89000,
        status: 'pending',
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
      }
    ],

    applications: {
      pending: 0,
      reviewed: 0,
      accepted: 0,
      rejected: 0,
      total: 0
    },

    settings: {
      targetInfluencers: 10,
      budget: 50000,
      maxBudgetPerInfluencer: 6000
    },

    progress: 20
  },

  // State 3: Applications only (no manual invites yet)
  {
    id: 'CAMP-2025-00156',
    name: 'Summer Fashion Collection',
    type: 'hybrid',
    status: 'active',
    createdDate: '2025-11-18',
    deadline: '2025-12-28',
    daysLeft: 6,

    invited: [],

    applications: {
      pending: 18,
      reviewed: 8,
      accepted: 4,
      rejected: 4,
      total: 30
    },

    settings: {
      targetInfluencers: 15,
      budget: 75000,
      maxBudgetPerInfluencer: 7000,
      tiers: ['50k-200k', '200k-500k'],
      niches: ['fashion', 'beauty', 'lifestyle']
    },

    progress: 27
  },

  // State 4: Empty (just created, neither invites nor applications)
  {
    id: 'CAMP-2025-00201',
    name: 'New Year Celebration Campaign',
    type: 'hybrid',
    status: 'draft',
    createdDate: '2025-11-25',
    deadline: '2025-12-31',
    daysLeft: 15,

    invited: [],

    applications: {
      pending: 0,
      total: 0
    },

    settings: {
      targetInfluencers: 20,
      budget: 100000,
      maxBudgetPerInfluencer: 6500,
      tiers: ['10k-50k', '50k-200k'],
      niches: ['entertainment', 'lifestyle']
    },

    progress: 0
  },

  // ============================================
  // INVITE ONLY CAMPAIGNS - 2 States
  // ============================================

  // State 1: Has influencers with detailed tracking
  {
    id: 'CAMP-2025-00125',
    name: 'Skincare Product Launch',
    type: 'invite-only',
    status: 'active',
    createdDate: '2025-11-10',
    deadline: '2025-12-20',
    daysLeft: 5,

    invited: [
      {
        id: 'INF-101',
        name: 'Sarah Khalid',
        avatar: 'S',
        platform: 'instagram',
        followers: 245000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',

        // Contract & Payment - Creating Content
        contractAmount: 75000,
        contractStatus: 'completed',
        paymentStatus: 'paid',
        brandSignedAt: '2025-11-12T10:30:00',
        influencerSignedAt: '2025-11-13T14:20:00',

        // Content - Creating
        contentStatus: 'creating',
        contentDueDate: '2025-12-18',
        deliverables: ['Instagram Reel ×2', 'Story ×5', 'Post ×1']
      },
      {
        id: 'INF-102',
        name: 'Maya Ahmed',
        avatar: 'M',
        platform: 'instagram',
        followers: 198000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',

        // Contract & Payment - Awaiting Influencer Signature
        contractAmount: 65000,
        contractStatus: 'awaiting-influencer-signature',
        paymentStatus: 'paid',
        paidAt: '2025-11-28T12:00:00',
        brandSignedAt: '2025-11-28T14:30:00',
        influencerSignatureDeadline: '2025-12-10T14:30:00',
        hoursLeftToSign: 36,
        deliverables: ['Instagram Reel ×1', 'Story ×3']
      },
      {
        id: 'INF-103',
        name: 'Khalid Omar',
        avatar: 'K',
        platform: 'tiktok',
        followers: 156000,
        status: 'pending',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',

        // Contract & Payment - Awaiting Brand Signature
        contractAmount: 55000,
        contractStatus: 'awaiting-brand-signature',
        paymentStatus: 'paid',
        paidAt: '2025-12-01T16:45:00',
        deliverables: ['TikTok Video ×2', 'Story ×4']
      }
    ],

    budget: 45000,
    progress: 67
  },

  // State 2: Empty (no influencers added yet)
  {
    id: 'CAMP-2025-00178',
    name: 'Tech Product Review Campaign',
    type: 'invite-only',
    status: 'draft',
    createdDate: '2025-11-22',
    deadline: '2026-01-15',
    daysLeft: 25,

    invited: [],

    budget: 30000,
    progress: 0
  },

  // ============================================
  // PUBLIC CAMPAIGNS - 2 States
  // ============================================

  // State 1: Has applications (detailed)
  {
    id: 'CAMP-2025-00098',
    name: 'Seafood Restaurant Opening',
    type: 'public',
    status: 'active',
    createdDate: '2025-10-15',
    deadline: '2025-12-22',
    daysLeft: 2,

    // Public campaigns don't have manual invites - only applications
    invited: [],

    // Detailed Applications Data
    applicationsData: [
      {
        id: 'APP-P001',
        name: 'Rania Abdullah',
        avatar: 'R',
        platform: 'instagram',
        followers: 89000,
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',

        proposedAmount: 35000,
        deliverables: ['Instagram Reel ×1', 'Story ×5', 'Post ×1'],

        rating: 4.9,
        completedCampaigns: 31,
        avgReach: 180000,
        avgEngagement: 9.1,

        appliedAt: '2025-12-01T09:30:00',
        hoursAgo: 4,
        status: 'pending'
      },
      {
        id: 'APP-P002',
        name: 'Tareq Saeed',
        avatar: 'T',
        platform: 'tiktok',
        followers: 156000,
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',

        proposedAmount: 48000,
        deliverables: ['TikTok Video ×2', 'Story ×3'],

        rating: 4.7,
        completedCampaigns: 25,
        avgReach: 320000,
        avgEngagement: 8.3,

        appliedAt: '2025-12-01T11:15:00',
        hoursAgo: 6,
        status: 'pending'
      },
      {
        id: 'APP-P003',
        name: 'Lina Hassan',
        avatar: 'L',
        platform: 'instagram',
        followers: 112000,
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',

        proposedAmount: 42000,
        deliverables: ['Instagram Reel ×2', 'Story ×4'],

        rating: 4.8,
        completedCampaigns: 28,
        avgReach: 230000,
        avgEngagement: 7.9,

        appliedAt: '2025-11-30T16:20:00',
        hoursAgo: 8,
        status: 'pending'
      },
      {
        id: 'APP-P004',
        name: 'Omar Khalid',
        avatar: 'O',
        platform: 'snapchat',
        followers: 78000,
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',

        proposedAmount: 32000,
        deliverables: ['Snapchat Story ×10', 'Post ×2'],

        rating: 4.6,
        completedCampaigns: 19,
        avgReach: 165000,
        avgEngagement: 8.5,

        appliedAt: '2025-11-30T14:45:00',
        hoursAgo: 10,
        status: 'pending'
      },
      {
        id: 'APP-P005',
        name: 'Noor Ibrahim',
        avatar: 'N',
        platform: 'instagram',
        followers: 134000,
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',

        proposedAmount: 45000,
        deliverables: ['Instagram Reel ×1', 'Story ×6'],

        rating: 4.9,
        completedCampaigns: 34,
        avgReach: 280000,
        avgEngagement: 9.3,

        appliedAt: '2025-11-29T10:30:00',
        hoursAgo: 15,
        status: 'pending'
      }
    ],

    applications: {
      pending: 5,
      reviewed: 15,
      accepted: 8,
      rejected: 7,
      total: 35
    },

    settings: {
      targetInfluencers: 30,
      budget: 150000,
      maxBudgetPerInfluencer: 6000,
      platforms: ['instagram', 'tiktok', 'snapchat'],
      tiers: ['10k-50k', '50k-200k'],
      niches: ['food', 'lifestyle', 'family']
    },

    progress: 27
  },

  // State 2: No applications yet
  {
    id: 'CAMP-2025-00203',
    name: 'Fashion Show Coverage',
    type: 'public',
    status: 'active',
    createdDate: '2025-11-24',
    deadline: '2025-12-27',
    daysLeft: 7,

    applications: {
      pending: 0,
      total: 0
    },

    settings: {
      targetInfluencers: 15,
      budget: 80000,
      maxBudgetPerInfluencer: 7000,
      platforms: ['instagram'],
      tiers: ['50k-200k', '200k-500k'],
      niches: ['fashion', 'beauty']
    },

    progress: 0
  },

  // ============================================
  // EXPIRED CAMPAIGNS - Deadline passed
  // ============================================

  // HYBRID - Expired (deadline passed, still active)
  {
    id: 'CAMP-2025-00098',
    name: 'Seafood Restaurant Opening',
    type: 'hybrid',
    status: 'active',
    createdDate: '2025-10-15',
    deadline: '2025-11-30',
    daysLeft: -3, // Expired

    invited: [
      {
        name: 'Fatima',
        avatar: 'F',
        platform: 'instagram',
        followers: 156000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
      },
      {
        name: 'Omar',
        avatar: 'O',
        platform: 'tiktok',
        followers: 89000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
      }
    ],

    applications: {
      pending: 24,
      reviewed: 15,
      accepted: 8,
      rejected: 7,
      total: 47
    },

    settings: {
      targetInfluencers: 30,
      budget: 150000,
      maxBudgetPerInfluencer: 6000
    },

    progress: 33
  },

  // PUBLIC - Expired
  {
    id: 'CAMP-2025-00187',
    name: 'Winter Sports Gear Campaign',
    type: 'public',
    status: 'active',
    createdDate: '2025-10-20',
    deadline: '2025-11-28',
    daysLeft: -5,

    applications: {
      pending: 8,
      reviewed: 12,
      accepted: 4,
      rejected: 8,
      total: 24
    },

    settings: {
      targetInfluencers: 15,
      budget: 60000,
      maxBudgetPerInfluencer: 5000,
      platforms: ['instagram', 'tiktok'],
      tiers: ['10k-50k'],
      niches: ['sports', 'lifestyle']
    },

    progress: 27
  },

  // ============================================
  // PAUSED CAMPAIGNS
  // ============================================

  {
    id: 'CAMP-2025-00165',
    name: 'Gaming Accessories Launch',
    type: 'invite-only',
    status: 'paused',
    createdDate: '2025-11-05',
    deadline: '2025-12-20',
    daysLeft: 17,
    pausedDate: '2025-11-28',
    pausedReason: 'Budget revision needed',

    invited: [
      {
        name: 'Ahmad',
        avatar: 'A',
        platform: 'youtube',
        followers: 320000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      },
      {
        name: 'Lina',
        avatar: 'L',
        platform: 'tiktok',
        followers: 180000,
        status: 'pending',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
      }
    ],

    budget: 55000,
    progress: 40
  },

  // ============================================
  // COMPLETED CAMPAIGNS
  // ============================================

  // HYBRID - Completed
  {
    id: 'CAMP-2025-00045',
    name: 'Ramadan Home Decor Campaign',
    type: 'hybrid',
    status: 'completed',
    createdDate: '2025-08-15',
    deadline: '2025-09-30',
    completedDate: '2025-09-28',

    invited: [
      {
        name: 'Nour',
        avatar: 'N',
        platform: 'instagram',
        followers: 145000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
      },
      {
        name: 'Youssef',
        avatar: 'Y',
        platform: 'youtube',
        followers: 280000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      },
      {
        name: 'Hala',
        avatar: 'H',
        platform: 'instagram',
        followers: 98000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
      }
    ],

    applications: {
      accepted: 5,
      total: 32
    },

    results: {
      totalReach: 2100000,
      totalEngagement: 156000,
      totalPosts: 24,
      avgRating: 4.9,
      spent: 95000
    },

    settings: {
      targetInfluencers: 8,
      budget: 100000,
      platforms: ['instagram', 'youtube']
    }
  },

  // INVITE ONLY - Completed
  {
    id: 'CAMP-2025-00032',
    name: 'Luxury Watch Collection',
    type: 'invite-only',
    status: 'completed',
    createdDate: '2025-07-10',
    deadline: '2025-08-25',
    completedDate: '2025-08-23',

    invited: [
      {
        name: 'Rania',
        avatar: 'R',
        platform: 'instagram',
        followers: 450000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
      },
      {
        name: 'Tariq',
        avatar: 'T',
        platform: 'instagram',
        followers: 380000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
      },
      {
        name: 'Salma',
        avatar: 'S',
        platform: 'youtube',
        followers: 520000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }
    ],

    results: {
      totalReach: 3500000,
      totalEngagement: 280000,
      totalPosts: 15,
      avgRating: 4.95,
      spent: 145000
    },

    budget: 150000
  },

  // PUBLIC - Completed
  {
    id: 'CAMP-2025-00067',
    name: 'Eid Collection Launch',
    type: 'public',
    status: 'completed',
    createdDate: '2025-09-01',
    completedDate: '2025-10-15',

    applications: {
      accepted: 12,
      total: 45
    },

    results: {
      totalReach: 1200000,
      totalEngagement: 85000,
      avgRating: 4.8,
      spent: 78000
    },

    settings: {
      targetInfluencers: 12,
      budget: 80000,
      platforms: ['instagram', 'tiktok']
    }
  }
];

// Helper function to get campaign state
window.getCampaignState = function(campaign) {
  if (campaign.type === 'hybrid') {
    const hasInvited = campaign.invited && campaign.invited.length > 0;
    const hasApps = campaign.applications && campaign.applications.total > 0;

    if (hasInvited && hasApps) return 'hybrid-both';
    if (hasInvited && !hasApps) return 'hybrid-manual-only';
    if (!hasInvited && hasApps) return 'hybrid-apps-only';
    return 'hybrid-empty';
  }

  if (campaign.type === 'invite-only') {
    const hasInvited = campaign.invited && campaign.invited.length > 0;
    return hasInvited ? 'invite-has-influencers' : 'invite-empty';
  }

  if (campaign.type === 'public') {
    const hasApps = campaign.applications && campaign.applications.total > 0;
    return hasApps ? 'public-has-apps' : 'public-no-apps';
  }

  return 'unknown';
};

// Helper function to get platforms from invited influencers
window.getPlatforms = function(invited) {
  if (!invited || invited.length === 0) return {};

  const platforms = {};
  invited.forEach(inf => {
    if (!platforms[inf.platform]) {
      platforms[inf.platform] = 0;
    }
    platforms[inf.platform]++;
  });

  return platforms;
};

// Helper function to get platform icon
window.getPlatformIcon = function(platform) {
  const icons = {
    instagram: '📷',
    tiktok: '🎵',
    youtube: '▶️',
    snapchat: '👻',
    twitter: '𝕏',
    facebook: '👍'
  };
  return icons[platform] || '📱';
};

// Helper function to get type badge info
window.getTypeBadge = function(type) {
  const badges = {
    'hybrid': { icon: '🔀', text: 'HYBRID', gradient: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(236,72,153,0.15) 100%)', color: 'var(--primary)' },
    'invite-only': { icon: '👥', text: 'INVITE ONLY', gradient: 'rgba(99,102,241,0.1)', color: 'var(--primary)' },
    'public': { icon: '🌍', text: 'PUBLIC', gradient: 'rgba(236,72,153,0.1)', color: 'var(--accent)' }
  };
  return badges[type] || badges['hybrid'];
};

// Helper function to get influencer flow state
window.getInfluencerFlowState = function(influencer) {
  // Completed
  if (influencer.contractStatus === 'completed') {
    return 'completed';
  }

  // Signature Expired
  if (influencer.contractStatus === 'signature-expired') {
    return 'signature-expired';
  }

  // Content states
  if (influencer.contentStatus === 'submitted') {
    return 'content-submitted';
  }
  if (influencer.contentStatus === 'revision') {
    return 'content-revision';
  }
  if (influencer.contentStatus === 'creating') {
    return 'creating-content';
  }

  // Contract states
  if (influencer.contractStatus === 'awaiting-payment') {
    return 'awaiting-payment';
  }
  if (influencer.contractStatus === 'awaiting-brand-signature') {
    return 'awaiting-brand-signature';
  }
  if (influencer.contractStatus === 'awaiting-influencer-signature') {
    return 'awaiting-influencer-signature';
  }

  // Default: invitation sent but not accepted
  if (influencer.status === 'pending') {
    return 'invitation-pending';
  }

  return 'unknown';
};

// Helper function to get progress steps
window.getInfluencerProgressSteps = function(influencer) {
  const steps = [
    { key: 'payment', label: 'They Pay', icon: '💳' },
    { key: 'brand-sign', label: 'You Sign', icon: '📝' },
    { key: 'influencer-sign', label: 'They Sign', icon: '✍️' }
  ];

  const state = window.getInfluencerFlowState(influencer);

  // Determine completion status for each step
  const payment = influencer.paymentStatus === 'paid';
  const brandSigned = influencer.brandSignedAt !== undefined;
  const influencerSigned = influencer.influencerSignedAt !== undefined;

  return steps.map((step, index) => {
    let status = 'pending';

    if (step.key === 'payment') {
      status = payment ? 'completed' : 'active';
    } else if (step.key === 'brand-sign') {
      if (brandSigned) status = 'completed';
      else if (payment) status = 'active';
      else status = 'pending';
    } else if (step.key === 'influencer-sign') {
      if (influencerSigned) status = 'completed';
      else if (brandSigned) status = 'active';
      else status = 'pending';
    }

    return {
      ...step,
      status,
      isLast: index === steps.length - 1
    };
  });
};

console.log('✅ Campaigns data loaded:', window.campaignsData.length, 'campaigns');
