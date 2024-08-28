import React, {useState} from "react";
import InputMask from 'react-input-mask';
import ComboBox from "../../../components/comboBox";
import TextInput from "../../../components/textInput";
import categorias from "../../../dto/descricaoAtividades";
import "./style.css"



function TelaCadastroProcessoMei() 
{
    // Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        nome: "",
        CPF: "",
        email: "",
        telefone: "",
        CEP: "",
        Nacionalidade: "",
        DataNascimento: "",
        Senha: "",
        nomeEmpresa: "",
        Categoria: "",
        DescricaoAtividade: "",
        DocIndentidade: null,
        DocEndereco: null,
        DocRegularidade: null
      });
    
      // Função para lidar com a mudança nos campos do formulário
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleFileChange = (event) => {
        const { name } = event.target;
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
          const reader = new FileReader();
    
          reader.onloadend = () => {
            const blob = new Blob([reader.result], { type: 'application/pdf' });
            setFormData((prevData) => ({
              ...prevData,
              [name]: blob
            }));
          };
    
          reader.readAsArrayBuffer(file);
        } else {
          alert('Por favor, selecione um arquivo PDF.');
        }
      };
    
      // Função para lidar com o envio do formulário
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form data submitted:", formData);
        // Aqui você pode adicionar lógica para enviar os dados para um servidor, etc.
      };
    
      const atividades = categorias[formData.Categoria] || [];
    
      return (
        <div id="ViewProcess">
          <form onSubmit={handleSubmit}>
            <h1>Processo de Abertura MEI</h1>
            <TextInput
              id="nome"
              name="nome"
              placeholder="Digite seu nome completo"
              value={formData.nome}
              onChange={handleChange}
            />
            <InputMask
              className="textInput"
              id="CPF"
              name="CPF"
              placeholder="Digite seu CPF"
              mask="999.999.999-99"
              value={formData.CPF}
              onChange={handleChange}
            />
            <TextInput
              id="email"
              name="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="OneLine">
              <InputMask
                className="textInput"
                id="telefone"
                name="telefone"
                mask="(99) 99999-9999"
                placeholder="Digite seu Telefone"
                value={formData.telefone}
                onChange={handleChange}
              />
              <InputMask
                className="textInput"
                id="CEP"
                name="CEP"
                mask="99999-999"
                placeholder="Digite seu CEP"
                value={formData.CEP}
                onChange={handleChange}
              />
            </div>
            <div className="OneLine">
              <InputMask
                className="textInput"
                id="DataNascimento"
                name="DataNascimento"
                placeholder="Data de Nascimento"
                mask="99/99/9999"
                value={formData.DataNascimento}
                onChange={handleChange}
              />
              <ComboBox
                id="Nacionalidade"
                name="Nacionalidade"
                items={["Brasileiro", "Outro"]}
                titulo={"Qual sua Nacionalidade"}
                value={formData.Nacionalidade}
                onChange={handleChange}
              />
            </div>
            <div className="OneLine">
              <ComboBox
                id="Categoria"
                name="Categoria"
                items={["COMERCIO", "INDUSTRIA", "PRESTACAO_DE_SERVICO"]}
                titulo={"Escolha sua categoria"}
                value={formData.Categoria}
                onChange={handleChange}
              />
              <ComboBox
                id="DescricaoAtividade"
                name="DescricaoAtividade"
                items={atividades}
                titulo={"Escolha sua Atividade"}
                value={formData.DescricaoAtividade}
                onChange={handleChange}
              />
            </div>
            <TextInput
              id="Senha"
              name="Senha"
              placeholder="Digite sua senha"
              type='password'
              value={formData.Senha}
              onChange={handleChange}
            />
            <TextInput
              id="nomeEmpresa"
              name="nomeEmpresa"
              placeholder="Digite o nome da empresa"
              value={formData.nomeEmpresa}
              onChange={handleChange}
            />
            <h3 htmlFor="Docs">Anexar os Documentos Necessarios abaixo</h3>
            <TextInput
              id="DocIndentidade"
              name="DocIndentidade"
              type="file"
              placeholder="Anexo Documento Identidade"
              onChange={handleFileChange}
            />
            <TextInput
              id="DocEndereco"
              name="DocEndereco"
              type="file"
              placeholder="Anexo Comprovante de Residência"
              onChange={handleFileChange}
            />
            <TextInput
              id="DocRegularidade"
              name="DocRegularidade"
              type="file"
              placeholder="Anexo Documento de Regularidade Fiscal"
              onChange={handleFileChange}
            />
            <div className="buttonAling">
              <button type="submit"><span>Cadastrar</span></button>
            </div>
          </form>
        </div>
      );
    }
    
    export default TelaCadastroProcessoMei;