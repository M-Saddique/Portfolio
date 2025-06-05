<template>
  <div class="card github-card p-3" v-if="user">
    <div class="d-flex align-items-center">
      <img :src="user.avatar_url" alt="Profile" class="github-avatar me-3" />
      <div>
        <div class="github-username">{{ user.name }}</div>
        <div class="text-muted">{{ user.location }}</div>
      </div>
    </div>

    <div class="mt-3 github-bio">🐱 {{ user.bio }}</div>

    <hr />

    <div class="github-stats d-flex justify-content-between">
      <div>
        <strong>{{ user.public_repos }}</strong
        ><br />
        Repositories
      </div>
      <div>
        <strong> {{ user.followers }} </strong><br />
        Followers
      </div>
      <div>
        <strong>{{ user.following }}</strong
        ><br />
        Following
      </div>
    </div>

    <a :href="user.html_url" target="_blank" class="btn btn-dark w-100 mt-3"
      >View Profile</a
    >
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const user = ref();

const getGitData = () => {
  fetch("https://api.github.com/users/M-Saddique").then(async (resp) => {
    user.value = await resp.json();
    
    console.log("resp", user.value);
  });
};

onMounted(() => {
  getGitData();
});
</script>
<style scoped>
.github-card {
  /* max-width: 400px; */
  background-color: #2c2f36;
  border: none;
  border-radius: 12px;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.github-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #444;
}

.github-username {
  font-size: 1.25rem;
  font-weight: 600;
}

.github-bio {
  font-size: 0.95rem;
  color: #cccccc;
}

.github-stats {
  font-size: 0.9rem;
  color: #bbbbbb;
}

.github-stats strong {
  color: #ffffff;
}

.btn-dark {
  background-color: #333 !important;
  border: none;
}

.btn-dark:hover {
  background-color: #444 !important;
}

hr {
  border-top: 1px solid #444;
}
</style>