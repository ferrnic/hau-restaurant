import cloudinary from 'cloudinary-core';

const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'hau'});

export const createMBackgroundImage = (publicId) => {
  const t = new cloudinary.Transformation();
  t.crop('scale').width(2000).quality('auto:good').fetchFormat('auto');
  return cloudinaryCore.url(publicId, t);
};

export const createSBackgroundImage = (publicId) => {
  const t = new cloudinary.Transformation();
  t.crop('scale').width(1000).quality('auto:good').fetchFormat('auto');
  return cloudinaryCore.url(publicId, t);
};