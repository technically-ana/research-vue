<script setup>
import { User } from "firebase/auth";
import { defineProps} from 'vue';

defineProps({
  user: User,
});

</script>

<template v-slot:user="{ user }">

  <div>
    <slot name="user" :user="user"></slot>
  </div>

</template>
