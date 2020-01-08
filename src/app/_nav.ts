import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'IoT_Core'
  },
  {
    name: 'Temperature',
    url: '/theme/colors',
    icon: 'icon-graph'
  },
  {
    name: 'Moisture',
    url: '/theme/typography',
    icon: 'icon-drop'
  },
  {
    name: 'Ph',
    url: '/theme/typography',
    icon: 'icon-chemistry'
  },
  {
    name: 'Tool/Set',
    url: '/theme/typography',
    icon: 'icon-equalizer'
  },
  {
    name: 'Greenspecies',
    url: '/theme/typography',
    icon: 'icon-globe'
  },
  {
    name: 'AI',
    url: '/theme/typography',
    icon: 'icon-social-reddit'
  },
  {
    name: 'Map',
    url: '/theme/typography',
    icon: 'icon-map'
  },
  {
    title: true,
    name: 'Piew_Message'
  },
  {
    name: 'Resume',
    url: '/base',
    icon: 'icon-book-open'
  },
  {
    name: 'Messaging',
    url: '/buttons',
    icon: 'icon-bubbles'
  },
  {
    name: 'My Channels',
    url: '/charts',
    icon: 'icon-layers'
  },
  {
    name: 'Ads',
    url: '/icons',
    icon: 'icon-plus'
  },
  {
    title: true,
    name: 'InComes',
  },
  {
    name: 'Managing',
    url: '/pages',
    icon: 'icon-magic-wand'
  },
  {
    name: 'Sales',
    url: '/dashboard',
    icon: 'icon-basket'
  },
  {
    name: 'Purse',
    url: '',
    icon: 'icon-wallet'
  },
  {
    title: true,
    name: 'Pricing',
  },
  {
    name: 'Payment/Ads',
    url: '/pages',
    icon: 'icon-credit-card'
  },
  {
    name: 'Statistics',
    url: '/dashboard',
    icon: 'icon-chart'
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Right',
  },
  {
    name: 'Security',
    url: '/pages',
    icon: 'icon-shield'
  },
  {
    name: 'Policy',
    url: '/dashboard',
    icon: 'icon-notebook'
  },
  {
    name: 'Terms of Services',
    url: '/dashboard',
    icon: 'icon-tag'
  },
  {
    name: 'Help Center',
    url: '/dashboard',
    icon: 'icon-info'
  },
];
