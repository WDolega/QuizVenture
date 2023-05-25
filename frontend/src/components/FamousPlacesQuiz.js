import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import classes from './FamousPlacesQuiz.module.css';
import MapComponent from './MapComponent';

const customStyle = [
	{
		elementType: 'geometry',
		stylers: [
			{
				saturation: -25,
			},
			{
				lightness: -40,
			},
			{
				visibility: 'simplified',
			},
		],
	},
	{
		elementType: 'geometry.fill',
		stylers: [
			{
				saturation: 5,
			},
			{
				lightness: 10,
			},
			{
				visibility: 'simplified',
			},
		],
	},
	{
		elementType: 'geometry.stroke',
		stylers: [
			{
				visibility: 'simplified',
			},
		],
	},
	{
		elementType: 'labels',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'administrative',
		elementType: 'geometry',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'administrative.country',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'administrative.land_parcel',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'administrative.neighborhood',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'landscape',
		stylers: [
			{
				visibility: 'simplified',
			},
		],
	},
	{
		featureType: 'landscape',
		elementType: 'geometry',
		stylers: [
			{
				visibility: 'simplified',
			},
		],
	},
	{
		featureType: 'landscape',
		elementType: 'geometry.stroke',
		stylers: [
			{
				saturation: -35,
			},
			{
				visibility: 'simplified',
			},
		],
	},
	{
		featureType: 'landscape.man_made',
		stylers: [
			{
				visibility: 'simplified',
			},
		],
	},
	{
		featureType: 'landscape.natural',
		stylers: [
			{
				visibility: 'simplified',
			},
		],
	},
	{
		featureType: 'landscape.natural',
		elementType: 'geometry',
		stylers: [
			{
				saturation: -15,
			},
			{
				visibility: 'simplified',
			},
		],
	},
	{
		featureType: 'landscape.natural',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#e8bba3',
			},
			{
				visibility: 'simplified',
			},
		],
	},
	{
		featureType: 'landscape.natural',
		elementType: 'labels',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'poi',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'road',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'road',
		elementType: 'labels.icon',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'transit',
		stylers: [
			{
				visibility: 'off',
			},
		],
	},
	{
		featureType: 'water',
		elementType: 'geometry.fill',
		stylers: [
			{
				color: '#fafafa',
			},
			{
				saturation: -30,
			},
			{
				visibility: 'simplified',
			},
		],
	},
];

const places_lvl_1 = [
	{
		id: 1,
		level: 1,
		name: 'Wieża Eiffla w Paryżu',
		position: { lat: 48.86, lng: 2.29 },
	},
	{
		id: 2,
		level: 1,
		name: 'Statua Wolności w Nowym Jorku',
		position: { lat: 40.6892494, lng: -74.0445004 },
	},
	{
		id: 3,
		level: 1,
		name: 'Statua Chrystusa Zbawiciela w Rio de Janeiro',
		position: { lat: -22.9519142, lng: -43.2104933 },
	},
	{
		id: 4,
		level: 1,
		name: 'Piramida Cheopsa w Egipcie',
		position: { lat: 29.9792345, lng: 31.1342027 },
	},
	{
		id: 5,
		level: 1,
		name: 'Big Ben w Londynie',
		position: { lat: 51.5007292, lng: -0.1246254 },
	},
	{
		id: 6,
		level: 1,
		name: 'Koloseum w Rzymie',
		position: { lat: 41.890251, lng: 12.492373 },
	},
	{
		id: 7,
		level: 1,
		name: 'Tadź Mahal w Indiach',
		position: { lat: 27.175019, lng: 78.042155 },
	},
	{
		id: 8,
		level: 1,
		name: 'Wielki Mur Chiński',
		position: { lat: 40.4319077, lng: 116.5703749 },
	},
];

const places_lvl_2 = [
	{
		id: 1,
		level: 2,
		name: 'Sagrada Familia w Barcelonie',
		position: { lat: 41.4040552, lng: 2.1741139 },
	},
	{
		id: 2,
		level: 2,
		name: 'Petra w Jordanii',
		position: { lat: 30.3284541, lng: 35.4417389 },
	},
	{
		id: 3,
		level: 2,
		name: 'Machu Picchu w Peru',
		position: { lat: -13.1631365, lng: -72.5449629 },
	},
	{
		id: 4,
		level: 2,
		name: 'Angkor Wat w Kambodży',
		position: { lat: 13.4124695, lng: 103.8669869 },
	},
	{
		id: 5,
		level: 2,
		name: 'Golden Gate w San Francisco',
		position: { lat: 37.8199298, lng: -122.4782551 },
	},
	{
		id: 6,
		level: 2,
		name: 'Chichen Itza w Meksyku',
		position: { lat: 20.6842925, lng: -88.5677823 },
	},
	{
		id: 7,
		level: 2,
		name: 'Kreml w Moskwie',
		position: { lat: 55.7520235, lng: 37.6174994 },
	},
	{
		id: 8,
		level: 2,
		name: 'Hagia Sophia w Stambule',
		position: { lat: 41.0083921, lng: 28.9783589 },
	},
];

const containerStyle = {
	width: '100%',
	height: '100%',
	borderRadius: '35rem',
	border: '0.25rem solid #ce8f6c',
};

const center = {
	lat: 21,
	lng: 8,
};

const onLoad = (marker) => {
	console.log('marker: ', marker);
};

const FamousPlacesQuiz = (props) => {
	const [answers, setAnswers] = useState(Array(8).fill(false));
	const [visibleMarker, setVisibleMarker] = useState(0);
	const [places, setPlaces] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		// fetch(`http://localhost:8080/famousPlaces?level=${props.level}`)
		fetch(`http://localhost:8080/famousPlaces`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				const filteredPlaces = data.filter(
					(place) => place.level === props.level
				);
				setPlaces(filteredPlaces);
				if (filteredPlaces.length > 0) {
					setPlaces(filteredPlaces);
				} else {
					if (props.level === 2) setPlaces(places_lvl_2);
					else {
						setPlaces(places_lvl_1);
					}
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, [props.level]);

	const sortedPlaces = places.sort((a, b) => a.name.localeCompare(b.name));
	console.log(sortedPlaces);

	const handleAnswer = (id) => {
		if (id === visibleMarker) {
			const newAnswers = [...answers];
			newAnswers[id] = true;
			setAnswers(newAnswers);
			setVisibleMarker(visibleMarker + 1);
		}
	};

	const endHandler = () => {
		navigate('..');
	};

	return (
		<div className={classes.quizContainer}>
			<div className={classes.col1}>
				{places.slice(0, 4).map((place) => (
					<button
						key={place.id}
						className={classes['btn' + place.id + '_lvl' + props.level]}
						disabled={answers[place.id - 1]}
						onClick={() => handleAnswer(place.id - 1)}
					/>
				))}
			</div>
			<div className={classes.mapContainer}>
				<LoadScript googleMapsApiKey='GOOGLEMAPSAPIKEY'>
					<GoogleMap
						mapContainerStyle={containerStyle}
						center={center}
						zoom={2.3}
						options={{
							draggable: false,
							mapTypeControl: false,
							streetViewControl: false,
							fullscreenControl: false,
							styles: customStyle,
						}}
					>
						{sortedPlaces.map((item) => {
							return (
								<Marker
									name={item.name}
									key={item.id}
									position={item.position}
									visible={visibleMarker === item.id - 1}
								/>
							);
						})}
					</GoogleMap>
				</LoadScript>
			</div>
			<div className={classes.col2}>
				{places.slice(4, 8).map((place) => (
					<button
						key={place.id}
						className={classes['btn' + place.id + '_lvl' + props.level]}
						disabled={answers[place.id - 1]}
						onClick={() => handleAnswer(place.id - 1)}
					/>
				))}
			</div>
			{visibleMarker === 8 && (
				<div className={classes.overlay}>
					<div className={classes.result}>
						<h1>Ukończyłeś quiz!</h1>
						<button onClick={endHandler}>Powrót do menu</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default FamousPlacesQuiz;
