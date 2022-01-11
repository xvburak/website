import type { Pricing } from "$lib/types/pricing.type";
import { isEurope } from "$lib/utils/helpers";
import type { Card } from "$lib/types/card.type";
import type { TableData } from "$lib/types/table-data.type";
// @ts-ignore
import RedeemOffer from "$lib/components/pricing/redeem-offer.svelte";

export const pricingPlans: Pricing[] = [
  {
    title: "Free",
    price: isEurope() ? "€0" : "$0",
    features: [
      "50 hours/month",
      "Public & private repos",
      {
        text: "4 parallel workspaces",
        tooltip: "Open up to 4 workspaces in parallel.",
      },
      {
        text: "30min inactivity timeout",
        tooltip:
          "Workspaces are stopped automatically after 30min of inactivity.",
      },
    ],
    btnText: "Try Now",
    btnHref: "/#get-started",
    trackingName: "free",
  },
  {
    title: "Personal",
    price: isEurope() ? "€8" : "$9",
    duration: "per user/month",
    features: ["All in Free", "100 hours/month"],
    btnText: "Choose plan",
    btnHref: "https://gitpod.io/plans",
    trackingName: "personal",
  },
  {
    title: "Professional",
    price: isEurope() ? "€23" : "$25",
    duration: "per user/month",
    features: [
      "All in Personal",
      "Unlimited hours",
      {
        text: "8 parallel workspaces",
        tooltip: "Open up to 8 workspaces in parallel.",
      },
      {
        text: "Team Plans",
        tooltip:
          "Manage subscriptions for your team members with centralized billing.",
      },
    ],
    btnText: "Choose plan",
    btnHref: "https://gitpod.io/plans",
    spiced: true,
    trackingName: "professional",
  },
  {
    title: "Unleashed",
    price: isEurope() ? "€35" : "$39",
    duration: "per user/month",
    features: [
      "All in Professional",
      {
        text: "16 parallel workspaces",
        tooltip: "Open up to 16 workspaces in parallel.",
      },
      "1hr inactivity timeout",
      {
        text: "3hr timeout boost",
        tooltip: "Activate up to 3hr extra workspace inactivity timeout boost.",
      },
    ],
    btnText: "Choose plan",
    btnHref: "https://gitpod.io/plans",
    trackingName: "unleashed",
  },
];

export const empowermentFeatures: Card[] = [
  {
    title: "Pro OSS developers",
    text: "Professional open-source developers, can apply to our free Professional Open Source Plan.",
    link: {
      text: "View requirements",
      href: "/docs/professional-open-source",
    },
  },
  {
    title: "Startups",
    text: "Startups can get up to 2 years of Gitpod for free, no matter how fast your developers and workloads scale.",
    link: {
      text: "View Startups Program",
      href: "/for/startups",
    },
  },
  {
    title: "Students & teachers",
    text: "For those still learning the ropes, you can get our Unleashed Plan for <strong>€8 per month</strong> instead of €36/month.",
    modal: {
      btnText: "Redeem offer",
      modalContentComponent: RedeemOffer,
    },
  },
];

export const freePlanTableData: TableData = {
  title: "Free",
  subtitle: `${isEurope() ? "€" : "$"}0 per user/month`,
  link: {
    text: "Try now",
    href: "/#get-started",
  },
  details: [
    {
      term: "Public & Private Repos",
      text: "limited to 50h",
    },
    {
      term: "Team Plans",
      availibility: false,
    },
    {
      term: "Inactivity timeout",
      text: "30min",
    },
    {
      term: "timeout Boost",
      availibility: false,
    },
    {
      term: "Parallel Workspaces",
      text: "4",
    },
    {
      term: "prebuilds",
      availibility: true,
    },
    {
      term: "Shared workspaces",
      availibility: true,
    },
    {
      term: "Snapshots",
      availibility: true,
    },
    {
      term: "Admin Dashboard",
      availibility: false,
    },
    {
      term: "Encrypted backups",
      availibility: true,
    },
    {
      term: "multi-ide support",
      availibility: true,
    },
    {
      term: "GitLab",
      availibility: true,
    },
    {
      term: "GitHub",
      availibility: true,
    },
    {
      term: "Bitbucket",
      availibility: true,
    },
  ],
};

export const personalPlanTableData: TableData = {
  title: "Personal",
  subtitle: `${isEurope() ? "€8" : "$9"} per user/month`,
  link: {
    text: "Choose plan",
    href: "https://gitpod.io/plans",
  },
  details: [
    {
      term: "Public & Private Repos",
      text: "limited to 100h",
    },
    {
      term: "Team Plans",
      availibility: false,
    },
    {
      term: "Inactivity timeout",
      text: "30min",
    },
    {
      term: "timeout Boost",
      availibility: false,
    },
    {
      term: "Parallel Workspaces",
      text: "4",
    },
    {
      term: "prebuilds",
      availibility: true,
    },
    {
      term: "Shared workspaces",
      availibility: true,
    },
    {
      term: "Snapshots",
      availibility: true,
    },
    {
      term: "Admin Dashboard",
      availibility: false,
    },
    {
      term: "Encrypted backups",
      availibility: true,
    },
    {
      term: "multi-ide support",
      availibility: true,
    },
    {
      term: "GitLab",
      availibility: true,
    },
    {
      term: "GitHub",
      availibility: true,
    },
    {
      term: "Bitbucket",
      availibility: true,
    },
  ],
};

export const professionalPlanTableData: TableData = {
  title: "Professional",
  subtitle: `${isEurope() ? "€23" : "$25"} per user/month`,
  link: {
    text: "Choose plan",
    href: "https://gitpod.io/plans",
  },
  details: [
    {
      term: "Public & Private Repos",
      text: "unlimited",
    },
    {
      term: "Team Plans",
      availibility: true,
    },
    {
      term: "Inactivity timeout",
      text: "30min",
    },
    {
      term: "timeout Boost",
      availibility: false,
    },
    {
      term: "Parallel Workspaces",
      text: "8",
    },
    {
      term: "prebuilds",
      availibility: true,
    },
    {
      term: "Shared workspaces",
      availibility: true,
    },
    {
      term: "Snapshots",
      availibility: true,
    },
    {
      term: "Admin Dashboard",
      availibility: false,
    },
    {
      term: "Encrypted backups",
      availibility: true,
    },
    {
      term: "multi-ide support",
      availibility: true,
    },
    {
      term: "GitLab",
      availibility: true,
    },
    {
      term: "GitHub",
      availibility: true,
    },
    {
      term: "Bitbucket",
      availibility: true,
    },
  ],
};

export const unleashedPlanTableData: TableData = {
  title: "Unleashed",
  subtitle: `${isEurope() ? "€35" : "$39"} per user/month`,
  link: {
    text: "Choose plan",
    href: "https://gitpod.io/plans",
  },
  details: [
    {
      term: "Public & Private Repos",
      text: "unlimited",
    },
    {
      term: "Team Plans",
      availibility: true,
    },
    {
      term: "Inactivity timeout",
      text: "1h",
    },
    {
      term: "timeout Boost",
      text: "3h",
    },
    {
      term: "Parallel Workspaces",
      text: "16",
    },
    {
      term: "prebuilds",
      availibility: true,
    },
    {
      term: "Shared workspaces",
      availibility: true,
    },
    {
      term: "Snapshots",
      availibility: true,
    },
    {
      term: "Admin Dashboard",
      availibility: false,
    },
    {
      term: "Encrypted backups",
      availibility: true,
    },
    {
      term: "multi-ide support",
      availibility: true,
    },
    {
      term: "GitLab",
      availibility: true,
    },
    {
      term: "GitHub",
      availibility: true,
    },
    {
      term: "Bitbucket",
      availibility: true,
    },
  ],
};
