import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/Error';
import { loader as placesLoader } from './pages/FamousPlaces';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import AuthenticationPage, {
	action as authAction,
} from './pages/Authentication';
import { action as logoutAction } from './pages/Logout';
import { checkAuthLoader, tokenLoader } from './util/auth';
import Usa from './pages/Usa';
import FamousPlaces from './pages/FamousPlaces';
import Mountains from './pages/Mountains';
import Strike from './pages/Strike';
import Reservoirs from './pages/Reservoirs';
import Countries from './pages/Countries';
import Flags from './pages/Flags';
import Theme from './pages/Theme';
import Badges from './pages/Badges';
import Quiz from './components/Quiz';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		id: 'root',
		loader: tokenLoader,
		children: [
			{ index: true, element: <HomePage />, loader: checkAuthLoader },
			{
				path: 'flags',
				loader: checkAuthLoader,
				children: [
					{ index: true, element: <Theme themeName='flags' /> },
					{
						path: 'level-1',
					},
					{
						path: 'level-2',
					},
					{
						path: 'level-3',
					},
					{
						path: 'level-4',
					},
				],
			},
			{
				path: 'countries',
				loader: checkAuthLoader,
				children: [
					{
						index: true,
						element: <Theme themeName='countries' />,
					},
					{
						path: 'level-1',
					},
					{
						path: 'level-2',
					},
					{
						path: 'level-3',
					},
					{
						path: 'level-4',
					},
				],
			},
			{
				path: 'reservoirs',
				loader: checkAuthLoader,
				children: [
					{
						index: true,
						element: <Theme themeName='reservoirs' />,
					},
					{
						path: 'level-1',
					},
					{
						path: 'level-2',
					},
					{
						path: 'level-3',
					},
					{
						path: 'level-4',
					},
				],
			},
			{
				path: 'strike',
				loader: checkAuthLoader,
				children: [
					{
						index: true,
						element: <Strike />,
					},
				],
			},
			{
				path: 'usa',
				loader: checkAuthLoader,
				children: [
					{
						index: true,
						element: <Theme themeName='usa' />,
					},
					{
						path: 'level-1',
						element: <Usa lvl={1} />,
					},
					{
						path: 'level-2',
						element: <Usa lvl={2} />,
					},
					{
						path: 'level-3',
						element: <Usa lvl={3} />,
					},
					{
						path: 'level-4',
						element: <Usa lvl={4} />,
					},
				],
			},
			{
				path: 'mountains',
				loader: checkAuthLoader,
				children: [
					{
						index: true,
						element: <Theme themeName='mountains' />,
					},
					{
						path: 'level-1',
						element: <Mountains level={1} />,
					},
					{
						path: 'level-2',
						element: <Mountains level={2} />,
					},
					{
						path: 'level-3',
						element: <Mountains level={3} />,
					},
					{
						path: 'level-4',
						element: <Mountains level={4} />,
					},
				],
			},
			{
				path: 'famousPlaces',
				loader: checkAuthLoader,
				children: [
					{
						index: true,
						element: <Theme themeName='famousPlaces' />,
						loader: placesLoader,
					},
					{
						path: 'level-1',
						element: <FamousPlaces level={1}></FamousPlaces>,
					},
					{
						path: 'level-2',
						element: <FamousPlaces level={2}></FamousPlaces>,
					},
					{
						path: 'level-3',
					},
					{
						path: 'level-4',
					},
				],
			},
			{
				path: 'badges',
				element: <Badges />,
				action: checkAuthLoader,
			},
			{
				path: 'auth',
				element: <AuthenticationPage />,
				action: authAction,
			},
			{
				path: 'logout',
				action: logoutAction,
				loader: checkAuthLoader,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
