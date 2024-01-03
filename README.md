# ChatNBX Client

Welcome to the ChatNBX Client project! This client communicates with the ChatNBX Server using Socket.IO for real-time chat.

### Preview

A few screengrabs of the deployed frontend highlighting, app features (New Chat, Save Convo, Delete all convos etc) and mobile responsive UI. 

![Screenshot 2023-12-28 at 14 43 47](https://github.com/AksharaAK/client/assets/39496422/eaa792cf-a5da-4b1d-8052-22252f2234e4)

![Screenshot 2023-12-28 at 15 24 45](https://github.com/AksharaAK/client/assets/39496422/612e2e49-f3b4-445a-8ad6-0093b23dc9b1)

https://github.com/AksharaAK/client/assets/39496422/de975028-2edd-4588-b47a-70e7b159b0de

https://github.com/AksharaAK/client/assets/39496422/e986b7bb-9c68-4786-b9d7-686b91f6d668



## Tech Stack

- **Next.js:** A React framework for building web applications.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **Socket.IO:** A library for real-time web applications.

## Features

- Real-time chat with ChatNBX Server.
- Responsive design and UI for a seamless experience on various devices.
- Storage of previous chat conversations available on reload.

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   Create a .env file in the root of the Client directory with the following content:

   ```env.eg
   REACT_APP_BACKEND_URL=<your-server-url>
   ```

   ```env
   REACT_APP_BACKEND_URL=http://localhost:3000
   ```

4. Run the server:

   ```bash
   npm start
   ```

   The server will start on http://localhost:3001 locally as port 3000 is used by server.

## Socket.IO Configuration

Configure the Socket.IO connection in your client code:

   ```javascript

    import { useEffect } from 'react';
    import io from 'socket.io-client';

    const socket = io('http://localhost:3000');

   ```
