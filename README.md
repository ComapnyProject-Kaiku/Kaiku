# Kaiku - Road Sighting PWA

![Kaiku Logo](./public/tentrioIC512_rounded.png)

[Live Demo](https://kaiku-beta.vercel.app/)

## Overview

Kaiku is a Progressive Web Application (PWA) designed for reporting road sightings in network-constrained areas. This app allows users to submit observations, including photos and location data, even when offline. The data synchronizes with the server once an internet connection is available.

## Features

- **Offline Functionality**: Submit reports without an active internet connection.
- **Geolocation**: Capture and submit precise location data for each sighting.
- **Photo Upload**: Take photos or select from the device gallery to include with reports.
- **Sync Mechanism**: Automatically synchronize offline submissions when online.
- **Multiple Form Types**: Support for general observations and specific forms (e.g., E18 Muurla form).
- **Responsive Design**: Works seamlessly across various device sizes.

## Technology Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **PWA Features**: Service Workers, IndexedDB
- **Maps Integration**: Google Maps API
- **Styling**: CSS with responsive design

## Project Structure

```
kaiku/
├── Frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── images/
│       └── App.js
├── backend/
│   ├── FirebaseConfig.js
│   └── server.js
├── package.json
└── README.md
```

## Setup and Installation

1. Clone the repository:
   `git clone https://github.com/your-username/kaiku.git`
   `cd kaiku`
2. Install dependencies:
   `npm install`
   `cd Frontend && npm install `
   `cd ../backend && npm install`
3. Set up environment variables:

- Create a `.env` file in the root directory and add necessary configuration as following:

```
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
```

1. Start the development server:
   `npm run dev`

## Usage

1. Open the application in a web browser.
2. Allow location access when prompted.
3. Use the '+' button to create a new observation.
4. Fill in the required details and upload photos if needed.
5. Submit the form. If offline, the data will be stored locally and synced later.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Google Maps API](https://developers.google.com/maps)
- [Workbox](https://developers.google.com/web/tools/workbox)
