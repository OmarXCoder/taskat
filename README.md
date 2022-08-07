# Taskat

CLI tool for managing TODOs locally on your machine

## Installation

```bash
npm install -g taskat
```

## Usage

Usage: `taskat [options] [command]`

Options:

```
  -V, --version         output the version number
  -h, --help            display help for command
```

Commands:

```
  list [options]               Show a list of the TODO tasks
  add [options] <task>         Add a new TODO task
  done [options] [tasks...]    Mark one task or more as done
  undone [options] [tasks...]  Mark one task or more as undone
  del <tasks...>               Delete tasks from the TODOs list
  clear [options]              Clear tasks
```

## Commands

### List Command

Usage: `taskat list [options]`

Show a list of the TODO tasks

Options:

```
  -d, --done    Only show the done tasks (default: false)
  -u, --undone  Only show the undone tasks (default: false)
```

### Add Command

Usage: `taskat add [options] <task>`

Add a new TODO task

Arguments:

```
  task        the task text
```

Options:

```
  -d, --done  Mark the task as done (default: false)
  -l, --list  List all tasks after adding (default: false)
```

### Done Command

Usage: `taskat done [options] [tasks...]`

Mark one task or more as done

Arguments:

```
  tasks       The numeric tasks IDs to be marked done.
```

Options:

```
  -a, --all   Mark all tasks as done (default: false)
```

### Undone Command

Usage: `taskat undone [options] [tasks...]`

Mark one task or more as undone

Arguments:

```
  tasks       The numeric tasks IDs to be marked undone.
```

Options:

```
  -a, --all   Mark all tasks as undone (default: false)
```

### Del Command

Usage: `taskat del [options] <tasks...>`

Delete tasks from the TODOs list

Arguments:

```
  tasks       The numeric tasks IDs to be deleted.
```

### Clear Command

Usage: `taskat clear [options]`

Clear tasks

Options:

```
  -a, --all   Delete all tasks including incomplete ones (default: false)
```
