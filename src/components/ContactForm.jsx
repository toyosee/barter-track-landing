import { useState } from 'react';
import { toast } from 'react-hot-toast';

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
        toast.success("Inquiry submitted! We'll be in touch soon.");
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
          <span className="text-[#152d56] font-medium animate-pulse">Sending message...</span>
        </div>
      )}
      <input type="text" name="name" placeholder="Your Name" required className="w-full border border-gray-300 rounded-md px-4 py-2" />
      <input type="email" name="email" placeholder="Email Address" required className="w-full border border-gray-300 rounded-md px-4 py-2" />
      <input type="text" name="school" placeholder="School Name" required className="w-full border border-gray-300 rounded-md px-4 py-2" />
      <textarea name="message" placeholder="Inquiry Details" rows="4" required className="w-full border border-gray-300 rounded-md px-4 py-2"></textarea>
      <button
        type="submit"
        disabled={loading}
        className={`bg-[#152d56] text-white px-6 py-3 rounded-md w-full transition ${
          loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
        }`}
      >
        {loading ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  );
}

export default ContactForm;