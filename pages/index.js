import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Splash() {
  const router = useRouter();
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);
    setTimeout(() => {
      router.push('/wishes');
    }, 300);
  };

  return (
    <>
      <Head>
        <title>Welcome - Wedding Wishes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={`splash-container ${isEntering ? 'fade-out' : ''}`}>
        <div className="splash-content">
          <div className="couple-illustration">
            {/* Cartoon Couple SVG */}
            <svg viewBox="0 0 400 300" className="couple-svg">
              {/* Groom - First (on left) */}
              <g className="groom">
                {/* Suit */}
                <rect x="120" y="160" width="50" height="80" rx="5" fill="#1f2937"/>
                <rect x="125" y="160" width="40" height="60" rx="3" fill="#374151"/>
                {/* Body */}
                <ellipse cx="145" cy="150" rx="25" ry="35" fill="#ffe0b2"/>
                {/* Head */}
                <circle cx="145" cy="100" r="30" fill="#ffe0b2"/>
                {/* Hair */}
                <ellipse cx="145" cy="85" rx="28" ry="15" fill="#2c1810"/>
                {/* Eyes */}
                <circle cx="137" cy="95" r="3" fill="#333"/>
                <circle cx="153" cy="95" r="3" fill="#333"/>
                {/* Smile */}
                <path d="M 137 105 Q 145 110 153 105" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round"/>
                {/* Tie */}
                <path d="M 145 160 L 140 175 L 145 180 L 150 175 Z" fill="#ff006e"/>
              </g>

              {/* Bride - Second (on right) */}
              <g className="bride">
                {/* Dress */}
                <ellipse cx="255" cy="220" rx="50" ry="60" fill="#ffb703" opacity="0.9"/>
                <path d="M 205 220 Q 255 180 305 220" fill="#ffb703" opacity="0.9"/>
                {/* Body */}
                <ellipse cx="255" cy="150" rx="25" ry="35" fill="#ffe0b2"/>
                {/* Head */}
                <circle cx="255" cy="100" r="30" fill="#ffe0b2"/>
                {/* Hair */}
                <path d="M 225 100 Q 255 70 285 100 Q 275 80 255 75 Q 235 80 225 100" fill="#8b4513"/>
                {/* Veil */}
                <path d="M 225 100 Q 255 60 285 100" stroke="#fff" strokeWidth="2" fill="none" opacity="0.6"/>
                <path d="M 235 90 Q 255 50 275 90" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.5"/>
                {/* Eyes */}
                <circle cx="247" cy="95" r="3" fill="#333"/>
                <circle cx="263" cy="95" r="3" fill="#333"/>
                {/* Smile */}
                <path d="M 247 105 Q 255 110 263 105" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </g>

              {/* Complete Hearts - using circles + triangle method */}
              <g className="hearts">
                {/* Left heart */}
                <circle cx="40" cy="90" r="15" fill="#ff006e"/>
                <circle cx="60" cy="90" r="15" fill="#ff006e"/>
                <path d="M 25 90 L 50 130 L 75 90 Z" fill="#ff006e"/>
                {/* Right heart */}
                <circle cx="310" cy="90" r="15" fill="#ffb703"/>
                <circle cx="330" cy="90" r="15" fill="#ffb703"/>
                <path d="M 295 90 L 320 130 L 345 90 Z" fill="#ffb703"/>
                {/* Top heart */}
                <circle cx="180" cy="50" r="12" fill="#8ecae6"/>
                <circle cx="200" cy="50" r="12" fill="#8ecae6"/>
                <path d="M 168 50 L 190 85 L 212 50 Z" fill="#8ecae6"/>
                {/* Center heart */}
                <circle cx="180" cy="140" r="10" fill="#ff006e"/>
                <circle cx="200" cy="140" r="10" fill="#ff006e"/>
                <path d="M 170 140 L 190 170 L 210 140 Z" fill="#ff006e"/>
              </g>
            </svg>
          </div>
          
          <div className="splash-text">
            <h1 className="couple-names">
              Pradeep & Theingi
            </h1>
            <p className="welcome-message">
              Welcome to Our Wedding Wishes
            </p>
            <div className="divider"></div>
            <p className="sub-message">
              Messages from Digital Team
            </p>
          </div>

          <button className="enter-button" onClick={handleEnter}>
            <span>Enter to See Messages</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        .splash-container {
          margin: 0;
          font-family: Poppins, system-ui, sans-serif;
          background: linear-gradient(180deg, #fff6d1, #e0f2fe);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          transition: opacity 0.3s ease;
        }
        .splash-container.fade-out {
          opacity: 0;
        }
        .splash-content {
          max-width: 400px;
          width: 100%;
          text-align: center;
          animation: fadeIn 0.8s ease;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .couple-illustration {
          margin-bottom: 30px;
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .couple-svg {
          width: 100%;
          max-width: 350px;
          height: auto;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
        }
        .splash-text {
          margin-bottom: 40px;
        }
        .couple-names {
          font-size: 32px;
          font-weight: 700;
          background: linear-gradient(135deg, #ffb703, #ff006e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 15px 0;
        }
        .welcome-message {
          font-size: 18px;
          color: #475569;
          margin: 0 0 20px 0;
          font-weight: 500;
        }
        .divider {
          width: 80px;
          height: 4px;
          margin: 20px auto;
          background: linear-gradient(to right, #8ecae6, #ffb703);
          border-radius: 2px;
        }
        .sub-message {
          font-size: 14px;
          color: #64748b;
          margin: 15px 0 0 0;
          font-style: italic;
        }
        .enter-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: linear-gradient(135deg, #ffb703, #ff006e);
          color: #fff;
          border: none;
          border-radius: 50px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(255, 183, 3, 0.3);
          font-family: inherit;
        }
        .enter-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(255, 183, 3, 0.4);
        }
        .enter-button:active {
          transform: translateY(-1px);
        }
        .enter-button svg {
          transition: transform 0.3s ease;
        }
        .enter-button:hover svg {
          transform: translateX(5px);
        }
      `}</style>
    </>
  );
}
