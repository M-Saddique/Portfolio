<template>
  <div class="" id="Success-stories" style="padding-top: 10px">
    <div class="sucess-main-container">
      <div class="bg-conatiner">
        <div class="col-12 col-md-8 col-lg-6 p-5">
          <h1 class="text-white Technology-text pt-3 pb-3">
            GitHub Fetch Data
          </h1>
          <GitHub />
          <!-- <div class="row">
            <div class="col-6 p-3 sucess-main">
              <h4 class="heading-total">+98%</h4>
              <p class="para-total mb-0">Complete Projects</p>
            </div>
            <div class="col-6 p-3 sucess-main">
              <h4 class="heading-total">+2</h4>
              <p class="para-total mb-0">On Going Projects</p>
            </div>
          </div>
          <p class="sucess-paragarph pt-5">
            Our track record speaks for itself. We've had the privilege of
            partnering with a diverse range of clients, from startups to Fortune
            5 companies, helping them achieve their digital goals with our
            Vue.js development services. Explore our portfolio to see examples
            of our work and hear what our clients have to say about their
            experience working with us.
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import GitHub from "@/components/GitHub.vue";
</script>
<style scoped>
.bg-conatiner {
  background-image: url("../assets/risk-management.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.sucess-text {
  font-size: 43px;
  line-height: 57px;
}
.sucess-paragarph {
  font-size: 16px;
  line-height: 25px;
  color: #f0f0ff96 !important;
}

.heading-total {
  color: #007bc5;
  font-size: 32px;
  line-height: 40px;
}
.para-total {
  font-size: 15px;
  line-height: 26px;
  color: #a1a1aa;
}

.sucess-main {
  border: 1px solid #262626;
  border-left: 0;
}

@media screen and (max-width: 992px) {
  .sucess-main-container {
    width: 100%;
  }
}
</style>
