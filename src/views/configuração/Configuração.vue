<template>
    <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="field in fields" :key="field.id">
          <div class="form-group">
            <label :for="field.id">{{ field.label }}</label>
            <input :id="field.id" class="form-control" v-model="field.value" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class=" d-flex justify-content-center">
        <button class="btn btn-custom" @click="updateSettings">Atualizar</button>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fields: [
          { id: 'field1', label: 'Valor Hora', value: '' },
          { id: 'field2', label: 'Valor Hora Multa', value: '' },
          { id: 'field3', label: 'Inicio Expediente', value: '' },
          { id: 'field4', label: 'Fim Expediente', value: '' },
          { id: 'field5', label: 'Tempo Para Desconto', value: '' },
          { id: 'field6', label: 'Tempo De Desconto', value: '' },
          { id: 'field7', label: 'Vagas carro', value: '' },
          { id: 'field8', label: 'Vagas moto', value: '' },
          { id: 'field9', label: 'Vagas van', value: '' },
        ],
      };
    },
    created() {
      this.loadSettings();
      window.addEventListener('beforeunload', this.saveSettings);
    },
    beforeUnmount() {
      window.removeEventListener('beforeunload', this.saveSettings);
    },
    methods: {
      updateSettings() {
        this.saveSettings();
      },
      saveSettings() {
        localStorage.setItem('configFields', JSON.stringify(this.fields));
      },
      loadSettings() {
        const storedFields = localStorage.getItem('configFields');
        if (storedFields) {
          this.fields = JSON.parse(storedFields);
        }
      },
    },
  };
  </script>
  
  <style scoped>
@import '../css/Listas.css';


.form-group input {
  background-color: black;
  border-color: #400F3B;
  color: white;
}
 
  .form-group input:focus {
  background-color: black;
  border-color: #863484;
 
}
  .container { 
    margin-top: 20px;
  }
  
  .form-group {
    background-color: black;
    border: 1px solid #400F3B;
    padding: 10px;
    margin-bottom: 10px;
  }
  

  </style>
  