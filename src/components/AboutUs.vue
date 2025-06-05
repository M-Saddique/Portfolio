<template>
  <div id="about-us" class="" style="padding-top: 31px; padding-bottom: 31px">
    <div class="row mt-5 main-container">
      <div class="col-12 col-md-12 col-lg-6">
        <div class="network p-3">
          <!-- <img class="network-img" src="../assets/about-us.png" alt="" /> -->
          <div class="pt-1 solution-main">
            <div
              class="skills-container"
              v-for="(skill, index) of skillSet"
              :key="index"
            >
              <div class="skill">
                <div class="skill-title">
                  <div>
                    <span>{{ skill.name }}</span>
                    <span
                      style="
                        background-color: #80808030;
                        border-radius: 50px;
                        padding: 5px;
                      "
                      class="px-4 ms-3"
                      >{{ skill.year }} years</span
                    >
                  </div>

                  <span>{{ skill.percentage }}</span>
                </div>
                <div class="progress-bar">
                  <div class="progress-fill vuejs" :class="skill.width"></div>
                </div>
              </div>
            </div>
            <!-- <ul>
            <li><h1 class="text-white network-text pt-3">Proficient in Vue.js framework, including Vue Router and Vuex for state management.</h1></li>
            <li><h1 class="text-white network-text pt-3">Solid understanding of HTML, CSS, and JavaScript, with a focus on modern ECMAScript standards.</h1></li>
            <li><h1 class="text-white network-text pt-3">Experience with component-based architecture and developing reusable Vue components.</h1></li>
            <li><h1 class="text-white network-text pt-3">Familiarity with state-of-the-art front-end technologies and tools such as webpack and Vue CLI.</h1></li>
            <li><h1 class="text-white network-text pt-3">Strong knowledge of RESTful API integration using Axios or Vue Resource.</h1></li>
            <li><h1 class="text-white network-text pt-3">Skilled in responsive web design and cross-browser compatibility.</h1></li>
            <li><h1 class="text-white network-text pt-3">Capable of writing clean, modular, and maintainable code, adhering to best practices and coding standards.</h1></li>
            <li><h1 class="text-white network-text pt-3">Experience with version control systems like Git and collaborative development workflows.</h1></li>
            </ul> -->

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
            <h1 class="text-white about-text pt-3">whoami</h1>
            <p class="text-white about-paragarph">
              Frondend developer with 4+ years of experience building scalable
              applications. <br />
              <span>
                Passionate about clean code, user experience, and emerging
                technologies.</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const skillSet = [
  { name: "Vue.js", percentage: "100%", year: "4", width: "Vue" },
  { name: "Nuxt.js", percentage: "92%", year: "4", width: "Nuxt" },
  {
    name: "TypeScript",
    percentage: "75%",
    year: "1",
    width: "TypeScript",
  },
  { name: "React", percentage: "80%", year: "2", width: "React" },
  {
    name: "Tailwind CSS",
    percentage: "90%",
    year: "4",
    width: "Tailwind",
  },
];
</script>
<style scoped>
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
  color: #a1a1a1 !important;
  font-weight: 400;
  line-height: 27px;
}
.about-paragarph span {
  color: #007bc5;
}
.about-text {
  font-size: 48px;
  line-height: 64px;
}
.skills-container {
  /* max-width: 600px; */
  margin: 0 auto;
}

.skill {
  margin-bottom: 1.5rem;
}

.skill-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.progress-bar {
  height: 10px;
  background-color: #1e293b;
  border-radius: 999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(to right, #007bc5, #007bc5);
  transition: width 1s ease-in-out;
}

/* Skill-specific widths */
.Vue {
  width: 100%;
}
.Tailwind {
  width: 95%;
}
.React {
  width: 80%;
}
.Nuxt {
  width: 83%;
}
.TypeScript {
  width: 75%;
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
  #about-us {
    padding: 10px;
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
