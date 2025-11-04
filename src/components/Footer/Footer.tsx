import React from "react";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";
import Copyright from "./Copyright";


const Footer = () => {
    const toSlug = (text: string) =>
        "/" + text.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return (<div className="layout-container pt-xl pb-xl text text-left">
        <footer className='layout-content'>
            <div className="layout-five-columns border border-dashed border-[#E4E4E4] border-l-0 border-r-0">


                <div className="flex flex-col pt-sm py-5">
                    <div className="top">
                        <p className="mb-sm font-subtitle-base">
                            Worthy Payments
                        </p>
                        <p className='font-caption-regular font-body-color'>
                            Meet Worthy Payments. Our future-proof technology allows businesses to accept cutting-edge payment options, optimize new revenue streams, and get the most out of your existing stack—all on one platform
                        </p>
                    </div>
                    <div className="bottom mt-auto">
                        <Subscribe />
                    </div>
                </div>


                <div className="pt-sm border-l border-dashed border-[#E4E4E4] px-2 py-5">
                    <h4 className="mb-sm font-caption-regular font-body-color">Products & pricing</h4>
                    <ul className="space-y-2 font-body-base font-heading-color">
                        {[
                            "Pricing", "Atlas", "Billing", "Capital", "Checkout", "Climate", "Connect",
                            "Data Pipeline", "Elements", "Financial Connections", "Identity", "Invoicing",
                            "Issuing", "Link", "Payments", "Payment Links", "Payouts", "Radar",
                            "Revenue Recognition", "Sigma", "Tax", "Terminal", "Treasury",
                        ].map((item) => (
                            <li key={item}>
                                <Link to={toSlug(item)} className="hover:underline">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-sm border-l border-dashed border-[#E4E4E4] px-2 py-5">
                    <h4 className="mb-sm font-caption-regular font-body-color">Resources</h4>
                    <ul className="space-y-2 font-body-base font-heading-color">
                        {[
                            "Guides", "Customer stories", "Blog", "Annual conference",
                            "Privacy & terms", "Restricted businesses", "Licenses", "Sitemap",
                            "Cookie settings", "Your privacy choices", "More resources",
                        ].map((item) => (
                            <li key={item}>
                                <Link to={toSlug(item)} className="hover:underline">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-md">
                        <h4 className="mb-sm font-caption-regular font-body-color">Support</h4>
                        <ul className="space-y-2 font-body-base font-heading-color">
                            {["Get Support", "Managed Support Plans", "Contact: +1 888 926 2289"].map((item) => (
                                <li key={item}>
                                    <Link to={toSlug(item)} className="hover:underline">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-sm border-l border-dashed border-[#E4E4E4] px-2 py-5">
                    <h4 className="mb-4 font-caption-regular font-body-color">Solutions</h4>
                    <ul className="space-y-2 font-body-base font-heading-color">
                        {[
                            "Startups", "Enterprises", "Retail", "Nonprofits", "SaaS", "Platforms",
                            "Ecommerce", "Marketplaces", "Crypto", "Creator economy",
                            "AI companies", "Embedded finance", "Global businesses", "Finance automation",
                        ].map((item) => (
                            <li key={item}>
                                <Link to={toSlug(item)} className="hover:underline">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-md">
                        <h4 className="mt-sm mb-sm font-caption-regular font-body-color">Integrations and Custom Solutions</h4>
                        <ul className="space-y-2 font-body-base font-heading-color">
                            {["Stripe App MarketPlace", "Partner Ecosystem", "Professional Services",].map((item) => (
                                <li key={item}>
                                    <Link to={toSlug(item)} className="hover:underline">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-sm border-l border-dashed border-[#E4E4E4] px-2 py-5">
                    <h4 className="mb-sm font-caption-regular font-body-color">Company</h4>
                    <ul className="space-y-2 font-body-base font-heading-color">
                        {["Jobs", "Newsroom", "Stripe Press", "Contact sales"].map((item) => (
                            <li key={item}>
                                <Link to={toSlug(item)} className="hover:underline">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-md">
                        <h4 className="mt-sm mb-sm font-caption-regular font-body-color">Developers</h4>
                        <ul className="space-y-2 font-body-base font-heading-color">
                            {["Documentation", "API reference", "API status", "API changelog", "Stripe Apps"].map((item) => (
                                <li key={item}>
                                    <Link to={toSlug(item)} className="hover:underline">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Copyright />
        </footer>
    </div>
    )
}

export default Footer;

