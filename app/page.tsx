import React from 'react';

// Manually defined list of images
const images = [
  { src: '/images/20220625_140424.jpg', title: 'Image 1' },
  { src: '/images/20220625_140549.jpg', title: 'Image 2' },
  { src: '/images/20220625_140700.jpg', title: 'Image 3' },
  { src: '/images/20220625_140736.jpg', title: 'Image 4' },
  { src: '/images/20220625_140744.jpg', title: 'Image 5' },
  { src: '/images/20220625_140823.jpg', title: 'Image 6' },
  { src: '/images/20220625_140837.jpg', title: 'Image 7' },
  { src: '/images/20220625_141141.jpg', title: 'Image 8' },
  { src: '/images/20220625_141148.jpg', title: 'Image 9' },
  { src: '/images/20220625_180643.jpg', title: 'Image 10' },
  { src: '/images/20220625_183509.jpg', title: 'Image 11' }
];

const inlineStyles = {
  container: {
    textAlign: 'center' as const, // Corrected type
  },
  gallery: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '20px',
    padding: '20px',
    justifyContent: 'center',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imagePreview: {
    maxWidth: '150px',
    maxHeight: '150px',
    width: 'auto',
    height: 'auto',
  },
  downloadButton: {
    margin: '10px',
    padding: '10px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
};

const Page: React.FC = () => {
  const renderImages = () => (
    images.map((image, index) => (
      <div key={index} style={inlineStyles.card}>
        <img src={image.src} alt={image.title} style={inlineStyles.imagePreview} />
        <a href={image.src} download style={inlineStyles.downloadButton}>Download</a>
      </div>
    ))
  );

  return (
    <div style={inlineStyles.container}>
      <h1>Image Gallery</h1>
      <div style={inlineStyles.gallery}>
        {renderImages()}
      </div>
    </div>
  );
};

export default Page;
