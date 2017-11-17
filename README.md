# Ionic 3 image capture
This is a fully functioning iOS/Android Ionic app. See screenshot.png to get an idea of what
the application looks like.
![Alt text](./screenshot.png?raw=true "Ionic 3 camera capture example")

## Features
1) Login/Logout (Not connected to server)
2) Email/PSW basic front end authentication with service provider
3) Image capture from mobile device using camera or local files
4) Gallery slideshow


##Dev requirements
1) Install node
2) "npm install -g ionic cordova"
3) Install Android file transfer "https://www.android.com/filetransfer/"
4) Install xcode application "https://developer.apple.com/xcode/"
## How to use this app

-- First add the platform you would like to test on --
```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

1) From terminal - "ionic serve"  - This will serve the app to be viewed on a Browser
2) Connect Android device and unlock - "ionic cordova run android" - This will create a .pkg file and push it onto the device
3) To install apps onto Apple devices this must be done from the Xcode application.
