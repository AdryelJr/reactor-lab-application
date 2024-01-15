const apiUrl = 'https://api-reactor.vercel.app/';

async function fetchData(){
  try {
    const response = await fetch(apiUrl);

    if(!response.ok) {
      throw new Error(`Error: `)
    }

    const data = await response.json();
  } catch (error){
    console.log('Error fetching data: ', error);
  }
}

fetchData();
