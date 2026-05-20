import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const sizes = [
  { label: "Free Size", value: "Free Size" },
  { label: "Standard", value: "Standard" },
  { label: "XS", value: "XS" },
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "L", value: "L" },
  { label: "XL", value: "XL" },
  { label: "XXL", value: "XXL" },
  { label: "3XL", value: "3XL" },
  { label: "4XL", value: "4XL" },
  { label: "5XL", value: "5XL" },
  { label: "20", value: "20" },
  { label: "22", value: "22" },
  { label: "24", value: "24" },
  { label: "26", value: "26" },
  { label: "28", value: "28" },
  { label: "30", value: "30" },
  { label: "32", value: "32" },
  { label: "34", value: "34" },
  { label: "36", value: "36" },
  { label: "38", value: "38" },
  { label: "40", value: "40" },
  { label: "42", value: "42" },
  { label: "44", value: "44" },
  { label: "46", value: "46" },
  { label: "48", value: "48" },
  { label: "50", value: "50" },
  { label: "52", value: "52" },
  { label: "0-6M", value: "0-6M" },
  { label: "6-12M", value: "6-12M" },
  { label: "1Y", value: "1Y" },
  { label: "2Y", value: "2Y" },
  { label: "3Y", value: "3Y" },
  { label: "4Y", value: "4Y" },
  { label: "5Y", value: "5Y" },
  { label: "6Y", value: "6Y" },
  { label: "7Y", value: "7Y" },
  { label: "8Y", value: "8Y" },
  { label: "9Y", value: "9Y" },
  { label: "10Y", value: "10Y" },
  { label: "11Y", value: "11Y" },
  { label: "12Y", value: "12Y" },
  { label: "13Y", value: "13Y" },
  { label: "14Y", value: "14Y" },
  { label: "15Y", value: "15Y" },
  { label: "16Y", value: "16Y" },
];


export const sortings = [
  { label: 'Default Sorting', value: 'default_sorting' },
  { label: 'Ascending Order', value: 'asc' },
  { label: 'Descending Order', value: 'desc' },
  { label: 'Price: Low To High', value: 'price_low_high' },
  { label: 'Price: High To Low', value: 'price_high_low' },
]

export const orderStatus = ['pending', 'processing', 'shipped', 'delivered', 'cancelled', 'unverified']