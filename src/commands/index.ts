import { Collection } from 'discord.js';
import type { DiscordBotSlashCommand } from './types';
import { weatherCommand } from './weather';

const commands = new Collection<string, DiscordBotSlashCommand>();

commands.set(weatherCommand.data.name, weatherCommand);

export default commands;