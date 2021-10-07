// https://www.greencrossvets.com.au/pet-library/articles-of-interest/puppy-development-life-stages/
const PUPPY_GROWTH_STAGE = [
    {
        age: 'week 1',
        content:
            "Expect your puppy to spend a lot of time sleeping. Their eyes and ears haven't opened yet so they can't see or hear your, and their sense of smell hasn't developed. Your puppy will regularly drink their mother's milk as their only source of nutrition for the first four weeks",
    },
    {
        age: 'week 2',
        content:
            'By day 10-12 their eyes are open. Starting from week 2, your puppy will need to be wormed every 2 weeks until they are 12 weeks old.',
    },
    {
        age: 'week 3',
        content:
            "Your puppy's senses are developing. Their ears will open up, they will become inquisitive about their surroundings, and they will start to walk and bark. Their puppy teeth will also start coming in.",
    },
    {
        age: 'week 4',
        content:
            "Now is an ideal time to introduce solid food into your puppy's diet.",
    },
    {
        age: 'week 5',
        content:
            'Puppies will start to interact more with their littermates and humans, and will start to recognise their name. By now, ensure your home is puppy proofed and make sure your pet is introduced to other members of the household - including other pets.',
    },
    {
        age: 'week 6',
        content:
            'Puppy school can begin any time from week eight, up to week 16 at the lates.',
    },
    {
        age: 'week 8',
        content: "If you're adopting, you can now bring your puppy home!",
    },
    {
        age: 'week 13',
        content:
            'From the age of 3-6 months, your puppy should be wormed every month. You can also start a heartworm prevention program from 12 weeks. See your Vet for more information about this injection.',
    },
    {
        age: 'week 14',
        content:
            "Your puppy will have their third vaccination and this is the time your vet will discuss and determine your puppy's long-term vaccination program with you. Their recommendations will be guided by your puppy's lifestyle and environment.",
    },
    {
        age: 'month 6',
        content:
            'Your puppy is now an adolescent and is still growing. While they should be getting better at toilet control and walking on a lead, they are still learning to be physically co-ordinated and accidents can happen. Five to six months is the ideal time to have a conversation with your vet around the most appropriate age to desex your pet.',
    },
    {
        age: 'month 7',
        content:
            "Expect your puppy to be chewing and biting as their permanent teeth are still growing in. Provide plenty of toys to chew on and start teaching them the difference between what they're allowed to gnaw on and what is off-limits. ",
    },
    {
        age: 'month 12',
        content:
            "You will need to transition your puppy to adult dog good, but the timing will depend on your puppy's breed size. Small and medium breeds reach adult height and weight and 12 months. Large and giant breeds take longer, reaching their adult height and weight at 18-24 months.",
    },
    {
        age: 'month 13',
        content:
            "It's important to help maintain your dog's good health. An annual booster vaccination is required for maintaining immunity from common preventable diseases. Six-monthly health checks as your dog progresses through their life stages are recommended for the early detection of disease and illness, ensuring that your dog lives a happy, healthy life.",
    },
];

// https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/
const DOG_AGE_IN_HUMAN_YEAR = {
    'Small(-20lb)': {
        1: 15,
        2: 24,
        3: 28,
        4: 32,
        5: 36,
        6: 40,
        7: 44,
        8: 48,
        9: 52,
        10: 56,
        11: 60,
        12: 64,
        13: 68,
        14: 72,
        15: 76,
        16: 80,
    },
    'Medium(21-50lb)': {
        1: 15,
        2: 24,
        3: 28,
        4: 32,
        5: 36,
        6: 42,
        7: 47,
        8: 51,
        9: 56,
        10: 60,
        11: 65,
        12: 69,
        13: 74,
        14: 78,
        15: 83,
        16: 87,
    },
    'Large(51-100lb)': {
        1: 15,
        2: 24,
        3: 28,
        4: 32,
        5: 36,
        6: 45,
        7: 50,
        8: 55,
        9: 61,
        10: 66,
        11: 72,
        12: 77,
        13: 82,
        14: 88,
        15: 93,
        16: 99,
    },
    'Giant(100+lb)': {
        1: 12,
        2: 22,
        3: 31,
        4: 38,
        5: 45,
        6: 49,
        7: 56,
        8: 64,
        9: 71,
        10: 79,
        11: 86,
        12: 93,
        13: 100,
        14: 107,
        15: 114,
        16: 121,
    },
};

// https://www.canadapetcare.com/blog/pet-holidays-calendar/
const PET_HOLIDAY_MONTH = {
    january: [
        'Walk Your Pet Month',
        'National Train Your Dog Month',
        'Pet Obesity Awareness Month',
        'Unchain a Dog Month',
        'Adopt a Rescued Bird Month',
    ],
    february: [
        'National Prevent a Litter Month',
        'Responsible Pet Owners Month',
        'Dog Training Education Month',
        'Pet Dental Health Month',
        'Spay/Neuter Awareness Month',
        'National Cat Health Month',
        'Beat the Heat Month',
    ],
    march: ['Poison Prevention Awareness Month'],
    april: [
        'Heartworm Awareness Month',
        'Active Dog Month',
        'Prevention of Cruelty to Animals Month',
        'National Pet First Aid Awareness Month',
        'National Adopt a Greyhound Month',
        'Canine Fitness Month',
        'Prevent Lyme Disease in Dogs Month',
    ],
    may: [
        'National Pet Month',
        'National Foster Care Month',
        'National Service Dog Eye Examination Month',
        'Chip Your Pet Month',
        'Pet Cancer Awareness Month',
        'Lyme Disease Prevention Month',
        'Responsible Animal Guardian Month',
    ],
    june: [
        'National Adopt a Cat Month',
        'National Pet Preparedness Month',
        'National Microchipping Month',
        'Adopt-a-Shelter-Cat Month',
        'National Foster a Pet Month',
    ],
    july: [
        'National Lost Pet Prevention Month',
        'National Pet Hydration Awareness Month',
        'Dog House Repair Month',
        'National Feed a Rescue Pet Week(late july)',
    ],
    august: [
        'National Wellness Month',
        'National Immunization Awareness Month',
        'Rawgust',
    ],
    september: [
        'Happy Healthy Cat Month',
        'National Pet Insurance Month',
        'Pet-Sitter Education Month',
        'Animal Pain Awareness Month',
        'National Service Dog Month',
    ],
    october: [
        'National Animal Safety and Protection Month',
        'Adopt a Shelter Dog Month',
        'National Pet Wellness Month',
        'National Pit Bull Awareness Month',
        'Adopt-A-Dog Month',
    ],
    november: [
        'Pet Cancer Awareness Month',
        'National Senior Pet Month',
        'Adopt a Senior Pet Month',
        'National Diabetes Month',
    ],
    december: ['National Cat Lovers Month'],
};

const PET_HOLIDAY_DAYS = {
    // January
    '01-02': ['National Pet Travel Safety Day', 'Happy Mew Year for Cats Day'],
    '01-08': ['National Labrador Retriever Day', 'Bubble Bath Day'],
    '01-14': ['National Dress up Your Pet Day'],
    '01-22': ['National Answer Your Cat’s Question Day'],
    '01-24': ['Change A Pet’s Life Day', 'Peanut Butter Day'],
    '01-29': ['Seeing Eye Guide Dog Anniversary'],

    // February
    '02-02': ['Sled Dog Day'],
    '02-03': ['National Golden Retriever Day'],
    '02-07': ['Have a Heart for Chained Dogs Week(7~14)'],
    '02-08': ['Have a Heart for Chained Dogs Week(7~14)'],
    '02-09': ['Have a Heart for Chained Dogs Week(7~14)'],
    '02-10': ['Have a Heart for Chained Dogs Week(7~14)'],
    '02-11': ['Have a Heart for Chained Dogs Week(7~14)'],
    '02-12': ['Have a Heart for Chained Dogs Week(7~14)'],
    '02-13': ['Have a Heart for Chained Dogs Week(7~14)'],
    '02-14': [
        'Have a Heart for Chained Dogs Week(7~14)',
        'Pet Theft Awareness Day',
    ],
    '02-19': ['International Tug-of-War Day'],
    '02-20': ['Love Your Pet Day'],
    '02-22': ['Walking The Dog Day'],
    '02-23': [
        'National Justice For Animals Week(23~29)',
        'National Dog Biscuit Day',
    ],
    '02-24': ['National Justice For Animals Week(23~29)'],
    '02-25': ['National Justice For Animals Week(23~29)', 'World Spay Day'],
    '02-26': ['National Justice For Animals Week(23~29)'],
    '02-27': ['National Justice For Animals Week(23~29)'],
    '02-28': ['National Justice For Animals Week(23~29)'],
    '02-29': ['National Justice For Animals Week(23~29)'],

    // March
    '03-06': ['Iditarod Trail Sled Dog Raise begins'],
    '03-07': ['Professional Pet Sitters Week(7-13)'],
    '03-08': ['Professional Pet Sitters Week(7-13)'],
    '03-09': ['Professional Pet Sitters Week(7-13)'],
    '03-10': ['Professional Pet Sitters Week(7-13)'],
    '03-11': ['Professional Pet Sitters Week(7-13)'],
    '03-12': ['Professional Pet Sitters Week(7-13)'],
    '03-13': ['Professional Pet Sitters Week(7-13)', 'K9 Veterans Day'],
    '03-23': ['National Puppy Day', 'Cuddly Kitten Day'],
    '03-28': ['Respect Your Cat Day'],
    '03-30': ['Take a Walk in the Park Day'],

    // April
    '04-01': [
        'International Pooper Scooper Week(1-7)',
        'National Raw Feeding Week(1-7)',
    ],
    '04-02': [
        'International Pooper Scooper Week(1-7)',
        'National Raw Feeding Week(1-7)',
    ],
    '04-03': [
        'International Pooper Scooper Week(1-7)',
        'National Raw Feeding Week(1-7)',
        'Every Day is Tag Day',
    ],
    '04-04': [
        'International Pooper Scooper Week(1-7)',
        'National Raw Feeding Week(1-7)',
        'World Stray Animals Day',
    ],
    '04-05': [
        'International Pooper Scooper Week(1-7)',
        'National Raw Feeding Week(1-7)',
    ],
    '04-06': [
        'International Pooper Scooper Week(1-7)',
        'National Raw Feeding Week(1-7)',
        'National Siamese Cat Day',
    ],
    '04-07': [
        'International Pooper Scooper Week(1-7)',
        'National Raw Feeding Week(1-7)',
    ],
    '04-08': ['National Catahoula Day', 'National Dog Fighting Awareness Day'],
    '04-10': ['National Hug Your Dog Day'],
    '04-11': [
        'National Raw Feeding Week(11-17)',
        'National Pet Day',
        'Celebrate Shelter Pets Day',
        'Dog Therapy Appreciation Day',
    ],
    '04-12': ['National Raw Feeding Week(11-17)'],
    '04-13': ['National Raw Feeding Week(11-17)'],
    '04-14': ['National Raw Feeding Week(11-17)'],
    '04-15': ['National Raw Feeding Week(11-17)'],
    '04-16': ['National Raw Feeding Week(11-17)'],
    '04-17': [
        'National Raw Feeding Week(11-17)',
        'National Pet ID Week(17-24)',
    ],
    '04-18': ['National Pet ID Week(17-24)'],
    '04-19': ['National Pet ID Week(17-24)', 'National Cat Lady Day'],
    '04-20': ['National Pet ID Week(17-24)'],
    '04-21': ['National Pet ID Week(17-24)', 'Bulldogs are Beautiful Day'],
    '04-22': ['National Pet ID Week(17-24)', 'National Beagle Day'],
    '04-23': ['National Pet ID Week(17-24)', 'National Lost Dog Awareness Day'],
    '04-24': ['National Pet ID Week(17-24)'],
    '04-25': ['World Veterinary Day (last Saturday in April)'],
    '04-26': [
        'National Pet Parents Day (last Sunday in April)',
        'National Kids and Pets Day.',
    ],
    '04-27': ['National Little Pampered Dog Day'],
    '04-28': ['International Guide Dog Day (last Wednesday in April)'],
    '04-30': [
        'National Therapy Animal Day',
        'Adopt a Shelter Pet Day.',
        'Hairball Awareness Day. (Last Friday in April)',
        'National Tabby Day',
    ],

    // May
    '05-01': ['National Purebred Dog Day'],
    '05-02': [
        'Dog Anxiety Awareness Week(2-8)',
        'Be Kind to Animals Week(2-8)',
        'National Pet Week(2-8)',
        'Mayday for Mutts (first Sunday of May)',
    ],
    '05-03': [
        'Dog Anxiety Awareness Week(2-8)',
        'Be Kind to Animals Week(2-8)',
        'National Pet Week(2-8)',
        'Puppy Mill Action Week(3-8)',
        'National Specially-Abled Pets Day',
    ],
    '05-04': [
        'Dog Anxiety Awareness Week(2-8)',
        'Be Kind to Animals Week(2-8)',
        'National Pet Week(2-8)',
        'Puppy Mill Action Week(3-8)',
    ],
    '05-05': [
        'Dog Anxiety Awareness Week(2-8)',
        'Be Kind to Animals Week(2-8)',
        'National Pet Week(2-8)',
        'Puppy Mill Action Week(3-8)',
    ],
    '05-06': [
        'Dog Anxiety Awareness Week(2-8)',
        'Be Kind to Animals Week(2-8)',
        'National Pet Week(2-8)',
        'Puppy Mill Action Week(3-8)',
    ],
    '05-07': [
        'Dog Anxiety Awareness Week(2-8)',
        'Be Kind to Animals Week(2-8)',
        'National Pet Week(2-8)',
        'Puppy Mill Action Week(3-8)',
    ],
    '05-08': [
        'Dog Anxiety Awareness Week(2-8)',
        'Be Kind to Animals Week(2-8)',
        'National Pet Week(2-8)',
        'Puppy Mill Action Week(3-8)',
        'National Dog Mom Day',
        'National Animal Disaster Preparedness Day',
    ],
    '05-10': ['German Shepherd Day'],
    '05-14': ['International Chihuahua Appreciation Day'],
    '05-20': ['National Rescue Dog Day'],
    '05-30': ['International Cavalier King Charles Spaniel Day'],

    // June
    '06-01': ['International Sheltie Day'],
    '06-04': ['Hug Your Cat Day'],
    '06-06': ['Pet Appreciation Week(6-12)'],
    '06-07': ['Pet Appreciation Week(6-12)'],
    '06-08': [
        'Pet Appreciation Week(6-12)',
        'National Best Friends Day',
        'World Pet Memorial Day',
    ],
    '06-09': ['Pet Appreciation Week(6-12)'],
    '06-10': ['Pet Appreciation Week(6-12)'],
    '06-11': ['Pet Appreciation Week(6-12)'],
    '06-12': [
        'Pet Appreciation Week(6-12)',
        'Westminster Kennel Club Annual Dog Show',
    ],
    '06-13': ['Westminster Kennel Club Annual Dog Show'],
    '06-19': ['National Garfield the Cat Day'],
    '06-20': ['Animal Rights Awareness Week(20-26)'],
    '06-21': [
        'Animal Rights Awareness Week(20-26)',
        'Take Your Pet to Work Week(21-25)',
        'Dog Party Day',
        'National Dachshund Day',
    ],
    '06-22': [
        'Animal Rights Awareness Week(20-26)',
        'Take Your Pet to Work Week(21-25)',
        'Take Your Cat to Work Day',
    ],
    '06-23': [
        'Animal Rights Awareness Week(20-26)',
        'Take Your Pet to Work Week(21-25)',
    ],
    '06-24': [
        'Animal Rights Awareness Week(20-26)',
        'Take Your Pet to Work Week(21-25)',
        'Cat World Domination Day',
    ],
    '06-25': [
        'Animal Rights Awareness Week(20-26)',
        'Take Your Pet to Work Week(21-25)',
        'Take Your Dog To Work Day',
    ],
    '06-26': ['Animal Rights Awareness Week(20-26)'],

    // July
    '07-01': ['ID Your Pet Day'],
    '07-11': ['All-American Pet Photo Day'],
    '07-15': ['National Pet Fire Safety Day'],
    '07-21': ['National Craft for your Local Shelters Day'],
    '07-26': ['National Dog Photography Day'],
    '07-31': ['National Mutt Day'],

    // August
    '08-01': [
        'International Assistance Dog Week(1-7)',
        'DOGust Universal Birthday for Shelter Dogs',
    ],
    '08-02': ['International Assistance Dog Week(1-7)'],
    '08-03': ['International Assistance Dog Week(1-7)'],
    '08-04': ['International Assistance Dog Week(1-7)', 'Assistance Dog Day'],
    '08-05': ['International Assistance Dog Week(1-7)', 'Work Like a Dog Day'],
    '08-06': ['International Assistance Dog Week(1-7)', 'Fresh Breath Day'],
    '08-07': ['International Assistance Dog Week(1-7)'],
    '08-08': ['International Cat Day'],
    '08-10': ['Spoil Your Dog Day', 'National Lazy Day'],
    '08-15': ['National Check the Chip Day'],
    '08-16': ['Saint Roch’s Day'],
    '08-17': ['Black Cat Appreciation Day'],
    '08-21': ['International Homeless Animals’ Day'],
    '08-22': ['National Take Your Cat To The Vet Day'],
    '08-26': ['National Dog Day'],
    '08-28': ['Rainbow Bridge Remembrance Day'],
    '08-30': ['National Holistic Pet Day'],

    // September
    '09-01': ['Ginger Cat Appreciation Day'],
    '09-08': ['National Dog Walker Appreciation Day'],
    '09-12': ['National Pet Memorial Day', 'National Hug Your Hound Day'],
    '09-13': ['Scooby-Doo Day', 'Pet Birth Defect Awareness Day'],
    '09-18': ['Puppy Mill Awareness Day', 'Responsible Dog Ownership Day'],
    '09-19': ['National Meow Like a Pirate Day'],
    '09-20': [
        'Adopt a Less-Adoptable-Pet Week(20-26)',
        'National Dog Week(20-26)',
        'Deaf Pet Awareness Week(20-26)',
    ],
    '09-21': [
        'Adopt a Less-Adoptable-Pet Week(20-26)',
        'National Dog Week(20-26)',
        'Deaf Pet Awareness Week(20-26)',
    ],
    '09-22': [
        'Adopt a Less-Adoptable-Pet Week(20-26)',
        'National Dog Week(20-26)',
        'Deaf Pet Awareness Week(20-26)',
        'National Walk ‘n’ Roll Dog Day',
    ],
    '09-23': [
        'Adopt a Less-Adoptable-Pet Week(20-26)',
        'National Dog Week(20-26)',
        'Deaf Pet Awareness Week(20-26)',
        'Dogs in Politics Day (Checkers Day)',
        'Remember Me Thursday',
    ],
    '09-24': [
        'Adopt a Less-Adoptable-Pet Week(20-26)',
        'National Dog Week(20-26)',
        'Deaf Pet Awareness Week(20-26)',
    ],
    '09-25': [
        'Adopt a Less-Adoptable-Pet Week(20-26)',
        'National Dog Week(20-26)',
        'Deaf Pet Awareness Week(20-26)',
    ],
    '09-26': [
        'Adopt a Less-Adoptable-Pet Week(20-26)',
        'National Dog Week(20-26)',
        'Deaf Pet Awareness Week(20-26)',
    ],
    '09-28': ['World Rabies Day'],

    // October
    '10-01': [
        'National Walk Your Dog Week(first week of October)',
        'National Black Dog Day',
        'National Fire Pup Day',
    ],
    '10-02': [
        'National Walk Your Dog Week(first week of October)',
        'Poodle Day',
    ],
    '10-03': ['National Walk Your Dog Week(first week of October)'],
    '10-04': [
        'National Walk Your Dog Week(first week of October)',
        'World Pet Day',
        'World Animal Day',
    ],
    '10-05': ['National Walk Your Dog Week(first week of October)'],
    '10-06': ['National Walk Your Dog Week(first week of October)'],
    '10-07': ['National Walk Your Dog Week(first week of October)'],
    '10-09': ['Pet Obesity Awareness Day'],
    '10-16': ['National Feral Cat Day'],
    '10-17': ['Veterinary Technician Week(17-23)', 'National Fetch Day'],
    '10-18': ['Veterinary Technician Week(17-23)'],
    '10-19': ['Veterinary Technician Week(17-23)'],
    '10-20': ['Veterinary Technician Week(17-23)'],
    '10-21': [
        'Veterinary Technician Week(17-23)',
        'National Pets for Veterans Day',
    ],
    '10-22': ['Veterinary Technician Week(17-23)'],
    '10-23': ['Veterinary Technician Week(17-23)'],
    '10-27': ['National Black Cat Day'],
    '10-28': ['Plush Animal Lovers Day'],
    '10-29': ['National Cat Day'],
    '10-30': ['National Pit Bull Awareness Day'],

    // Nomvember
    '11-01': [
        'National Animal Shelter and Rescue Appreciation Week(1-7)',
        'International Pet Groomer Appreciation Day',
        'National Cook for Your Pets Day',
    ],
    '11-02': ['National Animal Shelter and Rescue Appreciation Week(1-7)'],
    '11-03': ['National Animal Shelter and Rescue Appreciation Week(1-7)'],
    '11-04': ['National Animal Shelter and Rescue Appreciation Week(1-7)'],
    '11-05': ['National Animal Shelter and Rescue Appreciation Week(1-7)'],
    '11-06': ['National Animal Shelter and Rescue Appreciation Week(1-7)'],
    '11-07': [
        'National Animal Shelter and Rescue Appreciation Week(1-7)',
        'National Canine Lymphoma Awareness Day',
    ],
    '11-16': ['National Slobber Appreciation Day'],
    '11-17': ['Take A Hike Day', 'National Black Cat Day'],
    '11-20': ['National Adoption Day'],

    // December
    '12-02': ['National Mutt Day'],
    '12-05': ['Celebrate Shelter Pets Day'],
    '12-09': ['International Day of Veterinary Medicine'],
    '12-15': ['National Cat Herders Day'],
};

module.exports = { PET_HOLIDAY_MONTH, PET_HOLIDAY_DAYS };
