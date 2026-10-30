


const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-6 px-4 sm:px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-500 text-center sm:text-left">
        
        {/* বাঁ পাশের টেক্সট */}
        <div>
          <span className="font-bold text-gray-900">বাজার দর</span> — প্রয়োজনীয় পণ্যের দাম এক নজরে।
        </div>

        {/* ডান পাশের ডিসক্লেইমার টেক্সট */}
        <div className="text-gray-900">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </div>

      </div>
    </footer>
  );
};

export default Footer;