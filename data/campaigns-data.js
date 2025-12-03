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
      }
    ],

    applications: {
      pending: 12,
      reviewed: 5,
      accepted: 3,
      rejected: 2,
      total: 20
    },

    settings: {
      targetInfluencers: 25,
      budget: 125000,
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

  // State 1: Has influencers
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
        name: 'Sarah Khalid',
        avatar: 'S',
        platform: 'instagram',
        followers: 245000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
      },
      {
        name: 'Maya Ahmed',
        avatar: 'M',
        platform: 'instagram',
        followers: 198000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
      },
      {
        name: 'Khalid',
        avatar: 'K',
        platform: 'tiktok',
        followers: 156000,
        status: 'pending',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
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

  // State 1: Has applications
  {
    id: 'CAMP-2025-00098',
    name: 'Seafood Restaurant Opening',
    type: 'public',
    status: 'active',
    createdDate: '2025-10-15',
    deadline: '2025-11-30',
    daysLeft: -3, // Expired

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
