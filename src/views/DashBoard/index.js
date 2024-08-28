import "./style.css"
import React, {useState} from "react"
import ComboBox from "../../components/comboBox"
import ItemTable from "../../components/itemtable"
import categorias from "../../dto/descricaoAtividades";
import ProcessMeiVo from "../../vo/ProcessMeiVo"


const DashBoard = (props) => {

    const [formData, setFormData] = useState({})

    const mei = new ProcessMeiVo({
        categoria: "Comércio",
        atividade: "Venda de Produtos",
        nomeEmitente: "João da Silva",
        nomeEmpresa: "Empresa XYZ Ltda",
        cpf: "123.456.789-00",
        status: "Ativo",
        dataEmissao: "2024-08-28"
      });

    const listMei = [mei, mei, mei, mei, mei, mei]

    const atividades = categorias[formData.Categoria] || [];

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };

    return (
        <section className='adm'>
           <div className="Navbar">
                <a>DashBoard</a>
           </div>
            <div className="ProcessosMei">
                <form>
                    <div className="OneLine">
                        <ComboBox id="Categoria"
                        className="cmbBox"
                        name="Categoria"
                        items={["COMERCIO", "INDUSTRIA", "PRESTACAO_DE_SERVICO"]}
                        titulo={"Selecione Filtro Categoria"}
                        value={formData.Nacionalidade}
                        onChange={handleChange}/>
                        <ComboBox id="Atividades"
                        className="cmbBox"
                        name="Atividades"
                        items={atividades}
                        titulo={"Selecione Filtro Atividade"}
                        value={formData.Nacionalidade}
                        onChange={handleChange}/>
                        <ComboBox id="Status"
                        className="cmbBox"
                        name="Status"
                        items={["PENDENTE","EM_ANDAMENTO","FINALIZADO","CANCELADO"]}
                        titulo={"Selecione Filtro Status"}
                        value={formData.Nacionalidade}
                        onChange={handleChange}/>
                        <a>
                            
                        </a>

                    </div>
                    
                </form>
                <table>
                    <tr>
                        <th>Categoria</th>
                        <th>Atividade</th>
                        <th>Nome emitente</th>
                        <th>Nome da Empresa</th>
                        <th>CPF</th>
                        <th>Status</th>
                        <th>Data Emissão</th>
                    </tr>
                    
                    {listMei.map((item, index) => (
                    <ItemTable id={index} item={item}></ItemTable>
                    ))}
                    
                    
                </table>
            </div>          
            
        </section>       
        
    )
}

export default DashBoard