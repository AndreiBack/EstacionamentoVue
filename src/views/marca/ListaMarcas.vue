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
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <th scope="row" class="text-center align-middle">{{ item.id }}</th>
          <td class="text-center align-middle">
            <template v-if="item.editando">
              <input class="custom-input" type="text" v-model="item.nome">
            </template>
            <template v-else>
              {{ item.nome }}
            </template>
          </td>
          <td></td>
          <td class="text-center align-middle">
            <button type="button" class="btn btn-none" @click="toggleEdicao(index)">
              {{ item.editando ? '✅' : '📝' }}
            </button>
            <button type="button" class="btn btn-none">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { MarcaClient } from '@/client/MarcaClient';
import { MarcaModel } from '@/model/MarcaModel';

export default {
  setup() {
    const marcaClient = new MarcaClient();

    const items = ref<MarcaModel[]>([]);

    const newItem = ref({
      marca: ''
    });

    const listarItems = async () => {
      try {
        items.value = await marcaClient.listar();
      } catch (error) {
        console.error(error);
      }
    };

    const cadastrarItem = async () => {
      const { marca } = newItem.value;
      const newMarca = new MarcaModel();
      newMarca.nome = marca;
      try {
        await marcaClient.cadastrar(newMarca);
        await listarItems();
        resetForm();
      } catch (error) {
        console.error(error);
      }
    };

    const toggleEdicao = (index: number) => {
      items.value[index].editando = !items.value[index].editando;
    };

    const resetForm = () => {
      newItem.value.marca = '';
    };

    listarItems();

    return {
      items,
      newItem,
      cadastrarItem,
      toggleEdicao
    };
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

.cadastro-row input[type="text"] {
  margin-right: 10px;
}

.cadastro-row button {
  margin-left: 10px;
}
</style>
