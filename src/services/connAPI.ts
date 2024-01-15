const apiUrl = '';

async function fetchData(){
  try {
    const response = await fetch(apiUrl);

    if(!response.ok) {
      throw new Error(`Error: `)
    }
    const data = await response.json();
    console.log(data);

  } catch (error){
    console.log('Error fetching data: ', error);
  }
}

fetchData();
