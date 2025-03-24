<template>
  <section class="section">
    <div>
      <div class="columns is-centered">
        <div class="column is-6">
          <div>
            <h1 class="title has-text-centered">About the App</h1>

            <div class="content">

              <p>This application is for educational purpose.</p>

              <p class="has-text-centered is-size-4 has-text-weight-bold my-5">
                {{ creationDate }}
              </p>

              <div class="has-text-centered mt-5">
                <button @click="goToLogin" class="btn">
                  <span>Back</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import router from "@/router";
const creationDate = new Date();

function goToLogin() {
  router.push({ name: 'home' })
}
</script>
