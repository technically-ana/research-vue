<script setup>

import DashboardView from "@/views/DashboardView.vue";
</script>

<template>
  <div class="section">
    <h2>Home.vue</h2>

    <DashboardView >
      <div v-if="user">
        <h3>User Profile</h3>
        <UserProfile :user="user" />
        <h3>My Chat Rooms</h3>
        <ChatList :uid="user.uid" />
      </div>
      <Login v-else />
    </DashboardView>
  </div>
</template>

<style scoped>

</style>