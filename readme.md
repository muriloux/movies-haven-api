# Movies Haven

**What is it, and why?**
- It is supposed to be an API that provides movies that are safe from any kind of political bias or agenda.
- Because from all of the app options in the internet (2023), none of them provided an API.

**Technologies**

- This project tries to use the minimum number of packages possible. Typescript, NestJS and other recent tech were an option before, but I believe this project should be able to run in the tiniest setup possible (e.g: raspberry pi zero), in every legacy hardware possible, also the simplest setup possible, so having a build process and dependencies on the most up-to-date environment and packages was discarded.

**Getting Started**

## Endpoints

### 1. **Register**

- **URL**: `/api/user/register`
- **Method**: `POST`
- **Request** (JSON):
    ```json
    {
        "username": "johndoe",
        "email": "johndoe@provider.com",
        "password": "safe123"
    }
    ```
    - **Response** (200):
    ```json
    {
  "message": "User registered successfully",
  "token": "your.token"
  }
    ```
    ### 2. **Login**

- **URL**: `/api/user/login`
- **Method**: `POST`
- **Request** (JSON):
    ```json
    {
        "email": "johndoe@provider.com",
        "password": "safe123"
    }
    ```
    - **Response** (200):
    ```json
    {
  "message": "User logged in successfully",
  "token": "your.token"
  }
    ```
    ### 3. **Get All Movies**

- **URL**: `/api/movies/`
- **Method**: `GET`
- **Headers**:
    - `Authorization`: `Bearer <your_token>`
    - **Response** (200):
    ```json
  {
  "success": true,
  "movies": [
        {
      "_id": "bc5dc07fc4524ba7b6164584",
      "title": "Interstellar",
      "curatorName": "curatorA",
      "createdAt": "2023-08-03T16:25:51.151Z"
    },
    {
      "_id": "bc5dc07fc4524ba7b6164584",
      "title": "The Martian",
      "curatorName": "curatorB",
      "createdAt": "2023-07-03T16:25:51.151Z"
    }
    ]
  }
    ```