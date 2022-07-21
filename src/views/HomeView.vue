<template>
  <div class="home">
     <section id="landing">
    <div class="container">
      <div class="wel">Welcome to my</div>
      <div class="container-fluid">
        <div id="p" class="letter">p</div>
        <div id="o" class="letter">o</div>
        <div id="r" class="letter">r</div>
        <div id="t" class="letter">t</div>
        <div id="f" class="letter">f</div>
        <div id="o" class="letter">o</div>
        <div id="l" class="letter">l</div>
        <div id="i" class="letter">i</div>
        <div id="o" class="letter">o</div>
      </div>
    </div>
  </section>

  </div>
</template>

<script>

</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap");

#landing {
  background: url("../assets/EU7vHF0U8AA1OA4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: white;
}

h1 {
  font-family: "Caveat", cursive !important;
  font-size: 90px;
}

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Caveat", cursive !important;
}


:root {
  --green-dark: rgb(80, 120, 120);
  --green-light: rgb(220, 230, 230);
  --pink-dark: rgb(180, 100, 100);
  --pink-light: rgb(240, 210, 210);
}

.container {
  background: transparent;
  height: 100vh;
  font-family: "Caveat", cursive !important;
}

.wel {
  display: flex;
  justify-content: center;
  align-content: center;
  flex: column;
  height: 30vh;
  font-size: 3em;
  padding: 20px;
  color: var(--pink-light);
  animation: intro1 6s ease 4s 1;
  animation-iteration-count: infinite;
  /* animation-delay: 2s; */
  opacity: 0;
  font-family: "Caveat", cursive !important;
}
@keyframes intro1 {
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: column;
  font-size: 70px;
  font-family: "Caveat", cursive !important;
  height: 70vh;
  width: auto;
}

.letter {
  color: var(--pink-light);
  padding: 5px;
  margin-bottom: 20vh;
  font-family: "Caveat", cursive !important;
  opacity: 0;
}

#p {
  animation: gop 10s ease-out 2s 1;
  animation-iteration-count: infinite;
   animation-delay: 4s;
   font-family: "Caveat", cursive !important;
}
@keyframes gop {
  30% {
    opacity: 1;
    transform: translate(0px, -0px) rotate(0deg) scale(1) skew(0, 00deg);
  }
  100% {
    transform: translate(-100px, -400px) rotate(270deg) scale(3) skew(0, 30deg);
    opacity: 0;
  }
}

#o {
  animation: goo 10s ease-out 2s 1 ease-in 4s 1;
  animation-iteration-count: infinite;
   animation-delay: 4s;
   font-family: "Caveat", cursive !important;
}
@keyframes goo {
  30% {
    opacity: 1;
    transform: translate(0px, -0px) rotate(0deg) scale(1) skew(0, 00deg);
  }
  100% {
    transform: translate(-50px, -350px) rotate(270deg) scale(2) skew(0, 30deg);
    opacity: 0;
  }
}

#r {
  animation: gor 10s ease-out 2s 1;
  animation-iteration-count: infinite;
   animation-delay: 4s;
   font-family: "Caveat", cursive !important;
}
@keyframes gor {
  30% {
    opacity: 1;
    transform: translate(0px, -0px) rotate(0deg) scale(1) skew(0, 00deg);
  }
  100% {
    transform: translate(5px, -600px) rotate(180deg) scale(1.5) skew(0, 30deg);
    opacity: 0;
  }
}

#t {
  animation: got 10s ease-out 2s 1;
  animation-iteration-count: infinite;
   animation-delay: 4s;
   font-family: "Caveat", cursive !important;
}
@keyframes got {
  30% {
    opacity: 1;
    transform: translate(0px, -0px) rotate(0deg) scale(1) skew(0, 00deg);
  }
  100% {
    transform: translate(50px, -400px) rotate(90deg) scale(3) skew(0, 60deg);
    opacity: 0;
  }
}

#f {
  animation: gof 10s ease-out 3s 1;
  animation-iteration-count: infinite;
   animation-delay: 4s;
   font-family: "Caveat", cursive !important;
}
@keyframes gof {
  30% {
    opacity: 1;
    transform: translate(0px, -0px) rotate(0deg) scale(1) skew(0, 00deg);
  }
  100% {
    transform: translate(200px, -350px) rotate(180deg) scale(1.5) skew(0, 30deg);
    opacity: 0;
  }
}

/* the away */
#o {
  animation: goo 10s ease-out 4s 1;
  animation-iteration-count: infinite;
   animation-delay: 4s;
   font-family: "Caveat", cursive !important;
}
@keyframes goo {
  30% {
    opacity: 1;
    transform: translate(0px, -0px) rotate(0deg) scale(1) skew(0, 00deg);
  }
  100% {
    transform: translate(70px, -350px) rotate(180deg) scale(1) skew(0, 30deg);
    opacity: 0;
  }
}

#l {
  animation: gol 10s ease-out 2s 1;
  animation-iteration-count: infinite;
   animation-delay: 4s;
   font-family: "Caveat", cursive !important;
}
@keyframes gol {
  30% {
    opacity: 1;
    transform: translate(0px, -0px) rotate(0deg) scale(1) skew(0, 00deg);
  }
  100% {
    transform: translate(200px, -350px) rotate(180deg) scale(1.5) skew(0, 30deg);
    opacity: 0;
  }
}

#i {
  animation: goi 10s ease-out 2s 1;
  animation-iteration-count: infinite;
   animation-delay: 4s;
   font-family: "Caveat", cursive !important;
}
@keyframes goi {
  30% {
    opacity: 1;
    transform: translate(0px, -0px) rotate(0deg) scale(1) skew(0, 00deg);
  }
  100% {
    transform: translate(150px, -350px) rotate(180deg) scale(1.5) skew(0, 30deg);
    opacity: 0;
  }
}

#o {
  animation: goo 10s ease-out 4s 1;
  animation-iteration-count: infinite;
  animation-delay: 4s;
  font-family: "Caveat", cursive !important;
}
@keyframes goo {
  30% {
    opacity: 1;
    transform: translate(0px, -0px) rotate(0deg) scale(1) skew(0, 00deg);
  }
  100% {
    transform: translate(150px, -250px) rotate(360deg) scale(1) skew(0, 40deg);
    opacity: 0;
  }
}


</style>
