function RoomWaitingLobby()
{
    return(
        <div className="card rounded-4 col-md-4 p-4 align-self-center">
			<div className="text-center">
				<h2>Jogadores</h2>
				<div className="form-text">
					Aguardando início.
				</div>
                <ul className="list-group mt-3">
                    <li className="list-group-item">Brendo</li>
                    <li className="list-group-item">Carlos</li>
                </ul>
                <div className="form-check mt-2">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value="1"
                        id="viewer-mode"/>
                    <label className="form-check-label" name="viewer_mode" for="viewer-mode">
                        Entrar como espectador
                    </label>
                </div>

                <button className="btn btn-lg btn-primary mt-3">Iniciar</button>

			</div>
        </div>
    );
}

export default RoomWaitingLobby;