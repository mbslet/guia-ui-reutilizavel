<template>
    <div class="topbar"></div>

    <div class="context">        
        <div>
          <Panel class="sub-text" header="Grids" >
            <div class="bar"></div>
            <br>
            Grids são estruturas que faz o alinhamento e proporção dos elementos de uma página, e dispõe de um sistema de 
            colunas, linhas e lacunas.
            <br>
            Os benefícios do uso de Grid no design podem ser listados como:
            <br>
            <br>
            <div class="list">
            <Listbox v-model="selectedCity" :options="list" optionLabel="name" />
            </div>
            <br>
            <br>
            É possível ver os alinhamentos dos elementos usando Grid na imagem abaixo:
            <br>
            <br>
            <div>
                <img class="grid-img" src="../assets/grid.png" alt="">
            </div>
            
          </Panel>
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
            <router-link class="topic" to="/regras"> Grid </router-link>
      </div>
  </div>
</template>


<script>
export default {
    data() {
          return {
		selectedCity: null,
		
        list: [
        {name: '◉ Maior Precisão'},
        {name: '◉ Mais flexibilidade para o desenvolvimento responsivo'},
        {name: '◉ Consistência da experiência do usuário em toda plataforma'},
            ],
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
  background: #FFFFFF;  
  
  } 

.grid-img{
    margin-left: 25vh;
    width: 350px;
    height: 120px;
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
    display: grid;
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
.text{
    padding: 10px;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    color: #575555;
}
.sub-text{
    overflow-y: scroll;
    width: 100%;
    height: 70vh;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    color: #575555;
    margin-left: -10vh;

}
.topbar{
  padding: 20px;
  width: 250vh;
  height: 10px;
  margin-top: -9.5vh;
  margin-left: -2vh;
  background-color: #FFFFFF;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.218);
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

.tipog{
  width: 500px;
  height: 20px;
  margin-left: 15vh;
}
</style>