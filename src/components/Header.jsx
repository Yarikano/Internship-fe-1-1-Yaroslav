import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<div className='header-main'>
				<header className='header'>
					<div className='logo'>
						<Link to='/'>
							<span className='first-path'>sharetrade.</span>
							<span className='second-path'>com</span>
						</Link>
					</div>
				</header>
			</div>
			<Outlet />
		</>
	);
};

export default Header;
