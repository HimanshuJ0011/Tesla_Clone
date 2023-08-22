import React from 'react'


function Models({ltext , rtext , modelname , pricetag , backgroundImg}) {
    return (
        <div className=' bg-cover min-h-screen  relative' style={{background:`url(${backgroundImg})`,backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}> 

            <div className='text-center relative top-24'>

                <h1 className='text-5xl font-semibold font-sans '>{modelname}</h1>
                <p className='mt-2 font-semibold'>{ pricetag}</p>

            </div>

            {/* <video preload="auto" playsinline="" data-autoplay-desktop="true" data-autoplay-portrait="true" data-autoplay-mobile="true"
                data-play-on-hover="false" muted="" loop="true"
                poster="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-Poster-NA.jpg"
                data-poster-desktop="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-Poster-NA.jpg"
                data-poster-portrait="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-Poster-NA.jpg"
                data-poster-mobile="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Mobile-Poster-NA.jpg"
                data-src-desktop="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD-Animation.webm"
                data-src-portrait="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD-Animation.webm"
                data-src-mobile="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-S-Main-Hero-Mobile-LHD-Animation-v2.webm"
                data-src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD-Animation.webm"
                data-object-fit="true" src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD-Animation.webm"
                data-loaded="true" autoplay="">

            </video> */}
            <div className='h-8  w-2/5 grid grid-cols-2 gap-x-4 absolute  bottom-28 left-1/3' >

            <div title='Explore Inventry' className=' text-gray-200 bg-black opacity-60  rounded-md px-16 py-2 w-76' >
                <span className=''>
                    {ltext}
                </span>

            </div>
            <div title='Customer Order' className=' bg-gray-200 text-black  rounded-md px-16 py-2 w-76'>
                <span className=''>
                 {rtext}
                </span>

            </div>


             </div>

            
        </div>
    )
}

export default Models