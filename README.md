# Weather Bot

This is a simple bot that uses the [OpenWeatherMap API](https://openweathermap.org/api) to get the weather for a given city.

## Environment setup

Add a `.env` file with the following keys:

- `BOT_TOKEN`: Your bot's authentication token
- `CLIENT_ID`: Your application's ID
- `GUILD_ID`: Your server's ID
- `WEATHER_API_KEY`: Your OpenWeatherMap API key

Run `yarn install` to download dependencies

## Running the scripts

- `yarn start` syncs the bot's commands then starts the bot and signs it into Discord
- `yarn deploy-commands` will sync the commands you added to the bot
- `yarn delete-commands` will remove all commands previously added

## Adding a new command

1. Create a command according to the `DiscordBotSlashCommand` [interface](https://github.com/kobili/discord-bot-starter/blob/main/src/commands/types.ts)
2. Add the new command to the `commands` Collection found [here](https://github.com/kobili/discord-bot-starter/blob/main/src/commands/index.ts)
3. Run the `deploy-commands` script to sync the new command to your bot

## Credits

Based on [discord-bot-starter](https://github.com/kobili/discord-bot-starter)
