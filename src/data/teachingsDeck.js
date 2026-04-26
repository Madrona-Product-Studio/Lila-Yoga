/**
 * teachingsDeck.js — Lila Teachings Level 2: Traditions & Teachings
 * ═════════════════════════════════════════════════════════════════
 *
 * 30 concept cards across 5 principles × 7 traditions. Content populated from
 * the design session — all fields complete.
 *
 * Card schema: two-faced flip cards organized by principle, with tradition
 * attribution on each card.
 */

// ═══════════════════════════════════════════════════════════════════════════════
// PRINCIPLES — five-principle taxonomy organizing the deck
// ═══════════════════════════════════════════════════════════════════════════════

export const PRINCIPLES = [
  {
    id: 'presence',
    name: 'Presence',
    arc: 'See clearly',
    symbol: '◎',
    color: '#B8824A',
    chapterNumber: 'CHAPTER ONE',
    description: 'The practices in this chapter share one aim: clearing the lens. Across traditions — Hindu breath science, Buddhist meditation, Zen openness, Stoic clarity — the instruction is the same. Stop. Attend. See what is actually here before the mind adds its commentary. Presence is not a state to achieve. It is the ground beneath every other practice.',
    wild: 'Wilderness demands presence without asking for it. The trail that requires your full attention. The ridge where one wrong step has consequences. The dawn that arrives whether or not you are watching. Nature has always been the simplest teacher of attention.',
    practice: 'Notice the first thing that catches your eye this morning. Stay with it for three breaths before the mind names it.',
    concepts: ['Yamas', 'Prānāyāma', 'Zazen', 'Samādhi', 'Dichotomy of Control', 'Premeditatio Malorum'],
  },
  {
    id: 'oneness',
    name: 'Oneness',
    arc: 'Understand reality',
    symbol: '∞',
    color: '#2D6B6B',
    chapterNumber: 'CHAPTER TWO',
    description: 'Every tradition represented here arrives at the same recognition: separation is appearance, not fact. The Upanishads call it Tat tvam asi — thou art that. Buddhism calls it interbeing. Shinto sees kami in every river and stone. Different words, one seeing.',
    wild: 'In wilderness, the boundaries thin. The iron in the sandstone is the iron in your blood. The water in the river was the cloud, was the ocean, will be you. Step outside long enough and the argument for separation becomes difficult to maintain.',
    practice: 'Choose one thing in the landscape today. Trace everything that made it possible until you run out of edges.',
    concepts: ['Ātman is Brahman', 'Interbeing', 'Śūnyatā', 'Yin-Yang', 'Musubi', 'Kami'],
  },
  {
    id: 'flow',
    name: 'Flow',
    arc: 'Move with it',
    symbol: '≈',
    color: '#4A7A8A',
    chapterNumber: 'CHAPTER THREE',
    description: 'These teachings share a common recognition: reality is not still, and the wise response is not resistance. The Taoist moves with the grain. The Buddhist watches everything arise and pass. The Stoic loves what fate delivers. Flow is not passivity — it is the skill of reading what is actually happening and responding without friction.',
    wild: 'A river never forces its way to the sea. A tree grows toward light without a plan. The season turns without asking permission. In wild places, flow is the default — it is only the human mind that insists on forcing.',
    practice: 'Notice where you are pushing against something today. See what happens if you ease instead.',
    concepts: ['Wu Wei', 'Anicca', 'Zhuangzi', 'Pu', 'Te', 'Amor Fati'],
  },
  {
    id: 'compassion',
    name: 'Compassion',
    arc: 'Care deeply',
    symbol: '◇',
    color: '#A85C4A',
    chapterNumber: 'CHAPTER FOUR',
    description: 'The heart is not separate from wisdom — it is wisdom\'s instrument. These teachings orient the practitioner outward: toward the suffering of others, toward service without reward, toward love that asks nothing back. Compassion is not softness. It is the hardest discipline in every tradition that teaches it.',
    wild: 'In wild places, care becomes tangible. The trail maintained by hands you will never thank. The ecosystem held together by relationships you cannot see. The creature whose suffering is as real as yours. Compassion in nature is not abstract — it is the quality of attention you bring to what is alive around you.',
    practice: 'Notice one thing today that is struggling. Stay with it for a moment before moving on.',
    concepts: ['Mettā', 'Karuṇā', 'Bhakti', 'Seva', 'Virtue', 'Ubuntu'],
  },
  {
    id: 'reverence',
    name: 'Reverence',
    arc: 'Honor it all',
    symbol: '△',
    color: '#4A7A5A',
    chapterNumber: 'CHAPTER FIVE',
    description: 'Reverence is the natural response to what exceeds us — and the deliberate practice of cultivating that response. These teachings share the recognition that beauty, impermanence, and the sacred are not separate categories. The Shinto practice of purification before approaching what is holy. The Stoic meditation on death as the sharpener of presence. The Japanese aesthetic that finds beauty precisely in what is passing.',
    wild: 'Wilderness evokes reverence without instruction. The mountain that has been here for a hundred million years. The blossom that will last three days. The threshold where the tended world gives way to the wild. Something in us already knows how to respond. These teachings give that response a name.',
    practice: 'Find one thing today that has been here longer than you. Acknowledge it.',
    concepts: ['Misogi', 'Satoyama', 'Mono no Aware', 'Memento Mori', 'Wabi-sabi', 'Hózhó'],
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// TRADITIONS — lookup map for card attribution
// ═══════════════════════════════════════════════════════════════════════════════

export const TRADITIONS = {
  hinduism:     { id: 'hinduism',     name: 'Hinduism & Yoga', symbol: '\u0950\uFE0E' },
  buddhism:     { id: 'buddhism',     name: 'Buddhism',        symbol: '\u2638\uFE0E' },
  taoism:       { id: 'taoism',       name: 'Taoism',          symbol: '\u262F\uFE0E' },
  shinto:       { id: 'shinto',       name: 'Shinto',          symbol: '\u03A0' },
  stoicism:     { id: 'stoicism',     name: 'Stoicism',        symbol: '\u039B' },
  crosscultural:{ id: 'crosscultural',name: 'Cross-Cultural',  symbol: '\u2726\uFE0E' },
};

// ═══════════════════════════════════════════════════════════════════════════════
// THE 30 CARDS
// ═══════════════════════════════════════════════════════════════════════════════

export const CARDS = [
  // ─── PRESENCE ──────────────────────────────────────────────────────────────────
  {
    id: 'yamas', principle: 'presence', tradition: 'hinduism', name: 'Yamas', pronunciation: 'YAH-mahs', tag: 'ETHICAL FOUNDATION',
    teaching: 'Five restraints forming the moral foundation of yoga: non-violence, truthfulness, non-stealing, right use of energy, and non-possessiveness. Not rules handed down — observations about what creates suffering and what releases it.',
    origin: 'Codified by Patañjali as the first of eight limbs in the Yoga Sūtras (~2nd century CE). The outer practices that make the inner ones possible.',
    journey: 'In the wild, the Yamas clarify fast. Non-violence toward trail, animal, weather. Truthfulness about your limits. Non-possessiveness toward the view — you can\'t keep it, only meet it.',
    quote: 'Yoga is the cessation of the movements of the mind. Then there is abiding in the Seer\'s own form.',
    quoteAuthor: 'Patañjali, Yoga Sūtras 1.2',
    deepDive: {
      shape: 'list',
      items: [
        { term: 'Ahimsa', gloss: 'non-harming', description: 'In thought, word, and deed; toward self, other, and world.' },
        { term: 'Satya', gloss: 'truthfulness', description: 'Alignment between what is, what is known, and what is said.' },
        { term: 'Asteya', gloss: 'non-stealing', description: 'Of property, time, credit, attention, and the labor of others.' },
        { term: 'Brahmacharya', gloss: 'continence', description: 'Classically, sexual restraint. More broadly read: the disciplined use of generative energy.' },
        { term: 'Aparigraha', gloss: 'non-possessiveness', description: 'Keep only what is needed; release what grasps back.' },
      ],
    },
  },
  {
    id: 'pranayama', principle: 'presence', tradition: 'hinduism', name: 'Prānāyāma', pronunciation: 'prah-nah-YAH-mah', tag: 'BREATH SCIENCE',
    teaching: 'The conscious regulation of breath as a bridge between body and mind. Prana is life force; ayama is extension. To direct the breath is to direct attention itself.',
    origin: 'Fourth limb of Patañjali\'s eight-limbed path. Developed across thousands of years of yogic experimentation into dozens of distinct techniques, each with specific physiological and energetic effects.',
    journey: 'At altitude, in wind, after a hard climb — the breath becomes undeniable. Prānāyāma begins the moment you notice it. Slow the exhale. Feel what changes.',
    quote: 'When the breath is unsteady, the mind is unsteady. When the breath is steady, the mind is steady.',
    quoteAuthor: 'Hatha Yoga Pradīpikā 2.2 (paraphrase)',
    deepDive: {
      shape: 'list',
      items: [
        { term: 'Nādī Shodhana', gloss: 'alternate nostril', description: 'Balancing breath; steadies the nervous system.' },
        { term: 'Ujjayi', gloss: 'victorious breath', description: 'Soft throat constriction; anchors attention.' },
        { term: 'Bhastrikā', gloss: 'bellows breath', description: 'Rapid, forceful breathing; generates heat and energy.' },
        { term: 'Bhrāmarī', gloss: 'humming bee', description: 'Vibrating exhale; a shortcut to calm.' },
      ],
    },
  },
  {
    id: 'zazen', principle: 'presence', tradition: 'buddhism', name: 'Zazen', pronunciation: 'ZAH-zen', tag: 'SEATED MEDITATION',
    teaching: 'Literally \'seated meditation\' — the central practice of Zen Buddhism. Not doing. Not getting anywhere. Eyes open, spine upright, attention returned again and again to what is. Just this.',
    origin: 'Brought from China to Japan in the 12th–13th centuries by Eisai and Dōgen. Dōgen taught shikantaza — \'just sitting\' — as both the practice and the awakening simultaneously. Long periods of zazen alternate with kinhin, walking meditation.',
    journey: 'Find a flat rock. Sit with your spine upright and your eyes soft on the middle distance. Ten minutes. Don\'t try to clear the mind — just watch what arises. The wilderness does the rest.',
    quote: 'Think not-thinking. How do you think of not-thinking? Non-thinking. This is the essential art of zazen.',
    quoteAuthor: 'Dōgen, Fukanzazengi, quoting Chan master Yakusan Igen (745–828 CE)',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: "The instruction is almost embarrassingly simple. Sit upright. Keep the eyes soft and open. Let the breath breathe itself. When the mind wanders, return — without grading the return." },
        { text: "Dōgen taught shikantaza — just sitting — as both the method and the awakening. There is no state to reach. The sitting itself is what was being sought." },
        { text: "Everything you would try to fix with meditation will still be there when you stand up. The practice is meeting it without adding more." },
      ],
    },
  },
  {
    id: 'samadhi', principle: 'presence', tradition: 'hinduism', name: 'Samādhi', pronunciation: 'sah-MAH-dee', tag: 'ABSORPTION',
    teaching: 'The eighth and final limb of classical yoga — a state of complete absorption in which the boundary between observer and observed dissolves. Not trance. Total presence.',
    origin: 'Described in the Yoga Sūtras as the culmination of sustained practice. Samādhi is not achieved — it arises when all the conditions that obscure it are cleared away.',
    journey: 'You have touched this. A moment on a ridge when the thinking stopped and something simpler took over. That wasn\'t distraction — that was the direction.',
    quote: 'When the object of meditation alone shines forth, as if emptied of its own form, that is samādhi.',
    quoteAuthor: 'Patañjali, Yoga Sūtras III.3',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'Patañjali maps samādhi in stages. The broad divide: sabīja (with seed) — absorption that still holds an object. Nirbīja (seedless) — absorption with nothing held.' },
        { text: 'In the deepest absorption, the distinction between the one meditating, the act, and the object thins and drops — what Patañjali calls samāpatti (YS 1.41).' },
        { text: 'Samādhi is not something you manufacture. It is the fruit of long practice (abhyāsa) and letting go (vairāgya). The first seven limbs do the patient clearing. The eighth is what arises in the space they open.' },
      ],
    },
  },
  {
    id: 'dichotomy', principle: 'presence', tradition: 'stoicism', name: 'Dichotomy of Control', pronunciation: 'dy-KOT-oh-mee', tag: 'FOUNDATIONAL INSIGHT',
    teaching: 'The foundational Stoic insight: some things are in our power, some are not. In our power are our judgments, intentions, and responses. Not in our power are the body, reputation, outcomes, and the actions of others. Clarity about this distinction is freedom.',
    origin: 'The opening teaching of Epictetus\'s Enchiridion (~135 CE). Epictetus, a former slave, taught that inner freedom is available to anyone regardless of external circumstance — because freedom lives in what we choose, not in what happens to us.',
    journey: 'Weather, altitude, terrain, injury — none of it is yours to control on trail. Your pace, your attention, your response to what arises — all of it is. This is not resignation. It is clarity.',
    quote: 'Make the best use of what is in your power, and take the rest according to its nature.',
    quoteAuthor: 'Epictetus, Discourses I.1 (trans. George Long)',
    deepDive: {
      shape: 'list',
      items: [
        { term: 'Yours', gloss: 'to shape', description: 'Judgments, impulses, desires, aversions — what Epictetus calls "our own doing."' },
        { term: 'Not yours', gloss: 'to shape', description: 'Body, property, reputation, office, outcomes — what is not our own doing.' },
      ],
      closingParagraph: 'The work is returning attention, again and again, to the first column. The rest takes care of itself — or doesn\'t, and neither is up to you.',
    },
  },
  {
    id: 'premeditatio', principle: 'presence', tradition: 'stoicism', name: 'Premeditatio Malorum', pronunciation: 'preh-meh-dee-TAH-tee-oh mah-LOR-um', tag: 'NEGATIVE VISUALIZATION',
    teaching: 'The Stoic practice of mentally rehearsing what could go wrong — not to induce anxiety, but to dissolve it. By imagining the worst, you discover you can handle it. The anticipation of hardship removes its power to surprise.',
    origin: 'Taught by Seneca in his Letters to Lucilius and practiced systematically by Stoic philosophers. The morning practice: consider what difficulties might arise today and how you would respond with virtue intact.',
    journey: 'Before a hard route, a storm window, an uncertain crossing — run it through. Not to worry but to prepare. When it comes, you\'ve already met it.',
    quote: 'Let us prepare our minds as if we\'d come to the very end of life. Let us postpone nothing.',
    quoteAuthor: 'Seneca, On the Shortness of Life',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'The Stoic practice of mentally rehearsing what could go wrong — not to induce anxiety, but to remove its power to surprise. By imagining the worst, you discover you can handle it.' },
        { text: 'Seneca practiced it as a habitual discipline; Marcus Aurelius made it his morning ritual. The opening of Meditations 2.1: "At daybreak tell yourself — I shall meet with the busybody, the ungrateful, the arrogant, the deceitful, the envious."' },
        { text: 'When difficulty arrives unrehearsed, it surprises and overwhelms. When it has already been met in imagination, it arrives as familiar weather. You have already done the work.' },
      ],
    },
  },

  // ─── ONENESS ──────────────────────────────────────────────────────────────────
  {
    id: 'atman', principle: 'oneness', tradition: 'hinduism', name: 'Ātman is Brahman', pronunciation: 'AHT-man · BRAH-man', tag: 'CORE TEACHING',
    teaching: 'The central insight of Advaita Vedanta: the individual self and universal consciousness are not two things. The separation is real in experience but not in fact. This is not a metaphor.',
    origin: 'From the Chandogya Upanishad (~600 BCE) — \'Tat tvam asi: That thou art.\' Elevated as the cornerstone of Advaita Vedanta by the philosopher Adi Shankaracharya in the 8th century CE.',
    journey: 'Stand somewhere vast. Notice that awareness is looking out from inside the landscape, not at it from outside. That\'s not poetry. That\'s the teaching.',
    quote: 'The knower of Brahman becomes Brahman.',
    quoteAuthor: 'Mundaka Upanishad 3.2.9',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'On the Advaita Vedānta reading, most famously argued by Śaṅkara (8th c.), the innermost self and the ultimate ground of existence are not two things. What you are, at the deepest layer, is what everything is — seen from inside.' },
        { text: 'The Upaniṣads are read as stating this in four mahāvākyas, one from each Veda: Prajñānaṃ brahma (Aitareya 3.1.3). Aham brahmāsmi (Bṛhadāraṇyaka 1.4.10). Tat tvam asi (Chāndogya 6.8.7). Ayam ātmā brahma (Māṇḍūkya 2).' },
        { text: 'Other Vedānta schools read the same verses differently — Rāmānuja as qualified oneness, Madhva as eternal distinction. The non-dual reading is powerful and not universal.' },
      ],
    },
  },
  {
    id: 'interbeing', principle: 'oneness', tradition: 'buddhism', name: 'Interbeing', pronunciation: 'in-ter-BEE-ing', tag: 'DEPENDENT ORIGINATION',
    teaching: 'Nothing exists in isolation. A flower is composed entirely of elements that are not flowers — chlorophyll, sunlight, water. The same is true of you. To look deeply at any one thing is to see everything.',
    origin: 'Rooted in the Mahayana teaching of pratītyasamutpāda (dependent origination). The term \'interbeing\' was coined by Thich Nhat Hanh as a modern English rendering of this ancient principle.',
    journey: 'Breathe in at altitude. That air has been forest, ocean, lung of animal. You are not separate from what surrounds you — you are temporarily organized from it.',
    quote: 'This is, because that is. This is not, because that is not.',
    quoteAuthor: 'The Buddha, Samyutta Nikāya (idappaccayatā formula)',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'Thich Nhat Hanh\'s term, rooted in dependent origination (pratītyasamutpāda) and the Avataṃsaka teaching of mutual interpenetration. Nothing arises on its own. Everything that exists depends on conditions that are themselves not it.' },
        { text: 'Look deeply at any single thing — a flower, a thought, the person you think you are — and you find everything it is not. The boundary was always provisional.' },
        { text: 'You are not an object moving through the world. You are a pattern the world is temporarily organized into.' },
      ],
    },
  },
  {
    id: 'sunyata', principle: 'oneness', tradition: 'buddhism', name: 'Śūnyatā', pronunciation: 'shoon-YAH-tah', tag: 'EMPTINESS',
    teaching: 'The Mahayana teaching that all phenomena are empty of inherent, independent existence. Not nihilism — everything exists, but not in the fixed, self-contained way we assume. Form is emptiness; emptiness is form.',
    origin: 'Central to the Prajñāpāramitā literature, including the Heart Sutra. Systematized by Nāgārjuna (~150–250 CE) in his Mūlamadhyamakakārikā, which demonstrated through rigorous logic that no phenomenon, including the self, has inherent existence.',
    journey: 'Look at a canyon wall. It seems solid, permanent, itself. Now think of what it was — seabed, pressure, time. Now think of what it will be. The wall is real. But the \'wall\' is also a story.',
    quote: 'Form is emptiness, emptiness is form.',
    quoteAuthor: 'Heart Sutra (Prajñāpāramitāhṛdaya)',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { heading: 'Not nothing', text: 'Śūnyatā is not the claim that nothing exists. It is the claim that nothing exists independently — nothing has inherent being of its own.' },
        { heading: 'Two truths', text: 'Nāgārjuna taught that the Buddha\'s teaching works at two levels — the conventional (how we navigate daily life) and the ultimate (that nothing has inherent existence). Both are true. Neither cancels the other.' },
        { heading: 'The turn', text: 'The Heart Sūtra\'s line: "Form is emptiness; emptiness is form." The mountain is real. The "mountain" is also a story.' },
      ],
    },
  },
  {
    id: 'yinyang', principle: 'oneness', tradition: 'taoism', name: 'Yin-Yang', pronunciation: 'yin yahng', tag: 'COMPLEMENTARY FORCES',
    teaching: 'Two forces that are not opposites but complements — each containing the seed of the other. Neither is good or evil; together they create balance and harmony. Without dark, no light. Without rest, no effort.',
    origin: 'Pre-dates the Tao Te Ching in Chinese cosmology. Integrated into Taoist philosophy as the dynamic interplay through which the Tao expresses itself. Yin: receptive, dark, cool, inward. Yang: active, bright, warm, outward.',
    journey: 'A day on trail contains both — the hard ascent and the easy descent, the exposed ridge and the sheltered valley, the exertion and the rest. Neither is the destination. Both are the practice.',
    quote: 'One who knows the masculine, yet keeps to the feminine, becomes a ravine for the world.',
    quoteAuthor: 'Laozi, Tao Te Ching, Chapter 28 (trans. D.C. Lau)',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'Yin and yang are not good and evil. They are not even opposites — they are complements, each carrying the seed of the other.' },
        { text: 'Yin is receptive, dark, cool, inward. Yang is active, bright, warm, outward. Neither is the destination. Life happens at their interplay.' },
        { text: 'The idea predates Daoism — it is rooted in the Yijing and pan-Chinese cosmology; the Tao Te Ching mentions it only once (ch. 42). The familiar symbol — two halves curling into each other, each holding a dot of the other — is a much later diagram, systematized by the 11th-century Neo-Confucian Zhou Dunyi. The idea is older than the picture.' },
      ],
    },
  },
  {
    id: 'musubi', principle: 'oneness', tradition: 'shinto', name: 'Musubi', pronunciation: 'moo-SOO-bee', tag: 'GENERATIVE FORCE',
    teaching: 'Musubi is the generative force that creates and ties things together — the power that connects all living things to each other and to the kami. It is not an abstract principle but a living presence that can be felt in moments of genuine encounter.',
    origin: 'Among the first kami named in the Kojiki (712 CE) are Takami-musubi and Kami-musubi, two of the three primordial deities of creation. Musubi underlies all Shinto ceremony and understanding of relationship.',
    journey: 'The feeling of connection that comes after days in wilderness — to landscape, to companions, to something larger — is musubi working. Not metaphor. Recognition.',
    quote: 'Even the wishes of a small ant reach heaven.',
    quoteAuthor: 'Japanese proverb',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'Musubi is the generative force that binds things together — what makes separate elements become a living relationship. Not connection in the abstract. The actual pulse of it.' },
        { text: 'In the Kojiki (712 CE), two of the first three primordial deities carry the musubi element in their names: Takami-musubi and Kami-musubi. It is among the earliest named forces in Shinto cosmology.' },
        { text: 'You feel musubi working in moments of unexpected coherence. A trail-team that starts to move as one body. A conversation where the words arrive before you choose them.' },
      ],
    },
  },
  {
    id: 'kami', principle: 'oneness', tradition: 'shinto', name: 'Kami', pronunciation: 'KAH-mee', tag: 'SACRED PRESENCE',
    teaching: 'Kami are the sacred presences that animate the natural world — mountains, rivers, wind, ancient trees, and the forces that move through them. Not gods above nature in the Western sense, but the sacred quality within it.',
    origin: 'Central to all Shinto practice. The Kojiki (712 CE) and Nihon Shoki (720 CE) describe countless kami as fundamental sacred forces present from the beginning of existence. The expression yaoyorozu no kami — \'eight million kami\' — is a poetic term for \'innumerable,\' not a literal count.',
    journey: 'The ridge you stand on has been regarded as sacred by people for thousands of years before you arrived. It doesn\'t need your belief. It only asks your attention.',
    quote: 'Approach everything reverently.',
    quoteAuthor: 'Shinto teaching',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'Kami are often translated as gods, but the word does not mean what "God" means in the Abrahamic sense. Kami are not creators of the world ex nihilo, not all-ruling, not final judges — though specific kami do create, rule, and judge within the mythological record.' },
        { text: 'A mountain can be kami. A waterfall. A very old tree. An ancestor. A moment of awe itself. The phrase yaoyorozu no kami — eight million kami — is not a census. It is a poetic way of saying innumerable.' },
        { text: 'Kami do not require belief. They ask for attention. That is the whole theology.' },
      ],
    },
  },

  // ─── FLOW ─────────────────────────────────────────────────────────────────────
  {
    id: 'wuwei', principle: 'flow', tradition: 'taoism', name: 'Wu Wei', pronunciation: 'woo way', tag: 'EFFORTLESS ACTION',
    teaching: 'Often translated as \'non-action,\' wu wei does not mean doing nothing. It is action so well in accordance with things that the author leaves no trace in the work. The river doesn\'t force its way to the sea — it finds it.',
    origin: 'Central concept of the Tao Te Ching, Chapter 37. Elaborated in the Zhuangzi as a quality of serenity arising from alignment with nature\'s patterns rather than against them.',
    journey: 'A hard climb where you stop fighting the mountain and start reading it — that shift in your body is wu wei. The trail knows more than your plan does.',
    quote: 'The Tao never acts, yet nothing is left undone.',
    quoteAuthor: 'Laozi, Tao Te Ching, Chapter 37 (trans. D.C. Lau)',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'Wu wei does not mean doing nothing. It means acting so completely in accord with a situation that no friction is generated. The author leaves no trace in the work.' },
        { text: 'In the Tao Te Ching, wu wei names both a personal practice and a political ideal — the sage-ruler who governs by not-interfering. "The Tao never acts, yet nothing is left undone." Not passivity. Absence of forcing.' },
        { text: 'You know it in your body — the climb where you stop fighting the mountain and start reading it. The conversation where you stop preparing your reply and just listen. The shift, when it happens, is wu wei.' },
      ],
    },
  },
  {
    id: 'anicca', principle: 'flow', tradition: 'buddhism', name: 'Anicca', pronunciation: 'ah-NEE-chah', tag: 'IMPERMANENCE',
    teaching: 'Everything that arises passes away — thoughts, seasons, trails, relationships, the body itself. This is not a cause for despair but for presence. What is fleeting deserves full attention precisely because it is fleeting.',
    origin: 'One of the three marks of existence in Buddhist teaching, alongside non-self (anattā) and suffering (dukkha). Appears throughout the Pali Canon as a foundational observation about the nature of conditioned reality.',
    journey: 'In wild places, impermanence is visible without effort. The light changing on a canyon wall. The season turning. The trail that floods and rewrites itself. Let it teach what books can only describe.',
    quote: 'All conditioned things are impermanent — when one sees this with wisdom, one turns away from suffering.',
    quoteAuthor: 'Dhammapada 277 (trans. Buddharakkhita)',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'Anicca is one of the three marks of existence alongside dukkha (suffering) and anattā (non-self). Everything conditioned arises and passes — not eventually, but moment by moment.' },
        { text: 'The teaching is not a counsel of despair. It is an invitation to full attention, because what is fleeting only exists now. Presence is the only form of keeping.' },
        { text: 'Impermanence is not a problem to solve. It is the shape of reality, and the reason anything can ever be new.' },
      ],
    },
  },
  {
    id: 'zhuangzi', principle: 'flow', tradition: 'taoism', name: 'Zhuangzi', pronunciation: 'jwahng-dzuh', tag: 'THE FREE MIND',
    teaching: 'Zhuangzi taught through stories and paradox — a cook who butchers an ox by following its natural structure, a butterfly who wonders if it is dreaming of being a man. The free mind moves with life instead of against it.',
    origin: 'The Zhuangzi (4th–3rd century BCE) is the second foundational Taoist text alongside the Tao Te Ching. Where Laozi was spare and aphoristic, Zhuangzi was playful and subversive, using humor to dissolve fixed views.',
    journey: 'The mind that needs to know what\'s around the next bend, how far to the summit, what the weather will do — Zhuangzi is the medicine for that mind. Not certainty. Readiness.',
    quote: 'I do not know whether I was then a man dreaming I was a butterfly, or whether I am now a butterfly dreaming I am a man.',
    quoteAuthor: 'Zhuangzi, Chapter 2 (trans. Herbert Giles)',
    deepDive: {
      shape: 'list',
      items: [
        { term: 'Cook Ding', gloss: 'the ox', description: "After nineteen years, the cook's blade is still sharp. He cuts by following the spaces between joints, never forcing." },
        { term: 'Butterfly dream', gloss: 'the transformation of things', description: 'Zhuang Zhou dreams he is a butterfly. Waking, he wonders which one is dreaming the other. Zhuangzi calls this wuhua — things turning into things.' },
        { term: 'The useless tree', gloss: 'survival through uselessness', description: 'A gnarled tree is spared the axe because no one finds it good for lumber.' },
      ],
      closingParagraph: 'Each parable undoes a fixed view. Reading Zhuangzi is less about learning than about being gently loosened.',
    },
  },
  {
    id: 'pu', principle: 'flow', tradition: 'taoism', name: 'Pu', pronunciation: 'poo', tag: 'THE UNCARVED BLOCK',
    teaching: 'Pu (朴) — the uncarved block — represents original, unshaped nature before conditioning and convention impose their patterns. The block contains all possibilities precisely because nothing has been imposed on it yet.',
    origin: 'A key metaphor recurring in the Tao Te Ching (Chapters 15, 19, 28, 32, 37). Laozi taught that returning to this state of natural simplicity is the path of the sage — not through effort, but through releasing what has been accumulated.',
    journey: 'After enough days in wilderness, something softens. The roles, the performances, the accumulated personality — they quiet. What remains is closer to Pu. Not nothing. Original something.',
    quote: 'Return to the uncarved block.',
    quoteAuthor: 'Laozi, Tao Te Ching, Chapter 28',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'Pu (朴) is the uncarved block of wood — raw, unshaped, still containing every possibility. Once carved, the block becomes a specific thing and loses the others.' },
        { text: 'Laozi returns to this image throughout the Tao Te Ching (chs. 15, 19, 28, 32, 37). Not as metaphor, but as instruction: return to pu. Unlearn what was imposed. Recover what was given.' },
        { text: 'The sage is not a person who has accumulated wisdom. The sage is a person who has stopped accumulating, and found what was always underneath.' },
      ],
    },
  },
  {
    id: 'te', principle: 'flow', tradition: 'taoism', name: 'Te', pronunciation: 'duh', tag: 'INNER POWER',
    teaching: 'Te is the power of the Tao as it manifests in a particular being — the specific virtue, integrity, or inner force that allows a thing to be fully itself. A tree\'s te is its treeness. Your te is the authentic force that makes you who you are.',
    origin: 'The second character in \'Tao Te Ching\' — literally \'The Classic of the Way and Its Power.\' Te is a latent power that never lays claim to its achievements. It arises when nothing obstructs it.',
    journey: 'In wild places, te is visible in everything — the way a hawk rides thermals, a river finds grade, a tree grows toward light. None of it is trying. That\'s the point.',
    quote: 'A good traveler leaves no tracks.',
    quoteAuthor: 'Laozi, Tao Te Ching, Chapter 27 (trans. D.C. Lau)',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'Te (德) is the Tao as it manifests in a particular thing — the specific virtue, integrity, or force that allows a being to be fully itself. A tree\'s te is its treeness.' },
        { text: 'It is the second character in the book\'s title — often rendered "The Classic of the Way and Its Power" (Waley), though te has also been translated virtue, efficacy, or inner potency. Tao is the whole; te is how the whole shows up in each thing.' },
        { text: 'Te is visible when nothing obstructs it. A hawk riding a thermal. A river finding grade. Your own best hour, when you stopped performing and something authentic came through.' },
      ],
    },
  },
  {
    id: 'amorfati', principle: 'flow', tradition: 'stoicism', name: 'Amor Fati', pronunciation: 'AH-mor FAH-tee', tag: 'LOVE OF FATE',
    teaching: 'Not merely accepting what happens — loving it. The Stoics taught willing acceptance of fate as the path to tranquility. The Latin phrase amor fati was coined by Nietzsche, but the concept runs throughout Stoic writing: resistance to what is causes suffering; love of what is creates freedom.',
    origin: 'Embedded throughout Marcus Aurelius\'s Meditations and Epictetus\'s teachings. Friedrich Nietzsche named it explicitly in The Gay Science (1882): \'Amor fati: let that be my love henceforth.\'',
    journey: 'The weather that ruins your plan. The injury that changes your route. The summit you don\'t reach. Amor fati is not pretending these are good. It is finding what they make possible instead.',
    quote: 'All that is in accord with you is in accord with me, O World.',
    quoteAuthor: 'Marcus Aurelius, Meditations 4.23',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'Not mere acceptance. Love. The Stoics taught that resistance to what is causes suffering; willing embrace of what is creates freedom.' },
        { text: 'Epictetus put it plainly: "Do not seek to have events happen as you want them, but want them to happen as they do." The Latin phrase amor fati was coined later by Nietzsche — "Amor fati: let that be my love henceforth!" — but the disposition runs through Marcus Aurelius and Epictetus centuries earlier.' },
        { text: 'It is the hardest Stoic discipline because it asks more than patience with fate. It asks you to find what the difficulty makes possible, and to say yes to that.' },
      ],
    },
  },

  // ─── COMPASSION ───────────────────────────────────────────────────────────────
  {
    id: 'metta', principle: 'compassion', tradition: 'buddhism', name: 'Mettā', pronunciation: 'MET-tah', tag: 'LOVING-KINDNESS',
    teaching: 'Mettā is a Pali term referring to benevolence, loving-kindness, and active goodwill toward all beings. Within Buddhism, it is the first of the four Brahmaviharas — the immeasurable states. The practice begins with oneself and radiates outward without limit.',
    origin: 'Described in the Karanīya Metta Sutta of the Pali Canon. The formal meditation — silently repeating phrases of goodwill — developed within Theravāda Buddhism and has been transmitted widely in the West.',
    journey: 'On a summit or at a trailhead, try it. \'May I be well. May those I love be well. May all beings be well.\' It sounds simple. Meaning it — out loud, in the open — is something else.',
    quote: 'Radiate boundless love towards the entire world — above, below, and across — unhindered, without ill will, without enmity.',
    quoteAuthor: 'The Buddha, Karanīya Metta Sutta, Snp 1.8 (trans. Piyadassi Thera)',
    deepDive: {
      shape: 'list',
      items: [
        { term: 'Self', gloss: 'classically the easiest start', description: 'May I be well, may I be happy, may I be free from suffering.' },
        { term: 'Benefactor', gloss: 'someone who helped', description: 'A teacher, mentor, or elder you respect.' },
        { term: 'Dear friend', gloss: 'uncomplicated love', description: "Someone whose face brings warmth." },
        { term: 'Neutral person', gloss: 'the barista test', description: 'Someone you neither like nor dislike.' },
        { term: 'Difficult person', gloss: 'sīmāsambheda — breaking the barrier', description: 'The real work of the practice.' },
      ],
    },
  },
  {
    id: 'karuna', principle: 'compassion', tradition: 'buddhism', name: 'Karuṇā', pronunciation: 'kah-ROO-nah', tag: 'COMPASSION',
    teaching: 'Karuṇā is the direct response to suffering — the trembling of the heart when it encounters pain. Where mettā wishes beings well, karuṇā meets what hurts. Not pity, which looks down. Not empathy alone, which can drown. Compassion that sees clearly and acts.',
    origin: 'The second of the four Brahmaviharas (divine abodes) in both Theravāda and Mahāyāna Buddhism. In the Mahāyāna tradition, karuṇā paired with prajñā (wisdom) forms the twin pillars of the bodhisattva path — compassion without wisdom is blind; wisdom without compassion is cold.',
    journey: 'In wild places, suffering is visible without the polite screens that cities provide. The burned hillside. The dried stream. The animal that did not survive the winter. Karuṇā does not look away.',
    quote: 'Just as a mother would protect her only child with her life, even so let one cultivate a boundless love towards all beings.',
    quoteAuthor: 'The Buddha, Karanīya Metta Sutta, Sn 1.8',
    deepDive: {
      shape: 'list',
      items: [
        { term: 'Mettā', gloss: 'loving-kindness', description: 'The wish for beings to be happy.' },
        { term: 'Karuṇā', gloss: 'compassion', description: 'The wish for beings to be free from suffering.' },
        { term: 'Muditā', gloss: 'sympathetic joy', description: 'Delight in the happiness of others.' },
        { term: 'Upekkhā', gloss: 'equanimity', description: 'Balanced awareness that holds all beings equally.' },
      ],
      closingParagraph: 'The four Brahmaviharas form a complete emotional architecture — not a hierarchy but a mandala. Each protects the others from distortion.',
    },
  },
  {
    id: 'bhakti', principle: 'compassion', tradition: 'hinduism', name: 'Bhakti', pronunciation: 'BHAK-tee', tag: 'DEVOTION',
    teaching: 'The yoga of devotion — surrendering the small self into something larger through love. Not worship as transaction. Love as a practice of dissolving the boundary between lover and beloved.',
    origin: 'One of the four classical paths of yoga alongside Jnana (knowledge), Karma (action), and Raja (meditation). The Bhakti movement flourished in medieval India through poet-saints like Mirabai, Kabir, and Tukaram.',
    journey: 'In wild places, devotion is the natural response to beauty that exceeds you. The mountain doesn\'t need your praise — but the act of giving it opens something. That opening is Bhakti.',
    quote: 'Devotion is greater than action, greater than knowledge, greater than yoga — because it is its own fruit.',
    quoteAuthor: 'Nārada Bhakti Sūtras 54',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'The Bhāgavata Purāṇa names nine forms of devotion — hearing, chanting, remembering, serving the feet, worship, prostration, servitude, friendship, and total self-offering (ātma-nivedanam). A devotee chooses the form that suits their nature.' },
        { text: 'In the Gauḍīya tradition, the ninth — ātma-nivedanam — is often read as the culmination the others prepare you for. In Rūpa Gosvāmī\'s reading, any one of the nine, fully practiced, is enough.' },
      ],
    },
  },
  {
    id: 'seva', principle: 'compassion', tradition: 'hinduism', name: 'Seva', pronunciation: 'SAY-vah', tag: 'SELFLESS SERVICE',
    teaching: 'Seva is selfless service — action performed without attachment to outcome or recognition. In the Bhagavad Gita, Krishna names it as the heart of karma yoga: do what needs to be done, offer the action to something beyond yourself, and release the result. The action itself is complete.',
    origin: 'Central to Hindu ethics and the path of karma yoga as described in the Bhagavad Gita (3.19). Practiced across Sikh, Jain, and Buddhist traditions as well. Gandhi built an entire political philosophy on its foundation.',
    journey: 'In wild places, seva is immediate. The rock moved from the trail for the next hiker. The trash carried out that wasn\'t yours. The care given to a place that will never know your name. The land doesn\'t keep score. Neither should you.',
    quote: 'You have the right to work, but never to the fruit of work.',
    quoteAuthor: 'Krishna, Bhagavad Gita 2.47',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'Karma yoga — the yoga of action — holds that every act can be sacred if performed without attachment to its outcome. Seva is this principle made practical: serve because serving is right, not because of what it returns.' },
        { text: 'The Bhagavad Gita\'s teaching on action is often misread as passivity. It is the opposite — full engagement without the distortion of self-interest. Do what needs to be done, completely, then let it go.' },
        { text: 'In the Sikh tradition, seva — particularly langar, the community kitchen that feeds all comers regardless of caste or station — is among the highest practices. Service is not preparation for spiritual life. It is spiritual life.' },
      ],
    },
  },
  {
    id: 'virtue', principle: 'compassion', tradition: 'stoicism', name: 'Virtue', pronunciation: 'VER-choo', tag: 'THE ONLY GOOD',
    teaching: 'The Stoics held that virtue — wisdom, justice, courage, and temperance — is the only unconditional good. External things are \'preferred indifferents\': worth pursuing, but never at the cost of character.',
    origin: 'Central to all Stoic philosophy, inherited from Socrates. Marcus Aurelius, Seneca, and Epictetus all returned to this teaching as the bedrock of Stoic practice: what you are matters more than what you have.',
    journey: 'On a hard day in the mountains, what you have when everything else is stripped away is character. The Stoics would say that was always the only thing you had.',
    quote: 'Waste no more time arguing about what a good man should be. Be one.',
    quoteAuthor: 'Marcus Aurelius, Meditations 10.16 (trans. Maxwell Staniforth)',
    deepDive: {
      shape: 'list',
      items: [
        { term: 'Wisdom', gloss: 'prudence', description: 'Knowledge of what is good, bad, and indifferent.' },
        { term: 'Justice', gloss: 'fairness', description: 'Knowledge of how to act rightly toward others; the common good.' },
        { term: 'Courage', gloss: 'fortitude', description: 'Knowledge of what is and is not to be feared.' },
        { term: 'Temperance', gloss: 'self-control', description: 'Knowledge of what to choose and what to avoid.' },
      ],
      closingParagraph: 'For the Stoics, these aren\'t four separate traits but four faces of a single knowledge. You have all, or none.',
    },
  },
  {
    id: 'ubuntu', principle: 'compassion', tradition: 'crosscultural', name: 'Ubuntu', pronunciation: 'oo-BOON-too', tag: 'RELATIONAL SELFHOOD',
    teaching: 'A Nguni Bantu philosophy from southern Africa: Umuntu ngumuntu ngabantu — a person is a person through other persons. Ubuntu holds that individual humanity is inseparable from communal relationship. You become yourself through others.',
    origin: 'Central to Nguni and Bantu cultures of southern Africa. Articulated internationally by Archbishop Desmond Tutu and woven into post-apartheid South African political thought as a framework for reconciliation and collective humanity.',
    journey: 'A roped team on a technical route. A camp where everyone works. A stranger who shares water at a trailhead. Ubuntu is the recognition of what makes these moments feel right.',
    quote: 'I am because we are.',
    quoteAuthor: 'Ubuntu proverb, Nguni Bantu tradition',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'Ubuntu is a philosophical tradition from Bantu-speaking southern Africa — most often named in the Nguni languages (Zulu, Xhosa), and present under other names: unhu in Shona, botho in Sotho and Tswana. Its Nguni proverb — umuntu ngumuntu ngabantu — translates as "a person is a person through other persons."' },
        { text: 'Western individualism begins with a discrete self and wonders how to connect. Ubuntu begins with relationship and understands the individual as what emerges from it. The order is reversed.' },
        { text: 'The older communal ethic is ancient; its systematic articulation as public philosophy is more recent — shaped by Desmond Tutu, Mogobe Ramose, and the post-apartheid reconciliation tradition. To be ubuntu is to recognize that your humanity is tied to mine. When you harm me, you diminish yourself. When you help me flourish, you flourish. This is not metaphor. It is an ethics of being.' },
      ],
    },
  },

  // ─── REVERENCE ────────────────────────────────────────────────────────────────
  {
    id: 'misogi', principle: 'reverence', tradition: 'shinto', name: 'Misogi', pronunciation: 'mee-SO-ghee', tag: 'PURIFICATION',
    teaching: 'Misogi is Shinto ritual purification by washing the entire body in natural water — a river, a waterfall, the sea. Standing under a waterfall or entering a cold river, one releases accumulated impurity. Not just of the body but of the mind and spirit. What remains is clear.',
    origin: 'Traced mythologically to Izanagi, who purified himself in a river after visiting the land of the dead. Harae rites and misogi exercises using water cleanse the individual so that they may approach a deity or sacred power. Salt, water, and fire are the principal purificatory agents.',
    journey: 'Cold water on a trail — a creek crossing, a mountain lake, rain on your face — is misogi at its simplest. Let it do what water has always done.',
    quote: 'Misogi-shuho is the shortest and quickest way to approach and assimilate the kami nature.',
    quoteAuthor: 'Rev. Yukitaka Yamamoto, Kami no Michi (1987)',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: "Misogi is purification by immersion in natural water — a river, a waterfall, the sea. The body enters the water. What it carried leaves." },
        { text: "The mythological origin is Izanagi, the creator kami, who washed himself in a river after returning from the land of the dead. What was most sacred could only be re-approached with a purified body." },
        { text: "The logic is older than the story. Cold water on skin interrupts the continuous narrative of who you thought you were, long enough for something clearer to come through." },
      ],
    },
  },
  {
    id: 'satoyama', principle: 'reverence', tradition: 'shinto', name: 'Satoyama', pronunciation: 'SAH-toh-yah-mah', tag: 'THE IN-BETWEEN LAND',
    teaching: 'Satoyama describes the borderland between mountain wilderness and human settlement — the managed woodlands, terraced fields, and forest edges that formed Japan\'s traditional rural landscape. It is the place where nature and culture live in relationship, not opposition.',
    origin: 'A Japanese concept embedded in traditional land management. The International Partnership for the Satoyama Initiative (IPSI) was formally established at the Convention on Biological Diversity COP 10 in Nagoya, Japan, in October 2010, as a joint project of Japan\'s Ministry of the Environment and the United Nations University.',
    journey: 'At the edge of a trail where forest meets meadow, or where a river valley opens into farmland — that threshold is satoyama in spirit. Neither purely wild nor purely tamed. The most biodiverse, most alive.',
    quote: 'The clearest way into the Universe is through a forest wilderness.',
    quoteAuthor: 'John Muir',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'Satoyama is the threshold between wild mountain and human settlement — managed woodlands, terraced fields, forest edges. Not pristine wilderness. Not development. The middle.' },
        { text: 'It echoes a general ecological observation — life clusters at thresholds — that Japanese practice has lived inside for centuries. The hedgerow holds more species than either the field or the forest on its own.' },
        { text: 'Satoyama is also a way of living. It assumes that good human presence shapes land without dominating it — stewarding rather than preserving or extracting.' },
      ],
    },
  },
  {
    id: 'mononoaware', principle: 'reverence', tradition: 'shinto', name: 'Mono no Aware', pronunciation: 'MOH-noh no ah-WAH-ray', tag: 'THE PATHOS OF THINGS',
    teaching: "The bittersweet awareness that beauty is fleeting — and is more beautiful because it is fleeting. The cherry blossom in full bloom is not diminished by knowing it will fall tomorrow. It is made more precious by it.",
    origin: "Traced to Heian-period literature (794–1185), particularly The Tale of Genji by Murasaki Shikibu — the earliest extant psychological novel. The word 'aware' appears over a thousand times in the text. The concept was formally articulated by the 18th-century scholar Motoori Norinaga in Tama no Ogushi (1799) as the heart of Japanese aesthetic sensibility.",
    journey: "In wild places, mono no aware meets you without effort. Alpenglow on a peak, visible for four minutes. The last autumn leaf before it falls. The stillness after a thunderstorm. Let the beauty hurt, a little. That small ache is the teaching.",
    quote: "To know mono no aware is to discern the power and essence, not just of the moon and the cherry blossoms, but of every single thing existing in this world, and to be stirred by each of them.",
    quoteAuthor: "Motoori Norinaga, The Tale of Genji: A Little Jeweled Comb (1799)",
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'Not sadness, exactly. The Heian word aware was originally an exclamation — ah! — used for anything that struck the heart deeply. Joy, love, sorrow, wonder. It is the full emotional response to being alive to something.' },
        { text: 'Mono no aware is what happens when that response meets the knowledge that what moved you is already passing. The cherry blossom moves you more because it will fall.' },
        { text: 'Where contemporary culture often treats impermanence as loss, mono no aware finds that accepting it deepens feeling rather than blunting it.' },
      ],
    },
  },
  {
    id: 'mementomori', principle: 'reverence', tradition: 'stoicism', name: 'Memento Mori', pronunciation: 'meh-MEN-toh MOR-ee', tag: 'REMEMBER DEATH',
    teaching: 'The Stoic practice of contemplating mortality — not as morbidity, but as clarifying force. At Roman triumphs, a slave would whisper into the general\'s ear: \'Remember, thou art mortal.\' The reminder at the peak of glory. Not to induce fear — to create urgency.',
    origin: 'Practiced throughout Stoic philosophy. Marcus Aurelius returned to it repeatedly in his private journal. Seneca wrote entire letters on the subject — not to depress but to clarify priority and eliminate waste.',
    journey: 'Standing on a ridge at dawn, knowing you will not always be able to stand here — the view sharpens. This is what memento mori is for.',
    quote: 'You could leave life right now. Let that determine what you do and say and think.',
    quoteAuthor: 'Marcus Aurelius, Meditations 2.11 (trans. Gregory Hays)',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'The practice of deliberately contemplating mortality — not as morbidity, but as clarifying force. Remember that you will die, and ask: what matters, given this?' },
        { text: 'The practice itself — meletē thanatou, "rehearsing death" — runs straight through the Stoics from Plato\'s Phaedo. The Latin phrase memento mori comes to us through later Christian use, but Marcus Aurelius and Seneca were practicing it by other names — not to darken life but to sharpen priority.' },
        { text: 'The reminder is not "you are going to die" as despair. It is "you are going to die" as clarity — and therefore: do what matters now, and release what doesn\'t.' },
      ],
    },
  },
  {
    id: 'wabisabi', principle: 'reverence', tradition: 'crosscultural', name: 'Wabi-sabi', pronunciation: 'WAH-bee SAH-bee', tag: 'IMPERFECT BEAUTY',
    teaching: 'Wabi-sabi is a Japanese aesthetic philosophy rooted in Zen Buddhism: find beauty in what is imperfect, impermanent, and incomplete. Wabi: the spiritual richness of simplicity and solitude. Sabi: the serene beauty that comes with age, wear, and the passage of time.',
    origin: 'Emerged during Japan\'s medieval era, shaped by Zen Buddhism and the tea ceremony tradition. Crystallized by tea master Sen no Rikyū (1522–1591), who built teahouses with deliberately rough materials and doors so low that even an emperor would have to bow to enter.',
    journey: 'The cracked rock, the weathered sign, the imperfect campsite, the summit obscured by cloud — wabi-sabi is learning to see the rightness in all of it. Not consolation. Recognition.',
    quote: 'In contemporary Japan, wabi-sabi is often summarized as \'wisdom in natural simplicity.\'',
    quoteAuthor: 'Japanese aesthetic tradition',
    deepDive: {
      shape: 'list',
      items: [
        { term: 'Wabi', gloss: 'simplicity in solitude', description: 'Originally "desolation" or "lament of poverty." Transvalued by the tea masters (Murata Jukō, Sen no Rikyū) into the spiritual richness of what is simple and unadorned.' },
        { term: 'Sabi', gloss: 'the beauty of age', description: 'Originally "to wither, grow lonely." In the poetics of Bashō, the serene beauty that comes with wear, weathering, and the passage of time.' },
      ],
      closingParagraph: 'Historically distinct terms from distinct Japanese lineages. The unified compound "wabi-sabi" as a single aesthetic was crystallized for non-Japanese readers by Leonard Koren\'s 1994 book. The crack in the teacup, the moss on the stone — both halves together give us beauty in imperfection.',
    },
  },
  {
    id: 'hozho', principle: 'reverence', tradition: 'crosscultural', name: 'Hózhó', pronunciation: 'HOH-zho', tag: 'WALK IN BEAUTY',
    teaching: 'A Diné (Navajo) concept for the state of being in balance, beauty, harmony, and right relationship with the world. Not a momentary feeling but a way of walking — restored through ceremony when it is lost, and cultivated deliberately when it is present.',
    origin: 'Central to Diné worldview and language. Formally expressed in the Blessingway ceremony (Hózhǫ́ǫ́jí), documented in Wyman & Haile\'s Blessingway (1970) and Witherspoon\'s Language and Art in the Navajo Universe (1977). The foundational blessing — Sa\'ah naagháí bik\'eh hózhǫ́ — closes with the word itself.',
    journey: 'Wilderness is where hózhó is most visible without translation. The mesa at dawn. The slow river through canyon. The animal whose movements fit the land they move through. Diné teachers speak of walking in beauty — not metaphor, but attention.',
    quote: 'In beauty I walk. With beauty before me I walk. With beauty behind me I walk. With beauty above me I walk. With beauty all around me I walk.',
    quoteAuthor: 'Diné Blessingway prayer (traditional)',
    deepDive: {
      shape: 'prose',
      paragraphs: [
        { text: 'Hózhó has no single English translation. Scholars render it beauty, balance, harmony, order, wellness — and each word catches one facet only. The Diné concept holds all of these as aspects of one state: right relationship with everything that is.' },
        { text: 'When hózhó is disturbed — by illness, conflict, grief — ceremony restores it. The Blessingway is one such ceremony; others include the Beauty Way and the Night Chant. The restoration is not symbolic. It is the work.' },
        { text: 'Hózhó is not a state you enter once and stay in. It is a path you walk. The phrase for the path itself — sa\'ah naagháí bik\'eh hózhǫ́ — is the closing line of many Diné prayers.' },
      ],
    },
  },
];

// ─── Derived data ────────────────────────────────────────────────────────────

/** Get cards for a given principle */
export function getCardsByPrinciple(principleId) {
  return CARDS.filter(c => c.principle === principleId);
}

/** Get the tradition lookup for a card */
export function getTradition(traditionId) {
  return TRADITIONS[traditionId] || null;
}

/** Build flat screen sequence: cover → welcome → convergence → chapters → per principle: [chapter → concepts → cards] → continue */
export function buildScreens() {
  const screens = [{ type: 'cover' }, { type: 'welcome' }, { type: 'convergence' }, { type: 'chapters' }];

  PRINCIPLES.forEach((principle, pi) => {
    const cards = getCardsByPrinciple(principle.id);
    screens.push({ type: 'chapter', principle, principleIndex: pi });
    screens.push({ type: 'concepts', principle, principleIndex: pi });

    cards.forEach((card, ci) => {
      screens.push({
        type: 'card',
        card,
        principle,
        tradition: TRADITIONS[card.tradition],
        principleIndex: pi,
        cardIndex: ci,
        cardTotal: cards.length,
      });
    });
  });

  screens.push({ type: 'continue' });
  return screens;
}
