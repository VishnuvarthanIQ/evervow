/**
 * EverVow Blog Journal Data
 * Contains comprehensive content, imagery, and metadata for each article
 */
const blogData = {
    'personal-vows-guide': {
        id: 'personal-vows-guide',
        title: 'The Art of Writing Personal Vows: A Complete Guide',
        subtitle: 'How to capture your unique love story into words that are authentic, deeply moving, and unforgettable.',
        badge: 'Ceremony Masterclass',
        category: 'Vow Writing',
        readTime: '6 min read',
        date: 'Oct 15, 2024',
        image: 'assets/images/A Complete Guide.jpg',
        author: {
            name: 'Eleanor Vance',
            role: 'Lead Celebrant & Founder',
            img: 'assets/images/Eleanor.jpg',
            bio: 'Eleanor is the founder and Lead Officiant at EverVow. With over 500 personalized ceremonies performed worldwide, she specializes in guiding couples to articulate their deepest commitments with warmth, poise, and joy.'
        },
        takeaways: [
            {
                title: 'The Sweet Spot',
                desc: 'Aim for <strong>300–450 words</strong> (about 2.5 to 3 minutes spoken at a calm pace).'
            },
            {
                title: 'The 4-Part Arc',
                desc: 'Blend admiration, one vivid memory, sacred promises, and your future vision.'
            },
            {
                title: 'Print on Paper',
                desc: 'Skip phone screens—use linen vow booklets and give your officiant a backup copy.'
            }
        ],
        metrics: [
            { label: 'Ideal Word Count', value: '300 – 450 words' },
            { label: 'Speaking Duration', value: '2.5 – 3 minutes' },
            { label: 'Ideal Speaking Pace', value: '~130 words / min' },
            { label: 'Start Drafting', value: '4 Weeks Before' }
        ],
        leadQuote: 'Writing your own wedding vows is one of the most intimate gifts you will ever give your partner. It is the sacred pause in the middle of all the celebrations where time stands still, and you speak straight from your soul.',
        intro: [
            'Yet for many couples, sitting down before a blank page can feel utterly paralyzing. How do you summarize years of inside jokes, challenges overcome, tender morning coffees, and endless devotion into just a few minutes of spoken words?',
            'The secret isn\'t striving to write like Shakespeare or crafting flowery poetry. The true art lies in <strong>vulnerability and specificity</strong>. Below is our step-by-step roadmap to guiding you from blank page to tears of joy at the altar.'
        ],
        chapters: [
            {
                id: 'freewriting-prompts',
                title: 'Unfiltered Freewriting Prompts',
                content: `
                    <p>Before you attempt to write a single structured sentence, give yourself permission to write terribly. Set a timer for 15 minutes, close all browser tabs, grab a dedicated notebook, and stream-of-consciousness answer these three questions:</p>
                    <ul class="list-disc ps-5 space-y-2 mt-3 mb-4">
                        <li><strong>The Origin Moment:</strong> When did you first realize this person wasn't just someone you loved, but someone you couldn't imagine facing the world without?</li>
                        <li><strong>The Quirky Specifics:</strong> What is something tiny they do that instantly softens your hardest days? (How they brew your tea, their goofy dance in the hallway, the way they hold your hand in traffic).</li>
                        <li><strong>The Anchor Quality:</strong> How have you become a kinder, steadier, or braver version of yourself since meeting them?</li>
                    </ul>
                    <div class="p-4 rounded-2xl bg-brand-ivory dark:bg-gray-700/60 border-s-4 border-brand-sage my-4">
                        <strong class="text-brand-charcoal dark:text-white block mb-1">Officiant Pro Tip:</strong>
                        <p class="text-sm mb-0">Do not edit while you free-write. Highlight the sentences that give you goosebumps or bring a smile to your face—these are the diamonds from which your vow script will be built.</p>
                    </div>
                `
            },
            {
                id: 'vow-blueprint',
                title: 'The 4-Part Vow Blueprint',
                content: `
                    <p>The most moving vows always follow a natural narrative arc that balances reflection with lifelong commitment. Follow this classic four-movement structure:</p>
                    <ol class="list-decimal ps-5 space-y-3 mt-3 mb-4">
                        <li><strong>Part 1: Admiration & Declaration (~60 words):</strong> State who your partner is to you and what you admire most about their heart, character, and spirit.</li>
                        <li><strong>Part 2: The Shared Journey (~100 words):</strong> Anchor your words in one specific, evocative story or snapshot from your life together rather than generic timelines.</li>
                        <li><strong>Part 3: The Sacred Promises (~150 words):</strong> The heart of your vows. Offer 4 to 6 concrete commitments—mixing profound lifelong pledges with playful daily rituals.</li>
                        <li><strong>Part 4: The Vision Ahead (~60 words):</strong> Look to the future. Reaffirm your enduring partnership in whatever storms or adventures tomorrow brings.</li>
                    </ol>
                `
            },
            {
                id: 'balancing-tone',
                title: 'Emotion, Humor & The 3-Minute Rule',
                content: `
                    <p>The finest vows are like good chamber music: they move seamlessly between laughter and tears. When vows are 100% solemn, guests hold their breath; when they are 100% comedy roast, the sacred weight of the moment is lost.</p>
                    <p>Follow the <strong>70/30 Rule</strong>: 70% sincere love and commitment, and 30% warmth, gentle humor, and inside appreciation. And above all, keep your reading between 2.5 and 3.5 minutes. Any shorter feels rushed; any longer loses dramatic intimacy.</p>
                `
            },
            {
                id: 'dos-and-donts',
                title: 'Essential Do\'s & Don\'ts',
                content: `
                    <div class="row g-3 my-2">
                        <div class="col-md-6">
                            <div class="p-3.5 rounded-2xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 text-sm">
                                <h6 class="font-bold text-green-800 dark:text-green-300 mb-2">DO</h6>
                                <ul class="list-disc ps-4 space-y-1 mb-0 text-gray-700 dark:text-gray-300">
                                    <li>Read your draft out loud at least 5 times.</li>
                                    <li>Align with your partner on length and tone beforehand.</li>
                                    <li>Include specific promises for difficult seasons.</li>
                                    <li>Share a copy with your officiant for safekeeping.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="p-3.5 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-sm">
                                <h6 class="font-bold text-red-800 dark:text-red-300 mb-2">DON'T</h6>
                                <ul class="list-disc ps-4 space-y-1 mb-0 text-gray-700 dark:text-gray-300">
                                    <li>Read from an iPhone screen (glare, notifications, bad photos).</li>
                                    <li>Include private bedroom in-jokes that alienate guests.</li>
                                    <li>Reference past exes or early relationship drama.</li>
                                    <li>Wing it or leave final drafting to the wedding morning.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: 'delivery-tips',
                title: 'Day-of Delivery & Emotional Anchoring',
                content: `
                    <p>When standing at the altar, adrenaline will naturally speed up your speech. Mark your vow booklet with gentle pencil slashes ( / ) wherever you should pause and look your partner in the eyes.</p>
                    <p>If tears start to flow, do not rush or apologize. Pause, take a deep belly breath, squeeze your partner's hands, and let the moment breathe. Those authentic human pauses will be the most cherished memories of your entire wedding day.</p>
                `
            }
        ],
        tags: ['#VowWriting', '#CeremonyScript', '#OfficiantAdvice', '#PersonalVows']
    },

    'modern-wedding-traditions': {
        id: 'modern-wedding-traditions',
        title: 'Modernizing Classic Wedding Traditions for Today\'s Couples',
        subtitle: 'Fresh, inclusive reinterpretations of heritage rituals that honor your roots while feeling deeply authentic to modern love.',
        badge: 'Tradition & Rituals',
        category: 'Traditions',
        readTime: '5 min read',
        date: 'Oct 08, 2024',
        image: 'assets/images/Traditional.jpg',
        author: {
            name: 'Eleanor Vance',
            role: 'Lead Celebrant & Founder',
            img: 'assets/images/Eleanor.jpg',
            bio: 'Eleanor is the founder and Lead Officiant at EverVow. With over 500 personalized ceremonies performed worldwide, she specializes in guiding couples to articulate their deepest commitments with warmth, poise, and joy.'
        },
        takeaways: [
            {
                title: 'Re-centering Meaning',
                desc: 'Strip away passive historical obligations and keep rituals that actively reflect your living values.'
            },
            {
                title: 'Contemporary Unity',
                desc: 'Update handfasting ribbons, wine-box capsules, or oathing stones with modern personal storytelling.'
            },
            {
                title: 'Inclusive Processionals',
                desc: 'Redefine the aisle entrance with both parents, walking together as equals, or meeting in the center.'
            }
        ],
        metrics: [
            { label: 'Ritual Duration', value: '3 – 5 minutes' },
            { label: 'Unity Elements', value: '1 – 2 max per ceremony' },
            { label: 'Rehearsal Time', value: '15 minutes dedicated' },
            { label: 'Guest Engagement', value: 'High interactive impact' }
        ],
        leadQuote: 'Tradition is not the worship of ashes, but the preservation of fire. You don\'t have to discard centuries of heritage to feel modern—you just need to infuse them with your authentic truth.',
        intro: [
            'Weddings are rich with centuries of customs, but many contemporary couples find themselves conflicted. How do you honor the cultural or spiritual heritage of your parents while discarding outdated patriarchy, awkward symbolism, or generic scripts?',
            'The key is intentional curation. Rather than following tradition out of obligation, modern couples are reclaiming rituals by rewriting the narratives behind them. Here is how our officiants guide couples to blend heritage with fresh, heartfelt elegance.'
        ],
        chapters: [
            {
                id: 'rethinking-processional',
                title: 'Rethinking the Processional: Walking Your Own Path',
                content: `
                    <p>The traditional procession where a father walks a bride down the aisle to "give her away" is being beautifully updated across modern ceremonies:</p>
                    <ul class="list-disc ps-5 space-y-2 mt-3 mb-4">
                        <li><strong>Walking with Both Parents:</strong> Honoring both mother and father as equal nurturers who guided you to this milestone.</li>
                        <li><strong>The Couple\'s Entrance:</strong> Entering the ceremony space hand-in-hand together, symbolizing that you enter marriage as equal, voluntary partners.</li>
                        <li><strong>Meeting in the Middle:</strong> Starting from opposite sides of the room or garden and meeting at the center aisle to walk the final steps together.</li>
                    </ul>
                `
            },
            {
                id: 'reimagining-unity',
                title: 'Reimagining the Unity Ritual: Handfasting & Wine Boxes',
                content: `
                    <p>The unity candle often blows out in outdoor breezes, leading couples toward more tactile and durable rituals:</p>
                    <p><strong>The Modern Handfasting:</strong> Ancient Celtic handfasting uses colored ribbons bound around the couple\'s clasped hands. Instead of generic ribbons, invite immediate family members to present ribbons of meaningful colors (e.g. green for growth, gold for shared prosperity, rose for gentle kindness).</p>
                    <p><strong>The Anniversary Wine & Letter Capsule:</strong> Seal a bottle of your favorite vintage alongside handwritten letters to each other inside a wooden keepsake box. Promise to open the box on your 5th or 10th anniversary, or on a difficult evening when you need to be reminded why you chose each other.</p>
                `
            },
            {
                id: 'inclusive-blessings',
                title: 'Inclusive Blessings & Community Vows',
                content: `
                    <p>Rather than treating guests as passive spectators, invite them to take an active role in guarding your marriage. A Community Vow takes just two minutes:</p>
                    <div class="p-4 rounded-2xl bg-brand-ivory dark:bg-gray-700/60 border-s-4 border-brand-sage my-3">
                        <em class="text-brand-charcoal dark:text-white block mb-2">Officiant Prompt to Guests:</em>
                        <p class="text-sm italic mb-0">"To all the friends and family gathered here today: do you promise to love, encourage, and champion this couple through all the seasons of their marriage? If so, please answer with a resounding \'We do!\'"</p>
                    </div>
                `
            },
            {
                id: 'honoring-ancestors',
                title: 'Honoring Ancestors with Warmth & Light',
                content: `
                    <p>Memorial tables can sometimes cast a somber shadow over what should be a joyful celebration. Instead of a segregated memorial, weave departed loved ones into the living fabric of the ceremony: pin a grandmother\'s brooch inside your lapel, share an ancestor\'s favorite blessing during the opening remarks, or light a quiet lantern before the processional begins.</p>
                `
            }
        ],
        tags: ['#ModernTraditions', '#UnityRituals', '#CeremonyIdeas', '#InclusiveWeddings']
    },

    'choosing-ceremony-spot': {
        id: 'choosing-ceremony-spot',
        title: 'Choosing Your Ceremony Spot: Acoustics, Light & Guest Comfort',
        subtitle: 'How sun angles, natural soundscapes, and intuitive seating arrangements transform an ordinary venue into an unforgettable sanctuary.',
        badge: 'Venue & Atmosphere',
        category: 'Locations',
        readTime: '4 min read',
        date: 'Sep 29, 2024',
        image: 'assets/images/The Bespoke Ceremony.jpg',
        author: {
            name: 'Julian Sterling',
            role: 'Senior Officiant & Audio Consultant',
            img: 'assets/images/couple-david-elena.jpg',
            bio: 'Julian brings a background in acoustic design and mindful ceremonial pacing, helping couples orchestrate memorable moments across grand cathedrals, vineyards, and wild coastal clifftops.'
        },
        takeaways: [
            {
                title: 'Sun & Shadow Geometry',
                desc: 'Ensure the sun is never directly in your or your guests\' eyes during golden hour vows.'
            },
            {
                title: 'Wind & Acoustics',
                desc: 'Wind carries sound away; equip your officiant with directional wireless lapels and deadcats.'
            },
            {
                title: 'Seating Circles & Arcs',
                desc: 'Curved chair layouts create an intimate cocoon of presence, even in expansive outdoor spaces.'
            }
        ],
        metrics: [
            { label: 'Mic Check', value: '90 Mins Prior' },
            { label: 'Sun Angle Check', value: 'Exact ceremony time' },
            { label: 'Seating Distance', value: 'Max 25 rows back' },
            { label: 'Ambient Sound Target', value: '< 45 dB background' }
        ],
        leadQuote: 'A ceremony location isn\'t just a scenic backdrop for photographs—it is an acoustic and energetic vessel where two people speak the most solemn words of their lives.',
        intro: [
            'Couples often spend months touring venues and falling in love with panoramic mountain vistas, coastal bluffs, or historic courtyards. But a spot that looks breathtaking on Instagram can quickly become a sensory nightmare if wind drowns out your voices or direct sun blinds your guests.',
            'Before committing to your exact ceremony altar spot, consider the unseen sensory variables that determine whether your ceremony feels distant and distracted or profoundly magnetic.'
        ],
        chapters: [
            {
                id: 'sun-geometry',
                title: 'Golden Hour Geometry: Positioning Against the Sun',
                content: `
                    <p>Always scout your exact ceremony space at the exact time of day your ceremony is scheduled to begin. Pay close attention to:</p>
                    <ul class="list-disc ps-5 space-y-2 mt-3 mb-4">
                        <li><strong>Backlighting vs. Squinting:</strong> Having the sun directly behind you creates beautiful halo photos, but can leave your faces in dark shadows unless your photographer uses fill flash. Having the sun directly in your face causes you and your partner to squint throughout your vows.</li>
                        <li><strong>Dappled Shade:</strong> Standing directly under tree branches with heavy leaf coverage can cast distracting zebra-stripe shadows across your faces. Position the altar where lighting is consistent across both partners.</li>
                    </ul>
                `
            },
            {
                id: 'conquering-acoustics',
                title: 'Conquering Coastal and Outdoor Acoustics',
                content: `
                    <p>Crashing ocean waves, highway hums, and rustling forest breezes are gorgeous ambiance—until guests can\'t hear a single word of your personal vows. Never rely on an officiant "projecting their voice" in an outdoor space.</p>
                    <p>Work with your DJ or sound engineer to provide dual battery-powered wireless speakers positioned behind the last rows of guest seating. Ensure the officiant wears a discreet omnidirectional lavalier microphone with a furry windscreen (deadcat) to eliminate wind buffeting.</p>
                `
            },
            {
                id: 'intimate-seating',
                title: 'Intimate Seating Configurations: Arcs & Spirals',
                content: `
                    <p>Traditional straight rows of folding chairs with a long central aisle can create emotional distance, leaving guests on the edges feeling disconnected. Consider these intimate alternatives:</p>
                    <ul class="list-disc ps-5 space-y-2 mt-3 mb-4">
                        <li><strong>Semi-Circular Arc:</strong> Curving the chairs around the altar brings every guest 30% closer and creates an emotional hug around the couple.</li>
                        <li><strong>Ceremony in the Round:</strong> Placing the couple and officiant on an elevated central dais with 360-degree circular seating allows every guest a front-row experience.</li>
                    </ul>
                `
            }
        ],
        tags: ['#CeremonyLocation', '#OutdoorWedding', '#Acoustics', '#GuestExperience']
    },

    'elopement-checklist': {
        id: 'elopement-checklist',
        title: 'The Ultimate Intimate Elopement & Micro-Wedding Checklist',
        subtitle: 'Everything you need before running away together—from marriage license waiting windows to permits and intentional timelines.',
        badge: 'Planning Guide',
        category: 'Planning',
        readTime: '6 min read',
        date: 'Sep 18, 2024',
        image: 'assets/images/The Ultimate Intimate Elopement & Micro-Wedding Checklist.jpg',
        author: {
            name: 'Eleanor Vance',
            role: 'Lead Celebrant & Founder',
            img: 'assets/images/Eleanor.jpg',
            bio: 'Eleanor is the founder and Lead Officiant at EverVow. With over 500 personalized ceremonies performed worldwide, she specializes in guiding couples to articulate their deepest commitments with warmth, poise, and joy.'
        },
        takeaways: [
            {
                title: 'Legal Logistics First',
                desc: 'Verify license expiration dates, waiting periods, and witness requirements early.'
            },
            {
                title: 'Location Permits',
                desc: 'Public lands, national parks, and beaches often require special-use permits 90 days out.'
            },
            {
                title: 'Pacing Your Day',
                desc: 'Do not rush—build in space for slow morning coffee, quiet first looks, and golden hour vows.'
            }
        ],
        metrics: [
            { label: 'Guest Count', value: '2 – 25 guests' },
            { label: 'Timeline Scope', value: '4 – 8 hours relaxed' },
            { label: 'Permit Lead Time', value: '90 days minimum' },
            { label: 'Stress Level', value: '90% reduction' }
        ],
        leadQuote: 'Eloping isn\'t about escaping a wedding; it\'s about deliberately choosing an experience centered purely on connection, presence, and pure romance.',
        intro: [
            'Gone are the days when elopements were secret, rushed courthouse affairs. Today\'s couples are intentionally choosing intimate elopements and micro-weddings in order to trade performance pressure and overwhelming guest lists for deep intimacy and epic natural backdrops.',
            'However, keeping things intimate does not mean winging it. Below is our officiant-approved checklist to ensure your adventure elopement is completely seamless, legal, and deeply romantic.'
        ],
        chapters: [
            {
                id: 'legal-foundations',
                title: 'The Legal Foundations: Licenses, Jurisdictions & Witnesses',
                content: `
                    <p>Before packing your bags, research the marriage laws of your chosen county or country:</p>
                    <ul class="list-disc ps-5 space-y-2 mt-3 mb-4">
                        <li><strong>Waiting Periods:</strong> Some states have a mandatory 24 to 72-hour waiting period between receiving the license and the ceremony.</li>
                        <li><strong>Witness Count:</strong> Some jurisdictions require two witnesses, some require one, and others (like Colorado) allow self-solemnization with zero witnesses required!</li>
                        <li><strong>Officiant Credentials:</strong> Confirm that your celebrant is legally authorized to solemnize marriages in that specific state or municipality.</li>
                    </ul>
                `
            },
            {
                id: 'scouting-locations',
                title: 'Scouting Wild Locations & Special-Use Permits',
                content: `
                    <p>If you plan to say "I do" on National Park lands, state beaches, or historic ruins, you will likely need a Special Use Permit (SUP). Apply at least 60 to 90 days in advance, as popular parks limit the number of ceremonies permitted per day to protect delicate ecosystems.</p>
                    <div class="p-4 rounded-2xl bg-brand-ivory dark:bg-gray-700/60 border-s-4 border-brand-sage my-3">
                        <strong class="text-brand-charcoal dark:text-white block mb-1">Leave No Trace Commitment:</strong>
                        <p class="text-sm mb-0">Never throw confetti, rice, or fake flower petals in natural spaces. Pack out everything you bring in, stay on marked trails, and keep bouquets to local native species.</p>
                    </div>
                `
            },
            {
                id: 'elopement-timeline',
                title: 'The Deliberate 8-Hour Elopement Timeline',
                content: `
                    <p>Don\'t limit your elopement to a 20-minute ceremony! Turn it into a day-long celebration of your love story:</p>
                    <ul class="list-disc ps-5 space-y-2 mt-3 mb-4">
                        <li><strong>1:00 PM:</strong> Slow artisanal breakfast and handwritten love letters to each other.</li>
                        <li><strong>3:00 PM:</strong> Getting dressed together or a private first look among the pines.</li>
                        <li><strong>4:30 PM:</strong> Scenic hike or jeep ride to your secluded ceremony vista.</li>
                        <li><strong>5:45 PM:</strong> Sunset ceremony, personal vows, and ring exchange.</li>
                        <li><strong>6:30 PM:</strong> Golden hour portraits and champagne toast.</li>
                        <li><strong>8:00 PM:</strong> Fireside private chef dinner or gourmet picnic under the stars.</li>
                    </ul>
                `
            }
        ],
        tags: ['#ElopementChecklist', '#MicroWedding', '#AdventureWedding', '#IntimateCeremony']
    },

    'involve-loved-ones': {
        id: 'involve-loved-ones',
        title: '7 Meaningful Ways to Involve Loved Ones in Your Ceremony',
        subtitle: 'Thoughtful ways to include parents, siblings, and close friends through ring warmings, curated readings, and community blessings.',
        badge: 'Ceremony Inspiration',
        category: 'Traditions',
        readTime: '4 min read',
        date: 'Sep 05, 2024',
        image: 'assets/images/Friend Officiant Consult.jpg',
        author: {
            name: 'Clara Bennett',
            role: 'Associate Celebrant & Ritual Designer',
            img: 'assets/images/Eleanor.jpg',
            bio: 'Clara specializes in family blending ceremonies, creative unity rituals, and crafting shared community blessings that make every guest feel seen, honored, and deeply connected.'
        },
        takeaways: [
            {
                title: 'Ring Warming Ritual',
                desc: 'Pass your wedding bands quietly through the hands of guests for silent blessings and positive energy.'
            },
            {
                title: 'Shared Community Vows',
                desc: 'Have the celebrant ask guests to pledge their ongoing support, ending in a unified "We Do!"'
            },
            {
                title: 'Curated Personal Readings',
                desc: 'Select poetry, literary excerpts, or love letters that reflect the reader\'s unique bond with you.'
            }
        ],
        metrics: [
            { label: 'Guest Participation', value: '100% engaged' },
            { label: 'Ring Warming Time', value: '4 – 6 minutes' },
            { label: 'Reading Length', value: '60 – 90 seconds' },
            { label: 'Emotional Resonance', value: 'Unmatched warmth' }
        ],
        leadQuote: 'A wedding is two people pledging their futures, but it is also a community of hearts encircling them with love, guidance, and collective joy.',
        intro: [
            'When couples plan their ceremony, they often wonder how to give important family members and dear friends a role without bloating the wedding party to 20 bridesmaids and groomsmen.',
            'The ceremony is the emotional epicenter of the entire day. Including your loved ones in active, thoughtful ways makes them feel genuinely cherished rather than just spectators in matching outfits.'
        ],
        chapters: [
            {
                id: 'ring-warming',
                title: 'The Sacred Ring Warming Ceremony',
                content: `
                    <p>The Ring Warming is an ancient ritual where the couple\'s wedding bands are tied with silk ribbon or placed in a small wooden bowl and passed silently down each row of guests before the ring exchange.</p>
                    <p>Each guest holds the rings in their hands for two seconds, infusing them with silent blessings, good thoughts, and prayers. By the time the rings return to the altar, they are physically and metaphorically warmed by the collective love of your closest community.</p>
                `
            },
            {
                id: 'community-vows',
                title: 'The Community Vow of Support',
                content: `
                    <p>Marriage does not thrive in isolation—it thrives in community. After the couple exchanges their personal vows, the officiant turns to face the congregation and asks them to make a reciprocal commitment:</p>
                    <div class="p-4 rounded-2xl bg-brand-ivory dark:bg-gray-700/60 border-s-4 border-brand-sage my-3">
                        <p class="text-sm italic mb-0">"You have heard the promises made today. Do you, their closest family and friends, promise to surround this marriage with patience, grace, laughter, and wisdom in the years ahead?"</p>
                    </div>
                `
            },
            {
                id: 'honoring-elders',
                title: 'Honoring Grandparents & Family Elders',
                content: `
                    <p>Instead of merely seating grandparents in the front row, invite them to serve as the official Ceremony Witnesses who sign the legal marriage license, or invite them to deliver an opening family blessing. These moments will be among the most emotionally resonant photographs of your entire album.</p>
                `
            }
        ],
        tags: ['#LovedOnes', '#RingWarming', '#CommunityBlessing', '#FamilyTraditions']
    },

    'overcoming-altar-jitters': {
        id: 'overcoming-altar-jitters',
        title: 'Overcoming Altar Jitters: Speaking Your Vows with Calm Confidence',
        subtitle: 'Nervous about public speaking? Proven somatic breathing techniques, vow book formatting secrets, and eye-contact strategies.',
        badge: 'Confidence & Coaching',
        category: 'Vow Writing',
        readTime: '5 min read',
        date: 'Aug 24, 2024',
        image: 'assets/images/Overcoming Altar Jitters.jpg',
        author: {
            name: 'Eleanor Vance',
            role: 'Lead Celebrant & Founder',
            img: 'assets/images/Eleanor.jpg',
            bio: 'Eleanor is the founder and Lead Officiant at EverVow. With over 500 personalized ceremonies performed worldwide, she specializes in guiding couples to articulate their deepest commitments with warmth, poise, and joy.'
        },
        takeaways: [
            {
                title: 'The 4-7-8 Somatic Reset',
                desc: 'A 30-second breath practice to calm your vagus nerve right before walking down the aisle.'
            },
            {
                title: 'Big Font & Line Breaks',
                desc: 'Print vows in 16pt font with generous line spacing so you never lose your place while tearing up.'
            },
            {
                title: 'Focus Only on One Pair of Eyes',
                desc: 'Forget the crowd behind you; look directly into your partner\'s eyes and speak only to them.'
            }
        ],
        metrics: [
            { label: 'Font Size in Book', value: '16 – 18pt' },
            { label: 'Rehearsal Count', value: '5 out-loud practices' },
            { label: 'Pause Frequency', value: 'Every 2 sentences' },
            { label: 'Heart Rate Reduction', value: '25% with box breathing' }
        ],
        leadQuote: 'Public speaking nerves are simply love and adrenaline searching for a direction. When you channel that energy into partner connection, anxiety dissolves into raw beauty.',
        intro: [
            'Over 75% of couples admit that standing before a crowd and speaking their vows is the single most nerve-wracking part of their wedding day. Shaky hands, tight throats, and racing heartbeats are completely natural physiological responses to vulnerability.',
            'The goal isn\'t to eliminate butterflies entirely—it is to teach them how to fly in formation. Here is our officiant toolkit for staying grounded, present, and calm when it matters most.'
        ],
        chapters: [
            {
                id: 'somatic-grounding',
                title: 'Somatic Grounding: The 30-Second Reset',
                content: `
                    <p>When you feel panic creeping in while waiting behind the doors, do not try to "think positive"—calm your nervous system through your body:</p>
                    <ul class="list-disc ps-5 space-y-2 mt-3 mb-4">
                        <li><strong>Unclench Your Jaw & Tongue:</strong> Drop your tongue from the roof of your mouth and let your shoulders drop away from your ears.</li>
                        <li><strong>The 4-7-8 Breath:</strong> Inhale through your nose for 4 seconds, hold gently for 7 seconds, and exhale slowly through your mouth for 8 seconds. This immediately stimulates your parasympathetic vagus nerve.</li>
                        <li><strong>Feel the Soles of Your Feet:</strong> Press your weight evenly through your heels into the floor. You are grounded and safe.</li>
                    </ul>
                `
            },
            {
                id: 'vow-book-design',
                title: 'Formatting Your Vow Book for Effortless Delivery',
                content: `
                    <p>Never read your vows from crumpled notebook paper or a glossy smartphone screen. Reading off a phone reflects harsh blue glare into your photographer\'s lens and causes accidental screen shutoffs.</p>
                    <p>Instead, write or print your vows into a linen vow booklet. Use <strong>16-point bold font</strong>, double spacing, and print only on the right-hand pages so your fingers don\'t cover text. Mark diagonal slashes ( // ) where you should pause, breathe, and look up.</p>
                `
            },
            {
                id: 'the-anchor-technique',
                title: 'The Anchor Technique: Locking Eyes with Your Partner',
                content: `
                    <p>Remember that you are not giving a TED Talk to an audience of strangers. You are speaking private words to the single person on earth who loves you most. Pretend there is a warm invisible sphere enclosing just the two of you at the altar. When you feel a tremor, hold their gaze—their smile will steady you instantly.</p>
                `
            }
        ],
        tags: ['#AltarJitters', '#VowDelivery', '#PublicSpeaking', '#MindfulCeremony']
    },

    'blending-two-cultures': {
        id: 'blending-two-cultures',
        title: 'Blending Two Cultures: Inside Priya & Liam\'s Fusion Garden Vows',
        subtitle: 'How we wove Hindu garland rituals and Celtic oathing stones into a seamless, joyful celebration where every relative felt included.',
        badge: 'Real Love Stories',
        category: 'Real Weddings',
        readTime: '7 min read',
        date: 'Aug 12, 2024',
        image: 'assets/images/Bilingual Custom.jpg',
        author: {
            name: 'Julian Sterling',
            role: 'Senior Officiant',
            img: 'assets/images/couple-david-elena.jpg',
            bio: 'Julian brings a background in multicultural ceremony architecture, helping couples bridge diverse languages, cultural rituals, and interfaith traditions with effortless elegance.'
        },
        takeaways: [
            {
                title: 'Seamless Ritual Harmony',
                desc: 'Blend rituals thoughtfully (e.g. Jaimala garland exchange paired with Celtic stone blessings).'
            },
            {
                title: 'Bilingual Ceremony Programs',
                desc: 'Provide clear, poetic explanations in your program so all guests appreciate the meaning.'
            },
            {
                title: 'Joint Officiant Narration',
                desc: 'Introduce traditions with cultural storytelling and respect for both heritages.'
            }
        ],
        metrics: [
            { label: 'Traditions Blended', value: 'Hindu & Celtic' },
            { label: 'Ceremony Length', value: '28 minutes' },
            { label: 'Languages Spoken', value: 'English & Hindi' },
            { label: 'Guest Satisfaction', value: '100% inclusive feeling' }
        ],
        leadQuote: 'A multicultural ceremony isn\'t about compromising two identities—it is about composing a richer, more vibrant harmony where both families feel deeply honored.',
        intro: [
            'When Priya (raised in Mumbai) and Liam (raised in Dublin) began planning their garden wedding in Northern California, their biggest fear was alienating one side of the family. Would the ceremony feel too lengthy if they tried to include everything? Would traditions feel disjointed?',
            'Working closely with EverVow celebrant Julian Sterling, they crafted a 28-minute bilingual fusion ceremony that honored their cultural roots while maintaining an intimate, modern tempo. Here is a look inside their unforgettable celebration.'
        ],
        chapters: [
            {
                id: 'the-vision',
                title: 'The Vision: Celebrating Heritage Without Overwhelming Pacing',
                content: `
                    <p>Rather than holding two separate ceremonies on different days, Priya and Liam wanted their families to sit side-by-side and experience the beauty of both worlds in a single cohesive ceremony.</p>
                    <p>Julian structured the flow so that rituals complemented each other naturally: the ceremony opened with an Irish Gaelic welcome blessing, transitioned to the exchange of floral garlands (Jaimala), and culminated in personal vows spoken over an ancient Celtic oathing stone.</p>
                `
            },
            {
                id: 'jaimala-exchange',
                title: 'The Jaimala Exchange Under the Floral Mandap',
                content: `
                    <p>Under a custom open-air floral mandap crafted from cedar and jasmine vines, Priya and Liam exchanged fragrant marigold and rose garlands. Julian explained the symbolism to guests: in Vedic tradition, placing garlands around one another signifies voluntary acceptance of each other as life partners.</p>
                `
            },
            {
                id: 'celtic-stone-blessing',
                title: 'The Celtic Oathing Stone & Personal Vows',
                content: `
                    <p>Holding a smooth river stone gathered from Liam\'s hometown in Ireland, both partners clasped the stone between their palms as they read their vows. Ancient Gaelic tradition held that promises made while holding a stone were carved into the stone itself, creating an unbreakable covenant.</p>
                    <p>After the ceremony, Liam\'s mother remarked: <em>"I was worried I wouldn\'t understand the rituals, but the way everything was explained brought tears to my eyes. It felt like one united family."</em></p>
                `
            }
        ],
        tags: ['#FusionWedding', '#Multicultural', '#RealWeddings', '#BilingualCeremony']
    }
};

// Export to window for global access
if (typeof window !== 'undefined') {
    window.blogData = blogData;
}
