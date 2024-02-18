<template>
  <div class="container-fluid mt-5" id="contact-us">
    <div class="text-center">
      <img src="../assets/Saddique.jpg" alt="" style="width: 70px; border-radius: 50px"/>
      <h1 class="heading-contact mt-3 mb-3">Front End Developer (Vue JS)</h1>
      <div class="d-flex justify-content-center">
        <div class="d-flex "> 
        <div class="input-group flex-nowrap">
        <span class="input-group-text" id="addon-wrapping"><i class="fas fa-user"></i></span>
        <input
          type="text"
          class="form-control email-field"
          placeholder="Enter your email"
          aria-label="email"
          aria-describedby="addon-wrapping"
        />
      </div>
      <div>
        <button class="contact-btn">Contact</button>
      </div>
      </div>
      </div>
      
    
    </div>
  </div>
</template>

<style scoped>
.heading-contact {
  font-size: 32px;
  line-height: 48px;
  color: #ffffff;
}


.contact-btn{
    background-color: #007BC5;
    color: #fff;
    border-radius: 100px;
    margin-left: 20px;
    padding: 10px 20px;
}
.email-field
{
    width: 350px;
}


@media screen and (max-width:772px) {
    .email-field
{
    width: auto;
}
}

@media screen and (max-width:572px) {
    .heading-contact{
    font-size: 26px;
    line-height: 34px;
}
.contact-btn {
    margin-left: 5px;
}
}
</style>
