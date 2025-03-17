<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-6">
          <div>
            <h1>User Survey</h1>
            <div style="color:red">Remove that!</div>
            <div style="color:black"> {{ responses }}</div>
            <div style="color:black"> {{ questions }}</div>
            <form @submit.prevent="submitSurvey">
              <div v-for="question in questions"
                   :key="question"
                   class="question-container">
                <h4>{{ question.text }}</h4>
                <div v-if="question.type === 'singleChoice'" >
                  <div v-for="opt in question.options"
                       :key="opt">
                    <label :for="opt" style="color:black">
                      <input type="radio"
                             :name="question.id"
                             v-model="responses[question.id]"
                             v-on:change="rememberResponseSingleChoice(question.id, opt)"
                             :value="opt">
                      {{ opt }}
                    </label>
                  </div>
                </div>

                <div v-else-if="question.type === 'multiChoice'">
                  <div v-for="ch in question.options"
                       :key="ch">
                    <div>
                      <label :for="ch" style="color:black">
                        <input type="checkbox"
                               :id="ch"
                               :name="responses[question.id]"
                               :value="ch"
                               v-on:click="rememberResponseMultiChoice(question.id, ch)">
                        {{ ch }}
                      </label>
                    </div>
                  </div>
                </div>
                <div v-else-if="question.type === 'textNumber'">
                  <input v-model="responses[question.id]"
                         placeholder="Your answer"
                  @keydown="isNumber($event)"/>
                </div>
                <div v-else>
                  <input v-model="responses[question.id]" placeholder="Your answer"/>
                </div>
              </div>
              <div class="has-text-centered mt-5 btn-container">
                <button type="submit" class="btn">Submit Survey</button>
              </div>
            </form>
            <div class="has-text-centered mt-5 btn-container">
              <button @click="goBack" class="btn">
                <span>Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { questionsRef } from "@/firebase";
import {useCollection} from "vuefire";

export default {
  name: 'SurveyView',
  data() {
    return {
      questions: useCollection(questionsRef),
      responses: {},

    }
  },
  firestore: {
    questions: questionsRef,
  },
  methods: {
    submitSurvey() {
      // Placeholder for Firebase submission
      console.log('Survey Responses:', this.responses);

      // Here you would typically send the responses to Firebase
      // For example:
      // this.sendToFirebase(this.responses);
    },
    isNumber: function(evt) {
      evt = (evt) ? evt : window.onkeydown();
      let charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    goBack() {
      this.$router.push('/');
    },
    rememberResponseSingleChoice(q, r) {
      this.responses[q] = r
    },
    rememberResponseMultiChoice(q, r) {
      if (this.responses[q] != null) {
        if (this.responses[q].includes(r)) {
          const index = this.responses[q].indexOf(r);
          if (index > -1) {
            this.responses[q].splice(index, 1);
          }
        } else {
          this.responses[q].push(r)
        }
      } else {
        this.responses[q] = [];
        this.responses[q].push(r);
        console.log(typeof (this.responses[q]));
      }
    },
  }
}
</script>
