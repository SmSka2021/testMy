"use strict";

// /*VALIDATE FORMS*/
const buttonForm = document.querySelector("#btnForm");
const inputName = document.querySelector("#name");
const checkboxForm = document.querySelector("#checkbox");
const inputEmail = document.querySelector("#email");
const errorEmail = document.querySelector(".error_email");
const inputPhone = document.querySelector("#tel");
const errorTel = document.querySelector(".error_tel");
const errorName = document.querySelector(".error_name");
inputPhone.addEventListener("input", onInputTel);
inputEmail.addEventListener("input", onInputEmail);
buttonForm.addEventListener("click", submitForm);
inputName.addEventListener("input", onInputName);
buttonForm.disabled = true;
let checkedValue = false;

checkboxForm.addEventListener("change", function () {
  if (this.checked) {
    checkedValue = true;
  } else {
    checkedValue = false;
  }
  checkDisabledForm();
});

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}
function isNameValid(value) {
  return value.trim().length >= 3;
}

function onInputName() {
  if (!inputName.value.trim()) {
    errorName.style.opacity = "0";
  } else {
    if (isNameValid(inputName.value)) {
      errorName.style.opacity = "0";
    } else {
      errorName.style.opacity = "1";
    }
  }
  checkDisabledForm();
}
function onInputEmail() {
  if (!inputEmail.value) {
    errorEmail.style.opacity = "0";
  } else {
    if (isEmailValid(inputEmail.value)) {
      errorEmail.style.opacity = "0";
    } else {
      errorEmail.style.opacity = "1";
    }
  }
  checkDisabledForm();
}

function isValidatePhoneNumber(phone) {
  return /^\+?([0-9]{3})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/.test(phone);
}

function onInputTel() {
  if (!inputPhone.value) {
    errorTel.style.opacity = "0";
  } else {
    if (isValidatePhoneNumber(inputPhone.value)) {
      errorTel.style.opacity = "0";
    } else {
      errorTel.style.opacity = "1";
    }
  }
  checkDisabledForm();
}

function checkDisabledForm() {
  if (
    !inputName.value ||
    !isNameValid(inputName.value) ||
    !inputPhone.value ||
    !isValidatePhoneNumber(inputPhone.value) ||
    !inputEmail.value ||
    !isEmailValid(inputEmail.value) ||
    !checkedValue
  ) {
    buttonForm.disabled = true;
  } else {
    buttonForm.disabled = false;
  }
}

function submitForm() {
  console.log({
    name: inputName.value,
    phone: inputPhone.value,
    email: inputEmail.value,
  });
}

/*MODAL form*/
function modalFormActions() {
  const buttonFormModal = document.querySelector("#btnForm_modal");
  const inputNameModal = document.querySelector("#name_modal");
  const checkboxFormModal = document.querySelector("#checkbox_modal");
  const inputEmailModal = document.querySelector("#email_modal");
  const errorEmailModal = document.querySelector(".error_email_modal");
  const errorNameModal = document.querySelector(".error_name_modal");
  const inputPhoneModal = document.querySelector("#tel_modal");
  const errorTelModal = document.querySelector(".error_tel_modal");
  inputPhoneModal.addEventListener("input", onInputTelModal);
  inputEmailModal.addEventListener("input", onInputEmailModal);
  inputNameModal.addEventListener("input", onInputNameModal);
  buttonFormModal.addEventListener("click", submitFormModal);
  buttonFormModal.disabled = true;
  let checkedValueModal = false;

  function submitFormModal() {
    console.log({
      name: inputNameModal.value,
      phone: inputPhoneModal.value,
      email: inputEmailModal.value,
    });
  }

  checkboxFormModal.addEventListener("change", function () {
    if (this.checked) {
      checkedValueModal = true;
    } else {
      checkedValueModal = false;
    }
    checkDisabledFormModal();
  });

  function checkDisabledFormModal() {
    if (
      !inputNameModal.value ||
      !isNameValid(inputNameModal.value) ||
      !inputPhoneModal.value ||
      !isValidatePhoneNumber(inputPhoneModal.value) ||
      !inputEmailModal.value ||
      !isEmailValid(inputEmailModal.value) ||
      !checkedValueModal
    ) {
      buttonFormModal.disabled = true;
    } else {
      buttonFormModal.disabled = false;
    }
  }

  function onInputTelModal() {
    if (!inputPhoneModal.value) {
      errorTelModal.style.opacity = "0";
    } else {
      if (isValidatePhoneNumber(inputPhoneModal.value)) {
        errorTelModal.style.opacity = "0";
      } else {
        errorTelModal.style.opacity = "1";
      }
    }
    checkDisabledFormModal();
  }

  function onInputNameModal() {
    if (!inputNameModal.value.trim()) {
      errorNameModal.style.opacity = "0";
    } else {
      if (isNameValid(inputNameModal.value)) {
        errorNameModal.style.opacity = "0";
      } else {
        errorNameModal.style.opacity = "1";
      }
    }
    checkDisabledFormModal();
  }

  function onInputEmailModal() {
    if (!inputEmailModal.value) {
      errorEmailModal.style.opacity = "0";
    } else {
      if (isEmailValid(inputEmailModal.value)) {
        errorEmailModal.style.opacity = "0";
      } else {
        errorEmailModal.style.opacity = "1";
      }
    }
    checkDisabledFormModal();
  }
}

//********* CREATE MODAL FORM***************//

const openModalButtons = document.querySelectorAll(".js_open_modal");
const modalContainer = document.querySelector(".modal");
const overlay = document.querySelector("#overlay_modal");

const getForm = `  

<div class="contacts__item">
<svg class="modal_close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
        d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
</svg>
<h6 class="contact_title">Provide your contacts</h6>
<p class="contact_text">
    and we will call you back to set up <br />
    a convenient time for measurement
</p>

<form action="./mail.php" method="post">
      <input type="text" name="name" class="name_form" id="name_modal" placeholder="Name" required>
      <p class="error error_name_modal">Name at least 3 characters</p>
      <input type="email" name="email" class="email_form" id="email_modal" placeholder="E-mail" required>
      <p class="error error_email_modal">Incorrect email</p>
      <input type="tel" name="phone" class="tel_form" id="tel_modal" placeholder="Phone +375331231212" required>
      <p class="error error_tel_modal">Incorrect phone</p>
      <div class="container_checkbox">
          <label class="label_checkbox">
              <input type="checkbox" name="checkbox" id="checkbox_modal" 
                  required>
              <span>I accept Privacy policy</span> <a href="./privacy_policy.html">Our Policy</a>
          </label>
      </div>
      <button type="button" onclick="window.location.href='./thanks.html'" id="btnForm_modal" class="btn btn_small btn_center">Order call</button>
  </form>
  </div>  
`;

openModalButtons.forEach((btn) =>
  btn.addEventListener("click", function (event) {
    if (!modalContainer) return;
    event.stopPropagation();
    modalContainer.classList.add("active_modal");
    overlay.classList.add("active_modal");
    modalContainer.insertAdjacentHTML("afterbegin", getForm);
    const closeModalButton = document.querySelector(".modal_close");
    closeModalButton.addEventListener("click", function (e) {
      event.stopPropagation();
      modalContainer.classList.remove("active_modal");
      overlay.classList.remove("active_modal");
      modalContainer.innerHTML = "";
    });
    modalFormActions();
  })
);
