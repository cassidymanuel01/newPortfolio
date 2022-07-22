<template>
  <section
    class="vh-150 d-flex justify-content-center align-items-center flex-column pt-5 pb-5"
    id="contact"
  >
    <div
      class="container d-flex justify-content-center align-items-center flex-column"
    >
      <h1 class="mb-5 display-4 text-center pt-5">Get In Touch</h1>
      <form
        class="w-100"
        action="https://formspree.io/f/xayvroap"
        method="post"
      >
        <div class="row text-center">
          <div class="col-md-7">
            <div class="row my-2">
              <h2 class="pb-3 text-start">Get In Touch</h2>
              <div class="col-md-9">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name "
                  class="form-control"
                />
              </div>
            </div>
            <div class="row my-2">
              <div class="col-md-9">
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Your Email "
                  class="form-control"
                />
              </div>
            </div>
            <div class="row my-2">
              <div class="col-md-9">
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  class="form-control"
                />
              </div>
            </div>
            <div class="row my-2">
              <div class="col-md-9 mb-4 form-floating text-muted">
                <input name="message" class="form-control fw-bold"  type="textarea"/>
                <label name="message">Write A Message</label>
              </div>
            </div>
            <div class="row my-2">
              <div class="col-md-9">
                <input
                  type="submit"
                  value="Submit"
                  class="btn w-auto text-start text-center rounded-pill"
                />
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="row my-2">
              <h2>My Contact Details</h2>
              <p class="lead fw-bold">Email</p>
              <p class="lead fw-bold">cassidymanuel.59@gmail.com</p>
              <br />
              <br />
              <p class="lead fw-bold">Phone</p>
              <p class="lead fw-bold">+27638338384</p>
              <br />
              <br />
              <p class="lead fw-bold">Location</p>
              <p class="lead fw-bold">Cape Town, SA</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
#contact { 
  background: url("../assets/EU7vHF0U8AA1OA4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: white;
  font-family: 'Open Sans', sans-serif;
}

html{
    scroll-behavior: smooth;
}

h1{
      font-family: "Caveat", cursive !important;
      animation: shake linear 5s infinite;
      transform: scale(1.1);
}

@keyframes shake {
     0%{
        transform: rotateZ();
    }

    30%{
         transform: scale(1.5);
        transform: rotateZ(1.5deg);
    }
     60%{
         transform: scale(1.6);
        transform: rotateZ(-1.5deg);
    }
}

.btn{
    background-color: lightcoral;
    color: antiquewhite;
}

#contact p {
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
}

input {
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
}

label {
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
}

.container {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  flex: column !important;
}
</style>
