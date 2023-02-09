<template>
  <div class="resume">
    <section id="workandeducation" class="vh-150">
      <h1 class="d-flex justify-content-center pb-4 pt-5">My Resume</h1>
      <div class="container gap-2">
        <div  class="row pb-3 gap-2" v-for = "resume in resumes" :key="resume">
          <div class="col-md-12 gap-2">
            <div class="card border border-1 shadow-lg p-3">
              <h2
                class="display-6 d-flex justify-content-center pt-4 mt-2 pb-2">
                {{ resume.title }}
              </h2>
              <i class="bi-solid bi-calendar pb-3 pt-2 ps-3">
                {{ resume.date }}
                </i>
              <p class="ps-3 pe-3 lead"> • {{ resume.desciption }}
              </p>
            </div>
            </div>
        </div>
      </div>
    </section>
    <section
      id="skills"
      class="vh-150 d-flex justify-content-center align-items-center flex-column pb-5 pt-3"
    >
      <div class="container text-center mt-3 pb-5 pt-5">
        <div class="row text-center border-2 pb-5">
          <h1 class="text-center pb-3 pt-3">Technical Skills</h1>
          <div
            class="col-md-4 pb-4 border-2"
            data-aos="zoom-in"
            id="skills-container"
          >
           <h2><i class="display-1 fa-brands fa-html5"></i></h2>
          </div>

          <div class="col-md-4 pb-4" data-aos="zoom-in">
          <i class="display-1 fa-brands fa-css3-alt"></i>
          </div>

          <div class="col-md-4 pb-4" data-aos="zoom-in">
          <i class="display-1 fa-brands fa-bootstrap"></i>
          </div>

          <div class="col-md-4 pb-4" data-aos="zoom-in">
          <i class="display-1 fa-solid fa-database"></i>
          </div>

          <div class="col-md-4 pb-4" data-aos="zoom-in">
          <i class="display-1 fa-brands fa-js"></i>
          </div>

          <div class="col-md-4 pb-4" data-aos="zoom-in">
          <i class="display-1 fa-brands fa-wordpress"></i>
          </div>
        </div>

        <div class="row text-center border-2 border-light">
          <h1 class="text-center pe-4 display-4 pb-3 pt-3">Soft Skills</h1>
          <div class="col-md-4 pb-4">
            <h2 class="fw-bold">Communication</h2>
            
          </div>

          <div class="col-md-4 pb-4" data-aos="zoom-in">
            <h2 class="fw-bold">Problem Solving</h2>
            
          </div>

          <div class="col-md-4 pb-4" data-aos="zoom-in">
            <h2 class="fw-bold">Scheduling</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resumes: [
        {
          title: "Education",
          date: "     January 2016 - December 2021",
          desciption:
            "I attended Mondale High, my subjects were Pure Maths, Life Science, Accounting, History, English, Afrikaans and Life Orientation",
        },
        {
          date: "     September 2022 - January 2023",
          desciption:
            "I completed a 3 month SEO course with Grizzly New Marketing which covered all the SEO basics, WordPress, Divi and Google Analytics.",
        },
        {
          title: "Work Experience",
          date: "     March 2016 - present",
          desciption:
            "I have done voluntary work at Old Age Homes based in Cape Town, participated in environmental clean ups and I am regularly involved in activities at my church.",
        },
        {
          date: "     September 2022 - January 2023",
          desciption:
            "I worked with Grizzly New Marketing as an intern for 3 months.",
        }
      ],
    };
  },
};
</script>

<style scoped>



.resume {
  background: url("../assets/EU7vHF0U8AA1OA4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: white;
}

#workandeducation p {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.3em;
  color: white;
}

#workandeducation i {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2em;
  color: white;
}
.resumeBody{
    display: flex;

}


.card {
  display: flex;
  justify-content: center;
  border-radius: 20px;
  box-shadow: black;
  width: auto;
  height: auto;
  margin-bottom: 50px;
  margin-top: 50px;
  margin: 0;
  padding: 0;
  background: transparent;
  color: white;
  backdrop-filter: blur(10px);
  z-index: 1;
  animation: shake linear 5s infinite;
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

.card:hover{
      backdrop-filter: blur(10000px);
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

#skills h1 {
  font-family: 'Open Sans', sans-serif;
  font-size: 2em;
  color: white;
}

#skills h2 {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.3em;
  color: white;
}

#skills-container {
  border-color: lightcoral;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  font-family: 'Open Sans', sans-serif;
}

.progress-bar {
  background-color: lightcoral;
  color: white;
  font-family: 'Open Sans', sans-serif;
}

.progress {
  background: url("../assets/EU7vHF0U8AA1OA4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
</style>
