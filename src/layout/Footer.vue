<template>
  <div class="container-fluid mt-5 mb-5">
    <div class="main-nav text-center">
      <a href="https://github.com/M-Saddique" target="_blank">
        <i class="fa-brands fa-github icons"></i
      ></a>
      <a
        href="https://www.linkedin.com/in/m-saddique-0378251b7/"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin icons"></i
      ></a>
      <i @click="sendEmail" class="fa fa-envelope icons"></i>

      <!-- <i class="fa-brands fa-facebook icons"></i> -->
      <!-- <ul class="d-flex nav-list justify-content-between pt-1">
            <li class="listItem"><a class="listItem" href="#home">Home</a></li>
            <li class="listItem">
              <a class="listItem" href="#solution">Projects</a>
            </li>
            <li class="listItem">
              <a class="listItem" href="#about-us">About Us</a>
            </li>
            
            <li class="listItem">
              <a class="listItem" href="#Technology">Technology</a>
            </li>
            <li class="listItem">
              <a class="listItem" href="#Success-stories">Success stories</a>
            </li>
            <li class="listItem">
              <a class="listItem" href="#contact-us">Contact Us</a>
            </li>
          </ul> -->
    </div>
  </div>
</template>
<script setup>
const sendEmail = () => {
  window.location.href =
    "mailto:saddique681@gmail.com?subject=Contact%20from%20Portfolio";
};
</script>
 
  
  <style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300&display=swap");

.icons {
  color: #fff;
  font-size: 35px;
  margin: 0 10px;
  cursor: pointer;
}
.main-nav {
  padding: 10px 26px;
  background: black;
  width: 81%;
  margin: auto;
}
.listItem {
  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  font-weight: 300;
  text-decoration: none;
}

.listItem:hover {
  color: #007bc5;
  font-weight: 600;
}
.nav-list {
  list-style: none;
}

@media screen and (max-width: 772px) {
  .nav-list {
    flex-wrap: wrap;
  }
  .main-nav {
    padding: 10px 0px;
    background: black;
    width: 88%;
    margin: auto;
  }
}
@media screen and (max-width: 572px) {
  .nav-list {
    list-style: decimal;
    display: block !important;
    flex-wrap: wrap;
    padding: 11px;
  }
}
</style>