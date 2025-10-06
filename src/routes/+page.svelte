<!-- <p>Computer Science Student, Interested in Cyber Security, Networiking, Open source, and always learning something new</p>-->

<!-- Game dev, servers experiments, cyberpatriot, linux, ai serversresume-->

<script lang="ts">
	export function animateTyping(node: HTMLElement, texts: string[]) {
		let textsToType = texts;

		let textsIndex = 0;
		let charIndex = 0;
		let currentText = "";

		const updateInnerHTML = () => {
			// Always include the zero-width space and conditionally add the text and cursor
			node.innerHTML = "&#8203;" + currentText;
		};

		const waitMsec = (delay: number) => {
			setTimeout(() => {
				updateInnerHTML();
			}, delay);
		};

		// Typing animation effect
		const typeEffect = () => {
			const currentString = textsToType[textsIndex];
			const delay = currentString[charIndex] === " " ? 25 : 30;

			if (charIndex < currentString.length) {
				currentText += currentString[charIndex++];
				setTimeout(typeEffect, delay);
			} else {
				waitMsec(3000);
				setTimeout(deleteEffect, 6000); // Wait before starting to delete
			}

			updateInnerHTML();
		};

		// Deleting animation effect
		const deleteEffect = () => {
			if (charIndex > 0) {
				currentText = currentText.slice(0, --charIndex);
				setTimeout(deleteEffect, 20);
			} else {
				textsIndex = (textsIndex + 1) % textsToType.length;
				currentText = ""; // Clear text but keep zero-width space
				setTimeout(typeEffect, 1250);
			}

			updateInnerHTML();
		};

		// Start typing effect
		setTimeout(typeEffect, 250);

		return {
			onDestroy() {},
			update(newTexts: string[]) {
				textsToType = newTexts;
			},
		};
	}
</script>

<!-- <div id="navbar">
    <button>Home</button>
    <button>About</button>
    <!-- turning ideas into reality with tech -->
<!-- into gritty hard-scifi games -->
<!-- <button>Projects</button>
    <button>Hobbies</button>
    <button>Contact</button>
</div> -->

<svelte:head>
	<title>Jeremy Janella | Computer Scientist</title>
</svelte:head>

<div class="align-right card">
	<p id="HeyIm">Hey! My name is</p>
	<span use:animateTyping={["Jeremy Janella  "]} id="jeremymaxxing"></span>
	<p style="padding: 12px;">
		An experienced cybersecurity analyst and full stack developer with a
		certificate in penetration testing.
		<span style="color: orangered;">Co-Op Computer Science Student</span> at
		the <span style="color: orangered;"> University of Toronto</span> specializing
		in Software Engineering, with a major in statistics and minor in astrophysics.
		Active in CTFs, hackathons, programming competitions, and developing a videogame.
	</p>
	<p>
		This site is still being ported! More of my projects are listed on my <a
			href="./resume.pdf">resume</a
		>
	</p>
	<!-- <p>Computer nerd, gamer, mountain biker, adventurer, hard sci-fi enjoyer, ethics enjoyer, swimmer, jumper</p> -->
</div>

<div id="Game" class="align-left card">
	<h1>Game Development</h1>
	<div style="float: right; padding: 20px; width: 10vw;">
		<img
			src="/src/lib/game/chunkfunc.webp"
			style="width: max-content;"
			alt="Zoomed out chunk generation"
		/>
		<p class="center">Prototype terrain sample</p>
	</div>
	<p class="indent">
		I am currently developing an underground-submarine openworld multiplayer
		physics inspired game. As a gamer and enjoyer of large, rich maps and
		depth to gameplay, I would really like to say thats what I started out
		trying to create. Instead, the story goes that I had this random idea
		for terrain manipulation. Games like Minecraft and Terraria use squares
		and cubes, which just feels boring in my opinion. I thought I could do
		something much more <i>visceral</i> As a sort of tech-demo/proof of
		concept I programmed a shape that could be modified by boolean geometry
		operations, mainly union and subtract with a second polygon. This led to
		a very interesting, but quickly boring "game" to hop around in. However,
		since I could drill through and place prettymuch any shape I wanted to,
		it felt like I could "fly" through the land, much like a submarine
		"flies" through water.<br /><br />I implemented some modularly built
		vehicles with use of graphs theory and object oriented programming, and
		terrain generation using cellular noise. The reason I used cellular
		noise is because if you look at the lines between cells, they form a
		network without dead ends. Then by applying an algorithm using a density
		function on depth I am able to fine tune the width and density of the
		caves without impacting their interconnectedness. By using this method
		chunks can generate completely independent of their neighbor, which is
		optimal.<br /><br />"Multiplayer is the hardest part of game dev, maybe
		release that later" I have been told by a lot of people. However, as a
		hobby-server configurer and network security nerd, I thought I could
		take it on. I was right, however as a network security nerd I have more
		layers of firewalls than I do braincells. Every single time I have an
		issue with networking, its a firewall. Once I found which ports were
		blocked, yes multiplayer was easy.<br /><br />The result? I could fly
		drilling vehicles through terrain, pop out of the ground or into random
		caves, mine materials, play hide and seek with friends, and even orbit
		the planet. One of the things important to me in this game was accurate
		physics: thrust, torque, gravity, mass, all the fun stuff. While I am a
		physics minor, I am more importantly a heavy player of physics and
		rocket science games such as Kerbal Space Program. I was able to glide
		through AP physics simply because it
		<i>just part of the games world</i>, it included everything we would
		learn in the classroom. Realistic physics also added to the depth of
		gameplay I was looking for.<br /><br /> After some formal computer
		science education, I discovered new ways to more efficiently implement
		many of the algorithms I had initially generated and rewrote them
		...multiple times. Currently everything runs <i>buttery smooth</i> and
		framerates are high due to efficient caching of unloaded chunks,
		multithreaded chunk generation, gpu accelerated compute shaders to
		modify chunk density, enhanced use of object oriented programing and
		graph algorithms to build massive modular vehicles, authoritative server
		networking to disable hackers, and other performance tweaks.<br /><br />
		So this sounds amazing, where's the game? Well, a game needs graphics, audio,
		a sound track. As much as I'd love to release it now, its unplayable for
		these reasons along with a few minor implementations left such as NPC's and
		reworking the tech tree.
	</p>

	<div class="center">
		<img
			src="/src/lib/game/flying.webp"
			style="width: 100%; max-width: 600px"
			alt="Flying Vehicle"
		/>
		<p>A grid flying through caves</p>
	</div>
</div>

<div id="Servers" class="align-right card">
	<h1>Servers & Networking</h1>
	<p>
		Open source and networking hobbies led me to depoly a set of
		interconnected Linux servers:
	</p>
	<ul>
		<li>
			<h3>NGINX Reverse Proxy and VPN Server</h3>
			<p>
				This server is the internets access to all of my other servers,
				and the glue holding them together. I was using IPTables briefly
				but have moved to NGINX to forward traffic from specified ports
				onto private servers connected to it. This device doubles as a <a
					href="https://www.wireguard.com/">Wireguard VPN</a
				> server which in the past connected servers on the same virtual
				network, however I have switched to reverse ssh tunnels to connect
				other servers to this one. The VPN is still useful for odd networking
				tasks and troubleshooting.
			</p>
		</li>
		<li>
			<h3>Lightweight Server</h3>
			<p>
				Running on Raspberry Pi, this servers main job is to run
				Subterstrike servers, Minecraft servers, other game servers, and
				this website you're looking at.
			</p>
		</li>
		<li>
			<h3>AI & FTP Server</h3>
			<p>
				A powerful computer with an RX 6950 XT GPU runs my local
				generative AI servers including <a
					href="https://invoke-ai.github.io/InvokeAI/">Invoke AI</a
				>
				for Image Generation,
				<a href="https://ollama.com/?ref=useaiforit">Ollama</a>
				and <a href="https://docs.openwebui.com/">Open-WebUI</a> for LLM
				services. As this is also my primary device with a few spare
				terabytes of NVMe storage it contains a
				<a href="https://en.wikipedia.org/wiki/Vsftpd"
					>VSFTPD file server</a
				>. By the way, this server runs on
				<a href="https://archlinux.org/"><i>Arch Linux</i></a> :)
			</p>
		</li>
		<li>
			<h3>Derelict Laptop Promoted to Server</h3>
			<p>
				An ancient gaming laptop with significantly more computational
				performance than physical durability was promoted to server,
				where it runs my <a href="https://nextcloud.com/about/"
					>Nextcloud</a
				>
				self hosted office suite. While originally this was a 'because I
				can' project, I felt justified when I later saw
				<a
					href="https://www.digitaljournal.com/tech-science/microsoft-says-u-s-law-takes-precedence-over-canadian-data-sovereignty/article"
					>Microsoft announcing USA demands come before Canadian
					privacy</a
				>.
			</p>
		</li>
	</ul>
</div>

<div id="UAV" class="align-left card">
	<div style="float: right; padding: 20px; width: 10vw;">
		<img
			src="/src/lib/drone/graphing.jpg"
			style="width: 10vw;"
			alt="Testing Input Response"
		/>
		<p class="center">Testing Input Response</p>
		<img
			src="/src/lib/drone/top.jpg"
			style="width: 10vw;"
			alt="Internal View"
		/>
		<p class="center">Internal View</p>
	</div>
	<h1>Building a UAV</h1>
	<p>
		I chose to build a drone from scratch for my AP Physics final project.
		We were given an open ended assignment to <i>build something cool</i>
		and I wanted a drone. My choice was much more ambitious than the course required,
		and took quite a while to complete.<br /><br />

		For the drones frame I finally had an excuse to purchase a 3d printer. I
		modelled the frame and arms modularly to support future upgrades and
		replacements from damage, reducing the cost of operation. Initially I
		was using some 3d printed torodial propellers due to their higher
		efficiency and lower sounds usage. Due to safety concerns of the
		propellers not withstanding tension at higher RPMs and exploding I
		switched to some generic acrylic propellers I bought. A challenge in
		designing the frame was leaving enough room to contain the volume of the
		wires. I went with the Elegoo Neptune 3 as the printer was open-source
		and had a much better cost-to-utility than proprietary printers such as
		the Ender series. I am not sponsored I just really like the printer.<br
		/><br />

		The flight computer was the most difficult part to program. Using an
		ultrasonic distance sensor, gyroscope, and accelerometer the drone has
		enough information to probably never crash. The autopilot is implemented
		on an Arduino UNO using a
		<a
			href="https://en.wikipedia.org/wiki/Proportional%E2%80%93integral%E2%80%93derivative_controller"
			>PID controller</a
		>
		for stabolization. The autopilot quality is currently impacted every time
		the drones mass distribution changes, which can be fixed with a reinforcement
		machine learning algorithm. For the higher level programming such as flight
		automation, video transmission and WiFi communications I used a Raspberry
		Pi Pico. There is also a 2.4GHz line of sight receiver for manual control.
		A future upgrade may contain a SIM card for near-infinite remote control
		connection, but drone regulations would make this difficult.<br /><br />

		The power system is the most physically challenging portion of the
		drone. The motors took 14.6 Volts, while the UNO microcontroller took 5
		Volts, and the Pico and most sensors run at 3.3 Volts. All of the power
		to the motors ran through the power distribution board, which I modified
		to also output the lower voltages and used Bidirectional Logic Level
		Converters to shift between 3.3 and 5V signals where needed. A potential
		flaw with having all the power coming from the same source is spikes in
		energy consumption to the motors may cause the microcomputers to receive
		too little power, which could be fixed with a capacitor. Luckily, I
		haven't experienced this yet as the 2C discharge rate on the 2.5Ah
		capacity battery is more than enough. Having a battery this big does
		mean it takes up about half the internal electronics volume and is half
		of the drones mass, but it can also maintain full throttle for half an
		hour making for long flights.<br /><br />

		The motors I used were a bit overkill for a 1.1kg drone, as going past
		20% throttle sends it shooting through the sky -- which is not a bad
		issue to have. Here's the technical numbers behind that: I have
		propellers with a 6cm radius on motors with a 2450KV rating (2450 rpm
		per volt) at peaking at 14.6 Volts. From this the tip speed is computed
		to be ~225m/s under no load at max throttle, quite a lot more than what
		is safe or necessary to get into the air.
	</p>
</div>

<div id="Phobos" class="align-right card">
	<h1>Phobos</h1>
	<p>
		One of the coolest things I've developed is a game, fully written in
		assembly.<br /><br />
		I say this because it is the perfect intersection of many things I enjoy;
		low level programming, physics, space, simulation development, and game design.
		Also small enough of a project that I could complete it in under a couple
		of months, so another win. I even named the game based on the emulator, as
		Phobos is a moon of Mars <br /><br />The instructions for this
		assignment were very broad, to develop a platformer game in assembly.
		This left a lot of room for creative freedom, especially due to the
		loose definition of platformer. With infinite time I would have
		developed a whole rocket simulator, and used the justification that the
		launchpad was a platform.
		<br />
		<br /> On the technical side this was a very difficult project. There are
		only about 16 variables actually usable in MIPS, and a lot of them are reserved
		to specific logical controls under best practice. Then following the many
		loops and recursive, real-time functionality required extensive and efficient
		use of the stack. Ideally accessing a few bytes shouldn't strike the fear
		of low framerates to mind, but the Mars-MIPS emulator I was using was far
		from efficient.
	</p>
	<h3>Notable Features</h3>
	<ul>
		<li>Raycast collision detection and repositioning</li>
		<li>Sub-pixel velocity and positioning</li>
		<li>Awesome pixel graphics (the rocket shoots fire!)</li>
		<li>High framerates (for a low-performance emulator)</li>
		<li>Enemies shooting at you!</li>
		<li>Loot pickups</li>
	</ul>
	<p>
		Probably the most annoying part of this was that the emulator couldn't
		handle simutaineous key inputs. Fortunately I have over a thousand hours
		experience landing rockets on the <a
			href="https://kerbalspaceprogram.fandom.com/wiki/Mun">Mün</a
		>
		so I was comfortable giving a few unique key inputs per second. I never imagined
		this is something I would be proud, and I still don't think I am. However,
		it works.<br /><br />At this point you may have realized I am a bit of a
		space nerd. Enjoy this recording I made at 1am demonstrating the
		features of my game to a TA, compressed to the point that the audio has
		texture.
	</p>
	<video width="90%" controls>
		<track kind="captions" />
		<source src="src/lib/phobos/demo.mp4" type="video/mp4" />
		Your browser does not support the video.
	</video><br />
	The
	<a href="https://github.com/jjanella/Phobos">source code</a> is also available
	for your enjoyment.
</div>

<div class="align-left card">
	<h1>Work Experience</h1>
	<ul>
		<li>
			<h3>Cybersecurity Analyst for Equifax</h3>
			<ul>
				<li>Analyzed Security Posture, Business Risk, Compliance</li>
				<li>
					Supported Vulnerability Management sourced from Penetration
					Tests & automated tools
				</li>
				<li>Handled issues, exceptions, and deviations</li>
				<li>
					Provided Security Advisment Services for infrastructure and
					code development
				</li>
				<li>
					Used automated scanning tools, GCP, AWS, shell scripts,
					Linux
				</li>
			</ul>
		</li>
		<li>
			<h3>Software Developer for Parkside Pool</h3>
			<p>
				This is a role that didn't exist before me. I was a lifeguard
				and swim instructor here, and the pool I worked at was being
				swamped with administrative work. Eventually I took on this work
				for the money that came with it. For ten hours each week, I
				would be reading emails, co-ordinating lessons, and sending out
				schedules. Creating the schedules was a tedious task, with
				siblings at different levels needing back to back lessons,
				people not available some days or times, and other various soft
				and hard requirements. <br /><br /> Soon I found out there is no
				easy algorithm known for finding solutions to problems with many
				soft and hard requirements. This is a NP-hard and is described
				in the
				<a href="https://en.wikipedia.org/wiki/Nurse_scheduling_problem"
					>Nurse Scheduling Problem</a
				>. Fortunately there was a cap of 128 students I could fit into
				classes per week and the final algorithm was around O(n³) for n
				swimmers, so the runtime wasn't horrible. <br /><br />
				Implementing the reception and confirmation of lessons was straightforward
				enough with a Flask site using Stripe for payments, and Firebase
				service for sending confirmation emails.
			</p>
		</li>
	</ul>
</div>

<div class="align-right card">
	<h1>Volunteering</h1>
	<p>
		I volunteer within the Computer Science, Mathematics, and Statistics
		department at the University of Toronto as a Computer Science Ambassador
		to help cultivate interest in the Mathematical Sciences in high school
		students, as well as providing direction for first year students within
		the programs.
	</p>
</div>
