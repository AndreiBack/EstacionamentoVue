<template>
    <div>
      <div class="cadastro-row">
        <input class="custom-input" type="text" v-model="newItem.nome" placeholder="Nome">
        <input class="custom-input" type="text" v-model="newItem.cpf" placeholder="CPF">
        <input class="custom-input" type="text" v-model="newItem.telefone" placeholder="Telefone">
        <input class="custom-input" type="text" v-model="newItem.desconto" placeholder="Desconto acumulado">
        <input class="custom-input" type="text" v-model="newItem.tempoPago" placeholder="Tempo pago">
        <button type="button" class="btn btn-custom" @click="cadastrarItem">Cadastrar</button>
      </div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col" class="text-center align-middle">id</th>
            <th scope="col" class="text-center align-middle">Nome</th>
            <th scope="col" class="text-center align-middle">CPF</th>
            <th scope="col" class="text-center align-middle">Telefone</th>
            <th scope="col" class="text-center align-middle">Desconto Acumulado</th>
            <th scope="col" class="text-center align-middle">Tempo pago </th>
            <th scope="col" class="text-center align-middle"> </th>
            <th scope="col" class="text-center align-middle"> </th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <th scope="row" class="text-center align-middle">{{ item.id }}</th>
            <td class="text-center align-middle" v-if="!item.editando">{{ item.nome }}</td>
            <td class="text-center align-middle" v-else>
              <input class="custom-input" type="text" v-model="item.nome">
            </td>
            <td class="text-center align-middle" v-if="!item.editando">{{ item.cpf }}</td>
            <td class="text-center align-middle" v-else>
              <input class="custom-input" type="text" v-model="item.cpf">
            </td>
            <td class="text-center align-middle" v-if="!item.editando">{{ item.telefone }}</td>
            <td class="text-center align-middle" v-else>
              <input class="custom-input" type="text" v-model="item.telefone">
            </td>
            <td class="text-center align-middle" v-if="!item.editando">{{ item.desconto }}</td>
            <td class="text-center align-middle" v-else>
              <input class="custom-input" type="text" v-model="item.desconto">
            </td>
            <td class="text-center align-middle" v-if="!item.editando">{{ item.tempoPago }}</td>
            <td class="text-center align-middle" v-else>
              <input class="custom-input" type="text" v-model="item.tempoPago">
            </td>
            <td class="text-center align-middle">
              <button type="button" class="btn btn-custom" @click="editarItem(item)">
                {{ item.editando ? 'Salvar' : 'Editar' }}
              </button>
            </td>
            <td class="text-center align-middle">
              <button type="button" class="btn btn-custom">Excluir</button>
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
          { id: 1, nome: 'Andrei', cpf: '141.757.390-25', telefone: '(44) 2616-6481', tempoPago:'50:25', desconto:'05:00', editando: false },
          { id: 2, nome: 'Vanderlei', cpf: '064.678.825-63', telefone: '(35) 2033-6317', tempoPago:'20:00', desconto:'00:00', editando: false },
          { id: 3, nome: 'O Brabo', cpf: '587.753.180-83', telefone: '(67) 2838-6831', tempoPago:'120:50', desconto:'10:00', editando: false }
        ],
        newItem: {
          nome: '',
          cpf: '',
          telefone: '',
          tempoPago: '',
          desconto: '',
        }
      };
    },
    methods: {
      cadastrarItem() {
        const newItem = {
          id: this.items.length + 1,
          nome: this.newItem.nome,
          cpf: this.newItem.cpf,
          telefone: this.newItem.telefone,
          editando: false
        };
        this.items.push(newItem);
        this.resetForm();
      },
      resetForm() {
        this.newItem.nome = '';
        this.newItem.cpf = '';
        this.newItem.telefone = '';
      },
      editarItem(item) {
        if (item.editando) {
          item.editando = false;
          // Here you can add the logic to save the changes
        } else {
          item.editando = true;
        }
      }
    }
  };
  </script>
  
  <style>
  @import '../css/Listas.css';
  
  .cadastro-row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    justify-content: center;
  }
  
  .cadastro-row input[type="text"] {
    margin-right: 10px;
  }
  
  .cadastro-row button {
    margin-left: 10px;
  }
  </style>
  