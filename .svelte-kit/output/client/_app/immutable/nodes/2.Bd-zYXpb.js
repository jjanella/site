import{a as w,t as b}from"../chunks/Zxz7OfLJ.js";import"../chunks/CZFlbmy6.js";import{L as I,p as k,M as T,N as S,O as x,P as A,Q as M,J as P,l as j,K as C,$ as O,R as L,S as N,T as f,U as R}from"../chunks/w9TiaPO3.js";import{h as D}from"../chunks/CEUsAAFn.js";function H(r,i,t){I(()=>{var e=k(()=>i(r,t==null?void 0:t())||{});if(e!=null&&e.update){var n=!1,h={};T(()=>{var a=t();S(a),n&&x(h,a)&&(h=a,e.update(a))}),n=!0}if(e!=null&&e.destroy)return()=>e.destroy()})}function U(r,i,t){var e=M(r,i);e&&e.set&&(r[i]=t,A(()=>{r[i]=null}))}var _=b(`<div class="align-right card"><p id="HeyIm">Hey! My name is</p> <span id="jeremymaxxing"></span> <p style="padding: 10px;">An experienced full stack developer, cybersecurity enthusiast, and <span style="color: orangered;">Co-Op Computer Science Student at the University of Toronto</span> active in CTFs, hackathons, programming competitions, and indie developer of the soon-to-be-released game Subterstrike</p> <p>This site is still being ported! More of my projects are listed on my <a href="./resume.pdf">resume</a></p></div> <div class="align-left card"><h1>Subterstrike Game Development</h1> <p class="indent">I am currently developing an underground-submarine openworld multiplayer physics inspired game. As a gamer and enjoyer of large, rich maps and depth to gameplay, I would really like to say thats what I started out trying to create. Instead, the story goes that I had this random idea for terrain manipulation. Games like Minecraft and Terraria use squares and cubes, which just feels boring in my opinion. I thought I could do something much more <i>visceral</i> As a sort of tech-demo/proof of concept I programmed a shape that could be modified by boolean geomerty operations, mainly union and subtract with a second polygon. This led to a very interesting, but quickly boring "game" to hop around in. However, since I could drill through and place prettymuch any shape I wanted to, it felt like I could "fly" through the land, much like a submarine "flies" through water.<br><br>I implemented some modularly built vehicles with use of graphs theory and object oriented programming, and terrain generation using cellular noise. The reason I used cellular noise is because if you look at the lines between cells, they form a network without dead ends. Then by applying an algorithm using a density function on depth I am able to fine tune the width and density of the caves without impacting their interconnectedness. By using this method chunks can generate completely independant of their neighbor, which is optimal.<br><br>"Multiplayer is the hardest part of game dev, maybe release that later" I have been told by a lot of people. However, as a hobby-server configurer and network security nerd, I thought I could take it on. I was right, however as a network security nerd I have more layers of firewalls than I do braincells. Every single time I have an issue with networking, its a firewall. Once I found which ports were blocked, yes multiplayer was easy.<br><br>The result? I could fly drilling vehicles through terrain, pop out of the ground or into random caves, mine materials, play hide and seek with friends, and even orbit the planet. One of the things important to me in this game was accurate phyiscs: thrust, torque, gravity, mass, all the fun stuff. While I am a physics minor, I am more importantly a heavy player of physics and rocket science games such as Kerbal Space Program. I was able to glide through AP physics simply because it <i>just part of the games world</i>, it included everything we would learn in the classroom. Realistic phyiscs also added to the depth of gameplay I was looking for.<br><br> After some formal computer science education, I discovered new ways to more efficiently implement many of the algorithms I had initially generated and rewrote them ...multiple times. Currently everything runs <i>buttery smooth</i> and framerates are high due to efficienct caching of unloaded chunks, multithreaded chunk generation, gpu accelerated compute shaders to modify chunk density, enhanced use of object oriented programing and graph algorithms to build massive modular vehicles, authoritative server networking to disable hackers, and other performance tweaks.<br><br> So this sounds amazing, wheres the game? Well, a game needs graphics, audio, a sound track. As much as I'd love to release it now, its unplayable for these reasons along with a few minor implementations left such as NPC's and reworking the tech tree. Currently I am contracting a graphical artist and sound designer. Alpha tests have been a lot of fun, and investors have appeared. The finish line is close.</p></div> <div class="align-right card"><h1>Servers & Networking</h1> <p>Open source and networking hobbies led me to depoly a set of interconnected Linux servers:</p> <ul><li><h3>NGINX Reverse Proxy</h3> <p>This server is the internets access to all of my other servers, and the glue holding them together. Using IPTables traffic is forwarded from specified ports onto private servers connected to it.</p></li> <li><h3>Lightweight Server</h3> <p>Running on  Raspberry Pi, this servers main job is to run Subterstrike servers, Minecraft servers, other game servers, and this website you're looking at.</p></li> <li><h3>AI Server</h3> <p>A powerful computer with an RX 6950 XT GPU runs my local AI servers such as Stable Diffusion image generation, Ollama and Open-WebUI LLMs. As this is also my primary devices it contains a file server.</p></li></ul></div> <div class="align-left card"><h1>Work Experience</h1> <ul><li><h3>Software Developer</h3> <p>Parkside Pool needed to automate their systems, and I had already worked as the head lifeaurd and Director of Operations so I knew exactly what needed to be done. We needed to automate:</p> <ol><li>Receiving swimming lesson applications and payments</li> <li>Design schedules based on many parameters include age, level, class size, siblings in adjacent classes, given availibility, and more soft requirements</li> <li>Send swimming lesson application confirmations</li></ol> <p>Implementing the reception and confirmation of lessons was striaghtforward enough with a Flask site using Stripe for payments, and Firebase service for sending confirmation emails. The difficult part was building the schedule, which is a form of the <a href="https://en.wikipedia.org/wiki/Nurse_scheduling_problem">Nurse Scheduling Problem</a>. As there were at max a few hundred students per schedule, I solved this using a recursive algorithm and scoring system to choose the best generated option.</p></li></ul></div> <div class="align-right card"><h1>Volunteering</h1> <p>I volunteer within the Computer Science, Mathematics, and Statistics department at the University of Toronto as a Computer Science Ambassador to help cultivate interest in the Mathematical Sciences in high school students, as well as providing direction for first year students within the programs.</p></div>`,1);function G(r,i){P(i,!1);function t(a,d){let c=d,u=0,o=0,l="";const m=()=>{a.innerHTML="&#8203;"+l},y=s=>{setTimeout(()=>{m()},s)},p=()=>{const s=c[u],v=s[o]===" "?25:30;o<s.length?(l+=s[o++],setTimeout(p,v)):(y(3e3),setTimeout(g,6e3)),m()},g=()=>{o>0?(l=l.slice(0,--o),setTimeout(g,20)):(u=(u+1)%c.length,l="",setTimeout(p,1250)),m()};return setTimeout(p,250),{onDestroy(){},update(s){c=s}}}var e=_();D(a=>{O.title="Jeremy Janella | Computer Scientist"});var n=j(e),h=L(N(n),2);return H(h,(a,d)=>t==null?void 0:t(a,d),()=>["Jeremy Janella"]),f(4),R(n),f(8),w(r,e),U(i,"animateTyping",t),C({animateTyping:t})}export{G as component};
