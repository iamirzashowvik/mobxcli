import {Command, Flags} from '@oclif/core'
import {existsSync, mkdirSync, writeFileSync} from 'node:fs'

export default class Resource extends Command {
  static description = 'describe the command here'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Resource)

    const name = flags.name ?? 'world'
    const dirs = [
      './components', // 0
      './components/app', // 1
      './components/app/' + args.file, // 2
      './components/app/' + args.file + '/controller', // 3
      './components/app/' + args.file + '/model', // 4
      './components/app/' + args.file + '/view', // 5
      './components/app/' + args.file + '/service', // 6
      // './components/app/' + args.file + '/controller/' + args.file + '.controller.ts', // 7
      // './components/app/' + args.file + '/model/' + args.file + '.model.ts', // 8
      // './components/app/' + args.file + '/view/' + args.file + '.view.tsx', // 9
      // './components/app/' + args.file + '/service/' + args.file + '.service.ts', // 10
    ]

    for (const dir of dirs) {
      if (!existsSync(dir)) {
        mkdirSync(dir)
      }
    }

    const content = ` import { observable } from "mobx";
    export class ${args.file} {
      @observable value: number = 12;
    }`

    this.log(`hello ${name} from /Users/faysal/AndroidStudioProjects/R&D/mobxcli/src/commands/resource.ts and args: ${args.file}`)
    writeFileSync(dirs[4]  + '/' + args.file + '.model.ts', content)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
