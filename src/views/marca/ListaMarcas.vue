<template>
  <div>
    <div class="cadastro-row">
      <input class="custom-input" type="text" v-model="newItem.marca" placeholder="Marca">
      <button type="button" class="btn btn-custom"  @click="cadastrarMarca" >Cadastrar</button>
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
            <button type="button" class="btn btn-none" @click="deletarMarca(index)">🗑️</button>
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

    const cadastrarMarca = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/marca', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            nome: newItem.value.marca
          })
        });

        if (response.ok) {
          console.log('Marca cadastrada com sucesso');
          resetForm();
          listarItems();
        } else {
          const errorMessage = await response.text();
          console.error(errorMessage);
        }
      } catch (error) {
        console.error('Erro ao cadastrar a marca:', error);
      }
    };


    const toggleEdicao = async (index: number) => {
  const marca = items.value[index];
  marca.editando = !marca.editando; 

  if (!marca.editando) { 
    try {
      const response = await fetch(`http://localhost:9000/api/marca/${marca.id}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({
          ativo: false
        })
      });

      if (response.ok) {
        console.log('Marca atualizada com sucesso');
        listarItems();
      } else {
        const errorMessage = await response.text();
        console.error(errorMessage);
      }
    } catch (error) {
      console.error('Erro ao atualizar a marca:', error);
    }
  }
};
const deletarMarca = async (index: number) => {
  const marca = items.value[index];

  try {
    const response = await fetch(`http://localhost:9000/api/marca/${marca.id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      console.log('Marca deletada com sucesso');
      listarItems();
    } else {
      const errorMessage = await response.text();
      console.error(errorMessage);
    }
  } catch (error) {
    console.error('Erro ao deletar a marca:', error);
  }
};
    const resetForm = () => {
      newItem.value.marca = '';
    };

    listarItems();

    return {
      items,
      newItem,
      toggleEdicao,
      cadastrarMarca,
      deletarMarca
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
