<template>
<div class="testimonials">
  <section class="vh-150" id="testimonials">
    <div class="row">
      <h1 class="mb-5 w-100 display-4 text-center text-white pt-5">
        Testimonials
      </h1>
    </div>
    <div >
        <div
          class="container d-flex" 
        ><div class="row">
            <div class="col-md-6" v-for="testimonial in testimonials"
          :key="testimonial">
            <div class="col-md-1 pb-3 resumeBody">
              <img class="testi-img" :src="testimonial.imgURL" />
            </div>
            <div class="col-md-11 pb-5 pt-5">
              <div class="card shadow-lg" id="testi-card">
                <p class="p-3 fw-bold">" {{ testimonial.desciption }} " <br /></p>
                <p class="fw-bold">
                  - {{ testimonial.name }} - {{ testimonial.occupation }}
                </p>
              </div>
            </div>
            </div>
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
      testimonials: [
        {
          imgURL: "https://i.postimg.cc/XNGBVHrg/Emile-4.jpg",
          desciption:
            " Cassidy is a light hearted, driven, and studious individual. In the time I've spent with her she has gone from zero to hero going from needing help all the Time to helping others, proud to see the progress, shes a great person to be around, a team player with a stellar attitude and can do spirit welcoming challenges to test herself. ",
          name: "Emile Van Wyk ",
          occupation: "Student",
        },
        {
          imgURL: "https://i.postimg.cc/nhHLQ0hg/Reagan1.jpg",
          desciption:
            "Cassidy is an intelligent, positive and multi-talented individual with an eye for design. She presents the highest quality work that's always pleasing to the eye.  Her joyous personality makes working with her a pleasant experience and I would highly recommend her to any workplace or project. ",
          name: "Reagan Carolussen",
          occupation: "Student",
        },
        {
          imgURL: "https://i.postimg.cc/7hnkHr06/Monique-3.jpg",
          desciption:
            "Cassidy is a very determied individual and a fast learner.",
          name: " Monique Dampies",
          occupation: "Student",
        },
        {
          imgURL: "https://i.postimg.cc/1XHkxc1V/Marshalino-2.jpg",
          desciption:
            "Cassidy always displays a presentable appearance with a welcoming smile. She has a kind and caring personality and is always willing to help others. Equiped with a determined mindset and work ethic she has grown into a young and exciting Jr Developer, ready for any challenge",
          name: "Marshalino Jankowski",
          occupation: "Student",
        },
        {
          imgURL: "https://i.postimg.cc/hPtwzmqM/joel2.jpg",
          desciption:
            "Cassidy has a pleasant personality and ability to work in a team environment. She is a confident learner who has shown great improvement in HTML and CSS. I do not hesitate to recommend her.",
          name: "Joel Mukanya ",
          occupation: "Coding Lecturer",
        },
        {
          imgURL: "https://i.postimg.cc/nzmYCt14/Joshe-Jade-1.jpg",
          desciption:
            "It has been a pleasure to have Cassidy as a colleague. She is optimistic and constantly tries her best in all her work tasks. She has consistently been a top performer due to her hard work and extra research. She has an eye for design as she produces sites that have great alignment and themes. She always makes sure her projects have optical functionality. She has great soft skills as she knows how to communicate effectively with others to  produce the best work possible. She will be great asset to any team she joins.",
          name: "Joshé Theys",
          occupation: "Student",
        },
      ],
    };
  },
};
</script>

<style scoped>



#testimonials {
  background: url("../assets/EU7vHF0U8AA1OA4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.container {
  background: url("../assets/EU7vHF0U8AA1OA4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: white;
}

#testimonials p {
  font-family: "Titillium Web", sans-serif;
  font-size: 1em;
  color: white;
}

.testi-img {
  width: 70px !important;
  aspect-ratio: 1 !important;
  height: auto !important;
  border-radius: 50% !important;
  display: flex;
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

#testi-card {
  display: flex;
  justify-content: center;
  border-radius: 20px;
  /* border-color: white !important; */
  width: auto;
  height: auto;
  border-top-left-radius: 0;
  margin-bottom: 50px;
  margin-top: 50px;
  margin: 0;
  padding: 0;
  background: url("../assets/EU7vHF0U8AA1OA4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  backdrop-filter: blur(10000px);
  z-index: 1;
  color: white;
  transition: 1s all ease-in-out;
}
#testi-card:hover{
      transform: scale(1.1);
      backdrop-filter: blur(10000px);
      background:none !important;
      color: black;
      animation: shake linear 5s infinite;
}

#testi-card:hover #testi-card p{
      color: white;
}

@keyframes shake {
     0%{
        transform: rotateZ();
    }

    30%{
         transform: scale(1.1);
        transform: rotateZ(.5deg);
    }
     60%{
         transform: scale(1.05);
        transform: rotateZ(-.5deg);
    }
}
</style>
