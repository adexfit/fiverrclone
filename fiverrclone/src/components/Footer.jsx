import React from "react";

function Footer() {
  return (
    <div className="flex justify-center text-[#666] my-[50px]">
      <div className="w-[1400px]">
        <div className="flex justify-between">
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-base text-[#555]">Categories</h2>
            <span className="font-light">Graphics & Design</span>
            <span className="font-light">Digital Marketing</span>
            <span className="font-light">Writing & Translation</span>
            <span className="font-light">Video & Animation</span>
            <span className="font-light">Music & Audio</span>
            <span className="font-light">Programming & Tech</span>
            <span className="font-light">Data</span>
            <span className="font-light">Business</span>
            <span className="font-light">Lifestyle</span>
            <span className="font-light">Photography</span>
            <span className="font-light">Sitemap</span>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-base text-[#555]">About</h2>
            <span className="font-light">Press & News</span>
            <span className="font-light">Partnerships</span>
            <span className="font-light">Privacy Policy</span>
            <span className="font-light">Terms of Service</span>
            <span className="font-light">Intellectual Property Claims</span>
            <span className="font-light">Investor Relations</span>
            <span className="font-light">Contact Sales</span>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-base text-[#555]">Support</h2>
            <span className="font-light">Help & Support</span>
            <span className="font-light">Trust & Safety</span>
            <span className="font-light">Selling on Liverr</span>
            <span className="font-light">Buying on Liverr</span>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-base text-[#555]">Community</h2>
            <span className="font-light">Customer Success Stories</span>
            <span className="font-light">Community hub</span>
            <span className="font-light">Forum</span>
            <span className="font-light">Events</span>
            <span className="font-light">Blog</span>
            <span className="font-light">Influencers</span>
            <span className="font-light">Affiliates</span>
            <span className="font-light">Podcast</span>
            <span className="font-light">Invite a Friend</span>
            <span className="font-light">Become a Seller</span>
            <span className="font-light">Community Standards</span>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h2 className="text-base text-[#555]">More From Fiverr</h2>
            <span className="font-light">Liverr Business</span>
            <span className="font-light">Liverr Pro</span>
            <span className="font-light">Liverr Logo Maker</span>
            <span className="font-light">Liverr Guides</span>
            <span className="font-light">Get Inspired</span>
            <span className="font-light">Liverr Select</span>
            <span className="font-light">ClearVoice</span>
            <span className="font-light">Liverr Workspace</span>
            <span className="font-light">Learn</span>
            <span className="font-light">Working Not Working</span>
          </div>
        </div>

        <hr className="my-[50px] border border-[#ebe9e9]" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[20px] w-max">
            <h2 className="text-lg font-semibold">liverr</h2>
            <span className="text-[13px] whitespace-nowrap">
              © Liverr International Ltd. 2023
            </span>
          </div>

          <div className="flex items-center gap-[30px] w-max">
            <div className="flex gap-[20px]">
              <img src="/img/twitter.png" alt="" className="w-6 h-6" />
              <img src="/img/facebook.png" alt="" className="w-6 h-6" />
              <img src="/img/linkedin.png" alt="" className="w-6 h-6" />
              <img src="/img/pinterest.png" alt="" className="w-6 h-6" />
              <img src="/img/instagram.png" alt="" className="w-6 h-6" />
            </div>
            <div className="flex items-center gap-[10px]">
              <img src="/img/language.png" alt="" className="w-6 h-6" />
              <span>English</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <img src="/img/coin.png" alt="" className="w-6 h-6" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
