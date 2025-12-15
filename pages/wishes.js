import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Wishes() {
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedWish, setSelectedWish] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('/api/wishes')
      .then(res => res.json())
      .then(data => {
        setWishes(data.filter(w => w.visible));
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading wishes:', err);
        setLoading(false);
      });
  }, []);

  const openModal = (wish) => {
    setSelectedWish(wish);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWish(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const getAvatarColor = (name) => {
    const colors = ['#dc2626', '#fbbf24', '#b91c1c', '#f59e0b'];
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <>
      <Head>
        <title>Wedding Wishes - Messages from Digital Team</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dc2626" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.18" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#dc2626" stopOpacity="0.18" />
            </linearGradient>
          </defs>
        </svg>
        <div className="decorative-hearts">
          <svg className="heart-svg" viewBox="0 0 24 24" fill="url(#gradient1)" stroke="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <svg className="heart-svg" viewBox="0 0 24 24" fill="url(#gradient2)" stroke="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <svg className="heart-svg" viewBox="0 0 24 24" fill="url(#gradient1)" stroke="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <svg className="heart-svg" viewBox="0 0 24 24" fill="url(#gradient2)" stroke="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <svg className="heart-svg" viewBox="0 0 24 24" fill="url(#gradient1)" stroke="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <svg className="heart-svg" viewBox="0 0 24 24" fill="url(#gradient2)" stroke="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <svg className="heart-svg" viewBox="0 0 24 24" fill="url(#gradient1)" stroke="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <svg className="heart-svg" viewBox="0 0 24 24" fill="url(#gradient2)" stroke="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </div>
        <div className="phone">
          {/* Extra hearts inside phone for mobile view */}
          <div className="phone-hearts">
            <svg className="phone-heart phone-heart-1" viewBox="0 0 24 24" fill="url(#gradient1)">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <svg className="phone-heart phone-heart-2" viewBox="0 0 24 24" fill="url(#gradient2)">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <svg className="phone-heart phone-heart-3" viewBox="0 0 24 24" fill="url(#gradient1)">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <svg className="phone-heart phone-heart-4" viewBox="0 0 24 24" fill="url(#gradient2)">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <div className="header">
            <div className="header-content">
              <div className="back-row">
                <Link href="/" className="back-pill">
                  <span>← Back</span>
                </Link>
              </div>
              <div className="badge-wrapper">
                <div className="couple-icon">
                  <svg viewBox="0 0 120 120" className="couple-svg">
                    {/* Groom with Indian Kurta - First */}
                    <g className="groom">
                      <circle cx="35" cy="30" r="16" fill="#ffe0b2"/>
                      <rect x="28" y="48" width="14" height="18" rx="2" fill="#1e40af" opacity="0.9"/>
                      <rect x="30" y="48" width="10" height="14" rx="1" fill="#2563eb"/>
                      <path d="M 28 52 L 42 52" stroke="#fbbf24" strokeWidth="2.5"/>
                      <circle cx="32" cy="28" r="2.5" fill="#333"/>
                      <circle cx="38" cy="28" r="2.5" fill="#333"/>
                      <path d="M 32 32 Q 35 35 38 32" stroke="#333" strokeWidth="2" fill="none"/>
                    </g>
                    {/* Bride with Indian Saree - Second */}
                    <g className="bride">
                      <circle cx="85" cy="30" r="16" fill="#ffe0b2"/>
                      <ellipse cx="85" cy="48" rx="12" ry="16" fill="#dc2626" opacity="0.9"/>
                      <path d="M 73 48 Q 85 40 97 48 Q 85 58 73 48" fill="#dc2626" opacity="0.9"/>
                      <path d="M 78 30 Q 85 23 92 30" stroke="#8b4513" strokeWidth="2.5" fill="none"/>
                      <circle cx="81" cy="28" r="2.5" fill="#333"/>
                      <circle cx="89" cy="28" r="2.5" fill="#333"/>
                      <path d="M 81 32 Q 85 36 89 32" stroke="#333" strokeWidth="2" fill="none"/>
                    </g>
                    {/* Decorative elements */}
                    <path d="M 50 25 C 50 18, 57 18, 57 25 C 57 18, 64 18, 64 25 C 64 32, 57 40, 50 32 C 57 40, 64 32, 64 25" fill="#dc2626" opacity="0.6"/>
                    <path d="M 70 25 C 70 18, 63 18, 63 25 C 63 18, 56 18, 56 25 C 56 32, 63 40, 70 32 C 63 40, 56 32, 56 25" fill="#fbbf24" opacity="0.6"/>
                  </svg>
                </div>
                <div className="badge">Wedding Wishes</div>
                <div className="couple-icon">
                  <svg viewBox="0 0 120 120" className="couple-svg">
                    {/* Groom with Indian Kurta - First */}
                    <g className="groom">
                      <circle cx="35" cy="30" r="16" fill="#ffe0b2"/>
                      <rect x="28" y="48" width="14" height="18" rx="2" fill="#1e40af" opacity="0.9"/>
                      <rect x="30" y="48" width="10" height="14" rx="1" fill="#2563eb"/>
                      <path d="M 28 52 L 42 52" stroke="#fbbf24" strokeWidth="2.5"/>
                      <circle cx="32" cy="28" r="2.5" fill="#333"/>
                      <circle cx="38" cy="28" r="2.5" fill="#333"/>
                      <path d="M 32 32 Q 35 35 38 32" stroke="#333" strokeWidth="2" fill="none"/>
                    </g>
                    {/* Bride with Indian Saree - Second */}
                    <g className="bride">
                      <circle cx="85" cy="30" r="16" fill="#ffe0b2"/>
                      <ellipse cx="85" cy="48" rx="12" ry="16" fill="#dc2626" opacity="0.9"/>
                      <path d="M 73 48 Q 85 40 97 48 Q 85 58 73 48" fill="#dc2626" opacity="0.9"/>
                      <path d="M 78 30 Q 85 23 92 30" stroke="#8b4513" strokeWidth="2.5" fill="none"/>
                      <circle cx="81" cy="28" r="2.5" fill="#333"/>
                      <circle cx="89" cy="28" r="2.5" fill="#333"/>
                      <path d="M 81 32 Q 85 36 89 32" stroke="#333" strokeWidth="2" fill="none"/>
                    </g>
                    {/* Decorative elements */}
                    <path d="M 50 25 C 50 18, 57 18, 57 25 C 57 18, 64 18, 64 25 C 64 32, 57 40, 50 32 C 57 40, 64 32, 64 25" fill="#dc2626" opacity="0.6"/>
                    <path d="M 70 25 C 70 18, 63 18, 63 25 C 63 18, 56 18, 56 25 C 56 32, 63 40, 70 32 C 63 40, 56 32, 56 25" fill="#fbbf24" opacity="0.6"/>
                  </svg>
                </div>
              </div>
              <div className="names">
                Mr. Pradeep Kumar Polisetty<br/>&<br/>Ms. Theingi Lin
              </div>
              <div className="divider-wrapper">
                <div className="divider"></div>
              </div>
              <div className="subtitle">
                Messages from Digital Team
                {!loading && wishes.length > 0 && (
                  <span className="count"> ({wishes.length} messages)</span>
                )}
              </div>
            </div>
          </div>

          <div className="wishes-container">
            {loading ? (
              <div className="loading">
                <div className="loading-spinner"></div>
                <p>Loading wishes...</p>
              </div>
            ) : wishes.length === 0 ? (
              <div className="empty">
                <div className="empty-icon">💌</div>
                <p>No wishes yet. Be the first to send one!</p>
                <Link href="/add-wish" className="submit-btn-link">
                  <button className="submit-btn">Send a Wish</button>
                </Link>
              </div>
            ) : (
              <div className="wishes-grid">
                {wishes.map((wish, index) => (
                  <div 
                    key={wish.id} 
                    className="wish-card" 
                    style={{ animationDelay: `${index * 0.04}s` }}
                    onClick={() => openModal(wish)}
                  >
                    <div className="wish-message">{wish.message}</div>
                    <div className="wish-author">
                      <div className="author-avatar" style={{ backgroundColor: getAvatarColor(wish.name) }}>
                        {wish.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="author-info">
                        <div className="author-name">{wish.name}</div>
                        {(wish.position || wish.team) && <div className="author-team">{wish.position || wish.team}</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="footer">
            <Link href="/add-wish" className="submit-link">
              <button className="submit-button" type="button">
                <span>+ Send Your Wish</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Modal Popup */}
      {isModalOpen && selectedWish && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <div className="modal-header">
              <div className="modal-avatar" style={{ backgroundColor: getAvatarColor(selectedWish.name) }}>
                {selectedWish.name.charAt(0).toUpperCase()}
              </div>
              <div className="modal-author-info">
                <div className="modal-author-name">{selectedWish.name}</div>
                {(selectedWish.position || selectedWish.team) && <div className="modal-author-team">{selectedWish.position || selectedWish.team}</div>}
              </div>
            </div>
            <div className="modal-message">
              {selectedWish.message}
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        :root {
          --primary: #ffb703;
          --secondary: #8ecae6;
          --accent: #ff006e;
        }
        * {
          box-sizing: border-box;
        }
        a {
          text-decoration: none;
        }
        a:hover, a:visited, a:active, a:focus {
          text-decoration: none;
        }
        .container {
          margin: 0;
          font-family: Poppins, system-ui, sans-serif;
          background: linear-gradient(180deg, #fef3c7, #fde68a, #fef3c7);
          min-height: 100vh;
          padding: 20px 10px;
          position: relative;
          overflow-x: hidden;
        }
        @media (max-width: 768px) {
          .container {
            padding: 15px 8px;
          }
        }
        .decorative-hearts {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: visible;
        }
        .heart-svg {
          position: absolute;
          width: 100px;
          height: 100px;
          opacity: 0.15;
          stroke-width: 2;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
          animation: float 15s ease-in-out infinite;
        }
        .heart-svg:nth-child(1) {
          top: 8%;
          left: 5%;
          animation-delay: 0s;
          stroke: #dc2626;
          fill: url(#gradient1);
        }
        .heart-svg:nth-child(2) {
          top: 20%;
          right: 5%;
          animation-delay: 1.5s;
          width: 120px;
          height: 120px;
          stroke: #fbbf24;
          fill: url(#gradient2);
        }
        .heart-svg:nth-child(3) {
          top: 50%;
          left: 4%;
          animation-delay: 3s;
          width: 100px;
          height: 100px;
          stroke: #dc2626;
          fill: url(#gradient1);
        }
        .heart-svg:nth-child(4) {
          top: 60%;
          right: 6%;
          animation-delay: 4.5s;
          width: 140px;
          height: 140px;
          stroke: #fbbf24;
          fill: url(#gradient2);
        }
        .heart-svg:nth-child(5) {
          top: 15%;
          left: 50%;
          animation-delay: 6s;
          width: 90px;
          height: 90px;
          stroke: #dc2626;
          fill: url(#gradient1);
        }
        .heart-svg:nth-child(6) {
          top: 80%;
          left: 15%;
          animation-delay: 7.5s;
          width: 115px;
          height: 115px;
          stroke: #fbbf24;
          fill: url(#gradient2);
        }
        .heart-svg:nth-child(7) {
          top: 35%;
          right: 3%;
          animation-delay: 9s;
          width: 105px;
          height: 105px;
          stroke: #dc2626;
          fill: url(#gradient1);
        }
        .heart-svg:nth-child(8) {
          top: 75%;
          right: 8%;
          animation-delay: 10.5s;
          width: 125px;
          height: 125px;
          stroke: #fbbf24;
          fill: url(#gradient2);
        }
        @media (max-width: 768px) {
          .phone-hearts {
            display: block;
          }
          /* make hearts more visible and use falling animation on mobile */
          .heart-svg {
            opacity: 0.25;
            width: 80px;
            height: 80px;
            animation: heartFall 10s linear infinite;
          }
          .phone-heart {
            opacity: 0.3;
            width: 70px;
            height: 70px;
            animation: heartFall 8s linear infinite;
          }
          .heart-svg:nth-child(1) {
            top: 6%;
            left: 5%;
            width: 70px;
            height: 70px;
          }
          .heart-svg:nth-child(2) {
            top: 18%;
            right: 4%;
            width: 80px;
            height: 80px;
          }
          .heart-svg:nth-child(3) {
            top: 40%;
            left: 3%;
            width: 70px;
            height: 70px;
          }
          .heart-svg:nth-child(4) {
            top: 50%;
            right: 4%;
            width: 85px;
            height: 85px;
          }
          .heart-svg:nth-child(5) {
            top: 14%;
            left: 45%;
            width: 65px;
            height: 65px;
          }
          .heart-svg:nth-child(6) {
            top: 72%;
            left: 10%;
            width: 70px;
            height: 70px;
          }
          .heart-svg:nth-child(7) {
            top: 32%;
            right: 3%;
            width: 75px;
            height: 75px;
          }
          .heart-svg:nth-child(8) {
            top: 68%;
            right: 6%;
            width: 80px;
            height: 80px;
          }
          @keyframes heartFall {
            0% {
              transform: translateY(-20%) translateX(0) rotate(0deg);
              opacity: 0;
            }
            20% {
              opacity: 0.22;
            }
            80% {
              opacity: 0.22;
            }
            100% {
              transform: translateY(130%) translateX(-10px) rotate(10deg);
              opacity: 0;
            }
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.15;
          }
          33% {
            transform: translateY(-25px) translateX(15px) rotate(8deg);
            opacity: 0.18;
          }
          66% {
            transform: translateY(20px) translateX(-12px) rotate(-8deg);
            opacity: 0.16;
          }
        }
        @media (max-width: 768px) {
          @keyframes float {
            0%, 100% {
              transform: translateY(0) translateX(0) rotate(0deg);
              opacity: 0.15;
            }
            33% {
              transform: translateY(-20px) translateX(10px) rotate(8deg);
              opacity: 0.18;
            }
            66% {
              transform: translateY(15px) translateX(-8px) rotate(-8deg);
              opacity: 0.16;
            }
          }
        }
        .phone {
          max-width: 900px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 28px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          overflow: visible;
          display: flex;
          flex-direction: column;
          max-height: calc(100vh - 40px);
          position: relative;
          z-index: 1;
        }
        .phone-hearts {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          display: none;
        }
        .phone-heart {
          position: absolute;
          width: 70px;
          height: 70px;
          opacity: 0.18;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
          animation: float 14s ease-in-out infinite;
        }
        .phone-heart-1 {
          top: 16%;
          left: 6%;
          animation-delay: 0s;
        }
        .phone-heart-2 {
          top: 32%;
          right: 6%;
          animation-delay: 2s;
        }
        .phone-heart-3 {
          bottom: 18%;
          left: 10%;
          animation-delay: 4s;
        }
        .phone-heart-4 {
          bottom: 10%;
          right: 8%;
          animation-delay: 6s;
        }
        .header {
          flex-shrink: 0;
          background: linear-gradient(135deg, rgba(254, 243, 199, 0.8), rgba(253, 230, 138, 0.8));
          backdrop-filter: blur(10px);
          border-bottom: 2px solid rgba(251, 191, 36, 0.3);
          position: relative;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          padding-top: 10px;
        }
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(254, 243, 199, 0.7));
          z-index: 0;
        }
        .header-content {
          padding: 28px 20px 24px;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .back-row {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 12px;
        }
        /* back link now uses global .back-pill style from _app.js */
        .phone .back-button,
        .back-button {
          position: absolute !important;
          top: 20px !important;
          left: 20px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 48px !important;
          height: 48px !important;
          min-width: 48px !important;
          min-height: 48px !important;
          padding: 0 !important;
          margin: 0 !important;
          background: #ffffff !important;
          color: #dc2626 !important;
          text-decoration: none !important;
          border-radius: 50% !important;
          transition: all 0.2s ease !important;
          border: 3px solid #dc2626 !important;
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.25) !important;
          z-index: 1000 !important;
          box-sizing: border-box !important;
          cursor: pointer !important;
        }
        .phone .back-button:hover,
        .back-button:hover {
          background: #fff !important;
          border-color: #b91c1c !important;
          color: #b91c1c !important;
          text-decoration: none !important;
          transform: scale(1.05) !important;
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.35) !important;
        }
        .phone .back-button:visited,
        .back-button:visited {
          text-decoration: none !important;
        }
        .phone .back-button:active,
        .back-button:active {
          transform: scale(0.95) !important;
          text-decoration: none !important;
        }
        .phone .back-button:focus,
        .back-button:focus {
          text-decoration: none !important;
          outline: none !important;
        }
        .phone .back-button span,
        .back-button span {
          transition: transform 0.2s ease !important;
          display: block !important;
          line-height: 1 !important;
          text-decoration: none !important;
          font-size: 24px !important;
          font-weight: 700 !important;
          margin: 0 !important;
          padding: 0 !important;
          width: auto !important;
          height: auto !important;
        }
        .phone .back-button:hover span,
        .back-button:hover span {
          transform: translateX(-2px) !important;
        }
        @media (max-width: 768px) {
          .phone .back-button,
          .back-button {
            top: 15px !important;
            left: 15px !important;
            width: 44px !important;
            height: 44px !important;
            min-width: 44px !important;
            min-height: 44px !important;
          }
          .phone .back-button span,
          .back-button span {
            font-size: 20px !important;
          }
        }
        .badge-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        .couple-icon {
          width: 72px;
          height: 72px;
          opacity: 1;
          flex-shrink: 0;
        }
        .couple-svg {
          width: 100%;
          height: 100%;
        }
        @media (max-width: 640px) {
          .couple-icon {
            width: 60px;
            height: 60px;
          }
          .badge-wrapper {
            gap: 12px;
          }
        }
        .badge {
          display: inline-block;
          padding: 12px 28px;
          border-radius: 25px;
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.8px;
          box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4), 0 0 0 3px rgba(251, 191, 36, 0.3);
          border: 2px solid rgba(251, 191, 36, 0.5);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          position: relative;
        }
        .badge::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          border-radius: 25px;
          z-index: -1;
          opacity: 0.6;
        }
        .names {
          margin: 18px 0;
          font-weight: 700;
          font-size: 22px;
          background: linear-gradient(135deg, #dc2626, #b91c1c, #991b1b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.4;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .divider-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 22px 0;
        }
        .divider {
          width: 80px;
          height: 3px;
          background: linear-gradient(to right, #dc2626, #fbbf24, #dc2626);
          border-radius: 2px;
          box-shadow: 0 2px 4px rgba(220, 38, 38, 0.3);
        }
        .subtitle {
          margin-top: 12px;
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
        }
        .count {
          color: var(--accent);
          font-weight: 600;
        }
        .wishes-container {
          flex: 1;
          overflow-y: auto;
          padding: 28px 24px;
          background: #ffffff;
          -webkit-overflow-scrolling: touch;
        }
        .wishes-container::-webkit-scrollbar {
          width: 6px;
        }
        .wishes-container::-webkit-scrollbar-track {
          background: #f8fafc;
        }
        .wishes-container::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, var(--primary), var(--accent));
          border-radius: 3px;
        }
        .wishes-container::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, var(--accent), var(--primary));
        }
        .wishes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          padding-bottom: 10px;
        }
        @media (max-width: 640px) {
          .wishes-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
        @media (min-width: 641px) and (max-width: 768px) {
          .wishes-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .wish-card {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.7), 
            rgba(254, 243, 199, 0.5));
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 
            0 8px 24px rgba(220, 38, 38, 0.1),
            0 2px 8px rgba(251, 191, 36, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.8),
            inset 0 -1px 0 rgba(251, 191, 36, 0.1);
          border: 1.5px solid rgba(251, 191, 36, 0.3);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          animation: fadeInUp 0.5s ease forwards;
          opacity: 0;
          display: flex;
          flex-direction: column;
          min-height: 160px;
          position: relative;
          cursor: pointer;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .wish-card:hover {
          transform: translateY(-6px) scale(1.02);
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.8), 
            rgba(254, 243, 199, 0.6));
          backdrop-filter: blur(25px) saturate(200%);
          -webkit-backdrop-filter: blur(25px) saturate(200%);
          box-shadow: 
            0 12px 40px rgba(220, 38, 38, 0.2),
            0 4px 12px rgba(251, 191, 36, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            inset 0 -1px 0 rgba(251, 191, 36, 0.2);
          border-color: rgba(251, 191, 36, 0.5);
        }
        .wish-message {
          flex: 1;
          font-size: 14px;
          line-height: 1.7;
          color: #1f2937;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-weight: 400;
          background: rgba(255, 255, 255, 0.3);
          padding: 12px;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(251, 191, 36, 0.2);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }
        .wish-author {
          margin-top: auto;
          padding-top: 15px;
          padding-bottom: 8px;
          border-top: 1px solid rgba(251, 191, 36, 0.3);
          display: flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(to bottom, transparent, rgba(254, 243, 199, 0.2));
          padding: 15px 12px 8px 12px;
          margin: auto -24px -24px -24px;
          border-radius: 0 0 20px 20px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .author-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 700;
          font-size: 16px;
          flex-shrink: 0;
          border: 2px solid rgba(251, 191, 36, 0.6);
          box-shadow: 
            0 2px 8px rgba(220, 38, 38, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        .author-info {
          flex: 1;
          min-width: 0;
        }
        .author-name {
          font-size: 14px;
          font-weight: 600;
          background: linear-gradient(135deg, #dc2626, #fbbf24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }
        .author-team {
          font-size: 12px;
          color: #64748b;
          font-weight: 400;
        }
        .loading {
          text-align: center;
          padding: 80px 20px;
          color: #64748b;
        }
        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #f1f5f9;
          border-top-color: var(--primary);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
          margin: 0 auto 20px;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .loading p {
          font-size: 14px;
          color: #94a3b8;
        }
        .empty {
          text-align: center;
          padding: 80px 20px;
        }
        .empty-icon {
          font-size: 56px;
          margin-bottom: 20px;
          display: block;
          opacity: 0.6;
        }
        .empty p {
          margin-bottom: 25px;
          font-size: 16px;
          color: #64748b;
          font-weight: 400;
        }
        .footer {
          padding: 22px 24px;
          text-align: center;
          background: linear-gradient(135deg, rgba(254, 243, 199, 0.6), rgba(253, 230, 138, 0.6));
          flex-shrink: 0;
          border-top: 2px solid rgba(251, 191, 36, 0.3);
        }
        .submit-link {
          text-decoration: none !important;
          display: block;
        }
        .submit-link:hover {
          text-decoration: none !important;
        }
        .submit-link:visited {
          text-decoration: none !important;
        }
        .submit-link:active {
          text-decoration: none !important;
        }
        .submit-link a {
          text-decoration: none !important;
        }
        .submit-button {
          width: 100%;
          padding: 16px 24px;
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: #fff;
          border: none;
          border-radius: 14px;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4), 0 0 0 3px rgba(251, 191, 36, 0.3);
          border: 2px solid rgba(251, 191, 36, 0.4);
          text-decoration: none !important;
        }
        .submit-button span {
          text-decoration: none !important;
        }
        .submit-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(220, 38, 38, 0.5), 0 0 0 4px rgba(251, 191, 36, 0.4);
          background: linear-gradient(135deg, #b91c1c, #991b1b);
        }
        .submit-button:active {
          transform: translateY(0);
        }
        .submit-button svg {
          transition: transform 0.3s;
        }
        .submit-button:hover svg {
          transform: translateX(3px);
        }
        .submit-btn-link {
          text-decoration: none;
          display: inline-block;
          margin-top: 10px;
        }
        .submit-btn {
          padding: 12px 24px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          font-family: inherit;
          box-shadow: 0 4px 12px rgba(255, 183, 3, 0.25);
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(255, 183, 3, 0.3);
        }
        
        /* Modal Styles - iOS 16 Liquid Glass Design with Project Colors */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(220, 38, 38, 0.2), rgba(251, 191, 36, 0.15));
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .modal-content {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.75), 
            rgba(254, 243, 199, 0.6));
          backdrop-filter: blur(40px) saturate(180%);
          -webkit-backdrop-filter: blur(40px) saturate(180%);
          border-radius: 28px;
          padding: 32px;
          max-width: 600px;
          width: 100%;
          max-height: 80vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 
            0 8px 32px rgba(220, 38, 38, 0.15),
            0 2px 8px rgba(251, 191, 36, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.9),
            inset 0 -1px 0 rgba(251, 191, 36, 0.1);
          border: 1.5px solid rgba(251, 191, 36, 0.4);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.7), 
            rgba(254, 243, 199, 0.5));
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1.5px solid rgba(251, 191, 36, 0.4);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          color: #dc2626;
          z-index: 10;
          box-shadow: 
            0 2px 8px rgba(220, 38, 38, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }
        .modal-close:hover {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.9), 
            rgba(251, 191, 36, 0.3));
          color: #b91c1c;
          border-color: rgba(220, 38, 38, 0.5);
          transform: rotate(90deg) scale(1.05);
          box-shadow: 
            0 4px 12px rgba(220, 38, 38, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }
        .modal-close:active {
          transform: rotate(90deg) scale(0.95);
        }
        .modal-close svg {
          width: 20px;
          height: 20px;
        }
        .modal-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(251, 191, 36, 0.3);
          background: linear-gradient(135deg, 
            rgba(254, 243, 199, 0.4), 
            rgba(255, 255, 255, 0.2));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 20px;
          margin: -32px -32px 24px -32px;
          border-radius: 28px 28px 0 0;
          box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.6),
            0 1px 0 rgba(251, 191, 36, 0.2);
        }
        .modal-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 700;
          flex-shrink: 0;
          border: 2px solid rgba(255, 255, 255, 0.5);
          box-shadow: 
            0 4px 12px rgba(220, 38, 38, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        .modal-author-info {
          flex: 1;
        }
        .modal-author-name {
          font-size: 20px;
          font-weight: 700;
          background: linear-gradient(135deg, #dc2626, #fbbf24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 4px;
        }
        .modal-author-team {
          font-size: 14px;
          color: #64748b;
          font-style: italic;
        }
        .modal-message {
          font-size: 16px;
          line-height: 1.8;
          color: #1f2937;
          white-space: pre-wrap;
          word-wrap: break-word;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.5), 
            rgba(254, 243, 199, 0.3));
          padding: 20px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(251, 191, 36, 0.3);
          box-shadow: 
            inset 0 1px 0 rgba(255, 255, 255, 0.7),
            inset 0 -1px 0 rgba(251, 191, 36, 0.1);
        }
        .modal-content::-webkit-scrollbar {
          width: 8px;
        }
        .modal-content::-webkit-scrollbar-track {
          background: rgba(254, 243, 199, 0.3);
          border-radius: 4px;
          backdrop-filter: blur(10px);
        }
        .modal-content::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #dc2626, #fbbf24);
          backdrop-filter: blur(10px);
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        .modal-content::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #b91c1c, #f59e0b);
        }
        @media (max-width: 640px) {
          .modal-content {
            padding: 24px 20px;
            max-height: 85vh;
          }
          .modal-header {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
          .modal-avatar {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
          .modal-author-name {
            font-size: 18px;
          }
          .modal-message {
            font-size: 15px;
          }
          .modal-close {
            top: 12px;
            right: 12px;
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </>
  );
}
