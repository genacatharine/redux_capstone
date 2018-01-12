import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'demo'});
const SampleImg = () => (
    <img src={cloudinaryCore.url('sample')} />
);
