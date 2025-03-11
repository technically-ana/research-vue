<template>
  <div class="survey-container">
    <h1 class="survey-title">User Survey</h1>

    <div style="color:black"> {{responses}}</div>
    <form @submit.prevent="submitSurvey" class="survey-form">
      <div v-for="question in questions"
           :key="question">
        <h4>{{question.text}}</h4>
        <div v-if="question.type === 'singleChoice'">
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
                {{ch}}
              </label>
            </div>
          </div>
        </div>
        <div v-else>

        </div>
      </div>

<!--      &lt;!&ndash; Multi-Choice Question &ndash;&gt;-->
<!--      <div class="survey-question">-->
<!--        <h3>{{ questions[1].text }}</h3>-->
<!--        <div class="checkbox-group">-->
<!--          <label-->
<!--              v-for="option in questions[1].options"-->
<!--              :key="option"-->
<!--              class="checkbox-label"-->
<!--          >-->
<!--            <input-->
<!--                type="checkbox"-->
<!--                :value="option"-->
<!--                v-model="responses[questions[1].id]"-->
<!--            />-->
<!--            {{ option }}-->
<!--          </label>-->
<!--        </div>-->
<!--      </div>-->

<!--      &lt;!&ndash; Text Reply Question &ndash;&gt;-->
<!--      <div class="survey-question">-->
<!--        <h3>{{ questions[2].text }}</h3>-->
<!--        <textarea-->
<!--            :name="questions[2].id"-->
<!--            v-model="responses[questions[2].id]"-->
<!--            rows="4"-->
<!--            class="text-input"-->
<!--            placeholder="Enter your response here"-->
<!--        ></textarea>-->
<!--      </div>-->
      <div class="has-text-centered mt-5">
        <button @click="goBack" class="btn">
                  <span class="icon">
                    <i class="fas fa-arrow-left"></i>
                  </span>
          <span>Back</span>
        </button>
      </div>

      <button type="submit" class="btn">Submit Survey</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SurveyView',
  data() {
    return {
      questions: [
        {
          id: 'q1',
          text: 'question 1',
          type: 'singleChoice',
          options: ['A', 'B', 'C', 'D']
        },
        {
          id: 'q2',
          text: 'question 2',
          type: 'multiChoice',
          options: ['E', 'F', 'G', 'H', 'I']
        },
        {
          id: 'q4',
          text: 'question 4',
          type: 'singleChoice',
          options: ['J', 'L', 'M', 'K']
        },
        {
          id: 'q3',
          text: 'question 3',
          type: 'text'
        },
        {
          id: 'q5',
          text: 'question 5',
          type: 'multiChoice',
          options: ['N', 'O', 'Something difficult', 'Something new', 'Is that empty?']
        }
      ],
      responses: {},

    }
  },
  methods: {
    submitSurvey() {
      // Placeholder for Firebase submission
      console.log('Survey Responses:', this.responses);

      // Here you would typically send the responses to Firebase
      // For example:
      // this.sendToFirebase(this.responses);
    },
    goBack() {
      this.$router.push('/');
    },
    rememberResponseSingleChoice(q, r) {
      this.responses[q] = r
    },
    rememberResponseMultiChoice(q, r) {
      // console.log('q and r: ' + q + " " + r)
      // console.log('l: ' + l)
      // console.log('this.responses[q]: ' + this.responses[q])
      if(this.responses[q] != null) {
        if (this.responses[q].includes(r)) {
          const index = this.responses[q].indexOf(r);
          if (index > -1) {
            this.responses[q].splice(index, 1);
          }
        }
        else {

          this.responses[q].push(r)
        }
      } else {
        this.responses[q] = [];
        this.responses[q].push(r);
        console.log(typeof (this.responses[q]));
      }

    }
  }
}
</script>
