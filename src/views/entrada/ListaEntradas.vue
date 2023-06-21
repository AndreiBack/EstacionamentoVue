<template>
  <div>
    <div class="cadastro-row dark">
      <select class="custom-input" v-model="newItem.placa">
        <option value="">Selecione a Placa</option>
        <option v-for="item in items" :value="item.placa" :key="item.id">{{ item.placa }}</option>
      </select>
      <select class="custom-input" v-model="newItem.condutor">
        <option value="">Selecione o Condutor</option>
        <option v-for="item in items" :value="item.condutor" :key="item.id">{{ item.condutor }}</option>
      </select>
      <input class="custom-input" type="text" v-model="newItem.horaEntrada" placeholder="Hora de Entrada">
      <button type="button" class="btn btn-custom" @click="cadastrarItem">Cadastrar</button>
    </div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col" class="text-center align-middle">id</th>
          <th scope="col" class="text-center align-middle">Placa</th>
          <th scope="col" class="text-center align-middle">Condutor</th>
          <th scope="col" class="text-center align-middle">Hora de Entrada</th>
          <th scope="col" class="text-center align-middle"> </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <th scope="row" class="text-center align-middle">{{ item.id }}</th>
          <td class="text-center align-middle">{{ item.placa }}</td>
          <td class="text-center align-middle">{{ item.condutor }}</td>
          <td class="text-center align-middle">{{ item.horaEntrada }}</td>
          <td class="text-center align-middle">
            <button type="button" class="btn btn-custom"><router-link to="/EntradaFinalizar" class="btn btn-custom">Finalizar</router-link></button>

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, placa: 'BRA2E19', condutor: 'Ben', horaEntrada: '10:10' },
        { id: 2, placa: 'URI9V58', condutor: 'Fred', horaEntrada: '19:30' },
        { id: 3, placa: 'IUE1R89', condutor: 'Cleitin', horaEntrada: '12:55' }
      ],
      newItem: {
        placa: '',
        condutor: '',
      }
    };
  },
  methods: {
    cadastrarItem() {
      const newItem = {
        id: this.items.length + 1,
        placa: this.newItem.placa,
        condutor: this.newItem.condutor,
        horaEntrada: this.newItem.horaEntrada
      };
      this.items.push(newItem);
      this.resetForm();
    },
    resetForm() {
      this.newItem.placa = '';
      this.newItem.condutor = '';
      this.newItem.horaEntrada = '';
    }
  }
};
</script>

<style scoped>
@import '../css/Listas.css';

.cadastro-row {
  display: flex;
  align-items: center;
  justify-content: center;
 
}

.cadastro-row input[type="text"] {
  margin-right: 10px;
}


</style>
