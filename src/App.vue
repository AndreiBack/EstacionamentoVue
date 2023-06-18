<template>
  <nav class="navbar" style="background-color: #5B1758;">
    <div class="container-fluid d-flex align-items-center">
       <div class="navbar-brand">
         <img src="./assets/LogoBraba.png" alt="Logo" class="logobraba ml-0"/>
       </div>
       <div class="navbar-links ms-auto">
         <router-link to="/EntradaLista" class="nav-link">Entradas</router-link>
         <router-link to="/MarcaLista" class="nav-link">Marcas</router-link>
         <router-link to="/ModeloLista" class="nav-link">Modelos</router-link>
         <router-link to="/VeiculoLista" class="nav-link">Veiculos</router-link>
         <router-link to="/CondutorLista" class="nav-link">Condutores</router-link>
       </div> 
       <div class="navbar-icons">
        <router-link to="/Configuracao" class="nav-link"><img src="./assets/Config.png" alt="Configurações" class="config"/></router-link>
       </div>
     </div>
   </nav>
   <router-view/>
   
</template>

<style lang="scss" >
@import "../node_modules/bootstrap/scss/bootstrap";
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.navbar {
  background-color: #5B1758;
  color: #fff;
}

.logobraba {
  width: 260px;
  height: 90px;
  margin-left: 0;
}

.navbar-links {
  display: flex;
  gap: 8vw;
}

.nav-link {
  font-family: 'Poppins', sans-serif;
  margin-right: 10px;
  font-weight: bold;
  color: #24081D;
  font-size: 20px;
}

.navbar-icons {
  margin-left: auto;
}

.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
body {
  background-color: black;
  color: white;
}
</style>
