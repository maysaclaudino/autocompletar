import "./App.css";

function App() {
  return (
    <div style={{ width: '50%', margin: '0 auto', clear: 'both' }}>
        <h1>Busca de canais de televisão com Autocompletar</h1>
        <p>Comece a digitar um canal no campo abaixo para exibir as sugestões:</p>
        <div>
            <input type="text" name="channel" id="autocomplete-dynamic" style={{ width: '100%', borderWidth: '5px' }} />
        </div>
    </div>
  );
}

export default App; 