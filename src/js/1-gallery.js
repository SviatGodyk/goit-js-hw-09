import { save, load } from './localstorage';
import SimpleLightBox from 'simplelightbox';

new SimpleLightBox('.js-gallery a', { captionsData: 'alt', captionDelay: 250 });

const formData = {
  name: 'Sviatoslav',
  email: 'godyk92@yahoo.com',
  message: 'my message',
};

const getDataFromLs = () => {
  console.log(load('feedback-form-data'));
};

getDataFromLs();
save('feedback-form-data', formData);
