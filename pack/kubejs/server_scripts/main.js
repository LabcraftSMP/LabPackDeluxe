let loaded = false;

LevelEvents.loaded(event => {
    if (loaded) return;
    loaded = true;

    event.server.runCommand('script load chat')
    event.server.runCommand('script load format_sign')
    event.server.runCommand('script load hat')
    event.server.runCommand('script load stylize')
    event.server.runCommand('script load lore')
    event.server.runCommand('script load rename')
    event.server.runCommand('script load format')
})

function buildColorVariants(template, colors) {
    return colors.map(color => template.replace('XX', color).replace(':_', ':').replace(/_$/, ''))
}

function buildVariants(templates, variantTypes) {
    let variants = []
    templates.forEach(template => variants = variants.concat(variantTypes.map(variantType => template.replace('XX', variantType))))
    return variants
}

ServerEvents.tags('worldgen/biome', event => {
    event.remove('arts_and_crafts:soapstone_can_generate_in', 'newworld:wooded_meadow')
})

ServerEvents.tags('block', event => {
    event.remove('natures_spirit:stripped_logs', 'natures_spirit:stripped_joshua_log')

    event.add('lab_tweaks:paper_lanterns', buildColorVariants('natures_spirit:XXpaper_lantern', global.fullColors))
    event.add('lab_tweaks:iron_candle_holders', buildColorVariants('supplementaries:candle_holderXX', global.fullColors))
    event.add('lab_tweaks:gold_candle_holders', buildColorVariants('suppsquared:gold_candle_holderXX', global.fullColors))


    const cabinets = [
        'farmersdelight:XX_cabinet',
        'everycomp:fd/NN/XX_cabinet'
    ]

    global.woodTypes.forEach(woodType => {
        const splitId = woodType.id.split(':')
        const vanilla = splitId.length == 1
        if (vanilla) splitId.unshift('minecraft')
        const namespace = splitId[0]
        const id = splitId[1]

        event.add(
            'farmersdelight:cabinets',
            cabinets.map(blockType => blockType
                .replace('NN', namespace)
                .replace('XX', id)
            )
        )
    })
})

ServerEvents.tags('item', event => {
    event.removeAllTagsFrom(global.blacklistedItems)
    event.add('c:hidden_from_recipe_viewers', global.blacklistedItems)

    event.remove('c:hidden_from_recipe_viewer', 'supplementaries:jar_boat')
    event.remove('minecraft:foot_armor', [
        'horseshoes:iron_horseshoes',
        'horseshoes:gold_horseshoes',
        'horseshoes:diamond_horseshoes'
    ])
    event.remove('natures_spirit:stripped_logs', 'natures_spirit:stripped_joshua_log')

    event.add('lab_tweaks:plaster', buildColorVariants('arts_and_crafts:XXplaster', global.fullColors))
    event.add('lab_tweaks:biscuit_porcelain', buildColorVariants('arts_and_crafts:XXchalk', global.bleachedColors))
    event.add('lab_tweaks:paper_lanterns', buildColorVariants('natures_spirit:XXpaper_lantern', global.fullColors))
    event.add('lab_tweaks:iron_candle_holders', buildColorVariants('supplementaries:candle_holderXX', global.fullColors))
    event.add('lab_tweaks:gold_candle_holders', buildColorVariants('suppsquared:gold_candle_holderXX', global.fullColors))

    event.add('lab_tweaks:coral', buildVariants(
        [
           'minecraft:XX_coral_block',
           'minecraft:dead_XX_coral_block',
           'minecraft:XX_coral_fan',
           'minecraft:dead_XX_coral_fan',
           'minecraft:XX_coral',
           'minecraft:dead_XX_coral'
        ],
        [
            'tube',
            'brain',
            'bubble',
            'fire',
            'horn'
        ]
    ))

    event.add('lab_tweaks:block_sets/thatch', buildVariants(
        [
           'natures_spirit:XX_thatch',
           'natures_spirit:XX_thatch_stairs',
           'natures_spirit:XX_thatch_slab',
           'natures_spirit:XX_thatch_carpet'
        ],
        [
            'xeric',
            'coconut',
            'evergreen'
        ]
    ))
    
    event.add('lab_tweaks:block_sets/paper', buildVariants(
        [
           'natures_spirit:XX_block',
           'natures_spirit:XX_panel',
           'natures_spirit:XX_door',
           'natures_spirit:XX_trapdoor'
        ],
        [
            'paper',
            'framed_paper',
            'blooming_paper'
        ]
    ))

    const woodenBlockSet = [
        'NN:XX_LL',
        'NN:XX_WW',
        'NN:stripped_XX_LL',
        'NN:stripped_XX_WW',
        'condiments:SSpolished_XX_LL',
        'condiments:SSpolished_XX_WW',
        'NN:XX_planks',
        'NN:XX_stairs',
        'NN:XX_slab',
        'condiments:SSXX_accent',
        'condiments:SSXX_wall',
        'NN:XX_fence',
        'NN:XX_fence_gate',
        'NN:XX_door',
        'NN:XX_trapdoor',
        'NN:XX_pressure_plate',
        'NN:XX_button',
        'NN:XX_sign',
        'NN:XX_hanging_sign',
        'supplementaries:SSway_sign_XX',
        'NN:XX_BB',
        'NN:XX_chest_BB',
        'supplementaries:SScannon_boat_XX',
        'farmersdelight:XX_cabinet',
        'everycomp:fd/NN/XX_cabinet',
        'create:XX_window',
        'everycomp:c/NN/XX_window',
        'create:XX_window_pane',
        'everycomp:c/NN/XX_window_pane'
    ]

    const woodenWindowPanes = [
        'create:XX_window_pane',
        'everycomp:c/NN/XX_window_pane'
    ]

    global.woodTypes.forEach(woodType => {
        const splitId = woodType.id.split(':')
        const vanilla = splitId.length == 1
        if (vanilla) splitId.unshift('minecraft')
        const namespace = splitId[0]
        const id = splitId[1]

        const separator = vanilla ? '' : namespace + '/'
        const log = woodType.stem ? 'stem' : 'log'
        const bark = woodType.stem ? 'hyphae' : 'wood'
        const boat = woodType.raft ? 'raft' : 'boat'

        event.add(
            'lab_tweaks:block_sets/wooden/' + id,
            woodenBlockSet.map(blockType => blockType
                .replace('NN', namespace)
                .replace('SS', separator)
                .replace('XX', id)
                .replace('LL', log)
                .replace('WW', bark)
                .replace('BB', boat)
            )
        )

        event.add(
            'lab_tweaks:wooden_window_panes',
            woodenWindowPanes.map(blockType => blockType
                .replace('NN', namespace)
                .replace('XX', id)
            )
        )
    })


    const smallBlockSet = [
        '',
        '_stairs',
        '_slab'
    ]

    const basicBlockSet = [
        '',
        '_stairs',
        '_slab',
        '_wall'
    ]

    const smallBrickBlockSet = [
        's',
        '_stairs',
        '_slab'
    ]


    const basicBrickBlockSet = [
        's',
        '_stairs',
        '_slab',
        '_wall'
    ]

    const emptyBlockSet = ['']


    function buildColoredTag(tag, template, colors, blockSet) {
        const colorVariants = buildColorVariants(template, colors)
        const entries = [];
        blockSet.forEach(blockType =>
            colorVariants.forEach(variant => entries.push(variant + blockType))
        )

        event.add('lab_tweaks:block_sets/' + tag, entries)
    }

    buildColoredTag('mud_bricks', 'arts_and_crafts:XXmud_brick', global.baseColors, basicBrickBlockSet)
    event.add('lab_tweaks:block_sets/mud_bricks', basicBrickBlockSet.map(blockType => 'minecraft:mud_brick' + blockType))
    buildColoredTag('soapstone', 'arts_and_crafts:XXsoapstone', global.fullColors, basicBlockSet)
    buildColoredTag('polished_soapstone', 'arts_and_crafts:XXpolished_soapstone', global.fullColors, basicBlockSet)
    buildColoredTag('soapstone_bricks', 'arts_and_crafts:XXsoapstone_brick', global.fullColors, basicBrickBlockSet)
    buildColoredTag('terracotta_shingles', 'arts_and_crafts:XXterracotta_shingle', global.fullColors, basicBrickBlockSet)


    const pietraforteColors = [
        'verdant',
        'umber',
        'ochre',
        'marlot',
        'jet',
        'ivory',
        'hazel',
        'beige'
    ]

    function buildPietraforteTag(tag, template, blockSet) {
        const entries = []
        blockSet.forEach(blockType =>
            pietraforteColors.forEach(color => entries.push(template.replace('XX', color) + blockType))
        )

        event.add('lab_tweaks:block_sets/' + tag, entries)
    }

    buildPietraforteTag('pietraforte', 'arts_and_crafts:XX_pietraforte', basicBlockSet)
    buildPietraforteTag('cut_pietraforte', 'arts_and_crafts:cut_XX_pietraforte', basicBlockSet)
    buildPietraforteTag('smooth_pietraforte', 'arts_and_crafts:smooth_XX_pietraforte', basicBlockSet)
    buildPietraforteTag('cobbled_pietraforte', 'arts_and_crafts:cobbled_XX_pietraforte', basicBlockSet)

    buildPietraforteTag('pietraforte_bricks', 'arts_and_crafts:XX_pietraforte_brick', basicBrickBlockSet)

    buildPietraforteTag('chiseled_pietraforte', 'arts_and_crafts:chiseled_XX_pietraforte', emptyBlockSet)
    buildPietraforteTag('pietraforte_pillars', 'arts_and_crafts:XX_pietraforte_pillar', emptyBlockSet)


    event.add('lab_tweaks:block_sets/copper_blocks', [
        'copper_block',
        'exposed_copper',
        'weathered_copper',
        'oxidized_copper',
        'waxed_copper_block',
        'waxed_exposed_copper',
        'waxed_weathered_copper',
        'waxed_oxidized_copper'
    ])

    const copperStages = [
        '',
        'exposed_',
        'weathered_',
        'oxidized_',
        'waxed_',
        'waxed_exposed_',
        'waxed_weathered_',
        'waxed_oxidized_'
    ]

    function buildCopperTag(tag, template, blockSet) {
        const entries = []
        blockSet.forEach(blockType =>
            copperStages.forEach(stage => entries.push(template.replace('XX', stage) + blockType))
        )

        event.add('lab_tweaks:block_sets/' + tag, entries)
    }

    buildCopperTag('chiseled_copper', 'minecraft:XXchiseled_copper', emptyBlockSet)
    buildCopperTag('copper_grates', 'minecraft:XXcopper_grate', emptyBlockSet)
    buildCopperTag('copper_doors', 'minecraft:XXcopper_door', emptyBlockSet)
    buildCopperTag('copper_trapdoors', 'minecraft:XXcopper_trapdoor', emptyBlockSet)
    buildCopperTag('copper_bulbs', 'minecraft:XXcopper_bulb', emptyBlockSet)

    buildCopperTag('cut_copper', 'minecraft:XXcut_copper', smallBlockSet)

    buildCopperTag('copper_tiles', 'create:XXcopper_tile', smallBrickBlockSet)
    buildCopperTag('copper_shingles', 'create:XXcopper_shingle', smallBrickBlockSet)


    const sandstoneVariants = [
        ':XX',
        ':XX_stairs',
        ':XX_slab',
        ':XX_wall',
        ':chiseled_XX',
        ':smooth_XX',
        ':smooth_XX_stairs',
        ':smooth_XX_slab',
        ':cut_XX',
        ':cut_XX_slab'
    ]

    function buildSandstoneTag(namespace, name) {
        event.add(
            'lab_tweaks:block_sets/' + name,
            sandstoneVariants.map(variant => namespace + variant.replace('XX', name))
        )
    }

    buildSandstoneTag('minecraft', 'sandstone')
    buildSandstoneTag('minecraft', 'red_sandstone')
    buildSandstoneTag('natures_spirit', 'pink_sandstone')


    function buildVariantsTag(variants, variantType) {
        event.add(
            'lab_tweaks:block_sets/' + variantType,
            variants.map(variant => variant.replace('XX', variantType))
        )
    }


    const baseCreateVariants = [
		'create:cut_XX',
		'create:cut_XX_stairs',
		'create:cut_XX_slab',
		'create:cut_XX_wall',
		'create:polished_cut_XX',
		'create:polished_cut_XX_stairs',
		'create:polished_cut_XX_slab',
		'create:polished_cut_XX_wall',
		'create:cut_XX_bricks',
		'create:cut_XX_brick_stairs',
		'create:cut_XX_brick_slab',
		'create:cut_XX_brick_wall',
		'create:small_XX_bricks',
		'create:small_XX_brick_stairs',
		'create:small_XX_brick_slab',
		'create:small_XX_brick_wall',
		'create:layered_XX',
		'create:XX_pillar'
	]

    const vanillaStoneVariants = baseCreateVariants.concat(
        'minecraft:XX',
        'minecraft:XX_stairs',
        'minecraft:XX_slab',
        'minecraft:XX_wall',
        'minecraft:polished_XX',
        'minecraft:polished_XX_stairs',
        'minecraft:polished_XX_slab'
    )

    const vanillaPolishedVariants = baseCreateVariants.concat(
        'minecraft:XX',
        'minecraft:XX_bricks',
        'minecraft:XX_brick_stairs',
        'minecraft:XX_brick_slab',
        'minecraft:XX_brick_wall',
        'minecraft:polished_XX',
        'minecraft:polished_XX_stairs',
        'minecraft:polished_XX_slab',
        'minecraft:polished_XX_wall',
        'minecraft:chiseled_XX'
    )

    const createStoneVariants = baseCreateVariants.concat('create:XX')

	buildVariantsTag(vanillaStoneVariants, 'granite')
	buildVariantsTag(vanillaStoneVariants, 'diorite')
	buildVariantsTag(vanillaStoneVariants, 'andesite')
	buildVariantsTag(vanillaPolishedVariants, 'tuff')
	buildVariantsTag(vanillaPolishedVariants, 'deepslate')
	buildVariantsTag(baseCreateVariants.concat('minecraft:dripstone_block'), 'dripstone')
	buildVariantsTag(baseCreateVariants.concat('minecraft:calcite'), 'calcite')

	buildVariantsTag(createStoneVariants, 'asurine')
	buildVariantsTag(createStoneVariants, 'crimsite')
	buildVariantsTag(createStoneVariants, 'limestone')
	buildVariantsTag(createStoneVariants, 'ochrum')
	buildVariantsTag(createStoneVariants, 'scoria')
	buildVariantsTag(createStoneVariants, 'scorchia')
    buildVariantsTag(createStoneVariants, 'veridium')

    const baseNaturesSpiritVariants = [
        'natures_spirit:XX',
        'natures_spirit:XX_stairs',
        'natures_spirit:XX_slab',
        'natures_spirit:chiseled_XX',
        'natures_spirit:polished_XX',
        'natures_spirit:polished_XX_stairs',
        'natures_spirit:polished_XX_slab',
        'natures_spirit:polished_XX_wall',
        'natures_spirit:XX_bricks',
        'natures_spirit:cracked_XX_bricks',
        'natures_spirit:XX_brick_stairs',
        'natures_spirit:XX_brick_slab',
        'natures_spirit:XX_brick_wall',
        'natures_spirit:XX_tiles',
        'natures_spirit:cracked_XX_tiles',
        'natures_spirit:XX_tile_stairs',
        'natures_spirit:XX_tile_slab',
        'natures_spirit:XX_tile_wall'
    ]

    buildVariantsTag(baseNaturesSpiritVariants, 'chert')
    buildVariantsTag(baseNaturesSpiritVariants, 'travertine')


    const stoneZoneMissingVariants = [
        "stonezone:c/NN/cut_XX_slab",
        "stonezone:c/NN/polished_cut_XX_slab",
        "stonezone:c/NN/cut_XX_brick_slab",
        "stonezone:c/NN/small_XX_brick_slab"
    ]
    
    function fixStoneZoneTag(namespace, variantType) {
        event.add(
            'stonezone:' + namespace + '/' + variantType,
            stoneZoneMissingVariants.map(variant => variant.replace('NN', namespace).replace('XX', variantType))
        )
    }

    fixStoneZoneTag('natures_spirit', 'chert')
    fixStoneZoneTag('natures_spirit', 'travertine')
    fixStoneZoneTag('enderscape', 'mirestone')
    fixStoneZoneTag('enderscape', 'kurodite')
    fixStoneZoneTag('enderscape', 'veradite')
    fixStoneZoneTag('arts_and_crafts', 'gypsum')
})

ServerEvents.tags('fluid', event => {
    event.remove('c:dyes/white', 'create_dragons_plus:white_dye')
    event.remove('c:dyes/light_gray', 'create_dragons_plus:light_gray_dye')
    event.remove('c:dyes/gray', 'create_dragons_plus:gray_dye')
    event.remove('c:dyes/brown', 'create_dragons_plus:brown_dye')
    event.remove('c:dyes/red', 'create_dragons_plus:red_dye')
    event.remove('c:dyes/orange', 'create_dragons_plus:orange_dye')
    event.remove('c:dyes/yellow', 'create_dragons_plus:yellow_dye')
    event.remove('c:dyes/lime', 'create_dragons_plus:lime_dye')
    event.remove('c:dyes/green', 'create_dragons_plus:green_dye')
    event.remove('c:dyes/cyan', 'create_dragons_plus:cyan_dye')
    event.remove('c:dyes/light_blue', 'create_dragons_plus:light_blue_dye')
    event.remove('c:dyes/blue', 'create_dragons_plus:blue_dye')
    event.remove('c:dyes/purple', 'create_dragons_plus:purple_dye')
    event.remove('c:dyes/magenta', 'create_dragons_plus:magenta_dye')
    event.remove('c:dyes/pink', 'create_dragons_plus:pink_dye')
})

ServerEvents.tags('enchantment', event => {
    event.remove('minecraft:on_random_loot', 'soulbound:soulbound')
    event.remove('minecraft:in_enchanting_table', 'soulbound:soulbound')
    event.remove('minecraft:on_traded_equipment', 'soulbound:soulbound')
    event.remove('minecraft:tradeable', ['soulbound:soulbound', 'minecraft:mending'])
})

ServerEvents.recipes(event => {
    event.remove({ output: '#suppsquared:item_shelves', not: { mod: 'brewinandchewin' } })
})