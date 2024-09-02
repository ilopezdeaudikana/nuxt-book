<template>
  <div class="contact">
    <div class="content">
      <form :submit=handleSubmit>
        <div>
          <input label="Email" name="email" placeholder="acme@whatever.com">
        </div>
        <div class="row">
          <textarea label="Message" name="message" />
        </div>
        <button type="submit" :style="{ backgroundColor: '#428bca' }">
          Submit
        </button>
      </form>
      <p v-if="status">{{ status }}</p>
    </div>
  </div>
</template>


<script setup lang="ts">
const status = ref('')

const handleSubmit = async ({ email, message }) => {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, message })
  })

  const data = await response.json()

  if (data.success) {
    status.value = 'Email sent successfully!'
  } else {
    status.value = 'Failed to send email. Please try again.'
  }
}
</script>
<style lang="scss" scoped>

.contact {
  width: 100%;
  margin: 30px 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  .content {
    width: 350px;
  }
}
</style>