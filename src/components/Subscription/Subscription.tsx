'use client';
import axios from 'axios';
import React, { FormEvent, useState } from 'react';

import styles from './Subscription.module.scss';

const Subscription: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [prevEmail, setPrevEmail] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (email === prevEmail) return;
    axios.post('/api/contact', { email })
    setPrevEmail(email);
    setEmail('');
  };

  return (
    <section className={styles.subscription}>
      <div className="flex flex-col justify-center items-center mx-auto max-w-7xl py-10 md:pt-20 md:pb-24">
          <h2 className="max-w-3xl px-5 md:py-0 text-xl md:text-2xl lg:text-4xl text-center font-bold capitalize">
            Donec ac elit rutrum, hendrerit purus at, accumsan 50%
          </h2>
        <form className={`flex-col md:translate-x-5 md:flex-row flex items-center relative mt-10 ${styles.form}`} onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email address"
            className={`w-80 md:w-full outline-none rounded-2xl py-4 px-5 ${styles['form-input']}`}
          />
          <button
            type="submit"
            className={`w-72 mt-5 md:mt-0 md:px-0 px-5 md:w-52 py-4 md:-translate-x-10 rounded-2xl ${styles['form-button']}`}
          >
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscription;
