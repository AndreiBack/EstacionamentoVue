<template>
    <div>
      <div class="cadastro-row">
        <input class="custom-input" type="text" v-model="newItem.marca" placeholder="Marca">
        <button type="button" class="btn btn-custom" @click="cadastrarItem">Cadastrar</button>
      </div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col" class="text-center align-middle">id</th>
            <th scope="col" class="text-center align-middle">Marca</th>
            <th scope="col" class="text-center align-middle"></th>
            <th scope="col" class="text-center align-middle"></th>
            <th scope="col" class="text-center align-middle"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <th scope="row" class="text-center align-middle">{{ item.id }}</th>
            <td class="text-center align-middle" v-if="!item.editando">{{ item.marca }}</td>
            <td class="text-center align-middle" v-else>
              <input class="custom-input" type="text" v-model="item.marca">
            </td>
            <td class="text-center align-middle">
              <button type="button" class="btn btn-custom" @click="editarItem(item)">
                {{ item.editando ? 'Salvar' : 'Editar' }}
              </button>
            </td>
            <td class="text-center align-middle"></td>
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
          { id: 1, marca: 'Ford', editando: false },
          { id: 2, marca: 'Wolkswagen', editando: false },
          { id: 3, marca: 'Omnitrix', editando: false }
        ],
        newItem: {
          marca: ''
        }
      };
    },
    methods: {
      cadastrarItem() {
        const newItem = {
          id: this.items.length + 1,
          marca: this.newItem.marca,
          editando: false
        };
        this.items.push(newItem);
        this.resetForm();
      },
      resetForm() {
        this.newItem.marca = '';
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
  