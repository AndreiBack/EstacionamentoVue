<template>
    <div class="container justify-content-center">
      <form>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="form-group">
              <label for="item1">Marca:</label>
              <select class="form-control custom-input" id="item1" v-model="item1">
                <option value="">Selecione uma marca:</option>
                <option value="carro">Ford</option>
                <option value="moto">Volkswagen</option>
                <option value="caminhao">Omnitrix</option>
              </select>
            </div>
          
             
          <div class="col-md-6">
            <div class="form-group">
              <label for="item1">Modelo:</label>
              <input type="text" class="form-control custom-input" id="item1" v-model="item1">
            </div>
          </div>
        <div class="row justify-content-center">
          <div class="col-md-5 mt-4">
            <button type="submit" class="btn btn-custom">Cadastrar</button>
        </div> 
    </div>
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
      };
    },
  };
  </script>
  