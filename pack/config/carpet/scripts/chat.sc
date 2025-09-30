import('format_text', 'format_text', 'json_to_markdown', 'cast_to_json');

__config() -> {
    'scope' -> 'global'
};

__on_player_message_broadcast(player, message) -> (
    run('tellraw @a ' + encode_json(format_text('<<click:suggest_command=/m ' + player + ' ><selector:@s /></click>> ' + format_links(message))));

    return('cancel');
);

format_links(text) -> (
    links = [];

    while (text ~ global_link_delim, length(text),
        link = slice(text ~ global_link_delim, 0, -1);
        link_id = '!link' + floor(rand(10000000000000));
        links += [link, link_id];
        text = replace_first(text, global_link_delim, link_id);
    );

    for (links,
        text = replace_first(
            text,
            _:1,
            '<aqua><underline><click:open_url=' + _:0 + '>'
            + _:0
            + '</click></underline></aqua>'
        );
    );

    return(text);
);
