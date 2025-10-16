import { useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaSchool,
  FaCommentDots,
  FaPaperPlane
} from 'react-icons/fa';

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formsubmit.co/ajax/tyabolaji@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (response.ok) {
        toast.success("Onboarding request submitted! We'll be in touch soon.");
        e.target.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 relative">
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-20 flex items-center justify-center z-10 rounded-md">
          <span className="text-[#152d56] font-medium animate-pulse">Sending Onboarding Request...</span>
        </div>
      )}

      {/* Name */}
      <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
        <FaUser className="text-[#152d56] mr-3" />
        <input type="text" name="name" placeholder="Your Name" required className="w-full outline-none" />
      </div>

      {/* Phone */}
      <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
        <FaPhoneAlt className="text-[#152d56] mr-3" />
        <input type="text" name="phone" placeholder="Phone Number" required className="w-full outline-none" />
      </div>

      {/* Email */}
      <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
        <FaEnvelope className="text-[#152d56] mr-3" />
        <input type="email" name="email" placeholder="Email Address" required className="w-full outline-none" />
      </div>

      {/* School */}
      <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
        <FaSchool className="text-[#152d56] mr-3" />
        <input type="text" name="school" placeholder="School Name" required className="w-full outline-none" />
      </div>

      {/* Message */}
      <div className="flex items-start border border-gray-300 rounded-md px-4 py-2">
        <FaCommentDots className="text-[#152d56] mr-3 mt-1" />
        <textarea name="message" placeholder="Inquiry Details" rows="4" required className="w-full outline-none resize-none"></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`flex items-center justify-center gap-2 bg-[#152d56] text-white px-6 py-3 rounded-md w-full transition ${
          loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-yellow-400 hover:text-[#152d56]'
        }`}
      >
        <FaPaperPlane />
        {loading ? 'Onboarding...' : 'Onboard'}
      </button>
    </form>
  );
}

export default ContactForm;