<script>
    import Logo from "../public/assets/Logo.svelte";
    import {createEventDispatcher} from 'svelte';


    export var component;

    const dispatch = createEventDispatcher();

    function dispHome() {

    }

</script>

<style>


    #pages li {
        display: inline;


    }

    #pages li span{
        background: #f4f4f4;
        color: #614051;
        border-radius: 15%;
        font-size: 2.8em;
        padding-left: .2em;
        padding-right: .2em;
        vertical-align: middle;
        font-family: Tahoma, Verdana, monospace ;


    }

    #pages{
        background: #8f5e77;
        margin:.4em;
        line-height: 4em;
    }



    .click {
        cursor: pointer;
    }

</style>

<div class=click id="logo" on:click={() => {dispatch('home');}}>
    <Logo/>
</div>

    <ul id=pages>

            <li >

            </li>
            <li>
                <span class=click on:click={() => {dispatch('home');}}>Home</span>
            </li>
            <li>
                <span class=click on:click={() => {dispatch('about')}}>About</span>
            </li>

    </ul>


