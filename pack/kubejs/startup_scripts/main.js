function mapColorItems(colors, template) {
	return colors.map(color => template.replace('XX', color).replace(':_', ':').replace(/_$/, '')).reverse()
}

const creeperOverhaulCreepers = [
	'birch',
	'ocean',
	'snowy',
	'beach',
	'spruce',
	'dark_oak',
	'cave',
	'dripstone',
	'swamp',
	'mushroom',
	'savannah',
	'hills',
	'badlands',
	'desert',
	'bamboo',
	'jungle'
]

StartupEvents.modifyCreativeTab('minecraft:tools_and_utilities', event => {
	event.addAfter('minecraft:lead', 'minecraft:bundle')

	event.addBefore('minecraft:lead', 'crittersandcompanions:silk_lead')
	event.addAfter('minecraft:fishing_rod', 'crittersandcompanions:grappling_hook')
	event.addAfter('minecraft:tropical_fish_bucket', [
		'crittersandcompanions:sea_bunny_bucket',
		'crittersandcompanions:dumbo_octopus_bucket',
		'crittersandcompanions:koi_fish_bucket'
	])

	event.addAfter('minecraft:milk_bucket', [
		'create_enchantment_industry:experience_bucket',
		'create_dragons_plus:black_dye_bucket',
		'create:chocolate_bucket',
		'create:honey_bucket'
	])

	event.remove('minecraft:lead')
	event.addAfter('minecraft:name_tag', 'minecraft:lead')

	event.addAfter('minecraft:stone_hoe', 'farmersdelight:flint_knife')
	event.addAfter('minecraft:iron_hoe', 'farmersdelight:iron_knife')
	event.addAfter('minecraft:golden_hoe', 'farmersdelight:golden_knife')
	event.addAfter('minecraft:diamond_hoe', 'farmersdelight:diamond_knife')
	event.addAfter('minecraft:netherite_hoe', 'farmersdelight:netherite_knife')
})

StartupEvents.modifyCreativeTab('minecraft:building_blocks', event => {
	event.addAfter('vanillabackport:pale_oak_trapdoor', 'vanillabackport:pale_oak_pressure_plate')

	event.remove('minecraft:mud_bricks')
	event.remove('minecraft:mud_brick_stairs')
	event.remove('minecraft:mud_brick_slab')
	event.remove('minecraft:mud_brick_wall')

	event.addBefore('vanillabackport:resin_bricks', 'vanillabackport:resin_block')

	function addCopperVariants(variants) {
		event.addBefore(
			'minecraft:copper_door',
			variants
		)
		event.addBefore(
			'minecraft:exposed_copper_door',
			variants.map(variant => variant.replace(':', ':exposed_'))
		)
		event.addBefore(
			'minecraft:weathered_copper_door',
			variants.map(variant => variant.replace(':', ':weathered_'))
		)
		event.addBefore(
			'minecraft:oxidized_copper_door',
			variants.map(variant => variant.replace(':', ':oxidized_'))
		)
		event.addBefore(
			'minecraft:waxed_copper_door',
			variants.map(variant => variant.replace(':', ':waxed_'))
		)
		event.addBefore(
			'minecraft:waxed_exposed_copper_door',
			variants.map(variant => variant.replace(':', ':waxed_exposed_'))
		)
		event.addBefore(
			'minecraft:waxed_weathered_copper_door',
			variants.map(variant => variant.replace(':', ':waxed_weathered_'))
		)
		event.addBefore(
			'minecraft:waxed_oxidized_copper_door',
			variants.map(variant => variant.replace(':', ':waxed_oxidized_'))
		)
	}

	addCopperVariants([
		'create:copper_tiles',
		'create:copper_tile_stairs',
		'create:copper_tile_slab',
		'create:copper_shingles',
		'create:copper_shingle_stairs',
		'create:copper_shingle_slab'
	])

	const baseVariants = [
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
	].reverse()

	const createVariants = baseVariants.concat('create:XX')

	function addStoneVariants(variants, stone, after) {
		event.addAfter(
			after,
			variants.map(variant => variant.replace('XX', stone))
		)
	}

	addStoneVariants(createVariants, 'veridium', 'minecraft:chiseled_tuff_bricks')
	addStoneVariants(createVariants, 'scorchia', 'minecraft:chiseled_tuff_bricks')
	addStoneVariants(createVariants, 'scoria', 'minecraft:chiseled_tuff_bricks')
	addStoneVariants(createVariants, 'ochrum', 'minecraft:chiseled_tuff_bricks')
	addStoneVariants(createVariants, 'limestone', 'minecraft:chiseled_tuff_bricks')
	addStoneVariants(createVariants, 'crimsite', 'minecraft:chiseled_tuff_bricks')
	addStoneVariants(createVariants, 'asurine', 'minecraft:chiseled_tuff_bricks')

	addStoneVariants(baseVariants, 'granite', 'minecraft:polished_granite_slab')
	addStoneVariants(baseVariants, 'diorite', 'minecraft:polished_diorite_slab')
	addStoneVariants(baseVariants, 'andesite', 'minecraft:polished_andesite_slab')
	addStoneVariants(baseVariants, 'deepslate', 'minecraft:deepslate_tile_wall')
	addStoneVariants(baseVariants, 'tuff', 'minecraft:chiseled_tuff_bricks')
	addStoneVariants(baseVariants.concat('minecraft:dripstone_block'), 'dripstone', 'natures_spirit:chert_tile_wall')
	addStoneVariants(baseVariants.concat('minecraft:calcite'), 'calcite', 'natures_spirit:chert_tile_wall')

	event.addAfter('minecraft:warped_button', [
		'mynethersdelight:powdery_block',
        'mynethersdelight:stripped_powdery_block',
        'mynethersdelight:powdery_planks',
        'mynethersdelight:powdery_mosaic',
        'mynethersdelight:powdery_stairs',
        'mynethersdelight:powdery_mosaic_stairs',
        'mynethersdelight:powdery_slab',
        'mynethersdelight:powdery_mosaic_slab',
        'mynethersdelight:powdery_fence',
        'mynethersdelight:powdery_fence_gate',
        'mynethersdelight:powdery_door',
        'mynethersdelight:powdery_trapdoor',
        'mynethersdelight:powdery_pressure_plate',
		'mynethersdelight:powdery_button'
	].reverse())

	const vanillaWoodVariants = [
		'create:XX_window_pane',
		'create:XX_window'
	]

	const modWoodVariants = [
		'everycomp:c/NN/XX_window_pane',
		'everycomp:c/NN/XX_window'
	]

	global.woodTypes.forEach(woodType => {
        const splitId = woodType.id.split(':')
        const vanilla = splitId.length == 1
        if (vanilla) splitId.unshift('minecraft')
        const namespace = splitId[0]
        const id = splitId[1]

		const variants = (vanilla ? vanillaWoodVariants : modWoodVariants).map(variant => variant
			.replace('NN', namespace)
			.replace('XX', id)
		)

		event.addAfter(
			namespace + ':' + id + '_button',
			variants
		)
    })
})

StartupEvents.modifyCreativeTab('minecraft:functional_blocks', event => {
	event.addBefore('minecraft:bell', 'supplementaries:jar_boat')

	event.addAfter('minecraft:pink_bed', mapColorItems(global.baseColors, 'create:XXseat'))

	event.addAfter('minecraft:armor_stand', 'dummmmmmy:target_dummy')

	event.addBefore('minecraft:skeleton_skull', 'lootr:trophy')
})

StartupEvents.modifyCreativeTab('minecraft:natural_blocks', event => {
	event.addAfter('minecraft:spore_blossom', 'spring_to_life:firefly_bush')
	event.addAfter('minecraft:pink_petals', 'spring_to_life:leaf_litter')
	event.addAfter('minecraft:pink_petals', 'spring_to_life:wildflowers')
	event.addAfter('minecraft:torchflower', 'spring_to_life:cactus_flower')
	event.addAfter('minecraft:fern', 'spring_to_life:bush')
	event.addAfter('minecraft:fern', 'spring_to_life:short_dry_grass')
	event.addAfter('minecraft:large_fern', 'spring_to_life:tall_dry_grass')

	event.addAfter('minecraft:cactus', 'creeperoverhaul:tiny_cactus')

	event.addAfter('minecraft:slime_block', 'crittersandcompanions:sea_bunny_slime_block')
	event.addAfter('vanillabackport:dried_ghast', 'crittersandcompanions:silk_cocoon')

	event.addBefore('natures_spirit:white_wisteria_leaves', 'natures_spirit:wisteria_leaves')

	event.addBefore('minecraft:ochre_froglight', 'vanillabackport:resin_block')

	event.remove('arts_and_crafts:white_chalk')

	event.addAfter('minecraft:raw_copper_block', 'create:raw_zinc_block')
})

StartupEvents.modifyCreativeTab('minecraft:redstone_blocks', event => {
	event.addBefore('minecraft:oak_chest_boat', [
		'minecraft:oak_boat',
		'minecraft:bamboo_raft'
	])
	event.addAfter('minecraft:bamboo_chest_raft', [
		'supplementaries:cannon_boat_bamboo',
		'supplementaries:cannon_boat_oak'
	])
	event.addAfter('minecraft:slime_block', 'crittersandcompanions:sea_bunny_slime_block')

	event.addAfter('minecraft:powered_rail', 'create:controller_rail')
	event.addAfter('minecraft:redstone_lamp', 'create:rose_quartz_lamp')
	event.addAfter('minecraft:observer', 'create:redstone_contact')
	event.addBefore('minecraft:lever', 'create:analog_lever')
	event.addAfter('minecraft:comparator', [
		'create:redstone_link',
		'create:powered_toggle_latch',
		'create:powered_latch',
		'create:pulse_timer',
		'create:pulse_extender',
		'create:pulse_repeater'
	])
})

StartupEvents.modifyCreativeTab('minecraft:colored_blocks', event => {
	event.addBefore('arts_and_crafts:white_decorated_pot', 'minecraft:decorated_pot')
	event.addBefore('arts_and_crafts:white_mud_bricks', [
		'minecraft:mud_bricks',
		'minecraft:mud_brick_stairs',
		'minecraft:mud_brick_slab',
		'minecraft:mud_brick_wall'
	])

	event.addBefore('natures_spirit:white_paper_lantern', mapColorItems(global.fullColors, 'suppsquared:gold_candle_holderXX').reverse())
	event.addAfter('minecraft:pink_bed', mapColorItems(global.baseColors, 'create:XXseat'))


	function fixOrder(colors, items) {
		for (let i = 0; i < colors.length; i++) {
			let coloredBlocks = items.map(block => block.replace(':', ':' + colors[i]).replace(':_', ':'))
			let after = coloredBlocks.slice(1).reverse()
			after.forEach(item => event.remove(item))
			event.addAfter(coloredBlocks[0], after)
		}
	}

	fixOrder(global.fullColors, [
		'natures_spirit:kaolin',
		'natures_spirit:kaolin_stairs',
		'natures_spirit:kaolin_slab'
	])
	
	fixOrder(global.fullColors, [
		'natures_spirit:kaolin_bricks',
		'natures_spirit:kaolin_brick_stairs',
		'natures_spirit:kaolin_brick_slab'
	])

	fixOrder(global.bleachedColors, [
		'natures_spirit:chalk',
		'natures_spirit:chalk_stairs',
		'natures_spirit:chalk_slab'
	])
})

StartupEvents.modifyCreativeTab('minecraft:combat', event => {
	event.addAfter('minecraft:egg', [
		'spring_to_life:blue_egg',
		'spring_to_life:brown_egg'
	])

	event.addAfter('minecraft:arrow', 'natures_spirit:cheese_arrow')

	event.addBefore('minecraft:totem_of_undying', [
		'crittersandcompanions:pearl_necklace_1',
		'crittersandcompanions:pearl_necklace_2',
		'crittersandcompanions:pearl_necklace_3'
	])
	event.addAfter('minecraft:wolf_armor', [
		'crittersandcompanions:diamond_dragonfly_armor',
		'crittersandcompanions:gold_dragonfly_armor',
		'crittersandcompanions:iron_dragonfly_armor'
	])
	event.addAfter('minecraft:diamond_horse_armor', [
		'horseshoes:diamond_horseshoes',
		'horseshoes:gold_horseshoes',
		'horseshoes:iron_horseshoes'
	])
})

StartupEvents.modifyCreativeTab('minecraft:spawn_eggs', event => {
	event.addAfter('minecraft:chicken_spawn_egg', 'spring_to_life:cold_chicken_spawn_egg')
	event.addAfter('minecraft:chicken_spawn_egg', 'spring_to_life:warm_chicken_spawn_egg')
	event.addAfter('minecraft:pig_spawn_egg', 'spring_to_life:cold_pig_spawn_egg')
	event.addAfter('minecraft:pig_spawn_egg', 'spring_to_life:warm_pig_spawn_egg')
	event.addAfter('minecraft:cow_spawn_egg', 'spring_to_life:cold_cow_spawn_egg')
	event.addAfter('minecraft:cow_spawn_egg', 'spring_to_life:warm_cow_spawn_egg')

	event.addAfter('minecraft:sheep_spawn_egg', 'crittersandcompanions:shima_enaga_spawn_egg')
	event.addAfter('minecraft:salmon_spawn_egg', 'crittersandcompanions:sea_bunny_spawn_egg')
	event.addAfter('minecraft:ravager_spawn_egg', 'crittersandcompanions:red_panda_spawn_egg')
	event.addAfter('minecraft:ocelot_spawn_egg', 'crittersandcompanions:otter_spawn_egg')
	event.addAfter('minecraft:iron_golem_spawn_egg', 'crittersandcompanions:leaf_insect_spawn_egg')
	event.addAfter('minecraft:iron_golem_spawn_egg', 'crittersandcompanions:koi_fish_spawn_egg')
	event.addAfter('minecraft:iron_golem_spawn_egg', 'crittersandcompanions:jumping_spider_spawn_egg')
	event.addAfter('minecraft:evoker_spawn_egg', 'crittersandcompanions:ferret_spawn_egg')
	event.addAfter('minecraft:dolphin_spawn_egg', 'crittersandcompanions:dumbo_octopus_spawn_egg')
	event.addAfter('minecraft:dolphin_spawn_egg', 'crittersandcompanions:dragonfly_spawn_egg')

	function addCreepers(variants) {
		event.addAfter(
			'minecraft:creeper_spawn_egg',
			variants.map(variant => 'creeperoverhaul:' + variant + '_creeper_spawn_egg')
		)
	}
	addCreepers(creeperOverhaulCreepers)
	
	event.remove('enderscape:end_trial_spawner')
	event.addAfter('minecraft:trial_spawner', 'enderscape:end_trial_spawner')
})

StartupEvents.modifyCreativeTab('minecraft:food_and_drinks', event => {
	event.addAfter('minecraft:tropical_fish', 'crittersandcompanions:koi_fish')
})

StartupEvents.modifyCreativeTab('minecraft:ingredients', event => {
	event.addAfter('minecraft:egg', [
		'spring_to_life:blue_egg',
		'spring_to_life:brown_egg'
	])

	event.addAfter('minecraft:string', 'crittersandcompanions:silk')
	event.addAfter('minecraft:feather', [
		'crittersandcompanions:sea_bunny_slime_bottle',
		'crittersandcompanions:pearl',
		'crittersandcompanions:clam',
		'crittersandcompanions:dragonfly_wing'
	])

	event.addAfter('minecraft:raw_copper', 'create:raw_zinc')
	event.addAfter('minecraft:iron_nugget', [
		'create:zinc_nugget',
		'create:copper_nugget'
	])
	event.addAfter('enderscape:raw_shadoline', [
		'create:crushed_raw_gold',
		'create:crushed_raw_zinc',
		'create:crushed_raw_copper',
		'create:crushed_raw_iron'
	])
	event.addAfter('minecraft:gold_nugget', 'create:brass_nugget')
	event.addAfter('minecraft:copper_ingot', 'create:zinc_ingot')
	event.addAfter('minecraft:gold_ingot', 'create:brass_ingot')
	event.addAfter('enderscape:nebulite', [
		'create:brass_sheet',
		'create:golden_sheet',
		'create:copper_sheet',
		'create:iron_sheet',
		'create:andesite_alloy'
	])

	function reorder(before, after) {
		event.remove(after)
		event.addAfter(before, after)
	}
	reorder('minecraft:guster_banner_pattern', 'enderscape:crescent_banner_pattern')

	function reorderTrim(before, after) {
		reorder(
			'minecraft:' + before + '_armor_trim_smithing_template',
			'more_armor_trims:' + after + '_armor_trim_smithing_template'
		)
	}
	reorderTrim('dune', 'greed')
	reorderTrim('dune', 'storm')
	reorderTrim('vex', 'horizon')
	reorderTrim('vex', 'ram')
	reorderTrim('wild', 'origin')
	reorderTrim('wild', 'beast')
	reorderTrim('wild', 'myth')
	reorderTrim('rib', 'wraith')
	reorderTrim('rib', 'fever')
	reorderTrim('ward', 'nihility')
})

StartupEvents.modifyCreativeTab('mynethersdelight:main', event => {
	event.addAfter('mynethersdelight:nether_bricks_stove', 'mynethersdelight:nether_bricks_soul_stove')
})

StartupEvents.modifyCreativeTab('create:base', event => {
	event.addAfter('create:spout', 'create_dragons_plus:fluid_hatch')
	event.addAfter('create:chocolate_bucket', 'create_dragons_plus:black_dye_bucket')
})

StartupEvents.modifyCreativeTab('create_dragons_plus:base', event => {
	event.remove(/./)
})

StartupEvents.modifyCreativeTab('vanillabackport:chase_the_skies', event => {
	event.remove(/./)
})

StartupEvents.modifyCreativeTab('vanillabackport:the_garden_awakens', event => {
	event.remove(/./)
})

StartupEvents.modifyCreativeTab('spring_to_life:spring_to_life_tab', event => {
	event.remove(/./)
})

// why tf is their tab name chickensaurs_items
StartupEvents.modifyCreativeTab('horseshoes:chickensaurs_items', event => {
	event.remove(/./)
})

StartupEvents.modifyCreativeTab('creeperoverhaul:item_group', event => {
	event.remove(/./)
})

StartupEvents.modifyCreativeTab('lootr:lootr', event => {
	event.remove(/./)
})

StartupEvents.modifyCreativeTab('crittersandcompanions:main', event => {
	event.remove(/./)
})

// everycomp does this late so I suppose this isn't possible
// StartupEvents.modifyCreativeTab('everycomp:everycomp', event => {
// 	event.remove(/./)
// })