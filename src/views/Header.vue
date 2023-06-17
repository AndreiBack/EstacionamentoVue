<template>
    <nav class="navbar" style="background-color: #5B1758;">
      <div class="container">
        <div class="navbar-brand">
          <img src="../assets/LogoBraba.png" alt="Logo"  class="logobraba"/>
        </div>
        <div class="navbar-links">
          <router-link to="/Header" class="nav-link">Link 1</router-link>
          <router-link to="/" class="nav-link">Link 2</router-link>
          <router-link to="/" class="nav-link">Link 3</router-link>
          <router-link to="/" class="nav-link">Link 4</router-link>
          <router-link to="/" class="nav-link">Link 5</router-link>
        </div>
        <div class="navbar-icons">
            <img src="../assets/Config.png" alt="Configurações" />
        </div>
      </div>
    </nav>
  </template>
  
  <style >
 
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    color: #fff;
  }
  
  .logobraba {
    width: 260px;
    height: 90px;
    
  }
  
  .navbar-links {
    display: flex;
  }
  
  .nav-link {
    font-family: 'Poppins', sans-serif;
    margin-right: 10px;
    font-weight:bold;
    color: #24081D;
    
  }
  
  .navbar-icons {
    font-size: 20px;
  }
  </style>
  