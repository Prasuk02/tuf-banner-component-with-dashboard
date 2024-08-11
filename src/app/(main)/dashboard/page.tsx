"use server";
import { getBannerData } from "@/api/banner";
import EditBannerForm from "@/components/dashboard/EditBannerForm";
import React from "react";

type Props = {};

const Dashboard = async (props: Props) => {
  const bannerData = await getBannerData();
  return (
    <main>
      <h1 className="font-extrabold text-2xl text-[#222222]">EDIT BANNER</h1>
      <section>
        <EditBannerForm data={bannerData} />
      </section>
    </main>
  );
};

export default Dashboard;
