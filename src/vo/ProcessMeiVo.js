import React from "react";


class ProcessMeiVo {
    constructor({
      categoria = "",
      atividade = "",
      nomeEmitente = "",
      nomeEmpresa = "",
      cpf = "",
      status = "",
      dataEmissao = ""
    } = {}) {
      this.categoria = categoria;
      this.atividade = atividade;
      this.nomeEmitente = nomeEmitente;
      this.nomeEmpresa = nomeEmpresa;
      this.cpf = cpf;
      this.status = status;
      this.dataEmissao = dataEmissao;
    }
}

export default ProcessMeiVo;