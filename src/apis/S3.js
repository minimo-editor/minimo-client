import S3FileUpload from 'react-s3';
import S3Config from '../configs/S3';

export default async function uploadImageToS3(file) {
  try {
    const response = await S3FileUpload.uploadFile(file, S3Config);
    return response.location;
  } catch (error) {
    throw new Error(error.message || 'Failed to upload image to S3.');
  }
}
