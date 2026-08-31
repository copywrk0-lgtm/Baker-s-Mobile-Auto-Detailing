'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { gallery } from '@/data/site'
import Reveal from '@/components/ui/Reveal'

export default function Showcase() {
  return <section id="work" className="section work-section">
    <div className="container">
      <Reveal><div className="work-intro"><div><span className="eyebrow">THE BAKER'S STANDARD</span><h2>Good enough<br/><i>isn't the goal.</i></h2></div><p>Every service is built around the same idea: careful work, a sharp finish and an experience that feels personal from first contact to final walk-around.</p></div></Reveal>
      <div className="work-grid">
        {gallery.map((g, i) => <Reveal key={g[1]} delay={i * .04}><motion.figure className={`work-card work-${i+1}`} whileHover={{ y: -5 }}>
          <div className="work-image"><Image src={g[0]} alt={g[1]} fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
          <figcaption><div><span>0{i+1}</span><strong>{g[1]}</strong></div><ArrowUpRight size={18}/></figcaption>
        </motion.figure></Reveal>)}
      </div>
      <div className="work-footer"><span>CONCEPT GALLERY — REPLACE WITH APPROVED BAKER'S PROJECT PHOTOS</span><a href="/gallery">View full gallery <ArrowUpRight size={15}/></a></div>
    </div>
  </section>
}
