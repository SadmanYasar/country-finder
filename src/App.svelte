<script>
  import countries_services from "./services/countries.ts";
  import LoadingScreen from "./lib/LoadingScreen.svelte";
  import Card from "./lib/Card.svelte";

  let countries = [];
  let filters = [];
  let searchVal = "";
  let message = '';

  const populate = async () => {
    countries = await countries_services.getAllCountries();
  };

  $: {
    try {
      const match = new RegExp(searchVal.trim(), "i");
      filters = countries.filter(c => match.test(c.name.official));
      if (filters.length > 10) {
        message = "";
        filters = [];
      } else {
        message = `Found ${filters.length} results`;
      }
    } catch (error) {
      //do nothing
    }
  }
</script>

<style>
  main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  :global(body) {
    background-color: orange;
  }

  h1,
  p {
    padding-top: 20px;
  }

  input {
    width: 300px;
  }
</style>

<main>
    {#await populate()}
      <LoadingScreen />
    {:then results}
      <h1>Search a country</h1>
      <input bind:value={searchVal} />
      {#if message}
        <p>{message}</p>
      {/if}

      {#each filters as filter (filter.name.common)}
        <Card
          imageSource={filter.flags.png} 
          name={filter.name.official}
          capital={filter?.capital}
          population={filter.population}
          continent={filter.continents[0]}
          timezone={filter.timezones[0]}
          map={filter.maps.googleMaps} />
      {/each}

    {:catch error}
      <p>{error.message}</p>
    {/await}
    
</main>