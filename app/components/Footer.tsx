'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Instagram, Mail, MapPin, Phone, ArrowRight, Zap } from 'lucide-react';

const Footer = () => {
    const [hoveredLink, setHoveredLink] = useState<number | null>(null);

    const quickLinks = [
        { name: 'About Us', href: '/aboutus' },
        { name: 'Events', href: '/events' },
        { name: 'Clubs', href: '/clubs' },
        { name: 'Team', href: '/team' },
    ];

    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub', color: '#fff' },
        { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0077b5' },
        { icon: Instagram, href: '#', label: 'Instagram', color: '#E4405F' },
        { icon: Mail, href: '#', label: 'Email', color: '#5227FF' },
    ];

    return (
        <footer className="relative bg-black text-white overflow-hidden">

            {/* Animated Background Layers */}
            <div className="absolute inset-0 z-0">
                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, #333 1px, transparent 1px),
              linear-gradient(to bottom, #333 1px, transparent 1px)
            `,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Diagonal Stripes */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, #5227FF 0px, #5227FF 2px, transparent 2px, transparent 10px)',
                    }} />
                </div>

                {/* Glowing Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-20 -left-20 w-96 h-96 bg-[#5227FF] rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"
                />
            </div>

            {/* Top Border with Animation */}
            <div className="relative h-1 bg-gradient-to-r from-transparent via-[#5227FF] to-transparent">
                <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-20 py-20">

                {/* Main Content - Creative Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

                    {/* Left: Large Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 relative"
                    >
                        {/* Glitch Effect on Hover */}
                        <div className="relative group">
                            <h2 className="text-7xl md:text-8xl font-bold font-bankgothic mb-6 tracking-tight leading-none">
                                <span className="relative inline-block">
                                    NIMBUS
                                    <motion.span
                                        className="absolute inset-0 text-[#5227FF] opacity-0 group-hover:opacity-100"
                                        animate={{
                                            x: [0, -2, 2, 0],
                                            y: [0, 2, -2, 0],
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            repeat: Infinity,
                                        }}
                                    >
                                        NIMBUS
                                    </motion.span>
                                </span>
                                <br />
                                <span className="text-[#5227FF] relative inline-block">
                                    2026
                                    <Zap className="absolute -right-8 top-0 w-6 h-6 text-yellow-400 animate-pulse" />
                                </span>
                            </h2>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                            Where <span className="text-white font-bold">innovation</span> meets reality,
                            and <span className="text-[#5227FF] font-bold">technology</span> shapes the future.
                        </p>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-[#5227FF] text-white font-bankgothic tracking-wider overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                GET STARTED
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <motion.div
                                className="absolute inset-0 bg-white"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 text-black font-bold">
                                GET STARTED
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.button>
                    </motion.div>

                    {/* Middle: Quick Links with Creative Design */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-3"
                    >
                        <h3 className="text-[#5227FF] font-bankgothic text-sm tracking-[0.3em] mb-8 flex items-center gap-2">
                            <div className="w-8 h-[2px] bg-[#5227FF]" />
                            NAVIGATE
                        </h3>
                        <ul className="space-y-4">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        onMouseEnter={() => setHoveredLink(index)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        className="group relative text-2xl font-bold font-bankgothic text-white/40 hover:text-white transition-all duration-300 flex items-center gap-3"
                                    >
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: hoveredLink === index ? 24 : 0 }}
                                            className="h-[2px] bg-[#5227FF]"
                                        />
                                        <span className="relative">
                                            {link.name}
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: hoveredLink === index ? 1 : 0 }}
                                                className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#5227FF] origin-left"
                                            />
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right: Contact & Social */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-4"
                    >
                        <h3 className="text-[#5227FF] font-bankgothic text-sm tracking-[0.3em] mb-8 flex items-center gap-2">
                            <div className="w-8 h-[2px] bg-[#5227FF]" />
                            CONNECT
                        </h3>

                        {/* Contact Info */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3 text-gray-400 group hover:text-white transition-colors">
                                <MapPin className="w-5 h-5 text-[#5227FF] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">NIT Hamirpur, Himachal Pradesh</span>
                            </div>
                            <div className="flex items-start gap-3 text-gray-400 group hover:text-white transition-colors">
                                <Phone className="w-5 h-5 text-[#5227FF] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">+91 1234567890</span>
                            </div>
                            <div className="flex items-start gap-3 text-gray-400 group hover:text-white transition-colors">
                                <Mail className="w-5 h-5 text-[#5227FF] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">nimbus@nith.ac.in</span>
                            </div>
                        </div>

                        {/* Social Links - Creative Circular Design */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="relative w-14 h-14 border-2 border-white/20 rounded-full flex items-center justify-center group overflow-hidden"
                                    aria-label={social.label}
                                >
                                    {/* Animated Background */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full"
                                        style={{ backgroundColor: social.color }}
                                        initial={{ scale: 0 }}
                                        whileHover={{ scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <social.icon className="w-6 h-6 relative z-10 text-gray-400 group-hover:text-white transition-colors" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Animated Divider */}
                <div className="relative h-[1px] bg-white/10 mb-8 overflow-hidden">
                    <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#5227FF] to-transparent"
                    />
                </div>

                {/* Bottom Bar - Creative Layout */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        <div className="w-2 h-2 bg-[#5227FF] rounded-full animate-pulse" />
                        <p className="text-gray-500 text-sm font-mono">
                            © 2026 NIMBUS • Crafted with <span className="text-red-500">♥</span> at NIT Hamirpur
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex gap-6 text-sm text-gray-500 font-mono"
                    >
                        <Link href="#" className="hover:text-[#5227FF] transition-colors relative group">
                            Privacy
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#5227FF] group-hover:w-full transition-all duration-300" />
                        </Link>
                        <span className="text-white/20">•</span>
                        <Link href="#" className="hover:text-[#5227FF] transition-colors relative group">
                            Terms
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#5227FF] group-hover:w-full transition-all duration-300" />
                        </Link>
                        <span className="text-white/20">•</span>
                        <Link href="#" className="hover:text-[#5227FF] transition-colors relative group">
                            Sitemap
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#5227FF] group-hover:w-full transition-all duration-300" />
                        </Link>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-32 h-32 border border-[#5227FF]/20 rounded-full pointer-events-none">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-full h-full border-t-2 border-[#5227FF] rounded-full"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
