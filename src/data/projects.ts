import Project from "types/Project";
const url = "https://github.com/MaiaVinicius/";

const OPEN_PROJECT = "Open project";
const VIEW_CODE = "View code";

const projects: Project[] = [
  {
    title: "digital-wallet-api",
    description: "An API that provides connection with multiple banks and investment broker from Brazil. The objetive was to centralize personal financial data 💰",
    languages: [
      {
        name: "Node.js"
      },
      {
        name: "Restful API"
      },
      {
        name: "Puppeter.js"
      }
    ],
    buttons: [
      {
        url: `${url}carteira-digital-api`,
        name: VIEW_CODE,
      },
    ],
  },
  {
    title: "wallet-dashboard",
    description:
      "An application that provides personal financial control. Management of investments, profits, expenses and so on. This project is integrated with `carteira-digital-api` ",
    languages: [
      {
        name: "MySQL"
      },
      {
        name: "Laravel"
      },
      {
        name: "GraphQL"
      },
      {
        name: "Vue.js"
      }
    ],
    buttons: [
      {
        url: `${url}carteira-digital`,
        name: VIEW_CODE,
      },
    ],
  },
  {
    title: "asp-classic-redis-session",
    description: "Application to solve the connection from Asp Classic (deprecated) with Redis. It was used to scale an application with Redis features (like session and caching)",
    languages: [
      {
        name: "Asp Classic"
      },
      {
        name: "Redis"
      }
    ],
    buttons: [
      {
        url: `${url}asp-classic-redis-session`,
        name: VIEW_CODE,
      },
    ],
  },
  {
    title: "devfolio",
    description: "Open-source developer portfolio. The one you are navigating right now 😉 ",
    languages: [
      {
        name: "React"
      },
      {
        name: "Styled Components"
      },
      {
        name: "CSS"
      },
    ],
    buttons: [
      {
        name: OPEN_PROJECT,
        url: `https://maiavinicius.me`,
      },
      {
        name: VIEW_CODE,
        url: `${url}me`,
      },
    ],
  },
  {
    title: "wabot-api",
    description: "API to send and receive messages using WhatsApp 💬 (unnofficial API) with an queue way",
    languages: [
      {
        name: "Golang"
      }
    ],
    buttons: [
      {
        name: VIEW_CODE,
        url: `${url}wabot`,
      },
    ],
  },
  {
    title: "wabot-web",
    description: "Dashboard for monitoring campaings imported in the wabot-api. Also, see the response messages and the total of messages sent",
    languages: [
      {
        name: "Laravel"
      },
      {
        name: "MySQL"
      },
      {
        name: "Vue.js"
      }
    ],
    buttons: [
      {
        name: VIEW_CODE,
        url: `${url}wabot-web`,
      },
    ],
  },
  {
    title: "stock-clask",
    description:
      "Application to simulate stock buy and selling on the Stock Exchage. The idea was to be used between friends in a challenging way (with the score of who makes more profit)",
    languages: [
      {
        name: "Laravel"
      },
      {
        name: "MySQL"
      }
    ],
    buttons: [
      {
        name: VIEW_CODE,
        url: `${url}stock-clash`,
      },
    ],
  },
  {
    title: "Other projects",
    description: "You can view all my other projects on GitHub below", 
    languages: [
      
    ],
    buttons: [
      {
        url: `${url}?tab=repositories`,
        name: "Show projects",
      },
    ],
  },
];

export default projects;
