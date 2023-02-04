let MAJOR_ARCANA = [
	{
		Card_id: 1,
		Card_name: 'THE FOOL',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'NEW BEGINNING, FEARLESSNESS, NAIVETY',
		Keywords_reversed: 'CARELESSNESS, IRRATIONALITY, DISTRACTION',
		Description_upright:
			'THE FOOL walks surely into adventure. They may not know what to expect, but change is coming — often for the better.',
		Description_reversed:
			'You cannot resist change, and THE FOOL knows this. Hesitation and insecurity may not be allowed to hinder progress.'
	},

	{
		Card_id: 2,
		Card_name: 'THE MAGICIAN',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'MASTERY, FOCUS, POWER',
		Keywords_reversed: 'INACTION, SELFISHNESS, UNDERUTILIZATION',
		Description_upright:
			'True power is accessed from within; THE MAGICIAN has everything they need to execute their plans and desires.',
		Description_reversed:
			'As they say, with great power comes great responsibility. That power may be hindered if THE MAGICIAN loses focus, either of their own goals or their environment.'
	},

	{
		Card_id: 3,
		Card_name: 'THE HIGH PRIESTESS',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'INTUITION, ONENESS, EMPATHY',
		Keywords_reversed: 'RESISTANCE, INFLUENCE, DENIAL',
		Description_upright:
			'Truth exists outside of the definite. THE HIGH PRIESTESS knows one must be open to hearing what is coming from within.',
		Description_reversed:
			'Outside sources cannot be allowed undue influence on your inner truth. Sometimes, THE HIGH PRIESTESS can only be heard in moments of solitude.'
	},

	{
		Card_id: 4,
		Card_name: 'THE EMPRESS',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'ABUNDANCE, FERTILITY, NURTURING',
		Keywords_reversed: 'DEPENDENCE, FUTILITY, CONTROL',
		Description_upright:
			'THE EMPRESS embodies motherhood and femininity, literally and figuratively. Find life in nature, beauty, creation.',
		Description_reversed:
			'To flourish, THE EMPRESS must at times let go and care for themselves. Replenish and trust that the world will carry on.'
	},

	{
		Card_id: 5,
		Card_name: 'THE EMPEROR',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'STRUCTURE, AUTONOMY, AUTHORITY',
		Keywords_reversed: 'DOMINATION, INFLEXIBILITY, ABSENCE',
		Description_upright:
			'THE EMPEROR provides stability and clear leadership. Experience and organization can create calm within chaos.',
		Description_reversed:
			'Balance is required from THE EMPEROR. Too much rigidity, and structure becomes a prison. Too little, and it leaves those it’s meant to protect exposed.'
	},

	{
		Card_id: 6,
		Card_name: 'THE HIEROPHANT',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'TRADITION, MENTORSHIP, EDUCATION',
		Keywords_reversed: 'INDIVIDUALITY, CONFIDENCE, EVOLUTION',
		Description_upright:
			'Trust in the guidance of THE HIEROPHANT. Traditional knowledge can ground and guide you, making a difficult path familiar.',
		Description_reversed:
			'THE HIEROPHANT has taught all it can; it’s time to strike out and discover the truth for yourself, even if it goes against the status quo.'
	},

	{
		Card_id: 7,
		Card_name: 'THE LOVERS',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'PARTNERSHIP, DUALITY, CHOICE',
		Keywords_reversed: 'CONFLICT, ASYMMETRY, SELF-DOUBT',
		Description_upright:
			'Vulnerability flows from THE LOVERS. It is that honesty — and the decision to receive their partner’s honesty — that empowers their unification.',
		Description_reversed:
			'For a union to work, THE LOVERS must be in alignment. Unequal investment, insecurity, or disparate values stand in the way of this.'
	},

	{
		Card_id: 8,
		Card_name: 'THE CHARIOT',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'TRIUMPH, WILLPOWER, FOCUS',
		Keywords_reversed: 'SUBMISSION, REDIRECTION, COMMITMENT',
		Description_upright:
			'Strength, determination, and a grounded approach carries THE CHARIOT through obstacles. Now is the time for steadfast action.',
		Description_reversed:
			'The warrior is meant to drive THE CHARIOT, not the other way around. It is time to grab hold of the reins and assess the roadblocks, or the path itself.'
	},

	{
		Card_id: 9,
		Card_name: 'STRENGTH',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'CALM, DISCIPLINE, INFLUENCE',
		Keywords_reversed: 'VULNERABILITY, REST, AGGRESSION,',
		Description_upright:
			'Internal STRENGTH keeps the beast in check. Know the challenges, internal and external, and remember that there are solutions outside brute force.',
		Description_reversed:
			'It requires STRENGTH to follow the best course of action, even if that might mean hurt pride or retreat. Of course, humility and self-deprecation cannot be conflated.'
	},

	{
		Card_id: 10,
		Card_name: 'THE HERMIT',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'SELF-DISCOVERY, INTROSPECTION, SECLUSION',
		Keywords_reversed: 'ISOLATION, PERSUASION, NAVEL-GAZING',
		Description_upright:
			'THE HERMIT retreated to heal and gain perspective. Allowing in outside forces may disrupt this process.',
		Description_reversed:
			'Both allowing for too much influence and denying one’s place within the universal collectiveness distort the truth. THE HERMIT must be intentional in their respite.'
	},

	{
		Card_id: 11,
		Card_name: 'WHEEL OF FORTUNE',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'LUCK, DESTINY, MOVEMENT',
		Keywords_reversed: 'DIFFICULTY, RESPONSIBILITY, STAGNATION',
		Description_upright:
			'Change is ahead. It may be difficult or confusing, but the WHEEL OF FORTUNE indicates a positive outcome.',
		Description_reversed:
			'The WHEEL OF FORTUNE is not at your side at the moment. However hard or unfair it may seem, now is the time to reflect on past choices and move onward.'
	},

	{
		Card_id: 12,
		Card_name: 'JUSTICE',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'FAIRNESS, TRUTH, BALANCE',
		Keywords_reversed: 'BLAME, DECEIT, ONE-SIDEDNESS',
		Description_upright:
			'JUSTICE calls for honesty and consequence. Recognize the effects of your decisions, and value the integrity of those around you.',
		Description_reversed:
			'JUSTICE depends on honest individuals and is hindered by attempts to avoid responsibility; this only draws out the consequences.'
	},

	{
		Card_id: 13,
		Card_name: 'THE HANGED MAN',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'PATIENCE, SURRENDER, PERSPECTIVE',
		Keywords_reversed: 'BURN OUT, FRUSTRATION, ACTIVATION',
		Description_upright:
			'In inaction, a new perspective brought peace to THE HANGED MAN. Accept slowing momentum as a chance for reflection.',
		Description_reversed:
			'THE HANGED MAN cannot resist the ebb and flow of the universe. Both resisting the need for a break or the call to action will result in pain.'
	},

	{
		Card_id: 14,
		Card_name: 'DEATH',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'TRANSFORMATION, CLOSURE, ENDINGS',
		Keywords_reversed: 'LIMBO, GROWTH, PRIVACY',
		Description_upright:
			'All things end; DEATH assures this. By closing the door on what has passed, attention can be turned towards new opportunities.',
		Description_reversed:
			'Resisting DEATH never pays off. Assess next steps — perhaps privately — and embrace change.'
	},

	{
		Card_id: 15,
		Card_name: 'TEMPERANCE',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'MODERATION, PURPOSE, BALANCE',
		Keywords_reversed: 'EXCESS, BLOCKING, ADJUSTMENT',
		Description_upright:
			'Under TEMPERANCE, walking the middle path brings the best results. Take in the forces around you without allowing too strong a reaction.',
		Description_reversed:
			'Something is out of balance. TEMPERANCE calls for indulgences to be assessed. There may also be tension between internal priorities and the outer world.'
	},

	{
		Card_id: 16,
		Card_name: 'THE DEVIL',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'ENTRAPMENT, NEGATIVITY, INDULGENCE',
		Keywords_reversed: 'ENLIGHTENMENT, AWARENESS, RELEASE',
		Description_upright:
			'THE DEVIL comes from within. Cheap pleasures can distract from true satisfaction, generating only more desire. The cycle deepens the longer it is unbroken',
		Description_reversed:
			'Do not fear yourself. Knowing THE DEVIL empowers you to break free from cycles that no longer serve you, whether they’re bad habits or inner fears.'
	},

	{
		Card_id: 17,
		Card_name: 'THE TOWER',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'UPHEAVAL, CHAOS, DISSOLUTION',
		Keywords_reversed: 'RENEWAL, PREPARATION, FREE WILL',
		Description_upright:
			'Lightning has struck THE TOWER. A radical shift lingers in the air; the tower will fall.',
		Description_reversed:
			'THE TOWER is crumbling, no matter what you do. Now is the time to accept this and make your plans.'
	},

	{
		Card_id: 18,
		Card_name: 'THE STAR',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'HEALING, OPTIMISM, RENEWAL',
		Keywords_reversed: 'HOPELESSNESS, TRIAL, DISENGAGED',
		Description_upright:
			'THE STAR shines through turmoil. Now is the time to build with hope, faith and inspiration, and know it will pay off.',
		Description_reversed:
			'Though it feels like its light is gone, THE STAR can still be found by investing in yourself. Work to find — or make — the positives of this moment.'
	},

	{
		Card_id: 19,
		Card_name: 'THE MOON',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'UNCERTAINTY, FEAR, DREAMS',
		Keywords_reversed: 'CLARITY, CONFRONTATION, ATTENTION',
		Description_upright:
			'Past events reflecting off THE MOON are distorting the path. Trust its true light and your intuition to work past limiting beliefs.',
		Description_reversed:
			'THE MOON highlights a path. Even if you are not ready to follow it, now is the time to better understand what blocks the way.'
	},

	{
		Card_id: 20,
		Card_name: 'THE SUN',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'JOY, ENERGY, SUCCESS',
		Keywords_reversed: 'RELEASE, SETBACKS, EGO',
		Description_upright:
			'As THE SUN burns through any clouds, it reveals an abundance of beauty for all to discover and revel in.',
		Description_reversed:
			'It is time to step into THE SUN. If not today, then soon. Attempt to minimize anything standing in your way, including those in your own mind.'
	},

	{
		Card_id: 21,
		Card_name: 'JUDGMENT',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'EVALUATION, ABSOLUTION, AWAKENING',
		Keywords_reversed: 'HESITANCY, CRITICISM, INACTION',
		Description_upright:
			'You are at a crossroads and hear the call — JUDGMENT compels you to reflect on past experiences and make the decision that will determine the next phase.',
		Description_reversed:
			'Self-doubt cannot stand in the way of JUDGMENT’s call. Now is the time to act, and do so with confidence.'
	},

	{
		Card_id: 22,
		Card_name: 'THE WORLD',
		Reversed: false,
		Image: BLOB,
		Keywords_upright: 'WHOLENESS, UNITY, FULFILLMENT',
		Keywords_reversed: 'COMPLETION, SHORT-CUTS, MOTIVATION',
		Description_upright:
			'All is unified within THE WORLD. Now is the time to reflect, either on your accomplishments to this point or what must be done to bring you closer to the finish line.',
		Description_reversed:
			'The last mile may be the hardest, but THE WORLD calls for care at all points. Tie up all loose ends for the best result.'
	}
];
