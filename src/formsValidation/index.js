import { z } from 'zod';

// Custom validation function for date format dd/mm/yyyy
const isDateFormat = (value) => {
  const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
  return dateFormat.test(value);
};

export const newCampaignFormSchema = z.object({
  campaignName: z.string().min(1, { message: 'Campaign Name is required' }),
  campaignDescription: z.string().min(1, { message: 'Campaign Description is required' }),
  startDate: z.string().min(1, { message: 'Start Date is required' }),
  endDate: z.string().min(1, { message: 'End Date is required' }),
  digestCampaign: z.boolean().default(false),
  linkedKeywords: z.string().min(6, { message: 'Linked Keywords must be at least 6 characters' }),
  dailyDigest: z.string().min(3, { message: 'Select how often' }),
});
