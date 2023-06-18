<template>
    <div class="container justify-content-center">
      <form>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="form-group">
              <label for="item1">Veiculo:</label>
              <select class="form-control custom-input" id="item1" v-model="item1">
                <option value="">Selecione um veiculo</option>
                <option value="carro">Gol</option>
                <option value="moto">Camaro</option>
                <option value="caminhao">Ranger</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="item2">Condutor:</label>
              <select class="form-control custom-input" id="item2" v-model="item2">
                <option value="">Selecione um condutor</option>
                <option value="Andrei">Andrei</option>
                <option value="Ben">Ben</option>
                <option value="Vander">Vander</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="form-group">
                <label for="item3">Hora de Entrada:</label>
                 <input type="text" class="form-control custom-input" id="item3" v-model="item3" pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]" placeholder="HH:MM" required>
                 <small class="form-text text-muted">Formato: HH:MM</small>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
               
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-3 mt-4">
            <button type="submit" class="btn btn-primary">Cadastrar</button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <style scoped>
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
  