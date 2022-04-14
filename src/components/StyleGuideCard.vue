<template>
     <div class="sg-card">
    <Card>
    <template #header>
       <div class="circulo"></div>
    </template>
    <template #title>
        <h2 class="title">Paleta de Cores</h2>
    </template>
    <template #content>
        <h3 class="subtitle"> Guia de reutilização</h3>
        <img class="palet" src="../assets/paleta.png" alt="">

    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Save" />
        <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
    </template>

    </Card>
  </div>
</template>

<script>

export default {
  name: "StyleGuideCard",
  props: {
    title: String,
  },
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
.body, html {
    font-family: 'Roboto', sans-serif;

}

.sg-card {
  display: flex;
  border-radius: 20px;
  background-color: #EEF0F2;
  padding: 20px;
  height: 40vh;
  width: 30vh;  
}
.img{
    width: 30px;
    height: 30px;
}
.title{
    font-size: 20px;
    color: black;
    margin-top: -16vh;
    margin-left: 6vh;
}
.subtitle{
  font-size: 15px;
  font-weight: 300;
  margin-top: -10vh;
  margin-left: 6vh;
  color: black;
  margin-top: -12vh;

}
.palet{
  width: 30vh;
  height: 20vh;
}
.circulo {
width: 30px;
height: 30px;
border-radius: 50%;
background-color: #D16002;
}
</style>