<template>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col" class="text-center align-middle">id</th>
          <th scope="col" class="text-center align-middle">Marca</th>
          <th scope="col" class="text-center align-middle">Modelo</th>
          <th scope="col" class="text-center align-middle"></th>
          <th scope="col" class="text-center align-middle">
            <button type="button" class="btn btn-custom">
              <router-link to="/ModeloCadastro" class="nav-link">Cadastrar</router-link>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <th scope="row" class="text-center align-middle">{{ item.id }}</th>
          <td class="text-center align-middle">{{ item.marca }}</td>
          <td class="text-center align-middle">{{ item.modelo }}</td>
          <td class="text-center align-middle"></td>
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
          { id: 1, marca: 'Ford', modelo: 'Ranger' },
          { id: 2, marca: 'Wolkswagen', modelo: 'Gol' },
          { id: 3, marca: 'Omnitrix', modelo: 'Camaro' }
        ]
      };
    }
  };
  </script>
  
  <style>
  @import '../css/Listas.css';
  </style>
  