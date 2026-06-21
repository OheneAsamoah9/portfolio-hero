/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Instagram, Linkedin, Menu, X, ArrowUpRight, Mail, Sparkles, CheckCircle2, Copy, Check, ArrowUp, Play, Volume2, VolumeX } from "lucide-react";
const starAssuranceCampaign = "https://i.im.ge/QM6X86m/Star_Assurance_-If_you_don_t_have_to.jpg";
import aboutLandingHero from "./assets/images/about_landing_hero_1781729710083.jpg";

// Portfolio items data - Waldo inspired layout with 10 boxes (varying shapes, colors, categories)
interface PortfolioItem {
  id: string;
  title: string;
  imageUrl: string;
}

interface MotionItem {
  id: string;
  title: string;
  videoUrl: string;
  category: string;
  description: string;
}

const MOTION_ITEMS: MotionItem[] = [
  {
    id: "motion-1",
    title: "UNITY MOTION INTRO",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781780247/Unity_Cup_Animation_h8zcxg.mp4",
    category: "CGI PRODUCT DIRECTION",
    description: "A brand presentation animation for Sofa Lounge, showcasing its identity and vision. A brand based in China"
  },
  {
    id: "motion-2",
    title: "TIKTOK BEAT THE CLOCK",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/Tick_Tock_beat_the_clock_update_2_sz5wof.mp4",
    category: "CREATIVE MOTION GRAPHICS",
    description: "A fast-paced celebrity podcast where guests answer questions against the clock."
  },
  {
    id: "motion-3",
    title: "YFM OFF THE RECORD",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781783292/YFM-Off_The_Record_Motion_iqw2ix.mp4",
    category: "BRAND MOTION DESIGN",
    description: "A podcast focused on conversations around life, entertainment, and culture."
  },
  {
    id: "motion-4",
    title: "FRANCO VYBZ",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781783136/Franco_Vybz_Montage_update_hc0ztj.mp4",
    category: "CINEMATIC HIGHLIGHT EDIT",
    description: "A vibrant motion piece celebrating Francophone culture and entertainment."
  },
  {
    id: "motion-5",
    title: "PAST CARE",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781871523/Past_Care_nc0ln9.mp4",
    category: "BRAND EVENT INSTALLATION",
    description: "A digital solution designed to simplify church administration, communication, and member management."
  },
  {
    id: "motion-6",
    title: "CHRIS MAISON JOLLOF BOX",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781826845/Jollof_Box_odm1fd.mp4",
    category: "FOOD BRAND PROMO",
    description: "The launch and introduction of Chris Maison’s signature Jollof Box offering."
  },
  {
    id: "motion-7",
    title: "GHANA–GERMANY ECONOMIC COOPERATION",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781826710/Michael_nlbbiv.mp4",
    category: "CREATIVE PROFILE PORTRAIT",
    description: "A showcase of partnerships, investments, and economic collaboration between Ghana and Germany."
  },
  {
    id: "motion-8",
    title: "ELISPERS AGRIZEN",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781826872/Eslisper_jmw9nl.mp4",
    category: "CORPORATE VIDEO DESIGN",
    description: "A motion piece promoting agriculture, innovation, and sustainable growth."
  },
  {
    id: "motion-9",
    title: "SPEAKUP LIVE CAST INTRO",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781827221/Speakup_Live_Cast_Members_Intro_u0ih7z.mp4",
    category: "ENTERTAINMENT PROMO",
    description: "An engaging opening animation for the SpeakUp live broadcast."
  },
  {
    id: "motion-10",
    title: "ALL AFRICAN CHAMPIONSHIP LED DISPLAY",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781826468/LED_Landscape_2_d46sly.mp4",
    category: "STAGE BACKGROUND EDIT",
    description: "A large-scale LED display solution created for the All-African Championship."
  },
  {
    id: "motion-11",
    title: "AFRICAN CHAMPIONSHIPS TVC",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781826633/African_Championships_TVC_neaazz.mp4",
    category: "SPORTS CAMPAIGN EDIT",
    description: "A promotional television commercial for the African Championships."
  },
  {
    id: "motion-12",
    title: "IVAS CAMPAIGN REEL",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781827630/IVAS_1_j8qtst.mp4",
    category: "PRODUCT COMMERCIAL",
    description: "An animation encouraging students to explore study-abroad opportunities through IVAS."
  }
];

const PORTRAIT_MOTION_ITEMS: MotionItem[] = [
  {
    id: "portrait-1",
    title: "AFRICAN TECHNOLOGY FORUM",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781827500/Partnership_post_fvptd2.mp4",
    category: "VERTICAL COLLAB",
    description: "A platform bringing together innovators, industry leaders, and technology discussions across Africa."
  },
  {
    id: "portrait-2",
    title: "THE JUICE SHOWREEL",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781827322/Comp_1_pbevoh.mp4",
    category: "CREATIVE REEL",
    description: "A vibrant animation showcasing a variety of juice products through engaging motion and visuals."
  },
  {
    id: "portrait-3",
    title: "ALL AFRICAN CHAMPIONSHIP",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781826480/Lestsile_iahna3.mp4",
    category: "PORTRAIT PROFILE",
    description: "A celebration of African sporting excellence, competition, and unity."
  },
  {
    id: "portrait-4",
    title: "ROUND CLICKS SQUEEZEBACK",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781871751/Round_Clicks_update_2_w21a9b.mp4",
    category: "CINEMATIC CUT",
    description: "A smooth squeeze-back animation designed for round click interactions."
  },
  {
    id: "portrait-5",
    title: "EDEM X",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781828332/Edem_Show_uhricw.mp4",
    category: "BAND SHOW LIVE",
    description: "A birthday animation created to celebrate Edem X with engaging visuals and motion graphics."
  },
  {
    id: "portrait-6",
    title: "FIFA CHAMPIONSHIP",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781870573/FIFIA_vfictn.mp4",
    category: "SPORTS MOTION",
    description: "Dynamic sports branding and fast-paced graphic edit showcasing tournament highlights."
  },
  {
    id: "portrait-7",
    title: "MANGO BRAND MOTION",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781870662/Mango_bbfqnv.mp4",
    category: "COMMERCIAL EDIT",
    description: "Vibrant and aesthetic product promo highlighting energetic brand visuals."
  },
  {
    id: "portrait-8",
    title: "WORLD CUP GOAL LINE",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781870623/world_cup_mqfuh6.mp4",
    category: "TOURNAMENT REEL",
    description: "A visual animation capturing the excitement and impact of a World Cup goal moment."
  },
  {
    id: "portrait-9",
    title: "DRY ICE 6TH MARCH",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781870950/Dry_Ice_xfesd4.mp4",
    category: "ATMOSPHERIC EDIT",
    description: "An animated piece showcasing the energy and atmosphere of Ghana’s 6th March celebration through dry ice effects."
  },
  {
    id: "portrait-10",
    title: "LIVE REEL UPDATE",
    videoUrl: "https://res.cloudinary.com/dqjxpupx7/video/upload/v1781871297/Live_update_bc52mu.mp4",
    category: "LIVE SPATIAL",
    description: "High-energy presentation showcasing live recording streams and quick-cut typography."
  }
];

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "item-1",
    title: "PRISTINE SOCIALS 04",
    imageUrl: "https://i.im.ge/QM6lpQ4/Pristine_Socials-04.png"
  },
  {
    id: "item-2",
    title: "PRISTINE SOCIALS 01",
    imageUrl: "https://i.im.ge/QM6lzRD/Pristine_Socials-01.png"
  },
  {
    id: "item-3",
    title: "STAR ASSURANCE - COMPREHENSIVE COVER",
    imageUrl: "https://i.im.ge/QM6lJ3q/Star_Assurance_-_February_2026-02-10.jpg"
  },
  {
    id: "item-4",
    title: "STAR ASSURANCE - ENJOY YOUR TRIPS",
    imageUrl: "https://i.im.ge/QM6lnnp/Star_Assurance_-_Enjoy_your_trips-t600.webp"
  },
  {
    id: "item-5",
    title: "STAR ASSURANCE - SECURITY COVER",
    imageUrl: "https://i.im.ge/QM6lBqP/Star_Assurance_-_February_2026-02.jpg"
  },
  {
    id: "item-6",
    title: "STAR ASSURANCE - RIGHT COVER PLANS",
    imageUrl: "https://i.im.ge/QM6lGt1/Star_Assurance_-_Right_Cover_Plans-11.jpg"
  },
  {
    id: "item-7",
    title: "STONEBWOY PERFORMING LIVE A5 PRINT",
    imageUrl: "https://i.im.ge/QM6lekf/Stonebwoy_Performing_live_A5_Print.jpg"
  },
  {
    id: "item-8",
    title: "STAR ASSURANCE - IF YOU DON'T HAVE TO",
    imageUrl: "https://i.im.ge/QM6X86m/Star_Assurance_-If_you_don_t_have_to.jpg"
  },
  {
    id: "item-9",
    title: "XPRESSGAS CLEAN ENERGY 0l",
    imageUrl: "https://i.im.ge/QM6rlT0/XpressGas-01-deac0595-1000.jpg"
  },
  {
    id: "item-10",
    title: "YA FILLI DADA XPRESS GAS",
    imageUrl: "https://i.im.ge/QM6rrUT/Ya_filli_dada_Xpress_gas-01.jpg"
  },
  {
    id: "item-11",
    title: "STAR ASSURANCE - DRAW COVER 06",
    imageUrl: "https://i.im.ge/QM6rF4L/Star_Assurance_-_Draw_cover-06.jpg"
  },
  {
    id: "item-12",
    title: "STAR ASSURANCE - DRAW COVER 01",
    imageUrl: "https://i.im.ge/QM6ru3c/Star_Assurance_-_Draw_cover-01.jpg"
  },
  {
    id: "item-13",
    title: "EDTECH INSIGHTS FLYER 3",
    imageUrl: "https://i.im.ge/QM6r1qG/Edtech-Flyer_3.jpg"
  },
  {
    id: "item-14",
    title: "EDEM PERFORMING LIVE",
    imageUrl: "https://i.im.ge/QM6r2tx/Edem_Performing_Live.jpg"
  },
  {
    id: "item-15",
    title: "EDTECH SPEAKER QUOTE",
    imageUrl: "https://i.im.ge/QM6rSza/Edtech-speaker_quote2.jpg"
  },
  {
    id: "item-16",
    title: "EXPERIENCE SAFARI WITH JUBARI",
    imageUrl: "https://i.im.ge/QM6rqFJ/Experience_Safari_with_Jubari.jpg"
  },
  {
    id: "item-17",
    title: "KWEKU TEYE PORTRAIT EDIT",
    imageUrl: "https://i.im.ge/QM6rsjy/Kweku_Teye.jpg"
  },
  {
    id: "item-18",
    title: "EDITORIAL DESIGN COLLECTION",
    imageUrl: "https://i.im.ge/QM6raWS/3a782b9b-4da5-4db3-a580-5309058fba4d.jpg"
  }
];

const BRAND_LOGOS = [
  "https://i.im.ge/QMNGZcK/logo-11-t600.webp",
  "https://i.im.ge/QMNGW0F/logo-10-t600.webp",
  "https://i.im.ge/QMNGKe9/logo-09-t600.webp",
  "https://i.im.ge/QMNGkC8/logo-07-t600.webp",
  "https://i.im.ge/QMNGfDX/logo-08-t600.webp",
  "https://i.im.ge/QMNGzvh/logo-06-t600.webp",
  "https://i.im.ge/QMNGv6Y/logo-04-t600.webp",
  "https://i.im.ge/QMNGpSM/logo-05-t600.webp"
];

const InteractiveBox: React.FC<{ item: PortfolioItem; index: number; className?: string; style?: React.CSSProperties; onClick?: () => void }> = ({ item, index, className, style, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      id={`portfolio-box-${item.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      animate={{
        scale: isHovered ? 1.12 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
        mass: 0.5,
      }}
      style={{
        zIndex: isHovered ? 30 : 1,
        ...style
      }}
      className={`relative aspect-[1080/1350] overflow-hidden bg-white border border-zinc-200 rounded-2xl cursor-pointer select-none shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#A855F7]/50 transition-[border-color,box-shadow,transform] duration-300 group ${className || ""}`}
    >
      <motion.img
        id={`portfolio-img-${item.id}`}
        src={item.imageUrl}
        alt={item.title}
        referrerPolicy="no-referrer"
        loading="lazy"
        animate={{
          scale: isHovered ? 1.05 : 1,
          filter: isHovered ? "brightness(1) contrast(1.02)" : "brightness(0.95)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full h-full object-contain bg-white pointer-events-none"
      />

      {/* Elegant minimalist glowing border on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 border-2 border-[#A855F7] rounded-[inherit] pointer-events-none z-20"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/asamoahvictor12@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });

      const result = await response.json();
      if (result.success === "true" || response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Failed to send message. Please try again or contact Victor directly at asamoahvictor12@gmail.com.");
      }
    } catch (error) {
      console.error("Email submission error:", error);
      alert("An error occurred. Please check your connection or email directly to asamoahvictor12@gmail.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full bg-white border border-zinc-250 rounded-2xl p-8 sm:p-12 flex flex-col items-center justify-center text-center shadow-[0_24px_50px_rgba(0,0,0,0.06)] min-h-[400px]"
      >
        <div className="w-16 h-16 bg-[#A855F7]/10 border border-[#A855F7]/30 rounded-full flex items-center justify-center mb-6 text-[#A855F7]">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-zinc-900 font-display text-2xl font-bold uppercase tracking-wide">MESSAGE DISPATCHED!</h3>
        <p className="text-zinc-600 text-sm font-mono leading-relaxed mt-4 max-w-sm">
          Thank you for reaching out, {name}. Your inquiry has successfully bypassed transit filters. Victor will address this shortly.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setName("");
            setEmail("");
            setMessage("");
          }}
          className="mt-8 px-6 py-2.5 rounded-full border border-[#A855F7]/20 bg-[#A855F7]/5 text-[#A855F7] hover:bg-[#A855F7] hover:text-white hover:border-transparent transition-all duration-300 font-sans text-xs font-bold tracking-widest uppercase cursor-pointer"
        >
          SEND ANOTHER MESSAGE
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="w-full bg-white border border-zinc-200/80 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-[0_24px_50px_rgba(0,0,0,0.04)] flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">YOUR NAME :</label>
        <input 
          type="text" 
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Osei Dankwa"
          className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#A855F7]/50 hover:border-zinc-300 text-zinc-900 rounded-xl py-3.5 px-4 font-sans text-sm outline-none transition-all placeholder:text-zinc-400"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">EMAIL ADDRESS :</label>
        <input 
          type="email" 
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. client@agency.com"
          className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#A855F7]/50 hover:border-zinc-300 text-zinc-900 rounded-xl py-3.5 px-4 font-sans text-sm outline-none transition-all placeholder:text-zinc-400"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">MESSAGE PARAMS :</label>
        <textarea 
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your creative requirements, budget and deadlines..."
          className="w-full bg-zinc-50 border border-zinc-200 focus:border-[#A855F7]/50 hover:border-zinc-300 text-zinc-900 rounded-xl py-3.5 px-4 font-sans text-sm outline-none transition-all placeholder:text-zinc-400 resize-none font-sans"
        />
      </div>

      <button
        id="dispatch-btn"
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#A855F7] hover:bg-[#A855F7]/90 disabled:bg-zinc-200 disabled:text-zinc-400 text-white font-sans text-xs font-bold tracking-widest uppercase py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer mt-2"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            DISPATCHING BROADCAST...
          </>
        ) : (
          "DISPATCH MESSAGE"
        )}
      </button>
    </motion.form>
  );
};

// 1920 by 1080 landscape video placeholder component
const VideoPlaceholder: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      id="video-reel-placeholder"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full aspect-[1920/1080] overflow-hidden bg-zinc-950 border border-black/10 rounded-2xl cursor-pointer select-none shadow-[0_8px_32px_rgba(0,0,0,0.15)] group"
    >
      {/* Background Image: High-quality filmmaking / creative scene */}
      <img
        id="video-placeholder-bg"
        src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80"
        alt="Creative Motion Reel"
        className="w-full h-full object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-105"
        referrerPolicy="no-referrer"
      />

      {/* Cinematic dark screen filter */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 z-1 pointer-events-none" />

      {/* Interactive HUD overlay & Play controls */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 md:p-8 z-10 font-mono text-[9px] sm:text-[10px] text-zinc-400">
        {/* Header HUD bar */}
        <div className="flex justify-between items-center mix-blend-difference">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-pulse" />
            <span className="text-white tracking-widest uppercase font-bold text-[9px] sm:text-xs">CREATIVE_MOTION_REEL_2026.MP4</span>
          </div>
          <span className="text-zinc-400 text-[8px] sm:text-sm font-semibold">1080p // 60 FPS</span>
        </div>

        {/* Play Button - bouncy spring on hover with yellow glow */}
        <div className="flex justify-center items-center">
          <motion.div
            id="video-play-btn"
            animate={{
              scale: isHovered ? [1, 1.15, 1.1] : 1,
              backgroundColor: isHovered ? "rgba(168, 85, 247, 1)" : "rgba(0, 0, 0, 0.6)",
              borderColor: isHovered ? "rgba(168, 85, 247, 0.4)" : "rgba(255, 255, 255, 0.15)"
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border flex items-center justify-center backdrop-blur-sm shadow-2xl relative"
          >
            {isHovered && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: 1.4, opacity: 0 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-[#A855F7]/40"
              />
            )}
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 transition-colors duration-300 ${isHovered ? "text-white" : "text-white/80"}`}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.div>
        </div>

        {/* Video Controls Timeline Bar */}
        <div className="space-y-2.5 sm:space-y-3">
          {/* Progress gauge bar */}
          <div className="relative w-full h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: isHovered ? "65%" : "30%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-0 top-0 bottom-0 bg-[#A855F7]"
            />
          </div>
          {/* Timeline details */}
          <div className="flex justify-between items-center text-[8px] sm:text-[10px] text-zinc-400">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-white tracking-widest text-[8px] sm:text-[10px]">LIVE REEL PLAYBACK</span>
              <span className="hidden sm:inline">VOL: 100%</span>
            </div>
            <div className="flex items-center gap-1.5 font-bold text-white text-[9px] sm:text-xs">
              <span className="text-[#A855F7]">00:42</span> / <span>01:30</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Laser Scanning Screen & Hologram Frame on Hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 border-2 border-[#A855F7] rounded-[inherit] pointer-events-none z-20"
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "200%" }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A855F7]/85 to-transparent z-10 pointer-events-none"
            />
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Interactive Design Disciplines List with Raise-up & Highlight Animations
// Interactive Design Disciplines List scrolling from left to right in one line with dots
const InteractiveDisciplines: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const disciplines = [
    "Brand Identity",
    "Graphic Design",
    "Motion Design",
    "Art Direction",
    "Vibe Coding",
    "Print Design",
    "Website"
  ];

  return (
    <section 
      id="disciplines-section" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? '#F97316' : '#FAFAFA',
        borderColor: isHovered ? 'rgba(234, 88, 12, 0.4)' : 'rgba(228, 228, 231, 0.6)',
        transition: 'all 0.3s ease-in-out'
      }}
      className="w-full py-8 md:py-10 border-t border-b relative z-10 flex flex-col items-center overflow-hidden"
    >
      <div className="w-full overflow-hidden flex relative">
        <div className="animate-marquee-ltr-nonpause flex flex-row w-max flex-nowrap items-center gap-0">
          {[...Array(6)].map((_, listIdx) => (
            <div key={listIdx} className="flex items-center flex-nowrap whitespace-nowrap">
              {disciplines.map((item, idx) => (
                <div key={idx} className="flex items-center flex-nowrap">
                  <span 
                     style={{ 
                       color: isHovered ? '#FFFFFF' : '#18181B',
                       transition: 'color 0.3s ease-in-out'
                     }}
                     className="text-lg sm:text-xl md:text-2xl font-display font-black tracking-wider uppercase select-none"
                  >
                    {item}
                  </span>
                  <span 
                     style={{ 
                       color: isHovered ? '#FFFFFF' : '#A855F7',
                       transition: 'color 0.3s ease-in-out'
                     }}
                     className="text-lg sm:text-xl md:text-2xl font-display font-black mx-6 select-none"
                  >
                    •
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return isMobile;
};

const getOptimizedVideoUrl = (url: string, width?: number) => {
  if (!url) return '';
  if (url.includes('res.cloudinary.com')) {
    if (url.includes('/upload/f_auto') || url.includes('/upload/q_auto') || url.includes('/upload/c_')) {
      return url;
    }
    const transformation = width ? `f_auto,q_auto,w_${width},c_scale/` : 'f_auto,q_auto/';
    return url.replace('/video/upload/', `/video/upload/${transformation}`);
  }
  return url;
};

const getVideoPosterUrl = (url: string, width?: number) => {
  if (!url) return undefined;
  if (url.includes('res.cloudinary.com')) {
    const transformation = width ? `f_auto,q_auto,so_auto,w_${width},c_scale/` : 'f_auto,q_auto,so_auto/';
    return url
      .replace('/video/upload/', `/video/upload/${transformation}`)
      .replace(/\.mp4$/i, '.jpg');
  }
  return undefined;
};

interface MotionCardProps {
  item: MotionItem;
  index: number;
  onClick: () => void;
  isPortrait?: boolean;
}

const MotionCard: React.FC<MotionCardProps> = ({ item, index, onClick, isPortrait = false }) => {
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    observer.observe(video);
    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  const posterUrl = getVideoPosterUrl(item.videoUrl, isMobile ? 480 : 800);
  const optimizedVideoUrl = getOptimizedVideoUrl(item.videoUrl, isMobile ? 480 : 800);

  return (
    <motion.div
      id={isPortrait ? `portrait-motion-card-${item.id}` : `motion-card-${item.id}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={!isMobile ? { scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 } : undefined}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      onClick={onClick}
      className="group cursor-pointer flex flex-col gap-4 relative select-none"
    >
      <div className={`w-full ${isPortrait ? 'aspect-[9/16]' : 'aspect-[16/9]'} bg-white border border-zinc-200 rounded-2xl overflow-hidden relative shadow-[0_8px_24px_rgba(0,0,0,0.06)] group-hover:border-[#A855F7]/40 transition-[border-color] duration-300`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
        
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="metadata"
          poster={posterUrl}
          className="w-full h-full object-cover z-0 pointer-events-none scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
        >
          <source src={optimizedVideoUrl} type="video/mp4" />
        </video>

        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className={`${isPortrait ? 'w-12 h-12' : 'w-14 h-14'} rounded-full bg-[#A855F7] text-white flex items-center justify-center shadow-lg group-hover:opacity-100 group-hover:scale-110 lg:opacity-0 transition-all duration-300`}>
            <Play size={isPortrait ? 18 : 20} fill="currentColor" className="ml-1 text-white" />
          </div>
        </div>
      </div>

      {isPortrait ? (
        <div className="px-1 flex flex-col gap-1 text-left">
          <h4 className="text-zinc-800 uppercase font-display font-semibold text-sm tracking-wide group-hover:text-[#A855F7] transition-colors duration-200 truncate">
            {item.title}
          </h4>
          <p className="text-zinc-500 text-[10px] font-mono leading-normal line-clamp-2 mt-0.5">
            {item.description}
          </p>
        </div>
      ) : (
        <div className="px-1 flex flex-col gap-1.5 text-left">
          <h3 className="text-zinc-800 uppercase font-display font-semibold text-xl tracking-wide group-hover:text-[#A855F7] transition-colors duration-200">
            {item.title}
          </h3>
          <p className="text-zinc-600 text-xs sm:text-sm font-mono leading-relaxed mt-1">
            {item.description}
          </p>
        </div>
      )}
    </motion.div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#A855F7] text-white py-16 px-6 sm:px-12 md:px-24 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-6">
        
        {/* Branding/Copyright */}
        <div className="flex flex-col gap-2">
          <h3 className="font-display font-black text-xl tracking-tight uppercase">
            VICTOR OHENE ASAMOAH
          </h3>
          <p className="text-xs font-mono tracking-widest text-white/80 uppercase font-bold">
            © {new Date().getFullYear()} Victor Ohene Asamoah • All rights reserved
          </p>
        </div>

        {/* Contact and Social Info */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          
          {/* Contact details */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-black text-white/70">
              CONTACT
            </span>
            <a href="mailto:asamoahvictor12@gmail.com" className="text-sm font-sans font-semibold hover:underline underline-offset-4 transition-all duration-200 text-white">
              asamoahvictor12@gmail.com
            </a>
          </div>

          {/* Social media links */}
          <div className="flex flex-col gap-2.5">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-black text-white/70">
              FOLLOW
            </span>
            <div className="flex gap-4 flex-wrap">
              <a href="https://www.instagram.com/estudiox_graphics?igsh=bDJqNndjbDJuZndn&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-sm font-sans font-semibold hover:underline underline-offset-4 transition-all duration-200 text-white uppercase">
                Instagram
              </a>
              <span className="text-white/40 font-mono">•</span>
              <a href="https://www.linkedin.com/in/asamoah-victor-62831a190" target="_blank" rel="noopener noreferrer" className="text-sm font-sans font-semibold hover:underline underline-offset-4 transition-all duration-200 text-white uppercase">
                LinkedIn
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [dotTrailPosition, setDotTrailPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isOverNavbar, setIsOverNavbar] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);
  const [isOverBrandBanner, setIsOverBrandBanner] = useState(false);
  const [isOverDispatchBtn, setIsOverDispatchBtn] = useState(false);

  useEffect(() => {
    // Add custom cursor class to html element
    document.documentElement.classList.add("custom-cursor-active");

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      const target = e.target as HTMLElement;
      setIsOverNavbar(!!(target && target.closest("#main-header")));
      setIsOverFooter(!!(target && target.closest("footer")));
      setIsOverBrandBanner(!!(target && target.closest("#brand-scrolling-banner")));
      setIsOverDispatchBtn(!!(target && target.closest("#dispatch-btn")));
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = () => {
      setIsClicked(true);
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    // Attach listeners to identify hover state over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsOverNavbar(!!(target && target.closest("#main-header")));
      setIsOverFooter(!!(target && target.closest("footer")));
      setIsOverBrandBanner(!!(target && target.closest("#brand-scrolling-banner")));
      setIsOverDispatchBtn(!!(target && target.closest("#dispatch-btn")));
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.closest("[role='button']") ||
          target.classList.contains("cursor-pointer") ||
          target.closest(".cursor-pointer"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Smooth trail effect for both dot and ring (dot is faster, ring is slower/trails more)
  useEffect(() => {
    let animationFrameId: number;
    
    const updateTrail = () => {
      setDotTrailPosition(prev => {
        const ease = 0.35; // Fast follow
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease
        };
      });

      setTrailPosition(prev => {
        const ease = 0.08; // Slower follow
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease
        };
      });

      animationFrameId = requestAnimationFrame(updateTrail);
    };

    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  // Custom Cursor color: Purple matching the brand accent, turns black over footer, brand banner, and dispatch button
  const cursorColor = (isOverFooter || isOverBrandBanner || isOverDispatchBtn) ? "#000000" : "#A855F7";

  return (
    <>
      {/* Outer Ring with slower lag and dark drop shadow for light backgrounds */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full border-2 transition-transform duration-150 ease-out hidden md:block"
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
          width: isHovered ? "60px" : "40px",
          height: isHovered ? "60px" : "40px",
          transform: `translate(-50%, -50%) scale(${isClicked ? 0.8 : 1})`,
          borderColor: cursorColor,
          opacity: isOverNavbar ? 0 : 0.85,
          filter: "drop-shadow(0 0 2px rgba(0,0,0,0.4))",
          transition: "opacity 0.2s ease, transform 0.15s ease-out, width 0.15s ease-out, height 0.15s ease-out"
        }}
      />
      {/* Inner Dot with faster lag and dark drop shadow for light backgrounds */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full transition-transform duration-100 ease-out hidden md:block"
        style={{
          left: `${dotTrailPosition.x}px`,
          top: `${dotTrailPosition.y}px`,
          width: "14px",
          height: "14px",
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
          backgroundColor: cursorColor,
          opacity: isOverNavbar ? 0 : 1,
          filter: "drop-shadow(0 0 2px rgba(0,0,0,0.4))",
          transition: "opacity 0.2s ease, transform 0.1s ease-out"
        }}
      />
    </>
  );
};

export default function App() {
  const isMobile = useIsMobile();
  const [isBrandHovered, setIsBrandHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [selectedMotionItem, setSelectedMotionItem] = useState<MotionItem | null>(null);
  const [hoveredAppIndex, setHoveredAppIndex] = useState<number | null>(null);
  const [hoveredAIPlatformIndex, setHoveredAIPlatformIndex] = useState<number | null>(null);
  const menuItems = ['HOME', 'ABOUT ME', 'MOTION', 'CONTACT'];

  // Background music audio controllers
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize and load the loop music
  useEffect(() => {
    const audio = new Audio("https://res.cloudinary.com/dqjxpupx7/video/upload/v1781876785/vhQ6Obv2R_Q-0c5a9f896effbf4f8b4634356818ead8727_agodvi.mp3");
    audio.loop = true;
    audio.volume = 0.15; // Soft afrobeat background volume
    audioRef.current = audio;

    // Trigger immediate play if already supported/interacted
    audio.play().then(() => {
      setIsPlayingMusic(true);
    }).catch(() => {
      console.log("Autoplay waiting for first physical user interaction...");
    });

    // Trigger on first click or drag/scroll due to strict global browser block policies
    const playOnFirstInteraction = () => {
      if (audio.paused) {
        audio.play().then(() => {
          setIsPlayingMusic(true);
        }).catch((err) => {
          console.log("Autoplay block waiting for interaction:", err);
        });
      }
      document.removeEventListener('mousedown', playOnFirstInteraction);
      document.removeEventListener('click', playOnFirstInteraction);
      document.removeEventListener('touchstart', playOnFirstInteraction);
      document.removeEventListener('scroll', playOnFirstInteraction);
    };

    document.addEventListener('mousedown', playOnFirstInteraction);
    document.addEventListener('click', playOnFirstInteraction);
    document.addEventListener('touchstart', playOnFirstInteraction);
    document.addEventListener('scroll', playOnFirstInteraction);

    return () => {
      audio.pause();
      document.removeEventListener('mousedown', playOnFirstInteraction);
      document.removeEventListener('click', playOnFirstInteraction);
      document.removeEventListener('touchstart', playOnFirstInteraction);
      document.removeEventListener('scroll', playOnFirstInteraction);
    };
  }, []);

  // Handle visibility changes (tab switches) to pause/play background music
  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      } else {
        if (isPlayingMusic && !selectedMotionItem) {
          audio.play().catch((err) => console.log("Failed to resume visibility:", err));
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlayingMusic, selectedMotionItem]);

  // Control pause/unpause based on whether a video modal is active
  useEffect(() => {
    if (!audioRef.current) return;

    if (selectedMotionItem) {
      audioRef.current.pause();
    } else {
      if (isPlayingMusic) {
        audioRef.current.play().catch((err) => {
          console.log("Could not play on motion close:", err);
        });
      }
    }
  }, [selectedMotionItem, isPlayingMusic]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlayingMusic) {
      audioRef.current.pause();
      setIsPlayingMusic(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlayingMusic(true);
      }).catch((err) => {
        console.log("Music play failed:", err);
      });
    }
  };

  const [currentView, setCurrentView] = useState<'home' | 'about' | 'motion' | 'contact'>(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const view = searchParams.get('view');
    if (view === 'about' || window.location.pathname === '/about-us' || window.location.pathname === '/about') {
      return 'about';
    }
    if (view === 'motion' || window.location.pathname === '/motion') {
      return 'motion';
    }
    if (view === 'contact' || window.location.pathname === '/contact') {
      return 'contact';
    }
    return 'home';
  });

  useEffect(() => {
    const handleUrlChange = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const view = searchParams.get('view');
      if (view === 'about' || window.location.pathname === '/about-us' || window.location.pathname === '/about') {
        setCurrentView('about');
      } else if (view === 'motion' || window.location.pathname === '/motion') {
        setCurrentView('motion');
      } else if (view === 'contact' || window.location.pathname === '/contact') {
        setCurrentView('contact');
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const handleNavigate = (view: 'home' | 'about' | 'motion' | 'contact', hash?: string) => {
    setIsMenuOpen(false);
    setCurrentView(view);
    
    const url = new URL(window.location.href);
    if (view !== 'home') {
      url.searchParams.set('view', view);
    } else {
      url.searchParams.delete('view');
    }
    
    if (hash) {
      url.hash = hash;
    } else {
      url.hash = '';
    }
    
    window.history.pushState({}, '', url.toString());

    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getHref = (item: string) => {
    if (item === 'ABOUT ME') return '?view=about';
    if (item === 'MOTION') return '?view=motion';
    if (item === 'CONTACT') return '?view=contact';
    if (item === 'HOME') return '#home';
    return `#${item.toLowerCase()}`;
  };

  return (
    <div id="app-container" className="min-h-screen w-full bg-white text-zinc-900 flex flex-col justify-between selection:bg-zinc-900 selection:text-white font-sans relative overflow-x-hidden">
      <CustomCursor />
      
      {/* Navigation Header - Liquid Glass Floating Dock (Shared across tabs) */}
      <header
        id="main-header"
        className="fixed top-0 left-1/4 md:left-1/2 md:-translate-x-1/2 w-auto max-w-full z-50 flex flex-row flex-nowrap justify-between items-center py-2 px-4 rounded-b-xl rounded-t-none border-x border-b border-white/[0.08] bg-zinc-950/45 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-500 hover:border-white/[0.12] left-1/2 -translate-x-1/2 whitespace-nowrap"
      >
        {/* Subtle dynamic gloss shine overlay */}
        <div id="liquid-glass-gloss" className="absolute inset-0 rounded-b-xl bg-gradient-to-b from-white/[0.04] via-transparent to-transparent pointer-events-none" />

        <a
          id="header-logo-link"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavigate('home');
          }}
          className="text-white font-display font-black text-[11px] sm:text-xs tracking-widest select-none hover:text-black transition-colors duration-300 relative z-10 pl-0.5 mr-5 md:mr-6 whitespace-nowrap inline-block"
        >
          V A
        </a>

        {/* Desktop Menu */}
        <nav id="nav-desktop" className="hidden md:flex flex-row flex-nowrap items-center gap-0.5 relative z-10 whitespace-nowrap">
          {menuItems.map((item) => {
            const isActive = (item === 'HOME' && currentView === 'home') || 
                             (item === 'ABOUT ME' && currentView === 'about') ||
                             (item === 'MOTION' && currentView === 'motion') ||
                             (item === 'CONTACT' && currentView === 'contact');
            return (
              <a
                id={`nav-item-desktop-${item.toLowerCase()}`}
                key={item}
                href={getHref(item)}
                onClick={(e) => {
                  e.preventDefault();
                  if (item === 'HOME') handleNavigate('home');
                  else if (item === 'ABOUT ME') handleNavigate('about');
                  else if (item === 'MOTION') handleNavigate('motion');
                  else if (item === 'CONTACT') handleNavigate('contact');
                }}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative text-[10px] lg:text-[11px] font-semibold tracking-[0.16em] font-sans px-3.5 py-1 rounded-full transition-colors duration-300 whitespace-nowrap ${
                  isActive ? 'text-[#eca501] hover:text-black' : 'text-stone-300 hover:text-black'
                }`}
              >
                <span className="relative z-10">{item}</span>
                {isActive && (
                  <span className="absolute inset-0 bg-[#eca501]/10 rounded-full border border-[#eca501]/20 shadow-[inner_0_1px_1px_rgba(236,165,1,0.1)]" />
                )}
                {hoveredItem === item && (
                  <motion.span
                     layoutId="hover-pill"
                     className="absolute inset-0 bg-white/[0.06] rounded-full border border-white/5 shadow-[inner_0_1px_1px_rgba(255,255,255,0.06)]"
                     transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button - Styled as a subtle glass trigger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden transition-all duration-200 p-1.5 z-50 relative focus:outline-none cursor-pointer rounded-full hover:bg-white/5 active:scale-95 ${
            isMenuOpen ? 'text-zinc-950 hover:text-[#eca501]' : 'text-white hover:text-[#eca501]'
          }`}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Dimmer */}
            <motion.div
              id="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-20 md:hidden"
            />

            {/* Shape 1: Black Panel */}
            <motion.div
              id="mobile-menu-shape-black"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 w-[280px] sm:w-[320px] h-screen bg-zinc-950 z-30 md:hidden"
            />

            {/* Shape 2: Purple Panel */}
            <motion.div
              id="mobile-menu-shape-purple"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 w-[280px] sm:w-[320px] h-screen bg-[#A855F7] z-31 md:hidden"
            />

            {/* Shape 3: White Menu Content Panel */}
            <motion.div
              id="mobile-menu-content-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 w-[280px] sm:w-[320px] h-screen bg-white z-32 border-l border-zinc-200/50 shadow-2xl flex flex-col justify-start items-start pt-32 px-10 md:hidden"
            >
              <nav id="nav-mobile-list" className="flex flex-col items-start gap-8 w-full">
                {menuItems.map((item, index) => {
                  const isActive = (item === 'HOME' && currentView === 'home') || 
                                   (item === 'ABOUT ME' && currentView === 'about') ||
                                   (item === 'MOTION' && currentView === 'motion') ||
                                   (item === 'CONTACT' && currentView === 'contact');
                  return (
                    <motion.a
                      id={`nav-item-mobile-${item.toLowerCase()}`}
                      key={item}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ delay: 0.55 + index * 0.05, duration: 0.3 }}
                      href={getHref(item)}
                      onClick={(e) => {
                        e.preventDefault();
                        if (item === 'HOME') handleNavigate('home');
                        else if (item === 'ABOUT ME') handleNavigate('about');
                        else if (item === 'MOTION') handleNavigate('motion');
                        else if (item === 'CONTACT') handleNavigate('contact');
                      }}
                      className={`text-lg font-bold tracking-[0.2em] font-display transition-colors duration-200 ${
                        isActive ? 'text-[#eca501] hover:text-[#A855F7]' : 'text-zinc-800 hover:text-[#A855F7]'
                      }`}
                    >
                      {item}
                    </motion.a>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Tab/View Body with Fluid Transitions */}
      <AnimatePresence mode="wait">
        {currentView === 'about' ? (
          <motion.div
            key="about-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="w-full flex-1 flex flex-col"
          >
            {/* Hero Landing of the About Us Page - Displaying the dynamic background video */}
            <section id="about-landing" className="relative w-full h-screen bg-white flex flex-col justify-end overflow-hidden pb-12 sm:pb-16 md:pb-24 px-6 sm:px-12 md:px-24">
              <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center bg-white">
                {isMobile ? (
                  <img
                    id="about-bg-video-player"
                    src={aboutLandingHero}
                    alt="Victor Ohene Asamoah - Creative Direction"
                    fetchPriority="high"
                    className="w-full h-full object-cover max-w-full block select-none pointer-events-none opacity-100"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <video
                    id="about-bg-video-player"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={aboutLandingHero}
                    className="w-full h-full object-cover max-w-full block select-none pointer-events-none opacity-100"
                  >
                    <source src={getOptimizedVideoUrl("https://res.cloudinary.com/dqjxpupx7/video/upload/v1/kling_20260618_VIDEO__Cyberpunk_1425_0_auizto.mp4", 1280)} type="video/mp4" />
                    <source src={getOptimizedVideoUrl("https://res.cloudinary.com/dqjxpupx7/video/upload/kling_20260618_VIDEO__Cyberpunk_1425_0_auizto.mp4", 1280)} type="video/mp4" />
                  </video>
                )}
              </div>

              {/* Giant looping scrolling background name on About Page - Translucent Gold, at the bottom with growth scale */}
              <div id="about-scrolling-bg-text-container" className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-[2] pointer-events-none translate-y-[5%]">
                <motion.div 
                  id="about-scrolling-track" 
                  className="animate-marquee-ltr flex whitespace-nowrap"
                  animate={{ 
                    scale: [1, 1.16, 1],
                    y: [0, -8, 0]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {Array.from({ length: 8 }).map((_, i) => (
                    <span
                      key={i}
                      className="text-[8rem] sm:text-[12rem] md:text-[18rem] lg:text-[24rem] xl:text-[28rem] font-display font-black tracking-wider leading-none mx-6 sm:mx-12 select-none"
                      style={{ 
                        WebkitTextStroke: "none", 
                        color: "rgba(0, 0, 0, 0.18)",
                      }}
                    >
                      VICTOR ASAMOAH
                    </span>
                  ))}
                </motion.div>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 font-mono text-[9px] tracking-widest text-zinc-500 select-none animate-bounce">
                <span>SCROLL DOWN</span>
                <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </section>

            {/* Solid background section with About details */}
            <section id="about-details" className="w-full bg-zinc-50 py-24 px-6 sm:px-12 md:px-24 relative z-10 flex flex-col items-center border-t border-zinc-150">
              <div id="about-inner" className="max-w-5xl w-full flex flex-col gap-16 lg:gap-20 items-start">
                <motion.div 
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="w-full"
                >
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#A855F7] uppercase font-bold">
                    ABOUT / CREATIVE DIRECTION
                  </span>
                  <h2 className="text-zinc-900 text-3xl sm:text-4xl font-display font-black tracking-tight uppercase mt-3 leading-tight flex flex-wrap gap-x-3">
                    {"VICTOR OHENE ASAMOAH".split(" ").map((word, wIdx) => (
                      <span key={wIdx} className="inline-block whitespace-nowrap">
                        {word.split("").map((char, cIdx) => (
                          <motion.span
                            id={`about-char-${wIdx}-${cIdx}`}
                            key={`${wIdx}-${cIdx}`}
                            initial={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.15, color: "#A855F7" }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                            className="inline-block hover:text-[#A855F7] transition-colors duration-150 ease-out cursor-default select-none animate-none"
                          >
                            {char}
                          </motion.span>
                        ))}
                      </span>
                    ))}
                  </h2>
                  <p className="text-zinc-600 text-sm sm:text-base mt-6 leading-relaxed max-w-4xl">
                    Graphic Designer with a strong passion for visual creativity and delivering impactful design solutions. Dedicated to producing high-quality work that meets client expectations and deadlines. Proficient in Adobe Photoshop, Adobe Illustrator, Adobe After Effects, and Adobe Premiere Pro. While experienced across multiple design disciplines, I have a particular passion for motion design, specializing in creating engaging animations and dynamic visual content that bring ideas to life.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="w-full"
                >
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#A855F7] uppercase font-bold block mb-8">
                    APPLICATIONS & WORKFLOWS
                  </span>
                  <div 
                    id="applications-list" 
                    className="w-full grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8"
                    onMouseLeave={() => setHoveredAppIndex(null)}
                  >
                    {[
                      { name: "Adobe Premiere Pro", short: "Pr", bgColor: "bg-[#14002a]", borderCol: "border-[#EA77FF]/40", textCol: "text-[#EA77FF]", glowBg: "bg-[#EA77FF]/10", glowBorder: "border-[#EA77FF]", hoverText: "text-[#EA77FF]" },
                      { name: "Adobe Photoshop", short: "Ps", bgColor: "bg-[#001726]", borderCol: "border-[#00C8FF]/40", textCol: "text-[#00C8FF]", glowBg: "bg-[#00C8FF]/10", glowBorder: "border-[#00C8FF]", hoverText: "text-[#00C8FF]" },
                      { name: "Adobe After Effects", short: "Ae", bgColor: "bg-[#170026]", borderCol: "border-[#D124FF]/40", textCol: "text-[#D124FF]", glowBg: "bg-[#D124FF]/10", glowBorder: "border-[#D124FF]", hoverText: "text-[#D124FF]" },
                      { name: "Adobe Illustrator", short: "Ai", bgColor: "bg-[#2a1400]", borderCol: "border-[#FF9A00]/40", textCol: "text-[#FF9A00]", glowBg: "bg-[#FF9A00]/10", glowBorder: "border-[#FF9A00]", hoverText: "text-[#FF9A00]" },
                    ].map((app, idx) => {
                      const isHovered = hoveredAppIndex === idx;
                      
                      const scale = isHovered ? 1.12 : 1.0;
                      const yOffset = isHovered ? -6 : 0;
                      
                      return (
                        <motion.div
                          key={app.name}
                          onMouseEnter={() => setHoveredAppIndex(idx)}
                          animate={{ scale, y: yOffset }}
                          transition={{ type: "spring", stiffness: 380, damping: 22 }}
                          className="flex items-center gap-4 group cursor-pointer origin-center relative"
                          style={{ zIndex: isHovered ? 30 : 10 }}
                        >
                          <div className={`w-12 h-12 ${app.bgColor} border ${app.borderCol} rounded-xl flex items-center justify-center flex-shrink-0 select-none group-hover:rotate-6 group-hover:${app.glowBorder} group-hover:${app.glowBg} transition-all duration-300 shadow-xl`}>
                            <span className={`${app.textCol} font-sans font-black text-[15px] tracking-tight`}>{app.short}</span>
                          </div>
                          <div>
                            <h4 className={`text-zinc-800 font-display font-medium text-base tracking-wide group-hover:${app.hoverText} group-hover:translate-x-1 transition-all duration-300`}>{app.name}</h4>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* AI Platforms Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="w-full border-t border-zinc-200/80 pt-16"
                >
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#A855F7] uppercase font-bold block mb-8">
                    AI PLATFORMS USED
                  </span>
                  <div 
                    id="ai-platforms-list" 
                    className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
                    onMouseLeave={() => setHoveredAIPlatformIndex(null)}
                  >
                    {[
                      { name: "Kling AI", desc: "Video and Image Generation", logo: "https://i.im.ge/QM6ORhY/kling-ai-logo-t600.webp" },
                      { name: "ChatGPT", desc: "Image generation and research", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
                      { name: "Flow AI", desc: "Video and Image Generation", logo: "https://i.im.ge/QM6OZB4/flow_ai-t600.webp" },
                      { name: "Claude", desc: "Image generation and research", logo: "https://i.im.ge/QM6O8XM/claude_logo-t600.webp" },
                      { name: "Google AI Studio", desc: "Vibe Coding", logo: "https://i.im.ge/QM6OWbD/google_ai_studio-t600.webp" }
                    ].map((platform, idx) => {
                      const isHovered = hoveredAIPlatformIndex === idx;
                      
                      const scale = isHovered ? 1.12 : 1.0;
                      const yOffset = isHovered ? -6 : 0;
                      
                      return (
                        <motion.div
                          key={platform.name}
                          onMouseEnter={() => setHoveredAIPlatformIndex(idx)}
                          animate={{ scale, y: yOffset }}
                          transition={{ type: "spring", stiffness: 380, damping: 22 }}
                          className="bg-white border border-zinc-200/60 hover:border-[#A855F7]/40 rounded-2xl p-5 flex flex-col gap-3 group cursor-pointer relative origin-center shadow-sm"
                          style={{ zIndex: isHovered ? 30 : 10 }}
                        >
                          <img 
                            src={platform.logo} 
                            alt={`${platform.name} Logo`} 
                            className="w-10 h-10 rounded-xl object-contain bg-zinc-100 p-1.5 group-hover:scale-110 transition-transform duration-300 select-none" 
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h4 className="text-zinc-800 font-display font-semibold text-sm tracking-wide group-hover:text-[#A855F7] transition-colors duration-200">{platform.name}</h4>
                            <p className="text-zinc-500 text-[10px] font-mono leading-normal mt-1">{platform.desc}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Contact area inside About us page */}
              <motion.div 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="max-w-5xl w-full border-t border-zinc-200 mt-20 pt-16 flex flex-col md:flex-row justify-between items-start gap-12"
              >
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-[#A855F7] uppercase font-bold">COLLABORATION</span>
                  <h2 className="text-zinc-900 text-2xl font-display font-black tracking-tight uppercase mt-2">WANT TO CREATE SOMETHING?</h2>
                  <p className="text-zinc-600 text-xs mt-3 max-w-sm leading-relaxed font-mono">
                    Available for visual direction, freelance client bookings, and technical consulting. Feel free to reach out with project parameters.
                  </p>
                </div>
                <div className="flex flex-col gap-4 font-mono text-xs w-full md:w-auto">
                  <span className="text-[#A855F7] text-[10px] tracking-widest font-bold">DIRECT CHANNELS:</span>
                  <a href="mailto:asamoahvictor12@gmail.com" className="hover:text-[#A855F7] text-zinc-700 transition-colors duration-200 flex items-center gap-2 font-semibold">
                    <Mail size={14} /> asamoahvictor12@gmail.com
                  </a>
                  <div className="flex gap-4 mt-2">
                    <a href="https://www.instagram.com/estudiox_graphics?igsh=bDJqNndjbDJuZndn&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-[#A855F7] text-zinc-600 transition-colors duration-200 uppercase font-semibold">INSTAGRAM</a>
                    <span className="text-zinc-300">/</span>
                    <a href="https://www.linkedin.com/in/asamoah-victor-62831a190" target="_blank" rel="noopener noreferrer" className="hover:text-[#A855F7] text-zinc-600 transition-colors duration-200 uppercase font-semibold">LINKEDIN</a>
                  </div>
                </div>
              </motion.div>

              <div id="scroll-to-top-container" className="w-full flex justify-center mt-20">
                <motion.button
                  id="scroll-to-top-button"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-[#A855F7] hover:shadow-[0_4px_24px_rgba(168,85,247,0.3)] cursor-pointer transition-all duration-300"
                >
                  <ArrowUp size={20} strokeWidth={2.5} />
                </motion.button>
              </div>
            </section>

            {/* Design disciplines scroll ticker tape */}
            <InteractiveDisciplines />

            {/* About footer */}
            <Footer />
          </motion.div>
        ) : currentView === 'motion' ? (
          <motion.div
            key="motion-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="w-full flex-1 flex flex-col pt-0 bg-white relative"
          >
            {/* Ambient Background Cinematic Particle Shimmer */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.04)_0%,transparent_70%)] pointer-events-none" />
 
            <section id="motion-hero" className="w-full min-h-[500px] sm:min-h-[600px] px-6 sm:px-12 md:px-24 relative z-10 flex flex-col justify-end items-center select-none overflow-hidden rounded-b-[2rem] border-b border-zinc-200/80 shadow-2xl pb-16 sm:pb-20 pt-44">
              {/* Cinematic Video Background inside Hero container */}
              <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center bg-white">
                {isMobile ? (
                  <img
                    id="motion-hero-bg-video-player"
                    src={getVideoPosterUrl("https://res.cloudinary.com/dqjxpupx7/video/upload/v1781819816/kling_20260619_VIDEO_Two_futuri_1482_0_es8z02.mp4", 640)}
                    alt="Victor Ohene Asamoah - Motion Design"
                    fetchPriority="high"
                    className="w-full h-full object-cover max-w-full block select-none pointer-events-none opacity-100"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <video
                    id="motion-hero-bg-video-player"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={getVideoPosterUrl("https://res.cloudinary.com/dqjxpupx7/video/upload/v1781819816/kling_20260619_VIDEO_Two_futuri_1482_0_es8z02.mp4", 1280)}
                    className="w-full h-full object-cover max-w-full block select-none pointer-events-none opacity-100"
                  >
                    <source src={getOptimizedVideoUrl("https://res.cloudinary.com/dqjxpupx7/video/upload/v1781819816/kling_20260619_VIDEO_Two_futuri_1482_0_es8z02.mp4", 1280)} type="video/mp4" />
                  </video>
                )}
                {/* Micro-faint gradient overlay just for text contrast */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 via-black/15 to-transparent pointer-events-none z-0" />
              </div>
 
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl w-full text-center sm:text-left relative z-10"
              >
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight uppercase leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                  MOTION DESIGN
                </h1>
                <p className="text-zinc-100 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl font-mono drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                  Motion designs I have worked on for other brands.
                </p>
              </motion.div>
            </section>
 
            {/* Grid of 12 Boxes - 3 on each line on Desktop (Shifted downwards with extra top padding) */}
            <section id="motion-grid-section" className="w-full pt-16 sm:pt-24 pb-32 px-6 sm:px-12 md:px-24 relative z-10 flex flex-col items-center">
              <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {MOTION_ITEMS.map((item, index) => (
                  <MotionCard
                    key={item.id}
                    item={item}
                    index={index}
                    onClick={() => setSelectedMotionItem(item)}
                  />
                ))}
              </div>

              {/* PORTRAIT VIDEOS SECTION - Five 1080x1920 (9:16) portrait video boxes */}
              <div id="portrait-motion-container" className="max-w-7xl w-full mt-24 sm:mt-32">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#A855F7] uppercase font-bold block mb-10 text-center sm:text-left">
                  PORTRAIT REELS COLLECTION // 1080 x 1920
                </span>
                
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
                  {PORTRAIT_MOTION_ITEMS.map((item, index) => (
                    <MotionCard
                      key={item.id}
                      item={item}
                      index={index}
                      onClick={() => setSelectedMotionItem(item)}
                      isPortrait={true}
                    />
                  ))}
                </div>
              </div>
 
              {/* Scroll to Top Arrow Inside Motion Subpage */}
              <div id="motion-scroll-up" className="w-full flex justify-center mt-28">
                <motion.button
                  id="motion-scroll-up-btn"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-[#A855F7] hover:shadow-[0_4px_24px_rgba(168,85,247,0.3)] cursor-pointer transition-all duration-300"
                >
                  <ArrowUp size={20} strokeWidth={2.5} />
                </motion.button>
              </div>
            </section>

            {/* Design disciplines scroll ticker tape */}
            <InteractiveDisciplines />
 
            {/* Motion Subpage footer */}
            <Footer />
          </motion.div>
        ) : currentView === 'contact' ? (
          <motion.div
            key="contact-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="w-full flex-1 flex flex-col pt-12 md:pt-14 lg:pt-16 bg-white relative min-h-screen justify-between"
          >
            {/* Ambient background accent shimmer */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.04)_0%,transparent_70%)] pointer-events-none" />
            <section id="contact-main" className="w-full pt-4 pb-16 px-6 sm:px-12 md:px-24 relative z-10 flex flex-col items-center select-none flex-1">
              <div className="max-w-5xl w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column: Get in Touch & Contact Form */}
                  <motion.div 
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-7 flex flex-col gap-8 w-full"
                  >
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.25em] text-[#A855F7] uppercase font-bold">
                        GET IN TOUCH // DIRECT LINE
                      </span>
                      <h1 className="text-zinc-900 text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight uppercase mt-3 leading-tight font-sans">
                        LET'S SPARK SOMETHING
                      </h1>
                      <p className="text-zinc-600 text-sm sm:text-base mt-2.5 leading-relaxed font-mono">
                        Whether you have a commercial campaign, motion project, spatial branding enquiry or general agency outreach, reach out directly.
                      </p>
                    </div>

                    <div id="contact-form-container" className="w-full select-text">
                      <ContactForm />
                    </div>
                  </motion.div>

                  {/* Right Column: Direct Mail / Social Channels */}
                  <motion.div 
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="lg:col-span-5 w-full lg:sticky lg:top-28"
                  >
                    <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 backdrop-blur-md shadow-lg relative overflow-hidden group hover:border-[#A855F7]/20 transition-colors">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#A855F7]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#A855F7]/10 transition-colors" />
                      
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-mono tracking-widest text-[#A855F7] uppercase font-bold">DIRECT MAIL :</span>
                        <a 
                          href="mailto:asamoahvictor12@gmail.com" 
                          className="text-zinc-800 hover:text-[#A855F7] text-base md:text-lg font-semibold font-sans flex items-center gap-2 transition-colors duration-200 mt-1 cursor-pointer select-text"
                        >
                          <Mail size={16} /> asamoahvictor12@gmail.com
                        </a>
                      </div>

                      <div className="flex flex-col gap-1 border-t border-zinc-200/50 pt-5">
                        <span className="text-[10px] font-mono tracking-widest text-[#A855F7] uppercase font-bold">SOCIAL DIRECT :</span>
                        <div className="flex gap-4 items-center mt-2.5 font-sans text-xs">
                          <a 
                            href="https://www.instagram.com/estudiox_graphics?igsh=bDJqNndjbDJuZndn&utm_source=qr" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-[#A855F7] text-zinc-600 transition-colors duration-200 uppercase font-bold cursor-pointer"
                          >
                            Instagram
                          </a>
                          <span className="text-zinc-300">/</span>
                          <a 
                            href="https://www.linkedin.com/in/asamoah-victor-62831a190" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-[#A855F7] text-zinc-600 transition-colors duration-200 uppercase font-bold cursor-pointer"
                          >
                            LinkedIn
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Subpage footer */}
            <Footer />
          </motion.div>
        ) : (
          <motion.div
            key="home-view"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="w-full flex-1 flex flex-col pt-0"
          >
            {/* Hero Section */}
            <section id="home" className="relative w-full flex-1 flex flex-col overflow-hidden bg-[#FAF7F2] min-h-screen">
              {/* Background Video or Poster Image with Full-Width Immersive Cover */}
              <div id="bg-video-container" className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                {isMobile ? (
                  <img
                    id="bg-video-player"
                    src={getVideoPosterUrl("https://res.cloudinary.com/dqjxpupx7/video/upload/v1781784482/kling_20260618_VIDEO_Static_cam_1419_0_ozbfdr.mp4", 640)}
                    alt="Victor Ohene Asamoah - Creative Portfolio"
                    fetchPriority="high"
                    className="absolute inset-0 h-full w-full object-cover opacity-100"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <video
                    id="bg-video-player"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={getVideoPosterUrl("https://res.cloudinary.com/dqjxpupx7/video/upload/v1781784482/kling_20260618_VIDEO_Static_cam_1419_0_ozbfdr.mp4", 1280)}
                    className="absolute inset-0 h-full w-full object-cover opacity-100"
                  >
                    <source src={getOptimizedVideoUrl("https://res.cloudinary.com/dqjxpupx7/video/upload/v1781784482/kling_20260618_VIDEO_Static_cam_1419_0_ozbfdr.mp4", 1280)} type="video/mp4" />
                  </video>
                )}

                {/* Giant looping scrolling background text */}
                <div id="scrolling-bg-text-container" className="absolute bottom-0 left-0 right-0 w-full flex items-end pb-8 overflow-hidden z-[2] pointer-events-none">
                  <div id="scrolling-track" className="animate-marquee-ltr flex whitespace-nowrap">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <span
                        key={i}
                        className="text-[12rem] sm:text-[18rem] md:text-[24rem] lg:text-[30rem] xl:text-[36rem] font-display font-black text-black/[0.045] tracking-wider leading-none mx-6 sm:mx-12 select-none"
                      >
                        VICTOR ASAMOAH
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Hero Body */}
              <main id="hero-main" className="flex-1 flex flex-col justify-start pt-[45vh] sm:pt-[42vh] md:pt-[45vh] lg:pt-[48vh] pb-16 sm:pb-20 md:pb-24 pl-6 sm:pl-12 md:pl-16 lg:pl-20 xl:pl-24 pr-6 sm:pr-12 md:pr-32 lg:pr-40 xl:pr-48 max-w-7xl w-full mx-auto select-none relative z-10">
                <div id="hero-content" className="max-w-3xl select-text w-full font-serif text-black">
                  
                  {/* Greeting tag */}
                  <motion.p
                    id="greeting-text"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-zinc-900 font-sans tracking-[0.25em] uppercase mb-4 font-bold"
                  >
                    Hello, I'm
                  </motion.p>

                  {/* Large display name */}
                  <h1 id="hero-name" className="text-black tracking-tight leading-[0.95] font-display font-extrabold text-[2.6rem] sm:text-[3.6rem] md:text-[4.8rem] lg:text-[6rem] xl:text-[7rem]">
                    <span id="name-first-line" className="block">
                      {"VICTOR".split("").map((char, idx) => (
                        <motion.span
                          id={`char-victor-${idx}`}
                          key={`victor-${idx}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.15, color: "#A855F7" }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 10,
                            opacity: { duration: 0.5, delay: 0.1 + idx * 0.04 },
                            y: { duration: 0.5, delay: 0.1 + idx * 0.04 }
                          }}
                          className="inline-block hover:text-[#A855F7] transition-colors duration-150 ease-out cursor-default select-none animate-none"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                    <span id="name-middle-line" className="block">
                      {"OHENE".split("").map((char, idx) => (
                        <motion.span
                          id={`char-ohene-${idx}`}
                          key={`ohene-${idx}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.15, color: "#A855F7" }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 10,
                            opacity: { duration: 0.5, delay: 0.25 + idx * 0.04 },
                            y: { duration: 0.5, delay: 0.25 + idx * 0.04 }
                          }}
                          className="inline-block hover:text-[#A855F7] transition-colors duration-150 ease-out cursor-default select-none animate-none"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                    <span id="name-last-line" className="block">
                      {"ASAMOAH".split("").map((char, idx) => (
                        <motion.span
                          id={`char-asamoah-${idx}`}
                          key={`asamoah-${idx}`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.15, color: "#A855F7" }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 10,
                            opacity: { duration: 0.5, delay: 0.4 + idx * 0.04 },
                            y: { duration: 0.5, delay: 0.4 + idx * 0.04 }
                          }}
                          className="inline-block hover:text-[#A855F7] transition-colors duration-150 ease-out cursor-default select-none animate-none"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  </h1>

                  {/* Subtitle / Description */}
                  <motion.p
                    id="hero-skills"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-zinc-900 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-sans font-semibold mt-6 sm:mt-7 tracking-wide max-w-xl leading-relaxed"
                  >
                    Skilled in Adobe Photoshop,<br />
                    Illustrator, and After Effects.
                  </motion.p>

                  {/* Primary Action Button and Integrated Social Icons */}
                  <motion.div
                    id="hero-actions-container"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center flex-wrap gap-6 mt-10 md:mt-12"
                  >
                    <a
                      id="view-work-button"
                      href="#projects"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate('home', '#projects');
                      }}
                      className="inline-flex items-center justify-center bg-black text-white font-bold text-sm sm:text-base px-9 py-4 rounded-full hover:bg-[#A855F7] shadow-[0_4px_16px_rgba(0,0,0,0.18)] active:scale-95 transition-all duration-300 cursor-pointer"
                    >
                      View My Work
                    </a>

                    <div id="social-icons-row" className="flex items-center gap-4">
                      <a
                        id="social-instagram"
                        href="https://www.instagram.com/estudiox_graphics?igsh=bDJqNndjbDJuZndn&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#A855F7] shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                      >
                        <Instagram size={18} />
                      </a>
                      <a
                        id="social-linkedin"
                        href="https://www.linkedin.com/in/asamoah-victor-62831a190"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#A855F7] shadow-[0_4px_16px_rgba(0,0,0,0.18)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
                      >
                        <Linkedin size={18} />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </main>
            </section>

            {/* Brand Logos Scrolling Banner - Edge to Edge, Looping, Pure Black */}
            <motion.section 
              id="brand-scrolling-banner" 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              onMouseEnter={() => setIsBrandHovered(true)}
              onMouseLeave={() => setIsBrandHovered(false)}
              className={`w-full relative z-10 overflow-hidden py-6 border-b border-zinc-900/40 transition-colors duration-300 ${
                isBrandHovered ? 'bg-[#A855F7]' : 'bg-black'
              }`}
            >
              <div 
                id="logos-container" 
                className={`w-full flex overflow-hidden py-2 transition-colors duration-300 ${
                  isBrandHovered ? 'bg-[#A855F7]' : 'bg-black'
                }`}
              >
                <div className="animate-marquee-rtl-nonpause flex flex-row w-max flex-nowrap gap-0 items-center">
                  {[...BRAND_LOGOS, ...BRAND_LOGOS].map((logo, idx) => (
                    <img
                      key={idx}
                      src={logo}
                      alt={`Brand Logo ${idx + 1}`}
                      className="h-14 sm:h-18 md:h-22 lg:h-26 w-auto object-contain mx-4 sm:mx-6 md:mx-8 pointer-events-none select-none opacity-80 hover:opacity-100 transition-opacity duration-300"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Portfolio Section - Overlapping Fan Design */}
            <section 
              id="projects" 
              className="w-full bg-white pt-16 pb-24 md:pt-24 md:pb-32 relative z-10 flex flex-col items-center overflow-hidden border-t border-zinc-150"
            >
              {/* Scrolling giant background text spanning the entire yellow background with opposite directions */}
              <div id="branding-marquee" className="absolute inset-x-0 top-0 bottom-0 pointer-events-none overflow-hidden select-none z-0 flex flex-col justify-around py-16 opacity-60">
                {/* Track 1: BRANDING -> CREATIVITY -> ADVERTISING (Left to Right) */}
                <div className="w-full overflow-hidden flex">
                  <motion.div 
                    animate={{ x: ["-50%", "0%"] }} 
                    transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                    className="flex whitespace-nowrap text-[22vw] font-display font-black text-black/[0.025] tracking-[0.15em] uppercase leading-none"
                  >
                    <span>BRANDING • CREATIVITY • ADVERTISING • BRANDING • CREATIVITY • ADVERTISING •&nbsp;</span>
                    <span>BRANDING • CREATIVITY • ADVERTISING • BRANDING • CREATIVITY • ADVERTISING •&nbsp;</span>
                  </motion.div>
                </div>

                {/* Track 2: CREATIVITY -> ADVERTISING -> BRANDING (Right to Left) */}
                <div className="w-full overflow-hidden flex">
                  <motion.div 
                    animate={{ x: ["0%", "-50%"] }} 
                    transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                    className="flex whitespace-nowrap text-[22vw] font-display font-black text-black/[0.025] tracking-[0.15em] uppercase leading-none"
                  >
                    <span>CREATIVITY • ADVERTISING • BRANDING • CREATIVITY • ADVERTISING • BRANDING •&nbsp;</span>
                    <span>CREATIVITY • ADVERTISING • BRANDING • CREATIVITY • ADVERTISING • BRANDING •&nbsp;</span>
                  </motion.div>
                </div>

                {/* Track 3: ADVERTISING -> BRANDING -> CREATIVITY (Left to Right) */}
                <div className="w-full overflow-hidden flex">
                  <motion.div 
                    animate={{ x: ["-50%", "0%"] }} 
                    transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
                    className="flex whitespace-nowrap text-[22vw] font-display font-black text-black/[0.025] tracking-[0.15em] uppercase leading-none"
                  >
                    <span>ADVERTISING • BRANDING • CREATIVITY • ADVERTISING • BRANDING • CREATIVITY •&nbsp;</span>
                    <span>ADVERTISING • BRANDING • CREATIVITY • ADVERTISING • BRANDING • CREATIVITY •&nbsp;</span>
                  </motion.div>
                </div>
              </div>

              {/* Section Heading with Page Margins */}
              <div className="max-w-7xl w-full px-6 sm:px-12 md:px-24 relative z-10 flex flex-col items-center text-center">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-zinc-900 mt-2 uppercase">
                    SELECTED PORTFOLIO GEMS
                  </h2>
                </motion.div>
              </div>

              {/* 3 continuous scrolling rows (Edge-to-Edge) */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full relative flex flex-col gap-2 sm:gap-3 md:gap-4 overflow-hidden mt-6 z-10 animate-fade-in"
              >
                {/* Row 1: Right to Left scrolling */}
                <div className="w-full overflow-hidden py-6 sm:py-8 md:py-10 relative">
                  <div className="animate-marquee-rtl flex flex-row w-max flex-nowrap gap-3 sm:gap-4 md:gap-5">
                    {PORTFOLIO_ITEMS.slice(0, 6).map((item, idx) => (
                      <div
                        key={`${item.id}-row1-a`}
                        className="w-[125px] sm:w-[165px] md:w-[200px] lg:w-[230px] xl:w-[250px] flex-shrink-0"
                      >
                        <InteractiveBox item={item} index={idx} onClick={() => setSelectedItem(item)} />
                      </div>
                    ))}
                    {PORTFOLIO_ITEMS.slice(0, 6).map((item, idx) => (
                      <div
                        key={`${item.id}-row1-b`}
                        className="w-[125px] sm:w-[165px] md:w-[200px] lg:w-[230px] xl:w-[250px] flex-shrink-0"
                      >
                        <InteractiveBox item={item} index={idx} onClick={() => setSelectedItem(item)} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 2: Left to Right scrolling */}
                <div className="w-full overflow-hidden py-6 sm:py-8 md:py-10 relative">
                  <div className="animate-marquee-ltr flex flex-row w-max flex-nowrap gap-3 sm:gap-4 md:gap-5">
                    {PORTFOLIO_ITEMS.slice(6, 12).map((item, idx) => (
                      <div
                        key={`${item.id}-row2-a`}
                        className="w-[125px] sm:w-[165px] md:w-[200px] lg:w-[230px] xl:w-[250px] flex-shrink-0"
                      >
                        <InteractiveBox item={item} index={6 + idx} onClick={() => setSelectedItem(item)} />
                      </div>
                    ))}
                    {PORTFOLIO_ITEMS.slice(6, 12).map((item, idx) => (
                      <div
                        key={`${item.id}-row2-b`}
                        className="w-[125px] sm:w-[165px] md:w-[200px] lg:w-[230px] xl:w-[250px] flex-shrink-0"
                      >
                        <InteractiveBox item={item} index={6 + idx} onClick={() => setSelectedItem(item)} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 3: Right to Left scrolling */}
                <div className="w-full overflow-hidden py-6 sm:py-8 md:py-10 relative">
                  <div className="animate-marquee-rtl flex flex-row w-max flex-nowrap gap-3 sm:gap-4 md:gap-5">
                    {PORTFOLIO_ITEMS.slice(12, 18).map((item, idx) => (
                      <div
                        key={`${item.id}-row3-a`}
                        className="w-[125px] sm:w-[165px] md:w-[200px] lg:w-[230px] xl:w-[250px] flex-shrink-0"
                      >
                        <InteractiveBox item={item} index={12 + idx} onClick={() => setSelectedItem(item)} />
                      </div>
                    ))}
                    {PORTFOLIO_ITEMS.slice(12, 18).map((item, idx) => (
                      <div
                        key={`${item.id}-row3-b`}
                        className="w-[125px] sm:w-[165px] md:w-[200px] lg:w-[230px] xl:w-[250px] flex-shrink-0"
                      >
                        <InteractiveBox item={item} index={12 + idx} onClick={() => setSelectedItem(item)} />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Navigation Callout with Page Margins */}
              <div className="max-w-7xl w-full px-6 sm:px-12 md:px-24 relative z-10 flex flex-col items-center mt-12 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex justify-center"
                >
                  <button
                    onClick={() => handleNavigate('motion')}
                    className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-transparent bg-black text-white hover:bg-[#A855F7] transition-all duration-300 font-sans text-xs font-bold tracking-widest uppercase cursor-pointer shadow-sm hover:shadow-md"
                  >
                    EXPLORE FULL MOTION PORTFOLIO
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </motion.div>

                {/* Elegant Interactive Showreel / Video Showcase Player with closer spacing and text/headings removed */}
                <div id="video-showcase-container" className="w-full max-w-4xl mt-6 relative z-10 flex flex-col items-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ scale: 1.01 }}
                    className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-black/20 shadow-[0_24px_50px_rgba(0,0,0,0.18)] group"
                  >
                    {/* Modern Ambient Showreel Video Player */}
                    <video
                      id="branding-showcase-video"
                      className="w-full h-full object-cover rounded-2xl pointer-events-none"
                      playsInline
                      loop
                      muted
                      autoPlay
                      poster={getVideoPosterUrl("https://res.cloudinary.com/dqjxpupx7/video/upload/v1781780247/Unity_Cup_Animation_h8zcxg.mp4", isMobile ? 640 : 1080)}
                      src={getOptimizedVideoUrl("https://res.cloudinary.com/dqjxpupx7/video/upload/v1781780247/Unity_Cup_Animation_h8zcxg.mp4", isMobile ? 640 : 1080)}
                    />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Scroll back to top arrow button right under the projects section */}
            <div id="scroll-to-top-container" className="w-full bg-white flex justify-center py-8">
              <motion.button
                id="scroll-to-top-button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
                className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-[#A855F7] hover:shadow-[0_4px_24px_rgba(168,85,247,0.3)] cursor-pointer transition-all duration-300 focus:outline-none"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} strokeWidth={2.5} />
              </motion.button>
            </div>

            {/* Interactive Design Disciplines list */}
            <InteractiveDisciplines />

            {/* Bottom Footer - Premium & Custom Purple Theme */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Lightbox Image Modal on Click */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            id="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 cursor-zoom-out backdrop-blur-sm"
          >
            <motion.div
              id="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[95vw] max-h-[92vh] md:max-w-5xl md:max-h-[94vh] rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_24px_60px_rgba(0,0,0,0.9)] cursor-default flex items-center justify-center p-1 sm:p-2"
            >
              <img
                id="lightbox-image"
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[92vh] md:max-h-[94vh] w-auto h-auto object-contain block select-none rounded-[14px]"
              />
              {/* Elegant Close Button */}
              <button
                id="lightbox-close-button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 pointer-events-auto cursor-pointer shadow-lg"
                aria-label="Close Lightbox"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic Live Video Lightbox Modal for Motions (Turns and Zooms on Open!) */}
      <AnimatePresence>
        {selectedMotionItem && (
          <motion.div
            id="motion-lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMotionItem(null)}
            className="fixed inset-0 bg-black/98 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 cursor-zoom-out backdrop-blur-sm"
          >
            <motion.div
              id="motion-lightbox-content"
              initial={{ scale: 0.3, rotate: -40, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.3, rotate: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_24px_85px_rgba(0,0,0,0.95)] cursor-default flex items-center justify-center ${
                selectedMotionItem.id.startsWith('portrait') 
                  ? 'max-h-[90vh] aspect-[9/16] w-auto h-[85vh]' 
                  : 'w-full max-w-4xl aspect-[16/9]'
              }`}
            >
              <video
                id="lightbox-motion-video"
                autoPlay
                loop
                controls
                src={getOptimizedVideoUrl(selectedMotionItem.videoUrl)}
                className="w-full h-full object-cover rounded-2xl"
                style={{ outline: "none" }}
              />

              {/* Elegant Custom Close Button on Top-Right */}
              <button
                id="motion-lightbox-close-button"
                onClick={() => setSelectedMotionItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer shadow-lg"
                aria-label="Close Lightbox"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Ambient Background Music Controller Widget */}
      <div className="fixed bottom-6 left-6 z-[90] flex items-center gap-2 select-none">
        <button
          id="ambient-music-toggle"
          onClick={toggleMusic}
          className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-800 hover:text-white hover:bg-[#A855F7] hover:border-[#A855F7] shadow-lg cursor-pointer transition-all duration-300 active:scale-95"
          aria-label={isPlayingMusic ? "Pause background music" : "Play background music"}
        >
          {isPlayingMusic && !selectedMotionItem ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>
        
        {/* Animated Sound Equalizer Status Ribbon */}
        <div className="bg-white border border-zinc-200 px-2.5 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-mono text-zinc-600 select-none shadow-md">
          <span className="text-[9px] uppercase tracking-wider font-bold text-zinc-500">AMBIENT SOUND:</span>
          {isPlayingMusic && !selectedMotionItem ? (
            <div className="flex items-end gap-[2px] h-2.5 w-3.5">
              <style>{`
                @keyframes eq-scale {
                  0%, 100% { transform: scaleY(0.3); }
                  50% { transform: scaleY(1); }
                }
                .eq-bar-1 { animation: eq-scale 0.7s ease-in-out infinite; transform-origin: bottom; }
                .eq-bar-2 { animation: eq-scale 0.5s ease-in-out infinite 0.15s; transform-origin: bottom; }
                .eq-bar-3 { animation: eq-scale 0.8s ease-in-out infinite 0.3s; transform-origin: bottom; }
              `}</style>
              <span className="w-[2px] h-full bg-[#A855F7] rounded-full eq-bar-1" />
              <span className="w-[2px] h-full bg-[#A855F7] rounded-full eq-bar-2" />
              <span className="w-[2px] h-full bg-[#A855F7] rounded-full eq-bar-3" />
            </div>
          ) : (
            <div className="flex items-end gap-[2px] h-2.5 w-3.5 opacity-40">
              <span className="w-[2px] h-[3px] bg-zinc-400 rounded-full" />
              <span className="w-[2px] h-[5px] bg-zinc-400 rounded-full" />
              <span className="w-[2px] h-[2px] bg-zinc-400 rounded-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
