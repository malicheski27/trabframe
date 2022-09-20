export const Lista = ({nome, usuario, descricao, datainclusao, palavraschave }) => {
    return(

        <div className="odas">
                <h1 className="texto">NOME: {nome}</h1>
                <p className="texto">USUARIO: {usuario}</p>
                <p className="texto">PALAVRA CHAVE: {palavraschave}</p>
                <p className="texto">DATA: {datainclusao}</p>
                <p className="texto">DESCRIÇÃO {descricao}</p>
        </div>
    )
}