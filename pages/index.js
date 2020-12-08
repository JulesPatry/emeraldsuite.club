import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from '../components/head';
import Nav from '../components/nav';

const Home = () => (
  <div>
    <Head title='Emerald Suite Club' />
    <Nav />

    <div className='hero'>
      <Image src='/emeraldsuite.gif' height={100} width={100} />
      <h1 className='title'>
        Welcome to <span className='emerald-color'>Emerald Suite LLC</span>.
      </h1>
      <p className='description'>
        Here you can find all of <a href='https://www.julespatry.com'>Jules Patry</a>'s creations.
        <br />
        All software listed below is created under the Emerald Suite LLC.
      </p>

      <div className='row'>
        <Link href='https://finishprobation.com'>
          <a className='card'>
            <Image src='/finishprobation-256-256.png' height={80} width={80} />
            <span className='card-content'>
              <h3>FinishProbation &rarr;</h3>
              <p>The probation management tool.</p>
            </span>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
        text-align: center;
        padding-top: 80px;
      }
      .title {
        margin: 0;
        width: 100%;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
        line-height: 1.5;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 380px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
        display: flex;
      }
      .card:hover {
        border-color: #00d688;
      }
      .card-content {
        margin-left: 16px;
      }

      .card h3 {
        margin: 0;
        color: #00d688;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }

      .emerald-color {
        color: #00d688;
      }
    `}</style>
  </div>
);

export default Home;
