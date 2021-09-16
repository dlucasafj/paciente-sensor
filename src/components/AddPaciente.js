import React, { useEffect, useState } from "react";
import {Container,GroupInput,Area1,Botoes,StatusConection,AreaDados, Equipamento } from "./styleAdiciona";
import Paciente from "../models/Paciente";
import Oximetro from "../services/Oximetro/oximetro";
import styled from "styled-components";
import { toast } from "react-toastify";

/**
 * Cria Cliente Socket
 */
// const socket_cliente = new WebSocket("ws://api-pbl-redes-pb01.herokuapp.com/");
const socket_cliente = new WebSocket("ws://localhost:3002");

/**
 * Componente que Cria Paciente
 * @returns
 */
const AddPaciente = () => {
  const [eq, setEq] = useState({});
  const [nomePaci, setNomePaci] = useState("");
  const [sistolica, setSistolica] = useState(0);
  const [diastolica, setDiastolica] = useState(0);
  const [temperatura, setTemperatura] = useState(0);
  const [message, setMessage] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [clicked, setClick] = useState(false);
  const [paci, setPaci] = useState(new Paciente());

  /**
   * Função que inicia a transmissão de Dados
   * @returns
   */
  const iniciar = () => {
    if (!confirm) {
      toast.warn("Por Favor Confirme os Dados");
      return;
    }
    setConfirm(!confirm);
    toast.success("Iniciando Transferencia de dados");
    paci.setConection(socket_cliente); // Cliente recebe o socket para o envio de dados
    paci.getLeitura();
  };

  /**
   * Encerra Conexão WebSocket com o Servidor
   *
   */
  const close = () => {
    toast.warn("Encerrando Conexão");
    socket_cliente.close();
  };

  /**
   * Função que recebe os dados dos inputs
   * @param {Event} ev
   * @returns
   */
  const onChange = (ev) => {
    const { name, value } = ev.target;

    switch (name) {
      case "nome_paciente":
        return setNomePaci(value);
      case "pressao_sistolica":
        return setSistolica(value);
      case "pressao_diastolica":
        return setDiastolica(value);
      case "temperatura":
        return setTemperatura(value);
      default:
        return null;
    }
  };
  /**
   * Verifica se os dados estão preenchidos
   * Confirma os dados preenchdos
   * @returns
   */
  const confirma = () => {
    if (nomePaci) {
      paci.setNome(nomePaci);
    } else {
      toast.warn("INFORME O NOME DO PACIENTE");
      return;
    }
    if (sistolica) {
      paci.setSistolica(sistolica);
    } else {
      toast.warn("INFORME O VALOR DA PRESSÃO SISTOLICA");
      return;
    }
    if (diastolica) {
      paci.setDiastolica(diastolica);
    } else {
      toast.warn("INFORME O VALOR DA PRESSÃO DIASTÓLICA");
      return;
    }
    if (temperatura) {
      paci.setTemperatura(temperatura);
    } else {
      toast.warn("INFORME A TEMPERATURA DO PACIENTE");
      return;
    }
    if (Object.values(eq).length !== 0) {
      if (paci.getQtdEquipa() < 1) {
        // adiciona sempre 1 equipamento
        paci.equipamentos(eq);
      }
    } else {
      toast.warn("SELECIONE O EQUIPAMENTO");
      return;
    }

    setConfirm(!confirm);
    toast.success("Dados Confirmados com sucesso");
  };

  /**
   * Adiciona o equipamento
   */
  const adicionaEquipamento = () => {
    const ox = new Oximetro("Oximetro de Dedo");
    setEq(ox);
    toast.success("Equipamento Adicionado com Sucesso");
  };

  /**
   * Recebe Mensagem de Confirmação de Conexão
   * @param {} res
   */
  socket_cliente.onmessage = (res) => {
    console.log("Mensagem", res);
  };

  /**
   * Servidor Fecha a Conexão
   * @param {Error} e
   */
  socket_cliente.onclose = (e) => {
    setMessage("Servidor Indisponível");
    toast.error("Servidor Indisponível");
  };

  useEffect(() => {
    // Abre Conexão com Servidor. Permitindp envio de Dados
    socket_cliente.addEventListener("open", () => {
      setMessage("Conectado");
      toast.success("Pronto para o envio de Dados ");
    });
  }, [temperatura, sistolica, diastolica, socket_cliente.readyState]);

  return (
    <Container>
      <StatusConection>Status da Conexão: {message}</StatusConection>
      <Area1>
        <GroupInput>
          <label>Nome do Paciente</label>
          <input
            type="text"
            name="nome_paciente"
            value={nomePaci}
            onChange={onChange}
          />
        </GroupInput>
        <AreaDados>
          <GroupInput>
            <label>Pressão Sistólica</label>
            <input
              type="number"
              name="pressao_sistolica"
              value={sistolica}
              onChange={onChange}
            />
          </GroupInput>
          <GroupInput>
            <label>Pressão Diastólica</label>
            <input
              type="number"
              name="pressao_diastolica"
              value={diastolica}
              onChange={onChange}
            />
          </GroupInput>
        </AreaDados>
        <AreaDados>
          <GroupInput>
            <label>Temperatura</label>
            <input
              type="number"
              name="temperatura"
              value={temperatura}
              onChange={onChange}
            />
          </GroupInput>
          <GroupInput>
            <label>Oxímetro de Dedo</label>
            <Equipamento onClick={adicionaEquipamento}>Adicionar </Equipamento>
          </GroupInput>
        </AreaDados>
        <AreaDados>
          <Botoes>
            <button type="button" onClick={confirma}>
              Confirmar
            </button>
            <button type="button" onClick={iniciar}>
              Iniciar
            </button>
            <button onClick={close}>Close</button>
          </Botoes>
        </AreaDados>
      </Area1>
    </Container>
  );
};

export default AddPaciente;
