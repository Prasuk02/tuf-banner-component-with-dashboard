import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <main>
      <h1 className="font-extrabold text-2xl text-[#222222]">EDIT BANNER</h1>
      <section>
        {/* Description - textarea input */}
        <div className="flex flex-col items-start justify-start gap-1 mt-5">
          <label htmlFor="banner-description">Description</label>
          <textarea
            name="banner-description"
            id="banner-description"
            className="input-text-field h-[100px] p-2"
          ></textarea>
        </div>

        {/* Timer - dateTime input */}
        <div className="flex flex-col items-start justify-start gap-1 mt-5">
          <label htmlFor="banner-timer">Timer</label>
          <input
            type="datetime-local"
            name="banner-timer"
            id="banner-timer"
            className="input-text-field"
          />
        </div>

        {/* Link - text input */}
        <div className="flex flex-col items-start justify-start gap-1 mt-5">
          <label htmlFor="banner-link">Link</label>
          <input
            type="text"
            name="banner-link"
            id="banner-link"
            className="input-text-field"
          />
        </div>

        {/* Visibility - checkbox input */}
        <div className="flex flex-col items-start justify-start gap-1 mt-5">
          <label htmlFor="banner-visibility">Visibility</label>
          <input
            type="checkbox"
            name="banner-visibility"
            id="banner-visibility"
            className="border-[1px] border-[#999999] w-[20px] h-[20px] accent-brand-primary"
          />
        </div>
      </section>

      <button className="text-sm bg-brand-primary mt-8 px-5 py-2 rounded-md text-white">
        Update Banner
      </button>
    </main>
  );
};

export default Dashboard;
