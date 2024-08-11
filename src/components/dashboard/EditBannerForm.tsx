"use client";
import { updateBanner } from "@/api/banner";
import { UpdatedBannerData } from "@/types/banner";
import React, { useState, useRef } from "react";

interface props {
  data: UpdatedBannerData
}

const EditBannerForm = ({ data }: props) => {
  const isBannerVisible = useRef();
  const [bannerDetails, setBannerDetails] = useState(data || {
    description: '',
    link: '',
    isVisible: false,
    expiresIn: '2024-12-08T19:14:03'
  })

  const saveBannerDetails = async () => {
    try {
      await updateBanner(bannerDetails);
    } catch (error) {
      console.log(error);
    }
  }

  const handleUserDetails = (event: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.name;
    let value;
    if (fieldName === 'isVisible') {
      value = isBannerVisible.current?.checked;
    } else {
      value = event.target.value
    }
    setBannerDetails({ ...bannerDetails, [fieldName]: value })
  };

  return (
    <main>
      {/* Description - textarea input */}
      <div className="flex flex-col items-start justify-start gap-1 mt-5">
        <label htmlFor="banner-description">Description</label>
        <textarea
        name="description"
        id="banner-description"
        className="input-text-field h-[100px] p-2"
        onChange={(event) => handleUserDetails(event)}
        value={bannerDetails?.description}
      ></textarea>
      </div>

      {/* Timer - dateTime input */}
      <div className="flex flex-col items-start justify-start gap-1 mt-5">
        <label htmlFor="banner-timer">Timer</label>
        <input
          type="datetime-local"
          name="expiresIn"
          id="banner-timer"
          className="input-text-field"
          onChange={(event) => handleUserDetails(event)}
          value={bannerDetails.expiresIn}
        />
      </div>

      {/* Link - text input */}
      <div className="flex flex-col items-start justify-start gap-1 mt-5">
        <label htmlFor="banner-link">Link</label>
        <input
          type="text"
          name="link"
          id="banner-link"
          className="input-text-field"
          onChange={(event) => handleUserDetails(event)}
          value={bannerDetails.link}
        />
      </div>

      {/* Visibility - checkbox input */}
      <div className="flex flex-col items-start justify-start gap-1 mt-5">
        <label htmlFor="banner-visibility">Visibility</label>
        <input
          type="checkbox"
          name="isVisible"
          id="banner-visibility"
          className="border-[1px] border-[#999999] w-[20px] h-[20px] accent-brand-primary"
          ref={isBannerVisible}
          onChange={(event) => handleUserDetails(event)}
          checked={bannerDetails.isVisible}
        />
      </div>

      <button className="text-sm bg-brand-primary mt-8 px-5 py-2 rounded-md text-white" onClick={saveBannerDetails}>
        Update Banner
      </button>
    </main>
  );
};

export default EditBannerForm;
