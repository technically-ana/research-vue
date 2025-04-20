<template>
  <section class="section">
    <div class="parent">
      <div class="center">
        <div class="column is-6">
          <div>
            <h1 class="center">Application SecuReVue</h1>
            <div class="content">
              <div class="center">
                <p>This application was created on 7th of April, 2025. For educational purpose.</p>
              </div>
              <div class="center">
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

function goToLogin() {
  router.push({ name: 'home' })
}
</script>
