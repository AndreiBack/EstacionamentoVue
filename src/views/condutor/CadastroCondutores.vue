<template>
    <div class="container justify-content-center">
      <form>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="form-group">
              <label for="item1">Nome:</label>
              <input type="text" class="form-control custom-input" id="item1" v-model="item1">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="item2">CPF:</label>
              <input type="text" class="form-control custom-input" id="item2" v-model="item2">
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="form-group">
              <label for="item3">Telefone:</label>
              <input type="text" class="form-control custom-input" id="item3" v-model="item3">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
               
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-3 mt-4"> <!-- Adicione a classe "mt-4" para adicionar margem inferior -->
            <button type="submit" class="btn btn-custom">Cadastrar</button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <style scoped>
    @import '../css/Listas.css';

  .container {
    margin-top: 20px;
  }
  
  .custom-input {
    width: 10vw;
    background-color: black;
    border: 2px solid #400F3B;
    color: white;
    margin-right: 1vw;
  }
  
  </style>
  
  <script>
  export default {
    data() {
      return {
        item1: '',
        item2: '',
        item3: '',
        item4: ''
      };
    }
  };
  </script>
  