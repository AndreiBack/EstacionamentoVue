<template>
  <div>
    <div class="cadastro-row">
      <input class="custom-input" type="text" v-model="newItem.nome" placeholder="Nome">
      <input class="custom-input" type="text"  v-model="newItem.cpf" placeholder="CPF">
      <input class="custom-input" type="text" v-model="newItem.telefone" placeholder="Telefone">
      <button type="button" class="btn btn-custom" @click="cadastrarCondutor">Cadastrar</button>
    </div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col" class="text-center align-middle">id</th>
          <th scope="col" class="text-center align-middle">Nome</th>
          <th scope="col" class="text-center align-middle">CPF</th>
          <th scope="col" class="text-center align-middle">Telefone</th>
          <th scope="col" class="text-center align-middle"></th>
          <th scope="col" class="text-center align-middle"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
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
          <td class="text-center align-middle">
            <button type="button" class="btn btn-none" @click="toggleEdicao(index)">
              {{ item.editando ? '✅' : '📝' }}
            </button>
          </td>
          <td class="text-center align-middle">
            <button type="button" class="btn btn-none" @click="deletarCondutor(index)">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { CondutorClient } from '@/client/CondutorClient';
import { CondutorModel } from '@/model/CondutorModel';

export default {
  setup() {
    const condutorClient = new CondutorClient();

    const items = ref<CondutorModel[]>([]);

    const newItem = ref({
      nome: '',
      cpf: '',
      telefone: ''
    });

    const listarItems = async () => {
      try {
        items.value = await condutorClient.listar();
      } catch (error) {
        console.error(error);
      }
    };

    const cadastrarCondutor = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/condutor', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(newItem.value)
        });

        if (response.ok) {
          console.log('Condutor cadastrado com sucesso');
          resetForm();
          listarItems();
        } else {
          const errorMessage = await response.text();
          console.error(errorMessage);
        }
      } catch (error) {
        console.error('Erro ao cadastrar o condutor:', error);
      }
    };

    const toggleEdicao = async (index: number) => {
      const condutor = items.value[index];
      condutor.editando = !condutor.editando;

      if (!condutor.editando) {
        try {
          const response = await fetch(`http://localhost:9000/api/condutor/${condutor.id}`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(condutor)
          });

          if (response.ok) {
            console.log('Condutor atualizado com sucesso');
            listarItems();
          } else {
            const errorMessage = await response.text();
            console.error(errorMessage);
          }
        } catch (error) {
          console.error('Erro ao atualizar o condutor:', error);
        }
      }
    };

    const deletarCondutor = async (index: number) => {
      const condutor = items.value[index];

      try {
        const response = await fetch(`http://localhost:9000/api/condutor/${condutor.id}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          console.log('Condutor deletado com sucesso');
          listarItems();
        } else {
          const errorMessage = await response.text();
          console.error(errorMessage);
        }
      } catch (error) {
        console.error('Erro ao deletar o condutor:', error);
      }
    };

    const resetForm = () => {
      newItem.value.nome = '';
      newItem.value.cpf = '';
      newItem.value.telefone = '';
    };

    listarItems();

    return {
      items,
      newItem,
      toggleEdicao,
      cadastrarCondutor,
      deletarCondutor
    };
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
