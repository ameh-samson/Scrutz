import overview from "../assets/overview.png";
import insights from "../assets/insights.png";
import settings from "../assets/settings.png";
import campaign from "../assets/campaign.svg";

export const navLinks = [
  {
    title: "Overview",
    url: "/",
    icon: overview,
  },
  {
    title: "Campaign",
    url: "/campaign",
    icon: campaign,
  },
  {
    title: "Market Intelligence",
    url: "/marketIntelligence",
    icon: insights,
  },
  {
    title: "Account Settings",
    url: "/settings",
    icon: settings,
  },
];



export const newCampaignIntro = [
  {title: 'Create New Campaign'},
]

export const newCampaignForm = [
  {
    label: 'Campaign Name',
    name: 'campaignName',
    inputType: 'text',
    placeholder: 'e.g  The Future is now',
  },
  {
    label: 'Campaign Description',
    name: 'campaignDescription',
    inputType: 'textarea',
    placeholder: 'Please add a description to your campaign',
  },
  {
    label: 'Start Date',
    name: 'startDate',
    inputType: 'text',
    placeholder: 'dd/mm/yyy',
  },
  {
    label: 'End Date',
    name: 'endDate',
    inputType: 'text',
    placeholder: 'dd/mm/yyy',
  },
  {
    label: 'Want to receive daily digest about the campaign?',
    name: 'digestCampaign',
    inputType: 'toggle',
    placeholder: '',
    options: ['Yes', 'No']
  },
  {
    label: 'Linked Keywords',
    name: 'linkedKeywords',
    inputType: 'textarea',
    placeholder: 'To add keywords, type your keyword and press enter',
  },
  {
    label: 'Kindly select how often you want to receive daily digest',
    name: 'dailyDigest',
    inputType: 'select',
    placeholder: 'select',
    options: ['Very oftern', 'Not too often', 'Not at all'],
  },
]
