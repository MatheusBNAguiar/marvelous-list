# Marvelous Lists

The marvelous lists project has the objective to make a simple interface using marvel comics and heroes, with some extra functionalities.

## Marvel Setup

To maintain Marvel's style guide all the colors and fonts were based on its website, marvel.com. Maintaining the patterns we chose some colors and fonts.

### Colors
- Primary color: #202020
- Primary color: #EB2328
- Text color: #000000

### Fonts
- Heading font: Roboto condensed
- Text font: Roboto


## Development

### Getting Started

```bash
# clone the project
git clone https://github.com/MatheusBNAguiar/marvelous-list

# enter the project directory
cd marvelous-list

# install dependency
yarn
```
Before starting the application you should create a .env.development archive, you can copy the .env file, and put right there your marvel public key. After this you can run start command.


```
# develop
yarn start
```


### Folder Structure

The project is separated into some defined structures

```

src The code source
└── App
    └── Base.js -> The base of the application skeleton
    └── Router.js -> Automatic router component
    └── Routes.js -> An array with all the application routes
    └── index.js -> The merger of Routes and Base
└── Components -> All generic components used on the application
└── Core -> Bussines rules layers
        └── External -> Abstractions from libs and external sources
        └── Model -> Functions that model data that will be sent to outside
        └── Parser -> Functions that change content from the outside to be consumed from inside
        └── Services -> The business rules functions that group all the functions above
└── Domain -> The view section, its group all the visual components of a domain into a folder
└── Shared -> All the functions and data that has not any bussiness with the bussiness rules and domains
    └── css
    └── font
    └── hooks
    └── imgs
    └── style
    └── svgs
    └── utils
└── index.js Application initializer

.eslintrc Our lint rules

```

### Deployment 

After each branch made a Preview Deployment is made on Vercel, a free service that helps automatic and easy no config servers for applications. If you merge your branch anytime, with the approval from a code owner, the new code on master is deployed on production and made available at [marvelous-lists.vercel.app](marvelous-lists.vercel.app).
