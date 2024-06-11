const recommendations = {
    chocolate: {
        snack: "Dark chocolate with nuts",
        benefits: "Rich in antioxidants and healthy fats. Provides magnesium and iron.",
    },
    chips: {
        snack: "Baked vegetable chips",
        benefits: "Low in fat and calories. High in fiber and vitamins.",
    },
    ice_cream: {
        snack: "Frozen yogurt with fresh berries",
        benefits: "Contains probiotics for gut health and vitamins from the berries.",
    },
    soda: {
        snack: "Sparkling water with a splash of fruit juice",
        benefits: "Hydrates and provides vitamins without added sugars.",
    },
    candy: {
        snack: "Dried fruit",
        benefits: "High in fiber and natural sugars. Provides essential vitamins and minerals.",
    },
    cookies: {
        snack: "Whole grain biscuits with honey",
        benefits: "High in fiber and complex carbohydrates. Provides antioxidants from honey.",
    },
    cheese: {
        snack: "Low-fat cheese with whole grain crackers",
        benefits: "High in calcium and protein. Provides fiber from the crackers.",
    },
    nuts: {
        snack: "Mixed nuts (almonds, walnuts, cashews)",
        benefits: "High in healthy fats, protein, and fiber. Provides essential vitamins and minerals.",
    },
    yogurt: {
        snack: "Greek yogurt with honey and sliced fruit",
        benefits: "High in protein and probiotics. Provides vitamins from fruit and antioxidants from honey.",
    },
    hummus: {
        snack: "Whole grain pita bread with hummus",
        benefits: "Rich in plant-based protein and fiber. Provides vitamins and minerals from chickpeas.",
    },
    smoothie: {
        snack: "Green smoothie with spinach, banana, and almond milk",
        benefits: "Packed with vitamins, minerals, and antioxidants. Provides fiber and hydration.",
    },
    avocado: {
        snack: "Avocado toast on whole grain bread",
        benefits: "Rich in healthy fats, fiber, and vitamins. Provides antioxidants and promotes heart health.",
    },
    popcorn: {
        snack: "Air-popped popcorn with a sprinkle of nutritional yeast",
        benefits: "Low in calories and fat. High in fiber and provides essential vitamins and minerals.",
    },
    apple: {
        snack: "Apple slices with almond butter",
        benefits: "Provides fiber, vitamins, and minerals. Almond butter adds healthy fats and protein.",
    },
    grapes: {
        snack: "Fresh grapes - Eat whole or add to fruit salads.",
        benefits: "Rich in antioxidants and vitamins. Provides hydration."
    },
    berries: {
        snack: "Mixed berries - Eat fresh or add to yogurt or oatmeal.",
        benefits: "Rich in antioxidants and vitamins. Supports immune function."
    },
    carrots: {
        snack: "Carrot sticks - Peel, and cut into sticks. Eat raw or with hummus.",
        benefits: "High in beta-carotene and fiber. Supports eye health."
    },
    celery: {
        snack: "Celery sticks - Cut into sticks and eat raw or with peanut butter.",
        benefits: "Low in calories. High in fiber and water content. Supports digestion."
    },
    almonds: {
        snack: "Almonds - Eat raw or roasted. Add to salads or trail mix.",
        benefits: "Rich in healthy fats, protein, and fiber. Supports heart health."
    },
    walnuts: {
        snack: "Walnuts - Eat raw or roasted. Add to oatmeal or baked goods.",
        benefits: "High in omega-3 fatty acids. Supports brain health and reduces inflammation."
    },
    cashews: {
        snack: "Cashews - Eat raw or roasted. Add to stir-fries or trail mix.",
        benefits: "Good source of healthy fats and protein. Supports bone health."
    },
    hazelnuts: {
        snack: "Hazelnuts - Eat raw or roasted. Add to desserts or salads.",
        benefits: "Rich in antioxidants and vitamin E. Supports heart health."
    },
    pecans: {
        snack: "Pecans - Eat raw or roasted. Add to baked goods or oatmeal.",
        benefits: "High in antioxidants and healthy fats. Supports digestion."
    },
    pistachios: {
        snack: "Pistachios - Eat raw or roasted. Enjoy as a snack on their own.",
        benefits: "Rich in protein, fiber, and antioxidants. Supports weight management."
    },
    brazilnuts: {
        snack: "Brazilnuts - Eat raw or roasted. Enjoy as a snack or add to granola.",
        benefits: "Excellent source of selenium. Supports thyroid function and immunity."
    },
    macadamias: {
        snack: "Macadamias - Eat raw or roasted. Add to desserts or savory dishes.",
        benefits: "High in monounsaturated fats. Supports heart health."
    },
    peanuts: {
        snack: "Peanuts - Eat raw or roasted. Enjoy as peanut butter or add to stir-fries.",
        benefits: "Rich in protein and healthy fats. Supports muscle growth and repair."
    },
    seaweed: {
        snack: "Seaweed snacks - Enjoy seaweed snacks as a crunchy snack on their own.",
        benefits: "High in iodine and antioxidants. Supports thyroid health."
    },
    edamame: {
        snack: "Edamame - Boil or steam edamame and eat as a snack or add to salads.",
        benefits: "Rich in protein and fiber. Supports muscle recovery and weight management."
    },
    guacamole: {
        snack: "Guacamole - Enjoy with vegetable sticks, tortilla chips, or as a spread.",
        benefits: "High in healthy fats and fiber. Supports brain health and satiety."
    },
    oatmeal: {
        snack: "Oatmeal - Cook oats with water or milk and add toppings like fruit or nuts.",
        benefits: "High in fiber and antioxidants. Supports heart health and stabilizes blood sugar."
    },
    bananas: {
        snack: "Bananas - Enjoy bananas on their own or add to smoothies or oatmeal.",
        benefits: "Rich in potassium and vitamins. Supports heart health and muscle function."
    },
    oranges: {
        snack: "Oranges - Enjoy oranges whole or as fresh juice.",
        benefits: "High in vitamin C and antioxidants. Supports immune function and skin health."
    },
    pineapple: {
        snack: "Pineapple - Enjoy fresh pineapple slices or add to smoothies or salads.",
        benefits: "Rich in vitamin C and bromelain. Supports digestion and reduces inflammation."
    },
    kiwi: {
        snack: "Kiwi - Cut in half and scoop out the flesh or slice and eat with the skin.",
        benefits: "High in vitamin C and fiber. Supports immune function and digestion."
    },
    mango: {
        snack: "Mango - Peel and slice or cut into cubes and enjoy fresh or in fruit salads.",
        benefits: "Rich in vitamins and antioxidants. Supports eye health and immune function."
    },
    papaya: {
        snack: "Papaya - Peel, remove seeds, and slice or cube the flesh. Enjoy fresh or in smoothies.",
        benefits: "Rich in vitamins and enzymes. Supports digestion and skin health."
    },
    strawberries: {
        snack: "Strawberries - Wash and eat whole or slice and add to salads or desserts.",
        benefits: "High in vitamin C and antioxidants. Supports heart health and brain function."
    },
    blueberries: {
        snack: "Blueberries - Rinse and eat fresh or add to yogurt, cereal, or smoothies.",
        benefits: "Rich in antioxidants and fiber. Supports brain health and reduces oxidative stress."
    },
    raspberries: {
        snack: "Raspberries - Wash and eat fresh or add to oatmeal, yogurt, or desserts.",
        benefits: "Rich in antioxidants and fiber. Supports digestive health and reduces inflammation."
    },
    chicken: {
        snack: "Grilled chicken breast slices",
        benefits: "High in protein and low in fat. Supports muscle growth and repair.",
    },
    turkey: {
        snack: "Turkey breast slices with whole grain mustard",
        benefits: "Lean protein source. Low in fat and calories. Rich in B vitamins.",
    },
    salmon: {
        snack: "Smoked salmon on whole grain crackers",
        benefits: "Rich in omega-3 fatty acids, protein, and vitamins D and B12. Promotes heart health.",
    },
    tuna: {
        snack: "Tuna salad with Greek yogurt and celery sticks",
        benefits: "High in protein and omega-3 fatty acids. Supports brain and heart health.",
    },
    lamb: {
        snack: "Grilled lamb skewers",
        benefits: "High in protein, iron, and zinc. Supports muscle growth and immune function.",
    },
    duck: {
        snack: "Duck breast slices with orange glaze",
        benefits: "Rich in protein and healthy fats. Provides vitamins B and iron.",
    },
    shrimp: {
        snack: "Steamed shrimp with lemon",
        benefits: "Low in calories and high in protein. Provides vitamins D and B12, and selenium.",
    },
    crab: {
        snack: "Crab meat with avocado slices",
        benefits: "High in protein and low in fat. Rich in vitamins B12 and zinc.",
    },
    lobster: {
        snack: "Lobster meat with lemon butter",
        benefits: "High in protein and low in fat. Provides vitamins A, B, and E, and minerals like zinc and phosphorus.",
    },
    sardines: {
        snack: "Sardines on whole grain toast",
        benefits: "Rich in omega-3 fatty acids, protein, and calcium. Supports heart and bone health.",
    },
    cod: {
        snack: "Baked cod fillets with herbs",
        benefits: "Low in fat and high in protein. Provides vitamins B6 and B12, and omega-3 fatty acids.",
    },
    mackerel: {
        snack: "Grilled mackerel fillets",
        benefits: "Rich in omega-3 fatty acids, protein, and vitamins D and B12. Promotes heart health.",
    },
    scallops: {
        snack: "Seared scallops with garlic",
        benefits: "High in protein and low in fat. Provides vitamins B12 and minerals like magnesium and potassium.",
    },
    clams: {
        snack: "Steamed clams with garlic and parsley",
        benefits: "Rich in protein, iron, and vitamin B12. Supports immune function and energy production.",
    },
};

function getRecommendation() {
    const cravingInput = document.getElementById("craving-input").value.toLowerCase();
    const recommendation = recommendations[cravingInput];

    if (recommendation) {
        document.getElementById("recommendation").innerHTML = `
            <p><strong>Snack Recommendation:</strong> ${recommendation.snack}</p>
            <p><strong>Nutritional Benefits:</strong> ${recommendation.benefits}</p>
        `;
    } else {
        document.getElementById("recommendation").innerHTML = "Sorry, we don't have a recommendation for that craving.";
    }
}
