<template>
    <div class="container justify-content-center">
      <form>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="form-group">
                <select class="form-control custom-input" id="item1" v-model="item1">
                <option value="">Selecione um modelo:</option>
                <option value="carro">Gol</option>
                <option value="moto">Camaro</option>
                <option value="caminhao">Ranger</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
                <select class="form-control custom-input" id="item1" v-model="item1">
                <option value="">Selecione uma cor:</option>
                <option value="carro">VERMELHO</option>
                <option value="moto">PRETO</option>
                <option value="caminhao">AZUL</option>
                <option value="caminhao">CINZA</option>
                <option value="caminhao">BRANCO</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="form-group">
                <select class="form-control custom-input" id="item1" v-model="item1">
                <option value="">Selecione um tipo:</option>
                <option value="carro">Carro</option>
                <option value="moto">Moto</option>
                <option value="caminhao">Van</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
            <label for="item3">Placa:</label>
              <input type="text" class="form-control custom-input" id="item4" v-model="item4">
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
  