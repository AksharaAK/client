![Screenshot 2023-12-28 at 14 43 47](https://github.com/AksharaAK/client/assets/39496422/377bc5ec-556b-4376-976a-b356930a78e2)# ChatNBX Client

Welcome to the ChatNBX Client project! This client communicates with the ChatNBX Server using Socket.IO for real-time chat.

### Preview

A few screengrabs of the deployed frontend highlighting, app features (New Chat, Save Convo, Delete all convos etc) and mobile responsive UI. 

![Screenshot 2023-12-28 at 14 43 47](https://github.com/AksharaAK/client/assets/39496422/eaa792cf-a5da-4b1d-8052-22252f2234e4)

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
   cd Client
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

## Deployment

Deploy the client to your preferred platform. Ensure the environment variables are configured appropriately.
Checkout the deployed frontend at <https://client-seven-taupe.vercel.app/>
