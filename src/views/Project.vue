<template>
  <div class="project">
    <h1 class="mb-5 display-4 text-center">Projects</h1>
    <div v-for="(project, index) in projects" :key="project">
      <section
        id="projects"
        class=" d-flex justify-content-center align-items-center flex-column pb-5 pt-4"
      >
        <div class="container">
          <div class="project-container" data-aos="zoom-in">
            <div class="row d-flex justify-content-center">
              <div class="col-md-6">
                <img
                  data-bs-toggle="modal"
                  :data-bs-target="'#exampleModal'+index"
                  :src="project.imgURL"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Modal -->
      <div
        class="modal fade"
        :id="'exampleModal'+index"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog mw-100 p-5">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title" id="exampleModalLabel">
                {{ project.title }}
              </h1>
              <div class="container">
                <button
                  type="button text-white"
                  class="btn-close d-flex justify-content-end"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="row">
                  <div class="col-sm-6">
                    <img class="img-fluid" :src="project.imgURL" />
                  </div>
                  <div class="col-sm-6 text-start">
                    <p class="para lead fw-bold">
                      {{ project.desciption }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <a target="_blank" :href="project.live" class="btn">Live</a>
              <a target="_blank" :href="project.github" class="btn">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Rainbow",
          imgURL: "https://i.postimg.cc/PxjsLy36/newrainbow.png",
          desciption: "Checkout the cool Rainbow that I created.",
          github: "https://github.com/cassidymanuel01/rainbow.git",
          live: "https://jade-puffpuff-433e9a.netlify.app/"
        },
        {
          title: "Website",
          imgURL: "https://i.postimg.cc/14h4bLgS/website2.png",
          desciption: "I created this Website using Bootstrap.",
          github: "https://github.com/cassidymanuel01/exercise",
          live: "https://charming-axolotl-8f5fc5.netlify.app/"
        },
        {
          title: "Website",
          imgURL: "https://i.postimg.cc/Jz7BmC67/portfolio.png",
          desciption:
            "This is my very First Website that I created with very little knowledge of HTML and CSS.",
          github: "https://github.com/cassidymanuel01/navexample.git",
          live: "https://clever-taiyaki-29861b.netlify.app/"
        },
        {
          title: "Portfolio",
          imgURL: "https://i.postimg.cc/RhRVbNz7/form.png",
          desciption:
            "This a Mock Portfolio that I did using only HTML and CSS.",
          github: "https://github.com/cassidymanuel01/portfolio.git",
          live: "https://app.netlify.com/sites/jocular-longma-f0ecee"
        },
        {
          title: "Temperature Converter",
          imgURL: "https://i.postimg.cc/9F38c0kp/Screenshot-2022-07-21-145910.png",
          desciption:
            "This is a temperature converter I created with Javascript and CSS",
          github: "https://github.com/cassidymanuel01/temp_con",
          live: "https://stately-zabaione-e6def6.netlify.app/"
        },
        {
          title: "Blog",
          imgURL: "https://i.postimg.cc/QC5LxQCh/Screenshot-2022-07-21-101825.png",
          desciption:
            "This is a blog page that I created using CSS",
          github: "https://github.com/cassidymanuel01/blog",
          live: "https://polite-gumption-ab9152.netlify.app/"
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');



.project {
  background: url("../assets/EU7vHF0U8AA1OA4.jpg") !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  background-position: center !important;
  color: white !important;
}

.modal-content{
    background: url("../assets/EU7vHF0U8AA1OA4.jpg") !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  background-position: center !important;
  color: white !important;
}

.btn-close{
    color: white !important;
}

#projects h1 {
  font-family: 'Open Sans', sans-serif;
  font-size: 2em;
  color: lightcoral;
}

#exampleModalLabel {
    font-family: 'Open Sans', sans-serif;
  font-size: 2em;
  color: white;
   background: url("../assets/EU7vHF0U8AA1OA4.jpg") !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed !important;
  background-position: center !important;
  color: white !important;
}

.para {
    font-family: 'Open Sans', sans-serif;
  font-size: 1.2em;
  color: white;
}

.project-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
  overflow-x: hidden;
  font-family: 'Open Sans', sans-serif;
}

.project-container img {
  max-height: 100%;
  max-width: 100%;
  flex-grow: 1;
  object-fit: cover;
  overflow-x: hidden;
}

.btn {
  background-color: lightcoral;
  color: antiquewhite;
}
</style>
