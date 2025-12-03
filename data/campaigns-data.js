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
        name: 'Sarah Ahmed',
        avatar: 'S',
        platform: 'instagram',
        followers: 95000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
      },
      {
        name: 'Ahmed Ali',
        avatar: 'A',
        platform: 'tiktok',
        followers: 45000,
        status: 'pending',
        gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
      },
      {
        name: 'Nora Hassan',
        avatar: 'N',
        platform: 'youtube',
        followers: 120000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      },
      {
        name: 'Mohammed',
        avatar: 'M',
        platform: 'instagram',
        followers: 67000,
        status: 'accepted',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
      },
      {
        name: 'Layla',
        avatar: 'L',
        platform: 'tiktok',
        followers: 82000,
        status: 'pending',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
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

console.log('✅ Campaigns data loaded:', window.campaignsData.length, 'campaigns');
