function LobbyForm()
{
	return (
		<div className="card rounded-4 col-md-4 p-4 align-self-center">
			<div className="text-center">
				<h2>Criar uma sala</h2>
				<div className="form-text">
						Indentifique-se para criar uma sala.
				</div>
			</div>
			<form className="mt-3">
				<div className="mb-3">
					<label for="name" className="form-label">Informe seu nome</label>
					<input
						type="text"
						name="name"
						className="form-control"
						id="name"
						aria-describedby="nome"
						placeholder="Informe seu nome"/>

					<div className="text-center pt-3">
						<button className="btn btn-lg btn-primary">Criar</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default LobbyForm