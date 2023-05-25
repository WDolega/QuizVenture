import Button from '../components/Button';
import PageContent from '../components/PageContent';

import bonfire from '../assets/icons/bonfire.png';
import classes from './Home.module.css';

const HomePage = () => {
	return (
		<div className={`${classes.theme} ${classes.home}`}>
			<PageContent>
				<div className={classes.wrapper}>
					<ul className={classes.row}>
						<Button className={classes.flagsBtn} linkTo='/flags'></Button>
						<Button
							className={classes.countriesBtn}
							linkTo='/countries'
						></Button>
					</ul>
					<ul className={classes.row2}>
						<Button
							className={classes.reservoirsBtn}
							linkTo='/reservoirs'
						></Button>
						<Button className={classes.strikeBtn} linkTo='/strike'></Button>
						<Button className={classes.usaBtn} linkTo='/usa'></Button>
					</ul>
					<ul className={classes.row}>
						<Button
							className={classes.mountainsBtn}
							linkTo='/mountains'
						></Button>
						<Button
							className={classes.famousPlacesBtn}
							linkTo='/famousPlaces'
						></Button>
					</ul>
				</div>
				<div className={classes.friendsContainer}>
					<h2>Twoi druhowie</h2>
					<ul>
						<li>
							<h3>Ala</h3>
							<button>
								<h3>23</h3>
							</button>
						</li>
						<li>
							<h3>Michał</h3>
							<button>
								<h3>12</h3>
							</button>
						</li>
						<li>
							<h3>Czarek</h3>
							<button>
								<h3>7</h3>
							</button>
						</li>
					</ul>
				</div>
			</PageContent>
		</div>
	);
};

export default HomePage;
