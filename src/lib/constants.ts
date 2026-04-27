const REVENUE_DATA = [
  {
    month: "Jan",
    revenue: 42000,
    expenses: 28000,
  },
  {
    month: "Feb",
    revenue: 46000,
    expenses: 30000,
  },
  {
    month: "Mar",
    revenue: 52000,
    expenses: 32000,
  },
  {
    month: "Apr",
    revenue: 61000,
    expenses: 35000,
  },
  {
    month: "May",
    revenue: 68000,
    expenses: 39000,
  },
  {
    month: "Jun",
    revenue: 72000,
    expenses: 42000,
  },
];

const PERFORMANCE_DATA = [
  { category: "User Growth", value: 80 },
  { category: "Signups", value: 75 },
  { category: "Active Users", value: 90 },
  { category: "Churn Rate", value: 60 }, // scaled to 0-100
  { category: "Satisfaction", value: 88 },
  { category: "Revenue", value: 95 },
  { category: "Retention", value: 70 },
  { category: "Support Tickets", value: 65 },
  { category: "Feature Adoption", value: 85 },
];

const PROFILE_IMAGE = "https://api.dicebear.com/9.x/notionists/svg?seed=amit";

export { REVENUE_DATA, PERFORMANCE_DATA, PROFILE_IMAGE };
