const feedbackFormEl = document.querySelector('.js-feedback-form');

let formData = {
  email: '',
  message: '',
};

const fillFormFields = () => {
  if (localStorage.length === 0) {
    return;
  }
  try {
    const formDataFromLs = JSON.parse(
      localStorage.getItem('feedback-form-data')
    );

    if (formDataFromLs === null) {
      return;
    }

    formData = formDataFromLs;

    for (const key in formDataFromLs) {
      feedbackFormEl.elements[key].value = formDataFromLs[key];
    }
  } catch (error) {
    console.log(error);
  }
};

fillFormFields();

const onFormInput = event => {
  const formInputEl = event.target;
  const fieldValue = formInputEl.value;
  const fieldName = formInputEl.name;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-data', JSON.stringify(formData));
};

const onFormSubmit = event => {
  event.preventDefault();

  if (
    !(formData.email && formData.email.trim()) ||
    !(formData.message && formData.message.trim())
  ) {
    alert('Fill all fields, please');
    return;
  }

  console.log(formData);

  const { currentTarget: formEl } = event;

  formEl.reset();
  localStorage.removeItem('feedback-form-data');
};

feedbackFormEl.addEventListener('input', onFormInput);
feedbackFormEl.addEventListener('submit', onFormSubmit);
