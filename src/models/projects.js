const projects = [
    {
        "id": 1,
        "name": "Cardinal AR",
        "description": "Cardinal AR is a Unity-built iOS and Android Augmented Reality application. I used Unity's AR Foundation to " +
            "run the AR side of things while I scripted out models and designed their touch interactions in world space. " +
            "The project utilized photogrammetry to capture 3D models of the Ball State University Football team's starting lineup and " +
            "had a function to display a custom map of Ball State thorough the camera of your mobile device. I was the lead developer on " +
            "Cardinal AR, so most of the functionality was created by me.",
        "role": "Lead Developer",
        "type": "iOS/Android app",
        "featured": true,
        "thumbnail": "https://mercer-portfolio-assets.s3.us-east-2.amazonaws.com/cardinal-ar-ball-state.jpg",
        "tools": [
            {
                "name": "Blender"
            },
            {
                "name": "Unity3D"
            }
        ],
        "languages": [
            {
                "name": "C#"
            }
        ],
        "links": [
            {
                "name": "App Store",
                "link": "https://apps.apple.com/us/app/cardinal-ar-ball-state/id1481248718"
            },
            {
                "name": "Google Play Store",
                "link": "https://play.google.com/store/apps/details?id=edu.bsu.digitalcorps.apps.cardinalar"
            },
        ]
    },
    {
        "id": 2,
        "name": "Chirper App",
        "description": "One of my earlier projects, the Chirper App was my first React Native application. I fixed a handful of bugs" +
            "later in it's lifecycle such as mobile orientation and crash fixes. I spent a good amount of time reading Google Analytics on" +
            " the application and then implementing fixes to common bugs that the main user base was experiencing.",
        "role": "Developer",
        "type": "iOS/Android app",
        "featured": false,
        "thumbnail": "https://mercer-portfolio-assets.s3.us-east-2.amazonaws.com/chirper-app-home.jpg",
        "tools": [
            {
                "name": "Google Analytics"
            },
            {
                "name": "React Native"
            }
        ],
        "languages": [
            {
                "name": "JavaScript"
            }
        ],
        "links": [
            {
                "name": "App Store",
                "link": "https://apps.apple.com/us/app/chirper/id1370886908"
            },
            {
                "name": "Google Play Store",
                "link": "https://play.google.com/store/apps/details?id=edu.bsu.digitalcorps.chirper"
            },
        ]
    },
    {
        "id": 3,
        "name": "Portfolio Site",
        "description": "My portfolio site is built in React using TypeScript and handles API requests via AWS Lambda. It uses " +
            "AWS Amplify's continuous deployment to help me in my release process. All of my assets are hosted in an S3. The Lambda side " +
            "utilizes SAM CLI to built and develop locally as well as deploy to my microservices. The frontend code is public on GitHub, as well as the " +
            "serverless NodeJS code that is deployed to the Lambdas.",
        "role": "Developer/Designer/UX",
        "type": "Website",
        "featured": true,
        "thumbnail": "https://mercer-portfolio-assets.s3.us-east-2.amazonaws.com/mercer-portfolio-site.png",
        "tools": [
            {
                "name": "AWS Amplify"
            },
            {
                "name": "AWS Lambda"
            },
            {
                "name": "AWS SAM CLI"
            },
            {
                "name": "AWS S3"
            },
            {
                "name": "React"
            },
            {
                "name": "NodeJS"
            }
        ],
        "languages": [
            {
                "name": "Sass"
            },
            {
                "name": "HTML"
            },
            {
                "name": "Typescript"
            },
            {
                "name": "JavaScript"
            }
        ],
        "links": [
            {
                "name": "Portfolio Site",
                "link": "https://claytonmercer.com"
            },
            {
                "name": "Frontend Repository",
                "link": "https://github.com/mercerccw/mercer-portfolio"
            }
        ]
    },
    {
        "id": 4,
        "name": "Equipment Checkout System",
        "description": "The Ball State Digital Corps built a custom AngularJS scheduling application a few years ago and " +
            "it was my responsibility to oversee the database and fix frontend or backend issues that the other students were " +
            "encountering. I fixed backend issues that didn't handle equipment reservations correctly and added UX changes to the" +
            " frontend.",
        "role": "Developer",
        "type": "Website",
        "featured": false,
        "thumbnail": "https://mercer-portfolio-assets.s3.us-east-2.amazonaws.com/equipment-checkout-site.png",
        "tools": [
            {
                "name": "AngularJS"
            },
            {
                "name": "MySQL"
            },
            {
                "name": "SLIM"
            }
        ],
        "languages": [
            {
                "name": "CSS"
            },
            {
                "name": "HTML"
            },
            {
                "name": "JavaScript"
            },
            {
                "name": "PHP"
            },
            {
                "name": "SQL"
            }
        ],
        "links": []
    },
    {
        "id": 5,
        "name": "Hey Ya!",
        "description": "Hey Ya! is a messenger website application that allows users to connect with their friends. It was built " +
            "with React and deployed to Google Cloud Firebase. The REST API requests are hosted and managed through Firebase as well.",
        "role": "Developer",
        "type": "Website",
        "featured": false,
        "thumbnail": "https://mercer-portfolio-assets.s3.us-east-2.amazonaws.com/hey-ya-site.png",
        "tools": [
            {
                "name": "Google Firebase"
            },
            {
                "name": "React"
            },
        ],
        "languages": [
            {
                "name": "CSS"
            },
            {
                "name": "HTML"
            },
            {
                "name": "JavaScript"
            },
        ],
        "links": [
            {
                "name": "Hey Ya!",
                "link": "https://heyya.app"
            }
        ]
    },
    {
        "id": 6,
        "name": "Immersive Learning Brochure",
        "description": "I was the project manager on this project. It was a promotional pamphlet designed for marketing " +
            "the Digital Corps. While it was a design-centric project, I learned how to run a team of people and manage " +
            "a timeline with deadlines. ",
        "role": "Project Manager",
        "type": "Brochure",
        "featured": false,
        "thumbnail": "https://mercer-portfolio-assets.s3.us-east-2.amazonaws.com/immersive-learning-brochure.PNG",
        "tools": [],
        "languages": [],
        "links": []
    },
    {
        "id": 7,
        "name": "Life-Extend",
        "description": "A iOS and Android application that I worked on during my time with LifeOmic. I worked on HealthKit features " +
            "that connected Apple Health data to the LifeOmic Precision Health Cloud. I also added some UX features such as a toast notification " +
            "that displays the status of the syncing of health tracking apps both first-party and  third-party.",
        "role": "Developer",
        "type": "iOS/Android app",
        "featured": true,
        "thumbnail": "https://mercer-portfolio-assets.s3.us-east-2.amazonaws.com/life-extend-home.jpg",
        "tools": [
            {
                "name": "GraphQL"
            },
            {
                "name": "Jest"
            },
            {
                "name": "React Native"
            },
            {
                "name": "Redux"
            }
        ],
        "languages": [
            {
                "name": "TypeScript"
            }
        ],
        "links": [
            {
                "name": "App Store",
                "link": "https://www.google.com/"
            },
            {
                "name": "Google Play Store",
                "link": "https://www.google.com/"
            },
        ]
    },
    {
        "id": 8,
        "name": "Philosophy Outreach Site",
        "description": "The Philosophy Site was a website that explained information about an organization on campus that did " +
            "community outreach to introduce kids to philosophy. The client was a Ball State organization that wanted a public website that allowed " +
            "them publish times for their events. It was built in WordPress as a custom theme.",
        "role": "Developer",
        "type": "Website",
        "featured": false,
        "thumbnail": "https://mercer-portfolio-assets.s3.us-east-2.amazonaws.com/Philosophy-site-home.png",
        "tools": [
            {
                "name": "Wordpress"
            }
        ],
        "languages": [
            {
                "name": "CSS"
            },
            {
                "name": "HTML"
            },
            {
                "name": "JavaScript"
            },
            {
                "name": "PHP"
            }
        ],
        "links": [
            {
                "name": "Philosophy Outreach",
                "link": "https://philosophyoutreachproject.azurewebsites.net/"
            }
        ]
    },
    {
        "id": 9,
        "name": "Project Dashboard",
        "description": "The Ball State Digital Corps Project Management website is a very large React site focused around " +
            "allowing the Project Management team to facilitate the Corp's projects. It uses all the modern React features such as" +
            "functional components and React Hooks. React Context is used to manage the large amounts of data that are tied to each project. " +
            "It also creates slack channels and records new employee's training progress. I worked on an employee syncing feature that " +
            "automatically populates the website's database with new employee data once they are added to the main Digital Corps Information website." +
            "I also implemented a logger to manage effective error handling throughout the site. ",
        "role": "Developer",
        "type": "Website",
        "featured": false,
        "thumbnail": "https://mercer-portfolio-assets.s3.us-east-2.amazonaws.com/project-dashboard.png",
        "tools": [
            {
                "name": "React"
            },
            {
                "name": "SLIM"
            },
            {
                "name": "MySQL"
            }
        ],
        "languages": [
            {
                "name": "CSS"
            },
            {
                "name": "HTML"
            },
            {
                "name": "JavaScript"
            },
            {
                "name": "PHP"
            },
            {
                "name": "SQL"
            },
        ],
        "links": []
    },
    {
        "id": 10,
        "name": "Remote Teaching Site",
        "description": "The Ball State University Teacher's College reached out to the Digital Corps to have new features added " +
            "to their website that allows teachers, both new and more experienced, to learn how to teach in the newly evolving environment " +
            "that is online teaching. It is built with a custom theme in WordPress. I built out the new registration system that allows multiple " +
            "signup routes based on if the new user is a student teacher, teacher educator, or a in-service teacher.",
        "role": "Developer",
        "type": "Website",
        "featured": false,
        "thumbnail": "https://mercer-portfolio-assets.s3.us-east-2.amazonaws.com/remote-teaching-site.png",
        "tools": [
            {
                "name": "Wordpress"
            }
        ],
        "languages": [
            {
                "name": "CSS"
            },
            {
                "name": "HTML"
            },
            {
                "name": "JavaScript"
            },
            {
                "name": "PHP"
            }
        ],
        "links": [
            {
                "name": "Teaching Remotely",
                "link": "https://remoteteaching.bsu.edu/"
            }
        ]
    },
    {
        "id": 11,
        "name": "SoftHaven Ship Management Software",
        "description": "The SoftHaven software was a JaveEE website project that I built in one my classes at Ball State. It " +
            "sorts through and manages thousands of vessels as well as allow administrator to assign a ship to a port location. The backed is " +
            "connected to a MySQL database to manage all data. I built the entire java system and my teammate built the React/NodeJS part of " +
            "the project.",
        "role": "Developer",
        "type": "Website",
        "featured": true,
        "thumbnail": "https://mercer-portfolio-assets.s3.us-east-2.amazonaws.com/ship-java-project.png",
        "tools": [
            {
                "name": "Glassfish"
            },
            {
                "name": "MySQL"
            },
        ],
        "languages": [
            {
                "name": "CSS"
            },
            {
                "name": "HTML"
            },
            {
                "name": "Java"
            },
            {
                "name": "JavaScript"
            },
            {
                "name": "SQL"
            },
        ],
        "links": [
            {
                "name": "SoftHaven",
                "link": "https://github.com/mercerccw/Knuth"
            }
        ]
    },
    {
        "id": 12,
        "name": "Trust Admin App",
        "description": "My Ball State University capstone project, the Trust Admin App is a iOS and Android app built in " +
            "Xamarin that manages trust account information for the client Accutech that is located in Muncie, Indiana. I developed the " +
            "app routing and data processing that occurs throughout the application and I also added phone calling support, email support, " +
            "and map support for user information. I lead meetings and client interactions during each phase of the software's release. " +
            "In the initial stages of the project, I worked on taking the clients business requirements and transforming them into usable " +
            "functional and non-functional requirements that my development team used to facilitate project feature additions.",
        "role": "Developer",
        "type": "iOS/Android app",
        "featured": true,
        "thumbnail": "https://mercer-portfolio-assets.s3.us-east-2.amazonaws.com/trust-admin-app-home.jpg",
        "tools": [
            {
                "name": "Xamarin"
            }
        ],
        "languages": [
            {
                "name": "C#"
            }
        ],
        "links": []
    },
    {
        "id": 13,
        "name": "Writing Challenge Site",
        "description": "The Writing Challenge site is a website affiliated with the Ball State University Provost. It's purpose " +
            "is to give Ball State faculty the chance to compete in teams to write the most. The site is meant to urge faculty to " +
            "focus on themselves and their writing proficiency, both professional and personal, and compete in a friendly environment with" +
            "other faculty members so that everyone has a chance to improve their writing. It was built with React and a PHP SLIM backend. I " +
            "built the frontend and backend sides of the challenge feature. The user flow cycle of challenges was designed by me as well.",
        "role": "Developer",
        "type": "Website",
        "featured": false,
        "thumbnail": "https://mercer-portfolio-assets.s3.us-east-2.amazonaws.com/writing-challeng-home.png",
        "tools": [
            {
                "name": "MySQL"
            },
            {
                "name": "React"
            },
            {
                "name": "Slim"
            }
        ],
        "languages": [
            {
                "name": "CSS"
            },
            {
                "name": "HTML"
            },
            {
                "name": "JavaScript"
            },
            {
                "name": "PHP"
            },
            {
                "name": "SQL"
            },
        ],
        "links": [
            {
                "name": "BSU Writing Challenge",
                "link": "https://writingchallenge.bsu.edu/"
            }
        ]
    }
]

module.exports = projects;