export default {
  getters: {
    getHistoryMini(state) {
      return [state.history[0], state.history[1]];
    },
    getHistory(state) {
      return state.history;
    },
    getRecommend(state) {
      return state.recommended;
    },
    getAllBook(state) {
      return state.listBook;
    },
  },
  state: {
    listBook: [
      {
        titleBook: {
          href: "#",
          title: "Price and Value: A Guide to Equity Market Valuation Metrics",
        },
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781484255520/",
        },
        rating: 5,
        authorBook: {
          href: "#",
          author: "George Calhoun",
        },
        description:
          "Understand how to use equity market metrics such as the price/earnings ratio (and other multiples) to value public and private enterprises. This essential book gives you the tools you need to identify and qualify investments and assess business strategy and performance.",
      },
      {
        titleBook: {
          href: "#",
          title:
            "Game Development with GameMaker Studio 2: Make Your Own Games with GameMaker Language",
        },
        rating: 2,
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781484250105/",
        },
        authorBook: {
          href: "#",
          author: "Sebastiano M. Cossu",
        },
        description:
          "Create games from start to finish while learning game design and programming principles using the GameMaker Studio 2 game engine and GameMaker Language (GML).",
      },
      {
        titleBook: {
          href: "#",
          title:
            "Pro Spring Security: Securing Spring Framework 5 and Boot 2-based Java Applications",
        },
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781484250525/",
        },
        rating: 3,
        authorBook: {
          href: "#",
          author: ["Massimo Nardone", "Carlo Scarioni"],
        },
        description:
          "Build and deploy secure Spring Framework and Spring Boot-based enterprise Java applications with the Spring Security Framework. This book explores a comprehensive set of functionalities to implement industry-standard authentication and authorization mechanisms for Java applications.",
      },
      {
        titleBook: {
          href: "#",
          title: "Clean Ruby: A Guide to Crafting Better Code for Rubyists",
        },
        rating: 0,
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781484255469/",
        },
        authorBook: {
          href: "#",
          author: "Carleton DiLeo",
        },
        description:
          "Learn how to make better decisions and write cleaner Ruby code. This book shows you how to avoid messy code that is hard to test and which cripples productivity. Author Carleton DiLeo shares hard-learned lessons gained from years of experience across numerous codebases both large and small. Each chapter covers the topics you need to know to make better decisions and optimize your productivity. Many books will tell you how to do something; this book will tell you why you should do it. Start writing code you love.",
      },
      {
        titleBook: {
          href: "#",
          title:
            "Query Store for SQL Server 2019: Identify and Fix Poorly Performing Queries",
        },
        rating: 0,
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781484250044/",
        },
        authorBook: {
          href: "#",
          author: ["Tracy Boggiano", "Grant Fritchey"],
        },
        description:
          "Apply the new Query Store feature to identify and fix poorly performing queries in SQL Server.",
      },
      {
        titleBook: {
          href: "#",
          title:
            "Building Scalable PHP Web Applications Using the Cloud: A Simple Guide to Programming and Administering Cloud-Based Applications",
        },
        rating: 3,
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781484252123/",
        },
        authorBook: {
          href: "#",
          author: "Jonathan Bartlett",
        },
        description:
          "Eliminate the guesswork involved in writing and deploying a cloud application. This step-by-step guide uses PHP to minimize the complexity of the code and setup, but the tools and techniques can be applied on any platform using any language. Everything that you need to jumpstart your application on the cloud is right here.",
      },
      {
        titleBook: {
          href: "#",
          title:
            "Hands-on Azure Boards : Configuring and Customizing Process Workflows in Azure DevOps Services",
        },
        rating: 1,
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781484250464/",
        },
        authorBook: {
          href: "#",
          author: ["Jonathan Bartlett", "Chaminda Chandrasekara"],
        },
        description:
          "Understand and explore the features and management of Azure Boards with this book, which also covers Azure Boards configuration and advanced administration. This book starts by setting up projects with Azure DevOps and gives an overview of Azure Boards and its features. You will then learn to set up team projects and how to effectively use Azure Boards to plan and execute work. ",
      },
    ],

    recommended: [
      {
        titleBook: {
          href: "#",
          title: "Learn TypeScript 3 by Building Web Applications",
        },
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781789615869/",
        },
        rating: 5,
        authorBook: {
          href: "#",
          author: ["George Calhoun", "Alexis Georges"],
        },
        description:
          "Understand how to use equity market metrics such as the price/earnings ratio (and other multiples) to value public and private enterprises. This essential book gives you the tools you need to identify and qualify investments and assess business strategy and performance.",
      },
      {
        titleBook: {
          href: "#",
          title: "Learning GraphQL",
        },
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781492030706/",
        },
        rating: 2,
        authorBook: {
          href: "#",
          author: ["Eve Porcello", "Alex Banks"],
        },
        description:
          "Understand how to use equity market metrics such as the price/earnings ratio (and other multiples) to value public and private enterprises. This essential book gives you the tools you need to identify and qualify investments and assess business strategy and performance.",
      },
      {
        titleBook: {
          href: "#",
          title: "Learning React, 2nd Edition",
        },
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781492051718/",
        },
        rating: 2,
        authorBook: {
          href: "#",
          author: ["Eve Porcello", "Alex Banks"],
        },
        description:
          "Understand how to use equity market metrics such as the price/earnings ratio (and other multiples) to value public and private enterprises. This essential book gives you the tools you need to identify and qualify investments and assess business strategy and performance.",
      },
      {
        titleBook: {
          href: "#",
          title: "Web Components in Action",
        },
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781617295775/",
        },
        rating: 3,
        authorBook: {
          href: "#",
          author: "Benjamin Farrell",
        },
        description:
          "Understand how to use equity market metrics such as the price/earnings ratio (and other multiples) to value public and private enterprises. This essential book gives you the tools you need to identify and qualify investments and assess business strategy and performance.",
      },
      {
        titleBook: {
          href: "#",
          title: "Programming TypeScript",
        },
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781492037644/",
        },
        rating: 5,
        authorBook: {
          href: "#",
          author: "Boris Cherny",
        },
        description:
          "Understand how to use equity market metrics such as the price/earnings ratio (and other multiples) to value public and private enterprises. This essential book gives you the tools you need to identify and qualify investments and assess business strategy and performance.",
      },
      {
        titleBook: {
          href: "#",
          title: "Learning WordPress REST API",
        },
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781786469243/",
        },
        rating: 2,
        authorBook: {
          href: "#",
          author: "Sufyan bin Uzayr",
        },
        description:
          "Understand how to use equity market metrics such as the price/earnings ratio (and other multiples) to value public and private enterprises. This essential book gives you the tools you need to identify and qualify investments and assess business strategy and performance.",
      },
      {
        titleBook: {
          href: "#",
          title: "Designing Data-Intensive Applications",
        },
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781491903063/",
        },
        rating: 2,
        authorBook: {
          href: "#",
          author: "Martin Kleppmann",
        },
        description:
          "Understand how to use equity market metrics such as the price/earnings ratio (and other multiples) to value public and private enterprises. This essential book gives you the tools you need to identify and qualify investments and assess business strategy and performance.",
      },
      {
        titleBook: {
          href: "#",
          title: "Python Crash Course, 2nd Edition",
        },
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781492071266/",
        },
        rating: 2,
        authorBook: {
          href: "#",
          author: " Eric Matthes",
        },
        description:
          "Understand how to use equity market metrics such as the price/earnings ratio (and other multiples) to value public and private enterprises. This essential book gives you the tools you need to identify and qualify investments and assess business strategy and performance.",
      },
    ],

    history: [
      {
        titleBook: {
          href: "#",
          title: "Python Crash Course, 2nd Edition",
        },
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781492071266/",
          alt: "image",
        },
        rating: 2,
        progress: 15,
        tag: "book",
        authorBook: {
          href: "#",
          author: " Eric Matthes",
        },
        description:
          "Understand how to use equity market metrics such as the price/earnings ratio (and other multiples) to value public and private enterprises. This essential book gives you the tools you need to identify and qualify investments and assess business strategy and performance.",
      },
      {
        titleBook: {
          href: "#",
          title: "WordPress Academy: Learn WordPress step by step",
        },
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781491990070/",
          alt: "image",
        },
        rating: 2,
        progress: 5,
        tag: "book",
        authorBook: {
          href: "#",
          author: "Chris Dixon",
        },
        description:
          "Understand how to use equity market metrics such as the price/earnings ratio (and other multiples) to value public and private enterprises. This essential book gives you the tools you need to identify and qualify investments and assess business strategy and performance.",
      },
      {
        titleBook: {
          href: "#",
          title: "WordPress 5 Complete - Seventh Edition",
        },
        imgBook: {
          href: "#",
          img: "https://learning.oreilly.com/library/cover/9781789532012/",
          alt: "image",
        },
        rating: 2,
        progress: 25,
        tag: "book",
        authorBook: {
          href: "#",
          author: "Chris Dixon",
        },
        description:
          "Understand how to use equity market metrics such as the price/earnings ratio (and other multiples) to value public and private enterprises. This essential book gives you the tools you need to identify and qualify investments and assess business strategy and performance.",
      },
    ],
  },
};
