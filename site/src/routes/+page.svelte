
<div class="card">
    <p>Hey, I'm</p>
    <div id="display">
        <h1 id="jeremymaxxing">JEREMY JANELLA</h1>
    </div>
    <p>Computer nerd, gamer, mountain biker, adventurer</p>
</div>

<!-- <p>Computer Science Student, Interested in Cyber Security, Networiking, Open source, and always learning something new</p>-->

<!-- Game dev, servers experiements, cyberpatriot, linux, ai serversresume-->

<style>
    * {
        color: rgb(212 212 216);
        background-color: #222;
        font-family: sans-serif;
    }
    button {
        border-width: 0px;
        margin: 0px;
        padding: 16px;
        font-size: 1em;
    }

    #navbar {
        margin: 4px;
        border-radius: 12px;
    }

    #display {
        display: inline-block;
    }

    .card {
        margin: 8px;
        padding: 8px;
        border-radius: 12px;
    }

    #jeremymaxxing {
        font-weight: 800;
        font-size: clamp(2.5rem,7vw,4rem);
        line-height: 1.25;
        margin: 0px;
        text-shadow: 2px 1px orangered, -2px -1px cornflowerblue;
    }

    /* https://css-tricks.com/snippets/css/typewriter-effect/ */
    h1 {
        font-family: monospace;
        padding: 8px;
        display: inline-block;
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .1em solid orangered; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        /* margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        padding: 0px;
        animation: 
        typing 0.5s steps(16),
        blink 0.5s step-end infinite;
    }


    /* The typing effect */
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    /* The typewriter cursor effect */
    @keyframes blink {
        from, to { border-color: transparent }
        50% { border-color: orangered; }
    }

</style>
