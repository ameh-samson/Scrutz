import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from "date-fns";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const toTitleCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}


export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, 'MMMM d, yyyy');
};