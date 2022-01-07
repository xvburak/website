import type { Screencast } from "$lib/types/screencasts.type";

let id = 1;
const screencasts: Screencast[] = [
  {
    nextScreencast: id++,
    title: "Getting started with Gitpod 🍊",
    description:
      "How to get a full dev environment in your browser with the click of a button and be immediately ready-to-code.",
    duration: 120,
    tile: "screencast-1.jpg",
    youtubeId: "w65POyu3ZUQ",
    relatedDocs: [
      { path: "/docs/", title: "Introduction to Gitpod" },
      { path: "/docs/getting-started", title: "Getting Started" },
      { path: "/docs/context-urls", title: "Context URLs" },
    ],
  },
  {
    nextScreencast: id++,
    title: "My workspace is running, now what? 🎯",
    description: "Your workspace is running, now what?",
    duration: 201,
    tile: "screencast-2.jpg",
    youtubeId: "4495YOMhhgo",
    relatedDocs: [
      { path: "/docs/life-of-workspace", title: "Life of a Workspace" },
    ],
  },
  {
    nextScreencast: id++,
    title: "Fully Automate Your Dev Setup ⚡️",
    description:
      "Understanding the automation benefits that arise from the concept of dev-environment-as-code.",
    duration: 264,
    tile: "screencast-3.jpg",
    youtubeId: "fA2fpqP1xaM",
    relatedDocs: [
      { path: "/docs/configure", title: "Configure Your Project" },
      { path: "/docs/config-gitpod-file", title: ".gitpod.yml" },
      { path: "/docs/config-docker", title: "Docker Configuration" },
      { path: "/docs/config-start-tasks", title: "Start Tasks" },
    ],
  },
  {
    nextScreencast: id++,
    title: "Personalise Your Workspace 🎨",
    description:
      "How to customize and configure Gitpod for your personal needs and those of your team.",
    duration: 123,
    tile: "screencast-4.jpg",
    youtubeId: "VYHsd1zI_tE",
    relatedDocs: [
      { path: "/docs/vscode-extensions", title: "VS Code Extensions" },
      { path: "/docs/environment-variables", title: "Environment Variables" },
    ],
  },
  {
    nextScreencast: id++,
    title: "Continuously Prebuild Your Project 💻",
    description:
      "How to make Gitpod load in a blink by prebuilding your project ahead-of-time, continuously.",
    duration: 128,
    tile: "screencast-5.jpg",
    youtubeId: "ZtlJ0PakUHQ",
    relatedDocs: [{ path: "/docs/prebuilds", title: "Prebuilt Workspaces" }],
  },
  {
    nextScreencast: id++,
    title: "Fresh Dev Environments For Each New Task 🎉",
    description:
      "Discover ephemeral/disposable workspaces and start fresh for each new task with just a single click. Pure magic!",
    duration: 195,
    tile: "screencast-6.jpg",
    youtubeId: "n7Ca3jHFtZg",
    relatedDocs: [{ path: "", title: "Introduction to Gitpod" }],
  },
  {
    title: "Collaborating With Your Team 🤝",
    description:
      "How to collaborate effectively with Gitpod's Shared Workspaces and Snapshots.",
    duration: 189,
    tile: "screencast-7.jpg",
    youtubeId: "TrY15zN98p8",
    relatedDocs: [
      {
        path: "/docs/sharing-and-collaboration",
        title: "Collaboration & Sharing",
      },
    ],
  },
  {
    title: "Git Integrations on Gitpod 🕸",
    description: "Learn about Git Integrations that you can use on Gitpod.",
    duration: 221,
    tile: "screencast-8.jpg",
    youtubeId: "nXMlnMEP784",
    relatedDocs: [{ path: "/docs/integrations", title: "Integrations" }],
  },
  {
    title: "Using Environment Variables 🌿",
    description: "How to use environment variables in Gitpod.",
    duration: 340,
    tile: "screencast-9.jpg",
    youtubeId: "dehln1E8ylY",
    relatedDocs: [
      { path: "/docs/environment-variables", title: "Environment Variables" },
    ],
  },
  {
    title: "How Do Extensions Work On Gitpod? 🔧",
    description:
      "Discover how to use VS Code Extensions in Gitpod and how they work on Gitpod using OpenVSX.",
    duration: 185,
    tile: "screencast-10.jpg",
    youtubeId: "TwXYbZKEuoA",
    relatedDocs: [
      { path: "/docs/vscode-extensions", title: "VS Code Extensions" },
    ],
  },
  {
    title: "VS Code Desktop Support 🖥",
    description:
      "Learn how with VS Code Desktop Support, you can keep your local IDE configurations and benefit from Gitpod’s high-spec servers & automated prebuilds.",
    duration: 230,
    tile: "screencast-11.jpg",
    youtubeId: "kI6firDA0Bw",
    relatedDocs: [{ path: "/docs/editors/vscode", title: "VS Code Desktop" }],
  },
  {
    title: "Databases on Gitpod 💿",
    description: "Learn how to use Databases on Gitpod.",
    duration: 91,
    tile: "screencast-12.jpg",
    youtubeId: "8oXSzN_W8Ls",
    relatedDocs: [
      {
        path: "/blog/gitpodify#installing-databases",
        title: "Installing databases",
      },
    ],
  },
  {
    title: "Software Engineering from an iPad 🍎",
    description:
      "Learn how you can use your IPad to develop software using Gitpod.",
    duration: 222,
    tile: "screencast-13.jpg",
    youtubeId: "bFj3fUSHf3A",
  },
  {
    title: "Using Custom Docker Images 🐳",
    description: "Learn how to use Docker Images on Gitpod.",
    duration: 389,
    tile: "screencast-14.jpg",
    youtubeId: "jFsbmcXCRf8",
    relatedDocs: [
      { path: "/docs/config-docker", title: "Custom Docker Image" },
    ],
  },
  {
    title: " Local Companion App 🤖",
    description: "Learn how to use Local Companion App.",
    duration: 389,
    tile: "screencast-15.jpg",
    youtubeId: "lwb0JSVJ2J4",
    relatedDocs: [
      {
        path: "/docs/develop/local-companion",
        title: "Gitpod Local Companion",
      },
    ],
  },
];

export default screencasts;
