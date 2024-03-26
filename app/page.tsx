import React from 'react';

const Page = () => {
    // Function to fetch all images from the /public/images directory
    const fetchImages = async () => {
        const imagesResponse = await fetch('/images');
        const imagesData = await imagesResponse.json();
        return imagesData;
    };

    // Render function to create cards for each image
    const renderImages = async () => {
        const images = await fetchImages();
        return images.map((image: string, index: number) => (
            <div key={index} style={styles.card}>
                <img src={image} alt={`Image ${index + 1}`} style={styles.image} />
                <button onClick={() => handleDownload(image)} style={styles.button}>Download</button>
            </div>
        ));
    };

    // Function to handle image download
    const handleDownload = (image: string) => {
        // Implement download logic here
        console.log('Downloading image:', image);
    };

    return (
        <div style={styles.container}>
            <h1>Image Gallery</h1>
            <div style={styles.gallery}>
                {renderImages()}
            </div>
        </div>
    );
};

// Inline CSS styles
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        textAlign: 'center',
    },
    gallery: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    card: {
        margin: '10px',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '300px',
        height: 'auto',
        marginBottom: '10px',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        outline: 'none',
    },
};

export default Page;
