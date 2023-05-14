import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/Header';
import Articles from './pages/Articles';
import ArticleDetails from './components/ArticleDetails';
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route index element={<Articles />} />
					<Route path='/article/:id' element={<ArticleDetails />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
