import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const DATA = {
    name: "Ali Bazlamit",
    title: "Senior Software Engineer",
    subtitle: "Go & Distributed Systems",
    location: "Sarajevo, Bosnia & Herzegovina",
    email: "ali.bazlamit@hotmail.com",
    phone: "+387 62 615 765",
    summary:
        "Senior Backend Engineer with 15+ years of experience designing and scaling distributed systems, data pipelines, and cloud-native platforms. Specialized in Go, high-throughput data processing, and event-driven architectures, with a proven track record of architecting Master Data Management (MDM) solutions operating at billion-record scale. Expert in replacing legacy workflows with automated, reliable production systems across regulated healthtech and high-scale enterprise SaaS environments.",
    socials: {
        linkedin: "https://www.linkedin.com/in/ali-bazlamit-47009a28/",
        github: "https://github.com/alibazlamit",
        email: "mailto:ali.bazlamit@hotmail.com",
    },
    skills: {
        core: ["Go (Expert)", "Distributed Systems", "System Architecture", "MDM"],
        data: [
            "ClickHouse",
            "PostgreSQL",
            "Redis",
            "NATS",
            "MySQL",
            "MongoDB",
            "Cosmos DB",
        ],
        infrastructure: [
            "Kubernetes",
            "Docker",
            "AWS (SQS/SNS/Lambda)",
            "Terraform",
            "CI/CD",
        ],
        languages: ["TypeScript", "Python", "Node.js (NestJS)", "React Native (Expo)", "Next.js"],
    },
    experience: [
        {
            company: "Healthyfy.io",
            role: "Senior Software Engineer",
            period: "Jan 2023 – Present",
            description: "Architected and delivered an AI-powered chat system using Azure OpenAI and Cosmos DB. Optimized backend performance and operational visibility through a specialized admin portal and mobile application built with NestJS and Next.js.",
        },
        {
            company: "Rapid River Software",
            role: "Senior Software Engineer",
            period: "Jan 2024 – Apr 2025",
            description: "Designed and implemented high-concurrency Master Data Management (MDM) pipelines in Go, enabling the reliable synchronization and harmonization of 1.2 billion records for Internet Brands.",
        },
        {
            company: "Human Care Systems",
            role: "Senior Software Development Engineer",
            period: "Aug 2021 – Jan 2023",
            description: "Transitioned from manual, error-prone script migrations to a centralized, configuration-driven deployment system (Airtable-backed). Reduced migration script time from hours to minutes. Developed HIPAA/GDPR-compliant backend services.",
        },
        {
            company: "Gartner & KLM BIH",
            role: "Senior Software Developer (Go/Infrastructure)",
            period: "Mar 2019 – Aug 2021",
            description: "Led migration from legacy PHP monolith to Go-based microservices. Maintained NetApp Kubernetes Services (NKS) SDK in Go and Packet.com Python SDK. Designed pilot cloud marketplace using Terraform.",
        },
        {
            company: "Mistral Technologies & NetApp",
            role: "Technical Team Lead",
            period: "Jan 2010 – Jan 2019",
            description: "Spearheaded VarDynamics project architecture. Led cross-functional teams for cloud/Kubernetes tooling. Architected high-performance backend APIs using a polyglot stack (Go, Python, Java, PHP).",
        },
    ],
    projects: [
        {
            title: "Healthyfy Platform",
            tech: "TypeScript, React Native, NestJS, Azure OpenAI",
            description: "Architected a comprehensive healthtech platform in a Turborepo monorepo. Built a React Native mobile app, Next.js Coach Portal, and NestJS backend on Azure AKS. Integrated Azure OpenAI for AI coaching and Firestore for real-time chat.",
            link: "#",
            private: true,
        },
        {
            title: "Distributed Rate Limiter",
            tech: "Go & Redis",
            description: "Developed a high-performance Leaky Bucket rate-limiting library in Go, optimized for low-latency, thread-safe operation in high-traffic API gateways and distributed environments.",
            link: "https://github.com/alibazlamit/golang-leaky-bucket-redis-rate-limiter",
        },
        {
            title: "MDM Data Pipeline",
            tech: "Go, nats.io, PostageSQL, ClickHouse, Redis",
            description: "Developed core components of a high-throughput Master Data Management pipeline handling 1.2B+ records. Implemented deduplication, enrichment, and validation at scale for enterprise data consistency.",
            link: "#",
            private: true,
        },
        {
            title: "ClickHouse Validation Engine",
            tech: "Go & ClickHouse",
            description: "Built a high-concurrency verification tool in Go to audit 100M+ records between Reltio and internal MDM. Engineered a batch processing pipeline using worker pools and ClickHouse optimizations.",
            link: "#",
            private: true,
        },
        {
            title: "Infrastructure as Code Tools",
            tech: "Go, Packer, Kubernetes",
            description: "Contributed to HashiCorp Packer's plugin ecosystem and NetApp's Kubernetes Service (NKS) SDK. Implemented core functionality for cloud infrastructure provisioning and automation.",
            link: "https://github.com/hashicorp/packer",
        },
    ],
};
