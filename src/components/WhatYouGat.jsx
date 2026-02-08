import { IoCloudUpload, IoEyeSharp } from "react-icons/io5";
import { PiPuzzlePieceDuotone } from "react-icons/pi";

const WhatYouGat = () => {
  return (
    <div className="what-you-gat py-5">
      <div className="container">
        <h2>What You Get</h2>
        <div className="row g-4 mt-3">
          <div className="col-lg-4 col-md-6 col-12">

            <div className="what-you-gat-item mb-4">
              <div className="icon">
                <PiPuzzlePieceDuotone />
              </div>
            </div>

            <h6 className="color-turquoise">Customized to your business</h6>



          </div>
          <div className="col-lg-4 col-md-6 col-12">

            <div className="what-you-gat-item mb-4">
              <div className="icon">
                <IoEyeSharp />
              </div>
            </div>

            <h6 className="color-turquoise">Expert recommendations</h6>


          </div>
          <div className="col-lg-4 col-md-6 col-12">

            <div className="what-you-gat-item mb-4">
              <div className="icon">
                <IoCloudUpload />
              </div>
            </div>
            
            <h6 className="color-turquoise">Assigned service representative</h6>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGat;