export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        .back-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #ffb703, #ff006e);
          color: #fff;
          text-decoration: none;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          box-shadow: 0 8px 20px rgba(255, 183, 3, 0.3);
          font-family: inherit;
        }
        .back-pill:hover {
          background: linear-gradient(135deg, #ffb703, #ff006e);
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(255, 183, 3, 0.4);
        }
        .back-pill svg {
          transition: transform 0.3s ease;
        }
        .back-pill:hover svg {
          transform: translateX(-4px);
        }
      `}</style>
    </>
  );
}

