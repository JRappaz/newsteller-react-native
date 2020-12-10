# NewsTeller react-native mobile app

## Table of contents
* [General info](#general-info)
* [Architecture](#architecture)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
NewsTeller is a research-driven platform to analyze news. This project is an introduction to a possible mobile application. This application displays multiple news feeds based on categories. It lets user do basic word related queries.

<img src="https://user-images.githubusercontent.com/44334351/101805135-b231f280-3b12-11eb-9326-1e720cf1a9e0.jpg" width="200"> <img src="https://user-images.githubusercontent.com/44334351/101805133-b1995c00-3b12-11eb-99c5-1ee6c15bb716.jpg" width="200"> <img src="https://user-images.githubusercontent.com/44334351/101805122-acd4a800-3b12-11eb-8498-75550bacc07c.jpeg" width="200"> <img src="https://user-images.githubusercontent.com/44334351/101805131-b0682f00-3b12-11eb-8648-59ba6cbd28b5.jpg" width="200">

## Architecture

### Components
[Components](src/components) are react-native bricks. They are used to build pages.
There are three components:
* [NewsCard](src/components/NewsCard) is the representation of a news article.
* [NewsList](src/components/NewsList) is a list of NewsCards. It could feature a search box.
* [SwipeableNewsList](src/components/SwipeableNewsList) is a swiper between multiple NewsList.
* [LogoTitle](src/components/LogoTitle) is a view with NewsTeller icon and the title: "News-Teller".
* [SearchBox](src/components/SearchBox) allows users to parameter a search with filters and search term.
* [SparkLine](src/components/SparkLine) displays a line chart.
* [SwitchButton](src/components/SwitchButton) is switch button with legends. Users use them to select one of two values.


### Pages
[Pages](src/pages) are the screens. The [navigation](src/navigation) is used to switch stack-wise between pages.
There are two different pages:
* [Main](src/pages/Main) is the default screen displaying a SwipeableNewsList.
* [WebDisplayer](src/pages/WebDisplayer) is used to display a web page in full screen within the app.

### Helpers
[Helpers](src/helpers) are utilities functions.
* [APIConnect](src/helpers/APIConnect.js) is the interface between NewsTeller API and the app.

### Styles
[Styles](src/styles) is the directory where the global style of the application is defined.

## Technologies
This project use multiple react-native libraries as detailled in [package.json](package.json). The repos are:
* [React-Navigation](https://reactnavigation.org) Which depends on:
  * [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated)
  * [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler)
  * [react-native-screens](https://github.com/software-mansion/react-native-screens)
  * [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)
  * [react-native-community/masked-view](https://github.com/react-native-community/react-native-masked-view)
* [react-navigation/stack](https://github.com/react-navigation/stack)
* [react-native-swiper](https://github.com/leecade/react-native-swiper)
* [react-native-webview](https://github.com/react-native-webview/react-native-webview)
* [react-native-chart-kit](https://github.com/indiespirit/react-native-chart-kit) Which depends on:
  * [react-native-svg](https://github.com/react-native-svg/react-native-svg)


## Setup
To run this mobile application, react-native bare workflow environment (react-native CLI) is needed, follow [this guide](https://reactnative.dev/docs/environment-setup). 
Then clone this repo:
```
$ git clone https://github.com/JRappaz/newsteller-react-native.git
```
Install dependencies:
```
$ cd newsteller-react-native/NewsTeller
$ npm install
```
Run it on your device or on an emulator using:
```
$ npx react-native run-android
```
For iOS a few extra steps are needed:
```
$ cd ios
$ pod install
$ cd ..
```
and then run it using:
```
$ npx react-native run-ios
```
