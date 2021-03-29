import React from 'react';
import Template from '../../components/Template';
import './styles.css';

export default function EditActivity() {
  return (
    <Template title="Professor">
      <div className="esquerdaDireita">
        <div className="tabelaEsquerda">
          <h1 className="exemploAtividade">Atividades</h1>

          <div className="conteudoAvaliacoes">

            <h1> 2° Informática - prova -  03/10 </h1>
            <div className="conteudoAvaliacoes">
              <h1> 2° Informática - prova -  03/10 </h1>
            </div>
          </div>
        </div>

        <div className="tabelaDescricao">

          <div className="tabelaConteudo">

            <h1 className="tituloTabela">PROVA DE REDES DE COMPUTADORES</h1>
            <div className="subConteudo">
              <p>
                Escrever um resumo sobre as diferenças que os avaços na tecnologia
                proveram ao mundo nos ultimos 70 anos.
              </p>
              <section className="notaDataTipo">
                <span>Pontuação máxima: 8</span>
                <span>Data de entrega: 03/10</span>
                <span>tipo de atividade: Resumo</span>
              </section>
            </div>

            <div className="botoesEditDelete">
              <button className="editar" type="button">EDITAR</button>
              <button className="excluir" type="button">EXCLUIR</button>

            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}
