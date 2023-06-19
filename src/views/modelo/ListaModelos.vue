<template>
    <div>
      <div class="cadastro-row">
        <select class="custom-input" v-model="newItem.marca">
          <option value="">Selecione a Marca</option>
          <option v-for="marca in marcas" :value="marca" :key="marca">{{ marca }}</option>
        </select>
        <input class="custom-input" type="text" v-model="newItem.modelo" placeholder="Modelo">
        <button type="button" class="btn btn-custom" @click="cadastrarItem">Cadastrar</button>
      </div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col" class="text-center align-middle">id</th>
            <th scope="col" class="text-center align-middle">Marca</th>
            <th scope="col" class="text-center align-middle">Modelo</th>
            <th scope="col" class="text-center align-middle"></th>
            <th scope="col" class="text-center align-middle"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <th scope="row" class="text-center align-middle">{{ item.id }}</th>
            <td class="text-center align-middle" v-if="!item.editando">{{ item.marca }}</td>
            <td class="text-center align-middle" v-else>
              <select class="custom-input" v-model="item.marca">
                <option value="">Selecione a Marca</option>
                <option v-for="marca in marcas" :value="marca" :key="marca">{{ marca }}</option>
              </select>
            </td>
            <td class="text-center align-middle" v-if="!item.editando">{{ item.modelo }}</td>
            <td class="text-center align-middle" v-else>
              <input type="text" class="custom-input" v-model="item.modelo">
            </td>
            <td class="text-center align-middle">
              <button type="button" class="btn btn-custom" @click="editarItem(item)">
                {{ item.editando ? 'Salvar' : 'Editar' }}
              </button>
            </td>
            <td class="text-center align-middle">
              <button type="button" class="btn btn-custom">Opções</button>
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
          { id: 1, marca: 'Ford', modelo: 'Ranger', editando: false },
          { id: 2, marca: 'Wolkswagen', modelo: 'Gol', editando: false },
          { id: 3, marca: 'Omnitrix', modelo: 'Camaro', editando: false }
        ],
        newItem: {
          marca: '',
          modelo: ''
        },
        marcas: ['Ford 1', 'Wolkswagen 2', 'Omnitrix 3'] // Substitua pela sua própria lista de marcas
      };
    },
    methods: {
      cadastrarItem() {
        const newItem = {
          id: this.items.length + 1,
          marca: this.newItem.marca,
          modelo: this.newItem.modelo,
          editando: false
        };
        this.items.push(newItem);
        this.resetForm();
      },
      resetForm() {
        this.newItem.marca = '';
        this.newItem.modelo = '';
      },
      editarItem(item) {
        if (item.editando) {
          // Salvar as alterações
          // Aqui você pode realizar alguma ação, como enviar as alterações para o servidor
        }
        item.editando = !item.editando;
      }
    }
  };
  </script>
  
  <style>
  @import '../css/Listas.css';
  
  .custom-input {
    width: 10vw;
    background-color: black;
    border: 2px solid #400F3B;
    color: white;
    margin-right: 1vw;
  }
  
  .cadastro-row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    justify-content: center;
  }
  
  .cadastro-row select {
    margin-right: 10px;
  }
  
  .cadastro-row input[type="text"] {
    margin-right: 10px;
  }
  
  .cadastro-row button {
    margin-left: 10px;
  }
  </style>
  