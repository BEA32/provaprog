export default function Tabuleiro() {
    const casas = [];
    
  
    for (let linha = 0; linha < 8; linha++) {
      for (let coluna = 0; coluna < 8; coluna++) {
        
        const classeCasa = (linha + coluna) % 2 === 0 ? 'casa_branca' : 'casa_preta';

        let peca = null;
        if (linha < 3 && coluna === 'casa_branca') {
          peca = 'peca_vermelha';
        } else if (linha === 3 && coluna === 4) {
          peca = 'peca_verde';
        }
        casas.push(<div key={`${linha}-${coluna}`} className={`casa ${classeCasa}`}></div>);
      }
      
    }
    
    return (
      <div className="tabuleiro">
        {casas}

      </div>

      
    );
  }