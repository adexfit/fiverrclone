import React from "react";

const TrustedBy = () => {
  return (
    <div className="bg-[#fafafa] h-[100px] flex justify-center">
      <div className="max-w-[760px] flex items-center gap-5 text-[#c8c8c8] font-medium">
        <span>Trusted by:</span>
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png"
          alt="facebook"
          className="h-[50px] object-contain"
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
          alt="google"
          className="h-[50px] object-contain"
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
          alt="netflix"
          className="h-[50px] object-contain"
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
          alt="p&g"
          className="h-[50px] object-contain"
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
          alt="paypal"
          className="h-[50px] object-contain"
        />
      </div>
    </div>
  );
};

export default TrustedBy;
