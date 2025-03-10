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

<div id="name-card" class="align-right card">
    <p id="HeyIm">Hey! My name is</p>
    <span use:animateTyping={["Jeremy Janella"]} id="jeremymaxxing"></span>
    <p>An experienced full stack developer, cybersecurity enthusiest, and computer science student at the University of Toronto active in CTFs, hackathons, programming competitions, and indie developer of the soon-to-be-released game Subterworks</p>
    <p>This site is still being ported!</p>
    <!-- <p>Computer nerd, gamer, mountain biker, adventurer, hard sci-fi enjoyer, ethics enjoyer, swimmer, jumper</p> -->
</div>

<!-- <p>Computer Science Student, Interested in Cyber Security, Networiking, Open source, and always learning something new</p>-->

<!-- Game dev, servers experiements, cyberpatriot, linux, ai serversresume-->

<script lang="ts">
    export function animateTyping(node: HTMLElement, texts: string[]) {
	let textsToType = texts;

	let textsIndex = 0;
	let charIndex = 0;
	let currentText = '';

	const updateInnerHTML = () => {
		// Always include the zero-width space and conditionally add the text and cursor
		node.innerHTML = '&#8203;' + currentText;
	};

	const waitMsec = (delay: number) => {
		setTimeout(() => { updateInnerHTML();}, delay);
	};

	// Typing animation effect
	const typeEffect = () => {
		const currentString = textsToType[textsIndex];
		const delay = currentString[charIndex] === ' ' ? 25 : 30;

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
			currentText = ''; // Clear text but keep zero-width space
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
		}
	};
}
</script>