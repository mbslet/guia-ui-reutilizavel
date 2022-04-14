<template>
     <div class="c-card">
    <Card>
    <template #header>
        <div class="circulo"></div>
    </template>
    <template #title>
        <h2 class="title">Design Atômico</h2>
    </template>
    <template #content>
        <h3 class="subtitle"> Guia de reutilização</h3>
        <img class="da" src="../assets/da.png" >

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
  name: "ComponentsCard",
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

.c-card {
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
.da{
  width: 30vh;
  height: 15vh;
}
.circulo {
width: 30px;
height: 30px;
border-radius: 50%;
background-color: #500B0B;
}
</style>