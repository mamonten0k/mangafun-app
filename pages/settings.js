import Head from 'next/head';
import { Header } from '../components/modules';
import { UserSettings } from '../components/modules';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mangafun app</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <div className='container'>Main Page / Settings</div>
        <UserSettings />
      </main>
    </>
  );
}