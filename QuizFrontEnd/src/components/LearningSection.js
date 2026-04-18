import React from 'react';

const topics = [
  {
    title: "Java Basics",
    content: `Java is a versatile, object-oriented programming language that runs on the JVM (Java Virtual Machine), providing platform independence through bytecode. It emphasizes write-once-run-anywhere, strong memory management via garbage collection, and a rich standard library.
    
Key Concepts:
- Classes & Objects: Class defines a blueprint; object represents an instance.
- Inheritance: Enables reuse and extension of classes with "is-a" relationships.
- Polymorphism: Objects can be processed uniformly through superclass references.
- Encapsulation: Hides internal data; access via getters/setters.
- Abstraction: Focuses on essential qualities, hiding complexity.
- Exception Handling: Structured error management using try, catch, finally, throws.
- Java Packages: Group related classes for modular design.
- Common Data Types: int, boolean, double, char, String and more.
- Control Flow: if-else, switch, loops (for, while, do-while).
- Collections Framework: Interfaces like List, Set, Map and classes like ArrayList, HashMap.
- Multithreading Basics: Creating concurrent applications through threads.
- Java I/O: Reading/writing data via streams and readers.

Familiarity with these provides a strong foundation to work with Java application development.`
  },
  {
    title: "SQL Fundamentals",
    content: `Structured Query Language (SQL) is essential for interacting with relational databases that organize data into tables consisting of rows and columns.

Core Components:
- Data Definition Language (DDL): Commands like CREATE, ALTER, DROP for managing tables and schemas.
- Data Manipulation Language (DML): SELECT, INSERT, UPDATE, DELETE to manipulate data.
- SELECT Statements: Retrieving columns; filtering with WHERE; ordering with ORDER BY
- JOIN Types: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN for combining tables.
- Aggregate Functions: COUNT, SUM, AVG, MIN, MAX for data summarization.
- GROUP BY and HAVING: Grouping data rows and filtering groups.
- Subqueries and Nested Queries: Using queries inside other queries.
- Indexing: Speeding up query execution.
- Normalization: Structuring tables to minimize redundancy.
- Transactions: Ensuring ACID properties with COMMIT and ROLLBACK.
- SQL Constraints: Primary Key, Foreign Key, Unique, Not Null to enforce data integrity.

Mastering these constructs enables effective data retrieval and manipulation critical for database-backed applications.`
  },
  {
    title: "Computer Networks",
    content: `Computer networks connect devices to enable communication and resource sharing. Understanding network fundamentals is key to grasping how data moves across systems.

Topics Covered:
- Network Types: LAN, WAN, MAN, PAN; their scale and uses.
- OSI Model: Seven layers (Physical, Data Link, Network, Transport, Session, Presentation, Application) describing network functions.
- TCP/IP Model: Four layers underpinning internet protocols.
- IP Addressing: IPv4 and IPv6 formats, subnetting concepts.
- Routing Protocols: Static vs dynamic routing; protocols like RIP, OSPF, BGP.
- Switching: Circuit vs packet switching.
- Transport Layer: TCP (connection-oriented, reliable) vs UDP (connectionless, fast).
- DNS: Translation of domain names to IP addresses.
- HTTP/HTTPS: Protocols for web communication.
- Network Hardware: Routers, switches, hubs, firewalls.
- Wireless Networking: Wi-Fi standards and security.
- Network Security Basics: Firewalls, VPNs, encryption techniques.

An in-depth grasp prepares you to understand data flow and connectivity in modern networks.`
  },
  {
    title: "Data Structures",
    content: `Data structures provide organized ways to store, retrieve, and manipulate data efficiently, which is vital for creating optimal algorithms.

Key Data Structures:
- Arrays: Fixed-size indexed collections supporting fast access.
- Linked Lists: Nodes linked via pointers, allowing dynamic size and efficient insertion/deletion.
- Stacks: LIFO structure useful in expression evaluation and backtracking.
- Queues: FIFO structure used in scheduling and buffering.
- Trees: Hierarchical structures; binary trees, binary search trees, and heaps.
- Graphs: Nodes connected via edges used in representing networks; types include directed, undirected, weighted.
- Hash Tables: Key-value pair mappings with fast average lookup.
- Algorithms Overview: Searching (linear, binary), Sorting (bubble, quick, merge).
- Complexity Concepts: Time and space complexity Big O notation.

Strong understanding of these structures improves problem-solving and algorithmic skills required in programming challenges.`
  },
  {
    title: "Web Technologies",
    content: `Web technologies collectively allow the creation, styling, and interactivity of web pages accessed through browsers.

Core Elements:
- HTML (HyperText Markup Language): Defines content structure using tags like div, p, a, img.
- CSS (Cascading Style Sheets): Controls presentation, layout, colors, and responsiveness.
- JavaScript: Adds dynamic behavior like form validation, event handling, and AJAX calls.
- DOM Manipulation: Changing document structure via scripting.
- HTTP Protocol: Basis for browser-server communication; methods like GET, POST.
- Responsive Design: CSS media queries for adapting to various screen sizes.
- Modern JS Concepts: ES6+ features such as arrow functions, promises, async/await.
- Frontend Frameworks Overview: React, Angular, Vue (basic knowledge).
- Web Security Basics: Cross-site scripting (XSS), cross-site request forgery (CSRF), HTTPS.
- Browser DevTools: Inspect, debug, and optimize web apps.

With this comprehensive knowledge, users can build modern, secure, and interactive websites.`  
  }
];


function LearningSection() {
  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ textAlign: 'center' }}>Learning Section</h2>
      <p style={{ textAlign: 'center' }}>This technical quiz covers the following topics. Please review them before taking the quiz.</p><br/><br/><br/><br/>

      {topics.map((topic, index) => (
        <div key={index} style={{ marginBottom: 20, padding: 15, border: "1px solid #ccc", borderRadius: 10, backgroundColor: "#E6D8C3" }}>
          <h1 style={{ textAlign: 'center' }}>{topic.title}</h1><br/><br/><br/>
          <p style={{ whiteSpace: 'pre-line' }}>{topic.content}</p>
        </div>
      ))}

    </div>
  );
}

export default LearningSection;
