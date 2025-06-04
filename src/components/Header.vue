<template>
  <div class="container-fluid pt-5" id="home">
    <div class="row">
      <div class="col-12 col-md-12 col-xl-6 mt-5">
        <div class="mt-5 p-5 home-main-container">
          <span class="span-home">Dedicated to Customer Success →</span>
          <h1 class="text-white heading-text">
            Frontend Developer <br><span class="fs-6">(Vue, Nuxt, React)</span>
          </h1>
          <p class="heading-paragarph">
            Looking for a frontend developer who does more than just write code?
            <br />
            You're in the right place. <br />
            🔧 Deep expertise in frontend architecture & UI/UX <br />⚡
            Lightning-fast, SEO-friendly, and scalable builds <br />
            🤝 A collaborative mindset focused on your business goals <br />🧠
            Clean code, modern frameworks, and performance best practices
            <br />Let’s work together to build an intuitive, professional
            frontend that doesn’t just look good — it drives results.
          </p>
          <a href="#contact-us pt-5"
            ><button class="home-btn">Contact</button></a
          >
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-xl-6" style="padding: 0">
        <img class="img" src="../assets/home.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .bg-img{
      background-image: url(/src/assets/home.png);
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
} */
.heading-text {
  font-size: 72px;
}
.heading-paragarph {
  font-size: 18px;
  color: #a1a1a1;
  font-weight: 400;
  line-height: 27px;
}
.img {
  width: 100%;
  position: relative;
  left: 0;
  /* top: -80px; */
  height: 681px;
  object-fit: cover;
}
.home-btn {
  background-color: #007bc5;
  color: #fff;
  border-radius: 100px;
  padding: 5px 10px;
}
.span-home {
  color: #007bc5;
}

@media screen and (max-width: 1370px) {
  .home-main-container {
    padding: 1rem !important;
  }
  .heading-text {
    font-size: 43px;
  }
  .img {
    top: -10px;
    height: 492px;
  }
}
@media screen and (max-width: 1200px) {
  .img {
    display: none;
  }
}
@media screen and (max-width: 572px) {
  .heading-text {
    font-size: 30px;
    line-height: 38px;
  }
  #home {
    padding-top: 0 !important;
  }
}
</style>
