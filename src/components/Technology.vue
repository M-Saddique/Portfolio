<template>
  <div
    class="container-fluid"
    id="Technology"
    style="padding-top: 55px; padding-bottom: 55px"
  >
    <div class="row main-tec">
      <div class="col-12 col-md-6">
        <div class="pt-1 Technology-main">
          <h1 class="text-white Technology-text pt-3">Why Choose Vue.js?</h1>
          <p class="text-white Technology-paragarph">
            Ready to elevate your web presence with our Vue.js development services
          </p>
        </div>
        <div class="Predictive mt-5 mb-2 p-3">
          <img src="../assets/prdictive.png" alt="" />
          <h1 class="text-white Predictive-text pt-3">Versatility</h1>
          <p class="Predictive-paragarph">
            Whether you're building single-page applications (SPAs), progressive
            web apps (PWAs), or complex web interfaces, Vue.js offers the
            versatility to handle a wide range of project requirements and use
            cases.
          </p>
        </div>
        <div class="Predictive mb-2 p-3">
          <img src="../assets/system-alerting-tec.png" alt="" />
          <h1 class="text-white Predictive-text pt-3">
            Component-Based Architecture
          </h1>
          <p class="Predictive-paragarph">
            Vue.js follows a component-based architecture, enabling developers
            to build encapsulated, reusable components that can be easily
            composed to create complex UIs. This promotes code reusability,
            maintainability, and modularity, resulting in cleaner and more
            maintainable codebases.
          </p>
        </div>
        <div class="Predictive mb-2 p-3">
          <img src="../assets/tec-tools.png" alt="" />
          <h1 class="text-white Predictive-text pt-3">Ecosystem</h1>
          <p class="Predictive-paragarph">
            Vue.js has a thriving ecosystem of libraries, tools, and plugins
            that extend its functionality and streamline development workflows.
            Whether you need state management with Vuex, routing with Vue
            Router, or server-side rendering with Nuxt.js, there's a rich
            ecosystem of community-maintained solutions available to support
            your project needs.
          </p>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div style="text-align:center">
          <img class="code-pic" src="../assets/tech.jpeg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.Technology-text {
  font-size: 43px;
  line-height: 57px;
}
.Technology-paragarph {
  font-size: 16px;
  line-height: 25px;
  color: #f0f0ff96 !important;
}
.Predictive {
  border: 1px solid #262626;
  border-radius: 12px;
}
.Predictive-text {
  font-size: 18px;
  line-height: 30px;
}
.Predictive-paragarph {
  font-size: 14px;
  line-height: 23px;
  color: #f0f0ff96 !important;
}
.main-tec {
  width: 90%;
  margin: auto;
}


@media screen and (max-width: 772px) {
  .main-tec {
    flex-direction: column-reverse;
  }
}


@media screen and (max-width: 992px) {
  .code-pic {
    width:100%;
    margin-bottom: 40px;
  }
}


@media screen and (max-width: 572px) {
  .main-tec {
    width: 99%;
  }
  .Technology-text[data-v-c024c1e7] {
    font-size: 30px;
    line-height: 38px;
    padding-top: 0 !important;
  }
 
}
</style>
