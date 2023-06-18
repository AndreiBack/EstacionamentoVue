<template>
  <table class="table table-dark">
    <thead>
      <tr>
        <th scope="col" class="text-center align-middle">id</th>
        <th scope="col" class="text-center align-middle">Modelo</th>
        <th scope="col" class="text-center align-middle">Ano</th>
        <th scope="col" class="text-center align-middle">Placa</th>
        <th scope="col" class="text-center align-middle">
          <button type="button" class="btn btn-custom">
            <router-link to="/VeiculoCadastro" class="nav-link">Cadastrar</router-link>
          </button>
        </th>
        <router-view/>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <th scope="row" class="text-center align-middle">{{ item.id }}</th>
        <td class="text-center align-middle">{{ item.modelo }}</td>
        <td class="text-center align-middle">{{ item.ano }}</td>
        <td class="text-center align-middle">{{ item.placa }}</td>
        <td class="text-center align-middle">
          <button type="button" class="btn btn-custom">Opções</button>
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
        { id: 1, modelo: 'Ranger', ano: '2020', placa: 'BRA2E19' },
        { id: 2, modelo: 'Gol', ano: '1990', placa: 'URI9V58' },
        { id: 3, modelo: 'Camaro', ano: '2010', placa: 'IUE1R89' }
      ]
    };
  }
};
</script>

<style>
@import '../css/Listas.css';
</style>
