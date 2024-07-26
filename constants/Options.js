export const SelectTravellerList = [
    {
        title: 'Just Me',
        desc: 'A sole traveller in exploration',
        icon: '🥂',
        people: '1'
    },
    {
        title: 'A Couple',
        desc: 'Two travels in tandem',
        icon: '🧑‍🤝‍🧑',
        people: '2 people'
    },
    {
        title: 'Family',
        desc: 'A group of fun loving adventure',
        icon: '👨‍👩‍👧‍👦',
        people: '3 to 5 peoples'
    },
    {
        title: 'Friends',
        desc: 'Abunch of thrill-seekers',
        icon: '🤝',
        people: '5 to 10 people'
    }
]

export const SelectBudgetList = [
    {
        id:1,
        title: 'Cheap',
        desc: 'stay consious of costs',
        icon: '💴',
    },
    {
        id:2,
        title: 'Moderate',
        desc: 'Keep costs on the average',
        icon: '🪙',
    },
    {
        id:3,
        title: 'Luxury',
        desc: 'Dont Worry about costs',
        icon: '💰',
    },
]

export const AI_PROMPT='Generate Travel Plan for Location:{location}, for {totalDays} Days and {totalNights} Nights for {traveller} with a {budget} budget with flight details,flight price with booking url,hotels options list with hotelname,hoteladdrees,price,hotelimage url,geocordinates,,rating,description and places to visit nearby with placemname,placedetails,placeimageurl,geocordinates,ticketpricing,time to trvalel each of the lcoation for {totalDays} days and {totalNights} nightwith each day plan with best time to visit the location and location name in JSON FORMAT.';