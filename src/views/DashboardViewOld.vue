<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-6">
          <div class="padded-bot">
            <div class="padded with-outline">
              <h2>Users</h2>
                <div v-for="user in users"
                     :key="user"
                     class="question-container">
                  <h4>{{ user.name }}: <span v-if="statuses.find(st => st.userId === user.userId && st.status === 'finished') !== undefined" style="color:darkgreen"> ✔ </span>
                    <span v-else-if="statuses.find(st => st.userId === user.userId && st.status === 'not_finished') !== undefined" style="color:maroon"> ✘ </span>
                    <span style="color:grey" v-else > Undefined</span>
                  </h4>

                </div>
            </div>
          </div>

          <div v-for="user in users"
               :key="user">
            <h4>{{ user.name }}: Answers</h4>
              <div v-for="q in questions "
                   :key="q"
                   class="question-container">
                <p> {{q.text}}: <span v-if="responses.find(res => 
                res.userId === user.userId && 
                res.answers.find(ans => 
                ans.questionId === q.id) !== undefined)">{{ 
                    responses.find(res => res.userId === user.userId)
                        .answers.find(ans => ans.questionId === q.id).answer.answer_value

                  }}</span>
                  <span v-else>N/A</span>

                  </p>
              </div>
            <hr>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="has-text-centered mt-5 btn-container">
    <button @click="goBack" class="btn">
      <span>Exit</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'DashboardViewOld',
  data() {
    return {
      statuses: [
        {
          userId: 'u1',
          status: 'finished'
        },
        {
          userId: 'u2',
          status: 'finished'
        },
        {
          userId: 'u3',
          status: 'not_finished'
        },
        {
          userId: 'u4',
          status: 'finished'
        }
      ],
      users: [
        {
          userId: 'u1',
          name: 'User WithSurname1'
        },
        {
          userId: 'u2',
          name: 'User WithSurname2'
        },
        {
          userId: 'u3',
          name: 'User WithSurname3'
        },
        {
          userId: 'u4',
          name: 'User WithSurname4'
        },

      ],
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
        },
        {
          id: 'q6',
          text: 'question 6',
          type: 'text'
        }
      ],
      responses: [
        {
          userId: "u1",
          answers: [
            {
              questionId: 'q1',
              answer: { answer_value: 'A'}
            },
            {
              questionId: 'q2',
              answer:  { answer_value:['H', 'I'] }
            },
            {
              questionId: 'q4',
              answer:  { answer_value:'L' }
            },
            {
              questionId: 'q3',
              answer:  { answer_value:"texttextu1" }
            },
            {
              questionId: 'q5',
              answer:  { answer_value:['N', 'O'] }
            },
            {
              questionId: 'q6',
              answer:  { answer_value:"texttext!u1" }
            },
          ]
        },
        {
          userId: "u2",
          answers: [
            {
              questionId: 'q1',
              answer:  { answer_value:'B' }
            },
            {
              questionId: 'q2',
              answer:  { answer_value:['E', 'F', 'G'] }
            },
            {
              questionId: 'q4',
              answer:  { answer_value:'M' }
            },
            {
              questionId: 'q3',
              answer:  { answer_value:"texttextu2" }
            },
            {
              questionId: 'q5',
              answer:  { answer_value:['N', 'O', 'Something new'] }
            },
            {
              questionId: 'q6',
              answer:  { answer_value:"texttext!u2" }
            },
          ]
        },
        {
          userId: "u4",
          answers: [
            {
              questionId: 'q1',
              answer:  { answer_value:'A' }
            },
            {
              questionId: 'q2',
              answer:  { answer_value:['E', 'G', 'H', 'I'] }
            },
            {
              questionId: 'q4',
              answer:  { answer_value:'K' }
            },
            {
              questionId: 'q3',
              answer:  { answer_value:"texttextu4" }
            },
            {
              questionId: 'q5',
              answer:  { answer_value:['Something difficult', 'Is that empty?'] }
            },
            {
              questionId: 'q6',
              answer:  { answer_value:"texttext!u4" }
            },
          ]
        }
      ]
    }
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
}
</script>

<style>
.with-outline {
  outline: 2px solid whitesmoke;
}

.padded {
  padding: 24px;
}

.padded-bot {
  padding-bottom: 24px;
}

</style>
