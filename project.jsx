import React from "react";

export default function BirthdayWebsite() {
  const correctPassword = "0201";

  const [password, setPassword] = React.useState("");

  const handleUnlock = () => {
    if (password === correctPassword) {
      document.getElementById("locked-screen").style.display = "none";
      document.getElementById("main-site").style.display = "block";
    } else {
      alert("Wrong password 🌙");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 text-gray-800 font-sans overflow-hidden">
      {/* LOCK SCREEN */}
      <div
        id="locked-screen"
        className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
      >
        <div className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-[40px] p-10 max-w-lg border border-white/60">
          <h1 className="text-5xl font-bold mb-4 text-rose-500">
            A Little Secret 💖
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            This website was made for someone extremely special — Atisha 💖.
            <br />
            Enter your birthday password to unlock it ✨
          </p>

          <input
            type="password"
            placeholder="Enter birthday password 💌"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-5 px-6 py-4 rounded-2xl border border-rose-200 bg-white/80 outline-none text-center text-lg shadow-inner"
          />

          <button
            onClick={handleUnlock}
            className="px-8 py-4 rounded-full bg-rose-400 hover:bg-rose-500 transition-all duration-300 text-white text-lg shadow-xl hover:scale-105"
          >
            Unlock My Heart 💌
          </button>

          <p className="mt-6 text-sm text-gray-500">
            Hint: DDMM format 🌷
          </p>
        </div>
      </div>

      {/* MAIN WEBSITE */}
      <div id="main-site" style={{ display: "none" }}>
        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_#ff9ec4,_transparent_40%),radial-gradient(circle_at_bottom_right,_#c084fc,_transparent_40%)]"></div>

          <div className="relative z-10 max-w-4xl text-center">
            <h1 className="text-7xl md:text-8xl font-black text-rose-500 mb-6 drop-shadow-lg">
              Happy Birthday Atisha 💗
            </h1>

            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
              To Atisha — the prettiest smile, the kindest soul,
              <br />
              and the most beautiful person I know ✨
            </p>

            <div className="mt-10 flex justify-center">
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl px-8 py-5 shadow-xl border border-white/50 max-w-2xl">
                <p className="text-lg leading-relaxed text-gray-700">
                  I hope this day brings you endless happiness, warm hugs,
                  soft moments, beautiful memories, and all the love you
                  deserve. You make ordinary days feel special just by being
                  yourself 🌸
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* NOTES SECTION */}
        <section className="py-24 px-6">
          <h2 className="text-5xl font-bold text-center text-rose-500 mb-16">
            Little Things I Wanted To Say 🌷
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold text-rose-400 mb-4">
                Your Smile ✨
              </h3>
              <p className="leading-relaxed text-gray-700 text-lg">
                Your smile has this magical way of making everything feel
                lighter. It is honestly one of the most beautiful things I have
                ever seen.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                Your Presence 💕
              </h3>
              <p className="leading-relaxed text-gray-700 text-lg">
                Being around you feels comforting and peaceful. You make moments
                feel warm without even trying.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">
                Your Day 🌸
              </h3>
              <p className="leading-relaxed text-gray-700 text-lg">
                Today is all about you. I just want you to feel appreciated,
                cared for, celebrated, and genuinely happy because you deserve
                that more than anyone.
              </p>
            </div>
          </div>
        </section>

        {/* LOVE LETTER */}
        <section className="px-6 py-24">
          <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-2xl rounded-[40px] shadow-2xl p-10 md:p-16 border border-white/50">
            <h2 className="text-5xl font-bold text-center text-rose-500 mb-10">
              A Letter For You 💌
            </h2>

            <div className="space-y-6 text-lg md:text-xl leading-loose text-gray-700">
              <p>
                Happy Birthday to someone who genuinely makes life brighter.
              </p>

              <p>
                I hope this year brings you beautiful surprises, peaceful days,
                endless laughter, and dreams that come true one by one.
              </p>

              <p>
                You deserve to be reminded every single day how amazing,
                beautiful, smart, and special you are.
              </p>

              <p>
                Even the smallest conversations with you stay in my mind for a
                long time. There is just something about you that feels
                unforgettable.
              </p>

              <p>
                On your special day, I only want one thing — for you to feel
                loved, appreciated, and surrounded by happiness.
              </p>

              <p className="text-rose-500 font-semibold text-2xl pt-4">
                Happy Birthday once again 🌙💖
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        {/* FLOATING HEARTS */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-300 animate-bounce opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
              }}
            >
              💖
            </div>
          ))}
        </div>

        {/* COUNTDOWN */
        <section className="px-6 py-20 text-center">
          <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl rounded-[40px] p-12 shadow-2xl">
            <h2 className="text-5xl font-bold text-rose-500 mb-6">
              Waiting For Your Special Day ⏳
            </h2>

            <p className="text-2xl text-gray-700 leading-relaxed">
              Every second feels exciting because your birthday deserves to be celebrated in the most beautiful way possible 💖
            </p>
          </div>
        </section>

        {/* MUSIC */}
        <audio autoPlay loop>
          <source src="https://www.bensound.com/bensound-music/bensound-romantic.mp3" type="audio/mp3" />
        </audio>

        <footer className="pb-10 text-center text-gray-500 text-sm">
          Made with love, soft music vibes, and a lot of feelings ✨
        </footer>
      </div>
    </div>
  );
}
