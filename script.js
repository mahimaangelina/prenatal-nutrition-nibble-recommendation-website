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