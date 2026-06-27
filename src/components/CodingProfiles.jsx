import { useEffect, useState } from 'react';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiHackerrank } from 'react-icons/si';

// Configuration for your profiles and stats
const PROFILES_CONFIG = {
  leetcode: {
    username: 'koppisettidhanasiri',
    profileUrl: 'https://leetcode.com/u/koppisettidhanasiri/',
    fallbackSolved: 300,
    gradient: 'linear-gradient(135deg, #FFA116, #F26E22)',
    glowColor: 'rgba(250, 161, 22, 0.25)',
  },
  gfg: {
    username: 'koppisetti508p',
    profileUrl: 'https://www.geeksforgeeks.org/profile/koppisetti508p',
    fallbackSolved: 200,
    gradient: 'linear-gradient(135deg, #2F8D46, #0F9D58)',
    glowColor: 'rgba(47, 141, 70, 0.25)',
  },
  codechef: {
    username: 'dhanasiri18',
    profileUrl: 'https://www.codechef.com/users/dhanasiri18',
    fallbackSolved: 500,
    gradient: 'linear-gradient(135deg, #5B463E, #8C6A5C)',
    glowColor: 'rgba(91, 70, 62, 0.25)',
  },
  hackerrank: {
    username: 'Dhanasiri',
    profileUrl: 'https://www.hackerrank.com/profile/Dhanasiri',
    fallbackBadges: 7,
    gradient: 'linear-gradient(135deg, #2EC866, #1BA853)',
    glowColor: 'rgba(46, 200, 102, 0.25)',
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
      // HackerRank doesn't have a stable JSON API, but we'll try a fallback check
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
    return <span className="profile-stat-spinner"></span>;
  }

  // Append a '+' to static fallbacks for estimations, but show exact numbers for fetched API results
  const isFallbackUsed = count === fallback;
  const labelSuffix = isFallbackUsed && type !== 'hackerrank' ? '+' : '';

  return <span>{count}{labelSuffix}</span>;
};

const CodingProfiles = () => {
  return (
    <section className="coding" id="coding">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-header animate-in">
          <p className="section-tag">PROOFS OF SKILLS</p>
          <h2 className="section-title">
            <span className="title-line title-line--left"></span>
            Coding <span className="highlight">Profiles</span>
            <span className="title-line title-line--right"></span>
          </h2>
        </div>

        {/* Profiles Grid */}
        <div className="profiles-grid">
          
          {/* LeetCode Card */}
          <div 
            className="profile-card animate-in" 
            id="profile-leetcode"
            style={{ '--glow-color': PROFILES_CONFIG.leetcode.glowColor }}
          >
            <div className="profile-icon" style={{ background: PROFILES_CONFIG.leetcode.gradient }}>
              <SiLeetcode size={32} color="#fff" />
            </div>
            <h3>LeetCode</h3>
            <div className="profile-stat-box">
              <span className="profile-stat-number">
                <DynamicCount 
                  type="leetcode"
                  username={PROFILES_CONFIG.leetcode.username} 
                  fallback={PROFILES_CONFIG.leetcode.fallbackSolved} 
                />
              </span>
              <span className="profile-stat-label">Problems Solved</span>
            </div>
            <a 
              href={PROFILES_CONFIG.leetcode.profileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-profile-cta"
            >
              Visit Profile
            </a>
          </div>

          {/* GeeksforGeeks Card */}
          <div 
            className="profile-card animate-in" 
            id="profile-gfg"
            style={{ '--glow-color': PROFILES_CONFIG.gfg.glowColor }}
          >
            <div className="profile-icon" style={{ background: PROFILES_CONFIG.gfg.gradient }}>
              <SiGeeksforgeeks size={32} color="#fff" />
            </div>
            <h3>GeeksforGeeks</h3>
            <div className="profile-stat-box">
              <span className="profile-stat-number">
                <DynamicCount 
                  type="gfg"
                  username={PROFILES_CONFIG.gfg.username} 
                  fallback={PROFILES_CONFIG.gfg.fallbackSolved} 
                />
              </span>
              <span className="profile-stat-label">Problems Solved</span>
            </div>
            <a 
              href={PROFILES_CONFIG.gfg.profileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-profile-cta"
            >
              Visit Profile
            </a>
          </div>

          {/* CodeChef Card */}
          <div 
            className="profile-card animate-in" 
            id="profile-codechef"
            style={{ '--glow-color': PROFILES_CONFIG.codechef.glowColor }}
          >
            <div className="profile-icon" style={{ background: PROFILES_CONFIG.codechef.gradient }}>
              <SiCodechef size={32} color="#fff" />
            </div>
            <h3>CodeChef</h3>
            <div className="profile-stat-box">
              <span className="profile-stat-number">
                <DynamicCount 
                  type="codechef"
                  username={PROFILES_CONFIG.codechef.username} 
                  fallback={PROFILES_CONFIG.codechef.fallbackSolved} 
                />
              </span>
              <span className="profile-stat-label">Problems Solved</span>
            </div>
            <a 
              href={PROFILES_CONFIG.codechef.profileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-profile-cta"
            >
              Visit Profile
            </a>
          </div>

          {/* HackerRank Card */}
          <div 
            className="profile-card animate-in" 
            id="profile-hackerrank"
            style={{ '--glow-color': PROFILES_CONFIG.hackerrank.glowColor }}
          >
            <div className="profile-icon" style={{ background: PROFILES_CONFIG.hackerrank.gradient }}>
              <SiHackerrank size={32} color="#fff" />
            </div>
            <h3>HackerRank</h3>
            <div className="profile-stat-box">
              <span className="profile-stat-number">
                <DynamicCount 
                  type="hackerrank"
                  username={PROFILES_CONFIG.hackerrank.username} 
                  fallback={PROFILES_CONFIG.hackerrank.fallbackBadges} 
                />
              </span>
              <span className="profile-stat-label">Badges Earned</span>
            </div>
            <a 
              href={PROFILES_CONFIG.hackerrank.profileUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-profile-cta"
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
