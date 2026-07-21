import React, { useEffect, useState, useRef } from 'react';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiHackerrank } from 'react-icons/si';

// Configuration for dummy profiles and stats
const PROFILES_CONFIG = {
  leetcode: {
    username: 'ailynx72',
    profileUrl: 'https://leetcode.com',
    fallbackSolved: 350,
    gradient: 'from-[#FFA116] to-[#F26E22]',
    glowColor: 'rgba(250, 161, 22, 0.2)',
  },
  gfg: {
    username: 'ailynx72',
    profileUrl: 'https://www.geeksforgeeks.org',
    fallbackSolved: 250,
    gradient: 'from-[#2F8D46] to-[#0F9D58]',
    glowColor: 'rgba(47, 141, 70, 0.2)',
  },
  codechef: {
    username: 'ailynx72',
    profileUrl: 'https://www.codechef.com',
    fallbackSolved: 500,
    gradient: 'from-[#5B463E] to-[#8C6A5C]',
    glowColor: 'rgba(91, 70, 62, 0.2)',
  },
  hackerrank: {
    username: 'ailynx72',
    profileUrl: 'https://www.hackerrank.com',
    fallbackBadges: 10,
    gradient: 'from-[#2EC866] to-[#1BA853]',
    glowColor: 'rgba(46, 200, 102, 0.2)',
  }
};

// Clean Static Count Component
const DynamicCount = ({ type, fallback }) => {
  const labelSuffix = type !== 'hackerrank' ? '+' : '';
  return <span>{fallback}{labelSuffix}</span>;
};

const CodingProfiles = () => {
  return (
    <section id="coding" className="bg-[#0a0a0d] py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans m-0 max-w-full border-t border-white/5 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ff4d00]/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <p className="text-[#ff7a18] text-sm font-black tracking-widest uppercase mb-3">PROOFS OF SKILLS</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a18] to-[#ff4d00]">Profiles</span>
          </h2>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* LeetCode Card */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.03] hover:border-[#FFA116]/40 group hover:shadow-[0_15px_35px_rgba(255,161,22,0.15)]"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${PROFILES_CONFIG.leetcode.gradient} flex items-center justify-center shadow-lg shadow-amber-500/20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <SiLeetcode size={28} color="#fff" />
            </div>
            <h3 className="text-lg font-black text-white mb-4">LeetCode</h3>
            <div className="bg-black/50 border border-white/10 rounded-2xl w-full py-4 px-2 mb-6 shadow-inner">
              <span className="block text-2xl font-black text-white tracking-tight">
                <DynamicCount 
                  type="leetcode"
                  username={PROFILES_CONFIG.leetcode.username} 
                  fallback={PROFILES_CONFIG.leetcode.fallbackSolved} 
                />
              </span>
              <span className="block text-xs font-semibold text-white/50 uppercase tracking-wider mt-1">Problems Solved</span>
            </div>
            <a 
              href={PROFILES_CONFIG.leetcode.profileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#ff7a18]/20 to-[#ff4d00]/20 border border-[#ff7a18]/40 text-white font-bold text-sm hover:from-[#ff7a18] hover:to-[#ff4d00] hover:border-transparent transition-all duration-300 text-center shadow-sm"
            >
              Visit Profile
            </a>
          </div>

          {/* GeeksforGeeks Card */}
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.03] hover:border-[#2F8D46]/40 group hover:shadow-[0_15px_35px_rgba(47,141,70,0.15)]"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${PROFILES_CONFIG.gfg.gradient} flex items-center justify-center shadow-lg shadow-green-500/20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <SiGeeksforgeeks size={28} color="#fff" />
            </div>
            <h3 className="text-lg font-black text-white mb-4">GeeksforGeeks</h3>
            <div className="bg-black/50 border border-white/10 rounded-2xl w-full py-4 px-2 mb-6 shadow-inner">
              <span className="block text-2xl font-black text-white tracking-tight">
                <DynamicCount 
                  type="gfg"
                  username={PROFILES_CONFIG.gfg.username} 
                  fallback={PROFILES_CONFIG.gfg.fallbackSolved} 
                />
              </span>
              <span className="block text-xs font-semibold text-white/50 uppercase tracking-wider mt-1">Problems Solved</span>
            </div>
            <a 
              href={PROFILES_CONFIG.gfg.profileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#ff7a18]/20 to-[#ff4d00]/20 border border-[#ff7a18]/40 text-white font-bold text-sm hover:from-[#ff7a18] hover:to-[#ff4d00] hover:border-transparent transition-all duration-300 text-center shadow-sm"
            >
              Visit Profile
            </a>
          </div>

          {/* CodeChef Card */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.03] hover:border-[#8C6A5C]/40 group hover:shadow-[0_15px_35px_rgba(140,106,92,0.15)]"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${PROFILES_CONFIG.codechef.gradient} flex items-center justify-center shadow-lg shadow-amber-800/20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <SiCodechef size={28} color="#fff" />
            </div>
            <h3 className="text-lg font-black text-white mb-4">CodeChef</h3>
            <div className="bg-black/50 border border-white/10 rounded-2xl w-full py-4 px-2 mb-6 shadow-inner">
              <span className="block text-2xl font-black text-white tracking-tight">
                <DynamicCount 
                  type="codechef"
                  username={PROFILES_CONFIG.codechef.username} 
                  fallback={PROFILES_CONFIG.codechef.fallbackSolved} 
                />
              </span>
              <span className="block text-xs font-semibold text-white/50 uppercase tracking-wider mt-1">Problems Solved</span>
            </div>
            <a 
              href={PROFILES_CONFIG.codechef.profileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#ff7a18]/20 to-[#ff4d00]/20 border border-[#ff7a18]/40 text-white font-bold text-sm hover:from-[#ff7a18] hover:to-[#ff4d00] hover:border-transparent transition-all duration-300 text-center shadow-sm"
            >
              Visit Profile
            </a>
          </div>

          {/* HackerRank Card */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.03] hover:border-[#2EC866]/40 group hover:shadow-[0_15px_35px_rgba(46,200,102,0.15)]"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${PROFILES_CONFIG.hackerrank.gradient} flex items-center justify-center shadow-lg shadow-emerald-500/20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <SiHackerrank size={28} color="#fff" />
            </div>
            <h3 className="text-lg font-black text-white mb-4">HackerRank</h3>
            <div className="bg-black/50 border border-white/10 rounded-2xl w-full py-4 px-2 mb-6 shadow-inner">
              <span className="block text-2xl font-black text-white tracking-tight">
                <DynamicCount 
                  type="hackerrank"
                  username={PROFILES_CONFIG.hackerrank.username} 
                  fallback={PROFILES_CONFIG.hackerrank.fallbackBadges} 
                />
              </span>
              <span className="block text-xs font-semibold text-white/50 uppercase tracking-wider mt-1">Badges Earned</span>
            </div>
            <a 
              href={PROFILES_CONFIG.hackerrank.profileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#ff7a18]/20 to-[#ff4d00]/20 border border-[#ff7a18]/40 text-white font-bold text-sm hover:from-[#ff7a18] hover:to-[#ff4d00] hover:border-transparent transition-all duration-300 text-center shadow-sm"
            >
              Visit Profile
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
