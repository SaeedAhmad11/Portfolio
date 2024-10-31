const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Pak-Austria Fachhochschule Institute of Applied Sciences and Technology',
                degree: 'BS, Software Engineering',
                detail: "Bachelor's Degree in Software Engineering from Pak-Austria Fachhochschule Institute of Applied Sciences and Technology.",
                year: '2021-2025'
            },
            {
                id: 1,
                title: 'Pakistan Scouts Cadet College Batrasi Manshera',
                degree: 'HSSC, Pre Engineering',
                detail: "Completed FSC part 1 and part 2 in Pre-Engineering from Pakistan Scouts Cadet College Batrasi Manshera.",
                year: '2017-2019'
            },
            {
                id: 2,
                title: 'Pakistan Scouts Cadet College Batrasi Manshera',
                degree: 'SSC, Science Subjects',
                detail: "Completed SSC part 1 and part 2 in Science subjects from Pakistan Scouts Cadet College Batrasi Manshera",
                year: '2015-2017'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'SM Sami Peshawar',
                role: 'Frontend Developer Internship',
                url: 'Pakistan Scouts Cadet College Batrasi Manshera',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '08/2021 - 09/2021',
                location: 'Peshawar, Pakistan'
            },
            {
                id: 2,
                title: 'HauzaTech',
                role: 'Internee',
                url: 'no website',
                desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
                year: '02/2023 - Present',
                location: 'Peshawar, Pakistan'
            },
            {
                id: 3,
                title: 'Encoder Bytes',
                role: 'Web Developer Internee',
                url: 'https://www.encoderbytes.com/',
                desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
                year: '09/2020 - 02/2021',
                location: 'Peshawar, Pakistan'
            },
            {
                id: 4,
                title: 'Rapidev Islamabad',
                role: 'ML Intern',
                url: 'https://www.rapidev.com/',
                desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
                year: '09/2020 - 02/2021',
                location: 'Peshawar, Pakistan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
