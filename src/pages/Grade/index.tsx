import React from 'react';
import Template from '../../components/Template';

import './styles.css';

export default function Grade() {
  return (
    <Template isStudent titleTab="Notas" title="Notas Bimestrais">
      <div className="app-grades">
        <div className="container-grades">
          <table>
            <thead>
              <tr>
                <th className="large-column">MATÉRIA</th>
                <th className="medium-colum">B1</th>
                <th className="medium-colum">B2</th>
                <th className="medium-colum">B3</th>
                <th className="medium-colum">B4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-left">Português</td>
                <td>8,4</td>
                <td>10</td>
                <td>2,5</td>
                <td>6</td>
              </tr>
              <tr>
                <td className="align-left">Inglês</td>
                <td>8,4</td>
                <td>10</td>
                <td>2,5</td>
                <td>6</td>
              </tr>
              <tr>
                <td className="align-left">Física</td>
                <td>8,4</td>
                <td>10</td>
                <td>2,5</td>
                <td>6</td>
              </tr>
              <tr>
                <td className="align-left">Matemática</td>
                <td>8,4</td>
                <td>10</td>
                <td>2,5</td>
                <td>6</td>
              </tr>
              <tr>
                <td className="align-left">Geografia</td>
                <td>8,4</td>
                <td>10</td>
                <td>2,5</td>
                <td>6</td>
              </tr>
              <tr>
                <td className="align-left">Química</td>
                <td>8,4</td>
                <td>10</td>
                <td>2,5</td>
                <td>6</td>
              </tr>
              <tr>
                <td className="align-left">Biologia</td>
                <td>8,4</td>
                <td>10</td>
                <td>2,5</td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Template>
  );
}
