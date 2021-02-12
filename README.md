# Setup

1. Clone repo
2. Ensure that Cocoapods is installed
3. Ensure yarn is installed
4. Run `yarn` from the project root to get React Native modules
5. Run `cd ios && pod install && cd ..` from project root to install Native modules
6. Add your RevenueCat API key to `index.js`
7. Ensure you have team selected in Xcode for building to a physical device (`RCOfferCodeTest -> Signing & Capabilites`)
8. Run `react-native run-ios --device` to get App installed on device