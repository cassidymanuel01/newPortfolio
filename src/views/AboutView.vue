<template>
  <div class="about">
    <section id="about">
      <div class="container">
        <div class="row pb-5 ">
          <h1 class="fw-bold">
              Hi there! I'm Cassidy Manuel
            </h1>
        </div>
        <div class="row ">
          <div class="col-md-6">
            <img class="img-fluid" src="https://i.postimg.cc/5thBXCLk/Cassidy-1-jpg3.jpg"/>
          </div>
          <div class="col-md-6">
            <h2 class="fw-bold text-decoration-underline">Aspiring Web developer</h2>
            <p class="fw-bold">I am 19 years old and currently a student at Life Choices Coding Academy. I am respectful, dedicated and a team player. I always keep a positive mindset when I approach situations. I also always try to enjoy the little things in life. I have always been fascinated by coding ever since I realised that it was not as hard and bad as I thought it would be. I feel that coding is fun. Since then, I have developed an interest in coding</p>
            <p class="lead fw-bold">Birthday : 01-04-2003 </p>
                <p class="lead fw-bold">Phone : 063 833 8384</p>
                <p class="lead fw-bold">Email : cassidymanuel.59@gmail.com</p>
                <p class="lead fw-bold">Location : Cape Town</p>
                <p class="lead fw-bold">Language : English</p>
                <p class="lead fw-bold pb-2">Hobbies : Baking , Watching movies and Singing </p>
                <div class="row btn-group d-flex">
                    <div class="col">
                        <a href="https://github.com/cassidymanuel01" class="btn w-50">GitHub</a>
                    </div>
                    </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

.about{
  height: auto;
    background: url("../assets/EU7vHF0U8AA1OA4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: white;
  font-family: 'Open Sans', sans-serif;
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

#about{
  display: flex;
  justify-content: center;
  align-content: center;
  flex: column;
}

html{
    scroll-behavior: smooth;
}

.img-fluid{
  height: 100%;
    width: 100%;
    object-fit: cover;
    overflow-x: hidden;
    border-radius: 20px;
  transition: all 1s ease;
}

.img-fluid:hover{
  transform: translate(0px, -20px);
  transform: scale(1.05);

}

#about p {
      font-family: 'Open Sans', sans-serif;
      font-size: 1.3em;
}

.btn{
    background-color: lightcoral;
    color: antiquewhite;
    border: 0;

}

.btn:hover{
    background-color: antiquewhite;
    color: lightcoral;
    font-weight: 900;
    border: 0;
}

</style>
