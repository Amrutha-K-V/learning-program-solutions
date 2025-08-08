import React from 'react';
import './OfficeList.css';

const OfficeList = () => {
  const heading = <h1>🏢 Office Space Rental App</h1>;

  const featuredOffice = {
    name: 'Tech Hub',
    rent: 55000,
    address: '123 Innovation Street, Bengaluru',
    image: 'https://stylework-images.s3.ap-south-1.amazonaws.com/Spaces/65128e5e36a00b064ef23b94/1709376243131.jpeg',
  };

  const officeSpaces = [
    {
      name: 'Startup Nest',
      rent: 45000,
      address: '11 MG Road, Bengaluru',
      image: 'https://blog.spacematrix.com/sites/default/files/styles/resp_large_breakpoints_theme_archi_dark_wide_1x/public/blog/Resized%20Images-05%20%285%29.jpg',
    },
    {
      name: 'Corporate Tower',
      rent: 75000,
      address: '88 Residency Lane, Mumbai',
      image: 'https://officeforrent.in/blog-images/Akasa%20Trapezoid%20(7).jpeg',
    },
    {
      name: 'Creative Loft',
      rent: 60000,
      address: '22 Art District, Pune',
      image: 'https://images.adsttc.com/media/images/563a/13a4/e58e/ce91/0300/0021/large_jpg/jvantspijker_loftoffice_00.jpg?1446646681',
    },
    {
      name: 'Enterprise Plaza',
      rent: 90000,
      address: '101 Business Bay, Hyderabad',
      image: 'https://spaces.imgix.net/mediaFiles/My80LzAvZi8zNDBmZjI4NzgwY2Q4NWNlN2ZhOGFiYzVlZmE3ZmI2NjQwZWU2NWEyX1NwYWNlc19NYXJ0aW5QbGFjZV9fX1N5ZG5leV9BdXN0cmFsaWFfY291Y2hlcy5qcGcvZG93bmxvYWQ?w=910&h=420&q=30&auto=format,compress',
    },
  ];

  return (
    <div className="office-container">
      {heading}

      <h2>Featured Office</h2>
      <div className="office-card">
        <img src={featuredOffice.image} alt={featuredOffice.name} className="office-image" />
        <p><strong>Name:</strong> {featuredOffice.name}</p>
        <p className={featuredOffice.rent < 60000 ? 'low-rent' : 'high-rent'}>
          <strong>Rent:</strong> ₹{featuredOffice.rent}
        </p>
        <p><strong>Address:</strong> {featuredOffice.address}</p>
      </div>

      <h2>Available Office Spaces</h2>
      {officeSpaces.map((space, index) => (
        <div key={index} className="office-card">
          <img src={space.image} alt={space.name} className="office-image" />
          <p><strong>Name:</strong> {space.name}</p>
          <p className={space.rent < 60000 ? 'low-rent' : 'high-rent'}>
            <strong>Rent:</strong> ₹{space.rent}
          </p>
          <p><strong>Address:</strong> {space.address}</p>
        </div>
      ))}
    </div>
  );
};

export default OfficeList;