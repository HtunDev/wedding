import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const MAX_MESSAGE_LENGTH = 500;

export default function AddWish() {
  const [formData, setFormData] = useState({ name: '', position: '', message: '' });
  const [message, setMessage] = useState({ text: '', type: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.message.length > MAX_MESSAGE_LENGTH) {
      setMessage({
        text: `✗ Message must be ${MAX_MESSAGE_LENGTH} characters or less.`,
        type: 'error',
      });
      return;
    }
    
    setSubmitting(true);
    setMessage({ text: '', type: '' });

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({
          text: '✓ Wish submitted successfully! It will appear after admin approval.',
          type: 'success',
        });
        setFormData({ name: '', position: '', message: '' });
      } else {
        setMessage({
          text: '✗ ' + (result.error || 'Failed to submit wish'),
          type: 'error',
        });
      }
    } catch (error) {
      setMessage({
        text: '✗ Network error. Please try again.',
        type: 'error',
      });
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Add Wish - Wedding Wishes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <div className="form-container">
          <Link href="/wishes" className="back-button">
            <span>← Back to Wishes</span>
          </Link>
          <h1>Send Your Wish</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="text"
              name="position"
              placeholder="Position (optional)"
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            />
            <div className="textarea-wrapper">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length <= MAX_MESSAGE_LENGTH) {
                    setFormData({ ...formData, message: value });
                  }
                }}
                maxLength={MAX_MESSAGE_LENGTH}
                required
              />
              <div className={`char-count ${formData.message.length > MAX_MESSAGE_LENGTH * 0.9 ? 'warning' : ''}`}>
                {formData.message.length} / {MAX_MESSAGE_LENGTH}
              </div>
            </div>
            <button type="submit" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send Wish'}
            </button>
            {message.text && (
              <div className={`message ${message.type}`}>{message.text}</div>
            )}
          </form>
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
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .form-container {
          max-width: 500px;
          width: 100%;
          background: #fff;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          position: relative;
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
        h1 {
          margin: 0 0 30px;
          padding-top: 20px;
          text-align: center;
          color: #1f2937;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        input,
        textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 10px;
          font-size: 16px;
          font-family: inherit;
          transition: border-color 0.3s;
        }
        input:focus,
        textarea:focus {
          outline: none;
          border-color: #ffb703;
        }
        .textarea-wrapper {
          position: relative;
        }
        textarea {
          min-height: 120px;
          resize: vertical;
          padding-bottom: 35px;
        }
        .char-count {
          position: absolute;
          bottom: 12px;
          right: 12px;
          font-size: 12px;
          color: #64748b;
          background: rgba(255, 255, 255, 0.9);
          padding: 4px 8px;
          border-radius: 6px;
        }
        .char-count.warning {
          color: #f59e0b;
          font-weight: 600;
        }
        button {
          padding: 14px 24px;
          background: linear-gradient(135deg, #ffb703, #ff006e);
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255, 183, 3, 0.3);
        }
        button:active:not(:disabled) {
          transform: translateY(0);
        }
        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .message {
          padding: 12px;
          border-radius: 10px;
          text-align: center;
          margin-top: 10px;
        }
        .success {
          background: #d1fae5;
          color: #065f46;
        }
        .error {
          background: #fee2e2;
          color: #991b1b;
        }
      `}</style>
    </>
  );
}

