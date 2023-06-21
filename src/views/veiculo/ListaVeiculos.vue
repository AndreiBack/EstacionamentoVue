<template>
  <div>
    <div class="cadastro-row">
      <select class="custom-input" v-model="newItem.modelo">
        <option value="">Selecione o Modelo</option>
        <option v-for="item in items" :value="item.modelo" :key="item.id">{{ item.modelo }}</option>
      </select>
      <input type="text" class="custom-input" v-model="newItem.ano" placeholder="Ano">
      <input type="text" class="custom-input" v-model="newItem.placa" placeholder="Placa">
      <button type="button" class="btn btn-custom" @click="cadastrarItem">Cadastrar</button>
    </div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col" class="text-center align-middle">id</th>
          <th scope="col" class="text-center align-middle">Modelo</th>
          <th scope="col" class="text-center align-middle">Ano</th>
          <th scope="col" class="text-center align-middle">Placa</th>
          <th scope="col" class="text-center align-middle"></th>
          <th scope="col" class="text-center align-middle"></th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <th scope="row" class="text-center align-middle">{{ item.id }}</th>
          <td class="text-center align-middle" v-if="!item.editando">{{ item.modelo }}</td>
          <td class="text-center align-middle" v-else>
            <input type="text" class="custom-input" v-model="item.modelo">
          </td>
          <td class="text-center align-middle" v-if="!item.editando">{{ item.ano }}</td>
          <td class="text-center align-middle" v-else>
            <input type="text" class="custom-input" v-model="item.ano">
          </td>
          <td class="text-center align-middle" v-if="!item.editando">{{ item.placa }}</td>
          <td class="text-center align-middle" v-else>
            <input type="text" class="custom-input" v-model="item.placa">
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
        { id: 1, modelo: 'Ranger', ano: '2020', placa: 'BRA2E19', editando: false },
        { id: 2, modelo: 'Gol', ano: '1990', placa: 'URI9V58', editando: false },
        { id: 3, modelo: 'Camaro', ano: '2010', placa: 'IUE1R89', editando: false }
      ],
      newItem: {
        modelo: '',
        ano: '',
        placa: ''
      }
    };
  },
  methods: {
    cadastrarItem() {
      const newItem = {
        id: this.items.length + 1,
        modelo: this.newItem.modelo,
        ano: this.newItem.ano,
        placa: this.newItem.placa,
        editando: false
      };
      this.items.push(newItem);
      this.resetForm();
    },
    resetForm() {
      this.newItem.modelo = '';
      this.newItem.ano = '';
      this.newItem.placa = '';
    },
    editarItem(item) {
      item.editando = !item.editando;
      if (!item.editando) {
        // Salvar as alterações
        // Aqui você pode realizar alguma ação, como enviar as alterações para o servidor
      }
    }
  }
};
</script>

<style scoped>
@import '../css/Listas.css';

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
