# Terrible Techno

![alt text](https://i.imgur.com/1VUE4X2.png "Terrible Techno Screenshot")

- Terrible Techno is an interactive music sequencer with multiple instruments and effects.
- It consists of an arpeggiator sequencer, a bass sequencer, a rhythm sequencer, and a live qwerty-playable synthesizer.
- Each instrument has its own effects as well a master section for stereo compression and reverb. 

### Technologies Used
- [Tone.Js](https://tonejs.github.io/): Framework for the Web AUdio API
- [NexusUI](https://nexus-js.github.io/ui/): Collection of HTML5 Music Interfaces
- [jQuery 3.2.1](https://www.jquery.com/)
- [Firebase](https://firebase.google.com/): Authentication and data storage

### Key Commands
- "+" and "-" to tab through instruments
- "Up and Down Arrow" to raise or lower master volume
- Use the QWERTY keyboard to play the selected octaves on the synthesizer

### Keyboard Map
![alt text](https://i.imgur.com/vDkJ0gW.png "Keyboard Map")

### Save Settings
In order to save settings: <br/>
- Log in using firebase authentication. A Google account is required.
- Click on floppy disk icon
- Type in desired name for current settings
- Hit Enter, settings are immediately available for recall.

## Run locally
- Install http-server,  [Click here](https://www.npmjs.com/package/http-server) for documentation and installation.
- Run the following commands in your terminal:
```
$ git clone https://github.com/EduardoDuQuesne/terrible-techno && cd $_
$ npm install
$ grunt
```
- Then run server in same directory

### Firebase Authentication
- In order to store settings, the following steps must be done.
- Create a project with your personal Firebase account
```
$ touch javascripts/config/fbCreds.js
```
- The following must be placed in the created files. This includes your API key and domain

```javascript
'/*jshint esversion: 6 */';

module.exports = {
    apiKey: "<API KEY>",
    authDomain: "<DOMAIN>"
};
```








