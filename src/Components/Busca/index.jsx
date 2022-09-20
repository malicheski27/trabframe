export const Busca = ({busca, buscaODAS}) => {

    return(
        <div className="barrapesquisa">
          <input
          name='busca'
          type='text'
          value={busca}
          placeholder='o que deseja buscar'
          onChange={buscaODAS}
          className='buscainput'
          />
        </div>
    )
}