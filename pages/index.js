import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/navbar'
import { axiosGet } from '@/utills/ApiCalls'
import American from '@/components/AmericanItems/American'

const inter = Inter({ subsets: ['latin'] })

export default function Home({americanItems, indianItems,japaneseItems ,italianItems ,australianItems , canadaItems}) {
  return (
    <>
      <Head>
        <title>Food Darbar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar /> */}
      <div className='home-section'>
        <div className='container'>

          <div className='row'>
            <div className='heading-div'>
              <h1 className='text-center'>Welcome to Food Darbar</h1>
              <div className='text-end'>
                <h4>The best place for your taste.</h4>
                <h4>We serves all kind of food and bevrages.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <American data={americanItems} />
    </>
  )
}

export async function getServerSideProps() {
  try {
    const americanItems = await axiosGet('american');
    const indianItems = await axiosGet('indian');
    const japaneseItems = await axiosGet('japanese');
    const italianItems = await axiosGet('italian');
    const australianItems = await axiosGet('australian');
    const canadaItems = await axiosGet('canadian');
    
    return {
      props: { americanItems, indianItems,japaneseItems ,italianItems ,australianItems , canadaItems }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { americanItems: {}, indianItems: {},japaneseItems: {},italianItems: {},australianItems: {}, canadaItems: {} }
    };
  }
}
