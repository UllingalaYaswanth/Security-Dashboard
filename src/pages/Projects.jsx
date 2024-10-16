import React from 'react';
import ImageCard from '../layouts/ImageCard';
import img1 from './img/16504.jpg';
import img2 from './img/31191.jpg';
import img3 from './img/31192.jpg'
import img4 from './img/31198.jpg'

function Projects() {
  return (
    <div>
      <div className='grid md:grid-cols-2 xl:grid-cols-4'>
        <ImageCard imgsrc={img1}>
          <h2 className='font-bold text-lg'>Nature Beauty</h2>
          <p className='text-sm'>
            Nature is an inherent character or constitution, particularly of the ecosphere or the universe as a whole. In this general sense nature refers to the laws, elements and phenomena of the physical world, including life.
          </p>
        </ImageCard>
        <ImageCard imgsrc={img2}>
          <h2 className='font-bold text-lg'>Nature Beauty</h2>
          <p className='text-sm'>
            Nature is an inherent character or constitution, particularly of the ecosphere or the universe as a whole. In this general sense nature refers to the laws, elements and phenomena of the physical world, including life.
          </p>
        </ImageCard>
        <ImageCard imgsrc={img3}>
          <h2 className='font-bold text-lg'>Nature Beauty</h2>
          <p className='text-sm'>
            Nature is an inherent character or constitution, particularly of the ecosphere or the universe as a whole. In this general sense nature refers to the laws, elements and phenomena of the physical world, including life.
          </p>
        </ImageCard>
        <ImageCard imgsrc={img4}>
          <h2 className='font-bold text-lg'>Nature Beauty</h2>
          <p className='text-sm'>
            Nature is an inherent character or constitution, particularly of the ecosphere or the universe as a whole. In this general sense nature refers to the laws, elements and phenomena of the physical world, including life.
          </p>
        </ImageCard>
      </div>
    </div>
  );
}

export default Projects;
