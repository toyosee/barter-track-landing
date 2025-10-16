import { useState, useEffect } from 'react';
import { FaBullhorn } from 'react-icons/fa';

export default function CTAPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000); // Show after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#152d56] text-white px-6 py-5 rounded-lg shadow-xl max-w-sm w-full animate-fade-in border-l-4 border-yellow-400">
      <div className="flex items-start gap-4">
        <FaBullhorn className="text-yellow-400 text-2xl mt-1" />
        <div className="flex-1">
          <h4 className="text-lg font-bold uppercase tracking-wide text-yellow-400">
            Limited Offer
          </h4>
          <p className="text-sm leading-relaxed mt-1">
            Be part of the <span className="font-semibold text-yellow-300">first 10 schools</span> to onboard and get <span className="font-bold text-yellow-300">BarterTrack absolutely FREE</span>.
          </p>
          <button
            onClick={handleClick}
            className="mt-3 bg-yellow-400 text-[#152d56] font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition"
          >
            Claim Your Spot
          </button>
        </div>
        <button
          onClick={() => setShow(false)}
          className="text-white text-xl leading-none hover:text-gray-300 ml-2"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
}