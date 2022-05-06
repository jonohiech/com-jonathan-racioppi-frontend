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
        margin-right: 12vmin;
        margin-left: 12vmin;
        display: block;
        overflow: hidden;

    }


</style>

<NavBar/>

<div id="home" class="body">
    <Home/>
</div>
