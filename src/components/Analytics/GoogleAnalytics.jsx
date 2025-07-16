import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

// Google Analytics 4 Measurement ID - Gerçek ID ile değiştirilecek
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Hospitadent'in gerçek GA4 ID'si

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // GA4'i başlat
    if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      ReactGA.initialize(GA_MEASUREMENT_ID);
    }
  }, []);

  useEffect(() => {
    // Sayfa değişikliklerini takip et
    if (GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics; 