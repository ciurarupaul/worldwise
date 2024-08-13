import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

function CountriesList() {
	const { cities, isLoading } = useCities();

	if (isLoading) return <Spinner />;

	if (!cities.length)
		return (
			<Message message="Add your first country by clicking on a city on the map" />
		);

	const countries = cities.reduce((arr, city) => {
		if (!arr.map((el) => el.city).includes(city.country))
			return [...arr, { country: city.country, emohi: city.emoji }];
		else return arr;
	}, []);

	return (
		<ul className={styles.countryList}>
			{countries.map((country) => (
				<CountryItem country={country} key={country.country} />
			))}
		</ul>
	);
}

export default CountriesList;
