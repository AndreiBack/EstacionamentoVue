<template>
    <div class="container d-flex " style="height: 100vh; background-color: black;">
      <div class="card text-white" style="background-color: #400F3B;">
        <div class="card-body">
          <h5 class="card-title">Nota Fiscal</h5>
          <div class="form-group">
            <label>Data e Hora:</label>
            <p>{{ DataHora }}</p>
          </div>
          <div class="form-group">
            <label>Entrada:</label>
            <p>{{ entrada }}</p>
          </div>
          <div class="form-group">
            <label>Saída:</label>
            <p>{{ saida }}</p>
          </div>
          <div class="form-group">
            <label>Condutor:</label>
            <p>{{ condutor }}</p>
          </div>
          <div class="form-group">
            <label>CPF:</label>
            <p>{{ cpf }}</p>
          </div>
          <div class="form-group">
            <label>Telefone:</label>
            <p>{{ telefone }}</p>
          </div>
          <div class="form-group">
            <label>Tempo Desconto Disponível:</label>
            <p>{{ TempoDesconto }}</p>
          </div>
          <div class="form-group">
            <label>Veículo:</label>
            <p>{{ veiculo }}</p>
          </div>
          <div class="form-group">
            <label>Modelo:</label>
            <p>{{ modelo }}</p>
          </div>
          <div class="form-group">
            <label>Cor:</label>
            <p>{{ cor }}</p>
          </div>
          <div class="form-group">
            <label>Quantidade de Horas:</label>
            <p>{{ horas }}</p>
          </div>
          <div class="form-group">
            <label>Quantidade de Horas com Desconto:</label>
            <p>{{ HorasDesconto }}</p>
          </div>
          <div class="form-group">
            <label>Valor a Pagar:</label>
            <p>{{ ValorPagar }}</p>
          </div>
          <div class="form-group">
            <label>Valor do Desconto:</label>
            <p>{{ ValorDesconto }}</p>
          </div>
          <div class="form-group">
            <label>Valor da Multa:</label>
            <p>{{ ValorMulta }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        DataHora: " ",
        entrada: " ",
        saida: " ",
        condutor: " ",
        cpf: " ",
        telefone: " ",
        TempoDesconto: " ",
        veiculo: " ",
        modelo: " ",
        cor: " ",
        horas: " ",
        HorasDesconto: " ",
        ValorPagar: " ",
        ValorDesconto: " ",
        ValorMulta: " "
      };
    }
  };
  </script>
  