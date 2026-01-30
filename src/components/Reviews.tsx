
import React from 'react';
import Image from 'next/image';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Shayal (Cleaned by)",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBa7tHbnYC_7iKfSFtYjZ74x2DE8mvW2G0L4kPmrqbRJ_IciWPdWf14G4pQ3-X6oit7kcPo9yNdmMvIP-3kYXyzWHM3Xg7ortOPHZUWP7D7j9DCusp8c-Elv2OV-6SPdcNSThBPoAbJCXToffy44KF5o3paJ34EIHDbaCJ5HMH4iyabjwPogoyQRtU7SkaNIlHBGBLS3bpiOA_o8_4lBavuSiauhR4_LeUR7D15uY7hemo8aj0cHRekfr8WkVfcu8OxRGRNpx4TCkCd",
      text: "Shayal did an amazing job cleaning my gutters, very happy with the clean up afterwards too. Would highly recommend.",
      rating: "5.0"
    },
    {
      name: "Local Homeowner",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJee15kKNc4KEaSH1rqHRVCNHczLNf1696jcR9WcijoJxwyLHWUn0XlDTcIl_xyDC98gUTowxmZfbYFhUKx9K7QBCJPWDVKZiuecNENjXzPVuMZ5GCNFrfg23iyIGWkItJ8b0jovwG0IJmXFPZDd4haPiVkOD_ImObIWgjEpapCNRfTecRYURd36X8V8pn3HXB78J9knCGh0XKPIKEyweKZSviXqDXHCuPuGCmtVBhBW4_0op7Rgy9LsyHeBv-nDJGyiJRdjAQvSUu",
      text: "Arrived on time and worked tirelessly. The roof looks brand new again. Excellent communication throughout the process!",
      rating: "5.0"
    },
    {
      name: "Customer Review",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgcmzdhMHGhauSP8UoFBZE_ZnkSATQ6F7m8nKq8Wy5PMIxrHQPqHnWVmEY2HP4FTHa5Ur23LhdgOMOOoo522vMd_ECQrezCGWppUMZ2z3ELt2Y_Avmwtu7BVcQIHRZyrurqM60ik4zLDFxGO2HBbpvlVNGMDvr68Oc5BZP0GV5MrRbZHpFdl-9rT_OLpTebPP8mdLke-suqX6Tf9QpennisO6D19FF3nIsdcBJNgFaLA_3078_vquaBkO0nvJyW6XqeAfANo0shDN3",
      text: "Cleaned by Shayal and his amazing job! They arrived with great communication and spotless results. Definitely using them again.",
      rating: "5.0"
    }
  ];

  return (
    <section className="bg-navy-dark py-16 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-white text-xl md:text-2xl font-medium mb-3 italic opacity-80">Don't Take Our Word for It</h4>
          <h3 className="text-brand-sky text-4xl md:text-6xl font-display font-bold tracking-tight uppercase leading-[0.9]">
            See What Adelaide Homeowners Are Saying
          </h3>
        </div>
        
        <div className="flex overflow-x-auto gap-6 hide-scrollbar pb-8 px-4 -mx-4 snap-x">
          {reviews.map((review, i) => (
            <div key={i} className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-xl snap-center border border-gray-100">
              <div className="flex items-center gap-4 mb-5">
                <Image 
                  alt={review.name} 
                  src={review.img} 
                  width={56}
                  height={56}
                  sizes="56px"
                  className="w-14 h-14 rounded-full bg-slate-200 border-2 border-brand-sky/20" 
                />
                <div>
                  <div className="flex items-center">
                    <span className="text-orange-500 font-bold text-lg mr-1.5">{review.rating}</span>
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
