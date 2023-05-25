from pymongo import MongoClient


def get_database():
    # Provide the mongodb atlas url to connect python to mongodb using pymongo
    CONNECTION_STRING = "mongodb://localhost:27017"


    # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
    client = MongoClient(CONNECTION_STRING)

    # Create the database for our example (we will use the same database throughout the tutorial
    return client['quiz_venture']


# This is added so that many files can reuse the function get_database()
if __name__ == "__main__":
    # Get the database
    dbname = get_database()
    collection_name = dbname["famous_places_quiz"]
    places_lvl_1 = [
        {
            'id': 1,
            'level': 1,
            'name': 'Wieża Eiffla w Paryżu',
            'position': {'lat': 48.86, 'lng': 2.29},
        },
        {
            'id': 2,
            'level': 1,
            'name': 'Statua Wolności w Nowym Jorku',
            'position': {'lat': 40.6892494, 'lng': -74.0445004},
        },
        {
            'id': 3,
            'level': 1,
            'name': 'Statua Chrystusa Zbawiciela w Rio de Janeiro',
            'position': {'lat': -22.9519142, 'lng': -43.2104933},
        },
        {
            'id': 4,
            'level': 1,
            'name': 'Piramida Cheopsa w Egipcie',
            'position': {'lat': 29.9792345, 'lng': 31.1342027},
        },
        {
            'id': 5,
            'level': 1,
            'name': 'Big Ben w Londynie',
            'position': {'lat': 51.5007292, 'lng': -0.1246254},
        },
        {
            'id': 6,
            'level': 1,
            'name': 'Koloseum w Rzymie',
            'position': {'lat': 41.890251, 'lng': 12.492373},
        },
        {
            'id': 7,
            'level': 1,
            'name': 'Tadź Mahal w Indiach',
            'position': {'lat': 27.175019, 'lng': 78.042155},
        },
        {
            'id': 8,
            'level': 1,
            'name': 'Wielki Mur Chiński',
            'position': {'lat': 40.4319077, 'lng': 116.5703749},
        },
    ]

    places_lvl_2 = [
        {
            'id': i,
            'level': 2,
            'name': name,
            'position': position,
        }
        for i, (name, position) in enumerate([
            ('Sagrada Familia w Barcelonie', {'lat': 41.4040552, 'lng': 2.1741139}),
            ('Petra w Jordanii', {'lat': 30.3284541, 'lng': 35.4417389}),
            ('Machu Picchu w Peru', {'lat': -13.1631365, 'lng': -72.5449629}),
            ('Angkor Wat w Kambodży', {'lat': 13.4124695, 'lng': 103.8669869}),
            ('Golden Gate w San Francisco', {'lat': 37.8199298, 'lng': -122.4782551}),
            ('Chichen Itza w Meksyku', {'lat': 20.6842925, 'lng': -88.5677823}),
            ('Kreml w Moskwie', {'lat': 55.7520235, 'lng': 37.6174994}),
            ('Hagia Sophia w Stambule', {'lat': 41.0083921, 'lng': 28.9783589}),
        ], start=1)
    ]

    collection_name.insert_many(places_lvl_1)
    collection_name.insert_many(places_lvl_2)
