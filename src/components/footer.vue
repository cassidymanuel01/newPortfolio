<template>
  <div id="footer" class="d-flex justify-content-center align-content-center flex-column">
    <h1 class="pb-4 ">Copyright &copy; 2022</h1>
    <div class="row gap-2 d-flex justify-content-center align-content-center flex-row">
      <div class="col-md-2">
        <a href="https://www.instagram.com/cassidymanuel_59" target="_blank"
          ><i class="bi-brands bi-instagram"></i
        ></a>
      </div>
      <div class="col-md-2">
        <a href="https://www.facebook.com/cassidy.manuel.56" target="_blank"
          ><i class="bi-brands bi-facebook"></i
        ></a>
      </div>
      <div class="col-md-2">
        <a href="mailto:cassidymanuel.59@gmail.com" target="_blank"
          ><i class="bi-solid bi-envelope"></i
        ></a>
      </div>
      <div class="col-md-2">
        <a href="https://github.com/cassidymanuel01" target="_blank"
          ><i class="bi-brands bi-github"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
  padding: 30px;
  background: url("../assets/EU7vHF0U8AA1OA4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-family: "Caveat", cursive;
  font-size: 25px;
  color: white;
  height: 50vh;
}

 .bi-brands.bi-github{
    color: white;
      width: 70px !important;
    height: auto !important;
  }

  .bi-brands.bi-github:hover{
    color: lightcoral;
  }

  .bi-brands.bi-instagram{
    color: white;
      width: 70px !important;
    height: auto !important;
  }

  .bi-brands.bi-instagram:hover{
    color: lightcoral;
  }

  .bi-brands.bi-facebook{
    color: white;
      width: 70px !important;
    height: auto !important;
  }

  .bi-brands.bi-facebook:hover{
    color: lightcoral;
  }

  .bi-solid.bi-envelope{
      color: white;
      width: 70px !important;
    height: auto !important;
  }

.bi-solid.bi-envelope:hover{
    color: lightcoral;
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

</style>
