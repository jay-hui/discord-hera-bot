const prefix = process.env.PREFIX || (require('../global.json')).prefix;

cmd = async (client, message) => {

    let embed = {
        color: 0xff0000,
        author: {
            name: 'hera',
            icon_url: 'https://cdn.discordapp.com/avatars/854011989726199828/3a31c4e747041dc5d5ee7adc85f6fede.webp?size=128',
            url: 'https://github.com/javier-hui/hera-bot',
        },
        title: "how to use me",
        description: `this bot is made by javier, so if u have more questions, feel free to ask him :)`,
        fields: [
            {
                name: "hera who `lunch/dinner` `today/tonight/tomorrow`",
                value: "shows who's gonna eat at home\ne.g. `hera who dinner tonight`"
            },
            {
                name: "hera show `person`",
                value: "shows whether the person would eat at home or not for this week. shows yourself by default.\ne.g. `hera show javier`"
            },
            {
                name: "hera `home/no` `lunch/dinner` all `weekday` (`reason`)",
                value: "rewrites the rule for that weekday regularly, if not home then provide reason\ne.g. `hera no dinner all friday (party)`"
            },
            {
                name: "hera `home/no` `lunch/dinner` `dd/mm` (`reason`)",
                value: "sets a specific rule for that day in particular\ne.g. `hera home lunch 13/2` will update your availability for lunch on 13/2\ne.g. `hera no dinner tonight (eat with colleagues)` say this when you can't come home tonight"
            },
            {
                name: "-------- NOT DONE --------",
                value: "don't use any command below this line"
            },
            {
                name: "hera add groceries `item`",
                value: "adds a grocery item on the list\ne.g. `hera add groceries milk`"
            },
            {
                name: "hera show groceries",
                value: "shows grocery list"
            },
            {
                name: "hera clear groceries",
                value: "clears all groceries in the list"
            },
            {
                name: "hera remove groceries `index`",
                value: "removes the grocery item with the specified index from the list\ne.g. `hera remove groceries 2` will remove the second item on the list"
            }
        ],
        timestamp: new Date()
    }

    message.channel.send({ embed: embed });
}


module.exports = {
    name: 'help',
    aliases: [],
    run: cmd
}