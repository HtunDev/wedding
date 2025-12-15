import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ADMIN_PASS = 'devteam123';

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if already authenticated (client-side only)
    if (typeof window !== 'undefined') {
      const storedPass = localStorage.getItem('adminPass');
      if (storedPass === ADMIN_PASS) {
        setAuthenticated(true);
        loadWishes();
      }
    }
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASS) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('adminPass', password);
      }
      setAuthenticated(true);
      setError('');
      loadWishes();
    } else {
      setError('Incorrect password');
    }
  };

  const loadWishes = async () => {
    setLoading(true);
    const storedPass = typeof window !== 'undefined' ? localStorage.getItem('adminPass') : '';
    
    try {
      const response = await fetch(`/api/admin/wishes?pass=${storedPass}`);
      if (!response.ok) {
        throw new Error('Unauthorized');
      }
      const data = await response.json();
      setWishes(data);
    } catch (err) {
      setError('Error loading wishes. Please login again.');
      if (typeof window !== 'undefined') {
        localStorage.removeItem('adminPass');
      }
      setAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const toggleWish = async (id) => {
    const storedPass = typeof window !== 'undefined' ? localStorage.getItem('adminPass') : '';
    
    try {
      const response = await fetch('/api/toggle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pass: storedPass, id }),
      });

      if (response.ok) {
        loadWishes();
      } else {
        alert('Failed to toggle wish. Please login again.');
        if (typeof window !== 'undefined') {
          localStorage.removeItem('adminPass');
        }
        setAuthenticated(false);
      }
    } catch (err) {
      alert('Error toggling wish');
      console.error('Error:', err);
    }
  };

  if (!authenticated) {
    return (
      <>
        <Head>
          <title>Admin Panel - Wedding Wishes</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <div className="auth-container">
          <div className="auth-form">
            <h1>Admin Login</h1>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              autoFocus
            />
            <button onClick={handleLogin}>Login</button>
            {error && <div className="error">{error}</div>}
          </div>
        </div>
        <style jsx>{`
          * {
            box-sizing: border-box;
          }
          .auth-container {
            margin: 0;
            font-family: Poppins, system-ui, sans-serif;
            background: linear-gradient(180deg, #fff6d1, #e0f2fe);
            padding: 20px;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .auth-form {
            max-width: 400px;
            width: 100%;
            background: #fff;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          }
          h1 {
            margin: 0 0 30px;
            color: #1f2937;
          }
          input {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e5e7eb;
            border-radius: 10px;
            font-size: 16px;
            margin-bottom: 20px;
          }
          button {
            padding: 12px 24px;
            background: linear-gradient(135deg, #ffb703, #ff006e);
            color: #fff;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
          }
          .error {
            padding: 15px;
            background: #fee2e2;
            color: #991b1b;
            border-radius: 10px;
            margin-top: 15px;
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Admin Panel - Wedding Wishes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <div className="admin-container">
          <Link href="/wishes" className="back-button">
            <span>← Back to Wishes</span>
          </Link>
          <h1>Admin Panel</h1>
          {loading ? (
            <div className="loading">Loading wishes...</div>
          ) : wishes.length === 0 ? (
            <div className="loading">No wishes yet.</div>
          ) : (
            <div className="wishes-list">
              {wishes.map((wish) => (
                <div key={wish.id} className={`wish-item ${wish.visible ? 'visible' : ''}`}>
                  <div className="wish-info">
                    <div className="wish-name">{wish.name}</div>
                    {(wish.position || wish.team) && <div className="wish-team">{wish.position || wish.team}</div>}
                    <div className="wish-message">{wish.message}</div>
                  </div>
                  <div>
                    <span className={`status ${wish.visible ? 'on' : 'off'}`}>
                      {wish.visible ? 'ON' : 'OFF'}
                    </span>
                    <button className="toggle-btn" onClick={() => toggleWish(wish.id)}>
                      Toggle
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }
        .container {
          margin: 0;
          font-family: Poppins, system-ui, sans-serif;
          background: linear-gradient(180deg, #fff6d1, #e0f2fe);
          padding: 20px;
          min-height: 100vh;
        }
        .admin-container {
          max-width: 800px;
          margin: 0 auto;
          background: #fff;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
        h1 {
          margin: 0 0 30px;
          padding-top: 20px;
          color: #1f2937;
        }
        .back-button {
          display: inline-block;
          padding: 12px 24px;
          background: linear-gradient(135deg, #f8fafc, #f1f5f9);
          color: #475569;
          text-decoration: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 32px;
          transition: all 0.3s ease;
          border: 2px solid #e2e8f0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }
        .back-button:hover {
          background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
          color: #1e293b;
          border-color: #cbd5e1;
          transform: translateX(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .wish-item {
          padding: 20px;
          margin-bottom: 15px;
          background: #f8fafc;
          border-radius: 12px;
          border-left: 4px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .wish-item.visible {
          border-left-color: #10b981;
        }
        .wish-info {
          flex: 1;
        }
        .wish-name {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 5px;
        }
        .wish-team {
          color: #64748b;
          font-size: 14px;
          margin-bottom: 8px;
        }
        .wish-message {
          color: #374151;
          margin-top: 8px;
          font-style: italic;
        }
        .status {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-right: 10px;
        }
        .status.on {
          background: #d1fae5;
          color: #065f46;
        }
        .status.off {
          background: #fee2e2;
          color: #991b1b;
        }
        .toggle-btn {
          padding: 8px 16px;
          background: #3b82f6;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
        }
        .toggle-btn:hover {
          background: #2563eb;
        }
        .loading {
          text-align: center;
          padding: 40px;
          color: #64748b;
        }
      `}</style>
    </>
  );
}

