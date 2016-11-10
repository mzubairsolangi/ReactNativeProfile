# ReactNativeProfile

This is simple React Native starter app. 

For setup please follow the official site.
https://facebook.github.io/react-native/docs/getting-started.html

Installing Dependencies:

You will need Node.js, the React Native command line interface, and Android Studio.

1- Install Chocolatey -  package manager
https://chocolatey.org/

After Chocolatey installation open CMD and run following commands: 
    - choco install nodejs.install 
    - choco install python2
    
2- The React Native CLI     
Node comes with npm, which lets you install the React Native command line interface.

    - npm install -g react-native-cli
 
3- Android Development Environment 
     1. Install Android Studio 
          Download and install Android Studio.
          https://developer.android.com/studio/install.html
     
     2. Confirm the Android SDK is installed 
     3. Set up paths:
     The React Native command line interface requires the ANDROID_HOME environment variable to be set up.
     
      The React Native command line interface requires the ANDROID_HOME environment variable to be set up.
      Go to Control Panel → System and Security → System → Change settings → Advanced System Settings → Environment variables → New, then enter the path to your Android SDK.
     
    4. Set up your Android Virtual Device:
    To see the list of available AVDs, launch the "AVD Manager" from within Android Studio or run the following command in a terminal:
    
    - android avd
    
    You may follow the Android Studio User Guide to create a new AVD if needed.
    https://developer.android.com/studio/run/managing-avds.html
    
5- Testing your React Native Installation:
Use the React Native command line interface to generate a new React Native project called "AwesomeProject", then run react-native run-android inside the newly created folder.
run following commands:
      - react-native init AwesomeProject
      - cd AwesomeProject
      - react-native run-android

    
