'use client'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Phone, Sparkles } from 'lucide-react'
import { business } from '@/data/site'

export default function Hero() {
  return (
    <section className="hero hero-v2">
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <div className="hero-gridlines" />
      <div className="container hero-v2-inner">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="hero-kicker"><span>01</span><b>BAKER'S MOBILE AUTO DETAILING</b><em>CONCORD · CA</em></div>
          <h1>We bring the <span>detail shop</span> to you.</h1>
          <p className="hero-lede">Premium mobile detailing, restoration and protection for people who want their vehicle looking exceptional — without giving up their day.</p>
          <div className="hero-actions">
            <a className="button button-accent" href="#quote">Get a quote <ArrowRight size={17}/></a>
            <a className="text-cta" href="tel:+19258228137"><Phone size={16}/> {business.phoneDisplay}</a>
          </div>
          <div className="hero-proof"><span><Sparkles size={15}/> 25+ years experience</span><span><MapPin size={15}/> {business.serviceArea}</span></div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .1 }}>
          <div className="hero-image"><img src="/bakers/concept-1.svg" alt="Baker's mobile auto detailing" /></div>
          <div className="hero-float"><span>THE BAKER'S STANDARD</span><strong>Clean. Protected.<br/>Ready to drive.</strong><small>One vehicle at a time.</small></div>
          <div className="hero-stamp">MOBILE<br/><b>DETAILING</b><br/>EST. 2000</div>
        </motion.div>
      </div>
      <div className="hero-scroll">SCROLL <span></span> EXPLORE</div>
    </section>
  )
}
