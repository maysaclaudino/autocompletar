import tv from './images/tvretro.png';

function App() {
  return (
    <div>
      <div className="container">
        <figure>
          <img alt="Televisão retrô azul" src={tv} className="tv"/>
          <figcaption>
            <a href="http://www.freepik.com/">Freepik</a>
          </figcaption>
        </figure>
        <div>
          <p>Este projeto é uma implementação de um formulário de busca de <b>canais de televisão</b> com a função de autocompletar.</p>
          <p>Comece a digitar no campo abaixo para exibir as sugestões. Clique em um item para exibir informações sobre a emissora.</p>
          <form>
              <input
                type="text"
                name="channel" 
                id="autocomplete-dynamic" 
                placeholder="Discovery Channel" 
                />
          </form>
          <div id="selction-ajax"></div>
      </div>
      </div>
        <p className="notice">A lista de canais desse projeto foi obtida do Portal de Dados Abertos do Governo Federal. Disponível em: <a href="https://dados.gov.br/dados/conjuntos-dados/canais-de-programacao-de-programadoras-ativos-credenciados-na-ancine"> Canais de Programação de Programadoras Ativos Credenciados na Ancine</a></p>
    </div>
  );
}

export default App; 