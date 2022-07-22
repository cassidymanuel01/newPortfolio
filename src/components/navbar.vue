<template>
  <nav id="nav">
    <button
      class="btn fw-bold pb-3"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#staticBackdrop"
      aria-controls="staticBackdrop"
    >
    ︾</button>

    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="staticBackdrop"
      aria-labelledby="staticBackdropLabel"
    >
      <div class="offcanvas-header">
        <h1 class="offcanvas-title text-white" id="staticBackdropLabel">
          Portfolio
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div>
          <div class="row gap-2 d-flex justify-content-center">
            <p>
              <router-link to="/">Home</router-link>
            </p>
            <p>
              <router-link to="/about">About</router-link>
            </p>
            <p>
              <router-link to="/resume">Resume</router-link>
            </p>
            <p>
              <router-link to="/testimonials">Testimonials</router-link>
            </p>
            <p>
              <router-link to="/project">Projects</router-link>
            </p>
            <p>
              <router-link to="/contact">Contact</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap");

html {
  scroll-behavior: smooth;
}

.btn {
  color: white;
  background: lightcoral;
  border-radius: 50%;
  height: 30px;
  width: 60px;
  display: block;
  border-bottom-left-radius: 400px;
  border-bottom-right-radius: 400px;
  border-bottom: 10px;
  position: fixed;
  z-index: 1000000;
}

.btn:hover {
  color:white;
  background: lightcoral;
}

nav {
  display: flex !important;
  justify-items: center !important;
}

#nav {
  background: url("../assets/EU7vHF0U8AA1OA4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-family: "Open Sans", sans-serif;
  font-size: 25px;
  display: flex;
  justify-content: center !important;
  z-index: 1;
  top: 10%;
  padding-bottom: 50px;
}

#staticBackdrop {
  padding: 30px;
  background: url("../assets/EU7vHF0U8AA1OA4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-family: "Caveat", cursive;
  font-size: 25px;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

#nav a:hover {
  color: lightcoral;
}

#nav a.router-link-exact-active {
  color: lightcoral;
}
</style>
