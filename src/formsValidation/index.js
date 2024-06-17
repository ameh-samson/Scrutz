import { z } from 'zod'

export const newCampaignFormSchema = z.object({
  campaignName: z.string().min(1, { message: 'firstname is required' }),
  campaignDescription: z.string().min(1, { message: 'lastname is required' }),
  startDate: z.string().min(1, { message: 'username is required' }),
  endDate: z.string().date('Enter a valid '),
  linkedKeywords: z.string().min(6),
  dailyDigest: z.string().min(2, { message: 'pick an option' }),
 
})