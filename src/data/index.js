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

export const campaignsList = [
  {
    id: 0,
    campaignName: "Info Tech",
    campaignDescription: "string",
    startDate: "2024-06-17",
    endDate: "2024-06-18",
    digestCampaign: "string",
    linkedKeywords: ["fidelity", "Unity"],
    dailyDigest: "Yes",
    campaignStatus: "active",
  },
  {
    id: 0,
    campaignName: "Info Tech",
    campaignDescription: "string",
    startDate: "2024-06-17",
    endDate: "2024-06-18",
    digestCampaign: "string",
    linkedKeywords: ["fidelity", "Unity"],
    dailyDigest: "Yes",
    campaignStatus: "active",
  },
  {
    id: 0,
    campaignName: "Info Tech",
    campaignDescription: "string",
    startDate: "2024-06-17",
    endDate: "2024-06-18",
    digestCampaign: "string",
    linkedKeywords: ["fidelity", "Unity"],
    dailyDigest: "Yes",
    campaignStatus: "inactive",
  },
  {
    id: 0,
    campaignName: "Info Tech",
    campaignDescription: "string",
    startDate: "2024-06-17",
    endDate: "2024-06-18",
    digestCampaign: "string",
    linkedKeywords: ["fidelity", "Unity"],
    dailyDigest: "Yes",
    campaignStatus: "inactive",
  },
  {
    id: 0,
    campaignName: "Info Tech",
    campaignDescription: "string",
    startDate: "2024-06-17",
    endDate: "2024-06-18",
    digestCampaign: "string",
    linkedKeywords: ["fidelity", "Unity"],
    dailyDigest: "Yes",
    campaignStatus: "inactive",
  },
  {
    id: 0,
    campaignName: "Info Tech",
    campaignDescription: "string",
    startDate: "2024-06-17",
    endDate: "2024-06-18",
    digestCampaign: "string",
    linkedKeywords: ["fidelity", "Unity"],
    dailyDigest: "Yes",
    campaignStatus: "inactive",
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
    inputType: 'toggle',
    placeholder: '',
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
    inputType: 'textarea',
    placeholder: 'select',
    options: ['Yes', 'No'],
  },
]
