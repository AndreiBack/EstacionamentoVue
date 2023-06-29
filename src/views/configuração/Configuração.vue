<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4 justify-content-center" v-for="field in fields" :key="field.id">
        <div class="form-group">
          <label :for="field.id">{{ field.label }}</label>
          <input :id="field.id" class="form-control" v-model="field.value" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="d-flex justify-content-center align-items-center">
        <button class="btn btn-custom" @click="cadastrar">{{ buttonText }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ConfiguracaoModel } from '@/model/ConfiguracaoModel';
import { ConfiguracaoClient } from '@/client/ConfiguracaoClient';


interface Field {
  id: string;
  label: string;
  value: string;
}

interface ComponentData {
  fields: Field[];
  buttonText: string;
}

export default {
  data(): ComponentData {
    return {
      fields: [
        { id: 'field1', label: 'Valor Hora', value: '' },
        { id: 'field2', label: 'Valor Multa Minuto', value: '' },
        { id: 'field3', label: 'Inicio Expediente', value: '' },
        { id: 'field4', label: 'Fim Expediente', value: '' },
        { id: 'field5', label: 'Tempo Para Desconto', value: '' },
        { id: 'field6', label: 'Tempo De Desconto', value: '' },
        { id: 'field7', label: 'Vagas carro', value: '' },
        { id: 'field8', label: 'Vagas moto', value: '' },
        { id: 'field9', label: 'Vagas van', value: '' },
      ],
      buttonText: 'Cadastrar',
    };
  },
  async mounted() {
    await this.loadConfiguration();
  },
  methods: {
    async loadConfiguration() {
      try {
        const configuracaoClient = new ConfiguracaoClient();
        const configuracao = await configuracaoClient.findById(1);

        this.fields[0].value = configuracao.valorHora ? configuracao.valorHora.toString() : '';
        this.fields[1].value = configuracao.valorMultaMinuto ? configuracao.valorMultaMinuto.toString() : '';
        this.fields[2].value = configuracao.inicioExpediente ? configuracao.inicioExpediente.toString() : '';
        this.fields[3].value = configuracao.fimExpediente ? configuracao.fimExpediente.toString() : '';
        this.fields[4].value = configuracao.tempoParaDesconto ? configuracao.tempoParaDesconto.toString() : '';
        this.fields[5].value = configuracao.tempoDeDesconto ? configuracao.tempoDeDesconto.toString() : '';
        this.fields[6].value = configuracao.vagasCarro ? configuracao.vagasCarro.toString() : '';
        this.fields[7].value = configuracao.vagasMoto ? configuracao.vagasMoto.toString() : '';
        this.fields[8].value = configuracao.vagasVan ? configuracao.vagasVan.toString() : '';
      } catch (error) {
        console.error('Failed to load configuration:', error);
      }
    },

    async cadastrar() {
      try {
        const configuracaoClient = new ConfiguracaoClient();
        const configuracao = new ConfiguracaoModel();

      configuracao.valorHora = parseFloat(this.fields[0].value);
      configuracao.valorMultaMinuto = parseFloat(this.fields[1].value);
      configuracao.inicioExpediente = new Date(this.fields[2].value);
      configuracao.fimExpediente = new Date(this.fields[3].value);
      configuracao.tempoParaDesconto = new Date(this.fields[4].value);
      configuracao.tempoDeDesconto = new Date(this.fields[5].value);
      configuracao.vagasCarro = parseInt(this.fields[6].value);
      configuracao.vagasMoto = parseInt(this.fields[7].value);
      configuracao.vagasVan = parseInt(this.fields[8].value);

        if (this.buttonText === 'Cadastrar') {
          await configuracaoClient.newConfiguracao(configuracao);
          this.buttonText = 'Editar';
        } else if (this.buttonText === 'Editar') {
          await configuracaoClient.upDate(1, configuracao);
        }
      } catch (error) {
        console.error('Failed to register/update configuration:', error);
      }
    },
  },
};
</script>
<style scoped>
@import '../css/Listas.css';

.form-group input {
  background-color: black;
  border-color: #400F3B;
  color: white;
}

.form-group input:focus {
  background-color: black;
  border-color: #863484;
}

.container {
  margin-top: 20px;
}

.form-group {
  background-color: black;
  border: 1px solid #400F3B;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
