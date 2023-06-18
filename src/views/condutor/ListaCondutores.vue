<template>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col" class="text-center align-middle">Nome</th>
          <th scope="col" class="text-center align-middle">Cpf</th>
          <th scope="col" class="text-center align-middle">Telefone</th>
          <th scope="col" class="text-center align-middle"></th>
          <th scope="col" class="text-center align-middle"><button type="button" class="btn btn-custom">   <router-link to="/CondutorCadastro" class="nav-link">Cadastrar</router-link></button></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" class="text-center align-middle">1</th>
          <td class="text-center align-middle">Andrei</td>
          <td class="text-center align-middle">141.757.390-25</td>
          <td class="text-center align-middle">(44) 2616-6481</td>
          <td class="text-center align-middle"><button type="button" class="btn btn-custom">Finalizar</button></td>
        </tr>
        <tr>
          <th scope="row" class="text-center align-middle">2</th>
          <td class="text-center align-middle">Vanderlei</td>
          <td class="text-center align-middle">064.678.825-63</td>
          <td class="text-center align-middle">(35) 2033-6317</td>
          <td class="text-center align-middle"><button type="button" class="btn btn-custom">Finalizar</button></td>
        </tr>
        <tr>
          <th scope="row" class="text-center align-middle">3</th>
          <td class="text-center align-middle">O Brabo</td>
          <td class="text-center align-middle">587.753.180-83</td>
          <td class="text-center align-middle">(67) 2838-6831</td>
          <td class="text-center align-middle"><button type="button" class="btn btn-custom">Finalizar</button></td>
          <router-view/>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script lang="ts">  
  
  
  </script>
  
  <style>
  
  @import '../css/Listas.css';
  
  </style>
  
  