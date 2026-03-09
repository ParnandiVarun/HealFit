const MotivationSection = () => {
  const quotes = [
    "Small steps every day lead to big changes 🌱",
    "Consistency beats motivation 💪",
    "You don’t need perfection, just progress ✨",
    "Your future self will thank you 🙌",
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="grid md:grid-cols-3 gap-6 animate-fadeIn">
      {/* QUOTE CARD */}
      <div className="bg-gradient-to-r from-[#38B69A] to-[#2E8B75] text-white p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300">
        <h4 className="text-sm uppercase opacity-80">Daily Motivation</h4>
        <p className="text-lg font-semibold mt-3 leading-relaxed">{quote}</p>
      </div>

      {/* DAILY TIP */}
      <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
        <h4 className="text-sm text-gray-500 uppercase">Wellness Tip</h4>
        <p className="mt-3 text-gray-700">
          Attach a new habit to an existing routine — this makes it easier to
          stay consistent.
        </p>
      </div>

      {/* INSIGHT */}
      <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
        <h4 className="text-sm text-gray-500 uppercase">Insight</h4>
        <p className="mt-3 text-gray-700">
          Users who complete at least <b>1 habit/day</b> are
          <span className="text-[#38B69A] font-semibold"> 3× more likely</span>
          to stay consistent.
        </p>
      </div>
    </div>
  );
};

export default MotivationSection;
