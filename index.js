// POR FAVOR, antes de fazer comandos, funções ou qualquer coisa por conta propria, veja o README.md antes!

const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db"); // <--- ISSO É NECESSARIO PARA USAR O BANCO DE DADOS

// Extensões basicas que você pode usar (algumas que alguns bots já usam)
const { ForgeCanvas } = require("@tryforge/forge.canvas");
const { ForgeMusic } = require("@tryforge/forge.music");
const { ForgeTopGG } = require("@tryforge/forge.topgg");

// Relaxe com a questão dos eventos e intents, ativando tudo deve funcionar qualquer categoria do seu bot
const client = new ForgeClient({
    intents: [
        "Guilds",
        "GuildMembers",
        "GuildModeration",
        "GuildEmojisAndStickers",
        "GuildIntegrations",
        "GuildWebhooks",
        "GuildInvites",
        "GuildVoiceStates",
        "GuildPresences",
        "GuildMessages",
        "GuildMessageReactions",
        "GuildMessageTyping",
        "DirectMessages",
        "DirectMessageReactions",
        "DirectMessageTyping",
        "MessageContent",
        "GuildScheduledEvents",
        "AutoModerationConfiguration",
        "AutoModerationExecution",
        "GuildMessagePolls",
        "DirectMessagePolls"
    ],
    events: [
        "autoModerationActionExecution",
        "autoModerationRuleCreate",
        "autoModerationRuleDelete",
        "autoModerationRuleUpdate",
        "channelCreate",
        "channelDelete",
        "channelPinsUpdate",
        "channelUpdate",
        "clientReady",
        "debug",
        "emojiCreate",
        "emojiDelete",
        "emojiUpdate",
        "entitlementCreate",
        "entitlementDelete",
        "entitlementUpdate",
        "error",
        "guildAuditLogEntryCreate",
        "guildAvailable",
        "guildBanAdd",
        "guildBanRemove",
        "guildCreate",
        "guildDelete",
        "guildIntegrationsUpdate",
        "guildMemberAdd",
        "guildMemberAvailable",
        "guildMemberRemove",
        "guildMemberUpdate",
        "guildScheduledEventCreate",
        "guildScheduledEventDelete",
        "guildScheduledEventUpdate",
        "guildScheduledEventUserAdd",
        "guildScheduledEventUserRemove",
        "guildSoundboardSoundCreate",
        "guildSoundboardSoundDelete",
        "guildSoundboardSoundUpdate",
        "guildUnavailable",
        "guildUpdate",
        "interactionCreate",
        "inviteCreate",
        "inviteDelete",
        "messageCreate",
        "messageDelete",
        "messageDeleteBulk",
        "messagePollVoteAdd",
        "messagePollVoteRemove",
        "messageReactionAdd",
        "messageReactionRemove",
        "messageReactionRemoveAll",
        "messageReactionRemoveEmoji",
        "messageUpdate",
        "presenceUpdate",
        "roleCreate",
        "roleDelete",
        "roleUpdate",
        "shardDisconnect",
        "shardError",
        "shardReady",
        "shardReconnecting",
        "shardResume",
        "stageInstanceCreate",
        "stageInstanceDelete",
        "stageInstanceUpdate",
        "stickerCreate",
        "stickerDelete",
        "stickerUpdate",
        "subscriptionCreate",
        "subscriptionDelete",
        "subscriptionUpdate",
        "threadCreate",
        "threadDelete",
        "threadMemberUpdate",
        "threadUpdate",
        "typingStart",
        "userUpdate",
        "voiceChannelEffectSend",
        "voiceStateUpdate",
        "webhooksUpdate"
    ],
    extensions: [
    new ForgeDB(),
    new ForgeCanvas(),
    new ForgeMusic(),
    new ForgeTopGG({
        post: {
            interval: 3600000
        }
    })
    ],
    prefixes: [
        "prefixo" // Apenas troque "prefixo" pelo prefixo que você quer usar no seu bot, pode usar array que nem o aoi.js // ['prefixo1', 'prefixo2', ...etc]
    ],
    prefixCaseInsensitive: true, // Para funcionar tanto com a palavra PrEfixo (letras maiusculas), quanto com a palavra prefixo (letras minusculas)
    allowBots: true, // Permite seu bot falar com outros bots
    disableConsoleErrors: true, // Desativa os erros no console
    mobile: true, // Ativa o status de celular no bot
    respondOnEdit: true // Responde comandos quando uma mensagem editada é detectada
});

ForgeDB.variables({
"var1": "valor1",
"var2": "valor2",
"var3": "valor3",
// ... adicione mais variaveis de acordo com suas necessidades
})

client.functions.load('./src/functions/'); // Exemplo de paths: './functions', './src/functions'
client.commands.load('./src/client/commands'); // Exemplo de paths: './commands', './src/client/commands'
client.applicationCommands.load('./src/client/slash'); // Exemplo de paths: './slash', './src/client/slash'

// NUNCA COMPARTILHE OU DEIXE SEU TOKEN EXPOSTO - Isso é para a segurança de teu bot
client.login("seu incrivel token"); // Apenas troque "seu incrivel token" pelo token do seu bot