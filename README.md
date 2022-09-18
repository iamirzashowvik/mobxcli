oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mvvmmobxcli
$ mobxcli COMMAND
running command...
$ mobxcli (--version)
mvvmmobxcli/1.0.2 darwin-arm64 node-v16.13.2
$ mobxcli --help [COMMAND]
USAGE
  $ mobxcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mobxcli hello PERSON`](#mobxcli-hello-person)
* [`mobxcli hello world`](#mobxcli-hello-world)
* [`mobxcli help [COMMAND]`](#mobxcli-help-command)
* [`mobxcli plugins`](#mobxcli-plugins)
* [`mobxcli plugins:install PLUGIN...`](#mobxcli-pluginsinstall-plugin)
* [`mobxcli plugins:inspect PLUGIN...`](#mobxcli-pluginsinspect-plugin)
* [`mobxcli plugins:install PLUGIN...`](#mobxcli-pluginsinstall-plugin-1)
* [`mobxcli plugins:link PLUGIN`](#mobxcli-pluginslink-plugin)
* [`mobxcli plugins:uninstall PLUGIN...`](#mobxcli-pluginsuninstall-plugin)
* [`mobxcli plugins:uninstall PLUGIN...`](#mobxcli-pluginsuninstall-plugin-1)
* [`mobxcli plugins:uninstall PLUGIN...`](#mobxcli-pluginsuninstall-plugin-2)
* [`mobxcli plugins update`](#mobxcli-plugins-update)
* [`mobxcli resource [FILE]`](#mobxcli-resource-file)

## `mobxcli hello PERSON`

Say hello

```
USAGE
  $ mobxcli hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/iamirzashowvik/mobxcli/blob/v1.0.2/dist/commands/hello/index.ts)_

## `mobxcli hello world`

Say hello world

```
USAGE
  $ mobxcli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ mobxcli hello world
  hello world! (./src/commands/hello/world.ts)
```

## `mobxcli help [COMMAND]`

Display help for mobxcli.

```
USAGE
  $ mobxcli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for mobxcli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `mobxcli plugins`

List installed plugins.

```
USAGE
  $ mobxcli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ mobxcli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `mobxcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mobxcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ mobxcli plugins add

EXAMPLES
  $ mobxcli plugins:install myplugin 

  $ mobxcli plugins:install https://github.com/someuser/someplugin

  $ mobxcli plugins:install someuser/someplugin
```

## `mobxcli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ mobxcli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ mobxcli plugins:inspect myplugin
```

## `mobxcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mobxcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ mobxcli plugins add

EXAMPLES
  $ mobxcli plugins:install myplugin 

  $ mobxcli plugins:install https://github.com/someuser/someplugin

  $ mobxcli plugins:install someuser/someplugin
```

## `mobxcli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ mobxcli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ mobxcli plugins:link myplugin
```

## `mobxcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mobxcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mobxcli plugins unlink
  $ mobxcli plugins remove
```

## `mobxcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mobxcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mobxcli plugins unlink
  $ mobxcli plugins remove
```

## `mobxcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mobxcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mobxcli plugins unlink
  $ mobxcli plugins remove
```

## `mobxcli plugins update`

Update installed plugins.

```
USAGE
  $ mobxcli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `mobxcli resource [FILE]`

describe the command here

```
USAGE
  $ mobxcli resource [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ mobxcli resource
```

_See code: [dist/commands/resource.ts](https://github.com/iamirzashowvik/mobxcli/blob/v1.0.2/dist/commands/resource.ts)_
<!-- commandsstop -->
