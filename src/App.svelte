<script>
import Home from './Home.svelte'
import NavBar from "./NavBar.svelte";
</script>

<style>
    :global(body){
        background: #614051;
                      }
    #home{
        background: #f1eaee;
        margin-right: 30%;
        margin-left: 30%;
        display: block;
        overflow: auto;

    }
</style>

<NavBar/>

<div id="home">
    <Home/>
</div>
