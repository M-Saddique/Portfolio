<template>
  <div class="container-fluid mt-5" id="contact-us">
    <div class="text-center">
      <div>
        <img
          src="../assets/Saddique.jpg"
          alt=""
          style="width: 70px; border-radius: 50px"
        />
      </div>

      <h1 class="heading-contact mt-3 mb-3">Frontend Developer</h1>
      <!-- <form method="post" action="" name="contactform" id="">
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            <i class="fa-solid fa-envelope"></i
          ></span>
          <input
            v-model="email"
            name="email"
            type="email"
            class="form-control email-field"
            placeholder="Enter your email"
            aria-label="email"
            aria-describedby="addon-wrapping"
            pattern="/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/"
          />
        </div>
        <div style="margin: auto; width: 28%; text-align: left">
          <span v-if="errorEmail" class="error">{{ errorEmail }}</span>
        </div>
        <div class="input-group flex-nowrap mt-3 mb-3">
          <textarea
            v-model="message"
            name="message"
            type="text"
            style="border-radius: 8px; height: 100px"
            class="form-control email-field"
            placeholder="Enter your message"
            aria-label="email"
            aria-describedby="addon-wrapping"
            pattern="/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/"
          />
        </div>
        <div class="input-group flex-nowrap mt-3 mb-3">
          <input
            style="display: none"
            name="date"
            type="date"
            id="datePicker"
            :value="dateSelect"
          />
        </div>
        <div style="margin: auto; width: 28%; text-align: left">
          <span
            v-if="errorMessage"
            class="error"
            style="line-height: 14px; position: relative; top: -22px"
            >{{ errorMessage }}</span
          >
        </div>
      </form>

      <div v-if="!spinner">
        <button
          class="contact-btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click="contact()"
        >
          Submit
        </button>
      </div>

      <div v-if="spinner">
        <img src="../assets/spinner.gif" style="height: 48px" alt="" />
      </div> -->
    </div>
  </div>
  <Transition>
    <div
      v-if="modalShow"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ messageStatus }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              @click="close()"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { ref, computed, onMounted, watch } from "vue";
const email = ref("");
const message = ref("");
const messageStatus = ref("");
const errorMessage = ref(null);
const errorEmail = ref(null);
const modalShow = ref(false);
const spinner = ref(false);
const dateSelect = ref("2023-09-09");
let dateFiq = ref([1, 2, 3, 5, 6, 7, 8, 9]);

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwONUqGILoN1DsgEe0JfEmKlz5x5vVMykA6WNrjTUeyC44t8gVBoStiDSdR7Q18-aBd/exec";

const contact = (e) => {
  let form = document.forms["contactform"];
  console.log("form", form);
  if (email.value == "") {
    errorEmail.value = "Input Field Required";
    modalShow.value = false;
  } else if (message.value == "") {
    errorMessage.value = "Input Field Required";
  } else if (!email.value.includes("@")) {
    modalShow.value = false;
    errorEmail.value = "Email not correct";
  } else {
    submitData(form);
    spinner.value = true;
    errorMessage.value = null;
    errorEmail.value = null;
  }
};

watch(email, () => {
  if (email.value !== "" && email.value.includes("@")) {
    errorEmail.value = null;
  }
});

watch(message, () => {
  if (message.value !== "") {
    errorMessage.value = null;
  }
});

const submitData = (form) => {
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(
      (response) =>
        (messageStatus.value =
          "Thank you! your form is submitted successfully.")
    )
    .then(() => {
      message.value = "";
      email.value = "";
      spinner.value = false;
      modalShow.value = true;
      setTimeout(() => {
        modalShow.value = false;
      }, 3000);
    })
    .catch((error) => {
      spinner.value = false;
      modalShow.value = true;
      messageStatus.value = "Failed to submit data. Please try again!";
      setTimeout(() => {
        modalShow.value = false;
      }, 3000);
    });
};

const close = () => {
  modalShow.value = false;
};

const selectByDefaultDate = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (dateFiq.value.includes(month)) {
    var monthFiq = `0${month}`;
  } else {
    var monthFiq = $`{month}`;
  }

  if (dateFiq.value.includes(day)) {
    var dayFiq = `0${day}`;
  } else {
    var dayFiq = `${day}`;
  }

  dateSelect.value = `${year}` - `${monthFiq}` - `${dayFiq}`;
};

onMounted(() => {
  selectByDefaultDate();
});
</script>

<style scoped>
.modal-header {
  background: #007bc5;
  color: #fff;
}
.input-group {
  width: 29%;
  margin: auto;
  text-align: left;
}
.error {
  color: red;
  line-height: 43px;
}
.heading-contact {
  font-size: 32px;
  line-height: 48px;
  color: #ffffff;
}

.contact-btn {
  background-color: #007bc5;
  color: #fff;
  border-radius: 100px;
  padding: 8px 20px;
}
.input-group-text {
  border: 1px solid;
  background-color: #000;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  color: #fff;
}
.email-field {
  border: 1px solid;
  width: 350px;
  background-color: #000;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  color: #fff;
}
@media screen and (max-width: 992px) {
  .input-group {
    width: 60%;
  }
}
@media screen and (max-width: 772px) {
  .email-field {
    width: auto;
  }
  .input-group {
    width: 60%;
  }
}

@media screen and (max-width: 572px) {
  .heading-contact {
    font-size: 26px;
    line-height: 34px;
  }
  .contact-btn {
    margin-left: 5px;
  }
  .input-group {
    width: 82%;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>