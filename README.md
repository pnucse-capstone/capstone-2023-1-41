# Chat foodie

<p align="left">
    <img src="docs/chatfoodie_logo.png" width="80%"/>
</p>

## 1. 프로젝트 소개

food recommendation chatbot with LLM fine tuning.

> 2023 graduation project from Pusan Nat'l Univ.

## 2. 팀 소개

2023 전기 부산대학교 정보컴퓨터공학부 졸업과제 팀 **쩝쩝학사**

- [안혜준](https://github.com/jagaldol)
  - contact: [jagaldol.dev@gmail.com](mailto:jagaldol.dev@gmail.com)
  - 시스템 설계, 백엔드 및 프론트 개발
- [박성민](https://github.com/sm136599)
  - contact: [sm136599@gmail.com](mailto:sm136599@gmail.com)
  - AI 모델 학습, 백엔드 및 프론트 개발
- [박진영](https://github.com/icarus012832)
  - contact: [icarus012832@gmail.com](mailto:icarus012832@gmail.com)
  - 서비스 UI 디자인, 백엔드 및 프론트 개발

|      [[팀장] 안혜준](https://github.com/jagaldol)       |          [박성민](https://github.com/sm136599)          |          [박진영](https://github.com/icarus012832)          |
| :-----------------------------------------------------: | :-----------------------------------------------------: | :---------------------------------------------------------: |
| <img src="https://github.com/jagaldol.png" width="100"> | <img src="https://github.com/sm136599.png" width="100"> | <img src="https://github.com/icarus012832.png" width="100"> |

## 3. 시스템 구성도

![system-structure](/docs/system-structure.png)

### [Chatbot](https://github.com/pnucse-capstone/capstone-2023-1-41/tree/main/chatbot)

#### ChatFoodie(ChatFoodie KoAlpaca Polyglot-ko-5.8B-v1.0) Model

model that trained QLoRA with 8,000 self-instruct datasets.

![Training Loss](./chatbot/fine-tuning/images/train-loss-5epoch.png)

- Base Model: [beomi/KoAlpaca-Polyglot-5.8B](https://huggingface.co/beomi/KoAlpaca-Polyglot-5.8B)
- Our LoRA: [sm136599/chatfoodie-koalpaca-polyglot-5_8b-5150step-8batch_5epoch](https://huggingface.co/sm136599/chatfoodie-koalpaca-polyglot-5_8b-5150step-8batch_5epoch)

#### Example of Deploy Websocket API with Google Colab

you can try Deploy Websocket API in Google Colab.

- [Deploy_chatbot_server_as_public_with_colab.ipynb](https://github.com/pnucse-capstone/capstone-2023-1-41/blob/main/chatbot/Deploy_chatbot_server_as_public_with_colab.ipynb) <a href="https://colab.research.google.com/github/pnucse-capstone/capstone-2023-1-41/blob/main/chatbot/Deploy_chatbot_server_as_public_with_colab.ipynb" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>

### Server(Spring boot)

#### dependency

- java version: [JAVA 17.0.2](https://jdk.java.net/archive/)
- spring boot version: 3.1.0
- mysql version : 8.0.34

#### ERD

![chatfoodie_db](/docs/chatfoodie_db.png)

> You can also view in [**ERD Cloud**](https://www.erdcloud.com/d/YgByDk5gvBG6mGxHS)

#### API documentation

You can view a list of all APIs and their documents at [server's README](https://github.com/pnucse-capstone/capstone-2023-1-41/tree/main/server)

### Front

webpage implementation of chatFoodie.

#### language / library

- typescript
- Next.js 13
- tailwindcss
- axios

#### Directory Structure

```
client
├─── public             # Images, svg, logo...
|
└─── src
    │
    ├── app             # Page routing, only have layout.tsx/page.tsx
    │
    │
    ├── components      # Components recycled on multiple pages
    │
    │
    ├── containers      # UI components that are not recycled on multiple pages
    │
    │
    ├── styles          # CSS(tailwind) files and other styles file
    │
    │
    ├── types           # types used global
    │
    │
    └── utils           # util functions
```

## 4. 소개 및 시연 영상

### DEMO PAGE

#### [Introduction Page](https://chatfoodie.net/)

![introdcution page](/docs/main-page.png)

You can see our introduction of chatfoodie in this page.

#### [Chat Page](https://chatfoodie.net/chat)

![chat page](/docs/chat-page.png)

You can chat with foodie in this page.

It's Design is **ChatGPT-like style** that intuitviely indicates that it's an AI chat.

> If you are a **non-member, you can chat 20 times a day**. If you want more than that, sign up and log in to enjoy all the features!

### Introduction Video

> 유튜브 업로드 후 추가 예정입니다.

## 5. 설치 및 사용법

### Chatbot - websocket server for chatbot ai

Deploy using API extensions from [oobabooga/text-generation-webui](https://github.com/oobabooga/text-generation-webui).

Please visit [chat-foodie-chatbot-server repo](https://github.com/jagaldol/chat-foodie-chatbot-server) that forked [text-generation-webui](https://github.com/oobabooga/text-generation-webui).

#### Execution

```sh
$ git clone https://github.com/jagaldol/chat-foodie-chatbot-server.git
$ cd chat-foodie-chatbot-server
$ python download-model.py beomi/KoAlpaca-Polyglot-5.8B
$ python download-model.py sm136599/chatfoodie-koalpaca-polyglot-5_8b-5150step-8batch_5epoch
```

- Run in CPU
  ```sh
  python server.py --api --api-streaming-port 80 --cpu --model beomi_KoAlpaca-Polyglot-5.8B --lora sm136599_chatfoodie-koalpaca-polyglot-5_8b-5150step-8batch_5epoch
  ```
- Run in GPU
  ```sh
  python server.py --api --api-streaming-port 80 --load-in-4bit --model beomi_KoAlpaca-Polyglot-5.8B --lora sm136599_chatfoodie-koalpaca-polyglot-5_8b-5150step-8batch_5epoch
  ```

#### Example of Deploy with Google Colab

<a href="https://colab.research.google.com/github/pnucse-capstone/capstone-2023-1-41/blob/main/chatbot/Deploy_chatbot_server_as_public_with_colab.ipynb" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>

Deploy_chatbot_server_as_public_with_colab.ipynb

### Start chatfoodie server

#### Create Env file

```bash
cp application-private.yml.example application-private.yml
cp application-mysql.yml.example application-mysql.yml
```

Copy example file, and modify according to your environment.

##### application-private.yml

```yml
mail:
  host: smtp.gmail.com
  port: 587
  username:
  password:
chatbot:
  url: wss://rat-rolled-payments-metallica.trycloudflare.com/api/v1/chat-stream
chat-foodie:
  secret: your_password
```

If you want to use mail authentication api, you need to put your gmail application password.

type your gmail in `mail.username`, and type your google application password in `mail.password`.

In `chatbot.url`, you must enter your chatbot websocket api address. This can be created simply using the [colab tutorial](https://colab.research.google.com/github/pnucse-capstone/capstone-2023-1-41/blob/main/chatbot/Deploy_chatbot_server_as_public_with_colab.ipynb).

##### application-mysql.yml

If you use mysql instead of h2 in-memory db, you should setup mysql settings.

```yml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/chatfoodie_db?rewriteBatchedStatements=true&characterEncoding=UTF-8&serverTimezone=Asia/Seoul
    username:
    password:
```

you should create database of `chatfoodie_db` in your local mysql. then, you sholud create tables with `src/main/resources/ddl.sql`.

also type your mysql `username` and `password`.

```yml
spring:
  profiles:
    active:
      - product
      - mysql
      - private

file:
  path: ./images/
```

Second, modify `spring.profiles.active` in `application.yml`. then, you can use mysql!

#### Run Server

run the development server:

```sh
$ ./gradlew clean build
$ java -jar build/libs/server-1.0.0.java
```

### Start chatfoodie front page

#### Create Env file

```bash
cp .env.local.example .env.local
```

Copy example file, and modify according to your environment.

#### Run Server

run the development server:

```bash
npm install

# and

npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
