import { Segment } from 'semantic-ui-react';

const GymLocation = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Segment inverted>
        <h2>Find Us Here</h2>
      </Segment>
      <iframe
        title="Black Belt Boxing Gym Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.6965803642474!2d-70.28943622392639!3d41.66229727126629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89fb30e0470c50b1%3A0x38c59c3450c639f0!2s20%20Baxter%20Rd%2C%20Hyannis%2C%20MA%2002601!5e0!3m2!1sen!2sus!4v1737094745004!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GymLocation;
