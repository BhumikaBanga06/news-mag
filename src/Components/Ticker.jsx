const Ticker = ({ titles }) => {
  return (
    <div>
      <style>{`
          .ticker-wrap {
            overflow: hidden;
            white-space: nowrap;
            background: crimson;
            padding: 8px 0;
          }
          .ticker-move {
            display: inline-flex;
            animation: scroll-left 45s linear infinite;
          }
          .ticker-move:hover { animation-play-state: paused; }
          .ticker-item { display: inline-block; margin-right: 60px; font-weight: bold; color: white; }
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      <div className="ticker-wrap">
        <div className="ticker-move">
          {titles.map((t, i) => (
            <span key={i} className="ticker-item">
              {t}
            </span>
          ))}
          {titles.map((t, i) => (
            <span key={`dup-${i}`} className="ticker-item">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
