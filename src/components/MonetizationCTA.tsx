"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { trackEvent, TrackingPayload } from "@/lib/tracking";
import { ChevronRight, ExternalLink, LucideIcon } from "lucide-react";

export interface MonetizationCTAProps {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
  eventName: "cta_click_newsletter" | "cta_click_guide_download" | "cta_click_related_ingredient" | "cta_click_related_tool" | "cta_click_experience" | "cta_click_partner_link" | "cta_click_view_more";
  eventPayload?: TrackingPayload;
  variant?: "primary" | "secondary" | "subtle";
  icon?: LucideIcon;
  isExternal?: boolean;
}

export default function MonetizationCTA({
  title,
  description,
  buttonLabel,
  href,
  eventName,
  eventPayload,
  variant = "primary",
  icon: Icon,
  isExternal = false,
}: MonetizationCTAProps) {
  
  const handleClick = () => {
    trackEvent(eventName, {
      label: title,
      href,
      ...eventPayload,
    });
  };

  const baseClasses = "flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl border transition-all duration-300 gap-6 w-full";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-rose-900/20 to-slate-900/40 border-rose-500/30 hover:border-rose-400/50 shadow-[0_0_15px_rgba(225,29,72,0.1)] hover:shadow-[0_0_20px_rgba(225,29,72,0.2)]",
    secondary: "bg-gradient-to-r from-blue-900/20 to-slate-900/40 border-blue-500/30 hover:border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
    subtle: "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60",
  };

  const buttonClasses = {
    primary: "bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-900/20",
    secondary: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20",
    subtle: "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700",
  };

  const content = (
    <>
      <div className="flex items-start gap-4 flex-1">
        {Icon && (
          <div className={`p-3 rounded-xl shrink-0 ${variant === 'primary' ? 'bg-rose-500/10 text-rose-400' : variant === 'secondary' ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-800 text-slate-400'}`}>
            <Icon size={24} />
          </div>
        )}
        <div>
          <h4 className="text-lg font-bold text-white mb-1.5">{title}</h4>
          <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{description}</p>
        </div>
      </div>
      <div className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-colors whitespace-nowrap shrink-0 w-full sm:w-auto ${buttonClasses[variant]}`}>
        <span>{buttonLabel}</span>
        {isExternal ? <ExternalLink size={16} /> : <ChevronRight size={16} />}
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        onClick={handleClick}
        className={`${baseClasses} ${variantClasses[variant]}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href as any} onClick={handleClick} className={`${baseClasses} ${variantClasses[variant]}`}>
      {content}
    </Link>
  );
}
