import React from 'react';
import Slider from 'react-slick';
import { Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/system';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ServiceContainer = styled(Container)`
  padding: 3rem 0;
`;

const SlideItem = styled(Box)`
  padding: 1rem;
  text-align: center;
`;

const SlideImage = styled('img')`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const OurServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 2 slides at a time
    slidesToScroll: 2, // Scroll by 2 slides at a time
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024, // Screens smaller than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600, // Screens smaller than 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ServiceContainer maxWidth="lg">
      {/* Introductory Paragraph */}
      <Typography variant="h4" color="primary" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        We provide a wide range of professional services to meet your needs. Our team of experts works tirelessly to deliver quality results and ensure customer satisfaction. Discover the solutions we offer by exploring the services listed below.
      </Typography>

      {/* Services Slider */}
      <Slider {...settings}>
        <SlideItem>
          <SlideImage src="https://via.placeholder.com/800x300" alt="Service 1" />
          <Typography variant="h5" color="textPrimary" gutterBottom>
            Service 1
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Detailed description of Service 1 and how it benefits customers.
          </Typography>
        </SlideItem>

        <SlideItem>
          <SlideImage src="https://via.placeholder.com/800x300" alt="Service 2" />
          <Typography variant="h5" color="textPrimary" gutterBottom>
            Service 2
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Detailed description of Service 2 and how it benefits customers.
          </Typography>
        </SlideItem>

        <SlideItem>
          <SlideImage src="https://via.placeholder.com/800x300" alt="Service 3" />
          <Typography variant="h5" color="textPrimary" gutterBottom>
            Service 3
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Detailed description of Service 3 and how it benefits customers.
          </Typography>
        </SlideItem>

        <SlideItem>
          <SlideImage src="https://via.placeholder.com/800x300" alt="Service 4" />
          <Typography variant="h5" color="textPrimary" gutterBottom>
            Service 4
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Detailed description of Service 4 and how it benefits customers.
          </Typography>
        </SlideItem>

        <SlideItem>
          <SlideImage src="https://via.placeholder.com/800x300" alt="Service 5" />
          <Typography variant="h5" color="textPrimary" gutterBottom>
            Service 5
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Detailed description of Service 5 and how it benefits customers.
          </Typography>
        </SlideItem>
      </Slider>
    </ServiceContainer>
  );
};

export default OurServices;

  