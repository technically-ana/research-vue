<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router';

</script>

<style>

html *
{
  font-family: "Courier 10 Pitch", sans-serif !important;
}
p {
  font-size: 14px;
  line-height: 22px;
  color: #6c7279;
}
h1 {
  font-size: 65px;
  color: #2d3033;
}
h2 {
  font-size: 40px;
  color: #2d3033;
}
h3 {
  font-size: 28px;
  color: #2d3033;
  font-weight: 300;
}
h4 {
  font-size: 22px;
  color: #2d3033;
  font-weight: 400;
}
h5 {
  font-size: 14px;
  color: #2d3033;
  font-weight: 700;
}
.btn {
  padding: 8px 16px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 4px;
  color: black;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-transform: uppercase;
}
.btn:hover, .btn:focus {
  background-color: black;
  color: white;
}
.btn-large {
  padding: 15px 40px;
}

a {
  color: #e84545;
}
a:hover, a:focus {
  text-decoration: none;
  -moz-transition: background-color, color, 0.3s;
  -o-transition: background-color, color, 0.3s;
  -webkit-transition: background-color, color, 0.3s;
  transition: background-color, color, 0.3s;
}
body {
  font-weight: 400;
  color: #fff;
}
ul, ol {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}
.section {
  padding: 50px 0;
}
.no-padding {
  padding: 0;
}
.no-gutter [class*=col-] {
  padding-right: 0;
  padding-left: 0;
}
.extra-padding {
  margin: 60px 0 0 100px;
}

.btn-container {
  padding: 8px;
}

.question-container {
  padding: 8px;
}

</style>