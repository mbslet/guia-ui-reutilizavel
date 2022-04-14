<template>
    <div class="topbar"></div>

    <div class="context">        
        <div>
          <Panel class="sub-text" header="Tipografia" >
            <div class="bar"></div>
            <br>
            A tipografia é muito importante para o seu design e guia de estilo. Uma vez definida no guia, pode ser reutilizada em qualquer projeto.
            <br>
            <h2>Hierárquia Tipográfica</h2>
            É muito importante definir uma hierarquia tipográfica, o que é muito comum no
            meio do design de interfaces gráficas, sendo ela baseada em seu tamanho, e começando do
            maior para o menor, assim como as heading tags do HTML, H1, H2, H3, e assim por diante.
            
            <br>
            <br>
            <div class="list-h1">
            <Listbox v-model="selectedCity" :options="h1" optionLabel="name" />
            </div>
            <br>
            <div class="list-h2">
            <Listbox v-model="selectedCity" :options="h2" optionLabel="name" />
            </div>
            <br>
            <div class="list-h3">
            <Listbox v-model="selectedCity" :options="h3" optionLabel="name" />
            </div>
            <br>
            <div class="list-h4">
            <Listbox v-model="selectedCity" :options="h4" optionLabel="name" />
            </div>
            <br>
            <h2>Fontes</h2>
            As fontes definidas são importantes para o design pois mantém uma coesão e legibilidade por parte do usuário
            que vai usufruir desse design. Precisa ser adaptável para o design e flexível para o texto, o que é importante para a reutilização.
            <br>
            <h2>Peso</h2>
            <br>
            O peso (weight) define a intensidade da espessura da letra na font utilizada, aplicando uma intensidade do negrito da letra.
            <br>
            <br>
             <div class="list-peso">
            <Listbox v-model="selectedCity" :options="peso" optionLabel="name" />
            </div>
            <br>
            A imagem abaixo exemplifica as intensidades descritas.
            <br>
            <br>
            <div>
              <img class="tipog" src="../assets/tipog.png" alt="">
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
		h1: [
			{name: '◉ Heading Tag - H1'}
		],
        h2: [
			{name: '◉ Heading Tag - H2'}
		],
        h3: [
			{name: '◉ Heading Tag - H3'}
		],
        h4: [
			{name: '◉ Heading Tag - H4'}
		],
    peso: [
			{name: '◉ Light: O valor numérico para a intensidade light é a partir de 300'},
      {name: '◉ Regular: O valor numérico para a intensidade regular é a partir de 400'},
      {name: '◉ Medium: O valor numérico para a intensidade medium é a partir de 500'},
      {name: '◉ Bold: O valor numérico para a intensidade bold é a partir de 700'},
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

.list-h1{
  margin-left: 0vh;
  font-size: 32px;
  color: #434A42;
}
.list-h2{
  margin-left: 0vh;
  font-size: 26px;
  color: #434A42;
}
.list-h3{
  margin-left: 0vh;
  font-size: 22px;
  color: #434A42;
}
.list-h4{
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
      display: grid;
        grid-template-columns: 100%;

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