import '../assets/css/App.css';
// import socketService from '../services/socketService';
import Room from './room/index';

function App() {

	// useEffect(() => {
	// 	socketService.connect();
	// });

	return(
		<div className="container-fluid vh-100 background-image">
			<div className='background-gradient'></div>
			<Room/>
		</div>
	);
}

export default App;
