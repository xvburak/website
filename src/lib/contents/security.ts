import type { Action } from "$lib/types/action.type";
import type { ProgramFeature } from "$lib/types/program-feature.type";

export const secureParagraphs = [
  "Storing copies of your source code locally on countless unsecured devices and networks is a bad practice. At the same time, it has become a reality for many organisations to enable their employees to work remotely with BYOD policies.",
  "With Gitpod, your source code is safely stored in the cloud and never stored locally. Either on the carbon-neutral Google Cloud Platform with our SaaS solution or on your own cloud infrastructure with Gitpod Self-Hosted. Our native integrations with GitHub, GitLab and Bitbucket create a single access point to your intellectual property, no matter where your developers are and what device they use for it.",
  "No packages or dependencies are downloaded to users' devices. Gitpod developer environments run in the cloud and are short-lived, protecting your local machines and other corporate resources from malicious attacks through the execution of arbitrary code.",
];

export const programFeatures: ProgramFeature[] = [
  {
    title: "Compliance",
    paragraphs: [
      "Gitpod is a European company committed to security and data privacy. We provide our users with the ability to access and control the information that we collect about them.",
      "Gitpod is built with security in mind and we continuously invest in security best practices. We are currently in the process of becoming SOC 2 compliant and you can request a copy of our SOC2 audit report as soon as it's available.",
    ],
    image: "compliance.svg",
  },
  {
    title: "Environment Isolation",
    paragraphs: [
      "Each Gitpod workspace or prebuild runs on a secured single-use container providing fast startup times without compromising on security",
      'We create separate user, PID, mount and network namespaces for each Gitpod workspace, and establish an unprivileged node user as root within that user namespace. More details on the technical approach can be found <a href="https://www.youtube.com/watch?v=iYLCHQgj0fE" target="_blank" rel="noreferrer">in this talk</a> from our Head of Engineering as well as in this <a href="https://kinvolk.io/blog/2020/12/improving-kubernetes-and-container-security-with-user-namespaces/"  rel="noreferrer" target="_blank">blog post</a> from the container security experts at Kinvolk who stress-tested our namespace layering implementation.',
    ],
    image: "environment-isolation.svg",
  },
  {
    title: "Open source",
    paragraphs: [
      'Built-in the open, our source code and how Gitpod is developed are publicly available for review by everyone. Our security posture, disclosure policy and speed in vulnerability handling is highlighted in the following <a href="https://about.gitlab.com/blog/2021/07/08/two-bugs-and-a-quick-fix-in-gitpod/" rel="noreferrer" target="_blank">blog post</a> from the security research team at GitLab.',
      "In addition to this, we acknowledge the importance of giving back to the community and have taken steps to support the software supply chain of Gitpod and our customers through the creation of a monetary fund for supporting open-source maintainers.",
    ],
    image: "open-source.svg",
  },
  {
    title: "Authentication and Authorization",
    paragraphs: [
      "Gitpod uses your Git provider's SSO and, by default, all workspaces connections are private and authenticated, making them accessible only by the creator.",
      "Prebuild logs are readable by all members of the corresponding team and no one else.",
    ],
    image: "auth.svg",
  },
  {
    title: "Encryption",
    paragraphs: [
      "All data, including workspace backups and environment variables, is encrypted at rest using AES256; and all connections to the Gitpod app, website, workspaces and workspaces' endpoints are encrypted in transit (TLS).",
    ],
    image: "encryption.svg",
  },
];

export const thanksAction: Action = {
  title: "Thanks",
  description:
    "Big thanks to the following people who responsibly disclosed their security findings.",
  link: {
    href: "/security/thanks",
    text: "View contributors",
  },
};

export const reportAction: Action = {
  title: "Security Vulnerability Disclosure Policy",
  description:
    "We welcome feedback from security researchers and the general public to help improve our security.",
  link: {
    href: "/security/report",
    text: "View report process",
  },
};
