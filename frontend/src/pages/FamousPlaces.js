import FamousPlacesQuiz from '../components/FamousPlacesQuiz';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import GoogleMapQuiz from '../components/GoogleMapQuiz';
import classes from './FamousPlaces.module.css';

const FamousPlaces = (props) => {
	return (
		<div className={classes.famousPlacesTheme}>
			<FamousPlacesQuiz level={props.level} />
			{/* <GoogleMapQuiz></GoogleMapQuiz> */}
		</div>
	);
};

export default FamousPlaces;

async function loadPlaces() {
	const response = await fetch('http://localhost:8080/famousPlaces');

	if (!response.ok) {
		// return { isError: true, message: 'Could not fetch events.' };
		// throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
		//   status: 500,
		// });
		throw json(
			{ message: 'Could not fetch events.' },
			{
				status: 500,
			}
		);
	} else {
		const resData = await response.json();
		return resData;
	}
}

export function loader() {
	return defer({
		events: loadPlaces(),
	});
}
