new LifesycleForm({
  formId: "uqZJLy5L06", // Indicates the identity of this form. is a required field.
  showLoading: true, // if true shows a full page loading screen when submit button clicked,
  showPopup: true,
  beforeSend: () => {
    // triggered just before form data is submitted
  },
  afterSend: (event, response) => {
    // triggered shortly after form data is submitted
  },
  onSuccess: (event, response) => {
    // overrides lifesycles default operations like showing success messages and redirecting after successfull request, you can use lifesycle_response as callback data to manage your operations.
    console.log("Success");
    response.showSuccessMessage();
  },
  onError: (event, response) => {
    // overrides lifesycles default operations like showing error messages after unsuccessfull request, you can use lifesycle_response as callback data to manage your operations.
    console.log("Error");
    response.showErrorMessage();
  },
  validate: (form) => {
    // You can control the required fields in the form in this optional function.
    const emailInput = document.querySelector('input[name="spD0cSD5KM"]');
    const emailValidation = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim;

    emailValidation.test(emailInput.value) ? true : false;
  },
});
