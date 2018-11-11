const words = [
    {word: "lemon"},
    {word: "teaser"},
    {word: "chalice"},
    {word: "fled"},
    {word: "epee"},
    {word: "hazel"},
    {word: "minotaur"},
    {word: "sentinel"},
    {word: "malaga"},
    {word: "oxen"},
    {word: "wise"},
    {word: "oiks"},
    {word: "ladida"},
    {word: "nunn"},
    {word: "nape"},
    {word: "pain"},
    {word: "elk"},
    {word: "zod"},
    {word: "existence"},
    {word: "jolt"},
    {word: "brochette"},
    {word: "imrie"},
    {word: "beaker"},
    {word: "mire"},
    {word: "rand"},
    {word: "bewes"},
    {word: "obese"},
    {word: "hades"},
    {word: "eke"},
    {word: "tripe"},
    {word: "narnia"},
    {word: "wye"},
    {word: "denim"},
    {word: "ernie"},
    {word: "sue"},
    {word: "cpu"},
    {word: "ruled"},
    {word: "she"},
    {word: "speed"},
    {word: "mud"}
];/*[
    {
     "word": "able",
     "clues": [
      "capable"
     ]
    },
    {
     "word": "absolute",
     "clues": [
      "perfect or complete"
     ]
    },
    {
     "word": "abstract",
     "clues": [
      "existing only in the mind"
     ]
    },
    {
     "word": "abundant",
     "clues": [
      "plentiful"
     ]
    },
    {
     "word": "active",
     "clues": [
      "vigorous"
     ]
    },
    {
     "word": "addicted",
     "clues": [
      "hooked"
     ]
    },
    {
     "word": "agile",
     "clues": [
      "nimble",
      " spry",
      " quick"
     ]
    },
    {
     "word": "alive",
     "clues": [
      "live"
     ]
    },
    {
     "word": "aloof",
     "clues": [
      "distant"
     ]
    },
    {
     "word": "amber",
     "clues": [
      "yellowish"
     ]
    },
    {
     "word": "ambiguous",
     "clues": [
      "equivocal"
     ]
    },
    {
     "word": "ample",
     "clues": [
      "sizable",
      " capacious"
     ]
    },
    {
     "word": "annual",
     "clues": [
      "yearly"
     ]
    },
    {
     "word": "applied",
     "clues": [
      "concerned with concrete problems or data"
     ]
    },
    {
     "word": "arrogant",
     "clues": [
      "self-important"
     ]
    },
    {
     "word": "artificial",
     "clues": [
      "unreal",
      " unnatural"
     ]
    },
    {
     "word": "assertive",
     "clues": [
      "self-assured"
     ]
    },
    {
     "word": "astonishing",
     "clues": [
      "astounding",
      " staggering"
     ]
    },
    {
     "word": "attractive",
     "clues": [
      "pleasing to the eye or mind"
     ]
    },
    {
     "word": "automatic",
     "clues": [
      "operating with minimal human intervention"
     ]
    },
    {
     "word": "available",
     "clues": [
      "obtainable"
     ]
    },
    {
     "word": "aware",
     "clues": [
      "mindful"
     ]
    },
    {
     "word": "awful",
     "clues": [
      "dreadful",
      " terrible"
     ]
    },
    {
     "word": "bad",
     "clues": [
      "immoral",
      " evil"
     ]
    },
    {
     "word": "bad",
     "clues": [
      "below average in quality or performance",
      " defective"
     ]
    },
    {
     "word": "bad",
     "clues": [
      "spoiled",
      " spoilt",
      " capable of harming"
     ]
    },
    {
     "word": "bald",
     "clues": [
      "lacking hair"
     ]
    },
    {
     "word": "bare",
     "clues": [
      "lacking its natural or customary covering"
     ]
    },
    {
     "word": "basic",
     "clues": [
      "pertaining to a base or basis"
     ]
    },
    {
     "word": "beautiful",
     "clues": [
      "possessing beauty"
     ]
    },
    {
     "word": "bitter",
     "clues": [
      "acrimonious",
      " resentful"
     ]
    },
    {
     "word": "bitter",
     "clues": [
      "bitter-tasting"
     ]
    },
    {
     "word": "black",
     "clues": [
      "achromatic"
     ]
    },
    {
     "word": "black",
     "clues": [
      "without cream or sugar"
     ]
    },
    {
     "word": "bland",
     "clues": [
      "tasteless",
      " insipid",
      " flavorless"
     ]
    },
    {
     "word": "blank",
     "clues": [
      "empty",
      " not filled in"
     ]
    },
    {
     "word": "blind",
     "clues": [
      "unsighted"
     ]
    },
    {
     "word": "blonde",
     "clues": [
      "light-haired"
     ]
    },
    {
     "word": "bloody",
     "clues": [
      "covered with blood"
     ]
    },
    {
     "word": "bold",
     "clues": [
      "fearless and daring"
     ]
    },
    {
     "word": "brave",
     "clues": [
      "courageous",
      " fearless"
     ]
    },
    {
     "word": "broken",
     "clues": [
      "physically separated into pieces"
     ]
    },
    {
     "word": "brown",
     "clues": [
      "having a brown color"
     ]
    },
    {
     "word": "central",
     "clues": [
      "in or near a center"
     ]
    },
    {
     "word": "certain",
     "clues": [
      "sure"
     ]
    },
    {
     "word": "charismatic",
     "clues": [
      "possessing a magnetic personality"
     ]
    },
    {
     "word": "cheap",
     "clues": [
      "inexpensive"
     ]
    },
    {
     "word": "childish",
     "clues": [
      "infantile"
     ]
    },
    {
     "word": "clean",
     "clues": [
      "free from dirt"
     ]
    },
    {
     "word": "clear",
     "clues": [
      "free from clouds or mist or haze"
     ]
    },
    {
     "word": "clear",
     "clues": [
      "well-defined"
     ]
    },
    {
     "word": "close",
     "clues": [
      "close in relevance or relationship"
     ]
    },
    {
     "word": "close",
     "clues": [
      "near"
     ]
    },
    {
     "word": "closed",
     "clues": [
      "shut",
      " unopen"
     ]
    },
    {
     "word": "cold",
     "clues": [
      "physically cold"
     ]
    },
    {
     "word": "cold",
     "clues": [
      "without human warmth or emotion"
     ]
    },
    {
     "word": "color-blind",
     "clues": [
      "unable to distinguish colors"
     ]
    },
    {
     "word": "colorful",
     "clues": [
      "vivid in color"
     ]
    },
    {
     "word": "comfortable",
     "clues": [
      "comfy"
     ]
    },
    {
     "word": "common",
     "clues": [
      "average or ordinary or usual"
     ]
    },
    {
     "word": "common",
     "clues": [
      "belonging to a community"
     ]
    },
    {
     "word": "common",
     "clues": [
      "mutual"
     ]
    },
    {
     "word": "complete",
     "clues": [
      "having every necessary part"
     ]
    },
    {
     "word": "complex",
     "clues": [
      "complicated"
     ]
    },
    {
     "word": "comprehensive",
     "clues": [
      "all-including"
     ]
    },
    {
     "word": "concrete",
     "clues": [
      "material"
     ]
    },
    {
     "word": "conscious",
     "clues": [
      "aware"
     ]
    },
    {
     "word": "conservative",
     "clues": [
      "resistant to change"
     ]
    },
    {
     "word": "constant",
     "clues": [
      "steadfast",
      " unwavering"
     ]
    },
    {
     "word": "constant",
     "clues": [
      "unending",
      " incessant"
     ]
    },
    {
     "word": "constitutional",
     "clues": [
      "relating to a/the constitution"
     ]
    },
    {
     "word": "content",
     "clues": [
      "contented"
     ]
    },
    {
     "word": "continental",
     "clues": [
      "relating to a continent"
     ]
    },
    {
     "word": "continuous",
     "clues": [
      "uninterrupted"
     ]
    },
    {
     "word": "conventional",
     "clues": [
      "following accepted customs"
     ]
    },
    {
     "word": "cool",
     "clues": [
      "neither warm or very cold in temperature"
     ]
    },
    {
     "word": "cool",
     "clues": [
      "unenthusiastic",
      " unfriendly",
      " unresponsive"
     ]
    },
    {
     "word": "cooperative",
     "clues": [
      "co-operative"
     ]
    },
    {
     "word": "critical",
     "clues": [
      "tending to find errors and flaws"
     ]
    },
    {
     "word": "critical",
     "clues": [
      "being in a state of crisis or emergency"
     ]
    },
    {
     "word": "critical",
     "clues": [
      "vital urgently needed"
     ]
    },
    {
     "word": "crude",
     "clues": [
      "unrefined",
      " unprocessed"
     ]
    },
    {
     "word": "crude",
     "clues": [
      "primitive"
     ]
    },
    {
     "word": "cruel",
     "clues": [
      "brutal",
      " barbarous"
     ]
    },
    {
     "word": "cultural",
     "clues": [
      "relating to arts"
     ]
    },
    {
     "word": "cute",
     "clues": [
      "attractive"
     ]
    },
    {
     "word": "dangerous",
     "clues": [
      "unsafe"
     ]
    },
    {
     "word": "dark",
     "clues": [
      "devoid of light"
     ]
    },
    {
     "word": "dead",
     "clues": [
      "inanimate"
     ]
    },
    {
     "word": "deadly",
     "clues": [
      "lethal"
     ]
    },
    {
     "word": "decisive",
     "clues": [
      "determining"
     ]
    },
    {
     "word": "decorative",
     "clues": [
      "cosmetic",
      " ornamental"
     ]
    },
    {
     "word": "deep",
     "clues": [
      "having great spatial extension downward"
     ]
    },
    {
     "word": "definite",
     "clues": [
      "precise",
      " explicit"
     ]
    },
    {
     "word": "delicate",
     "clues": [
      "exquisitely fine and subtle"
     ]
    },
    {
     "word": "delicate",
     "clues": [
      "fragile",
      " frail",
      " easily broken",
      " sensitive"
     ]
    },
    {
     "word": "democratic",
     "clues": [
      "based upon the principles of democracy"
     ]
    },
    {
     "word": "different",
     "clues": [
      "unlike",
      " dissimilar"
     ]
    },
    {
     "word": "difficult",
     "clues": [
      "hard"
     ]
    },
    {
     "word": "digital",
     "clues": [
      "discrete"
     ]
    },
    {
     "word": "diplomatic",
     "clues": [
      "diplomatical",
      " suave"
     ]
    },
    {
     "word": "direct",
     "clues": [
      "without deviation or interruption"
     ]
    },
    {
     "word": "dirty",
     "clues": [
      "soiled",
      " unclean"
     ]
    },
    {
     "word": "dirty",
     "clues": [
      "obscene",
      " indecent"
     ]
    },
    {
     "word": "discreet",
     "clues": [
      "keeping private",
      " prudent",
      " restrained"
     ]
    },
    {
     "word": "distant",
     "clues": [
      "separated in space or time"
     ]
    },
    {
     "word": "distinct",
     "clues": [
      "easy to perceive"
     ]
    },
    {
     "word": "domestic",
     "clues": [
      "concerning the internal affairs of a nation"
     ]
    },
    {
     "word": "domestic",
     "clues": [
      "relating to the home"
     ]
    },
    {
     "word": "dominant",
     "clues": [
      "exercising influence or control"
     ]
    },
    {
     "word": "dramatic",
     "clues": [
      "pertaining to theater"
     ]
    },
    {
     "word": "dry",
     "clues": [
      "free from liquid or moisture"
     ]
    },
    {
     "word": "due",
     "clues": [
      "owed"
     ]
    },
    {
     "word": "dull",
     "clues": [
      "not having a sharp edge or point"
     ]
    },
    {
     "word": "dull",
     "clues": [
      "boring",
      " lacking in liveliness or animation"
     ]
    },
    {
     "word": "dynamic",
     "clues": [
      "dynamical",
      " characterized by action"
     ]
    },
    {
     "word": "easy",
     "clues": [
      "posing no difficulty"
     ]
    },
    {
     "word": "economic",
     "clues": [
      "relating to economics"
     ]
    },
    {
     "word": "effective",
     "clues": [
      "effectual",
      " efficacious"
     ]
    },
    {
     "word": "elegant",
     "clues": [
      "refined",
      " tasteful"
     ]
    },
    {
     "word": "articulate",
     "clues": [
      "eloquent",
      " well-spoken"
     ]
    },
    {
     "word": "empirical",
     "clues": [
      "empiric",
      " derived from experiment and observation"
     ]
    },
    {
     "word": "environmental",
     "clues": [
      "relating to the external surroundings"
     ]
    },
    {
     "word": "equal",
     "clues": [
      "like",
      " equivalent",
      " same"
     ]
    },
    {
     "word": "essential",
     "clues": [
      "basic and fundamental"
     ]
    },
    {
     "word": "established",
     "clues": [
      "set up or accepted"
     ]
    },
    {
     "word": "eternal",
     "clues": [
      "everlasting",
      " perpetual",
      " unending"
     ]
    },
    {
     "word": "ethnic",
     "clues": [
      "cultural"
     ]
    },
    {
     "word": "even",
     "clues": [
      "level",
      " flush"
     ]
    },
    {
     "word": "even",
     "clues": [
      "divisible by two"
     ]
    },
    {
     "word": "exact",
     "clues": [
      "precise"
     ]
    },
    {
     "word": "exclusive",
     "clues": [
      "excluding much or all"
     ]
    },
    {
     "word": "exotic",
     "clues": [
      "foreign",
      " alien"
     ]
    },
    {
     "word": "exotic",
     "clues": [
      "unusual",
      " strikingly strange"
     ]
    },
    {
     "word": "experienced",
     "clues": [
      "knowledgeable"
     ]
    },
    {
     "word": "explicit",
     "clues": [
      "expressed"
     ]
    },
    {
     "word": "express",
     "clues": [
      "without unnecessary stops"
     ]
    },
    {
     "word": "extinct",
     "clues": [
      "non-existent",
      " not surviving"
     ]
    },
    {
     "word": "fair",
     "clues": [
      "impartial"
     ]
    },
    {
     "word": "faithful",
     "clues": [
      "sexually trustworthy"
     ]
    },
    {
     "word": "false",
     "clues": [
      "not in accordance with fact or reality"
     ]
    },
    {
     "word": "familiar",
     "clues": [
      "well known"
     ]
    },
    {
     "word": "far",
     "clues": [
      "at a long distance"
     ]
    },
    {
     "word": "fashionable",
     "clues": [
      "stylish"
     ]
    },
    {
     "word": "fast",
     "clues": [
      "at a rapid tempo"
     ]
    },
    {
     "word": "fastidious",
     "clues": [
      "finicky"
     ]
    },
    {
     "word": "fat",
     "clues": [
      "having much flesh",
      " especially fat"
     ]
    },
    {
     "word": "favorable",
     "clues": [
      "encouraging",
      " approving"
     ]
    },
    {
     "word": "feminine",
     "clues": [
      "womanly"
     ]
    },
    {
     "word": "financial",
     "clues": [
      "fiscal"
     ]
    },
    {
     "word": "fine",
     "clues": [
      "small-grained or smooth"
     ]
    },
    {
     "word": "finished",
     "clues": [
      "ruined"
     ]
    },
    {
     "word": "first",
     "clues": [
      "initial"
     ]
    },
    {
     "word": "first-hand",
     "clues": [
      "direct"
     ]
    },
    {
     "word": "flat",
     "clues": [
      "horizontally level"
     ]
    },
    {
     "word": "flawed",
     "clues": [
      "imperfect",
      " blemished",
      " faulty"
     ]
    },
    {
     "word": "flexible",
     "clues": [
      "bendable"
     ]
    },
    {
     "word": "formal",
     "clues": [
      "adhering to traditional standards"
     ]
    },
    {
     "word": "forward",
     "clues": [
      "at",
      " near or directed toward the front"
     ]
    },
    {
     "word": "fragrant",
     "clues": [
      "pleasant-smelling"
     ]
    },
    {
     "word": "frank",
     "clues": [
      "candid",
      " blunt",
      " forthright"
     ]
    },
    {
     "word": "free",
     "clues": [
      "able to act at will"
     ]
    },
    {
     "word": "free",
     "clues": [
      "complimentary",
      " costless",
      " gratis"
     ]
    },
    {
     "word": "free",
     "clues": [
      "not occupied"
     ]
    },
    {
     "word": "fresh",
     "clues": [
      "recently made",
      " produced",
      " or harvested"
     ]
    },
    {
     "word": "fresh",
     "clues": [
      "insolent",
      " impertinent",
      " impudent",
      " sassy"
     ]
    },
    {
     "word": "friendly",
     "clues": [
      "befitting a friend"
     ]
    },
    {
     "word": "frozen",
     "clues": [
      "unthawed"
     ]
    },
    {
     "word": "full",
     "clues": [
      "containing as much as is possible"
     ]
    },
    {
     "word": "full",
     "clues": [
      "replete",
      " filled to satisfaction with food"
     ]
    },
    {
     "word": "functional",
     "clues": [
      "designed for or capable of a particular function"
     ]
    },
    {
     "word": "funny",
     "clues": [
      "amusing",
      " laughable"
     ]
    },
    {
     "word": "general",
     "clues": [
      "applying to most members of a category"
     ]
    },
    {
     "word": "genetic",
     "clues": [
      "genetical"
     ]
    },
    {
     "word": "genuine",
     "clues": [
      "not fake or counterfeit"
     ]
    },
    {
     "word": "good",
     "clues": [
      "beneficial",
      " salutary"
     ]
    },
    {
     "word": "good",
     "clues": [
      "just",
      " upright",
      " virtuous"
     ]
    },
    {
     "word": "gradual",
     "clues": [
      "proceeding in small stages"
     ]
    },
    {
     "word": "grand",
     "clues": [
      "luxurious",
      " opulent",
      " sumptuous"
     ]
    },
    {
     "word": "graphic",
     "clues": [
      "explicit",
      " descriptive"
     ]
    },
    {
     "word": "graphic",
     "clues": [
      "pictorial",
      " lifelike",
      " vivid"
     ]
    },
    {
     "word": "grateful",
     "clues": [
      "thankful"
     ]
    },
    {
     "word": "great",
     "clues": [
      "outstanding",
      " very valuable"
     ]
    },
    {
     "word": "great",
     "clues": [
      "large in size",
      " number or extent"
     ]
    },
    {
     "word": "green",
     "clues": [
      "unripe",
      " unripened"
     ]
    },
    {
     "word": "gregarious",
     "clues": [
      "sociable"
     ]
    },
    {
     "word": "handy",
     "clues": [
      "easy to use"
     ]
    },
    {
     "word": "hard",
     "clues": [
      "not yielding to pressure"
     ]
    },
    {
     "word": "harmful",
     "clues": [
      "noxious"
     ]
    },
    {
     "word": "harsh",
     "clues": [
      "coarse",
      " large-grained or rough to the touch"
     ]
    },
    {
     "word": "healthy",
     "clues": [
      "fit"
     ]
    },
    {
     "word": "heavy",
     "clues": [
      "of great physical weight"
     ]
    },
    {
     "word": "helpless",
     "clues": [
      "incapacitated"
     ]
    },
    {
     "word": "high",
     "clues": [
      "greater than normal in degree or intensity or amount"
     ]
    },
    {
     "word": "hilarious",
     "clues": [
      "uproarious"
     ]
    },
    {
     "word": "homosexual",
     "clues": [
      "gay"
     ]
    },
    {
     "word": "honest",
     "clues": [
      "sincere"
     ]
    },
    {
     "word": "hostile",
     "clues": [
      "characterized by enmity or ill will"
     ]
    },
    {
     "word": "hot",
     "clues": [
      "being of high temperature"
     ]
    },
    {
     "word": "hot",
     "clues": [
      "marked by intensity",
      " vehemence",
      " passion"
     ]
    },
    {
     "word": "huge",
     "clues": [
      "immense",
      " vast"
     ]
    },
    {
     "word": "ignorant",
     "clues": [
      "lacking basic knowledge",
      " naive",
      " unsophisticated"
     ]
    },
    {
     "word": "immune",
     "clues": [
      "resistant"
     ]
    },
    {
     "word": "imperial",
     "clues": [
      "relating to an empire"
     ]
    },
    {
     "word": "implicit",
     "clues": [
      "inexplicit"
     ]
    },
    {
     "word": "important",
     "clues": [
      "significant"
     ]
    },
    {
     "word": "inappropriate",
     "clues": [
      "not suitable"
     ]
    },
    {
     "word": "incapable",
     "clues": [
      "incompetent"
     ]
    },
    {
     "word": "incongruous",
     "clues": [
      "discrepant"
     ]
    },
    {
     "word": "incredible",
     "clues": [
      "unbelievable"
     ]
    },
    {
     "word": "indirect",
     "clues": [
      "not direct in manner or language"
     ]
    },
    {
     "word": "indoor",
     "clues": [
      "inside"
     ]
    },
    {
     "word": "infinite",
     "clues": [
      "having no limits or boundaries in time or space"
     ]
    },
    {
     "word": "innocent",
     "clues": [
      "guiltless",
      " clean-handed"
     ]
    },
    {
     "word": "integrated",
     "clues": [
      "not segregated"
     ]
    },
    {
     "word": "interactive",
     "clues": [
      "synergistic"
     ]
    },
    {
     "word": "intermediate",
     "clues": [
      "lying between two extremes"
     ]
    },
    {
     "word": "invisible",
     "clues": [
      "unseeable"
     ]
    },
    {
     "word": "jealous",
     "clues": [
      "covetous",
      " envious"
     ]
    },
    {
     "word": "joint",
     "clues": [
      "united or combined"
     ]
    },
    {
     "word": "judicial",
     "clues": [
      "juridical",
      " juridic"
     ]
    },
    {
     "word": "junior",
     "clues": [
      "younger or lower in rank"
     ]
    },
    {
     "word": "just",
     "clues": [
      "equitable"
     ]
    },
    {
     "word": "large",
     "clues": [
      "big"
     ]
    },
    {
     "word": "last",
     "clues": [
      "concluding",
      " final",
      " terminal"
     ]
    },
    {
     "word": "late",
     "clues": [
      "belated",
      " tardy"
     ]
    },
    {
     "word": "latest",
     "clues": [
      "newest",
      " up-to-date"
     ]
    },
    {
     "word": "lazy",
     "clues": [
      "indolent",
      " otiose",
      " slothful",
      " work-shy"
     ]
    },
    {
     "word": "left",
     "clues": [
      "belonging to the political or intellectual left"
     ]
    },
    {
     "word": "liberal",
     "clues": [
      "tolerant of change"
     ]
    },
    {
     "word": "light",
     "clues": [
      "of little weight"
     ]
    },
    {
     "word": "light",
     "clues": [
      "light-colored"
     ]
    },
    {
     "word": "light",
     "clues": [
      "bright",
      " emitting light"
     ]
    },
    {
     "word": "likely",
     "clues": [
      "probable",
      " plausible"
     ]
    },
    {
     "word": "limited",
     "clues": [
      "small in range or scope"
     ]
    },
    {
     "word": "linear",
     "clues": [
      "one-dimensional"
     ]
    },
    {
     "word": "live",
     "clues": [
      "unrecorded"
     ]
    },
    {
     "word": "lonely",
     "clues": [
      "alone",
      " lone",
      " solitary"
     ]
    },
    {
     "word": "long",
     "clues": [
      "of great spatial extension"
     ]
    },
    {
     "word": "long",
     "clues": [
      "of relatively great duration"
     ]
    },
    {
     "word": "loose",
     "clues": [
      "not tight",
      " constrained or constricted"
     ]
    },
    {
     "word": "lost",
     "clues": [
      "no longer in your possession or control"
     ]
    },
    {
     "word": "lost",
     "clues": [
      "spiritually or physically doomed or destroyed"
     ]
    },
    {
     "word": "loud",
     "clues": [
      "characterized by sound of great volume"
     ]
    },
    {
     "word": "low",
     "clues": [
      "being at small elevation"
     ]
    },
    {
     "word": "depressed",
     "clues": [
      "blue"
     ]
    },
    {
     "word": "magnetic",
     "clues": [
      "relating to magnetism"
     ]
    },
    {
     "word": "main",
     "clues": [
      "chief",
      " primary",
      " principal"
     ]
    },
    {
     "word": "major",
     "clues": [
      "greater in scope or effect"
     ]
    },
    {
     "word": "major",
     "clues": [
      "of full legal age"
     ]
    },
    {
     "word": "manual",
     "clues": [
      "requiring human effort"
     ]
    },
    {
     "word": "marine",
     "clues": [
      "nautical",
      " maritime",
      " relating to the sea"
     ]
    },
    {
     "word": "mature",
     "clues": [
      "having reached full natural growth or development"
     ]
    },
    {
     "word": "mature",
     "clues": [
      "ripe",
      " fully developed and ready to be eaten"
     ]
    },
    {
     "word": "maximum",
     "clues": [
      "maximal"
     ]
    },
    {
     "word": "mechanical",
     "clues": [
      "using a mechanism"
     ]
    },
    {
     "word": "medieval",
     "clues": [
      "from the Middle Ages"
     ]
    },
    {
     "word": "mild",
     "clues": [
      "moderate"
     ]
    },
    {
     "word": "minimum",
     "clues": [
      "minimal"
     ]
    },
    {
     "word": "minor",
     "clues": [
      "lesser in scope or effect"
     ]
    },
    {
     "word": "miserable",
     "clues": [
      "abject",
      " scummy",
      " contemptible"
     ]
    },
    {
     "word": "mobile",
     "clues": [
      "moving or capable of moving readily"
     ]
    },
    {
     "word": "modest",
     "clues": [
      "not offensive to sexual mores"
     ]
    },
    {
     "word": "monstrous",
     "clues": [
      "atrocious",
      " heinous"
     ]
    },
    {
     "word": "monstrous",
     "clues": [
      "grotesque"
     ]
    },
    {
     "word": "moral",
     "clues": [
      "relating to principles of right and wrong"
     ]
    },
    {
     "word": "moving",
     "clues": [
      "arousing deep emotion"
     ]
    },
    {
     "word": "musical",
     "clues": [
      "talented in or devoted to music"
     ]
    },
    {
     "word": "mutual",
     "clues": [
      "reciprocal"
     ]
    },
    {
     "word": "narrow",
     "clues": [
      "not wide spatially"
     ]
    },
    {
     "word": "narrow",
     "clues": [
      "narrow-minded"
     ]
    },
    {
     "word": "national",
     "clues": [
      "relating to a nation or country"
     ]
    },
    {
     "word": "native",
     "clues": [
      "belonging to one by birth"
     ]
    },
    {
     "word": "negative",
     "clues": [
      "disconfirming"
     ]
    },
    {
     "word": "negative",
     "clues": [
      "reckoned in a direction opposite to positive"
     ]
    },
    {
     "word": "nervous",
     "clues": [
      "neural"
     ]
    },
    {
     "word": "nervous",
     "clues": [
      "skittish"
     ]
    },
    {
     "word": "neutral",
     "clues": [
      "of no distinctive quality"
     ]
    },
    {
     "word": "new",
     "clues": [
      "recently created",
      " unused or little used"
     ]
    },
    {
     "word": "new",
     "clues": [
      "unfamiliar"
     ]
    },
    {
     "word": "noble",
     "clues": [
      "having elevated character"
     ]
    },
    {
     "word": "noble",
     "clues": [
      "belonging to hereditary aristocracy"
     ]
    },
    {
     "word": "normal",
     "clues": [
      "conforming with a norm or standard"
     ]
    },
    {
     "word": "notorious",
     "clues": [
      "ill-famed",
      " infamous"
     ]
    },
    {
     "word": "nuclear",
     "clues": [
      "atomic"
     ]
    },
    {
     "word": "obese",
     "clues": [
      "overweight"
     ]
    },
    {
     "word": "objective",
     "clues": [
      "nonsubjective"
     ]
    },
    {
     "word": "obscure",
     "clues": [
      "unknown"
     ]
    },
    {
     "word": "offensive",
     "clues": [
      "unpleasant or disgusting"
     ]
    },
    {
     "word": "offensive",
     "clues": [
      "for the purpose of attack"
     ]
    },
    {
     "word": "official",
     "clues": [
      "having official authority"
     ]
    },
    {
     "word": "old",
     "clues": [
      "elderly",
      " having lived for a relatively long time"
     ]
    },
    {
     "word": "open",
     "clues": [
      "affording free passage"
     ]
    },
    {
     "word": "open",
     "clues": [
      "overt"
     ]
    },
    {
     "word": "operational",
     "clues": [
      "pertaining to a process"
     ]
    },
    {
     "word": "opposed",
     "clues": [
      "being in opposition"
     ]
    },
    {
     "word": "oral",
     "clues": [
      "of or involving the mouth"
     ]
    },
    {
     "word": "ordinary",
     "clues": [
      "not exceptional"
     ]
    },
    {
     "word": "original",
     "clues": [
      "fresh",
      " unusual",
      " first"
     ]
    },
    {
     "word": "orthodox",
     "clues": [
      "adhering to what is commonly accepted"
     ]
    },
    {
     "word": "other",
     "clues": [
      "not the same"
     ]
    },
    {
     "word": "outer",
     "clues": [
      "being on the outside"
     ]
    },
    {
     "word": "outside",
     "clues": [
      "outdoor",
      " out-of-door"
     ]
    },
    {
     "word": "parallel",
     "clues": [
      "equidistant and not intersecting"
     ]
    },
    {
     "word": "paralyzed",
     "clues": [
      "paralytic",
      " unable to move"
     ]
    },
    {
     "word": "particular",
     "clues": [
      "finicky",
      " fussy"
     ]
    },
    {
     "word": "particular",
     "clues": [
      "peculiar",
      " special"
     ]
    },
    {
     "word": "passive",
     "clues": [
      "inactive"
     ]
    },
    {
     "word": "past",
     "clues": [
      "earlier than the present time"
     ]
    },
    {
     "word": "perfect",
     "clues": [
      "complete",
      " without defect"
     ]
    },
    {
     "word": "permanent",
     "clues": [
      "lasting"
     ]
    },
    {
     "word": "persistent",
     "clues": [
      "lasting"
     ]
    },
    {
     "word": "personal",
     "clues": [
      "concerning a particular person"
     ]
    },
    {
     "word": "petty",
     "clues": [
      "small-minded"
     ]
    },
    {
     "word": "physical",
     "clues": [
      "involving the body"
     ]
    },
    {
     "word": "plain",
     "clues": [
      "simple"
     ]
    },
    {
     "word": "pleasant",
     "clues": [
      "delightful"
     ]
    },
    {
     "word": "polite",
     "clues": [
      "courteous"
     ]
    },
    {
     "word": "poor",
     "clues": [
      "characterized by poverty"
     ]
    },
    {
     "word": "popular",
     "clues": [
      "regarded with great favor",
      " approval",
      " or affection"
     ]
    },
    {
     "word": "positive",
     "clues": [
      "accepting",
      " confirming"
     ]
    },
    {
     "word": "possible",
     "clues": [
      "potential"
     ]
    },
    {
     "word": "practical",
     "clues": [
      "concerned with actual use or practice"
     ]
    },
    {
     "word": "practical",
     "clues": [
      "efficient"
     ]
    },
    {
     "word": "premature",
     "clues": [
      "untimely"
     ]
    },
    {
     "word": "present",
     "clues": [
      "intermediate between past and future"
     ]
    },
    {
     "word": "present",
     "clues": [
      "being here"
     ]
    },
    {
     "word": "presidential",
     "clues": [
      "relating to a president or presidency"
     ]
    },
    {
     "word": "primary",
     "clues": [
      "of first rank or importance or value"
     ]
    },
    {
     "word": "private",
     "clues": [
      "concerning things personal"
     ]
    },
    {
     "word": "productive",
     "clues": [
      "generative"
     ]
    },
    {
     "word": "profound",
     "clues": [
      "deep"
     ]
    },
    {
     "word": "progressive",
     "clues": [
      "favoring or promoting progress"
     ]
    },
    {
     "word": "proper",
     "clues": [
      "suitable"
     ]
    },
    {
     "word": "proud",
     "clues": [
      "feeling self-respect"
     ]
    },
    {
     "word": "provincial",
     "clues": [
      "characteristic of the provinces"
     ]
    },
    {
     "word": "public",
     "clues": [
      "not private"
     ]
    },
    {
     "word": "pure",
     "clues": [
      "having no faults",
      " sinless"
     ]
    },
    {
     "word": "pure",
     "clues": [
      "free of extraneous elements of any kind"
     ]
    },
    {
     "word": "qualified",
     "clues": [
      "meeting the standards and requirements"
     ]
    },
    {
     "word": "quiet",
     "clues": [
      "silent"
     ]
    },
    {
     "word": "quiet",
     "clues": [
      "quiescent"
     ]
    },
    {
     "word": "random",
     "clues": [
      "arbitrary"
     ]
    },
    {
     "word": "rare",
     "clues": [
      "infrequent",
      " uncommon"
     ]
    },
    {
     "word": "rational",
     "clues": [
      "based on reasoning"
     ]
    },
    {
     "word": "raw",
     "clues": [
      "not treated with heat"
     ]
    },
    {
     "word": "ready",
     "clues": [
      "prepared"
     ]
    },
    {
     "word": "real",
     "clues": [
      "actual",
      " existent",
      " being or occurring in fact or actuality"
     ]
    },
    {
     "word": "real",
     "clues": [
      "actual",
      " genuine"
     ]
    },
    {
     "word": "reasonable",
     "clues": [
      "sensible"
     ]
    },
    {
     "word": "reckless",
     "clues": [
      "foolhardy"
     ]
    },
    {
     "word": "regular",
     "clues": [
      "in accordance with fixed order or procedure"
     ]
    },
    {
     "word": "related",
     "clues": [
      "connected by kinship"
     ]
    },
    {
     "word": "related",
     "clues": [
      "connected logically or causally"
     ]
    },
    {
     "word": "relative",
     "clues": [
      "not absolute"
     ]
    },
    {
     "word": "reliable",
     "clues": [
      "dependable"
     ]
    },
    {
     "word": "representative",
     "clues": [
      "standing for something else"
     ]
    },
    {
     "word": "resident",
     "clues": [
      "living in a particular place"
     ]
    },
    {
     "word": "respectable",
     "clues": [
      "worthy of respect"
     ]
    },
    {
     "word": "responsible",
     "clues": [
      "held accountable",
      " worthy of trust"
     ]
    },
    {
     "word": "restless",
     "clues": [
      "antsy",
      " itchy",
      " fidgety"
     ]
    },
    {
     "word": "retired",
     "clues": [
      "no longer active in your work"
     ]
    },
    {
     "word": "revolutionary",
     "clues": [
      "advocating or engaged in revolution"
     ]
    },
    {
     "word": "rich",
     "clues": [
      "possessing material wealth"
     ]
    },
    {
     "word": "right",
     "clues": [
      "correct"
     ]
    },
    {
     "word": "romantic",
     "clues": [
      "amatory",
      " amorous"
     ]
    },
    {
     "word": "rotten",
     "clues": [
      "decayed",
      " rotted"
     ]
    },
    {
     "word": "rotten",
     "clues": [
      "crappy",
      " lousy",
      " shitty",
      " stinking",
      " stinky"
     ]
    },
    {
     "word": "rough",
     "clues": [
      "unsmooth"
     ]
    },
    {
     "word": "round",
     "clues": [
      "circular"
     ]
    },
    {
     "word": "sacred",
     "clues": [
      "concerned with religion or religious purposes"
     ]
    },
    {
     "word": "safe",
     "clues": [
      "free from danger"
     ]
    },
    {
     "word": "satisfied",
     "clues": [
      "quenched",
      " slaked"
     ]
    },
    {
     "word": "seasonal",
     "clues": [
      "occurring at a particular season"
     ]
    },
    {
     "word": "seasonal",
     "clues": [
      "occurring at or dependent on a particular season"
     ]
    },
    {
     "word": "secular",
     "clues": [
      "laic",
      " lay"
     ]
    },
    {
     "word": "secure",
     "clues": [
      "protected"
     ]
    },
    {
     "word": "senior",
     "clues": [
      "older or higher in rank"
     ]
    },
    {
     "word": "sensitive",
     "clues": [
      "having acute mental or emotional sensibility"
     ]
    },
    {
     "word": "separate",
     "clues": [
      "independent"
     ]
    },
    {
     "word": "serious",
     "clues": [
      "sober"
     ]
    },
    {
     "word": "shallow",
     "clues": [
      "lacking physical depth"
     ]
    },
    {
     "word": "shallow",
     "clues": [
      "lacking depth of intellect or knowledge or feeling"
     ]
    },
    {
     "word": "sharp",
     "clues": [
      "having a thin edge or sharp point"
     ]
    },
    {
     "word": "short",
     "clues": [
      "having little length"
     ]
    },
    {
     "word": "short",
     "clues": [
      "of limited duration"
     ]
    },
    {
     "word": "shy",
     "clues": [
      "timid",
      " diffident"
     ]
    },
    {
     "word": "sick",
     "clues": [
      "ill"
     ]
    },
    {
     "word": "similar",
     "clues": [
      "alike",
      " like"
     ]
    },
    {
     "word": "single",
     "clues": [
      "unmarried"
     ]
    },
    {
     "word": "single",
     "clues": [
      "individual",
      " separate"
     ]
    },
    {
     "word": "skilled",
     "clues": [
      "skillful"
     ]
    },
    {
     "word": "slippery",
     "clues": [
      "slippy"
     ]
    },
    {
     "word": "slow",
     "clues": [
      "not moving quickly"
     ]
    },
    {
     "word": "small",
     "clues": [
      "little"
     ]
    },
    {
     "word": "smart",
     "clues": [
      "clever",
      " bright"
     ]
    },
    {
     "word": "smooth",
     "clues": [
      "having a surface free from roughness"
     ]
    },
    {
     "word": "social",
     "clues": [
      "living together or enjoying life in communities"
     ]
    },
    {
     "word": "socialist",
     "clues": [
      "socialistic"
     ]
    },
    {
     "word": "soft",
     "clues": [
      "lacking in hardness"
     ]
    },
    {
     "word": "soft",
     "clues": [
      "relatively low in volume"
     ]
    },
    {
     "word": "soft",
     "clues": [
      "nonalcoholic"
     ]
    },
    {
     "word": "solid",
     "clues": [
      "neither liquid nor gaseous"
     ]
    },
    {
     "word": "solid",
     "clues": [
      "entirely of one substance with no holes inside"
     ]
    },
    {
     "word": "sound",
     "clues": [
      "in good condition"
     ]
    },
    {
     "word": "sour",
     "clues": [
      "having a sharp biting taste"
     ]
    },
    {
     "word": "spontaneous",
     "clues": [
      "self-generated"
     ]
    },
    {
     "word": "square",
     "clues": [
      "having four equal sides and four right angles"
     ]
    },
    {
     "word": "stable",
     "clues": [
      "resistant to change"
     ]
    },
    {
     "word": "standard",
     "clues": [
      "conforming to a standard of measurement"
     ]
    },
    {
     "word": "steep",
     "clues": [
      "having a sharp inclination"
     ]
    },
    {
     "word": "sticky",
     "clues": [
      "gluey",
      " glutinous",
      " gummy"
     ]
    },
    {
     "word": "muggy",
     "clues": [
      "sticky",
      " steamy"
     ]
    },
    {
     "word": "still",
     "clues": [
      "inactive",
      " motionless",
      " static"
     ]
    },
    {
     "word": "straight",
     "clues": [
      "square",
      " honest",
      " fair",
      " decent"
     ]
    },
    {
     "word": "straight",
     "clues": [
      "free from curves or angles"
     ]
    },
    {
     "word": "strange",
     "clues": [
      "unusual"
     ]
    },
    {
     "word": "strategic",
     "clues": [
      "strategical"
     ]
    },
    {
     "word": "strict",
     "clues": [
      "severe",
      " nonindulgent"
     ]
    },
    {
     "word": "strong",
     "clues": [
      "potent"
     ]
    },
    {
     "word": "strong",
     "clues": [
      "hard",
      " having a high alcoholic content"
     ]
    },
    {
     "word": "strong",
     "clues": [
      "firm"
     ]
    },
    {
     "word": "strong",
     "clues": [
      "secure",
      " unattackable"
     ]
    },
    {
     "word": "stubborn",
     "clues": [
      "obstinate"
     ]
    },
    {
     "word": "stunning",
     "clues": [
      "strikingly beautiful or attractive"
     ]
    },
    {
     "word": "superior",
     "clues": [
      "of high or superior quality"
     ]
    },
    {
     "word": "supplementary",
     "clues": [
      "auxiliary",
      " subsidiary"
     ]
    },
    {
     "word": "sweet",
     "clues": [
      "sweet-tasting"
     ]
    },
    {
     "word": "sympathetic",
     "clues": [
      "appealing",
      " likeable"
     ]
    },
    {
     "word": "systematic",
     "clues": [
      "characterized by order and planning"
     ]
    },
    {
     "word": "talented",
     "clues": [
      "gifted"
     ]
    },
    {
     "word": "talkative",
     "clues": [
      "chatty",
      " gabby",
      " garrulous"
     ]
    },
    {
     "word": "tasty",
     "clues": [
      "delicious"
     ]
    },
    {
     "word": "temporary",
     "clues": [
      "impermanent"
     ]
    },
    {
     "word": "tender",
     "clues": [
      "easy to cut or chew"
     ]
    },
    {
     "word": "tender",
     "clues": [
      "gentle",
      " sympathetic",
      " feeling"
     ]
    },
    {
     "word": "tense",
     "clues": [
      "taut",
      " rigid",
      " stretched tight"
     ]
    },
    {
     "word": "tense",
     "clues": [
      "in a state of physical or nervous tension"
     ]
    },
    {
     "word": "terminal",
     "clues": [
      "endmost"
     ]
    },
    {
     "word": "thick",
     "clues": [
      "of a specific thickness"
     ]
    },
    {
     "word": "thick",
     "clues": [
      "dense in consistency"
     ]
    },
    {
     "word": "thin",
     "clues": [
      "lean"
     ]
    },
    {
     "word": "thirsty",
     "clues": [
      "needing or desiring to drink"
     ]
    },
    {
     "word": "thoughtful",
     "clues": [
      "considerate",
      " showing concern"
     ]
    },
    {
     "word": "tidy",
     "clues": [
      "neat",
      " orderly",
      " clean"
     ]
    },
    {
     "word": "tight",
     "clues": [
      "constrained",
      " constricted",
      " constricting"
     ]
    },
    {
     "word": "tired",
     "clues": [
      "fatigued"
     ]
    },
    {
     "word": "tolerant",
     "clues": [
      "respecting others"
     ]
    },
    {
     "word": "tough",
     "clues": [
      "tough",
      " hard",
      " rough"
     ]
    },
    {
     "word": "tough",
     "clues": [
      "not given to gentleness or sentimentality"
     ]
    },
    {
     "word": "transparent",
     "clues": [
      "see-through",
      " sheer"
     ]
    },
    {
     "word": "trivial",
     "clues": [
      "banal",
      " commonplace"
     ]
    },
    {
     "word": "tropical",
     "clues": [
      "typical of the tropics"
     ]
    },
    {
     "word": "true",
     "clues": [
      "consistent with fact or reality"
     ]
    },
    {
     "word": "unanimous",
     "clues": [
      "in complete agreement"
     ]
    },
    {
     "word": "unaware",
     "clues": [
      "unwitting"
     ]
    },
    {
     "word": "unfair",
     "clues": [
      "partial",
      " biased"
     ]
    },
    {
     "word": "unfortunate",
     "clues": [
      "not favored by fortune"
     ]
    },
    {
     "word": "uniform",
     "clues": [
      "unvarying"
     ]
    },
    {
     "word": "unique",
     "clues": [
      "unequaled",
      " unparalleled"
     ]
    },
    {
     "word": "global",
     "clues": [
      "universal",
      " worldwide"
     ]
    },
    {
     "word": "unlawful",
     "clues": [
      "illegitimate",
      " illicit"
     ]
    },
    {
     "word": "unlike",
     "clues": [
      "unequal"
     ]
    },
    {
     "word": "unlikely",
     "clues": [
      "improbable"
     ]
    },
    {
     "word": "unpleasant",
     "clues": [
      "disagreeable"
     ]
    },
    {
     "word": "useful",
     "clues": [
      "utile"
     ]
    },
    {
     "word": "vague",
     "clues": [
      "undefined"
     ]
    },
    {
     "word": "vain",
     "clues": [
      "self-conceited",
      " swollen-headed"
     ]
    },
    {
     "word": "valid",
     "clues": [
      "well grounded in logic or truth"
     ]
    },
    {
     "word": "vertical",
     "clues": [
      "perpendicular"
     ]
    },
    {
     "word": "viable",
     "clues": [
      "feasible",
      " practicable",
      " workable"
     ]
    },
    {
     "word": "vigorous",
     "clues": [
      "strong physically or mentally"
     ]
    },
    {
     "word": "visible",
     "clues": [
      "seeable"
     ]
    },
    {
     "word": "visual",
     "clues": [
      "ocular",
      " optic",
      " optical"
     ]
    },
    {
     "word": "warm",
     "clues": [
      "producing a comfortable degree of heat"
     ]
    },
    {
     "word": "warm",
     "clues": [
      "friendly and responsive"
     ]
    },
    {
     "word": "weak",
     "clues": [
      "having little physical or spiritual strength"
     ]
    },
    {
     "word": "well",
     "clues": [
      "in good health"
     ]
    },
    {
     "word": "white",
     "clues": [
      "achromatic"
     ]
    },
    {
     "word": "white",
     "clues": [
      "caucasian"
     ]
    },
    {
     "word": "whole",
     "clues": [
      "including all components"
     ]
    },
    {
     "word": "wild",
     "clues": [
      "untamed"
     ]
    },
    {
     "word": "wild",
     "clues": [
      "marked by lack of restraint or control"
     ]
    },
    {
     "word": "wrong",
     "clues": [
      "contrary to conscience or morality or law"
     ]
    },
    {
     "word": "wrong",
     "clues": [
      "based on error"
     ]
    },
    {
     "word": "young",
     "clues": [
      "youthful"
     ]
    },
    {
     "word": "abbey",
     "clues": [
      "monastery"
     ]
    },
    {
     "word": "abortion",
     "clues": [
      "termination pregnancy"
     ]
    },
    {
     "word": "absence",
     "clues": [
      "failure to be present"
     ]
    },
    {
     "word": "absorption",
     "clues": [
      "preoccupation",
      " engrossment"
     ]
    },
    {
     "word": "absorption",
     "clues": [
      "soaking up"
     ]
    },
    {
     "word": "absorption",
     "clues": [
      "social assimilation"
     ]
    },
    {
     "word": "abuse",
     "clues": [
      "maltreatment",
      " ill-treatment"
     ]
    },
    {
     "word": "abuse",
     "clues": [
      "insult"
     ]
    },
    {
     "word": "academy",
     "clues": [
      "learned establishment"
     ]
    },
    {
     "word": "accent",
     "clues": [
      "speech pattern"
     ]
    },
    {
     "word": "acceptance",
     "clues": [
      "adoption",
      " espousal",
      " favorable reception"
     ]
    },
    {
     "word": "access",
     "clues": [
      "entree",
      " accession",
      " admittance"
     ]
    },
    {
     "word": "access",
     "clues": [
      "right to obtain or make use of"
     ]
    },
    {
     "word": "accident",
     "clues": [
      "fortuity",
      " chance event"
     ]
    },
    {
     "word": "accident",
     "clues": [
      "mishap"
     ]
    },
    {
     "word": "account",
     "clues": [
      "explanation"
     ]
    },
    {
     "word": "account",
     "clues": [
      "accounting",
      " account statement"
     ]
    },
    {
     "word": "accountant",
     "clues": [
      "comptroller",
      " controller"
     ]
    },
    {
     "word": "accumulation",
     "clues": [
      "accretion"
     ]
    },
    {
     "word": "achievement",
     "clues": [
      "accomplishment"
     ]
    },
    {
     "word": "acid",
     "clues": [
      "water-soluble compound with sour taste"
     ]
    },
    {
     "word": "acquaintance",
     "clues": [
      "familiarity",
      " personal knowledge"
     ]
    },
    {
     "word": "acquaintance",
     "clues": [
      "familiar person"
     ]
    },
    {
     "word": "acquisition",
     "clues": [
      "possession"
     ]
    },
    {
     "word": "act",
     "clues": [
      "human action",
      " human activity"
     ]
    },
    {
     "word": "act",
     "clues": [
      "subdivision of a play or opera or ballet"
     ]
    },
    {
     "word": "action",
     "clues": [
      "legal action"
     ]
    },
    {
     "word": "action",
     "clues": [
      "military action"
     ]
    },
    {
     "word": "action",
     "clues": [
      "series of events that form a plot"
     ]
    },
    {
     "word": "activity",
     "clues": [
      "activeness",
      " trait of being active"
     ]
    },
    {
     "word": "addition",
     "clues": [
      "summation",
      " plus"
     ]
    },
    {
     "word": "addition",
     "clues": [
      "add-on",
      " improver"
     ]
    },
    {
     "word": "address",
     "clues": [
      "place where a person or organization can be found"
     ]
    },
    {
     "word": "administration",
     "clues": [
      "presidency"
     ]
    },
    {
     "word": "admiration",
     "clues": [
      "esteem"
     ]
    },
    {
     "word": "admission",
     "clues": [
      "acknowledgment"
     ]
    },
    {
     "word": "admission",
     "clues": [
      "entrance fee"
     ]
    },
    {
     "word": "adoption",
     "clues": [
      "child adoption"
     ]
    },
    {
     "word": "adult",
     "clues": [
      "grownup"
     ]
    },
    {
     "word": "advance",
     "clues": [
      "cash advance"
     ]
    },
    {
     "word": "advantage",
     "clues": [
      "benefit"
     ]
    },
    {
     "word": "adventure",
     "clues": [
      "escapade",
      " risky venture"
     ]
    },
    {
     "word": "advertising",
     "clues": [
      "ad",
      " advertisement"
     ]
    },
    {
     "word": "advice",
     "clues": [
      "proposal for an appropriate course of action"
     ]
    },
    {
     "word": "adviser",
     "clues": [
      "advisor",
      " consultant"
     ]
    },
    {
     "word": "advocate",
     "clues": [
      "proponent"
     ]
    },
    {
     "word": "affair",
     "clues": [
      "affaire",
      " intimacy",
      " liaison",
      " involvement"
     ]
    },
    {
     "word": "affinity",
     "clues": [
      "natural attraction"
     ]
    },
    {
     "word": "affinity",
     "clues": [
      "kinship"
     ]
    },
    {
     "word": "age",
     "clues": [
      "how long something has existed"
     ]
    },
    {
     "word": "ol",
     "clues": [
      "age] years"
     ]
    },
    {
     "word": "age",
     "clues": [
      "historic period"
     ]
    },
    {
     "word": "agency",
     "clues": [
      "business that serves other businesses"
     ]
    },
    {
     "word": "agenda",
     "clues": [
      "order of business"
     ]
    },
    {
     "word": "agent",
     "clues": [
      "representative who acts on behalf of others"
     ]
    },
    {
     "word": "agent",
     "clues": [
      "federal agent"
     ]
    },
    {
     "word": "agony",
     "clues": [
      "torment"
     ]
    },
    {
     "word": "agreement",
     "clues": [
      "accord"
     ]
    },
    {
     "word": "agriculture",
     "clues": [
      "farming",
      " husbandry"
     ]
    },
    {
     "word": "aid",
     "clues": [
      "economic aid"
     ]
    },
    {
     "word": "AIDS",
     "clues": [
      "acquired immune deficiency syndrome"
     ]
    },
    {
     "word": "air",
     "clues": [
      "mixture of gases"
     ]
    },
    {
     "word": "aisle",
     "clues": [
      "passage between seats or supermarket shelves"
     ]
    },
    {
     "word": "alarm",
     "clues": [
      "warning device",
      " alarm system"
     ]
    },
    {
     "word": "alarm",
     "clues": [
      "alarm clock"
     ]
    },
    {
     "word": "alarm",
     "clues": [
      "dismay",
      " consternation",
      " fear"
     ]
    },
    {
     "word": "album",
     "clues": [
      "book of blank pages"
     ]
    },
    {
     "word": "album",
     "clues": [
      "record album"
     ]
    },
    {
     "word": "alcohol",
     "clues": [
      "alcoholic beverage",
      " intoxicant",
      " inebriant"
     ]
    },
    {
     "word": "allocation",
     "clues": [
      "allotment",
      " share"
     ]
    },
    {
     "word": "allowance",
     "clues": [
      "money allowed or granted"
     ]
    },
    {
     "word": "ally",
     "clues": [
      "friendly nation"
     ]
    },
    {
     "word": "ally",
     "clues": [
      "friend"
     ]
    },
    {
     "word": "aluminium",
     "clues": [
      "aluminum",
      " Al",
      " silvery metal"
     ]
    },
    {
     "word": "ambiguity",
     "clues": [
      "equivocalness"
     ]
    },
    {
     "word": "ambition",
     "clues": [
      "ambitiousness"
     ]
    },
    {
     "word": "analysis",
     "clues": [
      "psychoanalysis"
     ]
    },
    {
     "word": "analyst",
     "clues": [
      "psychoanalyst"
     ]
    },
    {
     "word": "angel",
     "clues": [
      "spiritual being"
     ]
    },
    {
     "word": "anger",
     "clues": [
      "ire"
     ]
    },
    {
     "word": "angle",
     "clues": [
      "slant",
      " bias"
     ]
    },
    {
     "word": "angle",
     "clues": [
      "space between two lines"
     ]
    },
    {
     "word": "animal",
     "clues": [
      "animate being",
      " beast",
      " brute",
      " creature",
      " fauna"
     ]
    },
    {
     "word": "ankle",
     "clues": [
      "ankle joint"
     ]
    },
    {
     "word": "anniversary",
     "clues": [
      "day of remembrance"
     ]
    },
    {
     "word": "announcement",
     "clues": [
      "proclamation",
      " declaration"
     ]
    },
    {
     "word": "ant",
     "clues": [
      "social insect"
     ]
    },
    {
     "word": "anticipation",
     "clues": [
      "expectancy"
     ]
    },
    {
     "word": "anxiety",
     "clues": [
      "anxiousness"
     ]
    },
    {
     "word": "apathy",
     "clues": [
      "absence of emotion or enthusiasm"
     ]
    },
    {
     "word": "apology",
     "clues": [
      "expression of regret"
     ]
    },
    {
     "word": "apparatus",
     "clues": [
      "setup",
      " equipment"
     ]
    },
    {
     "word": "appeal",
     "clues": [
      "appealingness",
      " charm"
     ]
    },
    {
     "word": "appeal",
     "clues": [
      "solicitation"
     ]
    },
    {
     "word": "appearance",
     "clues": [
      "visual aspect"
     ]
    },
    {
     "word": "appendix",
     "clues": [
      "body part"
     ]
    },
    {
     "word": "appendix",
     "clues": [
      "supplementary material"
     ]
    },
    {
     "word": "appetite",
     "clues": [
      "craving"
     ]
    },
    {
     "word": "apple",
     "clues": [
      "fruit with red",
      " yellow or green skin"
     ]
    },
    {
     "word": "application",
     "clues": [
      "practical application"
     ]
    },
    {
     "word": "application",
     "clues": [
      "verbal or written request for assistance or employment or admission"
     ]
    },
    {
     "word": "appointment",
     "clues": [
      "job",
      " post"
     ]
    },
    {
     "word": "approval",
     "clues": [
      "blessing"
     ]
    },
    {
     "word": "aquarium",
     "clues": [
      "fish tank",
      " marine museum"
     ]
    },
    {
     "word": "arch",
     "clues": [
      "archway"
     ]
    },
    {
     "word": "architecture",
     "clues": [
      "building design"
     ]
    },
    {
     "word": "archive",
     "clues": [
      "archives"
     ]
    },
    {
     "word": "area",
     "clues": [
      "expanse",
      " surface area"
     ]
    },
    {
     "word": "arena",
     "clues": [
      "place for spectacles"
     ]
    },
    {
     "word": "argument",
     "clues": [
      "argumentation",
      " debate"
     ]
    },
    {
     "word": "arm",
     "clues": [
      "human limb"
     ]
    },
    {
     "word": "army",
     "clues": [
      "ground forces"
     ]
    },
    {
     "word": "arrangement",
     "clues": [
      "placement"
     ]
    },
    {
     "word": "arrow",
     "clues": [
      "projectile"
     ]
    },
    {
     "word": "arrow",
     "clues": [
      "pointer",
      " indicator"
     ]
    },
    {
     "word": "art",
     "clues": [
      "artistic creation",
      " artistic production"
     ]
    },
    {
     "word": "article",
     "clues": [
      "nonfictional prose forming an independent part of a publication"
     ]
    },
    {
     "word": "artist",
     "clues": [
      "creative person"
     ]
    },
    {
     "word": "ash",
     "clues": [
      "residue from a fire"
     ]
    },
    {
     "word": "aspect",
     "clues": [
      "facet"
     ]
    },
    {
     "word": "assault",
     "clues": [
      "physical attack"
     ]
    },
    {
     "word": "rape",
     "clues": [
      "rape",
      " violation",
      " assault",
      " ravishment"
     ]
    },
    {
     "word": "assembly",
     "clues": [
      "assemblage",
      " gathering of people"
     ]
    },
    {
     "word": "assembly",
     "clues": [
      "fabrication",
      " construction"
     ]
    },
    {
     "word": "assessment",
     "clues": [
      "judgment",
      " judgement"
     ]
    },
    {
     "word": "assessment",
     "clues": [
      "appraisal"
     ]
    },
    {
     "word": "asset",
     "clues": [
      "plus",
      " valuable quality"
     ]
    },
    {
     "word": "assignment",
     "clues": [
      "task"
     ]
    },
    {
     "word": "association",
     "clues": [
      "mental connection"
     ]
    },
    {
     "word": "association",
     "clues": [
      "formal organization of people"
     ]
    },
    {
     "word": "association",
     "clues": [
      "affiliation"
     ]
    },
    {
     "word": "assumption",
     "clues": [
      "premise",
      " premiss"
     ]
    },
    {
     "word": "asylum",
     "clues": [
      "refuge",
      " sanctuary",
      " shelter"
     ]
    },
    {
     "word": "athlete",
     "clues": [
      "jock",
      " sportive person"
     ]
    },
    {
     "word": "atmosphere",
     "clues": [
      "envelope of gases"
     ]
    },
    {
     "word": "atmosphere",
     "clues": [
      "ambiance",
      " ambience"
     ]
    },
    {
     "word": "attachment",
     "clues": [
      "supplementary part"
     ]
    },
    {
     "word": "attachment",
     "clues": [
      "affection",
      " fondness"
     ]
    },
    {
     "word": "attack",
     "clues": [
      "onslaught",
      " physical attack"
     ]
    },
    {
     "word": "attack",
     "clues": [
      "strong criticism"
     ]
    },
    {
     "word": "attention",
     "clues": [
      "faculty or power of mental concentration"
     ]
    },
    {
     "word": "attic",
     "clues": [
      "loft",
      " garret"
     ]
    },
    {
     "word": "attitude",
     "clues": [
      "mental attitude"
     ]
    },
    {
     "word": "attraction",
     "clues": [
      "attractiveness"
     ]
    },
    {
     "word": "attraction",
     "clues": [
      "entertainment offered to the public"
     ]
    },
    {
     "word": "attraction",
     "clues": [
      "physical force"
     ]
    },
    {
     "word": "auction",
     "clues": [
      "auction sale"
     ]
    },
    {
     "word": "audience",
     "clues": [
      "spectators",
      " listeners"
     ]
    },
    {
     "word": "auditor",
     "clues": [
      "student"
     ]
    },
    {
     "word": "aunt",
     "clues": [
      "auntie",
      " relative"
     ]
    },
    {
     "word": "authority",
     "clues": [
      "expert whose views are taken as definitive"
     ]
    },
    {
     "word": "authority",
     "clues": [
      "persons who exercise administrative control"
     ]
    },
    {
     "word": "autonomy",
     "clues": [
      "self-sufficiency",
      " personal independence"
     ]
    },
    {
     "word": "avenue",
     "clues": [
      "boulevard"
     ]
    },
    {
     "word": "average",
     "clues": [
      "norm"
     ]
    },
    {
     "word": "aviation",
     "clues": [
      "operation of aircraft"
     ]
    },
    {
     "word": "award",
     "clues": [
      "prize"
     ]
    },
    {
     "word": "axis",
     "clues": [
      "axis of rotation"
     ]
    },
    {
     "word": "baby",
     "clues": [
      "babe",
      " infant"
     ]
    },
    {
     "word": "back",
     "clues": [
      "rear",
      " side that goes last or is not normally seen"
     ]
    },
    {
     "word": "back",
     "clues": [
      "spinal column",
      " vertebral column",
      " spine",
      " backbone"
     ]
    },
    {
     "word": "background",
     "clues": [
      "social heritage"
     ]
    },
    {
     "word": "background",
     "clues": [
      "ground",
      " part of a scene behind objects"
     ]
    },
    {
     "word": "background",
     "clues": [
      "setting context"
     ]
    },
    {
     "word": "bacon",
     "clues": [
      "pork"
     ]
    },
    {
     "word": "suitcase",
     "clues": [
      "bag",
      " luggage"
     ]
    },
    {
     "word": "bag",
     "clues": [
      "supple container"
     ]
    },
    {
     "word": "balance",
     "clues": [
      "proportion",
      " proportionality"
     ]
    },
    {
     "word": "balance",
     "clues": [
      "equality between credit and debit"
     ]
    },
    {
     "word": "balance",
     "clues": [
      "state of equilibrium"
     ]
    },
    {
     "word": "ball",
     "clues": [
      "object that is hit or thrown or kicked in games"
     ]
    },
    {
     "word": "ball",
     "clues": [
      "formal dance"
     ]
    },
    {
     "word": "ball",
     "clues": [
      "globe",
      " orb",
      " object with a spherical shape"
     ]
    },
    {
     "word": "ballet",
     "clues": [
      "dance"
     ]
    },
    {
     "word": "ballot",
     "clues": [
      "voting document"
     ]
    },
    {
     "word": "ban",
     "clues": [
      "prohibition",
      " proscription"
     ]
    },
    {
     "word": "banana",
     "clues": [
      "elongated crescent-shaped yellow fruit"
     ]
    },
    {
     "word": "band",
     "clues": [
      "banding",
      " stripe"
     ]
    },
    {
     "word": "band",
     "clues": [
      "ring",
      " jewelry"
     ]
    },
    {
     "word": "band",
     "clues": [
      "range of frequencies between two limits"
     ]
    },
    {
     "word": "band",
     "clues": [
      "instrumentalists"
     ]
    },
    {
     "word": "bang",
     "clues": [
      "clap",
      " eruption",
      " blast",
      " bam"
     ]
    },
    {
     "word": "bank",
     "clues": [
      "depository financial institution"
     ]
    },
    {
     "word": "bank",
     "clues": [
      "sloping land"
     ]
    },
    {
     "word": "banner",
     "clues": [
      "streamer"
     ]
    },
    {
     "word": "bar",
     "clues": [
      "rigid piece of metal or wood"
     ]
    },
    {
     "word": "bar",
     "clues": [
      "barroom",
      " saloon"
     ]
    },
    {
     "word": "bar",
     "clues": [
      "horizontal rod that serves as a support for gymnasts"
     ]
    },
    {
     "word": "bar",
     "clues": [
      "legal profession"
     ]
    },
    {
     "word": "bark",
     "clues": [
      "tree covering"
     ]
    },
    {
     "word": "barrel",
     "clues": [
      "cask"
     ]
    },
    {
     "word": "barrel",
     "clues": [
      "gun barrel"
     ]
    },
    {
     "word": "barrier",
     "clues": [
      "separator obstructing vision or access"
     ]
    },
    {
     "word": "base",
     "clues": [
      "pedestal",
      " stand"
     ]
    },
    {
     "word": "base",
     "clues": [
      "flat bottom on which something sits"
     ]
    },
    {
     "word": "base",
     "clues": [
      "bottom side of a geometric figure"
     ]
    },
    {
     "word": "baseball",
     "clues": [
      "baseball game"
     ]
    },
    {
     "word": "basin",
     "clues": [
      "washbasin",
      " washbowl",
      " washstand",
      " lavatory"
     ]
    },
    {
     "word": "basis",
     "clues": [
      "base",
      " foundation",
      " fundament"
     ]
    },
    {
     "word": "basket",
     "clues": [
      "handbasket"
     ]
    },
    {
     "word": "basketball",
     "clues": [
      "hoops",
      " basketball game"
     ]
    },
    {
     "word": "bat",
     "clues": [
      "nocturnal mouselike mammal"
     ]
    },
    {
     "word": "bathtub",
     "clues": [
      "bath",
      " bathing tub",
      " tub"
     ]
    },
    {
     "word": "bathroom",
     "clues": [
      "bath",
      " toilet",
      " lavatory"
     ]
    },
    {
     "word": "battery",
     "clues": [
      "assault"
     ]
    },
    {
     "word": "battery",
     "clues": [
      "electric battery"
     ]
    },
    {
     "word": "battle",
     "clues": [
      "conflict",
      " fight",
      " engagement"
     ]
    },
    {
     "word": "battlefield",
     "clues": [
      "battleground",
      " field of battle",
      " field"
     ]
    },
    {
     "word": "bay",
     "clues": [
      "indentation of a shoreline"
     ]
    },
    {
     "word": "beach",
     "clues": [
      "shore"
     ]
    },
    {
     "word": "beam",
     "clues": [
      "long thick piece of wood",
      " metal or concrete"
     ]
    },
    {
     "word": "beam",
     "clues": [
      "light beam",
      " ray"
     ]
    },
    {
     "word": "bean",
     "clues": [
      "edible bean"
     ]
    },
    {
     "word": "bear",
     "clues": [
      "omnivorous mammal"
     ]
    },
    {
     "word": "beard",
     "clues": [
      "facial hair"
     ]
    },
    {
     "word": "beat",
     "clues": [
      "pulse",
      " pulsation",
      " heartbeat"
     ]
    },
    {
     "word": "bed",
     "clues": [
      "piece of furniture"
     ]
    },
    {
     "word": "bed",
     "clues": [
      "plot of ground in which plants are growing"
     ]
    },
    {
     "word": "bedroom",
     "clues": [
      "sleeping room"
     ]
    },
    {
     "word": "bee",
     "clues": [
      "insect"
     ]
    },
    {
     "word": "beef",
     "clues": [
      "meat"
     ]
    },
    {
     "word": "beer",
     "clues": [
      "alcoholic beverage"
     ]
    },
    {
     "word": "beginning",
     "clues": [
      "first part or section of something"
     ]
    },
    {
     "word": "behavior",
     "clues": [
      "conduct"
     ]
    },
    {
     "word": "belief",
     "clues": [
      "cognitive content held as true"
     ]
    },
    {
     "word": "bell",
     "clues": [
      "doorbell",
      " buzzer"
     ]
    },
    {
     "word": "belly",
     "clues": [
      "abdomen",
      " stomach"
     ]
    },
    {
     "word": "belt",
     "clues": [
      "clothing accessory"
     ]
    },
    {
     "word": "bench",
     "clues": [
      "long seat"
     ]
    },
    {
     "word": "bench",
     "clues": [
      "workbench"
     ]
    },
    {
     "word": "beneficiary",
     "clues": [
      "recipient"
     ]
    },
    {
     "word": "benefit",
     "clues": [
      "welfare"
     ]
    },
    {
     "word": "benefit",
     "clues": [
      "performance to raise money for a charitable cause"
     ]
    },
    {
     "word": "berry",
     "clues": [
      "small edible fruit"
     ]
    },
    {
     "word": "bet",
     "clues": [
      "wager"
     ]
    },
    {
     "word": "Bible",
     "clues": [
      "Christian Bible",
      " Book",
      " Good Book",
      " Holy Scripture"
     ]
    },
    {
     "word": "motorcycle",
     "clues": [
      "motorbike",
      " bike"
     ]
    },
    {
     "word": "bill",
     "clues": [
      "beak"
     ]
    },
    {
     "word": "bill",
     "clues": [
      "circular",
      " handbill",
      " broadside",
      " broadsheet",
      " flier"
     ]
    },
    {
     "word": "bin",
     "clues": [
      "container"
     ]
    },
    {
     "word": "biography",
     "clues": [
      "life story"
     ]
    },
    {
     "word": "biology",
     "clues": [
      "plant and animal life"
     ]
    },
    {
     "word": "bird",
     "clues": [
      "warm-blooded egg-laying vertebrate"
     ]
    },
    {
     "word": "birthday",
     "clues": [
      "anniversary of the day someone is born"
     ]
    },
    {
     "word": "biscuit",
     "clues": [
      "cookie"
     ]
    },
    {
     "word": "bishop",
     "clues": [
      "clergyman"
     ]
    },
    {
     "word": "bitch",
     "clues": [
      "female dog"
     ]
    },
    {
     "word": "bitch",
     "clues": [
      "unpleasant woman"
     ]
    },
    {
     "word": "snack",
     "clues": [
      "bite",
      " collation",
      " light meal"
     ]
    },
    {
     "word": "bite",
     "clues": [
      "sting",
      " insect bite"
     ]
    },
    {
     "word": "black",
     "clues": [
      "total darkness",
      " blackness"
     ]
    },
    {
     "word": "blackmail",
     "clues": [
      "extortion"
     ]
    },
    {
     "word": "blade",
     "clues": [
      "part of a knife"
     ]
    },
    {
     "word": "blade",
     "clues": [
      "leaf blade"
     ]
    },
    {
     "word": "blast",
     "clues": [
      "explosion"
     ]
    },
    {
     "word": "block",
     "clues": [
      "city block"
     ]
    },
    {
     "word": "block",
     "clues": [
      "cube"
     ]
    },
    {
     "word": "bloodshed",
     "clues": [
      "gore"
     ]
    },
    {
     "word": "blow",
     "clues": [
      "powerful stroke"
     ]
    },
    {
     "word": "blow",
     "clues": [
      "reversal",
      " setback"
     ]
    },
    {
     "word": "blue",
     "clues": [
      "blueness",
      " color"
     ]
    },
    {
     "word": "blu",
     "clues": [
      "jean] jeans",
      " denim pants"
     ]
    },
    {
     "word": "board",
     "clues": [
      "gameboard"
     ]
    },
    {
     "word": "board",
     "clues": [
      "committee having supervisory powers"
     ]
    },
    {
     "word": "board",
     "clues": [
      "plank",
      " stout length of sawn timber"
     ]
    },
    {
     "word": "boat",
     "clues": [
      "a small vessel for travel on water"
     ]
    },
    {
     "word": "body",
     "clues": [
      "organic structure",
      " physical structure"
     ]
    },
    {
     "word": "body",
     "clues": [
      "torso",
      " trunk"
     ]
    },
    {
     "word": "body",
     "clues": [
      "dead body"
     ]
    },
    {
     "word": "bolt",
     "clues": [
      "type of screw that screws into a nut"
     ]
    },
    {
     "word": "bolt",
     "clues": [
      "thunderbolt",
      " bolt of lightning"
     ]
    },
    {
     "word": "bomb",
     "clues": [
      "explosive device"
     ]
    },
    {
     "word": "bomber",
     "clues": [
      "military aircraft"
     ]
    },
    {
     "word": "bomber",
     "clues": [
      "person who plants bombs"
     ]
    },
    {
     "word": "bond",
     "clues": [
      "shackle",
      " hamper"
     ]
    },
    {
     "word": "bond",
     "clues": [
      "bail"
     ]
    },
    {
     "word": "bond",
     "clues": [
      "alliance"
     ]
    },
    {
     "word": "bone",
     "clues": [
      "body part"
     ]
    },
    {
     "word": "book",
     "clues": [
      "volume"
     ]
    },
    {
     "word": "book",
     "clues": [
      "written work"
     ]
    },
    {
     "word": "boom",
     "clues": [
      "economic prosperity"
     ]
    },
    {
     "word": "boot",
     "clues": [
      "footwear"
     ]
    },
    {
     "word": "border",
     "clues": [
      "boundary line",
      " borderline",
      " delimitation"
     ]
    },
    {
     "word": "bottle",
     "clues": [
      "vessel"
     ]
    },
    {
     "word": "freighter",
     "clues": [
      "merchant ship"
     ]
    },
    {
     "word": "bottom",
     "clues": [
      "underside",
      " undersurface"
     ]
    },
    {
     "word": "bow",
     "clues": [
      "arrow launcher"
     ]
    },
    {
     "word": "bow",
     "clues": [
      "interlaced ribbons"
     ]
    },
    {
     "word": "bowel",
     "clues": [
      "intestine",
      " gut"
     ]
    },
    {
     "word": "bowl",
     "clues": [
      "vessel"
     ]
    },
    {
     "word": "stadium",
     "clues": [
      "bowl",
      " arena",
      " sports stadium"
     ]
    },
    {
     "word": "box",
     "clues": [
      "container"
     ]
    },
    {
     "word": "boy",
     "clues": [
      "young male",
      " male child"
     ]
    },
    {
     "word": "bracket",
     "clues": [
      "punctuation mark"
     ]
    },
    {
     "word": "bracket",
     "clues": [
      "category"
     ]
    },
    {
     "word": "brain",
     "clues": [
      "encephalon",
      " grey matter"
     ]
    },
    {
     "word": "brain",
     "clues": [
      "genius",
      " mastermind"
     ]
    },
    {
     "word": "brake",
     "clues": [
      "restraint used to stop a vehicle"
     ]
    },
    {
     "word": "branch",
     "clues": [
      "limb"
     ]
    },
    {
     "word": "brand",
     "clues": [
      "make"
     ]
    },
    {
     "word": "bread",
     "clues": [
      "breadstuff",
      " food made from dough"
     ]
    },
    {
     "word": "break",
     "clues": [
      "fracture"
     ]
    },
    {
     "word": "break",
     "clues": [
      "pause",
      " intermission",
      " interruption",
      " suspension"
     ]
    },
    {
     "word": "breakdown",
     "clues": [
      "equipment failure"
     ]
    },
    {
     "word": "breakdown",
     "clues": [
      "mental or physical crack-up"
     ]
    },
    {
     "word": "breakfast",
     "clues": [
      "morning meal"
     ]
    },
    {
     "word": "breast",
     "clues": [
      "bosom",
      " tit"
     ]
    },
    {
     "word": "breeze",
     "clues": [
      "zephyr",
      " gentle wind",
      " air",
      " gust"
     ]
    },
    {
     "word": "brick",
     "clues": [
      "block of baked clay"
     ]
    },
    {
     "word": "bride",
     "clues": [
      "participant in a marriage ceremony"
     ]
    },
    {
     "word": "bridge",
     "clues": [
      "span"
     ]
    },
    {
     "word": "broadcast",
     "clues": [
      "transmitted message"
     ]
    },
    {
     "word": "broccoli",
     "clues": [
      "vegetable"
     ]
    },
    {
     "word": "bronze",
     "clues": [
      "sculpture made of bronze"
     ]
    },
    {
     "word": "brother",
     "clues": [
      "sibling",
      " brother by blood or adoption"
     ]
    },
    {
     "word": "brother",
     "clues": [
      "Brother",
      " monk"
     ]
    },
    {
     "word": "brother",
     "clues": [
      "comrade"
     ]
    },
    {
     "word": "brush",
     "clues": [
      "implement with hairs or bristles"
     ]
    },
    {
     "word": "bubble",
     "clues": [
      "hollow globule of gas"
     ]
    },
    {
     "word": "bucket",
     "clues": [
      "pail"
     ]
    },
    {
     "word": "budget",
     "clues": [
      "sum of money allocated"
     ]
    },
    {
     "word": "buffet",
     "clues": [
      "meal set out on a counter"
     ]
    },
    {
     "word": "building",
     "clues": [
      "edifice"
     ]
    },
    {
     "word": "bulb",
     "clues": [
      "light bulb"
     ]
    },
    {
     "word": "bulb",
     "clues": [
      "plant bulb"
     ]
    },
    {
     "word": "bullet",
     "clues": [
      "slug",
      " projectile"
     ]
    },
    {
     "word": "bulletin",
     "clues": [
      "brief report"
     ]
    },
    {
     "word": "bundle",
     "clues": [
      "sheaf"
     ]
    },
    {
     "word": "burial",
     "clues": [
      "entombment",
      " inhumation",
      " interment"
     ]
    },
    {
     "word": "burn",
     "clues": [
      "injury"
     ]
    },
    {
     "word": "suntan",
     "clues": [
      "tan",
      " sunburn"
     ]
    },
    {
     "word": "bus",
     "clues": [
      "autobus",
      " coach"
     ]
    },
    {
     "word": "bush",
     "clues": [
      "shrub",
      " woody plant"
     ]
    },
    {
     "word": "business",
     "clues": [
      "occupation",
      " job",
      " line of work",
      " line"
     ]
    },
    {
     "word": "business",
     "clues": [
      "commercial enterprise",
      " business enterprise"
     ]
    },
    {
     "word": "butterfly",
     "clues": [
      "diurnal insect"
     ]
    },
    {
     "word": "button",
     "clues": [
      "round fastener for clothes"
     ]
    },
    {
     "word": "button",
     "clues": [
      "push button"
     ]
    },
    {
     "word": "cabin",
     "clues": [
      "aircraft cabin"
     ]
    },
    {
     "word": "cabin",
     "clues": [
      "small wooden house"
     ]
    },
    {
     "word": "cabinet",
     "clues": [
      "cupboard-like repository"
     ]
    },
    {
     "word": "cabinet",
     "clues": [
      "persons appointed by a head of state"
     ]
    },
    {
     "word": "cable",
     "clues": [
      "strong thick rope"
     ]
    },
    {
     "word": "cafe",
     "clues": [
      "coffee shop",
      " coffee bar"
     ]
    },
    {
     "word": "cage",
     "clues": [
      "coop"
     ]
    },
    {
     "word": "cake",
     "clues": [
      "mixture of flour and sugar and eggs"
     ]
    },
    {
     "word": "calculation",
     "clues": [
      "computation",
      " figuring",
      " reckoning"
     ]
    },
    {
     "word": "calculation",
     "clues": [
      "deliberation",
      " planning"
     ]
    },
    {
     "word": "calendar",
     "clues": [
      "system of timekeeping"
     ]
    },
    {
     "word": "calf",
     "clues": [
      "young cattle"
     ]
    },
    {
     "word": "call",
     "clues": [
      "brief social visit"
     ]
    },
    {
     "word": "call",
     "clues": [
      "phone call",
      " telephone call"
     ]
    },
    {
     "word": "call",
     "clues": [
      "cry",
      " outcry",
      " yell",
      " shout",
      " vociferation"
     ]
    },
    {
     "word": "call",
     "clues": [
      "birdcall",
      " birdsong",
      " song"
     ]
    },
    {
     "word": "calorie",
     "clues": [
      "kilocalorie",
      " nutritionist's calorie"
     ]
    },
    {
     "word": "camera",
     "clues": [
      "photographic camera"
     ]
    },
    {
     "word": "camp",
     "clues": [
      "forced labor prison"
     ]
    },
    {
     "word": "camp",
     "clues": [
      "summer camp"
     ]
    },
    {
     "word": "camp",
     "clues": [
      "refugee camp"
     ]
    },
    {
     "word": "clique",
     "clues": [
      "coterie",
      " ingroup",
      " inner circle",
      " pack",
      " camp"
     ]
    },
    {
     "word": "campaign",
     "clues": [
      "military campaign"
     ]
    },
    {
     "word": "safari",
     "clues": [
      "hunting expedition"
     ]
    },
    {
     "word": "campaign",
     "clues": [
      "political campaign"
     ]
    },
    {
     "word": "cancer",
     "clues": [
      "malignant disease"
     ]
    },
    {
     "word": "candidate",
     "clues": [
      "campaigner",
      " nominee"
     ]
    },
    {
     "word": "candle",
     "clues": [
      "taper",
      " wax light"
     ]
    },
    {
     "word": "cane",
     "clues": [
      "walking stick"
     ]
    },
    {
     "word": "canvas",
     "clues": [
      "canvass",
      " fabric"
     ]
    },
    {
     "word": "cap",
     "clues": [
      "headdress"
     ]
    },
    {
     "word": "cap",
     "clues": [
      "bottle top"
     ]
    },
    {
     "word": "capital",
     "clues": [
      "capital letter",
      " upper case"
     ]
    },
    {
     "word": "capital",
     "clues": [
      "seat of government"
     ]
    },
    {
     "word": "capital",
     "clues": [
      "wealth in the form of money or property"
     ]
    },
    {
     "word": "captain",
     "clues": [
      "skipper",
      " naval officer"
     ]
    },
    {
     "word": "car",
     "clues": [
      "auto",
      " automobile",
      " motorcar"
     ]
    },
    {
     "word": "carbon",
     "clues": [
      "C",
      " atomic number 6"
     ]
    },
    {
     "word": "card",
     "clues": [
      "playing card"
     ]
    },
    {
     "word": "card",
     "clues": [
      "postcard"
     ]
    },
    {
     "word": "card",
     "clues": [
      "identity card"
     ]
    },
    {
     "word": "card",
     "clues": [
      "calling card",
      " visiting card"
     ]
    },
    {
     "word": "card",
     "clues": [
      "menu",
      " bill of fare",
      " carte du jour",
      " carte"
     ]
    },
    {
     "word": "care",
     "clues": [
      "maintenance",
      " upkeep"
     ]
    },
    {
     "word": "care",
     "clues": [
      "attention",
      " aid",
      " tending"
     ]
    },
    {
     "word": "care",
     "clues": [
      "caution",
      " precaution",
      " forethought",
      " judiciousness"
     ]
    },
    {
     "word": "concern",
     "clues": [
      "fear",
      " anxious feeling"
     ]
    },
    {
     "word": "career",
     "clues": [
      "calling",
      " vocation"
     ]
    },
    {
     "word": "carpet",
     "clues": [
      "rug",
      " carpeting"
     ]
    },
    {
     "word": "carriage",
     "clues": [
      "baby carriage",
      " perambulator",
      " pram",
      " stroller"
     ]
    },
    {
     "word": "posture",
     "clues": [
      "bearing",
      " carriage"
     ]
    },
    {
     "word": "mai",
     "clues": [
      "carrier] mailman",
      " postman",
      " letter carrier"
     ]
    },
    {
     "word": "carrot",
     "clues": [
      "deep orange edible root"
     ]
    },
    {
     "word": "cart",
     "clues": [
      "handcart",
      " pushcart"
     ]
    },
    {
     "word": "case",
     "clues": [
      "lawsuit",
      " suit",
      " cause",
      " causa"
     ]
    },
    {
     "word": "case",
     "clues": [
      "display case",
      " showcase",
      " vitrine"
     ]
    },
    {
     "word": "case",
     "clues": [
      "instance",
      " example"
     ]
    },
    {
     "word": "cash",
     "clues": [
      "hard cash",
      " hard currency"
     ]
    },
    {
     "word": "cassette",
     "clues": [
      "container holding magnetic tape"
     ]
    },
    {
     "word": "cast",
     "clues": [
      "plaster cast",
      " plaster bandage"
     ]
    },
    {
     "word": "cast",
     "clues": [
      "actors"
     ]
    },
    {
     "word": "castle",
     "clues": [
      "fortified building"
     ]
    },
    {
     "word": "casualty",
     "clues": [
      "someone injured or killed"
     ]
    },
    {
     "word": "cat",
     "clues": [
      "feline"
     ]
    },
    {
     "word": "catalogue",
     "clues": [
      "catalog"
     ]
    },
    {
     "word": "catch",
     "clues": [
      "hidden drawback"
     ]
    },
    {
     "word": "category",
     "clues": [
      "general concept"
     ]
    },
    {
     "word": "cathedral",
     "clues": [
      "large church"
     ]
    },
    {
     "word": "cattle",
     "clues": [
      "cows",
      " bull"
     ]
    },
    {
     "word": "cause",
     "clues": [
      "causal agent"
     ]
    },
    {
     "word": "cave",
     "clues": [
      "underground enclosure"
     ]
    },
    {
     "word": "ceiling",
     "clues": [
      "surface of a room"
     ]
    },
    {
     "word": "ceiling",
     "clues": [
      "cap",
      " upper limit"
     ]
    },
    {
     "word": "celebration",
     "clues": [
      "festivity"
     ]
    },
    {
     "word": "cell",
     "clues": [
      "basic structural and functional unit of all organisms"
     ]
    },
    {
     "word": "cell",
     "clues": [
      "jail cell"
     ]
    },
    {
     "word": "cell",
     "clues": [
      "cubicle"
     ]
    },
    {
     "word": "cel",
     "clues": [
      "phone] cellular telephone"
     ]
    },
    {
     "word": "cellar",
     "clues": [
      "basement"
     ]
    },
    {
     "word": "cemetery",
     "clues": [
      "graveyard",
      " burial site",
      " burial ground"
     ]
    },
    {
     "word": "censorship",
     "clues": [
      "deletion of material in art works"
     ]
    },
    {
     "word": "census",
     "clues": [
      "nose count"
     ]
    },
    {
     "word": "center",
     "clues": [
      "building dedicated to a particular activity"
     ]
    },
    {
     "word": "center",
     "clues": [
      "midpoint"
     ]
    },
    {
     "word": "center",
     "clues": [
      "middle",
      " heart"
     ]
    },
    {
     "word": "century",
     "clues": [
      "period of 100 years"
     ]
    },
    {
     "word": "cereal",
     "clues": [
      "breakfast food"
     ]
    },
    {
     "word": "ceremony",
     "clues": [
      "ceremonial occasion"
     ]
    },
    {
     "word": "chain",
     "clues": [
      "series of rings or links"
     ]
    },
    {
     "word": "necklace",
     "clues": [
      "chain"
     ]
    },
    {
     "word": "chain",
     "clues": [
      "number of similar establishments"
     ]
    },
    {
     "word": "chair",
     "clues": [
      "professorship"
     ]
    },
    {
     "word": "chair",
     "clues": [
      "seat"
     ]
    },
    {
     "word": "chalk",
     "clues": [
      "piece of chalk"
     ]
    },
    {
     "word": "challenge",
     "clues": [
      "questioning a statement"
     ]
    },
    {
     "word": "challenge",
     "clues": [
      "demanding or stimulating situation"
     ]
    },
    {
     "word": "champagne",
     "clues": [
      "bubbly wine"
     ]
    },
    {
     "word": "champion",
     "clues": [
      "champ",
      " title-holder"
     ]
    },
    {
     "word": "chance",
     "clues": [
      "probability"
     ]
    },
    {
     "word": "chance",
     "clues": [
      "luck",
      " fortune",
      " hazard"
     ]
    },
    {
     "word": "chance",
     "clues": [
      "opportunity"
     ]
    },
    {
     "word": "change",
     "clues": [
      "alteration",
      " modification"
     ]
    },
    {
     "word": "change",
     "clues": [
      "money received in return"
     ]
    },
    {
     "word": "channel",
     "clues": [
      "TV channel"
     ]
    },
    {
     "word": "channel",
     "clues": [
      "narrow body of water",
      " canal"
     ]
    },
    {
     "word": "chaos",
     "clues": [
      "pandemonium",
      " bedlam",
      " topsy-turvyness"
     ]
    },
    {
     "word": "crevice",
     "clues": [
      "cranny",
      " crack",
      " fissure"
     ]
    },
    {
     "word": "chapter",
     "clues": [
      "subdivision of a written work"
     ]
    },
    {
     "word": "character",
     "clues": [
      "grapheme",
      " graphic symbol",
      " written symbol"
     ]
    },
    {
     "word": "character",
     "clues": [
      "fictional character"
     ]
    },
    {
     "word": "character",
     "clues": [
      "good repute"
     ]
    },
    {
     "word": "characteristic",
     "clues": [
      "distinguishing quality"
     ]
    },
    {
     "word": "charge",
     "clues": [
      "billing"
     ]
    },
    {
     "word": "charge",
     "clues": [
      "accusation"
     ]
    },
    {
     "word": "charge",
     "clues": [
      "electric charge"
     ]
    },
    {
     "word": "charity",
     "clues": [
      "gift"
     ]
    },
    {
     "word": "charity",
     "clues": [
      "institution set up to provide help for the needy"
     ]
    },
    {
     "word": "charm",
     "clues": [
      "good luck charm"
     ]
    },
    {
     "word": "chart",
     "clues": [
      "map for navigation"
     ]
    },
    {
     "word": "chart",
     "clues": [
      "display of information"
     ]
    },
    {
     "word": "charter",
     "clues": [
      "document"
     ]
    },
    {
     "word": "chauvinist",
     "clues": [
      "prejudiced person"
     ]
    },
    {
     "word": "check",
     "clues": [
      "chess move"
     ]
    },
    {
     "word": "check",
     "clues": [
      "confirmation",
      " verification"
     ]
    },
    {
     "word": "check",
     "clues": [
      "tab",
      " restaurant bill"
     ]
    },
    {
     "word": "check",
     "clues": [
      "check mark",
      " tick"
     ]
    },
    {
     "word": "cheek",
     "clues": [
      "boldness",
      " nerve",
      " brass",
      " face"
     ]
    },
    {
     "word": "cheek",
     "clues": [
      "side of the face"
     ]
    },
    {
     "word": "cheek",
     "clues": [
      "impudence",
      " impertinence"
     ]
    },
    {
     "word": "cheese",
     "clues": [
      "food"
     ]
    },
    {
     "word": "chemistry",
     "clues": [
      "chemical science"
     ]
    },
    {
     "word": "cheque",
     "clues": [
      "check",
      " bank check"
     ]
    },
    {
     "word": "cherry",
     "clues": [
      "fruit"
     ]
    },
    {
     "word": "chest",
     "clues": [
      "chest of drawers",
      " bureau",
      " dresser"
     ]
    },
    {
     "word": "chest",
     "clues": [
      "thorax",
      " pectus",
      " part of the human torso"
     ]
    },
    {
     "word": "chicken",
     "clues": [
      "domestic fowl"
     ]
    },
    {
     "word": "chicken",
     "clues": [
      "wimp",
      " crybaby"
     ]
    },
    {
     "word": "chief",
     "clues": [
      "foreman",
      " boss"
     ]
    },
    {
     "word": "child",
     "clues": [
      "kid"
     ]
    },
    {
     "word": "chimney",
     "clues": [
      "flue"
     ]
    },
    {
     "word": "chin",
     "clues": [
      "lower jaw"
     ]
    },
    {
     "word": "chip",
     "clues": [
      "microchip"
     ]
    },
    {
     "word": "chip",
     "clues": [
      "crisp",
      " potato chip"
     ]
    },
    {
     "word": "chip",
     "clues": [
      "bit",
      " flake",
      " fleck",
      " scrap",
      " small fragment"
     ]
    },
    {
     "word": "chocolate",
     "clues": [
      "sweet food"
     ]
    },
    {
     "word": "choice",
     "clues": [
      "option",
      " alternative"
     ]
    },
    {
     "word": "chord",
     "clues": [
      "combination of notes"
     ]
    },
    {
     "word": "chorus",
     "clues": [
      "choir",
      " singing group"
     ]
    },
    {
     "word": "church",
     "clues": [
      "church building"
     ]
    },
    {
     "word": "cigarette",
     "clues": [
      "butt",
      " fag"
     ]
    },
    {
     "word": "cinema",
     "clues": [
      "movie theater",
      " theater"
     ]
    },
    {
     "word": "circle",
     "clues": [
      "geometric figure"
     ]
    },
    {
     "word": "circulation",
     "clues": [
      "movement through a circuit"
     ]
    },
    {
     "word": "circumstance",
     "clues": [
      "context"
     ]
    },
    {
     "word": "citizen",
     "clues": [
      "member of a state"
     ]
    },
    {
     "word": "city",
     "clues": [
      "metropolis",
      " urban center"
     ]
    },
    {
     "word": "civilian",
     "clues": [
      "nonmilitary citizen"
     ]
    },
    {
     "word": "civilization",
     "clues": [
      "society in an advanced state"
     ]
    },
    {
     "word": "claim",
     "clues": [
      "demand"
     ]
    },
    {
     "word": "claim",
     "clues": [
      "assertion"
     ]
    },
    {
     "word": "clash",
     "clues": [
      "friction",
      " conflict"
     ]
    },
    {
     "word": "class",
     "clues": [
      "social class",
      " socio-economic class"
     ]
    },
    {
     "word": "class",
     "clues": [
      "form",
      " grade"
     ]
    },
    {
     "word": "classroom",
     "clues": [
      "schoolroom"
     ]
    },
    {
     "word": "corpse",
     "clues": [
      "cadaver",
      " remains"
     ]
    },
    {
     "word": "clay",
     "clues": [
      "fine-grained soil"
     ]
    },
    {
     "word": "clearance",
     "clues": [
      "headroom"
     ]
    },
    {
     "word": "clerk",
     "clues": [
      "clerical worker"
     ]
    },
    {
     "word": "salesperson",
     "clues": [
      "salesclerk",
      " shop clerk"
     ]
    },
    {
     "word": "climate",
     "clues": [
      "clime",
      " weather"
     ]
    },
    {
     "word": "clinic",
     "clues": [
      "medical establishment"
     ]
    },
    {
     "word": "clock",
     "clues": [
      "timepiece"
     ]
    },
    {
     "word": "clothes",
     "clues": [
      "apparel",
      " wearing apparel",
      " dress"
     ]
    },
    {
     "word": "club",
     "clues": [
      "bat",
      " stout stick that is larger at one end"
     ]
    },
    {
     "word": "club",
     "clues": [
      "playing card in the minor suit of clubs"
     ]
    },
    {
     "word": "club",
     "clues": [
      "cabaret",
      " nightclub",
      " nightspot"
     ]
    },
    {
     "word": "club",
     "clues": [
      "society",
      " guild",
      " gild",
      " lodge",
      " order"
     ]
    },
    {
     "word": "clue",
     "clues": [
      "cue",
      " evidence",
      " hint"
     ]
    },
    {
     "word": "cluster",
     "clues": [
      "bunch",
      " clump"
     ]
    },
    {
     "word": "coach",
     "clues": [
      "private instructor",
      " tutor"
     ]
    },
    {
     "word": "coal",
     "clues": [
      "fossil fuel"
     ]
    },
    {
     "word": "coalition",
     "clues": [
      "coalescence",
      " conglutination"
     ]
    },
    {
     "word": "coast",
     "clues": [
      "seashore",
      " seacoast",
      " sea-coast"
     ]
    },
    {
     "word": "coat",
     "clues": [
      "garment"
     ]
    },
    {
     "word": "coat",
     "clues": [
      "coating",
      " thin layer"
     ]
    },
    {
     "word": "code",
     "clues": [
      "coding system for brief or secret messages"
     ]
    },
    {
     "word": "code",
     "clues": [
      "computer code"
     ]
    },
    {
     "word": "coffee",
     "clues": [
      "beverage"
     ]
    },
    {
     "word": "coffin",
     "clues": [
      "casket"
     ]
    },
    {
     "word": "coin",
     "clues": [
      "money"
     ]
    },
    {
     "word": "coincidence",
     "clues": [
      "happenstance"
     ]
    },
    {
     "word": "cold",
     "clues": [
      "coldness",
      " low temperature"
     ]
    },
    {
     "word": "cold",
     "clues": [
      "common cold"
     ]
    },
    {
     "word": "collar",
     "clues": [
      "harness"
     ]
    },
    {
     "word": "colleague",
     "clues": [
      "co-worker",
      " fellow worker"
     ]
    },
    {
     "word": "collection",
     "clues": [
      "aggregation",
      " accumulation",
      " assemblage"
     ]
    },
    {
     "word": "college",
     "clues": [
      "institution of higher education"
     ]
    },
    {
     "word": "colon",
     "clues": [
      "part of the large intestine"
     ]
    },
    {
     "word": "colon",
     "clues": [
      "punctuation mark"
     ]
    },
    {
     "word": "colony",
     "clues": [
      "politically controlled country"
     ]
    },
    {
     "word": "color",
     "clues": [
      "hue"
     ]
    },
    {
     "word": "column",
     "clues": [
      "pillar",
      " support"
     ]
    },
    {
     "word": "column",
     "clues": [
      "linear array of numbers"
     ]
    },
    {
     "word": "coma",
     "clues": [
      "deep unconsciousness"
     ]
    },
    {
     "word": "combination",
     "clues": [
      "things occurring together"
     ]
    },
    {
     "word": "comedy",
     "clues": [
      "humorous drama"
     ]
    },
    {
     "word": "comfort",
     "clues": [
      "consolation",
      " solace"
     ]
    },
    {
     "word": "comfort",
     "clues": [
      "comfortableness"
     ]
    },
    {
     "word": "comfort",
     "clues": [
      "ease",
      " financial freedom"
     ]
    },
    {
     "word": "command",
     "clues": [
      "control",
      " mastery"
     ]
    },
    {
     "word": "command",
     "clues": [
      "authoritative instruction"
     ]
    },
    {
     "word": "comment",
     "clues": [
      "remark"
     ]
    },
    {
     "word": "gossip",
     "clues": [
      "scuttlebutt"
     ]
    },
    {
     "word": "commerce",
     "clues": [
      "commercialism",
      " mercantilism"
     ]
    },
    {
     "word": "commission",
     "clues": [
      "deputation",
      " delegation"
     ]
    },
    {
     "word": "commission",
     "clues": [
      "fee"
     ]
    },
    {
     "word": "commitment",
     "clues": [
      "allegiance",
      " loyalty",
      " dedication"
     ]
    },
    {
     "word": "committee",
     "clues": [
      "commission"
     ]
    },
    {
     "word": "communication",
     "clues": [
      "something communicated between people"
     ]
    },
    {
     "word": "communist",
     "clues": [
      "Marxist"
     ]
    },
    {
     "word": "community",
     "clues": [
      "residential district",
      " residential area"
     ]
    },
    {
     "word": "compact",
     "clues": [
      "compact car"
     ]
    },
    {
     "word": "company",
     "clues": [
      "troupe"
     ]
    },
    {
     "word": "company",
     "clues": [
      "companionship",
      " fellowship",
      " society"
     ]
    },
    {
     "word": "compartment",
     "clues": [
      "small space or subdivision for storage"
     ]
    },
    {
     "word": "compensation",
     "clues": [
      "recompense",
      " payment"
     ]
    },
    {
     "word": "competence",
     "clues": [
      "competency"
     ]
    },
    {
     "word": "competition",
     "clues": [
      "contention",
      " rivalry"
     ]
    },
    {
     "word": "competition",
     "clues": [
      "contest"
     ]
    },
    {
     "word": "compliance",
     "clues": [
      "conformity",
      " abidance"
     ]
    },
    {
     "word": "complication",
     "clues": [
      "complex situation"
     ]
    },
    {
     "word": "composer",
     "clues": [
      "music composer"
     ]
    },
    {
     "word": "compound",
     "clues": [
      "chemical compound"
     ]
    },
    {
     "word": "compromise",
     "clues": [
      "allowance",
      " accommodation with concessions"
     ]
    },
    {
     "word": "computer",
     "clues": [
      "computing machine"
     ]
    },
    {
     "word": "computing",
     "clues": [
      "computer science"
     ]
    },
    {
     "word": "concentration",
     "clues": [
      "strength of solution"
     ]
    },
    {
     "word": "concentration",
     "clues": [
      "engrossment",
      " absorption",
      " immersion"
     ]
    },
    {
     "word": "concept",
     "clues": [
      "conception",
      " construct"
     ]
    },
    {
     "word": "conception",
     "clues": [
      "fertilization"
     ]
    },
    {
     "word": "concern",
     "clues": [
      "interest"
     ]
    },
    {
     "word": "concern",
     "clues": [
      "feeling of sympathy"
     ]
    },
    {
     "word": "concert",
     "clues": [
      "musical performance"
     ]
    },
    {
     "word": "concession",
     "clues": [
      "point conceded"
     ]
    },
    {
     "word": "conclusion",
     "clues": [
      "ending",
      " finish"
     ]
    },
    {
     "word": "concrete",
     "clues": [
      "strong building material"
     ]
    },
    {
     "word": "condition",
     "clues": [
      "circumstance"
     ]
    },
    {
     "word": "condition",
     "clues": [
      "precondition",
      " stipulation"
     ]
    },
    {
     "word": "terms",
     "clues": [
      "condition"
     ]
    },
    {
     "word": "condition",
     "clues": [
      "status",
      " state"
     ]
    },
    {
     "word": "conductor",
     "clues": [
      "person who collects fares"
     ]
    },
    {
     "word": "conductor",
     "clues": [
      "substance that readily transmits electricity or heat"
     ]
    },
    {
     "word": "conference",
     "clues": [
      "meeting"
     ]
    },
    {
     "word": "confession",
     "clues": [
      "admission of misdeeds"
     ]
    },
    {
     "word": "confidence",
     "clues": [
      "feeling of trust"
     ]
    },
    {
     "word": "conflict",
     "clues": [
      "incompatibility of dates or events"
     ]
    },
    {
     "word": "conflict",
     "clues": [
      "state of opposition between persons or ideas"
     ]
    },
    {
     "word": "confrontation",
     "clues": [
      "clash"
     ]
    },
    {
     "word": "confusion",
     "clues": [
      "mix-up"
     ]
    },
    {
     "word": "conglomerate",
     "clues": [
      "empire",
      " group of companies"
     ]
    },
    {
     "word": "congress",
     "clues": [
      "national legislative assembly"
     ]
    },
    {
     "word": "connection",
     "clues": [
      "shifting from one transportation to another"
     ]
    },
    {
     "word": "connection",
     "clues": [
      "person who is influential"
     ]
    },
    {
     "word": "connection",
     "clues": [
      "link",
      " connectedness"
     ]
    },
    {
     "word": "conscience",
     "clues": [
      "scruples",
      " moral sense"
     ]
    },
    {
     "word": "consciousness",
     "clues": [
      "alert cognitive state"
     ]
    },
    {
     "word": "consensus",
     "clues": [
      "agreement"
     ]
    },
    {
     "word": "conservation",
     "clues": [
      "preservation",
      " environmental management"
     ]
    },
    {
     "word": "consideration",
     "clues": [
      "thoughtfulness"
     ]
    },
    {
     "word": "consideration",
     "clues": [
      "careful thought"
     ]
    },
    {
     "word": "conspiracy",
     "clues": [
      "cabal",
      " plot"
     ]
    },
    {
     "word": "constellation",
     "clues": [
      "configuration of stars"
     ]
    },
    {
     "word": "constituency",
     "clues": [
      "body of voters"
     ]
    },
    {
     "word": "constitution",
     "clues": [
      "composition",
      " makeup"
     ]
    },
    {
     "word": "constitution",
     "clues": [
      "fundamental law"
     ]
    },
    {
     "word": "constraint",
     "clues": [
      "restraint",
      " physical constraint"
     ]
    },
    {
     "word": "consultation",
     "clues": [
      "discussion to consider a point"
     ]
    },
    {
     "word": "consumer",
     "clues": [
      "person who uses goods or services"
     ]
    },
    {
     "word": "consumption",
     "clues": [
      "ingestion"
     ]
    },
    {
     "word": "contact",
     "clues": [
      "close interaction"
     ]
    },
    {
     "word": "contact",
     "clues": [
      "touch"
     ]
    },
    {
     "word": "contact",
     "clues": [
      "middleman"
     ]
    },
    {
     "word": "contemporary",
     "clues": [
      "coeval"
     ]
    },
    {
     "word": "contempt",
     "clues": [
      "disdain",
      " scorn",
      " despite",
      " lack of respect"
     ]
    },
    {
     "word": "content",
     "clues": [
      "capacity"
     ]
    },
    {
     "word": "context",
     "clues": [
      "linguistic context",
      " context of use"
     ]
    },
    {
     "word": "continuation",
     "clues": [
      "lengthiness",
      " prolongation",
      " extension"
     ]
    },
    {
     "word": "contract",
     "clues": [
      "binding agreement between two or more persons"
     ]
    },
    {
     "word": "contraction",
     "clues": [
      "muscular contraction"
     ]
    },
    {
     "word": "contradiction",
     "clues": [
      "contradiction in terms"
     ]
    },
    {
     "word": "contrary",
     "clues": [
      "exact opposition"
     ]
    },
    {
     "word": "contrast",
     "clues": [
      "opposition or dissimilarity"
     ]
    },
    {
     "word": "contribution",
     "clues": [
      "donation"
     ]
    },
    {
     "word": "control",
     "clues": [
      "restraint",
      " discipline in personal activities"
     ]
    },
    {
     "word": "control",
     "clues": [
      "dominance"
     ]
    },
    {
     "word": "convenience",
     "clues": [
      "appliance",
      " contraption",
      " gadget",
      " gizmo"
     ]
    },
    {
     "word": "convention",
     "clues": [
      "custom"
     ]
    },
    {
     "word": "convention",
     "clues": [
      "large formal assembly"
     ]
    },
    {
     "word": "conversation",
     "clues": [
      "talk"
     ]
    },
    {
     "word": "conviction",
     "clues": [
      "strong belief"
     ]
    },
    {
     "word": "cooperation",
     "clues": [
      "group action",
      " collaboration"
     ]
    },
    {
     "word": "copper",
     "clues": [
      "Cu",
      " metal"
     ]
    },
    {
     "word": "copy",
     "clues": [
      "secondary representation of an original"
     ]
    },
    {
     "word": "copyright",
     "clues": [
      "right of publication"
     ]
    },
    {
     "word": "cord",
     "clues": [
      "corduroy",
      " fabric"
     ]
    },
    {
     "word": "core",
     "clues": [
      "center of an object"
     ]
    },
    {
     "word": "corn",
     "clues": [
      "edible corn"
     ]
    },
    {
     "word": "corner",
     "clues": [
      "point where three areas or surfaces meet"
     ]
    },
    {
     "word": "corner",
     "clues": [
      "recess",
      " recession",
      " niche"
     ]
    },
    {
     "word": "correction",
     "clues": [
      "rectification"
     ]
    },
    {
     "word": "correspondence",
     "clues": [
      "exchange of letters"
     ]
    },
    {
     "word": "corruption",
     "clues": [
      "bribery"
     ]
    },
    {
     "word": "costume",
     "clues": [
      "attire for special occasions"
     ]
    },
    {
     "word": "cottage",
     "clues": [
      "bungalow",
      " small house"
     ]
    },
    {
     "word": "cotton",
     "clues": [
      "cotton cloth",
      " fabric"
     ]
    },
    {
     "word": "council",
     "clues": [
      "administrative body"
     ]
    },
    {
     "word": "counter",
     "clues": [
      "business table"
     ]
    },
    {
     "word": "country",
     "clues": [
      "state",
      " nation",
      " land"
     ]
    },
    {
     "word": "country",
     "clues": [
      "rural area"
     ]
    },
    {
     "word": "countryside",
     "clues": [
      "rural regions"
     ]
    },
    {
     "word": "coup",
     "clues": [
      "coup d'etat",
      " putsch",
      " takeover"
     ]
    },
    {
     "word": "couple",
     "clues": [
      "twosome",
      " duo",
      " duet"
     ]
    },
    {
     "word": "courage",
     "clues": [
      "bravery",
      " braveness"
     ]
    },
    {
     "word": "course",
     "clues": [
      "course of action"
     ]
    },
    {
     "word": "course",
     "clues": [
      "course of study",
      " course of instruction",
      " class"
     ]
    },
    {
     "word": "course",
     "clues": [
      "path",
      " track"
     ]
    },
    {
     "word": "court",
     "clues": [
      "courtyard"
     ]
    },
    {
     "word": "court",
     "clues": [
      "tribunal",
      " judicature"
     ]
    },
    {
     "word": "court",
     "clues": [
      "royal court"
     ]
    },
    {
     "word": "courtesy",
     "clues": [
      "considerate act"
     ]
    },
    {
     "word": "cousin",
     "clues": [
      "first cousin"
     ]
    },
    {
     "word": "cover",
     "clues": [
      "blanket"
     ]
    },
    {
     "word": "cover",
     "clues": [
      "screen",
      " concealment"
     ]
    },
    {
     "word": "coverage",
     "clues": [
      "reporting",
      " reportage"
     ]
    },
    {
     "word": "coverage",
     "clues": [
      "insurance coverage"
     ]
    },
    {
     "word": "cow",
     "clues": [
      "bovine"
     ]
    },
    {
     "word": "wisecrack",
     "clues": [
      "crack",
      " quip",
      " witty remark"
     ]
    },
    {
     "word": "crack",
     "clues": [
      "cleft",
      " crevice",
      " fissure"
     ]
    },
    {
     "word": "cunning",
     "clues": [
      "craftiness",
      " guile",
      " slyness",
      " wiliness"
     ]
    },
    {
     "word": "craft",
     "clues": [
      "craftsmanship",
      " workmanship"
     ]
    },
    {
     "word": "craftsman",
     "clues": [
      "artisan"
     ]
    },
    {
     "word": "crash",
     "clues": [
      "wreck",
      " serious accident"
     ]
    },
    {
     "word": "crash",
     "clues": [
      "collapse",
      " financial decline"
     ]
    },
    {
     "word": "cream",
     "clues": [
      "ointment",
      " emollient",
      " balm"
     ]
    },
    {
     "word": "cream",
     "clues": [
      "fat part of milk"
     ]
    },
    {
     "word": "creation",
     "clues": [
      "creative activity"
     ]
    },
    {
     "word": "credibility",
     "clues": [
      "credibleness",
      " believability"
     ]
    },
    {
     "word": "credit",
     "clues": [
      "course credit"
     ]
    },
    {
     "word": "credit",
     "clues": [
      "recognition"
     ]
    },
    {
     "word": "credit",
     "clues": [
      "deferred payment"
     ]
    },
    {
     "word": "credit",
     "clues": [
      "money available for a client to borrow"
     ]
    },
    {
     "word": "credi",
     "clues": [
      "card] plastic money"
     ]
    },
    {
     "word": "creed",
     "clues": [
      "credo",
      " system of principles or beliefs"
     ]
    },
    {
     "word": "crew",
     "clues": [
      "men who man a ship or aircraft"
     ]
    },
    {
     "word": "cricket",
     "clues": [
      "insect"
     ]
    },
    {
     "word": "crime",
     "clues": [
      "law-breaking"
     ]
    },
    {
     "word": "criminal",
     "clues": [
      "felon",
      " crook",
      " outlaw",
      " malefactor"
     ]
    },
    {
     "word": "crisis",
     "clues": [
      "unstable situation"
     ]
    },
    {
     "word": "critic",
     "clues": [
      "one who offers opinions on art"
     ]
    },
    {
     "word": "criticism",
     "clues": [
      "critique",
      " unfavorable judgment"
     ]
    },
    {
     "word": "crop",
     "clues": [
      "harvest"
     ]
    },
    {
     "word": "cross",
     "clues": [
      "hybrid"
     ]
    },
    {
     "word": "cross",
     "clues": [
      "wooden structure"
     ]
    },
    {
     "word": "crosswalk",
     "clues": [
      "crossing",
      " crossover"
     ]
    },
    {
     "word": "crossing",
     "clues": [
      "intersection",
      " crossroad"
     ]
    },
    {
     "word": "crowd",
     "clues": [
      "large number of things or people"
     ]
    },
    {
     "word": "crown",
     "clues": [
      "diadem",
      " jewelled headdress"
     ]
    },
    {
     "word": "cruelty",
     "clues": [
      "mercilessness",
      " pitilessness",
      " ruthlessness"
     ]
    },
    {
     "word": "crutch",
     "clues": [
      "staff used as walking aid"
     ]
    },
    {
     "word": "crystal",
     "clues": [
      "fancy glassware"
     ]
    },
    {
     "word": "crystal",
     "clues": [
      "quartz glass",
      " quartz",
      " vitreous silica"
     ]
    },
    {
     "word": "cucumber",
     "clues": [
      "cuke",
      " green salad vegetable"
     ]
    },
    {
     "word": "culture",
     "clues": [
      "product of cultivating micro-organisms"
     ]
    },
    {
     "word": "culture",
     "clues": [
      "attitudes and behavior"
     ]
    },
    {
     "word": "culture",
     "clues": [
      "civilization",
      " civilisation"
     ]
    },
    {
     "word": "culture",
     "clues": [
      "polish",
      " refinement"
     ]
    },
    {
     "word": "cup",
     "clues": [
      "small open container used for drinking"
     ]
    },
    {
     "word": "cup",
     "clues": [
      "cupful"
     ]
    },
    {
     "word": "cupboard",
     "clues": [
      "closet"
     ]
    },
    {
     "word": "currency",
     "clues": [
      "money"
     ]
    },
    {
     "word": "current",
     "clues": [
      "electric current"
     ]
    },
    {
     "word": "curriculum",
     "clues": [
      "course of study",
      " academic program"
     ]
    },
    {
     "word": "curtain",
     "clues": [
      "drape"
     ]
    },
    {
     "word": "curve",
     "clues": [
      "bend",
      " curved road or river segment"
     ]
    },
    {
     "word": "curve",
     "clues": [
      "line on a graph"
     ]
    },
    {
     "word": "curve",
     "clues": [
      "curved shape"
     ]
    },
    {
     "word": "custody",
     "clues": [
      "holding by the police"
     ]
    },
    {
     "word": "customer",
     "clues": [
      "client",
      " patron"
     ]
    },
    {
     "word": "snub",
     "clues": [
      "cold shoulder"
     ]
    },
    {
     "word": "cut",
     "clues": [
      "reduction of amount or number"
     ]
    },
    {
     "word": "cut",
     "clues": [
      "share of the profits"
     ]
    },
    {
     "word": "cut",
     "clues": [
      "gash",
      " slash",
      " wound"
     ]
    },
    {
     "word": "cutting",
     "clues": [
      "clipping",
      " newspaper clipping"
     ]
    },
    {
     "word": "cycle",
     "clues": [
      "periodically repeated sequence"
     ]
    },
    {
     "word": "cylinder",
     "clues": [
      "shape"
     ]
    },
    {
     "word": "dairy",
     "clues": [
      "dairy farm"
     ]
    },
    {
     "word": "damage",
     "clues": [
      "harm",
      " impairment"
     ]
    },
    {
     "word": "danger",
     "clues": [
      "condition of being susceptible to harm"
     ]
    },
    {
     "word": "dark",
     "clues": [
      "darkness"
     ]
    },
    {
     "word": "date",
     "clues": [
      "sweet edible fruit"
     ]
    },
    {
     "word": "date",
     "clues": [
      "appointment",
      " engagement"
     ]
    },
    {
     "word": "date",
     "clues": [
      "escort"
     ]
    },
    {
     "word": "date",
     "clues": [
      "day of the month"
     ]
    },
    {
     "word": "daughter",
     "clues": [
      "girl",
      " offspring"
     ]
    },
    {
     "word": "day",
     "clues": [
      "twenty-four hours",
      " solar day"
     ]
    },
    {
     "word": "deal",
     "clues": [
      "act of distributing playing cards"
     ]
    },
    {
     "word": "deal",
     "clues": [
      "agreement",
      " bargain"
     ]
    },
    {
     "word": "dealer",
     "clues": [
      "trader"
     ]
    },
    {
     "word": "death",
     "clues": [
      "decease",
      " expiry",
      " departure from life"
     ]
    },
    {
     "word": "debate",
     "clues": [
      "disputation",
      " public debate"
     ]
    },
    {
     "word": "debt",
     "clues": [
      "money",
      " goods or services owed"
     ]
    },
    {
     "word": "decade",
     "clues": [
      "decennary",
      " decennium",
      " period of 10 years"
     ]
    },
    {
     "word": "decay",
     "clues": [
      "decomposition",
      " rotting"
     ]
    },
    {
     "word": "decay",
     "clues": [
      "radioactive decay"
     ]
    },
    {
     "word": "deck",
     "clues": [
      "floor on a ship"
     ]
    },
    {
     "word": "deck",
     "clues": [
      "pack of cards",
      " deck of cards"
     ]
    },
    {
     "word": "declaration",
     "clues": [
      "statement"
     ]
    },
    {
     "word": "decoration",
     "clues": [
      "ornament",
      " ornamentation"
     ]
    },
    {
     "word": "decrease",
     "clues": [
      "lessening",
      " drop-off"
     ]
    },
    {
     "word": "deer",
     "clues": [
      "forest animal"
     ]
    },
    {
     "word": "default",
     "clues": [
      "default option"
     ]
    },
    {
     "word": "nonremittal",
     "clues": [
      "default",
      " nonpayment"
     ]
    },
    {
     "word": "defeat",
     "clues": [
      "frustration",
      " feeling of defeat"
     ]
    },
    {
     "word": "defendant",
     "clues": [
      "suspect"
     ]
    },
    {
     "word": "deficiency",
     "clues": [
      "insufficiency",
      " inadequacy"
     ]
    },
    {
     "word": "deficit",
     "clues": [
      "shortage",
      " shortfall"
     ]
    },
    {
     "word": "definition",
     "clues": [
      "concise explanation"
     ]
    },
    {
     "word": "degree",
     "clues": [
      "grade",
      " level",
      " position on a scale"
     ]
    },
    {
     "word": "degree",
     "clues": [
      "seriousness of something"
     ]
    },
    {
     "word": "degree",
     "clues": [
      "academic degree"
     ]
    },
    {
     "word": "degree",
     "clues": [
      "unit of temperature"
     ]
    },
    {
     "word": "delay",
     "clues": [
      "holdup"
     ]
    },
    {
     "word": "delivery",
     "clues": [
      "birth"
     ]
    },
    {
     "word": "demand",
     "clues": [
      "urgent or peremptory request"
     ]
    },
    {
     "word": "demand",
     "clues": [
      "ability and desire to purchase goods and services"
     ]
    },
    {
     "word": "demonstration",
     "clues": [
      "public display"
     ]
    },
    {
     "word": "demonstration",
     "clues": [
      "demo"
     ]
    },
    {
     "word": "demonstrator",
     "clues": [
      "protester"
     ]
    },
    {
     "word": "denial",
     "clues": [
      "disaffirmation"
     ]
    },
    {
     "word": "density",
     "clues": [
      "denseness"
     ]
    },
    {
     "word": "dentist",
     "clues": [
      "tooth doctor"
     ]
    },
    {
     "word": "departure",
     "clues": [
      "going away"
     ]
    },
    {
     "word": "dependence",
     "clues": [
      "addiction"
     ]
    },
    {
     "word": "deposit",
     "clues": [
      "sediment"
     ]
    },
    {
     "word": "deposit",
     "clues": [
      "down payment"
     ]
    },
    {
     "word": "deposit",
     "clues": [
      "bank deposit"
     ]
    },
    {
     "word": "depression",
     "clues": [
      "natural depression",
      " geological formation"
     ]
    },
    {
     "word": "depression",
     "clues": [
      "low",
      " low pressure"
     ]
    },
    {
     "word": "depression",
     "clues": [
      "slump",
      " economic crisis"
     ]
    },
    {
     "word": "depression",
     "clues": [
      "depressive disorder",
      " clinical depression"
     ]
    },
    {
     "word": "deprivation",
     "clues": [
      "want",
      " neediness"
     ]
    },
    {
     "word": "deputy",
     "clues": [
      "surrogate"
     ]
    },
    {
     "word": "descent",
     "clues": [
      "movement downward"
     ]
    },
    {
     "word": "lineage",
     "clues": [
      "descent"
     ]
    },
    {
     "word": "desert",
     "clues": [
      "arid land"
     ]
    },
    {
     "word": "design",
     "clues": [
      "preliminary sketch",
      " outline"
     ]
    },
    {
     "word": "design",
     "clues": [
      "invention",
      " innovation"
     ]
    },
    {
     "word": "architect",
     "clues": [
      "designer of buildings"
     ]
    },
    {
     "word": "designer",
     "clues": [
      "couturier",
      " fashion designer"
     ]
    },
    {
     "word": "designer",
     "clues": [
      "interior designer",
      " interior decorator"
     ]
    },
    {
     "word": "desire",
     "clues": [
      "feeling"
     ]
    },
    {
     "word": "desk",
     "clues": [
      "furniture"
     ]
    },
    {
     "word": "despair",
     "clues": [
      "desperate feeling"
     ]
    },
    {
     "word": "destruction",
     "clues": [
      "demolition",
      " wipeout"
     ]
    },
    {
     "word": "detail",
     "clues": [
      "particular",
      " item"
     ]
    },
    {
     "word": "detective",
     "clues": [
      "investigator",
      " police detective"
     ]
    },
    {
     "word": "detector",
     "clues": [
      "sensor"
     ]
    },
    {
     "word": "development",
     "clues": [
      "land developed for some purpose"
     ]
    },
    {
     "word": "development",
     "clues": [
      "growth",
      " growing",
      " maturation"
     ]
    },
    {
     "word": "deviation",
     "clues": [
      "diversion",
      " digression",
      " deflection"
     ]
    },
    {
     "word": "diagram",
     "clues": [
      "drawing"
     ]
    },
    {
     "word": "dialect",
     "clues": [
      "idiom",
      " special language"
     ]
    },
    {
     "word": "dialogue",
     "clues": [
      "lines spoken in drama or fiction"
     ]
    },
    {
     "word": "dialogue",
     "clues": [
      "dialog",
      " conversation"
     ]
    },
    {
     "word": "diameter",
     "clues": [
      "line through the center of a circle"
     ]
    },
    {
     "word": "diamond",
     "clues": [
      "gem"
     ]
    },
    {
     "word": "dictionary",
     "clues": [
      "lexicon"
     ]
    },
    {
     "word": "diet",
     "clues": [
      "dieting"
     ]
    },
    {
     "word": "difference",
     "clues": [
      "dispute",
      " difference of opinion",
      " conflict"
     ]
    },
    {
     "word": "difference",
     "clues": [
      "remainder",
      " number that remains after subtraction"
     ]
    },
    {
     "word": "difficulty",
     "clues": [
      "trouble"
     ]
    },
    {
     "word": "difficulty",
     "clues": [
      "difficultness"
     ]
    },
    {
     "word": "dignity",
     "clues": [
      "self-respect",
      " self-esteem",
      " self-regard"
     ]
    },
    {
     "word": "dilemma",
     "clues": [
      "quandary"
     ]
    },
    {
     "word": "dimension",
     "clues": [
      "magnitude"
     ]
    },
    {
     "word": "dinner",
     "clues": [
      "supper"
     ]
    },
    {
     "word": "diplomat",
     "clues": [
      "official engaged in international negotiations"
     ]
    },
    {
     "word": "direction",
     "clues": [
      "course",
      " orientation"
     ]
    },
    {
     "word": "direction",
     "clues": [
      "guidance",
      " counsel"
     ]
    },
    {
     "word": "director",
     "clues": [
      "conductor",
      " music director"
     ]
    },
    {
     "word": "director",
     "clues": [
      "member of a board of directors"
     ]
    },
    {
     "word": "directory",
     "clues": [
      "alphabetical list of names and addresses"
     ]
    },
    {
     "word": "disability",
     "clues": [
      "disablement",
      " handicap",
      " impairment"
     ]
    },
    {
     "word": "disagreement",
     "clues": [
      "dissension",
      " dissonance",
      " discord"
     ]
    },
    {
     "word": "disappointment",
     "clues": [
      "letdown"
     ]
    },
    {
     "word": "disaster",
     "clues": [
      "calamity",
      " catastrophe",
      " tragedy"
     ]
    },
    {
     "word": "discipline",
     "clues": [
      "correction",
      " punishment"
     ]
    },
    {
     "word": "disco",
     "clues": [
      "discotheque"
     ]
    },
    {
     "word": "discount",
     "clues": [
      "price reduction",
      " deduction"
     ]
    },
    {
     "word": "sermon",
     "clues": [
      "preaching",
      " discourse"
     ]
    },
    {
     "word": "discovery",
     "clues": [
      "breakthrough",
      " find"
     ]
    },
    {
     "word": "discrimination",
     "clues": [
      "unfair treatment"
     ]
    },
    {
     "word": "dish",
     "clues": [
      "container"
     ]
    },
    {
     "word": "dish",
     "clues": [
      "dish aerial",
      " dish antenna"
     ]
    },
    {
     "word": "dish",
     "clues": [
      "item of prepared food"
     ]
    },
    {
     "word": "disk",
     "clues": [
      "disc",
      " flat circular plate"
     ]
    },
    {
     "word": "dismissal",
     "clues": [
      "pink slip"
     ]
    },
    {
     "word": "disorder",
     "clues": [
      "disorderliness",
      " mess"
     ]
    },
    {
     "word": "display",
     "clues": [
      "exhibit",
      " showing"
     ]
    },
    {
     "word": "disposition",
     "clues": [
      "temperament"
     ]
    },
    {
     "word": "distance",
     "clues": [
      "property created by the space between two objects or points"
     ]
    },
    {
     "word": "distance",
     "clues": [
      "aloofness"
     ]
    },
    {
     "word": "distortion",
     "clues": [
      "misrepresenting"
     ]
    },
    {
     "word": "distortion",
     "clues": [
      "optical aberration"
     ]
    },
    {
     "word": "distributor",
     "clues": [
      "marketing company"
     ]
    },
    {
     "word": "district",
     "clues": [
      "territory",
      " territorial dominion"
     ]
    },
    {
     "word": "disturbance",
     "clues": [
      "disruption",
      " commotion",
      " stir"
     ]
    },
    {
     "word": "dividend",
     "clues": [
      "bonus"
     ]
    },
    {
     "word": "division",
     "clues": [
      "arithmetic operation"
     ]
    },
    {
     "word": "division",
     "clues": [
      "army unit"
     ]
    },
    {
     "word": "division",
     "clues": [
      "administrative unit"
     ]
    },
    {
     "word": "doctor",
     "clues": [
      "doc",
      " physician",
      " MD"
     ]
    },
    {
     "word": "doctor",
     "clues": [
      "Dr.",
      " person who holds Ph.D. degree"
     ]
    },
    {
     "word": "document",
     "clues": [
      "written document",
      " papers"
     ]
    },
    {
     "word": "dog",
     "clues": [
      "domestic dog"
     ]
    },
    {
     "word": "hotdog",
     "clues": [
      "frankfurter"
     ]
    },
    {
     "word": "doll",
     "clues": [
      "toy"
     ]
    },
    {
     "word": "dollar",
     "clues": [
      "dollar bill",
      " buck"
     ]
    },
    {
     "word": "dome",
     "clues": [
      "hemispherical roof"
     ]
    },
    {
     "word": "domination",
     "clues": [
      "mastery"
     ]
    },
    {
     "word": "donor",
     "clues": [
      "organ donor"
     ]
    },
    {
     "word": "door",
     "clues": [
      "swinging or sliding barrier"
     ]
    },
    {
     "word": "dose",
     "clues": [
      "portion of medicine"
     ]
    },
    {
     "word": "double",
     "clues": [
      "twice the quantity"
     ]
    },
    {
     "word": "double",
     "clues": [
      "stunt man",
      " stand-in per person"
     ]
    },
    {
     "word": "doubt",
     "clues": [
      "question",
      " dubiousness",
      " doubtfulness"
     ]
    },
    {
     "word": "doubt",
     "clues": [
      "uncertainty",
      " incertitude",
      " dubiety",
      " doubtfulness"
     ]
    },
    {
     "word": "dough",
     "clues": [
      "flour mixture"
     ]
    },
    {
     "word": "dozen",
     "clues": [
      "twelve"
     ]
    },
    {
     "word": "draft",
     "clues": [
      "conscription",
      " selective service"
     ]
    },
    {
     "word": "draft",
     "clues": [
      "draft copy",
      " preliminary version"
     ]
    },
    {
     "word": "draft",
     "clues": [
      "draught",
      " air current"
     ]
    },
    {
     "word": "dragon",
     "clues": [
      "mythical creature"
     ]
    },
    {
     "word": "drain",
     "clues": [
      "drainpipe",
      " waste pipe"
     ]
    },
    {
     "word": "drama",
     "clues": [
      "dramatic event"
     ]
    },
    {
     "word": "drawer",
     "clues": [
      "part of a piece of furniture"
     ]
    },
    {
     "word": "drawing",
     "clues": [
      "lottery"
     ]
    },
    {
     "word": "drawing",
     "clues": [
      "representation",
      " artwork"
     ]
    },
    {
     "word": "dream",
     "clues": [
      "dreaming"
     ]
    },
    {
     "word": "dream",
     "clues": [
      "ambition",
      " aspiration"
     ]
    },
    {
     "word": "dressing",
     "clues": [
      "medical dressing"
     ]
    },
    {
     "word": "drift",
     "clues": [
      "something heaped up by wind or water"
     ]
    },
    {
     "word": "drift",
     "clues": [
      "gradual departure from a course"
     ]
    },
    {
     "word": "drill",
     "clues": [
      "training of soldiers to march"
     ]
    },
    {
     "word": "drill",
     "clues": [
      "tool with a sharp point"
     ]
    },
    {
     "word": "drink",
     "clues": [
      "beverage",
      " drinkable",
      " potable"
     ]
    },
    {
     "word": "drive",
     "clues": [
      "ride",
      " journey"
     ]
    },
    {
     "word": "drive",
     "clues": [
      "driveway"
     ]
    },
    {
     "word": "drive",
     "clues": [
      "high motivation"
     ]
    },
    {
     "word": "driver",
     "clues": [
      "operator of a motor vehicle"
     ]
    },
    {
     "word": "drop",
     "clues": [
      "cliff",
      " drop-off"
     ]
    },
    {
     "word": "drop",
     "clues": [
      "bead",
      " pearl"
     ]
    },
    {
     "word": "drug",
     "clues": [
      "substance used as a medicine or narcotic"
     ]
    },
    {
     "word": "drum",
     "clues": [
      "tympan",
      " percussion instrument"
     ]
    },
    {
     "word": "drum",
     "clues": [
      "barrel"
     ]
    },
    {
     "word": "duck",
     "clues": [
      "bird"
     ]
    },
    {
     "word": "duke",
     "clues": [
      "nobleman"
     ]
    },
    {
     "word": "duty",
     "clues": [
      "work that you are obliged to perform"
     ]
    },
    {
     "word": "duty",
     "clues": [
      "tariff"
     ]
    },
    {
     "word": "eagle",
     "clues": [
      "bird"
     ]
    },
    {
     "word": "eagle",
     "clues": [
      "emblem representing power"
     ]
    },
    {
     "word": "ear",
     "clues": [
      "sense organ"
     ]
    },
    {
     "word": "earthquake",
     "clues": [
      "quake",
      " seism"
     ]
    },
    {
     "word": "east",
     "clues": [
      "East",
      " Orient"
     ]
    },
    {
     "word": "east",
     "clues": [
      "due east",
      " E"
     ]
    },
    {
     "word": "echo",
     "clues": [
      "reverberation",
      " sound reflection"
     ]
    },
    {
     "word": "economics",
     "clues": [
      "economic science"
     ]
    },
    {
     "word": "economist",
     "clues": [
      "economic expert"
     ]
    },
    {
     "word": "economy",
     "clues": [
      "thriftiness",
      " frugality"
     ]
    },
    {
     "word": "economy",
     "clues": [
      "economic system"
     ]
    },
    {
     "word": "edge",
     "clues": [
      "sharp side formed by the intersection of two surfaces of an object"
     ]
    },
    {
     "word": "edge",
     "clues": [
      "slight competitive advantage"
     ]
    },
    {
     "word": "edition",
     "clues": [
      "publication"
     ]
    },
    {
     "word": "education",
     "clues": [
      "instruction",
      " teaching",
      " pedagogy"
     ]
    },
    {
     "word": "education",
     "clues": [
      "knowledge acquired by learning"
     ]
    },
    {
     "word": "effect",
     "clues": [
      "impression"
     ]
    },
    {
     "word": "effect",
     "clues": [
      "consequence",
      " outcome",
      " result"
     ]
    },
    {
     "word": "effort",
     "clues": [
      "attempt",
      " endeavor"
     ]
    },
    {
     "word": "egg",
     "clues": [
      "eggs",
      " food"
     ]
    },
    {
     "word": "ego",
     "clues": [
      "egotism",
      " self-importance"
     ]
    },
    {
     "word": "elbow",
     "clues": [
      "elbow joint"
     ]
    },
    {
     "word": "election",
     "clues": [
      "vote"
     ]
    },
    {
     "word": "electron",
     "clues": [
      "elementary particle"
     ]
    },
    {
     "word": "electronics",
     "clues": [
      "branch of physics"
     ]
    },
    {
     "word": "element",
     "clues": [
      "component",
      " constituent"
     ]
    },
    {
     "word": "element",
     "clues": [
      "chemical element"
     ]
    },
    {
     "word": "elephant",
     "clues": [
      "pachyderm"
     ]
    },
    {
     "word": "elite",
     "clues": [
      "elite group"
     ]
    },
    {
     "word": "embarrassment",
     "clues": [
      "shame"
     ]
    },
    {
     "word": "embryo",
     "clues": [
      "conceptus",
      " fertilized egg"
     ]
    },
    {
     "word": "emergency",
     "clues": [
      "exigency",
      " pinch",
      " crisis"
     ]
    },
    {
     "word": "emotion",
     "clues": [
      "strong feeling"
     ]
    },
    {
     "word": "emphasis",
     "clues": [
      "accent"
     ]
    },
    {
     "word": "empire",
     "clues": [
      "monarchy"
     ]
    },
    {
     "word": "employee",
     "clues": [
      "worker"
     ]
    },
    {
     "word": "end",
     "clues": [
      "goal"
     ]
    },
    {
     "word": "end",
     "clues": [
      "conclusion",
      " close",
      " closing",
      " ending"
     ]
    },
    {
     "word": "end",
     "clues": [
      "boundary"
     ]
    },
    {
     "word": "enemy",
     "clues": [
      "hostile people"
     ]
    },
    {
     "word": "energy",
     "clues": [
      "vigor"
     ]
    },
    {
     "word": "engagement",
     "clues": [
      "betrothal"
     ]
    },
    {
     "word": "engine",
     "clues": [
      "motor"
     ]
    },
    {
     "word": "engine",
     "clues": [
      "locomotive"
     ]
    },
    {
     "word": "engineer",
     "clues": [
      "applied scientist",
      " technologist"
     ]
    },
    {
     "word": "entertainment",
     "clues": [
      "amusement"
     ]
    },
    {
     "word": "enthusiasm",
     "clues": [
      "lively interest"
     ]
    },
    {
     "word": "entitlement",
     "clues": [
      "right granted by law or contract"
     ]
    },
    {
     "word": "entry",
     "clues": [
      "entrance",
      " entranceway",
      " entryway"
     ]
    },
    {
     "word": "entry",
     "clues": [
      "submission"
     ]
    },
    {
     "word": "environment",
     "clues": [
      "environs",
      " surroundings"
     ]
    },
    {
     "word": "episode",
     "clues": [
      "installment",
      " part of a broadcast serial"
     ]
    },
    {
     "word": "equation",
     "clues": [
      "mathematical statement"
     ]
    },
    {
     "word": "era",
     "clues": [
      "epoch"
     ]
    },
    {
     "word": "error",
     "clues": [
      "mistake",
      " fault"
     ]
    },
    {
     "word": "error",
     "clues": [
      "erroneous belief"
     ]
    },
    {
     "word": "essay",
     "clues": [
      "literary composition"
     ]
    },
    {
     "word": "perfume",
     "clues": [
      "essence"
     ]
    },
    {
     "word": "estate",
     "clues": [
      "everything you own"
     ]
    },
    {
     "word": "estimate",
     "clues": [
      "estimation",
      " approximation"
     ]
    },
    {
     "word": "estimate",
     "clues": [
      "esteem",
      " respect"
     ]
    },
    {
     "word": "estimate",
     "clues": [
      "appraisal of value"
     ]
    },
    {
     "word": "estimate",
     "clues": [
      "likely cost"
     ]
    },
    {
     "word": "ethics",
     "clues": [
      "moral philosophy"
     ]
    },
    {
     "word": "Europe",
     "clues": [
      "continent"
     ]
    },
    {
     "word": "evening",
     "clues": [
      "eve"
     ]
    },
    {
     "word": "evolution",
     "clues": [
      "phylogeny",
      " phylogenesis"
     ]
    },
    {
     "word": "examination",
     "clues": [
      "test"
     ]
    },
    {
     "word": "example",
     "clues": [
      "illustration",
      " instance",
      " representative"
     ]
    },
    {
     "word": "example",
     "clues": [
      "exemplar",
      " model",
      " good example"
     ]
    },
    {
     "word": "excavation",
     "clues": [
      "dig",
      " archeological site"
     ]
    },
    {
     "word": "exception",
     "clues": [
      "instance that does not conform to a rule"
     ]
    },
    {
     "word": "excess",
     "clues": [
      "surplus"
     ]
    },
    {
     "word": "exchange",
     "clues": [
      "act of changing one thing for another"
     ]
    },
    {
     "word": "exchange",
     "clues": [
      "mutual expression of views"
     ]
    },
    {
     "word": "excitement",
     "clues": [
      "agitation",
      " turmoil",
      " upheaval",
      " hullabaloo"
     ]
    },
    {
     "word": "excitement",
     "clues": [
      "excitation",
      " fervor",
      " mental state"
     ]
    },
    {
     "word": "excuse",
     "clues": [
      "alibi",
      " exculpation",
      " self-justification"
     ]
    },
    {
     "word": "execution",
     "clues": [
      "capital punishment",
      " death penalty"
     ]
    },
    {
     "word": "executive",
     "clues": [
      "branch of government"
     ]
    },
    {
     "word": "executive",
     "clues": [
      "administrator"
     ]
    },
    {
     "word": "exemption",
     "clues": [
      "immunity"
     ]
    },
    {
     "word": "exercise",
     "clues": [
      "exercising",
      " physical exercise"
     ]
    },
    {
     "word": "exhibition",
     "clues": [
      "exposition",
      " expo"
     ]
    },
    {
     "word": "exile",
     "clues": [
      "deportation",
      " expatriation",
      " expulsion"
     ]
    },
    {
     "word": "exit",
     "clues": [
      "issue",
      " outlet",
      " way out"
     ]
    },
    {
     "word": "expansion",
     "clues": [
      "enlargement"
     ]
    },
    {
     "word": "expectation",
     "clues": [
      "anticipation"
     ]
    },
    {
     "word": "expenditure",
     "clues": [
      "outgo",
      " outlay"
     ]
    },
    {
     "word": "experience",
     "clues": [
      "accumulation of knowledge or skill"
     ]
    },
    {
     "word": "experiment",
     "clues": [
      "experimentation"
     ]
    },
    {
     "word": "expertise",
     "clues": [
      "expertness"
     ]
    },
    {
     "word": "exploration",
     "clues": [
      "geographic expedition"
     ]
    },
    {
     "word": "explosion",
     "clues": [
      "detonation",
      " blowup"
     ]
    },
    {
     "word": "exposure",
     "clues": [
      "vulnerability to the elements"
     ]
    },
    {
     "word": "expression",
     "clues": [
      "saying",
      " locution"
     ]
    },
    {
     "word": "extension",
     "clues": [
      "wing",
      " annex",
      " addition to a building"
     ]
    },
    {
     "word": "extension",
     "clues": [
      "telephone extension"
     ]
    },
    {
     "word": "extension",
     "clues": [
      "delay of deadline"
     ]
    },
    {
     "word": "extent",
     "clues": [
      "point or degree to which something extend"
     ]
    },
    {
     "word": "extraterrestrial",
     "clues": [
      "alien"
     ]
    },
    {
     "word": "extreme",
     "clues": [
      "highest degree"
     ]
    },
    {
     "word": "eye",
     "clues": [
      "oculus",
      " optic",
      " organ of sight"
     ]
    },
    {
     "word": "eyebrow",
     "clues": [
      "brow"
     ]
    },
    {
     "word": "facade",
     "clues": [
      "frontage",
      " frontal"
     ]
    },
    {
     "word": "face",
     "clues": [
      "human face"
     ]
    },
    {
     "word": "facility",
     "clues": [
      "installation",
      " building or place providing a particular service"
     ]
    },
    {
     "word": "facility",
     "clues": [
      "adeptness",
      " adroitness",
      " deftness",
      " quickness"
     ]
    },
    {
     "word": "factor",
     "clues": [
      "anything that contributes causally to a result"
     ]
    },
    {
     "word": "factory",
     "clues": [
      "mill",
      " manufacturing plant",
      " manufactory"
     ]
    },
    {
     "word": "failure",
     "clues": [
      "loser",
      " nonstarter",
      " unsuccessful person"
     ]
    },
    {
     "word": "failure",
     "clues": [
      "lack of success"
     ]
    },
    {
     "word": "failure",
     "clues": [
      "bankruptcy"
     ]
    },
    {
     "word": "fair",
     "clues": [
      "traveling show",
      " carnival",
      " funfair"
     ]
    },
    {
     "word": "fair",
     "clues": [
      "promotional gathering of producers"
     ]
    },
    {
     "word": "fairy",
     "clues": [
      "faery",
      " faerie",
      " sprite",
      " magical creature"
     ]
    },
    {
     "word": "faith",
     "clues": [
      "religion",
      " religious belief"
     ]
    },
    {
     "word": "fall",
     "clues": [
      "drop",
      " free descent"
     ]
    },
    {
     "word": "descent",
     "clues": [
      "declivity",
      " decline",
      " fall"
     ]
    },
    {
     "word": "fall",
     "clues": [
      "autumn"
     ]
    },
    {
     "word": "twilight",
     "clues": [
      "dusk",
      " nightfall"
     ]
    },
    {
     "word": "fame",
     "clues": [
      "celebrity",
      " renown"
     ]
    },
    {
     "word": "family",
     "clues": [
      "folk",
      " kinfolk",
      " kinsfolk",
      " kin"
     ]
    },
    {
     "word": "fan",
     "clues": [
      "buff",
      " devotee",
      " lover"
     ]
    },
    {
     "word": "fantasy",
     "clues": [
      "illusion",
      " phantasy",
      " fancy"
     ]
    },
    {
     "word": "fare",
     "clues": [
      "transportation fee"
     ]
    },
    {
     "word": "fashion",
     "clues": [
      "latest style",
      " rage",
      " fad"
     ]
    },
    {
     "word": "fat",
     "clues": [
      "excess bodily weight"
     ]
    },
    {
     "word": "fat",
     "clues": [
      "soft greasy substance"
     ]
    },
    {
     "word": "father",
     "clues": [
      "male parent"
     ]
    },
    {
     "word": "fault",
     "clues": [
      "responsibility for a bad situation"
     ]
    },
    {
     "word": "fault",
     "clues": [
      "defect",
      " flaw"
     ]
    },
    {
     "word": "favor",
     "clues": [
      "kind act",
      " gracious act"
     ]
    },
    {
     "word": "favour",
     "clues": [
      "act of gracious kindness"
     ]
    },
    {
     "word": "favourite",
     "clues": [
      "darling",
      " favorite",
      " pet"
     ]
    },
    {
     "word": "fax",
     "clues": [
      "facsimile"
     ]
    },
    {
     "word": "fear",
     "clues": [
      "fearfulness",
      " fright"
     ]
    },
    {
     "word": "feast",
     "clues": [
      "banquet"
     ]
    },
    {
     "word": "feather",
     "clues": [
      "plume",
      " plumage"
     ]
    },
    {
     "word": "feature",
     "clues": [
      "facial feature"
     ]
    },
    {
     "word": "feature",
     "clues": [
      "characteristic"
     ]
    },
    {
     "word": "federation",
     "clues": [
      "confederation",
      " confederacy",
      " political union"
     ]
    },
    {
     "word": "fee",
     "clues": [
      "fixed charge"
     ]
    },
    {
     "word": "feedback",
     "clues": [
      "response"
     ]
    },
    {
     "word": "feeling",
     "clues": [
      "intuitive feeling"
     ]
    },
    {
     "word": "feeling",
     "clues": [
      "touch",
      " touch sensation"
     ]
    },
    {
     "word": "feminist",
     "clues": [
      "women's rightist"
     ]
    },
    {
     "word": "fence",
     "clues": [
      "barrier"
     ]
    },
    {
     "word": "ferry",
     "clues": [
      "ferryboat"
     ]
    },
    {
     "word": "fever",
     "clues": [
      "high body temperature"
     ]
    },
    {
     "word": "few",
     "clues": [
      "indefinite but relatively small number"
     ]
    },
    {
     "word": "fibre",
     "clues": [
      "fiber"
     ]
    },
    {
     "word": "fiction",
     "clues": [
      "literary work"
     ]
    },
    {
     "word": "field",
     "clues": [
      "piece of land"
     ]
    },
    {
     "word": "field",
     "clues": [
      "playing field",
      " athletic field"
     ]
    },
    {
     "word": "fig",
     "clues": [
      "fruit"
     ]
    },
    {
     "word": "fight",
     "clues": [
      "fighting",
      " combat"
     ]
    },
    {
     "word": "figure",
     "clues": [
      "design",
      " pattern"
     ]
    },
    {
     "word": "figure",
     "clues": [
      "amount of money expressed numerically"
     ]
    },
    {
     "word": "file",
     "clues": [
      "steel hand tool"
     ]
    },
    {
     "word": "file",
     "clues": [
      "file cabinet",
      " filing cabinet"
     ]
    },
    {
     "word": "file",
     "clues": [
      "data file"
     ]
    },
    {
     "word": "file",
     "clues": [
      "single file",
      " Indian file"
     ]
    },
    {
     "word": "film",
     "clues": [
      "thin coating"
     ]
    },
    {
     "word": "film",
     "clues": [
      "photographic film"
     ]
    },
    {
     "word": "film",
     "clues": [
      "cinema"
     ]
    },
    {
     "word": "filter",
     "clues": [
      "device that removes something small"
     ]
    },
    {
     "word": "final",
     "clues": [
      "final examination"
     ]
    },
    {
     "word": "finance",
     "clues": [
      "management of money"
     ]
    },
    {
     "word": "finger",
     "clues": [
      "terminal members of the hand"
     ]
    },
    {
     "word": "fireplace",
     "clues": [
      "fire"
     ]
    },
    {
     "word": "fire",
     "clues": [
      "attack",
      " flak",
      " flack",
      " blast"
     ]
    },
    {
     "word": "fire",
     "clues": [
      "ardor",
      " fervor",
      " fervency",
      " fervidness"
     ]
    },
    {
     "word": "fire",
     "clues": [
      "flame"
     ]
    },
    {
     "word": "firefighter",
     "clues": [
      "fireman"
     ]
    },
    {
     "word": "firm",
     "clues": [
      "house",
      " business firm",
      " company"
     ]
    },
    {
     "word": "fish",
     "clues": [
      "cold-blooded aquatic vertebrates"
     ]
    },
    {
     "word": "fish",
     "clues": [
      "flesh of fish used as food"
     ]
    },
    {
     "word": "fisherman",
     "clues": [
      "fisher"
     ]
    },
    {
     "word": "fist",
     "clues": [
      "clenched fist"
     ]
    },
    {
     "word": "convulsion",
     "clues": [
      "fit",
      " paroxysm"
     ]
    },
    {
     "word": "fitness",
     "clues": [
      "physical fitness",
      " good shape"
     ]
    },
    {
     "word": "fixture",
     "clues": [
      "object firmly fixed in place"
     ]
    },
    {
     "word": "flag",
     "clues": [
      "emblem"
     ]
    },
    {
     "word": "flash",
     "clues": [
      "photoflash",
      " flashbulb"
     ]
    },
    {
     "word": "flash",
     "clues": [
      "flare",
      " burst of light"
     ]
    },
    {
     "word": "flash",
     "clues": [
      "heartbeat",
      " instant",
      " jiffy",
      " split second"
     ]
    },
    {
     "word": "flat",
     "clues": [
      "apartment"
     ]
    },
    {
     "word": "flat",
     "clues": [
      "flat tire"
     ]
    },
    {
     "word": "flavor",
     "clues": [
      "savor",
      " smack",
      " tang",
      " taste experience"
     ]
    },
    {
     "word": "fleet",
     "clues": [
      "group of ships"
     ]
    },
    {
     "word": "flesh",
     "clues": [
      "body tissue"
     ]
    },
    {
     "word": "flesh",
     "clues": [
      "pulp",
      " part of a fruit"
     ]
    },
    {
     "word": "flight",
     "clues": [
      "escape"
     ]
    },
    {
     "word": "flight",
     "clues": [
      "trip by plane"
     ]
    },
    {
     "word": "flight",
     "clues": [
      "flight of stairs"
     ]
    },
    {
     "word": "flock",
     "clues": [
      "group of animals"
     ]
    },
    {
     "word": "flood",
     "clues": [
      "inundation"
     ]
    },
    {
     "word": "floor",
     "clues": [
      "flooring"
     ]
    },
    {
     "word": "flour",
     "clues": [
      "powdery foodstuff"
     ]
    },
    {
     "word": "flower",
     "clues": [
      "plant cultivated for its blooms or blossoms"
     ]
    },
    {
     "word": "flu",
     "clues": [
      "influenza",
      " viral disease"
     ]
    },
    {
     "word": "fluctuation",
     "clues": [
      "wavering",
      " instability"
     ]
    },
    {
     "word": "fly",
     "clues": [
      "insect"
     ]
    },
    {
     "word": "fog",
     "clues": [
      "daze",
      " haze",
      " confusion"
     ]
    },
    {
     "word": "fog",
     "clues": [
      "water vapor"
     ]
    },
    {
     "word": "fold",
     "clues": [
      "crease",
      " crimp"
     ]
    },
    {
     "word": "fol",
     "clues": [
      "music] ethnic music"
     ]
    },
    {
     "word": "folk",
     "clues": [
      "folks",
      " common people"
     ]
    },
    {
     "word": "folklore",
     "clues": [
      "unwritten literature or songs"
     ]
    },
    {
     "word": "food",
     "clues": [
      "nutrient"
     ]
    },
    {
     "word": "fool",
     "clues": [
      "moron"
     ]
    },
    {
     "word": "fool",
     "clues": [
      "clown",
      " jester"
     ]
    },
    {
     "word": "foot",
     "clues": [
      "human foot"
     ]
    },
    {
     "word": "foot",
     "clues": [
      "ft",
      " linear unit of length equal to 12 inches"
     ]
    },
    {
     "word": "football",
     "clues": [
      "football game"
     ]
    },
    {
     "word": "force",
     "clues": [
      "violence",
      " act of aggression"
     ]
    },
    {
     "word": "force",
     "clues": [
      "forcefulness",
      " strength",
      " physical energy",
      " intensity"
     ]
    },
    {
     "word": "force",
     "clues": [
      "military unit",
      " military force",
      " military group"
     ]
    },
    {
     "word": "forecast",
     "clues": [
      "prognosis"
     ]
    },
    {
     "word": "foreigner",
     "clues": [
      "alien",
      " noncitizen"
     ]
    },
    {
     "word": "forest",
     "clues": [
      "woodland",
      " timberland",
      " timber"
     ]
    },
    {
     "word": "forestry",
     "clues": [
      "science of planting and caring for forests"
     ]
    },
    {
     "word": "fork",
     "clues": [
      "cutlery"
     ]
    },
    {
     "word": "form",
     "clues": [
      "shape",
      " pattern"
     ]
    },
    {
     "word": "form",
     "clues": [
      "printed document with spaces in which to write"
     ]
    },
    {
     "word": "form",
     "clues": [
      "variant",
      " strain"
     ]
    },
    {
     "word": "format",
     "clues": [
      "formatting",
      " data format",
      " data formatting"
     ]
    },
    {
     "word": "formation",
     "clues": [
      "spatial arrangement"
     ]
    },
    {
     "word": "formula",
     "clues": [
      "statement of a fundamental principle"
     ]
    },
    {
     "word": "fortune",
     "clues": [
      "luck"
     ]
    },
    {
     "word": "fortune",
     "clues": [
      "wealth",
      " prosperity"
     ]
    },
    {
     "word": "fate",
     "clues": [
      "destiny",
      " fortune",
      " luck",
      " lot",
      " circumstances"
     ]
    },
    {
     "word": "forum",
     "clues": [
      "public meeting"
     ]
    },
    {
     "word": "fossil",
     "clues": [
      "plant or animal remains"
     ]
    },
    {
     "word": "foundation",
     "clues": [
      "institution supported by an endowment"
     ]
    },
    {
     "word": "foundation",
     "clues": [
      "basis"
     ]
    },
    {
     "word": "fountain",
     "clues": [
      "water dispenser",
      " font"
     ]
    },
    {
     "word": "fox",
     "clues": [
      "animal"
     ]
    },
    {
     "word": "fraction",
     "clues": [
      "quotient"
     ]
    },
    {
     "word": "fragment",
     "clues": [
      "broken-off piece"
     ]
    },
    {
     "word": "skeleton",
     "clues": [
      "frame",
      " bones and cartilages"
     ]
    },
    {
     "word": "franchise",
     "clues": [
      "dealership"
     ]
    },
    {
     "word": "fraud",
     "clues": [
      "fraudulence",
      " dupery",
      " hoax"
     ]
    },
    {
     "word": "imposter",
     "clues": [
      "pretender",
      " fake",
      " faker",
      " sham",
      " fraud"
     ]
    },
    {
     "word": "freckle",
     "clues": [
      "skin pigment"
     ]
    },
    {
     "word": "freedom",
     "clues": [
      "condition of being free"
     ]
    },
    {
     "word": "freight",
     "clues": [
      "transportation"
     ]
    },
    {
     "word": "frequency",
     "clues": [
      "frequence",
      " oftenness"
     ]
    },
    {
     "word": "freshman",
     "clues": [
      "first year student"
     ]
    },
    {
     "word": "refrigerator",
     "clues": [
      "fridge"
     ]
    },
    {
     "word": "friend",
     "clues": [
      "acquaintance"
     ]
    },
    {
     "word": "frog",
     "clues": [
      "toad",
      " toad frog"
     ]
    },
    {
     "word": "front",
     "clues": [
      "the side that is seen or that goes first"
     ]
    },
    {
     "word": "front",
     "clues": [
      "battlefront",
      " front line"
     ]
    },
    {
     "word": "front",
     "clues": [
      "atmospheric phenomenon at the boundary between two air masses"
     ]
    },
    {
     "word": "fruit",
     "clues": [
      "ripened reproductive body of a seed plant"
     ]
    },
    {
     "word": "fuel",
     "clues": [
      "energy"
     ]
    },
    {
     "word": "fun",
     "clues": [
      "merriment",
      " playfulness"
     ]
    },
    {
     "word": "function",
     "clues": [
      "affair",
      " occasion",
      " social occasion"
     ]
    },
    {
     "word": "function",
     "clues": [
      "mathematical function"
     ]
    },
    {
     "word": "fund",
     "clues": [
      "monetary fund"
     ]
    },
    {
     "word": "funeral",
     "clues": [
      "ceremony"
     ]
    },
    {
     "word": "fur",
     "clues": [
      "pelt",
      " hairy coat of a mammal"
     ]
    },
    {
     "word": "furniture",
     "clues": [
      "piece of furniture"
     ]
    },
    {
     "word": "fuss",
     "clues": [
      "bustle",
      " hustle",
      " flurry",
      " ado",
      " stir"
     ]
    },
    {
     "word": "future",
     "clues": [
      "hereafter",
      " futurity",
      " time to come"
     ]
    },
    {
     "word": "galaxy",
     "clues": [
      "extragalactic nebula"
     ]
    },
    {
     "word": "gallery",
     "clues": [
      "art gallery"
     ]
    },
    {
     "word": "gallon",
     "clues": [
      "gal",
      " liquid unit"
     ]
    },
    {
     "word": "game",
     "clues": [
      "contest with rules to determine a winner"
     ]
    },
    {
     "word": "game",
     "clues": [
      "amusement or pastime"
     ]
    },
    {
     "word": "gap",
     "clues": [
      "crack",
      " narrow opening"
     ]
    },
    {
     "word": "garage",
     "clues": [
      "building"
     ]
    },
    {
     "word": "garage",
     "clues": [
      "car repair shop"
     ]
    },
    {
     "word": "garbage",
     "clues": [
      "refuse",
      " waste"
     ]
    },
    {
     "word": "garlic",
     "clues": [
      "aromatic bulb used as seasoning"
     ]
    },
    {
     "word": "ga",
     "clues": [
      "pedal] accelerator"
     ]
    },
    {
     "word": "gas",
     "clues": [
      "state of matter distinguished from solid and liquid"
     ]
    },
    {
     "word": "gas",
     "clues": [
      "gasoline",
      " petrol"
     ]
    },
    {
     "word": "gate",
     "clues": [
      "door"
     ]
    },
    {
     "word": "gear",
     "clues": [
      "gear mechanism"
     ]
    },
    {
     "word": "gene",
     "clues": [
      "segment of DNA"
     ]
    },
    {
     "word": "general",
     "clues": [
      "full general",
      " officer"
     ]
    },
    {
     "word": "generation",
     "clues": [
      "coevals",
      " contemporaries"
     ]
    },
    {
     "word": "brilliance",
     "clues": [
      "brilliance"
     ]
    },
    {
     "word": "gesture",
     "clues": [
      "motion of hands or body"
     ]
    },
    {
     "word": "ghost",
     "clues": [
      "visible disembodied soul"
     ]
    },
    {
     "word": "ghostwriter",
     "clues": [
      "ghost"
     ]
    },
    {
     "word": "giant",
     "clues": [
      "hulk",
      " very large person"
     ]
    },
    {
     "word": "gift",
     "clues": [
      "present"
     ]
    },
    {
     "word": "girlfriend",
     "clues": [
      "lady friend"
     ]
    },
    {
     "word": "girl",
     "clues": [
      "female child"
     ]
    },
    {
     "word": "glacier",
     "clues": [
      "mass of ice"
     ]
    },
    {
     "word": "glance",
     "clues": [
      "glimpse",
      " quick look"
     ]
    },
    {
     "word": "glass",
     "clues": [
      "drinking glass"
     ]
    },
    {
     "word": "glass",
     "clues": [
      "looking glass",
      " mirror"
     ]
    },
    {
     "word": "glass",
     "clues": [
      "brittle transparent solid"
     ]
    },
    {
     "word": "glasses",
     "clues": [
      "eyeglasses",
      " spectacles"
     ]
    },
    {
     "word": "glimpse",
     "clues": [
      "brief view"
     ]
    },
    {
     "word": "gloom",
     "clues": [
      "gloominess",
      " glumness",
      " atmosphere of depression"
     ]
    },
    {
     "word": "glory",
     "clues": [
      "prestige"
     ]
    },
    {
     "word": "glove",
     "clues": [
      "handwear"
     ]
    },
    {
     "word": "glow",
     "clues": [
      "steady even light"
     ]
    },
    {
     "word": "glue",
     "clues": [
      "adhesive"
     ]
    },
    {
     "word": "goal",
     "clues": [
      "successful attempt at scoring"
     ]
    },
    {
     "word": "goal",
     "clues": [
      "sports equipment"
     ]
    },
    {
     "word": "goal",
     "clues": [
      "finish",
      " destination"
     ]
    },
    {
     "word": "goalkeeper",
     "clues": [
      "goalie",
      " goaltender"
     ]
    },
    {
     "word": "goat",
     "clues": [
      "domestic animal"
     ]
    },
    {
     "word": "god",
     "clues": [
      "deity",
      " divinity"
     ]
    },
    {
     "word": "gold",
     "clues": [
      "Au",
      " atomic number 79"
     ]
    },
    {
     "word": "golf",
     "clues": [
      "golf game"
     ]
    },
    {
     "word": "good",
     "clues": [
      "commodity",
      " trade good"
     ]
    },
    {
     "word": "good",
     "clues": [
      "goodness",
      " moral excellence"
     ]
    },
    {
     "word": "government",
     "clues": [
      "authorities",
      " regime"
     ]
    },
    {
     "word": "governor",
     "clues": [
      "head of a state"
     ]
    },
    {
     "word": "gown",
     "clues": [
      "robe for ceremonial occasions"
     ]
    },
    {
     "word": "grace",
     "clues": [
      "beauty of movement"
     ]
    },
    {
     "word": "grace",
     "clues": [
      "good will",
      " kindness"
     ]
    },
    {
     "word": "gradient",
     "clues": [
      "grade of a slope"
     ]
    },
    {
     "word": "graduate",
     "clues": [
      "alumnus",
      " alumna",
      " alum",
      " grad"
     ]
    },
    {
     "word": "grain",
     "clues": [
      "food grain",
      " cereal"
     ]
    },
    {
     "word": "grain",
     "clues": [
      "small hard particle"
     ]
    },
    {
     "word": "grandfather",
     "clues": [
      "gramps",
      " grandad"
     ]
    },
    {
     "word": "grandmother",
     "clues": [
      "grandma"
     ]
    },
    {
     "word": "grant",
     "clues": [
      "monetary aid"
     ]
    },
    {
     "word": "grass",
     "clues": [
      "pot",
      " dope",
      " weed",
      " Mary Jane",
      " marijuana"
     ]
    },
    {
     "word": "grass",
     "clues": [
      "lawn"
     ]
    },
    {
     "word": "grave",
     "clues": [
      "tomb"
     ]
    },
    {
     "word": "gravel",
     "clues": [
      "crushed rock"
     ]
    },
    {
     "word": "gravity",
     "clues": [
      "graveness",
      " sobriety",
      " soberness",
      " somberness"
     ]
    },
    {
     "word": "gravity",
     "clues": [
      "gravitation",
      " gravitational force"
     ]
    },
    {
     "word": "green",
     "clues": [
      "greenness",
      " viridity"
     ]
    },
    {
     "word": "green",
     "clues": [
      "Green",
      " environmentalist"
     ]
    },
    {
     "word": "greeting",
     "clues": [
      "salutation"
     ]
    },
    {
     "word": "grief",
     "clues": [
      "heartache",
      " heartbreak",
      " brokenheartedness"
     ]
    },
    {
     "word": "grimace",
     "clues": [
      "face",
      " contorted facial expression"
     ]
    },
    {
     "word": "grip",
     "clues": [
      "grasp",
      " controlling influence"
     ]
    },
    {
     "word": "traction",
     "clues": [
      "grip",
      " adhesive friction"
     ]
    },
    {
     "word": "ground",
     "clues": [
      "land",
      " dry land",
      " earth",
      " solid ground",
      " terra firma"
     ]
    },
    {
     "word": "grounds",
     "clues": [
      "evidence",
      " basis for belief or disbelief"
     ]
    },
    {
     "word": "growth",
     "clues": [
      "vegetation that has grown"
     ]
    },
    {
     "word": "growth",
     "clues": [
      "increase",
      " increment"
     ]
    },
    {
     "word": "growth",
     "clues": [
      "abnormal proliferation of tissue"
     ]
    },
    {
     "word": "guarantee",
     "clues": [
      "warrant",
      " warrantee"
     ]
    },
    {
     "word": "guard",
     "clues": [
      "bodyguard"
     ]
    },
    {
     "word": "guard",
     "clues": [
      "watchman"
     ]
    },
    {
     "word": "guerrilla",
     "clues": [
      "insurgent"
     ]
    },
    {
     "word": "guest",
     "clues": [
      "invitee"
     ]
    },
    {
     "word": "guide",
     "clues": [
      "guidebook"
     ]
    },
    {
     "word": "guide",
     "clues": [
      "someone who shows the way"
     ]
    },
    {
     "word": "guideline",
     "clues": [
      "guidepost",
      " rule of thumb"
     ]
    },
    {
     "word": "guilt",
     "clues": [
      "guiltiness"
     ]
    },
    {
     "word": "guitar",
     "clues": [
      "stringed instrument"
     ]
    },
    {
     "word": "gun",
     "clues": [
      "weapon"
     ]
    },
    {
     "word": "gutter",
     "clues": [
      "trough",
      " channel for collecting rainwater"
     ]
    },
    {
     "word": "habit",
     "clues": [
      "established custom"
     ]
    },
    {
     "word": "habitat",
     "clues": [
      "home ground"
     ]
    },
    {
     "word": "hair",
     "clues": [
      "natural body covering"
     ]
    },
    {
     "word": "haircut",
     "clues": [
      "hairstyle"
     ]
    },
    {
     "word": "half",
     "clues": [
      "one-half",
      " one of two equal parts"
     ]
    },
    {
     "word": "hall",
     "clues": [
      "large building for meetings or entertainment"
     ]
    },
    {
     "word": "hall",
     "clues": [
      "large room for gatherings or entertainment"
     ]
    },
    {
     "word": "hall",
     "clues": [
      "hallway"
     ]
    },
    {
     "word": "dorm",
     "clues": [
      "dormitory",
      " residence hall"
     ]
    },
    {
     "word": "hallway",
     "clues": [
      "passage",
      " corridor"
     ]
    },
    {
     "word": "halt",
     "clues": [
      "freeze",
      " interruption",
      " temporary suspension"
     ]
    },
    {
     "word": "ham",
     "clues": [
      "meat"
     ]
    },
    {
     "word": "hammer",
     "clues": [
      "hand tool"
     ]
    },
    {
     "word": "hand",
     "clues": [
      "helping hand"
     ]
    },
    {
     "word": "hand",
     "clues": [
      "manus",
      " mitt",
      " paw"
     ]
    },
    {
     "word": "hand",
     "clues": [
      "round of applause"
     ]
    },
    {
     "word": "hand",
     "clues": [
      "deal",
      " cards held in a game by a player"
     ]
    },
    {
     "word": "hand",
     "clues": [
      "hired hand",
      " hired man"
     ]
    },
    {
     "word": "harbor",
     "clues": [
      "seaport"
     ]
    },
    {
     "word": "hardship",
     "clues": [
      "adversity"
     ]
    },
    {
     "word": "hardware",
     "clues": [
      "computer hardware"
     ]
    },
    {
     "word": "harmony",
     "clues": [
      "concord",
      " harmoniousness",
      " compatibility"
     ]
    },
    {
     "word": "harmony",
     "clues": [
      "musical harmony"
     ]
    },
    {
     "word": "harvest",
     "clues": [
      "harvest time"
     ]
    },
    {
     "word": "hat",
     "clues": [
      "headdress"
     ]
    },
    {
     "word": "hay",
     "clues": [
      "grass mowed and cured"
     ]
    },
    {
     "word": "head",
     "clues": [
      "obverse side of a tail"
     ]
    },
    {
     "word": "head",
     "clues": [
      "body part"
     ]
    },
    {
     "word": "head",
     "clues": [
      "chief",
      " top dog",
      " person who is in charge"
     ]
    },
    {
     "word": "headline",
     "clues": [
      "newspaper headline"
     ]
    },
    {
     "word": "headquarters",
     "clues": [
      "central office",
      " main office"
     ]
    },
    {
     "word": "health",
     "clues": [
      "wellness",
      " healthy state of wellbeing"
     ]
    },
    {
     "word": "health",
     "clues": [
      "general condition of body and mind"
     ]
    },
    {
     "word": "heart",
     "clues": [
      "playing card in the major suit of hearts"
     ]
    },
    {
     "word": "heart",
     "clues": [
      "bodily organ"
     ]
    },
    {
     "word": "heart",
     "clues": [
      "locus of feelings and intuitions"
     ]
    },
    {
     "word": "heart",
     "clues": [
      "figure with rounded sides curving inward at the top"
     ]
    },
    {
     "word": "heat",
     "clues": [
      "heating system"
     ]
    },
    {
     "word": "heat",
     "clues": [
      "passion"
     ]
    },
    {
     "word": "heaven",
     "clues": [
      "paradise",
      " place of complete bliss"
     ]
    },
    {
     "word": "heel",
     "clues": [
      "back of the foot"
     ]
    },
    {
     "word": "height",
     "clues": [
      "altitude"
     ]
    },
    {
     "word": "heir",
     "clues": [
      "inheritor",
      " heritor"
     ]
    },
    {
     "word": "helicopter",
     "clues": [
      "chopper"
     ]
    },
    {
     "word": "hell",
     "clues": [
      "infernal region",
      " netherworld"
     ]
    },
    {
     "word": "helmet",
     "clues": [
      "headgear"
     ]
    },
    {
     "word": "help",
     "clues": [
      "aid",
      " assist",
      " assistance"
     ]
    },
    {
     "word": "help",
     "clues": [
      "assistant",
      " helper",
      " supporter"
     ]
    },
    {
     "word": "hemisphere",
     "clues": [
      "cerebral hemisphere"
     ]
    },
    {
     "word": "hemisphere",
     "clues": [
      "half of the terrestrial globe"
     ]
    },
    {
     "word": "hen",
     "clues": [
      "female chicken"
     ]
    },
    {
     "word": "herb",
     "clues": [
      "cooking herb"
     ]
    },
    {
     "word": "herd",
     "clues": [
      "group of cattle"
     ]
    },
    {
     "word": "sandwich",
     "clues": [
      "bomber",
      " grinder",
      " hero",
      " hoagie",
      " sub"
     ]
    },
    {
     "word": "hero",
     "clues": [
      "person with exceptional courage"
     ]
    },
    {
     "word": "heroin",
     "clues": [
      "drug"
     ]
    },
    {
     "word": "hierarchy",
     "clues": [
      "power structure",
      " pecking order"
     ]
    },
    {
     "word": "highlight",
     "clues": [
      "high spot"
     ]
    },
    {
     "word": "hill",
     "clues": [
      "elevation of the land"
     ]
    },
    {
     "word": "hip",
     "clues": [
      "either side of the body below the waist and above the thigh"
     ]
    },
    {
     "word": "history",
     "clues": [
      "discipline that interprets past events"
     ]
    },
    {
     "word": "history",
     "clues": [
      "account",
      " chronicle",
      " story"
     ]
    },
    {
     "word": "history",
     "clues": [
      "the aggregate of past events"
     ]
    },
    {
     "word": "custody",
     "clues": [
      "detention",
      " detainment",
      " hold"
     ]
    },
    {
     "word": "hole",
     "clues": [
      "opening into or through something"
     ]
    },
    {
     "word": "mess",
     "clues": [
      "difficult situation",
      " fix",
      " jam",
      " muddle",
      " pickle"
     ]
    },
    {
     "word": "holiday",
     "clues": [
      "vacation"
     ]
    },
    {
     "word": "holiday",
     "clues": [
      "day on which work is suspended"
     ]
    },
    {
     "word": "home",
     "clues": [
      "dwelling",
      " domicile",
      " abode",
      " habitation"
     ]
    },
    {
     "word": "home",
     "clues": [
      "nursing home",
      " rest home"
     ]
    },
    {
     "word": "honey",
     "clues": [
      "sweet food"
     ]
    },
    {
     "word": "honor",
     "clues": [
      "honorableness"
     ]
    },
    {
     "word": "honor",
     "clues": [
      "laurels"
     ]
    },
    {
     "word": "hook",
     "clues": [
      "bent implement"
     ]
    },
    {
     "word": "bait",
     "clues": [
      "come-on",
      " lure",
      " sweetener",
      " hook"
     ]
    },
    {
     "word": "hope",
     "clues": [
      "wish",
      " desire and expectancy"
     ]
    },
    {
     "word": "horizon",
     "clues": [
      "skyline"
     ]
    },
    {
     "word": "horn",
     "clues": [
      "bony outgrowths on the head"
     ]
    },
    {
     "word": "horn",
     "clues": [
      "car horn"
     ]
    },
    {
     "word": "horoscope",
     "clues": [
      "prediction of the future"
     ]
    },
    {
     "word": "horror",
     "clues": [
      "repugnance",
      " repulsion",
      " revulsion"
     ]
    },
    {
     "word": "horse",
     "clues": [
      "animal"
     ]
    },
    {
     "word": "horse",
     "clues": [
      "knight",
      " chessman"
     ]
    },
    {
     "word": "hospital",
     "clues": [
      "infirmary"
     ]
    },
    {
     "word": "hospitality",
     "clues": [
      "cordial reception",
      " kindness in welcoming guests or strangers"
     ]
    },
    {
     "word": "host",
     "clues": [
      "master of ceremonies",
      " emcee"
     ]
    },
    {
     "word": "host",
     "clues": [
      "inviter"
     ]
    },
    {
     "word": "hostage",
     "clues": [
      "prisoner held for ransom"
     ]
    },
    {
     "word": "hostility",
     "clues": [
      "aggression"
     ]
    },
    {
     "word": "hostility",
     "clues": [
      "enmity",
      " antagonism"
     ]
    },
    {
     "word": "hour",
     "clues": [
      "hr",
      " 60 minutes",
      " period of time"
     ]
    },
    {
     "word": "hour",
     "clues": [
      "time of day",
      " clock time"
     ]
    },
    {
     "word": "house",
     "clues": [
      "dwelling"
     ]
    },
    {
     "word": "house",
     "clues": [
      "legislature"
     ]
    },
    {
     "word": "family",
     "clues": [
      "household",
      " home",
      " menage"
     ]
    },
    {
     "word": "houseplant",
     "clues": [
      "plant for indoor use"
     ]
    },
    {
     "word": "housewife",
     "clues": [
      "homemaker"
     ]
    },
    {
     "word": "housing",
     "clues": [
      "lodging",
      " living accommodations"
     ]
    },
    {
     "word": "huma",
     "clues": [
      "body] physical body"
     ]
    },
    {
     "word": "humanity",
     "clues": [
      "humanness"
     ]
    },
    {
     "word": "humor",
     "clues": [
      "sense of humor"
     ]
    },
    {
     "word": "hunter",
     "clues": [
      "huntsman"
     ]
    },
    {
     "word": "hunting",
     "clues": [
      "hunt"
     ]
    },
    {
     "word": "husband",
     "clues": [
      "hubby"
     ]
    },
    {
     "word": "hut",
     "clues": [
      "hovel",
      " hutch",
      " shack"
     ]
    },
    {
     "word": "hypothesis",
     "clues": [
      "guess",
      " conjecture",
      " surmise",
      " speculation"
     ]
    },
    {
     "word": "ice",
     "clues": [
      "frozen water"
     ]
    },
    {
     "word": "ic",
     "clues": [
      "cream] frozen dessert"
     ]
    },
    {
     "word": "idea",
     "clues": [
      "thought"
     ]
    },
    {
     "word": "ideal",
     "clues": [
      "paragon",
      " model of excellence or perfection"
     ]
    },
    {
     "word": "identification",
     "clues": [
      "identity papers"
     ]
    },
    {
     "word": "identity",
     "clues": [
      "personal identity",
      " individuality"
     ]
    },
    {
     "word": "identity",
     "clues": [
      "identicalness",
      " indistinguishability"
     ]
    },
    {
     "word": "ideology",
     "clues": [
      "political theory"
     ]
    },
    {
     "word": "ignorance",
     "clues": [
      "lack of knowledge"
     ]
    },
    {
     "word": "illness",
     "clues": [
      "unwellness",
      " malady",
      " sickness"
     ]
    },
    {
     "word": "illusion",
     "clues": [
      "false mental representation"
     ]
    },
    {
     "word": "image",
     "clues": [
      "mental image"
     ]
    },
    {
     "word": "image",
     "clues": [
      "double",
      " look-alike"
     ]
    },
    {
     "word": "impact",
     "clues": [
      "striking of one body against another"
     ]
    },
    {
     "word": "impact",
     "clues": [
      "forceful consequence",
      " strong effect"
     ]
    },
    {
     "word": "implication",
     "clues": [
      "logical implication"
     ]
    },
    {
     "word": "import",
     "clues": [
      "importation"
     ]
    },
    {
     "word": "improvement",
     "clues": [
      "condition superior to an earlier one"
     ]
    },
    {
     "word": "momentum",
     "clues": [
      "impulse",
      " force"
     ]
    },
    {
     "word": "impulse",
     "clues": [
      "caprice",
      " whim"
     ]
    },
    {
     "word": "incentive",
     "clues": [
      "inducement",
      " motivator",
      " carrot"
     ]
    },
    {
     "word": "inch",
     "clues": [
      "in",
      " unit of length"
     ]
    },
    {
     "word": "incident",
     "clues": [
      "event"
     ]
    },
    {
     "word": "increase",
     "clues": [
      "increment"
     ]
    },
    {
     "word": "inde",
     "clues": [
      "finger] forefinger"
     ]
    },
    {
     "word": "index",
     "clues": [
      "alphabetical listing"
     ]
    },
    {
     "word": "indication",
     "clues": [
      "suggestion"
     ]
    },
    {
     "word": "industry",
     "clues": [
      "manufacture"
     ]
    },
    {
     "word": "industry",
     "clues": [
      "diligence",
      " industriousness"
     ]
    },
    {
     "word": "infection",
     "clues": [
      "contagion",
      " transmission"
     ]
    },
    {
     "word": "inflation",
     "clues": [
      "rising prices"
     ]
    },
    {
     "word": "influence",
     "clues": [
      "power to affect persons or events"
     ]
    },
    {
     "word": "influence",
     "clues": [
      "effect of one thing or person"
     ]
    },
    {
     "word": "information",
     "clues": [
      "info"
     ]
    },
    {
     "word": "infrastructure",
     "clues": [
      "basic features of a system"
     ]
    },
    {
     "word": "inhabitant",
     "clues": [
      "habitant",
      " dweller",
      " denizen"
     ]
    },
    {
     "word": "inhibition",
     "clues": [
      "suppression",
      " conscious exclusion of unacceptable thoughts or desires"
     ]
    },
    {
     "word": "initial",
     "clues": [
      "first letter of a word"
     ]
    },
    {
     "word": "initiative",
     "clues": [
      "first step"
     ]
    },
    {
     "word": "injection",
     "clues": [
      "shot"
     ]
    },
    {
     "word": "injury",
     "clues": [
      "hurt",
      " harm",
      " trauma"
     ]
    },
    {
     "word": "inn",
     "clues": [
      "hostel",
      " hostelry",
      " lodge"
     ]
    },
    {
     "word": "innovation",
     "clues": [
      "invention"
     ]
    },
    {
     "word": "inquiry",
     "clues": [
      "inquest"
     ]
    },
    {
     "word": "inside",
     "clues": [
      "interior"
     ]
    },
    {
     "word": "brainstorm",
     "clues": [
      "sudden insight"
     ]
    },
    {
     "word": "insight",
     "clues": [
      "perceptiveness",
      " understanding"
     ]
    },
    {
     "word": "insistence",
     "clues": [
      "insistency",
      " act of insisting"
     ]
    },
    {
     "word": "inspector",
     "clues": [
      "examiner"
     ]
    },
    {
     "word": "inspiration",
     "clues": [
      "sudden intuition"
     ]
    },
    {
     "word": "instinct",
     "clues": [
      "inherent aptitude"
     ]
    },
    {
     "word": "institution",
     "clues": [
      "mental hospital"
     ]
    },
    {
     "word": "institution",
     "clues": [
      "establishment"
     ]
    },
    {
     "word": "instruction",
     "clues": [
      "teaching",
      " pedagogy"
     ]
    },
    {
     "word": "instrument",
     "clues": [
      "device"
     ]
    },
    {
     "word": "instrument",
     "clues": [
      "musical instrument"
     ]
    },
    {
     "word": "insurance",
     "clues": [
      "indemnity",
      " protection"
     ]
    },
    {
     "word": "integration",
     "clues": [
      "desegregation"
     ]
    },
    {
     "word": "integrity",
     "clues": [
      "moral soundness"
     ]
    },
    {
     "word": "intelligence",
     "clues": [
      "ability to comprehend"
     ]
    },
    {
     "word": "intelligence",
     "clues": [
      "intelligence service",
      " intelligence agency"
     ]
    },
    {
     "word": "intention",
     "clues": [
      "volition"
     ]
    },
    {
     "word": "interest",
     "clues": [
      "pastime",
      " pursuit"
     ]
    },
    {
     "word": "interest",
     "clues": [
      "fixed charge for borrowing money"
     ]
    },
    {
     "word": "interface",
     "clues": [
      "user interface"
     ]
    },
    {
     "word": "interference",
     "clues": [
      "hindrance",
      " hitch",
      " preventive",
      " encumbrance"
     ]
    },
    {
     "word": "intervention",
     "clues": [
      "interference"
     ]
    },
    {
     "word": "introduction",
     "clues": [
      "first section of a communication"
     ]
    },
    {
     "word": "introduction",
     "clues": [
      "presentation",
      " intro"
     ]
    },
    {
     "word": "introduction",
     "clues": [
      "basic instructional text"
     ]
    },
    {
     "word": "invasion",
     "clues": [
      "encroachment",
      " intrusion"
     ]
    },
    {
     "word": "investigation",
     "clues": [
      "probe"
     ]
    },
    {
     "word": "investment",
     "clues": [
      "investment funds"
     ]
    },
    {
     "word": "iron",
     "clues": [
      "ferrous metal"
     ]
    },
    {
     "word": "irony",
     "clues": [
      "sarcasm",
      " satire"
     ]
    },
    {
     "word": "island",
     "clues": [
      "land mass surrounded by water"
     ]
    },
    {
     "word": "isolation",
     "clues": [
      "state of separation"
     ]
    },
    {
     "word": "issue",
     "clues": [
      "important question"
     ]
    },
    {
     "word": "offspring",
     "clues": [
      "progeny",
      " issue"
     ]
    },
    {
     "word": "item",
     "clues": [
      "token",
      " individual instance"
     ]
    },
    {
     "word": "ivory",
     "clues": [
      "tusk"
     ]
    },
    {
     "word": "jacket",
     "clues": [
      "short coat"
     ]
    },
    {
     "word": "jam",
     "clues": [
      "preserve"
     ]
    },
    {
     "word": "jar",
     "clues": [
      "vessel"
     ]
    },
    {
     "word": "jaw",
     "clues": [
      "part of the skull"
     ]
    },
    {
     "word": "jelly",
     "clues": [
      "gelatinous substance"
     ]
    },
    {
     "word": "jet",
     "clues": [
      "squirt",
      " spurt",
      " spirt"
     ]
    },
    {
     "word": "jewel",
     "clues": [
      "gem",
      " precious stone"
     ]
    },
    {
     "word": "job",
     "clues": [
      "task",
      " chore"
     ]
    },
    {
     "word": "job",
     "clues": [
      "workplace"
     ]
    },
    {
     "word": "jockey",
     "clues": [
      "rider"
     ]
    },
    {
     "word": "joint",
     "clues": [
      "disreputable place of entertainment"
     ]
    },
    {
     "word": "joint",
     "clues": [
      "body part"
     ]
    },
    {
     "word": "joke",
     "clues": [
      "gag",
      " laugh",
      " jest"
     ]
    },
    {
     "word": "journal",
     "clues": [
      "periodical"
     ]
    },
    {
     "word": "journal",
     "clues": [
      "diary"
     ]
    },
    {
     "word": "joy",
     "clues": [
      "joyousness",
      " joyfulness"
     ]
    },
    {
     "word": "judge",
     "clues": [
      "justice",
      " jurist",
      " magistrate"
     ]
    },
    {
     "word": "judgment",
     "clues": [
      "judicial decision"
     ]
    },
    {
     "word": "judgment",
     "clues": [
      "cognitive process"
     ]
    },
    {
     "word": "jump",
     "clues": [
      "leap",
      " sudden increase"
     ]
    },
    {
     "word": "jungle",
     "clues": [
      "impenetrable forest"
     ]
    },
    {
     "word": "jurisdiction",
     "clues": [
      "legal power"
     ]
    },
    {
     "word": "jury",
     "clues": [
      "trial jury"
     ]
    },
    {
     "word": "justice",
     "clues": [
      "justness"
     ]
    },
    {
     "word": "kettle",
     "clues": [
      "boiler",
      " metal pot"
     ]
    },
    {
     "word": "key",
     "clues": [
      "opening device"
     ]
    },
    {
     "word": "key",
     "clues": [
      "tonality"
     ]
    },
    {
     "word": "key",
     "clues": [
      "legend",
      " list of words that explain symbols"
     ]
    },
    {
     "word": "kick",
     "clues": [
      "sudden stimulation"
     ]
    },
    {
     "word": "kid",
     "clues": [
      "young goat"
     ]
    },
    {
     "word": "kidney",
     "clues": [
      "bean-shaped excretory organ"
     ]
    },
    {
     "word": "killer",
     "clues": [
      "slayer"
     ]
    },
    {
     "word": "king",
     "clues": [
      "chess piece"
     ]
    },
    {
     "word": "king",
     "clues": [
      "playing card"
     ]
    },
    {
     "word": "king",
     "clues": [
      "male monarch"
     ]
    },
    {
     "word": "kingdom",
     "clues": [
      "monarchy"
     ]
    },
    {
     "word": "kinship",
     "clues": [
      "family relationship"
     ]
    },
    {
     "word": "kit",
     "clues": [
      "outfit",
      " gear"
     ]
    },
    {
     "word": "kitchen",
     "clues": [
      "room equipped for preparing meals"
     ]
    },
    {
     "word": "kite",
     "clues": [
      "toy"
     ]
    },
    {
     "word": "knee",
     "clues": [
      "knee joint"
     ]
    },
    {
     "word": "knife",
     "clues": [
      "tool"
     ]
    },
    {
     "word": "knot",
     "clues": [
      "fastening formed by looping and tying"
     ]
    },
    {
     "word": "knowledge",
     "clues": [
      "cognition",
      " result of perception",
      " learning",
      " or reasoning"
     ]
    },
    {
     "word": "Koran",
     "clues": [
      "Quran",
      " al-Qur'an",
      " Islam Holy Book"
     ]
    },
    {
     "word": "laboratory",
     "clues": [
      "lab",
      " research lab"
     ]
    },
    {
     "word": "labour",
     "clues": [
      "toil"
     ]
    },
    {
     "word": "labour",
     "clues": [
      "working class",
      " proletariat"
     ]
    },
    {
     "word": "laborer",
     "clues": [
      "manual laborer"
     ]
    },
    {
     "word": "lace",
     "clues": [
      "delicate fabric"
     ]
    },
    {
     "word": "lack",
     "clues": [
      "deficiency",
      " want"
     ]
    },
    {
     "word": "ladder",
     "clues": [
      "steps"
     ]
    },
    {
     "word": "lake",
     "clues": [
      "body of water"
     ]
    },
    {
     "word": "lamb",
     "clues": [
      "young sheep"
     ]
    },
    {
     "word": "lamp",
     "clues": [
      "furniture holding lightbulbs"
     ]
    },
    {
     "word": "land",
     "clues": [
      "estate",
      " landed estate"
     ]
    },
    {
     "word": "land",
     "clues": [
      "kingdom",
      " realm"
     ]
    },
    {
     "word": "landowner",
     "clues": [
      "landholder",
      " property owner"
     ]
    },
    {
     "word": "landscape",
     "clues": [
      "scenery"
     ]
    },
    {
     "word": "lane",
     "clues": [
      "narrow road"
     ]
    },
    {
     "word": "language",
     "clues": [
      "linguistic communication"
     ]
    },
    {
     "word": "language",
     "clues": [
      "terminology",
      " nomenclature"
     ]
    },
    {
     "word": "lap",
     "clues": [
      "body part"
     ]
    },
    {
     "word": "laser",
     "clues": [
      "coherent light"
     ]
    },
    {
     "word": "laundry",
     "clues": [
      "wash",
      " washables"
     ]
    },
    {
     "word": "law",
     "clues": [
      "natural scientific law"
     ]
    },
    {
     "word": "law",
     "clues": [
      "jurisprudence"
     ]
    },
    {
     "word": "law",
     "clues": [
      "police",
      " police force"
     ]
    },
    {
     "word": "lawyer",
     "clues": [
      "attorney"
     ]
    },
    {
     "word": "layer",
     "clues": [
      "thin sheet"
     ]
    },
    {
     "word": "layout",
     "clues": [
      "plan",
      " design"
     ]
    },
    {
     "word": "lead",
     "clues": [
      "position of leadership"
     ]
    },
    {
     "word": "leash",
     "clues": [
      "tether"
     ]
    },
    {
     "word": "lead",
     "clues": [
      "advantage held by a competitor"
     ]
    },
    {
     "word": "lead",
     "clues": [
      "Pb",
      " atomic number 82",
      " soft heavy toxic metal"
     ]
    },
    {
     "word": "leader",
     "clues": [
      "commander",
      " person who rules or guides or inspires others"
     ]
    },
    {
     "word": "leadership",
     "clues": [
      "leading"
     ]
    },
    {
     "word": "leaf",
     "clues": [
      "leafage",
      " foliage"
     ]
    },
    {
     "word": "leaflet",
     "clues": [
      "brochure",
      " folder",
      " pamphlet"
     ]
    },
    {
     "word": "lease",
     "clues": [
      "rental lease"
     ]
    },
    {
     "word": "farewell",
     "clues": [
      "leave",
      " leave-taking",
      " parting"
     ]
    },
    {
     "word": "leave",
     "clues": [
      "leave of absence"
     ]
    },
    {
     "word": "lecture",
     "clues": [
      "instruction",
      " teaching"
     ]
    },
    {
     "word": "left",
     "clues": [
      "left side",
      " left hand side"
     ]
    },
    {
     "word": "leftovers",
     "clues": [
      "leftover food"
     ]
    },
    {
     "word": "leg",
     "clues": [
      "one of the supports for a piece of furniture"
     ]
    },
    {
     "word": "leg",
     "clues": [
      "limb"
     ]
    },
    {
     "word": "legend",
     "clues": [
      "caption"
     ]
    },
    {
     "word": "legend",
     "clues": [
      "fable",
      " story"
     ]
    },
    {
     "word": "legislation",
     "clues": [
      "legislating",
      " lawmaking"
     ]
    },
    {
     "word": "legislature",
     "clues": [
      "legislative assembly"
     ]
    },
    {
     "word": "lemon",
     "clues": [
      "defective artifact"
     ]
    },
    {
     "word": "lemon",
     "clues": [
      "fruit"
     ]
    },
    {
     "word": "length",
     "clues": [
      "duration",
      " continuance in time"
     ]
    },
    {
     "word": "length",
     "clues": [
      "extent of something from beginning to end"
     ]
    },
    {
     "word": "lesson",
     "clues": [
      "unit of instruction"
     ]
    },
    {
     "word": "letter",
     "clues": [
      "missive",
      " written message addressed"
     ]
    },
    {
     "word": "letter",
     "clues": [
      "letter of the alphabet"
     ]
    },
    {
     "word": "level",
     "clues": [
      "floor",
      " storey",
      " story"
     ]
    },
    {
     "word": "level",
     "clues": [
      "layer",
      " stratum"
     ]
    },
    {
     "word": "level",
     "clues": [
      "grade",
      " tier"
     ]
    },
    {
     "word": "liability",
     "clues": [
      "legal obligation and responsibility"
     ]
    },
    {
     "word": "liberty",
     "clues": [
      "freedom"
     ]
    },
    {
     "word": "licence",
     "clues": [
      "license",
      " permit"
     ]
    },
    {
     "word": "lid",
     "clues": [
      "movable top"
     ]
    },
    {
     "word": "lid",
     "clues": [
      "eyelid"
     ]
    },
    {
     "word": "lie",
     "clues": [
      "prevarication"
     ]
    },
    {
     "word": "lifestyle",
     "clues": [
      "way of living"
     ]
    },
    {
     "word": "lift",
     "clues": [
      "ride in a car"
     ]
    },
    {
     "word": "lift",
     "clues": [
      "elevator"
     ]
    },
    {
     "word": "lift",
     "clues": [
      "ski tow",
      " ski lift"
     ]
    },
    {
     "word": "light",
     "clues": [
      "light source",
      " source of illumination"
     ]
    },
    {
     "word": "lighter",
     "clues": [
      "igniter",
      " device for lighting or igniting"
     ]
    },
    {
     "word": "light",
     "clues": [
      "luminosity",
      " brightness",
      " luminance"
     ]
    },
    {
     "word": "lily",
     "clues": [
      "flower"
     ]
    },
    {
     "word": "limb",
     "clues": [
      "body part"
     ]
    },
    {
     "word": "limit",
     "clues": [
      "demarcation",
      " demarcation line"
     ]
    },
    {
     "word": "limit",
     "clues": [
      "limitation"
     ]
    },
    {
     "word": "line",
     "clues": [
      "railway line",
      " rail line"
     ]
    },
    {
     "word": "line",
     "clues": [
      "telephone line",
      " phone line"
     ]
    },
    {
     "word": "line",
     "clues": [
      "production line",
      " assembly line"
     ]
    },
    {
     "word": "line",
     "clues": [
      "dividing line",
      " demarcation"
     ]
    },
    {
     "word": "line",
     "clues": [
      "argumentation",
      " logical argument",
      " line of reasoning"
     ]
    },
    {
     "word": "line",
     "clues": [
      "line of text"
     ]
    },
    {
     "word": "line",
     "clues": [
      "formation of people or things one behind another"
     ]
    },
    {
     "word": "line",
     "clues": [
      "wrinkle",
      " furrow",
      " crease",
      " crinkle",
      " seam"
     ]
    },
    {
     "word": "linen",
     "clues": [
      "white goods"
     ]
    },
    {
     "word": "link",
     "clues": [
      "fastener"
     ]
    },
    {
     "word": "lion",
     "clues": [
      "king of beasts"
     ]
    },
    {
     "word": "lip",
     "clues": [
      "brim",
      " rim",
      " top edge of a vessel"
     ]
    },
    {
     "word": "lip",
     "clues": [
      "fleshy folds of tissue surrounding the mouth"
     ]
    },
    {
     "word": "list",
     "clues": [
      "tilt",
      " inclination"
     ]
    },
    {
     "word": "list",
     "clues": [
      "listing"
     ]
    },
    {
     "word": "literacy",
     "clues": [
      "ability to read and write"
     ]
    },
    {
     "word": "literature",
     "clues": [
      "creative writing"
     ]
    },
    {
     "word": "litigation",
     "clues": [
      "judicial proceeding"
     ]
    },
    {
     "word": "liver",
     "clues": [
      "organ"
     ]
    },
    {
     "word": "load",
     "clues": [
      "burden",
      " weight"
     ]
    },
    {
     "word": "loan",
     "clues": [
      "temporary provision of money"
     ]
    },
    {
     "word": "lobby",
     "clues": [
      "vestibule",
      " foyer",
      " entrance hall"
     ]
    },
    {
     "word": "lobby",
     "clues": [
      "pressure group"
     ]
    },
    {
     "word": "location",
     "clues": [
      "point in space"
     ]
    },
    {
     "word": "lock",
     "clues": [
      "fastener fitted to a door"
     ]
    },
    {
     "word": "lock",
     "clues": [
      "curl",
      " ringlet",
      " whorl"
     ]
    },
    {
     "word": "log",
     "clues": [
      "logarithm"
     ]
    },
    {
     "word": "log",
     "clues": [
      "tree trunk"
     ]
    },
    {
     "word": "look",
     "clues": [
      "physical appearance"
     ]
    },
    {
     "word": "look",
     "clues": [
      "spirit",
      " tone",
      " feel",
      " feeling",
      " flavor"
     ]
    },
    {
     "word": "loop",
     "clues": [
      "iteration"
     ]
    },
    {
     "word": "loop",
     "clues": [
      "round or oval shape"
     ]
    },
    {
     "word": "loss",
     "clues": [
      "red ink",
      " financial loss"
     ]
    },
    {
     "word": "loss",
     "clues": [
      "something that is lost"
     ]
    },
    {
     "word": "lot",
     "clues": [
      "parcel of land having fixed boundaries"
     ]
    },
    {
     "word": "lot",
     "clues": [
      "deal",
      " flock",
      " good deal",
      " great deal",
      " heap"
     ]
    },
    {
     "word": "lounge",
     "clues": [
      "waiting room",
      " waiting area"
     ]
    },
    {
     "word": "sofa",
     "clues": [
      "couch"
     ]
    },
    {
     "word": "love",
     "clues": [
      "passion"
     ]
    },
    {
     "word": "love",
     "clues": [
      "beloved",
      " dear",
      " dearest",
      " loved one",
      " honey"
     ]
    },
    {
     "word": "lover",
     "clues": [
      "significant other"
     ]
    },
    {
     "word": "loyalty",
     "clues": [
      "trueness"
     ]
    },
    {
     "word": "lump",
     "clues": [
      "chunk",
      " gob",
      " clod"
     ]
    },
    {
     "word": "lunch",
     "clues": [
      "luncheon",
      " midday meal"
     ]
    },
    {
     "word": "lung",
     "clues": [
      "respiratory organ"
     ]
    },
    {
     "word": "machinery",
     "clues": [
      "machines"
     ]
    },
    {
     "word": "magazine",
     "clues": [
      "periodic publication"
     ]
    },
    {
     "word": "magnitude",
     "clues": [
      "size",
      " extent"
     ]
    },
    {
     "word": "maid",
     "clues": [
      "maidservant",
      " housemaid"
     ]
    },
    {
     "word": "mail",
     "clues": [
      "earth mail"
     ]
    },
    {
     "word": "mainstream",
     "clues": [
      "prevailing thought"
     ]
    },
    {
     "word": "majority",
     "clues": [
      "absolute majority"
     ]
    },
    {
     "word": "majority",
     "clues": [
      "legal age"
     ]
    },
    {
     "word": "makeup",
     "clues": [
      "cosmetics"
     ]
    },
    {
     "word": "man",
     "clues": [
      "homo",
      " human being",
      " human"
     ]
    },
    {
     "word": "man",
     "clues": [
      "adult male",
      " male"
     ]
    },
    {
     "word": "management",
     "clues": [
      "direction"
     ]
    },
    {
     "word": "manager",
     "clues": [
      "director"
     ]
    },
    {
     "word": "manner",
     "clues": [
      "personal manner",
      " way of acting or behaving"
     ]
    },
    {
     "word": "manual",
     "clues": [
      "handbook"
     ]
    },
    {
     "word": "manufacture",
     "clues": [
      "fabrication"
     ]
    },
    {
     "word": "manufacturer",
     "clues": [
      "producer"
     ]
    },
    {
     "word": "map",
     "clues": [
      "representation of the earth's surface"
     ]
    },
    {
     "word": "marathon",
     "clues": [
      "footrace of 26 miles"
     ]
    },
    {
     "word": "marble",
     "clues": [
      "glass ball for games"
     ]
    },
    {
     "word": "marble",
     "clues": [
      "rock"
     ]
    },
    {
     "word": "march",
     "clues": [
      "marching music"
     ]
    },
    {
     "word": "march",
     "clues": [
      "procession of people"
     ]
    },
    {
     "word": "march",
     "clues": [
      "March",
      " month"
     ]
    },
    {
     "word": "margin",
     "clues": [
      "edge",
      " blank space on a page"
     ]
    },
    {
     "word": "mark",
     "clues": [
      "scratch",
      " scrape",
      " scar",
      " indication of damage"
     ]
    },
    {
     "word": "mark",
     "clues": [
      "grade",
      " score"
     ]
    },
    {
     "word": "market",
     "clues": [
      "grocery store",
      " grocery",
      " food market"
     ]
    },
    {
     "word": "marketing",
     "clues": [
      "promoting and selling"
     ]
    },
    {
     "word": "wedding",
     "clues": [
      "marriage",
      " marriage ceremony"
     ]
    },
    {
     "word": "marriage",
     "clues": [
      "married couple",
      " man and wife"
     ]
    },
    {
     "word": "Mars",
     "clues": [
      "the red planet"
     ]
    },
    {
     "word": "marsh",
     "clues": [
      "marshland",
      " fen",
      " fenland"
     ]
    },
    {
     "word": "mask",
     "clues": [
      "disguise"
     ]
    },
    {
     "word": "mass",
     "clues": [
      "body of matter"
     ]
    },
    {
     "word": "master",
     "clues": [
      "maestro",
      " artist of consummate skill"
     ]
    },
    {
     "word": "match",
     "clues": [
      "lighter",
      " friction match"
     ]
    },
    {
     "word": "match",
     "clues": [
      "formal contest"
     ]
    },
    {
     "word": "match",
     "clues": [
      "peer",
      " equal",
      " compeer"
     ]
    },
    {
     "word": "match",
     "clues": [
      "catch",
      " a good matrimonial prospect"
     ]
    },
    {
     "word": "material",
     "clues": [
      "fabric",
      " cloth",
      " textile"
     ]
    },
    {
     "word": "material",
     "clues": [
      "stuff"
     ]
    },
    {
     "word": "mathematics",
     "clues": [
      "math",
      " maths"
     ]
    },
    {
     "word": "matrix",
     "clues": [
      "rectangular array"
     ]
    },
    {
     "word": "matter",
     "clues": [
      "substance"
     ]
    },
    {
     "word": "maximum",
     "clues": [
      "upper limit"
     ]
    },
    {
     "word": "mayor",
     "clues": [
      "city manager"
     ]
    },
    {
     "word": "maze",
     "clues": [
      "labyrinth"
     ]
    },
    {
     "word": "meadow",
     "clues": [
      "hayfield"
     ]
    },
    {
     "word": "meal",
     "clues": [
      "repast"
     ]
    },
    {
     "word": "meaning",
     "clues": [
      "significance",
      " signification"
     ]
    },
    {
     "word": "means",
     "clues": [
      "instrumentality for accomplishing some end"
     ]
    },
    {
     "word": "measure",
     "clues": [
      "measuring stick",
      " measuring rod"
     ]
    },
    {
     "word": "meat",
     "clues": [
      "flesh of animals"
     ]
    },
    {
     "word": "mechanism",
     "clues": [
      "piece of machinery"
     ]
    },
    {
     "word": "medal",
     "clues": [
      "decoration",
      " laurel wreath",
      " medallion",
      " ribbon"
     ]
    },
    {
     "word": "medicine",
     "clues": [
      "medical profession"
     ]
    },
    {
     "word": "medicine",
     "clues": [
      "medication",
      " medicament",
      " medicinal drug"
     ]
    },
    {
     "word": "medium",
     "clues": [
      "mass medium",
      " mass media"
     ]
    },
    {
     "word": "medium",
     "clues": [
      "spiritualist"
     ]
    },
    {
     "word": "medium",
     "clues": [
      "intermediate state"
     ]
    },
    {
     "word": "meeting",
     "clues": [
      "planned coming together"
     ]
    },
    {
     "word": "meeting",
     "clues": [
      "encounter",
      " casual or unexpected convergence"
     ]
    },
    {
     "word": "member",
     "clues": [
      "part of a social group"
     ]
    },
    {
     "word": "memorandum",
     "clues": [
      "memo"
     ]
    },
    {
     "word": "memorial",
     "clues": [
      "monument"
     ]
    },
    {
     "word": "memorial",
     "clues": [
      "commemoration",
      " remembrance"
     ]
    },
    {
     "word": "memory",
     "clues": [
      "computer memory",
      " storage"
     ]
    },
    {
     "word": "memory",
     "clues": [
      "capacity to remember"
     ]
    },
    {
     "word": "memory",
     "clues": [
      "something that is remembered"
     ]
    },
    {
     "word": "menu",
     "clues": [
      "computer menu"
     ]
    },
    {
     "word": "menu",
     "clues": [
      "dishes planned for a meal"
     ]
    },
    {
     "word": "merchant",
     "clues": [
      "merchandiser",
      " businessperson"
     ]
    },
    {
     "word": "mercy",
     "clues": [
      "clemency",
      " mercifulness",
      " leniency"
     ]
    },
    {
     "word": "merit",
     "clues": [
      "deservingness",
      " meritoriousness"
     ]
    },
    {
     "word": "message",
     "clues": [
      "written",
      " spoken",
      " or signaled communication"
     ]
    },
    {
     "word": "metal",
     "clues": [
      "metallic element"
     ]
    },
    {
     "word": "method",
     "clues": [
      "way of doing something"
     ]
    },
    {
     "word": "microphone",
     "clues": [
      "mike"
     ]
    },
    {
     "word": "middle",
     "clues": [
      "intermediate part or section"
     ]
    },
    {
     "word": "midnight",
     "clues": [
      "12 o'clock"
     ]
    },
    {
     "word": "migration",
     "clues": [
      "movement from one country to another"
     ]
    },
    {
     "word": "mile",
     "clues": [
      "distance"
     ]
    },
    {
     "word": "mill",
     "clues": [
      "grinder"
     ]
    },
    {
     "word": "mind",
     "clues": [
      "head",
      " brain",
      " what is responsible for one's thoughts and feelings"
     ]
    },
    {
     "word": "mind",
     "clues": [
      "intellect",
      " knowledge and intellectual ability"
     ]
    },
    {
     "word": "mine",
     "clues": [
      "explosive device"
     ]
    },
    {
     "word": "mine",
     "clues": [
      "excavation of ores and minerals"
     ]
    },
    {
     "word": "miner",
     "clues": [
      "mineworker"
     ]
    },
    {
     "word": "minimum",
     "clues": [
      "lower limit"
     ]
    },
    {
     "word": "minister",
     "clues": [
      "pastor",
      " rector"
     ]
    },
    {
     "word": "minister",
     "clues": [
      "government minister"
     ]
    },
    {
     "word": "ministry",
     "clues": [
      "government department"
     ]
    },
    {
     "word": "minority",
     "clues": [
      "smaller in number"
     ]
    },
    {
     "word": "minute",
     "clues": [
      "min",
      " unit of time equal to 60 seconds"
     ]
    },
    {
     "word": "miracle",
     "clues": [
      "supernatural event"
     ]
    },
    {
     "word": "mirror",
     "clues": [
      "reflector"
     ]
    },
    {
     "word": "miscarriage",
     "clues": [
      "stillbirth"
     ]
    },
    {
     "word": "misery",
     "clues": [
      "wretchedness",
      " miserableness"
     ]
    },
    {
     "word": "missile",
     "clues": [
      "projectile",
      " weapon"
     ]
    },
    {
     "word": "mist",
     "clues": [
      "thin fog"
     ]
    },
    {
     "word": "mixture",
     "clues": [
      "mix"
     ]
    },
    {
     "word": "model",
     "clues": [
      "simulation"
     ]
    },
    {
     "word": "model",
     "clues": [
      "framework"
     ]
    },
    {
     "word": "model",
     "clues": [
      "poser for a photographer or painter or sculptor"
     ]
    },
    {
     "word": "model",
     "clues": [
      "role model"
     ]
    },
    {
     "word": "model",
     "clues": [
      "fashion model"
     ]
    },
    {
     "word": "module",
     "clues": [
      "component"
     ]
    },
    {
     "word": "mole",
     "clues": [
      "small velvety-furred burrowing mammal"
     ]
    },
    {
     "word": "mole",
     "clues": [
      "pigmented spot on the skin"
     ]
    },
    {
     "word": "mole",
     "clues": [
      "counterspy"
     ]
    },
    {
     "word": "moment",
     "clues": [
      "here and now",
      " present moment"
     ]
    },
    {
     "word": "monarch",
     "clues": [
      "sovereign",
      " crowned head"
     ]
    },
    {
     "word": "money",
     "clues": [
      "currency"
     ]
    },
    {
     "word": "money",
     "clues": [
      "wealth"
     ]
    },
    {
     "word": "monk",
     "clues": [
      "inhabitant of a monastery"
     ]
    },
    {
     "word": "monkey",
     "clues": [
      "long-tailed primate"
     ]
    },
    {
     "word": "monopoly",
     "clues": [
      "exclusive control"
     ]
    },
    {
     "word": "monster",
     "clues": [
      "freak"
     ]
    },
    {
     "word": "month",
     "clues": [
      "calendar month"
     ]
    },
    {
     "word": "mood",
     "clues": [
      "temper",
      " humor"
     ]
    },
    {
     "word": "moon",
     "clues": [
      "satellite of the Earth"
     ]
    },
    {
     "word": "morale",
     "clues": [
      "team spirit"
     ]
    },
    {
     "word": "morale",
     "clues": [
      "individual psychological well-being"
     ]
    },
    {
     "word": "morning",
     "clues": [
      "morn",
      " morning time",
      " forenoon"
     ]
    },
    {
     "word": "dawn",
     "clues": [
      "dawning",
      " aurora",
      " first light",
      " daybreak"
     ]
    },
    {
     "word": "morsel",
     "clues": [
      "bit",
      " bit"
     ]
    },
    {
     "word": "mosaic",
     "clues": [
      "colored stone or glass art"
     ]
    },
    {
     "word": "mosque",
     "clues": [
      "place of worship"
     ]
    },
    {
     "word": "mosquito",
     "clues": [
      "blood-sucking insect"
     ]
    },
    {
     "word": "mother",
     "clues": [
      "female parent"
     ]
    },
    {
     "word": "motif",
     "clues": [
      "design"
     ]
    },
    {
     "word": "motivation",
     "clues": [
      "motive",
      " need"
     ]
    },
    {
     "word": "motorist",
     "clues": [
      "automobilist"
     ]
    },
    {
     "word": "highway",
     "clues": [
      "expressway",
      " freeway",
      " state highway"
     ]
    },
    {
     "word": "mold",
     "clues": [
      "fungus",
      " mould"
     ]
    },
    {
     "word": "mountain",
     "clues": [
      "mount",
      " land mass projecting above its surroundings"
     ]
    },
    {
     "word": "mourning",
     "clues": [
      "bereavement"
     ]
    },
    {
     "word": "mouse",
     "clues": [
      "rodent"
     ]
    },
    {
     "word": "mouse",
     "clues": [
      "computer mouse"
     ]
    },
    {
     "word": "mouth",
     "clues": [
      "oral cavity"
     ]
    },
    {
     "word": "move",
     "clues": [
      "relocation",
      " changing your residence or business"
     ]
    },
    {
     "word": "move",
     "clues": [
      "player's turn to move a piece or act"
     ]
    },
    {
     "word": "movement",
     "clues": [
      "motion",
      " move",
      " change of position"
     ]
    },
    {
     "word": "crusade",
     "clues": [
      "campaign",
      " cause"
     ]
    },
    {
     "word": "movement",
     "clues": [
      "social movement",
      " front",
      " people with a common ideology"
     ]
    },
    {
     "word": "mud",
     "clues": [
      "clay",
      " soft wet earth"
     ]
    },
    {
     "word": "mug",
     "clues": [
      "cup"
     ]
    },
    {
     "word": "multimedia",
     "clues": [
      "multimedia system"
     ]
    },
    {
     "word": "murder",
     "clues": [
      "slaying",
      " execution"
     ]
    },
    {
     "word": "muscle",
     "clues": [
      "bodily tissue"
     ]
    },
    {
     "word": "museum",
     "clues": [
      "exhibition hall"
     ]
    },
    {
     "word": "mushroom",
     "clues": [
      "fungus"
     ]
    },
    {
     "word": "mutation",
     "clues": [
      "genetic mutation"
     ]
    },
    {
     "word": "myth",
     "clues": [
      "traditional story"
     ]
    },
    {
     "word": "nail",
     "clues": [
      "thin pointed piece of metal"
     ]
    },
    {
     "word": "nail",
     "clues": [
      "body part"
     ]
    },
    {
     "word": "name",
     "clues": [
      "language unit by which a person or thing is known"
     ]
    },
    {
     "word": "name",
     "clues": [
      "person's reputation"
     ]
    },
    {
     "word": "nationalism",
     "clues": [
      "patriotism",
      " love of country"
     ]
    },
    {
     "word": "nationalist",
     "clues": [
      "patriot"
     ]
    },
    {
     "word": "nature",
     "clues": [
      "essential qualities or characteristics"
     ]
    },
    {
     "word": "nature",
     "clues": [
      "natural physical world including plants and animals"
     ]
    },
    {
     "word": "nature",
     "clues": [
      "causal agent creating and controlling the universe"
     ]
    },
    {
     "word": "navy",
     "clues": [
      "dark blue",
      " navy blue"
     ]
    },
    {
     "word": "navy",
     "clues": [
      "naval forces"
     ]
    },
    {
     "word": "neck",
     "clues": [
      "cervix",
      " connection from head to the rest of the body"
     ]
    },
    {
     "word": "need",
     "clues": [
      "demand"
     ]
    },
    {
     "word": "need",
     "clues": [
      "indigence",
      " penury",
      " extreme poverty"
     ]
    },
    {
     "word": "needle",
     "clues": [
      "sharp pointed implement"
     ]
    },
    {
     "word": "needle",
     "clues": [
      "indicator for readings"
     ]
    },
    {
     "word": "neglect",
     "clues": [
      "disregard"
     ]
    },
    {
     "word": "negligence",
     "clues": [
      "neglect"
     ]
    },
    {
     "word": "negotiation",
     "clues": [
      "dialogue",
      " talks"
     ]
    },
    {
     "word": "neighbour",
     "clues": [
      "neighbor",
      " person living nearby"
     ]
    },
    {
     "word": "neighborhood",
     "clues": [
      "vicinity",
      " neck of the woods"
     ]
    },
    {
     "word": "nerve",
     "clues": [
      "bundle of nerve fibers"
     ]
    },
    {
     "word": "nest",
     "clues": [
      "structure in which animals lay eggs"
     ]
    },
    {
     "word": "net",
     "clues": [
      "Internet",
      " Net",
      " cyberspace"
     ]
    },
    {
     "word": "net",
     "clues": [
      "game equipment"
     ]
    },
    {
     "word": "network",
     "clues": [
      "communication system with a group of broadcasting stations"
     ]
    },
    {
     "word": "network",
     "clues": [
      "web",
      " interconnected system"
     ]
    },
    {
     "word": "news",
     "clues": [
      "intelligence",
      " tidings",
      " word"
     ]
    },
    {
     "word": "news",
     "clues": [
      "news program",
      " news show"
     ]
    },
    {
     "word": "news",
     "clues": [
      "new information"
     ]
    },
    {
     "word": "night",
     "clues": [
      "nighttime",
      " dark"
     ]
    },
    {
     "word": "nightmare",
     "clues": [
      "upsetting dream"
     ]
    },
    {
     "word": "node",
     "clues": [
      "connecting point"
     ]
    },
    {
     "word": "noise",
     "clues": [
      "randomness",
      " haphazardness"
     ]
    },
    {
     "word": "noise",
     "clues": [
      "sound"
     ]
    },
    {
     "word": "nomination",
     "clues": [
      "naming a candidate"
     ]
    },
    {
     "word": "nonsense",
     "clues": [
      "bunk",
      " hokum"
     ]
    },
    {
     "word": "norm",
     "clues": [
      "standard"
     ]
    },
    {
     "word": "north",
     "clues": [
      "due north",
      " N",
      " direction"
     ]
    },
    {
     "word": "nose",
     "clues": [
      "olfactory organ"
     ]
    },
    {
     "word": "note",
     "clues": [
      "annotation"
     ]
    },
    {
     "word": "note",
     "clues": [
      "short letter",
      " line",
      " billet"
     ]
    },
    {
     "word": "note",
     "clues": [
      "musical note",
      " tone"
     ]
    },
    {
     "word": "note",
     "clues": [
      "bill",
      " banknote"
     ]
    },
    {
     "word": "notebook",
     "clues": [
      "notebook computer"
     ]
    },
    {
     "word": "notebook",
     "clues": [
      "book with blank pages"
     ]
    },
    {
     "word": "notice",
     "clues": [
      "announcement"
     ]
    },
    {
     "word": "notice",
     "clues": [
      "advance notification"
     ]
    },
    {
     "word": "notion",
     "clues": [
      "concept"
     ]
    },
    {
     "word": "novel",
     "clues": [
      "fictional work"
     ]
    },
    {
     "word": "number",
     "clues": [
      "quantity"
     ]
    },
    {
     "word": "number",
     "clues": [
      "numeral"
     ]
    },
    {
     "word": "number",
     "clues": [
      "phone number",
      " telephone number"
     ]
    },
    {
     "word": "nun",
     "clues": [
      "sister",
      " religious woman"
     ]
    },
    {
     "word": "nursery",
     "clues": [
      "plant nursery",
      " greenhouse",
      " glasshouse"
     ]
    },
    {
     "word": "nursery",
     "clues": [
      "baby's room"
     ]
    },
    {
     "word": "crackpot",
     "clues": [
      "crank",
      " nut",
      " nutcase",
      " fruitcake"
     ]
    },
    {
     "word": "nut",
     "clues": [
      "hard-shelled seed"
     ]
    },
    {
     "word": "oak",
     "clues": [
      "oak tree"
     ]
    },
    {
     "word": "object",
     "clues": [
      "physical object",
      " tangible and visible entity"
     ]
    },
    {
     "word": "object",
     "clues": [
      "aim",
      " objective",
      " target"
     ]
    },
    {
     "word": "obligation",
     "clues": [
      "duty",
      " responsibility"
     ]
    },
    {
     "word": "observation",
     "clues": [
      "facts learned by observing"
     ]
    },
    {
     "word": "observer",
     "clues": [
      "perceiver",
      " beholder"
     ]
    },
    {
     "word": "obstacle",
     "clues": [
      "block"
     ]
    },
    {
     "word": "occasion",
     "clues": [
      "time of a particular event"
     ]
    },
    {
     "word": "occupation",
     "clues": [
      "military control"
     ]
    },
    {
     "word": "offense",
     "clues": [
      "offensive",
      " attack"
     ]
    },
    {
     "word": "offense",
     "clues": [
      "misdemeanor",
      " infraction",
      " violation"
     ]
    },
    {
     "word": "offense",
     "clues": [
      "discourtesy",
      " offence"
     ]
    },
    {
     "word": "offender",
     "clues": [
      "wrongdoer"
     ]
    },
    {
     "word": "offer",
     "clues": [
      "offering",
      " verbal act of offering"
     ]
    },
    {
     "word": "office",
     "clues": [
      "business office",
      " workplace"
     ]
    },
    {
     "word": "officer",
     "clues": [
      "policeman",
      " police officer"
     ]
    },
    {
     "word": "official",
     "clues": [
      "functionary"
     ]
    },
    {
     "word": "offspring",
     "clues": [
      "young"
     ]
    },
    {
     "word": "oil",
     "clues": [
      "cooking oil",
      " vegetable oil"
     ]
    },
    {
     "word": "oil",
     "clues": [
      "viscous liquid"
     ]
    },
    {
     "word": "omission",
     "clues": [
      "skip",
      " mistake resulting from neglect"
     ]
    },
    {
     "word": "onion",
     "clues": [
      "edible bulb"
     ]
    },
    {
     "word": "opera",
     "clues": [
      "drama set to music"
     ]
    },
    {
     "word": "operation",
     "clues": [
      "surgery"
     ]
    },
    {
     "word": "operation",
     "clues": [
      "military operation"
     ]
    },
    {
     "word": "operation",
     "clues": [
      "business especially one run on a large scale"
     ]
    },
    {
     "word": "operation",
     "clues": [
      "functioning",
      " performance"
     ]
    },
    {
     "word": "opinion",
     "clues": [
      "public opinion",
      " popular opinion"
     ]
    },
    {
     "word": "opinion",
     "clues": [
      "legal opinion",
      " judgment",
      " judgement"
     ]
    },
    {
     "word": "opponent",
     "clues": [
      "adversary",
      " antagonist"
     ]
    },
    {
     "word": "opposite",
     "clues": [
      "reverse",
      " contrary"
     ]
    },
    {
     "word": "opposition",
     "clues": [
      "resistance"
     ]
    },
    {
     "word": "opposition",
     "clues": [
      "political party opposed"
     ]
    },
    {
     "word": "opposition",
     "clues": [
      "enemy",
      " foe"
     ]
    },
    {
     "word": "option",
     "clues": [
      "right to buy or sell property"
     ]
    },
    {
     "word": "orange",
     "clues": [
      "orangeness",
      " color between red and yellow"
     ]
    },
    {
     "word": "orange",
     "clues": [
      "citrus fruit"
     ]
    },
    {
     "word": "orbit",
     "clues": [
      "celestial orbit"
     ]
    },
    {
     "word": "orchestra",
     "clues": [
      "musical group"
     ]
    },
    {
     "word": "order",
     "clues": [
      "decree",
      " edict"
     ]
    },
    {
     "word": "order",
     "clues": [
      "request for food or refreshment"
     ]
    },
    {
     "word": "order",
     "clues": [
      "orderliness"
     ]
    },
    {
     "word": "organ",
     "clues": [
      "pipe organ"
     ]
    },
    {
     "word": "organ",
     "clues": [
      "body part"
     ]
    },
    {
     "word": "organisation",
     "clues": [
      "group of people who work together"
     ]
    },
    {
     "word": "orientation",
     "clues": [
      "position",
      " alignment"
     ]
    },
    {
     "word": "origin",
     "clues": [
      "descent",
      " extraction",
      " background",
      " provenance"
     ]
    },
    {
     "word": "outfit",
     "clues": [
      "getup",
      " clothing"
     ]
    },
    {
     "word": "outlet",
     "clues": [
      "retail store",
      " sales outlet"
     ]
    },
    {
     "word": "outlet",
     "clues": [
      "wall socket",
      " electric outlet"
     ]
    },
    {
     "word": "outlet",
     "clues": [
      "wall socket",
      " wall plug",
      " electric outlet"
     ]
    },
    {
     "word": "outline",
     "clues": [
      "abstract",
      " precis"
     ]
    },
    {
     "word": "outline",
     "clues": [
      "lineation",
      " linear boundary"
     ]
    },
    {
     "word": "outlook",
     "clues": [
      "mentality",
      " mindset"
     ]
    },
    {
     "word": "output",
     "clues": [
      "end product"
     ]
    },
    {
     "word": "outside",
     "clues": [
      "exterior",
      " outer side or surface"
     ]
    },
    {
     "word": "oven",
     "clues": [
      "kitchen appliance"
     ]
    },
    {
     "word": "overall",
     "clues": [
      "clothing"
     ]
    },
    {
     "word": "overview",
     "clues": [
      "summary"
     ]
    },
    {
     "word": "owl",
     "clues": [
      "nocturnal bird"
     ]
    },
    {
     "word": "owner",
     "clues": [
      "proprietor someone who owns a business"
     ]
    },
    {
     "word": "pace",
     "clues": [
      "tempo",
      " rate"
     ]
    },
    {
     "word": "pack",
     "clues": [
      "bundle carried on the back"
     ]
    },
    {
     "word": "pack",
     "clues": [
      "group of hunting animals"
     ]
    },
    {
     "word": "package",
     "clues": [
      "bundle",
      " packet",
      " parcel"
     ]
    },
    {
     "word": "packet",
     "clues": [
      "small package",
      " bundle"
     ]
    },
    {
     "word": "page",
     "clues": [
      "one side of one leaf"
     ]
    },
    {
     "word": "pain",
     "clues": [
      "physical pain"
     ]
    },
    {
     "word": "pain",
     "clues": [
      "emotional distress",
      " painfulness"
     ]
    },
    {
     "word": "pain",
     "clues": [
      "pain in the neck",
      " nuisance"
     ]
    },
    {
     "word": "paint",
     "clues": [
      "substance used to protect or decorate"
     ]
    },
    {
     "word": "painter",
     "clues": [
      "artist"
     ]
    },
    {
     "word": "pair",
     "clues": [
      "two people considered as a unit"
     ]
    },
    {
     "word": "palace",
     "clues": [
      "residence of a sovereign"
     ]
    },
    {
     "word": "palm",
     "clues": [
      "palm tree"
     ]
    },
    {
     "word": "chimpanzee",
     "clues": [
      "primate"
     ]
    },
    {
     "word": "pan",
     "clues": [
      "cooking pan"
     ]
    },
    {
     "word": "panel",
     "clues": [
      "plate or sheet that is a component of something"
     ]
    },
    {
     "word": "panel",
     "clues": [
      "team of experts"
     ]
    },
    {
     "word": "panic",
     "clues": [
      "terror",
      " overwhelming fear"
     ]
    },
    {
     "word": "paper",
     "clues": [
      "composition",
      " report"
     ]
    },
    {
     "word": "paper",
     "clues": [
      "scholarly article"
     ]
    },
    {
     "word": "paper",
     "clues": [
      "newspaper"
     ]
    },
    {
     "word": "paper",
     "clues": [
      "cellulose",
      " material for writing or printing on"
     ]
    },
    {
     "word": "paper",
     "clues": [
      "material made of cellulose pulp"
     ]
    },
    {
     "word": "parade",
     "clues": [
      "ceremonial procession"
     ]
    },
    {
     "word": "paradox",
     "clues": [
      "self-contradiction"
     ]
    },
    {
     "word": "paragraph",
     "clues": [
      "subdivisions of a text"
     ]
    },
    {
     "word": "parallel",
     "clues": [
      "analogue",
      " analog"
     ]
    },
    {
     "word": "parameter",
     "clues": [
      "factor"
     ]
    },
    {
     "word": "pardon",
     "clues": [
      "amnesty"
     ]
    },
    {
     "word": "park",
     "clues": [
      "commons",
      " common",
      " green"
     ]
    },
    {
     "word": "parking",
     "clues": [
      "parking space"
     ]
    },
    {
     "word": "part",
     "clues": [
      "portion",
      " component part",
      " component"
     ]
    },
    {
     "word": "particle",
     "clues": [
      "small body of mass"
     ]
    },
    {
     "word": "partner",
     "clues": [
      "spouse",
      " married person",
      " mate",
      " better half"
     ]
    },
    {
     "word": "partner",
     "clues": [
      "member of a partnership"
     ]
    },
    {
     "word": "partnership",
     "clues": [
      "cooperation among people"
     ]
    },
    {
     "word": "party",
     "clues": [
      "festivity"
     ]
    },
    {
     "word": "party",
     "clues": [
      "political party"
     ]
    },
    {
     "word": "pass",
     "clues": [
      "passing",
      " qualifying grade"
     ]
    },
    {
     "word": "pass",
     "clues": [
      "permission to enter or do something"
     ]
    },
    {
     "word": "passage",
     "clues": [
      "passageway"
     ]
    },
    {
     "word": "passage",
     "clues": [
      "section of text"
     ]
    },
    {
     "word": "passenger",
     "clues": [
      "rider"
     ]
    },
    {
     "word": "passion",
     "clues": [
      "passionateness",
      " strong emotion"
     ]
    },
    {
     "word": "password",
     "clues": [
      "watchword",
      " word"
     ]
    },
    {
     "word": "past",
     "clues": [
      "past times",
      " yesteryear"
     ]
    },
    {
     "word": "pastel",
     "clues": [
      "light pale color"
     ]
    },
    {
     "word": "pasture",
     "clues": [
      "pastureland",
      " grazing land"
     ]
    },
    {
     "word": "patch",
     "clues": [
      "piece of cloth"
     ]
    },
    {
     "word": "patch",
     "clues": [
      "bandage",
      " cover for injury"
     ]
    },
    {
     "word": "patch",
     "clues": [
      "plot",
      " small area"
     ]
    },
    {
     "word": "patent",
     "clues": [
      "patent of invention"
     ]
    },
    {
     "word": "path",
     "clues": [
      "route",
      " itinerary"
     ]
    },
    {
     "word": "patience",
     "clues": [
      "forbearance"
     ]
    },
    {
     "word": "patient",
     "clues": [
      "person who requires medical care"
     ]
    },
    {
     "word": "patrol",
     "clues": [
      "security detachment"
     ]
    },
    {
     "word": "pattern",
     "clues": [
      "model",
      " design"
     ]
    },
    {
     "word": "pause",
     "clues": [
      "temporary inactivity"
     ]
    },
    {
     "word": "pavement",
     "clues": [
      "sidewalk"
     ]
    },
    {
     "word": "payment",
     "clues": [
      "defrayal"
     ]
    },
    {
     "word": "peace",
     "clues": [
      "peacefulness",
      " peace of mind",
      " repose",
      " serenity"
     ]
    },
    {
     "word": "peace",
     "clues": [
      "state prevailing during the absence of war"
     ]
    },
    {
     "word": "peak",
     "clues": [
      "vertex",
      " apex",
      " acme",
      " highest point"
     ]
    },
    {
     "word": "peanut",
     "clues": [
      "goober"
     ]
    },
    {
     "word": "peasant",
     "clues": [
      "agricultural laborer"
     ]
    },
    {
     "word": "pedestrian",
     "clues": [
      "walker"
     ]
    },
    {
     "word": "pen",
     "clues": [
      "writing implement"
     ]
    },
    {
     "word": "pen",
     "clues": [
      "playpen"
     ]
    },
    {
     "word": "penalty",
     "clues": [
      "punishment"
     ]
    },
    {
     "word": "pencil",
     "clues": [
      "writing implement"
     ]
    },
    {
     "word": "penny",
     "clues": [
      "cent"
     ]
    },
    {
     "word": "pension",
     "clues": [
      "payment during retirement"
     ]
    },
    {
     "word": "retiree",
     "clues": [
      "pensioner"
     ]
    },
    {
     "word": "pepper",
     "clues": [
      "spice"
     ]
    },
    {
     "word": "percent",
     "clues": [
      "percentage"
     ]
    },
    {
     "word": "perception",
     "clues": [
      "process of perceiving"
     ]
    },
    {
     "word": "performance",
     "clues": [
      "execution",
      " carrying out"
     ]
    },
    {
     "word": "performance",
     "clues": [
      "act of presenting a play or a piece"
     ]
    },
    {
     "word": "performer",
     "clues": [
      "performing artist"
     ]
    },
    {
     "word": "period",
     "clues": [
      "point",
      " full stop",
      " stop",
      " full point"
     ]
    },
    {
     "word": "period",
     "clues": [
      "time period"
     ]
    },
    {
     "word": "period",
     "clues": [
      "interval taken to complete one cycle"
     ]
    },
    {
     "word": "period",
     "clues": [
      "historic period"
     ]
    },
    {
     "word": "permission",
     "clues": [
      "approval to do something"
     ]
    },
    {
     "word": "person",
     "clues": [
      "individual"
     ]
    },
    {
     "word": "personality",
     "clues": [
      "personal attributes"
     ]
    },
    {
     "word": "pest",
     "clues": [
      "blighter",
      " cuss",
      " pesterer",
      " gadfly",
      " persistently annoying person"
     ]
    },
    {
     "word": "pet",
     "clues": [
      "animal"
     ]
    },
    {
     "word": "philosophy",
     "clues": [
      "investigation of existence",
      " knowledge",
      " ethics"
     ]
    },
    {
     "word": "philosophy",
     "clues": [
      "doctrine",
      " school of thought",
      " set of beliefs"
     ]
    },
    {
     "word": "photograph",
     "clues": [
      "photo"
     ]
    },
    {
     "word": "photography",
     "clues": [
      "picture taking"
     ]
    },
    {
     "word": "physics",
     "clues": [
      "physical science"
     ]
    },
    {
     "word": "piano",
     "clues": [
      "keyboard instrument"
     ]
    },
    {
     "word": "picture",
     "clues": [
      "image",
      " icon",
      " visual representation"
     ]
    },
    {
     "word": "picture",
     "clues": [
      "painting",
      " graphic art"
     ]
    },
    {
     "word": "movie",
     "clues": [
      "film"
     ]
    },
    {
     "word": "pie",
     "clues": [
      "dish"
     ]
    },
    {
     "word": "piece",
     "clues": [
      "separate part of a whole"
     ]
    },
    {
     "word": "piece",
     "clues": [
      "musical composition",
      " opus",
      " composition",
      " piece of music"
     ]
    },
    {
     "word": "pier",
     "clues": [
      "support for two adjacent bridge spans"
     ]
    },
    {
     "word": "pig",
     "clues": [
      "hog",
      " swine"
     ]
    },
    {
     "word": "pig",
     "clues": [
      "hog",
      " greedy person"
     ]
    },
    {
     "word": "policeman",
     "clues": [
      "cop"
     ]
    },
    {
     "word": "pig",
     "clues": [
      "slob",
      " sloven",
      " slovenly person"
     ]
    },
    {
     "word": "pigeon",
     "clues": [
      "wild and domesticated bird"
     ]
    },
    {
     "word": "pile",
     "clues": [
      "heap",
      " mound"
     ]
    },
    {
     "word": "pill",
     "clues": [
      "birth control pill"
     ]
    },
    {
     "word": "pillow",
     "clues": [
      "cushion"
     ]
    },
    {
     "word": "pilot",
     "clues": [
      "airplane pilot"
     ]
    },
    {
     "word": "pin",
     "clues": [
      "personal identification number",
      " PIN",
      " PIN number"
     ]
    },
    {
     "word": "pioneer",
     "clues": [
      "innovator",
      " trailblazer",
      " groundbreaker"
     ]
    },
    {
     "word": "pipe",
     "clues": [
      "tube"
     ]
    },
    {
     "word": "pit",
     "clues": [
      "pitfall",
      " trap"
     ]
    },
    {
     "word": "pit",
     "clues": [
      "cavity",
      " hole in the ground"
     ]
    },
    {
     "word": "pitch",
     "clues": [
      "property of sound"
     ]
    },
    {
     "word": "slant",
     "clues": [
      "pitch",
      " deviation from the horizontal"
     ]
    },
    {
     "word": "pitch",
     "clues": [
      "sales pitch"
     ]
    },
    {
     "word": "pity",
     "clues": [
      "compassion"
     ]
    },
    {
     "word": "place",
     "clues": [
      "topographic point",
      " spot"
     ]
    },
    {
     "word": "place",
     "clues": [
      "seat"
     ]
    },
    {
     "word": "plaintiff",
     "clues": [
      "complainant"
     ]
    },
    {
     "word": "plan",
     "clues": [
      "design",
      " arrangement",
      " scheme"
     ]
    },
    {
     "word": "plane",
     "clues": [
      "airplane",
      " aeroplane"
     ]
    },
    {
     "word": "planet",
     "clues": [
      "celestial body"
     ]
    },
    {
     "word": "plant",
     "clues": [
      "flora",
      " plant life"
     ]
    },
    {
     "word": "plant",
     "clues": [
      "industrial plant",
      " factory"
     ]
    },
    {
     "word": "plaster",
     "clues": [
      "adhesive plaster"
     ]
    },
    {
     "word": "plastic",
     "clues": [
      "materials"
     ]
    },
    {
     "word": "plate",
     "clues": [
      "dish"
     ]
    },
    {
     "word": "platform",
     "clues": [
      "horizontal surface"
     ]
    },
    {
     "word": "play",
     "clues": [
      "child's play"
     ]
    },
    {
     "word": "play",
     "clues": [
      "drama",
      " dramatic play"
     ]
    },
    {
     "word": "player",
     "clues": [
      "actor",
      " role player"
     ]
    },
    {
     "word": "player",
     "clues": [
      "participant"
     ]
    },
    {
     "word": "pleasure",
     "clues": [
      "delight"
     ]
    },
    {
     "word": "plot",
     "clues": [
      "secret plan",
      " game",
      " secret scheme"
     ]
    },
    {
     "word": "plot",
     "clues": [
      "story"
     ]
    },
    {
     "word": "plot",
     "clues": [
      "chart"
     ]
    },
    {
     "word": "pneumonia",
     "clues": [
      "respiratory disease"
     ]
    },
    {
     "word": "pocket",
     "clues": [
      "pouch inside a garment"
     ]
    },
    {
     "word": "poem",
     "clues": [
      "verse form"
     ]
    },
    {
     "word": "poetry",
     "clues": [
      "poesy",
      " verse"
     ]
    },
    {
     "word": "point",
     "clues": [
      "detail",
      " item"
     ]
    },
    {
     "word": "point",
     "clues": [
      "tip",
      " peak",
      " V-shape"
     ]
    },
    {
     "word": "point",
     "clues": [
      "dot"
     ]
    },
    {
     "word": "poison",
     "clues": [
      "poisonous substance"
     ]
    },
    {
     "word": "pole",
     "clues": [
      "long rod"
     ]
    },
    {
     "word": "pole",
     "clues": [
      "Earth's antipodal point"
     ]
    },
    {
     "word": "policy",
     "clues": [
      "insurance policy"
     ]
    },
    {
     "word": "poll",
     "clues": [
      "counting of votes"
     ]
    },
    {
     "word": "poll",
     "clues": [
      "opinion poll"
     ]
    },
    {
     "word": "pollution",
     "clues": [
      "contamination"
     ]
    },
    {
     "word": "pony",
     "clues": [
      "small horse"
     ]
    },
    {
     "word": "pool",
     "clues": [
      "puddle"
     ]
    },
    {
     "word": "pop",
     "clues": [
      "pop music"
     ]
    },
    {
     "word": "pop",
     "clues": [
      "soda",
      " soda pop"
     ]
    },
    {
     "word": "pop",
     "clues": [
      "dad",
      " dada",
      " daddy",
      " pa",
      " papa"
     ]
    },
    {
     "word": "population",
     "clues": [
      "people who inhabit a territory"
     ]
    },
    {
     "word": "porter",
     "clues": [
      "person employed to carry luggage and supplies"
     ]
    },
    {
     "word": "portion",
     "clues": [
      "helping",
      " serving"
     ]
    },
    {
     "word": "portrait",
     "clues": [
      "portrayal",
      " likeness"
     ]
    },
    {
     "word": "position",
     "clues": [
      "placement",
      " location"
     ]
    },
    {
     "word": "position",
     "clues": [
      "stance",
      " posture"
     ]
    },
    {
     "word": "position",
     "clues": [
      "status"
     ]
    },
    {
     "word": "possession",
     "clues": [
      "ownership"
     ]
    },
    {
     "word": "possibility",
     "clues": [
      "possible action"
     ]
    },
    {
     "word": "post",
     "clues": [
      "mail",
      " mail service",
      " postal service"
     ]
    },
    {
     "word": "post",
     "clues": [
      "stake"
     ]
    },
    {
     "word": "pot",
     "clues": [
      "cooking vessel"
     ]
    },
    {
     "word": "pot",
     "clues": [
      "flowerpot"
     ]
    },
    {
     "word": "potential",
     "clues": [
      "potentiality"
     ]
    },
    {
     "word": "pottery",
     "clues": [
      "clayware"
     ]
    },
    {
     "word": "pound",
     "clues": [
      "dog pound"
     ]
    },
    {
     "word": "pound",
     "clues": [
      "lb",
      " 16 ounces"
     ]
    },
    {
     "word": "powder",
     "clues": [
      "fine-grained substance"
     ]
    },
    {
     "word": "power",
     "clues": [
      "world power",
      " major power",
      " great power",
      " superpower"
     ]
    },
    {
     "word": "power",
     "clues": [
      "force",
      " might"
     ]
    },
    {
     "word": "practice",
     "clues": [
      "pattern",
      " customary way of operation or behavior"
     ]
    },
    {
     "word": "practice",
     "clues": [
      "exercise",
      " drill",
      " practice session",
      " recitation"
     ]
    },
    {
     "word": "praise",
     "clues": [
      "congratulations",
      " kudos"
     ]
    },
    {
     "word": "prayer",
     "clues": [
      "supplication"
     ]
    },
    {
     "word": "precedent",
     "clues": [
      "case in point"
     ]
    },
    {
     "word": "precision",
     "clues": [
      "preciseness"
     ]
    },
    {
     "word": "predator",
     "clues": [
      "predatory animal"
     ]
    },
    {
     "word": "preference",
     "clues": [
      "predilection",
      " predisposition"
     ]
    },
    {
     "word": "prejudice",
     "clues": [
      "bias",
      " preconception"
     ]
    },
    {
     "word": "premium",
     "clues": [
      "insurance premium"
     ]
    },
    {
     "word": "preoccupation",
     "clues": [
      "idea that preoccupies the mind"
     ]
    },
    {
     "word": "preparation",
     "clues": [
      "readiness",
      " preparedness"
     ]
    },
    {
     "word": "prescription",
     "clues": [
      "prescription drug"
     ]
    },
    {
     "word": "prescription",
     "clues": [
      "physician's instructions"
     ]
    },
    {
     "word": "presence",
     "clues": [
      "bearing",
      " comportment"
     ]
    },
    {
     "word": "presence",
     "clues": [
      "state of being present"
     ]
    },
    {
     "word": "present",
     "clues": [
      "gift"
     ]
    },
    {
     "word": "present",
     "clues": [
      "nowadays"
     ]
    },
    {
     "word": "presentation",
     "clues": [
      "making publicly available or known"
     ]
    },
    {
     "word": "presidency",
     "clues": [
      "presidentship"
     ]
    },
    {
     "word": "president",
     "clues": [
      "chief executive of a republic"
     ]
    },
    {
     "word": "president",
     "clues": [
      "chairman",
      " chairwoman",
      " chair"
     ]
    },
    {
     "word": "press",
     "clues": [
      "printing press"
     ]
    },
    {
     "word": "press",
     "clues": [
      "newspaper writers"
     ]
    },
    {
     "word": "pressure",
     "clues": [
      "pressure sensation"
     ]
    },
    {
     "word": "pressure",
     "clues": [
      "pressure level",
      " force per unit area"
     ]
    },
    {
     "word": "pressure",
     "clues": [
      "imperativeness",
      " insistence",
      " insistency"
     ]
    },
    {
     "word": "prestige",
     "clues": [
      "prestigiousness"
     ]
    },
    {
     "word": "prevalence",
     "clues": [
      "preponderance",
      " superiority in number"
     ]
    },
    {
     "word": "prey",
     "clues": [
      "quarry hunted animal"
     ]
    },
    {
     "word": "price",
     "clues": [
      "monetary value",
      " cost"
     ]
    },
    {
     "word": "price",
     "clues": [
      "cost",
      " toll"
     ]
    },
    {
     "word": "pride",
     "clues": [
      "proud feeling"
     ]
    },
    {
     "word": "primary",
     "clues": [
      "primary election"
     ]
    },
    {
     "word": "prince",
     "clues": [
      "son of a sovereign"
     ]
    },
    {
     "word": "principle",
     "clues": [
      "basic truth or law or assumption"
     ]
    },
    {
     "word": "print",
     "clues": [
      "picture",
      " design"
     ]
    },
    {
     "word": "printer",
     "clues": [
      "output device that prints data"
     ]
    },
    {
     "word": "priority",
     "clues": [
      "precedence"
     ]
    },
    {
     "word": "prison",
     "clues": [
      "prison house",
      " correctional institution"
     ]
    },
    {
     "word": "prisoner",
     "clues": [
      "captive"
     ]
    },
    {
     "word": "privacy",
     "clues": [
      "privateness",
      " seclusion"
     ]
    },
    {
     "word": "privilege",
     "clues": [
      "special advantage"
     ]
    },
    {
     "word": "prize",
     "clues": [
      "trophy"
     ]
    },
    {
     "word": "loot",
     "clues": [
      "booty",
      " pillage",
      " plunder",
      " dirty money",
      " prize"
     ]
    },
    {
     "word": "problem",
     "clues": [
      "trouble"
     ]
    },
    {
     "word": "problem",
     "clues": [
      "question"
     ]
    },
    {
     "word": "process",
     "clues": [
      "procedure"
     ]
    },
    {
     "word": "produce",
     "clues": [
      "green goods",
      " green groceries"
     ]
    },
    {
     "word": "producer",
     "clues": [
      "film or play producer"
     ]
    },
    {
     "word": "product",
     "clues": [
      "merchandise",
      " ware"
     ]
    },
    {
     "word": "product",
     "clues": [
      "mathematical product obtained by multiplication"
     ]
    },
    {
     "word": "product",
     "clues": [
      "consequence of someone's efforts"
     ]
    },
    {
     "word": "production",
     "clues": [
      "act or process of producing something"
     ]
    },
    {
     "word": "production",
     "clues": [
      "presentation for the stage or screen or radio or TV"
     ]
    },
    {
     "word": "production",
     "clues": [
      "output",
      " yield"
     ]
    },
    {
     "word": "profession",
     "clues": [
      "occupation"
     ]
    },
    {
     "word": "professional",
     "clues": [
      "professional person"
     ]
    },
    {
     "word": "professor",
     "clues": [
      "prof"
     ]
    },
    {
     "word": "profile",
     "clues": [
      "side view"
     ]
    },
    {
     "word": "profit",
     "clues": [
      "gain"
     ]
    },
    {
     "word": "program",
     "clues": [
      "plan",
      " series of steps to be carried"
     ]
    },
    {
     "word": "program",
     "clues": [
      "announcement of a theatrical event"
     ]
    },
    {
     "word": "program",
     "clues": [
      "broadcast"
     ]
    },
    {
     "word": "program",
     "clues": [
      "computer program"
     ]
    },
    {
     "word": "progress",
     "clues": [
      "advancement",
      " gain"
     ]
    },
    {
     "word": "project",
     "clues": [
      "undertaking",
      " task",
      " enterprise"
     ]
    },
    {
     "word": "prediction",
     "clues": [
      "projection"
     ]
    },
    {
     "word": "projection",
     "clues": [
      "image projection"
     ]
    },
    {
     "word": "promise",
     "clues": [
      "verbal commitment"
     ]
    },
    {
     "word": "promotion",
     "clues": [
      "rising in rank"
     ]
    },
    {
     "word": "promotion",
     "clues": [
      "publicity"
     ]
    },
    {
     "word": "proof",
     "clues": [
      "cogent evidence"
     ]
    },
    {
     "word": "proof",
     "clues": [
      "mathematical proofs"
     ]
    },
    {
     "word": "property",
     "clues": [
      "attribute",
      " dimension"
     ]
    },
    {
     "word": "property",
     "clues": [
      "belongings",
      " holding",
      " material possession"
     ]
    },
    {
     "word": "proportion",
     "clues": [
      "dimension"
     ]
    },
    {
     "word": "proportion",
     "clues": [
      "quotient of magnitude of a part and magnitude of the whole"
     ]
    },
    {
     "word": "proposal",
     "clues": [
      "proposition"
     ]
    },
    {
     "word": "proposal",
     "clues": [
      "marriage proposal"
     ]
    },
    {
     "word": "proposition",
     "clues": [
      "statement"
     ]
    },
    {
     "word": "prosecution",
     "clues": [
      "criminal prosecution"
     ]
    },
    {
     "word": "prospect",
     "clues": [
      "expectation",
      " outlook"
     ]
    },
    {
     "word": "prosperity",
     "clues": [
      "economic prosperity"
     ]
    },
    {
     "word": "protection",
     "clues": [
      "protecting someone or something"
     ]
    },
    {
     "word": "shelter",
     "clues": [
      "physical protection"
     ]
    },
    {
     "word": "protest",
     "clues": [
      "objection",
      " dissent"
     ]
    },
    {
     "word": "provision",
     "clues": [
      "supply",
      " supplying"
     ]
    },
    {
     "word": "psychology",
     "clues": [
      "psychological science"
     ]
    },
    {
     "word": "bar",
     "clues": [
      "tavern",
      " pub"
     ]
    },
    {
     "word": "publication",
     "clues": [
      "issue"
     ]
    },
    {
     "word": "publication",
     "clues": [
      "printed work"
     ]
    },
    {
     "word": "publicity",
     "clues": [
      "public scrutiny"
     ]
    },
    {
     "word": "publisher",
     "clues": [
      "publishing house",
      " publishing firm"
     ]
    },
    {
     "word": "pudding",
     "clues": [
      "soft sweet dessert"
     ]
    },
    {
     "word": "pump",
     "clues": [
      "mechanical device"
     ]
    },
    {
     "word": "pumpkin",
     "clues": [
      "large yellow fruit"
     ]
    },
    {
     "word": "punch",
     "clues": [
      "blow",
      " lick",
      " biff"
     ]
    },
    {
     "word": "punch",
     "clues": [
      "mixed drink"
     ]
    },
    {
     "word": "pupil",
     "clues": [
      "contractile aperture in the iris of the eye"
     ]
    },
    {
     "word": "pupil",
     "clues": [
      "schoolchild",
      " school-age child"
     ]
    },
    {
     "word": "purpose",
     "clues": [
      "intent",
      " intention",
      " aim",
      " design"
     ]
    },
    {
     "word": "hobby",
     "clues": [
      "pursuit",
      " by-line",
      " hobby",
      " sideline",
      " spare-time activity"
     ]
    },
    {
     "word": "pursuit",
     "clues": [
      "quest",
      " search"
     ]
    },
    {
     "word": "puzzle",
     "clues": [
      "toy"
     ]
    },
    {
     "word": "pyramid",
     "clues": [
      "polyhedron"
     ]
    },
    {
     "word": "qualification",
     "clues": [
      "reservation",
      " limitation"
     ]
    },
    {
     "word": "quality",
     "clues": [
      "degree or grade of excellence"
     ]
    },
    {
     "word": "quantity",
     "clues": [
      "amount"
     ]
    },
    {
     "word": "quarter",
     "clues": [
      "district of a city"
     ]
    },
    {
     "word": "quarter",
     "clues": [
      "United States coin worth 25 cents"
     ]
    },
    {
     "word": "quarter",
     "clues": [
      "one-fourth"
     ]
    },
    {
     "word": "quarter",
     "clues": [
      "fourth part of a year",
      " three months"
     ]
    },
    {
     "word": "queen",
     "clues": [
      "female monarch"
     ]
    },
    {
     "word": "quest",
     "clues": [
      "seeking"
     ]
    },
    {
     "word": "question",
     "clues": [
      "inquiry",
      " query",
      " interrogation"
     ]
    },
    {
     "word": "queue",
     "clues": [
      "waiting line"
     ]
    },
    {
     "word": "quota",
     "clues": [
      "proportional share"
     ]
    },
    {
     "word": "quotation",
     "clues": [
      "quote",
      " citation",
      " words"
     ]
    },
    {
     "word": "quotation",
     "clues": [
      "price quotation"
     ]
    },
    {
     "word": "rabbit",
     "clues": [
      "burrowing animal"
     ]
    },
    {
     "word": "race",
     "clues": [
      "contest of speed"
     ]
    },
    {
     "word": "race",
     "clues": [
      "people belonging to the same genetic stock"
     ]
    },
    {
     "word": "racism",
     "clues": [
      "prejudice"
     ]
    },
    {
     "word": "rack",
     "clues": [
      "framework for holding objects"
     ]
    },
    {
     "word": "radiation",
     "clues": [
      "radioactivity"
     ]
    },
    {
     "word": "radiatio",
     "clues": [
      "sickness] radiation syndrome"
     ]
    },
    {
     "word": "radical",
     "clues": [
      "person with radical ideas"
     ]
    },
    {
     "word": "radio",
     "clues": [
      "radiocommunication",
      " wireless",
      " medium"
     ]
    },
    {
     "word": "radio",
     "clues": [
      "radio receiver",
      " receiving set",
      " radio set"
     ]
    },
    {
     "word": "rage",
     "clues": [
      "fury",
      " madness",
      " intense anger"
     ]
    },
    {
     "word": "raid",
     "clues": [
      "foray",
      " sudden attack"
     ]
    },
    {
     "word": "railcar",
     "clues": [
      "railroad car",
      " wagon"
     ]
    },
    {
     "word": "railroad",
     "clues": [
      "railroad line",
      " railway system"
     ]
    },
    {
     "word": "track",
     "clues": [
      "railroad track",
      " line of track"
     ]
    },
    {
     "word": "rain",
     "clues": [
      "rainfall"
     ]
    },
    {
     "word": "rainbow",
     "clues": [
      "colored light in the sky"
     ]
    },
    {
     "word": "rally",
     "clues": [
      "mass meeting"
     ]
    },
    {
     "word": "range",
     "clues": [
      "stove",
      " kitchen stove"
     ]
    },
    {
     "word": "range",
     "clues": [
      "scope",
      " reach",
      " orbit",
      " compass"
     ]
    },
    {
     "word": "range",
     "clues": [
      "large tract of grassy open land where livestock graze"
     ]
    },
    {
     "word": "range",
     "clues": [
      "mountain range",
      " range of mountains"
     ]
    },
    {
     "word": "rank",
     "clues": [
      "status"
     ]
    },
    {
     "word": "rat",
     "clues": [
      "rodent"
     ]
    },
    {
     "word": "strikebreaker",
     "clues": [
      "scab"
     ]
    },
    {
     "word": "rate",
     "clues": [
      "pace"
     ]
    },
    {
     "word": "ratio",
     "clues": [
      "relative magnitude"
     ]
    },
    {
     "word": "reaction",
     "clues": [
      "equal and opposite force"
     ]
    },
    {
     "word": "reaction",
     "clues": [
      "response revealing a person's feelings or attitude"
     ]
    },
    {
     "word": "reaction",
     "clues": [
      "chemical reaction"
     ]
    },
    {
     "word": "reactor",
     "clues": [
      "nuclear reactor"
     ]
    },
    {
     "word": "reader",
     "clues": [
      "subscriber"
     ]
    },
    {
     "word": "reader",
     "clues": [
      "reviewer",
      " referee"
     ]
    },
    {
     "word": "realism",
     "clues": [
      "pragmatism"
     ]
    },
    {
     "word": "reality",
     "clues": [
      "realness"
     ]
    },
    {
     "word": "reason",
     "clues": [
      "explanation of the cause"
     ]
    },
    {
     "word": "reason",
     "clues": [
      "rationality"
     ]
    },
    {
     "word": "rebel",
     "clues": [
      "insurgent",
      " insurrectionist",
      " freedom fighter"
     ]
    },
    {
     "word": "rebellion",
     "clues": [
      "insurrection",
      " revolt",
      " rising",
      " uprising"
     ]
    },
    {
     "word": "receipt",
     "clues": [
      "acknowledgment of payment"
     ]
    },
    {
     "word": "reception",
     "clues": [
      "broadcast reception"
     ]
    },
    {
     "word": "reception",
     "clues": [
      "formal party"
     ]
    },
    {
     "word": "recession",
     "clues": [
      "declining economy"
     ]
    },
    {
     "word": "recognition",
     "clues": [
      "acknowledgment"
     ]
    },
    {
     "word": "recommendation",
     "clues": [
      "testimonial",
      " good word"
     ]
    },
    {
     "word": "record",
     "clues": [
      "extreme attainment",
      " the best/worst performance ever"
     ]
    },
    {
     "word": "record",
     "clues": [
      "criminal record"
     ]
    },
    {
     "word": "record",
     "clues": [
      "document serving as legal evidence of a transaction"
     ]
    },
    {
     "word": "record",
     "clues": [
      "number of wins versus losses and ties"
     ]
    },
    {
     "word": "recording",
     "clues": [
      "information storage device"
     ]
    },
    {
     "word": "recovery",
     "clues": [
      "retrieval",
      " regaining"
     ]
    },
    {
     "word": "recovery",
     "clues": [
      "convalescence",
      " recuperation"
     ]
    },
    {
     "word": "red",
     "clues": [
      "redness"
     ]
    },
    {
     "word": "reduction",
     "clues": [
      "decrease",
      " diminution"
     ]
    },
    {
     "word": "redundancy",
     "clues": [
      "redundance",
      " superfluousness"
     ]
    },
    {
     "word": "referee",
     "clues": [
      "sports referee"
     ]
    },
    {
     "word": "reference",
     "clues": [
      "citation",
      " acknowledgment",
      " credit",
      " mention",
      " quotation"
     ]
    },
    {
     "word": "reference",
     "clues": [
      "reference point",
      " point of reference"
     ]
    },
    {
     "word": "referral",
     "clues": [
      "recommendation to consult someone"
     ]
    },
    {
     "word": "reflection",
     "clues": [
      "reflexion",
      " mirror image"
     ]
    },
    {
     "word": "reform",
     "clues": [
      "change for the better"
     ]
    },
    {
     "word": "regard",
     "clues": [
      "gaze",
      " long fixed look"
     ]
    },
    {
     "word": "register",
     "clues": [
      "cash register"
     ]
    },
    {
     "word": "register",
     "clues": [
      "registry",
      " official written record"
     ]
    },
    {
     "word": "registration",
     "clues": [
      "enrollment",
      " enrolment"
     ]
    },
    {
     "word": "regret",
     "clues": [
      "sorrow",
      " rue",
      " ruefulness"
     ]
    },
    {
     "word": "regulation",
     "clues": [
      "authoritative rule"
     ]
    },
    {
     "word": "rehabilitation",
     "clues": [
      "treatment of physical disabilities"
     ]
    },
    {
     "word": "rehabilitation",
     "clues": [
      "vindication of character",
      " exoneration"
     ]
    },
    {
     "word": "rehearsal",
     "clues": [
      "dry run"
     ]
    },
    {
     "word": "reign",
     "clues": [
      "time of rule"
     ]
    },
    {
     "word": "relation",
     "clues": [
      "relative",
      " person related by blood or marriage"
     ]
    },
    {
     "word": "relationship",
     "clues": [
      "state of connectedness between people"
     ]
    },
    {
     "word": "relaxation",
     "clues": [
      "easiness",
      " absence of tension"
     ]
    },
    {
     "word": "release",
     "clues": [
      "waiver",
      " discharge"
     ]
    },
    {
     "word": "relevance",
     "clues": [
      "relevancy"
     ]
    },
    {
     "word": "reliance",
     "clues": [
      "state of relying on something"
     ]
    },
    {
     "word": "relief",
     "clues": [
      "ease",
      " alleviation"
     ]
    },
    {
     "word": "reluctance",
     "clues": [
      "hesitancy",
      " hesitation",
      " disinclination"
     ]
    },
    {
     "word": "remark",
     "clues": [
      "explicit notice"
     ]
    },
    {
     "word": "remedy",
     "clues": [
      "curative",
      " cure",
      " medicine"
     ]
    },
    {
     "word": "rent",
     "clues": [
      "payment to a landlord"
     ]
    },
    {
     "word": "repetition",
     "clues": [
      "repeat"
     ]
    },
    {
     "word": "replacement",
     "clues": [
      "surrogate",
      " alternate",
      " substitute"
     ]
    },
    {
     "word": "report",
     "clues": [
      "news report",
      " story",
      " account"
     ]
    },
    {
     "word": "report",
     "clues": [
      "study",
      " written report",
      " evaluation"
     ]
    },
    {
     "word": "reporter",
     "clues": [
      "journalist",
      " newsperson"
     ]
    },
    {
     "word": "representative",
     "clues": [
      "person who represents others"
     ]
    },
    {
     "word": "representative",
     "clues": [
      "congressman"
     ]
    },
    {
     "word": "reproduction",
     "clues": [
      "replica",
      " replication",
      " copy"
     ]
    },
    {
     "word": "reptile",
     "clues": [
      "reptilian"
     ]
    },
    {
     "word": "reputation",
     "clues": [
      "notoriety for some characteristic"
     ]
    },
    {
     "word": "request",
     "clues": [
      "petition"
     ]
    },
    {
     "word": "requirement",
     "clues": [
      "necessity",
      " essential",
      " requisite"
     ]
    },
    {
     "word": "research",
     "clues": [
      "systematic investigation to establish facts"
     ]
    },
    {
     "word": "researcher",
     "clues": [
      "research worker",
      " investigator"
     ]
    },
    {
     "word": "reserve",
     "clues": [
      "reticence",
      " quietness"
     ]
    },
    {
     "word": "supply",
     "clues": [
      "backlog",
      " stockpile",
      " reserve",
      " reservoir"
     ]
    },
    {
     "word": "reservoir",
     "clues": [
      "artificial lake"
     ]
    },
    {
     "word": "residence",
     "clues": [
      "abode"
     ]
    },
    {
     "word": "resident",
     "clues": [
      "occupant"
     ]
    },
    {
     "word": "resignation",
     "clues": [
      "giving notice"
     ]
    },
    {
     "word": "resignation",
     "clues": [
      "surrender"
     ]
    },
    {
     "word": "resolution",
     "clues": [
      "decision to do something"
     ]
    },
    {
     "word": "resort",
     "clues": [
      "holiday resort"
     ]
    },
    {
     "word": "resource",
     "clues": [
      "source of aid or support"
     ]
    },
    {
     "word": "response",
     "clues": [
      "answer",
      " reply"
     ]
    },
    {
     "word": "response",
     "clues": [
      "reaction"
     ]
    },
    {
     "word": "responsibility",
     "clues": [
      "duty",
      " obligation"
     ]
    },
    {
     "word": "rest",
     "clues": [
      "support on which things can be put"
     ]
    },
    {
     "word": "rest",
     "clues": [
      "remainder",
      " balance",
      " residual",
      " residue"
     ]
    },
    {
     "word": "rest",
     "clues": [
      "respite",
      " relief",
      " rest period"
     ]
    },
    {
     "word": "restaurant",
     "clues": [
      "eating place"
     ]
    },
    {
     "word": "restoration",
     "clues": [
      "renovation",
      " refurbishment"
     ]
    },
    {
     "word": "restraint",
     "clues": [
      "limitation"
     ]
    },
    {
     "word": "restriction",
     "clues": [
      "limitation"
     ]
    },
    {
     "word": "result",
     "clues": [
      "resultant",
      " final result",
      " outcome",
      " consequence"
     ]
    },
    {
     "word": "retailer",
     "clues": [
      "retail merchant"
     ]
    },
    {
     "word": "retirement",
     "clues": [
      "withdrawal from a position"
     ]
    },
    {
     "word": "retreat",
     "clues": [
      "hideaway"
     ]
    },
    {
     "word": "return",
     "clues": [
      "act of returning to a prior location"
     ]
    },
    {
     "word": "return",
     "clues": [
      "homecoming"
     ]
    },
    {
     "word": "return",
     "clues": [
      "restitution",
      " restoration",
      " regaining"
     ]
    },
    {
     "word": "return",
     "clues": [
      "tax return",
      " income tax return"
     ]
    },
    {
     "word": "revenge",
     "clues": [
      "retaliation"
     ]
    },
    {
     "word": "reverse",
     "clues": [
      "reversion",
      " reversal",
      " turnabout",
      " turnaround"
     ]
    },
    {
     "word": "review",
     "clues": [
      "brushup"
     ]
    },
    {
     "word": "review",
     "clues": [
      "recapitulation",
      " recap",
      " summary"
     ]
    },
    {
     "word": "review",
     "clues": [
      "critique",
      " critical review",
      " review article"
     ]
    },
    {
     "word": "review",
     "clues": [
      "periodical"
     ]
    },
    {
     "word": "revival",
     "clues": [
      "resurgence",
      " revitalization"
     ]
    },
    {
     "word": "revolution",
     "clues": [
      "overthrow of government"
     ]
    },
    {
     "word": "revolution",
     "clues": [
      "rotation",
      " gyration"
     ]
    },
    {
     "word": "reward",
     "clues": [
      "bounty",
      " money for helping to find criminals"
     ]
    },
    {
     "word": "rhetoric",
     "clues": [
      "technique for speaking"
     ]
    },
    {
     "word": "rhythm",
     "clues": [
      "beat",
      " musical rhythm"
     ]
    },
    {
     "word": "rib",
     "clues": [
      "bone"
     ]
    },
    {
     "word": "ribbon",
     "clues": [
      "strip of material"
     ]
    },
    {
     "word": "rice",
     "clues": [
      "grains used as food"
     ]
    },
    {
     "word": "rider",
     "clues": [
      "person riding an animal"
     ]
    },
    {
     "word": "ridge",
     "clues": [
      "long narrow range of hills"
     ]
    },
    {
     "word": "rifle",
     "clues": [
      "firearm"
     ]
    },
    {
     "word": "right",
     "clues": [
      "rightfulness"
     ]
    },
    {
     "word": "right",
     "clues": [
      "right hand side"
     ]
    },
    {
     "word": "righ",
     "clues": [
      "wing] right"
     ]
    },
    {
     "word": "ring",
     "clues": [
      "hoop"
     ]
    },
    {
     "word": "ring",
     "clues": [
      "boxing ring"
     ]
    },
    {
     "word": "ring",
     "clues": [
      "characteristic sound"
     ]
    },
    {
     "word": "riot",
     "clues": [
      "public violence"
     ]
    },
    {
     "word": "orgy",
     "clues": [
      "orgy",
      " debauchery",
      " saturnalia",
      " bacchanal",
      " riot"
     ]
    },
    {
     "word": "rise",
     "clues": [
      "upgrade",
      " rising slope"
     ]
    },
    {
     "word": "rise",
     "clues": [
      "raise",
      " wage hike",
      " hike",
      " wage increase"
     ]
    },
    {
     "word": "risk",
     "clues": [
      "peril"
     ]
    },
    {
     "word": "ritual",
     "clues": [
      "rite"
     ]
    },
    {
     "word": "river",
     "clues": [
      "large natural stream of water"
     ]
    },
    {
     "word": "road",
     "clues": [
      "route",
      " open way for travel or transportation"
     ]
    },
    {
     "word": "looting",
     "clues": [
      "plundering"
     ]
    },
    {
     "word": "robot",
     "clues": [
      "automaton"
     ]
    },
    {
     "word": "rock",
     "clues": [
      "rock 'n' roll"
     ]
    },
    {
     "word": "rocket",
     "clues": [
      "vehicle propelled by a rocket engine"
     ]
    },
    {
     "word": "role",
     "clues": [
      "normal or customary activity of a person"
     ]
    },
    {
     "word": "role",
     "clues": [
      "character",
      " theatrical role",
      " part"
     ]
    },
    {
     "word": "roll",
     "clues": [
      "cylindrical form"
     ]
    },
    {
     "word": "roll",
     "clues": [
      "roster",
      " list of names"
     ]
    },
    {
     "word": "roll",
     "clues": [
      "drum roll",
      " sound of a drum"
     ]
    },
    {
     "word": "roll",
     "clues": [
      "bun",
      " bread"
     ]
    },
    {
     "word": "roof",
     "clues": [
      "top of a building"
     ]
    },
    {
     "word": "room",
     "clues": [
      "area within a building"
     ]
    },
    {
     "word": "ancestor",
     "clues": [
      "ancestor"
     ]
    },
    {
     "word": "root",
     "clues": [
      "part of plant"
     ]
    },
    {
     "word": "rose",
     "clues": [
      "flower"
     ]
    },
    {
     "word": "rotation",
     "clues": [
      "rotary motion"
     ]
    },
    {
     "word": "rung",
     "clues": [
      "stave",
      " round",
      " crosspiece between chair legs"
     ]
    },
    {
     "word": "route",
     "clues": [
      "path",
      " itinerary"
     ]
    },
    {
     "word": "routine",
     "clues": [
      "modus operandi"
     ]
    },
    {
     "word": "quarrel",
     "clues": [
      "row",
      " wrangle",
      " words",
      " run-in",
      " dustup"
     ]
    },
    {
     "word": "row",
     "clues": [
      "arrangement of objects or people side by side in a line"
     ]
    },
    {
     "word": "royalty",
     "clues": [
      "royal family",
      " royal line",
      " royal house"
     ]
    },
    {
     "word": "royalty",
     "clues": [
      "payment for a patent or copyright"
     ]
    },
    {
     "word": "rubbish",
     "clues": [
      "trash",
      " scrap",
      " worthless material"
     ]
    },
    {
     "word": "rugby",
     "clues": [
      "rugby football"
     ]
    },
    {
     "word": "ruin",
     "clues": [
      "ruined building"
     ]
    },
    {
     "word": "ruin",
     "clues": [
      "downfall",
      " ruination"
     ]
    },
    {
     "word": "rule",
     "clues": [
      "ruler",
      " measuring stick"
     ]
    },
    {
     "word": "rule",
     "clues": [
      "regulation"
     ]
    },
    {
     "word": "rule",
     "clues": [
      "convention",
      " norm of behavior",
      " pattern"
     ]
    },
    {
     "word": "rule",
     "clues": [
      "principle",
      " law concerning a natural phenomenon"
     ]
    },
    {
     "word": "rule",
     "clues": [
      "formula standard procedure for solving a mathematical problem"
     ]
    },
    {
     "word": "rule",
     "clues": [
      "directions defining a game or sport"
     ]
    },
    {
     "word": "rule",
     "clues": [
      "dominion",
      " dominance or power through legal authority"
     ]
    },
    {
     "word": "rule",
     "clues": [
      "duration of a monarch's or government's power"
     ]
    },
    {
     "word": "rumor",
     "clues": [
      "hearsay"
     ]
    },
    {
     "word": "runner",
     "clues": [
      "athlete"
     ]
    },
    {
     "word": "rush",
     "clues": [
      "haste",
      " hurry",
      " rushing"
     ]
    },
    {
     "word": "sacrifice",
     "clues": [
      "ritual killing"
     ]
    },
    {
     "word": "sacrifice",
     "clues": [
      "loss"
     ]
    },
    {
     "word": "safety",
     "clues": [
      "state of being certain that adverse effects will not be caused"
     ]
    },
    {
     "word": "sailor",
     "clues": [
      "crewman"
     ]
    },
    {
     "word": "salad",
     "clues": [
      "food mixture"
     ]
    },
    {
     "word": "sale",
     "clues": [
      "cut-rate sale",
      " sales event"
     ]
    },
    {
     "word": "sale",
     "clues": [
      "general activity of selling"
     ]
    },
    {
     "word": "salmon",
     "clues": [
      "fish"
     ]
    },
    {
     "word": "salon",
     "clues": [
      "beauty salon",
      " beauty parlor"
     ]
    },
    {
     "word": "salt",
     "clues": [
      "table salt",
      " common salt"
     ]
    },
    {
     "word": "salvation",
     "clues": [
      "being saved from harm"
     ]
    },
    {
     "word": "sample",
     "clues": [
      "small part representative of the whole"
     ]
    },
    {
     "word": "sanctuary",
     "clues": [
      "consecrated place"
     ]
    },
    {
     "word": "sand",
     "clues": [
      "finely ground particles"
     ]
    },
    {
     "word": "sandal",
     "clues": [
      "footwear"
     ]
    },
    {
     "word": "satellite",
     "clues": [
      "orbiter"
     ]
    },
    {
     "word": "satisfaction",
     "clues": [
      "contentment"
     ]
    },
    {
     "word": "sausage",
     "clues": [
      "wurst",
      " meat"
     ]
    },
    {
     "word": "scale",
     "clues": [
      "body covering of many animals"
     ]
    },
    {
     "word": "scale",
     "clues": [
      "weighing machine"
     ]
    },
    {
     "word": "scale",
     "clues": [
      "scale of measurement",
      " graduated table"
     ]
    },
    {
     "word": "scandal",
     "clues": [
      "outrage"
     ]
    },
    {
     "word": "scenario",
     "clues": [
      "sequence of possible events"
     ]
    },
    {
     "word": "scene",
     "clues": [
      "subdivision of an act of a play"
     ]
    },
    {
     "word": "scene",
     "clues": [
      "shot",
      " unit of action in a film"
     ]
    },
    {
     "word": "scene",
     "clues": [
      "setting"
     ]
    },
    {
     "word": "scene",
     "clues": [
      "fit",
      " tantrum",
      " conniption"
     ]
    },
    {
     "word": "scheme",
     "clues": [
      "schema organization of concepts"
     ]
    },
    {
     "word": "scholar",
     "clues": [
      "scholarly person",
      " student",
      " learned person"
     ]
    },
    {
     "word": "school",
     "clues": [
      "schoolhouse"
     ]
    },
    {
     "word": "school",
     "clues": [
      "educational institution"
     ]
    },
    {
     "word": "science",
     "clues": [
      "scientific discipline"
     ]
    },
    {
     "word": "grudge",
     "clues": [
      "grievance"
     ]
    },
    {
     "word": "score",
     "clues": [
      "game score"
     ]
    },
    {
     "word": "scrap",
     "clues": [
      "small piece"
     ]
    },
    {
     "word": "screen",
     "clues": [
      "protective covering"
     ]
    },
    {
     "word": "screen",
     "clues": [
      "movie screen",
      " projection screen"
     ]
    },
    {
     "word": "screw",
     "clues": [
      "fastener with a tapered threaded shank"
     ]
    },
    {
     "word": "script",
     "clues": [
      "writing system"
     ]
    },
    {
     "word": "sculpture",
     "clues": [
      "plastic art"
     ]
    },
    {
     "word": "sea",
     "clues": [
      "ocean"
     ]
    },
    {
     "word": "seal",
     "clues": [
      "marine mammal"
     ]
    },
    {
     "word": "seal",
     "clues": [
      "stamp on a document"
     ]
    },
    {
     "word": "season",
     "clues": [
      "time of year"
     ]
    },
    {
     "word": "seat",
     "clues": [
      "furniture designed for sitting on"
     ]
    },
    {
     "word": "buttocks",
     "clues": [
      "butt",
      " bum",
      " tush"
     ]
    },
    {
     "word": "second",
     "clues": [
      "following the first"
     ]
    },
    {
     "word": "second",
     "clues": [
      "sec",
      " 1/60 of a minute"
     ]
    },
    {
     "word": "mystery",
     "clues": [
      "secret",
      " enigma",
      " closed book"
     ]
    },
    {
     "word": "secretary",
     "clues": [
      "secretarial assistant"
     ]
    },
    {
     "word": "secretion",
     "clues": [
      "glandular substance"
     ]
    },
    {
     "word": "section",
     "clues": [
      "segment",
      " one of several parts"
     ]
    },
    {
     "word": "sector",
     "clues": [
      "sphere",
      " particular aspect of life or activity"
     ]
    },
    {
     "word": "security",
     "clues": [
      "security system",
      " security measure"
     ]
    },
    {
     "word": "seed",
     "clues": [
      "seeded player"
     ]
    },
    {
     "word": "seed",
     "clues": [
      "small hard fruit"
     ]
    },
    {
     "word": "selection",
     "clues": [
      "excerpt",
      " excerption",
      " extract"
     ]
    },
    {
     "word": "selection",
     "clues": [
      "assortment of things from which to choose"
     ]
    },
    {
     "word": "selection",
     "clues": [
      "survival",
      " survival of the fittest",
      " natural selection"
     ]
    },
    {
     "word": "self",
     "clues": [
      "ego"
     ]
    },
    {
     "word": "seller",
     "clues": [
      "marketer",
      " vender",
      " vendor"
     ]
    },
    {
     "word": "seminar",
     "clues": [
      "course"
     ]
    },
    {
     "word": "senior",
     "clues": [
      "student"
     ]
    },
    {
     "word": "sensation",
     "clues": [
      "public excitement"
     ]
    },
    {
     "word": "sense",
     "clues": [
      "sensation",
      " sentience",
      " sentiency",
      " sensory faculty"
     ]
    },
    {
     "word": "sense",
     "clues": [
      "common sense",
      " good sense"
     ]
    },
    {
     "word": "sense",
     "clues": [
      "signified",
      " the meaning of a word or expression"
     ]
    },
    {
     "word": "sensitivity",
     "clues": [
      "sensitiveness"
     ]
    },
    {
     "word": "sentence",
     "clues": [
      "conviction"
     ]
    },
    {
     "word": "sentence",
     "clues": [
      "string of words"
     ]
    },
    {
     "word": "sentiment",
     "clues": [
      "emotion"
     ]
    },
    {
     "word": "separation",
     "clues": [
      "disassociation",
      " division"
     ]
    },
    {
     "word": "sequence",
     "clues": [
      "serial arrangement"
     ]
    },
    {
     "word": "series",
     "clues": [
      "serial",
      " serial publication"
     ]
    },
    {
     "word": "series",
     "clues": [
      "serial",
      " serialized set of programs"
     ]
    },
    {
     "word": "waiter",
     "clues": [
      "server"
     ]
    },
    {
     "word": "service",
     "clues": [
      "help",
      " assistance"
     ]
    },
    {
     "word": "service",
     "clues": [
      "religious service",
      " divine service"
     ]
    },
    {
     "word": "service",
     "clues": [
      "overhaul",
      " inspection and repair"
     ]
    },
    {
     "word": "service",
     "clues": [
      "military service",
      " armed service"
     ]
    },
    {
     "word": "session",
     "clues": [
      "meeting"
     ]
    },
    {
     "word": "session",
     "clues": [
      "school term",
      " academic term"
     ]
    },
    {
     "word": "set",
     "clues": [
      "stage set"
     ]
    },
    {
     "word": "set",
     "clues": [
      "group of things of the same kind that belong together"
     ]
    },
    {
     "word": "settlement",
     "clues": [
      "resolution",
      " outcome"
     ]
    },
    {
     "word": "settlement",
     "clues": [
      "colony"
     ]
    },
    {
     "word": "sex",
     "clues": [
      "gender",
      " sexuality"
     ]
    },
    {
     "word": "nuance",
     "clues": [
      "shade",
      " nicety",
      " subtlety",
      " refinement"
     ]
    },
    {
     "word": "shadow",
     "clues": [
      "shade"
     ]
    },
    {
     "word": "shaft",
     "clues": [
      "long rod or pole"
     ]
    },
    {
     "word": "shaft",
     "clues": [
      "vertical passage into a mine"
     ]
    },
    {
     "word": "shame",
     "clues": [
      "pity",
      " unfortunate event"
     ]
    },
    {
     "word": "shame",
     "clues": [
      "painful emotion"
     ]
    },
    {
     "word": "disgrace",
     "clues": [
      "shame",
      " ignominy",
      " dishonor"
     ]
    },
    {
     "word": "share",
     "clues": [
      "parcel",
      " portion",
      " result of parcelling out or sharing"
     ]
    },
    {
     "word": "share",
     "clues": [
      "any of the equal portions into which the capital stock of a corporation is divided"
     ]
    },
    {
     "word": "shareholder",
     "clues": [
      "stockholder"
     ]
    },
    {
     "word": "shark",
     "clues": [
      "carnivorous fish"
     ]
    },
    {
     "word": "sheep",
     "clues": [
      "woolly mammal"
     ]
    },
    {
     "word": "sheet",
     "clues": [
      "bed sheet"
     ]
    },
    {
     "word": "sail",
     "clues": [
      "canvas"
     ]
    },
    {
     "word": "sheet",
     "clues": [
      "piece of paper"
     ]
    },
    {
     "word": "shelf",
     "clues": [
      "support for holding objects"
     ]
    },
    {
     "word": "shell",
     "clues": [
      "covering of a mollusc"
     ]
    },
    {
     "word": "shell",
     "clues": [
      "ammunition"
     ]
    },
    {
     "word": "shell",
     "clues": [
      "eggshell"
     ]
    },
    {
     "word": "shell",
     "clues": [
      "outer layer of nuts or fruits"
     ]
    },
    {
     "word": "shelter",
     "clues": [
      "temporary housing for homeless"
     ]
    },
    {
     "word": "shield",
     "clues": [
      "protective covering"
     ]
    },
    {
     "word": "shift",
     "clues": [
      "switch"
     ]
    },
    {
     "word": "shift",
     "clues": [
      "work shift"
     ]
    },
    {
     "word": "shirt",
     "clues": [
      "garment"
     ]
    },
    {
     "word": "shock",
     "clues": [
      "electric shock"
     ]
    },
    {
     "word": "shock",
     "clues": [
      "daze",
      " stupor",
      " feeling of distress and disbelief"
     ]
    },
    {
     "word": "shoe",
     "clues": [
      "footwear"
     ]
    },
    {
     "word": "horseshoe",
     "clues": [
      "shoe for horses"
     ]
    },
    {
     "word": "shop",
     "clues": [
      "store"
     ]
    },
    {
     "word": "shop",
     "clues": [
      "workshop"
     ]
    },
    {
     "word": "shor",
     "clues": [
      "circuit] short"
     ]
    },
    {
     "word": "shortage",
     "clues": [
      "dearth",
      " famine"
     ]
    },
    {
     "word": "shorts",
     "clues": [
      "short pants"
     ]
    },
    {
     "word": "shot",
     "clues": [
      "shooting",
      " act of firing a projectile"
     ]
    },
    {
     "word": "shot",
     "clues": [
      "injection"
     ]
    },
    {
     "word": "shoulder",
     "clues": [
      "berm",
      " edge of a road"
     ]
    },
    {
     "word": "shoulder",
     "clues": [
      "part of the body"
     ]
    },
    {
     "word": "show",
     "clues": [
      "public exhibition or entertainment"
     ]
    },
    {
     "word": "shower",
     "clues": [
      "plumbing fixture"
     ]
    },
    {
     "word": "shower",
     "clues": [
      "rain shower"
     ]
    },
    {
     "word": "sickness",
     "clues": [
      "nausea"
     ]
    },
    {
     "word": "side",
     "clues": [
      "position"
     ]
    },
    {
     "word": "side",
     "clues": [
      "face"
     ]
    },
    {
     "word": "side",
     "clues": [
      "slope",
      " incline"
     ]
    },
    {
     "word": "siege",
     "clues": [
      "besieging",
      " beleaguering",
      " military blockade"
     ]
    },
    {
     "word": "sight",
     "clues": [
      "vision",
      " visual sense"
     ]
    },
    {
     "word": "sign",
     "clues": [
      "signboard"
     ]
    },
    {
     "word": "sign",
     "clues": [
      "gesture that is part of a sign language"
     ]
    },
    {
     "word": "sign",
     "clues": [
      "signal"
     ]
    },
    {
     "word": "sign",
     "clues": [
      "mark"
     ]
    },
    {
     "word": "sign",
     "clues": [
      "augury",
      " foretoken",
      " preindication"
     ]
    },
    {
     "word": "sign",
     "clues": [
      "sign of the zodiac",
      " house"
     ]
    },
    {
     "word": "silence",
     "clues": [
      "quiet"
     ]
    },
    {
     "word": "silence",
     "clues": [
      "secrecy",
      " secretiveness"
     ]
    },
    {
     "word": "silk",
     "clues": [
      "fabric"
     ]
    },
    {
     "word": "flatware",
     "clues": [
      "silverware"
     ]
    },
    {
     "word": "silver",
     "clues": [
      "ash gray",
      " ash grey",
      " silver gray"
     ]
    },
    {
     "word": "silver",
     "clues": [
      "metal"
     ]
    },
    {
     "word": "simplicity",
     "clues": [
      "simpleness",
      " uncomplicatedness"
     ]
    },
    {
     "word": "sin",
     "clues": [
      "sinning",
      " transgression"
     ]
    },
    {
     "word": "singer",
     "clues": [
      "vocalist"
     ]
    },
    {
     "word": "sink",
     "clues": [
      "plumbing fixture"
     ]
    },
    {
     "word": "sister",
     "clues": [
      "sis",
      " female sibling"
     ]
    },
    {
     "word": "site",
     "clues": [
      "web site",
      " website",
      " internet site"
     ]
    },
    {
     "word": "site",
     "clues": [
      "land site"
     ]
    },
    {
     "word": "situation",
     "clues": [
      "state of affairs"
     ]
    },
    {
     "word": "size",
     "clues": [
      "physical magnitude"
     ]
    },
    {
     "word": "sketch",
     "clues": [
      "cartoon",
      " humorous drawing"
     ]
    },
    {
     "word": "skin",
     "clues": [
      "hide",
      " pelt",
      " body covering of a living animal"
     ]
    },
    {
     "word": "skin",
     "clues": [
      "cutis",
      " person's body covering"
     ]
    },
    {
     "word": "peel",
     "clues": [
      "skin",
      " rind of a fruit or vegetable"
     ]
    },
    {
     "word": "skirt",
     "clues": [
      "garment"
     ]
    },
    {
     "word": "slab",
     "clues": [
      "block",
      " thick piece"
     ]
    },
    {
     "word": "slave",
     "clues": [
      "person who is owned"
     ]
    },
    {
     "word": "sleep",
     "clues": [
      "slumber"
     ]
    },
    {
     "word": "sleeve",
     "clues": [
      "arm",
      " part of a garment that is attached at armhole"
     ]
    },
    {
     "word": "slice",
     "clues": [
      "thin flat piece"
     ]
    },
    {
     "word": "slide",
     "clues": [
      "chute",
      " sloping trough"
     ]
    },
    {
     "word": "slide",
     "clues": [
      "plaything"
     ]
    },
    {
     "word": "slime",
     "clues": [
      "sludge",
      " goo",
      " gunk",
      " muck"
     ]
    },
    {
     "word": "gaffe",
     "clues": [
      "slip",
      " faux pas"
     ]
    },
    {
     "word": "slogan",
     "clues": [
      "motto",
      " catchword"
     ]
    },
    {
     "word": "slot",
     "clues": [
      "small slit"
     ]
    },
    {
     "word": "slot",
     "clues": [
      "time slot"
     ]
    },
    {
     "word": "smell",
     "clues": [
      "aroma",
      " odor",
      " odour",
      " scent"
     ]
    },
    {
     "word": "smell",
     "clues": [
      "sense of smell",
      " olfaction"
     ]
    },
    {
     "word": "smile",
     "clues": [
      "smiling",
      " grin",
      " grinning",
      " facial expression"
     ]
    },
    {
     "word": "smoke",
     "clues": [
      "fumes"
     ]
    },
    {
     "word": "snail",
     "clues": [
      "slug"
     ]
    },
    {
     "word": "snake",
     "clues": [
      "serpent"
     ]
    },
    {
     "word": "snow",
     "clues": [
      "snowfall"
     ]
    },
    {
     "word": "soap",
     "clues": [
      "cleansing agent"
     ]
    },
    {
     "word": "society",
     "clues": [
      "extended social group"
     ]
    },
    {
     "word": "sock",
     "clues": [
      "stocking",
      " hosiery"
     ]
    },
    {
     "word": "sodium",
     "clues": [
      "Na"
     ]
    },
    {
     "word": "software",
     "clues": [
      "computer software"
     ]
    },
    {
     "word": "soil",
     "clues": [
      "territory"
     ]
    },
    {
     "word": "soil",
     "clues": [
      "dirt",
      " earth's surface"
     ]
    },
    {
     "word": "soldier",
     "clues": [
      "enlisted man or woman"
     ]
    },
    {
     "word": "solo",
     "clues": [
      "activity performed alone"
     ]
    },
    {
     "word": "solution",
     "clues": [
      "successful action of solving a problem"
     ]
    },
    {
     "word": "solution",
     "clues": [
      "mixture of two or more substances"
     ]
    },
    {
     "word": "soprano",
     "clues": [
      "voice range"
     ]
    },
    {
     "word": "soul",
     "clues": [
      "psyche"
     ]
    },
    {
     "word": "sound",
     "clues": [
      "auditory event"
     ]
    },
    {
     "word": "soup",
     "clues": [
      "liquid food"
     ]
    },
    {
     "word": "source",
     "clues": [
      "documentary reference"
     ]
    },
    {
     "word": "source",
     "clues": [
      "beginning",
      " origin",
      " root"
     ]
    },
    {
     "word": "source",
     "clues": [
      "informant",
      " person who supplies information"
     ]
    },
    {
     "word": "south",
     "clues": [
      "Confederacy",
      " Confederate States"
     ]
    },
    {
     "word": "south",
     "clues": [
      "due south",
      " S"
     ]
    },
    {
     "word": "space",
     "clues": [
      "blank"
     ]
    },
    {
     "word": "space",
     "clues": [
      "empty area"
     ]
    },
    {
     "word": "speaker",
     "clues": [
      "loudspeaker",
      " speaker unit"
     ]
    },
    {
     "word": "speaker",
     "clues": [
      "talker",
      " utterer"
     ]
    },
    {
     "word": "species",
     "clues": [
      "taxonomic group"
     ]
    },
    {
     "word": "specimen",
     "clues": [
      "medical specimen"
     ]
    },
    {
     "word": "spectrum",
     "clues": [
      "broad range of related values"
     ]
    },
    {
     "word": "speech",
     "clues": [
      "address"
     ]
    },
    {
     "word": "speech",
     "clues": [
      "exchange of spoken words",
      " verbal discourse"
     ]
    },
    {
     "word": "speech",
     "clues": [
      "manner of speaking"
     ]
    },
    {
     "word": "speed",
     "clues": [
      "amphetamine",
      " pep pill",
      " upper"
     ]
    },
    {
     "word": "speed",
     "clues": [
      "velocity"
     ]
    },
    {
     "word": "spell",
     "clues": [
      "magic spell",
      " charm"
     ]
    },
    {
     "word": "trance",
     "clues": [
      "spell"
     ]
    },
    {
     "word": "sphere",
     "clues": [
      "sphere of influence"
     ]
    },
    {
     "word": "sphere",
     "clues": [
      "ball"
     ]
    },
    {
     "word": "spider",
     "clues": [
      "arachnid"
     ]
    },
    {
     "word": "spinach",
     "clues": [
      "vegetable"
     ]
    },
    {
     "word": "spine",
     "clues": [
      "thorn",
      " prickle"
     ]
    },
    {
     "word": "spirit",
     "clues": [
      "intent",
      " purport",
      " intended meaning"
     ]
    },
    {
     "word": "spirit",
     "clues": [
      "disembodied spirit"
     ]
    },
    {
     "word": "spirit",
     "clues": [
      "emotional state"
     ]
    },
    {
     "word": "spite",
     "clues": [
      "malice",
      " maliciousness",
      " spitefulness",
      " venom"
     ]
    },
    {
     "word": "split",
     "clues": [
      "schism",
      " division into opposing factions"
     ]
    },
    {
     "word": "split",
     "clues": [
      "lengthwise crack"
     ]
    },
    {
     "word": "spoon",
     "clues": [
      "cutlery"
     ]
    },
    {
     "word": "sport",
     "clues": [
      "athletics"
     ]
    },
    {
     "word": "spot",
     "clues": [
      "smudge",
      " blot",
      " daub",
      " smear"
     ]
    },
    {
     "word": "spray",
     "clues": [
      "water in small drops"
     ]
    },
    {
     "word": "ranch",
     "clues": [
      "cattle ranch",
      " cattle farm"
     ]
    },
    {
     "word": "spread",
     "clues": [
      "paste",
      " food mixture"
     ]
    },
    {
     "word": "banquet",
     "clues": [
      "feast"
     ]
    },
    {
     "word": "spring",
     "clues": [
      "metal elastic device"
     ]
    },
    {
     "word": "spring",
     "clues": [
      "fountain"
     ]
    },
    {
     "word": "spring",
     "clues": [
      "springtime"
     ]
    },
    {
     "word": "spy",
     "clues": [
      "undercover agent"
     ]
    },
    {
     "word": "squad",
     "clues": [
      "army unit"
     ]
    },
    {
     "word": "square",
     "clues": [
      "public square",
      " plaza",
      " place"
     ]
    },
    {
     "word": "square",
     "clues": [
      "rectangle with four equal sides"
     ]
    },
    {
     "word": "stable",
     "clues": [
      "stalls",
      " horse barn"
     ]
    },
    {
     "word": "staff",
     "clues": [
      "rod"
     ]
    },
    {
     "word": "staff",
     "clues": [
      "personnel"
     ]
    },
    {
     "word": "stage",
     "clues": [
      "large platform on which people are seen by an audience"
     ]
    },
    {
     "word": "stage",
     "clues": [
      "phase",
      " distinct time period in a sequence of events"
     ]
    },
    {
     "word": "staircase",
     "clues": [
      "stairway"
     ]
    },
    {
     "word": "stake",
     "clues": [
      "stakes",
      " bet",
      " wager"
     ]
    },
    {
     "word": "stall",
     "clues": [
      "booth",
      " cubicle"
     ]
    },
    {
     "word": "stamp",
     "clues": [
      "postage stamp"
     ]
    },
    {
     "word": "stand",
     "clues": [
      "stall",
      " sales booth"
     ]
    },
    {
     "word": "stand",
     "clues": [
      "viewpoint",
      " standpoint"
     ]
    },
    {
     "word": "standard",
     "clues": [
      "criterion",
      " measure",
      " touchstone"
     ]
    },
    {
     "word": "star",
     "clues": [
      "asterisk"
     ]
    },
    {
     "word": "star",
     "clues": [
      "celestial body"
     ]
    },
    {
     "word": "star",
     "clues": [
      "ace",
      " champion",
      " virtuoso",
      " hotshot",
      " superstar"
     ]
    },
    {
     "word": "star",
     "clues": [
      "plane figure with 5 or more points"
     ]
    },
    {
     "word": "start",
     "clues": [
      "beginning",
      " commencement",
      " first",
      " outset",
      " get-go"
     ]
    },
    {
     "word": "state",
     "clues": [
      "province"
     ]
    },
    {
     "word": "state",
     "clues": [
      "state of matter"
     ]
    },
    {
     "word": "statement",
     "clues": [
      "financial statement"
     ]
    },
    {
     "word": "statement",
     "clues": [
      "affirmation",
      " assertion"
     ]
    },
    {
     "word": "station",
     "clues": [
      "post"
     ]
    },
    {
     "word": "steak",
     "clues": [
      "slice of meat"
     ]
    },
    {
     "word": "steam",
     "clues": [
      "boiling water"
     ]
    },
    {
     "word": "steel",
     "clues": [
      "metal alloy"
     ]
    },
    {
     "word": "stem",
     "clues": [
      "stalk",
      " part of a plant"
     ]
    },
    {
     "word": "step",
     "clues": [
      "measure",
      " maneuver made as part of progress toward a goal"
     ]
    },
    {
     "word": "step",
     "clues": [
      "stair"
     ]
    },
    {
     "word": "step",
     "clues": [
      "footstep",
      " pace",
      " stride"
     ]
    },
    {
     "word": "step",
     "clues": [
      "gradation"
     ]
    },
    {
     "word": "steward",
     "clues": [
      "flight attendant"
     ]
    },
    {
     "word": "stick",
     "clues": [
      "piece of wood"
     ]
    },
    {
     "word": "joystick",
     "clues": [
      "control stick"
     ]
    },
    {
     "word": "stimulation",
     "clues": [
      "act of arousing an organism to action"
     ]
    },
    {
     "word": "stitch",
     "clues": [
      "sewing"
     ]
    },
    {
     "word": "stock",
     "clues": [
      "livestock",
      " farm animal"
     ]
    },
    {
     "word": "stock",
     "clues": [
      "inventory"
     ]
    },
    {
     "word": "stock",
     "clues": [
      "shares"
     ]
    },
    {
     "word": "stomach",
     "clues": [
      "tummy",
      " tum"
     ]
    },
    {
     "word": "stone",
     "clues": [
      "rock"
     ]
    },
    {
     "word": "pit",
     "clues": [
      "stone",
      " hard inner core of some fruits"
     ]
    },
    {
     "word": "gem",
     "clues": [
      "gemstone",
      " stone"
     ]
    },
    {
     "word": "stool",
     "clues": [
      "simple seat"
     ]
    },
    {
     "word": "stop",
     "clues": [
      "stopover",
      " layover"
     ]
    },
    {
     "word": "storage",
     "clues": [
      "repositing",
      " warehousing"
     ]
    },
    {
     "word": "storm",
     "clues": [
      "weather condition"
     ]
    },
    {
     "word": "story",
     "clues": [
      "fib",
      " trivial lie"
     ]
    },
    {
     "word": "story",
     "clues": [
      "narrative",
      " narration"
     ]
    },
    {
     "word": "strap",
     "clues": [
      "shoulder strap"
     ]
    },
    {
     "word": "straw",
     "clues": [
      "drinking straw"
     ]
    },
    {
     "word": "straw",
     "clues": [
      "chaff",
      " husk",
      " shuck",
      " stalk"
     ]
    },
    {
     "word": "strawberry",
     "clues": [
      "fruit"
     ]
    },
    {
     "word": "stream",
     "clues": [
      "watercourse"
     ]
    },
    {
     "word": "strength",
     "clues": [
      "property of being physically or mentally strong"
     ]
    },
    {
     "word": "strength",
     "clues": [
      "forte",
      " strong suit",
      " specialty",
      " strong point"
     ]
    },
    {
     "word": "stress",
     "clues": [
      "tension",
      " tenseness"
     ]
    },
    {
     "word": "strike",
     "clues": [
      "work stoppage"
     ]
    },
    {
     "word": "strike",
     "clues": [
      "attack"
     ]
    },
    {
     "word": "strike",
     "clues": [
      "rap",
      " tap",
      " gentle blow"
     ]
    },
    {
     "word": "string",
     "clues": [
      "twine",
      " lightweight cord"
     ]
    },
    {
     "word": "comi",
     "clues": [
      "strip]"
     ]
    },
    {
     "word": "strip",
     "clues": [
      "long narrow piece"
     ]
    },
    {
     "word": "stroke",
     "clues": [
      "apoplexy",
      " cerebrovascular accident"
     ]
    },
    {
     "word": "structure",
     "clues": [
      "construction"
     ]
    },
    {
     "word": "struggle",
     "clues": [
      "strenuous effort"
     ]
    },
    {
     "word": "student",
     "clues": [
      "pupil",
      " learner"
     ]
    },
    {
     "word": "studio",
     "clues": [
      "workplace for teaching or practice of an art"
     ]
    },
    {
     "word": "study",
     "clues": [
      "room used for reading and writing and studying"
     ]
    },
    {
     "word": "study",
     "clues": [
      "discipline",
      " subject",
      " subject area"
     ]
    },
    {
     "word": "study",
     "clues": [
      "report",
      " written report"
     ]
    },
    {
     "word": "style",
     "clues": [
      "dash",
      " elan",
      " flair",
      " panache"
     ]
    },
    {
     "word": "style",
     "clues": [
      "editorial directions"
     ]
    },
    {
     "word": "subject",
     "clues": [
      "depicted object"
     ]
    },
    {
     "word": "subject",
     "clues": [
      "topic",
      " theme"
     ]
    },
    {
     "word": "subject",
     "clues": [
      "guinea pig"
     ]
    },
    {
     "word": "substance",
     "clues": [
      "stuff"
     ]
    },
    {
     "word": "suburb",
     "clues": [
      "suburbia",
      " suburban area"
     ]
    },
    {
     "word": "suffering",
     "clues": [
      "hurt",
      " mental or physical pain"
     ]
    },
    {
     "word": "sugar",
     "clues": [
      "refined sugar"
     ]
    },
    {
     "word": "suggestion",
     "clues": [
      "proposition"
     ]
    },
    {
     "word": "suit",
     "clues": [
      "suit of clothes"
     ]
    },
    {
     "word": "courtship",
     "clues": [
      "wooing",
      " courting",
      " suit"
     ]
    },
    {
     "word": "suite",
     "clues": [
      "rooms"
     ]
    },
    {
     "word": "sulphur",
     "clues": [
      "sulfur",
      " S"
     ]
    },
    {
     "word": "sum",
     "clues": [
      "sum total"
     ]
    },
    {
     "word": "summary",
     "clues": [
      "brief statement"
     ]
    },
    {
     "word": "summer",
     "clues": [
      "summertime"
     ]
    },
    {
     "word": "summit",
     "clues": [
      "summit meeting"
     ]
    },
    {
     "word": "sun",
     "clues": [
      "star that is the source of light and heat"
     ]
    },
    {
     "word": "sun",
     "clues": [
      "sunlight",
      " sunshine"
     ]
    },
    {
     "word": "Sunday",
     "clues": [
      "Lord's Day"
     ]
    },
    {
     "word": "sunrise",
     "clues": [
      "daily morning event"
     ]
    },
    {
     "word": "sunshine",
     "clues": [
      "fair weather"
     ]
    },
    {
     "word": "superintendent",
     "clues": [
      "super"
     ]
    },
    {
     "word": "supply",
     "clues": [
      "amount of something available for use"
     ]
    },
    {
     "word": "support",
     "clues": [
      "aiding the cause or policy or interests of"
     ]
    },
    {
     "word": "support",
     "clues": [
      "documentation",
      " documentary validation"
     ]
    },
    {
     "word": "support",
     "clues": [
      "device that bears the weight of another thing"
     ]
    },
    {
     "word": "support",
     "clues": [
      "keep",
      " livelihood",
      " living",
      " bread and butter",
      " sustenance"
     ]
    },
    {
     "word": "surface",
     "clues": [
      "extended two-dimensional outer boundary"
     ]
    },
    {
     "word": "surgeon",
     "clues": [
      "operating surgeon"
     ]
    },
    {
     "word": "surprise",
     "clues": [
      "unexpected event"
     ]
    },
    {
     "word": "survey",
     "clues": [
      "sketch",
      " resume"
     ]
    },
    {
     "word": "survival",
     "clues": [
      "endurance"
     ]
    },
    {
     "word": "survivor",
     "clues": [
      "one who outlives another"
     ]
    },
    {
     "word": "survivor",
     "clues": [
      "survivor of a disaster"
     ]
    },
    {
     "word": "suspect",
     "clues": [
      "someone under suspicion"
     ]
    },
    {
     "word": "suspicion",
     "clues": [
      "misgiving",
      " mistrust",
      " distrust"
     ]
    },
    {
     "word": "suspicion",
     "clues": [
      "intuition",
      " hunch"
     ]
    },
    {
     "word": "sweat",
     "clues": [
      "perspiration"
     ]
    },
    {
     "word": "sweater",
     "clues": [
      "knitted garment"
     ]
    },
    {
     "word": "sweet",
     "clues": [
      "dessert"
     ]
    },
    {
     "word": "swing",
     "clues": [
      "rapid fluctuation",
      " vacillation"
     ]
    },
    {
     "word": "swing",
     "clues": [
      "plaything"
     ]
    },
    {
     "word": "switch",
     "clues": [
      "electric switch"
     ]
    },
    {
     "word": "sword",
     "clues": [
      "blade",
      " weapon"
     ]
    },
    {
     "word": "symbol",
     "clues": [
      "sign"
     ]
    },
    {
     "word": "symptom",
     "clues": [
      "medical symptom"
     ]
    },
    {
     "word": "syndrome",
     "clues": [
      "pattern of symptoms"
     ]
    },
    {
     "word": "system",
     "clues": [
      "scheme"
     ]
    },
    {
     "word": "table",
     "clues": [
      "piece of furniture"
     ]
    },
    {
     "word": "table",
     "clues": [
      "tabular array",
      " data arranged in rows and columns"
     ]
    },
    {
     "word": "tablet",
     "clues": [
      "pill",
      " lozenge",
      " medicine"
     ]
    },
    {
     "word": "tactic",
     "clues": [
      "tactics",
      " maneuver"
     ]
    },
    {
     "word": "tail",
     "clues": [
      "posterior part of the body of a vertebrate"
     ]
    },
    {
     "word": "tail",
     "clues": [
      "side of a coin"
     ]
    },
    {
     "word": "talk",
     "clues": [
      "talking"
     ]
    },
    {
     "word": "talk",
     "clues": [
      "lecture",
      " public lecture"
     ]
    },
    {
     "word": "tank",
     "clues": [
      "army tank",
      " armored combat vehicle"
     ]
    },
    {
     "word": "tap",
     "clues": [
      "wiretap",
      " telephone tap"
     ]
    },
    {
     "word": "tap",
     "clues": [
      "water faucet",
      " spigot"
     ]
    },
    {
     "word": "tape",
     "clues": [
      "adhesive tape"
     ]
    },
    {
     "word": "tape",
     "clues": [
      "tape recording"
     ]
    },
    {
     "word": "tape",
     "clues": [
      "tape measure"
     ]
    },
    {
     "word": "target",
     "clues": [
      "mark"
     ]
    },
    {
     "word": "taste",
     "clues": [
      "gustation",
      " sense of taste"
     ]
    },
    {
     "word": "taste",
     "clues": [
      "preference",
      " penchant",
      " predilection"
     ]
    },
    {
     "word": "tax",
     "clues": [
      "taxation",
      " revenue enhancement"
     ]
    },
    {
     "word": "taxi",
     "clues": [
      "cab",
      " hack",
      " taxicab"
     ]
    },
    {
     "word": "tea",
     "clues": [
      "beverage"
     ]
    },
    {
     "word": "teacher",
     "clues": [
      "instructor"
     ]
    },
    {
     "word": "team",
     "clues": [
      "squad",
      " cooperative unit"
     ]
    },
    {
     "word": "tear",
     "clues": [
      "teardrop"
     ]
    },
    {
     "word": "technique",
     "clues": [
      "proficiency"
     ]
    },
    {
     "word": "technology",
     "clues": [
      "engineering"
     ]
    },
    {
     "word": "teenager",
     "clues": [
      "adolescent"
     ]
    },
    {
     "word": "telephone",
     "clues": [
      "phone",
      " telephone set"
     ]
    },
    {
     "word": "television",
     "clues": [
      "television system",
      " telecommunication system"
     ]
    },
    {
     "word": "television",
     "clues": [
      "television receiver",
      " T.V. set"
     ]
    },
    {
     "word": "temperature",
     "clues": [
      "degree of hotness or coldness"
     ]
    },
    {
     "word": "temple",
     "clues": [
      "place of worship"
     ]
    },
    {
     "word": "temple",
     "clues": [
      "side of the forehead"
     ]
    },
    {
     "word": "temptation",
     "clues": [
      "enticement"
     ]
    },
    {
     "word": "tenant",
     "clues": [
      "renter"
     ]
    },
    {
     "word": "tendency",
     "clues": [
      "inclination",
      " disposition"
     ]
    },
    {
     "word": "tension",
     "clues": [
      "latent hostility"
     ]
    },
    {
     "word": "tension",
     "clues": [
      "tautness"
     ]
    },
    {
     "word": "tent",
     "clues": [
      "collapsible shelter"
     ]
    },
    {
     "word": "term",
     "clues": [
      "word or expression"
     ]
    },
    {
     "word": "terminal",
     "clues": [
      "keyboard and monitor"
     ]
    },
    {
     "word": "terrace",
     "clues": [
      "patio"
     ]
    },
    {
     "word": "test",
     "clues": [
      "trial",
      " trial run",
      " tryout"
     ]
    },
    {
     "word": "test",
     "clues": [
      "examination",
      " exam"
     ]
    },
    {
     "word": "text",
     "clues": [
      "textual matter"
     ]
    },
    {
     "word": "text",
     "clues": [
      "textbook",
      " text edition",
      " schoolbook"
     ]
    },
    {
     "word": "texture",
     "clues": [
      "appearance of a surface or fabric"
     ]
    },
    {
     "word": "thanks",
     "clues": [
      "acknowledgment of appreciation"
     ]
    },
    {
     "word": "theater",
     "clues": [
      "dramaturgy",
      " dramatic art",
      " dramatics",
      " theatre"
     ]
    },
    {
     "word": "theft",
     "clues": [
      "larceny",
      " thievery",
      " stealing"
     ]
    },
    {
     "word": "theme",
     "clues": [
      "motif"
     ]
    },
    {
     "word": "theme",
     "clues": [
      "melodic theme",
      " musical theme"
     ]
    },
    {
     "word": "theorist",
     "clues": [
      "theoretician",
      " theorizer"
     ]
    },
    {
     "word": "theory",
     "clues": [
      "hypothesis"
     ]
    },
    {
     "word": "therapist",
     "clues": [
      "healer"
     ]
    },
    {
     "word": "thesis",
     "clues": [
      "dissertation"
     ]
    },
    {
     "word": "thigh",
     "clues": [
      "part of the leg"
     ]
    },
    {
     "word": "thinker",
     "clues": [
      "creative thinker",
      " mind",
      " important intellectual"
     ]
    },
    {
     "word": "thought",
     "clues": [
      "thinking",
      " cerebration"
     ]
    },
    {
     "word": "thread",
     "clues": [
      "thin yarn",
      " fine cord of twisted fibers"
     ]
    },
    {
     "word": "threat",
     "clues": [
      "menace",
      " source of danger"
     ]
    },
    {
     "word": "threshold",
     "clues": [
      "doorsill",
      " doorstep"
     ]
    },
    {
     "word": "brink",
     "clues": [
      "threshold",
      " verge"
     ]
    },
    {
     "word": "throat",
     "clues": [
      "pharynx",
      " passage to the stomach and lungs"
     ]
    },
    {
     "word": "throne",
     "clues": [
      "chair of a monarch"
     ]
    },
    {
     "word": "thumb",
     "clues": [
      "finger"
     ]
    },
    {
     "word": "ticket",
     "clues": [
      "traffic ticket",
      " summons"
     ]
    },
    {
     "word": "ticket",
     "clues": [
      "entry or access ticket"
     ]
    },
    {
     "word": "tie",
     "clues": [
      "necktie"
     ]
    },
    {
     "word": "tie",
     "clues": [
      "draw",
      " standoff"
     ]
    },
    {
     "word": "tiger",
     "clues": [
      "large feline"
     ]
    },
    {
     "word": "tile",
     "clues": [
      "flat thin slab"
     ]
    },
    {
     "word": "timber",
     "clues": [
      "lumber"
     ]
    },
    {
     "word": "time",
     "clues": [
      "clock time"
     ]
    },
    {
     "word": "timetable",
     "clues": [
      "arrival and departure schedule"
     ]
    },
    {
     "word": "can",
     "clues": [
      "tin can"
     ]
    },
    {
     "word": "tin",
     "clues": [
      "atomic number 50",
      " silvery metal"
     ]
    },
    {
     "word": "tip",
     "clues": [
      "lead",
      " confidential information"
     ]
    },
    {
     "word": "tip",
     "clues": [
      "point",
      " extreme end"
     ]
    },
    {
     "word": "tip",
     "clues": [
      "gratuity"
     ]
    },
    {
     "word": "tissue",
     "clues": [
      "aggregate of cells"
     ]
    },
    {
     "word": "tissue",
     "clues": [
      "tissue paper"
     ]
    },
    {
     "word": "title",
     "clues": [
      "claim"
     ]
    },
    {
     "word": "title",
     "clues": [
      "heading"
     ]
    },
    {
     "word": "title",
     "clues": [
      "title of respect"
     ]
    },
    {
     "word": "title",
     "clues": [
      "deed",
      " deed of conveyance",
      " legal document"
     ]
    },
    {
     "word": "title",
     "clues": [
      "championship"
     ]
    },
    {
     "word": "toast",
     "clues": [
      "bread"
     ]
    },
    {
     "word": "toll",
     "clues": [
      "fee for the use of roads or bridges"
     ]
    },
    {
     "word": "ton",
     "clues": [
      "unit of weight"
     ]
    },
    {
     "word": "tone",
     "clues": [
      "tone of voice"
     ]
    },
    {
     "word": "tongue",
     "clues": [
      "body part"
     ]
    },
    {
     "word": "tongue",
     "clues": [
      "natural language"
     ]
    },
    {
     "word": "tool",
     "clues": [
      "implement"
     ]
    },
    {
     "word": "tooth",
     "clues": [
      "projection on a gear"
     ]
    },
    {
     "word": "tooth",
     "clues": [
      "bonelike structure in the jaws"
     ]
    },
    {
     "word": "top",
     "clues": [
      "garment that extends from the shoulders to the waist or hips"
     ]
    },
    {
     "word": "top",
     "clues": [
      "spinning top"
     ]
    },
    {
     "word": "top",
     "clues": [
      "top side",
      " upper side",
      " upside"
     ]
    },
    {
     "word": "top",
     "clues": [
      "peak",
      " crown",
      " crest",
      " tip",
      " summit"
     ]
    },
    {
     "word": "torch",
     "clues": [
      "lit stick carried in one's hand"
     ]
    },
    {
     "word": "torture",
     "clues": [
      "torturing"
     ]
    },
    {
     "word": "touch",
     "clues": [
      "sense of touch"
     ]
    },
    {
     "word": "tourist",
     "clues": [
      "visitor on holiday"
     ]
    },
    {
     "word": "tournament",
     "clues": [
      "tourney",
      " sporting competition"
     ]
    },
    {
     "word": "tower",
     "clues": [
      "structure"
     ]
    },
    {
     "word": "toy",
     "clues": [
      "plaything"
     ]
    },
    {
     "word": "trace",
     "clues": [
      "footprint"
     ]
    },
    {
     "word": "track",
     "clues": [
      "data track",
      " circular magnetic path on a disk"
     ]
    },
    {
     "word": "track",
     "clues": [
      "racetrack",
      " racecourse",
      " raceway"
     ]
    },
    {
     "word": "track",
     "clues": [
      "lead",
      " trail",
      " evidence"
     ]
    },
    {
     "word": "tract",
     "clues": [
      "pamphlet"
     ]
    },
    {
     "word": "trade",
     "clues": [
      "craft",
      " skilled practice of a practical occupation"
     ]
    },
    {
     "word": "trade",
     "clues": [
      "deal",
      " business deal",
      " instance of buying or selling"
     ]
    },
    {
     "word": "trade",
     "clues": [
      "barter",
      " swap",
      " swop"
     ]
    },
    {
     "word": "tradition",
     "clues": [
      "custom",
      " practice of long standing"
     ]
    },
    {
     "word": "traffic",
     "clues": [
      "buying and selling"
     ]
    },
    {
     "word": "traffic",
     "clues": [
      "pedestrians or vehicles"
     ]
    },
    {
     "word": "tragedy",
     "clues": [
      "theatrical drama"
     ]
    },
    {
     "word": "train",
     "clues": [
      "railroad train"
     ]
    },
    {
     "word": "trainer",
     "clues": [
      "one who trains persons or animals"
     ]
    },
    {
     "word": "training",
     "clues": [
      "preparation",
      " grooming"
     ]
    },
    {
     "word": "trait",
     "clues": [
      "distinguishing feature of your personal nature"
     ]
    },
    {
     "word": "transaction",
     "clues": [
      "commercial dealing"
     ]
    },
    {
     "word": "transfer",
     "clues": [
      "transportation",
      " transferral",
      " conveyance"
     ]
    },
    {
     "word": "transition",
     "clues": [
      "conversion",
      " changeover"
     ]
    },
    {
     "word": "transmission",
     "clues": [
      "automobile transmission"
     ]
    },
    {
     "word": "transport",
     "clues": [
      "transportation",
      " shipping"
     ]
    },
    {
     "word": "ecstasy",
     "clues": [
      "rapture"
     ]
    },
    {
     "word": "trap",
     "clues": [
      "snare",
      " device for catching"
     ]
    },
    {
     "word": "tray",
     "clues": [
      "open receptacle"
     ]
    },
    {
     "word": "treasurer",
     "clues": [
      "financial officer"
     ]
    },
    {
     "word": "treat",
     "clues": [
      "special pleasurable occurrence"
     ]
    },
    {
     "word": "treatment",
     "clues": [
      "handling"
     ]
    },
    {
     "word": "treatment",
     "clues": [
      "discussion",
      " discourse"
     ]
    },
    {
     "word": "treaty",
     "clues": [
      "pact",
      " accord"
     ]
    },
    {
     "word": "tree",
     "clues": [
      "tall perennial woody plant"
     ]
    },
    {
     "word": "trench",
     "clues": [
      "ditch"
     ]
    },
    {
     "word": "trend",
     "clues": [
      "tendency"
     ]
    },
    {
     "word": "trial",
     "clues": [
      "legal proceedings"
     ]
    },
    {
     "word": "trial",
     "clues": [
      "tribulation"
     ]
    },
    {
     "word": "triangle",
     "clues": [
      "trilateral"
     ]
    },
    {
     "word": "tribe",
     "clues": [
      "clan"
     ]
    },
    {
     "word": "tribute",
     "clues": [
      "testimonial",
      " expression of esteem"
     ]
    },
    {
     "word": "trick",
     "clues": [
      "magic trick"
     ]
    },
    {
     "word": "trick",
     "clues": [
      "fast one"
     ]
    },
    {
     "word": "trolley",
     "clues": [
      "streetcar",
      " tram"
     ]
    },
    {
     "word": "troop",
     "clues": [
      "group of soldiers"
     ]
    },
    {
     "word": "trouble",
     "clues": [
      "event causing distress or pain"
     ]
    },
    {
     "word": "trouble",
     "clues": [
      "worry"
     ]
    },
    {
     "word": "trouser",
     "clues": [
      "pants"
     ]
    },
    {
     "word": "truck",
     "clues": [
      "motortruck",
      " lorry"
     ]
    },
    {
     "word": "trunk",
     "clues": [
      "luggage compartment",
      " automobile trunk"
     ]
    },
    {
     "word": "trust",
     "clues": [
      "corporate trust",
      " combine",
      " cartel"
     ]
    },
    {
     "word": "trust",
     "clues": [
      "confidence",
      " trustful relationship"
     ]
    },
    {
     "word": "trustee",
     "clues": [
      "legal guardian"
     ]
    },
    {
     "word": "truth",
     "clues": [
      "true statement"
     ]
    },
    {
     "word": "truth",
     "clues": [
      "verity",
      " trueness",
      " conformity to reality"
     ]
    },
    {
     "word": "subway",
     "clues": [
      "metro",
      " underground",
      " tube"
     ]
    },
    {
     "word": "tube",
     "clues": [
      "hollow cylinder"
     ]
    },
    {
     "word": "tumour",
     "clues": [
      "tumor",
      " neoplasm"
     ]
    },
    {
     "word": "tune",
     "clues": [
      "melody",
      " air",
      " strain",
      " melodic line"
     ]
    },
    {
     "word": "tunnel",
     "clues": [
      "passageway"
     ]
    },
    {
     "word": "turkey",
     "clues": [
      "bird domesticated for food"
     ]
    },
    {
     "word": "turn",
     "clues": [
      "bend",
      " crook",
      " circular segment of a curve"
     ]
    },
    {
     "word": "twin",
     "clues": [
      "offspring born at the same time"
     ]
    },
    {
     "word": "braid",
     "clues": [
      "plait",
      " tress",
      " hairdo"
     ]
    },
    {
     "word": "twist",
     "clues": [
      "wrench",
      " jerky pulling movement"
     ]
    },
    {
     "word": "tycoon",
     "clues": [
      "baron",
      " big businessman",
      " business leader",
      " king",
      " magnate",
      " mogul"
     ]
    },
    {
     "word": "tire",
     "clues": [
      "hoop covering a wheel"
     ]
    },
    {
     "word": "umbrella",
     "clues": [
      "handheld collapsible canopy"
     ]
    },
    {
     "word": "uncertainty",
     "clues": [
      "uncertainness",
      " precariousness"
     ]
    },
    {
     "word": "uncle",
     "clues": [
      "parent's brother"
     ]
    },
    {
     "word": "understanding",
     "clues": [
      "sympathy",
      " compassion"
     ]
    },
    {
     "word": "uniform",
     "clues": [
      "professional clothing"
     ]
    },
    {
     "word": "union",
     "clues": [
      "labor union",
      " trade union"
     ]
    },
    {
     "word": "marriage",
     "clues": [
      "union",
      " matrimony",
      " spousal relationship",
      " wedlock"
     ]
    },
    {
     "word": "unit",
     "clues": [
      "single undivided whole"
     ]
    },
    {
     "word": "unity",
     "clues": [
      "integrity",
      " wholeness"
     ]
    },
    {
     "word": "unrest",
     "clues": [
      "feeling of agitation"
     ]
    },
    {
     "word": "urge",
     "clues": [
      "strong restless desire"
     ]
    },
    {
     "word": "urgency",
     "clues": [
      "urgent situation calling for prompt action"
     ]
    },
    {
     "word": "urine",
     "clues": [
      "piss",
      " pee",
      " piddle",
      " weewee",
      " water"
     ]
    },
    {
     "word": "use",
     "clues": [
      "habit",
      " usage"
     ]
    },
    {
     "word": "use",
     "clues": [
      "function",
      " purpose",
      " role"
     ]
    },
    {
     "word": "use",
     "clues": [
      "consumption"
     ]
    },
    {
     "word": "user",
     "clues": [
      "drug user",
      " substance abuser"
     ]
    },
    {
     "word": "vacuum",
     "clues": [
      "vacuum cleaner"
     ]
    },
    {
     "word": "vacuum",
     "clues": [
      "void",
      " vacancy",
      " emptiness"
     ]
    },
    {
     "word": "valley",
     "clues": [
      "vale"
     ]
    },
    {
     "word": "value",
     "clues": [
      "numerical quantity measured or assigned or computed"
     ]
    },
    {
     "word": "value",
     "clues": [
      "ideal accepted by some individual or group"
     ]
    },
    {
     "word": "value",
     "clues": [
      "economic value",
      " amount of money or goods or services"
     ]
    },
    {
     "word": "van",
     "clues": [
      "vehicle"
     ]
    },
    {
     "word": "avant-garde",
     "clues": [
      "vanguard",
      " new wave"
     ]
    },
    {
     "word": "variable",
     "clues": [
      "variable quantity"
     ]
    },
    {
     "word": "variant",
     "clues": [
      "variation",
      " something a little different"
     ]
    },
    {
     "word": "variation",
     "clues": [
      "fluctuation"
     ]
    },
    {
     "word": "variety",
     "clues": [
      "diverseness",
      " diversity"
     ]
    },
    {
     "word": "vat",
     "clues": [
      "tub"
     ]
    },
    {
     "word": "vegetable",
     "clues": [
      "veggie",
      " greens"
     ]
    },
    {
     "word": "vegetarian",
     "clues": [
      "person who eats no meat"
     ]
    },
    {
     "word": "vegetation",
     "clues": [
      "flora",
      " botany"
     ]
    },
    {
     "word": "vehicle",
     "clues": [
      "conveyance"
     ]
    },
    {
     "word": "veil",
     "clues": [
      "head covering"
     ]
    },
    {
     "word": "vein",
     "clues": [
      "blood vessel"
     ]
    },
    {
     "word": "velvet",
     "clues": [
      "silky densely piled fabric"
     ]
    },
    {
     "word": "venture",
     "clues": [
      "risky commercial undertaking"
     ]
    },
    {
     "word": "Venus",
     "clues": [
      "planet evening star morning star"
     ]
    },
    {
     "word": "verdict",
     "clues": [
      "legal verdict"
     ]
    },
    {
     "word": "version",
     "clues": [
      "interpretation from a certain viewpoint"
     ]
    },
    {
     "word": "version",
     "clues": [
      "adaptation"
     ]
    },
    {
     "word": "vessel",
     "clues": [
      "watercraft"
     ]
    },
    {
     "word": "vessel",
     "clues": [
      "container"
     ]
    },
    {
     "word": "veteran",
     "clues": [
      "veteran soldier"
     ]
    },
    {
     "word": "victory",
     "clues": [
      "triumph"
     ]
    },
    {
     "word": "video",
     "clues": [
      "video recording"
     ]
    },
    {
     "word": "view",
     "clues": [
      "aspect",
      " prospect",
      " scene",
      " vista",
      " panorama"
     ]
    },
    {
     "word": "view",
     "clues": [
      "position",
      " perspective"
     ]
    },
    {
     "word": "view",
     "clues": [
      "opinion"
     ]
    },
    {
     "word": "village",
     "clues": [
      "small town",
      " settlement"
     ]
    },
    {
     "word": "violation",
     "clues": [
      "infringement"
     ]
    },
    {
     "word": "virgin",
     "clues": [
      "person who has never had sex"
     ]
    },
    {
     "word": "virtue",
     "clues": [
      "moral excellence"
     ]
    },
    {
     "word": "virus",
     "clues": [
      "infectious agent"
     ]
    },
    {
     "word": "compute",
     "clues": [
      "virus] virus"
     ]
    },
    {
     "word": "vision",
     "clues": [
      "vivid mental image"
     ]
    },
    {
     "word": "voice",
     "clues": [
      "ability to speak"
     ]
    },
    {
     "word": "spokesperson",
     "clues": [
      "interpreter",
      " representative"
     ]
    },
    {
     "word": "volcano",
     "clues": [
      "mountain"
     ]
    },
    {
     "word": "volume",
     "clues": [
      "loudness",
      " intensity"
     ]
    },
    {
     "word": "volume",
     "clues": [
      "publication"
     ]
    },
    {
     "word": "volume",
     "clues": [
      "3-dimensional space"
     ]
    },
    {
     "word": "volunteer",
     "clues": [
      "unpaid worker"
     ]
    },
    {
     "word": "vote",
     "clues": [
      "ballot",
      " voting",
      " balloting"
     ]
    },
    {
     "word": "vote",
     "clues": [
      "right to vote",
      " suffrage"
     ]
    },
    {
     "word": "voter",
     "clues": [
      "elector"
     ]
    },
    {
     "word": "voucher",
     "clues": [
      "coupon"
     ]
    },
    {
     "word": "voyage",
     "clues": [
      "journey to some distant place"
     ]
    },
    {
     "word": "wage",
     "clues": [
      "pay",
      " earnings",
      " remuneration",
      " salary"
     ]
    },
    {
     "word": "wagon",
     "clues": [
      "wheeled vehicle"
     ]
    },
    {
     "word": "waist",
     "clues": [
      "waistline"
     ]
    },
    {
     "word": "wake",
     "clues": [
      "viewing",
      " vigil over a corpse"
     ]
    },
    {
     "word": "wall",
     "clues": [
      "architectural partition"
     ]
    },
    {
     "word": "war",
     "clues": [
      "warfare",
      " armed conflict"
     ]
    },
    {
     "word": "ward",
     "clues": [
      "hospital ward"
     ]
    },
    {
     "word": "ward",
     "clues": [
      "town district"
     ]
    },
    {
     "word": "ward",
     "clues": [
      "person under protection or custody"
     ]
    },
    {
     "word": "wardrobe",
     "clues": [
      "collection of clothing"
     ]
    },
    {
     "word": "warning",
     "clues": [
      "admonition",
      " cautionary advice"
     ]
    },
    {
     "word": "warrant",
     "clues": [
      "court warrant"
     ]
    },
    {
     "word": "waste",
     "clues": [
      "thriftlessness",
      " wastefulness"
     ]
    },
    {
     "word": "waste",
     "clues": [
      "waste material",
      " waste matter",
      " waste product"
     ]
    },
    {
     "word": "watch",
     "clues": [
      "chronograph",
      " timepiece"
     ]
    },
    {
     "word": "watch",
     "clues": [
      "lookout",
      " sentinel",
      " sentry"
     ]
    },
    {
     "word": "water",
     "clues": [
      "H2O"
     ]
    },
    {
     "word": "waterfall",
     "clues": [
      "cascade"
     ]
    },
    {
     "word": "wave",
     "clues": [
      "ridge moving across the surface of a liquid"
     ]
    },
    {
     "word": "way",
     "clues": [
      "path",
      " way of life",
      " course of conduct"
     ]
    },
    {
     "word": "way",
     "clues": [
      "means",
      " agency"
     ]
    },
    {
     "word": "weakness",
     "clues": [
      "lack of strength"
     ]
    },
    {
     "word": "weakness",
     "clues": [
      "failing",
      " flaw",
      " weak point"
     ]
    },
    {
     "word": "wealth",
     "clues": [
      "riches"
     ]
    },
    {
     "word": "weapon",
     "clues": [
      "arm"
     ]
    },
    {
     "word": "weather",
     "clues": [
      "weather condition"
     ]
    },
    {
     "word": "wedding",
     "clues": [
      "wedding ceremony",
      " nuptials"
     ]
    },
    {
     "word": "weed",
     "clues": [
      "plant that crowds out cultivated plants"
     ]
    },
    {
     "word": "week",
     "clues": [
      "calendar week"
     ]
    },
    {
     "word": "weight",
     "clues": [
      "free weight",
      " exercising weight",
      " barbell"
     ]
    },
    {
     "word": "weight",
     "clues": [
      "vertical force exerted by a mass"
     ]
    },
    {
     "word": "weight",
     "clues": [
      "weight unit",
      " unit used to measure weight"
     ]
    },
    {
     "word": "welcome",
     "clues": [
      "greeting",
      " reception"
     ]
    },
    {
     "word": "welfare",
     "clues": [
      "social welfare",
      " government-sponsored program"
     ]
    },
    {
     "word": "welfare",
     "clues": [
      "wellbeing"
     ]
    },
    {
     "word": "well",
     "clues": [
      "deep hole with water",
      " oil",
      " or gas"
     ]
    },
    {
     "word": "west",
     "clues": [
      "West",
      " Occident"
     ]
    },
    {
     "word": "west",
     "clues": [
      "due west",
      " W"
     ]
    },
    {
     "word": "whale",
     "clues": [
      "marine mammal"
     ]
    },
    {
     "word": "wheat",
     "clues": [
      "cereal"
     ]
    },
    {
     "word": "wheel",
     "clues": [
      "frame with spokes"
     ]
    },
    {
     "word": "bike",
     "clues": [
      "bicycle",
      " bike",
      " cycle",
      " wheel"
     ]
    },
    {
     "word": "whip",
     "clues": [
      "lash used for whipping"
     ]
    },
    {
     "word": "eg",
     "clues": [
      "white] albumen"
     ]
    },
    {
     "word": "width",
     "clues": [
      "breadth"
     ]
    },
    {
     "word": "wife",
     "clues": [
      "married woman",
      " spouse"
     ]
    },
    {
     "word": "wilderness",
     "clues": [
      "wild",
      " uninhabited area"
     ]
    },
    {
     "word": "will",
     "clues": [
      "volition"
     ]
    },
    {
     "word": "will",
     "clues": [
      "testament"
     ]
    },
    {
     "word": "willpower",
     "clues": [
      "self-control"
     ]
    },
    {
     "word": "win",
     "clues": [
      "winnings",
      " profits"
     ]
    },
    {
     "word": "wind",
     "clues": [
      "air current",
      " current of air"
     ]
    },
    {
     "word": "window",
     "clues": [
      "opening in the wall of a building"
     ]
    },
    {
     "word": "wine",
     "clues": [
      "beverage made from fermented grapes"
     ]
    },
    {
     "word": "wing",
     "clues": [
      "biological organ for flying"
     ]
    },
    {
     "word": "wing",
     "clues": [
      "airplane wing"
     ]
    },
    {
     "word": "winner",
     "clues": [
      "victor"
     ]
    },
    {
     "word": "winter",
     "clues": [
      "wintertime"
     ]
    },
    {
     "word": "wire",
     "clues": [
      "metal ligament"
     ]
    },
    {
     "word": "witch",
     "clues": [
      "enchantress",
      " sorceress"
     ]
    },
    {
     "word": "withdrawal",
     "clues": [
      "backdown",
      " retraction"
     ]
    },
    {
     "word": "withdrawal",
     "clues": [
      "detachment",
      " avoidance of emotional involvement"
     ]
    },
    {
     "word": "witness",
     "clues": [
      "spectator",
      " viewer",
      " watcher",
      " looker"
     ]
    },
    {
     "word": "witness",
     "clues": [
      "person who testifies in court"
     ]
    },
    {
     "word": "wolf",
     "clues": [
      "canine mammal"
     ]
    },
    {
     "word": "woman",
     "clues": [
      "adult female"
     ]
    },
    {
     "word": "wonder",
     "clues": [
      "marvel"
     ]
    },
    {
     "word": "wood",
     "clues": [
      "hard substance under the bark of trees"
     ]
    },
    {
     "word": "wool",
     "clues": [
      "fabric"
     ]
    },
    {
     "word": "word",
     "clues": [
      "unit of language"
     ]
    },
    {
     "word": "word",
     "clues": [
      "parole",
      " word of honor"
     ]
    },
    {
     "word": "wording",
     "clues": [
      "phrasing",
      " choice of words"
     ]
    },
    {
     "word": "work",
     "clues": [
      "employment"
     ]
    },
    {
     "word": "work",
     "clues": [
      "workplace"
     ]
    },
    {
     "word": "work",
     "clues": [
      "oeuvre",
      " body of work"
     ]
    },
    {
     "word": "worker",
     "clues": [
      "person who works at a specific occupation"
     ]
    },
    {
     "word": "workshop",
     "clues": [
      "brief intensive course"
     ]
    },
    {
     "word": "world",
     "clues": [
      "reality"
     ]
    },
    {
     "word": "world",
     "clues": [
      "populace",
      " public"
     ]
    },
    {
     "word": "world",
     "clues": [
      "Earth",
      " globe"
     ]
    },
    {
     "word": "world",
     "clues": [
      "universe",
      " existence",
      " cosmos",
      " macrocosm"
     ]
    },
    {
     "word": "worm",
     "clues": [
      "animal"
     ]
    },
    {
     "word": "worm",
     "clues": [
      "software program"
     ]
    },
    {
     "word": "worth",
     "clues": [
      "value"
     ]
    },
    {
     "word": "wound",
     "clues": [
      "lesion"
     ]
    },
    {
     "word": "wreck",
     "clues": [
      "something dilapidated"
     ]
    },
    {
     "word": "wrist",
     "clues": [
      "carpus",
      " wrist joint"
     ]
    },
    {
     "word": "writer",
     "clues": [
      "author"
     ]
    },
    {
     "word": "X-ray",
     "clues": [
      "radiogram",
      " X-ray picture"
     ]
    },
    {
     "word": "yard",
     "clues": [
      "grounds"
     ]
    },
    {
     "word": "yard",
     "clues": [
      "3 feet"
     ]
    },
    {
     "word": "year",
     "clues": [
      "twelvemonth",
      " yr"
     ]
    },
    {
     "word": "youth",
     "clues": [
      "young people"
     ]
    },
    {
     "word": "youth",
     "clues": [
      "time of life between childhood and maturity"
     ]
    },
    {
     "word": "zero",
     "clues": [
      "0",
      " naught"
     ]
    },
    {
     "word": "zone",
     "clues": [
      "geographical region"
     ]
    },
    {
     "word": "abandon",
     "clues": [
      "forsake",
      " desert"
     ]
    },
    {
     "word": "abolish",
     "clues": [
      "get rid of"
     ]
    },
    {
     "word": "abridge",
     "clues": [
      "shorten",
      " cut"
     ]
    },
    {
     "word": "absorb",
     "clues": [
      "take in",
      " suck up"
     ]
    },
    {
     "word": "accept",
     "clues": [
      "live with",
      " put up with"
     ]
    },
    {
     "word": "accompany",
     "clues": [
      "go or come with"
     ]
    },
    {
     "word": "activate",
     "clues": [
      "make active"
     ]
    },
    {
     "word": "add",
     "clues": [
      "total"
     ]
    },
    {
     "word": "adjust",
     "clues": [
      "conform",
      " adapt"
     ]
    },
    {
     "word": "admire",
     "clues": [
      "look up to"
     ]
    },
    {
     "word": "admit",
     "clues": [
      "acknowledge"
     ]
    },
    {
     "word": "admit",
     "clues": [
      "allow in",
      " let in",
      " allow to enter"
     ]
    },
    {
     "word": "adopt",
     "clues": [
      "take in as a child"
     ]
    },
    {
     "word": "adopt",
     "clues": [
      "borrow",
      " take over",
      " take up"
     ]
    },
    {
     "word": "advance",
     "clues": [
      "progress",
      " pass on",
      " move on",
      " march on",
      " go on"
     ]
    },
    {
     "word": "affect",
     "clues": [
      "impact",
      " bear upon"
     ]
    },
    {
     "word": "feign",
     "clues": [
      "sham",
      " pretend",
      " dissemble",
      " simulate"
     ]
    },
    {
     "word": "afford",
     "clues": [
      "have the financial means"
     ]
    },
    {
     "word": "age",
     "clues": [
      "get older"
     ]
    },
    {
     "word": "agree",
     "clues": [
      "consent",
      " assent"
     ]
    },
    {
     "word": "match",
     "clues": [
      "fit",
      " correspond",
      " check",
      " agree"
     ]
    },
    {
     "word": "allow",
     "clues": [
      "permit",
      " let"
     ]
    },
    {
     "word": "amputate",
     "clues": [
      "cut off",
      " remove surgically"
     ]
    },
    {
     "word": "amuse",
     "clues": [
      "make laugh"
     ]
    },
    {
     "word": "answer",
     "clues": [
      "reply",
      " respond"
     ]
    },
    {
     "word": "appeal",
     "clues": [
      "challenge a decision"
     ]
    },
    {
     "word": "appear",
     "clues": [
      "come into view"
     ]
    },
    {
     "word": "applaud",
     "clues": [
      "clap one's hands"
     ]
    },
    {
     "word": "appoint",
     "clues": [
      "name",
      " nominate"
     ]
    },
    {
     "word": "appreciate",
     "clues": [
      "recognize with gratitude"
     ]
    },
    {
     "word": "approach",
     "clues": [
      "near",
      " draw near",
      " draw close",
      " come near"
     ]
    },
    {
     "word": "approve",
     "clues": [
      "O.K.",
      " okay",
      " sanction"
     ]
    },
    {
     "word": "arrange",
     "clues": [
      "set up",
      " order"
     ]
    },
    {
     "word": "arrange",
     "clues": [
      "set up",
      " put in systematic order"
     ]
    },
    {
     "word": "arrest",
     "clues": [
      "apprehend",
      " pick up",
      " take into custody"
     ]
    },
    {
     "word": "articulate",
     "clues": [
      "enunciate"
     ]
    },
    {
     "word": "ask",
     "clues": [
      "inquire"
     ]
    },
    {
     "word": "expect",
     "clues": [
      "require",
      " ask"
     ]
    },
    {
     "word": "assume",
     "clues": [
      "presume",
      " take for granted",
      " take to be the case"
     ]
    },
    {
     "word": "impound",
     "clues": [
      "confiscate",
      " seize"
     ]
    },
    {
     "word": "attack",
     "clues": [
      "assail",
      " assault",
      " attack physically or emotionally"
     ]
    },
    {
     "word": "attract",
     "clues": [
      "appeal",
      " be attractive to"
     ]
    },
    {
     "word": "authorise",
     "clues": [
      "empower"
     ]
    },
    {
     "word": "endorse",
     "clues": [
      "second",
      " back",
      " support"
     ]
    },
    {
     "word": "bake",
     "clues": [
      "prepare with dry heat"
     ]
    },
    {
     "word": "balance",
     "clues": [
      "equilibrate",
      " bring into balance or equilibrium"
     ]
    },
    {
     "word": "ostracize",
     "clues": [
      "shun",
      " blackball",
      " expel from a community"
     ]
    },
    {
     "word": "banish",
     "clues": [
      "bar",
      " relegate",
      " expel"
     ]
    },
    {
     "word": "bargain",
     "clues": [
      "negotiate",
      " dicker"
     ]
    },
    {
     "word": "bark",
     "clues": [
      "make barking sounds"
     ]
    },
    {
     "word": "carry",
     "clues": [
      "bear"
     ]
    },
    {
     "word": "beat",
     "clues": [
      "vanquish",
      " come out better in a competition or race"
     ]
    },
    {
     "word": "beat",
     "clues": [
      "hit repeatedly"
     ]
    },
    {
     "word": "scramble",
     "clues": [
      "beat",
      " stir vigorously"
     ]
    },
    {
     "word": "beat",
     "clues": [
      "pound",
      " thump",
      " move rhythmically"
     ]
    },
    {
     "word": "beat",
     "clues": [
      "be superior to"
     ]
    },
    {
     "word": "beg",
     "clues": [
      "ask for money or goods"
     ]
    },
    {
     "word": "begin",
     "clues": [
      "start",
      " commence",
      " cause to start"
     ]
    },
    {
     "word": "behave",
     "clues": [
      "comport",
      " act in a certain manner"
     ]
    },
    {
     "word": "behead",
     "clues": [
      "decapitate",
      " cut the head off"
     ]
    },
    {
     "word": "belong",
     "clues": [
      "be owned by"
     ]
    },
    {
     "word": "flex",
     "clues": [
      "bend"
     ]
    },
    {
     "word": "bend",
     "clues": [
      "crouch",
      " stoop",
      " bow"
     ]
    },
    {
     "word": "bet",
     "clues": [
      "wager"
     ]
    },
    {
     "word": "betray",
     "clues": [
      "deceive"
     ]
    },
    {
     "word": "bind",
     "clues": [
      "tie or secure with a rope or cable"
     ]
    },
    {
     "word": "bond",
     "clues": [
      "create social or emotional ties"
     ]
    },
    {
     "word": "bite",
     "clues": [
      "seize with teeth"
     ]
    },
    {
     "word": "blame",
     "clues": [
      "fault put the blame on"
     ]
    },
    {
     "word": "blame",
     "clues": [
      "find fault",
      " pick on"
     ]
    },
    {
     "word": "blast",
     "clues": [
      "blare"
     ]
    },
    {
     "word": "bleed",
     "clues": [
      "shed blood"
     ]
    },
    {
     "word": "bless",
     "clues": [
      "give a benediction to"
     ]
    },
    {
     "word": "block",
     "clues": [
      "obstruct",
      " hinder",
      " stymie"
     ]
    },
    {
     "word": "waste",
     "clues": [
      "squander",
      " blow",
      " throw away",
      " spend thoughtlessly"
     ]
    },
    {
     "word": "board",
     "clues": [
      "get on"
     ]
    },
    {
     "word": "bomb",
     "clues": [
      "bombard"
     ]
    },
    {
     "word": "borrow",
     "clues": [
      "obtain temporarily"
     ]
    },
    {
     "word": "bother",
     "clues": [
      "annoy",
      " irritate"
     ]
    },
    {
     "word": "bounce",
     "clues": [
      "move up and down repeatedly"
     ]
    },
    {
     "word": "bow",
     "clues": [
      "bend the head or the upper body in respect or greeting"
     ]
    },
    {
     "word": "brag",
     "clues": [
      "show off",
      " boast"
     ]
    },
    {
     "word": "break",
     "clues": [
      "destroy"
     ]
    },
    {
     "word": "disclose",
     "clues": [
      "bring out",
      " reveal",
      " expose",
      " divulge"
     ]
    },
    {
     "word": "pause",
     "clues": [
      "pause",
      " take a break"
     ]
    },
    {
     "word": "wea",
     "clues": [
      "out] bust",
      " fall apart",
      " break"
     ]
    },
    {
     "word": "brea",
     "clues": [
      "in] enter illegally"
     ]
    },
    {
     "word": "breathe",
     "clues": [
      "take a breath",
      " respire"
     ]
    },
    {
     "word": "breed",
     "clues": [
      "raise",
      " cause to reproduce"
     ]
    },
    {
     "word": "bring",
     "clues": [
      "bring along"
     ]
    },
    {
     "word": "bring",
     "clues": [
      "fetch",
      " bring in",
      " be sold for a certain price"
     ]
    },
    {
     "word": "brush",
     "clues": [
      "rub with a brush"
     ]
    },
    {
     "word": "displace",
     "clues": [
      "bump"
     ]
    },
    {
     "word": "burn",
     "clues": [
      "bite",
      " sting",
      " cause a sharp or stinging pain"
     ]
    },
    {
     "word": "burn",
     "clues": [
      "combust",
      " cause to burn"
     ]
    },
    {
     "word": "burst",
     "clues": [
      "bust",
      " break open"
     ]
    },
    {
     "word": "bury",
     "clues": [
      "place in the ground as for hiding"
     ]
    },
    {
     "word": "buy",
     "clues": [
      "purchase",
      " acquire"
     ]
    },
    {
     "word": "call",
     "clues": [
      "telephone",
      " call up",
      " phone",
      " ring"
     ]
    },
    {
     "word": "call",
     "clues": [
      "name"
     ]
    },
    {
     "word": "call",
     "clues": [
      "send for"
     ]
    },
    {
     "word": "call",
     "clues": [
      "shout",
      " shout out",
      " cry",
      " yell",
      " holler"
     ]
    },
    {
     "word": "predict",
     "clues": [
      "call",
      " foretell",
      " prognosticate",
      " forebode"
     ]
    },
    {
     "word": "calm",
     "clues": [
      "calm down",
      " quiet",
      " tranquilize",
      " quieten"
     ]
    },
    {
     "word": "cancel",
     "clues": [
      "call off"
     ]
    },
    {
     "word": "captivate",
     "clues": [
      "beguile",
      " charm",
      " bewitch",
      " entrance",
      " enchant"
     ]
    },
    {
     "word": "capture",
     "clues": [
      "take possession of by force",
      " seize",
      " conquer"
     ]
    },
    {
     "word": "care",
     "clues": [
      "feel concern or interest"
     ]
    },
    {
     "word": "carry",
     "clues": [
      "transport"
     ]
    },
    {
     "word": "carve",
     "clues": [
      "cut up",
      " cut to pieces"
     ]
    },
    {
     "word": "hurl",
     "clues": [
      "cast",
      " hurtle",
      " throw forcefully"
     ]
    },
    {
     "word": "cast",
     "clues": [
      "select for a play or movie"
     ]
    },
    {
     "word": "catch",
     "clues": [
      "grab",
      " take hold of"
     ]
    },
    {
     "word": "capture",
     "clues": [
      "catch"
     ]
    },
    {
     "word": "cater",
     "clues": [
      "supply food ready to eat"
     ]
    },
    {
     "word": "challenge",
     "clues": [
      "dispute",
      " call into question"
     ]
    },
    {
     "word": "change",
     "clues": [
      "alter",
      " make or become different"
     ]
    },
    {
     "word": "switch",
     "clues": [
      "change",
      " shift",
      " change one thing for another"
     ]
    },
    {
     "word": "charge",
     "clues": [
      "energize a battery"
     ]
    },
    {
     "word": "charge",
     "clues": [
      "accuse"
     ]
    },
    {
     "word": "charge",
     "clues": [
      "pay with a credit card"
     ]
    },
    {
     "word": "charge",
     "clues": [
      "demand payment"
     ]
    },
    {
     "word": "chase",
     "clues": [
      "chase after",
      " give chase"
     ]
    },
    {
     "word": "check",
     "clues": [
      "check off",
      " mark",
      " mark off",
      " tick off",
      " tick"
     ]
    },
    {
     "word": "check",
     "clues": [
      "check out",
      " verify"
     ]
    },
    {
     "word": "chew",
     "clues": [
      "masticate"
     ]
    },
    {
     "word": "choke",
     "clues": [
      "gag",
      " suffocate"
     ]
    },
    {
     "word": "choke",
     "clues": [
      "strangle"
     ]
    },
    {
     "word": "chop",
     "clues": [
      "chop up"
     ]
    },
    {
     "word": "claim",
     "clues": [
      "assert",
      " affirm"
     ]
    },
    {
     "word": "clarify",
     "clues": [
      "clear up",
      " elucidate",
      " make comprehensible"
     ]
    },
    {
     "word": "classify",
     "clues": [
      "declare unavailable"
     ]
    },
    {
     "word": "clear",
     "clues": [
      "empty",
      " remove the occupants of"
     ]
    },
    {
     "word": "acquit",
     "clues": [
      "clear",
      " pronounce not guilty"
     ]
    },
    {
     "word": "climb",
     "clues": [
      "climb up",
      " mount",
      " go up"
     ]
    },
    {
     "word": "close",
     "clues": [
      "shut"
     ]
    },
    {
     "word": "close",
     "clues": [
      "finish",
      " terminate",
      " conclude",
      " end"
     ]
    },
    {
     "word": "coincide",
     "clues": [
      "concur",
      " happen simultaneously"
     ]
    },
    {
     "word": "collapse",
     "clues": [
      "crumble",
      " crumple",
      " tumble"
     ]
    },
    {
     "word": "collect",
     "clues": [
      "pick up"
     ]
    },
    {
     "word": "combine",
     "clues": [
      "blend",
      " mix",
      " conflate",
      " commingle",
      " fuse",
      " merge"
     ]
    },
    {
     "word": "comfort",
     "clues": [
      "soothe",
      " console"
     ]
    },
    {
     "word": "remunerate",
     "clues": [
      "compensate"
     ]
    },
    {
     "word": "compete",
     "clues": [
      "vie",
      " contend"
     ]
    },
    {
     "word": "complain",
     "clues": [
      "express discontent"
     ]
    },
    {
     "word": "compromise",
     "clues": [
      "make a compromise"
     ]
    },
    {
     "word": "concede",
     "clues": [
      "acknowledge defeat"
     ]
    },
    {
     "word": "conceive",
     "clues": [
      "become pregnant"
     ]
    },
    {
     "word": "concentrate",
     "clues": [
      "focus",
      " focus one's attention"
     ]
    },
    {
     "word": "confine",
     "clues": [
      "detain"
     ]
    },
    {
     "word": "confront",
     "clues": [
      "come face to face with"
     ]
    },
    {
     "word": "consider",
     "clues": [
      "debate",
      " think about"
     ]
    },
    {
     "word": "consolidate",
     "clues": [
      "unite into one"
     ]
    },
    {
     "word": "construct",
     "clues": [
      "manufacture",
      " fabricate"
     ]
    },
    {
     "word": "contain",
     "clues": [
      "incorporate",
      " comprise"
     ]
    },
    {
     "word": "control",
     "clues": [
      "operate",
      " handle"
     ]
    },
    {
     "word": "command",
     "clues": [
      "control"
     ]
    },
    {
     "word": "convert",
     "clues": [
      "change religious beliefs"
     ]
    },
    {
     "word": "convict",
     "clues": [
      "find guilty"
     ]
    },
    {
     "word": "convince",
     "clues": [
      "convert",
      " win over"
     ]
    },
    {
     "word": "falsify",
     "clues": [
      "manipulate",
      " fake",
      " fudge",
      " cook",
      " misrepresent"
     ]
    },
    {
     "word": "cooperate",
     "clues": [
      "collaborate",
      " join forces"
     ]
    },
    {
     "word": "cope",
     "clues": [
      "get by",
      " make do",
      " manage"
     ]
    },
    {
     "word": "copy",
     "clues": [
      "imitate",
      " simulate"
     ]
    },
    {
     "word": "copy",
     "clues": [
      "re-create",
      " replicate"
     ]
    },
    {
     "word": "correspond",
     "clues": [
      "exchange messages"
     ]
    },
    {
     "word": "count",
     "clues": [
      "number",
      " enumerate"
     ]
    },
    {
     "word": "treat",
     "clues": [
      "handle",
      " deal with",
      " address",
      " cover"
     ]
    },
    {
     "word": "cover",
     "clues": [
      "provide with a covering"
     ]
    },
    {
     "word": "crash",
     "clues": [
      "cease operating abruptly"
     ]
    },
    {
     "word": "smash",
     "clues": [
      "break apart"
     ]
    },
    {
     "word": "dash",
     "clues": [
      "smash",
      " hurl or thrust violently"
     ]
    },
    {
     "word": "crash",
     "clues": [
      "fall or come down violently"
     ]
    },
    {
     "word": "create",
     "clues": [
      "bring into existence"
     ]
    },
    {
     "word": "creep",
     "clues": [
      "crawl"
     ]
    },
    {
     "word": "cower",
     "clues": [
      "fawn",
      " cringe",
      " grovel",
      " show submission or fear"
     ]
    },
    {
     "word": "crop",
     "clues": [
      "cut short"
     ]
    },
    {
     "word": "graze",
     "clues": [
      "pasture"
     ]
    },
    {
     "word": "cross",
     "clues": [
      "traverse"
     ]
    },
    {
     "word": "crouch",
     "clues": [
      "squat"
     ]
    },
    {
     "word": "cry",
     "clues": [
      "weep"
     ]
    },
    {
     "word": "cultivate",
     "clues": [
      "domesticate",
      " naturalize",
      " naturalise",
      " tame"
     ]
    },
    {
     "word": "curl",
     "clues": [
      "coil",
      " loop"
     ]
    },
    {
     "word": "reduce",
     "clues": [
      "cut down",
      " cut back",
      " trim"
     ]
    },
    {
     "word": "cut",
     "clues": [
      "cleave"
     ]
    },
    {
     "word": "damn",
     "clues": [
      "curse"
     ]
    },
    {
     "word": "dance",
     "clues": [
      "move in a pattern to music"
     ]
    },
    {
     "word": "dare",
     "clues": [
      "be courageous enough to try or do something"
     ]
    },
    {
     "word": "debate",
     "clues": [
      "deliberate"
     ]
    },
    {
     "word": "debut",
     "clues": [
      "appear in public for the first time"
     ]
    },
    {
     "word": "decide",
     "clues": [
      "make up one's mind"
     ]
    },
    {
     "word": "determine",
     "clues": [
      "influence"
     ]
    },
    {
     "word": "decline",
     "clues": [
      "worsen"
     ]
    },
    {
     "word": "decrease",
     "clues": [
      "lessen",
      " make smaller or less"
     ]
    },
    {
     "word": "dedicate",
     "clues": [
      "inscribe or address by way of compliment"
     ]
    },
    {
     "word": "defend",
     "clues": [
      "represent in a court of law"
     ]
    },
    {
     "word": "define",
     "clues": [
      "give a definition for"
     ]
    },
    {
     "word": "delay",
     "clues": [
      "detain",
      " hold up"
     ]
    },
    {
     "word": "delay",
     "clues": [
      "act later than planned"
     ]
    },
    {
     "word": "delete",
     "clues": [
      "erase",
      " wipe out information"
     ]
    },
    {
     "word": "deliver",
     "clues": [
      "make a delivery",
      " bring"
     ]
    },
    {
     "word": "deport",
     "clues": [
      "extradite",
      " hand over to the authorities of another country"
     ]
    },
    {
     "word": "rescue",
     "clues": [
      "deliver",
      " free from harm"
     ]
    },
    {
     "word": "demand",
     "clues": [
      "request urgently and forcefully"
     ]
    },
    {
     "word": "demolish",
     "clues": [
      "destroy"
     ]
    },
    {
     "word": "demonstrate",
     "clues": [
      "march",
      " march in protest"
     ]
    },
    {
     "word": "deny",
     "clues": [
      "contradict",
      " declare untrue"
     ]
    },
    {
     "word": "deny",
     "clues": [
      "refuse to grant"
     ]
    },
    {
     "word": "digress",
     "clues": [
      "sidetrack"
     ]
    },
    {
     "word": "depend",
     "clues": [
      "be contingent upon"
     ]
    },
    {
     "word": "deprive",
     "clues": [
      "keep from having or obtaining"
     ]
    },
    {
     "word": "describe",
     "clues": [
      "depict"
     ]
    },
    {
     "word": "desert",
     "clues": [
      "defect"
     ]
    },
    {
     "word": "deserve",
     "clues": [
      "merit",
      " be worthy or deserving"
     ]
    },
    {
     "word": "despise",
     "clues": [
      "scorn",
      " disdain"
     ]
    },
    {
     "word": "deter",
     "clues": [
      "dissuade"
     ]
    },
    {
     "word": "deteriorate",
     "clues": [
      "become worse",
      " disintegrate"
     ]
    },
    {
     "word": "modernize",
     "clues": [
      "develop"
     ]
    },
    {
     "word": "train",
     "clues": [
      "prepare",
      " educate"
     ]
    },
    {
     "word": "develop",
     "clues": [
      "make something new",
      " invent"
     ]
    },
    {
     "word": "arise",
     "clues": [
      "originate",
      " develop",
      " come into existence"
     ]
    },
    {
     "word": "devote",
     "clues": [
      "dedicate",
      " commit to a specific cause or function"
     ]
    },
    {
     "word": "dictate",
     "clues": [
      "say out loud for the purpose of recording"
     ]
    },
    {
     "word": "brea",
     "clues": [
      "down] die",
      " conk out"
     ]
    },
    {
     "word": "die",
     "clues": [
      "suffer death"
     ]
    },
    {
     "word": "disagree",
     "clues": [
      "differ",
      " take issue"
     ]
    },
    {
     "word": "differ",
     "clues": [
      "be different"
     ]
    },
    {
     "word": "excavate",
     "clues": [
      "hollow",
      " hollow out"
     ]
    },
    {
     "word": "dilute",
     "clues": [
      "thin",
      " reduce",
      " cut"
     ]
    },
    {
     "word": "dine",
     "clues": [
      "have supper"
     ]
    },
    {
     "word": "dip",
     "clues": [
      "slope downwards"
     ]
    },
    {
     "word": "direct",
     "clues": [
      "point somebody into a certain direction"
     ]
    },
    {
     "word": "direct",
     "clues": [
      "guide actors"
     ]
    },
    {
     "word": "disappear",
     "clues": [
      "vanish"
     ]
    },
    {
     "word": "disappoint",
     "clues": [
      "let down"
     ]
    },
    {
     "word": "discourage",
     "clues": [
      "deter"
     ]
    },
    {
     "word": "discover",
     "clues": [
      "come upon",
      " chance upon",
      " come across"
     ]
    },
    {
     "word": "discuss",
     "clues": [
      "talk over"
     ]
    },
    {
     "word": "dismiss",
     "clues": [
      "fire",
      " give notice",
      " give the axe",
      " sack"
     ]
    },
    {
     "word": "display",
     "clues": [
      "expose",
      " exhibit"
     ]
    },
    {
     "word": "quarrel",
     "clues": [
      "dispute",
      " argue"
     ]
    },
    {
     "word": "thaw",
     "clues": [
      "unfreeze",
      " unthaw",
      " dethaw",
      " melt"
     ]
    },
    {
     "word": "distort",
     "clues": [
      "falsify"
     ]
    },
    {
     "word": "distribute",
     "clues": [
      "give out",
      " hand out"
     ]
    },
    {
     "word": "dive",
     "clues": [
      "plunge into water"
     ]
    },
    {
     "word": "divide",
     "clues": [
      "split",
      " split up",
      " separate"
     ]
    },
    {
     "word": "divorce",
     "clues": [
      "split up"
     ]
    },
    {
     "word": "document",
     "clues": [
      "record in detail"
     ]
    },
    {
     "word": "dominate",
     "clues": [
      "be in control"
     ]
    },
    {
     "word": "double",
     "clues": [
      "increase twofold",
      " duplicate"
     ]
    },
    {
     "word": "doubt",
     "clues": [
      "consider unlikely"
     ]
    },
    {
     "word": "drag",
     "clues": [
      "pull against a resistance"
     ]
    },
    {
     "word": "trail",
     "clues": [
      "be behind",
      " hang back",
      " drop behind"
     ]
    },
    {
     "word": "drain",
     "clues": [
      "empty of liquid"
     ]
    },
    {
     "word": "tie",
     "clues": [
      "tie",
      " finish a game with an equal number of points"
     ]
    },
    {
     "word": "pull",
     "clues": [
      "draw"
     ]
    },
    {
     "word": "draw",
     "clues": [
      "attract",
      " pull",
      " pull in",
      " draw in"
     ]
    },
    {
     "word": "draw",
     "clues": [
      "represent by making a drawing of"
     ]
    },
    {
     "word": "withdraw",
     "clues": [
      "take out",
      " draw off"
     ]
    },
    {
     "word": "dress",
     "clues": [
      "clothe"
     ]
    },
    {
     "word": "drink",
     "clues": [
      "imbibe",
      " take in liquids"
     ]
    },
    {
     "word": "drive",
     "clues": [
      "travel by vehicle"
     ]
    },
    {
     "word": "deteriorate",
     "clues": [
      "degenerate",
      " grow worse"
     ]
    },
    {
     "word": "dribble",
     "clues": [
      "drip"
     ]
    },
    {
     "word": "drop",
     "clues": [
      "let fall"
     ]
    },
    {
     "word": "drown",
     "clues": [
      "die in water"
     ]
    },
    {
     "word": "drug",
     "clues": [
      "dose",
      " medicate"
     ]
    },
    {
     "word": "dump",
     "clues": [
      "discard",
      " dispose",
      " toss out"
     ]
    },
    {
     "word": "ditch",
     "clues": [
      "dump",
      " unceremoniously sever all ties with"
     ]
    },
    {
     "word": "eat",
     "clues": [
      "take in solid food"
     ]
    },
    {
     "word": "eavesdrop",
     "clues": [
      "listen in"
     ]
    },
    {
     "word": "choose",
     "clues": [
      "elect to do"
     ]
    },
    {
     "word": "elect",
     "clues": [
      "select by in an election"
     ]
    },
    {
     "word": "eliminate",
     "clues": [
      "get rid of",
      " do away with"
     ]
    },
    {
     "word": "embark",
     "clues": [
      "venture"
     ]
    },
    {
     "word": "employ",
     "clues": [
      "hire",
      " engage"
     ]
    },
    {
     "word": "encourage",
     "clues": [
      "spur on"
     ]
    },
    {
     "word": "endure",
     "clues": [
      "weather",
      " brave"
     ]
    },
    {
     "word": "enhance",
     "clues": [
      "make better or more attractive"
     ]
    },
    {
     "word": "enlarge",
     "clues": [
      "magnify",
      " blow up"
     ]
    },
    {
     "word": "ensure",
     "clues": [
      "guarantee",
      " insure",
      " assure",
      " secure"
     ]
    },
    {
     "word": "enter",
     "clues": [
      "come in",
      " get into",
      " get in",
      " go into",
      " go in"
     ]
    },
    {
     "word": "enter",
     "clues": [
      "enroll",
      " inscribe"
     ]
    },
    {
     "word": "entertain",
     "clues": [
      "provide entertainment"
     ]
    },
    {
     "word": "escape",
     "clues": [
      "get away",
      " break loose",
      " run away from confinement"
     ]
    },
    {
     "word": "establish",
     "clues": [
      "install",
      " set up"
     ]
    },
    {
     "word": "exaggerate",
     "clues": [
      "overstate"
     ]
    },
    {
     "word": "exceed",
     "clues": [
      "surpass",
      " outstrip",
      " outmatch",
      " outdo"
     ]
    },
    {
     "word": "exclude",
     "clues": [
      "except",
      " leave out",
      " leave off",
      " omit"
     ]
    },
    {
     "word": "eject",
     "clues": [
      "expel",
      " throw out",
      " kick out"
     ]
    },
    {
     "word": "excuse",
     "clues": [
      "forgive",
      " pardon"
     ]
    },
    {
     "word": "execute",
     "clues": [
      "put to death"
     ]
    },
    {
     "word": "prosper",
     "clues": [
      "boom",
      " thrive",
      " flourish"
     ]
    },
    {
     "word": "elaborate",
     "clues": [
      "expand",
      " expatiate",
      " enlarge",
      " flesh out"
     ]
    },
    {
     "word": "expand",
     "clues": [
      "spread out",
      " extend in one or more directions",
      " spread"
     ]
    },
    {
     "word": "expect",
     "clues": [
      "anticipate"
     ]
    },
    {
     "word": "experiment",
     "clues": [
      "conduct a test or investigation"
     ]
    },
    {
     "word": "explain",
     "clues": [
      "explicate"
     ]
    },
    {
     "word": "explode",
     "clues": [
      "detonate",
      " blow up"
     ]
    },
    {
     "word": "explode",
     "clues": [
      "show a violent emotional reaction"
     ]
    },
    {
     "word": "exploit",
     "clues": [
      "manipulate to one's advantage"
     ]
    },
    {
     "word": "export",
     "clues": [
      "sell abroad"
     ]
    },
    {
     "word": "expose",
     "clues": [
      "debunk"
     ]
    },
    {
     "word": "extend",
     "clues": [
      "widen",
      " broaden in scope or range or area"
     ]
    },
    {
     "word": "confront",
     "clues": [
      "face",
      " face up to"
     ]
    },
    {
     "word": "fade",
     "clues": [
      "wither"
     ]
    },
    {
     "word": "fail",
     "clues": [
      "go wrong"
     ]
    },
    {
     "word": "faint",
     "clues": [
      "pass out"
     ]
    },
    {
     "word": "decrease",
     "clues": [
      "diminish",
      " fall"
     ]
    },
    {
     "word": "fall",
     "clues": [
      "descend in free fall"
     ]
    },
    {
     "word": "fan",
     "clues": [
      "agitate the air"
     ]
    },
    {
     "word": "fascinate",
     "clues": [
      "intrigue"
     ]
    },
    {
     "word": "fast",
     "clues": [
      "abstain from food"
     ]
    },
    {
     "word": "fear",
     "clues": [
      "dread",
      " be afraid of"
     ]
    },
    {
     "word": "feel",
     "clues": [
      "experience",
      " undergo an emotional sensation"
     ]
    },
    {
     "word": "fight",
     "clues": [
      "struggle"
     ]
    },
    {
     "word": "fill",
     "clues": [
      "fill up",
      " make full"
     ]
    },
    {
     "word": "film",
     "clues": [
      "record on film"
     ]
    },
    {
     "word": "find",
     "clues": [
      "discover"
     ]
    },
    {
     "word": "find",
     "clues": [
      "recover",
      " retrieve",
      " regain"
     ]
    },
    {
     "word": "finish",
     "clues": [
      "complete"
     ]
    },
    {
     "word": "fire",
     "clues": [
      "discharge a weapon"
     ]
    },
    {
     "word": "equip",
     "clues": [
      "fit out",
      " outfit"
     ]
    },
    {
     "word": "fit",
     "clues": [
      "conform to shape or size"
     ]
    },
    {
     "word": "fix",
     "clues": [
      "repair",
      " mend"
     ]
    },
    {
     "word": "flash",
     "clues": [
      "blink",
      " wink",
      " twinkle"
     ]
    },
    {
     "word": "fling",
     "clues": [
      "throw with force or recklessness"
     ]
    },
    {
     "word": "splurge",
     "clues": [
      "indulge oneself"
     ]
    },
    {
     "word": "flood",
     "clues": [
      "inundate",
      " fill quickly beyond capacity"
     ]
    },
    {
     "word": "flourish",
     "clues": [
      "thrive",
      " prosper"
     ]
    },
    {
     "word": "flush",
     "clues": [
      "blush",
      " redden"
     ]
    },
    {
     "word": "flush",
     "clues": [
      "cause to flow or flood"
     ]
    },
    {
     "word": "fly",
     "clues": [
      "travel through the air",
      " be airborne"
     ]
    },
    {
     "word": "fold",
     "clues": [
      "fold up",
      " bend or lay so that one part covers the other"
     ]
    },
    {
     "word": "follow",
     "clues": [
      "go behind"
     ]
    },
    {
     "word": "follow",
     "clues": [
      "comply"
     ]
    },
    {
     "word": "follow",
     "clues": [
      "succeed",
      " come after"
     ]
    },
    {
     "word": "foo",
     "clues": [
      "around] horse around",
      " fool"
     ]
    },
    {
     "word": "forbid",
     "clues": [
      "prohibit",
      " interdict"
     ]
    },
    {
     "word": "force",
     "clues": [
      "move something forcibly"
     ]
    },
    {
     "word": "coerce",
     "clues": [
      "pressure",
      " force",
      " compel"
     ]
    },
    {
     "word": "forge",
     "clues": [
      "fake",
      " counterfeit"
     ]
    },
    {
     "word": "forget",
     "clues": [
      "block",
      " blank out",
      " draw a blank",
      " fail to remember"
     ]
    },
    {
     "word": "form",
     "clues": [
      "shape",
      " give shape to"
     ]
    },
    {
     "word": "organize",
     "clues": [
      "form"
     ]
    },
    {
     "word": "formulate",
     "clues": [
      "word",
      " phrase",
      " articulate"
     ]
    },
    {
     "word": "foster",
     "clues": [
      "nurture"
     ]
    },
    {
     "word": "frame",
     "clues": [
      "ensnare",
      " entrap",
      " set up"
     ]
    },
    {
     "word": "frame",
     "clues": [
      "enclose in a frame"
     ]
    },
    {
     "word": "exempt",
     "clues": [
      "free",
      " grant an exemption"
     ]
    },
    {
     "word": "freeze",
     "clues": [
      "feel or be cold"
     ]
    },
    {
     "word": "freeze",
     "clues": [
      "change to ice"
     ]
    },
    {
     "word": "frighten",
     "clues": [
      "scare",
      " cause fear in"
     ]
    },
    {
     "word": "fund",
     "clues": [
      "finance",
      " underwrite"
     ]
    },
    {
     "word": "gain",
     "clues": [
      "profit",
      " benefit"
     ]
    },
    {
     "word": "gasp",
     "clues": [
      "pant",
      " puff",
      " heave"
     ]
    },
    {
     "word": "generate",
     "clues": [
      "bring forth",
      " produce"
     ]
    },
    {
     "word": "get",
     "clues": [
      "acquire"
     ]
    },
    {
     "word": "feed",
     "clues": [
      "provide with food"
     ]
    },
    {
     "word": "give",
     "clues": [
      "yield",
      " be flexible"
     ]
    },
    {
     "word": "give",
     "clues": [
      "render",
      " yield",
      " return",
      " generate"
     ]
    },
    {
     "word": "give",
     "clues": [
      "collapse",
      " fall in",
      " cave in",
      " give way"
     ]
    },
    {
     "word": "give",
     "clues": [
      "present",
      " give as a gift"
     ]
    },
    {
     "word": "give",
     "clues": [
      "pass",
      " hand",
      " reach"
     ]
    },
    {
     "word": "glance",
     "clues": [
      "peek"
     ]
    },
    {
     "word": "glare",
     "clues": [
      "glower"
     ]
    },
    {
     "word": "glide",
     "clues": [
      "move smoothly and effortlessly"
     ]
    },
    {
     "word": "glow",
     "clues": [
      "emit light"
     ]
    },
    {
     "word": "die",
     "clues": [
      "perish"
     ]
    },
    {
     "word": "go",
     "clues": [
      "move"
     ]
    },
    {
     "word": "graduate",
     "clues": [
      "receive an academic degree"
     ]
    },
    {
     "word": "greet",
     "clues": [
      "send greetings"
     ]
    },
    {
     "word": "grind",
     "clues": [
      "mash",
      " crunch"
     ]
    },
    {
     "word": "groan",
     "clues": [
      "moan"
     ]
    },
    {
     "word": "grow",
     "clues": [
      "mature",
      " maturate"
     ]
    },
    {
     "word": "guard",
     "clues": [
      "ward",
      " watch over",
      " shield from danger or harm"
     ]
    },
    {
     "word": "guess",
     "clues": [
      "make a guess"
     ]
    },
    {
     "word": "handicap",
     "clues": [
      "hinder",
      " hamper"
     ]
    },
    {
     "word": "hang",
     "clues": [
      "hang up",
      " suspend"
     ]
    },
    {
     "word": "happen",
     "clues": [
      "go on",
      " occur"
     ]
    },
    {
     "word": "harm",
     "clues": [
      "do harm to"
     ]
    },
    {
     "word": "hate",
     "clues": [
      "detest",
      " loathe"
     ]
    },
    {
     "word": "haul",
     "clues": [
      "transport"
     ]
    },
    {
     "word": "haunt",
     "clues": [
      "stalk"
     ]
    },
    {
     "word": "have",
     "clues": [
      "have got"
     ]
    },
    {
     "word": "heal",
     "clues": [
      "cure"
     ]
    },
    {
     "word": "hear",
     "clues": [
      "perceive sound"
     ]
    },
    {
     "word": "help",
     "clues": [
      "assist",
      " aid"
     ]
    },
    {
     "word": "hesitate",
     "clues": [
      "pause or hold back in uncertainty or unwillingness"
     ]
    },
    {
     "word": "hiccup",
     "clues": [
      "breathe spasmodically"
     ]
    },
    {
     "word": "hide",
     "clues": [
      "conceal"
     ]
    },
    {
     "word": "hide",
     "clues": [
      "hide out",
      " be or go into hiding"
     ]
    },
    {
     "word": "hike",
     "clues": [
      "walk for pleasure",
      " take a hike"
     ]
    },
    {
     "word": "hit",
     "clues": [
      "strike"
     ]
    },
    {
     "word": "hit",
     "clues": [
      "strike",
      " run into",
      " collide with"
     ]
    },
    {
     "word": "defend",
     "clues": [
      "guard",
      " protect"
     ]
    },
    {
     "word": "support",
     "clues": [
      "hold",
      " sustain",
      " hold up"
     ]
    },
    {
     "word": "hold",
     "clues": [
      "reserve",
      " book"
     ]
    },
    {
     "word": "hold",
     "clues": [
      "bear",
      " carry",
      " contain"
     ]
    },
    {
     "word": "hook",
     "clues": [
      "fasten with a hook"
     ]
    },
    {
     "word": "host",
     "clues": [
      "be the host"
     ]
    },
    {
     "word": "hover",
     "clues": [
      "levitate"
     ]
    },
    {
     "word": "offend",
     "clues": [
      "wound",
      " hurt"
     ]
    },
    {
     "word": "hurt",
     "clues": [
      "ache",
      " be the source of pain"
     ]
    },
    {
     "word": "hypnothize",
     "clues": [
      "mesmerize"
     ]
    },
    {
     "word": "identify",
     "clues": [
      "name"
     ]
    },
    {
     "word": "ignore",
     "clues": [
      "neglect",
      " disregard"
     ]
    },
    {
     "word": "dismiss",
     "clues": [
      "disregard",
      " brush aside",
      " brush off",
      " discount"
     ]
    },
    {
     "word": "illustrate",
     "clues": [
      "exemplify"
     ]
    },
    {
     "word": "imagine",
     "clues": [
      "conceive of",
      " ideate",
      " envisage"
     ]
    },
    {
     "word": "import",
     "clues": [
      "bring in from abroad"
     ]
    },
    {
     "word": "impress",
     "clues": [
      "make a good impression"
     ]
    },
    {
     "word": "improve",
     "clues": [
      "better",
      " amend",
      " ameliorate"
     ]
    },
    {
     "word": "include",
     "clues": [
      "admit",
      " let in"
     ]
    },
    {
     "word": "include",
     "clues": [
      "have as a part"
     ]
    },
    {
     "word": "increase",
     "clues": [
      "become bigger or greater"
     ]
    },
    {
     "word": "indulge",
     "clues": [
      "enjoy to excess"
     ]
    },
    {
     "word": "infect",
     "clues": [
      "communicate a disease"
     ]
    },
    {
     "word": "inflate",
     "clues": [
      "blow up",
      " fill with air"
     ]
    },
    {
     "word": "inject",
     "clues": [
      "take by injection"
     ]
    },
    {
     "word": "injure",
     "clues": [
      "wound",
      " hurt"
     ]
    },
    {
     "word": "insert",
     "clues": [
      "place inside"
     ]
    },
    {
     "word": "insist",
     "clues": [
      "take a firm stand"
     ]
    },
    {
     "word": "inspire",
     "clues": [
      "supply the inspiration for"
     ]
    },
    {
     "word": "instal",
     "clues": [
      "put in",
      " set up for use"
     ]
    },
    {
     "word": "install",
     "clues": [
      "put into an office or a position"
     ]
    },
    {
     "word": "insure",
     "clues": [
      "take out insurance"
     ]
    },
    {
     "word": "intensify",
     "clues": [
      "escalate",
      " step up"
     ]
    },
    {
     "word": "translate",
     "clues": [
      "interpret in another language"
     ]
    },
    {
     "word": "interrupt",
     "clues": [
      "disrupt"
     ]
    },
    {
     "word": "introduce",
     "clues": [
      "inaugurate",
      " usher in"
     ]
    },
    {
     "word": "introduce",
     "clues": [
      "present",
      " acquaint"
     ]
    },
    {
     "word": "introduce",
     "clues": [
      "bring in"
     ]
    },
    {
     "word": "invite",
     "clues": [
      "ask over",
      " invite to one's house"
     ]
    },
    {
     "word": "jail",
     "clues": [
      "imprison",
      " incarcerate"
     ]
    },
    {
     "word": "twitch",
     "clues": [
      "jerk"
     ]
    },
    {
     "word": "jest",
     "clues": [
      "act or speak playfully"
     ]
    },
    {
     "word": "skip",
     "clues": [
      "pass over",
      " skip over"
     ]
    },
    {
     "word": "jump",
     "clues": [
      "leap",
      " bound"
     ]
    },
    {
     "word": "parachute",
     "clues": [
      "jump from an airplane"
     ]
    },
    {
     "word": "justify",
     "clues": [
      "excuse",
      " rationalize"
     ]
    },
    {
     "word": "keep",
     "clues": [
      "preserve"
     ]
    },
    {
     "word": "keep",
     "clues": [
      "maintain"
     ]
    },
    {
     "word": "keep",
     "clues": [
      "hold on",
      " retain possession of"
     ]
    },
    {
     "word": "keep",
     "clues": [
      "observe",
      " celebrate holidays or rites"
     ]
    },
    {
     "word": "kick",
     "clues": [
      "strike with the foot"
     ]
    },
    {
     "word": "kill",
     "clues": [
      "cause to die",
      " put to death"
     ]
    },
    {
     "word": "kneel",
     "clues": [
      "rest one's weight on one's knees"
     ]
    },
    {
     "word": "knit",
     "clues": [
      "make textiles by knitting"
     ]
    },
    {
     "word": "knock",
     "clues": [
      "rap",
      " strike with the knuckles"
     ]
    },
    {
     "word": "know",
     "clues": [
      "be familiar or acquainted with a person or an object"
     ]
    },
    {
     "word": "know",
     "clues": [
      "be aware of the truth of something"
     ]
    },
    {
     "word": "know",
     "clues": [
      "know how to do or perform something"
     ]
    },
    {
     "word": "land",
     "clues": [
      "come down on the ground"
     ]
    },
    {
     "word": "endure",
     "clues": [
      "last",
      " persist"
     ]
    },
    {
     "word": "launch",
     "clues": [
      "propel with force",
      " set in motion"
     ]
    },
    {
     "word": "lay",
     "clues": [
      "put down",
      " lay down"
     ]
    },
    {
     "word": "lead",
     "clues": [
      "head",
      " travel in front of"
     ]
    },
    {
     "word": "lead",
     "clues": [
      "be in charge"
     ]
    },
    {
     "word": "leak",
     "clues": [
      "escape through an opening"
     ]
    },
    {
     "word": "lean",
     "clues": [
      "tilt",
      " tip",
      " slant",
      " angle",
      " incline",
      " bend"
     ]
    },
    {
     "word": "learn",
     "clues": [
      "memorize"
     ]
    },
    {
     "word": "teach",
     "clues": [
      "instruct"
     ]
    },
    {
     "word": "leave",
     "clues": [
      "leave behind"
     ]
    },
    {
     "word": "leave",
     "clues": [
      "exit",
      " go out",
      " get out"
     ]
    },
    {
     "word": "leave",
     "clues": [
      "bequeath",
      " will",
      " pass on"
     ]
    },
    {
     "word": "lend",
     "clues": [
      "loan"
     ]
    },
    {
     "word": "lease",
     "clues": [
      "rent",
      " let"
     ]
    },
    {
     "word": "level",
     "clues": [
      "raze",
      " rase",
      " dismantle",
      " tear down"
     ]
    },
    {
     "word": "license",
     "clues": [
      "certify"
     ]
    },
    {
     "word": "lick",
     "clues": [
      "lap",
      " pass the tongue over"
     ]
    },
    {
     "word": "lie",
     "clues": [
      "tell an untruth"
     ]
    },
    {
     "word": "lie",
     "clues": [
      "lie down"
     ]
    },
    {
     "word": "revoke",
     "clues": [
      "lift",
      " annul",
      " reverse",
      " repeal",
      " overturn",
      " rescind"
     ]
    },
    {
     "word": "plagiarize",
     "clues": [
      "steal intellectual property"
     ]
    },
    {
     "word": "light",
     "clues": [
      "light up",
      " illuminate",
      " make light"
     ]
    },
    {
     "word": "ignite",
     "clues": [
      "light",
      " light up"
     ]
    },
    {
     "word": "like",
     "clues": [
      "be fond of"
     ]
    },
    {
     "word": "restrict",
     "clues": [
      "limit",
      " restrain"
     ]
    },
    {
     "word": "linger",
     "clues": [
      "loiter"
     ]
    },
    {
     "word": "link",
     "clues": [
      "connect",
      " tie",
      " fasten together"
     ]
    },
    {
     "word": "list",
     "clues": [
      "include in a list"
     ]
    },
    {
     "word": "listen",
     "clues": [
      "hear"
     ]
    },
    {
     "word": "load",
     "clues": [
      "place on a surface or a conveyance"
     ]
    },
    {
     "word": "locate",
     "clues": [
      "situate",
      " determine the location"
     ]
    },
    {
     "word": "lock",
     "clues": [
      "fasten with a lock"
     ]
    },
    {
     "word": "lodge",
     "clues": [
      "stay temporarily"
     ]
    },
    {
     "word": "yearn",
     "clues": [
      "hanker",
      " long"
     ]
    },
    {
     "word": "look",
     "clues": [
      "appear",
      " seem"
     ]
    },
    {
     "word": "look",
     "clues": [
      "search"
     ]
    },
    {
     "word": "lose",
     "clues": [
      "fail to win"
     ]
    },
    {
     "word": "misplace",
     "clues": [
      "lose"
     ]
    },
    {
     "word": "love",
     "clues": [
      "be in love with"
     ]
    },
    {
     "word": "enjoy",
     "clues": [
      "enjoy doing",
      " love to do"
     ]
    },
    {
     "word": "frown",
     "clues": [
      "glower",
      " look angry or sullen"
     ]
    },
    {
     "word": "make",
     "clues": [
      "produce",
      " create"
     ]
    },
    {
     "word": "cook",
     "clues": [
      "fix",
      " ready",
      " prepare"
     ]
    },
    {
     "word": "make",
     "clues": [
      "gain",
      " take in",
      " clear",
      " earn"
     ]
    },
    {
     "word": "manage",
     "clues": [
      "oversee",
      " supervise"
     ]
    },
    {
     "word": "manage",
     "clues": [
      "pull off",
      " bring off",
      " carry off"
     ]
    },
    {
     "word": "fabricate",
     "clues": [
      "cook up",
      " make up",
      " invent"
     ]
    },
    {
     "word": "march",
     "clues": [
      "walk"
     ]
    },
    {
     "word": "market",
     "clues": [
      "commercialize"
     ]
    },
    {
     "word": "master",
     "clues": [
      "get the hang of"
     ]
    },
    {
     "word": "match",
     "clues": [
      "be equal or harmonize"
     ]
    },
    {
     "word": "matter",
     "clues": [
      "count",
      " weigh",
      " carry weight"
     ]
    },
    {
     "word": "mean",
     "clues": [
      "intend",
      " signify",
      " stand for"
     ]
    },
    {
     "word": "measure",
     "clues": [
      "quantify",
      " express as a number or quantity"
     ]
    },
    {
     "word": "evaluate",
     "clues": [
      "valuate",
      " assess",
      " appraise",
      " value"
     ]
    },
    {
     "word": "meet",
     "clues": [
      "gather",
      " assemble"
     ]
    },
    {
     "word": "meet",
     "clues": [
      "get to know"
     ]
    },
    {
     "word": "mention",
     "clues": [
      "note",
      " observe",
      " remark"
     ]
    },
    {
     "word": "mind",
     "clues": [
      "be offended or bothered by"
     ]
    },
    {
     "word": "minimize",
     "clues": [
      "understate",
      " downplay"
     ]
    },
    {
     "word": "mislead",
     "clues": [
      "misinform",
      " give false information"
     ]
    },
    {
     "word": "miss",
     "clues": [
      "feel or suffer from the lack of"
     ]
    },
    {
     "word": "miss",
     "clues": [
      "fail to reach or get to"
     ]
    },
    {
     "word": "lack",
     "clues": [
      "be without"
     ]
    },
    {
     "word": "miss",
     "clues": [
      "fail to attend an event or activity"
     ]
    },
    {
     "word": "mix",
     "clues": [
      "shuffle",
      " randomize"
     ]
    },
    {
     "word": "model",
     "clues": [
      "simulate"
     ]
    },
    {
     "word": "move",
     "clues": [
      "be active"
     ]
    },
    {
     "word": "move",
     "clues": [
      "arouse sympathy or compassion"
     ]
    },
    {
     "word": "move",
     "clues": [
      "change position"
     ]
    },
    {
     "word": "move",
     "clues": [
      "change residence",
      " affiliation",
      " or employment"
     ]
    },
    {
     "word": "multiply",
     "clues": [
      "calculate"
     ]
    },
    {
     "word": "mutter",
     "clues": [
      "mumble",
      " murmur"
     ]
    },
    {
     "word": "nap",
     "clues": [
      "catnap",
      " take a nap"
     ]
    },
    {
     "word": "need",
     "clues": [
      "require"
     ]
    },
    {
     "word": "nominate",
     "clues": [
      "put up",
      " put forward",
      " propose"
     ]
    },
    {
     "word": "notice",
     "clues": [
      "note",
      " perceive"
     ]
    },
    {
     "word": "object",
     "clues": [
      "raise an objection"
     ]
    },
    {
     "word": "obscure",
     "clues": [
      "make less visible"
     ]
    },
    {
     "word": "occupy",
     "clues": [
      "fill",
      " occupy the whole space of"
     ]
    },
    {
     "word": "offend",
     "clues": [
      "cause to feel resentment"
     ]
    },
    {
     "word": "offer",
     "clues": [
      "bid",
      " propose to pay"
     ]
    },
    {
     "word": "offer",
     "clues": [
      "volunteer to do"
     ]
    },
    {
     "word": "offset",
     "clues": [
      "countervail",
      " compensate",
      " counterbalance",
      " make up for"
     ]
    },
    {
     "word": "open",
     "clues": [
      "open up"
     ]
    },
    {
     "word": "oppose",
     "clues": [
      "be against"
     ]
    },
    {
     "word": "organize",
     "clues": [
      "bring order and organization to"
     ]
    },
    {
     "word": "mastermind",
     "clues": [
      "engineer",
      " direct",
      " orchestrate",
      " organize"
     ]
    },
    {
     "word": "overlook",
     "clues": [
      "fail to notice"
     ]
    },
    {
     "word": "overwhelm",
     "clues": [
      "overpower"
     ]
    },
    {
     "word": "owe",
     "clues": [
      "be obliged to pay"
     ]
    },
    {
     "word": "pack",
     "clues": [
      "arrange in a container"
     ]
    },
    {
     "word": "paint",
     "clues": [
      "apply paint to",
      " coat with paint"
     ]
    },
    {
     "word": "paint",
     "clues": [
      "make a painting"
     ]
    },
    {
     "word": "park",
     "clues": [
      "maneuver a vehicle into a parking space"
     ]
    },
    {
     "word": "participate",
     "clues": [
      "take part"
     ]
    },
    {
     "word": "pass",
     "clues": [
      "go through",
      " go across"
     ]
    },
    {
     "word": "pass",
     "clues": [
      "overtake",
      " travel past"
     ]
    },
    {
     "word": "elapse",
     "clues": [
      "pass by",
      " go by"
     ]
    },
    {
     "word": "pass",
     "clues": [
      "make it",
      " be successful"
     ]
    },
    {
     "word": "exceed",
     "clues": [
      "pass",
      " go past",
      " top"
     ]
    },
    {
     "word": "pat",
     "clues": [
      "dab",
      " hit lightly"
     ]
    },
    {
     "word": "pay",
     "clues": [
      "give money in exchange for goods or services"
     ]
    },
    {
     "word": "penetrate",
     "clues": [
      "enter into"
     ]
    },
    {
     "word": "perceive",
     "clues": [
      "sense"
     ]
    },
    {
     "word": "perforate",
     "clues": [
      "pass in or through"
     ]
    },
    {
     "word": "perform",
     "clues": [
      "give a performance"
     ]
    },
    {
     "word": "persist",
     "clues": [
      "persevere"
     ]
    },
    {
     "word": "photocopy",
     "clues": [
      "xerox",
      " run off"
     ]
    },
    {
     "word": "pick",
     "clues": [
      "select carefully"
     ]
    },
    {
     "word": "pluck",
     "clues": [
      "pick",
      " cull"
     ]
    },
    {
     "word": "pile",
     "clues": [
      "stack",
      " heap"
     ]
    },
    {
     "word": "rank",
     "clues": [
      "rate",
      " place",
      " range",
      " order",
      " grade"
     ]
    },
    {
     "word": "plan",
     "clues": [
      "make plans"
     ]
    },
    {
     "word": "design",
     "clues": [
      "conceive"
     ]
    },
    {
     "word": "play",
     "clues": [
      "participate in games or sport"
     ]
    },
    {
     "word": "bet",
     "clues": [
      "wager",
      " stake"
     ]
    },
    {
     "word": "play",
     "clues": [
      "act",
      " roleplay",
      " playact"
     ]
    },
    {
     "word": "play",
     "clues": [
      "play on an instrument"
     ]
    },
    {
     "word": "play",
     "clues": [
      "engage in playful activity"
     ]
    },
    {
     "word": "plead",
     "clues": [
      "enter a plea in courts of law"
     ]
    },
    {
     "word": "please",
     "clues": [
      "delight",
      " give pleasure"
     ]
    },
    {
     "word": "pledge",
     "clues": [
      "promise solemnly"
     ]
    },
    {
     "word": "plot",
     "clues": [
      "plan secretly"
     ]
    },
    {
     "word": "plot",
     "clues": [
      "diagram"
     ]
    },
    {
     "word": "plug",
     "clues": [
      "stop up"
     ]
    },
    {
     "word": "poison",
     "clues": [
      "administer poison to"
     ]
    },
    {
     "word": "polish",
     "clues": [
      "refine"
     ]
    },
    {
     "word": "pop",
     "clues": [
      "burst open with a sharp",
      " explosive sound"
     ]
    },
    {
     "word": "post",
     "clues": [
      "publicize with",
      " or as if with",
      " a poster"
     ]
    },
    {
     "word": "swarm",
     "clues": [
      "pour",
      " teem",
      " move in large numbers"
     ]
    },
    {
     "word": "pour",
     "clues": [
      "cause to flow"
     ]
    },
    {
     "word": "pray",
     "clues": [
      "say a prayer"
     ]
    },
    {
     "word": "beg",
     "clues": [
      "implore",
      " entreat"
     ]
    },
    {
     "word": "preach",
     "clues": [
      "deliver a sermon"
     ]
    },
    {
     "word": "precede",
     "clues": [
      "predate",
      " antecede",
      " antedate"
     ]
    },
    {
     "word": "prefer",
     "clues": [
      "favor"
     ]
    },
    {
     "word": "present",
     "clues": [
      "submit",
      " hand over formally"
     ]
    },
    {
     "word": "urge",
     "clues": [
      "urge on"
     ]
    },
    {
     "word": "press",
     "clues": [
      "exert pressure or force on"
     ]
    },
    {
     "word": "squeeze",
     "clues": [
      "compress",
      " constrict",
      " press",
      " compact"
     ]
    },
    {
     "word": "prevent",
     "clues": [
      "forestall",
      " keep from happening"
     ]
    },
    {
     "word": "print",
     "clues": [
      "reproduce by printing"
     ]
    },
    {
     "word": "proclaim",
     "clues": [
      "exclaim",
      " promulgate",
      " state",
      " announce"
     ]
    },
    {
     "word": "produce",
     "clues": [
      "grow",
      " raise",
      " farm",
      " cultivate"
     ]
    },
    {
     "word": "profit",
     "clues": [
      "turn a profit"
     ]
    },
    {
     "word": "prosecute",
     "clues": [
      "bring a criminal action against"
     ]
    },
    {
     "word": "protect",
     "clues": [
      "shield from danger"
     ]
    },
    {
     "word": "prove",
     "clues": [
      "show",
      " demonstrate",
      " establish"
     ]
    },
    {
     "word": "provide",
     "clues": [
      "supply",
      " render",
      " furnish"
     ]
    },
    {
     "word": "provoke",
     "clues": [
      "arouse",
      " evoke an emotion or response"
     ]
    },
    {
     "word": "harass",
     "clues": [
      "hassle",
      " plague",
      " molest"
     ]
    },
    {
     "word": "publish",
     "clues": [
      "bring out",
      " put out",
      " issue",
      " release"
     ]
    },
    {
     "word": "extract",
     "clues": [
      "pull",
      " pull out",
      " pull up",
      " take out"
     ]
    },
    {
     "word": "pump",
     "clues": [
      "raise fluid with a pump"
     ]
    },
    {
     "word": "punch",
     "clues": [
      "hit with the fist"
     ]
    },
    {
     "word": "punch",
     "clues": [
      "make a hole in"
     ]
    },
    {
     "word": "punish",
     "clues": [
      "penalize"
     ]
    },
    {
     "word": "advertise",
     "clues": [
      "push",
      " promote"
     ]
    },
    {
     "word": "push",
     "clues": [
      "press"
     ]
    },
    {
     "word": "put",
     "clues": [
      "place",
      " set",
      " pose",
      " lay",
      " position"
     ]
    },
    {
     "word": "qualify",
     "clues": [
      "modify"
     ]
    },
    {
     "word": "qualify",
     "clues": [
      "measure up",
      " prove capable",
      " meet requirements"
     ]
    },
    {
     "word": "question",
     "clues": [
      "interrogate"
     ]
    },
    {
     "word": "quit",
     "clues": [
      "drop out",
      " give up",
      " throw in the towel"
     ]
    },
    {
     "word": "quote",
     "clues": [
      "cite"
     ]
    },
    {
     "word": "race",
     "clues": [
      "rush",
      " hasten",
      " speed",
      " hurry"
     ]
    },
    {
     "word": "build",
     "clues": [
      "raise",
      " put up",
      " construct",
      " raise"
     ]
    },
    {
     "word": "lift",
     "clues": [
      "raise",
      " elevate",
      " move up"
     ]
    },
    {
     "word": "raise",
     "clues": [
      "collect funds"
     ]
    },
    {
     "word": "raise",
     "clues": [
      "rear",
      " bring up",
      " nurture",
      " parent"
     ]
    },
    {
     "word": "promote",
     "clues": [
      "upgrade",
      " advance",
      " kick upstairs"
     ]
    },
    {
     "word": "rape",
     "clues": [
      "ravish",
      " violate",
      " assault"
     ]
    },
    {
     "word": "achieve",
     "clues": [
      "accomplish",
      " attain",
      " gain with effort"
     ]
    },
    {
     "word": "reach",
     "clues": [
      "extend to",
      " touch"
     ]
    },
    {
     "word": "read",
     "clues": [
      "interpret something that is written or printed"
     ]
    },
    {
     "word": "realize",
     "clues": [
      "recognize",
      " be fully aware of"
     ]
    },
    {
     "word": "rear",
     "clues": [
      "rise up"
     ]
    },
    {
     "word": "recognize",
     "clues": [
      "perceive to be the same"
     ]
    },
    {
     "word": "recognize",
     "clues": [
      "accredit",
      " grant credentials"
     ]
    },
    {
     "word": "recommend",
     "clues": [
      "commend"
     ]
    },
    {
     "word": "record",
     "clues": [
      "tape",
      " register electronically"
     ]
    },
    {
     "word": "recover",
     "clues": [
      "recuperate",
      " convalesce"
     ]
    },
    {
     "word": "recruit",
     "clues": [
      "seek to employ"
     ]
    },
    {
     "word": "recycle",
     "clues": [
      "reprocess",
      " reuse"
     ]
    },
    {
     "word": "redeem",
     "clues": [
      "exchange for ransom under threat"
     ]
    },
    {
     "word": "refer",
     "clues": [
      "mention",
      " advert",
      " bring up",
      " cite",
      " name"
     ]
    },
    {
     "word": "reflect",
     "clues": [
      "think over",
      " meditate",
      " ponder",
      " contemplate"
     ]
    },
    {
     "word": "reflect",
     "clues": [
      "shine"
     ]
    },
    {
     "word": "reform",
     "clues": [
      "improve by alteration or correction"
     ]
    },
    {
     "word": "refuse",
     "clues": [
      "decline to do"
     ]
    },
    {
     "word": "reject",
     "clues": [
      "pass up",
      " turn down",
      " refuse",
      " decline"
     ]
    },
    {
     "word": "deny",
     "clues": [
      "refuse to let have"
     ]
    },
    {
     "word": "register",
     "clues": [
      "enroll to vote"
     ]
    },
    {
     "word": "regret",
     "clues": [
      "repent",
      " rue",
      " feel remorse"
     ]
    },
    {
     "word": "reinforce",
     "clues": [
      "reward",
      " support with rewards"
     ]
    },
    {
     "word": "reject",
     "clues": [
      "rule out",
      " eliminate"
     ]
    },
    {
     "word": "relate",
     "clues": [
      "tie in",
      " link",
      " connect logically or causally"
     ]
    },
    {
     "word": "relax",
     "clues": [
      "loosen up",
      " unwind"
     ]
    },
    {
     "word": "release",
     "clues": [
      "free",
      " liberate"
     ]
    },
    {
     "word": "relieve",
     "clues": [
      "free from a burden or distress"
     ]
    },
    {
     "word": "relinquish",
     "clues": [
      "renounce",
      " give up",
      " foreswear"
     ]
    },
    {
     "word": "trust",
     "clues": [
      "rely on",
      " have confidence in"
     ]
    },
    {
     "word": "remain",
     "clues": [
      "persist",
      " stay behind"
     ]
    },
    {
     "word": "commemorate",
     "clues": [
      "remember"
     ]
    },
    {
     "word": "remind",
     "clues": [
      "prompt",
      " cue"
     ]
    },
    {
     "word": "repeat",
     "clues": [
      "duplicate",
      " reduplicate",
      " double",
      " replicate"
     ]
    },
    {
     "word": "replace",
     "clues": [
      "substitute for a defective or inadequate one"
     ]
    },
    {
     "word": "represent",
     "clues": [
      "be a delegate or spokesperson"
     ]
    },
    {
     "word": "represent",
     "clues": [
      "stand for",
      " correspond to"
     ]
    },
    {
     "word": "reproduce",
     "clues": [
      "make a copy"
     ]
    },
    {
     "word": "request",
     "clues": [
      "call for"
     ]
    },
    {
     "word": "command",
     "clues": [
      "compel"
     ]
    },
    {
     "word": "rescue",
     "clues": [
      "free from harm or evil"
     ]
    },
    {
     "word": "reserve",
     "clues": [
      "obtain or arrange in advance"
     ]
    },
    {
     "word": "resign",
     "clues": [
      "leave office",
      " quit",
      " step down"
     ]
    },
    {
     "word": "resist",
     "clues": [
      "withstand",
      " hold up against"
     ]
    },
    {
     "word": "resist",
     "clues": [
      "baulk",
      " refuse to comply"
     ]
    },
    {
     "word": "respect",
     "clues": [
      "esteem",
      " value"
     ]
    },
    {
     "word": "rest",
     "clues": [
      "breathe",
      " catch one's breath",
      " take a breather"
     ]
    },
    {
     "word": "restrain",
     "clues": [
      "encumber",
      " constrain",
      " hold back"
     ]
    },
    {
     "word": "retain",
     "clues": [
      "remember",
      " keep in one's mind"
     ]
    },
    {
     "word": "retire",
     "clues": [
      "go to bed",
      " turn in"
     ]
    },
    {
     "word": "retire",
     "clues": [
      "go into retirement"
     ]
    },
    {
     "word": "retreat",
     "clues": [
      "move away"
     ]
    },
    {
     "word": "return",
     "clues": [
      "go back"
     ]
    },
    {
     "word": "return",
     "clues": [
      "bring back",
      " take back"
     ]
    },
    {
     "word": "refund",
     "clues": [
      "repay",
      " pay back"
     ]
    },
    {
     "word": "reveal",
     "clues": [
      "uncover",
      " bring out",
      " make visible"
     ]
    },
    {
     "word": "reverse",
     "clues": [
      "invert",
      " turn inside out or upside down"
     ]
    },
    {
     "word": "review",
     "clues": [
      "look back",
      " retrospect"
     ]
    },
    {
     "word": "revise",
     "clues": [
      "make revisions to"
     ]
    },
    {
     "word": "revive",
     "clues": [
      "resuscitate"
     ]
    },
    {
     "word": "reward",
     "clues": [
      "repay",
      " pay back"
     ]
    },
    {
     "word": "tease",
     "clues": [
      "rag",
      " taunt"
     ]
    },
    {
     "word": "ride",
     "clues": [
      "be carried or travel in or on a vehicle"
     ]
    },
    {
     "word": "ring",
     "clues": [
      "peal"
     ]
    },
    {
     "word": "arise",
     "clues": [
      "get up",
      " get out of bed"
     ]
    },
    {
     "word": "rise",
     "clues": [
      "increase",
      " go up",
      " climb",
      " increase in value or level"
     ]
    },
    {
     "word": "rise",
     "clues": [
      "move upward"
     ]
    },
    {
     "word": "rise",
     "clues": [
      "arise",
      " get up",
      " stand up",
      " rise to one's feet"
     ]
    },
    {
     "word": "rise",
     "clues": [
      "come up",
      " ascend in the sky"
     ]
    },
    {
     "word": "risk",
     "clues": [
      "gamble",
      " chance",
      " hazard",
      " take chances"
     ]
    },
    {
     "word": "roar",
     "clues": [
      "bellow",
      " make a loud noise"
     ]
    },
    {
     "word": "rob",
     "clues": [
      "deprive somebody of something"
     ]
    },
    {
     "word": "rock",
     "clues": [
      "sway",
      " move back and forth"
     ]
    },
    {
     "word": "roll",
     "clues": [
      "turn over",
      " turn over or rotate"
     ]
    },
    {
     "word": "wander",
     "clues": [
      "stray",
      " tramp",
      " roam",
      " ramble",
      " rove",
      " range",
      " drift"
     ]
    },
    {
     "word": "row",
     "clues": [
      "propel with oars"
     ]
    },
    {
     "word": "rub",
     "clues": [
      "apply friction"
     ]
    },
    {
     "word": "scratch",
     "clues": [
      "scrape or rub to relieve itching"
     ]
    },
    {
     "word": "rule",
     "clues": [
      "govern"
     ]
    },
    {
     "word": "run",
     "clues": [
      "campaign for office"
     ]
    },
    {
     "word": "run",
     "clues": [
      "be operating or functioning"
     ]
    },
    {
     "word": "run",
     "clues": [
      "move fast on one's feet"
     ]
    },
    {
     "word": "flow",
     "clues": [
      "run"
     ]
    },
    {
     "word": "escape",
     "clues": [
      "run",
      " run away",
      " flee"
     ]
    },
    {
     "word": "save",
     "clues": [
      "lay aside",
      " save up"
     ]
    },
    {
     "word": "save",
     "clues": [
      "spare"
     ]
    },
    {
     "word": "say",
     "clues": [
      "state",
      " tell"
     ]
    },
    {
     "word": "scan",
     "clues": [
      "skim",
      " examine hastily"
     ]
    },
    {
     "word": "scatter",
     "clues": [
      "sprinkle",
      " dot",
      " dust",
      " disperse"
     ]
    },
    {
     "word": "scramble",
     "clues": [
      "jumble"
     ]
    },
    {
     "word": "scrape",
     "clues": [
      "grate",
      " scratch"
     ]
    },
    {
     "word": "scratch",
     "clues": [
      "scrape"
     ]
    },
    {
     "word": "scream",
     "clues": [
      "yell",
      " shriek"
     ]
    },
    {
     "word": "screen",
     "clues": [
      "examine methodically"
     ]
    },
    {
     "word": "screen",
     "clues": [
      "screen out",
      " sieve out"
     ]
    },
    {
     "word": "cheat",
     "clues": [
      "fool",
      " swindle"
     ]
    },
    {
     "word": "screw",
     "clues": [
      "tighten",
      " fasten"
     ]
    },
    {
     "word": "seal",
     "clues": [
      "seal off",
      " make tight",
      " secure against leakage"
     ]
    },
    {
     "word": "secure",
     "clues": [
      "fasten",
      " fix",
      " cause to be firmly attached"
     ]
    },
    {
     "word": "see",
     "clues": [
      "understand",
      " realize"
     ]
    },
    {
     "word": "see",
     "clues": [
      "meet",
      " ran into",
      " encounter",
      " run across",
      " come across"
     ]
    },
    {
     "word": "see",
     "clues": [
      "perceive by sight"
     ]
    },
    {
     "word": "seek",
     "clues": [
      "search",
      " look for"
     ]
    },
    {
     "word": "seem",
     "clues": [
      "appear"
     ]
    },
    {
     "word": "seize",
     "clues": [
      "clutch",
      " take hold of",
      " grab",
      " grasp"
     ]
    },
    {
     "word": "sell",
     "clues": [
      "exchange for money"
     ]
    },
    {
     "word": "betray",
     "clues": [
      "sell out"
     ]
    },
    {
     "word": "mail",
     "clues": [
      "send",
      " post"
     ]
    },
    {
     "word": "broadcast",
     "clues": [
      "air",
      " send"
     ]
    },
    {
     "word": "branch",
     "clues": [
      "fork",
      " divide into branches"
     ]
    },
    {
     "word": "separate",
     "clues": [
      "split up",
      " split",
      " part company"
     ]
    },
    {
     "word": "discriminate",
     "clues": [
      "separate",
      " single out",
      " treat differently"
     ]
    },
    {
     "word": "serve",
     "clues": [
      "serve up",
      " dish out"
     ]
    },
    {
     "word": "serve",
     "clues": [
      "attend to",
      " wait on",
      " attend",
      " assist"
     ]
    },
    {
     "word": "set",
     "clues": [
      "adjust",
      " correct",
      " regulate"
     ]
    },
    {
     "word": "plant",
     "clues": [
      "put or set into the ground"
     ]
    },
    {
     "word": "set",
     "clues": [
      "go down",
      " go below the horizon"
     ]
    },
    {
     "word": "settle",
     "clues": [
      "establish a residence"
     ]
    },
    {
     "word": "settle",
     "clues": [
      "end a legal dispute"
     ]
    },
    {
     "word": "reconcile",
     "clues": [
      "make up"
     ]
    },
    {
     "word": "sink",
     "clues": [
      "go down",
      " go under"
     ]
    },
    {
     "word": "shake",
     "clues": [
      "agitate",
      " move back and forth"
     ]
    },
    {
     "word": "rock",
     "clues": [
      "sway"
     ]
    },
    {
     "word": "shape",
     "clues": [
      "form",
      " work",
      " mold",
      " forge"
     ]
    },
    {
     "word": "share",
     "clues": [
      "use jointly or in common"
     ]
    },
    {
     "word": "shatter",
     "clues": [
      "break"
     ]
    },
    {
     "word": "shave",
     "clues": [
      "remove body hair"
     ]
    },
    {
     "word": "shed",
     "clues": [
      "spill",
      " disgorge"
     ]
    },
    {
     "word": "budge",
     "clues": [
      "shift",
      " stir"
     ]
    },
    {
     "word": "polish",
     "clues": [
      "shine"
     ]
    },
    {
     "word": "shine",
     "clues": [
      "glitter",
      " glisten",
      " glint",
      " gleam"
     ]
    },
    {
     "word": "shiver",
     "clues": [
      "shudder"
     ]
    },
    {
     "word": "stun",
     "clues": [
      "floor",
      " surprise greatly"
     ]
    },
    {
     "word": "shock",
     "clues": [
      "offend",
      " scandalize",
      " outrage"
     ]
    },
    {
     "word": "shoot",
     "clues": [
      "spud",
      " germinate",
      " sprout"
     ]
    },
    {
     "word": "shoot",
     "clues": [
      "fire a shot"
     ]
    },
    {
     "word": "shout",
     "clues": [
      "speak loudly"
     ]
    },
    {
     "word": "abuse",
     "clues": [
      "shout at",
      " abuse verbally"
     ]
    },
    {
     "word": "show",
     "clues": [
      "indicate",
      " point"
     ]
    },
    {
     "word": "show",
     "clues": [
      "exhibit",
      " present",
      " demonstrate"
     ]
    },
    {
     "word": "show",
     "clues": [
      "reveal",
      " display"
     ]
    },
    {
     "word": "shrink",
     "clues": [
      "shrivel"
     ]
    },
    {
     "word": "sigh",
     "clues": [
      "utter a sigh"
     ]
    },
    {
     "word": "sign",
     "clues": [
      "mark with one's signature"
     ]
    },
    {
     "word": "sip",
     "clues": [
      "drink"
     ]
    },
    {
     "word": "sit",
     "clues": [
      "sit down",
      " be seated"
     ]
    },
    {
     "word": "skate",
     "clues": [
      "move on skates"
     ]
    },
    {
     "word": "slam",
     "clues": [
      "bang",
      " close violently"
     ]
    },
    {
     "word": "slap",
     "clues": [
      "hit with a flat surface"
     ]
    },
    {
     "word": "slide",
     "clues": [
      "slither",
      " pass or move unobtrusively or smoothly"
     ]
    },
    {
     "word": "slip",
     "clues": [
      "skid",
      " slide"
     ]
    },
    {
     "word": "slump",
     "clues": [
      "slouch"
     ]
    },
    {
     "word": "smash",
     "clues": [
      "break into pieces"
     ]
    },
    {
     "word": "smell",
     "clues": [
      "emit an odor"
     ]
    },
    {
     "word": "smell",
     "clues": [
      "perceive by the olfactory sense"
     ]
    },
    {
     "word": "smoke",
     "clues": [
      "inhale a plant derivative"
     ]
    },
    {
     "word": "snap",
     "clues": [
      "crack",
      " break suddenly",
      " rupture"
     ]
    },
    {
     "word": "snarl",
     "clues": [
      "speak sharply",
      " snap"
     ]
    },
    {
     "word": "snatch",
     "clues": [
      "snatch up",
      " snap up"
     ]
    },
    {
     "word": "snap",
     "clues": [
      "click",
      " flick",
      " make a snapping sound"
     ]
    },
    {
     "word": "kidnap",
     "clues": [
      "snatch",
      " abduct"
     ]
    },
    {
     "word": "sniff",
     "clues": [
      "whiff",
      " inhale"
     ]
    },
    {
     "word": "snuggle",
     "clues": [
      "cuddle",
      " nestle",
      " draw close"
     ]
    },
    {
     "word": "soak",
     "clues": [
      "submerge in liquid"
     ]
    },
    {
     "word": "overcharge",
     "clues": [
      "surcharge",
      " fleece",
      " rip off"
     ]
    },
    {
     "word": "pawn",
     "clues": [
      "hock"
     ]
    },
    {
     "word": "soar",
     "clues": [
      "fly upwards"
     ]
    },
    {
     "word": "solve",
     "clues": [
      "work out",
      " figure out",
      " puzzle out"
     ]
    },
    {
     "word": "sow",
     "clues": [
      "place seeds into the ground"
     ]
    },
    {
     "word": "spare",
     "clues": [
      "give up",
      " part with"
     ]
    },
    {
     "word": "spare",
     "clues": [
      "save from an unpleasant experience"
     ]
    },
    {
     "word": "speculate",
     "clues": [
      "invest at a risk"
     ]
    },
    {
     "word": "speed",
     "clues": [
      "travel at an excessive or illegal velocity"
     ]
    },
    {
     "word": "spend",
     "clues": [
      "expend"
     ]
    },
    {
     "word": "spill",
     "clues": [
      "flow out"
     ]
    },
    {
     "word": "spin",
     "clues": [
      "twist and turn so as to give an intended interpretation"
     ]
    },
    {
     "word": "spin",
     "clues": [
      "form a web"
     ]
    },
    {
     "word": "spin",
     "clues": [
      "spin around",
      " whirl",
      " reel",
      " gyrate",
      " revolve"
     ]
    },
    {
     "word": "spit",
     "clues": [
      "spew"
     ]
    },
    {
     "word": "split",
     "clues": [
      "burst",
      " break open"
     ]
    },
    {
     "word": "spoil",
     "clues": [
      "rot",
      " go bad",
      " become unfit for consumption"
     ]
    },
    {
     "word": "spoil",
     "clues": [
      "impair",
      " make imperfect"
     ]
    },
    {
     "word": "spoil",
     "clues": [
      "pamper",
      " coddle",
      " mollycoddle",
      " indulge"
     ]
    },
    {
     "word": "spray",
     "clues": [
      "scatter"
     ]
    },
    {
     "word": "circulate",
     "clues": [
      "distribute",
      " disseminate",
      " propagate",
      " broadcast",
      " diffuse",
      " disperse",
      " spread",
      " cause to become widely known"
     ]
    },
    {
     "word": "spread",
     "clues": [
      "distribute over a surface"
     ]
    },
    {
     "word": "square",
     "clues": [
      "raise to the second power"
     ]
    },
    {
     "word": "squeeze",
     "clues": [
      "pinch"
     ]
    },
    {
     "word": "embrace",
     "clues": [
      "hug"
     ]
    },
    {
     "word": "squash",
     "clues": [
      "crush",
      " mash"
     ]
    },
    {
     "word": "extort",
     "clues": [
      "gouge"
     ]
    },
    {
     "word": "stab",
     "clues": [
      "knife"
     ]
    },
    {
     "word": "stain",
     "clues": [
      "spot",
      " produce stains"
     ]
    },
    {
     "word": "stereotype",
     "clues": [
      "pigeonhole"
     ]
    },
    {
     "word": "stamp",
     "clues": [
      "stomp",
      " walk heavily"
     ]
    },
    {
     "word": "stand",
     "clues": [
      "bear",
      " endure",
      " stomach",
      " bear",
      " put up with"
     ]
    },
    {
     "word": "stand",
     "clues": [
      "stand up"
     ]
    },
    {
     "word": "depart",
     "clues": [
      "leave",
      " start out",
      " set forth",
      " set off",
      " set out",
      " take off"
     ]
    },
    {
     "word": "stay",
     "clues": [
      "stick around",
      " stay put"
     ]
    },
    {
     "word": "step",
     "clues": [
      "tread"
     ]
    },
    {
     "word": "mistreat",
     "clues": [
      "maltreat",
      " abuse"
     ]
    },
    {
     "word": "stick",
     "clues": [
      "adhere",
      " hold fast",
      " bond",
      " bind",
      " stick to"
     ]
    },
    {
     "word": "pierce",
     "clues": [
      "stick",
      " puncture"
     ]
    },
    {
     "word": "sting",
     "clues": [
      "bite",
      " deliver an animal sting"
     ]
    },
    {
     "word": "stir",
     "clues": [
      "move an implement with a circular motion"
     ]
    },
    {
     "word": "stop",
     "clues": [
      "halt",
      " come to a halt",
      " stop moving"
     ]
    },
    {
     "word": "stop",
     "clues": [
      "discontinue",
      " cease doing"
     ]
    },
    {
     "word": "store",
     "clues": [
      "lay in",
      " put in",
      " salt away",
      " stack away",
      " stash away"
     ]
    },
    {
     "word": "storm",
     "clues": [
      "rain",
      " hail",
      " or snow hard"
     ]
    },
    {
     "word": "straighten",
     "clues": [
      "straighten out",
      " make straight"
     ]
    },
    {
     "word": "strain",
     "clues": [
      "tense",
      " tense up"
     ]
    },
    {
     "word": "stress",
     "clues": [
      "emphasize",
      " underline"
     ]
    },
    {
     "word": "stretch",
     "clues": [
      "stretch out",
      " extend one's limbs"
     ]
    },
    {
     "word": "stride",
     "clues": [
      "walk with long steps"
     ]
    },
    {
     "word": "strike",
     "clues": [
      "scratch",
      " expunge",
      " excise",
      " remove by erasing"
     ]
    },
    {
     "word": "strike",
     "clues": [
      "walk out",
      " walk off a job"
     ]
    },
    {
     "word": "undress",
     "clues": [
      "disrobe"
     ]
    },
    {
     "word": "stroke",
     "clues": [
      "fondle",
      " caress"
     ]
    },
    {
     "word": "stroll",
     "clues": [
      "saunter"
     ]
    },
    {
     "word": "study",
     "clues": [
      "hit the books"
     ]
    },
    {
     "word": "stuff",
     "clues": [
      "fill tightly"
     ]
    },
    {
     "word": "overeat",
     "clues": [
      "gorge"
     ]
    },
    {
     "word": "stumble",
     "clues": [
      "slip up",
      " trip up",
      " make an error"
     ]
    },
    {
     "word": "resign",
     "clues": [
      "reconcile oneself",
      " accept as inevitable"
     ]
    },
    {
     "word": "substitute",
     "clues": [
      "replace",
      " put in the place of another"
     ]
    },
    {
     "word": "suffer",
     "clues": [
      "hurt",
      " ache"
     ]
    },
    {
     "word": "suggest",
     "clues": [
      "propose",
      " advise"
     ]
    },
    {
     "word": "evoke",
     "clues": [
      "suggest"
     ]
    },
    {
     "word": "suit",
     "clues": [
      "be agreeable or acceptable"
     ]
    },
    {
     "word": "support",
     "clues": [
      "confirm",
      " corroborate",
      " substantiate"
     ]
    },
    {
     "word": "hypothesize",
     "clues": [
      "speculate",
      " theorize",
      " conjecture"
     ]
    },
    {
     "word": "suppress",
     "clues": [
      "curb",
      " inhibit"
     ]
    },
    {
     "word": "surround",
     "clues": [
      "encircle",
      " circle",
      " round"
     ]
    },
    {
     "word": "sustain",
     "clues": [
      "prolong",
      " keep up"
     ]
    },
    {
     "word": "swallow",
     "clues": [
      "believe or accept without questioning"
     ]
    },
    {
     "word": "swallow",
     "clues": [
      "pass through the esophagus"
     ]
    },
    {
     "word": "swear",
     "clues": [
      "declare under oath"
     ]
    },
    {
     "word": "swear",
     "clues": [
      "curse",
      " cuss",
      " blaspheme"
     ]
    },
    {
     "word": "sweep",
     "clues": [
      "use a broom"
     ]
    },
    {
     "word": "swell",
     "clues": [
      "swell up"
     ]
    },
    {
     "word": "swim",
     "clues": [
      "travel through water"
     ]
    },
    {
     "word": "float",
     "clues": [
      "be afloat",
      " fail to sink"
     ]
    },
    {
     "word": "swing",
     "clues": [
      "move with a swaying motion"
     ]
    },
    {
     "word": "swipe",
     "clues": [
      "move something with a swiping motion"
     ]
    },
    {
     "word": "swop",
     "clues": [
      "switch",
      " trade",
      " swap",
      " exchange"
     ]
    },
    {
     "word": "take",
     "clues": [
      "choose",
      " select",
      " pick out"
     ]
    },
    {
     "word": "take",
     "clues": [
      "bring",
      " convey"
     ]
    },
    {
     "word": "talk",
     "clues": [
      "speak",
      " use language"
     ]
    },
    {
     "word": "tap",
     "clues": [
      "draw from"
     ]
    },
    {
     "word": "tap",
     "clues": [
      "strike lightly"
     ]
    },
    {
     "word": "taste",
     "clues": [
      "perceive by the sense of taste"
     ]
    },
    {
     "word": "tease",
     "clues": [
      "mock",
      " make fun of"
     ]
    },
    {
     "word": "tease",
     "clues": [
      "arouse hope or desire without satisfying them"
     ]
    },
    {
     "word": "tell",
     "clues": [
      "narrate",
      " recount",
      " recite"
     ]
    },
    {
     "word": "tempt",
     "clues": [
      "entice",
      " lure"
     ]
    },
    {
     "word": "terrify",
     "clues": [
      "frighten greatly"
     ]
    },
    {
     "word": "testify",
     "clues": [
      "bear witness"
     ]
    },
    {
     "word": "thank",
     "clues": [
      "give thanks"
     ]
    },
    {
     "word": "think",
     "clues": [
      "cogitate",
      " cerebrate"
     ]
    },
    {
     "word": "think",
     "clues": [
      "believe",
      " accept as true"
     ]
    },
    {
     "word": "remember",
     "clues": [
      "retrieve",
      " recall"
     ]
    },
    {
     "word": "threaten",
     "clues": [
      "utter intentions of injury or punishment"
     ]
    },
    {
     "word": "confuse",
     "clues": [
      "throw",
      " befuddle",
      " confound"
     ]
    },
    {
     "word": "throw",
     "clues": [
      "project through the air"
     ]
    },
    {
     "word": "thrust",
     "clues": [
      "lunge",
      " hurl",
      " hurtle"
     ]
    },
    {
     "word": "tick",
     "clues": [
      "click"
     ]
    },
    {
     "word": "tie",
     "clues": [
      "form a knot or bow in"
     ]
    },
    {
     "word": "time",
     "clues": [
      "clock",
      " measure the time or duration of an event"
     ]
    },
    {
     "word": "tiptoe",
     "clues": [
      "tippytoe"
     ]
    },
    {
     "word": "topple",
     "clues": [
      "tip",
      " cause to fall over"
     ]
    },
    {
     "word": "tolerate",
     "clues": [
      "recognize",
      " respect others' rights"
     ]
    },
    {
     "word": "toss",
     "clues": [
      "flip",
      " pitch",
      " throw"
     ]
    },
    {
     "word": "total",
     "clues": [
      "damage beyond the point of repair"
     ]
    },
    {
     "word": "touch",
     "clues": [
      "make physical contact with"
     ]
    },
    {
     "word": "train",
     "clues": [
      "coach"
     ]
    },
    {
     "word": "transfer",
     "clues": [
      "transmit",
      " transport",
      " channel"
     ]
    },
    {
     "word": "transform",
     "clues": [
      "transmute",
      " metamorphose"
     ]
    },
    {
     "word": "tread",
     "clues": [
      "trample"
     ]
    },
    {
     "word": "treat",
     "clues": [
      "care for",
      " provide treatment for",
      " treat medically"
     ]
    },
    {
     "word": "treat",
     "clues": [
      "handle"
     ]
    },
    {
     "word": "trip",
     "clues": [
      "stumble"
     ]
    },
    {
     "word": "trouble",
     "clues": [
      "perturb",
      " distract",
      " make uneasy"
     ]
    },
    {
     "word": "try",
     "clues": [
      "sample",
      " try out",
      " taste"
     ]
    },
    {
     "word": "try",
     "clues": [
      "seek",
      " attempt",
      " essay"
     ]
    },
    {
     "word": "try",
     "clues": [
      "judge",
      " adjudicate"
     ]
    },
    {
     "word": "tumble",
     "clues": [
      "topple",
      " fall down"
     ]
    },
    {
     "word": "tune",
     "clues": [
      "tune up",
      " adjust for (better) functioning"
     ]
    },
    {
     "word": "bend",
     "clues": [
      "flex",
      " turn",
      " deform",
      " twist"
     ]
    },
    {
     "word": "turn",
     "clues": [
      "turn around",
      " change orientation"
     ]
    },
    {
     "word": "rotate",
     "clues": [
      "turn"
     ]
    },
    {
     "word": "twist",
     "clues": [
      "entwine",
      " form into a spiral"
     ]
    },
    {
     "word": "wriggle",
     "clues": [
      "writhe",
      " worm",
      " squirm"
     ]
    },
    {
     "word": "underline",
     "clues": [
      "underscore",
      " draw a line"
     ]
    },
    {
     "word": "undermine",
     "clues": [
      "sabotage",
      " countermine",
      " counteract"
     ]
    },
    {
     "word": "understand",
     "clues": [
      "comprehend"
     ]
    },
    {
     "word": "understand",
     "clues": [
      "sympathize",
      " empathize"
     ]
    },
    {
     "word": "undertake",
     "clues": [
      "tackle",
      " take on"
     ]
    },
    {
     "word": "update",
     "clues": [
      "bring up to date"
     ]
    },
    {
     "word": "upset",
     "clues": [
      "disturb",
      " trouble",
      " move deeply"
     ]
    },
    {
     "word": "upset",
     "clues": [
      "overturn",
      " tip over",
      " turn over",
      " knock over"
     ]
    },
    {
     "word": "urge",
     "clues": [
      "cheer",
      " inspire",
      " urge on"
     ]
    },
    {
     "word": "use",
     "clues": [
      "practice",
      " apply"
     ]
    },
    {
     "word": "utter",
     "clues": [
      "emit"
     ]
    },
    {
     "word": "visit",
     "clues": [
      "travel to"
     ]
    },
    {
     "word": "vote",
     "clues": [
      "cast a vote in an election"
     ]
    },
    {
     "word": "wait",
     "clues": [
      "stay in one place and anticipate something"
     ]
    },
    {
     "word": "wake",
     "clues": [
      "wake up",
      " stop sleeping"
     ]
    },
    {
     "word": "walk",
     "clues": [
      "use one's feet to advance"
     ]
    },
    {
     "word": "digress",
     "clues": [
      "wander",
      " stray"
     ]
    },
    {
     "word": "want",
     "clues": [
      "desire"
     ]
    },
    {
     "word": "warn",
     "clues": [
      "notify of danger",
      " potential harm",
      " or risk"
     ]
    },
    {
     "word": "wash",
     "clues": [
      "bathe",
      " cleanse one's body"
     ]
    },
    {
     "word": "wash",
     "clues": [
      "launder"
     ]
    },
    {
     "word": "waste",
     "clues": [
      "squander",
      " spend extravagantly"
     ]
    },
    {
     "word": "watch",
     "clues": [
      "look on",
      " observe"
     ]
    },
    {
     "word": "wave",
     "clues": [
      "beckon",
      " signal with the hands"
     ]
    },
    {
     "word": "wear",
     "clues": [
      "have on clothes"
     ]
    },
    {
     "word": "weave",
     "clues": [
      "make cloth"
     ]
    },
    {
     "word": "weigh",
     "clues": [
      "determine the weight of"
     ]
    },
    {
     "word": "weigh",
     "clues": [
      "have a certain weight"
     ]
    },
    {
     "word": "whip",
     "clues": [
      "lash"
     ]
    },
    {
     "word": "whisper",
     "clues": [
      "speak softly"
     ]
    },
    {
     "word": "widen",
     "clues": [
      "make wider"
     ]
    },
    {
     "word": "win",
     "clues": [
      "be victorious"
     ]
    },
    {
     "word": "wind",
     "clues": [
      "wind up",
      " coil the spring of a mechanism"
     ]
    },
    {
     "word": "withdraw",
     "clues": [
      "retreat",
      " pull out"
     ]
    },
    {
     "word": "wonder",
     "clues": [
      "question",
      " want to know"
     ]
    },
    {
     "word": "work",
     "clues": [
      "do work"
     ]
    },
    {
     "word": "wor",
     "clues": [
      "out] exercise"
     ]
    },
    {
     "word": "worry",
     "clues": [
      "be worried"
     ]
    },
    {
     "word": "wrap",
     "clues": [
      "enfold in a tissue"
     ]
    },
    {
     "word": "wrestle",
     "clues": [
      "engage in a wrestling match"
     ]
    },
    {
     "word": "write",
     "clues": [
      "communicate or express by writing"
     ]
    },
    {
     "word": "write",
     "clues": [
      "publish"
     ]
    },
    {
     "word": "spell",
     "clues": [
      "write"
     ]
    },
    {
     "word": "compose",
     "clues": [
      "write music"
     ]
    }
   ];*/