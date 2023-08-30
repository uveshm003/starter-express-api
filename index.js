const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.all('/restaurants', (req, res) => {
    console.log("Just got a request!")
    res.send({
        restaraunts: [
            {
                'restaurantName': 'Vivitalia',
                'rating': 3.6,
                'distance': 2.1,
                'comments': 3,
                'category': 'Italian • Pizza • Asian',
                'imageUrl': 'AppAssets.beef',
                'price': 'AppString.keyThreeDollars'
            },

            {
                'restaurantName': 'Kuriya',
                'rating': 3.6,
                'distance': 2.1,
                'comments': 3,
                'category': 'Japanese Fine Dining',
                'imageUrl': 'AppAssets.carrot',
                'price': 'AppString.keyThreeDollars'
            }
            ,

            {
                'restaurantName': 'Dolcetto by Basilico - Regent Hotel',
                'rating': 3.6,
                'distance': 2.1,
                'comments': 3,
                'category': 'Greek',
                'imageUrl': 'AppAssets.food',
                'price': ' AppString.keyThreeDollars'
            }
            ,

            {
                'restaurantName': 'OSO',
                'rating': 3.6,
                'distance': 2.1,
                'comments': 3,
                'category': 'Italian Fine Dining',
                'imageUrl': 'AppAssets.beef',
                'price': 'AppString.keyThreeDollars'
            }
        ]
    })
})
app.all('/reservations', (req, res) => {
    console.log("Just got a request!")
    res.send(
        {
            reservations: [
                {
                    "restaurant": {
                        "restaurantName": "Vivitalia",
                        "rating": 3.6,
                        "distance": 2.1,
                        "comments": 3,
                        "category": "Italian • Pizza • Asian",
                        "imageUrl": "AppAssets.beef",
                        "price": "AppString.keyThreeDollars"
                    },
                    "reservationTime": "2023-08-10T18:30:00",
                    "peopleCount": 4
                },
                {
                    "restaurant": {
                        "restaurantName": "Kuriya",
                        "rating": 3.6,
                        "distance": 2.1,
                        "comments": 3,
                        "category": "Japanese Fine Dining",
                        "imageUrl": "AppAssets.carrot",
                        "price": "AppString.keyThreeDollars"
                    },
                    "reservationTime": "2023-08-11T20:00:00",
                    "peopleCount": 2
                },
                {
                    "restaurant": {
                        "restaurantName": "Kuriya",
                        "rating": 3.6,
                        "distance": 2.1,
                        "comments": 3,
                        "category": "Japanese Fine Dining",
                        "imageUrl": "AppAssets.carrot",
                        "price": "AppString.keyThreeDollars"
                    },
                    "reservationTime": "2023-08-12T19:00:00",
                    "peopleCount": 6
                },
                {
                    "restaurant": {
                        "restaurantName": "Dolcetto by Basilico - Regent Hotel",
                        "rating": 3.6,
                        "distance": 2.1,
                        "comments": 3,
                        "category": "Greek",
                        "imageUrl": "AppAssets.food",
                        "price": "AppString.keyThreeDollars"
                    },
                    "reservationTime": "2023-08-13T12:00:00",
                    "peopleCount": 3
                },
                {
                    "restaurant": {
                        "restaurantName": "OSO",
                        "rating": 3.6,
                        "distance": 2.1,
                        "comments": 3,
                        "category": "Italian Fine Dining",
                        "imageUrl": "AppAssets.beef",
                        "price": "AppString.keyThreeDollars"
                    },
                    "reservationTime": "2023-08-14T17:30:00",
                    "peopleCount": 5
                },
                {
                    "restaurant": {
                        "restaurantName": "Vivitalia",
                        "rating": 3.6,
                        "distance": 2.1,
                        "comments": 3,
                        "category": "Italian • Pizza • Asian",
                        "imageUrl": "AppAssets.beef",
                        "price": "AppString.keyThreeDollars"
                    },
                    "reservationTime": "2023-08-15T18:00:00",
                    "peopleCount": 4
                },
                {
                    "restaurant": {
                        "restaurantName": "Kuriya",
                        "rating": 3.6,
                        "distance": 2.1,
                        "comments": 3,
                        "category": "Japanese Fine Dining",
                        "imageUrl": "AppAssets.carrot",
                        "price": "AppString.keyThreeDollars"
                    },
                    "reservationTime": "2023-08-16T21:00:00",
                    "peopleCount": 2
                },
                {
                    "restaurant": {
                        "restaurantName": "Dolcetto by Basilico - Regent Hotel",
                        "rating": 3.6,
                        "distance": 2.1,
                        "comments": 3,
                        "category": "Greek",
                        "imageUrl": "AppAssets.food",
                        "price": "AppString.keyThreeDollars"
                    },
                    "reservationTime": "2023-08-17T13:30:00",
                    "peopleCount": 7
                },
                {
                    "restaurant": {
                        "restaurantName": "OSO",
                        "rating": 3.6,
                        "distance": 2.1,
                        "comments": 3,
                        "category": "Italian Fine Dining",
                        "imageUrl": "AppAssets.beef",
                        "price": "AppString.keyThreeDollars"
                    },
                    "reservationTime": "2023-08-18T16:00:00",
                    "peopleCount": 3
                },
                {
                    "restaurant": {
                        "restaurantName": "Vivitalia",
                        "rating": 3.6,
                        "distance": 2.1,
                        "comments": 3,
                        "category": "Italian • Pizza • Asian",
                        "imageUrl": "AppAssets.beef",
                        "price": "AppString.keyThreeDollars"
                    },
                    "reservationTime": "2023-08-19T19:30:00",
                    "peopleCount": 5
                },
                {
                    "restaurant": {
                        "restaurantName": "Kuriya",
                        "rating": 3.6,
                        "distance": 2.1,
                        "comments": 3,
                        "category": "Japanese Fine Dining",
                        "imageUrl": "AppAssets.carrot",
                        "price": "AppString.keyThreeDollars"
                    },
                    "reservationTime": "2023-08-20T12:00:00",
                    "peopleCount": 6
                },
                {
                    "restaurant": {
                        "restaurantName": "Dolcetto by Basilico - Regent Hotel",
                        "rating": 3.6,
                        "distance": 2.1,
                        "comments": 3,
                        "category": "Greek",
                        "imageUrl": "AppAssets.food",
                        "price": " AppString.keyThreeDollars"
                    },
                    "reservationTime": "2023-08-21T17:00:00",
                    "peopleCount": 4
                },
                {
                    "restaurant": {
                        "restaurantName": "OSO",
                        "rating": 3.6,
                        "distance": 2.1,
                        "comments": 3,
                        "category": "Italian Fine Dining",
                        "imageUrl": "AppAssets.beef",
                        "price": "AppString.keyThreeDollars"
                    },
                    "reservationTime": "2023-08-22T20:30:00",
                    "peopleCount": 2
                }
            ]
        }
    )
})
app.listen(process.env.PORT || 3000)

