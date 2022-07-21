<script>
  export let imageSource;
  export let name;
  export let capital;
  export let population;
  export let continent;
  export let timezone;
  export let map;
</script>

<style>
  .container {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
<div class="container">
  <div class="card" style="width: 18rem;">
  <img src={imageSource} class="card-img-top" alt="country-flag">
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Capital: {capital}</li>
    <li class="list-group-item">Population: {population}</li>
    <li class="list-group-item">Continent: {continent}</li>
    <li class="list-group-item">Timezone: {timezone}</li>
  </ul>
  <div class="card-body">
    <a href={map} class="card-link">Map</a>
  </div>
</div>
</div>