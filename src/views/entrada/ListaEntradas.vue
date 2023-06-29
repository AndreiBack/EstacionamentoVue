<template>
  <div>
    <div class="cadastro-row dark">
      <select class="custom-input" v-model="newItem.veiculo">
        <option value="">Selecione o Veiculo</option>
        <option v-for="item in MovimentacaoList" :value="item.veiculo" :key="item.id">{{ item.veiculo }}</option>
      </select>
      <select class="custom-input" v-model="newItem.condutor">
        <option value="">Selecione o Condutor</option>
        <option v-for="item in MovimentacaoList" :value="item.condutor" :key="item.id">{{ item.condutor }}</option>
      </select>
      <input class="custom-input" type="text" v-model="newItem.entrada" placeholder="Hora de Entrada">
      <button type="button" class="btn btn-custom" @click="cadastrarItem">Cadastrar</button>
    </div>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col" class="text-center align-middle">id</th>
          <th scope="col" class="text-center align-middle">Placa</th>
          <th scope="col" class="text-center align-middle">Condutor</th>
          <th scope="col" class="text-center align-middle">Hora de Entrada</th>
          <th scope="col" class="text-center align-middle"> </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in MovimentacaoList" :key="item.id">
          <th scope="row" class="text-center align-middle">{{ item.id }}</th>
          <td class="text-center align-middle">{{ item.veiculo.placa }}</td>
          <td class="text-center align-middle">{{ item.condutor.nome }}</td>
          <td class="text-center align-middle">{{ item.entrada }}</td>
          <td class="text-center align-middle">
            <button type="button" class="btn btn-custom"><router-link to="/EntradaFinalizar" class="btn btn-custom">Finalizar</router-link></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { MovimentacaoClient } from '@/client/MovimentacaoClient';
import { MovimentacaoModel } from '@/model/MovimentacaoModel';

export default {
  setup() {
    const MovimentacaoList = ref<MovimentacaoModel[]>([]);
    const newItem = ref({
      veiculo: '',
      condutor: '',
      entrada: '',
    });

    const cadastrarItem = () => {
  const { veiculo, condutor, entrada } = newItem.value;

  // Convert the entrada string to a Date object
  const entradaDate = new Date(entrada);

  // Create a new instance of MovimentacaoModel
  const movimentacao = new MovimentacaoModel();
  movimentacao.veiculo.placa =  veiculo ;
  movimentacao.condutor.cpf =  condutor ; 
  movimentacao.entrada = entradaDate; 

  
  const movimentacaoClient = new MovimentacaoClient();
  movimentacaoClient.cadastrar(movimentacao)
    .then(() => {
      // Item saved successfully, do any additional logic here if needed
      console.log('Item saved successfully');
    })
    .catch((error: any) => {
      // Handle the error if saving fails
      console.error(error);
    });
};


    const findAll = () => {
      const client = new MovimentacaoClient();
      client.listar()
        .then((data: MovimentacaoModel[]) => {
          MovimentacaoList.value = data;
        })
        .catch((error: any) => {
          console.log(error);
        });
    };

    onMounted(findAll);

    return {
      MovimentacaoList,
      newItem,
      cadastrarItem,
    };
    
  },
};
</script>

<style scoped>
@import '../css/Listas.css';

.cadastro-row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cadastro-row input[type="text"] {
  margin-right: 10px;
}
</style>
