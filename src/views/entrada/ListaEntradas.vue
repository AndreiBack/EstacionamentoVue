<template>
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col" class="text-center align-middle">id</th>
        <th scope="col" class="text-center align-middle">Placa</th>
        <th scope="col" class="text-center align-middle">Condutor</th>
        <th scope="col" class="text-center align-middle">Hora de Entrada</th>
        <th scope="col" class="text-center align-middle">
          <button type="button" class="btn btn-custom">
            <router-link to="/EntradaCadastro" class="nav-link">Cadastrar</router-link>
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <th scope="row" class="text-center align-middle">{{ item.id }}</th>
        <td class="text-center align-middle">{{ item.placa }}</td>
        <td class="text-center align-middle">{{ item.condutor }}</td>
        <td class="text-center align-middle">{{ item.horaEntrada }}</td>
        <td class="text-center align-middle">
          <button type="button" class="btn btn-custom">Finalizar</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, placa: 'BRA2E19', condutor: 'Ben', horaEntrada: '10:10' },
        { id: 2, placa: 'URI9V58', condutor: 'Fred', horaEntrada: '19:30' },
        { id: 3, placa: 'IUE1R89', condutor: 'Cleitin', horaEntrada: '12:55' }
      ]
    };
  }
};
</script>

<style>
@import '../css/Listas.css';
</style>
