
import {
  GoogleGenAI,
} from '@google/genai';

  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GOOGLE_GEMINI_API_KEY,
  });
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
  };
  const model = 'gemini-2.5-pro';
  const generateConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 6789,
  responseMimeType: "application/json"
};
 
  export const chatsession = model.startChat({
    generateConfig,
    history:[
    {
      role: 'user',
      parts: [
        {
          text: `Generate Travel Plan for Location: LasVegas fro 3 days for Couple with Cheap Budget,Give me a Hotel Option list with Hotelname,Hotel Address, Price , hotel image url,geo coordinates,rating,description and suggest itinery with placename,Place Details, Place Image url, Geo coordinates, ticket Pricing , ratings,Time to travel each location fro 3 dayss with each day plan with best time to visit i JSON format `,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `**Planning Vegas Itinerary**

I'm currently structuring a detailed 3-day budget travel plan for a couple in Las Vegas, focusing on JSON output. I've begun outlining the essential components, ensuring a clear and concise presentation. I'm prioritizing cost-effective activities and accommodations to meet the budget requirement.


**Outlining Budget-Friendly Hotels**

I'm now focusing on the 'hotelOptions' key, compiling a list of budget-friendly hotels in Las Vegas. I'm gathering details like hotel names, addresses, price ranges (with caveats about fluctuations), image URLs, and geo-coordinates. Additionally, I'm researching ratings and writing concise descriptions highlighting their appeal to budget travelers.


**Constructing the JSON Framework**

I've just finished the initial scaffolding of the JSON structure, including the \`travelPlan\`, \`location\`, \`duration\`, \`travelerType\`, and \`budget\` keys. I am now transitioning to populating the \`hotelOptions\` and \`itinerary\` arrays with placeholder data, ensuring the overall framework is sound.


**Developing Detailed Itineraries**

I've just begun populating the \`itinerary\` array with the detailed plans for each day.  The focus now is on crafting a compelling "South & Mid-Strip" experience for Day 1, emphasizing free attractions like the "Welcome to Las Vegas" sign and the Bellagio Fountains, considering travel suggestions for each activity. I'll need to research and add specific details on the timing and location to create a seamless flow for the couple. I'm also planning to create the theme, and will then move onto Day 2 and 3.


**Developing Plan Details**

Now, I'm digging into the specifics of the JSON structure, defining the itinerary components. I've broken down Day 1's activities, pinpointing free attractions like the "Welcome to Las Vegas" sign and the Bellagio Fountains, which will form the basis of the day's events. I am now concentrating on populating the  \`dailyPlan\` array in my itinerary. I'll include the Mirage Volcano with a note on its status, and add suggestions for travel.


**Developing Image URLs and Locations**

I'm now focusing on sourcing image URLs and geo-coordinates for the various attractions and hotels. I've been researching reliable, free-to-use image sources and mapping tools to ensure accuracy. The goal is to provide a visually rich and geographically precise JSON output. I'm prioritizing diverse image perspectives and ensuring all coordinates are correctly formatted.

I am now focusing on populating the  \`dailyPlan\` array in my itinerary.


**Structuring the JSON Data**

Now, I'm delving into the specific requirements, determining the best method to populate the \`itinerary\` and \`hotelOptions\` arrays. I'm prioritizing clarity and efficiency in structuring the day plans to ensure they're easily readable and understood. Additionally, I'm focusing on providing the right types of attributes for the JSON output. I'm focusing on clarity and organization within the framework, preparing for the inclusion of detailed itinerary data.

**Finalizing Itinerary Details**

I am now focusing on refining the itinerary, specifically filling the gaps in Day 3. I've populated the main activities but am now working to include more specific details for each time slot, such as "Visit the Flamingo Wildlife Habitat" and "Explore Fremont Street Experience". I'm making sure each event aligns with the "Cheap Budget Couple" theme. I am now working on the time slots for Day 3.


**Constructing the Itinerary**

I've just structured the day plans and ensured they align with the couple's "Cheap" budget. I've populated the itinerary with a mix of free attractions, such as Bellagio, Mirage, and Fremont Street Experience, and I added "Cheap Budget" options like the Flamingo Wildlife Habitat. I am now working on confirming pricing, and ensuring each activity has the correct attributes, which include the essential \`imageUrl\` and \`geoCoordinates\`.


**Compiling JSON Details**

I'm currently working to populate the JSON structure with the specifics, including image URLs and detailed attraction descriptions. I'm focusing on ensuring all elements, especially the key attractions on Fremont Street and at the Bellagio, are accurately represented within the \`dailyPlan\` array.


`,
        },
        {
          text: `\`\`\`json
{
  "travelPlan": {
    "location": "Las Vegas",
    "duration": "3 Days",
    "travelerType": "Couple",
    "budget": "Cheap",
    "hotelOptions": [
      {
        "hotelName": "The LINQ Hotel + Experience",
        "address": "3535 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
        "price": "$40 - $180 per night (Varies greatly by season and day of the week)",
        "imageUrl": "https://images.unsplash.com/photo-1620392339899-3915f01358b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
        "geoCoordinates": {
          "latitude": 36.1175,
          "longitude": -115.1708
        },
        "rating": "4.0/5",
        "description": "A modern and energetic hotel with a prime center-Strip location. It's often one of the more affordable Caesars properties and is perfect for couples who want to be in the middle of the action. The LINQ Promenade right outside offers numerous dining and entertainment options."
      },
      {
        "hotelName": "Flamingo Las Vegas Hotel & Casino",
        "address": "3555 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
        "price": "$35 - $170 per night (An affordable classic, prices depend on dates)",
        "imageUrl": "https://images.unsplash.com/photo-1598619239851-248d2839d37f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        "geoCoordinates": {
          "latitude": 36.1162,
          "longitude": -115.1706
        },
        "rating": "3.5/5",
        "description": "A true Vegas classic with a vibrant, tropical theme. It boasts one of the best pool complexes on the Strip and a free wildlife habitat. Its center-strip location and consistently low prices make it a top budget choice for couples."
      },
      {
        "hotelName": "Excalibur Hotel & Casino",
        "address": "3850 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
        "price": "$30 - $150 per night (Excellent value on the South Strip)",
        "imageUrl": "https://images.unsplash.com/photo-1605833443588-81b3e5361042?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        "geoCoordinates": {
          "latitude": 36.0986,
          "longitude": -115.1759
        },
        "rating": "3.5/5",
        "description": "The iconic castle-themed hotel offers some of the lowest room rates on the Strip. While a bit dated, it's clean, fun, and connected by a free tram to Luxor and Mandalay Bay, making it easy to explore the south end of the Strip."
      },
      {
        "hotelName": "Fremont Hotel & Casino",
        "address": "200 E Fremont St, Las Vegas, NV 89101, USA",
        "price": "$45 - $160 per night (Great value for a Downtown experience)",
        "imageUrl": "https://images.pexels.com/photos/17997424/pexels-photo-17997424/free-photo-of-fremont-hotel-and-casino-in-las-vegas-nevada-usa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "geoCoordinates": {
          "latitude": 36.1706,
          "longitude": -115.1436
        },
        "rating": "3.5/5",
        "description": "Located in the heart of Downtown Las Vegas, right on the Fremont Street Experience. Perfect for couples who love a vibrant, non-stop party atmosphere with cheap food and drinks just steps away. A different, more vintage Vegas vibe than the Strip."
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "theme": "The Iconic South Strip & Dazzling Lights",
        "dailyPlan": [
          {
            "timeSlot": "10:00 AM - 11:30 AM",
            "placeName": "Welcome to Fabulous Las Vegas Sign",
            "placeDetails": "Start your trip with the essential photo op at this world-famous landmark. It's an iconic memory for any couple visiting Vegas for the first time. There's usually a line, but it moves quickly. It's free to visit, with parking available.",
            "imageUrl": "https://images.unsplash.com/photo-1533939318559-c2c3b53775db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
            "geoCoordinates": {
              "latitude": 36.0820,
              "longitude": -115.1728
            },
            "ticketPricing": "Free",
            "rating": "4.6/5",
            "bestTimeToVisit": "Mornings are less crowded and have better light for photos. Avoid midday due to the heat.",
            "travelSuggestion": "Easiest to reach via a short Uber/Lyft ride or the Deuce bus (get off at the 'Mandalay Bay' stop and walk south)."
          },
          {
            "timeSlot": "12:00 PM - 5:00 PM",
            "placeName": "South Strip Exploration & Themed Hotels",
            "placeDetails": "Walk north from the Vegas sign and explore the grand hotels. Wander through the Luxor's pyramid, Excalibur's castle, and New York-New York's replica city streets. Stop by the free M&M's World and the Coca-Cola Store for some fun, cheap attractions.",
            "imageUrl": "https://images.pexels.com/photos/2224851/pexels-photo-2224851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "geoCoordinates": {
              "latitude": 36.1023,
              "longitude": -115.1745
            },
            "ticketPricing": "Free (unless you buy souvenirs or food)",
            "rating": "4.5/5",
            "bestTimeToVisit": "Anytime, but the afternoon is a good way to stay inside and beat the heat.",
            "travelSuggestion": "This is a walking tour. Start at Mandalay Bay/Luxor (near the Vegas sign) and walk north. A free tram connects Excalibur, Luxor, and Mandalay Bay."
          },
          {
            "timeSlot": "6:00 PM - 11:00 PM",
            "placeName": "Bellagio Conservatory & Fountains",
            "placeDetails": "The ultimate free romantic experience in Vegas. The Bellagio Conservatory & Botanical Gardens is a stunning, ever-changing floral display inside the hotel. Afterwards, step outside to watch the magnificent Fountains of Bellagio show, a dazzling display of water, music, and light.",
            "imageUrl": "https://images.unsplash.com/photo-1583325958556-32211f32a487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
            "geoCoordinates": {
              "latitude": 36.1126,
              "longitude": -115.1767
            },
            "ticketPricing": "Free",
            "rating": "4.8/5",
            "bestTimeToVisit": "Evening. The fountains run every 30 mins until 8 PM, then every 15 mins until midnight. The Conservatory is beautiful anytime but magical at night.",
            "travelSuggestion": "A moderate walk or short bus ride north from the South Strip area. It's in the heart of the Strip."
          }
        ]
      },
      {
        "day": 2,
        "theme": "European Charm & Downtown Vibes",
        "dailyPlan": [
          {
            "timeSlot": "10:00 AM - 2:00 PM",
            "placeName": "The Venetian's Grand Canal Shoppes",
            "placeDetails": "Window shop and feel like you're in Italy. Walk along the indoor canals under a painted sky, watch the gondolas float by (riding is pricey, but watching is free!), and enjoy the romantic atmosphere. It's a great way to spend a few hours without spending a dime.",
            "imageUrl": "https://images.pexels.com/photos/2805562/pexels-photo-2805562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "geoCoordinates": {
              "latitude": 36.1215,
              "longitude": -115.1696
            },
            "ticketPricing": "Free to walk through",
            "rating": "4.7/5",
            "bestTimeToVisit": "Late morning or early afternoon to avoid the biggest crowds.",
            "travelSuggestion": "Located on the north end of the Strip. Easily accessible by walking or taking the Deuce bus."
          },
          {
            "timeSlot": "2:30 PM - 4:00 PM",
            "placeName": "Flamingo Wildlife Habitat",
            "placeDetails": "A serene and free oasis in the middle of the Strip's chaos. Located on the grounds of the Flamingo hotel, this habitat is home to Chilean flamingos, pelicans, swans, ducks, and turtles. It's a peaceful and charming escape for a couple.",
            "imageUrl": "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "geoCoordinates": {
              "latitude": 36.1169,
              "longitude": -115.1702
            },
            "ticketPricing": "Free",
            "rating": "4.5/5",
            "bestTimeToVisit": "Anytime during its open hours (typically dawn to dusk), but it's a nice mid-afternoon break.",
            "travelSuggestion": "A short walk from The Venetian, heading south on the Strip."
          },
          {
            "timeSlot": "7:00 PM - Late",
            "placeName": "Fremont Street Experience",
            "placeDetails": "Head to Downtown for the quintessential 'Old Vegas' experience. This pedestrian mall is covered by the Viva Vision canopy, the world's largest video screen, which puts on a spectacular light and sound show every hour. Enjoy free live music, street performers, and cheap drinks.",
            "imageUrl": "https://images.unsplash.com/photo-1558223619-e37a285d03a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
            "geoCoordinates": {
              "latitude": 36.1708,
              "longitude": -115.1450
            },
            "ticketPricing": "Free",
            "rating": "4.6/5",
            "bestTimeToVisit": "A must-visit in the evening. The main light shows start at 6:00 PM and run hourly.",
            "travelSuggestion": "Take the Deuce bus from the Strip directly to Downtown Las Vegas. It's the most budget-friendly and efficient way to get there."
          }
        ]
      },
      {
        "day": 3,
        "theme": "Relaxation, Views & Farewell",
        "dailyPlan": [
          {
            "timeSlot": "10:00 AM - 1:00 PM",
            "placeName": "Pool Time & Relaxation",
            "placeDetails": "Enjoy a key part of the Vegas experience: the hotel pool. It's a free amenity included with your stay (check for resort fees). Relax, soak up the sun, and recharge. It's the perfect low-key morning for a couple after two busy days.",
            "imageUrl": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1949&q=80",
            "geoCoordinates": {
              "latitude": 36.1162,
              "longitude": -115.1706
            },
            "ticketPricing": "Free (with hotel stay)",
            "rating": "4.2/5",
            "bestTimeToVisit": "Mornings are generally more relaxed and less crowded than afternoons.",
            "travelSuggestion": "Located at your hotel."
          },
          {
            "timeSlot": "2:00 PM - 5:00 PM",
            "placeName": "The LINQ Promenade",
            "placeDetails": "A lively open-air shopping, dining, and entertainment district. It's a great place for a stroll and has a more modern, casual vibe. While many shops are high-end, it's fun to window shop and people-watch. This is also where the High Roller observation wheel is located.",
            "imageUrl": "https://images.pexels.com/photos/15720490/pexels-photo-15720490/free-photo-of-the-high-roller-ferris-wheel-in-las-vegas-nevada-usa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "geoCoordinates": {
              "latitude": 36.1182,
              "longitude": -115.1695
            },
            "ticketPricing": "Free to walk through. Optional splurge: High Roller tickets are ~$25-40, often cheaper during the day.",
            "rating": "4.6/5",
            "bestTimeToVisit": "Afternoon or early evening.",
            "travelSuggestion": "Centrally located on the Strip, an easy walk from most mid-Strip hotels."
          },
          {
            "timeSlot": "6:00 PM - 9:00 PM",
            "placeName": "Eiffel Tower Viewing Deck (Light Show)",
            "placeDetails": "Instead of paying to go up, enjoy the view from the ground! The Eiffel Tower replica at Paris Las Vegas has a fantastic, free light show every 30 minutes at night. It's a very romantic sight and a great photo opportunity, located directly across from the Bellagio Fountains.",
            "imageUrl": "https://images.unsplash.com/photo-1558509313-9128f4139b98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
            "geoCoordinates": {
              "latitude": 36.1125,
              "longitude": -115.1723
            },
            "ticketPricing": "Free to watch the light show from the Strip. (Going up costs ~$25 per person).",
            "rating": "4.7/5 (for the view and show)",
            "bestTimeToVisit": "Evenings, from dusk until midnight, for the recurring light show.",
            "travelSuggestion": "A short walk from the LINQ Promenade. Combine this with a final viewing of the Bellagio Fountains for a perfect farewell."
          }
        ]
      }
    ]
  }
}
\`\`\``,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ]});


