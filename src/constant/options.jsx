export const SelectTravelList=[
    {
        id: 1,
        title: 'Just Me',
        desc:'A solo traveller in exploration',
        icon:"🧑",
        people:'1'
    },{
        id: 2,
        title: 'With Friends',
        desc:'A group of friends on an adventure',
        icon:"👫",
        people:'4 to 10 people'
    },{
        id: 3,
        title: 'With Family',
        desc:'A family trip with loved ones',
        icon:"👨‍👩‍👧‍👦",
        people:'2-6'
    },{
        id: 4,
        title: 'With Partner',
        desc:'A romantic getaway for two',
        icon:"❤️",
        people:'2'
    }
]

export const SelectBudgetList=[
    {
        id: 1,
        title: 'Low Budget',
        desc:'Budget-friendly options for cost-conscious travellers',
        icon:"💰",
        budget:'$1000'
    },{
        id: 2,
        title: 'Medium Budget',
        desc:'A balance between comfort and affordability',
        icon:"💵",
        budget:'$2000'
    },{
        id: 3,
        title: 'High Budget',
        desc:'Luxury experiences for those who want the best',
        icon:"💎",
        budget:'$5000'
    },{
        id: 4,
        title: 'Unlimited Budget',
        desc:'No financial limits, just pure luxury',
        icon:"💸",
        budget:'Unlimited'
    }
]

export const AI_PROMPT='Generate Travel Plan for Location: {location} for {totalDays} days for Couple with {budget} Budget,Give me a Hotel Option list with Hotelname,Hotel Address, Price , hotel image url,geo coordinates,rating,description and suggest itinery with placename,Place Details, Place Image url, Geo coordinates, ticket Pricing , ratings,Time to travel each location for {totalDays} days with each day plan with best time to visit i JSON format'