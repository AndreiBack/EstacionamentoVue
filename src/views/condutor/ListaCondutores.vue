<template>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col" class="text-center align-middle">
            <input type="radio">
          </th>
          <th scope="col" class="text-center align-middle">Nome</th>
          <th scope="col" class="text-center align-middle">Cpf</th>
          <th scope="col" class="text-center align-middle">Telefone</th>
          <th scope="col" class="text-center align-middle"></th>
          <th scope="col" class="text-center align-middle"><button type="button" class="btn btn-custom">   <router-link to="/CondutorCadastro" class="nav-link">Cadastrar</router-link></button></th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <th scope="row" class="text-center align-middle">{{ item.id }}</th>
          <td class="text-center align-middle">{{ item.nome }}</td>
          <td class="text-center align-middle">{{ item.cpf }}</td>
          <td class="text-center align-middle">{{ item.telefone }}</td>
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
          { id: 1, nome: 'Andrei', cpf: '141.757.390-25', telefone: '(44) 2616-6481' },
          { id: 2, nome: 'Vanderlei', cpf: '064.678.825-63', telefone: '(35) 2033-6317' },
          { id: 3, nome: 'O Brabo', cpf: '587.753.180-83', telefone: '(67) 2838-6831' }
        ]
      };
    }
  };
  </script>
  
  <style>
  @import '../css/Listas.css';
  </style>
  
  
