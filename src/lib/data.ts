import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const DATA = {
    name: "Ali Bazlamit",
    title: "Senior Software Engineer",
    subtitle: "Go & Distributed Systems",
    location: "Sarajevo, Bosnia & Herzegovina",
    email: "ali.bazlamit@hotmail.com",
    phone: "+387 62 615 765",
    summary:
        "Senior Backend Engineer with 15+ years of experience designing and scaling distributed systems. Proven track record of optimizing legacy systems—recently engineered a fully automated validation engine that processes huge datasets in just 6 hours, replacing a manual, multi-day workflow. Focused on writing clean, maintainable code and building reliable microservices that handle high traffic. Available for Remote B2B/Contract work immediately.",
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
            company: "Independent / Strategic Engagements",
            role: "Senior Software Engineer | Distributed Systems & Infrastructure",
            period: "Jan 2023 – Present",
            description: [
                "Rapid River Software (MDM for Internet Brands): Played a key engineering role in replacing the legacy Reltio system for WebMD and Mercury, building high-performance Go pipelines to synchronize 1.2 billion records and saving approximately $2M/year.",
                "Validation Engine Engineering: Engineered a custom ClickHouse-based validation engine to verify large-scale datasets, fully automating a manual workflow to deliver results in just 6 hours.",
                "Healthyfy.io (AI Platform): Implemented backend logic for a sentiment-aware AI coaching agent, building the escalation service that detects critical user sentiment to transfer sessions from AI to human coaches.",
                "Full-Stack Delivery: Responsible for creating and implementing fully functional React Native views for the mobile frontend and a robust backend with MySQL and NestJS API."
            ],
        },
        {
            company: "Human Care Systems",
            role: "Senior Software Development Engineer",
            period: "Aug 2021 – Jan 2023",
            description: [
                "Platform Architecture (Resilix): Contributed to the design and development of a distributed system using microservices for the Resilix digital health platform.",
                "Deployment Automation: Transitioned from manual script migrations to a centralized, configuration-driven deployment system, reducing execution time from several hours to minutes.",
                "Technical Strategy: Responsible for designing and writing technical specifications for assigned features and tasks while ensuring HIPAA/GDPR compliance."
            ],
        },
        {
            company: "Gartner & KLM BIH",
            role: "Senior Software Developer (Go/Infrastructure)",
            period: "Mar 2019 – Aug 2021",
            description: [
                "Microservices Migration: Key contributor to a strategic migration from a legacy PHP monolith to a Go-based microservices architecture, significantly improving system performance via AWS SQS/SNS.",
                "Infrastructure Tooling: Maintained the NetApp Kubernetes Services (NKS) SDK in Go and developed the Packet.com Python SDK for the global developer community.",
                "Cloud Architecture: Designed a pilot cloud marketplace using Terraform and REST APIs to automate resource provisioning and cloud environment setup."
            ],
        },
        {
            company: "NetApp (via StackPointCloud)",
            role: "Senior Software Developer",
            period: "Aug 2016 – Feb 2019",
            description: [
                "Kubernetes Infrastructure: Played a pivotal role in the NKS project, developing Helm charts, Helm gRPC APIs, and the NKS CLI for Kubernetes management.",
                "Security & Access: Implemented Kubernetes RBAC and kubeconfig RBAC for secure resource access.",
                "Polyglot SDK Development: Collaborated on cloud provider tools and SDKs in Go, C#, Python, PHP, Ruby, Java, and Node.js."
            ],
        },
        {
            company: "Mistral Technologies",
            role: "Technical Team Lead",
            period: "Jan 2015 – Jul 2016",
            description: [
                "Engineering Leadership: Led a development team, orchestrating sprint planning and collaborating with stakeholders.",
                "Full-Stack Delivery: Delivered production-ready releases using .NET C#, REST APIs, PowerShell scripts, MongoDB, and knockout.js."
            ],
        },
        {
            company: "Mistral Technologies",
            role: "Software Developer",
            period: "May 2013 – Jan 2015",
            description: [
                "Backend API Development: Designed and developed back-end APIs for Microsoft Exchange, SharePoint, and Dynamics CRM.",
                "Internal Tooling: Led the creation of an intranet application for employee management using Ruby on Rails and AngularJS."
            ],
        },
        {
            company: "Compusight Corporation",
            role: "Software Developer",
            period: "Feb 2011 – May 2013",
            description: [
                "CRM Development: Contributed to the development of the Move Desk project, a CRM solution for the moving industry.",
                "Feature Engineering: Implemented features including Bing maps integration, resource allocation, and warehouse management."
            ],
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
