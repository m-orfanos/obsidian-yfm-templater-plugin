# Obsidian YAML front matter template plugin

This is a plugin used to create templates for [Obsidian](https://obsidian.md). The active file's YAML front matter is passed as data to a template engine.

## Usage

- Open a file
- Open the Command Palette, search for the plugin, select the "insert" command

![command-palette](images/command-palette.png)

- Choose a template

![choose-template](images/choose-template.png)

- The plugin will insert the template into the active file

Note: The YAML front matter of both files will be merged.

See [examples](examples/README.md).

## Features

The template engine is used to process a template with the YAML front matter of the active file passed as a data object.

Currently the only template engine is [Etajs](https://eta.js.org/). Eta is _very_ fast and allows templates to be written using JavaScript. Dates can be using the `date-fns` library.

## Settings

![settings](images/settings.png)

- Configure a `templates` directory.

Files in this directory will be available as templates

- Configure a `extensions` file.

This file extends the template engine with user-defined functions.

## Compatibility

Requires Obsidian v0.10.2 or above to work properly.

## Installation

- Clone this repo in your vault `VaultFolder/.obsidian/plugins/`.
- `npm i` to install dependencies.
- `npm build` to compile the project.
