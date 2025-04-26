<template>
  <div
    id="about-us"
    class="container-fluid"
    style="padding-top: 31px; padding-bottom: 31px"
  >
    <div class="row mt-5 main-container">
      <div class="col-12 col-md-12 col-lg-6">
        <div class="network ps-5">
          <!-- <img class="network-img" src="../assets/about-us.png" alt="" /> -->
          <div class="pt-1 solution-main">
            <ul>
            <li><h1 class="text-white network-text pt-3">Proficient in Vue.js framework, including Vue Router and Vuex for state management.</h1></li>
            <li><h1 class="text-white network-text pt-3">Solid understanding of HTML, CSS, and JavaScript, with a focus on modern ECMAScript standards.</h1></li>
            <li><h1 class="text-white network-text pt-3">Experience with component-based architecture and developing reusable Vue components.</h1></li>
            <li><h1 class="text-white network-text pt-3">Familiarity with state-of-the-art front-end technologies and tools such as webpack and Vue CLI.</h1></li>
            <li><h1 class="text-white network-text pt-3">Strong knowledge of RESTful API integration using Axios or Vue Resource.</h1></li>
            <li><h1 class="text-white network-text pt-3">Skilled in responsive web design and cross-browser compatibility.</h1></li>
            <li><h1 class="text-white network-text pt-3">Capable of writing clean, modular, and maintainable code, adhering to best practices and coding standards.</h1></li>
            <li><h1 class="text-white network-text pt-3">Experience with version control systems like Git and collaborative development workflows.</h1></li>
            </ul>

            <!-- <p class="text-white network-paragarph">
              Monitor and adapt granular access policies with logging &
              analytics that provide visibility across your network.
            </p>
            <button class="network-btn">Network Analytics</button> -->
          </div>
        </div>
      </div>
      <div class="col-12 col-md-12 mb-3 col-lg-6 m-auto mb-auto">
        <div>
          <div class="pt-1 about-us-main">
            <button class="about-btn">
              <span style="padding-right: 3px"
                ><img src="../assets/our-sol-icon.png" alt=""
              /></span>
              ABOUT US
            </button>
            <h1 class="text-white about-text pt-3">
             My Name is Saddique
            </h1>
            <p class="text-white about-paragarph">
              I'm a passionate Frontend Developer with 4 year plus experience in
              crafting dynamic and engaging user interfaces. I specialize in leveraging
              Vue.js to build scalable and performant single-page applications
              (SPAs) that deliver seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  width: 95%;
  margin: auto;
}
.about-us-main {
  margin: auto;
}
.network {
  border: 1px solid #ffffff1a;
  padding: 10px;
  margin: auto;
  border-radius: 20px;
}
.network-btn {
  background-color: #262626;
  border: 1px solid #484848;
  color: #d8d8d8;
  border-radius: 100px;
  padding: 5px 10px;
  font-size: 14px;
}
.network-paragarph {
  font-size: 16px;
  color: #a1a1aa !important;
  font-weight: 400;
  line-height: 25px;
}
.network-text {
  font-size: 17px;
  line-height: 25px;
}
.about-btn {
  background-color: #262626;
  border: 1px solid #484848;
  color: #d8d8d8;
  border-radius: 100px;
  padding: 5px 10px;
  font-size: 16px;
  font-variant: all-small-caps;
}
.about-paragarph {
  font-size: 18px;
  color: #dedede !important;
  font-weight: 400;
  line-height: 27px;
}
.about-text {
  font-size: 48px;
  line-height: 64px;
}

@media screen and (max-width: 1200px) {
  .network-img {
    width: 100%;
  }
  .network {
    padding-left: 1rem !important;
    padding-right: 1rem;
  }
}

@media screen and (max-width: 992px) {
  .main-container {
    flex-direction: column-reverse;
  }

  .about-paragarph {
    font-size: 16px;
    line-height: 21px;
  }
  .network-img {
    width: auto;
  }
}

@media screen and (max-width: 572px) {
  .network-img {
    width: 100%;
  }
  .about-text {
    font-size: 30px;
    line-height: 38px;
  }
}
</style>
