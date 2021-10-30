import React from 'react';
import gallery1 from  '../../../../images/Gallery/Gallery1.jpg'
import gallery2 from  '../../../../images/Gallery/Gallery2.jpg'
import gallery3 from  '../../../../images/Gallery/Gallery3.jpg'
import gallery4 from  '../../../../images/Gallery/Gallery-long.jpg'
import gallery5 from  '../../../../images/Gallery/Gallery5.jpg'
import gallery6 from  '../../../../images/Gallery/Gallery6.jpg'
const Gallery = () => {
    return (
        <div>
            <h4 className='text-primary mt-3'>Our Gallery</h4>
            <h3>CAPTURED MOMENTS IN WATERBOOM</h3>
            <section>
                <div className='py-4'>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4">
                <img className='img-fluid mb-3' src={gallery1} alt="" />
                <img className='img-fluid mb-3' src={gallery4} alt="" />
                            </div>

                            <div className="col-xl-4 col-lg-4">
                            <img className='img-fluid mb-3' src={gallery2} alt="" />
                <img className='img-fluid mb-3' src={gallery5} alt="" />
                            </div>
                            <div className="col-xl-4 col-lg-4">
                            <img className='img-fluid mb-3' src={gallery3} alt="" />
                <img className='img-fluid mb-3' src={gallery6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Gallery;