import React, { useEffect, useState, useRef } from 'react';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiHackerrank } from 'react-icons/si';

// Configuration for your profiles and stats
const PROFILES_CONFIG = {
  leetcode: {
    username: 'koppisettidhanasiri',
    profileUrl: 'https://leetcode.com/u/koppisettidhanasiri/',
    fallbackSolved: 300,
    gradient: 'from-[#FFA116] to-[#F26E22]',
    glowColor: 'rgba(250, 161, 22, 0.2)',
  },
  gfg: {
    username: 'koppisetti508p',
    profileUrl: 'https://www.geeksforgeeks.org/profile/koppisetti508p',
    fallbackSolved: 200,
    gradient: 'from-[#2F8D46] to-[#0F9D58]',
    glowColor: 'rgba(47, 141, 70, 0.2)',
  },
  codechef: {
    username: 'dhanasiri18',
    profileUrl: 'https://www.codechef.com/users/dhanasiri18',
    fallbackSolved: 500,
    gradient: 'from-[#5B463E] to-[#8C6A5C]',
    glowColor: 'rgba(91, 70, 62, 0.2)',
  },
  hackerrank: {
    username: 'Dhanasiri',
    profileUrl: 'https://www.hackerrank.com/profile/Dhanasiri',
    fallbackBadges: 7,
    gradient: 'from-[#2EC866] to-[#1BA853]',
    glowColor: 'rgba(46, 200, 102, 0.2)',
  }
};

// Dynamic Count Component
const DynamicCount = ({ type, username, fallback }) => {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    let fetchUrl = '';

    if (type === 'leetcode') {
      fetchUrl = `https://alfa-leetcode-api.onrender.com/${username}/solved`;
    } else if (type === 'gfg') {
      fetchUrl = `https://gfgstatscard.vercel.app/${username}?raw=true`;
    } else if (type === 'codechef') {
      fetchUrl = `https://codechef-api.vercel.app/handle/${username}`;
    } else if (type === 'hackerrank') {
      fetchUrl = `https://hackerrank-api.vercel.app/handle/${username}`;
    }

    if (!fetchUrl) {
      setCount(fallback);
      setLoading(false);
      return;
    }

    fetch(fetchUrl)
      .then(res => {
        if (!res.ok) throw new Error('API fetch error');
        return res.json();
      })
      .then(data => {
        if (!active) return;
        
        let resolvedCount = null;
        if (type === 'leetcode' && typeof data.solvedProblem === 'number') {
          resolvedCount = data.solvedProblem;
        } else if (type === 'gfg' && typeof data.total_problems_solved === 'number') {
          resolvedCount = data.total_problems_solved;
        } else if (type === 'codechef' && typeof data.problemsSolved === 'number') {
          resolvedCount = data.problemsSolved;
        } else if (type === 'hackerrank' && typeof data.badgesCount === 'number') {
          resolvedCount = data.badgesCount;
        }

        if (resolvedCount !== null) {
          setCount(resolvedCount);
        } else {
          setCount(fallback);
        }
        setLoading(false);
      })
      .catch(err => {
        console.warn(`Error fetching ${type} stats, using fallback:`, err.message);
        if (active) {
          setCount(fallback);
          setLoading(false);
        }
      });

    return () => { active = false; };
  }, [type, username, fallback]);

  if (loading) {
    return (
      <span className="w-5 h-5 border-2 border-white/20 border-t-[#ff2a2a] rounded-full animate-spin inline-block"></span>
    );
  }

  const isFallbackUsed = count === fallback;
  const labelSuffix = isFallbackUsed && type !== 'hackerrank' ? '+' : '';

  return <span>{count}{labelSuffix}</span>;
};

const CodingProfiles = () => {
  return (
    <section id="coding" className="bg-[#050505] py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans m-0 max-w-full border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <p className="text-[#ff2a2a] text-sm font-black tracking-widest uppercase mb-3">PROOFS OF SKILLS</p>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Coding <span className="text-transparent [-webkit-text-stroke:1px_white]">Profiles</span>
          </h2>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* LeetCode Card */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-[#111] border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-[#ff2a2a]/30 group hover:shadow-[0_15px_30px_rgba(255,42,42,0.02)]"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${PROFILES_CONFIG.leetcode.gradient} flex items-center justify-center shadow-lg mb-6`}>
              <SiLeetcode size={28} color="#fff" />
            </div>
            <h3 className="text-lg font-black text-white mb-4">LeetCode</h3>
            <div className="bg-black/40 border border-white/5 rounded-2xl w-full py-4 px-2 mb-6">
              <span className="block text-2xl font-black text-white tracking-tight">
                <DynamicCount 
                  type="leetcode"
                  username={PROFILES_CONFIG.leetcode.username} 
                  fallback={PROFILES_CONFIG.leetcode.fallbackSolved} 
                />
              </span>
              <span className="block text-xs font-semibold text-white/40 uppercase tracking-wider mt-1">Problems Solved</span>
            </div>
            <a 
              href={PROFILES_CONFIG.leetcode.profileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-2.5 rounded-full border border-white/10 text-white font-bold text-sm hover:bg-[#ff2a2a] hover:border-transparent transition-all duration-300 text-center"
            >
              Visit Profile
            </a>
          </div>

          {/* GeeksforGeeks Card */}
          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-[#111] border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-[#ff2a2a]/30 group hover:shadow-[0_15px_30px_rgba(255,42,42,0.02)]"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${PROFILES_CONFIG.gfg.gradient} flex items-center justify-center shadow-lg mb-6`}>
              <SiGeeksforgeeks size={28} color="#fff" />
            </div>
            <h3 className="text-lg font-black text-white mb-4">GeeksforGeeks</h3>
            <div className="bg-black/40 border border-white/5 rounded-2xl w-full py-4 px-2 mb-6">
              <span className="block text-2xl font-black text-white tracking-tight">
                <DynamicCount 
                  type="gfg"
                  username={PROFILES_CONFIG.gfg.username} 
                  fallback={PROFILES_CONFIG.gfg.fallbackSolved} 
                />
              </span>
              <span className="block text-xs font-semibold text-white/40 uppercase tracking-wider mt-1">Problems Solved</span>
            </div>
            <a 
              href={PROFILES_CONFIG.gfg.profileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-2.5 rounded-full border border-white/10 text-white font-bold text-sm hover:bg-[#ff2a2a] hover:border-transparent transition-all duration-300 text-center"
            >
              Visit Profile
            </a>
          </div>

          {/* CodeChef Card */}
          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-[#111] border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-[#ff2a2a]/30 group hover:shadow-[0_15px_30px_rgba(255,42,42,0.02)]"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${PROFILES_CONFIG.codechef.gradient} flex items-center justify-center shadow-lg mb-6`}>
              <SiCodechef size={28} color="#fff" />
            </div>
            <h3 className="text-lg font-black text-white mb-4">CodeChef</h3>
            <div className="bg-black/40 border border-white/5 rounded-2xl w-full py-4 px-2 mb-6">
              <span className="block text-2xl font-black text-white tracking-tight">
                <DynamicCount 
                  type="codechef"
                  username={PROFILES_CONFIG.codechef.username} 
                  fallback={PROFILES_CONFIG.codechef.fallbackSolved} 
                />
              </span>
              <span className="block text-xs font-semibold text-white/40 uppercase tracking-wider mt-1">Problems Solved</span>
            </div>
            <a 
              href={PROFILES_CONFIG.codechef.profileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-2.5 rounded-full border border-white/10 text-white font-bold text-sm hover:bg-[#ff2a2a] hover:border-transparent transition-all duration-300 text-center"
            >
              Visit Profile
            </a>
          </div>

          {/* HackerRank Card */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-[#111] border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-[#ff2a2a]/30 group hover:shadow-[0_15px_30px_rgba(255,42,42,0.02)]"
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${PROFILES_CONFIG.hackerrank.gradient} flex items-center justify-center shadow-lg mb-6`}>
              <SiHackerrank size={28} color="#fff" />
            </div>
            <h3 className="text-lg font-black text-white mb-4">HackerRank</h3>
            <div className="bg-black/40 border border-white/5 rounded-2xl w-full py-4 px-2 mb-6">
              <span className="block text-2xl font-black text-white tracking-tight">
                <DynamicCount 
                  type="hackerrank"
                  username={PROFILES_CONFIG.hackerrank.username} 
                  fallback={PROFILES_CONFIG.hackerrank.fallbackBadges} 
                />
              </span>
              <span className="block text-xs font-semibold text-white/40 uppercase tracking-wider mt-1">Badges Earned</span>
            </div>
            <a 
              href={PROFILES_CONFIG.hackerrank.profileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full py-2.5 rounded-full border border-white/10 text-white font-bold text-sm hover:bg-[#ff2a2a] hover:border-transparent transition-all duration-300 text-center"
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
