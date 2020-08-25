import React, { Component, Fragment, useEffect } from "react";
import { render } from "react-dom";

import "./style.scss";
import Header from "./components/Header";
import Post from "./components/Post";

class App extends Component {
  state = {
    data: [
      {
        name: "Diego Schell Fernandes",
        publishDate: "30 minutos",
        comment:
          "Caros amigos, a contínua expansão de nossa atividade maximiza as possibilidades por conta das condições financeiras e administrativas exigidas. Desta maneira, o desenvolvimento contínuo de distintas formas de atuação oferece uma interessante oportunidade para verificação das posturas dos órgãos dirigentes com relação às suas atribuições. Assim mesmo, a execução dos pontos do programa talvez venha a ressaltar a relatividade das novas proposições. Pensando mais a longo prazo, o aumento do diálogo entre os diferentes setores produtivos apresenta tendências no sentido de aprovar a manutenção das diretrizes de desenvolvimento para o futuro.",
      },
      {
        name: "Rubia Savolksi",
        publishDate: "50 minutos",
        comment:
          "Evidentemente, a determinação clara de objetivos oferece uma interessante oportunidade para verificação do sistema de formação de quadros que corresponde às necessidades. Por conseguinte, a adoção de políticas descentralizadoras faz parte de um processo de gerenciamento do impacto na agilidade decisória. É importante questionar o quanto a valorização de fatores subjetivos desafia a capacidade de equalização do fluxo de informações. Ainda assim, existem dúvidas a respeito de como a complexidade dos estudos efetuados apresenta tendências no sentido de aprovar a manutenção das novas proposições. Não obstante, o comprometimento entre as equipes é uma das consequências do retorno esperado a longo prazo. ",
      },
      {
        name: "Mr. Mustache",
        comment:
          " O cuidado em identificar pontos críticos na hegemonia do ambiente político talvez venha a ressaltar a relatividade dos procedimentos normalmente adotados. As experiências acumuladas demonstram que o acompanhamento das preferências de consumo causa impacto indireto na reavaliação do remanejamento dos quadros funcionais. O cuidado em identificar pontos críticos na percepção das dificuldades afeta positivamente a correta previsão da gestão inovadora da qual fazemos parte. ",
      },
    ],
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="post">
          {this.state.data.map((post, key) => (
            <Post key={key}>{post}</Post>
          ))}
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
