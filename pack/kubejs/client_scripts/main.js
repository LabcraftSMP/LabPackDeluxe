// https://www.glfw.org/docs/3.3/group__keys.html

KeyBindJSEvents.modify(event => {
    event.modifyKey('key.socialInteractions', -1)

    event.modifyKey('key.lighty.toggle', 296)
    event.remove('key.lighty.enable')

    event.modifyKey('key.freecam.toggle', 85)
    event.remove('key.freecam.configGui')

    event.modifyKey('key.hide_icons', 74)
    event.modifyKey('key.voice_chat', 89)

    event.modifyKey('iris.keybind.reload', -1)
    event.modifyKey('iris.keybind.shaderPackSelection', -1)

    event.modifyKey('accessories.key.open_accessories_screen', -1)
    event.modifyKey('key.accessorify.open_widget', 66)
    event.modifyCategory('key.accessorify.open_widget', 'accessories.key.category.accessories')
    event.modifyCategory('key.accessorify.use_spyglass', 'accessories.key.category.accessories')
    event.modifyCategory('supplementaries.keybind.quiver', 'accessories.key.category.accessories')
    event.remove('key.accessorify.open_ender_chest')

    event.modifyCategory('key.do_a_barrel_roll.pitch_up', 'category.do_a_barrel_roll.do_a_barrel_roll')
    event.modifyCategory('key.do_a_barrel_roll.pitch_down', 'category.do_a_barrel_roll.do_a_barrel_roll')
    event.modifyCategory('key.do_a_barrel_roll.yaw_left', 'category.do_a_barrel_roll.do_a_barrel_roll')
    event.modifyCategory('key.do_a_barrel_roll.yaw_right', 'category.do_a_barrel_roll.do_a_barrel_roll')
    event.modifyCategory('key.do_a_barrel_roll.roll_left', 'category.do_a_barrel_roll.do_a_barrel_roll')
    event.modifyCategory('key.do_a_barrel_roll.roll_right', 'category.do_a_barrel_roll.do_a_barrel_roll')
    event.remove('key.do_a_barrel_roll.thrust_forward')
    event.remove('key.do_a_barrel_roll.thrust_backward')
    event.remove('key.do_a_barrel_roll.toggle_thrust')
    event.remove('key.do_a_barrel_roll.open_config')

    event.modifyKey('create.keyinfo.toolbelt', 96)
    event.remove('create.keyinfo.rotate_menu')

    event.modifyKey('key.jade.toggle_liquid', -1)
    event.modifyKey('key.jade.show_recipes', -1)
    event.modifyKey('key.jade.show_uses', -1)
    event.modifyKey('key.jade.narrate', -1)
    event.modifyKey('key.jade.show_overlay', 342)
    event.remove('key.jade.config')

    event.remove('key.entityculling.toggle')
    event.remove('key.entityculling.toggleBoxes')
    event.remove('key.fog.toggle')
    event.remove('key.kubejs.kubedex')
    event.remove('key.modernfix.config')
    // event.remove('key.supplemental_patches.reload_shaders')
})