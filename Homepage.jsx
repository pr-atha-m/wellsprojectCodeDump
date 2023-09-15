import React from 'react';
import './App.css';

function Card({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Article({ title, content }) {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Finshot Bank</h1>
      </header>
      <section className="cards">
        <Card
          title="Account Balance"
          description="Check your account balance and recent transactions."
        />
        <Card
          title="Transfer Money"
          description="Send money to friends and family securely."
        />
        <Card
          title="Savings Account"
          description="Start saving for your future with our high-interest savings accounts."
        />
        <Card
          title="Loan Services"
          description="Explore our loan options to meet your financial needs."
        />
      </section>
      <hr />
      <section className="articles">
        <Article
          title="10 Tips for Managing Your Finances"
          content="Read our expert advice on managing your money effectively."
        />
        <Article
          title="Introducing Finshot Mobile App"
          content="Learn about the features and benefits of our mobile banking app."
        />
        <Article
          title="Stay Secure with Finshot"
          content="Discover how we keep your financial information safe."
        />
        <Article
          title="Investing with Finshot"
          content="Explore investment opportunities with our expert guidance."
        />
        <Article
          title="Customer Support"
          content="Find answers to common questions and get in touch with our support team."
        />
      </section>
    </div>
  );
}

export default App;
