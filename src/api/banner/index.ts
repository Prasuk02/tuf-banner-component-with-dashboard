import { db } from "@/db";
import { UpdatedBannerData } from "@/types/banner";

export const getBannerData = async () => {
  try {
    const bannerData = await db.banner.findFirst();
    return bannerData;
  } catch (error) {
    console.error("Error Fetching banner data:", error);
    throw new Error("Unable to retrieve banner data");
  }
};

export const updateBanner = async (updatedData: UpdatedBannerData) => {
  try {
    const banner = await db.banner.findFirst();
    if (banner) {
      const updatedBanner = await db.banner.update({
        where: {
          id: banner.id,
        },
        data: updatedData,
      });
    } else {
      createNewBanner(updatedData);
    }
  } catch (error) {
    console.error("Error Updating banner data:", error);
    throw new Error("Unable to retrieve banner data");
  }
};

const createNewBanner = async (bannerData: UpdatedBannerData) => {
  try {
    console.log("Creating new banner")
    const newBanner = await db.banner.create({
      data: bannerData,
    });
  } catch (error) {
    console.error("Error Creating banner data:", error);
    throw new Error("Unable to retrieve banner data");
  }
};
