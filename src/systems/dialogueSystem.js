import { soundManager } from '../utils/soundManager';

export class DialogueSystem {
	constructor() {
		this.container = document.getElementById('dialogue-container');
		this.textElem = document.getElementById('dialogue-text');
		this.dialogues = [
			"Shadow! It's Jackie, calling from the nest. The eaglets are hungry - time to hunt!",
			"You're soaring above Big Bear Valley. Our Jeffrey pine nest is your home base.",
			"Check your display - SPEED on the left shows how fast you're flying, ALTITUDE on the right.",
			"The compass at the top shows your heading. Use it to navigate back to the lake for fish.",
			"Your talons are ready! Use TALON STRIKE for quick catches, or DIVE ATTACK for bigger prey.",
			"Use 'W' and 'S' to control your wing speed. Glide to conserve energy.",
			"Control your flight with ARROW keys for pitch and roll. 'A' and 'D' for turning.",
			"Press SPACE to power dive - you can reach incredible speeds swooping down!",
			"Switch hunting modes with '1', '2', or 'Q'. Press 'F' or ENTER to strike!",
			"Watch out for ravens! Press 'V' to screech and scare them away from our territory.",
			"The territory map shows prey and ravens nearby. Hunt the fish in Big Bear Lake!",
			"Good hunting, Shadow! Bring food back for our eaglets. Jackie, out."
		];
		this.currentIndex = 0;
		this.isActive = false;
		this.isPaused = false;
		this.currentCharIndex = 0;
		this.isWaitingForNext = false;
		this.lastSoundIndex = -1;
		this.glitchSounds = [
			'glitch-1',
			'glitch-2',
			'glitch-3',
			'glitch-4'
		];
	}

	start() {
		if (localStorage.getItem('tutorialCompleted')) return;

		this.stop();

		this.currentIndex = 0;
		this.currentCharIndex = 0;
		this.isActive = true;
		this.isPaused = false;
		this.isWaitingForNext = false;

		this.startTimeout = setTimeout(() => {
			if (!this.isActive || this.isPaused) return;
			this.container.classList.remove('hidden');
			this.showNext();
		}, 7000);
	}

	pause() {
		if (!this.isActive) return;
		this.isPaused = true;
		this.container.classList.add('hidden');
		if (this.startTimeout) clearTimeout(this.startTimeout);
		if (this.typewriterTimeout) clearTimeout(this.typewriterTimeout);
		if (this.nextTimeout) clearTimeout(this.nextTimeout);
	}

	resume() {
		if (!this.isActive || !this.isPaused) return;
		this.isPaused = false;
		this.container.classList.remove('hidden');

		if (this.isWaitingForNext) {
			this.nextTimeout = setTimeout(() => {
				this.currentIndex++;
				this.currentCharIndex = 0;
				this.showNext();
			}, 2000);
		} else {
			this.typeWriter();
		}
	}

	stop() {
		this.isActive = false;
		this.isPaused = false;
		this.container.classList.add('hidden');
		if (this.startTimeout) clearTimeout(this.startTimeout);
		if (this.typewriterTimeout) clearTimeout(this.typewriterTimeout);
		if (this.nextTimeout) clearTimeout(this.nextTimeout);
	}

	showNext() {
		if (!this.isActive || this.isPaused) return;

		if (this.currentIndex >= this.dialogues.length) {
			this.finish();
			return;
		}

		this.textElem.textContent = '';
		this.currentCharIndex = 0;
		this.isWaitingForNext = false;

		this.playRandomGlitch();
		this.typeWriter();
	}

	typeWriter() {
		if (!this.isActive || this.isPaused) return;

		const text = this.dialogues[this.currentIndex];
		if (this.currentCharIndex < text.length) {
			this.textElem.textContent = text.substring(0, this.currentCharIndex + 1);
			this.currentCharIndex++;
			this.typewriterTimeout = setTimeout(() => this.typeWriter(), 30);
		} else {
			this.isWaitingForNext = true;
			this.nextTimeout = setTimeout(() => {
				this.currentIndex++;
				this.currentCharIndex = 0;
				this.showNext();
			}, 4000);
		}
	}

	playRandomGlitch() {
		let index;
		do {
			index = Math.floor(Math.random() * this.glitchSounds.length);
		} while (index === this.lastSoundIndex);

		this.lastSoundIndex = index;
		soundManager.play(this.glitchSounds[index]);
	}

	skip() {
		if (!this.isActive || this.isPaused) return;

		const text = this.dialogues[this.currentIndex];
		if (!text) return;

		if (!this.isWaitingForNext) {
			if (this.typewriterTimeout) clearTimeout(this.typewriterTimeout);
			this.textElem.textContent = text;
			this.currentCharIndex = text.length;
			this.isWaitingForNext = true;

			if (this.nextTimeout) clearTimeout(this.nextTimeout);
			this.nextTimeout = setTimeout(() => {
				this.currentIndex++;
				this.currentCharIndex = 0;
				this.showNext();
			}, 4000);
		} else {
			if (this.nextTimeout) clearTimeout(this.nextTimeout);
			this.currentIndex++;
			this.currentCharIndex = 0;
			this.showNext();
		}
	}

	finish() {
		this.isActive = false;
		this.container.classList.add('hidden');
		localStorage.setItem('tutorialCompleted', 'true');
	}
}
