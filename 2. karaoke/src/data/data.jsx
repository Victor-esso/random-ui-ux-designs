const initialSongs = [
    {
        id : "306fj13ywKE",
        name : "islands in the stream",
        by : "Kenny Rogers & Dolly Parton"
    },
    {
        id : "IrMSSbfJpJU",
        name : "Dancing Queen",
        by : "ABBA"
    },
    {
        id : "c9lPQXrCSjE",
        name : "You'll Be In My Heart",
        by : "Phil Collins"
    },
    {
        id : "0AnXRFYMZ9Q",
        name : "Nightshift",
        by : "Commodores"
    },
    {
        id : "25rn5PQ55So",
        name : "It Must Have Been Love",
        by : "Roxette"
    },
    {
        id : "pDPVPVRMlN8",
        name : "What's Love Got to Do with It",
        by : "Tina Turner"
    },
    {
        id : "3y0aZEeFw-I",
        name : "Counting My blessings",
        by : "Seph Schlueter"
    },
    {
        id : "Kep7bic4PRI",
        name : "Omemma",
        by : " Chandler Moore"
    },
    {
        id : "6Vdjr2JSXmI",
        name : "I Wanna Dance with Somebody",
        by : "Whitney Houston"
    },
    {
        id : "EqAjtzyoduY",
        name : "Shackles (Praise You)",
        by : "Mary Mary"
    },
    {
        id : "83jCPHpA5e0",
        name : "Find A Way To My Heart",
        by : "Phil Collins"
    },
    {
        id : "uj40FiyPbzM",
        name : " Elevation Worship and Maverick City",
        by : "Jireh"
    },
    {
        id : "Axh5DFQCzSY",
        name : "Yeshua My Beloved",
        by : "Jesus Image Worship"
    },
    {
        id : "LJ2cwL8T6i0",
        name : "Congratulations",
        by : "Ada Ehi ft Buchi"
    },
    {
        id : "z2be-Fc3F1U",
        name : "I TESTIFY",
        by : "Ada Ehi"
    },
    {
        id : "YY__LWjKQPw",
        name : "Olufunmi",
        by : "Styl-Plus"
    },
    // {
    //     id : "qBM6cY0m4MY",
    //     name : "Call My Name",
    //     by : "Styl Plus"
    // },
    {
        id : "8nNMunZbKLk",
        name : "Cheerleader",
        by : "Omi"
    },
    {
        id : "zxld8vy43qM",
        name : "Irreplaceable",
        by : "Beyonce"
    },
    {
        id : "HRDIImdmnys",
        name : "Running (To You)",
        by : "Simi & Chike"
    },
    {
        id : "Lbohqhuo28s",
        name : "The Lady In Red",
        by : "Chris Deburgh"
    },
    {
        id : "mby9u7ySEEk",
        name : "You Send Me",
        by : "Sam Cooke"
    },
    {
        id : "HIRoy3QumEk",
        name : "Daddy Cool",
        by : "Boney M"
    },
    {
        id : "GwVVQv1lwRA",
        name : "T-shirt",
        by : "Shontelle"
    },
    {
        id : "RWB_C147QbI",
        name : "End Of The Road",
        by : "Boyz II Men"
    },
    {
        id : "yXAYKsxzbBwI",
        name : "On Bended Knee",
        by : "Boyz II Men"
    },
    {
        id : "yDGnnxeoRAo",
        name : "All My Life",
        by : "K-Ci & Jojo"
    },
    {
        id : "fOLL3hUczzY",
        name : "Stuck On You",
        by : "Lionel Richie"
    },
    {
        id : "vCv5_KJKSfY",
        name : "Hello",
        by : "Lionel Richie"
    },
    {
        id : "1IhuKBa_RHo",
        name : "THE ONLY ONE",
        by : "Lionel Richie"
    },
    {
        id : "upUkG2LUMW4",
        name : "Coat Of Many Colours",
        by : "Dolly Parton"
    },
    {
        id : "evWu77XsV1U",
        name : "Jolenes",
        by : "Dolly Parton"
    },
    {
        id : "8lMT3E0TSME",
        name : "Cheri Cheri Lady",
        by : "Modern Talking"
    },
    {
        id : "4uaYKf5Yd_k",
        name : "UNTIL I FOUND YOU",
        by : "Stephen Sanchez & Em Beihold"
    },
    {
        id : "wv-4gj7F7Tk",
        name : "TOBECHUKWU",
        by : "NATHANIEL BASSEY"
    },
    {
        id : "zOD99FOQEto",
        name : "GOODNESS OF GOD",
        by : "CeCe WinansY"
    },
    {
        id : "oQsodhHJ5kg",
        name : "Firm Foundation",
        by : "Cody Carnes"
    },
    {
        id : "yOmWr1OBVW0",
        name : " God, Turn it Around",
        by : "John Reddick"
    },
    {
        id : "NRMYKGHNCjg",
        name : "Umbrella",
        by : "Rihanna"
    },
    {
        id : "8QPZPrJaFG0",
        name : "Stay",
        by : "Rihanna"
    },
    {
        id : "_KQ5MtWYeHU",
        name : "Man Down",
        by : "Rihanna"
    },
    {
        id : "8A_1q4xiWiI",
        name : " Roar",
        by : "Katy Perry"
    },
    {
        id : "HiqiuUA6OxI",
        name : "  Firework",
        by : "Katy Perry"
    },
    {
        id : "VM1Iefu5cgk",
        name : "Life For Rent",
        by : "Dido"
    },
    {
        id : "GDC2p7S6-jY",
        name : "Not Afraid",
        by : "Eminem "
    },
    {
        id : "tOaZG_QxtVU",
        name : "Jordin Sparks & Chris Brown",
        by : "No Air"
    },
    {
        id : "V7ojVgvSeBA",
        name : "Coming Home",
        by : "Diddy"
    },
    {
        id : "4U8GylpOWsQ",
        name : "Nothin' On You",
        by : "B.O.B Feat. Bruno Mars"
    },
    {
        id : "V7ojVgvSeBA",
        name : " Airplanes",
        by : "B.o.B"
    },
    {
        id : "BHEa_sXr6Xw",
        name : "BEST I EVER HAD",
        by : "Drake"
    },
    {
        id : "tBa1jNFIT40",
        name : "What's My Name",
        by : "Rihanna feat. Drake"
    },
    {
        id : "w_nUEWy-wzI",
        name : "Find Your Love",
        by : "Drake"
    },
    {
        id : "P_MivU41-R8",
        name : "Mistletoe",
        by : "Justin Bieber"
    },{
        id : "SoTregAKlqU",
        name : "BIRDS OF A FEATHER",
        by : "Billie Eilish"
    },
    {
        id : "WwjhQ8FCIH8",
        name : " Marry You",
        by : "Bruno Mars"
    },
    {
        id : "4n2cRx8uAbo",
        name : " Forever",
        by : "Gyakie & Omah Lay"
    },
    {
        id : "k9GJLIf-vgY",
        name : "Pretty Girl Rock",
        by : "Keri Hilson"
    },
    {
        id : "qsyRU7aZNYg",
        name : "Sexy Love",
        by : "NeYo"
    },
    {
        id : "GvhuPG-B5J0",
        name : "So Sick",
        by : " Ne -Yo"
    },
    {
        id : "l2SS0WSMNVg",
        name : " Independent Women",
        by : "Destiny's Child"
    },
    {
        id : "-Oil27bpcw4",
        name : "He Wasn't Man Enough",
        by : "Toni Braxton"
    },
    {
        id : "bUIvrsvm9z8",
        name : "No Scrubs",
        by : "TLC"
    },
    {
        id : "GbMA7Xh3mi4",
        name : "Cater 2 U",
        by : "Destiny's Child"
    },
    {
        id : "Zkm9GjwNaIE",
        name : "E Dey Flow",
        by : "Moses Bliss x Neeja, Ajay Asika, Festizie, Chizie"
    },
]

export default initialSongs;