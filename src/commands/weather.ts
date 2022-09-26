import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import type { DiscordBotSlashCommand } from "./types";

// example of a basic slash command
export const weatherCommand: DiscordBotSlashCommand = {

    data: new SlashCommandBuilder()
        .setName("weather")
        .addStringOption(option =>
            option.setName('city')
                .setDescription('name of the city')
                .setRequired(true))
        .setDescription("Get weather information for a city"),

    respond: async (interaction: ChatInputCommandInteraction) => {
        const API_KEY = process.env.WEATHER_API_KEY
        const city = interaction.options.getString('city');
        // https://openweathermap.org/api/geocoding-api
        const geocodingResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);
        const json = await geocodingResponse.json();
        const { name, state, country, lat, lon } = json[0];
        // https://openweathermap.org/current
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const weatherJson = await weatherResponse.json();
        const { temp, feels_like, humidity } = weatherJson.main;
        await interaction.reply(`Temperature in ${name}, ${state} ${country} is ${temp}°C, feels like ${feels_like}°C, humidity is ${humidity}%`);
    }
}
