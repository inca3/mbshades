<script>
  import Spinner from "../assets/shade-frame.png";
</script>

<div class="loading">
  <img src={Spinner} alt="loading" />
</div>

<style>
  .loading {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
  }
  img {
    max-width: 150px;
    -webkit-animation: spin 1s ease infinite;
    -moz-animation: spin 1s ease infinite;
    animation: spin 1s ease infinite;
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
