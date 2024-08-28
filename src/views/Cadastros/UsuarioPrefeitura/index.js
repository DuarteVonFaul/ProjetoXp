import React, {useState} from "react";
import InputMask from 'react-input-mask';
import ComboBox from "../../../components/comboBox";
import TextInput from "../../../components/textInput";
import "./style.css"



function TelaCadastroFuncionario() 
{
    // Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        name: "",
        CPF:"",
        email: "",
        telefone: "",
        CEP: "",
        Nacionalidade: "",
        DataNascimento: "",
        Senha: "",
        NivelAcesso:""

    });
    
    // Função para lidar com a mudança nos campos do formulário
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
            }));
    };

     // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form data submitted:", formData);
        // Aqui você pode adicionar lógica para enviar os dados para um servidor, etc.
    };

  return (
    <>
    <div id="ViewFuncionaria" >
        
        <form onSubmit={handleSubmit}>
        <h1>Cadastro Funcionario Prefeitura</h1>
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
            <InputMask
                className="textInput"
                id="DataNascimento"
                name="DataNascimento"
                placeholder="Data de Nascimento"
                mask="99/99/9999"
                value={formData.DataNascimento}
                onChange={handleChange}
            />
        </div>
        <div className="OneLine">
            
            <ComboBox
                id="Nacionalidade"
                name="Nacionalidade"
                items={["Brasileiro", "Outro"]}
                titulo={"Qual sua Nacionalidade"}
                value={formData.Nacionalidade}
                onChange={handleChange}
            />
            <ComboBox
                id="NivelAcesso"
                name="NivelAcesso"
                items={["Administrador","Editor","Visualizador"]}
                titulo={"Escolha seu nivel de acesso"}
                value={formData.NivelAcesso}
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
        <div className="buttonAling">
            <button type="submit"><span>Cadastrar</span></button>
        </div>
        
        </form>
    </div>
    </>
  );
}

export default TelaCadastroFuncionario;