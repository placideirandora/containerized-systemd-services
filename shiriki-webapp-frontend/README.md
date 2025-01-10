# Shiriki-Web-app-
"An AI-powered, edge-computing web app providing affordable digital services, offline access, and customizable solutions for businesses in underserved areas."
# Spark Web Application

## Overview
**Spark** is a modular, AI-powered web application designed to provide affordable digital infrastructure, integrating storage, computing power, and Wi-Fi. Built on an edge-computing framework, it offers offline capabilities, ensuring continuous service even in low-connectivity environments. This solution is perfect for businesses and organizations across various sectors such as healthcare, education, and public services, enabling digital transformation in underserved communities.

## Key Features
- **Modular Architecture**: Components such as Wi-Fi management, order systems, and analytics can be added or removed based on the client's requirements.
- **Edge Computing**: Reduces latency by processing data close to the source, ensuring high performance even when the network is unstable.
- **Offline-First**: The app continues to work offline, with data synced automatically when a connection is available.
- **Customizable User Interface**: The UI can be tailored to specific business needs, making the application versatile across industries.
- **Integration with IoT**: Seamless support for IoT devices and small AI models for edge computing solutions.

## Tech Stack

### Frontend
- **React.js**: Component-based JavaScript library for building user interfaces, providing modularity and efficient UI updates.
- **TypeScript**: Strongly-typed JavaScript superset, improving code quality and maintainability.
- **Tailwind CSS**: Utility-first CSS framework for rapidly building custom, responsive user interfaces.
- **PouchDB**: Client-side database that enables offline data storage and synchronization with CouchDB.

### Backend
- **Node.js**: JavaScript runtime used for building fast, scalable backend services.
- **Express.js**: Minimal and flexible Node.js web application framework used for building APIs.
- **Python (optional for microservices)**: Used for specific microservices, particularly when handling data-intensive tasks or interfacing with low-level systems like CoovaChilli.
- **CouchDB**: NoSQL database that syncs data between the client (via PouchDB) and the server, supporting offline-first capabilities.

### Edge Computing & Containerization
- **Balena**: A platform for deploying containerized applications to IoT devices. Balena manages the deployment, update, and monitoring of services on edge devices.
- **Yocto Linux**: Embedded Linux system on which the edge devices run, providing a lightweight and customizable environment.
- **Docker**: Used to containerize the web application and its services for deployment on edge devices.

### Data Sync & Security
- **CouchDB/PouchDB**: Enables data syncing between the edge device and central servers. Ensures that the app can run offline and syncs data when the connection is restored.
- **JWT (JSON Web Tokens)**: Stateless authentication method that allows users to securely authenticate across different services.
- **OAuth2**: Used for user authorization, ensuring secure access to sensitive parts of the web application.

### Low-Level Integration
- **DBus**: Used for communication between the web app and low-level applications (e.g., CoovaChilli) on the Yocto Linux environment.
- **CoovaChilli**: Manages the captive portal, providing network access control and user session management for Wi-Fi services.

---

## Getting Started
- **Clone the ared-cmu-practicum repo**
- **cd ./ared-cmu-practicum/apache**
- **start the apache server** : docker-compose up -d --build 
- **cd ../ared-cmu-practicum/frontend**
- **start the frontend container** : docker-compose up -d --build 
- **Access the frontend web application**: http://localhost:3000/
- **stop the containers anytime** : docker-compose down
