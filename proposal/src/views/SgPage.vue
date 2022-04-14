<template>
    <div class="topbar"></div>

    <div class="context">
        Guia de Estilo
        <div class="bar">
        </div>
        <div class="text">
            Um guia de estilo serve como base 
            para o desenvolvimento  <br>e é uma coleção de princípios, 
            diretrizes e convenções reunidas em um <br>
            meio único para definir uma aparência e comportamento unificados para <br>
            produtos e serviços, muitos guias de estilo da web tendem <br>
            não fazer referência aos guias de estilo tradicional, provavelmente devido <br>
            para a grande diversidade de desenvolvedores da web. <br> Para um guia de estilo ser bem elaborado, deve conter informações sobre
            as cores escolhidas, tipografia definida, regras de escritas e elementos visuais como ícones e logo.
        </div>
       
    </div>
  <div class="layout-topbar">
      
      <div class="sg">
          <i class="mt">Guia de Estilo</i>
          <br>
          <br>
          <br>
            <router-link class="topic" to="/colors-pallet"> Paleta de Cores </router-link>
            <br>
            <br>
            <router-link class="topic" to="/tipography"> Tipografia </router-link>
            <br>
            <br>
            <router-link class="topic" to="/regras"> Grids </router-link>
      </div>
  </div>
</template>


<script>
export default {
    data() {
           return {
               data: {
                    items: [
                        { message: 'Foo' },
                        { message: 'Bar' }
                    ]
                }
        }
    },
  components: { },
  name: "StyleGuidePage",

}
</script>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

.body, html {
  position: relative;
  width: 1000px;
  height: 100%;
  
  } 

.layout-topbar {
    position: fixed;
    height: 50px;
    padding: 36em 3em 5em 2em;
    background-color: #4EBC86;
    color: #ffffff;
    z-index: 999;
    left: 0;
  }
  .p-link {
  font-size: 1rem;
  font-family: 'Titillium Web';
  border-radius: 3px;
}

.pi {
  font-size: 1rem;
}

.sg{
    margin-top: -65vh;
}
.mt{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-size: 35px;
    font-weight: 500;
}
.st{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-size: 25px;
    font-weight: 100;
    margin-top: 5vh;
    margin-left: 1vh;
}
.st-b{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-size: 25px;
    font-weight: 100;
    margin-top: 5vh;
    margin-left: 1vh;   
}
.context{
    position: fixed;
    height: 50px;
    padding: 1em 1em 1em 1em;
    color: #292929;
    z-index: 999;
    margin-top: 5vh;
    margin-left: 65vh;
    font-size: 45px;
    font-family: 'Roboto', sans-serif;

}
.bar{
    padding: 5px;
    width: 50vh;
    background-color: #455F58;
}
.text{
    padding: 10px;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    color: #575555;
}
.sub-text{
    width: 1000px;
    height: 1000px;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    color: #575555;

}
.topbar{
  padding: 20px;
  width: 250vh;
  height: 10px;
  margin-top: -9.5vh;
  margin-left: -2vh;
  background-color: #000;
}
.topic {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #FFFFFF;
  text-decoration: none;
}
.topic:hover{
  border-bottom: 2px solid #3498db;
}
</style>