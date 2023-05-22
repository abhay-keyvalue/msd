# msd-react-native

msd

## Installation

```sh
npm install msd-react-native
```

## Usage

```js
import MSD from 'msd-react-native';

// ...

i// sdk initialization

const {init} = MSD();

//... 

const apiKey ='sample api key';
init(apiKey)

//...


// use event track function

const {useEvents} = MSD();

//...

const {track} useEvents();

//...

const eventName = 'some Event name';
const eventProperties = {propertyOne: 'someValue', propertyTwo: 'someValue'}
track(eventName, eventProperties);

// use recommendations function

const {useRecommendations} = MSD();

const {recommendations, getRecommendations} = useRecommendations();

// ...

const requestParams = {paramOne: 'someValue', paramTwo: 'someValue'};
getRecommendations(requestParams);
// get the response as recommendations object
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
# msd
