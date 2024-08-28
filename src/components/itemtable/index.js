import React from "react";
import cancel from "../../media/icons/cancel.png"
import done from "../../media/icons/correct.png"
import paper from "../../media/icons/paper.png"
import  "./style.css"

function ItemTable({ id, item }) {


    return (
    <tr id={id}>
        <td>{item.categoria}</td>
        <td>{item.atividade}</td>
        <td>{item.nomeEmitente}</td>
        <td>{item.nomeEmpresa}</td>
        <td>{item.cpf}</td>
        <td>{item.status}</td>
        <td>{item.dataEmissao}</td>
        <td>
            <a href="">
                <img src={cancel}></img>
            </a>
        </td>
        <td>
            <a href="">
                <img src={paper}></img>
            </a>
        </td>
    </tr>
    );
  }

export default ItemTable
  