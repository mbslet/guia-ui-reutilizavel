<template>
    <div class="topbar"></div>

    <div class="context">        
        <div>
          <Panel class="sub-text" header="Paleta de Cores" >
            <div class="bar"></div>
            <br>
            A paleta de cores deve seguir a identidade visual da empresa, caso tiver. <br>
            Além disso, é importante também propor variações de acordo com as aplicações.<br>
            Nesse tópico da leitura, iremos explicar sobre as distribuições de cores, e uma ténica dela. <br>
            <br>
            A distribuição abaixo, conhecida como 60-30-10, permitee unir cores de forma mais simples e ter um padrão reutilizável
            mudando apenas os elementos.
            <br>
            <br>
            <div  class="list">
            <Listbox v-model="selectedCity" :options="cities" optionLabel="name" />
            </div>
            <br>
            Nessa distribuição, 60% compreende a cor principal, 30% com a cor secundária, e 10% dedicada à cor de destaque.
            As cores secundárias são apoio para o seu layout, sõa tons mais neutros e que podem ser pré estabelecidos <br>
            na sua folha de estilo e assim reutilizando elementos bases da paleta em qualquer projeto. Pode-se ver alguns exemplos abaixo:
            <br>
            <br>
            <div class="c-example">
              <div class="circulo c1" data-hover="#292929"></div>
              <div class="circulo c2"></div>
              <div class="circulo c3"></div>
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
            <router-link class="topic" to="/regras"> Grids </router-link>
      </div>
  </div>
</template>


<script>
export default {
    data() {
          return {
		selectedCity: null,
		cities: [
			{name: '◉ Cor Principal'},
			{name: '◉ Cor Secundária'},
			{name: '◉ Cor de Destaque'},

		]
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

.c-example{
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin-left: 35vh;
}  

.c1{
  position: relative;
  background-color: #292929;
  text-align: center;
}
.c1:hover {
  text-align: center;
  font-size: 0;
}

.c1:hover:before {
  text-align: center;
  font-size: 15px;
  content: attr(data-hover);
  color: #FFFFFF;
  margin-top: 20px
}
.c2{
  background-color: #626C66;
}
.c3{
  background-color: #F3EDFC;
  border-style: solid;
  border-color: #292929;
}

.circulo {
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  
}

.list{
  margin-left: 0vh;
  font-size: 20px;
  color: #434A42;
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
    font-size: 25px;
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
  background-color: #626C66;
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