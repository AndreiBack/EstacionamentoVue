<template>
  <div>
    <div class="cadastro-row">
      <select class="custom-input" v-model="newItem.modelo">
  <option value="">Selecione o Modelo</option>
  <option v-for="item in modelos" :value="item.id" :key="item.id">{{ item }}</option>
</select>

      <input type="text" class="custom-input" v-model="newItem.ano" placeholder="Ano">
      <input type="text" class="custom-input" v-model="newItem.placa" placeholder="Placa">
      <select class="custom-input" v-model="newItem.cor">
        <option value="">Selecione a Cor</option>
        <option value="AZUL">Azul</option>
        <option value="PRETO">Preto</option>
        <option value="VERMELHO">Vermelho</option>
        <option value="BRANCO">Branco</option>
        <option value="CINZA">Cinza</option>
        <option value="AMARELO">Amarelo</option>
      </select>
      <select class="custom-input" v-model="newItem.tipo">
        <option value="">Selecione o Tipo</option>
        <option value="CARRO">Carro</option>
        <option value="MOTO">Moto</option>
        <option value="VAN">Van</option>
      </select>
      <button type="button" class="btn btn-custom" @click="cadastrarVeiculo">Cadastrar</button>
    </div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col" class="text-center align-middle">id</th>
          <th scope="col" class="text-center align-middle">Modelo</th>
          <th scope="col" class="text-center align-middle">Ano</th>
          <th scope="col" class="text-center align-middle">Placa</th>
          <th scope="col" class="text-center align-middle">Cor</th>
          <th scope="col" class="text-center align-middle">Tipo</th>
          <th scope="col" class="text-center align-middle"></th>
          <th scope="col" class="text-center align-middle"></th>
        </tr>
      </thead>
      <tbody>
  <tr v-for="(item, index) in items" :key="item.id">
    <th scope="row" class="text-center align-middle">{{ item.id }}</th>
    <td class="text-center align-middle" v-if="!item.editando">{{ item.modelo }}</td>
<td class="text-center align-middle" v-else>
  <select class="custom-input" v-model="item.modelo">
    <option v-for="modelo in modelos" :value="modelo.id" :key="modelo.id">{{ modelo }}</option>
  </select>
</td>

    <td class="text-center align-middle" v-if="!item.editando">{{ item.ano }}</td>
    <td class="text-center align-middle" v-else>
      <input type="text" class="custom-input" v-model="item.ano">
    </td>
    <td class="text-center align-middle" v-if="!item.editando">{{ item.placa }}</td>
    <td class="text-center align-middle" v-else>
      <input type="text" class="custom-input" v-model="item.placa">
    </td>
    <td class="text-center align-middle" v-if="!item.editando">{{ item.cor }}</td>
    <td class="text-center align-middle" v-else>
      <input type="text" class="custom-input" v-model="item.cor">
    </td>
    <td class="text-center align-middle" v-if="!item.editando">{{ item.tipo }}</td>
    <td class="text-center align-middle" v-else>
      <input type="text" class="custom-input" v-model="item.tipo">
    </td>
    <td class="text-center align-middle">
      <button type="button" class="btn btn-none" @click="toggleEdicao(index)">
        {{ item.editando ? '✅' : '📝' }}
      </button>
    </td>
    <td class="text-center align-middle">
      <button type="button" class="btn btn-none" @click="deletarVeiculo(index)">🗑️</button>
    </td>
  </tr>
</tbody>

    </table>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { VeiculoClient } from '@/client/VeiculoClient';
import { VeiculoModel } from '@/model/VeiculoModel';
import { ModeloClient } from '@/client/ModeloClient';
import { ModeloModel } from '@/model/ModeloModel';


export default {
  setup() {
    const veiculoClient = new VeiculoClient();

    const items = ref<VeiculoModel[]>([]);

     const modelos = ref<ModeloModel[]>([]);

    const newItem = ref({
      modelo: '',
      ano: '',
      placa: '',
      cor: '',
      tipo: ''
    });

    const listarItems = async () => {
  try {
    await listarModelos();
    items.value = await veiculoClient.listar();
  } catch (error) {
    console.error(error);
  }
};
const listarModelos = async () => {
  try {
    const modeloClient = new ModeloClient();
    modelos.value = await modeloClient.listar(); 
  } catch (error) {
    console.error('Error ao listar os modelos:', error);
  }
};


    const cadastrarVeiculo = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/veiculo', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            modelo: newItem.value.modelo,
            ano: newItem.value.ano,
            placa: newItem.value.placa,
            cor: newItem.value.cor,
            tipo: newItem.value.tipo
          })
        });

        if (response.ok) {
          console.log('Veiculo cadastrado com sucesso');
          resetForm();
          listarItems();
        } else {
          const errorMessage = await response.text();
          console.error(errorMessage);
        }
      } catch (error) {
        console.error('Erro ao cadastrar o Veiculo:', error);
      }
    };

    const toggleEdicao = async (index: number) => {
  const veiculo = items.value[index];
  veiculo.editando = !veiculo.editando;

  if (!veiculo.editando) {
    try {
      const response = await fetch(`http://localhost:9000/api/veiculo/${veiculo.id}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({
          modeloId: veiculo.modelo,  
          ano: veiculo.ano,
          placa: veiculo.placa,
          cor: veiculo.cor,
          tipo: veiculo.tipo
        })
      });

      if (response.ok) {
        console.log('Veiculo atualizado com sucesso');
        listarItems();
      } else {
        const errorMessage = await response.text();
        console.error(errorMessage);
      }
    } catch (error) {
      console.error('Erro ao atualizar o Veiculo:', error);
    }
  }
};

    const deletarVeiculo = async (index: number) => {
      const veiculo = items.value[index];

      try {
        const response = await fetch(`http://localhost:9000/api/veiculo/${veiculo.id}`, {
          method: 'DELETE'
        });

        if (response.ok) {
          console.log('Veiculo deletado com sucesso');
          listarItems();
        } else {
          const errorMessage = await response.text();
          console.error(errorMessage);
        }
      } catch (error) {
        console.error('Erro ao deletar o Veiculo:', error);
      }
    };

    const resetForm = () => {
      newItem.value.modelo = '';
      newItem.value.ano = '';
      newItem.value.placa = '';
      newItem.value.cor = '';
      newItem.value.tipo = '';
    };

    listarItems();

    return {
  items,
  modelos,
  newItem,
  toggleEdicao,
  cadastrarVeiculo,
  deletarVeiculo,
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
