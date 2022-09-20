import  logoif  from "./imagens/logoif.png";
export const Rodape = () => {

    return(
        <div className="rodape">
            <img src={logoif} alt="logo bocaweb" className="imagemcabecalho" />
            <h1>Trabalho de Frameworks</h1>
            <div className='nomealunos'>
                <p>Aluna:Daniella Malicheski</p>
                <p>Aluna:Maria Fernanda Sgarboza</p>
            </div>
        </div>
    )
}