<template>
  <div>
    <div class="cadastro-row">
      <select class="custom-input" v-model="newItem.marca">
        <option value="">Selecione a Marca</option>
        <option v-for="marca in marcas" :value="marca" :key="marca">{{ marca }}</option>
      </select>
      <input class="custom-input" type="text" v-model="newItem.modelo" placeholder="Modelo">
      <button type="button" class="btn btn-custom" @click="cadastrarModelo">Cadastrar</button>
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
        <tr v-for="(item, index) in items" :key="item.id">
          <th scope="row" class="text-center align-middle">{{ item.id }}</th>
          <td class="text-center align-middle" v-if="!item.editando">{{ item.marcaId.nome }}</td>
          <td class="text-center align-middle" v-else>
            <select class="custom-input" v-model="item.marcaId.nome">
              <option value="">Selecione a Marca</option>
              <option v-for="marca in marcas" :value="marca" :key="marca">{{ marca }}</option>
            </select>
          </td>
          <td class="text-center align-middle" v-if="!item.editando">{{ item.modelo }}</td>
          <td class="text-center align-middle" v-else>
            <input type="text" class="custom-input" v-model="item.modelo">
          </td>
          <td class="text-center align-middle">
            <button type="button" class="btn btn-custom" @click="toggleEdicao(index)">
              {{ item.editando ? 'Salvar' : 'Editar' }}
            </button>
          </td>
          <td class="text-center align-middle">
            <button type="button" class="btn btn-custom" @click="deletarModelo(index)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { ModeloClient } from '@/client/ModeloClient';
import { ModeloModel } from '@/model/ModeloModel';

export default {
  setup() {
    const modeloClient = new ModeloClient();

    const items = ref<ModeloModel[]>([]);
    const marcas = ref<string[]>([]);
    const newItem = ref({
      marca: '',
      modelo: ''
    });

    const listarItems = async () => {
      try {
        items.value = await modeloClient.listar();
      } catch (error) {
        console.error('Error while fetching items:', error);
      }
    };

    const listarMarcas = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/marca/lista');
        if (response.ok) {
          marcas.value = await response.json();
        } else {
          const errorMessage = await response.text();
          console.error(errorMessage);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const cadastrarModelo = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/modelo', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            marcaId: { nome: newItem.value.marca },
            modelo: newItem.value.modelo
          })
        });

        if (response.ok) {
          console.log('Modelo cadastrado com sucesso');
          resetForm();
          listarItems();
        } else {
          const errorMessage = await response.text();
          console.error(errorMessage);
        }
      } catch (error) {
        console.error('Erro ao cadastrar o modelo:', error);
      }
    };

    const toggleEdicao = (index: number) => {
      const item = items.value[index];
      item.editando = !item.editando;
      if (!item.editando) {
        // Save changes
        salvarEdicao(item).catch(error => console.error('Error while saving changes:', error));
      }
    };

    const salvarEdicao = async (item: ModeloModel) => {
      try {
        const response = await fetch(`http://localhost:9000/api/modelo/${item.id}`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'PUT',
          body: JSON.stringify({
            marca: item.marcaId.nome,
            modelo: item.modelo
          })
        });

        if (response.ok) {
          console.log('Edição salva com sucesso');
          listarItems();
        } else {
          const errorMessage = await response.text();
          console.error(errorMessage);
        }
      } catch (error) {
        console.error('Erro ao salvar a edição:', error);
      }
    };

    const deletarModelo = async (index: number) => {
      const item = items.value[index];
      try {
        const response = await fetch(`http://localhost:9000/api/modelo/${item.id}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          console.log('Modelo excluído com sucesso');
          listarItems();
        } else {
          const errorMessage = await response.text();
          console.error(errorMessage);
        }
      } catch (error) {
        console.error('Erro ao excluir o modelo:', error);
      }
    };

    const resetForm = () => {
      newItem.value.marca = '';
      newItem.value.modelo = '';
    };

    onMounted(() => {
      listarItems().catch(error => console.error('Error in onMounted:', error));
      listarMarcas().catch(error => console.error('Error in onMounted:', error));
    });

    return {
      items,
      marcas,
      newItem,
      toggleEdicao,
      cadastrarModelo,
      deletarModelo
    };
  }
};
</script>


<style scoped>
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
