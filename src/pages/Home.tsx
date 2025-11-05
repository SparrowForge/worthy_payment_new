import HomeInfraBanner from "../components/Home/InfraBanner";
import Integration from "../components/Home/Integration";
import Logos from "../components/Home/Logos";
import Card from "../components/Home/Card";
import { title } from "process";
import { Subtitles } from "lucide-react";
// import Header from "../components/Header/Header";

const cards = [
    {
        topButtonLink: "",
        topButtonText: "Payments",
        
        subtitle: "Accept and optimize payments, globally",
        description: "Increase authorization rates, offer local payment methods to boost conversion, and reduce fraud using AI.",

        ctaLink: "",
        ctaText: "Start with payments",

        seeAlsoLinks: [
            {
                title: "Tax",
                link: "#",
                description: "for automating tax registration, collection, & filing"
            },

            {
                title: "Radar",
                link: "#",
                description: "for Al-powered fraud protection"
            },

            {
                title: "Terminal",
                link: "#",
                description: "for custom in-person payments"
            },

        ],
        rightImageSrc: "/images/phone-payment-form.png"
    },

    {
        topButtonLink: "",
        topButtonText: "Billing",
        
        subtitle: "Capture recurring revenue",
        description: "Manage flat rate, usage-based, and hybrid pricing models, minimize churn, and automate finance operations.",

        ctaLink: "",
        ctaText: "Start with billing",

        seeAlsoLinks: [
            {
                title: "Invoicing",
                link: "#",
                description: "for invoice creation, collection, and tracking"
            },

            {
                title: "Usage-based billing",
                link: "#",
                description: "for metering, billing, and consumption insights"
            },

            {
                title: "Sigma",
                link: "#",
                description: "for custom revenue reports—no SQL required"
            },

        ],
        rightImageSrc: "/images/plan.png"
    },

    {
        topButtonLink: "",
        topButtonText: "Connect",
        
        subtitle: "Set up multiparty payments & payouts",
        description: "Integrate payments into your platform or marketplace for end-to-end payments experiences.",

        ctaLink: "",
        ctaText: "Start with connect",

        seeAlsoLinks: [
            {
                title: "Terminal",
                link: "#",
                description: "for custom in-person payments"
            },

            {
                title: "Instant Payouts",
                link: "#",
                description: "for fast payments to users"
            },

            {
                title: "Payment Elements",
                link: "#",
                description: "for customizable UIs"
            },

        ],
        rightImageSrc: "/images/buyer.png"
    },

    {
        topButtonLink: "",
        topButtonText: "Issuing",
        
        subtitle: "Build a fintech offering with banking-as-a-service",
        description: "Launch, manage, and scale a commercial card program without any setup fees.",

        ctaLink: "",
        ctaText: "Start with issuing",

        seeAlsoLinks: [
            {
                title: "Treasury",
                link: "#",
                description: "for financial accounts"
            },

            {
                title: "Capital",
                link: "#",
                description: "for offering fast, flexible financing"
            },

            {
                title: "Connect",
                link: "#",
                description: "for powering platform payments"
            },

        ],
        rightImageSrc: "/images/cards.png"
    }
]


function Home() {
    return <div className="home">
        <div className="flex flex-col layout-content justify-center align-middle p-15 pt-20 banner-infra-banner">
            <HomeInfraBanner />
            <div className="dashboard-image w-full text text-center mt-20">
                <img src="/images/dashboard.png" className="relative inline-block" />
            </div>
            <Logos />
            <Integration />
            {
                cards.map((card, index) => (
                    <Card 
                        key={index}
                        className='mt-xl'
                        topButtonLink={card.topButtonLink}
                        topButtonText={card.topButtonText}
                        subtitle={card.subtitle}
                        description={card.description}
                        ctaLink={card.ctaLink}
                        ctaText={card.ctaText}
                        seeAlsoLinks={card.seeAlsoLinks}
                        rightImageSrc={card.rightImageSrc}
                        
                    />
                ))
            }
            
        </div>
    </div>;
}

export default Home;