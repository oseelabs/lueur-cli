#!/usr/bin/env node
import chalk from "chalk";
import { Command } from "commander";
import figlet from "figlet";

figlet(
    "Lueur  CLI",
    {
        width: 80,
    },
    (err, data) => {
        if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
        }
        console.log(chalk.hex("#ff6600")(data));
    }
);

async function run() {
    
    const program = new Command('lueur');
    program
        .option('-t, --text [text]', 'Test console log', 'Hello, Guest')
        .parse()
        
    const [] = program.args;
    const options = program.opts();

    console.log(chalk.green(`${options.text}`))
};

await run();
